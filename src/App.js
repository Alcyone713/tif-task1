import Section1 from './Components/Section1.js'
import Section2 from './Components/Section2.js';
import Section3 from './Components/Section3.js';
import Section4 from './Components/Section4.js';

function App() {
  return (
    <div className="App">
      <Section1 />
      <div style={{height: '186px', backgroundColor: "white"}}></div>
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default App;
