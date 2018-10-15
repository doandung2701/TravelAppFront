import React, { Component } from 'react';

class Tour extends Component {
    render() {
        return (
            <div className="item">
                <div className="box_grid">
                    <figure>
                        <a href="google.com" className="wish_bt" aria-hidden={true} />
                        <a href="tour-detail.html"><img src="img/tour_1.jpg" className="img-fluid" alt="Detail" width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                        <small>Historic</small>
                    </figure>
                    <div className="wrapper">
                        <h3><a href="tour-detail.html">Arc Triomphe</a></h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                        <span className="price">From <strong>$54</strong> /per person</span>
                    </div>
                    <ul>
                        <li><i className="icon_clock_alt" /> 1h 30min</li>
                        <li><div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default Tour;