import * as React from 'react';
import { useToast } from '.';

// types
type IType = 'success' | 'error' | 'info' | "custom";
type IPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface IProps {
    type: IType,
    title: string | HTMLElement,
    content: string | HTMLElement,
    showCloseBtn?: boolean,
    autoClose?: boolean,
    onClose?: any,
    closeAfter?: number,
    instance: string,
}

const Toast = (props: React.PropsWithChildren<IProps>) => {

    // toast remove method
    const { remove } = useToast();

    // ref 
    const ToastRef = React.useRef(null);

    // on mount
    React.useEffect(() => {

        if (props.autoClose != undefined && props.autoClose) {
            let timeout = setTimeout(() => { handleRemove() }, props.closeAfter);
            return () => { clearTimeout(timeout) }
        }

    }, [props.instance, remove])


    // handle remove
    const handleRemove = () => {

        ToastRef.current.classList.remove("show");
        ToastRef.current.classList.add("hide");

        setTimeout(() => {
            remove(props.instance)

            if (typeof props.onClose == 'function') {
                props.onClose();
            }
        }, 500)


    }

    // return
    return (
        <div className={`toast ${props.type} show`} ref={ToastRef}>

            <div className="icon"></div>

            <div className="toast-content">
                <div className="title">{props.title}</div>
                <div className="content">{props.content}</div>
            </div>

            {
                props.showCloseBtn ?
                    <div className="close" onClick={() => { handleRemove() }} ></div>
                    : null
            }

        </div >
    )

}

Toast.defaultProps = {
    showCloseBtn: true,
    autoClose: true,
    closeAfter: 5000
}

export default Toast;