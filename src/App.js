import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from './components/menu';
import { PublicRoute, PrivateRoute } from './components/';
import { PersistGate } from "redux-persist/integration/react";
import { LoginPage, PageChats, SignUpPage } from './pages';
import { MainPage } from './pages';
import { ProfilePage } from './pages';
import { persistor, store } from "./store";
import { GistsPage } from './pages';
import { Provider } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import { auth } from "./api/firebase";
// import { PageChats } from './components/';
// import { MainPage } from './components/';
// import { ProfilePage } from './components/';

// const session = false;



export function App() {

  const [session, setSession] = useState(null);

  const isAuth = session?.email;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <div className="app">
            <Menu email={session?.email} />
            <div className="body">
              <Routes>
                <Route path="/" element={<MainPage email={session?.email}></MainPage>} />
                <Route path="/chats/*" element={
                  <PrivateRoute isAuth={isAuth}>
                    <PageChats />
                  </PrivateRoute>
                } />
                <Route path="/profile" element={
                  <PrivateRoute isAuth={isAuth}>
                    <ProfilePage />
                  </PrivateRoute>
                } />
                <Route path="/gists" element={
                  <PrivateRoute isAuth={isAuth}>
                    <GistsPage />
                  </PrivateRoute>
                } />
                <Route path="/login" element={
                  <PublicRoute isAuth={isAuth}>
                    <LoginPage />
                  </PublicRoute>
                } />
                <Route path="/signup" element={
                  <PublicRoute isAuth={isAuth}>
                    <SignUpPage />
                  </PublicRoute>
                } />
                <Route path="*" element={<div> <h2 style={{ "textAlign": "center" }}>404 Page</h2></div>} />
              </Routes>
            </div>
          </div>
        </BrowserRouter >
      </PersistGate>
    </Provider>
  );
}

// export default App;
