import React from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import MovieDetail from "./pages/movie-detail";
import NotFound from "./pages/not-found";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import theme from "./styles/theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="movie-detail/:id" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
