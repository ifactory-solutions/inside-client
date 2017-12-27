import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Icon } from 'antd';
import pathToRegexp from 'path-to-regexp';
import { Link, withRouter } from 'react-router-dom';
import menus from '../../mock/menu';
import { queryArray } from '../../utils';

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const Bread = ({ location }) => {
  let pathArray = []; // eslint-disable-line
  let current;

  for (let index in menus) { // eslint-disable-line
    if (menus[index].route && // eslint-disable-line
      pathToRegexp(menus[index].route).exec(location.pathname)) {
      current = menus[index];
      break;
    }
  }

  const getPathArray = item => {
    // add item at the beginning of the array
    pathArray.unshift(item);
    if (item.bpid) {
      getPathArray(queryArray(menus, item.bpid, 'id'));
    }
  };

  let paramMap = {}; // eslint-disable-line
  if (!current) {
    pathArray.push(menus[0] || {
      id: 1,
      icon: 'laptop',
      name: 'Dashboard',
    });
    pathArray.push({
      id: 404,
      name: 'Not Found',
    });
  } else {
    getPathArray(current);

    let keys = []; // eslint-disable-line
    let values = pathToRegexp(current.route, keys) // eslint-disable-line
    .exec(location.pathname.replace('#', '')); // eslint-disable-line
    if (keys.length) {
      keys.forEach((currentValue, index) => {
        if (typeof currentValue.name !== 'string') {
          return;
        }
        paramMap[currentValue.name] = values[index + 1];
      });
    }
  }

  const breads = pathArray.map((item, key) => {
    const content = (
      <span>{item.icon
        ? <Icon type={item.icon} style={{ marginRight: 4 }} />
        : ''}{item.name}</span>
    );
    return (
      <Breadcrumb.Item key={key}>
        {((pathArray.length - 1) !== key)
          ? <Link to={pathToRegexp.compile(item.route || '')(paramMap) || '#'}>
            {content}
          </Link>
          : content}
      </Breadcrumb.Item>
    );
  });

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {breads}
    </Breadcrumb>
  );
};

Bread.propTypes = {
  location: PropTypes.isRequired,
};

Bread.DefaultTypes = {
  location: {},
};

export default withRouter(Bread);
