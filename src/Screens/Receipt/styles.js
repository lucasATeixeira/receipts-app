import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const BackgroundImageContainer = styled.View`
  height: 350px;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

export const InfoContainer = styled.View`
  background: #fff;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin-bottom: 30px;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #7a7a7a;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const Portions = styled.Text`
  font-size: 15px;
  margin-bottom: 7px;
  color: ${(props) => props.theme.primary.default};
  font-weight: bold;
`;

export const Dificulty = styled.Text`
  color: #b8b8b8;
`;

export const IngredientsContainer = styled.View`
  background: #fff;
  padding: 30px;
  margin-bottom: 30px;
`;

export const IngredientIcon = styled(Icon).attrs({
  name: 'food-apple',
  size: 30,
})`
  align-self: center;
  margin-bottom: 7px;
  color: ${(props) => props.theme.primary.default};
`;

export const IngredientTitle = styled.Text`
  align-self: center;
  color: ${(props) => props.theme.primary.default};
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 60px;
`;

export const Dot = styled.Text`
  font-weight: bold;
  font-size: 30px;
`;

export const Ingredient = styled.Text`
  color: #b8b8b8;
  font-size: 15px;
  margin-bottom: 10px;
`;

export const PreparationContainer = styled.View`
  background: #fff;
  padding: 30px;
  margin-bottom: 30px;
`;

export const PreparationIcon = styled(Icon).attrs({
  name: 'food-variant',
  size: 30,
})`
  align-self: center;
  margin-bottom: 7px;
  color: ${(props) => props.theme.primary.default};
`;

export const PreparationTitle = styled.Text`
  align-self: center;
  color: ${(props) => props.theme.primary.default};
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 60px;
`;

export const Step = styled.Text`
  color: #b8b8b8;
  font-size: 15px;
  margin-bottom: 25px;
`;

export const Number = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
