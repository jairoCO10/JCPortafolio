/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { email } from '@config';
import { NAV_DELAY, LOADER_DELAY } from '@lib/constants';
import { StyledHeroSection, StyledBigTitle, StyledBigTitle2 } from './styles';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  const one = <StyledBigTitle2>Hola Me llamo</StyledBigTitle2>;
  const two = <StyledBigTitle>Jairo Cogollo Otero</StyledBigTitle>;
  const three = (
    <StyledBigTitle slate>
      Soy Desarrollador Backend Python y Especialista En Seguridad Informatica
    </StyledBigTitle>
  );
  const four = <p>Soy un desarrollador apasionado en el desarrollo de api robustas y escables</p>;
  const five = (
    <a href={`mailto:${email}`} className="email-link">
      Contactame
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={LOADER_DELAY}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
