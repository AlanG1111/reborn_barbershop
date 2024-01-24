/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 190:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(711);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
;// CONCATENATED MODULE: ./src/app/context/loader.tsx


const LoaderContext = (0,react.createContext)({});
const LoaderProvider = ({ children, }) => {
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    return ((0,jsx_runtime.jsx)(LoaderContext.Provider, Object.assign({ value: { isLoading, setIsLoading } }, { children: children })));
};

;// CONCATENATED MODULE: ./src/app/components/common/Loader/index.tsx


const Loader = () => (0,jsx_runtime.jsx)("section", Object.assign({ className: "loader" }, { children: (0,jsx_runtime.jsx)("div", Object.assign({ className: "loader__wrapper" }, { children: (0,jsx_runtime.jsx)("h3", Object.assign({ className: "loader__heading" }, { children: "loading" })) })) }));

// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(974);
;// CONCATENATED MODULE: ./src/app/components/Home/Background/index.tsx


const Background = () => {
    const message = 'REBORN barbershop';
    return ((0,jsx_runtime.jsxs)("div", Object.assign({ className: "home-background" }, { children: [(0,jsx_runtime.jsxs)("div", Object.assign({ className: "home-background__wrapper" }, { children: [(0,jsx_runtime.jsx)("div", Object.assign({ className: "home-background__text" }, { children: message.repeat(2) })), (0,jsx_runtime.jsx)("div", Object.assign({ className: "home-background__text" }, { children: message.repeat(2) }))] })), (0,jsx_runtime.jsxs)("div", Object.assign({ className: "home-background__wrapper" }, { children: [(0,jsx_runtime.jsx)("div", Object.assign({ className: "home-background__text-bordered" }, { children: message.repeat(2) })), (0,jsx_runtime.jsx)("div", Object.assign({ className: "home-background__text-bordered" }, { children: message.repeat(2) }))] }))] })));
};

;// CONCATENATED MODULE: ./src/app/components/Logo/index.tsx

