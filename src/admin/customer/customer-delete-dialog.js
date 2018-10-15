import React from 'react';
import { connect } from 'react-redux';
import { getEntity, deleteEntity } from './customer.reducer';

export class CustomerDeleteDialog extends React.Component {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  confirmDelete = event => {
    this.props.deleteEntity(this.props.customerEntity.id);
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    // const { customerEntity } = this.props;
    return (
      <h1>Delete</h1>
    )
  }
}

const mapStateToProps = ({ customer }) => ({
  customerEntity: customer.entity
});

const mapDispatchToProps = { getEntity, deleteEntity };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerDeleteDialog);
