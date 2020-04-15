import React from 'react';

import { Searchbar } from 'react-native-paper';

import {
  Container,
  SearchContainer,
  List,
  CategoryCardButton,
  BackgroundImage,
  Title,
  AddButton,
} from './styles';

import temp from '../../assets/temp.png';

export default function Home() {
  const listData = [
    {
      id: 1,
      name: 'Salgados',
    },
    {
      id: 2,
      name: 'Doces',
    },
    {
      id: 3,
      name: 'Drinks',
    },
  ];

  return (
    <Container>
      <SearchContainer>
        <Searchbar placeholder="Procurar..." />
      </SearchContainer>
      <List
        data={listData}
        renderItem={({ item }) => (
          <CategoryCardButton>
            <BackgroundImage source={temp}>
              <Title>{item.name}</Title>
            </BackgroundImage>
          </CategoryCardButton>
        )}
        keyExtractor={(item) => item.id}
      />
      <AddButton
        icon="plus"
        color="#FFFF"
        size={40}
        // onPress={() => console.warn('Pressed')}
      />
    </Container>
  );
}
