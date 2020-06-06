import React, { Component } from 'react';
import { Container, Content, Footer, Button, FooterTab, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';

import Home from './HomeComponent';
import User from './UserComponent';
import Rank from './RankComponent';
import Login from './LoginComponent';
import ForgotPass from './ForgotPassComponent';
import Register from './RegisterComponent';
import Topic from './TopicComponent';
export default class Main extends Component {
    // static navigationOptions = ({navigation}) => {
    //     // headerShown: false,
    //     let tabBarIcon = ({focused, tintColor}) => (
    //       <Image
    //         source={require('../icons/home.png')}
    //         style={{
    //           width: 25,
    //           height: 25,
    //           tintColor: focused ? 'white' : tintColor,
    //         }}></Image>
    //     );
    //     return {tabBarIcon};
    //   };
    render() {
        return (
            <Container>
                <Tabs>
                    <Tab heading={<TabHeading><Icon name="home" /><Text>Home</Text></TabHeading>}>
                        <Home />
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="book" /><Text>Topic</Text></TabHeading>}>
                        <Topic />
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="star-half" /><Text>Rank</Text></TabHeading>}>
                        <Rank />
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="person" /><Text>User</Text></TabHeading>}>
                        <User />
                    </Tab>
                </Tabs>
            </Container>

        );
    }
}
