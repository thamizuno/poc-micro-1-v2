import { useNavigate } from 'react-router-dom';

import { ButtonStyled } from './styles/ButtonStyled';

export const WarningButtonComponent = ({label}) => {
  let navigate = useNavigate()

  let gotToNewPage = () => {
    navigate('/');
  }

  return (
    <ButtonStyled
      className='warning'
      onClick={() => gotToNewPage()}
    >
      {label}
    </ButtonStyled>
  );
};

export const SucessButtonComponent = ({label}) => {
  let navigate = useNavigate()

  let gotToNewPage=()=>{
    navigate('/blogs');
  }

  return (
    <ButtonStyled
      className='success'
      onClick={() => gotToNewPage()}
    >
      {label}
    </ButtonStyled>
  );
};

export const DangerButtonComponent = ({label}) => {
  let navigate = useNavigate()

  let gotToNewPage = () => {
    navigate('/contact');
}

  return (
    <ButtonStyled
      className='danger'
      onClick={() => gotToNewPage()}
    >
      {label}
    </ButtonStyled>
  );
};
