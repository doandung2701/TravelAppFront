import React, { Component } from 'react';

class Hotel extends Component {
    render() {
        return (
            <div className="col-xl-3 col-lg-6 col-md-6">
  <a href="hotel-detail.html" className="grid_item">
    <figure>
      <div className="score"><strong>8.9</strong></div>
      <img src="img/hotel_1.jpg" className="img-fluid" alt="" />
      <div className="info">
        <div className="cat_star"><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /></div>
        <h3>Mariott Hotel</h3>
      </div>
    </figure>
  </a>
</div>

        );
    }
}

export default Hotel;