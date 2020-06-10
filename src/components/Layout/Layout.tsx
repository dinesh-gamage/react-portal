import * as React from 'react';
import PortalContainer from '../Portal/Portal';
import Modal from '../Portal/Modal';
import Menu from '../Menu/Menu';

interface IProps {

}

const Layout = (props: React.PropsWithChildren<IProps>) => {

    let [showModal, setShowModal] = React.useState(true);
    let root = document.getElementById("root");

    const onOpenModal = () => {
        console.log("opening modal");
        // root.classList.add("blurred");
    }

    const onCloseModal = () => {
        setShowModal(false);
        console.log("closing modal");
        // root.classList.remove("blurred");
    }

    return (<>
        <div className="container">

            <div className="modal-container">
                <div className="btn" onClick={() => setShowModal(true)}>Show Modal</div>
            </div>
        </div>


        {
            showModal ?
                // <Modal
                //     show={showModal}
                //     title="Modal"
                //     onOpen={onOpenModal}
                //     onClose={onCloseModal}
                // >
                //     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate tempore velit vero aliquid omnis, nobis quisquam nihil beatae exercitationem error iure mollitia non modi ex similique nesciunt magni praesentium consequatur!
                // </Modal>

                <Menu onOpen={onOpenModal} onClose={onCloseModal} ></Menu>
                : null
        }


    </>);
}

export default Layout;