import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';


export const Welcome = () => {
  const location = useLocation();
  const email = location.state?.email;



 
  return (
   
    <div className='container'>
      <h1>Bem vindo(a)</h1>
      <p>Você fez login com o e-mail: {email}</p>
      <Link to="/" className='logout'>Voltar para página de login</Link>
    </div>
  );
};

