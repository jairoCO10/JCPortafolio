/* eslint-disable global-require */

import React, { useState, useEffect, useRef } from 'react';

import { srConfig } from '@config/sr';
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
    <StyledContactSection id="experience" ref={revealContainer}>
      <NumberedHeading>Mi Experiencia</NumberedHeading>
      <div className="inner">
        <StyledText>
          <div>
            {experiences &&
              experiences.map((experience, index) => (
                <div key={experience.name} onClick={() => handleExperienceClick(index)}>
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
