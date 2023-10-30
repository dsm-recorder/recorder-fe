import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './page/LandingPage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};
