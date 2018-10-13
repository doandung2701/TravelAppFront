import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Tour from './tour';
import TourDetail from './tour-detail';
import TourUpdate from './tour-update';
import TourDeleteDialog from './tour-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TourUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TourUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TourDetail} />
      <ErrorBoundaryRoute path={match.url} component={Tour} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={TourDeleteDialog} />
  </>
);

export default Routes;
