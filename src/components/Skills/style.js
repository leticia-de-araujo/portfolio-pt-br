import styled from "styled-components";

export const SkillsDiv = styled.div`
  position: relative;
  width: 100%;
  max-width: 37.5rem;
  color: white;

  @media screen and (min-width: 850px) {
    width: 450px;
  }

  .skills-wrapper {
    position: relative;
    width: 100%;
    max-width: 37.5rem;
    text-align: center;

    h2 {
      font-size: 1.5rem;
      margin: 1.5rem 0 1rem 0;
    }
  }

  .skills-ul {
    position: relative;
    padding-left: 0;
    list-style: none;
    font-size: 3rem;
    margin: 0 auto;
    width: 90%;
  }

  .skill-bar-wrapper {
    overflow: hidden;
    position: relative;
    display: flex;
    background-color: #3e4555;
    border-radius: 2px;
    height: 1.875rem;
    margin-bottom: 0.625rem;
  }

  .skill-bar {
    margin-bottom: 1.25rem;
    display: flex;
    flex-direction: column;
    height: 1.875rem;
    background-color: #907ad6;
    border-radius: 2px 0px 0px 2px;
  }

  .skill-name {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px 0px 0px 2px;
    left: 0;
    width: 5rem;
    height: 1.875rem;
    font-size: 0.75rem;
    background-color: #4f518c;
    font-weight: 600;
    color: white;
  }

  .loading {
    height: 100%;
    font-size: 0.8rem;
    display: flex;
    margin-left: 45%;
    align-items: center;
    gap: 7px;
  }
`;
