import styled from "styled-components";
import {
  COLOR_PRIMARY,
  COLOR_SUBTLE_TEXT,
  COLOR_SUCCESS,
  FONT_WEIGHT_BOLD,
  FONT_SIZE_MEDIUM,
} from "../../../theme";
import { ReactComponent as TrendIcon } from "../../../assets/trend.svg";

const ProfitAndSoldSectionContainer = styled.div`
  padding: 24px 19px;
`;

const Caption = styled.div`
  font-weight: ${FONT_WEIGHT_BOLD};
  color: ${COLOR_SUBTLE_TEXT};
  font-size: ${FONT_SIZE_MEDIUM};
`;

const ProfitAmount = styled.div`
  font-weight: ${FONT_WEIGHT_BOLD};
  font-size: 32px;
  color: ${COLOR_PRIMARY};
  margin-top: 16px;
`;

const TrendCaption = styled.div`
  color: ${COLOR_SUCCESS};
  font-size: ${FONT_SIZE_MEDIUM};
  font-weight: ${FONT_WEIGHT_BOLD};
`;

export default function ProfitAndSoldSection() {
  return (
    <ProfitAndSoldSectionContainer>
      <Caption>Total Profit</Caption>
      <ProfitAmount>$12,545.00</ProfitAmount>
      <TrendCaption>
        <TrendIcon />
        &nbsp;+23% from last week
      </TrendCaption>
    </ProfitAndSoldSectionContainer>
  );
}
