import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 2rem;
  background-color: #0d1b3a;
  color: white;

  .contact {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .contact-title {
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
      width: 4rem;
      background-color: #907ad6;
      align-self: center;
    }
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2rem;
    margin-top: 1rem;
    z-index: 999;
  }
`;
