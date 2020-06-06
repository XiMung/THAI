import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, View, TextInput, TouchableOpacity } from 'native-base';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class ForgotPass extends Component {
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
                            <Input placeholder="email của bạn" style={{ borderColor: 'black', borderWidth: 1, borderRadius: 10 }} />
                        </Item>
                        <Text style={{ marginTop: 20, color: 'red', alignItems: 'center' }}>
                            Hãy kiểm tra email của bạn sau khi bấm HOÀN THÀNH
                        </Text>

                        <Button block style={{ marginTop: 20, borderRadius: 10 }}>
                            <Text>HOÀN THÀNH</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}
