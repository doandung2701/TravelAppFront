import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './vehicle-type.reducer';
import { IVehicleType } from 'app/shared/model/vehicle-type.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IVehicleTypeDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class VehicleTypeDetail extends React.Component<IVehicleTypeDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { vehicleTypeEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travelwebApp.vehicleType.detail.title">VehicleType</Translate> [<b>{vehicleTypeEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="name">
                <Translate contentKey="travelwebApp.vehicleType.name">Name</Translate>
              </span>
            </dt>
            <dd>{vehicleTypeEntity.name}</dd>
            <dt>
              <span id="price">
                <Translate contentKey="travelwebApp.vehicleType.price">Price</Translate>
              </span>
            </dt>
            <dd>{vehicleTypeEntity.price}</dd>
          </dl>
          <Button tag={Link} to="/entity/vehicle-type" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/vehicle-type/${vehicleTypeEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ vehicleType }: IRootState) => ({
  vehicleTypeEntity: vehicleType.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleTypeDetail);
