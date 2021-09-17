import React from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const MobileNavWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 4.5rem;
  /* background-color: red; */
  position: fixed;
  bottom: 0.2rem;
  /* background-color: #fff; */
  /* display: grid;
  place-content: center; */
  z-index: 1200;
  & nav {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    border-radius: 20px;
    /* /* width: 100%; */
    /* height: 100%; */
    /* background-color: #fff;
    
    border */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* border: 1px solid red; */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: linear-gradient(180deg, #2ec0d7 -0.01%, #014f90 100%);
  }
`;

const NavItems = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: blue;
  display: grid;
  place-items: center;
  background-color: ${(props) =>
    props.active === "true" ? "#F5CFFF" : "transparent"};
  border-radius: 10px;
  &:hover {
    background-color: #f5cff0aa;
  }
`;

function MobileNavBar({ changeOrder, order }) {
    const dashActive = order === 0 ? "true" : "false";
    const proActive = order === 1 ? "true" : "false";
  return (
    <MobileNavWrapper>
      <nav>
        <NavItems onClick={() => changeOrder(0)} active={dashActive}>
          <MdDashboard color="#fff" />
        </NavItems>
        <NavItems onClick={() => changeOrder(1)} active={proActive}>
          <FaUser color="#fff" />
        </NavItems>
      </nav>
    </MobileNavWrapper>
  );
}

export default MobileNavBar;
