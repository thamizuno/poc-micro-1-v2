import { HeaderStyled } from './styles/HeaderStyled';
import { TitleH1 } from './styles/TitleStyled';

export const HeaderComponent = ({title}) => {
  return (
    <HeaderStyled>
      <TitleH1>{title}</TitleH1>
    </HeaderStyled>
  );
};

