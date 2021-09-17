import styled from "styled-components";

export const ModalHead = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  margin: 0 auto;
  padding-top: 2rem;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  & .avatarWrapper {
    display: flex;
  }
  & .avatar {
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
  }
  & .nameAndDesignation {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 1rem;
    padding-bottom: 1rem;
  }
  & p.name {
    font-size: 1.6rem;
    font-weight: bold;
  }
  & p.designation {
    font-size: 1.2rem;
    /* font-weight: bold; */
  }
  & .socialWrapper {
    /* padding : 1rem; */
    & .socialIcon {
      margin: 0 0.5rem;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  @media (max-width: 760px) {
    padding: 0.5rem 1rem;
    padding-top: 1rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    & p.name {
      font-size: 1.4rem;
    }
    & p.designation {
      font-size: 1.05rem;
    }
    & .socialWrapper {
      & .socialIcon {
        margin: 1rem 0.5rem;
        width: 2rem;
        height: 2rem;
      }
    }
  }
  @media (max-width: 400px) {
    padding: 0.5rem;
    align-items: center;
    & .avatarWrapper {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    & .nameAndDesignation {
      align-items: center;
    }
  }
`;

export const ModalTitle = styled.div`
  font-size: 2.5rem;
  padding: 0.5rem 2rem;
  font-weight: bold;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    font-size: 2rem;
  }
  @media (max-width: 760px) {
    font-size: 1.8rem;
    padding: 0.5rem 1rem;
  }
  @media (max-width: 500px) {
    font-size: 1.4rem;
    padding: 0.5rem;
  }
`;

export const Banner = styled.img`
  width: 100%;
  padding: 2rem;
  max-width: 1440px;
  margin: 0 auto;
  align-self: center;
  height: 400px;
  @media (max-width: 760px) {
    padding: 1rem;
    height: 300px;
  }
  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;
export const BannerWrapepr = styled.div`
  margin: 0 auto;
  display: grid;
  place-items: center;
`;

export const CloseButton = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: absolute;
  left: 100%;
  transform: translateX(-3rem);
  top: 0.8rem;
  background: #fef;
  cursor: pointer;
  text-align: center;
  /* line-height: 2.5rem; */
  display: grid;
  place-items: center;
  font-size: 1.4rem;
`;

export const ActionButtonWrapper = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .accept,
  .reject {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 3rem;
    width: 8rem;
    border-radius: 10px;
    color: #fff;
  }
  & .accept {
    background: green;
  }
  & .reject {
    background: red;
  }
  @media (max-width: 600px) {
    padding: 1rem 1rem;
  }
  @media (max-width: 450px) {
    padding: 1rem 0.5rem;
    & .accept,
    .reject {
      width: 6rem;
    }
  }
`;

export const Text = styled.div`
  padding: 2rem;
  text-align: justify;
  font-size: 1.3rem;
  @media (max-width: 760px) {
    padding: 1rem;
    font-size: 1.2rem;
  }
  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;
