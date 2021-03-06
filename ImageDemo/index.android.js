/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
var requireData = require('./1.json');
var demension = require('Dimensions');
var width=demension.get('window').width;
var imageWidth=200;
var column=3;
//计算出如果分3列，每列的间隔
var margin=(width - column*imageWidth)/(column+1);
export default class ImageDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*变量*/}
                {this.rendAllBadges()}
            </View>
        );
    }

    rendAllBadges() {
        var allBadge = [];
        for (var i = 0; i < requireData.data.length; i++) {
            var bage = requireData.data[i];//requireData[i]
            allBadge.push(
                <View key={i} style={styles.innerView}>
                    <Text>{bage.title}</Text>

                    <Image source={{uri: bage.icon}} style={styles.imageStyle} Image/>

                    {/*<Image source={require('./imgs/danjianbao.png')} style={styles.imageStyle} Image/>*/}
                    {/*{<Image source={require('./imgs/'+ bage.icon +'.png')} style={styles.imageStyle} Image/>}*/}

                </View>
            );
        }
        return allBadge;
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',

        flexDirection: 'row',
        // 项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
        // nowrap(默认值)：不换行。
        // wrap：换行，第一行在上方。
        // wrap-reverse：换行，第一行在下方。（和wrap相反）
        flexWrap: 'wrap',

    },
    innerView: {
        marginLeft:margin,
        marginTop:10,
        backgroundColor: 'gray',
        alignItems: 'center'
    },
    imageStyle: {
        width: imageWidth,
        height: 120,
    },
    textStyle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('ImageDemo', () => ImageDemo);
