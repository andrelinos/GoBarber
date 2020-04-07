import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Schedule() {
  return <Background />;
}

Schedule.navigationOptions = {
  tabBarLabel: 'Agendar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="add" size={20} color={tintColor} />
  ),
};
