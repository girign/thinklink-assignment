import styled from "styled-components";
import { SpaceBetweenRow } from "../../../components/layout";
import {
  COLOR_PEACH_LIGHT,
  COLOR_DARK,
  COLOR_SUCCESS,
  FONT_WEIGHT_BOLD,
  FONT_SIZE_MEDIUM,
} from "../../../theme";
import { ReactComponent as TrendIcon } from "../../../assets/trend.svg";
import { useState } from "react";
import { LineChart } from "../../../components/data";

const GraphSectionContainer = styled.div`
  border-right: 1px solid ${COLOR_PEACH_LIGHT};
  padding: 16px;
`;

const SalesValue = styled.span`
  font-size: 48px;
  color: ${COLOR_DARK};
`;

const Label = styled.div`
  display: flex;
  font-size: ${FONT_SIZE_MEDIUM};
  align-items: center;
`;

const TrendCaption = styled.div`
  color: ${COLOR_SUCCESS};
  font-weight: ${FONT_WEIGHT_BOLD};
  font-size: ${FONT_SIZE_MEDIUM};
`;

const data = [
  { day: "MON", sales: 5000 },
  { day: "TUE", sales: 7500 },
  { day: "WED", sales: 5000 },
  { day: "THU", sales: 8500 },
  { day: "FRI", sales: 6000 },
  { day: "SAT", sales: 10000 },
  { day: "SUN", sales: 50000 },
];

const ModdedLineChart = styled(LineChart)`
  margin-top: 30px;
`;

export default function GraphSection() {
  const [salesValue, setSalesValue] = useState(74729);
  const [trend, setTrend] = useState(21);

  return (
    <GraphSectionContainer>
      <SpaceBetweenRow>
        <div>
          <SalesValue>$74,729.00</SalesValue>
          <TrendCaption>
            <TrendIcon />
            &nbsp;
            {`${
              trend > 0 ? "+" : trend < 0 ? "-" : ""
            }${trend}% from last week`}
          </TrendCaption>
        </div>

        <Label>
          <TrendIcon />
          &nbsp; Highest revenue since 2 weeks ago
        </Label>
      </SpaceBetweenRow>
      <ModdedLineChart
        data={data}
        height={260}
        width={750}
        strokeColor={COLOR_SUCCESS}
        dotColor={COLOR_SUCCESS}
      />
    </GraphSectionContainer>
  );
}
