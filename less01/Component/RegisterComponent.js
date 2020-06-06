import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, View, TextInput, TouchableOpacity } from 'native-base';

export default class Register extends Component {
    render() {
        return (
            <Container>
                <Content style={{ backgroundColor: '#C6E2FF' }}>
                    <Form>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={{ uri: 'https://listimg.pinclipart.com/picdir/s/320-3203705_top-10-best-language-learning-apps-duolingo-owl.png' }}
                                style={{ width: 285, height: 300, borderRadius: 10 }}
                            />
                        </View>

                        <Item rounded style={{ marginTop: 20 }}>
                            <Input placeholder="Username" style={{ borderColor: 'black', borderWidth: 1, borderRadius: 10 }} />
                        </Item>
                        <Item rounded style={{ marginTop: 20 }}>
                            <Input placeholder="Password" style={{ borderColor: 'black', borderWidth: 1, borderRadius: 10 }} />
                        </Item>
                        <Button block style={{ marginTop: 20, borderRadius: 10 }}>
                            <Text>ĐĂNG KÝ</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}
