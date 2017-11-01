import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
});

const AppContainer = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <App/>
        </MuiThemeProvider>
    );
};

ReactDOM.render(<AppContainer/>, document.getElementById('root'));
registerServiceWorker();
