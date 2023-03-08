import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { auth} from "../../../services/firebaseConfig";
import { useNavigate } from "react-router-dom";





export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({});

 
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

}, [])


  async function handleSignIn(e) {
    e.preventDefault();
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(user); 
        navigate('/welcome', { state: { email } });
    
      } catch (error) {
        console.log(error.message);
        alert("Email e/ou senha incorretos")
      }
    };
    
 
   

  return (
    <div className="container">
      <header className="header">
        <span>Digite suas informações de login</span>
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
        


        <button className="button" onClick={handleSignIn}>
          Entrar
        </button> 
        <div className="footer">
          <p>Você não tem uma conta?</p>
          <Link to="/signup">Criar conta</Link>
        </div>
      </form>
    </div>
  );
  }