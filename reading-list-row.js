/**
 * Created by dimon on 7/13/15.
 */
'use strict'

var React = require('react-native');
var { StyleSheet, View, Text, ListView, Image } = React;

var ReadingListRow = React.createClass({

    render: function() {
        return (
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

    },
    linkImage: {
        width: 60,
        height: 60
    },
    linkTitle: {

    },
    linkHost: {

    }
});

module.exports = ReadingListRow;
