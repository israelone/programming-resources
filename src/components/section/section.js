import React, { useState } from 'react';
import styled from 'styled-components';
import Resource from '../resource/resource';

const Container = styled.div``;
const List = styled.ul``;
const Header = styled.h2``;

const Section = () => {
  return (
    <Container>
      <Header>Courses</Header>
      <Resource></Resource>
    </Container>
  );
};

export default Section;
