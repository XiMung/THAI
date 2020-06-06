import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'FOOD',
    name: 'One',
    image: require('../image/food.jpg'),
  },
  {
    text: 'ANIMAL',
    name: 'Two',
    image: require('../image/animal.jpg'),
  },
  {
    text: 'CLOTHES',
    name: 'Three',
    image: require('../image/quanao.jpg'),
  },
  {
    text: 'COLOR',
    name: 'Four',
    image: require('../image/color.jpg'),
  },
];
export default class Home extends Component {
  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      {/* <Text note>NativeBase</Text> */}
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />

        </View>
      </Container>
    );
  }
}