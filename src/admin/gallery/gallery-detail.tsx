import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction, openFile, byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './gallery.reducer';
import { IGallery } from 'app/shared/model/gallery.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IGalleryDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class GalleryDetail extends React.Component<IGalleryDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { galleryEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travelwebApp.gallery.detail.title">Gallery</Translate> [<b>{galleryEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="picture">
                <Translate contentKey="travelwebApp.gallery.picture">Picture</Translate>
              </span>
            </dt>
            <dd>
              {galleryEntity.picture ? (
                <div>
                  <a onClick={openFile(galleryEntity.pictureContentType, galleryEntity.picture)}>
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {galleryEntity.pictureContentType}, {byteSize(galleryEntity.picture)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <Translate contentKey="travelwebApp.gallery.location">Location</Translate>
            </dt>
            <dd>{galleryEntity.locationName ? galleryEntity.locationName : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/gallery" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/gallery/${galleryEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ gallery }: IRootState) => ({
  galleryEntity: gallery.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryDetail);
