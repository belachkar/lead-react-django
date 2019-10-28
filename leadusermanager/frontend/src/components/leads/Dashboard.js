import React, { Fragment } from 'react';
import Form from './Form';
import Leads from './Leads';

export function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Leads />
    </Fragment>
  );
}

export default Dashboard;
