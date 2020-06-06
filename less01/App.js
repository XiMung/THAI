/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button,Text } from 'native-base';

const App = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <Item rounded>
            <Input placeholder='Username' />
          </Item>
          <Item rounded>
            <Input placeholder='Password' />
          </Item>
          <Button block>
            <Text>ĐĂNG NHẬP</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};
export default App;