import React, { Component } from 'react';

const Result =({img,header,content})=>
<div className="col-lg-4 col-md-6">
  <a className="box_feat">
    <i className={img} />
    <h3>{header}</h3>
    <p>{content}</p>
  </a>
</div>


export default Result;