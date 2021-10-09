import React, { useState, FC } from 'react';
import { View, Text } from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';
import styles from './../../styles/index';
import { authForm } from '../../screens/Auth';
import { useSelector } from 'react-redux';

interface Props {
    handleLogin: (loginForm: authForm) => void;
};

const Login: FC<Props> = ({ handleLogin }) => {
    const [loginForm, setLoginForm] = useState<any>({ username: '', password: '' });
    const { error, loading } = useSelector((state: any) => state.auth);

    return (
        <View>
            <Title>Login</Title>
            <TextInput label="Username" mode="outlined" value={loginForm?.username}
                onChangeText={text => setLoginForm({ ...loginForm, username: text })}
                style={styles.input} />
            <TextInput label="Password" mode="outlined" value={loginForm?.password} secureTextEntry={true}
                onChangeText={text => setLoginForm({ ...loginForm, password: text })}
                style={styles.input} />
            {error?.length > 0 && <Text style={styles.error}>{error}</Text>}
            <Button style={styles.button} mode="contained" onPress={() => handleLogin(loginForm)} disabled={loading}>
                {loading ? 'Loading...' : 'Login'}
            </Button>
        </View>
    );
};

export default Login;