import Sidebar from "./component/sidebar/Sidebar";
import RoutesContainer from "./routes/RoutesContainer";
import "./App.css";
function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <RoutesContainer isLoadingData={false} />
    </div>
  );
}

export default App;
