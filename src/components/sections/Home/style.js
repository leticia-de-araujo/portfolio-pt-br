import styled from "styled-components";

export const HomeMainDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 58px;
  min-height: 100vh;
  padding: 2rem;
  gap: 1rem;
  color: white;
  background: #eb5757; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom right,
    #000000,
    #eb5757
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom right,
    #000000,
    #eb5757
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  @media (min-width: 600px) {
    margin-top: 66px;
  }

  @media (min-width: 720px) {
    padding: 2rem 0 2rem 2rem;
    height: calc(100vh + 66px);
  }

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

  .home-text-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 2rem;
    width: 100%;

    @media (min-width: 720px) {
      width: 76%;
    }

    .home-text-top-div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      img {
        width: 50px;
        border-radius: 50%;
      }

      h1 {
        font-size: 1.1rem;
        font-weight: 500;

        @media (min-width: 600px) {
          font-size: 1.3rem;
        }

        .name {
          color: #eb5757;
        }

        .wave-emoji {
          margin-left: 5px;
          animation-duration: 1.8s;
          animation-iteration-count: infinite;
          animation-name: wave;
          display: inline-block;
          transform-origin: 70% 70%;
          animation-fill-mode: forwards;
        }
      }
    }

    h2 {
      font-size: 1.5rem;

      @media (min-width: 600px) {
        font-size: 1.7rem;
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

    .linksAndButtons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    .links {
      img {
        width: 30px;

        @media (min-width: 600px) {
          width: 40px;
        }
      }
    }
  }

  .home-banner-div {
    display: none;

    @media (min-width: 720px) {
      display: block;
    }

    img {
      width: 100%;
    }
  }
`;
