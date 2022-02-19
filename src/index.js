import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from 'utils/styles/colors';

import 'utils/styles/index.css';
import App from 'pages/App';
import Error from 'pages/Error';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Player from 'pages/Player';

import { store } from 'state/store';
import ProtectedRoutes from 'utils/hooks/ProtectedRoutes';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route element={<ProtectedRoutes />}>
                            <Route path="*" element={<Error />} />
                            <Route path="/" element={<Home />} />
                            <Route path="/app" element={<App />} />
                            <Route path="/player" element={<Player />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
