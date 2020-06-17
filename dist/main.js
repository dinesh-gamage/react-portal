/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Layout/Layout.tsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Layout.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Modal_1 = __webpack_require__(/*! ../Portal/Modal */ "./src/components/Portal/Modal.tsx");
const Tooltip_1 = __webpack_require__(/*! ../Portal/Tooltip */ "./src/components/Portal/Tooltip.tsx");
const Layout = (props) => {
    let [showModal, setShowModal] = React.useState(false);
    let root = document.getElementById("root");
    const onOpenModal = () => {
        console.log("opening modal");
    };
    const onCloseModal = () => {
        setShowModal(false);
        console.log("closing modal");
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "modal-container" },
                React.createElement("div", { className: "btn", onClick: () => setShowModal(true) }, "Show Modal"),
                React.createElement("div", null,
                    React.createElement("button", null,
                        React.createElement(Tooltip_1.default, { position: "top", content: "Tooltip top" }, "Tooltip Top")),
                    React.createElement("button", null,
                        React.createElement(Tooltip_1.default, { position: "bottom", content: "Tooltip bottom" }, "Tooltip bottom")),
                    React.createElement("button", null,
                        React.createElement(Tooltip_1.default, { position: "left", content: "Tooltip left" }, "Tooltip left")),
                    React.createElement("button", null,
                        React.createElement(Tooltip_1.default, { position: "right", content: "Tooltip right" }, "Tooltip right"))))),
        showModal ?
            React.createElement(Modal_1.default, { show: showModal, title: "Modal", onOpen: onOpenModal, onClose: onCloseModal }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur porro et sequi saepe aliquam ipsa laborum perspiciatis fugiat enim aliquid distinctio eveniet harum, voluptatem cumque libero error nostrum eaque vel? Assumenda ullam, sequi laudantium aperiam neque ducimus odio accusantium nesciunt, tempore rem doloremque inventore quisquam. Voluptatibus, suscipit quibusdam fugiat voluptatem architecto, non possimus voluptatum enim saepe pariatur modi reprehenderit perferendis. Eos error accusamus veniam quia quod dolores delectus sequi beatae quo similique magni porro aut temporibus, ea voluptate atque possimus, repellat odio, dolorum voluptates ullam exercitationem molestiae! Debitis, architecto consequatur. Debitis aut, eligendi suscipit pariatur praesentium ratione! Omnis consequatur esse consectetur impedit aspernatur magni illo rerum. Consectetur illo repudiandae dolores, reiciendis nesciunt incidunt inventore esse, minus eius odio quisquam laboriosam? Eaque eum ipsam nobis facere minima tempore et quis soluta dicta deserunt ea fugiat ad at cumque eligendi possimus, id ducimus doloribus explicabo velit dignissimos ut quidem praesentium. Repudiandae, dolorem. Veniam veritatis corporis voluptas molestias. Itaque nesciunt perferendis illo minus? Beatae, nemo. Exercitationem, quis dolorum. Ratione, culpa! Repudiandae fugit, aut vel quidem tempore vitae odio? Facilis voluptatibus nam ut quae! Nostrum ducimus blanditiis, libero dolorem, nam quod expedita voluptates id laborum ipsum itaque! Pariatur accusamus eos quaerat, nam nemo qui necessitatibus maxime recusandae, illo, vel tempora quibusdam saepe earum voluptatem! Quo, aliquid natus odit, delectus vero porro itaque illo quae quibusdam consectetur ab maiores beatae asperiores? Animi laboriosam beatae error, commodi soluta laudantium expedita totam quod earum aperiam, veritatis corrupti. Atque unde eaque ea distinctio quis esse voluptatum voluptates numquam natus delectus iste tempora a nisi rem fuga consectetur minima, maiores ullam enim perspiciatis, fugiat suscipit est? Dolor, repudiandae vitae? Neque nesciunt placeat at consequatur perferendis temporibus minus dicta delectus, maxime deserunt quaerat corporis autem exercitationem vero magnam eius sapiente! Perspiciatis placeat atque fuga molestias numquam, facilis officiis sunt nostrum? Quos repellendus facere a et facilis repellat aliquam vero cupiditate libero. Minima mollitia nihil odio, repudiandae, quasi, non libero iste consectetur quisquam itaque aspernatur voluptatem. Labore consequatur vel suscipit culpa? Numquam architecto aspernatur magni officia molestiae tempora harum excepturi aliquam non autem est, praesentium necessitatibus dolorum tenetur. Impedit voluptatem non accusamus? Impedit neque aut quos eligendi quisquam saepe ipsum velit? Amet, doloremque. Error, ipsam voluptate! Totam veritatis vel accusantium, qui aliquid saepe voluptas consectetur ad natus! Animi error ut harum repellat a laborum rem, ducimus doloribus nam minima velit sit. Nihil provident impedit rem et dolorum ab numquam. Esse doloremque vero placeat provident veniam impedit, assumenda explicabo aliquid debitis fugiat hic enim excepturi et quos dicta molestiae sit ipsa quidem. Rem sapiente ratione voluptatem, sint saepe harum cupiditate, repellat quas nam sequi officiis dolore ab adipisci perferendis expedita impedit fuga a earum molestiae doloremque. Aut nulla ratione porro obcaecati laudantium! Omnis amet distinctio tenetur aliquam eaque totam dolorem! Doloribus corporis quos totam quae animi fuga. Et ducimus nam, doloribus commodi dolores doloremque! Laboriosam, harum accusamus at laudantium ad suscipit nostrum! Totam vitae nihil eum facere consequuntur alias optio, laborum illum, ipsum quaerat et explicabo ratione earum adipisci porro veritatis sunt corrupti in voluptatibus tenetur sint! Tempora perferendis sunt voluptate accusamus. Praesentium vitae, id ut quos maxime at pariatur aliquid nam assumenda voluptates iste est odit fuga in magni ducimus soluta voluptatem, ab optio similique fugiat perferendis ex quas? Facere, praesentium. Perspiciatis consectetur quibusdam facilis sunt non officiis nihil provident molestiae laborum perferendis velit commodi, porro asperiores ad tempore, explicabo dolorem? Illum, ullam assumenda fugiat velit similique quibusdam vel reiciendis soluta. Tempora ducimus nostrum quo quibusdam reiciendis qui expedita debitis perspiciatis sint vero, aperiam quia delectus, quos obcaecati laborum aut repellat nesciunt et accusamus in sapiente hic natus odit laboriosam! Atque.")
            : null));
};
exports.default = Layout;


