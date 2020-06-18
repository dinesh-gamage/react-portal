import * as React from 'react';
import ToastContext from './ToastContext';

const useToast = () => {
    const context = React.useContext(ToastContext);

    return { add: context.add, remove: context.remove}
}

export default useToast;