const Logo = () => {
    return ((0,jsx_runtime.jsxs)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "250", zoomAndPan: "magnify", viewBox: "0 0 375 374.999991", height: "250", preserveAspectRatio: "xMidYMid meet", version: "1.0" }, { children: [(0,jsx_runtime.jsx)("defs", { children: (0,jsx_runtime.jsx)("g", {}) }), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(1.089848, 198.365905)" }, { children: (0,jsx_runtime.jsx)("g", { children: (0,jsx_runtime.jsx)("path", { d: "M 38.9375 -25.152344 C 38.9375 -23.992188 38.464844 -23.148438 37.515625 -22.59375 C 36.566406 -22.039062 35.40625 -21.671875 34.0625 -21.460938 C 32.691406 -21.25 31.214844 -21.089844 29.578125 -20.960938 C 27.945312 -20.800781 26.785156 -20.695312 26.046875 -20.617188 L 26.496094 -28.050781 C 29.15625 -28.15625 31.1875 -28.207031 32.558594 -28.207031 C 36.804688 -28.207031 38.9375 -27.179688 38.9375 -25.152344 Z M 39.835938 2.265625 L 60.425781 -0.5 C 59.820312 -1.238281 57.921875 -3.769531 54.730469 -8.121094 C 51.539062 -12.46875 49.378906 -15.289062 48.273438 -16.582031 C 50.800781 -17.425781 52.992188 -18.71875 54.863281 -20.484375 C 56.734375 -22.25 57.683594 -24.675781 57.683594 -27.761719 C 57.683594 -33.246094 53.78125 -36.59375 45.976562 -37.859375 C 43.972656 -38.175781 41.972656 -38.359375 39.914062 -38.4375 C 37.859375 -38.464844 32.902344 -38.492188 24.992188 -38.492188 C 17.082031 -38.492188 11.601562 -38.28125 8.59375 -37.859375 C 8.382812 -37.804688 8.277344 -37.804688 8.277344 -37.832031 L 7.488281 -21.378906 L 7.328125 -17.03125 C 6.960938 -7.910156 6.800781 -2.082031 6.800781 0.472656 L 12.972656 0.261719 C 15.605469 0.183594 19.589844 0.105469 24.941406 0 C 25.046875 0 25.125 -0.078125 25.125 -0.238281 L 25.652344 -13.339844 L 32.109375 -13.789062 C 32.742188 -12.234375 34.035156 -9.464844 35.960938 -5.511719 C 37.882812 -1.527344 39.175781 1.054688 39.835938 2.265625 Z M 39.835938 2.265625 " }) }) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(64.304638, 198.365905)" }, { children: (0,jsx_runtime.jsx)("g", { children: (0,jsx_runtime.jsx)("path", { d: "M 51.539062 0.238281 C 51.539062 0.105469 51.566406 -0.660156 51.671875 -2.082031 C 51.777344 -3.507812 51.832031 -5.878906 51.832031 -9.199219 L 24.148438 -9.515625 L 24.4375 -14.65625 L 33.480469 -14.65625 C 37.566406 -14.65625 39.757812 -14.683594 40.046875 -14.761719 C 40.308594 -15.792969 40.574219 -17.269531 40.8125 -19.167969 C 41.046875 -21.066406 41.179688 -22.382812 41.179688 -23.171875 L 35.378906 -23.332031 C 33.375 -23.332031 29.84375 -23.277344 24.78125 -23.199219 C 24.808594 -23.699219 24.859375 -24.464844 24.914062 -25.46875 C 24.964844 -26.46875 25.019531 -27.179688 25.070312 -27.601562 C 37.777344 -27.601562 46.242188 -27.789062 50.484375 -28.183594 L 51.566406 -38.121094 C 47.929688 -38.042969 43.128906 -38.015625 37.199219 -38.015625 L 10.519531 -38.015625 C 9.886719 -38.015625 8.488281 -37.964844 6.378906 -37.882812 C 6.378906 -37.410156 5.933594 -27.867188 5.035156 -9.253906 L 4.585938 0.0273438 L 34.722656 0.238281 Z M 51.539062 0.238281 " }) }) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(118.292916, 198.365905)" }, { children: (0,jsx_runtime.jsx)("g", { children: (0,jsx_runtime.jsx)("path", { d: "M 25.679688 -16.53125 C 30.976562 -16.53125 34.90625 -16.214844 37.4375 -15.632812 C 39.96875 -15.027344 41.234375 -13.867188 41.234375 -12.128906 C 41.234375 -11.308594 40.730469 -10.597656 39.757812 -9.964844 C 38.753906 -9.332031 37.039062 -8.726562 34.617188 -8.199219 C 32.191406 -7.671875 28.972656 -7.40625 25.019531 -7.40625 Z M 29.449219 -22.621094 L 26.152344 -22.621094 C 26.3125 -25.996094 26.523438 -28.578125 26.734375 -30.421875 C 27.65625 -30.527344 28.445312 -30.609375 29.078125 -30.609375 C 36.144531 -30.609375 39.730469 -29.367188 39.78125 -26.890625 C 39.78125 -24.042969 36.328125 -22.621094 29.449219 -22.621094 Z M 49.21875 -21.617188 C 51.382812 -22.144531 53.28125 -23.148438 54.890625 -24.625 C 56.46875 -26.101562 57.289062 -27.601562 57.289062 -29.105469 C 57.289062 -32.214844 55.125 -34.5625 50.855469 -36.144531 C 46.585938 -37.726562 40.652344 -38.542969 33.113281 -38.542969 C 21.089844 -38.542969 12.65625 -38.4375 7.828125 -38.253906 L 6.988281 -26.945312 C 6.25 -16.371094 5.695312 -7.777344 5.378906 -1.132812 L 5.378906 -0.921875 C 5.378906 -0.394531 5.667969 -0.0507812 6.273438 0.105469 C 7.777344 0.210938 11.097656 0.34375 16.238281 0.472656 C 21.355469 0.605469 25.890625 0.660156 29.789062 0.660156 C 33.691406 0.660156 37.4375 0.421875 41.046875 -0.0273438 C 52.964844 -1.582031 58.921875 -5.617188 58.921875 -12.128906 C 58.921875 -17.398438 55.679688 -20.5625 49.21875 -21.617188 Z M 49.21875 -21.617188 " }) }) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(180.637783, 198.365905)" }, { children: (0,jsx_runtime.jsx)("g", { children: (0,jsx_runtime.jsx)("path", { d: "M 33.824219 -9.515625 C 27.550781 -9.515625 24.4375 -12.523438 24.4375 -18.585938 C 24.4375 -21.671875 25.28125 -24.015625 26.996094 -25.652344 C 28.710938 -27.285156 31.03125 -28.101562 33.984375 -28.101562 C 36.910156 -28.101562 39.203125 -27.472656 40.863281 -26.230469 C 42.550781 -24.964844 43.367188 -22.699219 43.367188 -19.429688 C 43.367188 -16.160156 42.550781 -13.683594 40.917969 -12.023438 C 39.28125 -10.335938 36.910156 -9.515625 33.824219 -9.515625 Z M 3.320312 -18.164062 C 3.320312 -12.128906 5.851562 -7.382812 10.96875 -3.953125 C 16.082031 -0.527344 23.464844 1.1875 33.113281 1.1875 C 42.761719 1.1875 50.355469 -0.660156 55.945312 -4.351562 C 61.507812 -8.039062 64.300781 -13.207031 64.300781 -19.851562 C 64.300781 -25.96875 61.664062 -30.6875 56.417969 -34.035156 C 51.144531 -37.355469 43.710938 -39.042969 34.089844 -39.042969 C 24.4375 -39.042969 16.898438 -37.226562 11.46875 -33.640625 C 6.039062 -30.027344 3.320312 -24.859375 3.320312 -18.164062 Z M 3.320312 -18.164062 " }) }) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(248.254931, 198.365905)" }, { children: (0,jsx_runtime.jsx)("g", { children: (0,jsx_runtime.jsx)("path", { d: "M 38.9375 -25.152344 C 38.9375 -23.992188 38.464844 -23.148438 37.515625 -22.59375 C 36.566406 -22.039062 35.40625 -21.671875 34.0625 -21.460938 C 32.691406 -21.25 31.214844 -21.089844 29.578125 -20.960938 C 27.945312 -20.800781 26.785156 -20.695312 26.046875 -20.617188 L 26.496094 -28.050781 C 29.15625 -28.15625 31.1875 -28.207031 32.558594 -28.207031 C 36.804688 -28.207031 38.9375 -27.179688 38.9375 -25.152344 Z M 39.835938 2.265625 L 60.425781 -0.5 C 59.820312 -1.238281 57.921875 -3.769531 54.730469 -8.121094 C 51.539062 -12.46875 49.378906 -15.289062 48.273438 -16.582031 C 50.800781 -17.425781 52.992188 -18.71875 54.863281 -20.484375 C 56.734375 -22.25 57.683594 -24.675781 57.683594 -27.761719 C 57.683594 -33.246094 53.78125 -36.59375 45.976562 -37.859375 C 43.972656 -38.175781 41.972656 -38.359375 39.914062 -38.4375 C 37.859375 -38.464844 32.902344 -38.492188 24.992188 -38.492188 C 17.082031 -38.492188 11.601562 -38.28125 8.59375 -37.859375 C 8.382812 -37.804688 8.277344 -37.804688 8.277344 -37.832031 L 7.488281 -21.378906 L 7.328125 -17.03125 C 6.960938 -7.910156 6.800781 -2.082031 6.800781 0.472656 L 12.972656 0.261719 C 15.605469 0.183594 19.589844 0.105469 24.941406 0 C 25.046875 0 25.125 -0.078125 25.125 -0.238281 L 25.652344 -13.339844 L 32.109375 -13.789062 C 32.742188 -12.234375 34.035156 -9.464844 35.960938 -5.511719 C 37.882812 -1.527344 39.175781 1.054688 39.835938 2.265625 Z M 39.835938 2.265625 " }) }) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(311.46971, 198.365905)" }, { children: (0,jsx_runtime.jsx)("g", { children: (0,jsx_runtime.jsx)("path", { d: "M 4.929688 -37.726562 L 4.929688 -28.394531 C 4.929688 -25.546875 4.773438 -21.328125 4.480469 -15.738281 C 4.191406 -10.148438 4.058594 -6.40625 4.058594 -4.507812 C 4.058594 -2.609375 4.007812 -1.027344 3.929688 0.238281 C 6.0625 0.238281 9.121094 0.15625 13.078125 -0.0273438 C 17.03125 -0.183594 19.457031 -0.289062 20.351562 -0.316406 L 20.351562 -0.605469 C 20.351562 -1.527344 20.484375 -6.800781 20.722656 -16.425781 L 40.363281 1.1875 C 47.664062 -0.132812 52.410156 -0.921875 54.625 -1.160156 C 56.839844 -1.398438 58.132812 -1.554688 58.5 -1.632812 L 58.449219 -6.011719 L 58.527344 -11.996094 C 58.578125 -17.636719 58.632812 -22.066406 58.632812 -25.257812 L 58.578125 -38.148438 L 42.867188 -37.964844 C 42.789062 -37.121094 42.734375 -35.695312 42.707031 -33.71875 L 42.707031 -22.117188 C 39.863281 -25.335938 36.828125 -28.761719 33.5625 -32.402344 C 30.292969 -36.039062 28.550781 -37.988281 28.367188 -38.226562 Z M 4.929688 -37.726562 " }) }) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(91.01953, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", {}) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(96.878904, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", { children: (0,jsx_runtime.jsx)("path", { d: "M 7.484375 -12.074219 C 6.160156 -12.074219 4.867188 -11.386719 3.8125 -10.230469 L 3.8125 -16.59375 L 1.835938 -16.59375 L 1.835938 -0.574219 C 3.464844 -0.0390625 5.085938 0.398438 6.796875 0.398438 C 10.148438 0.398438 12.71875 -2.101562 12.71875 -5.851562 C 12.71875 -9.53125 10.628906 -12.074219 7.484375 -12.074219 Z M 6.683594 -1.261719 C 5.6875 -1.261719 4.898438 -1.507812 3.8125 -1.835938 L 3.8125 -8.578125 C 4.703125 -9.664062 5.800781 -10.382812 6.992188 -10.382812 C 9.367188 -10.382812 10.824219 -8.488281 10.824219 -5.84375 C 10.824219 -3.148438 9.0625 -1.261719 6.683594 -1.261719 Z M 6.683594 -1.261719 " }) }) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(110.560235, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", {}) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(116.411954, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", { children: (0,jsx_runtime.jsx)("path", { d: "M 6.015625 -12.074219 C 4.5 -12.074219 3.003906 -11.632812 1.722656 -10.875 L 1.546875 -9.070312 C 2.878906 -9.882812 4.242188 -10.363281 5.738281 -10.363281 C 8.414062 -10.363281 8.792969 -8.722656 8.792969 -7.308594 L 8.792969 -6.3125 C 7.707031 -6.519531 6.519531 -6.734375 5.492188 -6.734375 C 2.972656 -6.734375 1.179688 -5.402344 1.179688 -3.09375 C 1.179688 -0.871094 2.605469 0.390625 4.898438 0.390625 C 6.40625 0.390625 7.8125 -0.378906 8.816406 -1.476562 L 9.070312 0 L 10.773438 0 L 10.785156 -7.347656 C 10.785156 -10.097656 9.5625 -12.074219 6.015625 -12.074219 Z M 5.453125 -1.3125 C 3.925781 -1.3125 3.09375 -1.867188 3.09375 -3.269531 C 3.09375 -4.785156 4.183594 -5.15625 5.882812 -5.15625 C 6.96875 -5.15625 7.914062 -4.941406 8.792969 -4.765625 L 8.792969 -3.175781 C 7.953125 -2.03125 6.785156 -1.3125 5.453125 -1.3125 Z M 5.453125 -1.3125 " }) }) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(128.924992, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", {}) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(134.77671, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", { children: (0,jsx_runtime.jsx)("path", { d: "M 8.464844 -11.808594 C 8.027344 -11.992188 7.492188 -12.074219 6.980469 -12.074219 C 5.832031 -12.074219 4.714844 -11.417969 3.78125 -10.136719 L 3.546875 -11.675781 L 1.835938 -11.675781 L 1.835938 0 L 3.824219 0 L 3.8125 -8.242188 C 4.582031 -9.554688 5.667969 -10.3125 6.804688 -10.3125 C 7.339844 -10.3125 7.945312 -10.210938 8.558594 -9.964844 Z M 8.464844 -11.808594 " }) }) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(143.928344, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", {}) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(149.780063, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", { children: (0,jsx_runtime.jsx)("path", { d: "M 7.484375 -12.074219 C 6.160156 -12.074219 4.867188 -11.386719 3.8125 -10.230469 L 3.8125 -16.59375 L 1.835938 -16.59375 L 1.835938 -0.574219 C 3.464844 -0.0390625 5.085938 0.398438 6.796875 0.398438 C 10.148438 0.398438 12.71875 -2.101562 12.71875 -5.851562 C 12.71875 -9.53125 10.628906 -12.074219 7.484375 -12.074219 Z M 6.683594 -1.261719 C 5.6875 -1.261719 4.898438 -1.507812 3.8125 -1.835938 L 3.8125 -8.578125 C 4.703125 -9.664062 5.800781 -10.382812 6.992188 -10.382812 C 9.367188 -10.382812 10.824219 -8.488281 10.824219 -5.84375 C 10.824219 -3.148438 9.0625 -1.261719 6.683594 -1.261719 Z M 6.683594 -1.261719 " }) }) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(163.461394, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", {}) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(169.313112, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", { children: (0,jsx_runtime.jsx)("path", { d: "M 11.828125 -6.664062 C 11.828125 -9.605469 9.921875 -12.085938 6.601562 -12.085938 C 3.414062 -12.085938 0.953125 -9.574219 0.953125 -5.964844 C 0.953125 -2.265625 3.363281 0.398438 6.949219 0.398438 C 8.792969 0.398438 10.28125 -0.308594 11.191406 -0.808594 L 11.328125 -2.632812 C 10.085938 -1.90625 8.917969 -1.3125 7.15625 -1.3125 C 4.777344 -1.3125 2.992188 -2.902344 2.859375 -5.0625 L 11.738281 -5.0625 C 11.789062 -5.25 11.828125 -6.394531 11.828125 -6.664062 Z M 2.878906 -6.640625 C 2.992188 -8.957031 4.449219 -10.394531 6.714844 -10.394531 C 8.722656 -10.394531 10.097656 -9.121094 10.046875 -6.640625 Z M 2.878906 -6.640625 " }) }) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(181.959371, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", {}) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(187.811089, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", { children: (0,jsx_runtime.jsx)("path", { d: "M 8.464844 -11.808594 C 8.027344 -11.992188 7.492188 -12.074219 6.980469 -12.074219 C 5.832031 -12.074219 4.714844 -11.417969 3.78125 -10.136719 L 3.546875 -11.675781 L 1.835938 -11.675781 L 1.835938 0 L 3.824219 0 L 3.8125 -8.242188 C 4.582031 -9.554688 5.667969 -10.3125 6.804688 -10.3125 C 7.339844 -10.3125 7.945312 -10.210938 8.558594 -9.964844 Z M 8.464844 -11.808594 " }) }) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(196.962723, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", {}) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(202.814441, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", { children: (0,jsx_runtime.jsx)("path", { d: "M 4.808594 0.378906 C 7.183594 0.378906 8.867188 -0.902344 8.898438 -3.125 C 8.90625 -4.816406 7.894531 -5.648438 5.332031 -6.777344 C 3.8125 -7.492188 3.332031 -7.945312 3.332031 -8.867188 C 3.332031 -9.828125 4.101562 -10.25 5.125 -10.25 C 5.894531 -10.25 7.195312 -9.882812 8.109375 -9.390625 L 8.046875 -11.378906 C 7.042969 -11.828125 5.8125 -12.085938 4.890625 -12.085938 C 2.808594 -12.085938 1.394531 -10.804688 1.394531 -8.949219 C 1.394531 -7.277344 2.367188 -6.066406 4.417969 -5.167969 C 6.261719 -4.304688 6.804688 -4.109375 6.796875 -3.167969 C 6.785156 -1.988281 6.066406 -1.457031 4.703125 -1.457031 C 3.578125 -1.457031 2.089844 -1.867188 1.078125 -2.550781 L 1.148438 -0.523438 C 2 -0.0117188 3.445312 0.378906 4.808594 0.378906 Z M 4.808594 0.378906 " }) }) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(212.765433, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", {}) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(218.617152, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", { children: (0,jsx_runtime.jsx)("path", { d: "M 7.769531 -12.074219 C 6.367188 -12.074219 4.859375 -11.253906 3.8125 -10.117188 L 3.8125 -16.59375 L 1.835938 -16.59375 L 1.835938 0 L 3.8125 0 L 3.8125 -8.324219 C 4.644531 -9.480469 5.925781 -10.363281 7.183594 -10.363281 C 9.164062 -10.363281 9.972656 -9.070312 9.972656 -6.765625 L 9.972656 0 L 11.953125 0 L 11.953125 -6.753906 C 11.953125 -10.476562 10.445312 -12.074219 7.769531 -12.074219 Z M 7.769531 -12.074219 " }) }) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(232.298483, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", {}) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(238.150201, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", { children: (0,jsx_runtime.jsx)("path", { d: "M 7.113281 0.398438 C 10.671875 0.398438 13.304688 -2.253906 13.304688 -5.832031 C 13.304688 -9.421875 10.671875 -12.074219 7.125 -12.074219 C 3.578125 -12.074219 0.953125 -9.421875 0.953125 -5.832031 C 0.953125 -2.253906 3.578125 0.398438 7.113281 0.398438 Z M 7.144531 -1.3125 C 4.726562 -1.3125 2.859375 -3.238281 2.859375 -5.832031 C 2.859375 -8.425781 4.714844 -10.375 7.132812 -10.375 C 9.542969 -10.375 11.398438 -8.425781 11.398438 -5.832031 C 11.398438 -3.238281 9.542969 -1.3125 7.144531 -1.3125 Z M 7.144531 -1.3125 " }) }) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(252.40543, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", {}) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(258.257149, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", { children: (0,jsx_runtime.jsx)("path", { d: "M 7.757812 -12.074219 C 6.242188 -12.074219 4.867188 -11.285156 3.78125 -10.261719 L 3.535156 -11.675781 L 1.835938 -11.675781 L 1.835938 4.847656 L 3.824219 4.847656 L 3.824219 -1.484375 C 4.859375 -0.359375 6.078125 0.410156 7.605469 0.398438 C 10.566406 0.378906 13.046875 -2.140625 13.046875 -5.832031 C 13.046875 -9.542969 10.867188 -12.074219 7.757812 -12.074219 Z M 7.226562 -1.292969 C 5.894531 -1.292969 4.734375 -2.007812 3.8125 -3.148438 L 3.8125 -8.652344 C 4.757812 -9.707031 5.964844 -10.382812 7.277344 -10.382812 C 9.460938 -10.382812 11.164062 -8.601562 11.164062 -5.832031 C 11.164062 -3.167969 9.398438 -1.292969 7.226562 -1.292969 Z M 7.226562 -1.292969 " }) }) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(272.273424, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", {}) })) })), (0,jsx_runtime.jsx)("g", Object.assign({ fill: "#ffffff", fillOpacity: "1" }, { children: (0,jsx_runtime.jsx)("g", Object.assign({ transform: "translate(278.125143, 225.400826)" }, { children: (0,jsx_runtime.jsx)("g", {}) })) })), (0,jsx_runtime.jsx)("path", { strokeLinecap: "round", transform: "matrix(-0.74996, -0.00770479, 0.00770479, -0.74996, 90.022695, 221.450757)", fill: "none", strokeLinejoin: "miter", d: "M 0.998943 1.002259 L 119.05721 0.997773 ", stroke: "#ffffff", strokeWidth: "2", strokeOpacity: "1", strokeMiterlimit: "4" }), (0,jsx_runtime.jsx)("path", { strokeLinecap: "round", transform: "matrix(-0.75, 0, 0, -0.75, 374.989638, 220.525826)", fill: "none", strokeLinejoin: "miter", d: "M 1.001809 0.997977 L 127.871609 0.997977 ", stroke: "#ffffff", strokeWidth: "2", strokeOpacity: "1", strokeMiterlimit: "4" })] })));
};
/* harmony default export */ const components_Logo = (Logo);

;// CONCATENATED MODULE: ./src/app/components/common/Heading/index.tsx


const Heading = ({ message, className = '' }) => (0,jsx_runtime.jsx)("h1", Object.assign({ className: `heading ${className}` }, { children: message.split('').map((letter, index) => (0,jsx_runtime.jsxs)("div", Object.assign({ style: { display: "inline" } }, { children: [(0,jsx_runtime.jsx)("span", Object.assign({ className: `heading__letter ${className && `${className}__letter`}`, datatype: letter, style: { animationDelay: `${0.2 + 0.09 * index}s` } }, { children: letter })), (letter === ',' || letter === '!' || letter === ':') && (0,jsx_runtime.jsx)("br", {})] }), index)) }));

;// CONCATENATED MODULE: ./src/app/components/common/MarkerPoint/index.tsx



const MarkerPoin = () => {
    const [isShow, setIsShow] = (0,react.useState)(false);
    (0,react.useEffect)(() => {
        setTimeout(() => setIsShow(true), 5500);
    }, []);
    return ((0,jsx_runtime.jsx)("div", Object.assign({ className: 'container' }, { children: isShow && (0,jsx_runtime.jsxs)("a", Object.assign({ target: '_blank', href: 'https://www.google.com/maps/place/Smart+Hub+Obolon/@50.5135907,30.4946633,18z/data=!4m6!3m5!1s0x40d4d3d87336713f:0x487a5df3ab61e7e8!8m2!3d50.5135733!4d30.4955916!16s%2Fg%2F11k0t9bhqk?entry=ttu', rel: "noreferrer" }, { children: [(0,jsx_runtime.jsx)("div", { className: 'pin bounce' }), (0,jsx_runtime.jsx)("div", { className: 'pulse' }), "  "] })) })));
};
/* harmony default export */ const MarkerPoint = (MarkerPoin);

;// CONCATENATED MODULE: ./src/app/views/Home/index.tsx






const Home = () => (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("nav", Object.assign({ className: 'nav-bar' }, { children: (0,jsx_runtime.jsx)("div", { children: (0,jsx_runtime.jsx)(components_Logo, {}) }) })), (0,jsx_runtime.jsxs)("section", Object.assign({ className: "home" }, { children: [(0,jsx_runtime.jsx)(Heading, { message: "\u041F\u0440\u0438\u0432\u0456\u0442 \u0434\u0440\u0443\u0436\u0435, \u041C\u0438 \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0454\u043C\u043E\u0441\u044C \u0443 \u0431\u0435\u0440\u0435\u0437\u043D\u0456! \u0427\u0435\u043A\u0430\u0454\u043C\u043E \u043D\u0430 \u0442\u0435\u0431\u0435" }), (0,jsx_runtime.jsx)(Background, {}), (0,jsx_runtime.jsx)(MarkerPoint, {})] }))] });

;// CONCATENATED MODULE: ./src/app/routes/index.tsx



/**
 * ComponentRoutes holds all needed information to fill up routes config.
 */
class ComponentRoutes {
    /** data route config*/
    constructor(path, element, children) {
        this.path = path;
        this.element = element;
        this.children = children;
    }
    /** Method for creating child sub-routes path */
    with(child) {
        return `${this.path}/${child.path}`;
    }
    /** Call with method for each child */
    addChildren(children) {
        this.children = children;
        return this;
    }
}
/** Route config implementation */
class RouteConfig {
}
RouteConfig.Home = new ComponentRoutes('/', (0,jsx_runtime.jsx)(Home, {}));
/** Routes is an array of logical router components */
RouteConfig.routes = [
    RouteConfig.Home,
];
const Routes = () => (0,react_router/* useRoutes */.V$)(RouteConfig.routes);

;// CONCATENATED MODULE: ./src/app/App.tsx






function App() {
    const { isLoading } = (0,react.useContext)(LoaderContext);
    return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsxs)("main", Object.assign({ className: "main" }, { children: [isLoading && (0,jsx_runtime.jsx)(Loader, {}), (0,jsx_runtime.jsx)(Routes, {})] })) }));
}
/* harmony default export */ const app_App = (App);

;// CONCATENATED MODULE: ./src/index.tsx






const root = client.createRoot(document.getElementById('root'));
root.render((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)(LoaderProvider, { children: (0,jsx_runtime.jsx)(react_router_dom/* HashRouter */.UT, { children: (0,jsx_runtime.jsx)(app_App, {}) }) }) }));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [605], () => (__webpack_require__(190)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;