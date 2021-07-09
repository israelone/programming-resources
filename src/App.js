import logo from './logo.svg';
import './App.css';
import Section from './components/section/section';
import styled from 'styled-components';

const ResourcesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
`;

const resources = [
  {
    id: 1,
    name: 'FreeCodeCamp',
    url: 'https://www.freecodecamp.org/',
    description:
      'Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world. ',
    tags: ['HTML', 'CSS', 'Javascript', 'Front-End', 'Full-Stack'],
  },
  {
    id: 2,
    name: 'The Odin Project',
    url: 'https://www.theodinproject.com/',
    description:
      'The Odin Project is one of those "What I wish I had when I was learning" resources. Not everyone has access to a computer science education or the funds to attend an intensive coding school and neither of those is right for everyone anyway. This project is designed to fill in the gap for people who are trying to hack it on their own but still want a high quality education. ',
    tags: ['HTML', 'CSS', 'Javascript', 'Front-End', 'Full-Stack'],
  },
];

function App() {
  return (
    <>
      <h1>Programming Resources</h1>
      <ResourcesContainer>
        {resources.map((resource) => {
          return <Section resource={resource} />;
        })}
        {/* <Section></Section>
        <Section></Section>
        <Section></Section> */}
      </ResourcesContainer>
    </>
  );
}

export default App;
