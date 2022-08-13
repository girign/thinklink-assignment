import styled from "styled-components";
import "./App.css";
import { Navbar } from "./components/surface";
import { Sidebar } from "./components/navigation";
import Dashboard from "./features/Dashboard";

const AppContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 56px auto;
`;

const ContentPane = styled.div`
  display: grid;
  grid-template-columns: minmax(15%, 250px) auto;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <ContentPane>
        <Sidebar />
        <Dashboard />
      </ContentPane>
    </AppContainer>
  );
}

export default App;
