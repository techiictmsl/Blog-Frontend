import styled from "styled-components";
import "./reset.css";

export const DashBoardWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #eff4ff;
  padding-left: 8rem;
  padding-right: 3rem;
  @media (max-width: 1000px) {
    padding-right: 1rem;
  }
  @media (max-width: 850px) {
    padding-left: 6rem;
  }
  @media (max-width: 520px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const ProfileWrapper = styled(DashBoardWrapper)`
  @media (max-width: 520px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: 400px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  @media (max-width: 340px) {
    padding-left: 0rem;
    padding-right: 0rem;
  }
`;

export const UserNameWrapper = styled.div`
  height: 5rem;
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  & div {
    margin: 0 0.3rem;
  }
  & > div:nth-child(1) {
    display: grid;
    place-items: center;
    color: #666;
    font-weight: bold;
    cursor: pointer;
  }
  & > div:nth-child(2) {
    display: grid;
    place-items: center;
    font-weight: 600;
    font-size: 0.8rem;
    cursor: pointer;
  }
  & > div:nth-child(3) {
    height: 2rem;
    width: 2rem;
    background: url("https://100k-faces.glitch.me/random-image") no-repeat;
    background-size: cover;
    display: grid;
    place-items: center;
    border-radius: 100%;
    cursor: pointer;
  }
`;

export const Greetings = styled.div`
  height: 5rem;
  width: 100%;
  /* border: 1px solid green; */
  font-family: "Poppins";
  & h3 {
    font-weight: 600;
    font-size: 2rem;
  }
  & p {
    padding-left: 0.3rem;
    font-weight: 500;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  color: #000000;
`;

export const Stats = styled.div`
  height: 12rem;
  width: 100%;
  max-width: 900px;
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .statsCard {
    /* width: 30%; */

    height: 60%;
    background: rgba(254, 199, 83, 0.3);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    text-align: left;
    padding: 1rem;
    display: flex;
    /* align-items:flex-start; */
    justify-content: space-evenly;
    width: 16rem;

    &.like {
      background: rgba(255, 177, 177, 0.4);
    }
    &.comment {
      background: rgba(98, 225, 251, 0.3);
    }
    &.view {
      background: rgba(254, 199, 83, 0.3);
    }

    & .cardMain {
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
    }
    & .cardTitle {
      grid-area: title;

      /* border:1px solid red; */
      display: grid;
      place-items: center;
    }
    & .cardText {
      grid-area: text;
      font-size: 2rem;
      font-weight: 600;
      /* border:1px solid red; */
      display: grid;
      place-items: center;
    }
    & .cardIcon {
      width: 5rem;
      /* width : 300px; */
    }
    & .comment {
      background: url("https://image.flaticon.com/icons/png/512/1041/1041916.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }

    & .like {
      background: url("https://image.flaticon.com/icons/png/512/3237/3237429.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    & .views {
      background: url("https://image.flaticon.com/icons/png/512/2235/2235419.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    @media (max-width: 1000px) {
      width: 14rem;
    }
    @media (max-width: 850px) {
      width: 13rem;
      padding: 0.5rem;
    }
    @media (max-width: 760px) {
      width: 11rem;
      height: 50%;
      border-radius: 15px;
    }
  }
`;

export const MobileStats = styled.div`
  width: 100%;
  margin: 1rem 0;
  /* height : 300px; */
  /* border : 1px solid red; */
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-bottom: 2rem;
  & > div {
    height: 80px;
    background-color: #ff0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    & .cardMain {
      /* padding : 0 1rem;
       */
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    & .cardTitle {
      font-size: 0.9rem;
    }
    & .cardText {
      font-size: 1.8rem;
    }
  }
  & div:nth-child(1) {
    background: rgba(255, 177, 177, 0.4);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  & div:nth-child(2) {
    background: rgba(98, 225, 251, 0.3);
  }
  & div:nth-child(3) {
    background: rgba(254, 199, 83, 0.3);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;

export const Subhead = styled.div`
  font-weight: 600;
  text-align: left;
  padding-left: 0.3rem;
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  & .seeAll {
    font-size: 1.1rem;
    font-weight: 500;
  }
  & a {
    text-decoration: none;
  }
`;

export const ArticleListWrapper = styled.div`
  width: 100%;
  display: grid;
  margin-bottom: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  /* flex-wrap: wrap; */
  /* justify-content: space-between; */

  & .article {
    /* background-color: #fff; */
    /*width: 32%;
   /* padding-bottom: 32%; /* Same as width, sets height */

    /* position: relative; */

    /* flex: 0 31%; */
    padding: 2rem;
    margin-right: 5%;
    &:nth-child(3n) {
      margin-right: 0%;
    }
    height: 200px;
    margin-bottom: 5%;
    background: linear-gradient(
      89.73deg,
      rgba(61, 229, 178, 0.8) 0.17%,
      rgba(12, 178, 232, 0.8) 99.7%
    );
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    /* padding : 5rem; */
    /* width: 100%; */
    display: flex;
    position: relative;

    & .articleBg {
      /* height:z */
      /* border: 1px solid red; */
      /* width : 100%; */
      /* aspect-ratio: 1; */
      flex-grow: 1;
      height: 100%;
      width: 100%;
      background: url("https://source.unsplash.com/random") no-repeat;
      background-size: cover;
    }
    & .articleDelete {
      position: absolute;
      left: 100%;
      top: 0;
      font-size: 1.3rem;
      color: #fff;
      cursor: pointer;
      transition: all 0.3s;
      /* padding : .1rem; */
      transform: translate(-170%, 80%);
      &:hover {
        font-size: 1.35rem;
      }
    }
    & .articleContent {
      display: flex;
      flex-direction: column;
      text-align: left;
      color: #fff;
      padding: 0rem 1.5rem;
      & .articleTitle {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.8rem;
      }
    }
  }

  @media (max-width: 1350px) {
    & .article {
      padding: 1rem;
    }
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    & .article {
      &:nth-child(3n) {
        margin-right: 5%;
      }
      &:nth-child(2n) {
        margin-right: 0%;
      }
    }
  }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    & .article {
      margin-right: 0%;
      &:nth-child(3n) {
        margin-right: 0%;
      }
      &:nth-child(2n) {
        margin-right: 0%;
      }
    }
  }
