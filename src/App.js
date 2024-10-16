import First from './landingpages/First';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Second from './landingpages/Second';
import Third from './landingpages/Third';
import Fourth from './landingpages/Fourth';
import Fifth from './landingpages/Fifth';
import Home from './Home';
import DFirst from './dashboard/DFirst';
import Sixth from './landingpages/Sixth';
import DSecond from './dashboard/DSecond';
import Seventh from './landingpages/Seventh';
import Eight from './landingpages/Eight';
import HFirst from './home/HFirst';
import HSecond from './home/HSecond';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/UI-With-React/first" element={<First />} />
          <Route path="/UI-With-React/second" element={<Second />} />
          <Route path="/UI-With-React/third" element={<Third />} />
          <Route path="/UI-With-React/fourth" element={<Fourth />} />
          <Route path="/UI-With-React/fifth" element={<Fifth />} />
          <Route path="/UI-With-React/sixth" element={<Sixth />} />
          <Route path="/UI-With-React/seventh" element={<Seventh />} />
          <Route path="/UI-With-React/eight" element={<Eight />} />
          <Route path="/UI-With-React/dashboard/first" element={<DFirst />} />
          <Route path="/UI-With-React/dashboard/second" element={<DSecond />} />
          <Route path="/UI-With-React/homePages/first" element={<HFirst />} />
          <Route path="/UI-With-React/homePages/second" element={<HSecond />} />
          <Route path="/UI-With-React" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
