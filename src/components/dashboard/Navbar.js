// import react from "react";
import styled from "styled-components";
// import { BiSearchAlt2 } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import "./reset.css";

const Nav = styled.div`
  /* background: green;
   */
  background: linear-gradient(180deg, #2ec0d7 -0.01%, #014f90 100%);
  border-radius: 0px;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  /* width: 10vw; */
  max-width: 5rem;

  padding: 3rem 2rem;
  justify-content: flex-start;
  height: 100vh;
`;
const Logo = styled.div`
  /* border: 1px solid red; */
  color: #000;
  margin-bottom: 1.5rem;
`;

const IconButton = styled.div`
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) =>
    props.active === "true" ? "#F5CFFF" : "transparent"};
  margin-bottom: 1.5rem;
  border-radius: 10px;
  &:hover {
    background-color: #f5cff0aa;
  }
`;

const Navbar = ({ changeOrder, order }) => {
  const dashActive = order === 0 ? "true" : "false";
  const proActive = order === 1 ? "true" : "false";
  return (
    <Nav>
      <Logo>BLOG</Logo>
      <IconButton onClick={() => changeOrder(0)} active={dashActive}>
        <MdDashboard />
      </IconButton>
      <IconButton onClick={() => changeOrder(1)} active={proActive}>
        <FaUser />
      </IconButton>
      {/* <IconButton /> */}
    </Nav>
  );
};

export default Navbar;
