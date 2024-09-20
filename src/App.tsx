import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventProvider from './context/EventContextProvider';
import Header from './components/Header';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Layout from './components/Layout';


const Home = lazy(() => import('./pages/Home'));
const EventPage = lazy(() => import('./pages/EventPage'));


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <EventProvider>
        <Router>
          <Header />
          <Suspense >
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/event/:id" element={<EventPage />} />
              </Routes>
            </Layout>
          </Suspense>
        </Router>
      </EventProvider>
    </ThemeProvider >
  )
}

export default App

