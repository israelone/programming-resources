import React, { useState } from 'react';
import styled from 'styled-components';
import Resource from '../resource/resource';

const Container = styled.div`
  border-radius: 2%;
  &:hover {
    border-left: 7px solid black;
  }

  width: 80%;
  -webkit-box-shadow: 3px 3px 9px 0px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 3px 3px 9px 0px rgba(50, 50, 50, 0.75);
  box-shadow: 3px 3px 9px 0px rgba(50, 50, 50, 0.75);
  justify-self: center;
`;

const List = styled.ul``;
const Header = styled.h2`
  text-align: center;
  position: relative;
  top: -20px;
  left: 24px;
  background-color: white;
  width: 121px;
  margin: 0;
  border: 2px solid black;
  display: inline-block;
`;

const Section = (props) => {
  console.log(props);
  return (
    <Container>
      <Header>Courses</Header>
      <Resource information={props.resource}></Resource>
    </Container>
  );
};

export default Section;
