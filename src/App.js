import "./App.css";
import LineChart from "./components/LineChart";

function App() {
  
  return (
    <div
      className="d-flex"
      style={{ height: "100vh", backgroundColor: "#f9f4e6" }}
    >
      <div
        className="App container border rounded-5 border-4 my-auto border-black p-3"
        style={{ height: "80%" }}
      >
        <LineChart/>
      </div>
    </div>
  );
}

export default App;
