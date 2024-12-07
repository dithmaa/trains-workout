import { EquipmentsPage, HomePage, TrainPage, TrainsPage } from "./pages/";
import { MorePage } from "./pages/";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/train-page/:id" element={<TrainPage />}></Route>
          <Route path="/more" element={<MorePage />} />
          <Route path="/trains" element={<TrainsPage />} />
          <Route path="/equipments" element={<EquipmentsPage />}></Route>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
