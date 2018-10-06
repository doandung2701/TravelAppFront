import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        return (
            <span className="magnific-gallery">
  <a href="img/gallery/tour_list_1.jpg" className="btn_photos" title="Photo title" data-effect="mfp-zoom-in">View photos</a>
  <a href="img/gallery/tour_list_2.jpg" title="Photo title" data-effect="mfp-zoom-in" />
  <a href="img/gallery/tour_list_3.jpg" title="Photo title" data-effect="mfp-zoom-in" />
</span>
        );
    }
}

export default Gallery;