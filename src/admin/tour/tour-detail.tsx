import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './tour.reducer';
import { ITour } from 'app/shared/model/tour.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITourDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class TourDetail extends React.Component<ITourDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { tourEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travelwebApp.tour.detail.title">Tour</Translate> [<b>{tourEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="name">
                <Translate contentKey="travelwebApp.tour.name">Name</Translate>
              </span>
            </dt>
            <dd>{tourEntity.name}</dd>
            <dt>
              <span id="price">
                <Translate contentKey="travelwebApp.tour.price">Price</Translate>
              </span>
            </dt>
            <dd>{tourEntity.price}</dd>
            <dt>
              <span id="maximumPeople">
                <Translate contentKey="travelwebApp.tour.maximumPeople">Maximum People</Translate>
              </span>
            </dt>
            <dd>{tourEntity.maximumPeople}</dd>
            <dt>
              <span id="freeSpace">
                <Translate contentKey="travelwebApp.tour.freeSpace">Free Space</Translate>
              </span>
            </dt>
            <dd>{tourEntity.freeSpace}</dd>
            <dt>
              <span id="status">
                <Translate contentKey="travelwebApp.tour.status">Status</Translate>
              </span>
            </dt>
            <dd>{tourEntity.status ? 'true' : 'false'}</dd>
            <dt>
              <Translate contentKey="travelwebApp.tour.rateTour">Rate Tour</Translate>
            </dt>
            <dd>
              {tourEntity.rateTours
                ? tourEntity.rateTours.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.id}</a>
                      {i === tourEntity.rateTours.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
            <dt>
              <Translate contentKey="travelwebApp.tour.location">Location</Translate>
            </dt>
            <dd>
              {tourEntity.locations
                ? tourEntity.locations.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.id}</a>
                      {i === tourEntity.locations.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
            <dt>
              <Translate contentKey="travelwebApp.tour.vehicle">Vehicle</Translate>
            </dt>
            <dd>{tourEntity.vehicleName ? tourEntity.vehicleName : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/tour" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/tour/${tourEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ tour }: IRootState) => ({
  tourEntity: tour.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TourDetail);
