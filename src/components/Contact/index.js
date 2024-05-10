/* eslint-disable global-require */

import { useEffect, useRef } from 'react';
import { email } from '@config';
import { srConfig } from '@config/sr';
import { NumberedHeading } from '@common/styles';
import { StyledContactSection } from './styles';

const Contact = () => {
  const revealContainer = useRef(null);
  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <NumberedHeading overline>Contactame</NumberedHeading>
      <p>
        Si actualmente estoy explorando nuevas oportunidades y estoy abierto a nuevas posibilidades.
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Enviar
      </a>
    </StyledContactSection>
  );
};

export default Contact;
