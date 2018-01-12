import React from 'react';
import { Row, Col, Button } from 'antd';
import PropTypes from 'prop-types';

const ROW_STYLE = {
  marginTop: 16,
  marginBottom: 16,
};

export default class EmployeeListHeader extends React.Component {
  constructor(props) {
    super(props);

    this.onToggleVisualization = this.onToggleVisualization.bind(this);
  }

  onToggleVisualization() {
    this.props.toggleVisualization();
  }

  render() {
    return (
      <Row type="flex" justify="space-between" align="center" style={ROW_STYLE}>
        <Col>
          <Button
            type="default"
            shape="circle"
            icon={this.props.showAsTable ? 'bars' : 'appstore-o'}
            onClick={this.onToggleVisualization}
          />
        </Col>

        <Col>
          <Button
            type="primary"
            onClick={() => {
              this.props.history.push('/employees/new');
            }}
          >
            Novo Colaborador
          </Button>
        </Col>
      </Row>
    );
  }
}

EmployeeListHeader.propTypes = {
  showAsTable: PropTypes.bool.isRequired,
  toggleVisualization: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};
