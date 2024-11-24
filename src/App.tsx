import { EquipmentPage, HomePage, TrainPage, TrainsPage } from "./pages/";
import { MorePage } from "./pages/";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExercisePage from "./pages/TrainPage/ExercisePage/ExercisePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/train-page/:id" element={<TrainPage />}>
            <Route path="exercise-page" element={<ExercisePage />} />
          </Route>
          <Route path="/more" element={<MorePage />} />
          <Route path="/trains" element={<TrainsPage />} />
          <Route path="/equipments" element={<EquipmentPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
