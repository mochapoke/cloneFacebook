import React from 'react';
import {ScrollView} from 'react-native'
import styled from 'styled-components/native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from './Avatar';
import BottomDivider from './BottomDivider';

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
  margin-right: 13px;
`;
const Text = styled.Text`
  color: #1777f2;
  font-size: 12px;
  padding-left: 6px;
`;
const User = styled.View`
  margin-right: 13px;
`;

function Users(){
  return (
    <>
    <Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingLeft: 11}}
      >
        <Room>
          <MaterialComIcon name="video-plus" size={26} color="#e141fc" />
          <Text>Creat your Room</Text>
        </Room>
        <User>
          <Avatar source={require('../assets/user2.jpg')} online={true} />
        </User>
        <User>
          <Avatar source={require('../assets/user3.jpg')} online={true} />
        </User>
        <User>
          <Avatar source={require('../assets/user4.jpg')} online={true} />
        </User>
        <User>
          <Avatar source={require('../assets/user5.jpg')} />
        </User>
        <User>
          <Avatar source={require('../assets/user2.jpg')} />
        </User>
        <User>
          <Avatar source={require('../assets/user5.jpg')} />
        </User>
      </ScrollView>
    </Container>
    <BottomDivider />
    </>
  )
}

export default Users;