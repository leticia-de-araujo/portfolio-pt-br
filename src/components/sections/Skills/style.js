import styled from "styled-components";

export const SkillsDiv = styled.div`
  position: relative;
  width: 100%;
  max-width: 37.5rem;
  color: white;

  @media screen and (min-width: 850px) {
    width: 450px;
  }

  h2 {
    font-size: 1.5rem;
    margin: 1.5rem 0;
  }

  .skills-ul {
    position: relative;
    padding-left: 0;
    list-style: none;
    font-size: 3rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .skill-box-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    height: 5rem;
    width: 6rem;
    padding: 0.5rem;
    gap: 0.6rem;

    &:hover {
      background-color: #070707;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: #eb5757;
    }
  }

  .skill-name {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
  }
`;
