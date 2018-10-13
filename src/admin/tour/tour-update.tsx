import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IRateTour } from 'app/shared/model/rate-tour.model';
import { getEntities as getRateTours } from 'app/entities/rate-tour/rate-tour.reducer';
import { ILocation } from 'app/shared/model/location.model';
import { getEntities as getLocations } from 'app/entities/location/location.reducer';
import { IVehicle } from 'app/shared/model/vehicle.model';
import { getEntities as getVehicles } from 'app/entities/vehicle/vehicle.reducer';
import { getEntity, updateEntity, createEntity, reset } from './tour.reducer';
import { ITour } from 'app/shared/model/tour.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ITourUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface ITourUpdateState {
  isNew: boolean;
  idsrateTour: any[];
  idslocation: any[];
  vehicleId: string;
}

export class TourUpdate extends React.Component<ITourUpdateProps, ITourUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      idsrateTour: [],
      idslocation: [],
      vehicleId: '0',
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentDidMount() {
    if (!this.state.isNew) {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getRateTours();
    this.props.getLocations();
    this.props.getVehicles();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { tourEntity } = this.props;
      const entity = {
        ...tourEntity,
        ...values,
        rateTours: mapIdList(values.rateTours),
        locations: mapIdList(values.locations)
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
    this.props.history.push('/entity/tour');
  };

  render() {
    const { tourEntity, rateTours, locations, vehicles, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travelwebApp.tour.home.createOrEditLabel">
              <Translate contentKey="travelwebApp.tour.home.createOrEditLabel">Create or edit a Tour</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : tourEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="tour-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="nameLabel" for="name">
                    <Translate contentKey="travelwebApp.tour.name">Name</Translate>
                  </Label>
                  <AvField
                    id="tour-name"
                    type="text"
                    name="name"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="priceLabel" for="price">
                    <Translate contentKey="travelwebApp.tour.price">Price</Translate>
                  </Label>
                  <AvField
                    id="tour-price"
                    type="text"
                    name="price"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="maximumPeopleLabel" for="maximumPeople">
                    <Translate contentKey="travelwebApp.tour.maximumPeople">Maximum People</Translate>
                  </Label>
                  <AvField
                    id="tour-maximumPeople"
                    type="string"
                    className="form-control"
                    name="maximumPeople"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="freeSpaceLabel" for="freeSpace">
                    <Translate contentKey="travelwebApp.tour.freeSpace">Free Space</Translate>
                  </Label>
                  <AvField
                    id="tour-freeSpace"
                    type="string"
                    className="form-control"
                    name="freeSpace"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="statusLabel" check>
                    <AvInput id="tour-status" type="checkbox" className="form-control" name="status" />
                    <Translate contentKey="travelwebApp.tour.status">Status</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label for="rateTours">
                    <Translate contentKey="travelwebApp.tour.rateTour">Rate Tour</Translate>
                  </Label>
                  <AvInput
                    id="tour-rateTour"
                    type="select"
                    multiple
                    className="form-control"
                    name="rateTours"
                    value={tourEntity.rateTours && tourEntity.rateTours.map(e => e.id)}
                  >
                    <option value="" key="0" />
                    {rateTours
                      ? rateTours.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="locations">
                    <Translate contentKey="travelwebApp.tour.location">Location</Translate>
                  </Label>
                  <AvInput
                    id="tour-location"
                    type="select"
                    multiple
                    className="form-control"
                    name="locations"
                    value={tourEntity.locations && tourEntity.locations.map(e => e.id)}
                  >
                    <option value="" key="0" />
                    {locations
                      ? locations.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="vehicle.name">
                    <Translate contentKey="travelwebApp.tour.vehicle">Vehicle</Translate>
                  </Label>
                  <AvInput id="tour-vehicle" type="select" className="form-control" name="vehicleId">
                    <option value="" key="0" />
                    {vehicles
                      ? vehicles.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.name}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/tour" replace color="info">
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
  rateTours: storeState.rateTour.entities,
  locations: storeState.location.entities,
  vehicles: storeState.vehicle.entities,
  tourEntity: storeState.tour.entity,
  loading: storeState.tour.loading,
  updating: storeState.tour.updating
});

const mapDispatchToProps = {
  getRateTours,
  getLocations,
  getVehicles,
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
)(TourUpdate);
