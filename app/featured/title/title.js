import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = ({ children }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{children}</Text>
        </View>
    );
};

export default Title;

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgb(59, 108, 212)',
        padding: 15,
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
});
