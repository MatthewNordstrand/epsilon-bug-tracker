import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';

const theme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#000000",
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
