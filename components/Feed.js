import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import Avatar from './Avatar';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomDivider from './BottomDivider';

const Container = styled.View`
  flex: 1; 
`;
const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 11px;
`;
const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;
const User = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #222121;
`;
const Time = styled.Text`
  font-size: 9px;
  color: #747476;
`;
const Post = styled.Text`
  font-size: 12px;
  color: #222121;
  line-height: 16px;
  padding: 0 11px;
`;
const Photo = styled.Image`
  margin-top: 9px;
  width: 100%;
  height: 300px;
`;
const Footer = styled.View`
  padding: 0 11px;
`;
const FooterCount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;
const IconCount = styled.View`
  background: #1878f3;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;
const TextCount = styled.Text`
  font-size: 11px;
  color: #424040;
`;
const Separator = styled.View`
  width: 100%;
  height: 2px;
  background: #f0f2f5;
`;
const FooterMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;
const Button = styled.TouchableOpacity`
  flex-direction: row;
`;
const Icon = styled.View`
  margin-right: 6px;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  font-size: 13px;
  color: #424040;
`;

export default function Feed(){
  return(
    <>
       <Container>
         <Header>
           <Row>
            <Avatar source={require('../assets/user3.jpg')}/>
            <View style={{paddingLeft:10}}>
              <User>Regi P</User>
              <Row>
                <Time>9m</Time>
                <EntypoIcon name="dot-single" size={12} color="#747476" />
                <EntypoIcon name="globe" size={10} color="#747476" />
              </Row>
            </View>
          </Row>
          <EntypoIcon name="dots-three-horizontal" size={15} color="#222121" />
        </Header>

        <Post>
          Crie na paratica uman aplicano utilizando~
          NextJS, ReactJS, React Native e Strap API,
        </Post>
        <Photo source={require('../assets/post1.jpg')} />

        <Footer>
          <FooterCount>
            <Row>
              <IconCount>
                <AntIcon name="like1" size={12} color="#ffffff" />
              </IconCount>
              <TextCount>88 likes</TextCount>
            </Row>
            <TextCount>2k comments</TextCount>
          </FooterCount>

          <Separator />
          
          <FooterMenu>
            <Button>
              <Icon>
                <AntIcon name="like2" size={20} color="#424040"/>
              </Icon>
              <Text>Like</Text>
            </Button>

            <Button>
              <Icon>
                <MaterialComIcon name="comment-outline" size={20} color="#424040"/>
              </Icon> 
              <Text>Comment</Text>
            </Button>

            <Button>
              <Icon>
                <MaterialComIcon name="share-outline" size={20} color="#424040"/>
              </Icon> 
              <Text>Share</Text>
            </Button>
          </FooterMenu>
        </Footer>
      </Container>

      <BottomDivider />     
       
       <Container>
         <Header>
           <Row>
            <Avatar source={require('../assets/user4.jpg')}/>
            <View style={{paddingLeft:10}}>
              <User>Anna M</User>
              <Row>
                <Time>9m</Time>
                <EntypoIcon name="dot-single" size={12} color="#747476" />
                <EntypoIcon name="globe" size={10} color="#747476" />
              </Row>
            </View>
          </Row>
          <EntypoIcon name="dots-three-horizontal" size={15} color="#222121" />
        </Header>
        <Post>
          Here's Tip! 
        </Post>
        <Photo source={require('../assets/post2.jpg')} />
        <Footer>
          <FooterCount>
            <Row>
              <IconCount>
                <AntIcon name="like1" size={12} color="#ffffff" />
              </IconCount>
              <TextCount>88 likes</TextCount>
            </Row>
            <TextCount>2k comments</TextCount>
          </FooterCount>
          <Separator />
          <FooterMenu>
            <Button>
              <Icon>
                <AntIcon name="like2" size={20} color="#424040"/>
              </Icon>
              <Text>Like</Text>
            </Button>

            <Button>
              <Icon>
                <MaterialComIcon name="comment-outline" size={20} color="#424040"/>
              </Icon> 
              <Text>Comment</Text>
            </Button>

            <Button>
              <Icon>
                <MaterialComIcon name="share-outline" size={20} color="#424040"/>
              </Icon> 
              <Text>Share</Text>
            </Button>
          </FooterMenu>
        </Footer>
      </Container>

      <BottomDivider />

      <Container>
         <Header>
           <Row>
            <Avatar source={require('../assets/user4.jpg')}/>
            <View style={{paddingLeft:10}}>
              <User>Anna M</User>
              <Row>
                <Time>9m</Time>
                <EntypoIcon name="dot-single" size={12} color="#747476" />
                <EntypoIcon name="globe" size={10} color="#747476" />
              </Row>
            </View>
          </Row>
          <EntypoIcon name="dots-three-horizontal" size={15} color="#222121" />
        </Header>
        
        <Post>
          Post Users, Hello!
        </Post>
        <Photo source={require('../assets/post1.jpg')} />
        <Footer>
          <FooterCount>
            <Row>
              <IconCount>
                <AntIcon name="like1" size={12} color="#ffffff" />
              </IconCount>
              <TextCount>88 likes</TextCount>
            </Row>
            <TextCount>2k comments</TextCount>
          </FooterCount>
          <Separator />
          <FooterMenu>
            <Button>
              <Icon>
                <AntIcon name="like2" size={20} color="#424040"/>
              </Icon>
              <Text>Like</Text>
            </Button>

            <Button>
              <Icon>
                <MaterialComIcon name="comment-outline" size={20} color="#424040"/>
              </Icon> 
              <Text>Comment</Text>
            </Button>

            <Button>
              <Icon>
                <MaterialComIcon name="share-outline" size={20} color="#424040"/>
              </Icon> 
              <Text>Share</Text>
            </Button>
          </FooterMenu>
        </Footer>
      </Container>

      <BottomDivider />
    </>
  )
}