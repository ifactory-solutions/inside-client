import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Divider } from 'antd';
import ProjectCard from '../../components/projectCard';

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const ListProjects = ({ history }) => {
  return (
    <div>
      <Row type="flex" justify="end">
        <Button
          type="primary"
          onClick={() => { history.push('/projects/new'); }}>
            Novo Projeto
        </Button>
      </Row>
      <Divider />
      <Row type="flex" justify="start">
        {[1, 2, 3, 4, 5].map(i => {
          return (
            <Col
              key={i}
              md={{ span: 24 }}
              lg={{ span: 12 }}
              xl={{ span: 8 }}
              style={{ marginBottom: '20px' }}>
              <ProjectCard />
            </Col>
          );
        })
        }
      </Row>
    </div>

  );
};

ListProjects.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line
};

export default ListProjects;
