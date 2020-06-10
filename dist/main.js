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
const Menu_1 = __webpack_require__(/*! ../Menu/Menu */ "./src/components/Menu/Menu.tsx");
const Layout = (props) => {
    let [showModal, setShowModal] = React.useState(true);
    let root = document.getElementById("root");
    const onOpenModal = () => {
        console.log("opening modal");
        // root.classList.add("blurred");
    };
    const onCloseModal = () => {
        setShowModal(false);
        console.log("closing modal");
        // root.classList.remove("blurred");
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "modal-container" },
                React.createElement("div", { className: "btn", onClick: () => setShowModal(true) }, "Show Modal"))),
        showModal ?
            // <Modal
            //     show={showModal}
            //     title="Modal"
            //     onOpen={onOpenModal}
            //     onClose={onCloseModal}
            // >
            //     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate tempore velit vero aliquid omnis, nobis quisquam nihil beatae exercitationem error iure mollitia non modi ex similique nesciunt magni praesentium consequatur!
            // </Modal>
            React.createElement(Menu_1.default, { onOpen: onOpenModal, onClose: onCloseModal })
            : null));
};
exports.default = Layout;


/***/ }),

/***/ "./src/components/Menu/Menu.tsx":
/*!**************************************!*\
  !*** ./src/components/Menu/Menu.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Modal_1 = __webpack_require__(/*! ../Portal/Modal */ "./src/components/Portal/Modal.tsx");
const Menu = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal_1.default, { show: true, title: "Menu", onOpen: props.onOpen, onClose: props.onClose, class: "menu-modal" })));
};
exports.default = Menu;


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
    let [show, setShow] = React.useState(props.show);
    let [coords, setCoords] = React.useState({});
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
    const renderModal = () => {
        return (React.createElement(React.Fragment, null,
            React.createElement(Portal_1.default, null,
                React.createElement("div", { className: "modal-backdrop" },
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