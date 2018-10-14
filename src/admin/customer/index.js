import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Customer from './customer';
import CustomerDetail from './customer-detail';
import CustomerUpdate from './customer-update';
import CustomerDeleteDialog from './customer-delete-dialog';

const CustomerPage = ({ match }) => 
    <div>
      <Switch>
      <Route exact path={`${match.url}/new`} component={CustomerUpdate} />
      <Route exact path={`${match.url}/:id/edit`} component={CustomerUpdate} />
      <Route exact path={`${match.url}/:id`} component={CustomerDetail} />
      <Route path={match.url} component={Customer} />
    </Switch>
    <Route path={`${match.url}/:id/delete`} component={CustomerDeleteDialog} />
    </div>

export default CustomerPage;
