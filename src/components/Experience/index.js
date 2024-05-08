/* eslint-disable global-require */
import React, { useState, useEffect, useRef } from 'react';

import { srConfig } from '@config/sr';
import { skills } from '@config';
import { experiences } from '@config';
import { NumberedHeading } from '@common/styles';
import { StyledContactSection, StyledText } from './style';

const Experience = () => {
  const revealContainer = useRef(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);


  const handleExperienceClick = (index) => {
    setSelectedExperience(index === selectedExperience ? null : index);
  };

  return (
    <StyledContactSection id="experiencie" ref={revealContainer}>
      <NumberedHeading>Mi Experiencia</NumberedHeading>
      <div className="inner">
        <StyledText>
          {/* <p>
            Durante mi carrera, he tenido el privilegio de trabajar en proyectos emocionantes y desafiantes que han contribuido al avance de la industria tecnológica. Mi enfoque se centra en crear soluciones innovadoras y escalables que abordan las necesidades específicas de mis clientes y usuarios.

            Mi conocimiento profundo de Python y PHP me ha permitido liderar el desarrollo de proyectos de gran envergadura, donde he demostrado mi capacidad para resolver problemas complejos de manera efectiva y eficiente.

            Soy un apasionado de la programación y estoy comprometido con la excelencia en todo lo que hago. Mi objetivo es seguir desafiándome a mí mismo y superando las expectativas en cada proyecto en el que participo.
            <br></br>
            <br></br>

            Además de mi experiencia técnica, me enorgullece mi dedicación a la mejora continua. Todos los días busco oportunidades para aprender y crecer como profesional, lo que me permite ofrecer resultados excepcionales a mis clientes.

            Soy un apasionado de la programación y estoy comprometido con la excelencia en todo lo que hago. Mi objetivo es seguir desafiándome a mí mismo y superando las expectativas en cada proyecto en el que participo.

          </p> */}
          <div>
            {experiences &&
              experiences.map((experience, index) => (
                <div key={index} onClick={() => handleExperienceClick(index)}>
                  <strong>{experience.name}</strong>
                  {selectedExperience === index && <div>{experience.description}</div>}
                </div>
              ))}
          </div>


        </StyledText>

      </div>





    </StyledContactSection>
  );
};

export default Experience;
