
import './App.css';
import Calendar from './Calendar'

function App() {
  const selectedData = new Date("2023-01-12")

  return (
    <div className="App">
      <Calendar value={selectedData} />
    </div>
  );
}

export default App;
