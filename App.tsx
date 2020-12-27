import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { Login } from './src/screens/Login';

const firebaseConfig = {
  apiKey: "AIzaSyCi0kpUJApkzZPIMetWMQ6oIRi-UMzvGZc",
  authDomain: "stripperapp-46971.firebaseapp.com",
  databaseURL: "https://stripperapp-46971.firebaseio.com",
  projectId: "stripperapp-46971",
  storageBucket: "stripperapp-46971.appspot.com",
  messagingSenderId: "355102468084",
  appId: "1:355102468084:web:09c8e41397ff5f15d03ba1",
  measurementId: "G-VSVE9D43QG"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
