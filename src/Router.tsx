import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '@/components/Header';
import LandingPage from '@/page/LandingPage';
import ProjectRegisterPage from '@/page/ProjectRegisterPage';
import MyPage from '@/page/MyPage';
import NotFoundPage from '@/page/NotFoundPage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/project-register' element={<ProjectRegisterPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
