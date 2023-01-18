import { FlatList, Image, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import axios from 'axios';
import { useState } from 'react';
import { Box, Card, Container, Input, NativeBaseProvider } from 'native-base';

export default function TvShowScreen() {
  const [shows, setShows] = useState([]);

  const getData = async (text: string) => {
    try {
      const res = await axios.get(`https://api.tvmaze.com/search/shows?q=/${text}`);
      setShows(res.data);
    } catch (e) {
      console.log(e, '<=== error');
    }
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Container style={{ padding: 10 }}>
          <Box alignItems="center">
            <Input placeholder="Search" w="100%"
                   onChangeText={getData} />
          </Box>
          <FlatList
            data={shows}
            renderItem={({ item }) => (
              <Card key={item} style={{ margin: 5 }}>
                {item.show.image && item.show.image.medium ?
                  <Image source={{ uri: item.show.image.medium }}
                         style={styles.image} /> : null}
                <Box margin={1}>
                  <Text>Summary : {item.show.summary ?
                    item.show.summary.replace(/<\/?[^>]+(>|$)/g, '') :
                    null} </Text>
                  <Card style={{ flexShrink: 2, flexBasis: 20 }}>
                    <Text>Name : {item.show.name} </Text>
                    <Text>Premiere diff : {item.show.premiered} </Text>
                    <Text>Type : {item.show.type} </Text>
                    <Text>language : {item.show.language} </Text>
                    <Text>Status : {item.show.status} </Text>
                    {item.show.genres.map((genre, key) =>
                      (<Text>Genre N°{key}: {genre} </Text>))}
                  </Card>
                </Box>
              </Card>
            )} />
        </Container>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: 200,
    height: 300,
  },
});
