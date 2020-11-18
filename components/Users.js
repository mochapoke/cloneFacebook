import React from 'react';
import {ScrollView} from 'react-native'
import styled from 'styled-components/native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from './Avatar';

const Container = styled.View`
  width: 100%;
  height: 58px;
  flex-direction: row;
  align-items: center;
`;
const Room = styled.TouchableOpacity`
  width: 115px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  border-color: #82b1ff;
  border-width: 1px;
  padding: 0 15px;
  margin-right: 12px;
`;
const Text = styled.Text`
  color: #1777f2;
  font-size: 12px;
  padding-left: 6px;
`;
const User = styled.View`
  margin-left: 13px;
`;

function Users(){
  return (
    <Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddinLeft: 11}}>
      </ScrollView>
      <Room>
        <MaterialComIcon name="video-plus" size={26} color="#e141fc" />
        <Text>Creat your Room</Text>
      </Room>
      <User>
        <Avatar source={require('../assets/user2.jpg')} outline={true} />
      </User>
    </Container>
  )
}

export default Users;