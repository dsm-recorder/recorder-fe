import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './page/LandingPage';
import ProjectRegisterPage from './page/ProjectRegisterPage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project-register" element={<ProjectRegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};
