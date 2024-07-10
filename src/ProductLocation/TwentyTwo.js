import React from 'react';
import ModelTwentyTwo from '../3DModels/ModelTwentyTwo';
import Legend from './Legend';
import Header from '../components/header';
import './Wayfinding.css'

const TwentyTwoLoc = () => {
  return (
    <>
      <div>
        <Header header="ARShopper" headerright="ICHI MART" headersub="©" />
      </div>

      <div>
        <h1 className="way-legend">LEGEND:</h1>
        <Legend />
        <ModelTwentyTwo />
      </div>
    </>
  );
};

export default TwentyTwoLoc;
