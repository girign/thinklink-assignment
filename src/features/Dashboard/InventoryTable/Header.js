import styled from "styled-components";
import Checkbox from "../../../components/input/Checkbox";

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 5% 30% 10% 5% 5% 20% 10% 10% 5%;
`;

const ColHeading = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  border-top: 1px solid #ecf1f4;
  border-bottom: 1px solid #ecf1f4;
  font-size: 12px;
  font-weight: 700;
  color: #485572;
  text-transform: uppercase;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <ColHeading>
        <Checkbox />
      </ColHeading>
      <ColHeading>product</ColHeading>
      <ColHeading>rating</ColHeading>
      <ColHeading>vintage</ColHeading>
      <ColHeading>qty</ColHeading>
      <ColHeading>volume</ColHeading>
      <ColHeading>cost</ColHeading>
      <ColHeading>price</ColHeading>
    </HeaderContainer>
  );
}
