import React, { useState, useEffect, FC } from 'react';
import { Text, ScrollView } from 'react-native';
import styles from './../styles/index';
import { TextInput, Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { editUser } from './../redux/actions/auth';

interface Props {
    setIndex: any;
};

const Profile: FC<Props> = ({ setIndex }) => {
    const dispatch = useDispatch();
    const { user, error } = useSelector((state: any) => state?.auth);
    const [userS, setUserS] = useState<any>({ username: user?.username, newPassword: '', oldPassword: '' });

    useEffect(() => { setUserS({ ...userS, username: user?.username }) }, [user]);

    return (
        <ScrollView keyboardShouldPersistTaps='handled'>
            <Text style={styles.title}>{user?.username}'s profile</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 20 }}>Profile Setting</Text>
            <TextInput label="Username" mode="outlined" value={userS?.username}
                onChangeText={text => setUserS({ ...userS, username: text })} style={styles.input} />
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 20 }}>Password Setting</Text>
            <TextInput label="New Password" mode="outlined" value={userS?.newPassword} secureTextEntry={true}
                onChangeText={text => setUserS({ ...userS, newPassword: text })} style={styles.input} />
            <Text>Your password won't change if this is kept blank!</Text>
            <TextInput label="Current Password" mode="outlined" value={userS?.oldPassword} secureTextEntry={true}
                onChangeText={text => setUserS({ ...userS, oldPassword: text })} style={[styles.input, { marginTop: 20 }]} />
            <Button mode="contained" style={styles.button} onPress={() => {
                dispatch(editUser(userS));
                setIndex(2);
            }}>Save</Button>
            <Text style={styles.error}>{error}</Text>
        </ScrollView>
    );
}

export default Profile;