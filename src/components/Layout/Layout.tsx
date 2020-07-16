import * as React from 'react';
import Modal from '../Portal/Modal';
import Tooltip from '../Portal/Tooltip';
import Popover from '../Portal/PopOver';

import { useToast } from '../Portal/Toast';
import { ToastProvider } from '../Portal/Toast';
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

            <div className="row">
                    <div className="cont" ref={widgetRef}>
                        <div className="header">
                            <div className="title">Test</div>

                            <FilterPanel onOpen={() => { }} onClose={() => { }} fillContainer={widgetRef} >
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consectetur aut veniam recusandae, placeat perspiciatis dignissimos vero, eos repudiandae ea, at fuga dolor. Ea culpa libero sit officiis quisquam iure.
                                Praesentium earum amet distinctio sed similique velit molestias iusto necessitatibus autem nihil? Sequi assumenda atque repellat reiciendis illo eligendi. Temporibus eveniet omnis vel numquam qui reiciendis culpa pariatur sequi at.
                                Ducimus dolor doloribus aut reiciendis corrupti possimus sapiente hic sunt recusandae voluptatem ut nobis molestiae consequatur laborum exercitationem, commodi delectus et magni est, aspernatur placeat veniam illo dolorem! Eaque, quo.
                                Autem, dolorem ex, sint harum beatae ducimus maiores enim sequi repellendus eum placeat perspiciatis fugit soluta sunt ab doloribus odio deserunt corrupti. Quis quisquam odio tempore possimus labore reprehenderit quaerat.
                                Expedita aut vero nobis et eos repellat quas explicabo rem possimus totam magnam earum nihil fugit omnis nesciunt aliquam aperiam, perferendis ducimus ipsa? Commodi ipsam illum aliquid labore itaque asperiores.
                                Ut accusantium temporibus architecto adipisci aut asperiores inventore libero magni labore, cum velit voluptatibus praesentium fugiat pariatur. Et expedita, odio, sapiente non quas est veniam fuga iusto saepe, repellendus dolores!
                                Reprehenderit ratione impedit doloribus temporibus, pariatur sed officiis? Enim est unde nesciunt tenetur amet minima nisi accusamus recusandae quos at aliquid officiis aspernatur asperiores sint, illum quasi et. Fuga, nobis!
                                Vitae, perferendis ducimus. Quae accusantium repudiandae vero perspiciatis reiciendis veritatis dolor, porro, repellat vel unde tempora doloribus quis sapiente ullam facere, debitis eum numquam? Nihil pariatur dolorum adipisci voluptatem distinctio.
                                Commodi modi qui, fuga corporis ratione, hic amet earum aut dolor illo unde. Repellat totam in dolores molestiae temporibus quis nihil facilis, assumenda exercitationem voluptates deleniti corrupti autem veritatis et.
                                Iusto, accusantium quis. Facilis assumenda saepe odit mollitia sequi pariatur ea fugit, iure ipsa reprehenderit suscipit, quaerat inventore itaque quasi illo voluptatibus voluptatem vel esse veritatis quis adipisci accusamus temporibus.
                                Aut eveniet et explicabo ea laudantium, error harum aspernatur debitis saepe tempore voluptas ad repudiandae ratione vitae amet rem optio omnis voluptate delectus corrupti eaque, provident beatae quia! Officiis, eaque!
                                Aliquam repudiandae, doloremque fugiat illo quas minus in optio suscipit inventore excepturi tenetur aut natus facilis dicta iure reiciendis error maxime, explicabo facere eaque. Vero doloremque corporis pariatur aliquid illum.
                                Quidem sunt quasi sapiente animi. Aliquam ducimus saepe laudantium dolor voluptate neque tenetur voluptates dolorem tempore rem nisi enim, provident nihil cupiditate possimus itaque, quas est, pariatur doloremque molestiae. Maiores.
                                Excepturi nihil, praesentium eaque repellendus fugiat rerum quidem ea doloremque velit aut recusandae temporibus! Atque, ex excepturi? Quia cum cumque est, deleniti voluptatibus quae doloremque, quis quisquam ipsam accusantium consectetur.
                                Repellendus asperiores nam rem perspiciatis! Qui fuga dolor fugiat vero quisquam, illo perspiciatis illum officiis dolore expedita aliquam perferendis ipsa magni dolorem asperiores sit quis unde quae voluptatem molestiae labore!
                                Dolorum, impedit? Officia eum tenetur illum iusto rerum sunt nemo, ad nam accusantium adipisci nulla magni, molestiae dolore corporis rem provident quam itaque sit voluptatem natus voluptate laudantium dolores? Ullam.
                                Veritatis dolores ipsam excepturi natus minus qui ducimus iusto beatae maiores repudiandae numquam eveniet voluptatibus, repellat praesentium perferendis, impedit nihil laboriosam distinctio quasi dolorem aut voluptate eos. Eligendi, sunt ex.
                                Voluptate ducimus rerum eligendi asperiores, commodi laborum, odit veniam eos similique maiores aperiam exercitationem illo. Harum fugit dolorum nemo et, incidunt, repellat quis qui officiis soluta neque quas sequi laboriosam.
                                Consequuntur adipisci nulla maxime, est similique rem omnis numquam nihil suscipit, ea unde ratione necessitatibus voluptatem aut tenetur quo iste commodi? Similique, ipsam? Dolorum, odio tenetur dicta et consequatur dolore!
                                Numquam aspernatur velit officiis omnis vitae perferendis, fuga amet incidunt consequatur. Repellendus dolor illo blanditiis, doloremque ipsam possimus corrupti perferendis architecto numquam consectetur fugit enim illum saepe, sit quidem distinctio.
                                Ipsa atque cupiditate possimus necessitatibus, sequi quo magnam, maiores itaque dolorum minus eos. Aliquam odio facere facilis sequi voluptates aspernatur. Harum animi sit consequuntur quisquam repellat magnam accusantium saepe libero?
                                Nam, molestias. Obcaecati at labore reiciendis corporis, odio nemo sint esse eum quasi enim natus vitae impedit culpa quaerat facere. Voluptas, nulla blanditiis! Error veritatis necessitatibus dolores ipsam minima nulla?
                                Ea fugiat quisquam, unde dolores dicta asperiores molestias, quidem aliquam accusantium illum deleniti cum eligendi ut iste veritatis! Sequi nulla alias inventore laborum ipsam sunt ut quaerat optio fugiat cupiditate!
                                Nostrum accusamus, distinctio recusandae sit in nihil asperiores itaque odit beatae iure laboriosam quae obcaecati cum quos porro consectetur ea praesentium adipisci ipsa deleniti eos excepturi. Voluptatum impedit cumque placeat.
                                Mollitia cupiditate impedit dolorum magnam et repellat voluptatem, assumenda est unde expedita distinctio hic. Suscipit reprehenderit magni at, ex veniam voluptas repellat unde eum hic cum eaque? Enim, deleniti quibusdam.
                                Ad accusantium non quod! Quia molestias beatae explicabo cum fuga! Ea, dicta neque. Animi esse molestias iure asperiores pariatur veniam tempore aspernatur reiciendis, at minima repellat culpa a accusantium expedita.
                                Placeat vero non delectus animi incidunt natus commodi quidem quae dignissimos dolorum alias nulla ducimus, architecto impedit laudantium repellat inventore molestias quis! Maiores iste repudiandae consectetur nobis! Doloribus, similique fugit.
                                Odit ducimus dolorum sint labore sed nostrum soluta temporibus? Sapiente delectus, numquam dolore veritatis repudiandae deleniti maxime, fugit tempora provident alias iure, labore soluta? Distinctio, harum. Ex ut fugit voluptas?
                                Dolorem expedita obcaecati alias fugiat nulla, accusantium sapiente minus officia ipsa rerum quos sit animi iste magni ratione cupiditate repudiandae maxime. Distinctio porro architecto impedit iusto cum nulla soluta commodi!
                                Magnam, nobis saepe nemo deleniti cumque odit similique alias aspernatur, mollitia harum voluptatum expedita ipsam error possimus amet cum nostrum, placeat repudiandae. Necessitatibus fugiat iusto dolore ipsa, asperiores odit delectus!
                                Voluptatem excepturi possimus porro ipsam velit nostrum id vero odit, debitis cumque molestiae reprehenderit, voluptas enim laborum in optio inventore mollitia. Nobis, dignissimos officiis incidunt consequatur laudantium sit veniam voluptatem.
                                Maxime, necessitatibus eligendi quaerat eos, modi commodi porro debitis explicabo voluptas aspernatur nostrum voluptatem, eius molestiae. Possimus veniam quas nobis maiores quidem facere nihil accusamus repudiandae. Ratione repellat laborum nostrum!
                                Reiciendis officia aut sit? Est vitae autem quibusdam dolorum culpa illum quam excepturi similique magni, quos, aperiam ipsam maxime obcaecati animi nisi? Sit illum eos dignissimos, necessitatibus reprehenderit laborum optio!
                                Alias excepturi maxime maiores, quibusdam harum commodi eius eveniet. Sapiente ab odit minima incidunt unde iure commodi est illum, ratione consequuntur nesciunt officiis accusamus velit possimus neque, aspernatur enim omnis?
                                Pariatur ad, vero nihil totam consequatur aliquid quos facilis at, incidunt cum reiciendis cupiditate unde. Consequuntur distinctio esse mollitia, a amet nesciunt qui odio praesentium accusamus! Tempore perferendis ducimus quis.
                                Maxime repudiandae rem voluptates tempore voluptatum repellat nihil magnam quia, facere, nisi explicabo accusamus ex cum voluptatem ipsum non! Voluptates vitae tenetur quis porro optio suscipit earum quidem blanditiis eum?
                                Dolorem ex consequuntur enim ea, laudantium minima vitae blanditiis repellendus incidunt, reiciendis ipsa. Atque minima perferendis mollitia quia assumenda reiciendis quis molestias ut, nesciunt enim esse repellat commodi asperiores voluptatibus!
                                Vero vel sit accusamus ab quas dolorum, eligendi doloremque sint labore expedita minus commodi eius obcaecati eos porro voluptate maiores vitae tempora corrupti, beatae quam saepe asperiores! Soluta, reiciendis asperiores.
                                Ad eius dolorem perferendis animi magni possimus placeat inventore eligendi, tempora, minima nobis est sapiente ipsa aspernatur deleniti earum beatae, explicabo in modi dignissimos vel porro commodi. Explicabo, cupiditate dicta.
                                Illum voluptas facere quaerat corrupti illo reprehenderit ullam ipsam nam architecto pariatur iste mollitia accusamus voluptate optio fugiat aspernatur minima nobis quia, similique culpa reiciendis. Voluptatibus nesciunt ratione excepturi distinctio!
                                Ratione explicabo ducimus alias qui necessitatibus possimus? Placeat tempora odit quam esse ipsam expedita nam omnis earum aliquid, amet repellat accusantium. Officiis minima nulla labore culpa veritatis, reiciendis autem quo.
                                Sapiente odit earum a, facilis neque ut magnam voluptas modi sequi dolor, veritatis ullam velit, animi aut iusto voluptates dignissimos. Minus porro ipsam dolor itaque quas ut, enim illo possimus.
                                Eos totam ullam ducimus sunt itaque sint, recusandae cum quas veniam amet labore exercitationem modi assumenda odio quo at deleniti cumque explicabo tenetur autem eum illum eveniet vitae? Alias, necessitatibus.
                                Architecto maxime, pariatur cum natus dolore deserunt. Repellendus, iste a. Porro, possimus eligendi iste numquam aliquam reprehenderit. Sapiente aliquid ratione sit illum neque, perspiciatis rerum mollitia repellendus quaerat. Minima, illum?
                                Quibusdam itaque voluptatum impedit. Voluptates enim non ipsum id, corrupti accusantium impedit ullam quod dolorum quae eligendi vero asperiores, perferendis totam eum. Inventore quisquam odit non porro laborum sapiente vitae.
                                Sapiente esse molestias voluptatum iste illo tempore labore eveniet exercitationem? Illum eum, distinctio, ea doloremque quam, eos ullam veniam magnam totam alias quod ab vero! Sunt debitis qui beatae. Officia!
                                Aliquid nemo possimus, harum enim molestiae ea vero autem dolorem nihil vel obcaecati sint consectetur fuga optio culpa aperiam, sapiente ex suscipit aliquam! Explicabo ipsum saepe adipisci labore, pariatur accusantium.
                                Voluptatum sit dolores est voluptas, atque cum id pariatur, vitae recusandae amet ipsa veniam ex libero consequatur perferendis suscipit autem quasi maiores alias totam earum, dolorum dignissimos ullam! Esse, voluptatem.
                                Vero nemo, velit iusto error adipisci molestiae magni omnis corrupti quod voluptatem exercitationem voluptatum voluptatibus illo, numquam cum quos quo optio facere amet aspernatur pariatur quisquam ex enim! Sequi, quas?
                                Reprehenderit perferendis voluptate at corporis praesentium illum quia dicta odit quas enim nesciunt consequuntur debitis voluptatibus, velit cumque fuga temporibus blanditiis iure ex dolorem obcaecati. Deserunt in cupiditate voluptates sit.
                            </FilterPanel>
                        </div>
                    </div>
                </div>




                <div className="row">
                    <FilterPanel onOpen={() => { }} onClose={() => { }} >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore omnis atque, aperiam magni voluptas quas at vel suscipit sit quibusdam, aliquid illum ipsa consectetur mollitia tempora, dolore facere nostrum debitis?
                        Consectetur exercitationem corporis aliquid deserunt atque iusto officia voluptatum nobis sed consequatur voluptatem porro autem, quisquam deleniti illo reprehenderit esse odit neque veniam. Temporibus facilis quo quisquam excepturi, omnis dicta.
                        Saepe porro suscipit possimus sequi voluptates repellendus officiis odio! Quasi et minus amet, sed minima dolores, praesentium dolore doloribus dicta maxime debitis impedit maiores repellendus obcaecati ducimus commodi. Iure, amet.
                        Pariatur cupiditate aperiam ipsam necessitatibus? Similique libero vel explicabo laudantium? Dicta illo quo quaerat earum, deleniti voluptates ratione, excepturi repudiandae vitae consectetur facilis. Ratione minus debitis, asperiores architecto nulla quidem?
                        Aliquid soluta tempore dolore assumenda, repellendus error. Sint perferendis ex vitae voluptatibus eos nisi tempora odio enim eum, magni voluptatum iusto, quis quaerat! Velit quae qui autem quis error odit.
                        Eveniet sit beatae non dolorum qui, a rerum sint consequatur similique dicta quos magni at repudiandae, enim labore. Distinctio omnis corporis, similique veritatis eum voluptates quisquam ad dolores harum eligendi?
                        Sint soluta reiciendis molestiae ut distinctio obcaecati mollitia esse sequi, qui aut doloribus harum quasi, beatae numquam impedit pariatur eos. Dolore nihil facilis ipsum qui atque possimus ratione adipisci exercitationem.
                        Corrupti iusto assumenda mollitia aliquam, veritatis ex voluptatum molestiae ab soluta beatae nemo doloremque omnis! Sunt, nemo. Debitis, nulla. Animi sed, totam ea repellendus ad a sint voluptatibus libero assumenda!
                        Eius ipsam veritatis perferendis repellendus ab magnam odio optio aliquam vitae, blanditiis aspernatur. Voluptas, blanditiis exercitationem? Alias sint neque recusandae earum consequuntur, error ut distinctio maiores dolor expedita? Temporibus, praesentium?
                        Fugit porro dignissimos vero, officiis architecto est perspiciatis corporis, impedit, dicta suscipit amet ullam numquam nemo! Magnam vitae id quaerat fuga nemo earum quis nihil. Voluptates earum aliquid vero ex!
                        Cum, error illum. Suscipit iure dolores autem, explicabo quis atque quia animi quod odit reprehenderit fugit at asperiores eaque incidunt ut minima aperiam sunt a eligendi aliquam nam esse ab?
                        Similique, corrupti fuga exercitationem sunt, cum quaerat excepturi aliquam non officiis ullam quod illo eaque ducimus, nesciunt vitae eligendi. Consequuntur mollitia exercitationem repellat est necessitatibus repellendus dolor! Sit, dolorum molestiae!
                        Ea recusandae magni quos, laborum quam dolorem laboriosam quas. Nostrum debitis rem est aliquid maxime quisquam iusto veniam harum quas atque nesciunt, repellat maiores possimus optio, pariatur consequatur saepe accusamus!
                        Quo ipsa nemo doloribus cum adipisci est ab tempora labore corporis. Natus, dolor totam asperiores possimus quisquam, iusto in obcaecati dolores cupiditate sapiente, corporis distinctio blanditiis aut tenetur at voluptatum.
                        Natus recusandae minus nesciunt distinctio, nam ad corporis ducimus voluptatibus veritatis expedita eligendi dolor quisquam omnis sed maiores nulla ea deleniti optio assumenda delectus sapiente. Blanditiis explicabo consectetur excepturi eius?
                        Velit deleniti et enim architecto, eum voluptates! Placeat quod sapiente esse dolore nam voluptatum, voluptas ipsa nobis explicabo similique odit magni commodi quia rem dignissimos reiciendis, possimus, eos mollitia quisquam.
                        Porro reprehenderit velit magnam ea ducimus aut expedita, sequi illum molestias maxime possimus accusamus quos at reiciendis, totam suscipit laudantium alias aliquam optio quisquam ut impedit ab, exercitationem quasi. Illo.
                        Ducimus recusandae neque asperiores aut laborum odit aspernatur! Nesciunt a debitis unde nostrum dolorum vitae impedit minus ipsum velit iusto, deleniti rerum eaque, facilis nulla nobis maiores aut, vel earum?
                        Blanditiis similique quasi, magni ut, ipsam deserunt vel repudiandae nam id mollitia voluptates accusantium enim doloremque quis quod nobis placeat, minima temporibus harum. Beatae ut modi fuga amet unde? Consequatur!
                        Quam fugit reiciendis tempore aliquid tempora nemo consectetur deserunt obcaecati reprehenderit. Rerum, perferendis. Odit iusto nemo tenetur eius consequuntur quod voluptate, molestiae unde nobis accusantium natus dicta voluptas. Consectetur, quisquam.
                    </FilterPanel>


                </div>

                
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