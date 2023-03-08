import { useState } from "react";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../services/firebaseConfig";



export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  
  

  async function handleCreateUser(e) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(user);
      } catch (error) {
        console.log(error.message);
        alert("Email e/ou senha inválidos")
      }
    };

  return (
    <div className="container">
      <header className="header">
        <span>Digite suas informações de cadastro</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="exemplo@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
       

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
       

        <button onClick={handleCreateUser} className="button">
          Cadastrar
        </button>
        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/">Acessar conta</Link>
        </div>
      </form>
    </div>
  );
} 