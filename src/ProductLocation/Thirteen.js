import ModelThirteen from '../3DModels/ModelThirteen';
import Legend from './Legend';
import Header from '../components/header';
import './Wayfinding.css'
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';


const ThirteenLoc = () => {

  useEffect(() => {
    const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
    };
}, []);
  return (
    <>
      <div>
        <Header header={<Link to ="/category" className="products-back">BACK</Link>} headersub="&nbsp;" headerright="LOCATION" />
      </div>

      <div>
        <h1 className="way-legend">LEGEND:</h1>
        <Legend />
        <ModelThirteen />
      </div>
    </>
  );
};

export default ThirteenLoc;
