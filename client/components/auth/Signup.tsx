import React, { useState, FC } from 'react';
import { View, Text } from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';
import styles from './../../styles/index';
import { authForm } from './../../pages/Auth';
import { useSelector } from 'react-redux';

interface Props {
    handleSignup: (signupForm: authForm) => void;
};

const Signup: FC<Props> = ({ handleSignup }) => {
    const [signupForm, setSignupForm] = useState<any>({ username: '', password: '' });
    const [confirmPass, setConfirmPass] = useState<string>('');
    const { error, loading } = useSelector((state: any) => state.auth);

    return (
        <View>
            <Title>Signup</Title>
            <TextInput label="Username" mode="outlined" value={signupForm?.username}
                onChangeText={text => setSignupForm({ ...signupForm, username: text })}
                style={styles.input} />
            <TextInput label="Password" mode="outlined" value={signupForm?.password} secureTextEntry={true}
                onChangeText={text => setSignupForm({ ...signupForm, password: text })}
                style={styles.input} />
            <TextInput label="Confirm Password" mode="outlined" value={confirmPass} secureTextEntry={true}
                onChangeText={text => setConfirmPass(text)}
                style={styles.input} />
            {(signupForm?.password !== confirmPass || error?.length > 0) && (
                <Text style={styles.error}>{error?.length > 0 ? error : "Passwords don't match!"}</Text>
            )}
            <Button style={styles.button} mode="contained" onPress={() => handleSignup(signupForm)} disabled={loading}>
                {loading ? 'Loading...' : 'Signup'}
            </Button>
        </View>
    );
};

export default Signup;