import "./App.css";
import LineChart from "./components/LineChart";
import rawData from "./data/data.json";

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
        <div className=" border rounded-5 p-5" style={{backgroundColor:"#c79db7" , height: "500px" , width:"500px"}}>
          <div>
            <div>visits summary:
            <strong>{rawData.length}</strong> </div>
            <div>From : <strong>{rawData[0].date}</strong></div>
          </div>
          <div style={{ height: "500px" }}>
            <LineChart />
          </div>
        </div>
        <div>test</div>
      </div>
    </div>
  );
}

export default App;
