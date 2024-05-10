/* eslint-disable global-require */
import PropTypes from 'prop-types'; // Importa PropTypes antes de importar './styles'
import { email, line } from '@config';
import { Side } from '@components';
import { StyledLinkWrapper } from './styles';

const Email = ({ isHome }) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper>
      <span>
        {line}
        {/* Simplifica la expresión y elimina el salto de línea */}
        <a href={`mailto:${email}`}>{email}</a>
        {line}
      </span>
    </StyledLinkWrapper>
  </Side>
);

Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
