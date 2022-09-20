import styled from "styled-components";

export const HomeMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: calc(100vh + 67px);
  color: white;

  .language {
    position: absolute;
    top: 3px;
    right: 3px;
    text-decoration: none;

    button {
      font-size: 0.9rem;
      color: white;
      display: flex;
      gap: 3px;
      align-items: center;
      justify-content: center;
    }

    @media (min-width: 600px) {
      top: 6px;
      right: 6px;
    }
  }

  .homeInnerDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 1rem;

    h1 {
      font-size: 1.7rem;

      @media (min-width: 600px) {
        font-size: 2rem;
      }

      .name {
        color: #907ad6;
      }

      .wave-emoji {
        animation-duration: 1.8s;
        animation-iteration-count: infinite;
        animation-name: wave;
        display: inline-block;
        transform-origin: 70% 70%;
        animation-fill-mode: forwards;
      }
    }

    h2 {
      font-size: 1.5rem;

      @media (min-width: 600px) {
        font-size: 1.8rem;
      }
    }

    @keyframes wave {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(-10deg);
      }
      20% {
        transform: rotate(12deg);
      }
      30% {
        transform: rotate(-10deg);
      }
      40% {
        transform: rotate(9deg);
      }
      50% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    .links {
      margin-top: 2rem;

      img {
        width: 30px;

        @media (min-width: 600px) {
          width: 40px;
        }
      }
    }
  }
`;
