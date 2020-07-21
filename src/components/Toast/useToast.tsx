import * as React from 'react';
import ToastContext from './ToastContext';

interface IToast {
    (content: {
        title?: string | HTMLElement,
        content: string | HTMLElement,
        showCloseBtn?: boolean,
        autoClose?: boolean,
        onClose?: any,
        closeAfter?: number,
    }) : void
}

interface IRemove {
    (id : string) : void
}


const useToast = (): { success: IToast, error: IToast, warning: IToast, info: IToast, remove: IRemove } => {
    const context = React.useContext(ToastContext);

    return {
        success: context.success,
        error: context.error,
        warning: context.warning,
        info: context.info,
        remove: context.remove
    }
}

export default useToast;