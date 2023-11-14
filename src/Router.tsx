import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '@/components/Header';
import LandingPage from '@/page/LandingPage';
import ProjectRegisterPage from '@/page/ProjectRegisterPage';
import MyPage from '@/page/MyPage';
import ProjectAbout from '@/page/ProjectAbout'
import NotFoundPage from '@/page/NotFoundPage';
import Footer from '@/components/Footer';

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/project-register' element={<ProjectRegisterPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/project-about/:id' element={<ProjectAbout />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
