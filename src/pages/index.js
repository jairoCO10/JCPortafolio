import styled from 'styled-components';
import { Hero, About, Featured, Projects, Contact, Experience } from '@components';
// import {  } from '../components';

const StyledMainContainer = styled.section`
  width: 100%;
  max-width: 900px;
  counter-reset: section;
  section {
    margin: 0 auto;
    padding: 100px 0;
  }
`;

const IndexPage = () => (
  <StyledMainContainer className="fillHeight">
    <Hero />
    <About />
    <Featured />
    <Projects />
    <Experience />
    <Contact />
  </StyledMainContainer>
);

export default IndexPage;
