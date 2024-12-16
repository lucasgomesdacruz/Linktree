import './App.scss';
import Perfil from "./assets/perfil.png"
import Button from './components/Button/Button';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";

function App() {
  
  return (
    <div className="background">
      <div className="dark">
        <header>
          <img src={Perfil} alt="Foto de perfil" />
          <h1>Software Developer</h1>
        </header>
        <main>
          <ul>
            <li>
              <Button href="https://zaion1997.vercel.app/" title="Portfólio" icon={<DiVisualstudio aria-label="Ícone Visual Studio"/>}/>
            </li>
            <li>
              <Button href="https://github.com/lucasgomesdacruz" title="GitHub" icon={<FaGithub aria-label="Ícone GitHub"/>}/>
            </li>
            <li>
              <Button href="https://www.linkedin.com/in/lucaass1997/" title="Linkedin" icon={<FaLinkedin aria-label="Ícone Linkedin"/>}/>
            </li>
          </ul>
        </main>
        <footer>
          <p>© 2024 Lucas Gomes - Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  )
  
}
export default App
