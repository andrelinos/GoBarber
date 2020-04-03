import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 100%;
      height: 120px;
      max-width: 120px;
      max-height: 120px;
      image-rendering: auto;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
      transition: hover 0.3s;

      &:hover {
        transform: scale(1.05);
      }
    }

    input {
      display: none;
    }
  }
`;
