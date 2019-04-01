import React from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity, 
    TextInput
} from 'react-native';
import styles from '../../../assets/style.js'
import { Card,Container, Header, Title } from 'native-base';
import axios from 'axios'

export default class HomeScreen extends React.Component {
      static navigationOptions = {
          title: 'Home',
      };
  constructor(props){
      super(props)
  this.state = {
      shows: [],
      text: '',
      url: 'http://api.tvmaze.com/search/shows?q='
  }
  }


getData(text){

  const search = text === '' ? 'Game' : text 
  axios.get(this.state.url+search)
  .then(res => {
    const shows = res.data;
    this.setState({ shows });
    console.log(this.state.shows[5])
  })
}

  componentDidMount() {
    this.getData('')
  }
  render() {
    return (
      
        <Container style={styles.viewContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.getData(text)}
        />
        <FlatList
        data={this.state.shows}
        renderItem={({ item }) =>  (
        <TouchableOpacity
        onPress = { () => { this.props.navigation.navigate('Show',item) } }
        >
        <Card  style={  styles.cardStyle } >
          {item.show.image && item.show.image.medium ? <Image source={{ uri: item.show.image.medium}} style={styles.image} /> : null}
          <Card  style={styles.cardStyle} >
          <Title> {item.show.name}  </Title>  
        </Card>  
        </Card>
        </TouchableOpacity>
    )}/>  
      </Container>

    )
  }
}
