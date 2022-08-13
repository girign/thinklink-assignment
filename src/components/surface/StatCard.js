import { createElement } from "react";
import styled from "styled-components";
import { SpaceBetweenRow } from "../layout";
import Card from "./Card";
import {
  COLOR_SUBTLE_TEXT,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_MEDIUM,
  FONT_SIZE_MEDIUM,
} from "../../theme";

const Title = styled.div`
  color: ${COLOR_SUBTLE_TEXT};
  font-weight: ${FONT_WEIGHT_MEDIUM};
  font-size: ${FONT_SIZE_MEDIUM};
  margin-right: 100px;
`;

const Value = styled.div`
  font-size: 32px;
  color: #000;
  font-weight: ${FONT_WEIGHT_BOLD};
`;

export default function StatCard({ title, icon, value, topColor }) {
  return (
    <Card topColor={topColor}>
      <SpaceBetweenRow>
        <Title>{title}</Title>
        {createElement(icon)}
      </SpaceBetweenRow>
      <Value>{value}</Value>
    </Card>
  );
}
