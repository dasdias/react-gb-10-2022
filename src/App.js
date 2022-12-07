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
// import { PageChats } from './components/';
// import { MainPage } from './components/';
// import { ProfilePage } from './components/';

const session = false;
export function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <div className="app">
            <Menu />
            <div className="body">
              <Routes>
                <Route path="/" element={<MainPage></MainPage>} />
                <Route path="/chats/*" element={
                  <PrivateRoute isAuth={session}>
                    <PageChats />
                  </PrivateRoute>
                } />
                <Route path="/profile" element={
                  <PrivateRoute isAuth={session}>
                    <ProfilePage />
                  </PrivateRoute>
                } />
                <Route path="/gists" element={
                  <PrivateRoute isAuth={session}>
                    <GistsPage />
                  </PrivateRoute>
                } />
                <Route path="/login" element={
                  <PublicRoute isAuth={session}>
                    <LoginPage />
                  </PublicRoute>
                } />
                <Route path="/signup" element={
                  <PublicRoute isAuth={session}>
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
