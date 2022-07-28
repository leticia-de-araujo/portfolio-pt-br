import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 1.5rem;
  background-color: #0d1b3a;
  color: white;

  .projects {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .projects-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    align-self: center;
    margin: 1rem 0;

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

  .projects-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media screen and (min-width: 600px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  .project-card {
    height: 100%;
    max-width: 30rem;
    min-height: 158px;
    background-color: #3b4353;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    &:hover {
      transform: translateY(-10px);
      background-color: #474f63;
    }

    header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 150px;
      width: 100%;
      z-index: 1000;
      position: relative;
      -webkit-box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.25);
      -moz-box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.25);

      @media screen and (max-width: 300px) {
        height: 130px;
      }

      h2 {
        color: white;
        position: absolute;
        top: 30px;
        text-align: center;
        font-size: 1.3rem;
      }

      .avatar {
        width: 6rem;
        height: 6rem;
        position: absolute;
        bottom: -19%;
        padding: 12px;
        z-index: 999;
        -webkit-box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.25);

        @media screen and (max-width: 300px) {
          width: 5rem;
          height: 5rem;
        }
      }
    }

    .project-info {
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: auto;
      min-height: 230px;
      padding: 0 1rem;
      margin-top: 1rem;

      ul {
        align-self: center;
        text-align: start;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0.7rem;

        & > li > p {
          display: inline-flex;
          font-size: 1rem;
          gap: 8px;

          @media screen and (max-width: 300px) {
            font-size: 0.8rem;
          }

        
        }

        & > li > p > span {
          font-size: 2rem;
          line-height: 1rem;
          align-self: flex-start;

          @media screen and (max-width: 300px) {
            font-size: 1.5rem;
          }
        }
      }
    }

    .project-techs {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;

      ul {
        color: white;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
        align-items: center;

        @media screen and (min-width: 600px) {
          height: 100px;
        }

        li {
          font-size: 0.7rem;
          background-color: #5e6a80;
          border-radius: 5px;
          padding: 5px 10px;

          @media screen and (max-width: 300px) {
            font-size: 0.6rem;
          }
        }
      }
    }

    .project-nav {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      padding: 0 1rem;
      margin-bottom: 1rem;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 300px) {
        gap: 0.7rem;
      }

      a {
        color: white;
        text-decoration: none;
      }

      button {
        text-transform: capitalize;
        font-size: 0.8rem;

        @media screen and (max-width: 300px) {
          font-size: 0.7rem;
        }
      }
    }
  }
`;
