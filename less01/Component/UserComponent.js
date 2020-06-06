import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, View } from 'native-base';

export default class Rank extends Component {
    render() {
        return (
            <Container>
                <Content style={{ backgroundColor: '#C6E2FF' }}>
                    <Form>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={{ uri: 'https://img.icons8.com/plasticine/2x/user-male.png' }}
                                style={{ width: 285, height: 300, borderRadius: 10 }}
                            />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Item rounded style={{ marginTop: 20 }}>
                                <Text>NGUYỄN QUANG HIẾU</Text>
                            </Item>
                        </View>
                        <Button block style={{ marginTop: 20, borderRadius: 10, alignItems: 'center', backgroundColor: 'red' }}>
                            <Text>ĐĂNG XUẤT</Text>
                        </Button>

                    </Form>
                </Content>
            </Container >
        );
    }
}
