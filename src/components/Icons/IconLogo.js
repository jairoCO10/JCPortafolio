/* eslint-disable max-len */
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const IconLogo = ({ theme, width = 36.581, height = 50.186, ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 106.581 120.186" {...props}>
      <g fill={theme.brand.primary}>
        <path d="M53.29 120.187a9.233 9.233 0 01-4.619-1.236l-14.7-8.7c-2.193-1.228-1.125-1.661-.4-1.914a29.309 29.309 0 006.649-3 1.129 1.129 0 011.095.082l11.3 6.702a1.459 1.459 0 001.365 0L98.015 86.7a1.386 1.386 0 00.674-1.193V34.66a1.421 1.421 0 00-.682-1.215l-44.04-25.4a1.386 1.386 0 00-1.361 0L8.593 33.454a1.417 1.417 0 00-.7 1.206v50.827a1.352 1.352 0 00.691 1.176l12.079 6.971c6.552 3.266 10.56-.584 10.56-4.456V39a1.288 1.288 0 011.292-1.292h5.58A1.288 1.288 0 0139.379 39v50.182c0 8.735-4.756 13.736-13.04 13.736a18.839 18.839 0 01-10.143-2.756l-11.581-6.64a9.3 9.3 0 01-4.619-8.035V34.66a9.28 9.28 0 014.619-8.048L48.663 1.183a9.641 9.641 0 019.254 0l44.04 25.428a9.293 9.293 0 014.623 8.027v50.849a9.319 9.319 0 01-4.623 8.035L57.915 118.95a9.237 9.237 0 01-4.627 1.236z" />
      </g>
    </svg>
  );
};

IconLogo.propTypes = {
  theme: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default withTheme(IconLogo);
