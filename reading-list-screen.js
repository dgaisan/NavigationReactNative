/**
 * Created by dimon on 7/13/15.
 */
'use strict'

var React = require('react-native');
var { StyleSheet, View, Text, ListView } = React;

var links = require('./staticData');
var ReadingListRow = require('./reading-list-row');
var ViewLinkScreen = require('./view-link-screen');

var ReadingListScreen = React.createClass({

    getInitialState: function() {
        console.log('Initializing ReadingListScreen');
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});

        return {
            links: ds.cloneWithRows(links)
        }
    },

    render: function() {
        return (
            <View style={styles.container}>
                <ListView dataSource={this.state.links} renderRow={this._renderRow}></ListView>
            </View>
        );
    },

    _selectLink: function(link) {
        this.props.navigator.push({
            title: link.title,
            component: ViewLinkScreen,
            passProps: {link}
        });
    },

    _renderRow: function(link) {
        return (
           <ReadingListRow
               key={link.id}
               onSelect={() => this._selectLink(link)}
               link={link}
           />
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    }
});

module.exports = ReadingListScreen;
