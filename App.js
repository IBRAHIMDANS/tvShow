import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, AppRegistry, TextInput} from 'react-native';

import { Card,CardItem,Container,Content, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import axios from 'axios'

export default class App extends React.Component {
  state = {
    shows: [],
    text: '',
    url:'http://api.tvmaze.com/search/shows?q='
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
      <Container style={{ padding:20}}>
        <Header>
          <Title> TV SHOW </Title>
        </Header>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.getData(text)}
        />
        <FlatList
        data={this.state.shows}
        renderItem={({ item }) =>  (
        <Card  style={{  flexDirection:1, flexBasis: 20 }} >
          {item.show.image && item.show.image.medium ? <Image source={{ uri: item.show.image.medium}} style={styles.image} /> : null}
          <Text>Summary : {item.show.summary ? item.show.summary.replace(/<\/?[^>]+(>|$)/g, "") : null} </Text>            
          <Card  style={{  flexShrink:2, flexBasis: 20}}>
          <Text>ID : {item.show.id} </Text> 
          <Text>Name : {item.show.name} </Text>  
          <Text>Type : {item.show.type} </Text>
          <Text>language : {item.show.language} </Text>
          <Text>Status : {item.show.status} </Text>
          {item.show.genres.map((genre,key) =>
          (<Text>Genre N°{key}: {genre} </Text>))}
  </Card>  
        </Card>
        
    )}/>  
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, image:{
    width: 200,
    height:300
  }
});
