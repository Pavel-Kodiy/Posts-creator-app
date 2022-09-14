import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PostsPage } from './components/PostsPage/PostsPage';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <PostsPage />
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
