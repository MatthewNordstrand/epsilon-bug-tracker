import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#000000",
        },
        detail: {
            main: "#00FFFF",
        },
    },
});

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <div className="App">
                        <MainComponent />
                    </div>
                </BrowserRouter>
            </ThemeProvider>
        )
    }
}

export default App;
