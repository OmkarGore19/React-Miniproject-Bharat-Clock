import ClockHeading from "./Components/ClockHeading";
import ClockSlogan from "./Components/ClockSlogan";
import CurrentTime from "./Components/CurrentTime";
import "./Styles/App.css";
function App() {
  return (
    <center className="container">
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}

export default App;
