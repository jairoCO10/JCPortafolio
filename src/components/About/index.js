/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import { NumberedHeading } from '@common/styles';
import Image from 'next/image';
import { skills } from '@config';
import { srConfig } from '@config/sr';
import { StyledAboutSection, StyledText, StyledPic } from './styles';

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <NumberedHeading>Sobre Mi</NumberedHeading>
      <div className="inner">
        <StyledText>
          <>
          <p>
            Durante mi carrera, he tenido el privilegio de trabajar en proyectos emocionantes y desafiantes que han contribuido al avance de la industria tecnológica. Mi enfoque se centra en crear soluciones innovadoras y escalables que abordan las necesidades específicas de mis clientes y usuarios.

            Mi conocimiento profundo de Python y PHP me ha permitido liderar el desarrollo de proyectos de gran envergadura, donde he demostrado mi capacidad para resolver problemas complejos de manera efectiva y eficiente.

            Soy un apasionado de la programación y estoy comprometido con la excelencia en todo lo que hago. Mi objetivo es seguir desafiándome a mí mismo y superando las expectativas en cada proyecto en el que participo.
            <br></br>
            <br></br>

            Además de mi experiencia técnica, me enorgullece mi dedicación a la mejora continua. Todos los días busco oportunidades para aprender y crecer como profesional, lo que me permite ofrecer resultados excepcionales a mis clientes.

            Soy un apasionado de la programación y estoy comprometido con la excelencia en todo lo que hago. Mi objetivo es seguir desafiándome a mí mismo y superando las expectativas en cada proyecto en el que participo.

          </p>

          </>

          <ul className="skills-list">
            {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Image width={300} height={400} blu src="/avatar.jpg" alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
