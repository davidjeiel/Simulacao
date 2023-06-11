import React, { useState, useEffect } from 'react';
import './style.css';
import { Row, Col, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Calcula } from './components/Calcula';

export default function App() {
  const [credito, setCredito] = useState(0);
  const [prazo, setPrazo] = useState(0);
  const [listaProdutos, setListaProdutos] = useState([]);
  const [simulacao, setSimulacao] = useState();

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

  consultarCredito(credito, prazo);

  return (
    <div className="container-fluid pt-5">
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
        <Calcula valor={credito} prazo={prazo} taxa={'0.05'} />
      </Row>
    </div>
  );
}

export const Itau = (params) => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    capturaApi();
  }, []);

  const capturaApi = async () => {
    let retorno = await fetch(
      'https://api.itau/open-banking/products-services/v1/personal-financings'
    );
    await setDados(JSON.parse(retorno));
    await console.debug(JSON.parse(retorno));
  };

  return (
    <>
      <h3>{params.titulo}</h3>

      {retorno.map((dados) => {
        return <p>{dados.name}</p>;
      })}
    </>
  );
};
