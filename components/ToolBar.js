import React from 'react';
import styled from 'styled-components/native';
import Avatar from './Avatar';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const Container = styled.View`
  width: 100%;
  height: 92px;
`;
const Row = styled.View`
    flex-direction: row;
    background: #fff;
    width: 100%;
    padding: 0 11px;
    align-items: center;
`;
const Input = styled.TextInput`
  height: 50px;
  width: 100%;
  padding: 0 8px;
`;
const Divider = styled.View`
  width: 100%;
  height: 0.5px;
  background: #F0F0F0;
`;
const Menu = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 42px;
`;
const MenuText = styled.Text`
  padding-left: 11px;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.6px;
`;
const Separator = styled.View`
  width: 1px;
  height: 26px;
  background: #F0F0F0;
`;
const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`;

function ToolBar(){
  return(
    <>
    <Container>
      <Row>
        <Avatar 
          source={require('../assets/user1.jpg')}
        />
        <Input placeholder="What's on your mind?" />
      </Row>

      <Divider />

      <Row>
        <Menu>
          <Icon name="videocam-outline" size={22} color="#F44337" />
          <MenuText>Live</MenuText>
        </Menu>
        <Separator />
        <Menu>
          <MaterialIcon name="add-a-photo" size={20} color="#4caf50" />
          <MenuText>Photo</MenuText>
        </Menu>
        <Separator />
        <Menu>
          <MaterialComIcon name="video-plus" size={22} color="#e141fc" />
          <MenuText>Room</MenuText>
        </Menu>
      </Row>
    </Container>
    <BottomDivider />
    </>
  );
}

export default ToolBar;