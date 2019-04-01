import  React from 'react'
import { Text, Image} from 'react-native';
import { Card,Container } from 'native-base';

import styles from '../../../assets/style.js'

export default class index extends React.Component {
    
    static navigationOptions = {
        title: 'Information ',
    };
    render() {
        const item = this.props.navigation.state.params.show
        console.log(this.props.navigation.state.params)
    return (
    <Container>        
          {item.image && item.image.medium ? <Image source={{ uri: item.image.medium}} style={styles.image} /> : null}
          <Text>Summary : {item.summary ? item.summary.replace(/<\/?[^>]+(>|$)/g, "") : null} </Text>            
          
          <Card >
          <Text>ID : {item.id} </Text> 
          <Text>Name : {item.name} </Text>  
          <Text>Type : {item.type} </Text>
          <Text>language : {item.language} </Text>
          <Text>Status : {item.status} </Text>
          {item.genres.map((genre,key) =>
          (<Text>Genre N°{key}: {genre} </Text>))}
        </Card>  

    </Container>
    )
  }
}
