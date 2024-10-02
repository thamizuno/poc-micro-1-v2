import './App.css';

import { HeaderComponent } from './components/Header'
import { FooterComponent } from './components/Footer'
import { TitleH1 } from './components/styles/TitleStyled';
import { 
  SucessButtonComponent,
  DangerButtonComponent
} from './components/Button'
import { 
  LabelStyled, 
  InputStyled
} from './components/styles/InputStyled'

function App () {
  return (
    <div className='App'>
      <HeaderComponent />
      <div>
        <TitleH1>Login</TitleH1>
        <form>
          <LabelStyled for='email'>E-mail: </LabelStyled>
          <InputStyled type='email' id='email' name='email' /><br /><br />

          <LabelStyled for='senha'>Senha: </LabelStyled>
          <InputStyled type='password' id='senha' name='senha' /><br /><br />

          <DangerButtonComponent label={'Cancelar'} />
          <SucessButtonComponent label={'Logar'} />
        </form>
        <br />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
