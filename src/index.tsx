import * as React from 'react';
import * as ReactDom from 'react-dom';
import Layout from './components/Layout/Layout';
import { ToastProvider } from './components/Toast';

const LayoutWithToast = () => {

    return (
        <ToastProvider 
        autoClose={true}
        closeAfter={5000}
        position={"bottom-right"}
        >
            <Layout />
        </ToastProvider>
    )
}


ReactDom.render( <LayoutWithToast /> , document.getElementById("root"))