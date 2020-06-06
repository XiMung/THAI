import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, View, TextInput, TouchableOpacity } from 'native-base';

export default class Login extends Component {
    render() {
        return (
            <Container>
                <Content style={{ backgroundColor: '#C6E2FF' }}>
                    <Form>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={{ uri: 'https://mobile.gamelandvn.com/wp-content/uploads/2020/04/free-fire-ob21-xep-hang-tu-chien-thumbnail.jpg' }}
                                style={{ width: 285, height: 300, borderRadius: 10 }}
                            />
                        </View>

                        <View style={{ marginTop: 20, borderRadius: 10, alignItems: 'center' }}>
                            <Text>
                                TOP 5 ANH HÀO TRONG LÀNG ENGLISH
                             </Text>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}
