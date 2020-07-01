import * as React from 'react';
import ToastContext from './ToastContext';

const useToast = () => {
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