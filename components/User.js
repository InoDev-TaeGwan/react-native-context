import React from 'react';
import {UserConsumer} from "../contexts/user";
import styled from "styled-components/native";

const StyledText = styled.Text`
  font-size: 24px;
  margin:10px;
`

 /*
 * 생성된 Context 오브젝트는 입력된 기본값 외에도 Consumer 컴포넌트와 Provider 컴포넌트를 갖고있다.
 * 이번에는 Context 의 내용을 읽고 사용하는 Consumer 컴포넌트의 사용방법을 보자
 *
 * Consumer 컴포넌트는 상위 컴포넌트 중 가장 가까운 곳에 있는 Provider 컴포넌트가 전달하는 데이터를 이용한다.
 * 만약 상위 컴포넌트 중 Provider 컴포넌트가 없다면 createContext 함수의 파라미너로 전달된 기본값을 사용한다.
 *
 * Consumer 컴포넌트의 자식은 반드시 리액트 컴포넌트를 반환하는 함수여야 한다.
 * 이 함수는 Context 의 현재값을 파라미터로 전달받아 데이터를 사용할 수 있다.
 *
 *

 */

const User = () => {
    return (
        // <UserContext.Provider value={{name: 'React Native'}}>
        //     <UserContext.Consumer>
        //         {value => <StyledText>Name: {value.name}</StyledText>}
        //      </UserContext.Consumer>
        // </ UserContext.Provider>
        <UserConsumer>
            {({user}) => <StyledText>Name:{user.name}</StyledText>}
        </UserConsumer>
    );
};

export default User;
