import styled from 'styled-components';

import background from '../../assets/images/background/nigth.png';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  gap: 64px;
  width: 100%;
  height: 1080px;
  padding: 24px;
  background: var(--Base-Gray-900, #13131A);

  @media (max-width: 1200px) {
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }
`;
export const DeshContainer = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
margin-top: 24px;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;

`;
export const DetailsWeather = styled.div`
margin-top: 24px;
width: 630px;
height: 398px;
padding: 28px 24px 8px 24px;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
gap: 20px;
border-radius: 12px;
background: var(--Base-Gray-800, #16161F);


h2{
color: var(--Base-Gray-400, #7F7F98);
font-size: 16px;
font-weight: 400;
line-height: 140%;
padding-bottom: 8px;
}


@media (max-width: 802px) {
  width: 100%;
  text-align: center;
}

`;

export const ContainerInfo = styled.div`
display: flex;
padding: 16px 0px;
justify-content: space-between;
align-items: center;
align-self: stretch;
border-bottom: 1px solid var(--Base-Gray-700, #1C1C27);

p{
  color: var(--Base-Gray-200, #BFBFD4);
   text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 140%;
}
span{
color: var(--Base-Gray-100, #FAFAFA);
font-size: 20px;
font-weight: 700;
line-height: 140%;
}
`;

export const LogoContainer = styled.div`
display: flex;
width: 56px;
height: 56px;
padding: 8px;
justify-content: center;
align-items: center;
border-radius: 8px;
background: var(--Base-Gray-600, #1E1E29);
`;

export const BackgroundImageContainer = styled.div`
width: 632px;
height: 616px;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 600px;
margin-top: 16px;
background-size: 102%;
background-image: url(${background});
background-position: top center;
border-radius: 8px;

@media (max-width: 814px) {
  align-items: center;
  width: 100%;
  height: 400px;
  background-size: 140%;
  background-position:  center;
}
`;

export const WeatherCity = styled.div`
margin-top: 32px;
padding: 0 32px;
display: flex;
justify-content: space-between;
span{
color: var(--Base-Gray-100, #FAFAFA);
text-align: center;
font-size: 20px;
font-weight: 700;
line-height: 140%;
}

div{
  h2{
    color: var(--Base-Gray-100, #FAFAFA);
    font-size: 20px;
    font-weight: 700;
    line-height: 140%;
    margin-bottom: 8px;
  }
  span{
    color: var(--Base-Gray-100, #FAFAFA);
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
  }
}
`;

export const WeatherTemperature = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div{
    padding: 0 32px;
    h3{
    color: var(--Base-White, #FFF);

    font-size: 96px;

    font-weight: 800;
    line-height: 100%;

    @media (max-width: 814px) {
      font-size: 39px;
      margin-bottom: 8px;
      }
    }
    p{
      color: var(--Base-White, #FFF);

      font-size: 20px;

      font-weight: 400;
      line-height: 140%;
    }
  }

  img{
    width: 250px;
    height: 250px;


    @media (max-width: 814px) {
      width: 150px;
    height: 150px;
      }
  }
`;
