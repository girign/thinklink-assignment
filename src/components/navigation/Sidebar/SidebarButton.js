import styled from "styled-components";

const SidebarButton = styled.div`
  background-color: ${(props) => (props.active ? "#F7F1F3" : "#fff")};
  color: ${(props) => (props.active ? "#811434" : "#485572")};
  height: 56px;
  display: flex;
  align-items: center;
  padding-left: 31px;
  border-right: 3px solid ${(props) => (props.active ? "#811434" : "none")};
  &:hover {
    cursor: pointer;
  }
`;

export default SidebarButton;
