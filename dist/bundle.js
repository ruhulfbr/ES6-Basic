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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _math = __webpack_require__(/*! ./math */ \"./src/math.js\");\n\nvar math = _interopRequireWildcard(_math);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nconsole.log(math.sum(10, 20));\nconsole.log(math.add(10, 20));\n// const a = 10;\n// const b = 20;\n\n// const sum = (a, b) => a+b;\n\n// console.log(sum(a, b));\n\n// const x = 5;\n// x = 10;\n// console.log(x);\n\n// const arr = [];\n// arr.push(10);\n// arr.push(25);\n// arr = [];\n// console.log(arr);\n// var y = 10;\n// if(true){\n//     var y = 55;\n//     console.log(y);\n// }\n// console.log(y);\n\n\n// let x = 10;\n// if(true){\n//     let x = 55;\n//     console.log(x);\n// }\n// console.log(x);\n\n// function demo(){\n//     {\n//         let x = 10;\n//         {\n//             const x = 25;\n//             console.log(x);\n//         }\n//         console.log(x);\n//     }\n// }\n// demo();\n\n// const name = 'Ruhul amin';\n// const age = 24;\n// const email = 'ruhul@gmail.com';\n// const arr = [10,20,30]\n\n// // const all = 'Name : ' + name + ' Age : '\n// //             + age + ' Email : '+ email;\n\n// const all = `\n//     Name : ${name}\n//     Age : ${age}  \n//     Email : ${email}\n//     Result : ${arr}\n// `\n\n// console.log(all);\n\n// alert('Its working');\n\n\n// function bb(){\n//     console.log('This is a normal function');\n// }\n\n// const ss = (sona) =>{\n//     console.log('This is a : ' + sona);\n// }\n// ss('sona');\n// const ss = sona =>{\n//     console.log('This is a : ' + sona);\n// }\n// ss('sona');\n\n// const ss = (name, age) =>{\n//     console.log('TMy name is  : ' + name + ' and I am '+ age + ' Years old');\n// }\n\n// const addMe = (a,b) => a+b;\n//  console.log(addMe(20,50));\n\n//  const squre = x => x*x;\n//  console.log(squre(20));\n\n// const obj = {\n//     name : 'Ruhulamin',\n//     print: function(){\n//         setTimeout(function(){\n//             console.log(this);\n//         }.bind(this), 1000);\n\n//     }\n// }\n// obj.print();\n\n// const obj = {\n//     name : 'Ruhulamin',\n//     print: function(){\n//         setTimeout(()=>{\n//             console.log(this.name);\n//         }, 1000);\n\n//     }\n// }\n// obj.print();\n\n// let name = 'Ruhul amin'\n// let email = 'ruhul11bd@gmail.com'\n// const obj = {\n//     name,\n//     email,\n//     print(){\n//         console.log(this.name, this.email);\n//     }\n// }\n// obj.print();\n// console.dir(obj);\n\n// const arr = [12,14,15];\n//  let[a, ,c] = arr;\n\n//  console.log(c);\n\n// const obj = {\n//     name: 'Ruhul',\n//     email: 'email@gmail.com'\n// }\n// let { name,email } = obj;\n// console.log('My name is '+ name + ' Email ' + email)\n\n// function print({name,email}){\n//     console.log(`Email : ${email} , Name : ${name}`)\n// }\n// print({email,name})\n\n\n// let add = (a,b) => a+b;\n\n// console.log(add(10))\n\n// let add = (a=20,b=a) => a+b;\n\n// console.log(add())\n\n\n// Rest operator\n// function sum(...num){\n//     return num.reduce((a,b) => a+b);\n// }\n\n// let xum = sum(10,20,30,40,55)\n// console.log(xum)\n\n//Spreed operator\n\n// let arr = [1,2,3,4,5]\n\n// arr = [...arr,20,30]\n\n// console.log(arr)\n// console.log(...arr)\n\n// let obj = {\n//     name: 'ruhul',\n//     email: 'email.com'\n// }\n\n// let obj2 = {\n//     ...obj,\n//     name: '01749769449'\n// }\n// console.log(obj2)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar sum = exports.sum = function sum(a, b) {\n  return a + b;\n};\nvar add = exports.add = function add(a, b) {\n  return a - b;\n};\n\n//# sourceURL=webpack:///./src/math.js?");

/***/ })

/******/ });