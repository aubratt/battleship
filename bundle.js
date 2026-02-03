/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* CSS Reset 
https://www.joshwcomeau.com/css/custom-css-reset/ */

*,
*::before,
*::after {
  box-sizing: border-box;
}

*:not(dialog) {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

p {
  text-wrap: pretty;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

#root,
#__next {
  isolation: isolate;
}

/* root */
:root {
  /** Base colors */
  --clr-dark-a0: #000000;
  --clr-light-a0: #ffffff;

  /** Theme primary colors */
  --clr-primary-a0: #649fed;
  --clr-primary-a10: #79a9ef;
  --clr-primary-a20: #8cb3f1;
  --clr-primary-a30: #9ebef4;
  --clr-primary-a40: #afc8f6;
  --clr-primary-a50: #bfd3f8;

  /** Theme surface colors */
  --clr-surface-a0: #1b1e24;
  --clr-surface-a10: #303338;
  --clr-surface-a20: #46494e;
  --clr-surface-a30: #5e6065;
  --clr-surface-a40: #77797d;
  --clr-surface-a50: #909295;

  /** Success colors */
  --clr-success-a0: #22946e;
  --clr-success-a10: #47d5a6;
  --clr-success-a20: #9ae8ce;

  /** Warning colors */
  --clr-warning-a0: #a87a2a;
  --clr-warning-a10: #d7ac61;
  --clr-warning-a20: #ecd7b2;

  /** Danger colors */
  --clr-danger-a0: #9c2121;
  --clr-danger-a10: #d94a4a;
  --clr-danger-a20: #eb9e9e;

  /* Ship colors */
  --clr-not-hit-bg: #123a2b;
  --clr-not-hit-border: lime;
  --clr-hit-bg: #ff3030;
  --clr-sunk-bg: darkred;
  --clr-sunk-border: red;

  /* Square size */
  --sz-square: 32px;
}

/* body */
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-surface-a0);
  color: var(--clr-light-a0);
  font-family: "Courier New", Courier, monospace;
}

h1 {
  margin: 16px;
  margin-left: 40px;
}

/* gameboards */
#game-status {
  background-color: var(--clr-surface-a50);
  color: var(--clr-dark-a0);
  border-radius: 8px;
  text-align: center;
  width: 710px;
  margin-bottom: 16px;
  margin-left: 24px;
  padding: 8px 16px;
}

#game-container {
  display: grid;
  grid-template: 24px 331px / 24px 331px repeat(2, 24px) 331px;
}

#human-col-label-container {
  grid-area: 1 / 2 / 2 / 3;
}

#cpu-col-label-container {
  grid-area: 1 / 5 / 2 / 6;
}

.col-label-container {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.col-label-char {
  width: 33px;
}

#human-row-label-container {
  grid-area: 2 / 1 / 3 / 2;
}

#cpu-row-label-container {
  grid-area: 2 / 4 / 3 / 5;
}

.row-label-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}

#human-grid-container {
  grid-area: 2 / 2 / 3 / 3;
}

#cpu-grid-container {
  grid-area: 2 / 5 / 3 / 6;
}

.grid-container {
  display: grid;
  grid-template: repeat(10, var(--sz-square)) / repeat(10, var(--sz-square));
  gap: 1px;
  background-color: var(--clr-surface-a20);
  padding: 1px;
}

.cell {
  background-color: var(--clr-surface-a0);
  width: var(--sz-square);
  height: var(--sz-square);
}

#options-container {
  grid-area: 3 / 2 / 4 / 3;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--clr-surface-a20);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 64px;
}

.btn {
  all: unset;
  cursor: pointer;
  color: var(--clr-dark-a0);
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  padding: 4px 8px;
}

#randomize-ships-btn,
#play-again-btn {
  background-color: var(--clr-primary-a0);
}

#start-game-btn {
  background-color: var(--clr-success-a10);
}

/* game log */
#game-log-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 8px;
  width: 734px;
  padding: 8px 0px 24px 24px;
}

#game-log-heading {
  margin-bottom: -8px;
}

.turn-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.turn-number-heading {
  border-bottom: 1px solid var(--clr-surface-a20);
}

.move-container {
  border-radius: 8px;
  padding: 8px 12px;
}

.move-miss {
  background-color: var(--clr-surface-a10);
}

.move-hit {
  background-color: var(--clr-danger-a10);
  color: var(--clr-dark-a0);
}

.move-sunk {
  background-color: var(--clr-sunk-bg);
}

/* not hit (human only) */
.not-hit {
  background-color: var(--clr-not-hit-bg);
}

#human-grid-container :nth-child(1 of .carrier.vertical):not(.sunk),
#human-grid-container :nth-child(1 of .battleship.vertical):not(.sunk),
#human-grid-container :nth-child(1 of .destroyer.vertical):not(.sunk),
#human-grid-container :nth-child(1 of .submarine.vertical):not(.sunk),
#human-grid-container :nth-child(1 of .patrol-boat.vertical):not(.sunk) {
  border-top: 3px solid var(--clr-not-hit-border);
}

.not-hit.vertical {
  border-right: 3px solid var(--clr-not-hit-border);
  border-left: 3px solid var(--clr-not-hit-border);
}

#human-grid-container :nth-child(5 of .carrier.vertical):not(.sunk),
#human-grid-container :nth-child(4 of .battleship.vertical):not(.sunk),
#human-grid-container :nth-child(3 of .destroyer.vertical):not(.sunk),
#human-grid-container :nth-child(3 of .submarine.vertical):not(.sunk),
#human-grid-container :nth-child(2 of .patrol-boat.vertical):not(.sunk) {
  border-bottom: 3px solid var(--clr-not-hit-border);
}

#human-grid-container :nth-child(1 of .carrier.horizontal):not(.sunk),
#human-grid-container :nth-child(1 of .battleship.horizontal):not(.sunk),
#human-grid-container :nth-child(1 of .destroyer.horizontal):not(.sunk),
#human-grid-container :nth-child(1 of .submarine.horizontal):not(.sunk),
#human-grid-container :nth-child(1 of .patrol-boat.horizontal):not(.sunk) {
  border-left: 3px solid var(--clr-not-hit-border);
}

.not-hit.horizontal {
  border-top: 3px solid var(--clr-not-hit-border);
  border-bottom: 3px solid var(--clr-not-hit-border);
}

#human-grid-container :nth-child(5 of .carrier.horizontal):not(.sunk),
#human-grid-container :nth-child(4 of .battleship.horizontal):not(.sunk),
#human-grid-container :nth-child(3 of .destroyer.horizontal):not(.sunk),
#human-grid-container :nth-child(3 of .submarine.horizontal):not(.sunk),
#human-grid-container :nth-child(2 of .patrol-boat.horizontal):not(.sunk) {
  border-right: 3px solid var(--clr-not-hit-border);
}

/* miss (human and cpu) */
.miss {
  background-color: var(--clr-surface-a10);
}

/* hit (human and cpu) */
.hit {
  background-color: var(--clr-hit-bg);
}

/* hit (human only) */
#human-grid-container .horizontal.hit {
  border-top: 3px solid var(--clr-not-hit-border);
  border-bottom: 3px solid var(--clr-not-hit-border);
}

#human-grid-container .vertical.hit {
  border-left: 3px solid var(--clr-not-hit-border);
  border-right: 3px solid var(--clr-not-hit-border);
}

/* sunk (human and cpu) */
.sunk {
  background-color: var(--clr-sunk-bg);
}

.grid-container :nth-child(1 of .carrier.vertical.sunk),
.grid-container :nth-child(1 of .battleship.vertical.sunk),
.grid-container :nth-child(1 of .destroyer.vertical.sunk),
.grid-container :nth-child(1 of .submarine.vertical.sunk),
.grid-container :nth-child(1 of .patrol-boat.vertical.sunk) {
  border-top: 3px solid var(--clr-sunk-border);
}

.sunk.vertical {
  border-right: 3px solid var(--clr-sunk-border);
  border-left: 3px solid var(--clr-sunk-border);
}

.grid-container :nth-child(5 of .carrier.vertical.sunk),
.grid-container :nth-child(4 of .battleship.vertical.sunk),
.grid-container :nth-child(3 of .destroyer.vertical.sunk),
.grid-container :nth-child(3 of .submarine.vertical.sunk),
.grid-container :nth-child(2 of .patrol-boat.vertical.sunk) {
  border-bottom: 3px solid var(--clr-sunk-border);
}

.grid-container :nth-child(1 of .carrier.horizontal.sunk),
.grid-container :nth-child(1 of .battleship.horizontal.sunk),
.grid-container :nth-child(1 of .destroyer.horizontal.sunk),
.grid-container :nth-child(1 of .submarine.horizontal.sunk),
.grid-container :nth-child(1 of .patrol-boat.horizontal.sunk) {
  border-left: 3px solid var(--clr-sunk-border);
}

.sunk.horizontal {
  border-top: 3px solid var(--clr-sunk-border);
  border-bottom: 3px solid var(--clr-sunk-border);
}

