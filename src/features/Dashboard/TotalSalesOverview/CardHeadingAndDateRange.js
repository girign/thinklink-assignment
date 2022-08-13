import styled from "styled-components";

import { FONT_SIZE_MEDIUM } from "../../../theme";

const CardHeading = styled.div`
  font-size: ${FONT_SIZE_MEDIUM};
  font-weight: 600;
  color: #262730; //dark
`;

const RangeText = styled.div`
  font-size: 14px;
  color: #868686;
  font-weight: 600;
`;

export default function CardHeadingAndDateRange({ heading, rangeText }) {
  return (
    <div>
      <CardHeading>{heading}</CardHeading>
      <RangeText>{rangeText}</RangeText>
    </div>
  );
}
