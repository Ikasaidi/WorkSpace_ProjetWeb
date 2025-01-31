import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import React from 'react';
import "./App.css";
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import ArticleList from './pages/ArticleList';
import HomePage from './pages/HomePage';

const routes = [
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:'/about',
    element:<AboutPage/>
  },
  {
    path:'/list',
    element:<ArticleList/>
  },
  {
    path:'/error',
    element:<ErrorPage/>
  }
]

const router = createBrowserRouter(routes);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;