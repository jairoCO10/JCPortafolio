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
        Actualmente estoy explorando nuevas oportunidades y estoy abierto a nuevas posibilidades.
        Si tienes alguna pregunta o simplemente quieres saludar, estaré encantado de escucharte y responder lo mejor que pueda.
        <br></br>
        ¡Gracias por tu interés y espero tener la oportunidad de conectar contigo
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Enviar
      </a>
    </StyledContactSection>
  );
};

export default Contact;
