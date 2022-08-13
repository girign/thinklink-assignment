import { createElement, useState } from "react";
import styled from "styled-components";
import SidebarButton from "./SidebarButton";

import { ReactComponent as CatalogIcon } from "./assets/catalog.svg";
import { ReactComponent as CustomersIcon } from "./assets/customers.svg";
import { ReactComponent as DashboardIcon } from "./assets/dashboard.svg";
import { ReactComponent as OrdersIcon } from "./assets/orders.svg";
import { ReactComponent as ReportsIcon } from "./assets/reports.svg";
import { ReactComponent as SettingsIcon } from "./assets/settings.svg";

const SidebarContainer = styled.div`
  border-right: 1px solid #ecf1f4;
  height: 100%;
`;

const sideBarItems = [
  { name: "Dashboard", icon: DashboardIcon },
  { name: "Inventory", icon: CatalogIcon },
  { name: "Orders", icon: OrdersIcon },
  { name: "Customers", icon: CustomersIcon },
  { name: "Reports", icon: ReportsIcon },
  { name: "Settings", icon: SettingsIcon, customWidth: 24, customHeight: 24 },
];

const ButtonLabel = styled.span`
  margin-left: 20px;
`;

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SidebarContainer>
      {sideBarItems.map((item, index) => (
        <SidebarButton
          active={index === activeIndex}
          key={index}
          onClick={() => setActiveIndex(index)}
        >
          <span color={"red"}>{createElement(item.icon)}</span>
          <ButtonLabel>{item.name}</ButtonLabel>
        </SidebarButton>
      ))}
    </SidebarContainer>
  );
}
