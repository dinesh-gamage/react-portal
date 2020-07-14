import * as React from 'react';
import PortalContainer from './Portal';
import { CSSTransition } from 'react-transition-group';

interface ICallback {
    (): void
}

interface IProps {
    onOpen?: ICallback,
    onClose?: ICallback,
    onClear?: ICallback,
    fillContainer?: React.RefObject<HTMLElement>,
    class?: string
}

interface ICoords {
    top?: number,
    bottom?: number,
    left?: number,
    right?: number,
    width?: number,
    height?: number
}

function FilterPanel(props: React.PropsWithChildren<IProps>) {

    // states
    let [showPanel, setShowPanel] = React.useState(false);
    let [coords, setCoords] = React.useState({});

    let filterPanelRef = React.useRef(null);
    let filterButtonRef = React.useRef(null);


    // update coordinates of filter panel
    const updateTooltipCoords = (button: HTMLButtonElement) => {
        const buttonDetails = button.getBoundingClientRect();

        let _coords: ICoords = {
            top: buttonDetails.y + window.scrollY - 15,
            right: window.innerWidth - buttonDetails.right - 15,
        }

        if (props.fillContainer !== null) {
            const container = props.fillContainer.current;
            const containerDetails = container.getBoundingClientRect();
            _coords = {
                top: containerDetails.top,
                left: containerDetails.left,
                width: containerDetails.width,
                height: containerDetails.height
            }
        }

        setCoords(_coords);

    };

    // callbacks
    const onOpenPanel = () => {
        setShowPanel(true);

        if (typeof props.onOpen == "function") {
            props.onOpen();
        }
    }

    const onClosePanel = () => {
        setShowPanel(false);

        if (typeof props.onClose == "function") {
            props.onClose();
        }
    }

    const onClear = () => {
        if (typeof props.onClear == "function") {
            props.onClear();
        }
    }


    // on click modal or backdrop 
    const handleClick = (e: MouseEvent) => {
        if (e.target != filterPanelRef.current && !filterPanelRef.current?.contains(e.target) && e.target != filterButtonRef.current && !filterButtonRef.current?.contains(e.target)) {
            setShowPanel(false)
        }
    }

    document.addEventListener("click", (e) => handleClick(e))

    // render
    return (<>
        <div className="filter-panel-btn"
            onClick={(e) => {
                updateTooltipCoords(e.target as HTMLButtonElement);
                onOpenPanel()
            }}
            ref={filterButtonRef}
        >
            <div className="icon"></div>
        </div>

        <CSSTransition
            in={showPanel}
            timeout={200}
            classNames={"f-fade"}
            unmountOnExit={true}
        >
            <PortalContainer>
                <div className={`filter-panel ${props.class != null && props.class}`}
                    style={coords}
                    ref={filterPanelRef}
                >
                    <div className="filter-header">

                        <div className="title">
                            <div className="icon"></div>
                            <div className="text">Filters</div>
                        </div>

                        <div className="icon-container" onClick={onClosePanel}>
                            <div className="icon"></div>
                        </div>

                    </div>

                    <div className="filter-body">

                        {props.children}
                    </div>

                    <div className="filter-footer">
                        <button className="clear-filter" onClick={onClear}>
                            <div className="icon"></div>
                            <div className="text">Clear</div>
                        </button>
                    </div>

                </div>
            </PortalContainer>
        </CSSTransition>
    </>)
}

FilterPanel.defaultProps = {
    fillContainer: null,
}

export default FilterPanel;