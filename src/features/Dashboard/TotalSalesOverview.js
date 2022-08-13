import styled from "styled-components";

const TotalSalesOverviewContainer = styled.div`
  border-radius: 4px;
  border: 1px solid #fff2ee;
  padding: 16px;
`;

export default function TotalSalesOverview() {
  return (
    <TotalSalesOverviewContainer>
      <div>
        <div>Total Sales Overview</div>
        <div>7 - 13 Aug, 2020</div>
      </div>
      <div>
        <div>Refresh Metrics</div>
        <div>Filter by</div>
      </div>
    </TotalSalesOverviewContainer>
  );
}
