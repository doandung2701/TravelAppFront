import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { openFile, byteSize, Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './gallery.reducer';
import { IGallery } from 'app/shared/model/gallery.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IGalleryProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class Gallery extends React.Component<IGalleryProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { galleryList, match } = this.props;
    return (
      <div>
        <h2 id="gallery-heading">
          <Translate contentKey="travelwebApp.gallery.home.title">Galleries</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp;
            <Translate contentKey="travelwebApp.gallery.home.createLabel">Create new Gallery</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="travelwebApp.gallery.picture">Picture</Translate>
                </th>
                <th>
                  <Translate contentKey="travelwebApp.gallery.location">Location</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {galleryList.map((gallery, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${gallery.id}`} color="link" size="sm">
                      {gallery.id}
                    </Button>
                  </td>
                  <td>
                    {gallery.picture ? (
                      <div>
                        <a onClick={openFile(gallery.pictureContentType, gallery.picture)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                          &nbsp;
                        </a>
                        <span>
                          {gallery.pictureContentType}, {byteSize(gallery.picture)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>{gallery.locationName ? <Link to={`location/${gallery.locationId}`}>{gallery.locationName}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${gallery.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${gallery.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${gallery.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ gallery }: IRootState) => ({
  galleryList: gallery.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);