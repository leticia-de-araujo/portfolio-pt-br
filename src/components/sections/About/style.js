import styled from "styled-components";

export const DivAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 92vh;
  height: 100%;
  padding: 1.7rem;
  background-color: #0d1b3a;
  color: white;

  @media screen and (min-width: 600px) {
    position: relative;
    padding: 1.7rem 6rem;
  }

  @media screen and (min-width: 850px) {
    flex-direction: row;
    padding: 1.7rem;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }

  .about-content {
    display: flex;
    flex-direction: column;

    img {
      outline: 4px solid #907ad6;
      border-radius: 50%;
      width: 170px;
      height: 180px;
      align-self: center;
      margin: 1rem 0;

      @media screen and (min-width: 850px) {
        width: 190px;
        height: 200px;
      }
    }
  }

  .about-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    align-self: center;
    margin-bottom: 1rem;

    h2 {
      font-size: 1.8rem;
      align-self: center;
    }

    .divider {
      height: 4px;
      width: 6rem;
      background-color: #907ad6;
      align-self: center;
    }
  }

  .about-textAndSkills {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 850px) {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
  }

  .about-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    text-align: start;

    @media screen and (min-width: 850px) {
      width: 50%;
    }
  }

  .typewriter {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 0.3rem;
    min-height: 2rem;
  }

  .kenzie {
    text-decoration: none;
    text-decoration-line: none;
    color: white;
  }

  .kenzie:hover {
    cursor: pointer;
    color: #907ad6;
  }

  .hire-me {
    font-weight: bold;
  }

  .linkedin {
    text-decoration: none;
    text-decoration-line: none;
    color: white;
  }

  .linkedin:hover {
    cursor: pointer;
    color: #907ad6;
  }

  .email:hover {
    cursor: pointer;
    color: #907ad6;
  }

  .divider-2 {
    background: white;
    width: 96%;
  }

  .location {
    display: flex;
    gap: 3px;
    align-items: center;
  }
`;
