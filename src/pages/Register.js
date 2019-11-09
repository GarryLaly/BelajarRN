import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

import Button from '../components/Button';

const ButtonLogin = styled(Button)`
  margin-top: 80px;
`;

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'userlogin'
    };
  }

  componentDidMount() {
    this.setState({ user: 'ganti setelah render' });
  }

  registerAction() {
    this.setState({ user: 'sudah daftar' });
    alert('sudah daftar');
  }

  render() {
    return (
      <View>
        <Text style={{fontFamily: 'Roboto-Regular'}}>Register</Text>
        <Text style={{fontFamily: 'Roboto-Regular'}}>{this.state.user}</Text>
        <ButtonLogin
          background="blue"
          teksnya="Daftar"
          kliknya={() => this.registerAction()}
        />
      </View>
    );
  }
}

export default Register;
