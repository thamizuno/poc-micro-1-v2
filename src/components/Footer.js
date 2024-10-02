import { FooterStyled } from './styles/FooterStyled';
import { TitleH1 } from "./styles/TitleStyled";

export const FooterComponent = ({title}) => {
  return (
    <FooterStyled>
      <TitleH1>{title}</TitleH1>
    </FooterStyled>
  );
};

