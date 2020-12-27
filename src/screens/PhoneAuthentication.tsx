import React, { useState } from 'react';
import * as Linking from 'expo-linking'
import { ScrollView, TextInput, Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as firebase from 'firebase';

const captchaUrl = `https://workers-ef768.firebaseapp.com/captcha.html?appurl=${Linking.makeUrl(
    ''
)}`;

const PhoneAuthentication = () => {
    const [phone, setPhone] = useState('+919896798997');
    const [smsCode, setSmsCode] = useState('');
    const [confirmSMSCode, setConfirmSMSCode] = useState();

    const handleSendSMS = async () => {
        signInWithPhoneNumber(phone).then(confirmation => {
            setConfirmSMSCode(() => confirmation);
        });
    };

    const handleConfirmSMSCode = () => {
        if (!confirmSMSCode || smsCode === '') {
            return;
        }
        confirmSMSCode(smsCode);
    };

    const signInWithPhoneNumber = async phone => {
        const sendSMSPromise = new Promise((resolve, reject) => {
            Linking.addEventListener(
                'url',
                sendSMSCode.bind(null, phone, resolve, reject)
            );
        });
    
        await WebBrowser.openBrowserAsync(captchaUrl);
        //Linking.removeEventListener('url', listener);
        return sendSMSPromise;
    };
    
    const sendSMSCode = async (phone, resolve, reject, { url }) => {
        Platform.OS === 'ios' && WebBrowser.dismissBrowser();
    
        const tokenEncoded = Linking.parse(url).queryParams['token'];
        if (tokenEncoded) {
            const token = decodeURIComponent(tokenEncoded);
            //fake firebase.auth.ApplicationVerifier
            const captchaVerifier = {
                type: 'recaptcha',
                verify: () => Promise.resolve(token)
            };
            try {
                const confirmationResult = await firebase
                    .auth()
                    .signInWithPhoneNumber(phone, captchaVerifier);
    
                resolve(async smsCode => {
                    try {
                        await confirmationResult.confirm(smsCode);
                    } catch (e) {
                        console.warn(e);
                    }
                });
            } catch (e) {
                reject(e);
            }
        }
    };

    
    if (!confirmSMSCode)
        return (
            <ScrollView style={{ padding: 20, marginTop: 20 }}>
                <TextInput
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                    placeholder="Your phone"
                />
                <Button onPress={handleSendSMS} title="Next" />
            </ScrollView>
        );
    else
        return (
            <ScrollView style={{ padding: 20, marginTop: 20 }}>
                <TextInput
                    value={smsCode}
                    onChangeText={setSmsCode}
                    keyboardType="numeric"
                    placeholder="Code from SMS"
                />
                <Button
                    onPress={handleConfirmSMSCode}
                    title="Confirm SMS code"
                />
            </ScrollView>
        );
};



export default PhoneAuthentication;
