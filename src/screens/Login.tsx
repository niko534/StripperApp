// @flow
//External libraries
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as firebase from 'firebase';

//Components
import PhoneAuthentication from './PhoneAuthentication';

type Props = {
    skipLoadingScreen: boolean
};
export const Login = (props: Props) => {
    const [userAuthenticated, setUserAuthenticated] = useState();
    const [isLoadingComplete, setLoadingComplete] = useState(false);
    const [isAuthenticatingWithPhone, setIsAuthenticatingWithPhone] = useState(
        false
    );

    firebase.auth().onAuthStateChanged(user => {
        setUserAuthenticated(user);
    });

    if (isAuthenticatingWithPhone && !userAuthenticated) {
        return <PhoneAuthentication />;
    }

    return (
        <View style={styles.container}>
            {userAuthenticated ? (
                <>
                    <Button
                        color="green"
                        title="Logout"
                        onPress={logout}
                    />
                </>
            ) : (
                <>
                    <Button
                        color="blue"
                        title="Authenticate with phone number"
                        onPress={() => setIsAuthenticatingWithPhone(true)}
                    />
                </>
            )}
        </View>
    );
    
};

export const logout = () => {
    return firebase.auth().signOut();
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingLeft: 5
    }
});

export default Login;
