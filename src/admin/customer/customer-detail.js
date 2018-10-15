import React from 'react';
import { connect } from 'react-redux';
import { getEntity } from './customer.reducer';


export class CustomerDetail extends React.Component {
  

  render() {
    // const { customerEntity } = this.props;
    return (
      <h1>Detal</h1>
    )
  }
}

const mapStateToProps = ({ customer }) => ({
  customerEntity: customer.entity
});

const mapDispatchToProps = { getEntity };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerDetail);
