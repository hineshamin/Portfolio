import React, { Component } from 'react';
import './WorkLines.css';

class WorkLines extends Component {
  render() {
    return (
      <svg viewBox="0 0 1450 10000" className="row">
        <path
          stroke="#00BD7B"
          fill="none"
          strokeWidth="2"
          d="M1248,95 L254.063779,410.023245 C198.020941,428.691289 165.713893,441.025533 157.142635,447.025975 C148.571377,453.026418 144.945076,459.693577 146.263731,467.027451 L146.263731,10000"
          fillRule="nonzero"
          transform="translate(205,0)"
        />
        <path
          d="M1248,0 L402.236908,395 C345.234169,423.666667 313.030513,441 305.625942,447 C298.221371,453 295.088668,459.666667 296.227833,467 L305.11631,10000"
          stroke="#C050FF"
          fillRule="nonzero"
          fill="none"
          strokeWidth="2"
          transform="translate(205,0)"
        />
        <path
          stroke="#43E0FF"
          strokeWidth="2"
          strokeLinejoin="bevel"
          fill="none"
          transform="translate(205, 136)"
          d="M1248,0 L48.0874062,296 C25.4705752,302.49428 11.804904,307.827613 7.0903926,312 C2.37588117,316.172387 0.0427177951,324.50572 0.0909024692,337 L0.0901712355,9864"
        />
      </svg>
    );
  }
}

export default WorkLines;