.grid-container :nth-child(5 of .carrier.horizontal.sunk),
.grid-container :nth-child(4 of .battleship.horizontal.sunk),
.grid-container :nth-child(3 of .destroyer.horizontal.sunk),
.grid-container :nth-child(3 of .submarine.horizontal.sunk),
.grid-container :nth-child(2 of .patrol-boat.horizontal.sunk) {
  border-right: 3px solid var(--clr-sunk-border);
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* CSS Reset \nhttps://www.joshwcomeau.com/css/custom-css-reset/ */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n*:not(dialog) {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\np {\n  text-wrap: pretty;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* root */\n:root {\n  /** Base colors */\n  --clr-dark-a0: #000000;\n  --clr-light-a0: #ffffff;\n\n  /** Theme primary colors */\n  --clr-primary-a0: #649fed;\n  --clr-primary-a10: #79a9ef;\n  --clr-primary-a20: #8cb3f1;\n  --clr-primary-a30: #9ebef4;\n  --clr-primary-a40: #afc8f6;\n  --clr-primary-a50: #bfd3f8;\n\n  /** Theme surface colors */\n  --clr-surface-a0: #1b1e24;\n  --clr-surface-a10: #303338;\n  --clr-surface-a20: #46494e;\n  --clr-surface-a30: #5e6065;\n  --clr-surface-a40: #77797d;\n  --clr-surface-a50: #909295;\n\n  /** Success colors */\n  --clr-success-a0: #22946e;\n  --clr-success-a10: #47d5a6;\n  --clr-success-a20: #9ae8ce;\n\n  /** Warning colors */\n  --clr-warning-a0: #a87a2a;\n  --clr-warning-a10: #d7ac61;\n  --clr-warning-a20: #ecd7b2;\n\n  /** Danger colors */\n  --clr-danger-a0: #9c2121;\n  --clr-danger-a10: #d94a4a;\n  --clr-danger-a20: #eb9e9e;\n\n  /* Ship colors */\n  --clr-not-hit-bg: #123a2b;\n  --clr-not-hit-border: lime;\n  --clr-hit-bg: #ff3030;\n  --clr-sunk-bg: darkred;\n  --clr-sunk-border: red;\n\n  /* Square size */\n  --sz-square: 32px;\n}\n\n/* body */\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--clr-surface-a0);\n  color: var(--clr-light-a0);\n  font-family: \"Courier New\", Courier, monospace;\n}\n\nh1 {\n  margin: 16px;\n  margin-left: 40px;\n}\n\n/* gameboards */\n#game-status {\n  background-color: var(--clr-surface-a50);\n  color: var(--clr-dark-a0);\n  border-radius: 8px;\n  text-align: center;\n  width: 710px;\n  margin-bottom: 16px;\n  margin-left: 24px;\n  padding: 8px 16px;\n}\n\n#game-container {\n  display: grid;\n  grid-template: 24px 331px / 24px 331px repeat(2, 24px) 331px;\n}\n\n#human-col-label-container {\n  grid-area: 1 / 2 / 2 / 3;\n}\n\n#cpu-col-label-container {\n  grid-area: 1 / 5 / 2 / 6;\n}\n\n.col-label-container {\n  display: flex;\n  justify-content: space-around;\n  text-align: center;\n}\n\n.col-label-char {\n  width: 33px;\n}\n\n#human-row-label-container {\n  grid-area: 2 / 1 / 3 / 2;\n}\n\n#cpu-row-label-container {\n  grid-area: 2 / 4 / 3 / 5;\n}\n\n.row-label-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  text-align: center;\n}\n\n#human-grid-container {\n  grid-area: 2 / 2 / 3 / 3;\n}\n\n#cpu-grid-container {\n  grid-area: 2 / 5 / 3 / 6;\n}\n\n.grid-container {\n  display: grid;\n  grid-template: repeat(10, var(--sz-square)) / repeat(10, var(--sz-square));\n  gap: 1px;\n  background-color: var(--clr-surface-a20);\n  padding: 1px;\n}\n\n.cell {\n  background-color: var(--clr-surface-a0);\n  width: var(--sz-square);\n  height: var(--sz-square);\n}\n\n#options-container {\n  grid-area: 3 / 2 / 4 / 3;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: var(--clr-surface-a20);\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  height: 64px;\n}\n\n.btn {\n  all: unset;\n  cursor: pointer;\n  color: var(--clr-dark-a0);\n  font-size: 14px;\n  font-weight: bold;\n  border-radius: 8px;\n  padding: 4px 8px;\n}\n\n#randomize-ships-btn,\n#play-again-btn {\n  background-color: var(--clr-primary-a0);\n}\n\n#start-game-btn {\n  background-color: var(--clr-success-a10);\n}\n\n/* game log */\n#game-log-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  gap: 8px;\n  width: 734px;\n  padding: 8px 0px 24px 24px;\n}\n\n#game-log-heading {\n  margin-bottom: -8px;\n}\n\n.turn-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.turn-number-heading {\n  border-bottom: 1px solid var(--clr-surface-a20);\n}\n\n.move-container {\n  border-radius: 8px;\n  padding: 8px 12px;\n}\n\n.move-miss {\n  background-color: var(--clr-surface-a10);\n}\n\n.move-hit {\n  background-color: var(--clr-danger-a10);\n  color: var(--clr-dark-a0);\n}\n\n.move-sunk {\n  background-color: var(--clr-sunk-bg);\n}\n\n/* not hit (human only) */\n.not-hit {\n  background-color: var(--clr-not-hit-bg);\n}\n\n#human-grid-container :nth-child(1 of .carrier.vertical):not(.sunk),\n#human-grid-container :nth-child(1 of .battleship.vertical):not(.sunk),\n#human-grid-container :nth-child(1 of .destroyer.vertical):not(.sunk),\n#human-grid-container :nth-child(1 of .submarine.vertical):not(.sunk),\n#human-grid-container :nth-child(1 of .patrol-boat.vertical):not(.sunk) {\n  border-top: 3px solid var(--clr-not-hit-border);\n}\n\n.not-hit.vertical {\n  border-right: 3px solid var(--clr-not-hit-border);\n  border-left: 3px solid var(--clr-not-hit-border);\n}\n\n#human-grid-container :nth-child(5 of .carrier.vertical):not(.sunk),\n#human-grid-container :nth-child(4 of .battleship.vertical):not(.sunk),\n#human-grid-container :nth-child(3 of .destroyer.vertical):not(.sunk),\n#human-grid-container :nth-child(3 of .submarine.vertical):not(.sunk),\n#human-grid-container :nth-child(2 of .patrol-boat.vertical):not(.sunk) {\n  border-bottom: 3px solid var(--clr-not-hit-border);\n}\n\n#human-grid-container :nth-child(1 of .carrier.horizontal):not(.sunk),\n#human-grid-container :nth-child(1 of .battleship.horizontal):not(.sunk),\n#human-grid-container :nth-child(1 of .destroyer.horizontal):not(.sunk),\n#human-grid-container :nth-child(1 of .submarine.horizontal):not(.sunk),\n#human-grid-container :nth-child(1 of .patrol-boat.horizontal):not(.sunk) {\n  border-left: 3px solid var(--clr-not-hit-border);\n}\n\n.not-hit.horizontal {\n  border-top: 3px solid var(--clr-not-hit-border);\n  border-bottom: 3px solid var(--clr-not-hit-border);\n}\n\n#human-grid-container :nth-child(5 of .carrier.horizontal):not(.sunk),\n#human-grid-container :nth-child(4 of .battleship.horizontal):not(.sunk),\n#human-grid-container :nth-child(3 of .destroyer.horizontal):not(.sunk),\n#human-grid-container :nth-child(3 of .submarine.horizontal):not(.sunk),\n#human-grid-container :nth-child(2 of .patrol-boat.horizontal):not(.sunk) {\n  border-right: 3px solid var(--clr-not-hit-border);\n}\n\n/* miss (human and cpu) */\n.miss {\n  background-color: var(--clr-surface-a10);\n}\n\n/* hit (human and cpu) */\n.hit {\n  background-color: var(--clr-hit-bg);\n}\n\n/* hit (human only) */\n#human-grid-container .horizontal.hit {\n  border-top: 3px solid var(--clr-not-hit-border);\n  border-bottom: 3px solid var(--clr-not-hit-border);\n}\n\n#human-grid-container .vertical.hit {\n  border-left: 3px solid var(--clr-not-hit-border);\n  border-right: 3px solid var(--clr-not-hit-border);\n}\n\n/* sunk (human and cpu) */\n.sunk {\n  background-color: var(--clr-sunk-bg);\n}\n\n.grid-container :nth-child(1 of .carrier.vertical.sunk),\n.grid-container :nth-child(1 of .battleship.vertical.sunk),\n.grid-container :nth-child(1 of .destroyer.vertical.sunk),\n.grid-container :nth-child(1 of .submarine.vertical.sunk),\n.grid-container :nth-child(1 of .patrol-boat.vertical.sunk) {\n  border-top: 3px solid var(--clr-sunk-border);\n}\n\n.sunk.vertical {\n  border-right: 3px solid var(--clr-sunk-border);\n  border-left: 3px solid var(--clr-sunk-border);\n}\n\n.grid-container :nth-child(5 of .carrier.vertical.sunk),\n.grid-container :nth-child(4 of .battleship.vertical.sunk),\n.grid-container :nth-child(3 of .destroyer.vertical.sunk),\n.grid-container :nth-child(3 of .submarine.vertical.sunk),\n.grid-container :nth-child(2 of .patrol-boat.vertical.sunk) {\n  border-bottom: 3px solid var(--clr-sunk-border);\n}\n\n.grid-container :nth-child(1 of .carrier.horizontal.sunk),\n.grid-container :nth-child(1 of .battleship.horizontal.sunk),\n.grid-container :nth-child(1 of .destroyer.horizontal.sunk),\n.grid-container :nth-child(1 of .submarine.horizontal.sunk),\n.grid-container :nth-child(1 of .patrol-boat.horizontal.sunk) {\n  border-left: 3px solid var(--clr-sunk-border);\n}\n\n.sunk.horizontal {\n  border-top: 3px solid var(--clr-sunk-border);\n  border-bottom: 3px solid var(--clr-sunk-border);\n}\n\n.grid-container :nth-child(5 of .carrier.horizontal.sunk),\n.grid-container :nth-child(4 of .battleship.horizontal.sunk),\n.grid-container :nth-child(3 of .destroyer.horizontal.sunk),\n.grid-container :nth-child(3 of .submarine.horizontal.sunk),\n.grid-container :nth-child(2 of .patrol-boat.horizontal.sunk) {\n  border-right: 3px solid var(--clr-sunk-border);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./src/modules/classes.js"
/*!********************************!*\
  !*** ./src/modules/classes.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DIRECTION: () => (/* binding */ DIRECTION),
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship),
/* harmony export */   getRandomInteger: () => (/* binding */ getRandomInteger)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DIRECTION = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
};
var Ship = /*#__PURE__*/function () {
  function Ship(name, length) {
    _classCallCheck(this, Ship);
    this.name = name;
    this.direction;
    this.length = length;
    this.hitCount = 0;
    this.sunk = false;
  }
  return _createClass(Ship, [{
    key: "hit",
    value: function hit() {
      this.hitCount++;
      this.isSunk();
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      if (this.hitCount >= this.length) this.sunk = true;
    }
  }]);
}();
var Gameboard = /*#__PURE__*/function () {
  function Gameboard() {
    _classCallCheck(this, Gameboard);
    this.width = 10;
    this.height = 10;
    this.board = this.createBoard();
    this.ships = this.createShips();
    this.allShipsSunk = false;
  }
  return _createClass(Gameboard, [{
    key: "createBoard",
    value: function createBoard() {
      var board = [];
      for (var row = 0; row < this.width; row++) {
        board[row] = [];
        for (var col = 0; col < this.height; col++) {
          board[row][col] = {
            row: row,
            col: col,
            ship: null,
            hit: false
          };
        }
      }
      return board;
    }
  }, {
    key: "createShips",
    value: function createShips() {
      var carrier = new Ship("carrier", 5);
      var battleship = new Ship("battleship", 4);
      var destroyer = new Ship("destroyer", 3);
      var submarine = new Ship("submarine", 3);
      var patrolBoat = new Ship("patrol-boat", 2);
      return {
        carrier: carrier,
        battleship: battleship,
        destroyer: destroyer,
        submarine: submarine,
        patrolBoat: patrolBoat
      };
    }
  }, {
    key: "placeShip",
    value: function placeShip(ship, row, col) {
      if (ship.direction === DIRECTION.HORIZONTAL) {
        for (var i = 0; i < ship.length; i++) {
          this.board[row][col].ship = ship;
          col++;
        }
      } else {
        for (var _i = 0; _i < ship.length; _i++) {
          this.board[row][col].ship = ship;
          row++;
        }
      }
    }
  }, {
    key: "placeAllShipsRandomly",
    value: function placeAllShipsRandomly() {
      this.board = this.createBoard();
      this.ships = this.createShips();
      for (var _i2 = 0, _Object$entries = Object.entries(this.ships); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
          key = _Object$entries$_i[0],
          ship = _Object$entries$_i[1];
        ship.direction = getRandomInteger(1) < 1 ? DIRECTION.HORIZONTAL : DIRECTION.VERTICAL;
        var rowMax = void 0;
        var colMax = void 0;
        var rowRandom = void 0;
        var colRandom = void 0;
        if (ship.direction === DIRECTION.HORIZONTAL) {
          rowMax = this.height - 1;
          colMax = this.width - ship.length;
          colRandom = -1;
          while (colRandom === -1) {
            rowRandom = getRandomInteger(rowMax);
            colRandom = getRandomInteger(colMax);
            for (var i = colRandom; i < colRandom + ship.length; i++) {
              if (this.board[rowRandom][i].ship) colRandom = -1;
              if (colRandom === -1) break;
            }
          }
        } else {
          rowMax = this.height - ship.length;
          colMax = this.width - 1;
          rowRandom = -1;
          while (rowRandom === -1) {
            rowRandom = getRandomInteger(rowMax);
            colRandom = getRandomInteger(colMax);
            for (var _i3 = rowRandom; _i3 < rowRandom + ship.length; _i3++) {
              if (this.board[_i3][colRandom].ship) rowRandom = -1;
              if (rowRandom === -1) break;
            }
          }
        }
        this.placeShip(ship, rowRandom, colRandom);
      }
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(row, col) {
      if (row < 0 || row > this.height - 1 || col < 0 || col > this.width - 1) return {
        valid: false
      };
      var cell = this.board[row][col];
      if (cell.hit) return {
        valid: false
      };
      cell.hit = true;
      if (cell.ship) {
        cell.ship.hit();
        this.checkIfAllShipsSunk();
        return {
          valid: true,
          hit: true
        };
      }
      return {
        valid: true,
        hit: false
      };
    }
  }, {
    key: "checkIfAllShipsSunk",
    value: function checkIfAllShipsSunk() {
      for (var _i4 = 0, _Object$entries2 = Object.entries(this.ships); _i4 < _Object$entries2.length; _i4++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i4], 2),
          key = _Object$entries2$_i[0],
          ship = _Object$entries2$_i[1];
        if (ship.sunk === false) return;
      }
      this.allShipsSunk = true;
    }
  }]);
}();
var Player = /*#__PURE__*/_createClass(function Player(human) {
  _classCallCheck(this, Player);
  this.human = human;
  this.gameboard = new Gameboard();
});
function getRandomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

/***/ },

/***/ "./src/modules/element-factory.js"
/*!****************************************!*\
  !*** ./src/modules/element-factory.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newColLabelChar: () => (/* binding */ newColLabelChar),
/* harmony export */   newColLabelContainer: () => (/* binding */ newColLabelContainer),
/* harmony export */   newGameLogContainer: () => (/* binding */ newGameLogContainer),
/* harmony export */   newGameLogHeading: () => (/* binding */ newGameLogHeading),
/* harmony export */   newGridCell: () => (/* binding */ newGridCell),
/* harmony export */   newGridContainer: () => (/* binding */ newGridContainer),
/* harmony export */   newMoveContainer: () => (/* binding */ newMoveContainer),
/* harmony export */   newMoveText: () => (/* binding */ newMoveText),
/* harmony export */   newOptionsContainer: () => (/* binding */ newOptionsContainer),
/* harmony export */   newPlayAgainBtn: () => (/* binding */ newPlayAgainBtn),
/* harmony export */   newRandomizeShipsBtn: () => (/* binding */ newRandomizeShipsBtn),
/* harmony export */   newRowLabelChar: () => (/* binding */ newRowLabelChar),
/* harmony export */   newRowLabelContainer: () => (/* binding */ newRowLabelContainer),
/* harmony export */   newStartGameBtn: () => (/* binding */ newStartGameBtn),
/* harmony export */   newTurnContainer: () => (/* binding */ newTurnContainer),
/* harmony export */   newTurnNumberHeading: () => (/* binding */ newTurnNumberHeading)
/* harmony export */ });
function newRowLabelContainer() {
  var container = document.createElement("div");
  container.classList.add("row-label-container");
  return container;
}
function newColLabelContainer() {
  var container = document.createElement("div");
  container.classList.add("col-label-container");
  return container;
}
function newRowLabelChar() {
  var _char = document.createElement("p");
  _char.classList.add("row-label-char");
  return _char;
}
function newColLabelChar() {
  var _char2 = document.createElement("p");
  _char2.classList.add("col-label-char");
  return _char2;
}
function newGridContainer() {
  var container = document.createElement("div");
  container.classList.add("grid-container");
  return container;
}
function newGridCell() {
  var cell = document.createElement("div");
  cell.classList.add("cell");
  return cell;
}
function newOptionsContainer() {
  var container = document.createElement("div");
  container.id = "options-container";
  return container;
}
function newRandomizeShipsBtn() {
  var btn = document.createElement("button");
  btn.id = "randomize-ships-btn";
  btn.classList.add("btn");
  btn.textContent = "Randomize";
  return btn;
}
function newStartGameBtn() {
  var btn = document.createElement("button");
  btn.id = "start-game-btn";
  btn.classList.add("btn");
  btn.textContent = "Start Game";
  return btn;
}
function newPlayAgainBtn() {
  var btn = document.createElement("button");
  btn.id = "play-again-btn";
  btn.classList.add("btn");
  btn.textContent = "Play Again";
  return btn;
}
function newGameLogContainer() {
  var container = document.createElement("div");
  container.id = "game-log-container";
  return container;
}
function newGameLogHeading() {
  var heading = document.createElement("h2");
  heading.id = "game-log-heading";
  heading.textContent = "Game Log";
  return heading;
}
function newTurnContainer() {
  var container = document.createElement("div");
  container.classList.add("turn-container");
  return container;
}
function newTurnNumberHeading() {
  var heading = document.createElement("p");
  heading.classList.add("turn-number-heading");
  return heading;
}
function newMoveContainer() {
  var container = document.createElement("div");
  container.classList.add("move-container");
  return container;
}
function newMoveText() {
  var text = document.createElement("p");
  text.classList.add("move-text");
  return text;
}

/***/ },

/***/ "./src/modules/game-controller.js"
/*!****************************************!*\
  !*** ./src/modules/game-controller.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controller: () => (/* binding */ Controller)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Controller = /*#__PURE__*/function () {
  function Controller(humanPlayer, cpuPlayer) {
    _classCallCheck(this, Controller);
    this.humanPlayer = humanPlayer;
    this.cpuPlayer = cpuPlayer;
    this.currentTurn = null;
    this.turnNumber = 0;
    this.gameOver = false;
    this.winner = null;
  }
  return _createClass(Controller, [{
    key: "processMove",
    value: function processMove(enemy, row, col) {
      return enemy.gameboard.receiveAttack(row, col);
    }
  }, {
    key: "nextTurn",
    value: function nextTurn() {
      var humanWin = this.cpuPlayer.gameboard.allShipsSunk;
      var cpuWin = this.humanPlayer.gameboard.allShipsSunk;
      if (humanWin || cpuWin) {
        this.gameOver = true;
        humanWin ? this.winner = this.humanPlayer : this.winner = this.cpuPlayer;
      }
      if (this.currentTurn === this.humanPlayer) {
        this.currentTurn = this.cpuPlayer;
        this.turnNumber++;
      } else this.currentTurn = this.humanPlayer;
    }
  }]);
}();

/***/ },

/***/ "./src/modules/page-builder.js"
/*!*************************************!*\
  !*** ./src/modules/page-builder.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleHumanClick: () => (/* binding */ handleHumanClick),
