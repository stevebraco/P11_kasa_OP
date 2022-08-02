import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Apropos from './Pages/Apropos';
import ErrorScreen from './Pages/ErrorScreen';
import HomeScreen from './Pages/HomeScreen';
import AppartementScreen from './Pages/AppartementScreen';
import useFetch from './hooks/useFetch';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const { appartements, loading } = useFetch();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomeScreen appartements={appartements} loading={loading} />}
        />
        <Route
          path="/:id"
          element={
            <AppartementScreen appartements={appartements} loading={loading} />
          }
        />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/*" element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
