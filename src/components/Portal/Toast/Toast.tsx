import * as React from 'react';
import { useToast } from '.';

// types
type IType = 'success' | 'error' | 'info';
type IPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface IProps {
    type: IType,
    title: string | HTMLElement,
    content: string | HTMLElement,
    showCloseBtn?: boolean,
    autoClose?: boolean,
    onClose?: any,
    closeAfter?: number,
    position?: IPosition,
    instance: string,
}

const Toast = (props: React.PropsWithChildren<IProps>) => {

    // 
    const {remove} = useToast();


    // on mount
    React.useEffect(() => {
    
        let timeout = setTimeout(() => {handleRemove()}, props.closeAfter);
        return () => {clearTimeout(timeout)}

    }, [props.instance, remove])


    // handle remove
    const handleRemove = () => {
        remove(props.instance)

        if(typeof props.onClose == 'function') {
            props.onClose();
        }
    }

    // return
    return (
        <div className="toast">

            <div className="icon"></div>

            <div className="toast-content">
                <div className="title">{props.title}</div>
                <div className="content">{props.content}</div>
            </div>

            {
                props.showCloseBtn ?
                    <div className="close" onClick={handleRemove} >x</div>
                    : null
            }

        </div>
    );

}

Toast.defaultProps = {
    showCloseBtn: true,
    autoClose: true,
    closeAfter: 5000
}

export default Toast;