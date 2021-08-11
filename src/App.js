import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';


const theme = createTheme({
    palette: {
        type: "dark",
    },
});

const store = ConfigureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <div className="App">
                            <MainComponent />
                        </div>
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        )
    }
}

export default App;
