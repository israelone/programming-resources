import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-left: 20px;
`;

const TagsList = styled.ul`
  margin: 0;
  margin-bottom: 15px;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  justify-self: center;
  flex-wrap: wrap;
`;

const Tag = styled.li`
  background-color: indianred;
  margin: 10px;
  list-style: none;
  padding: 4px;
`;

const Header = styled.h2``;
const SubHeader = styled.h3``;
const Description = styled.p``;
const Divider = styled.hr`
  margin: 0;
  width: 90%;
`;

const Resource = () => {
  return (
    <Container>
      <Header>
        <a href="www.freecodecamp.com">FreeCodeCamp</a>
      </Header>
      <SubHeader>
        Our mission: to help people learn to code for free. We accomplish this
        by creating thousands of videos, articles, and interactive coding
        lessons - all freely available to the public. We also have thousands of
        freeCodeCamp study groups around the world.
      </SubHeader>
      <Divider></Divider>
      <TagsList>
        <Tag>HTML</Tag>
        <Tag>CSS</Tag>
        <Tag>Javascript</Tag>
        <Tag>HTML</Tag>
        <Tag>CSS</Tag>
        <Tag>Javascript</Tag>
      </TagsList>
    </Container>
  );
};

export default Resource;
