import * as React from 'react';
import ToastContext from './ToastContext';
import PortalContainer from '../Portal';
import Toast from './Toast';

// types
type IType = 'success' | 'error' | 'info';
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
    type: IType,
    title: string | HTMLElement,
    content: string | HTMLElement,
    showCloseBtn?: boolean,
    autoClose?: boolean,
    onClose?: any,
    closeAfter?: number,
}

// toast 
interface IToast {
    id: string,
    content: IContent
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

        setToasts([...toasts, { id: id, content: content }]);
    }

    // remove method 
    const remove = (id: string) => {
        console.log(id);
        setToasts(toasts.filter((toast: any) => toast.id != id))
    }


    // provider value
    const providerValue = React.useMemo(() => { return { add, remove } }, [toasts])


    // render toast
    const renderToast = (toast: IToast, key: number) => {
        return (
            <Toast
                type={toast.content.type}
                title={toast.content.title}
                content={toast.content.content}
                onClose={toast.content.onClose || null}
                showCloseBtn={toast.content.showCloseBtn}
                autoClose={toast.content.autoClose}
                instance={toast.id}
                closeAfter={toast.content.closeAfter}
                key={key}
            />
        );
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

ToastProvider.defaultProps ={
    position: 'bottom-right',
}

export default ToastProvider;