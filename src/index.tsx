import * as React from 'react';
import * as ReactDom from 'react-dom';
import Layout from './components/Layout/Layout';
import { ToastProvider } from './components/Portal/Toast';

const LayoutWithToast = () => {

    return (
        <ToastProvider>
            <Layout />
        </ToastProvider>
    )
}


ReactDom.render( <LayoutWithToast /> , document.getElementById("root"))