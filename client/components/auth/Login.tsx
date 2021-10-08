import React, { useState, FC } from 'react';
import { View } from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';
import styles from './../../styles/index';
import { authForm } from './../../pages/Auth';

interface Props {
    handleLogin: (loginForm: authForm) => void;
};

const Login: FC<Props> = ({ handleLogin }) => {
    const [loginForm, setLoginForm] = useState<authForm>({ username: '', password: '' });

    return (
        <View>
            <Title>Login</Title>
            <TextInput label="Username" mode="outlined" value={loginForm?.username}
                onChangeText={text => setLoginForm({ ...loginForm, username: text })}
                style={styles.input} />
            <TextInput label="Password" mode="outlined" value={loginForm?.password} secureTextEntry={true}
                onChangeText={text => setLoginForm({ ...loginForm, password: text })}
                style={styles.input} />
            <Button style={styles.button} mode="contained" onPress={() => handleLogin(loginForm)}>Login</Button>
        </View>
    );
};

export default Login;