import React from 'react';
import { Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import styles from './../../styles/index';

const NavBar = () => (
    <Appbar.Header>
        <Appbar.Content
            title={<Text style={styles.title}>To - Do List</Text>} />
    </Appbar.Header>
);

export default NavBar;