import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import Login from './../components/auth/Login';
import Signup from './../components/auth/Signup';

export interface authForm {
    username: string;
    password: string;
};

const Auth = () => {
    const [hasAcc, setHasAcc] = useState<Boolean>(true);

    const handleLogin = (form: authForm): void => {
        console.log(form);
    };

    const handleSignup = (form: authForm): void => {
        console.log(form);
    };


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