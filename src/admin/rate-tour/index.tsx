import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import RateTour from './rate-tour';
import RateTourDetail from './rate-tour-detail';
import RateTourUpdate from './rate-tour-update';
import RateTourDeleteDialog from './rate-tour-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={RateTourUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={RateTourUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={RateTourDetail} />
      <ErrorBoundaryRoute path={match.url} component={RateTour} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={RateTourDeleteDialog} />
  </>
);

export default Routes;
