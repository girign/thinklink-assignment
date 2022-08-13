import styled from "styled-components";

const TrendFigure = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => (props.good ? "#2FCA72" : "red")};
`;

export default TrendFigure;
