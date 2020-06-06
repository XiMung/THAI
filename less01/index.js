/**
 * @format
 */
// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';
// import Main from './Component/MainComponent';
// import main1 from './Component/main1';

// AppRegistry.registerComponent(appName, () => Main);


import React from 'react';
import { AppRegistry, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
// import App from './App';
import { name as appName } from './app.json';
import Main from './Component/MainComponent';
import Home from './Component/HomeComponent';
import User from './Component/UserComponent';
import Rank from './Component/RankComponent';
import Login from './Component/LoginComponent';
import ForgotPass from './Component/ForgotPassComponent';
import Register from './Component/RegisterComponent';
import Topic from './Component/TopicComponent';
import ViewComponent from './Component/ViewComponent';

const tabNavigator = createMaterialTopTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: () => (<Image
                    source={require('./icon/home.png')}
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: 'black',
                    }}></Image>)
            }
        },
        Topic: {
            screen: Topic,
            navigationOptions: {
                tabBarIcon: () => (<Image
                    source={require('./icon/topic.png')}
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: 'black',
                    }}></Image>)
            }
        },
        Rank: {
            screen: Rank,
            navigationOptions: {
                tabBarIcon: () => (<Image
                    source={require('./icon/rank.png')}
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: 'black',
                    }}></Image>)
            }
        },
        User: {
            screen: User,
            navigationOptions: {
                tabBarIcon: () => (<Image
                    source={require('./icon/user.png')}
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: 'black',
                    }}></Image>)
            }
        },
    },
    {
        // order: ['Home', 'LoveSongs', 'Personal'],
        initialRouteName: 'Home',
        animationEnabled: true,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        tabBarOptions: {

            showIcon: true,
            activeTintColor: 'white',
            activeBackgroundColor: 'rgb(93,153,203)',
        },
    },
);

const stackMain = createStackNavigator(
    {
        Login: {
            screen: Login,
        },
        Home: {
            screen: tabNavigator,
        },
        ForgotPass: {
            screen: ForgotPass,
        },
        Register: {
            screen: Register,
        },
        View: {
            screen: ViewComponent,
        },
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
    },
);

AppRegistry.registerComponent(appName, () => createAppContainer(stackMain));
