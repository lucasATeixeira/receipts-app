import React from 'react';

import {
  Container,
  BackgroundImageContainer,
  BackgroundImage,
  InfoContainer,
  Name,
  Portions,
  Dificulty,
  IngredientsContainer,
  IngredientTitle,
  Ingredient,
  PreparationContainer,
  PreparationTitle,
  Step,
  Number,
  IngredientIcon,
  PreparationIcon,
  Dot,
} from './styles';

import temp from '../../assets/temp.png';

export default function Receipt() {
  return (
    <Container>
      <BackgroundImageContainer>
        <BackgroundImage source={temp} resizeMode="contain" />
      </BackgroundImageContainer>
      <InfoContainer>
        <Name>Dedo de Polvo</Name>
        <Portions>Rende 10 porções</Portions>
        <Dificulty>Fácil</Dificulty>
      </InfoContainer>
      <IngredientsContainer>
        <IngredientIcon />
        <IngredientTitle>INGREDIENTES</IngredientTitle>
        <Ingredient>
          <Dot>.</Dot> Ovo
        </Ingredient>
        <Ingredient>
          <Dot>.</Dot> Dedo de polvo
        </Ingredient>
        <Ingredient>
          <Dot>.</Dot> Leite
        </Ingredient>
        <Ingredient>
          <Dot>.</Dot> Rio de Janeiro
        </Ingredient>
      </IngredientsContainer>
      <PreparationContainer>
        <PreparationIcon />
        <PreparationTitle>MODO DE PREPARO</PreparationTitle>
        <Step>
          <Number>1.</Number> Pegue o polvo e dissolva-o pra dar sabor na massa
        </Step>
        <Step>
          <Number>2.</Number> Depois de dissolvido lembrar de colocar na panela
          de pressão
        </Step>
      </PreparationContainer>
    </Container>
  );
}
