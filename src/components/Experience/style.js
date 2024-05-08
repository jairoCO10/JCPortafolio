import styled from 'styled-components';

export const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px !important;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0 auto 50px;
  }
  .title {
    font-size: clamp(40px, 5vw, ${(props) => props.theme.fontSize.xxl});
    font-weight: ${(props) => props.theme.fontw.semibold};
  }
  p {
    color: ${(props) => props.theme.text.accent};
  }
  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    font-size: ${(props) => props.theme.fontSize.sm};
    margin-top: 50px;
  }
`;

export const StyledText = styled.div`
  p {
    color: ${(props) => props.theme.text.accent};
  }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      grid-template-columns: repeat(2, minmax(140px, 200px));
    }

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: ${(props) => props.theme.fontFamily.fontMono};
      font-size: ${(props) => props.theme.fontSize.sm};

      color: ${(props) => props.theme.text.accent};
      &:before {
        content: '▹';
        position: absolute;
        top: 5px;
        left: 0;
        color: ${(props) => props.theme.brand.primary};
        font-size: ${(props) => props.theme.fontSize.sm};
        line-height: 12px;
      }
    }
  }
`;