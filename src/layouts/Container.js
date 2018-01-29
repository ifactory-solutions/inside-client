import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from '../components/loader/Loader';
import {
  pageStartLoadingAction,
  pageStopLoadingAction,
} from './actions/pageActions';
import { hasToken } from '../utils/token';

import './index.css';

function redirectToLogin(location) {
  return (
    <Redirect
      to={{
        pathname: '/login',
        state: {
          from: location,
        },
      }}
    />
  );
}

function shouldRedirect(path) {
  return !hasToken() && path !== '/login';
}

class ContainerLayout extends React.Component {
  constructor(props) {
    super(props);

    this.renderContainer = this.renderContainer.bind(this);
  }

  renderContainer(matchProps) {
    const { loading, parent: ParentLayout, component } = this.props;
    const { currentPath } = this.props.location.pathname;

    if (shouldRedirect(currentPath)) {
      redirectToLogin(matchProps.location);
    }

    return (
      <div style={{ height: '100%' }}>
        <Loader loading={loading} fullScreen />
        {!loading && (
          <ParentLayout {...matchProps} innerComponent={component} />
        )}
      </div>
    );
  }

  render() {
    const { loading, type, component, ...rest } = this.props; //eslint-disable-line
    return <Route {...rest} render={this.renderContainer} />;
  }
}

ContainerLayout.propTypes = {
  loading: PropTypes.bool.isRequired,
  parent: PropTypes.instanceOf(React.Component).isRequired,
  component: PropTypes.instanceOf(React.Component).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

function mapStateToProps({ page }) {
  return {
    loading: page.loading,
  };
}

const connectedPage = connect(mapStateToProps, {
  pageStartLoadingAction,
  pageStopLoadingAction,
})(ContainerLayout);

export default withRouter(connectedPage);
