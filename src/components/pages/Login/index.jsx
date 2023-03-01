import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth} from "../../../services/firebaseConfig";
import { useNavigate } from "react-router-dom";





export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);



  async function handleSignIn(e) {
    e.preventDefault();
  
    if (!email) {
      setEmailError('O e-mail não foi preenchido');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError('E-mail inválido');
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError('A senha não foi preenchida');
    } else if (password.length < 6) {
      setPasswordError('A senha deve possuir no mínimo 6 caracteres');
    } else {
      setPasswordError(false)
    }


    if (!emailError && !passwordError) {
      try {
        await signInWithEmailAndPassword(email, password);
        navigate('/welcome', { state: { email } });
      } catch (error) {
        console.error('Error signing in:', error);
      }
    }
  
    }

  return (
    <div className="container">
      <header className="header">
        <h2>SpaceforStuff</h2>
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
        <div className="error">{emailError && <p>{emailError}</p>}</div>

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
        <div className="error">{passwordError && <p>{passwordError}</p>}</div>


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