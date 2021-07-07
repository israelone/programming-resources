import logo from './logo.svg';
import './App.css';
import Section from './components/section/section';
import styled from 'styled-components';

const ResourcesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
`;

function App() {
  return (
    <>
      <h1>Programming Resources</h1>
      <ResourcesContainer>
        <Section></Section>
        <Section></Section>
        <Section></Section>
      </ResourcesContainer>
    </>
  );
}

export default App;
