import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Searchbar, Portal } from 'react-native-paper';

import NewCategoryModal from './Modals/NewCategory';

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
  const [newCategoryModal, setNewCategoryModal] = useState(false);

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

  const navigation = useNavigation();

  return (
    <Container>
      <Portal>
        <NewCategoryModal
          visible={newCategoryModal}
          setNewCategoryModal={setNewCategoryModal}
        />
      </Portal>
      <SearchContainer>
        <Searchbar placeholder="Procurar..." />
      </SearchContainer>
      <List
        data={listData}
        renderItem={({ item }) => (
          <CategoryCardButton
            onPress={() =>
              navigation.navigate('Receipts', {
                name: item.name,
              })
            }>
            <BackgroundImage source={temp} resizeMode="contain">
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
        onPress={() => setNewCategoryModal(true)}
      />
    </Container>
  );
}
