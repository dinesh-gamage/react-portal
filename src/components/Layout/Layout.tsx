import * as React from 'react';
import Modal from '../Portal/Modal';
import Tooltip from '../Portal/Tooltip';
import Popover from '../Portal/PopOver';

import { useToast } from '../Toast';
import { ToastProvider } from '../Toast';
import FilterPanel from '../Portal/FilterPanel';
import { CSSTransition } from 'react-transition-group';

interface IProps {

}

const Layout = (props: React.PropsWithChildren<IProps>) => {

    let [showModal, setShowModal] = React.useState(false);
    let root = document.getElementById("root");
    let [position, setPosition] = React.useState("bottom-right");

    const Toast = useToast();

    let widgetRef = React.useRef(null);

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

                <div className="row">
                    <button>
                        <Tooltip position="top" content="Tooltip top">Tooltip Top</Tooltip>
                    </button>

                    <button>
                        <Tooltip position="bottom" content="Tooltip bottom">Tooltip bottom</Tooltip>
                    </button>

                    <button>
                        <Tooltip position="left" content="Tooltip left">Tooltip left</Tooltip>
                    </button>

                    <button>
                        <Tooltip position="right" content="Tooltip right">Tooltip right</Tooltip>
                    </button>
                </div>

                <div className="row">
                    <button>
                        <Popover position="top" title="Popover title" content="Popover content top">popover Top</Popover>
                    </button>

                    <button>
                        <Popover position="bottom" title="Popover title" content="Popover content bottom">popover bottom</Popover>

                    </button>

                    <button>
                        <Popover position="left" title="Popover title" content="Popover content left">popover left</Popover>

                    </button>

                    <button>
                        <Popover position="right" title="Popover title" content="Popover content right">popover right</Popover>

                    </button>
                </div>


                <div className="row">

                    <button onClick={() => Toast.success({
                        content: "Success Toast Message"
                    })}
                    >
                        Success Toast
                    </button>

                    <button onClick={() => Toast.error({
                        content: "Error Toast Message"
                    })}
                    >
                        Error Toast
                    </button>

                    <button onClick={() => Toast.warning({
                        content: "Warning Toast Message"
                    })}
                    >
                        Warning Toast
                    </button>

                    <button onClick={() => Toast.info({
                        content: "Info Toast Message"
                    })}
                    >
                        Info Toast
                    </button>

                </div>


            </div>


        </div>

        <Modal
            show={showModal}
            title={"Modal"}
            onOpen={onOpenModal}
            onClose={onCloseModal}
            animation={'m-slide-ftr'}
        >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur porro et sequi saepe aliquam ipsa laborum perspiciatis fugiat enim aliquid distinctio eveniet harum, voluptatem cumque libero error nostrum eaque vel?
            Assumenda ullam, sequi laudantium aperiam neque ducimus odio accusantium nesciunt, tempore rem doloremque inventore quisquam. Voluptatibus, suscipit quibusdam fugiat voluptatem architecto, non possimus voluptatum enim saepe pariatur modi reprehenderit perferendis.
            Eos error accusamus veniam quia quod dolores delectus sequi beatae quo similique magni porro aut temporibus, ea voluptate atque possimus, repellat odio, dolorum voluptates ullam exercitationem molestiae! Debitis, architecto consequatur.
            Debitis aut, eligendi suscipit pariatur praesentium ratione! Omnis consequatur esse consectetur impedit aspernatur magni illo rerum. Consectetur illo repudiandae dolores, reiciendis nesciunt incidunt inventore esse, minus eius odio quisquam laboriosam?
            Eaque eum ipsam nobis facere minima tempore et quis soluta dicta deserunt ea fugiat ad at cumque eligendi possimus, id ducimus doloribus explicabo velit dignissimos ut quidem praesentium. Repudiandae, dolorem.
            Veniam veritatis corporis voluptas molestias. Itaque nesciunt perferendis illo minus? Beatae, nemo. Exercitationem, quis dolorum. Ratione, culpa! Repudiandae fugit, aut vel quidem tempore vitae odio? Facilis voluptatibus nam ut quae!
            Nostrum ducimus blanditiis, libero dolorem, nam quod expedita voluptates id laborum ipsum itaque! Pariatur accusamus eos quaerat, nam nemo qui necessitatibus maxime recusandae, illo, vel tempora quibusdam saepe earum voluptatem!
            Quo, aliquid natus odit, delectus vero porro itaque illo quae quibusdam consectetur ab maiores beatae asperiores? Animi laboriosam beatae error, commodi soluta laudantium expedita totam quod earum aperiam, veritatis corrupti.
            Atque unde eaque ea distinctio quis esse voluptatum voluptates numquam natus delectus iste tempora a nisi rem fuga consectetur minima, maiores ullam enim perspiciatis, fugiat suscipit est? Dolor, repudiandae vitae?
            Neque nesciunt placeat at consequatur perferendis temporibus minus dicta delectus, maxime deserunt quaerat corporis autem exercitationem vero magnam eius sapiente! Perspiciatis placeat atque fuga molestias numquam, facilis officiis sunt nostrum?
            Quos repellendus facere a et facilis repellat aliquam vero cupiditate libero. Minima mollitia nihil odio, repudiandae, quasi, non libero iste consectetur quisquam itaque aspernatur voluptatem. Labore consequatur vel suscipit culpa?
            Numquam architecto aspernatur magni officia molestiae tempora harum excepturi aliquam non autem est, praesentium necessitatibus dolorum tenetur. Impedit voluptatem non accusamus? Impedit neque aut quos eligendi quisquam saepe ipsum velit?
            Amet, doloremque. Error, ipsam voluptate! Totam veritatis vel accusantium, qui aliquid saepe voluptas consectetur ad natus! Animi error ut harum repellat a laborum rem, ducimus doloribus nam minima velit sit.
            Nihil provident impedit rem et dolorum ab numquam. Esse doloremque vero placeat provident veniam impedit, assumenda explicabo aliquid debitis fugiat hic enim excepturi et quos dicta molestiae sit ipsa quidem.
            Rem sapiente ratione voluptatem, sint saepe harum cupiditate, repellat quas nam sequi officiis dolore ab adipisci perferendis expedita impedit fuga a earum molestiae doloremque. Aut nulla ratione porro obcaecati laudantium!
            Omnis amet distinctio tenetur aliquam eaque totam dolorem! Doloribus corporis quos totam quae animi fuga. Et ducimus nam, doloribus commodi dolores doloremque! Laboriosam, harum accusamus at laudantium ad suscipit nostrum!
            Totam vitae nihil eum facere consequuntur alias optio, laborum illum, ipsum quaerat et explicabo ratione earum adipisci porro veritatis sunt corrupti in voluptatibus tenetur sint! Tempora perferendis sunt voluptate accusamus.
            Praesentium vitae, id ut quos maxime at pariatur aliquid nam assumenda voluptates iste est odit fuga in magni ducimus soluta voluptatem, ab optio similique fugiat perferendis ex quas? Facere, praesentium.
            Perspiciatis consectetur quibusdam facilis sunt non officiis nihil provident molestiae laborum perferendis velit commodi, porro asperiores ad tempore, explicabo dolorem? Illum, ullam assumenda fugiat velit similique quibusdam vel reiciendis soluta.
            Tempora ducimus nostrum quo quibusdam reiciendis qui expedita debitis perspiciatis sint vero, aperiam quia delectus, quos obcaecati laborum aut repellat nesciunt et accusamus in sapiente hic natus odit laboriosam! Atque.
                </Modal>

    </>);
}

export default Layout;