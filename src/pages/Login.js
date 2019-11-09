import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Button from '../components/Button';

const Login = ({ navigation }) => {
  const [user, setUser] = useState('userlogin');

  useEffect(() => {
    setUser('ganti setelah render');
  }, []);

  const loginAction = () => {
    setUser('sudah login');
    alert('sudah login');
  };

  return (
    <View>
      <Text>Login</Text>
      <Text>{user}</Text>
      <Button
        background="yellow"
        teksnya="Login"
        kliknya={() => loginAction()}
      />
    </View>
  );
};

export default Login;
