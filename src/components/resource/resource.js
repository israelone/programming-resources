import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 20px;
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
  cursor: pointer;
`;

const Header = styled.h2``;
const SubHeader = styled.h3``;
const Description = styled.p``;
const Divider = styled.hr`
  margin: 0;
  width: 90%;
`;

const ShowMoreButton = styled.button`
  margin: 10px;
`;

const DescriptionContainer = styled.div`
  height: ${(props) =>
    props.showDescription === false ? '50px' : props.scrollHeight + 'px'};
  overflow: hidden;
  transition: height 0.2s ease-out;
`;

const DescriptionSection = styled.div``;

const Resource = (props) => {
  console.log(props);
  const [showDescription, setShowDescription] = useState(false);
  const [scrollHeight, setScrollHeight] = useState('50');

  const showDescriptionHandler = (e) => {
    console.log(showDescription, scrollHeight, e);
    setScrollHeight(e.target.previousElementSibling.scrollHeight.toString());
    setShowDescription(!showDescription);
  };

  return (
    <Container>
      <Header>
        <a href={props.information.url}>{props.information.name}</a>
      </Header>
      <SubHeader></SubHeader>
      <DescriptionSection>
        <DescriptionContainer
          showDescription={showDescription}
          scrollHeight={scrollHeight}
        >
          <Description>{props.information.description}</Description>
        </DescriptionContainer>
        <ShowMoreButton onClick={showDescriptionHandler}>More</ShowMoreButton>
      </DescriptionSection>
      <Divider></Divider>
      <TagsList>
        {props.information.tags.map((tag) => {
          return <Tag>{tag}</Tag>;
        })}
      </TagsList>
    </Container>
  );
};

export default Resource;