/* harmony export */   renderGameplayBoards: () => (/* binding */ renderGameplayBoards),
/* harmony export */   startNewGame: () => (/* binding */ startNewGame)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/modules/classes.js");
/* harmony import */ var _game_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-controller */ "./src/modules/game-controller.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element-factory */ "./src/modules/element-factory.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var CAPITAL_A_INDEX = 65;
var gameStatus = document.getElementById("game-status");
var gameContainer = document.getElementById("game-container");
var humanGridContainer;
var optionsContainer;
var cpuGridContainer;
var gameLogContainer;
var gameLogHeading;
initGameSetup();
function initGameSetup() {
  var humanPlayer = new _classes__WEBPACK_IMPORTED_MODULE_0__.Player(true);
  var cpuPlayer = new _classes__WEBPACK_IMPORTED_MODULE_0__.Player(false);
  var controller = new _game_controller__WEBPACK_IMPORTED_MODULE_1__.Controller(humanPlayer, cpuPlayer);
  humanPlayer.gameboard.placeAllShipsRandomly();
  cpuPlayer.gameboard.placeAllShipsRandomly();
  var humanRowLabelContainer = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newRowLabelContainer)();
  var humanColLabelContainer = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newColLabelContainer)();
  var cpuRowLabelContainer = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newRowLabelContainer)();
  var cpuColLabelContainer = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newColLabelContainer)();
  humanGridContainer = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newGridContainer)();
  cpuGridContainer = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newGridContainer)();
  if (!optionsContainer) optionsContainer = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newOptionsContainer)();
  var randomizeShipsBtn = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newRandomizeShipsBtn)();
  var startGameBtn = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newStartGameBtn)();
  humanRowLabelContainer.id = "human-row-label-container";
  humanColLabelContainer.id = "human-col-label-container";
  cpuRowLabelContainer.id = "cpu-row-label-container";
  cpuColLabelContainer.id = "cpu-col-label-container";
  humanGridContainer.id = "human-grid-container";
  cpuGridContainer.id = "cpu-grid-container";
  gameStatus.textContent = "Set your board";
  for (var i = CAPITAL_A_INDEX; i < CAPITAL_A_INDEX + 10; i++) {
    var rowLabelChar = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newRowLabelChar)();
    rowLabelChar.textContent = String.fromCharCode(i);
    humanRowLabelContainer.appendChild(rowLabelChar);
  }
  for (var _i = 1; _i < 11; _i++) {
    var colLabelChar = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newColLabelChar)();
    colLabelChar.textContent = _i;
    humanColLabelContainer.appendChild(colLabelChar);
  }
  for (var _i2 = CAPITAL_A_INDEX; _i2 < CAPITAL_A_INDEX + 10; _i2++) {
    var _rowLabelChar = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newRowLabelChar)();
    _rowLabelChar.textContent = String.fromCharCode(_i2);
    cpuRowLabelContainer.appendChild(_rowLabelChar);
  }
  for (var _i3 = 1; _i3 < 11; _i3++) {
    var _colLabelChar = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newColLabelChar)();
    _colLabelChar.textContent = _i3;
    cpuColLabelContainer.appendChild(_colLabelChar);
  }
  renderHumanSetupBoard(humanPlayer);
  cpuPlayer.gameboard.board.forEach(function (row, rowNum) {
    row.forEach(function (cell, colNum) {
      var gridCell = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newGridCell)();
      gridCell.setAttribute("data-row", rowNum);
      gridCell.setAttribute("data-col", colNum);
      gridCell.addEventListener("click", function (event) {
        handleHumanClick(controller, event.target);
      });
      cpuGridContainer.appendChild(gridCell);
    });
  });
  randomizeShipsBtn.addEventListener("click", function () {
    humanPlayer.gameboard.board = null;
    humanPlayer.gameboard.ships = null;
    humanPlayer.gameboard.placeAllShipsRandomly();
    renderHumanSetupBoard(humanPlayer);
  });
  startGameBtn.addEventListener("click", function () {
    startNewGame(controller);
  });
  gameContainer.appendChild(humanRowLabelContainer);
  gameContainer.appendChild(humanColLabelContainer);
  gameContainer.appendChild(cpuRowLabelContainer);
  gameContainer.appendChild(cpuColLabelContainer);
  gameContainer.appendChild(humanGridContainer);
  gameContainer.appendChild(cpuGridContainer);
  gameContainer.appendChild(optionsContainer);
  optionsContainer.appendChild(randomizeShipsBtn);
  optionsContainer.appendChild(startGameBtn);
}
function renderHumanSetupBoard(humanPlayer) {
  humanPlayer.gameboard.board.forEach(function (row, rowNum) {
    row.forEach(function (cell, colNum) {
      var gridCell = humanGridContainer.querySelector("[data-row=\"".concat(rowNum, "\"][data-col=\"").concat(colNum, "\"]"));
      if (gridCell === null) {
        gridCell = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newGridCell)();
        gridCell.setAttribute("data-row", rowNum);
        gridCell.setAttribute("data-col", colNum);
      } else gridCell.className = "cell";
      if (cell.ship) gridCell.classList.add(cell.ship.name, cell.ship.direction, "not-hit");
      humanGridContainer.appendChild(gridCell);
    });
  });
}
function startNewGame(controller) {
  // optionsContainer.style.display = "none";
  optionsContainer.remove();
  gameLogContainer = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newGameLogContainer)();
  gameLogHeading = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newGameLogHeading)();
  document.body.appendChild(gameLogContainer);
  gameLogContainer.appendChild(gameLogHeading);
  gameStatus.textContent = "Your turn";
  controller.currentTurn = controller.humanPlayer;
}
function renderGameplayBoards(controller, gridCell) {
  var humanTurn = controller.currentTurn === controller.humanPlayer;
  var boardCell = humanTurn ? controller.humanPlayer.gameboard.board[gridCell.dataset.row][gridCell.dataset.col] : controller.cpuPlayer.gameboard.board[gridCell.dataset.row][gridCell.dataset.col];
  if (humanTurn) {
    gameStatus.textContent = "Your turn";
  } else {
    gameStatus.textContent = "CPU's turn";
  }
  if (boardCell.ship) {
    gridCell.classList.add(boardCell.ship.name, "hit");
    gridCell.classList.remove("not-hit");
    if (boardCell.ship.sunk) {
      controller.currentTurn.gameboard.board.forEach(function (row, rowNum) {
        row.forEach(function (cell, colNum) {
          if (cell.ship && boardCell.ship.name === cell.ship.name) {
            var thisGridCell;
            humanTurn ? thisGridCell = humanGridContainer.querySelector("[data-row=\"".concat(rowNum, "\"][data-col=\"").concat(colNum, "\"]")) : thisGridCell = cpuGridContainer.querySelector("[data-row=\"".concat(rowNum, "\"][data-col=\"").concat(colNum, "\"]"));
            thisGridCell.classList.add(cell.ship.direction, "sunk");
            thisGridCell.classList.remove("hit");
          }
        });
      });
    }
  } else gridCell.classList.add("miss");
  if (controller.gameOver) {
    if (controller.winner === controller.humanPlayer) gameStatus.textContent = "You win!";else gameStatus.textContent = "CPU wins";
    showPlayAgainBtn();
  }
}
function renderGameLog(controller, row, col) {
  var humanTurn = controller.currentTurn === controller.humanPlayer;
  if (!humanTurn) {
    var _turnContainer = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newTurnContainer)();
    var turnNumberHeading = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newTurnNumberHeading)();
    _turnContainer.setAttribute("data-turn-number", controller.turnNumber);
    turnNumberHeading.textContent = "Turn ".concat(controller.turnNumber);
    _turnContainer.appendChild(turnNumberHeading);
    if (controller.turnNumber > 1) gameLogContainer.insertBefore(_turnContainer, gameLogContainer.querySelector("[data-turn-number=\"".concat(controller.turnNumber - 1, "\"]")));else gameLogContainer.appendChild(_turnContainer);
  }
  var turnContainer = gameLogContainer.querySelector("[data-turn-number=\"".concat(controller.turnNumber, "\"]"));
  var moveContainer = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newMoveContainer)();
  var moveText = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newMoveText)();
  moveContainer.setAttribute("data-turn-number", controller.turnNumber);
  moveContainer.setAttribute("data-move-number", humanTurn ? 2 : 1);
  var player = humanTurn ? "CPU" : "You";
  var enemy = humanTurn ? "your" : "CPU's";
  var boardCell = humanTurn ? controller.humanPlayer.gameboard.board[row][col] : controller.cpuPlayer.gameboard.board[row][col];
  var ship = boardCell.ship ? boardCell.ship.name : null;
  var rowLetter = String.fromCharCode(CAPITAL_A_INDEX + Number(row));
  var cell = rowLetter + (Number(col) + 1);
  if (boardCell.ship) {
    if (boardCell.ship.sunk) {
      moveContainer.classList.add("move-sunk");
      moveText.textContent = "".concat(player, " sunk ").concat(enemy, " ").concat(ship, " at ").concat(cell);
    } else {
      moveContainer.classList.add("move-hit");
      moveText.textContent = "".concat(player, " hit ").concat(enemy, " ").concat(ship, " at ").concat(cell);
    }
  } else {
    moveContainer.classList.add("move-miss");
    moveText.textContent = "".concat(player, " missed at ").concat(cell);
  }
  moveContainer.appendChild(moveText);
  if (moveContainer.dataset.moveNumber > 1) turnContainer.insertBefore(moveContainer, turnContainer.querySelector("[data-move-number=\"1\"]"));else turnContainer.appendChild(moveContainer);
}
function handleHumanClick(controller, gridCell) {
  if (controller.currentTurn !== controller.humanPlayer || controller.gameOver) return;
  var result = controller.processMove(controller.cpuPlayer, Number(gridCell.dataset.row), Number(gridCell.dataset.col));
  if (!result.valid) return;
  controller.nextTurn();
  renderGameplayBoards(controller, gridCell);
  if (controller.currentTurn === controller.cpuPlayer) handleCpuTurn(controller);
  renderGameLog(controller, gridCell.dataset.row, gridCell.dataset.col);
}
function handleCpuTurn(controller) {
  if (controller.gameOver) return;
  setTimeout(function () {
    var row = -1;
    var col = -1;
    var result = controller.processMove(controller.humanPlayer, row, col);
    var _loop = function _loop() {
      var shipHitCells = controller.humanPlayer.gameboard.board.flat().filter(function (cell) {
        return cell.ship && cell.hit && !cell.ship.sunk;
      });
      if (shipHitCells.length > 0) {
        var targetShip = null;
        for (var _i4 = 0, _Object$entries = Object.entries(controller.humanPlayer.gameboard.ships); _i4 < _Object$entries.length; _i4++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i4], 2),
            key = _Object$entries$_i[0],
            ship = _Object$entries$_i[1];
          if (ship.hitCount > 1 && !ship.sunk) {
            targetShip = ship;
            break;
          }
        }
        var targetCell;
        var hitHorizontalAdjacent;
        if (targetShip) {
          shipHitCells = shipHitCells.filter(function (cell) {
            return cell.ship.name === targetShip.name;
          });
        } else {
          hitHorizontalAdjacent = (0,_classes__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(2) < 2 ? true : false;
        }
        targetCell = shipHitCells[(0,_classes__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(shipHitCells.length - 1)];
        if (targetCell.ship.direction === _classes__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.HORIZONTAL || hitHorizontalAdjacent) {
          row = targetCell.row;
          col = (0,_classes__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(2) < 2 ? targetCell.col - 1 : targetCell.col + 1;
        } else {
          row = (0,_classes__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(2) < 2 ? targetCell.row - 1 : targetCell.row + 1;
          col = targetCell.col;
        }
      } else {
        row = (0,_classes__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(9);
        col = (0,_classes__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(9);
      }
      result = controller.processMove(controller.humanPlayer, row, col);
    };
    while (!result.valid) {
      _loop();
    }
    controller.nextTurn();
    renderGameplayBoards(controller, humanGridContainer.querySelector("[data-row=\"".concat(row, "\"][data-col=\"").concat(col, "\"]")));
    renderGameLog(controller, row, col);
  }, 1000);
}
function showPlayAgainBtn() {
  var playAgainBtn = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newPlayAgainBtn)();
  optionsContainer = (0,_element_factory__WEBPACK_IMPORTED_MODULE_2__.newOptionsContainer)();
  optionsContainer.style.display = "flex";
  optionsContainer.appendChild(playAgainBtn);
  gameContainer.appendChild(optionsContainer);
  playAgainBtn.addEventListener("click", function () {
    gameLogContainer.remove();
    playAgainBtn.remove();
    initGameSetup();
  });
}

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_page_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/page-builder */ "./src/modules/page-builder.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsUUFBUSxRQUFRLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFNBQVMsVUFBVSxVQUFVLE9BQU8sUUFBUSxVQUFVLE1BQU0sV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZ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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsbUM7Ozs7Ozs7Ozs7Ozs7QUNBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWplc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWplc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stamVzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stamVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWplc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stamVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWplc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1qZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1qZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1qZXN0Ly4vc3JjL21vZHVsZXMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWplc3QvLi9zcmMvbW9kdWxlcy9lbGVtZW50LWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1qZXN0Ly4vc3JjL21vZHVsZXMvZ2FtZS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stamVzdC8uL3NyYy9tb2R1bGVzL3BhZ2UtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWplc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stamVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWplc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1qZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWplc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWplc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWplc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stamVzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQ1NTIFJlc2V0IFxuaHR0cHM6Ly93d3cuam9zaHdjb21lYXUuY29tL2Nzcy9jdXN0b20tY3NzLXJlc2V0LyAqL1xuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qOm5vdChkaWFsb2cpIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbmltZyxcbnBpY3R1cmUsXG52aWRlbyxcbmNhbnZhcyxcbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0LFxuYnV0dG9uLFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBmb250OiBpbmhlcml0O1xufVxuXG5wLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cblxucCB7XG4gIHRleHQtd3JhcDogcHJldHR5O1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICB0ZXh0LXdyYXA6IGJhbGFuY2U7XG59XG5cbiNyb290LFxuI19fbmV4dCB7XG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcbn1cblxuLyogcm9vdCAqL1xuOnJvb3Qge1xuICAvKiogQmFzZSBjb2xvcnMgKi9cbiAgLS1jbHItZGFyay1hMDogIzAwMDAwMDtcbiAgLS1jbHItbGlnaHQtYTA6ICNmZmZmZmY7XG5cbiAgLyoqIFRoZW1lIHByaW1hcnkgY29sb3JzICovXG4gIC0tY2xyLXByaW1hcnktYTA6ICM2NDlmZWQ7XG4gIC0tY2xyLXByaW1hcnktYTEwOiAjNzlhOWVmO1xuICAtLWNsci1wcmltYXJ5LWEyMDogIzhjYjNmMTtcbiAgLS1jbHItcHJpbWFyeS1hMzA6ICM5ZWJlZjQ7XG4gIC0tY2xyLXByaW1hcnktYTQwOiAjYWZjOGY2O1xuICAtLWNsci1wcmltYXJ5LWE1MDogI2JmZDNmODtcblxuICAvKiogVGhlbWUgc3VyZmFjZSBjb2xvcnMgKi9cbiAgLS1jbHItc3VyZmFjZS1hMDogIzFiMWUyNDtcbiAgLS1jbHItc3VyZmFjZS1hMTA6ICMzMDMzMzg7XG4gIC0tY2xyLXN1cmZhY2UtYTIwOiAjNDY0OTRlO1xuICAtLWNsci1zdXJmYWNlLWEzMDogIzVlNjA2NTtcbiAgLS1jbHItc3VyZmFjZS1hNDA6ICM3Nzc5N2Q7XG4gIC0tY2xyLXN1cmZhY2UtYTUwOiAjOTA5Mjk1O1xuXG4gIC8qKiBTdWNjZXNzIGNvbG9ycyAqL1xuICAtLWNsci1zdWNjZXNzLWEwOiAjMjI5NDZlO1xuICAtLWNsci1zdWNjZXNzLWExMDogIzQ3ZDVhNjtcbiAgLS1jbHItc3VjY2Vzcy1hMjA6ICM5YWU4Y2U7XG5cbiAgLyoqIFdhcm5pbmcgY29sb3JzICovXG4gIC0tY2xyLXdhcm5pbmctYTA6ICNhODdhMmE7XG4gIC0tY2xyLXdhcm5pbmctYTEwOiAjZDdhYzYxO1xuICAtLWNsci13YXJuaW5nLWEyMDogI2VjZDdiMjtcblxuICAvKiogRGFuZ2VyIGNvbG9ycyAqL1xuICAtLWNsci1kYW5nZXItYTA6ICM5YzIxMjE7XG4gIC0tY2xyLWRhbmdlci1hMTA6ICNkOTRhNGE7XG4gIC0tY2xyLWRhbmdlci1hMjA6ICNlYjllOWU7XG5cbiAgLyogU2hpcCBjb2xvcnMgKi9cbiAgLS1jbHItbm90LWhpdC1iZzogIzEyM2EyYjtcbiAgLS1jbHItbm90LWhpdC1ib3JkZXI6IGxpbWU7XG4gIC0tY2xyLWhpdC1iZzogI2ZmMzAzMDtcbiAgLS1jbHItc3Vuay1iZzogZGFya3JlZDtcbiAgLS1jbHItc3Vuay1ib3JkZXI6IHJlZDtcblxuICAvKiBTcXVhcmUgc2l6ZSAqL1xuICAtLXN6LXNxdWFyZTogMzJweDtcbn1cblxuLyogYm9keSAqL1xuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc3VyZmFjZS1hMCk7XG4gIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQtYTApO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLyogZ2FtZWJvYXJkcyAqL1xuI2dhbWUtc3RhdHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXN1cmZhY2UtYTUwKTtcbiAgY29sb3I6IHZhcigtLWNsci1kYXJrLWEwKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA3MTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xufVxuXG4jZ2FtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiAyNHB4IDMzMXB4IC8gMjRweCAzMzFweCByZXBlYXQoMiwgMjRweCkgMzMxcHg7XG59XG5cbiNodW1hbi1jb2wtbGFiZWwtY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xufVxuXG4jY3B1LWNvbC1sYWJlbC1jb250YWluZXIge1xuICBncmlkLWFyZWE6IDEgLyA1IC8gMiAvIDY7XG59XG5cbi5jb2wtbGFiZWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbC1sYWJlbC1jaGFyIHtcbiAgd2lkdGg6IDMzcHg7XG59XG5cbiNodW1hbi1yb3ctbGFiZWwtY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xufVxuXG4jY3B1LXJvdy1sYWJlbC1jb250YWluZXIge1xuICBncmlkLWFyZWE6IDIgLyA0IC8gMyAvIDU7XG59XG5cbi5yb3ctbGFiZWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2h1bWFuLWdyaWQtY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xufVxuXG4jY3B1LWdyaWQtY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiAyIC8gNSAvIDMgLyA2O1xufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIHZhcigtLXN6LXNxdWFyZSkpIC8gcmVwZWF0KDEwLCB2YXIoLS1zei1zcXVhcmUpKTtcbiAgZ2FwOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zdXJmYWNlLWEyMCk7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLmNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc3VyZmFjZS1hMCk7XG4gIHdpZHRoOiB2YXIoLS1zei1zcXVhcmUpO1xuICBoZWlnaHQ6IHZhcigtLXN6LXNxdWFyZSk7XG59XG5cbiNvcHRpb25zLWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogMyAvIDIgLyA0IC8gMztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zdXJmYWNlLWEyMCk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG4uYnRuIHtcbiAgYWxsOiB1bnNldDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tY2xyLWRhcmstYTApO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG59XG5cbiNyYW5kb21pemUtc2hpcHMtYnRuLFxuI3BsYXktYWdhaW4tYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnktYTApO1xufVxuXG4jc3RhcnQtZ2FtZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc3VjY2Vzcy1hMTApO1xufVxuXG4vKiBnYW1lIGxvZyAqL1xuI2dhbWUtbG9nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGdhcDogOHB4O1xuICB3aWR0aDogNzM0cHg7XG4gIHBhZGRpbmc6IDhweCAwcHggMjRweCAyNHB4O1xufVxuXG4jZ2FtZS1sb2ctaGVhZGluZyB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG59XG5cbi50dXJuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4udHVybi1udW1iZXItaGVhZGluZyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jbHItc3VyZmFjZS1hMjApO1xufVxuXG4ubW92ZS1jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xufVxuXG4ubW92ZS1taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXN1cmZhY2UtYTEwKTtcbn1cblxuLm1vdmUtaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWRhbmdlci1hMTApO1xuICBjb2xvcjogdmFyKC0tY2xyLWRhcmstYTApO1xufVxuXG4ubW92ZS1zdW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXN1bmstYmcpO1xufVxuXG4vKiBub3QgaGl0IChodW1hbiBvbmx5KSAqL1xuLm5vdC1oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbm90LWhpdC1iZyk7XG59XG5cbiNodW1hbi1ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDEgb2YgLmNhcnJpZXIudmVydGljYWwpOm5vdCguc3VuayksXG4jaHVtYW4tZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgxIG9mIC5iYXR0bGVzaGlwLnZlcnRpY2FsKTpub3QoLnN1bmspLFxuI2h1bWFuLWdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMSBvZiAuZGVzdHJveWVyLnZlcnRpY2FsKTpub3QoLnN1bmspLFxuI2h1bWFuLWdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMSBvZiAuc3VibWFyaW5lLnZlcnRpY2FsKTpub3QoLnN1bmspLFxuI2h1bWFuLWdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMSBvZiAucGF0cm9sLWJvYXQudmVydGljYWwpOm5vdCguc3Vuaykge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tY2xyLW5vdC1oaXQtYm9yZGVyKTtcbn1cblxuLm5vdC1oaXQudmVydGljYWwge1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB2YXIoLS1jbHItbm90LWhpdC1ib3JkZXIpO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWNsci1ub3QtaGl0LWJvcmRlcik7XG59XG5cbiNodW1hbi1ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDUgb2YgLmNhcnJpZXIudmVydGljYWwpOm5vdCguc3VuayksXG4jaHVtYW4tZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCg0IG9mIC5iYXR0bGVzaGlwLnZlcnRpY2FsKTpub3QoLnN1bmspLFxuI2h1bWFuLWdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMyBvZiAuZGVzdHJveWVyLnZlcnRpY2FsKTpub3QoLnN1bmspLFxuI2h1bWFuLWdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMyBvZiAuc3VibWFyaW5lLnZlcnRpY2FsKTpub3QoLnN1bmspLFxuI2h1bWFuLWdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMiBvZiAucGF0cm9sLWJvYXQudmVydGljYWwpOm5vdCguc3Vuaykge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tY2xyLW5vdC1oaXQtYm9yZGVyKTtcbn1cblxuI2h1bWFuLWdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMSBvZiAuY2Fycmllci5ob3Jpem9udGFsKTpub3QoLnN1bmspLFxuI2h1bWFuLWdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMSBvZiAuYmF0dGxlc2hpcC5ob3Jpem9udGFsKTpub3QoLnN1bmspLFxuI2h1bWFuLWdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMSBvZiAuZGVzdHJveWVyLmhvcml6b250YWwpOm5vdCguc3VuayksXG4jaHVtYW4tZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgxIG9mIC5zdWJtYXJpbmUuaG9yaXpvbnRhbCk6bm90KC5zdW5rKSxcbiNodW1hbi1ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDEgb2YgLnBhdHJvbC1ib2F0Lmhvcml6b250YWwpOm5vdCguc3Vuaykge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWNsci1ub3QtaGl0LWJvcmRlcik7XG59XG5cbi5ub3QtaGl0Lmhvcml6b250YWwge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tY2xyLW5vdC1oaXQtYm9yZGVyKTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWNsci1ub3QtaGl0LWJvcmRlcik7XG59XG5cbiNodW1hbi1ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDUgb2YgLmNhcnJpZXIuaG9yaXpvbnRhbCk6bm90KC5zdW5rKSxcbiNodW1hbi1ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDQgb2YgLmJhdHRsZXNoaXAuaG9yaXpvbnRhbCk6bm90KC5zdW5rKSxcbiNodW1hbi1ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDMgb2YgLmRlc3Ryb3llci5ob3Jpem9udGFsKTpub3QoLnN1bmspLFxuI2h1bWFuLWdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMyBvZiAuc3VibWFyaW5lLmhvcml6b250YWwpOm5vdCguc3VuayksXG4jaHVtYW4tZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgyIG9mIC5wYXRyb2wtYm9hdC5ob3Jpem9udGFsKTpub3QoLnN1bmspIHtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdmFyKC0tY2xyLW5vdC1oaXQtYm9yZGVyKTtcbn1cblxuLyogbWlzcyAoaHVtYW4gYW5kIGNwdSkgKi9cbi5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXN1cmZhY2UtYTEwKTtcbn1cblxuLyogaGl0IChodW1hbiBhbmQgY3B1KSAqL1xuLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1oaXQtYmcpO1xufVxuXG4vKiBoaXQgKGh1bWFuIG9ubHkpICovXG4jaHVtYW4tZ3JpZC1jb250YWluZXIgLmhvcml6b250YWwuaGl0IHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLWNsci1ub3QtaGl0LWJvcmRlcik7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1jbHItbm90LWhpdC1ib3JkZXIpO1xufVxuXG4jaHVtYW4tZ3JpZC1jb250YWluZXIgLnZlcnRpY2FsLmhpdCB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tY2xyLW5vdC1oaXQtYm9yZGVyKTtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdmFyKC0tY2xyLW5vdC1oaXQtYm9yZGVyKTtcbn1cblxuLyogc3VuayAoaHVtYW4gYW5kIGNwdSkgKi9cbi5zdW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXN1bmstYmcpO1xufVxuXG4uZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgxIG9mIC5jYXJyaWVyLnZlcnRpY2FsLnN1bmspLFxuLmdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMSBvZiAuYmF0dGxlc2hpcC52ZXJ0aWNhbC5zdW5rKSxcbi5ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDEgb2YgLmRlc3Ryb3llci52ZXJ0aWNhbC5zdW5rKSxcbi5ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDEgb2YgLnN1Ym1hcmluZS52ZXJ0aWNhbC5zdW5rKSxcbi5ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDEgb2YgLnBhdHJvbC1ib2F0LnZlcnRpY2FsLnN1bmspIHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLWNsci1zdW5rLWJvcmRlcik7XG59XG5cbi5zdW5rLnZlcnRpY2FsIHtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdmFyKC0tY2xyLXN1bmstYm9yZGVyKTtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1jbHItc3Vuay1ib3JkZXIpO1xufVxuXG4uZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCg1IG9mIC5jYXJyaWVyLnZlcnRpY2FsLnN1bmspLFxuLmdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoNCBvZiAuYmF0dGxlc2hpcC52ZXJ0aWNhbC5zdW5rKSxcbi5ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDMgb2YgLmRlc3Ryb3llci52ZXJ0aWNhbC5zdW5rKSxcbi5ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDMgb2YgLnN1Ym1hcmluZS52ZXJ0aWNhbC5zdW5rKSxcbi5ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDIgb2YgLnBhdHJvbC1ib2F0LnZlcnRpY2FsLnN1bmspIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWNsci1zdW5rLWJvcmRlcik7XG59XG5cbi5ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDEgb2YgLmNhcnJpZXIuaG9yaXpvbnRhbC5zdW5rKSxcbi5ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDEgb2YgLmJhdHRsZXNoaXAuaG9yaXpvbnRhbC5zdW5rKSxcbi5ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDEgb2YgLmRlc3Ryb3llci5ob3Jpem9udGFsLnN1bmspLFxuLmdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMSBvZiAuc3VibWFyaW5lLmhvcml6b250YWwuc3VuayksXG4uZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgxIG9mIC5wYXRyb2wtYm9hdC5ob3Jpem9udGFsLnN1bmspIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1jbHItc3Vuay1ib3JkZXIpO1xufVxuXG4uc3Vuay5ob3Jpem9udGFsIHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLWNsci1zdW5rLWJvcmRlcik7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1jbHItc3Vuay1ib3JkZXIpO1xufVxuXG4uZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCg1IG9mIC5jYXJyaWVyLmhvcml6b250YWwuc3VuayksXG4uZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCg0IG9mIC5iYXR0bGVzaGlwLmhvcml6b250YWwuc3VuayksXG4uZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgzIG9mIC5kZXN0cm95ZXIuaG9yaXpvbnRhbC5zdW5rKSxcbi5ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDMgb2YgLnN1Ym1hcmluZS5ob3Jpem9udGFsLnN1bmspLFxuLmdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMiBvZiAucGF0cm9sLWJvYXQuaG9yaXpvbnRhbC5zdW5rKSB7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHZhcigtLWNsci1zdW5rLWJvcmRlcik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO21EQUNtRDs7QUFFbkQ7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7O0FBRUE7Ozs7O0VBS0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7Ozs7RUFJRSxhQUFhO0FBQ2Y7O0FBRUE7Ozs7Ozs7RUFPRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7OztFQU1FLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUEsU0FBUztBQUNUO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qix1QkFBdUI7O0VBRXZCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsMEJB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QUMvQyxrREFBa0Q7QUFDcEQ7O0FBRUE7Ozs7O0VBS0UsaURBQWlEO0FBQ25EOztBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsK0NBQStDO0VBQy9DLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxpREFBaUQ7QUFDbkQ7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBOzs7OztFQUtFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLDhDQUE4QztFQUM5Qyw2Q0FBNkM7QUFDL0M7O0FBRUE7Ozs7O0VBS0UsK0NBQStDO0FBQ2pEOztBQUVBOzs7OztFQUtFLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QywrQ0FBK0M7QUFDakQ7O0FBRUE7Ozs7O0VBS0UsOENBQThDO0FBQ2hEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENTUyBSZXNldCBcXG5odHRwczovL3d3dy5qb3Nod2NvbWVhdS5jb20vY3NzL2N1c3RvbS1jc3MtcmVzZXQvICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKjpub3QoZGlhbG9nKSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxucCB7XFxuICB0ZXh0LXdyYXA6IHByZXR0eTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgdGV4dC13cmFwOiBiYWxhbmNlO1xcbn1cXG5cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG59XFxuXFxuLyogcm9vdCAqL1xcbjpyb290IHtcXG4gIC8qKiBCYXNlIGNvbG9ycyAqL1xcbiAgLS1jbHItZGFyay1hMDogIzAwMDAwMDtcXG4gIC0tY2xyLWxpZ2h0LWEwOiAjZmZmZmZmO1xcblxcbiAgLyoqIFRoZW1lIHByaW1hcnkgY29sb3JzICovXFxuICAtLWNsci1wcmltYXJ5LWEwOiAjNjQ5ZmVkO1xcbiAgLS1jbHItcHJpbWFyeS1hMTA6ICM3OWE5ZWY7XFxuICAtLWNsci1wcmltYXJ5LWEyMDogIzhjYjNmMTtcXG4gIC0tY2xyLXByaW1hcnktYTMwOiAjOWViZWY0O1xcbiAgLS1jbHItcHJpbWFyeS1hNDA6ICNhZmM4ZjY7XFxuICAtLWNsci1wcmltYXJ5LWE1MDogI2JmZDNmODtcXG5cXG4gIC8qKiBUaGVtZSBzdXJmYWNlIGNvbG9ycyAqL1xcbiAgLS1jbHItc3VyZmFjZS1hMDogIzFiMWUyNDtcXG4gIC0tY2xyLXN1cmZhY2UtYTEwOiAjMzAzMzM4O1xcbiAgLS1jbHItc3VyZmFjZS1hMjA6ICM0NjQ5NGU7XFxuICAtLWNsci1zdXJmYWNlLWEzMDogIzVlNjA2NTtcXG4gIC0tY2xyLXN1cmZhY2UtYTQwOiAjNzc3OTdkO1xcbiAgLS1jbHItc3VyZmFjZS1hNTA6ICM5MDkyOTU7XFxuXFxuICAvKiogU3VjY2VzcyBjb2xvcnMgKi9cXG4gIC0tY2xyLXN1Y2Nlc3MtYTA6ICMyMjk0NmU7XFxuICAtLWNsci1zdWNjZXNzLWExMDogIzQ3ZDVhNjtcXG4gIC0tY2xyLXN1Y2Nlc3MtYTIwOiAjOWFlOGNlO1xcblxcbiAgLyoqIFdhcm5pbmcgY29sb3JzICovXFxuICAtLWNsci13YXJuaW5nLWEwOiAjYTg3YTJhO1xcbiAgLS1jbHItd2FybmluZy1hMTA6ICNkN2FjNjE7XFxuICAtLWNsci13YXJuaW5nLWEyMDogI2VjZDdiMjtcXG5cXG4gIC8qKiBEYW5nZXIgY29sb3JzICovXFxuICAtLWNsci1kYW5nZXItYTA6ICM5YzIxMjE7XFxuICAtLWNsci1kYW5nZXItYTEwOiAjZDk0YTRhO1xcbiAgLS1jbHItZGFuZ2VyLWEyMDogI2ViOWU5ZTtcXG5cXG4gIC8qIFNoaXAgY29sb3JzICovXFxuICAtLWNsci1ub3QtaGl0LWJnOiAjMTIzYTJiO1xcbiAgLS1jbHItbm90LWhpdC1ib3JkZXI6IGxpbWU7XFxuICAtLWNsci1oaXQtYmc6ICNmZjMwMzA7XFxuICAtLWNsci1zdW5rLWJnOiBkYXJrcmVkO1xcbiAgLS1jbHItc3Vuay1ib3JkZXI6IHJlZDtcXG5cXG4gIC8qIFNxdWFyZSBzaXplICovXFxuICAtLXN6LXNxdWFyZTogMzJweDtcXG59XFxuXFxuLyogYm9keSAqL1xcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc3VyZmFjZS1hMCk7XFxuICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0LWEwKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbjogMTZweDtcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4vKiBnYW1lYm9hcmRzICovXFxuI2dhbWUtc3RhdHVzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zdXJmYWNlLWE1MCk7XFxuICBjb2xvcjogdmFyKC0tY2xyLWRhcmstYTApO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDcxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxufVxcblxcbiNnYW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMjRweCAzMzFweCAvIDI0cHggMzMxcHggcmVwZWF0KDIsIDI0cHgpIDMzMXB4O1xcbn1cXG5cXG4jaHVtYW4tY29sLWxhYmVsLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxufVxcblxcbiNjcHUtY29sLWxhYmVsLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IDEgLyA1IC8gMiAvIDY7XFxufVxcblxcbi5jb2wtbGFiZWwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbC1sYWJlbC1jaGFyIHtcXG4gIHdpZHRoOiAzM3B4O1xcbn1cXG5cXG4jaHVtYW4tcm93LWxhYmVsLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxufVxcblxcbiNjcHUtcm93LWxhYmVsLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IDIgLyA0IC8gMyAvIDU7XFxufVxcblxcbi5yb3ctbGFiZWwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNodW1hbi1ncmlkLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxufVxcblxcbiNjcHUtZ3JpZC1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAyIC8gNSAvIDMgLyA2O1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgdmFyKC0tc3otc3F1YXJlKSkgLyByZXBlYXQoMTAsIHZhcigtLXN6LXNxdWFyZSkpO1xcbiAgZ2FwOiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc3VyZmFjZS1hMjApO1xcbiAgcGFkZGluZzogMXB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc3VyZmFjZS1hMCk7XFxuICB3aWR0aDogdmFyKC0tc3otc3F1YXJlKTtcXG4gIGhlaWdodDogdmFyKC0tc3otc3F1YXJlKTtcXG59XFxuXFxuI29wdGlvbnMtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogMyAvIDIgLyA0IC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc3VyZmFjZS1hMjApO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXG4gIGhlaWdodDogNjRweDtcXG59XFxuXFxuLmJ0biB7XFxuICBhbGw6IHVuc2V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLWNsci1kYXJrLWEwKTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG59XFxuXFxuI3JhbmRvbWl6ZS1zaGlwcy1idG4sXFxuI3BsYXktYWdhaW4tYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5LWEwKTtcXG59XFxuXFxuI3N0YXJ0LWdhbWUtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zdWNjZXNzLWExMCk7XFxufVxcblxcbi8qIGdhbWUgbG9nICovXFxuI2dhbWUtbG9nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBnYXA6IDhweDtcXG4gIHdpZHRoOiA3MzRweDtcXG4gIHBhZGRpbmc6IDhweCAwcHggMjRweCAyNHB4O1xcbn1cXG5cXG4jZ2FtZS1sb2ctaGVhZGluZyB7XFxuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xcbn1cXG5cXG4udHVybi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnR1cm4tbnVtYmVyLWhlYWRpbmcge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNsci1zdXJmYWNlLWEyMCk7XFxufVxcblxcbi5tb3ZlLWNvbnRhaW5lciB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG59XFxuXFxuLm1vdmUtbWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc3VyZmFjZS1hMTApO1xcbn1cXG5cXG4ubW92ZS1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWRhbmdlci1hMTApO1xcbiAgY29sb3I6IHZhcigtLWNsci1kYXJrLWEwKTtcXG59XFxuXFxuLm1vdmUtc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc3Vuay1iZyk7XFxufVxcblxcbi8qIG5vdCBoaXQgKGh1bWFuIG9ubHkpICovXFxuLm5vdC1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW5vdC1oaXQtYmcpO1xcbn1cXG5cXG4jaHVtYW4tZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgxIG9mIC5jYXJyaWVyLnZlcnRpY2FsKTpub3QoLnN1bmspLFxcbiNodW1hbi1ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDEgb2YgLmJhdHRsZXNoaXAudmVydGljYWwpOm5vdCguc3VuayksXFxuI2h1bWFuLWdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMSBvZiAuZGVzdHJveWVyLnZlcnRpY2FsKTpub3QoLnN1bmspLFxcbiNodW1hbi1ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDEgb2YgLnN1Ym1hcmluZS52ZXJ0aWNhbCk6bm90KC5zdW5rKSxcXG4jaHVtYW4tZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgxIG9mIC5wYXRyb2wtYm9hdC52ZXJ0aWNhbCk6bm90KC5zdW5rKSB7XFxuICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tY2xyLW5vdC1oaXQtYm9yZGVyKTtcXG59XFxuXFxuLm5vdC1oaXQudmVydGljYWwge1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdmFyKC0tY2xyLW5vdC1oaXQtYm9yZGVyKTtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tY2xyLW5vdC1oaXQtYm9yZGVyKTtcXG59XFxuXFxuI2h1bWFuLWdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoNSBvZiAuY2Fycmllci52ZXJ0aWNhbCk6bm90KC5zdW5rKSxcXG4jaHVtYW4tZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCg0IG9mIC5iYXR0bGVzaGlwLnZlcnRpY2FsKTpub3QoLnN1bmspLFxcbiNodW1hbi1ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDMgb2YgLmRlc3Ryb3llci52ZXJ0aWNhbCk6bm90KC5zdW5rKSxcXG4jaHVtYW4tZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgzIG9mIC5zdWJtYXJpbmUudmVydGljYWwpOm5vdCguc3VuayksXFxuI2h1bWFuLWdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMiBvZiAucGF0cm9sLWJvYXQudmVydGljYWwpOm5vdCguc3Vuaykge1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWNsci1ub3QtaGl0LWJvcmRlcik7XFxufVxcblxcbiNodW1hbi1ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDEgb2YgLmNhcnJpZXIuaG9yaXpvbnRhbCk6bm90KC5zdW5rKSxcXG4jaHVtYW4tZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgxIG9mIC5iYXR0bGVzaGlwLmhvcml6b250YWwpOm5vdCguc3VuayksXFxuI2h1bWFuLWdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMSBvZiAuZGVzdHJveWVyLmhvcml6b250YWwpOm5vdCguc3VuayksXFxuI2h1bWFuLWdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMSBvZiAuc3VibWFyaW5lLmhvcml6b250YWwpOm5vdCguc3VuayksXFxuI2h1bWFuLWdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMSBvZiAucGF0cm9sLWJvYXQuaG9yaXpvbnRhbCk6bm90KC5zdW5rKSB7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWNsci1ub3QtaGl0LWJvcmRlcik7XFxufVxcblxcbi5ub3QtaGl0Lmhvcml6b250YWwge1xcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLWNsci1ub3QtaGl0LWJvcmRlcik7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tY2xyLW5vdC1oaXQtYm9yZGVyKTtcXG59XFxuXFxuI2h1bWFuLWdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoNSBvZiAuY2Fycmllci5ob3Jpem9udGFsKTpub3QoLnN1bmspLFxcbiNodW1hbi1ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDQgb2YgLmJhdHRsZXNoaXAuaG9yaXpvbnRhbCk6bm90KC5zdW5rKSxcXG4jaHVtYW4tZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgzIG9mIC5kZXN0cm95ZXIuaG9yaXpvbnRhbCk6bm90KC5zdW5rKSxcXG4jaHVtYW4tZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgzIG9mIC5zdWJtYXJpbmUuaG9yaXpvbnRhbCk6bm90KC5zdW5rKSxcXG4jaHVtYW4tZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgyIG9mIC5wYXRyb2wtYm9hdC5ob3Jpem9udGFsKTpub3QoLnN1bmspIHtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHZhcigtLWNsci1ub3QtaGl0LWJvcmRlcik7XFxufVxcblxcbi8qIG1pc3MgKGh1bWFuIGFuZCBjcHUpICovXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXN1cmZhY2UtYTEwKTtcXG59XFxuXFxuLyogaGl0IChodW1hbiBhbmQgY3B1KSAqL1xcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWhpdC1iZyk7XFxufVxcblxcbi8qIGhpdCAoaHVtYW4gb25seSkgKi9cXG4jaHVtYW4tZ3JpZC1jb250YWluZXIgLmhvcml6b250YWwuaGl0IHtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1jbHItbm90LWhpdC1ib3JkZXIpO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWNsci1ub3QtaGl0LWJvcmRlcik7XFxufVxcblxcbiNodW1hbi1ncmlkLWNvbnRhaW5lciAudmVydGljYWwuaGl0IHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tY2xyLW5vdC1oaXQtYm9yZGVyKTtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHZhcigtLWNsci1ub3QtaGl0LWJvcmRlcik7XFxufVxcblxcbi8qIHN1bmsgKGh1bWFuIGFuZCBjcHUpICovXFxuLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXN1bmstYmcpO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgxIG9mIC5jYXJyaWVyLnZlcnRpY2FsLnN1bmspLFxcbi5ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDEgb2YgLmJhdHRsZXNoaXAudmVydGljYWwuc3VuayksXFxuLmdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMSBvZiAuZGVzdHJveWVyLnZlcnRpY2FsLnN1bmspLFxcbi5ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDEgb2YgLnN1Ym1hcmluZS52ZXJ0aWNhbC5zdW5rKSxcXG4uZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgxIG9mIC5wYXRyb2wtYm9hdC52ZXJ0aWNhbC5zdW5rKSB7XFxuICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tY2xyLXN1bmstYm9yZGVyKTtcXG59XFxuXFxuLnN1bmsudmVydGljYWwge1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdmFyKC0tY2xyLXN1bmstYm9yZGVyKTtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tY2xyLXN1bmstYm9yZGVyKTtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoNSBvZiAuY2Fycmllci52ZXJ0aWNhbC5zdW5rKSxcXG4uZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCg0IG9mIC5iYXR0bGVzaGlwLnZlcnRpY2FsLnN1bmspLFxcbi5ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDMgb2YgLmRlc3Ryb3llci52ZXJ0aWNhbC5zdW5rKSxcXG4uZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgzIG9mIC5zdWJtYXJpbmUudmVydGljYWwuc3VuayksXFxuLmdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMiBvZiAucGF0cm9sLWJvYXQudmVydGljYWwuc3Vuaykge1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWNsci1zdW5rLWJvcmRlcik7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDEgb2YgLmNhcnJpZXIuaG9yaXpvbnRhbC5zdW5rKSxcXG4uZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgxIG9mIC5iYXR0bGVzaGlwLmhvcml6b250YWwuc3VuayksXFxuLmdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMSBvZiAuZGVzdHJveWVyLmhvcml6b250YWwuc3VuayksXFxuLmdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMSBvZiAuc3VibWFyaW5lLmhvcml6b250YWwuc3VuayksXFxuLmdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoMSBvZiAucGF0cm9sLWJvYXQuaG9yaXpvbnRhbC5zdW5rKSB7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWNsci1zdW5rLWJvcmRlcik7XFxufVxcblxcbi5zdW5rLmhvcml6b250YWwge1xcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLWNsci1zdW5rLWJvcmRlcik7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tY2xyLXN1bmstYm9yZGVyKTtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIDpudGgtY2hpbGQoNSBvZiAuY2Fycmllci5ob3Jpem9udGFsLnN1bmspLFxcbi5ncmlkLWNvbnRhaW5lciA6bnRoLWNoaWxkKDQgb2YgLmJhdHRsZXNoaXAuaG9yaXpvbnRhbC5zdW5rKSxcXG4uZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgzIG9mIC5kZXN0cm95ZXIuaG9yaXpvbnRhbC5zdW5rKSxcXG4uZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgzIG9mIC5zdWJtYXJpbmUuaG9yaXpvbnRhbC5zdW5rKSxcXG4uZ3JpZC1jb250YWluZXIgOm50aC1jaGlsZCgyIG9mIC5wYXRyb2wtYm9hdC5ob3Jpem9udGFsLnN1bmspIHtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHZhcigtLWNsci1zdW5rLWJvcmRlcik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgRElSRUNUSU9OID0ge1xuICBIT1JJWk9OVEFMOiBcImhvcml6b250YWxcIixcbiAgVkVSVElDQUw6IFwidmVydGljYWxcIixcbn07XG5cbmV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRpcmVjdGlvbjtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdENvdW50ID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdENvdW50Kys7XG4gICAgdGhpcy5pc1N1bmsoKTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRDb3VudCA+PSB0aGlzLmxlbmd0aCkgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy53aWR0aCA9IDEwO1xuICAgIHRoaXMuaGVpZ2h0ID0gMTA7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlQm9hcmQoKTtcbiAgICB0aGlzLnNoaXBzID0gdGhpcy5jcmVhdGVTaGlwcygpO1xuICAgIHRoaXMuYWxsU2hpcHNTdW5rID0gZmFsc2U7XG4gIH1cblxuICBjcmVhdGVCb2FyZCgpIHtcbiAgICBsZXQgYm9hcmQgPSBbXTtcblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMud2lkdGg7IHJvdysrKSB7XG4gICAgICBib2FyZFtyb3ddID0gW107XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLmhlaWdodDsgY29sKyspIHtcbiAgICAgICAgYm9hcmRbcm93XVtjb2xdID0ge1xuICAgICAgICAgIHJvdyxcbiAgICAgICAgICBjb2wsXG4gICAgICAgICAgc2hpcDogbnVsbCxcbiAgICAgICAgICBoaXQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBib2FyZDtcbiAgfVxuXG4gIGNyZWF0ZVNoaXBzKCkge1xuICAgIGNvbnN0IGNhcnJpZXIgPSBuZXcgU2hpcChcImNhcnJpZXJcIiwgNSk7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKFwiYmF0dGxlc2hpcFwiLCA0KTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBuZXcgU2hpcChcImRlc3Ryb3llclwiLCAzKTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBuZXcgU2hpcChcInN1Ym1hcmluZVwiLCAzKTtcbiAgICBjb25zdCBwYXRyb2xCb2F0ID0gbmV3IFNoaXAoXCJwYXRyb2wtYm9hdFwiLCAyKTtcblxuICAgIHJldHVybiB7XG4gICAgICBjYXJyaWVyOiBjYXJyaWVyLFxuICAgICAgYmF0dGxlc2hpcDogYmF0dGxlc2hpcCxcbiAgICAgIGRlc3Ryb3llcjogZGVzdHJveWVyLFxuICAgICAgc3VibWFyaW5lOiBzdWJtYXJpbmUsXG4gICAgICBwYXRyb2xCb2F0OiBwYXRyb2xCb2F0LFxuICAgIH07XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCwgcm93LCBjb2wpIHtcbiAgICBpZiAoc2hpcC5kaXJlY3Rpb24gPT09IERJUkVDVElPTi5IT1JJWk9OVEFMKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0uc2hpcCA9IHNoaXA7XG4gICAgICAgIGNvbCsrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0uc2hpcCA9IHNoaXA7XG4gICAgICAgIHJvdysrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBsYWNlQWxsU2hpcHNSYW5kb21seSgpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xuICAgIHRoaXMuc2hpcHMgPSB0aGlzLmNyZWF0ZVNoaXBzKCk7XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHNoaXBdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuc2hpcHMpKSB7XG4gICAgICBzaGlwLmRpcmVjdGlvbiA9XG4gICAgICAgIGdldFJhbmRvbUludGVnZXIoMSkgPCAxID8gRElSRUNUSU9OLkhPUklaT05UQUwgOiBESVJFQ1RJT04uVkVSVElDQUw7XG5cbiAgICAgIGxldCByb3dNYXg7XG4gICAgICBsZXQgY29sTWF4O1xuICAgICAgbGV0IHJvd1JhbmRvbTtcbiAgICAgIGxldCBjb2xSYW5kb207XG5cbiAgICAgIGlmIChzaGlwLmRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkhPUklaT05UQUwpIHtcbiAgICAgICAgcm93TWF4ID0gdGhpcy5oZWlnaHQgLSAxO1xuICAgICAgICBjb2xNYXggPSB0aGlzLndpZHRoIC0gc2hpcC5sZW5ndGg7XG4gICAgICAgIGNvbFJhbmRvbSA9IC0xO1xuXG4gICAgICAgIHdoaWxlIChjb2xSYW5kb20gPT09IC0xKSB7XG4gICAgICAgICAgcm93UmFuZG9tID0gZ2V0UmFuZG9tSW50ZWdlcihyb3dNYXgpO1xuICAgICAgICAgIGNvbFJhbmRvbSA9IGdldFJhbmRvbUludGVnZXIoY29sTWF4KTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSBjb2xSYW5kb207IGkgPCBjb2xSYW5kb20gKyBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3dSYW5kb21dW2ldLnNoaXApIGNvbFJhbmRvbSA9IC0xO1xuICAgICAgICAgICAgaWYgKGNvbFJhbmRvbSA9PT0gLTEpIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm93TWF4ID0gdGhpcy5oZWlnaHQgLSBzaGlwLmxlbmd0aDtcbiAgICAgICAgY29sTWF4ID0gdGhpcy53aWR0aCAtIDE7XG4gICAgICAgIHJvd1JhbmRvbSA9IC0xO1xuXG4gICAgICAgIHdoaWxlIChyb3dSYW5kb20gPT09IC0xKSB7XG4gICAgICAgICAgcm93UmFuZG9tID0gZ2V0UmFuZG9tSW50ZWdlcihyb3dNYXgpO1xuICAgICAgICAgIGNvbFJhbmRvbSA9IGdldFJhbmRvbUludGVnZXIoY29sTWF4KTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSByb3dSYW5kb207IGkgPCByb3dSYW5kb20gKyBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtjb2xSYW5kb21dLnNoaXApIHJvd1JhbmRvbSA9IC0xO1xuICAgICAgICAgICAgaWYgKHJvd1JhbmRvbSA9PT0gLTEpIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5wbGFjZVNoaXAoc2hpcCwgcm93UmFuZG9tLCBjb2xSYW5kb20pO1xuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2socm93LCBjb2wpIHtcbiAgICBpZiAocm93IDwgMCB8fCByb3cgPiB0aGlzLmhlaWdodCAtIDEgfHwgY29sIDwgMCB8fCBjb2wgPiB0aGlzLndpZHRoIC0gMSlcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuXG4gICAgY29uc3QgY2VsbCA9IHRoaXMuYm9hcmRbcm93XVtjb2xdO1xuXG4gICAgaWYgKGNlbGwuaGl0KSByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcblxuICAgIGNlbGwuaGl0ID0gdHJ1ZTtcblxuICAgIGlmIChjZWxsLnNoaXApIHtcbiAgICAgIGNlbGwuc2hpcC5oaXQoKTtcbiAgICAgIHRoaXMuY2hlY2tJZkFsbFNoaXBzU3VuaygpO1xuICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGhpdDogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgaGl0OiBmYWxzZSB9O1xuICB9XG5cbiAgY2hlY2tJZkFsbFNoaXBzU3VuaygpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHNoaXBdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuc2hpcHMpKSB7XG4gICAgICBpZiAoc2hpcC5zdW5rID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmFsbFNoaXBzU3VuayA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGh1bWFuKSB7XG4gICAgdGhpcy5odW1hbiA9IGh1bWFuO1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnRlZ2VyKG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCArIDEpKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBuZXdSb3dMYWJlbENvbnRhaW5lcigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyb3ctbGFiZWwtY29udGFpbmVyXCIpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3Q29sTGFiZWxDb250YWluZXIoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29sLWxhYmVsLWNvbnRhaW5lclwiKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1Jvd0xhYmVsQ2hhcigpIHtcbiAgY29uc3QgY2hhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjaGFyLmNsYXNzTGlzdC5hZGQoXCJyb3ctbGFiZWwtY2hhclwiKTtcbiAgcmV0dXJuIGNoYXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdDb2xMYWJlbENoYXIoKSB7XG4gIGNvbnN0IGNoYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY2hhci5jbGFzc0xpc3QuYWRkKFwiY29sLWxhYmVsLWNoYXJcIik7XG4gIHJldHVybiBjaGFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3R3JpZENvbnRhaW5lcigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncmlkLWNvbnRhaW5lclwiKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0dyaWRDZWxsKCkge1xuICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgcmV0dXJuIGNlbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdPcHRpb25zQ29udGFpbmVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuaWQgPSBcIm9wdGlvbnMtY29udGFpbmVyXCI7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdSYW5kb21pemVTaGlwc0J0bigpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLmlkID0gXCJyYW5kb21pemUtc2hpcHMtYnRuXCI7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuICBidG4udGV4dENvbnRlbnQgPSBcIlJhbmRvbWl6ZVwiO1xuICByZXR1cm4gYnRuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3U3RhcnRHYW1lQnRuKCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uaWQgPSBcInN0YXJ0LWdhbWUtYnRuXCI7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuICBidG4udGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWVcIjtcbiAgcmV0dXJuIGJ0bjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1BsYXlBZ2FpbkJ0bigpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLmlkID0gXCJwbGF5LWFnYWluLWJ0blwiO1xuICBidG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgYnRuLnRleHRDb250ZW50ID0gXCJQbGF5IEFnYWluXCI7XG4gIHJldHVybiBidG47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdHYW1lTG9nQ29udGFpbmVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuaWQgPSBcImdhbWUtbG9nLWNvbnRhaW5lclwiO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3R2FtZUxvZ0hlYWRpbmcoKSB7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhlYWRpbmcuaWQgPSBcImdhbWUtbG9nLWhlYWRpbmdcIjtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiR2FtZSBMb2dcIjtcbiAgcmV0dXJuIGhlYWRpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdUdXJuQ29udGFpbmVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInR1cm4tY29udGFpbmVyXCIpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3VHVybk51bWJlckhlYWRpbmcoKSB7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwidHVybi1udW1iZXItaGVhZGluZ1wiKTtcbiAgcmV0dXJuIGhlYWRpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdNb3ZlQ29udGFpbmVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vdmUtY29udGFpbmVyXCIpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3TW92ZVRleHQoKSB7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKFwibW92ZS10ZXh0XCIpO1xuICByZXR1cm4gdGV4dDtcbn0iLCJleHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGh1bWFuUGxheWVyLCBjcHVQbGF5ZXIpIHtcbiAgICB0aGlzLmh1bWFuUGxheWVyID0gaHVtYW5QbGF5ZXI7XG4gICAgdGhpcy5jcHVQbGF5ZXIgPSBjcHVQbGF5ZXI7XG4gICAgdGhpcy5jdXJyZW50VHVybiA9IG51bGw7XG4gICAgdGhpcy50dXJuTnVtYmVyID0gMDtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy53aW5uZXIgPSBudWxsO1xuICB9XG5cbiAgcHJvY2Vzc01vdmUoZW5lbXksIHJvdywgY29sKSB7XG4gICAgcmV0dXJuIGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgfVxuXG4gIG5leHRUdXJuKCkge1xuICAgIGNvbnN0IGh1bWFuV2luID0gdGhpcy5jcHVQbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaztcbiAgICBjb25zdCBjcHVXaW4gPSB0aGlzLmh1bWFuUGxheWVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bms7XG5cbiAgICBpZiAoaHVtYW5XaW4gfHwgY3B1V2luKSB7XG4gICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIGh1bWFuV2luXG4gICAgICAgID8gKHRoaXMud2lubmVyID0gdGhpcy5odW1hblBsYXllcilcbiAgICAgICAgOiAodGhpcy53aW5uZXIgPSB0aGlzLmNwdVBsYXllcik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3VycmVudFR1cm4gPT09IHRoaXMuaHVtYW5QbGF5ZXIpIHtcbiAgICAgIHRoaXMuY3VycmVudFR1cm4gPSB0aGlzLmNwdVBsYXllcjtcbiAgICAgIHRoaXMudHVybk51bWJlcisrO1xuICAgIH0gZWxzZSB0aGlzLmN1cnJlbnRUdXJuID0gdGhpcy5odW1hblBsYXllcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRElSRUNUSU9OLCBQbGF5ZXIsIGdldFJhbmRvbUludGVnZXIgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vZ2FtZS1jb250cm9sbGVyXCI7XG5pbXBvcnQge1xuICBuZXdHcmlkQ29udGFpbmVyLFxuICBuZXdHcmlkQ2VsbCxcbiAgbmV3Um93TGFiZWxDb250YWluZXIsXG4gIG5ld0NvbExhYmVsQ2hhcixcbiAgbmV3Q29sTGFiZWxDb250YWluZXIsXG4gIG5ld1Jvd0xhYmVsQ2hhcixcbiAgbmV3T3B0aW9uc0NvbnRhaW5lcixcbiAgbmV3UmFuZG9taXplU2hpcHNCdG4sXG4gIG5ld1N0YXJ0R2FtZUJ0bixcbiAgbmV3UGxheUFnYWluQnRuLFxuICBuZXdHYW1lTG9nQ29udGFpbmVyLFxuICBuZXdHYW1lTG9nSGVhZGluZyxcbiAgbmV3VHVybk51bWJlckhlYWRpbmcsXG4gIG5ld01vdmVDb250YWluZXIsXG4gIG5ld01vdmVUZXh0LFxuICBuZXdUdXJuQ29udGFpbmVyLFxufSBmcm9tIFwiLi9lbGVtZW50LWZhY3RvcnlcIjtcblxuY29uc3QgQ0FQSVRBTF9BX0lOREVYID0gNjU7XG5cbmNvbnN0IGdhbWVTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtc3RhdHVzXCIpO1xuY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jb250YWluZXJcIik7XG5sZXQgaHVtYW5HcmlkQ29udGFpbmVyO1xubGV0IG9wdGlvbnNDb250YWluZXI7XG5sZXQgY3B1R3JpZENvbnRhaW5lcjtcbmxldCBnYW1lTG9nQ29udGFpbmVyO1xubGV0IGdhbWVMb2dIZWFkaW5nO1xuXG5pbml0R2FtZVNldHVwKCk7XG5cbmZ1bmN0aW9uIGluaXRHYW1lU2V0dXAoKSB7XG4gIGNvbnN0IGh1bWFuUGxheWVyID0gbmV3IFBsYXllcih0cnVlKTtcbiAgY29uc3QgY3B1UGxheWVyID0gbmV3IFBsYXllcihmYWxzZSk7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihodW1hblBsYXllciwgY3B1UGxheWVyKTtcblxuICBodW1hblBsYXllci5nYW1lYm9hcmQucGxhY2VBbGxTaGlwc1JhbmRvbWx5KCk7XG4gIGNwdVBsYXllci5nYW1lYm9hcmQucGxhY2VBbGxTaGlwc1JhbmRvbWx5KCk7XG5cbiAgY29uc3QgaHVtYW5Sb3dMYWJlbENvbnRhaW5lciA9IG5ld1Jvd0xhYmVsQ29udGFpbmVyKCk7XG4gIGNvbnN0IGh1bWFuQ29sTGFiZWxDb250YWluZXIgPSBuZXdDb2xMYWJlbENvbnRhaW5lcigpO1xuICBjb25zdCBjcHVSb3dMYWJlbENvbnRhaW5lciA9IG5ld1Jvd0xhYmVsQ29udGFpbmVyKCk7XG4gIGNvbnN0IGNwdUNvbExhYmVsQ29udGFpbmVyID0gbmV3Q29sTGFiZWxDb250YWluZXIoKTtcblxuICBodW1hbkdyaWRDb250YWluZXIgPSBuZXdHcmlkQ29udGFpbmVyKCk7XG4gIGNwdUdyaWRDb250YWluZXIgPSBuZXdHcmlkQ29udGFpbmVyKCk7XG5cbiAgaWYgKCFvcHRpb25zQ29udGFpbmVyKSBvcHRpb25zQ29udGFpbmVyID0gbmV3T3B0aW9uc0NvbnRhaW5lcigpO1xuICBjb25zdCByYW5kb21pemVTaGlwc0J0biA9IG5ld1JhbmRvbWl6ZVNoaXBzQnRuKCk7XG4gIGNvbnN0IHN0YXJ0R2FtZUJ0biA9IG5ld1N0YXJ0R2FtZUJ0bigpO1xuXG4gIGh1bWFuUm93TGFiZWxDb250YWluZXIuaWQgPSBcImh1bWFuLXJvdy1sYWJlbC1jb250YWluZXJcIjtcbiAgaHVtYW5Db2xMYWJlbENvbnRhaW5lci5pZCA9IFwiaHVtYW4tY29sLWxhYmVsLWNvbnRhaW5lclwiO1xuICBjcHVSb3dMYWJlbENvbnRhaW5lci5pZCA9IFwiY3B1LXJvdy1sYWJlbC1jb250YWluZXJcIjtcbiAgY3B1Q29sTGFiZWxDb250YWluZXIuaWQgPSBcImNwdS1jb2wtbGFiZWwtY29udGFpbmVyXCI7XG5cbiAgaHVtYW5HcmlkQ29udGFpbmVyLmlkID0gXCJodW1hbi1ncmlkLWNvbnRhaW5lclwiO1xuICBjcHVHcmlkQ29udGFpbmVyLmlkID0gXCJjcHUtZ3JpZC1jb250YWluZXJcIjtcblxuICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gXCJTZXQgeW91ciBib2FyZFwiO1xuXG4gIGZvciAobGV0IGkgPSBDQVBJVEFMX0FfSU5ERVg7IGkgPCBDQVBJVEFMX0FfSU5ERVggKyAxMDsgaSsrKSB7XG4gICAgY29uc3Qgcm93TGFiZWxDaGFyID0gbmV3Um93TGFiZWxDaGFyKCk7XG4gICAgcm93TGFiZWxDaGFyLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZShpKTtcbiAgICBodW1hblJvd0xhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvd0xhYmVsQ2hhcik7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XG4gICAgY29uc3QgY29sTGFiZWxDaGFyID0gbmV3Q29sTGFiZWxDaGFyKCk7XG4gICAgY29sTGFiZWxDaGFyLnRleHRDb250ZW50ID0gaTtcbiAgICBodW1hbkNvbExhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbExhYmVsQ2hhcik7XG4gIH1cbiAgZm9yIChsZXQgaSA9IENBUElUQUxfQV9JTkRFWDsgaSA8IENBUElUQUxfQV9JTkRFWCArIDEwOyBpKyspIHtcbiAgICBjb25zdCByb3dMYWJlbENoYXIgPSBuZXdSb3dMYWJlbENoYXIoKTtcbiAgICByb3dMYWJlbENoYXIudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpO1xuICAgIGNwdVJvd0xhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvd0xhYmVsQ2hhcik7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XG4gICAgY29uc3QgY29sTGFiZWxDaGFyID0gbmV3Q29sTGFiZWxDaGFyKCk7XG4gICAgY29sTGFiZWxDaGFyLnRleHRDb250ZW50ID0gaTtcbiAgICBjcHVDb2xMYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xMYWJlbENoYXIpO1xuICB9XG5cbiAgcmVuZGVySHVtYW5TZXR1cEJvYXJkKGh1bWFuUGxheWVyKTtcbiAgY3B1UGxheWVyLmdhbWVib2FyZC5ib2FyZC5mb3JFYWNoKChyb3csIHJvd051bSkgPT4ge1xuICAgIHJvdy5mb3JFYWNoKChjZWxsLCBjb2xOdW0pID0+IHtcbiAgICAgIGNvbnN0IGdyaWRDZWxsID0gbmV3R3JpZENlbGwoKTtcbiAgICAgIGdyaWRDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtcm93XCIsIHJvd051bSk7XG4gICAgICBncmlkQ2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiLCBjb2xOdW0pO1xuICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBoYW5kbGVIdW1hbkNsaWNrKGNvbnRyb2xsZXIsIGV2ZW50LnRhcmdldCk7XG4gICAgICB9KTtcbiAgICAgIGNwdUdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZENlbGwpO1xuICAgIH0pO1xuICB9KTtcblxuICByYW5kb21pemVTaGlwc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGh1bWFuUGxheWVyLmdhbWVib2FyZC5ib2FyZCA9IG51bGw7XG4gICAgaHVtYW5QbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzID0gbnVsbDtcbiAgICBodW1hblBsYXllci5nYW1lYm9hcmQucGxhY2VBbGxTaGlwc1JhbmRvbWx5KCk7XG4gICAgcmVuZGVySHVtYW5TZXR1cEJvYXJkKGh1bWFuUGxheWVyKTtcbiAgfSk7XG4gIHN0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHN0YXJ0TmV3R2FtZShjb250cm9sbGVyKTtcbiAgfSk7XG5cbiAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChodW1hblJvd0xhYmVsQ29udGFpbmVyKTtcbiAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChodW1hbkNvbExhYmVsQ29udGFpbmVyKTtcbiAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcHVSb3dMYWJlbENvbnRhaW5lcik7XG4gIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3B1Q29sTGFiZWxDb250YWluZXIpO1xuXG4gIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtYW5HcmlkQ29udGFpbmVyKTtcbiAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcHVHcmlkQ29udGFpbmVyKTtcblxuICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbnNDb250YWluZXIpO1xuICBvcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhbmRvbWl6ZVNoaXBzQnRuKTtcbiAgb3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydEdhbWVCdG4pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJIdW1hblNldHVwQm9hcmQoaHVtYW5QbGF5ZXIpIHtcbiAgaHVtYW5QbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkLmZvckVhY2goKHJvdywgcm93TnVtKSA9PiB7XG4gICAgcm93LmZvckVhY2goKGNlbGwsIGNvbE51bSkgPT4ge1xuICAgICAgbGV0IGdyaWRDZWxsID0gaHVtYW5HcmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1yb3c9XCIke3Jvd051bX1cIl1bZGF0YS1jb2w9XCIke2NvbE51bX1cIl1gLFxuICAgICAgKTtcbiAgICAgIGlmIChncmlkQ2VsbCA9PT0gbnVsbCkge1xuICAgICAgICBncmlkQ2VsbCA9IG5ld0dyaWRDZWxsKCk7XG4gICAgICAgIGdyaWRDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtcm93XCIsIHJvd051bSk7XG4gICAgICAgIGdyaWRDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtY29sXCIsIGNvbE51bSk7XG4gICAgICB9IGVsc2UgZ3JpZENlbGwuY2xhc3NOYW1lID0gXCJjZWxsXCI7XG4gICAgICBpZiAoY2VsbC5zaGlwKVxuICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKGNlbGwuc2hpcC5uYW1lLCBjZWxsLnNoaXAuZGlyZWN0aW9uLCBcIm5vdC1oaXRcIik7XG4gICAgICBodW1hbkdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZENlbGwpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0TmV3R2FtZShjb250cm9sbGVyKSB7XG4gIC8vIG9wdGlvbnNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBvcHRpb25zQ29udGFpbmVyLnJlbW92ZSgpO1xuXG4gIGdhbWVMb2dDb250YWluZXIgPSBuZXdHYW1lTG9nQ29udGFpbmVyKCk7XG4gIGdhbWVMb2dIZWFkaW5nID0gbmV3R2FtZUxvZ0hlYWRpbmcoKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnYW1lTG9nQ29udGFpbmVyKTtcbiAgZ2FtZUxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lTG9nSGVhZGluZyk7XG5cbiAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiWW91ciB0dXJuXCI7XG4gIGNvbnRyb2xsZXIuY3VycmVudFR1cm4gPSBjb250cm9sbGVyLmh1bWFuUGxheWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR2FtZXBsYXlCb2FyZHMoY29udHJvbGxlciwgZ3JpZENlbGwpIHtcbiAgY29uc3QgaHVtYW5UdXJuID0gY29udHJvbGxlci5jdXJyZW50VHVybiA9PT0gY29udHJvbGxlci5odW1hblBsYXllcjtcbiAgY29uc3QgYm9hcmRDZWxsID0gaHVtYW5UdXJuXG4gICAgPyBjb250cm9sbGVyLmh1bWFuUGxheWVyLmdhbWVib2FyZC5ib2FyZFtncmlkQ2VsbC5kYXRhc2V0LnJvd11bXG4gICAgICAgIGdyaWRDZWxsLmRhdGFzZXQuY29sXG4gICAgICBdXG4gICAgOiBjb250cm9sbGVyLmNwdVBsYXllci5nYW1lYm9hcmQuYm9hcmRbZ3JpZENlbGwuZGF0YXNldC5yb3ddW1xuICAgICAgICBncmlkQ2VsbC5kYXRhc2V0LmNvbFxuICAgICAgXTtcblxuICBpZiAoaHVtYW5UdXJuKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiWW91ciB0dXJuXCI7XG4gIH0gZWxzZSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiQ1BVJ3MgdHVyblwiO1xuICB9XG5cbiAgaWYgKGJvYXJkQ2VsbC5zaGlwKSB7XG4gICAgZ3JpZENlbGwuY2xhc3NMaXN0LmFkZChib2FyZENlbGwuc2hpcC5uYW1lLCBcImhpdFwiKTtcbiAgICBncmlkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwibm90LWhpdFwiKTtcblxuICAgIGlmIChib2FyZENlbGwuc2hpcC5zdW5rKSB7XG4gICAgICBjb250cm9sbGVyLmN1cnJlbnRUdXJuLmdhbWVib2FyZC5ib2FyZC5mb3JFYWNoKChyb3csIHJvd051bSkgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaCgoY2VsbCwgY29sTnVtKSA9PiB7XG4gICAgICAgICAgaWYgKGNlbGwuc2hpcCAmJiBib2FyZENlbGwuc2hpcC5uYW1lID09PSBjZWxsLnNoaXAubmFtZSkge1xuICAgICAgICAgICAgbGV0IHRoaXNHcmlkQ2VsbDtcbiAgICAgICAgICAgIGh1bWFuVHVyblxuICAgICAgICAgICAgICA/ICh0aGlzR3JpZENlbGwgPSBodW1hbkdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgIGBbZGF0YS1yb3c9XCIke3Jvd051bX1cIl1bZGF0YS1jb2w9XCIke2NvbE51bX1cIl1gLFxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIDogKHRoaXNHcmlkQ2VsbCA9IGNwdUdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgIGBbZGF0YS1yb3c9XCIke3Jvd051bX1cIl1bZGF0YS1jb2w9XCIke2NvbE51bX1cIl1gLFxuICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgdGhpc0dyaWRDZWxsLmNsYXNzTGlzdC5hZGQoY2VsbC5zaGlwLmRpcmVjdGlvbiwgXCJzdW5rXCIpO1xuICAgICAgICAgICAgdGhpc0dyaWRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaXRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuXG4gIGlmIChjb250cm9sbGVyLmdhbWVPdmVyKSB7XG4gICAgaWYgKGNvbnRyb2xsZXIud2lubmVyID09PSBjb250cm9sbGVyLmh1bWFuUGxheWVyKVxuICAgICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiWW91IHdpbiFcIjtcbiAgICBlbHNlIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSBcIkNQVSB3aW5zXCI7XG4gICAgc2hvd1BsYXlBZ2FpbkJ0bigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckdhbWVMb2coY29udHJvbGxlciwgcm93LCBjb2wpIHtcbiAgY29uc3QgaHVtYW5UdXJuID0gY29udHJvbGxlci5jdXJyZW50VHVybiA9PT0gY29udHJvbGxlci5odW1hblBsYXllcjtcblxuICBpZiAoIWh1bWFuVHVybikge1xuICAgIGNvbnN0IHR1cm5Db250YWluZXIgPSBuZXdUdXJuQ29udGFpbmVyKCk7XG4gICAgY29uc3QgdHVybk51bWJlckhlYWRpbmcgPSBuZXdUdXJuTnVtYmVySGVhZGluZygpO1xuXG4gICAgdHVybkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXR1cm4tbnVtYmVyXCIsIGNvbnRyb2xsZXIudHVybk51bWJlcik7XG4gICAgdHVybk51bWJlckhlYWRpbmcudGV4dENvbnRlbnQgPSBgVHVybiAke2NvbnRyb2xsZXIudHVybk51bWJlcn1gO1xuXG4gICAgdHVybkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0dXJuTnVtYmVySGVhZGluZyk7XG5cbiAgICBpZiAoY29udHJvbGxlci50dXJuTnVtYmVyID4gMSlcbiAgICAgIGdhbWVMb2dDb250YWluZXIuaW5zZXJ0QmVmb3JlKFxuICAgICAgICB0dXJuQ29udGFpbmVyLFxuICAgICAgICBnYW1lTG9nQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLXR1cm4tbnVtYmVyPVwiJHtjb250cm9sbGVyLnR1cm5OdW1iZXIgLSAxfVwiXWAsXG4gICAgICAgICksXG4gICAgICApO1xuICAgIGVsc2UgZ2FtZUxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0dXJuQ29udGFpbmVyKTtcbiAgfVxuXG4gIGNvbnN0IHR1cm5Db250YWluZXIgPSBnYW1lTG9nQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFtkYXRhLXR1cm4tbnVtYmVyPVwiJHtjb250cm9sbGVyLnR1cm5OdW1iZXJ9XCJdYCxcbiAgKTtcbiAgY29uc3QgbW92ZUNvbnRhaW5lciA9IG5ld01vdmVDb250YWluZXIoKTtcbiAgY29uc3QgbW92ZVRleHQgPSBuZXdNb3ZlVGV4dCgpO1xuXG4gIG1vdmVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS10dXJuLW51bWJlclwiLCBjb250cm9sbGVyLnR1cm5OdW1iZXIpO1xuICBtb3ZlQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtbW92ZS1udW1iZXJcIiwgaHVtYW5UdXJuID8gMiA6IDEpO1xuXG4gIGNvbnN0IHBsYXllciA9IGh1bWFuVHVybiA/IFwiQ1BVXCIgOiBcIllvdVwiO1xuICBjb25zdCBlbmVteSA9IGh1bWFuVHVybiA/IFwieW91clwiIDogXCJDUFUnc1wiO1xuICBjb25zdCBib2FyZENlbGwgPSBodW1hblR1cm5cbiAgICA/IGNvbnRyb2xsZXIuaHVtYW5QbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sXVxuICAgIDogY29udHJvbGxlci5jcHVQbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sXTtcbiAgY29uc3Qgc2hpcCA9IGJvYXJkQ2VsbC5zaGlwID8gYm9hcmRDZWxsLnNoaXAubmFtZSA6IG51bGw7XG4gIGNvbnN0IHJvd0xldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoQ0FQSVRBTF9BX0lOREVYICsgTnVtYmVyKHJvdykpO1xuICBjb25zdCBjZWxsID0gcm93TGV0dGVyICsgKE51bWJlcihjb2wpICsgMSk7XG5cbiAgaWYgKGJvYXJkQ2VsbC5zaGlwKSB7XG4gICAgaWYgKGJvYXJkQ2VsbC5zaGlwLnN1bmspIHtcbiAgICAgIG1vdmVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vdmUtc3Vua1wiKTtcbiAgICAgIG1vdmVUZXh0LnRleHRDb250ZW50ID0gYCR7cGxheWVyfSBzdW5rICR7ZW5lbXl9ICR7c2hpcH0gYXQgJHtjZWxsfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vdmVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vdmUtaGl0XCIpO1xuICAgICAgbW92ZVRleHQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJ9IGhpdCAke2VuZW15fSAke3NoaXB9IGF0ICR7Y2VsbH1gO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtb3ZlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb3ZlLW1pc3NcIik7XG4gICAgbW92ZVRleHQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJ9IG1pc3NlZCBhdCAke2NlbGx9YDtcbiAgfVxuXG4gIG1vdmVDb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZVRleHQpO1xuXG4gIGlmIChtb3ZlQ29udGFpbmVyLmRhdGFzZXQubW92ZU51bWJlciA+IDEpXG4gICAgdHVybkNvbnRhaW5lci5pbnNlcnRCZWZvcmUoXG4gICAgICBtb3ZlQ29udGFpbmVyLFxuICAgICAgdHVybkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1tb3ZlLW51bWJlcj1cIjFcIl1gKSxcbiAgICApO1xuICBlbHNlIHR1cm5Db250YWluZXIuYXBwZW5kQ2hpbGQobW92ZUNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVIdW1hbkNsaWNrKGNvbnRyb2xsZXIsIGdyaWRDZWxsKSB7XG4gIGlmIChjb250cm9sbGVyLmN1cnJlbnRUdXJuICE9PSBjb250cm9sbGVyLmh1bWFuUGxheWVyIHx8IGNvbnRyb2xsZXIuZ2FtZU92ZXIpXG4gICAgcmV0dXJuO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGNvbnRyb2xsZXIucHJvY2Vzc01vdmUoXG4gICAgY29udHJvbGxlci5jcHVQbGF5ZXIsXG4gICAgTnVtYmVyKGdyaWRDZWxsLmRhdGFzZXQucm93KSxcbiAgICBOdW1iZXIoZ3JpZENlbGwuZGF0YXNldC5jb2wpLFxuICApO1xuXG4gIGlmICghcmVzdWx0LnZhbGlkKSByZXR1cm47XG5cbiAgY29udHJvbGxlci5uZXh0VHVybigpO1xuICByZW5kZXJHYW1lcGxheUJvYXJkcyhjb250cm9sbGVyLCBncmlkQ2VsbCk7XG4gIGlmIChjb250cm9sbGVyLmN1cnJlbnRUdXJuID09PSBjb250cm9sbGVyLmNwdVBsYXllcilcbiAgICBoYW5kbGVDcHVUdXJuKGNvbnRyb2xsZXIpO1xuICByZW5kZXJHYW1lTG9nKGNvbnRyb2xsZXIsIGdyaWRDZWxsLmRhdGFzZXQucm93LCBncmlkQ2VsbC5kYXRhc2V0LmNvbCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNwdVR1cm4oY29udHJvbGxlcikge1xuICBpZiAoY29udHJvbGxlci5nYW1lT3ZlcikgcmV0dXJuO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGxldCByb3cgPSAtMTtcbiAgICBsZXQgY29sID0gLTE7XG4gICAgbGV0IHJlc3VsdCA9IGNvbnRyb2xsZXIucHJvY2Vzc01vdmUoY29udHJvbGxlci5odW1hblBsYXllciwgcm93LCBjb2wpO1xuXG4gICAgd2hpbGUgKCFyZXN1bHQudmFsaWQpIHtcbiAgICAgIGxldCBzaGlwSGl0Q2VsbHMgPSBjb250cm9sbGVyLmh1bWFuUGxheWVyLmdhbWVib2FyZC5ib2FyZFxuICAgICAgICAuZmxhdCgpXG4gICAgICAgIC5maWx0ZXIoKGNlbGwpID0+IGNlbGwuc2hpcCAmJiBjZWxsLmhpdCAmJiAhY2VsbC5zaGlwLnN1bmspO1xuXG4gICAgICBpZiAoc2hpcEhpdENlbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IHRhcmdldFNoaXAgPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHNoaXBdIG9mIE9iamVjdC5lbnRyaWVzKFxuICAgICAgICAgIGNvbnRyb2xsZXIuaHVtYW5QbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzLFxuICAgICAgICApKSB7XG4gICAgICAgICAgaWYgKHNoaXAuaGl0Q291bnQgPiAxICYmICFzaGlwLnN1bmspIHtcbiAgICAgICAgICAgIHRhcmdldFNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRhcmdldENlbGw7XG4gICAgICAgIGxldCBoaXRIb3Jpem9udGFsQWRqYWNlbnQ7XG5cbiAgICAgICAgaWYgKHRhcmdldFNoaXApIHtcbiAgICAgICAgICBzaGlwSGl0Q2VsbHMgPSBzaGlwSGl0Q2VsbHMuZmlsdGVyKFxuICAgICAgICAgICAgKGNlbGwpID0+IGNlbGwuc2hpcC5uYW1lID09PSB0YXJnZXRTaGlwLm5hbWUsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoaXRIb3Jpem9udGFsQWRqYWNlbnQgPSBnZXRSYW5kb21JbnRlZ2VyKDIpIDwgMiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldENlbGwgPSBzaGlwSGl0Q2VsbHNbZ2V0UmFuZG9tSW50ZWdlcihzaGlwSGl0Q2VsbHMubGVuZ3RoIC0gMSldO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0YXJnZXRDZWxsLnNoaXAuZGlyZWN0aW9uID09PSBESVJFQ1RJT04uSE9SSVpPTlRBTCB8fFxuICAgICAgICAgIGhpdEhvcml6b250YWxBZGphY2VudFxuICAgICAgICApIHtcbiAgICAgICAgICByb3cgPSB0YXJnZXRDZWxsLnJvdztcbiAgICAgICAgICBjb2wgPVxuICAgICAgICAgICAgZ2V0UmFuZG9tSW50ZWdlcigyKSA8IDIgPyB0YXJnZXRDZWxsLmNvbCAtIDEgOiB0YXJnZXRDZWxsLmNvbCArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm93ID1cbiAgICAgICAgICAgIGdldFJhbmRvbUludGVnZXIoMikgPCAyID8gdGFyZ2V0Q2VsbC5yb3cgLSAxIDogdGFyZ2V0Q2VsbC5yb3cgKyAxO1xuICAgICAgICAgIGNvbCA9IHRhcmdldENlbGwuY29sO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3cgPSBnZXRSYW5kb21JbnRlZ2VyKDkpO1xuICAgICAgICBjb2wgPSBnZXRSYW5kb21JbnRlZ2VyKDkpO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQgPSBjb250cm9sbGVyLnByb2Nlc3NNb3ZlKGNvbnRyb2xsZXIuaHVtYW5QbGF5ZXIsIHJvdywgY29sKTtcbiAgICB9XG5cbiAgICBjb250cm9sbGVyLm5leHRUdXJuKCk7XG4gICAgcmVuZGVyR2FtZXBsYXlCb2FyZHMoXG4gICAgICBjb250cm9sbGVyLFxuICAgICAgaHVtYW5HcmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gLFxuICAgICAgKSxcbiAgICApO1xuXG4gICAgcmVuZGVyR2FtZUxvZyhjb250cm9sbGVyLCByb3csIGNvbCk7XG4gIH0sIDEwMDApO1xufVxuXG5mdW5jdGlvbiBzaG93UGxheUFnYWluQnRuKCkge1xuICBjb25zdCBwbGF5QWdhaW5CdG4gPSBuZXdQbGF5QWdhaW5CdG4oKTtcbiAgb3B0aW9uc0NvbnRhaW5lciA9IG5ld09wdGlvbnNDb250YWluZXIoKTtcblxuICBvcHRpb25zQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICBvcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXlBZ2FpbkJ0bik7XG4gIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uc0NvbnRhaW5lcik7XG5cbiAgcGxheUFnYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZ2FtZUxvZ0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBwbGF5QWdhaW5CdG4ucmVtb3ZlKCk7XG4gICAgaW5pdEdhbWVTZXR1cCgpO1xuICB9KTtcbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvcGFnZS1idWlsZGVyXCI7XG4iXSwibmFtZXMiOlsiRElSRUNUSU9OIiwiSE9SSVpPTlRBTCIsIlZFUlRJQ0FMIiwiU2hpcCIsIm5hbWUiLCJsZW5ndGgiLCJfY2xhc3NDYWxsQ2hlY2siLCJkaXJlY3Rpb24iLCJoaXRDb3VudCIsInN1bmsiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImhpdCIsImlzU3VuayIsIkdhbWVib2FyZCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9hcmQiLCJjcmVhdGVCb2FyZCIsInNoaXBzIiwiY3JlYXRlU2hpcHMiLCJhbGxTaGlwc1N1bmsiLCJyb3ciLCJjb2wiLCJzaGlwIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJkZXN0cm95ZXIiLCJzdWJtYXJpbmUiLCJwYXRyb2xCb2F0IiwicGxhY2VTaGlwIiwiaSIsInBsYWNlQWxsU2hpcHNSYW5kb21seSIsIl9pMiIsIl9PYmplY3QkZW50cmllcyIsIk9iamVjdCIsImVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJfc2xpY2VkVG9BcnJheSIsImdldFJhbmRvbUludGVnZXIiLCJyb3dNYXgiLCJjb2xNYXgiLCJyb3dSYW5kb20iLCJjb2xSYW5kb20iLCJyZWNlaXZlQXR0YWNrIiwidmFsaWQiLCJjZWxsIiwiY2hlY2tJZkFsbFNoaXBzU3VuayIsIl9pNCIsIl9PYmplY3QkZW50cmllczIiLCJfT2JqZWN0JGVudHJpZXMyJF9pIiwiUGxheWVyIiwiaHVtYW4iLCJnYW1lYm9hcmQiLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJuZXdSb3dMYWJlbENvbnRhaW5lciIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIm5ld0NvbExhYmVsQ29udGFpbmVyIiwibmV3Um93TGFiZWxDaGFyIiwiY2hhciIsIm5ld0NvbExhYmVsQ2hhciIsIm5ld0dyaWRDb250YWluZXIiLCJuZXdHcmlkQ2VsbCIsIm5ld09wdGlvbnNDb250YWluZXIiLCJpZCIsIm5ld1JhbmRvbWl6ZVNoaXBzQnRuIiwiYnRuIiwidGV4dENvbnRlbnQiLCJuZXdTdGFydEdhbWVCdG4iLCJuZXdQbGF5QWdhaW5CdG4iLCJuZXdHYW1lTG9nQ29udGFpbmVyIiwibmV3R2FtZUxvZ0hlYWRpbmciLCJoZWFkaW5nIiwibmV3VHVybkNvbnRhaW5lciIsIm5ld1R1cm5OdW1iZXJIZWFkaW5nIiwibmV3TW92ZUNvbnRhaW5lciIsIm5ld01vdmVUZXh0IiwidGV4dCIsIkNvbnRyb2xsZXIiLCJodW1hblBsYXllciIsImNwdVBsYXllciIsImN1cnJlbnRUdXJuIiwidHVybk51bWJlciIsImdhbWVPdmVyIiwid2lubmVyIiwicHJvY2Vzc01vdmUiLCJlbmVteSIsIm5leHRUdXJuIiwiaHVtYW5XaW4iLCJjcHVXaW4iLCJDQVBJVEFMX0FfSU5ERVgiLCJnYW1lU3RhdHVzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnYW1lQ29udGFpbmVyIiwiaHVtYW5HcmlkQ29udGFpbmVyIiwib3B0aW9uc0NvbnRhaW5lciIsImNwdUdyaWRDb250YWluZXIiLCJnYW1lTG9nQ29udGFpbmVyIiwiZ2FtZUxvZ0hlYWRpbmciLCJpbml0R2FtZVNldHVwIiwiY29udHJvbGxlciIsImh1bWFuUm93TGFiZWxDb250YWluZXIiLCJodW1hbkNvbExhYmVsQ29udGFpbmVyIiwiY3B1Um93TGFiZWxDb250YWluZXIiLCJjcHVDb2xMYWJlbENvbnRhaW5lciIsInJhbmRvbWl6ZVNoaXBzQnRuIiwic3RhcnRHYW1lQnRuIiwicm93TGFiZWxDaGFyIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYXBwZW5kQ2hpbGQiLCJjb2xMYWJlbENoYXIiLCJyZW5kZXJIdW1hblNldHVwQm9hcmQiLCJmb3JFYWNoIiwicm93TnVtIiwiY29sTnVtIiwiZ3JpZENlbGwiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJoYW5kbGVIdW1hbkNsaWNrIiwidGFyZ2V0Iiwic3RhcnROZXdHYW1lIiwicXVlcnlTZWxlY3RvciIsImNvbmNhdCIsImNsYXNzTmFtZSIsInJlbW92ZSIsImJvZHkiLCJyZW5kZXJHYW1lcGxheUJvYXJkcyIsImh1bWFuVHVybiIsImJvYXJkQ2VsbCIsImRhdGFzZXQiLCJ0aGlzR3JpZENlbGwiLCJzaG93UGxheUFnYWluQnRuIiwicmVuZGVyR2FtZUxvZyIsInR1cm5Db250YWluZXIiLCJ0dXJuTnVtYmVySGVhZGluZyIsImluc2VydEJlZm9yZSIsIm1vdmVDb250YWluZXIiLCJtb3ZlVGV4dCIsInBsYXllciIsInJvd0xldHRlciIsIk51bWJlciIsIm1vdmVOdW1iZXIiLCJyZXN1bHQiLCJoYW5kbGVDcHVUdXJuIiwic2V0VGltZW91dCIsIl9sb29wIiwic2hpcEhpdENlbGxzIiwiZmxhdCIsImZpbHRlciIsInRhcmdldFNoaXAiLCJ0YXJnZXRDZWxsIiwiaGl0SG9yaXpvbnRhbEFkamFjZW50IiwicGxheUFnYWluQnRuIiwic3R5bGUiLCJkaXNwbGF5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=