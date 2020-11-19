import React from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Avatar from './Avatar';
import BottomDivider from './BottomDivider'

const Container = styled.View`
  width: 100%;
  height: 192px;
  flex-direction: row;
  align-items: center;
`;
const Card = styled.View`
  width: 106px;
  height: 170px;
  position: relative;
  margin-right: 8px;
`;
const CardStory = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 12px;
`;
const CardUser = styled.View`
  position: absolute;
  top: 8px;
  left: 8px;
  background: #FFFFFF;
  border-radius: 20px;
  width: 39px;
  height: 39px;
  align-items: center;
  justify-content: center;
`;
const CardFooter = styled.View`
  width: 100%;
  position: absolute;
  bottom: 12px;
`;
const Text = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.4);
  text-align: center;
`;

function Story() {
  return (
    <>
    <Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingLeft: 11}}
      >
        <Card>
          <CardStory 
            source={require('../assets/story1.jpg')}
          />
          <CardUser>
            <AntIcon name="plus" size={24} color="#1777f2" /> 
          </CardUser>
          <CardFooter>
            <Text>Add to Story</Text>
          </CardFooter>
        </Card>

      <Card>
        <CardStory source={require('../assets/story2.jpg')}></CardStory>
        <CardUser>
           <Avatar source={require('../assets/user2.jpg')} story={true}/>
        </CardUser>
        <CardFooter>
            <Text>Wanessa J</Text>
        </CardFooter>
      </Card>

      <Card>
        <CardStory 
          source={require('../assets/story3.jpg')}
        />
        <CardUser>
          <Avatar source={require('../assets/user3.jpg')} story={true}/>
        </CardUser>
        <CardFooter>
          <Text>Regi P</Text>
        </CardFooter>
      </Card>

      <Card>
        <CardStory source={require('../assets/story4.jpg')}></CardStory>
        <CardUser>
           <Avatar source={require('../assets/user4.jpg')} story={true}/>
        </CardUser>
        <CardFooter>
            <Text>Anna M</Text>
        </CardFooter>
      </Card>
      </ScrollView>
    </Container>
    <BottomDivider />
    </>
  )
}

export default Story;