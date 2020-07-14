import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import PortalContainer from './Portal';

type IAnimation = 'm-slide-ftr' | 'm-slide-ftl' | 'm-slide-fbr' | 'm-slide-fbl' | 'm-zoom-fc';
interface IProps {
    show: boolean,
    onOpen: any,
    onClose: any,
    title?: any,
    closeButton?: any,
    styles?: any,
    class?: string,
    headerContent?: any
    backgroundDismiss?: boolean,
    showCloseButton?: boolean,
    showBackdrop?: boolean
    backdropBG?: string,
    animation?: IAnimation
}

const Modal = (props: React.PropsWithChildren<IProps>) => {

    // ref 
    const ModalBackdrop = React.useRef(null);

    // callback on change show state
    React.useEffect(() => {
        props.show ? onOpen() : onClose()
    }, [props.show])


    //on modal toggle
    // open
    const onOpen = () => {
        if (typeof props.onOpen === "function") {
            props.onOpen();
        }
    }

    // close
    const onClose = () => {
        if (typeof props.onClose === "function") {
            props.onClose();
        }
    }

    // on click modal or backdrop 
    const handleClick = (e: React.MouseEvent) => {
        if (props.backgroundDismiss != undefined && props.backgroundDismiss) {
            if (e.target == ModalBackdrop.current) {
                onClose();
            }
        }
    }

    // modal backdrop styles
    let styles: any = {}
    if (props.showBackdrop) {
        if (props.backdropBG?.trim().length > 0) {
            styles.backgroundColor = props.backdropBG.trim();
        }
    }
    else {
        styles.backgroundColor = "transparent";
    }

    return (<>
        <CSSTransition
            in={props.show}
            timeout={300}
            classNames={props.animation}
            unmountOnExit={true}
        >
            <PortalContainer>
                <div className="modal-container">
                    {/* backdrop */}
                    <div className="modal-backdrop" ref={ModalBackdrop} onClick={(e) => handleClick(e)} style={styles} ></div>

                    {/* modal */}
                    <div className={`modal-panel ${props.class || ""}`}
                        style={...props.styles || {}}>

                        <div className="modal-header">
                            {
                                props.headerContent == undefined ?
                                    <div className="modal-title"> {props.title == undefined ? "Modal" : props.title}</div>
                                    :
                                    <>
                                        {props.headerContent}
                                    </>
                            }
                            {
                                props.showCloseButton &&
                                <div className="modal-close" onClick={onClose}>
                                    {
                                        props.closeButton !== undefined ?
                                            <>
                                                {props.closeButton}
                                            </>
                                            :
                                            <div className="close-btn"></div>
                                    }
                                </div>
                            }

                        </div>

                        <div className="modal-body">
                            {props.children}
                        </div>

                    </div>

                </div>
            </PortalContainer>
        </CSSTransition>
    </>)
}

// default props
Modal.defaultProps = {
    title: "Modal",
    backgroundDismiss: true,
    showCloseButton: true,
    showBackdrop: true,
    animation: "m-zoom-fc"
}

export default Modal;