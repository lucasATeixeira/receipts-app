import React from 'react';
import Lottie from 'lottie-react-native';

import { Container } from './styles';

import food from '../../assets/food.json';

export default function Welcome({ setLoading }) {
  return (
    <Container>
      <Lottie
        resizeMode="contain"
        source={food}
        autoPlay
        onAnimationFinish={() => setLoading(false)}
        loop={false}
      />
    </Container>
  );
}
