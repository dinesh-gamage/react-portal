import * as React from 'react';
import * as ReactDom from 'react-dom';

interface IProps {
    onClose: any
}

function Modal(props: IProps) {
    let rootElement = document.getElementById("root");


    return ReactDom.createPortal (<>
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="mh-title">Edit Configurations</div>
                    <div className="modal-close" onClick={() => props.onClose()}></div>
                </div>

                <div className="modal-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptatibus voluptas laudantium corrupti nemo officia velit totam cum quaerat quae laboriosam praesentium id quas ducimus aspernatur molestiae, mollitia quam saepe!
                    Veritatis ullam fugit explicabo, velit dicta hic et inventore omnis, esse nostrum tenetur. Saepe rerum velit explicabo nobis doloremque repudiandae molestiae. Saepe animi error reprehenderit necessitatibus culpa laborum fuga vitae.
                    Ducimus repellendus culpa nisi magni dolorum temporibus perferendis asperiores ipsam quia quae accusamus, non sed odio rem aspernatur error voluptate quaerat, veniam aliquid inventore alias! Quis unde eligendi tempora quos.
                    Delectus et a alias unde mollitia quam accusamus voluptate reprehenderit provident libero! Sunt voluptatum quidem ullam enim maiores a! Perspiciatis libero autem reiciendis ea et tempora quisquam saepe mollitia hic.
                    Saepe consectetur ratione itaque repellat quo eveniet magnam porro possimus reiciendis numquam ipsam accusantium rem esse sint, dolorem asperiores delectus eius quidem molestias optio fuga et amet repellendus. Et, dignissimos?
                    Cumque sequi, optio ratione officia, nemo, voluptate illum delectus ea eligendi vel aperiam repellendus fugiat rem maiores? Necessitatibus, recusandae itaque ducimus nisi repudiandae eveniet eos enim provident temporibus ipsa. Voluptas.
                    Repellendus reprehenderit tenetur exercitationem dolorum eaque. Esse voluptas voluptates iure quam quidem iste eos expedita quas vero corporis, repudiandae quis itaque ut deleniti fugit animi dolores dolor fugiat amet dolorem.
                    Aliquam blanditiis soluta error perferendis. Earum corrupti ut quod quaerat voluptatum dolor asperiores sunt! Repellendus numquam pariatur laudantium assumenda, dolor quia dolorum repudiandae. Saepe, id! Ratione at voluptas excepturi commodi?
                    Vel, eaque adipisci. Iste quae nesciunt quia optio numquam dicta quos debitis sequi distinctio? Necessitatibus vel quibusdam magnam unde incidunt perspiciatis. Autem atque unde cum iusto beatae minus asperiores explicabo!
                    Vero quae nesciunt natus aliquam quia facilis quod sapiente perspiciatis illo itaque nulla dignissimos corporis, sed tenetur ipsa ab omnis eius quasi, molestiae dolorem nam tempore dolor possimus modi? Omnis.
                    Aliquid atque numquam maiores sapiente, blanditiis fuga sint similique ut ratione commodi alias eligendi aut laudantium, modi quae vel repudiandae! Eveniet, quas! Quam minus unde ea, ex voluptate vitae ullam.
                    Tempore numquam minima illum! Architecto nulla modi eligendi qui quos nam. Possimus ut dignissimos inventore adipisci delectus assumenda reprehenderit harum sequi laboriosam fuga illum, enim maiores omnis, ipsam magnam vel.
                    Repudiandae, deleniti. Commodi, facilis. Sequi laborum ex maiores eveniet minus natus eum soluta praesentium non totam tempore voluptatem facilis illum amet reprehenderit nobis repellendus minima veritatis quaerat, voluptas repudiandae dolorem.
                    Quisquam praesentium soluta eaque nemo officiis nisi corporis voluptate consequuntur aut rem non dicta amet distinctio deleniti, quod, consequatur dignissimos corrupti unde atque doloribus recusandae? Inventore ullam architecto ab suscipit!
                    Tempore totam unde minus sequi optio, iusto ea labore! Sed nulla hic obcaecati? Praesentium natus animi aut. Soluta debitis, consequuntur, quasi laborum consectetur optio vitae rem id at dolor nulla!
                    Aut quis nobis, aspernatur reprehenderit iure minima necessitatibus est, ipsam tempore debitis magnam expedita. Voluptate tempora eaque quis deleniti eligendi reprehenderit cupiditate ipsam. Quasi harum quam accusantium necessitatibus adipisci obcaecati.
                    Ipsam quas iste delectus sunt explicabo nostrum sapiente adipisci laborum quod, voluptas aut totam ad est non libero cupiditate. Velit, quisquam sit molestias reiciendis minus officia dolor cum magni facere.
                    In dolor nulla tempora, quae totam ullam! Nihil, totam ipsum delectus nostrum necessitatibus vel numquam omnis expedita quas dicta aperiam sed tempore sequi saepe laboriosam tempora consectetur. Quo, aut officia.
                    Tempore quisquam eaque quidem consequuntur dolorem fuga aut quam natus nemo culpa. Minima obcaecati voluptas dignissimos nesciunt cumque debitis ratione? Non unde sint corporis iusto, quisquam minus repellat molestiae quibusdam.
                    Sit molestiae esse sed vel veniam veritatis pariatur, et repudiandae totam quis cum! Cumque consequatur, deleniti architecto sit officia vero dolores necessitatibus, quasi commodi consectetur, eveniet sequi accusantium hic error.
                    </div>

            </div>
        </div>
    </>, rootElement);
}

export default Modal;