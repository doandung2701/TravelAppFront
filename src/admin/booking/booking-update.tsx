import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ITicket } from 'app/shared/model/ticket.model';
import { getEntities as getTickets } from 'app/entities/ticket/ticket.reducer';
import { ICustomer } from 'app/shared/model/customer.model';
import { getEntities as getCustomers } from 'app/entities/customer/customer.reducer';
import { ITour } from 'app/shared/model/tour.model';
import { getEntities as getTours } from 'app/entities/tour/tour.reducer';
import { getEntity, updateEntity, createEntity, reset } from './booking.reducer';
import { IBooking } from 'app/shared/model/booking.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IBookingUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IBookingUpdateState {
  isNew: boolean;
  idsticket: any[];
  customerId: string;
  tourId: string;
}

export class BookingUpdate extends React.Component<IBookingUpdateProps, IBookingUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      idsticket: [],
      customerId: '0',
      tourId: '0',
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getTickets();
    this.props.getCustomers();
    this.props.getTours();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { bookingEntity } = this.props;
      const entity = {
        ...bookingEntity,
        ...values,
        tickets: mapIdList(values.tickets)
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
      this.handleClose();
    }
  };

  handleClose = () => {
    this.props.history.push('/entity/booking');
  };

  render() {
    const { bookingEntity, tickets, customers, tours, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travelwebApp.booking.home.createOrEditLabel">
              <Translate contentKey="travelwebApp.booking.home.createOrEditLabel">Create or edit a Booking</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : bookingEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="booking-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="noteLabel" for="note">
                    <Translate contentKey="travelwebApp.booking.note">Note</Translate>
                  </Label>
                  <AvField id="booking-note" type="text" name="note" />
                </AvGroup>
                <AvGroup>
                  <Label for="tickets">
                    <Translate contentKey="travelwebApp.booking.ticket">Ticket</Translate>
                  </Label>
                  <AvInput
                    id="booking-ticket"
                    type="select"
                    multiple
                    className="form-control"
                    name="tickets"
                    value={bookingEntity.tickets && bookingEntity.tickets.map(e => e.id)}
                  >
                    <option value="" key="0" />
                    {tickets
                      ? tickets.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="customer.name">
                    <Translate contentKey="travelwebApp.booking.customer">Customer</Translate>
                  </Label>
                  <AvInput id="booking-customer" type="select" className="form-control" name="customerId">
                    <option value="" key="0" />
                    {customers
                      ? customers.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.name}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="tour.name">
                    <Translate contentKey="travelwebApp.booking.tour">Tour</Translate>
                  </Label>
                  <AvInput id="booking-tour" type="select" className="form-control" name="tourId">
                    <option value="" key="0" />
                    {tours
                      ? tours.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.name}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/booking" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />&nbsp;
                  <span className="d-none d-md-inline">
                    <Translate contentKey="entity.action.back">Back</Translate>
                  </span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />&nbsp;
                  <Translate contentKey="entity.action.save">Save</Translate>
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  tickets: storeState.ticket.entities,
  customers: storeState.customer.entities,
  tours: storeState.tour.entities,
  bookingEntity: storeState.booking.entity,
  loading: storeState.booking.loading,
  updating: storeState.booking.updating
});

const mapDispatchToProps = {
  getTickets,
  getCustomers,
  getTours,
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingUpdate);