/***/ }),

/***/ "./src/components/Portal/Modal.tsx":
/*!*****************************************!*\
  !*** ./src/components/Portal/Modal.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Portal_1 = __webpack_require__(/*! ./Portal */ "./src/components/Portal/Portal.tsx");
const Modal = (props) => {
    // states
    const [show, setShow] = React.useState(props.show);
    // ref 
    const ModalBackdrop = React.useRef(null);
    // callback on change show state
    React.useEffect(() => {
        show ? onOpen() : onClose();
    }, [show]);
    //on modal toggle
    // open
    const onOpen = () => {
        if (typeof props.onOpen === "function") {
            props.onOpen();
        }
    };
    // close
    const onClose = () => {
        if (typeof props.onClose === "function") {
            props.onClose();
        }
    };
    // on click modal or backdrop 
    const handleClick = (e) => {
        if (props.backgroundDismiss != undefined && props.backgroundDismiss) {
            if (e.target == ModalBackdrop.current) {
                setShow(false);
            }
        }
    };
    const renderModal = () => {
        return (React.createElement(React.Fragment, null,
            React.createElement(Portal_1.default, null,
                React.createElement("div", { className: "modal-backdrop", ref: ModalBackdrop, onClick: (e) => handleClick(e) },
                    React.createElement("div", { className: `modal-panel ${props.class || ""}`, style: props.styles || {} },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("div", { className: "modal-title" },
                                " ",
                                props.title),
                            React.createElement("div", { className: "modal-close", onClick: () => setShow(false) }, props.closeButton !== undefined ?
                                React.createElement(React.Fragment, null, props.closeButton)
                                :
                                    React.createElement("div", { className: "close-btn" }))),
                        React.createElement("div", { className: "modal-body" }, props.children))))));
    };
    return (React.createElement(React.Fragment, null, show ? renderModal()
        : null));
};
Modal.defaultProps = {
    backgroundDismiss: true
};
exports.default = Modal;


/***/ }),

/***/ "./src/components/Portal/Portal.tsx":
/*!******************************************!*\
  !*** ./src/components/Portal/Portal.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDom = __webpack_require__(/*! react-dom */ "react-dom");
const PortalContainer = (props) => {
    // root
    let rootElement = document.getElementById('portal-root');
    if (rootElement === null) {
        rootElement = document.createElement('div');
        rootElement.setAttribute("id", 'portal-root');
        document.body.appendChild(rootElement);
    }
    // wrapper
    let wrapper = document.createElement("div");
    // bind, unbind
    React.useEffect(() => {
        rootElement.appendChild(wrapper);
        return () => rootElement.removeChild(wrapper);
    }, [rootElement, wrapper]);
    // render content
    const renderPortal = () => {
        return (React.createElement(React.Fragment, null, props.children));
    };
    // return
    return ReactDom.createPortal(renderPortal(), rootElement);
};
exports.default = PortalContainer;


/***/ }),

/***/ "./src/components/Portal/Tooltip.tsx":
/*!*******************************************!*\
  !*** ./src/components/Portal/Tooltip.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Portal_1 = __webpack_require__(/*! ./Portal */ "./src/components/Portal/Portal.tsx");
const Tooltip = (props) => {
    // state 
    const [show, setShow] = React.useState(false);
    const [coords, setCoords] = React.useState({});
    // toggle tooltip
    const toggleTooltip = (button) => {
        const buttonDetails = button.getBoundingClientRect();
        let position = props.position || "top";
        let _coords = {};
        switch (position) {
            case "top":
                _coords = {
                    left: buttonDetails.x + buttonDetails.width / 2,
                    top: buttonDetails.top - 15
                };
                break;
            case "bottom":
                _coords = {
                    left: buttonDetails.x + buttonDetails.width / 2,
                    top: buttonDetails.bottom + 15
                };
                break;
            case "right":
                _coords = {
                    left: buttonDetails.x + buttonDetails.width + 15,
                    top: buttonDetails.y + buttonDetails.height / 2
                };
                break;
            case "left":
                _coords = {
                    left: buttonDetails.x - 15,
                    top: buttonDetails.y + buttonDetails.height / 2
                };
                break;
        }
        setCoords(_coords);
        setShow(!show);
    };
    // render tooltip
    const renderTooltip = () => {
        return (React.createElement(Portal_1.default, null,
            React.createElement("div", { className: `tooltip-content ${props.position || "top"} `, style: coords }, props.content)));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("span", { className: "tooltip", onMouseOver: (e) => toggleTooltip(e.target), onMouseOut: (e) => toggleTooltip(e.target) }, props.children),
        show ?
            renderTooltip()
            : null));
};
exports.default = Tooltip;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDom = __webpack_require__(/*! react-dom */ "react-dom");
const Layout_1 = __webpack_require__(/*! ./components/Layout/Layout */ "./src/components/Layout/Layout.tsx");
ReactDom.render(React.createElement(Layout_1.default, null), document.getElementById("root"));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map