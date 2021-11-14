import styled from 'styled-components';

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;

  &:after {
    content: '';
    width: 50px;
    height: 50px;
    border: 10px solid #dddddd;
    border-top-color: #009579;
    border-radius: 50%;
    animation: loading 1s ease infinite;
  }

  @keyframes loading {
    to {
      transform: rotate(1turn);
    }
  }
`;

export default LoadingSpinner;
