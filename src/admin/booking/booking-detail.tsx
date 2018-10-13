import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './booking.reducer';
import { IBooking } from 'app/shared/model/booking.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IBookingDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class BookingDetail extends React.Component<IBookingDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { bookingEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travelwebApp.booking.detail.title">Booking</Translate> [<b>{bookingEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="note">
                <Translate contentKey="travelwebApp.booking.note">Note</Translate>
              </span>
            </dt>
            <dd>{bookingEntity.note}</dd>
            <dt>
              <Translate contentKey="travelwebApp.booking.ticket">Ticket</Translate>
            </dt>
            <dd>
              {bookingEntity.tickets
                ? bookingEntity.tickets.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.id}</a>
                      {i === bookingEntity.tickets.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
            <dt>
              <Translate contentKey="travelwebApp.booking.customer">Customer</Translate>
            </dt>
            <dd>{bookingEntity.customerName ? bookingEntity.customerName : ''}</dd>
            <dt>
              <Translate contentKey="travelwebApp.booking.tour">Tour</Translate>
            </dt>
            <dd>{bookingEntity.tourName ? bookingEntity.tourName : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/booking" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/booking/${bookingEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ booking }: IRootState) => ({
  bookingEntity: booking.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingDetail);
