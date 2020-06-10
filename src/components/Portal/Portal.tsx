import * as React from 'react';
import * as ReactDom from 'react-dom';

interface IProps {

}

const PortalContainer = (props: React.PropsWithChildren<IProps>) => {

    // root
    let rootElement = document.getElementById('portal-root');
    if(rootElement === null) {
        rootElement = document.createElement('div');
        rootElement.setAttribute("id", 'portal-root');
        document.body.appendChild(rootElement);
    }

    // wrapper
    let wrapper = document.createElement("div");

    // bind, unbind
    React.useEffect(() => {
        rootElement.appendChild(wrapper);
        return () => rootElement.removeChild(wrapper);
    }, [rootElement, wrapper])


    // render content
    const renderPortal = () => {

        return(<>
            {props.children}
        </>)
    }

    // return
    return ReactDom.createPortal(renderPortal(), rootElement);
}

export default PortalContainer;