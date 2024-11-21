import { TrainPage, TrainsPage } from "./pages/";
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
          <Route path="*" element={<TrainsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
