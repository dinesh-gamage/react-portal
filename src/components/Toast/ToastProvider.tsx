import * as React from 'react';
import ToastContext from './ToastContext';
import PortalContainer from '../Portal/Portal';
import Toast from './Toast';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// types
type IType = 'success' | 'error'| 'info' | 'warning';
type IPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

// props 
interface IProps {
    position?: IPosition,
    showCloseBtn?: boolean,
    autoClose?: boolean,
    closeAfter?: number,
}

// toast content
interface IContent {
    type?: IType,
    title?: string | HTMLElement,
    content: string | HTMLElement,
    showCloseBtn?: boolean,
    autoClose?: boolean,
    onClose?: any,
    closeAfter?: number,
}

interface IPartialContent {
    title?: string | HTMLElement,
    content: string | HTMLElement,
    showCloseBtn?: boolean,
    autoClose?: boolean,
    onClose?: any,
    closeAfter?: number,
}

// toast 
interface IToast {
    id: string,
    content: IContent,
    createdAt: number
}

// create a random id
function generateId() {
    let date = new Date();
    let random = Math.round((Math.random() * 10000));

    let id = date.getTime().toString() + random.toString();

    return id;
}


// toast provider
const ToastProvider = (props: React.PropsWithChildren<IProps>) => {

    // states
    const [toasts, setToasts] = React.useState<IToast[]>([]);


    React.useEffect(() => {
        console.log(toasts);
    }, [toasts])


    // add method
    const add = (content: IContent) => {
        let id = generateId();
        let date = new Date();
        let createdAt = date.getTime();

        // merge default props with content except position
        let { position, ...rest} = props;
        let updatedContent:IContent = {...rest, ...content}

        setToasts([...toasts, { id: id, content: updatedContent, createdAt: createdAt }]);
    }

    // remove method 
    const remove = React.useCallback((id: string) => {
        setToasts(toasts => toasts.filter((toast: IToast) => toast.id !== id))
    }, [])


    // toast types
    // success
    const success = (content: IPartialContent) => {
        let updated = updatedContent(content, 'success');
        return add(updated);
    }

    // error
    const error = (content: IPartialContent) => {
        let updated = updatedContent(content, 'error');
        return add(updated);
    }

    // warning
    const warning = (content: IPartialContent) => {
        let updated = updatedContent(content, 'warning');        
        return add(updated);
    }

    const info = (content: IPartialContent) => {
        let updated = updatedContent(content, 'info');
        return add(updated);
    }

    // get alert content based on type
    const updatedContent = (content: IPartialContent, type: IType) => {

        let defaults = {
            type: type,
            title: type.toString()
        }

        let updated:IContent = {...defaults, ...content}

        return updated;
    }


    // provider value
    const providerValue = React.useMemo(() => { return { success, error, warning, info, remove } }, [toasts])


    // render toast
    const renderToast = (toast: IToast, key: number) => {
        return (<Toast
            type={toast.content.type}
            title={toast.content.title}
            content={toast.content.content}
            onClose={toast.content.onClose || null}
            showCloseBtn={toast.content.showCloseBtn}
            autoClose={toast.content.autoClose}
            instance={toast.id}
            closeAfter={toast.content.closeAfter}
            key={toast.id}
            createdAt={toast.createdAt}
        />);
    }

    // return 
    return (
        <ToastContext.Provider value={providerValue} >

            <PortalContainer>
                <div className={`toast-container ${props.position}`}>
                    {
                        toasts.map((toast: IToast, key: number) => renderToast(toast, key))
                    }
                </div>
            </PortalContainer>

            {props.children}

        </ToastContext.Provider>
    );

}

ToastProvider.defaultProps = {
    position: 'bottom-right',
    autoClose: true,
    showCloseBtn: true,
    closeAfter: 5000
}

export default ToastProvider;