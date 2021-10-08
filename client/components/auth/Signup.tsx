import React, { useState, FC } from 'react';
import { View, Text } from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';
import styles from './../../styles/index';
import { authForm } from './../../pages/Auth';

interface Props {
    handleSignup: (signupForm: authForm) => void;
};

const error = false; // static till now

const Signup: FC<Props> = ({ handleSignup }) => {
    const [signupForm, setSignupForm] = useState<authForm>({ username: '', password: '' });
    const [confirmPass, setConfirmPass] = useState<string>('');

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
            {(signupForm?.password !== confirmPass || error) && (
                <Text style={styles.error}>Passwords don't match!</Text>
            )}
            <Button style={styles.button} mode="contained" onPress={() => handleSignup(signupForm)}>Signup</Button>
        </View>
    );
};

export default Signup;