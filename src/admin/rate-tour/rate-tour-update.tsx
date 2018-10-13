import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ITour } from 'app/shared/model/tour.model';
import { getEntities as getTours } from 'app/entities/tour/tour.reducer';
import { getEntity, updateEntity, createEntity, reset } from './rate-tour.reducer';
import { IRateTour } from 'app/shared/model/rate-tour.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IRateTourUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IRateTourUpdateState {
  isNew: boolean;
  tourId: string;
}

export class RateTourUpdate extends React.Component<IRateTourUpdateProps, IRateTourUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
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

    this.props.getTours();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { rateTourEntity } = this.props;
      const entity = {
        ...rateTourEntity,
        ...values
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
    this.props.history.push('/entity/rate-tour');
  };

  render() {
    const { rateTourEntity, tours, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travelwebApp.rateTour.home.createOrEditLabel">
              <Translate contentKey="travelwebApp.rateTour.home.createOrEditLabel">Create or edit a RateTour</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : rateTourEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="rate-tour-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="rateLabel">
                    <Translate contentKey="travelwebApp.rateTour.rate">Rate</Translate>
                  </Label>
                  <AvInput
                    id="rate-tour-rate"
                    type="select"
                    className="form-control"
                    name="rate"
                    value={(!isNew && rateTourEntity.rate) || 'ONE'}
                  >
                    <option value="ONE">
                      <Translate contentKey="travelwebApp.RATE.ONE" />
                    </option>
                    <option value="TWO">
                      <Translate contentKey="travelwebApp.RATE.TWO" />
                    </option>
                    <option value="THREE">
                      <Translate contentKey="travelwebApp.RATE.THREE" />
                    </option>
                    <option value="FOUR">
                      <Translate contentKey="travelwebApp.RATE.FOUR" />
                    </option>
                    <option value="FIVE">
                      <Translate contentKey="travelwebApp.RATE.FIVE" />
                    </option>
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/rate-tour" replace color="info">
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
  tours: storeState.tour.entities,
  rateTourEntity: storeState.rateTour.entity,
  loading: storeState.rateTour.loading,
  updating: storeState.rateTour.updating
});

const mapDispatchToProps = {
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
)(RateTourUpdate);
