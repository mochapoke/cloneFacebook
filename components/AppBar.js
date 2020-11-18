import React from 'react';
import styled from 'styled-components/native';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Container = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 11px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background: #ffffff;
`;
const Text = styled.Text`
  color: #3a86e9;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -0.3px;
`;
const Row = styled.View`
  flex-direction: row;
`;
const Button = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #eeeeee;
  align-items: center;
  justify-content: center;
  margin-left: 16px;  
`;

const AppBar = () => {
  return(
  <Container>
    <Text>facebook</Text>
    <Row>
      <Button><Ionicon name="search-outline" size={29} color='black' /></Button>
      <Button><Ionicon name="chatbubbles-outline" size={29} color='black' /></Button>
    </Row>
  </Container>
  )
};


export default AppBar;