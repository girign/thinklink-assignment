import styled from "styled-components";
import { SpaceBetweenRow } from "../../../components/layout";
import { COLOR_PEACH_LIGHT } from "../../../theme";
import CardHeadingAndDateRange from "./CardHeadingAndDateRange";
import GraphSection from "./GraphSection";
import ProfitAndSoldSection from "./ProfitAndSoldSection";
import RefreshAndFilter from "./RefreshAndFilter";

const TotalSalesOverviewContainer = styled.div`
  margin-top: 16px;
  border-radius: 4px;
  border: 1px solid ${COLOR_PEACH_LIGHT};
  padding: 16px 0px 0px 16px;
  width: 100%;
`;

const TopRowWithBottomBorder = styled(SpaceBetweenRow)`
  border-bottom: 1px solid ${COLOR_PEACH_LIGHT};
  padding-bottom: 20px;
`;

const TotalSalesOverviewBody = styled.div`
  display: grid;
  grid-template-columns: 851px 271px;
`;

export default function TotalSalesOverview() {
  return (
    <TotalSalesOverviewContainer>
      <TopRowWithBottomBorder>
        <CardHeadingAndDateRange
          heading={"Total Sales Overview"}
          rangeText={"7 - 13 Aug, 2020"}
        />
        <RefreshAndFilter />
      </TopRowWithBottomBorder>
      <TotalSalesOverviewBody>
        <GraphSection />
        <ProfitAndSoldSection />
      </TotalSalesOverviewBody>
    </TotalSalesOverviewContainer>
  );
}
