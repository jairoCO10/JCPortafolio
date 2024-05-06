import PropTypes from 'prop-types';
import { email, line } from '@config';
import { Side } from '@components';
import { StyledLinkWrapper } from './styles';

const Email = ({ isHome }) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper>
      <span> {line} <a href={`mailto:${email}`}>{email}</a> {line} </span>
    </StyledLinkWrapper>
  </Side>
);

Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
