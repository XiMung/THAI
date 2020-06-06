import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import callApi from './../util/apiCaller';

class ViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.view();
    }

    view = async () => {
        const type = this.props.navigation.getParam('type', 1)
        console.log("1111 " + type);

        await callApi('POST', 'http://192.168.56.1:1998/api/getVocabulary', {
            "type": type
        }).then(res => {
            console.log("success", res.data);
            if (res.data.error === false) {
                this.setState({
                    data: res.data.data
                })
            } else {
                alert("loi loi loi !")
            }

        })
    }

    renderItem = ({ item, index }) => {
        console.log('555555', item)
        return (
            <View>
                <Text>
                    {item._id}
                </Text>
                <Text>
                    {item.vocabulary}
                </Text>
            </View>
        )
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

export default ViewComponent;
