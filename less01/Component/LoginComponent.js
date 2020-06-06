import React, { Component } from 'react';

import { Image, ImageBackground, StyleSheet } from 'react-native';
import image from '../image/backgroup6.jpg';
import icon from '../icon/duolingo.png';
import { Icon, Container, Header, Content, Form, Item, Input, Button, Text, View, TextInput, TouchableOpacity } from 'native-base';
import callApi from './../util/apiCaller';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  login = async () => {
    let { email, password } = this.state;

    await callApi('POST', 'http://192.168.56.1:1998/api/login', {
      "email": email,
      "password": password
    }).then(res => {
      //console.log("success", res.data);
      if (res.data.error === false) {
        this.props.navigation.navigate('Home');
      }

    })
  }

  render() {
    return (
      <Container>
        <ImageBackground source={image} style={styles.image}>
          <Content>

            <Form>
              <View style={styles.container}>

                <View style={{ alignItems: 'center' }}>
                  <Image
                    // source={{ uri: 'https://listimg.pinclipart.com/picdir/s/320-3203705_top-10-best-language-learning-apps-duolingo-owl.png' }}
                    // style={{ width: 285, height: 300, borderRadius: 10 }}
                    source={icon} style={{ alignItems: 'center', width: 250, height: 250 }}
                  />
                  {/* <Icon source={icon} style={{ alignItems: 'center' }} /> */}
                </View>

                <Item rounded style={{ marginTop: 20 }}>
                  <Input placeholder="Username" onChangeText={text => this.setState({
                    email: text
                  })} style={{ borderColor: 'black', borderWidth: 1, borderRadius: 10 }} />
                </Item>
                <Item rounded style={{ marginTop: 20 }}>
                  <Input placeholder="Password" onChangeText={pass => this.setState({
                    password: pass
                  })} style={{ borderColor: 'black', borderWidth: 1, borderRadius: 10 }} />
                </Item>
                <View style={{ alignItems: 'center' }}>
                  <Button style={{ marginTop: 20, borderRadius: 10 }} onPress={this.login}>
                    <Text>ĐĂNG NHẬP</Text>
                  </Button>
                </View>

                <View style={{ marginTop: 20, borderRadius: 10, alignItems: 'center' }}>
                  <Text onPress={() => { this.props.navigation.navigate('ForgotPass') }}>
                    Quên mật khẩu?
              </Text>
                </View>
                <View style={{ marginTop: 20, borderRadius: 10, alignItems: 'center' }}>
                  <Text onPress={() => { this.props.navigation.navigate('Register') }}>
                    Đăng ký
              </Text>
                </View>
              </View>
            </Form>

          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "grey",
    fontSize: 40,
    fontWeight: "bold"
  }
});