import * as React from 'react';
import * as ReactDom from 'react-dom';

import './FilterPanel.scss';

interface ICoords {
    top?: number,
    bottom?: number,
    left?: number,
    right?: number

}

interface IProps {
    rootElement: HTMLElement,
    coords: ICoords,
    onClose: any
}

const FilterPanel = (props: React.PropsWithChildren<IProps>) => {
    const el = document.createElement("div");

    React.useEffect(() => {

        props.rootElement.appendChild(el);
        return () => props.rootElement.removeChild(el);

    }, [props.rootElement, el])


    return ReactDom.createPortal(<>
        <div className="filter-panel" style={props.coords}>
            <div className="filter-header">
                
                <div className="fh-title">
                    <div className="fht-icon"></div>
                    <div className="fht-text">Filters</div>
                </div>

                <div className="burger-menu-btn" onClick={props.onClose}></div>

            </div>

        <div className="filter-body">
            <div className="fb-row">
                <div className="fb-label">Tenant</div>
                <select name="" id="" className="fb-filter">
                    <option value="">Select a tenant</option>
                </select>
            </div>

            <div className="fb-row">
                <div className="fb-label">Location</div>
                <select name="" id="" className="fb-filter">
                    <option value="">Select a Location</option>
                </select>
            </div>
        </div>

        </div>
    </>, props.rootElement);

}

export default FilterPanel;