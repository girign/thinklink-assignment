import { createElement } from "react";
import styled from "styled-components";
import Button from "./Button";

const ButtonModded = styled(Button)`
  color: #fff;
`;

const ButtonLabel = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
`;

export default function ButtonWithIcon({ icon, label }) {
  return (
    <ButtonModded>
      {createElement(icon)}
      <ButtonLabel>{label}</ButtonLabel>
    </ButtonModded>
  );
}
