import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router';
import { Provider } from "react-redux";
import store from "../src/store/store";
import './Global.css';
import App from './App';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NavBar/>
      <App />
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);