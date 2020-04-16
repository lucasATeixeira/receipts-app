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

export const ReceiptsList = styled(FlatList)`
  flex: 1;
  padding: 30px;
`;

export const Card = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  background: #fff;
  margin-bottom: 30px;
  border-radius: 10px;
  height: 170px;
`;

export const ImageContainer = styled.View`
  width: 40%;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-radius: 10px;
`;

export const Info = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0 40px 0;
`;

export const Name = styled.Text`
  font-size: 15px;
  color: #7a7a7a;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Portions = styled.Text`
  color: ${(props) => props.theme.primary.default};
  font-weight: bold;
`;

export const Dificulty = styled.Text`
  color: #b8b8b8;
`;

export const AddButton = styled(IconButton)`
  position: absolute;
  background-color: ${(props) => props.theme.primary.default};
  bottom: 20px;
  right: 20px;
`;
