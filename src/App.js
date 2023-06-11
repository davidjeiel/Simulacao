import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormCalculo } from './components/FormCalculo';

export default function App() {
  
  return (
    <div className="container-fluid pt-5">
      <div className='card '>
        <div className='card-header text-bg-dark'>
          <h2 className='text-center text-uppercase'>
            Simulação de crédito
          </h2>
        </div>
        <div className='card-body text-bg-dark'>
          <FormCalculo />
        </div>
      </div>
    </div>
  );
}

