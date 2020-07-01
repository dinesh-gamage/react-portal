import * as React from 'react';
import PortalContainer from './Portal';
import Tooltip from './Tooltip';

interface IProps {
    onOpen?: any,
    onClose?: any
}

interface ICoords {
    top?: number,
    bottom?: number,
    left?: number,
    right?: number

}

function FilterPanel(props: React.PropsWithChildren<IProps>) {

    // states
    let [shopPanel, setShopPanel] = React.useState(false);
    let [coords, setCoords] = React.useState({});

    // update coordinates of filter panel
    const updateTooltipCoords = (button: HTMLButtonElement) => {
        const buttonDetails = button.getBoundingClientRect();

        let _coords: ICoords = {
            top: buttonDetails.y + window.scrollY - 15,
            right: buttonDetails.x - 15,
        }

        setCoords(_coords);
    };

    // callbacks
    const onOpenPanel = () => {
        setShopPanel(true);

        if (typeof props.onOpen == "function") {
            props.onOpen();
        }
    }

    const onClosePanel = () => {
        setShopPanel(false);

        if (typeof props.onClose == "function") {
            props.onClose();
        }
    }

    return (<>
        <Tooltip content={"Filter Panel"} >
            <div className="filter-panel-btn fpb-burger-menu"
                onClick={(e) => {
                    updateTooltipCoords(e.target as HTMLButtonElement);
                    onOpenPanel()
                }}
            >
                <div className="icon"></div>
            </div>
        </Tooltip>
        {
            shopPanel &&
            <PortalContainer>
                <div className="filter-panel" style={coords}>
                    <div className="filter-header">

                        <div className="fh-title">
                            <div className="fht-icon"></div>
                            <div className="fht-text">Filters</div>
                        </div>

                        <div className="burger-menu-btn" onClick={onClosePanel}><div className="icon"></div></div>

                    </div>

                    <div className="filter-body">

                        {props.children}
                    </div>

                </div>
            </PortalContainer>
        }
    </>)
}

export default FilterPanel;