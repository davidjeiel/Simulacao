import React, { useState, useEffect } from 'react';
import './style.css';
import { Row, Col, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Calcula } from './components/Calcula';
import { Itau } from './components/Itau'

export default function App() {
  const apiKey = 'SUA_CHAVE_DE_API';
  const url = 'URL_DA_API'; // Substitua pela URL real da API

  const [credito, setCredito] = useState(0);
  const [prazo, setPrazo] = useState(0);
  const [listaProdutos, setListaProdutos] = useState([]);
  const [simulacao, setSimulacao  ] = useState();

  const handleCredito = (valor) => {
    setCredito(valor);
    console.debug(credito);
  };

  const handlePrazo = (valor) => {
    setPrazo(valor);
  };

  const consultarCredito = async (credito, prazo) => {

    //setSimulacao( <Calcula valor={credito} prazo={prazo} taxa={0.05} /> ) 
  };

  // useEffect(()=>{
  //   setSimulacao( <Calcula  /> )
  // }, [ listaProdutos ])


  consultarCredito(credito, prazo);

  return (
    <div className='container-fluid pt-5'>
      <Row>
        <Col md={4}>
          <label>Credito</label>
          <FormControl onChange={(e) => handleCredito(e.target.value)} />
        </Col>
        <Col md={4}>
          <label>Prazo</label>
          <FormControl onChange={(e) => handlePrazo(e.target.value)} />
        </Col>
        <Col md={4} style={{ paddingTop: '2.5%' }}>
          <Button
            variant="success"
            onClick={() => consultarCredito(credito, prazo)}
          >
            Simular
          </Button>
        </Col>
      </Row>
      <Row>
        <Itau />
        <Calcula valor={credito} prazo={prazo} taxa={'0.05'} />
      </Row>  
    </div>
  );
}