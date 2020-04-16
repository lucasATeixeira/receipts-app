import React from 'react';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  SearchContainer,
  ReceiptsList,
  AddButton,
  Card,
  ImageContainer,
  BackgroundImage,
  Info,
  Name,
  Portions,
  Dificulty,
} from './styles';

import temp from '../../assets/temp.png';

export default function Receipts() {
  const navigation = useNavigation();

  const receipts = [
    {
      id: 1,
      name: 'Mão de sogra na panela',
      dificulty: 'Fácil',
      portions: 10,
    },
    {
      id: 2,
      name: 'Sanduíche de minhocas',
      dificulty: 'Intermediário',
      portions: 4,
    },
  ];

  return (
    <Container>
      <SearchContainer>
        <Searchbar placeholder="Buscar..." />
      </SearchContainer>
      <ReceiptsList
        data={receipts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            onPress={() =>
              navigation.navigate('Receipt', {
                name: item.name,
              })
            }>
            <ImageContainer>
              <BackgroundImage source={temp} resizeMode="contain" />
            </ImageContainer>
            <Info>
              <Name>{item.name}</Name>
              <Portions>Rende {item.portions} porções</Portions>
              <Dificulty>{item.dificulty}</Dificulty>
            </Info>
          </Card>
        )}
      />
      <AddButton
        icon="plus"
        color="#FFFF"
        size={40}
        // onPress={() => setNewCategoryModal(true)}
      />
    </Container>
  );
}
