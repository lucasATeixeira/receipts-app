import styled from 'styled-components/native';
import { IconButton } from 'react-native-paper';

export const Container = styled.View``;

export const Icon = styled(IconButton).attrs({
  color: '#FFF',
  size: 30,
})``;

export const Card = styled.View`
  width: 200px;
  height: 300px;
  background: #fff;
  border-radius: 10px;
  position: absolute;
`;
