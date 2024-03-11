import icon from '../../assets/images/icons/night.png';
import iconLogo from '../../components/Header/LogoIcon.svg';
import Input from '../../components/Input';
import {
  BackgroundImageContainer,
  Container, ContainerInfo, DeshContainer, DetailsWeather, Header, LogoContainer, WeatherCity,
  WeatherTemperature,
} from './styles';

import nuvem from '../../assets/images/icons/phosporIcons/nuvem.png';
import sum from '../../assets/images/icons/phosporIcons/sum.png';
import temperature from '../../assets/images/icons/phosporIcons/temperature.png';
import vento from '../../assets/images/icons/phosporIcons/vento.png';
import water from '../../assets/images/icons/phosporIcons/water.png';

export default function Deshboard() {
  return (
    <Container>
      <DeshContainer>
        <Header>
          <LogoContainer>
            <img src={iconLogo} alt="" />
          </LogoContainer>
          <Input placeholder="Buscar local" />
        </Header>
        <BackgroundImageContainer>
          <WeatherCity>
            <div>
              <h2>Porto Alegro, RS</h2>
              <span>Segunda-feira 15 de maio de 2024</span>
            </div>
            <span>21:39</span>
          </WeatherCity>
          <WeatherTemperature>
            <div>
              <h3>
                28
                <span>°c</span>
              </h3>
              <p>Poucas nuvens</p>
            </div>
            <img src={icon} alt="lua" />
          </WeatherTemperature>
        </BackgroundImageContainer>
      </DeshContainer>
      <DetailsWeather>
        <h2>Detalhes do clima</h2>
        <ContainerInfo>
          <img src={temperature} alt="" />
          <p>Sensação termica</p>
          <span>26°C</span>
        </ContainerInfo>
        <ContainerInfo>
          <img src={nuvem} alt="" />
          <p>Probabilidade de chuva</p>
          <span>0 %</span>
        </ContainerInfo>
        <ContainerInfo>
          <img src={vento} alt="" />
          <p>Velocidade do vento</p>
          <span>8 km/h</span>
        </ContainerInfo>
        <ContainerInfo>
          <img src={water} alt="" />
          <p>umidade do ar</p>
          <span>40%</span>
        </ContainerInfo>
        <ContainerInfo>
          <img src={sum} alt="" />
          <p>Ìndice UV</p>
          <span>5</span>
        </ContainerInfo>
      </DetailsWeather>
    </Container>
  );
}
