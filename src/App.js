import logo from './logo.svg';
import './App.css';
import Section from './components/section/section';
import styled from 'styled-components';
const ResourcesContaine = styled.div``;

function App() {
  return (
    <>
      <h1>Programming Resources</h1>
      <ResourcesContaine>
        <Section></Section>
        <Section></Section><Section></Section>
      </ResourcesContaine>
    </>
  );
}

export default App;
