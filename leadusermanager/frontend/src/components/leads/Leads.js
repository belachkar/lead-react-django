import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { getLeads } from '../../actions/leads';

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func
  };

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <div>
        <h1>Leads List</h1>
      </div>
    );
  }
}

const mapStateToProp = state => ({
  leads: state.leads.leads
});

export default connect(
  mapStateToProp,
  { getLeads }
)(Leads);
