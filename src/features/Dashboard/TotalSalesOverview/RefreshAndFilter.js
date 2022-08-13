import styled from "styled-components";
import {
  COLOR_DARK,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_MEDIUM,
  COLOR_SUBTLE_TEXT,
  FONT_SIZE_MEDIUM,
} from "../../../theme";
import { ReactComponent as RefreshIcon } from "../../../assets/refresh.svg";

const RefreshAndFilterContainer = styled.div`
  margin-top: 12px;
  display: flex;
`;

const RefreshSection = styled.div`
  font-weight: ${FONT_WEIGHT_MEDIUM};
  font-size: 14px;
  color: ${COLOR_DARK};
`;

const FilterSection = styled.div`
  margin-left: 32px;
`;

const FilterCaption = styled.div`
  border-right: 1px solid ${COLOR_SUBTLE_TEXT};
  color: ${COLOR_SUBTLE_TEXT};
  font-size: ${FONT_SIZE_MEDIUM};
  font-weight: ${FONT_WEIGHT_BOLD};
  padding-right: 7.5px;
`;

export default function RefreshAndFilter({ onRefresh, onFilterChange }) {
  return (
    <RefreshAndFilterContainer>
      <RefreshSection>
        <RefreshIcon height="14" width="14" />
        &nbsp;&nbsp;Refresh Metrics
      </RefreshSection>
      <FilterSection>
        <FilterCaption>Filter By</FilterCaption>
      </FilterSection>
    </RefreshAndFilterContainer>
  );
}
