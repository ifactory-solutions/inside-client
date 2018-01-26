import React from 'react';

import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from '../components/loader/Loader';
import {
  pageStartLoadingAction,
  pageStopLoadingAction,
} from './actions/pageActions';

import PageLayout from './Page';

import './index.css';

class ContainerLayout extends React.Component {
  render() {
    const { loading, component, ...rest } = this.props; //eslint-disable-line
    const renderComponent = matchProps => (
      <div>
        <Loader loading={loading} fullScreen />
        {!loading && <PageLayout {...matchProps} innerComponent={component} />}
      </div>
    );

    return <Route {...rest} render={renderComponent} />;
  }
}

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
