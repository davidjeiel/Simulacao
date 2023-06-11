import React, { useEffect, useState } from 'react';

export const Itau = (params)=>{
  const [dados, setDados] = useState([]);

  useEffect(() => {
    capturaApi();
  }, []);

  const capturaApi = async () => {
    let retorno = await fetch(
      'https://api.itau/open-banking/products-services/v1/personal-financings'
    );
    await console.debug(JSON.parse(retorno));
  };

  return (
    <>
    <h3>
      {params.titulo}
    </h3>

      {
        retorno.map((dados) => {
          return(
             <p>{dados.name}</p>
          )
        })
      }
    </>
  );
}
