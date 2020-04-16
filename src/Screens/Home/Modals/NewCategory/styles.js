import styled from 'styled-components/native';

import { Modal, TextInput, Button } from 'react-native-paper';

export const Container = styled(Modal).attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})``;

export const Card = styled.View`
  width: 90%;
  justify-content: space-between;
  padding: 30px;
  border-radius: 10px;
  background: #fff;
`;

export const Title = styled.Text`
  align-self: center;
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const Form = styled.View`
  margin-bottom: 50px;
`;

export const Input = styled(TextInput).attrs({
  mode: 'outlined',
})``;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SubmitButton = styled(Button).attrs({
  mode: 'contained',
})``;

export const CancelButton = styled(Button)``;
