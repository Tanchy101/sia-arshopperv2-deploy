import React, { useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import './Products.css';
import ProductFetcher from '../components/ProductFetcher';
import ProductRenderer from '../components/ProductRenderer';

function Condiments () {
    const apiUrl = 'https://localhost:8000/api/condiments/';

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
        <ProductFetcher apiUrl={apiUrl}>
            <ProductRenderer categoryTitle="CONDIMENTS"/>
        </ProductFetcher>
    );
}

export default Condiments;