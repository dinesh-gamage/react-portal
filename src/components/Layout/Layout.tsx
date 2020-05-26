import * as React from 'react';
import './Layout.scss';
import FilterPanel from '../FilterPanel/FilterPanel';

interface IProps { }

function Layout(props: IProps) {

    let rootElement = document.getElementById("portal-root");
    let [showModal, setShowModal] = React.useState(false);
    let [coords, setCoords] = React.useState({});

    const closeModal = () => {
        setShowModal(false);
    }

    const updateTooltipCoords = (button: HTMLButtonElement) => {
        const rect = button.getBoundingClientRect();
        let rootWidth = rootElement.clientWidth;
        console.log(rootWidth);
        console.log(rect);
        let _coords: any = {
            //left: rect.x + rect.width / 2, // add half the width of the button for centering
            top: rect.y + window.scrollY - 15, // add scrollY offset, as soon as getBountingClientRect takes on screen coords
            right: rootWidth - rect.right - 15
        }

        console.log(_coords);

        setCoords(_coords);
    };



    return (<>
        <div className="container">

            <div className="widget">
                <div className="widget-header">
                    <div className="wh-title">Sample Widget</div>
                    <div className="wh-toolbar">

                        <div className="burger-menu" 
                            onClick={(e) => {
                                updateTooltipCoords(e.target as HTMLButtonElement);
                                setShowModal(true);
                            }}
                        >
                        </div>
                        {
                            showModal ?
                                <FilterPanel coords={coords} rootElement={rootElement} onClose={() => setShowModal(false)} />
                                :
                                ""
                        }

                    </div>
                </div>

                <div className="widget-body">
                    <h1>Widget Content</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ducimus, ullam repellat quidem consectetur a cupiditate obcaecati incidunt ipsum voluptatem veniam voluptatibus sint, sed saepe, ipsam dicta numquam distinctio doloribus.
                        Quae, tempora? Officiis laborum natus molestias qui nesciunt mollitia, accusantium obcaecati repellat amet suscipit inventore cum vel, debitis accusamus odit repellendus adipisci, assumenda est culpa optio. Sunt quisquam porro odit.
                        Ipsa, eum praesentium ea sed a magni dolorum vel natus ratione asperiores voluptatem saepe aliquam, dolorem expedita sit minima. Ad distinctio repellat ut minima dolores maiores in omnis vitae eum.
                        Perspiciatis reiciendis hic, alias quibusdam autem dolore magni vel provident fuga eum tempora! Ipsum mollitia illo soluta praesentium optio perspiciatis velit dolor voluptatem, accusantium quas. Voluptatum, tempore voluptates? Possimus, dolores.
                        Dolor, obcaecati. Rerum tempora quisquam perspiciatis? Deserunt vero asperiores eum? Eligendi perspiciatis, ducimus neque impedit repellat beatae libero amet recusandae pariatur hic dolore nostrum consequatur ipsum aperiam minima et maiores!
                </p>
                </div>
            </div>

        </div>
    </>);
}

export default Layout;