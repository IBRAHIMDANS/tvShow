import React from 'react'
import {
    Header,
} from 'native-base';
import '@expo/vector-icons';
import HomeScreen from '../screens/Home';

export default class HeaderComponent extends React.Component {
  render() {
    return (
    <Header leftComponent = {
        {
            icon: 'menu',
            onPress: () => HomeScreen,
        }
    } >

    </Header>
    )
  }
}
