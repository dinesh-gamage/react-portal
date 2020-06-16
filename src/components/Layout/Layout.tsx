import * as React from 'react';
import PortalContainer from '../Portal/Portal';
import Modal from '../Portal/Modal';
import Menu from '../Menu/Menu';

interface IProps {

}

const Layout = (props: React.PropsWithChildren<IProps>) => {

    let [showModal, setShowModal] = React.useState(false);
    let root = document.getElementById("root");

    const onOpenModal = () => {
        console.log("opening modal");
    }

    const onCloseModal = () => {
        setShowModal(false);
        console.log("closing modal");
    }

    return (<>
        <div className="container">

            <div className="modal-container">
                <div className="btn" onClick={() => setShowModal(true)}>Show Modal</div>
            </div>
        </div>


        {
            showModal ?
                <>
                    <Menu
                        onOpen={onOpenModal}
                        onClose={onCloseModal}

                    >

                    </Menu>

                </>
                : null
        }


    </>);
}

export default Layout;