import styled from "styled-components";
import { ReactComponent as CorkowlLogo } from "./assets/corkowlLogo.svg";
import { ReactComponent as BellIcon } from "./assets/bell.svg";

const NavbarContainer = styled.div`
  background-color: #811434;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
`;

export default function Navbar({ children }) {
  return (
    <NavbarContainer>
      <CorkowlLogo height={17} />
      <BellIcon height={15} width={18} />
    </NavbarContainer>
  );
}
