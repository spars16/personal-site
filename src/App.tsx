import React from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from './App.module.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
// import Footer from './components/Footer/Footer';

import Home from './views/Home/Home';
import About from './views/About/About';
import Projects from './views/Projects/Projects';
import Contact from './views/Contact/Contact';
import NotFound from './views/NotFound/NotFound';

function App() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.contentContainer}>
        <Sidebar />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
