import * as React from 'react';
import Modal from '../Portal/Modal';

interface IProps {
    onOpen: any,
    onClose: any
}

const Menu = (props: React.PropsWithChildren<IProps>) => {

    return(<>
        <Modal
            show={true}
            title="Menu"
            onOpen={props.onOpen}
            onClose={props.onClose}
            class="menu-modal"
        >

        </Modal>
    </>);

}


export default Menu;
