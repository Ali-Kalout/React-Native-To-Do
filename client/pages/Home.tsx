import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from './../redux/store';

const Home = () => {
    const { user } = useSelector((state: RootState) => state.auth);

    return (
        <View>
            <Text>Hello {user?.username}</Text>
        </View>
    );
};

export default Home;