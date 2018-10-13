import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './rate-tour.reducer';
import { IRateTour } from 'app/shared/model/rate-tour.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IRateTourDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class RateTourDetail extends React.Component<IRateTourDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { rateTourEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travelwebApp.rateTour.detail.title">RateTour</Translate> [<b>{rateTourEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="rate">
                <Translate contentKey="travelwebApp.rateTour.rate">Rate</Translate>
              </span>
            </dt>
            <dd>{rateTourEntity.rate}</dd>
          </dl>
          <Button tag={Link} to="/entity/rate-tour" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/rate-tour/${rateTourEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ rateTour }: IRootState) => ({
  rateTourEntity: rateTour.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RateTourDetail);
