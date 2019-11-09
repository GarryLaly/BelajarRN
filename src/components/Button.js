import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.TouchableOpacity`
  background-color: ${({ background }) => background};
  border-radius: 8px;
  padding: 10px 20px;
  width: 200px;
  align-self: center;
`;

const ButtonText = styled.Text`
  font-size: 22px;
  color: white;
  text-align: center;
  font-family: Roboto-Regular;
`;

class Button extends Component {
  render() {
    console.warn(this.props);
    return (
      <Container
        style={this.props.style}
        background={this.props.background}
        activeOpacity={1}
        onPress={() => this.props.kliknya()}
      >
        <ButtonText>{this.props.teksnya}</ButtonText>
      </Container>
    );
  }
}

export default Button;
