/**
 * Created by dimon on 7/13/15.
 */
'use strict'

var React = require('react-native');
var { StyleSheet, View, Text, Image, TouchableHighlight } = React;

var ReadingListRow = React.createClass({

    render: function() {
        return (
            <TouchableHighlight onPress={this.props.onSelect}>
                <View style={styles.container}>
                    <Image
                        source={{uri: this.props.link.image}}
                        style={styles.linkImage}
                        />
                    <View style={styles.textContainer}>
                        <Text style={styles.linkTitle} numberOfLines={2}>{this.props.link.title}</Text>
                        <Text style={styles.linkHost}>{this.props.link.host}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    linkImage: {
        width: 60,
        height: 60,
        backgroundColor: '#dddddd',
        marginRight: 10
    },
    linkTitle: {
        fontWeight: 'bold'
    },
    linkHost: {
        color: '#999999'
    }
});

module.exports = ReadingListRow;
