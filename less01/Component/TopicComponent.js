import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class Home extends Component {
    render() {
        return (
            <Container style={{ backgroundColor: '#C6E2FF' }}>
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square
                                    source={{
                                        uri: 'https://img.lovepik.com/element/40135/7238.png_860.png',
                                        alignItems: 'center'
                                    }} />
                            </Left>
                            <Body>
                                <Text>MÓN ĂN</Text>
                                <Text note numberOfLines={1}>
                                    từ vựng về chủ đề món ăn
                </Text>
                            </Body>
                            <Right>
                                <Button transparent onPress={() => { this.props.navigation.navigate('View', { type: 1 }) }}>
                                    <Text>GO</Text>
                                </Button>
                            </Right>
                        </ListItem>

                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail
                                    square
                                    source={{
                                        uri: 'https://3.bp.blogspot.com/-jpWo4MMv8uE/VqnS-VzZ03I/AAAAAAAAEeY/2LBIdwBGAfY/s1600/flat-animals-icons-600.jpg',
                                        alignItems: 'center'
                                    }}
                                />
                            </Left>
                            <Body>
                                <Text>ĐỘNG VẬT</Text>
                                <Text note numberOfLines={1}>
                                    từ vựng về chủ đề động vật
                </Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>GO</Text>
                                </Button>
                            </Right>
                        </ListItem>

                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail
                                    square
                                    source={{
                                        uri: 'https://img.freepik.com/free-vector/set-clothes-white_1308-41063.jpg?size=626&amp;ext=jpg',
                                        alignItems: 'center'
                                    }}
                                />
                            </Left>
                            <Body>
                                <Text>QUẦN ÁO</Text>
                                <Text note numberOfLines={1}>
                                    từ vựng về chủ đề quần áo
                </Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>GO</Text>
                                </Button>
                            </Right>
                        </ListItem>

                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail
                                    square
                                    source={{
                                        uri: 'https://images.careerbuilder.vn/content/news/01BinhMKT/news/Color_600.jpg',
                                        alignItems: 'center'
                                    }}
                                />
                            </Left>
                            <Body>
                                <Text>MÀU SẮC</Text>
                                <Text note numberOfLines={1}>
                                    từ vựng về chủ đề màu sắc
                </Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>GO</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
