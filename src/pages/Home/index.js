import { useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {
  BackgroundImg, Container, ContainerContent, InputContainer,
} from './styles';

import icon from '../../assets/images/icons/phosporIcons/Icons.png';

export default function Home() {
  const [citys, setCitys] = useState('Santos');

  const handleCitysName = (event) => {
    setCitys(event.target.value);
  };

  return (
    <BackgroundImg>
      <Container>
        <Header />

        <ContainerContent>
          <h2>
            Boas vindas ao
            <span> TypeWeather</span>
          </h2>
          <p>Escolha um local para ver a previsão do tempo</p>
        </ContainerContent>
        <InputContainer>
          <Input type="text" placeholder="Buscar local" value={citys} onChange={handleCitysName} />
          {citys.length > 0 && <img src={icon} alt="" />}

        </InputContainer>
        <InputContainer>
          {citys.length > 10 && citys.map((item) => (
            <Input
              key={item.citys}
              type="text"
              citys
              placeholder={citys}
              disabled
            />
          ))}
        </InputContainer>
      </Container>

    </BackgroundImg>
  );
}
