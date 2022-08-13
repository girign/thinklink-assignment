import styled from "styled-components";

import { ReactComponent as CheckIcon } from "../../assets/check.svg";

const Box = styled.div`
  height: 16px;
  width: 16px;
  border: 1.5px solid ${(props) => (props.selected ? "#EF4859" : "#8C8CA1")};
  background: ${(props) => (props.selected ? "#EF4859" : "none")};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Checkbox({ selected }) {
  return (
    <Box selected={selected}>
      <CheckIcon />
    </Box>
  );
}
