import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles/main.scss';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(React.createElement(App));

