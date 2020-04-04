import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;

      &:hover {
        cursor: pointer;
        border-radius: 8px;
        transform: scale(1.1);
        -webkit-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.5);
        box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.5);
      }
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  transition: all 0.2s;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: #777778;
  }

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.5);
  }
`;
