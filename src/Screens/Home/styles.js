import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { IconButton } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const SearchContainer = styled.View`
  padding: 30px 30px 0 30px;
`;

export const List = styled(FlatList)`
  flex: 1;
  padding: 30px;
  /* margin-bottom: 30px; */
`;

export const CategoryCardButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  margin-bottom: 30px;
`;

export const BackgroundImage = styled.ImageBackground`
  height: 200px;
  resize-mode: cover;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-radius: 10px;
`;

export const Title = styled.Text`
  color: white;
  font-weight: bold;
`;

export const AddButton = styled(IconButton)`
  position: absolute;
  background-color: ${(props) => props.theme.primary.default};
  bottom: 20px;
  right: 20px;
`;
