import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import AppartementPage from './pages/AppartementPage';
import useFetch from './hooks/useFetch';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GlobalStyles from './styles/GlobalStyles';
import ErrorPage from './pages/ErrorPage';

function App() {
  const { appartements, loading } = useFetch();

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage appartements={appartements} loading={loading} />}
        />
        <Route
          path="/:id"
          element={
            <AppartementPage appartements={appartements} loading={loading} />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
