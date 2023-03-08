import {React} from 'react';
import { useLocation, useNavigate } from 'react-router';
import { auth} from "../../../services/firebaseConfig";
import { 
  signOut
} from "firebase/auth";


export const Welcome = () => {
  const location = useLocation();
  const email = location.state?.email;
const navigate = useNavigate();


 
  
  const logout = async () => {
    await signOut(auth);
    navigate('/');
  };

 
  return (
   
    <div className='container'>
      <h1>Bem vindo(a)</h1>
      <p>Você fez login com o e-mail: {email}</p>
      <button className='logout' onClick={logout}> Sair </button>
      
    </div>
  );
};

