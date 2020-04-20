import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'react-native-paper';
import { Icon, Container } from './styles';

export default function SettingsButton({ icon, options }) {
  const [visible, setVisible] = useState();

  return (
    <Container>
      <Menu
        visible={visible}
        onDismiss={() => setVisible(false)}
        anchor={<Icon icon={icon} onPress={() => setVisible(true)} />}>
        {options.map((option) => (
          <Menu.Item
            icon={option.icon}
            key={option.name}
            onPress={option.action}
            title={option.name}
          />
        ))}
      </Menu>
    </Container>
  );
}

SettingsButton.propTypes = {
  icon: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};

SettingsButton.defaultProps = {
  icon: 'dots-vertical',
  options: [],
};
