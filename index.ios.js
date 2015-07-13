/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS
} = React;

var ReadingListScreen = require('./reading-list-screen');

var NavigationApp = React.createClass({

    render: function() {
        return (
            <NavigatorIOS
                style={styles.navigator}
                initialRoute={{
                    title: 'My Title',
                    component: ReadingListScreen
                }}
                />
        );
    }
});

var styles = StyleSheet.create({
    navigator: {
        flex: 1
    }
});

AppRegistry.registerComponent('NavigationApp', () => NavigationApp);
