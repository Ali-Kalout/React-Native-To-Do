import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import { useDispatch } from 'react-redux';
import { login, signup } from '../redux/actions/auth';
import { useHistory } from 'react-router-native';

export interface authForm {
    token: any;
    username: string;
    password: string;
};

const Auth = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [hasAcc, setHasAcc] = useState<Boolean>(true);

    const handleLogin = (form: authForm) => dispatch(login(form, history));

    const handleSignup = (form: authForm) => dispatch(signup(form, history));

    return (
        <View>
            {hasAcc ? (
                <Login handleLogin={handleLogin} />
            ) : (
                <Signup handleSignup={handleSignup} />
            )}
            <View style={{ marginTop: 25, alignItems: 'flex-end' }}>
                <Button onPress={() => setHasAcc(!hasAcc)}>
                    {hasAcc ? "Don't have an account? Signup!" : "Already have an account? Login!"}
                </Button>
            </View>
        </View>
    );
};

export default Auth;