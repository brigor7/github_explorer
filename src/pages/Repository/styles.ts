import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8a8;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 3px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d3d;
        font-weight: bold;
      }
      p {
        font-size: 14px;
        color: #737373;
        margin-top: 3px;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }
    }

    strong {
      display: block;
      font-size: 36px;
      color: #3d3d3d;
    }

    span {
      display: block;
      margin-top: 3px;
      color: #6c6c6c;
    }
  }
`;

export const Issues = styled.section`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 10px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.5s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin-left: 16px;
      strong {
        color: #3d3d3d;
        font-size: 20px;
      }
      p {
        font-size: 18px;
        color: #8a8a8a;
        margin-top: 5px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
