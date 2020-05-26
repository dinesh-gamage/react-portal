import * as React from 'react';
import * as ReactDom from 'react-dom';

interface IProps {
    coords: {}
}

const Portal = (props: React.PropsWithChildren<IProps>) => {
    const mountPoint = document.getElementById("portal-root");
    const el = document.createElement("div");

    React.useEffect(() => {
        mountPoint.appendChild(el);
        return () => mountPoint.removeChild(el);
    }, [el, mountPoint])


    return ReactDom.createPortal(<>
        <div className="tooltip" style={props.coords}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum esse cum sunt nulla, minus enim nihil ab quibusdam aperiam cupiditate neque eveniet, magnam harum porro, numquam illum. Et, delectus cupiditate?
            Eaque quo pariatur quam laudantium, deserunt deleniti est illo reprehenderit atque ex iusto dolor laborum non, error impedit, dicta a! Ratione quis consequatur explicabo quas fugit quod possimus recusandae sapiente.
            Dolorum eos error quo magnam cum nihil odio assumenda eaque quibusdam vitae voluptatibus quisquam dignissimos, quas praesentium velit dolore repellendus provident beatae mollitia! Expedita, delectus. Amet a aut error consequatur.
        </div>
    </>, el);
}

export default Portal;