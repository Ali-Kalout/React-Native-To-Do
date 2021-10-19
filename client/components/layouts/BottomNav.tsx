import * as React from 'react';
import { View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from './../../screens/Home';
import NewTask from '../../screens/NewTask';
import Profile from '../../screens/Profile';
import styles from './../../styles/index';

const BottomNav = () => {
    const HomeRoute = () => (
        <View style={styles.container}>
            <Home setIndex={setIndex} />
        </View>
    );

    const NewTaskRoute = () => (
        <View style={styles.container}>
            <NewTask setIndex={setIndex} />
        </View>
    );

    const ProfileRoute = () => (
        <View style={styles.container}>
            <Profile setIndex={setIndex} />
        </View>
    );

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'tasks', title: 'Tasks', icon: 'menu' },
        { key: 'ntask', title: 'New Task', icon: 'plus' },
        { key: 'profile', title: 'Profile', icon: 'account' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        tasks: HomeRoute,
        ntask: NewTaskRoute,
        profile: ProfileRoute,
    });

    return (
        <BottomNavigation
            barStyle={{ backgroundColor: '#6200EE' }}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default BottomNav;