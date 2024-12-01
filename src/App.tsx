import { EquipmentsPage, HomePage, TrainPage, TrainsPage } from "./pages/";
import { MorePage } from "./pages/";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExercisePage from "./pages/TrainPage/ExercisePage/ExercisePage";
import { EquipmentPage } from "./pages/EquipmentsPage/EquipmentPage/EquipmentPage";

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
          <Route path="/equipments" element={<EquipmentsPage />}>
            <Route path="dumbbells" element={<EquipmentPage />} />
            <Route path="barbells" element={<EquipmentPage />} />
            <Route path="trenazhor" element={<EquipmentPage />} />
            <Route path="inventory" element={<EquipmentPage />} />
          </Route>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
