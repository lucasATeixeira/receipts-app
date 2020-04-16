import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Card,
  Form,
  Title,
  CancelButton,
  SubmitButton,
  Input,
  ButtonsContainer,
} from './styles';

export default function NewCategory({ visible, setNewCategoryModal }) {
  return (
    <Container visible={visible}>
      <Card>
        <Title>Nova Categoria</Title>
        <Form>
          <Input label="Nome" placeholder="Digite o nome da categoria..." />
        </Form>
        <ButtonsContainer>
          <CancelButton onPress={() => setNewCategoryModal(false)}>
            Cancelar
          </CancelButton>
          <SubmitButton>Concluir</SubmitButton>
        </ButtonsContainer>
      </Card>
    </Container>
  );
}

NewCategory.propTypes = {
  visible: PropTypes.bool.isRequired,
  setNewCategoryModal: PropTypes.func.isRequired,
};
