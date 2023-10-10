import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './page/Main';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};
