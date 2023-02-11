import { Suspense, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import './styles/index.scss'
import { AboutPage} from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
        </Routes>
      </Suspense>
    </div>
  )
};