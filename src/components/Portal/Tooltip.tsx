import * as React from 'react';
import PortalContainer from './Portal';

type IPosition = "top" | "bottom" | "left" | "right";

interface IProps {
    content: any,
    position?: IPosition
}

interface ICoords {
    top?: number,
    bottom?: number,
    left?: number,
    right?: number,
}

const Tooltip = (props: React.PropsWithChildren<IProps>) => {

    // state 
    const [show, setShow] = React.useState(false)
    const [coords, setCoords] = React.useState<ICoords | {}>({})

    // toggle tooltip
    const toggleTooltip = (button: HTMLButtonElement) => {
        const buttonDetails = button.getBoundingClientRect();

        let position = props.position || "top";
        let _coords: ICoords = {}

        switch (position) {
            case "top":
                _coords = {
                    left: buttonDetails.x + buttonDetails.width / 2,
                    top: buttonDetails.top - 15
                }
                break;

            case "bottom":
                _coords = {
                    left: buttonDetails.x + buttonDetails.width / 2,
                    top: buttonDetails.bottom + 15
                }
                break;

            case "right":
                _coords = {
                    left: buttonDetails.x + buttonDetails.width + 15,
                    top: buttonDetails.y + buttonDetails.height / 2
                }
                break;

            case "left":
                _coords = {
                    left: buttonDetails.x - 15,
                    top: buttonDetails.y + buttonDetails.height / 2
                }
                break;

        }

        setCoords(_coords);
        setShow(!show);
    }

    // render tooltip
    const renderTooltip = () => {
        return (<PortalContainer>

            <div className={`tooltip-content ${props.position || "top"} `} style={coords} >
                {props.content}
            </div>

        </PortalContainer>)
    }

    return (<>
        <span className="tooltip"
            onMouseOver={(e) => toggleTooltip(e.target as HTMLButtonElement)}
            onMouseOut={(e) => toggleTooltip(e.target as HTMLButtonElement)}
        >
            {props.children}
        </span>

        {
            show ?
                renderTooltip()
                : null
        }
    </>);

}

export default Tooltip;