/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `/* --- CSS Reset --- */
*, *::before, *::after {
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

button {
  font-family: inherit;
  font-size: 100%;
}

/* --- Custom CSS --- */
html {
  scroll-behavior: smooth;
}

body {
  font-family: "Lato", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  min-height: 100vh;
  background-color: #201E1D;
  padding: 20px 50px;
}

body, button {
  color: #FDE9CC;
}

/* --- Header --- */
header {
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: space-between;
  align-items: center;
}
header h1 {
  font-size: 2.5rem;
}
header ul {
  list-style-type: none;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
header ul button {
  font-size: 0.8rem;
  white-space: nowrap;
  border: none;
  background-color: transparent;
  padding: 5px 2px;
  cursor: pointer;
  transition: all 0.2s;
  border-bottom: 1px solid transparent;
}
header ul button:hover {
  border-bottom: 1px solid;
}

/* --- About__Hero --- */
.hero {
  height: 100vh;
  display: grid;
  align-items: center;
}
.hero h1 {
  font-family: "Italiana", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: clamp(1rem, 1rem + 24vw, 35rem);
  line-height: clamp(1rem, 1rem + 20vw, 35rem);
  text-align: left;
}
.hero h2 {
  font-size: clamp(1rem, 0.1rem + 5vw, 3rem);
  text-align: left;
}
.hero .vertical-line {
  border-left: 1px solid #FDE9CC;
  height: 150px;
  margin: 50px 0px 0px 50px;
}

/* --- About__Cuisine--- */
.cuisine {
  display: grid;
  grid-template: min-content 80px 1fr 100px 100px 100px/1fr 1fr 1fr 1fr;
  column-gap: 25px;
  row-gap: 10px;
}
.cuisine h3 {
  font-family: "Italiana", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: clamp(1rem, 1rem + 13vw, 10rem);
  z-index: 1;
  grid-column: 1/span 4;
  grid-row: 1;
}
.cuisine h4 {
  font-size: 1rem;
  grid-column: 1/span 2;
  grid-row: 2;
}
.cuisine div {
  height: 80px;
  width: 80px;
  border: 2px solid #FDE9CC;
  border-radius: 50px;
  display: grid;
  justify-self: center;
  align-content: center;
  grid-column: 3;
  grid-row: 2;
  transition: transform 0.3s;
}
.cuisine div:hover {
  transform: scale(110%);
}
.cuisine div button {
  font-size: 0.8rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.cuisine h5 {
  width: 1px;
  font-size: 2rem;
  grid-column: 2;
  grid-row: 3;
}
.cuisine img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-position: center;
}
.cuisine .image-1 {
  grid-column: 1;
  grid-row: 3/span 3;
}
.cuisine .image-2 {
  grid-column: 2;
  grid-row: 4/span 3;
}
.cuisine .image-3 {
  grid-column: 3;
  grid-row: 3/span 4;
}
.cuisine .image-4 {
  grid-column: 4;
  grid-row: 1/span 6;
}

/* --- Footer --- */
footer {
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
footer .horizontal-line {
  margin: 80px 0px 10px 10px;
  width: 60%;
  border-bottom: 1px solid #FDE9CC;
}
footer button {
  background-color: transparent;
  border: none;
  width: max-content;
  padding: 8px 20px;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
}
footer button:hover {
  transform: translateX(10px);
}

/* --- Menu --- */
.menu {
  position: relative;
  margin-top: 50px;
}
.menu h2 {
  color: rgb(39, 35, 32);
  font-size: 20rem;
  line-height: 20rem;
  font-weight: bold;
  width: 0px;
  position: absolute;
  right: calc(0px + 20rem);
  z-index: -1;
}
.menu h3 {
  font-size: 1.8rem;
  color: #201E1D;
  background-color: #FDE9CC;
  width: max(400px, 40%);
  height: 40px;
  padding-right: 20px;
  text-align: right;
  display: grid;
  align-items: center;
}
.menu dl {
  margin: 40px 15px;
}
.menu dl dt {
  font-size: 1.4rem;
}
.menu dl dd {
  font-size: 0.8rem;
  font-style: italic;
  margin-bottom: 40px;
}

/* --- Contact --- */
.contact {
  display: grid;
  grid-template-rows: 0fr 1fr;
  margin: 0px -50px -20px -50px;
}
.contact .form {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}
.contact .form > div {
  margin: 100px 0px;
  width: min(500px, 100%);
}
.contact .form > div:first-child {
  justify-self: end;
}
.contact .form > div:first-child h3 {
  font-family: "Italiana", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: clamp(2.5rem, 2.5rem + 1vw, 5rem);
}
.contact .form > div:first-child p {
  font-size: 0.9rem;
  margin: 10px 0px;
  width: 85%;
}
.contact .form > div:last-child {
  justify-self: start;
}
.contact .form > div:last-child form {
  display: grid;
}
.contact .form > div:last-child form input {
  color: #FDE9CC;
  font-size: 1.1rem;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #FDE9CC;
  padding: 10px 15px;
}
.contact .form > div:last-child form input:focus {
  outline: none;
}
.contact .form > div:last-child form input::placeholder {
  color: #FDE9CC;
}
.contact .form > div:last-child form input[type=email] {
  width: 100%;
}
.contact .form > div:last-child form input[type=date]::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
.contact .form > div:last-child form .container-input {
  display: grid;
  gap: 25px;
  grid-template-columns: 1fr 1.75fr;
}
.contact .form > div:last-child form .container-button-submit {
  width: max-content;
  padding: 20px;
  display: flex;
  justify-self: end;
  align-items: center;
  transition: 0.3s;
}
.contact .form > div:last-child form .container-button-submit:hover {
  transform: translateX(20px);
}
.contact .form > div:last-child form .container-button-submit button {
  background-color: transparent;
  border: none;
  justify-self: end;
  cursor: pointer;
}
.contact .form > div:last-child form .container-button-submit .arrow {
  height: 1.2rem;
  width: 1.2rem;
  filter: invert(88%) sepia(27%) saturate(368%) hue-rotate(328deg) brightness(105%) contrast(98%);
}
.contact .details {
  color: #201E1D;
  background-color: #FDE9CC;
  padding: 50px;
}
.contact .details h4 {
  font-family: "UnifrakturMaguntia", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: clamp(2rem, 2rem + 1.5vw, 4rem);
  white-space: nowrap;
}
.contact .details .contact-line {
  border-bottom: 1px solid #201E1D;
  margin: 20px 0px;
}
.contact .details .container-details {
  font-size: 0.9rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  gap: 30px;
}
.contact .details .container-details .contact-details p {
  margin-top: 20px;
}
.contact .details .container-details .contact-schedule div {
  margin-top: 20px;
}
.contact .details .container-details div:last-child h5 {
  font-size: 2.5rem;
}

/* --- Breakpoints --- */
@media all and (min-width: 768px) and (max-width: 1024px) {
  body div .contact .form {
    margin-top: 50px;
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
    gap: 0px;
  }
  body div .contact .form > div {
    margin: 0px;
    padding: 40px;
  }
}
@media all and (min-width: 480px) and (max-width: 768px) {
  body div .contact .form {
    margin-top: 50px;
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
    gap: 0px;
  }
  body div .contact .form > div {
    margin: 0px;
    padding: 40px;
  }
}
@media all and (max-width: 480px) {
  body {
    padding: 20px 10px;
  }
  body header {
    grid-template-columns: 1fr;
  }
  body header h1 {
    display: none;
  }
  body div .hero {
    height: 60vh;
  }
  body div .cuisine {
    grid-template: min-content 80px 1fr 100px 100px 100px/1fr 1fr 1fr;
    column-gap: 0px;
  }
  body div .cuisine h4 {
    font-size: 0.9rem;
  }
  body div .cuisine h5 {
    padding: 0px 10px;
    font-size: 0.9rem;
  }
  body div .cuisine img {
    padding: 0px 10px;
  }
  body div .cuisine .image-4 {
    display: none;
  }
  body div .menu h2 {
    font-size: 10rem;
  }
  body div .menu h3 {
    font-size: 1.5rem;
    width: 100%;
  }
  body div .menu dl dt {
    font-size: 1.2rem;
  }
  body div .contact {
    margin: 0px -10px -20px -10px;
  }
  body div .contact .form {
    margin-top: 50px;
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
    gap: 0px;
  }
  body div .contact .form > div {
    margin: 0px;
    padding: 20px;
  }
  body div .contact .details .container-details {
    grid-template-columns: none;
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
  }
  body div .contact .details .container-details .contact-details p {
    margin-top: 10px;
  }
  body div .contact .details .container-details .contact-schedule div {
    margin-top: 10px;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["$theme-dark: #201E1D;\n$theme-light: #FDE9CC;\n\n/* --- CSS Reset --- */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nfont-size: 100%;\nfont: inherit;\nvertical-align: baseline;\n}\n\nbutton {\nfont-family: inherit;\nfont-size: 100%;\n}\n\n/* --- Custom CSS --- */\n\n// font-family: 'Italiana', serif;\n// font-family: 'Lato', sans-serif;\n// font-family: 'UnifrakturMaguntia', cursive;\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: 'Lato', system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  min-height: 100vh;\n  background-color: $theme-dark;\n  padding: 20px 50px;\n}\n\nbody, button {\n  color: $theme-light;\n}\n\n/* --- Header --- */\n\nheader {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  justify-content: space-between;\n  align-items: center;\n\n  h1 {\n    font-size: 2.5rem;\n  }\n  ul {\n    list-style-type: none;\n    justify-items: center;\n\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 10px;\n    button {\n      font-size: 0.8rem;\n      white-space: nowrap;\n      border: none;\n      background-color: transparent;\n      padding: 5px 2px;\n      cursor: pointer;\n\n      transition: all 0.2s;\n      border-bottom: 1px solid transparent;\n      &:hover {\n        border-bottom: 1px solid;\n      }\n    }\n  }\n}\n\n/* --- About__Hero --- */\n\n.hero {\n  height: 100vh;\n  display: grid;\n  align-items: center;\n  h1 {\n    font-family: 'Italiana', system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: clamp(1rem, calc(1rem + 24vw), 35rem);\n    line-height: clamp(1rem, calc(1rem + 20vw), 35rem);\n    text-align: left;\n    // font-size: 35rem;\n  }\n  h2 {\n    font-size: clamp(1rem, calc(0.1rem + 5vw), 3rem);\n    text-align: left;\n  }\n  .vertical-line {\n    border-left: 1px solid $theme-light;\n    height: 150px;\n    margin: 50px 0px 0px 50px;\n  }\n}\n\n/* --- About__Cuisine--- */\n\n.cuisine {\n  display: grid;\n  grid-template: min-content 80px 1fr 100px 100px 100px / 1fr 1fr 1fr 1fr;\n  column-gap: 25px;\n  row-gap: 10px;\n  h3 {\n    font-family: 'Italiana', system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: clamp(1rem, calc(1rem + 13vw), 10rem);\n    z-index: 1;\n\n    grid-column: 1 / span 4;\n    grid-row: 1;\n  }\n  h4 {\n    font-size: 1rem;\n\n    grid-column: 1 / span 2;\n    grid-row: 2;\n  }\n  div {\n    height: 80px;\n    width: 80px;\n    border: 2px solid $theme-light;\n    border-radius: 50px;\n\n    display: grid;\n    justify-self: center;\n    align-content: center;\n    grid-column: 3;\n    grid-row: 2;\n    \n    transition: transform 0.3s;\n    &:hover {\n      transform: scale(110%);\n    }\n    button {\n      font-size: 0.8rem;\n      border: none;\n      background-color: transparent;\n      cursor: pointer;\n    }\n  }\n  h5 {\n    width: 1px;\n    font-size: 2rem;\n\n    grid-column: 2;\n    grid-row: 3;\n  }\n  img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    background-position: center;\n  }\n  .image-1 {\n    grid-column: 1;\n    grid-row: 3 / span 3;\n  }\n  .image-2 {\n    grid-column: 2;\n    grid-row: 4 / span 3;\n  }\n  .image-3 {\n    grid-column: 3;\n    grid-row: 3 / span 4;\n  }\n  .image-4 {\n    grid-column: 4;\n    grid-row: 1 / span 6;\n  }\n}\n\n/* --- Footer --- */\n\nfooter {\n  height: 170px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  .horizontal-line {\n    margin: 80px 0px 10px 10px;\n    width: 60%;\n    border-bottom: 1px solid $theme-light;\n  }\n  button {\n    background-color: transparent;\n    border: none;\n    width: max-content;\n    padding: 8px 20px;\n    text-align: left;\n    cursor: pointer;\n\n    transition: 0.3s;\n    &:hover {\n      transform: translateX(10px);\n    }\n  }\n}\n\n/* --- Menu --- */\n\n.menu {\n  position: relative;\n  margin-top: 50px;\n\n  h2 {\n    color: rgb(39, 35, 32);\n    font-size: 20rem;\n    line-height: 20rem;\n    font-weight: bold;\n    width: 0px;\n    position: absolute;\n    right: calc(0px + 20rem);\n    z-index: -1;\n  }\n  h3 {\n    font-size: 1.8rem;\n    color: $theme-dark;\n    background-color: $theme-light;\n    width: max(400px, 40%);\n    height: 40px;\n    padding-right: 20px;\n    text-align: right;\n\n    display: grid;\n    align-items: center;\n  }\n  dl {\n    margin: 40px 15px;\n    dt {\n      font-size: 1.4rem;\n    }\n    dd {\n      font-size: 0.8rem;\n      font-style: italic;\n      margin-bottom: 40px;\n    }\n  }\n}\n\n/* --- Contact --- */\n\n.contact {\n  display: grid;\n  grid-template-rows: 0fr 1fr;\n  margin: 0px -50px -20px -50px;\n  .form {\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr 1fr;\n    gap: 50px;\n    >div {\n      margin: 100px 0px;\n      width: min(500px, 100%);\n      &:first-child {\n        justify-self: end;\n        h3 {\n          font-family: 'Italiana', system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n          font-size: clamp(2.5rem, calc(2.5rem + 1vw), 5rem);      \n        }\n        p {\n          font-size: 0.9rem;\n          margin: 10px 0px;\n          width: 85%;\n        }\n      }\n      &:last-child {\n        justify-self: start;\n        form {\n          display: grid;\n          input {\n            color: $theme-light;\n            font-size: 1.1rem;\n            background-color: transparent;\n            border: none;\n            border-bottom: 2px solid $theme-light;\n            padding: 10px 15px;\n            &:focus {\n              outline: none;\n            }\n            &::placeholder {\n              color: $theme-light;\n            }\n            &[type=\"email\"] {\n              width: 100%;\n            }\n            &[type=\"date\"] {\n              &::-webkit-calendar-picker-indicator {\n                filter: invert(1);\n              }\n            }\n          }\n          .container-input {\n            display: grid;\n            gap: 25px;\n            grid-template-columns: 1fr 1.75fr;\n          }\n          .container-button-submit {\n            width: max-content;\n            padding: 20px;\n\n            display: flex;\n            justify-self: end;\n            align-items: center;\n\n            transition: 0.3s;\n            &:hover {\n              transform: translateX(20px)\n            }\n            button {\n              background-color: transparent;\n              border: none;\n              justify-self: end;\n              cursor: pointer;\n            }\n            .arrow {\n              height: 1.2rem;\n              width: 1.2rem;\n              filter: invert(88%) sepia(27%) saturate(368%) hue-rotate(328deg) brightness(105%) contrast(98%);\n            }\n          }\n        }\n      }\n    }\n  }\n  .details {\n    color: $theme-dark;\n    background-color: $theme-light;\n    padding: 50px;\n    h4 {\n      font-family: 'UnifrakturMaguntia', system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n      font-size: clamp(2rem, calc(2rem + 1.5vw), 4rem);   \n      white-space: nowrap;\n    }\n    .contact-line {\n      border-bottom: 1px solid $theme-dark;\n      margin: 20px 0px;\n    }\n    .container-details {\n      font-size: 0.9rem;\n\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      align-items: end;\n      gap: 30px;\n      .contact-details {\n        p {\n          margin-top: 20px;\n        }\n      }\n      .contact-schedule {\n        div {\n          margin-top: 20px;\n        }\n      }\n      div:last-child {\n        h5 {\n          font-size: 2.5rem;\n        }\n      }\n\n\n    }\n  }\n}\n\n/* --- Breakpoints --- */\n@media all and (min-width: 768px) and (max-width: 1024px) {\n  body {\n    div {\n      .contact {\n        .form {\n          margin-top: 50px;\n          grid-template-columns: none;\n          grid-template-rows: 1fr 1fr;\n          gap: 0px;\n          >div {\n            margin: 0px;\n            padding: 40px;\n          }\n        }\n      }\n    }\n  }\n}\n\n@media all and (min-width: 480px) and (max-width: 768px) {\n  body {\n    div {\n      .contact {\n        .form {\n          margin-top: 50px;\n          grid-template-columns: none;\n          grid-template-rows: 1fr 1fr;\n          gap: 0px;\n          >div {\n            margin: 0px;\n            padding: 40px;\n          }\n        }\n      }\n    }\n  }\n }\n \n@media all and (max-width: 480px) {\n  body {\n    padding: 20px 10px;\n    header {\n      grid-template-columns: 1fr;\n      h1 {\n        display: none;\n      }\n    }\n    div {\n      .hero {\n        height: 60vh;\n      }\n      .cuisine {\n        grid-template: min-content 80px 1fr 100px 100px 100px / 1fr 1fr 1fr;\n        column-gap: 0px;\n        h4 {\n          font-size: 0.9rem;\n        }\n        h5 {\n          padding: 0px 10px;\n          font-size: 0.9rem;\n        }\n        img {\n          padding: 0px 10px;\n        }\n        .image-4 {\n          display: none;\n        }\n      }\n      .menu {\n        h2 {\n          font-size: 10rem;\n        }\n        h3{\n          font-size: 1.5rem;\n          width: 100%;\n        }\n        dl {\n          dt {\n            font-size: 1.2rem;\n          }\n        }\n      }\n      .contact {\n        margin: 0px -10px -20px -10px;\n        .form {\n          margin-top: 50px;\n          grid-template-columns: none;\n          grid-template-rows: 1fr 1fr;\n          gap: 0px;\n          >div {\n            margin: 0px;\n            padding: 20px;\n          }\n        }\n        .details {\n          .container-details {\n            grid-template-columns: none;\n            grid-template-rows: repeat(3, 1fr);\n            align-items: center;\n            .contact-details {\n              p {\n                margin-top: 10px;\n              }\n            }\n            .contact-schedule {\n              div {\n                margin-top: 10px;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n};"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showAbout)
/* harmony export */ });
/* harmony import */ var _img_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/1.jpg */ "./src/img/1.jpg");
/* harmony import */ var _img_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/2.jpg */ "./src/img/2.jpg");
/* harmony import */ var _img_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/3.jpg */ "./src/img/3.jpg");
/* harmony import */ var _img_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/4.jpg */ "./src/img/4.jpg");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./src/index.js");








function showAbout() {
  const content = document.querySelector('#content');

  const div = document.createElement('div');
  content.appendChild(div);

  // Hero Section
  const sectionHero = document.createElement('section');
  sectionHero.classList.add('hero')
  div.appendChild(sectionHero);

  const divHero = document.createElement('div');
  sectionHero.appendChild(divHero);

  const h1 = document.createElement('h1');
  h1.textContent = 'SAORI';
  divHero.appendChild(h1);

  const h2 = document.createElement('h2');
  h2.textContent = 'モダンな日本料理';
  divHero.appendChild(h2);

  const vl = document.createElement('div');
  vl.classList.add('vertical-line');
  divHero.appendChild(vl);

  // Cuisine Section
  const sectionCuisine = document.createElement('section');
  sectionCuisine.classList.add('cuisine');
  div.appendChild(sectionCuisine);

  const h3 = document.createElement('h3');
  h3.textContent = 'Our cuisine';
  sectionCuisine.appendChild(h3);

  const h4 = document.createElement('h4');
  h4.textContent = 'We celebrate the timeless flavors of Japanese cuisine with modern techniques';
  sectionCuisine.appendChild(h4);

  const divCuisine = document.createElement('div');
  sectionCuisine.appendChild(divCuisine);

  const buttonCuisine = document.createElement('button');
  buttonCuisine.textContent = 'SEE MENU';
  buttonCuisine.setAttribute('type', 'button');
  buttonCuisine.classList.add('button-menu');
  divCuisine.appendChild(buttonCuisine);

  const h5 = document.createElement('h5');
  h5.textContent = '日本食';
  sectionCuisine.appendChild(h5);

  const image1 = new Image();
  image1.src = _img_1_jpg__WEBPACK_IMPORTED_MODULE_0__;
  image1.classList.add('image-1');
  sectionCuisine.appendChild(image1);

  const image2 = new Image();
  image2.src = _img_2_jpg__WEBPACK_IMPORTED_MODULE_1__;
  image2.classList.add('image-2');
  sectionCuisine.appendChild(image2);

  const image3 = new Image();
  image3.src = _img_3_jpg__WEBPACK_IMPORTED_MODULE_2__;
  image3.classList.add('image-3');
  sectionCuisine.appendChild(image3);

  const image4 = new Image();
  image4.src = _img_4_jpg__WEBPACK_IMPORTED_MODULE_3__;
  image4.classList.add('image-4');
  sectionCuisine.appendChild(image4);

  // Footer Section
  const footer = document.createElement('footer');
  div.appendChild(footer);

  const hl = document.createElement('div');
  hl.classList.add('horizontal-line');
  footer.appendChild(hl);

  const buttonMenu = document.createElement('button');
  buttonMenu.textContent = 'SEE MENU';
  buttonMenu.setAttribute('type', 'button');
  buttonMenu.classList.add('button-menu');
  footer.appendChild(buttonMenu);

  const buttonBook = document.createElement('button');
  buttonBook.textContent = 'BOOK A TABLE'
  buttonBook.setAttribute('type', 'button');
  footer.appendChild(buttonBook);

  const allButtonMenu = document.querySelectorAll('.button-menu');
  allButtonMenu.forEach((button) => {
    button.addEventListener('click', () => {
      (0,_index__WEBPACK_IMPORTED_MODULE_6__.scrollToTop)();

      setTimeout(() => {
        (0,_index__WEBPACK_IMPORTED_MODULE_6__.clearPage)();
        (0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])();
      }, 650);
    })
  })

  buttonBook.addEventListener('click', () => {
    ;(0,_index__WEBPACK_IMPORTED_MODULE_6__.scrollToTop)();

    setTimeout(() => {
      (0,_index__WEBPACK_IMPORTED_MODULE_6__.clearPage)();
      (0,_contact__WEBPACK_IMPORTED_MODULE_5__["default"])();
    }, 650);
  })
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showContact)
/* harmony export */ });
/* harmony import */ var _img_arrow_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/arrow.svg */ "./src/img/arrow.svg");


function showContact() {
  const content = document.querySelector('#content');
  
  const div = document.createElement('div');
  div.classList.add('contact')
  content.appendChild(div);

  // Form Section
  const sectionForm = document.createElement('section');
  sectionForm.classList.add('form');
  div.appendChild(sectionForm);

  const divForm1 = document.createElement('div');
  sectionForm.appendChild(divForm1);

  const h3 = document.createElement('h3');
  h3.textContent = 'Make a reservation';
  divForm1.appendChild(h3);
  
  const p = document.createElement('p');
  p.textContent = 'If you have any questions, require further assistance, or would like to inquire regarding private events and special occasions, please feel free to contact us.';
  divForm1.appendChild(p);

  const divForm2 = document.createElement('div');
  sectionForm.append(divForm2);

  const form = document.createElement('form');
  divForm2.appendChild(form);

  const inputEmail = document.createElement('input')
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'example@gmail.com')
  inputEmail.required = true;
  form.appendChild(inputEmail);

  const divForm3 = document.createElement('div');
  divForm3.classList.add('container-input');
  form.appendChild(divForm3);

  const inputGuest = document.createElement('input');
  inputGuest.setAttribute('type', 'number');
  inputGuest.setAttribute('min', '2');
  inputGuest.setAttribute('max', '6');
  inputGuest.setAttribute('placeholder', '6 guests');
  inputGuest.required = true;
  divForm3.appendChild(inputGuest);

  const inputDate = document.createElement('input');
  inputDate.setAttribute('type', 'date');
  inputDate.required = true;
  divForm3.appendChild(inputDate);

  const divForm4 = document.createElement('div');
  divForm4.classList.add('container-button-submit');
  form.appendChild(divForm4);

  const buttonSubmit = document.createElement('button');
  buttonSubmit.setAttribute('type', 'submit');
  buttonSubmit.textContent = 'RESERVE YOUR TABLE'
  divForm4.appendChild(buttonSubmit);

  const arrow = new Image();
  arrow.src = _img_arrow_svg__WEBPACK_IMPORTED_MODULE_0__;
  arrow.classList.add('arrow');
  divForm4.appendChild(arrow);

  // Details Section
  const sectionDetails = document.createElement('section');
  sectionDetails.classList.add('details')
  div.appendChild(sectionDetails);

  const h4 = document.createElement('h4');
  h4.textContent = '+63 917 800 4219'
  sectionDetails.appendChild(h4);

  const hl = document.createElement('div');
  hl.classList.add('contact-line');
  sectionDetails.appendChild(hl);

  const container = document.createElement('div');
  container.classList.add('container-details');
  sectionDetails.appendChild(container);

  const column3 = document.createElement('div');
  column3.classList.add('contact-details');
  container.appendChild(column3);

  const address = document.createElement('p');
  address.textContent = '5883 Enriquez, Makati, Metro Manila, Philippines'
  column3.appendChild(address);

  const phone = document.createElement('p');
  phone.textContent = '+63 917 800 4219';
  column3.appendChild(phone);

  const email = document.createElement('p');
  email.textContent = 'saorimnl@gmail.com'
  column3.appendChild(email);

  const column2 = document.createElement('div');
  column2.classList.add('contact-schedule');
  container.appendChild(column2);

  const divDetails1 = document.createElement('div');
  column2.appendChild(divDetails1);

  const weekdays = document.createElement('p');
  weekdays.textContent = 'Monday - Thursday';
  divDetails1.appendChild(weekdays)

  const weekdaysSched = document.createElement('p');
  weekdaysSched.textContent = '4 - 9PM';
  divDetails1.appendChild(weekdaysSched);

  const divDetails2 = document.createElement('div');
  column2.appendChild(divDetails2);

  const weekends = document.createElement('p');
  weekends.textContent = 'Friday - Sunday';
  divDetails2.appendChild(weekends);

  const weekendsSched = document.createElement('p');
  weekendsSched.textContent = '4 - 11PM';
  divDetails2.appendChild(weekendsSched);

  const column1 = document.createElement('div');
  container.appendChild(column1);

  const h5 = document.createElement('h5');
  h5.textContent = 'saori.'
  column1.appendChild(h5);

  const h6 = document.createElement('h6');
  h6.textContent = 'Japanese Sushi Bar'
  column1.appendChild(h6);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearPage: () => (/* binding */ clearPage),
/* harmony export */   scrollToTop: () => (/* binding */ scrollToTop)
/* harmony export */ });
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");





function showHeader() {
  const content = document.querySelector('#content');

  const header = document.createElement('header');
  content.appendChild(header);

  const h1 = document.createElement('h1');
  h1.textContent = 'saori.';
  header.appendChild(h1);

  const ul = document.createElement('ul');
  header.appendChild(ul);

  const liAbout = document.createElement('li');
  liAbout.classList.add('nav-about');
  ul.appendChild(liAbout);

  const buttonAbout = document.createElement('button');
  buttonAbout.textContent = 'ABOUT';
  buttonAbout.setAttribute('type', 'button');
  liAbout.appendChild(buttonAbout);

  const liMenu = document.createElement('li');
  liMenu.classList.add('nav-menu');
  ul.appendChild(liMenu);

  const buttonMenu = document.createElement('button');
  buttonMenu.textContent = 'MENU';
  buttonAbout.setAttribute('type', 'button');
  liMenu.appendChild(buttonMenu);

  const liBook = document.createElement('li');
  liBook.classList.add('nav-book');
  ul.appendChild(liBook);

  const buttonBook = document.createElement('button');
  buttonBook.textContent = 'CONTACT';
  buttonAbout.setAttribute('type', 'button');
  liBook.appendChild(buttonBook);

  buttonAbout.addEventListener('click', () => {
    clearPage();
    (0,_about__WEBPACK_IMPORTED_MODULE_0__["default"])();
  })

  buttonMenu.addEventListener('click', () => {
    scrollToTop()
    clearPage();
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  })

  buttonBook.addEventListener('click', () => {
    clearPage();
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
  })
}

function clearPage() {
  const main = document.querySelector('#content div');
  main.remove();
}

function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

showHeader();
(0,_about__WEBPACK_IMPORTED_MODULE_0__["default"])();



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showMenu)
/* harmony export */ });
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");




function showMenu() {
  const content = document.querySelector('#content');
  
  const div = document.createElement('div');
  div.classList.add('menu');
  content.appendChild(div);

  const h2 = document.createElement('h2');
  h2.textContent = '日本食';
  div.appendChild(h2);

  function createCategory(content) {
    const h3 = document.createElement('h3');
    h3.textContent = content;
    h3.classList.add(`${content}-category`);
    div.appendChild(h3);
  } 

  function createDescriptionList(classname) {
    const dl = document.createElement('dl');
    dl.classList.add(`${classname}-list`);
    div.appendChild(dl);
  }

  function createDescriptionTitle(content, parent) {
    const dt = document.createElement('dt');
    const dl = document.querySelector(parent);
    dt.textContent = content;
    dl.appendChild(dt);
  }

  function createDescriptionDefinition(content, parent) {
    const dd = document.createElement('dd');
    const dl = document.querySelector(parent);
    dd.textContent = content;
    dl.appendChild(dd);
  }

  createCategory('appetizers');
  createDescriptionList('appetizers');
  createDescriptionTitle('edamame', '.appetizers-list');
  createDescriptionDefinition('steamed young soybeans with sea salt', '.appetizers-list');
  createDescriptionTitle('agedashi tofu', '.appetizers-list');
  createDescriptionDefinition('deep-fried tofu served in a dashi-based broth with grated daikon, ginger, and bonito flakes', '.appetizers-list');
  createDescriptionTitle('goma ae', '.appetizers-list');
  createDescriptionDefinition('blanched spinach or green beans dressed in sesame sauce', '.appetizers-list');

  createCategory('main');
  createDescriptionList('main');
  createDescriptionTitle('honkaku kaiseki', '.main-list');
  createDescriptionDefinition('multi-course japanese meal that emphasizes seasonality, balance and time-honored traditions', '.main-list');
  createDescriptionTitle('neo kaiseki', '.main-list');
  createDescriptionDefinition('multi-course japanese meal that emphasizes creativity and innovation', '.main-list');
  createDescriptionTitle('omakase', '.main-list');
  createDescriptionDefinition('multi-course japanese meal curated by the chef', '.main-list');

  createCategory('desserts');
  createDescriptionList('desserts');
  createDescriptionTitle('warabimochi', '.desserts-list');
  createDescriptionDefinition('soft dessert made from bracken starch, served with kinako and brown sugar syrup', '.desserts-list');
  createDescriptionTitle('kuzu manju', '.desserts-list');
  createDescriptionDefinition('delicate steamed buns filled with a sweet kuzu paste, served with a dusting of kinako', '.desserts-list');

  createCategory('beverages');
  createDescriptionList('beverages');
  createDescriptionTitle('sencha', '.beverages-list');
  createDescriptionDefinition('classic japanese young tea leaves that are steamed, rolled, and then dried', '.beverages-list');
  createDescriptionTitle('genmaicha', '.beverages-list');
  createDescriptionDefinition('traditional green tea leaves with toasted brown rice', '.beverages-list');

  const footer = document.createElement('footer');
  div.appendChild(footer);

  const hl = document.createElement('hl');
  hl.classList.add('horizontal-line');
  footer.appendChild(hl);

  const buttonAbout = document.createElement('button');
  buttonAbout.textContent = 'ABOUT SAORI';
  buttonAbout.setAttribute('type', 'button');
  buttonAbout.classList.add('button-menu');
  footer.appendChild(buttonAbout);

  const buttonBook = document.createElement('button');
  buttonBook.textContent = 'BOOK A TABLE'
  buttonBook.setAttribute('type', 'button');
  footer.appendChild(buttonBook);

  buttonAbout.addEventListener('click', () => {
    (0,_index__WEBPACK_IMPORTED_MODULE_2__.scrollToTop)();

    setTimeout(() => {
      (0,_index__WEBPACK_IMPORTED_MODULE_2__.clearPage)();
      (0,_about__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }, 650);
  })

  buttonBook.addEventListener('click', () => {
    ;(0,_index__WEBPACK_IMPORTED_MODULE_2__.scrollToTop)();

    setTimeout(() => {
      (0,_index__WEBPACK_IMPORTED_MODULE_2__.clearPage)();
      (0,_contact__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }, 650);
  })
}

/***/ }),

/***/ "./src/img/1.jpg":
/*!***********************!*\
  !*** ./src/img/1.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0afb74bb5ee8c766f85.jpg";

/***/ }),

/***/ "./src/img/2.jpg":
/*!***********************!*\
  !*** ./src/img/2.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "785ce30a7cf78deb84a9.jpg";

/***/ }),

/***/ "./src/img/3.jpg":
/*!***********************!*\
  !*** ./src/img/3.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f15bef85b0eeb84f2efa.jpg";

/***/ }),

/***/ "./src/img/4.jpg":
/*!***********************!*\
  !*** ./src/img/4.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6bd0af3af5d06daf950.jpg";

/***/ }),

/***/ "./src/img/arrow.svg":
/*!***************************!*\
  !*** ./src/img/arrow.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "506e98b6ca3241ca8668.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLEtBQUssV0FBVyxNQUFNLGlCQUFpQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sV0FBVyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxZQUFZLFlBQVksTUFBTSxLQUFLLFdBQVcsT0FBTyxXQUFXLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxZQUFZLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sWUFBWSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sWUFBWSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsYUFBYSxZQUFZLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxZQUFZLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFX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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC0tLSBDU1MgUmVzZXQgLS0tICovXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLyogLS0tIEN1c3RvbSBDU1MgLS0tICovXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMUUxRDtcbiAgcGFkZGluZzogMjBweCA1MHB4O1xufVxuXG5ib2R5LCBidXR0b24ge1xuICBjb2xvcjogI0ZERTlDQztcbn1cblxuLyogLS0tIEhlYWRlciAtLS0gKi9cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5oZWFkZXIgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ2FwOiAxMHB4O1xufVxuaGVhZGVyIHVsIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiA1cHggMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5oZWFkZXIgdWwgYnV0dG9uOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xufVxuXG4vKiAtLS0gQWJvdXRfX0hlcm8gLS0tICovXG4uaGVybyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVybyBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkl0YWxpYW5hXCIsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDFyZW0gKyAyNHZ3LCAzNXJlbSk7XG4gIGxpbmUtaGVpZ2h0OiBjbGFtcCgxcmVtLCAxcmVtICsgMjB2dywgMzVyZW0pO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmhlcm8gaDIge1xuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDAuMXJlbSArIDV2dywgM3JlbSk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uaGVybyAudmVydGljYWwtbGluZSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0ZERTlDQztcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiA1MHB4IDBweCAwcHggNTBweDtcbn1cblxuLyogLS0tIEFib3V0X19DdWlzaW5lLS0tICovXG4uY3Vpc2luZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IG1pbi1jb250ZW50IDgwcHggMWZyIDEwMHB4IDEwMHB4IDEwMHB4LzFmciAxZnIgMWZyIDFmcjtcbiAgY29sdW1uLWdhcDogMjVweDtcbiAgcm93LWdhcDogMTBweDtcbn1cbi5jdWlzaW5lIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiSXRhbGlhbmFcIiwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXJlbSArIDEzdncsIDEwcmVtKTtcbiAgei1pbmRleDogMTtcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiA0O1xuICBncmlkLXJvdzogMTtcbn1cbi5jdWlzaW5lIGg0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBncmlkLWNvbHVtbjogMS9zcGFuIDI7XG4gIGdyaWQtcm93OiAyO1xufVxuLmN1aXNpbmUgZGl2IHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZERTlDQztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC1jb2x1bW46IDM7XG4gIGdyaWQtcm93OiAyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbn1cbi5jdWlzaW5lIGRpdjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMTEwJSk7XG59XG4uY3Vpc2luZSBkaXYgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jdWlzaW5lIGg1IHtcbiAgd2lkdGg6IDFweDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBncmlkLWNvbHVtbjogMjtcbiAgZ3JpZC1yb3c6IDM7XG59XG4uY3Vpc2luZSBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmN1aXNpbmUgLmltYWdlLTEge1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDMvc3BhbiAzO1xufVxuLmN1aXNpbmUgLmltYWdlLTIge1xuICBncmlkLWNvbHVtbjogMjtcbiAgZ3JpZC1yb3c6IDQvc3BhbiAzO1xufVxuLmN1aXNpbmUgLmltYWdlLTMge1xuICBncmlkLWNvbHVtbjogMztcbiAgZ3JpZC1yb3c6IDMvc3BhbiA0O1xufVxuLmN1aXNpbmUgLmltYWdlLTQge1xuICBncmlkLWNvbHVtbjogNDtcbiAgZ3JpZC1yb3c6IDEvc3BhbiA2O1xufVxuXG4vKiAtLS0gRm9vdGVyIC0tLSAqL1xuZm9vdGVyIHtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuZm9vdGVyIC5ob3Jpem9udGFsLWxpbmUge1xuICBtYXJnaW46IDgwcHggMHB4IDEwcHggMTBweDtcbiAgd2lkdGg6IDYwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGREU5Q0M7XG59XG5mb290ZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuZm9vdGVyIGJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbn1cblxuLyogLS0tIE1lbnUgLS0tICovXG4ubWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5tZW51IGgyIHtcbiAgY29sb3I6IHJnYigzOSwgMzUsIDMyKTtcbiAgZm9udC1zaXplOiAyMHJlbTtcbiAgbGluZS1oZWlnaHQ6IDIwcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogY2FsYygwcHggKyAyMHJlbSk7XG4gIHotaW5kZXg6IC0xO1xufVxuLm1lbnUgaDMge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6ICMyMDFFMUQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGREU5Q0M7XG4gIHdpZHRoOiBtYXgoNDAwcHgsIDQwJSk7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWVudSBkbCB7XG4gIG1hcmdpbjogNDBweCAxNXB4O1xufVxuLm1lbnUgZGwgZHQge1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbi5tZW51IGRsIGRkIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLyogLS0tIENvbnRhY3QgLS0tICovXG4uY29udGFjdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMGZyIDFmcjtcbiAgbWFyZ2luOiAwcHggLTUwcHggLTIwcHggLTUwcHg7XG59XG4uY29udGFjdCAuZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiA1MHB4O1xufVxuLmNvbnRhY3QgLmZvcm0gPiBkaXYge1xuICBtYXJnaW46IDEwMHB4IDBweDtcbiAgd2lkdGg6IG1pbig1MDBweCwgMTAwJSk7XG59XG4uY29udGFjdCAuZm9ybSA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuLmNvbnRhY3QgLmZvcm0gPiBkaXY6Zmlyc3QtY2hpbGQgaDMge1xuICBmb250LWZhbWlseTogXCJJdGFsaWFuYVwiLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgZm9udC1zaXplOiBjbGFtcCgyLjVyZW0sIDIuNXJlbSArIDF2dywgNXJlbSk7XG59XG4uY29udGFjdCAuZm9ybSA+IGRpdjpmaXJzdC1jaGlsZCBwIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIHdpZHRoOiA4NSU7XG59XG4uY29udGFjdCAuZm9ybSA+IGRpdjpsYXN0LWNoaWxkIHtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbn1cbi5jb250YWN0IC5mb3JtID4gZGl2Omxhc3QtY2hpbGQgZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG4uY29udGFjdCAuZm9ybSA+IGRpdjpsYXN0LWNoaWxkIGZvcm0gaW5wdXQge1xuICBjb2xvcjogI0ZERTlDQztcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkRFOUNDO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG4uY29udGFjdCAuZm9ybSA+IGRpdjpsYXN0LWNoaWxkIGZvcm0gaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmNvbnRhY3QgLmZvcm0gPiBkaXY6bGFzdC1jaGlsZCBmb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjRkRFOUNDO1xufVxuLmNvbnRhY3QgLmZvcm0gPiBkaXY6bGFzdC1jaGlsZCBmb3JtIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFjdCAuZm9ybSA+IGRpdjpsYXN0LWNoaWxkIGZvcm0gaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG4uY29udGFjdCAuZm9ybSA+IGRpdjpsYXN0LWNoaWxkIGZvcm0gLmNvbnRhaW5lci1pbnB1dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMjVweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS43NWZyO1xufVxuLmNvbnRhY3QgLmZvcm0gPiBkaXY6bGFzdC1jaGlsZCBmb3JtIC5jb250YWluZXItYnV0dG9uLXN1Ym1pdCB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4uY29udGFjdCAuZm9ybSA+IGRpdjpsYXN0LWNoaWxkIGZvcm0gLmNvbnRhaW5lci1idXR0b24tc3VibWl0OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xufVxuLmNvbnRhY3QgLmZvcm0gPiBkaXY6bGFzdC1jaGlsZCBmb3JtIC5jb250YWluZXItYnV0dG9uLXN1Ym1pdCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhY3QgLmZvcm0gPiBkaXY6bGFzdC1jaGlsZCBmb3JtIC5jb250YWluZXItYnV0dG9uLXN1Ym1pdCAuYXJyb3cge1xuICBoZWlnaHQ6IDEuMnJlbTtcbiAgd2lkdGg6IDEuMnJlbTtcbiAgZmlsdGVyOiBpbnZlcnQoODglKSBzZXBpYSgyNyUpIHNhdHVyYXRlKDM2OCUpIGh1ZS1yb3RhdGUoMzI4ZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDk4JSk7XG59XG4uY29udGFjdCAuZGV0YWlscyB7XG4gIGNvbG9yOiAjMjAxRTFEO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRFOUNDO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuLmNvbnRhY3QgLmRldGFpbHMgaDQge1xuICBmb250LWZhbWlseTogXCJVbmlmcmFrdHVyTWFndW50aWFcIiwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgMnJlbSArIDEuNXZ3LCA0cmVtKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5jb250YWN0IC5kZXRhaWxzIC5jb250YWN0LWxpbmUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIwMUUxRDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cbi5jb250YWN0IC5kZXRhaWxzIC5jb250YWluZXItZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBhbGlnbi1pdGVtczogZW5kO1xuICBnYXA6IDMwcHg7XG59XG4uY29udGFjdCAuZGV0YWlscyAuY29udGFpbmVyLWRldGFpbHMgLmNvbnRhY3QtZGV0YWlscyBwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5jb250YWN0IC5kZXRhaWxzIC5jb250YWluZXItZGV0YWlscyAuY29udGFjdC1zY2hlZHVsZSBkaXYge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNvbnRhY3QgLmRldGFpbHMgLmNvbnRhaW5lci1kZXRhaWxzIGRpdjpsYXN0LWNoaWxkIGg1IHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi8qIC0tLSBCcmVha3BvaW50cyAtLS0gKi9cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIGJvZHkgZGl2IC5jb250YWN0IC5mb3JtIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbm9uZTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAgZ2FwOiAwcHg7XG4gIH1cbiAgYm9keSBkaXYgLmNvbnRhY3QgLmZvcm0gPiBkaXYge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDQ4MHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgYm9keSBkaXYgLmNvbnRhY3QgLmZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBub25lO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICBnYXA6IDBweDtcbiAgfVxuICBib2R5IGRpdiAuY29udGFjdCAuZm9ybSA+IGRpdiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogNDBweDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICB9XG4gIGJvZHkgaGVhZGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICBib2R5IGhlYWRlciBoMSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBib2R5IGRpdiAuaGVybyB7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICB9XG4gIGJvZHkgZGl2IC5jdWlzaW5lIHtcbiAgICBncmlkLXRlbXBsYXRlOiBtaW4tY29udGVudCA4MHB4IDFmciAxMDBweCAxMDBweCAxMDBweC8xZnIgMWZyIDFmcjtcbiAgICBjb2x1bW4tZ2FwOiAwcHg7XG4gIH1cbiAgYm9keSBkaXYgLmN1aXNpbmUgaDQge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG4gIGJvZHkgZGl2IC5jdWlzaW5lIGg1IHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuICBib2R5IGRpdiAuY3Vpc2luZSBpbWcge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9XG4gIGJvZHkgZGl2IC5jdWlzaW5lIC5pbWFnZS00IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGJvZHkgZGl2IC5tZW51IGgyIHtcbiAgICBmb250LXNpemU6IDEwcmVtO1xuICB9XG4gIGJvZHkgZGl2IC5tZW51IGgzIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBib2R5IGRpdiAubWVudSBkbCBkdCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgYm9keSBkaXYgLmNvbnRhY3Qge1xuICAgIG1hcmdpbjogMHB4IC0xMHB4IC0yMHB4IC0xMHB4O1xuICB9XG4gIGJvZHkgZGl2IC5jb250YWN0IC5mb3JtIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbm9uZTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAgZ2FwOiAwcHg7XG4gIH1cbiAgYm9keSBkaXYgLmNvbnRhY3QgLmZvcm0gPiBkaXYge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgYm9keSBkaXYgLmNvbnRhY3QgLmRldGFpbHMgLmNvbnRhaW5lci1kZXRhaWxzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG5vbmU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIGJvZHkgZGl2IC5jb250YWN0IC5kZXRhaWxzIC5jb250YWluZXItZGV0YWlscyAuY29udGFjdC1kZXRhaWxzIHAge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgYm9keSBkaXYgLmNvbnRhY3QgLmRldGFpbHMgLmNvbnRhaW5lci1kZXRhaWxzIC5jb250YWN0LXNjaGVkdWxlIGRpdiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0Esc0JBQUE7QUFDQTtFQUNFLHNCQUFBO0FBRkY7O0FBS0E7Ozs7Ozs7Ozs7Ozs7RUFhQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FBRkE7O0FBS0E7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFGQTs7QUFLQSx1QkFBQTtBQU1BO0VBQ0UsdUJBQUE7QUFQRjs7QUFVQTtFQUNFLDBJQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkEvQ1c7RUFnRFgsa0JBQUE7QUFQRjs7QUFVQTtFQUNFLGNBbkRZO0FBNENkOztBQVVBLG1CQUFBO0FBRUE7RUFDRSxhQUFB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O0lBQ0EsUUFBQTtFQWpEUjtFQWtEUTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VBaERWO0FBQ0Y7QUF1REE7RUFDRTtJQUNFLGtCQUFBO0VBckRGO0VBc0RFO0lBQ0UsMEJBQUE7RUFwREo7RUFxREk7SUFDRSxhQUFBO0VBbkROO0VBdURJO0lBQ0UsWUFBQTtFQXJETjtFQXVESTtJQUNFLGlFQUFBO0lBQ0EsZUFBQTtFQXJETjtFQXNETTtJQUNFLGlCQUFBO0VBcERSO0VBc0RNO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtFQXBEUjtFQXNETTtJQUNFLGlCQUFBO0VBcERSO0VBc0RNO0lBQ0UsYUFBQTtFQXBEUjtFQXdETTtJQUNFLGdCQUFBO0VBdERSO0VBd0RNO0lBQ0UsaUJBQUE7SUFDQSxXQUFBO0VBdERSO0VBeURRO0lBQ0UsaUJBQUE7RUF2RFY7RUEyREk7SUFDRSw2QkFBQTtFQXpETjtFQTBETTtJQUNFLGdCQUFBO0lBQ0EsMkJBQUE7SUFDQSwyQkFBQTtJQUNBLFFBQUE7RUF4RFI7RUF5RFE7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQXZEVjtFQTJEUTtJQUNFLDJCQUFBO0lBQ0Esa0NBQUE7SUFDQSxtQkFBQTtFQXpEVjtFQTJEWTtJQUNFLGdCQUFBO0VBekRkO0VBNkRZO0lBQ0UsZ0JBQUE7RUEzRGQ7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkdGhlbWUtZGFyazogIzIwMUUxRDtcXG4kdGhlbWUtbGlnaHQ6ICNGREU5Q0M7XFxuXFxuLyogLS0tIENTUyBSZXNldCAtLS0gKi9cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxubWFyZ2luOiAwO1xcbnBhZGRpbmc6IDA7XFxuYm9yZGVyOiAwO1xcbmZvbnQtc2l6ZTogMTAwJTtcXG5mb250OiBpbmhlcml0O1xcbnZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuYnV0dG9uIHtcXG5mb250LWZhbWlseTogaW5oZXJpdDtcXG5mb250LXNpemU6IDEwMCU7XFxufVxcblxcbi8qIC0tLSBDdXN0b20gQ1NTIC0tLSAqL1xcblxcbi8vIGZvbnQtZmFtaWx5OiAnSXRhbGlhbmEnLCBzZXJpZjtcXG4vLyBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbi8vIGZvbnQtZmFtaWx5OiAnVW5pZnJha3R1ck1hZ3VudGlhJywgY3Vyc2l2ZTtcXG5cXG5odG1sIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWRhcms7XFxuICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxufVxcblxcbmJvZHksIGJ1dHRvbiB7XFxuICBjb2xvcjogJHRoZW1lLWxpZ2h0O1xcbn1cXG5cXG4vKiAtLS0gSGVhZGVyIC0tLSAqL1xcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICB9XFxuICB1bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJ1dHRvbiB7XFxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgcGFkZGluZzogNXB4IDJweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKiAtLS0gQWJvdXRfX0hlcm8gLS0tICovXFxuXFxuLmhlcm8ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaDEge1xcbiAgICBmb250LWZhbWlseTogJ0l0YWxpYW5hJywgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIGNhbGMoMXJlbSArIDI0dncpLCAzNXJlbSk7XFxuICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCgxcmVtLCBjYWxjKDFyZW0gKyAyMHZ3KSwgMzVyZW0pO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAvLyBmb250LXNpemU6IDM1cmVtO1xcbiAgfVxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIGNhbGMoMC4xcmVtICsgNXZ3KSwgM3JlbSk7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICB9XFxuICAudmVydGljYWwtbGluZSB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHRoZW1lLWxpZ2h0O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBtYXJnaW46IDUwcHggMHB4IDBweCA1MHB4O1xcbiAgfVxcbn1cXG5cXG4vKiAtLS0gQWJvdXRfX0N1aXNpbmUtLS0gKi9cXG5cXG4uY3Vpc2luZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogbWluLWNvbnRlbnQgODBweCAxZnIgMTAwcHggMTAwcHggMTAwcHggLyAxZnIgMWZyIDFmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiAyNXB4O1xcbiAgcm93LWdhcDogMTBweDtcXG4gIGgzIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGFsaWFuYScsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCBjYWxjKDFyZW0gKyAxM3Z3KSwgMTByZW0pO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gNDtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICB9XFxuICBoNCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgfVxcbiAgZGl2IHtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgJHRoZW1lLWxpZ2h0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMztcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIFxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG4gICAgJjpob3ZlciB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxMTAlKTtcXG4gICAgfVxcbiAgICBidXR0b24ge1xcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gIH1cXG4gIGg1IHtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICB9XFxuICBpbWcge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgfVxcbiAgLmltYWdlLTEge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDMgLyBzcGFuIDM7XFxuICB9XFxuICAuaW1hZ2UtMiB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogNCAvIHNwYW4gMztcXG4gIH1cXG4gIC5pbWFnZS0zIHtcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxuICAgIGdyaWQtcm93OiAzIC8gc3BhbiA0O1xcbiAgfVxcbiAgLmltYWdlLTQge1xcbiAgICBncmlkLWNvbHVtbjogNDtcXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDY7XFxuICB9XFxufVxcblxcbi8qIC0tLSBGb290ZXIgLS0tICovXFxuXFxuZm9vdGVyIHtcXG4gIGhlaWdodDogMTcwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIC5ob3Jpem9udGFsLWxpbmUge1xcbiAgICBtYXJnaW46IDgwcHggMHB4IDEwcHggMTBweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR0aGVtZS1saWdodDtcXG4gIH1cXG4gIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgJjpob3ZlciB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8qIC0tLSBNZW51IC0tLSAqL1xcblxcbi5tZW51IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuXFxuICBoMiB7XFxuICAgIGNvbG9yOiByZ2IoMzksIDM1LCAzMik7XFxuICAgIGZvbnQtc2l6ZTogMjByZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IGNhbGMoMHB4ICsgMjByZW0pO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gIH1cXG4gIGgzIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xcbiAgICB3aWR0aDogbWF4KDQwMHB4LCA0MCUpO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgZGwge1xcbiAgICBtYXJnaW46IDQwcHggMTVweDtcXG4gICAgZHQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICB9XFxuICAgIGRkIHtcXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKiAtLS0gQ29udGFjdCAtLS0gKi9cXG5cXG4uY29udGFjdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwZnIgMWZyO1xcbiAgbWFyZ2luOiAwcHggLTUwcHggLTIwcHggLTUwcHg7XFxuICAuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICA+ZGl2IHtcXG4gICAgICBtYXJnaW46IDEwMHB4IDBweDtcXG4gICAgICB3aWR0aDogbWluKDUwMHB4LCAxMDAlKTtcXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICAgICAgaDMge1xcbiAgICAgICAgICBmb250LWZhbWlseTogJ0l0YWxpYW5hJywgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICAgICAgICBmb250LXNpemU6IGNsYW1wKDIuNXJlbSwgY2FsYygyLjVyZW0gKyAxdncpLCA1cmVtKTsgICAgICBcXG4gICAgICAgIH1cXG4gICAgICAgIHAge1xcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgICAgICBmb3JtIHtcXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgaW5wdXQge1xcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtbGlnaHQ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkdGhlbWUtbGlnaHQ7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICAgICAgICAgICY6Zm9jdXMge1xcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1saWdodDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgJlt0eXBlPVxcXCJlbWFpbFxcXCJdIHtcXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAmW3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICAgICAgICAgICAgICAmOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGludmVydCgxKTtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLmNvbnRhaW5lci1pbnB1dCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBnYXA6IDI1cHg7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS43NWZyO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIC5jb250YWluZXItYnV0dG9uLXN1Ym1pdCB7XFxuICAgICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweClcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5hcnJvdyB7XFxuICAgICAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcXG4gICAgICAgICAgICAgIHdpZHRoOiAxLjJyZW07XFxuICAgICAgICAgICAgICBmaWx0ZXI6IGludmVydCg4OCUpIHNlcGlhKDI3JSkgc2F0dXJhdGUoMzY4JSkgaHVlLXJvdGF0ZSgzMjhkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoOTglKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gIC5kZXRhaWxzIHtcXG4gICAgY29sb3I6ICR0aGVtZS1kYXJrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbGlnaHQ7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIGg0IHtcXG4gICAgICBmb250LWZhbWlseTogJ1VuaWZyYWt0dXJNYWd1bnRpYScsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIGNhbGMoMnJlbSArIDEuNXZ3KSwgNHJlbSk7ICAgXFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgfVxcbiAgICAuY29udGFjdC1saW5lIHtcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHRoZW1lLWRhcms7XFxuICAgICAgbWFyZ2luOiAyMHB4IDBweDtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyLWRldGFpbHMge1xcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcblxcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICAgIGdhcDogMzBweDtcXG4gICAgICAuY29udGFjdC1kZXRhaWxzIHtcXG4gICAgICAgIHAge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAuY29udGFjdC1zY2hlZHVsZSB7XFxuICAgICAgICBkaXYge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICBkaXY6bGFzdC1jaGlsZCB7XFxuICAgICAgICBoNSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG5cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKiAtLS0gQnJlYWtwb2ludHMgLS0tICovXFxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIGJvZHkge1xcbiAgICBkaXYge1xcbiAgICAgIC5jb250YWN0IHtcXG4gICAgICAgIC5mb3JtIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBub25lO1xcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgICAgICAgIGdhcDogMHB4O1xcbiAgICAgICAgICA+ZGl2IHtcXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDQ4MHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkge1xcbiAgICBkaXYge1xcbiAgICAgIC5jb250YWN0IHtcXG4gICAgICAgIC5mb3JtIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBub25lO1xcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgICAgICAgIGdhcDogMHB4O1xcbiAgICAgICAgICA+ZGl2IHtcXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuIH1cXG4gXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICAgIGhlYWRlciB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgaDEge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgZGl2IHtcXG4gICAgICAuaGVybyB7XFxuICAgICAgICBoZWlnaHQ6IDYwdmg7XFxuICAgICAgfVxcbiAgICAgIC5jdWlzaW5lIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IG1pbi1jb250ZW50IDgwcHggMWZyIDEwMHB4IDEwMHB4IDEwMHB4IC8gMWZyIDFmciAxZnI7XFxuICAgICAgICBjb2x1bW4tZ2FwOiAwcHg7XFxuICAgICAgICBoNCB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAgICAgfVxcbiAgICAgICAgaDUge1xcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgICAgICB9XFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5pbWFnZS00IHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgLm1lbnUge1xcbiAgICAgICAgaDIge1xcbiAgICAgICAgICBmb250LXNpemU6IDEwcmVtO1xcbiAgICAgICAgfVxcbiAgICAgICAgaDN7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgICAgIGRsIHtcXG4gICAgICAgICAgZHQge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIC5jb250YWN0IHtcXG4gICAgICAgIG1hcmdpbjogMHB4IC0xMHB4IC0yMHB4IC0xMHB4O1xcbiAgICAgICAgLmZvcm0ge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG5vbmU7XFxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgICAgICAgZ2FwOiAwcHg7XFxuICAgICAgICAgID5kaXYge1xcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5kZXRhaWxzIHtcXG4gICAgICAgICAgLmNvbnRhaW5lci1kZXRhaWxzIHtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG5vbmU7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIC5jb250YWN0LWRldGFpbHMge1xcbiAgICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5jb250YWN0LXNjaGVkdWxlIHtcXG4gICAgICAgICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufTtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBJbWFnZTEgZnJvbSBcIi4vaW1nLzEuanBnXCI7XG5pbXBvcnQgSW1hZ2UyIGZyb20gXCIuL2ltZy8yLmpwZ1wiO1xuaW1wb3J0IEltYWdlMyBmcm9tIFwiLi9pbWcvMy5qcGdcIjtcbmltcG9ydCBJbWFnZTQgZnJvbSBcIi4vaW1nLzQuanBnXCI7XG5pbXBvcnQgc2hvd01lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHNob3dDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCB7Y2xlYXJQYWdlLCBzY3JvbGxUb1RvcH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd0Fib3V0KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIC8vIEhlcm8gU2VjdGlvblxuICBjb25zdCBzZWN0aW9uSGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgc2VjdGlvbkhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpXG4gIGRpdi5hcHBlbmRDaGlsZChzZWN0aW9uSGVybyk7XG5cbiAgY29uc3QgZGl2SGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWN0aW9uSGVyby5hcHBlbmRDaGlsZChkaXZIZXJvKTtcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLnRleHRDb250ZW50ID0gJ1NBT1JJJztcbiAgZGl2SGVyby5hcHBlbmRDaGlsZChoMSk7XG5cbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi50ZXh0Q29udGVudCA9ICfjg6Ljg4Djg7Pjgarml6XmnKzmlpnnkIYnO1xuICBkaXZIZXJvLmFwcGVuZENoaWxkKGgyKTtcblxuICBjb25zdCB2bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2bC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbC1saW5lJyk7XG4gIGRpdkhlcm8uYXBwZW5kQ2hpbGQodmwpO1xuXG4gIC8vIEN1aXNpbmUgU2VjdGlvblxuICBjb25zdCBzZWN0aW9uQ3Vpc2luZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgc2VjdGlvbkN1aXNpbmUuY2xhc3NMaXN0LmFkZCgnY3Vpc2luZScpO1xuICBkaXYuYXBwZW5kQ2hpbGQoc2VjdGlvbkN1aXNpbmUpO1xuXG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDMudGV4dENvbnRlbnQgPSAnT3VyIGN1aXNpbmUnO1xuICBzZWN0aW9uQ3Vpc2luZS5hcHBlbmRDaGlsZChoMyk7XG5cbiAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBoNC50ZXh0Q29udGVudCA9ICdXZSBjZWxlYnJhdGUgdGhlIHRpbWVsZXNzIGZsYXZvcnMgb2YgSmFwYW5lc2UgY3Vpc2luZSB3aXRoIG1vZGVybiB0ZWNobmlxdWVzJztcbiAgc2VjdGlvbkN1aXNpbmUuYXBwZW5kQ2hpbGQoaDQpO1xuXG4gIGNvbnN0IGRpdkN1aXNpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VjdGlvbkN1aXNpbmUuYXBwZW5kQ2hpbGQoZGl2Q3Vpc2luZSk7XG5cbiAgY29uc3QgYnV0dG9uQ3Vpc2luZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b25DdWlzaW5lLnRleHRDb250ZW50ID0gJ1NFRSBNRU5VJztcbiAgYnV0dG9uQ3Vpc2luZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIGJ1dHRvbkN1aXNpbmUuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW1lbnUnKTtcbiAgZGl2Q3Vpc2luZS5hcHBlbmRDaGlsZChidXR0b25DdWlzaW5lKTtcblxuICBjb25zdCBoNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gIGg1LnRleHRDb250ZW50ID0gJ+aXpeacrOmjnyc7XG4gIHNlY3Rpb25DdWlzaW5lLmFwcGVuZENoaWxkKGg1KTtcblxuICBjb25zdCBpbWFnZTEgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2UxLnNyYyA9IEltYWdlMTtcbiAgaW1hZ2UxLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLTEnKTtcbiAgc2VjdGlvbkN1aXNpbmUuYXBwZW5kQ2hpbGQoaW1hZ2UxKTtcblxuICBjb25zdCBpbWFnZTIgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2UyLnNyYyA9IEltYWdlMjtcbiAgaW1hZ2UyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLTInKTtcbiAgc2VjdGlvbkN1aXNpbmUuYXBwZW5kQ2hpbGQoaW1hZ2UyKTtcblxuICBjb25zdCBpbWFnZTMgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2UzLnNyYyA9IEltYWdlMztcbiAgaW1hZ2UzLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLTMnKTtcbiAgc2VjdGlvbkN1aXNpbmUuYXBwZW5kQ2hpbGQoaW1hZ2UzKTtcblxuICBjb25zdCBpbWFnZTQgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2U0LnNyYyA9IEltYWdlNDtcbiAgaW1hZ2U0LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLTQnKTtcbiAgc2VjdGlvbkN1aXNpbmUuYXBwZW5kQ2hpbGQoaW1hZ2U0KTtcblxuICAvLyBGb290ZXIgU2VjdGlvblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZGl2LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgY29uc3QgaGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGwuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbC1saW5lJyk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChobCk7XG5cbiAgY29uc3QgYnV0dG9uTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b25NZW51LnRleHRDb250ZW50ID0gJ1NFRSBNRU5VJztcbiAgYnV0dG9uTWVudS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIGJ1dHRvbk1lbnUuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW1lbnUnKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGJ1dHRvbk1lbnUpO1xuXG4gIGNvbnN0IGJ1dHRvbkJvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uQm9vay50ZXh0Q29udGVudCA9ICdCT09LIEEgVEFCTEUnXG4gIGJ1dHRvbkJvb2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQm9vayk7XG5cbiAgY29uc3QgYWxsQnV0dG9uTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tbWVudScpO1xuICBhbGxCdXR0b25NZW51LmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHNjcm9sbFRvVG9wKCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjbGVhclBhZ2UoKTtcbiAgICAgICAgc2hvd01lbnUoKTtcbiAgICAgIH0sIDY1MCk7XG4gICAgfSlcbiAgfSlcblxuICBidXR0b25Cb29rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNjcm9sbFRvVG9wKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNsZWFyUGFnZSgpO1xuICAgICAgc2hvd0NvbnRhY3QoKTtcbiAgICB9LCA2NTApO1xuICB9KVxufSIsImltcG9ydCBBcnJvdyBmcm9tIFwiLi9pbWcvYXJyb3cuc3ZnXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd0NvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0JylcbiAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIC8vIEZvcm0gU2VjdGlvblxuICBjb25zdCBzZWN0aW9uRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgc2VjdGlvbkZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuICBkaXYuYXBwZW5kQ2hpbGQoc2VjdGlvbkZvcm0pO1xuXG4gIGNvbnN0IGRpdkZvcm0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlY3Rpb25Gb3JtLmFwcGVuZENoaWxkKGRpdkZvcm0xKTtcblxuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGgzLnRleHRDb250ZW50ID0gJ01ha2UgYSByZXNlcnZhdGlvbic7XG4gIGRpdkZvcm0xLmFwcGVuZENoaWxkKGgzKTtcbiAgXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAudGV4dENvbnRlbnQgPSAnSWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucywgcmVxdWlyZSBmdXJ0aGVyIGFzc2lzdGFuY2UsIG9yIHdvdWxkIGxpa2UgdG8gaW5xdWlyZSByZWdhcmRpbmcgcHJpdmF0ZSBldmVudHMgYW5kIHNwZWNpYWwgb2NjYXNpb25zLCBwbGVhc2UgZmVlbCBmcmVlIHRvIGNvbnRhY3QgdXMuJztcbiAgZGl2Rm9ybTEuYXBwZW5kQ2hpbGQocCk7XG5cbiAgY29uc3QgZGl2Rm9ybTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VjdGlvbkZvcm0uYXBwZW5kKGRpdkZvcm0yKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBkaXZGb3JtMi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCBpbnB1dEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBpbnB1dEVtYWlsLnNldEF0dHJpYnV0ZSgndHlwZScsICdlbWFpbCcpO1xuICBpbnB1dEVtYWlsLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZXhhbXBsZUBnbWFpbC5jb20nKVxuICBpbnB1dEVtYWlsLnJlcXVpcmVkID0gdHJ1ZTtcbiAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dEVtYWlsKTtcblxuICBjb25zdCBkaXZGb3JtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZGb3JtMy5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItaW5wdXQnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkaXZGb3JtMyk7XG5cbiAgY29uc3QgaW5wdXRHdWVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0R3Vlc3Quc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuICBpbnB1dEd1ZXN0LnNldEF0dHJpYnV0ZSgnbWluJywgJzInKTtcbiAgaW5wdXRHdWVzdC5zZXRBdHRyaWJ1dGUoJ21heCcsICc2Jyk7XG4gIGlucHV0R3Vlc3Quc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICc2IGd1ZXN0cycpO1xuICBpbnB1dEd1ZXN0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgZGl2Rm9ybTMuYXBwZW5kQ2hpbGQoaW5wdXRHdWVzdCk7XG5cbiAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGlucHV0RGF0ZS5yZXF1aXJlZCA9IHRydWU7XG4gIGRpdkZvcm0zLmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7XG5cbiAgY29uc3QgZGl2Rm9ybTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2Rm9ybTQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLWJ1dHRvbi1zdWJtaXQnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkaXZGb3JtNCk7XG5cbiAgY29uc3QgYnV0dG9uU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvblN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIGJ1dHRvblN1Ym1pdC50ZXh0Q29udGVudCA9ICdSRVNFUlZFIFlPVVIgVEFCTEUnXG4gIGRpdkZvcm00LmFwcGVuZENoaWxkKGJ1dHRvblN1Ym1pdCk7XG5cbiAgY29uc3QgYXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgYXJyb3cuc3JjID0gQXJyb3c7XG4gIGFycm93LmNsYXNzTGlzdC5hZGQoJ2Fycm93Jyk7XG4gIGRpdkZvcm00LmFwcGVuZENoaWxkKGFycm93KTtcblxuICAvLyBEZXRhaWxzIFNlY3Rpb25cbiAgY29uc3Qgc2VjdGlvbkRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIHNlY3Rpb25EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKVxuICBkaXYuYXBwZW5kQ2hpbGQoc2VjdGlvbkRldGFpbHMpO1xuXG4gIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgaDQudGV4dENvbnRlbnQgPSAnKzYzIDkxNyA4MDAgNDIxOSdcbiAgc2VjdGlvbkRldGFpbHMuYXBwZW5kQ2hpbGQoaDQpO1xuXG4gIGNvbnN0IGhsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtbGluZScpO1xuICBzZWN0aW9uRGV0YWlscy5hcHBlbmRDaGlsZChobCk7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItZGV0YWlscycpO1xuICBzZWN0aW9uRGV0YWlscy5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IGNvbHVtbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29sdW1uMy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWRldGFpbHMnKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbHVtbjMpO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnNTg4MyBFbnJpcXVleiwgTWFrYXRpLCBNZXRybyBNYW5pbGEsIFBoaWxpcHBpbmVzJ1xuICBjb2x1bW4zLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwaG9uZS50ZXh0Q29udGVudCA9ICcrNjMgOTE3IDgwMCA0MjE5JztcbiAgY29sdW1uMy5hcHBlbmRDaGlsZChwaG9uZSk7XG5cbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGVtYWlsLnRleHRDb250ZW50ID0gJ3Nhb3JpbW5sQGdtYWlsLmNvbSdcbiAgY29sdW1uMy5hcHBlbmRDaGlsZChlbWFpbCk7XG5cbiAgY29uc3QgY29sdW1uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb2x1bW4yLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3Qtc2NoZWR1bGUnKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbHVtbjIpO1xuXG4gIGNvbnN0IGRpdkRldGFpbHMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbHVtbjIuYXBwZW5kQ2hpbGQoZGl2RGV0YWlsczEpO1xuXG4gIGNvbnN0IHdlZWtkYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB3ZWVrZGF5cy50ZXh0Q29udGVudCA9ICdNb25kYXkgLSBUaHVyc2RheSc7XG4gIGRpdkRldGFpbHMxLmFwcGVuZENoaWxkKHdlZWtkYXlzKVxuXG4gIGNvbnN0IHdlZWtkYXlzU2NoZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHdlZWtkYXlzU2NoZWQudGV4dENvbnRlbnQgPSAnNCAtIDlQTSc7XG4gIGRpdkRldGFpbHMxLmFwcGVuZENoaWxkKHdlZWtkYXlzU2NoZWQpO1xuXG4gIGNvbnN0IGRpdkRldGFpbHMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbHVtbjIuYXBwZW5kQ2hpbGQoZGl2RGV0YWlsczIpO1xuXG4gIGNvbnN0IHdlZWtlbmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB3ZWVrZW5kcy50ZXh0Q29udGVudCA9ICdGcmlkYXkgLSBTdW5kYXknO1xuICBkaXZEZXRhaWxzMi5hcHBlbmRDaGlsZCh3ZWVrZW5kcyk7XG5cbiAgY29uc3Qgd2Vla2VuZHNTY2hlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgd2Vla2VuZHNTY2hlZC50ZXh0Q29udGVudCA9ICc0IC0gMTFQTSc7XG4gIGRpdkRldGFpbHMyLmFwcGVuZENoaWxkKHdlZWtlbmRzU2NoZWQpO1xuXG4gIGNvbnN0IGNvbHVtbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbHVtbjEpO1xuXG4gIGNvbnN0IGg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgaDUudGV4dENvbnRlbnQgPSAnc2FvcmkuJ1xuICBjb2x1bW4xLmFwcGVuZENoaWxkKGg1KTtcblxuICBjb25zdCBoNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7XG4gIGg2LnRleHRDb250ZW50ID0gJ0phcGFuZXNlIFN1c2hpIEJhcidcbiAgY29sdW1uMS5hcHBlbmRDaGlsZChoNik7XG59IiwiaW1wb3J0IHNob3dBYm91dCBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IHNob3dNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBzaG93Q29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmZ1bmN0aW9uIHNob3dIZWFkZXIoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS50ZXh0Q29udGVudCA9ICdzYW9yaS4nO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHVsKTtcblxuICBjb25zdCBsaUFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlBYm91dC5jbGFzc0xpc3QuYWRkKCduYXYtYWJvdXQnKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGlBYm91dCk7XG5cbiAgY29uc3QgYnV0dG9uQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uQWJvdXQudGV4dENvbnRlbnQgPSAnQUJPVVQnO1xuICBidXR0b25BYm91dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIGxpQWJvdXQuYXBwZW5kQ2hpbGQoYnV0dG9uQWJvdXQpO1xuXG4gIGNvbnN0IGxpTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpTWVudS5jbGFzc0xpc3QuYWRkKCduYXYtbWVudScpO1xuICB1bC5hcHBlbmRDaGlsZChsaU1lbnUpO1xuXG4gIGNvbnN0IGJ1dHRvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uTWVudS50ZXh0Q29udGVudCA9ICdNRU5VJztcbiAgYnV0dG9uQWJvdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBsaU1lbnUuYXBwZW5kQ2hpbGQoYnV0dG9uTWVudSk7XG5cbiAgY29uc3QgbGlCb29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlCb29rLmNsYXNzTGlzdC5hZGQoJ25hdi1ib29rJyk7XG4gIHVsLmFwcGVuZENoaWxkKGxpQm9vayk7XG5cbiAgY29uc3QgYnV0dG9uQm9vayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b25Cb29rLnRleHRDb250ZW50ID0gJ0NPTlRBQ1QnO1xuICBidXR0b25BYm91dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIGxpQm9vay5hcHBlbmRDaGlsZChidXR0b25Cb29rKTtcblxuICBidXR0b25BYm91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhclBhZ2UoKTtcbiAgICBzaG93QWJvdXQoKTtcbiAgfSlcblxuICBidXR0b25NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNjcm9sbFRvVG9wKClcbiAgICBjbGVhclBhZ2UoKTtcbiAgICBzaG93TWVudSgpO1xuICB9KVxuXG4gIGJ1dHRvbkJvb2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJQYWdlKCk7XG4gICAgc2hvd0NvbnRhY3QoKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gY2xlYXJQYWdlKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQgZGl2Jyk7XG4gIG1haW4ucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbFRvVG9wKCkge1xuICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7IFxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDsgXG59XG5cbnNob3dIZWFkZXIoKTtcbnNob3dBYm91dCgpO1xuXG5leHBvcnQge2NsZWFyUGFnZSwgc2Nyb2xsVG9Ub3B9OyIsImltcG9ydCBzaG93QWJvdXQgZnJvbSBcIi4vYWJvdXRcIjtcbmltcG9ydCBzaG93Q29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQge2NsZWFyUGFnZSwgc2Nyb2xsVG9Ub3B9IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dNZW51KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi50ZXh0Q29udGVudCA9ICfml6XmnKzpo58nO1xuICBkaXYuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGNvbnRlbnQpIHtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaDMudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIGgzLmNsYXNzTGlzdC5hZGQoYCR7Y29udGVudH0tY2F0ZWdvcnlgKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDMpO1xuICB9IFxuXG4gIGZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uTGlzdChjbGFzc25hbWUpIHtcbiAgICBjb25zdCBkbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RsJyk7XG4gICAgZGwuY2xhc3NMaXN0LmFkZChgJHtjbGFzc25hbWV9LWxpc3RgKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb25UaXRsZShjb250ZW50LCBwYXJlbnQpIHtcbiAgICBjb25zdCBkdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2R0Jyk7XG4gICAgY29uc3QgZGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudCk7XG4gICAgZHQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIGRsLmFwcGVuZENoaWxkKGR0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uRGVmaW5pdGlvbihjb250ZW50LCBwYXJlbnQpIHtcbiAgICBjb25zdCBkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RkJyk7XG4gICAgY29uc3QgZGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudCk7XG4gICAgZGQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIGRsLmFwcGVuZENoaWxkKGRkKTtcbiAgfVxuXG4gIGNyZWF0ZUNhdGVnb3J5KCdhcHBldGl6ZXJzJyk7XG4gIGNyZWF0ZURlc2NyaXB0aW9uTGlzdCgnYXBwZXRpemVycycpO1xuICBjcmVhdGVEZXNjcmlwdGlvblRpdGxlKCdlZGFtYW1lJywgJy5hcHBldGl6ZXJzLWxpc3QnKTtcbiAgY3JlYXRlRGVzY3JpcHRpb25EZWZpbml0aW9uKCdzdGVhbWVkIHlvdW5nIHNveWJlYW5zIHdpdGggc2VhIHNhbHQnLCAnLmFwcGV0aXplcnMtbGlzdCcpO1xuICBjcmVhdGVEZXNjcmlwdGlvblRpdGxlKCdhZ2VkYXNoaSB0b2Z1JywgJy5hcHBldGl6ZXJzLWxpc3QnKTtcbiAgY3JlYXRlRGVzY3JpcHRpb25EZWZpbml0aW9uKCdkZWVwLWZyaWVkIHRvZnUgc2VydmVkIGluIGEgZGFzaGktYmFzZWQgYnJvdGggd2l0aCBncmF0ZWQgZGFpa29uLCBnaW5nZXIsIGFuZCBib25pdG8gZmxha2VzJywgJy5hcHBldGl6ZXJzLWxpc3QnKTtcbiAgY3JlYXRlRGVzY3JpcHRpb25UaXRsZSgnZ29tYSBhZScsICcuYXBwZXRpemVycy1saXN0Jyk7XG4gIGNyZWF0ZURlc2NyaXB0aW9uRGVmaW5pdGlvbignYmxhbmNoZWQgc3BpbmFjaCBvciBncmVlbiBiZWFucyBkcmVzc2VkIGluIHNlc2FtZSBzYXVjZScsICcuYXBwZXRpemVycy1saXN0Jyk7XG5cbiAgY3JlYXRlQ2F0ZWdvcnkoJ21haW4nKTtcbiAgY3JlYXRlRGVzY3JpcHRpb25MaXN0KCdtYWluJyk7XG4gIGNyZWF0ZURlc2NyaXB0aW9uVGl0bGUoJ2hvbmtha3Uga2Fpc2VraScsICcubWFpbi1saXN0Jyk7XG4gIGNyZWF0ZURlc2NyaXB0aW9uRGVmaW5pdGlvbignbXVsdGktY291cnNlIGphcGFuZXNlIG1lYWwgdGhhdCBlbXBoYXNpemVzIHNlYXNvbmFsaXR5LCBiYWxhbmNlIGFuZCB0aW1lLWhvbm9yZWQgdHJhZGl0aW9ucycsICcubWFpbi1saXN0Jyk7XG4gIGNyZWF0ZURlc2NyaXB0aW9uVGl0bGUoJ25lbyBrYWlzZWtpJywgJy5tYWluLWxpc3QnKTtcbiAgY3JlYXRlRGVzY3JpcHRpb25EZWZpbml0aW9uKCdtdWx0aS1jb3Vyc2UgamFwYW5lc2UgbWVhbCB0aGF0IGVtcGhhc2l6ZXMgY3JlYXRpdml0eSBhbmQgaW5ub3ZhdGlvbicsICcubWFpbi1saXN0Jyk7XG4gIGNyZWF0ZURlc2NyaXB0aW9uVGl0bGUoJ29tYWthc2UnLCAnLm1haW4tbGlzdCcpO1xuICBjcmVhdGVEZXNjcmlwdGlvbkRlZmluaXRpb24oJ211bHRpLWNvdXJzZSBqYXBhbmVzZSBtZWFsIGN1cmF0ZWQgYnkgdGhlIGNoZWYnLCAnLm1haW4tbGlzdCcpO1xuXG4gIGNyZWF0ZUNhdGVnb3J5KCdkZXNzZXJ0cycpO1xuICBjcmVhdGVEZXNjcmlwdGlvbkxpc3QoJ2Rlc3NlcnRzJyk7XG4gIGNyZWF0ZURlc2NyaXB0aW9uVGl0bGUoJ3dhcmFiaW1vY2hpJywgJy5kZXNzZXJ0cy1saXN0Jyk7XG4gIGNyZWF0ZURlc2NyaXB0aW9uRGVmaW5pdGlvbignc29mdCBkZXNzZXJ0IG1hZGUgZnJvbSBicmFja2VuIHN0YXJjaCwgc2VydmVkIHdpdGgga2luYWtvIGFuZCBicm93biBzdWdhciBzeXJ1cCcsICcuZGVzc2VydHMtbGlzdCcpO1xuICBjcmVhdGVEZXNjcmlwdGlvblRpdGxlKCdrdXp1IG1hbmp1JywgJy5kZXNzZXJ0cy1saXN0Jyk7XG4gIGNyZWF0ZURlc2NyaXB0aW9uRGVmaW5pdGlvbignZGVsaWNhdGUgc3RlYW1lZCBidW5zIGZpbGxlZCB3aXRoIGEgc3dlZXQga3V6dSBwYXN0ZSwgc2VydmVkIHdpdGggYSBkdXN0aW5nIG9mIGtpbmFrbycsICcuZGVzc2VydHMtbGlzdCcpO1xuXG4gIGNyZWF0ZUNhdGVnb3J5KCdiZXZlcmFnZXMnKTtcbiAgY3JlYXRlRGVzY3JpcHRpb25MaXN0KCdiZXZlcmFnZXMnKTtcbiAgY3JlYXRlRGVzY3JpcHRpb25UaXRsZSgnc2VuY2hhJywgJy5iZXZlcmFnZXMtbGlzdCcpO1xuICBjcmVhdGVEZXNjcmlwdGlvbkRlZmluaXRpb24oJ2NsYXNzaWMgamFwYW5lc2UgeW91bmcgdGVhIGxlYXZlcyB0aGF0IGFyZSBzdGVhbWVkLCByb2xsZWQsIGFuZCB0aGVuIGRyaWVkJywgJy5iZXZlcmFnZXMtbGlzdCcpO1xuICBjcmVhdGVEZXNjcmlwdGlvblRpdGxlKCdnZW5tYWljaGEnLCAnLmJldmVyYWdlcy1saXN0Jyk7XG4gIGNyZWF0ZURlc2NyaXB0aW9uRGVmaW5pdGlvbigndHJhZGl0aW9uYWwgZ3JlZW4gdGVhIGxlYXZlcyB3aXRoIHRvYXN0ZWQgYnJvd24gcmljZScsICcuYmV2ZXJhZ2VzLWxpc3QnKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZGl2LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgY29uc3QgaGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdobCcpO1xuICBobC5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsLWxpbmUnKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGhsKTtcblxuICBjb25zdCBidXR0b25BYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b25BYm91dC50ZXh0Q29udGVudCA9ICdBQk9VVCBTQU9SSSc7XG4gIGJ1dHRvbkFib3V0LnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgYnV0dG9uQWJvdXQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW1lbnUnKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGJ1dHRvbkFib3V0KTtcblxuICBjb25zdCBidXR0b25Cb29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbkJvb2sudGV4dENvbnRlbnQgPSAnQk9PSyBBIFRBQkxFJ1xuICBidXR0b25Cb29rLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGJ1dHRvbkJvb2spO1xuXG4gIGJ1dHRvbkFib3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNjcm9sbFRvVG9wKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNsZWFyUGFnZSgpO1xuICAgICAgc2hvd0Fib3V0KCk7XG4gICAgfSwgNjUwKTtcbiAgfSlcblxuICBidXR0b25Cb29rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNjcm9sbFRvVG9wKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNsZWFyUGFnZSgpO1xuICAgICAgc2hvd0NvbnRhY3QoKTtcbiAgICB9LCA2NTApO1xuICB9KVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=