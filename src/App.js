import { Route, Routes } from "react-router-dom";
import Project from "./components/project";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Project/>}/>
        <Route path="folders/:folderName" element={<Project />}/>
      </Routes>
    </div>
  );
}

export default App;
