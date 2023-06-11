import React from 'react';

export default function listaItau()
{
  try {
    const response = await fetch("https://api.itau/open-banking/products-services/v1/personal-financings");

    if (!response.ok) {
      throw new Error('Erro na consulta da API');
    }

    const data = await response.json();
    // Manipule os dados da resposta conforme necessário

    console.log(data); // Exemplo: exibir dados no console
  } catch (error) {
    console.error(error);
  }
}