`;

export const UnpublishedWrapper = styled(ArticleListWrapper)`
  & .article {
    background: linear-gradient(90deg, #d7474f 0%, #1fa6d9 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  margin-bottom: 0rem;
`;

export const ProfilePic = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 25px;

  cursor: url("pencil.png"), auto;
  /* background: ${(props) => {
    console.log(props);
    return "pencil.png";
  }}; */
  background: url(${(props) => props.image || "pencil.png"}) no-repeat;
  background-position: center;
  background-size: contain;
  @media (max-width: 900px) {
    height: 150px;
    width: 150px;
  }
  @media (max-width: 500px) {
    height: 100px;
    width: 100px;
  }
`;

export const ProfileMain = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 3fr 2fr;

  /* grid-auto-rows: 1fr; */

  & .firstRow {
    display: flex;
  }
  & div.stat {
    background-color: yellow;
    height: 200px;
  }
  & div.edit {
    background-color: purple;
    height: 200px;
    flex-grow: 1;
    margin-left: 1rem;
    border-radius: 25px;
    background: linear-gradient(
      89.73deg,
      rgba(61, 229, 178, 0.8) 0.17%,
      rgba(12, 178, 232, 0.8) 99.7%
    );
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    /* display : grid;
    grid-template-columns : 3fr 1fr; */
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    & section {
      width: 100%;
      display: flex;

      align-items: center;
      justify-content: space-around;
      color: #fff;
      cursor: pointer;
    }
    & a {
      text-decoration: none;
      color: white;
      font-size: 1.6rem;
    }
    @media (max-width: 1000px) {
      padding: 1rem;
      & a {
        font-size: 1.3rem;
      }
    }
    @media (max-width: 900px) {
      padding: 0.5rem;
      height: 150px;
    }
    @media (max-width: 500px) {
      height: 100px;
      padding: 0.2rem;
      & a {
        font-size: 1rem;
      }
    }
  }
  & div.social {
    background: linear-gradient(90deg, #d7474f 0%, #1fa6d9 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 200px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 2rem;
    & img {
      height: 60px;
      cursor: pointer;
      @media (max-width: 1300px) {
        height: 40px;
      }
      @media (max-width: 1000px) {
        height: 30px;
      }
    }
    @media (max-width: 1000px) {
      padding: 1rem;
    }
    @media (max-width: 900px) {
      padding: 0.5rem;
      height: 150px;
    }
  }
  & div.chart {
    background-color: blue;
    height: 100%;
    /* width: 200px; */
    padding: 2rem;
    background: linear-gradient(90deg, #d7474f 0%, #1fa6d9 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    display: grid;
    place-items: center;
    @media (max-width: 500px) {
      padding: 0.5rem;
    }
  }

  @media (max-width: 900px) {
    /* grid-template-columns: 1fr;
     */
    padding: 1rem;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

export const ProfileStats = styled(MobileStats)`
  margin: 0;
  justify-content: space-evenly;
  background: linear-gradient(
    89.73deg,
    rgba(61, 229, 178, 0.8) 0.17%,
    rgba(12, 178, 232, 0.8) 99.7%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  & > div {
    padding: 0 7rem;
    flex-direction: row-reverse;
    height: 100px;
    @media (max-width: 1300px) {
      padding: 0 4rem;
    }
    @media (max-width: 500px) {
      padding: 0 2rem;
    }
  }
  & .cardMain {
    /* padding: 0 2rem;
     */
    border-radius: 25px;
    width: 120px;
    & h3 {
      color: #fff;
      font-size: 2.1rem;
    }
    @media (max-width: 500px) {
      & h3 {
        font-size: 1.8rem;
      }
    }
  }
  & div:nth-child(3) {
    background: transparent;
  }
  & div:nth-child(2) {
    background: transparent;
  }
  & div:nth-child(1) {
    background: transparent;
  }
`;
