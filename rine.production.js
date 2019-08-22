!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Rine=e()}}(function(){return function u(i,c,f){function a(n,e){if(!c[n]){if(!i[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(s)return s(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var o=c[n]={exports:{}};i[n][0].call(o.exports,function(e){return a(i[n][1][e]||e)},o,o.exports,u,i,c,f)}return c[n].exports}for(var s="function"==typeof require&&require,e=0;e<f.length;e++)a(f[e]);return a}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.react=t.merge=t.state=void 0;var r,o=e("./state"),u=e("./react"),i=(r=u)&&r.__esModule?r:{default:r};t.state=o.createState,t.merge=o.mergeStates,t.react={routine:i.default}},{"./react":2,"./state":3}],2:[function(u,e,i){(function(e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var d=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],r=!0,o=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){o=!0,u=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw u}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};i.createRoutineInstance=o,i.default=function(a){function e(e){var n=(0,y.useState)(null),t=d(n,2),r=t[0],o=t[1],u=(0,y.useState)(null),i=d(u,2),c=i[0],f=i[1];return(0,y.useEffect)(function(){r&&r.updated(e)},[e]),(0,y.useEffect)(function(){r&&r.rendered()},[c]),(0,y.useEffect)(function(){return o(r=l.createRoutineInstance(a)),r.in(e,s,f),function(){r.out()}},[]),c}var s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){return null},l=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{createRoutineInstance:o};return e.displayName="Routine("+(0,t.getFuncName)(a)+")",e};var n,y="undefined"!=typeof window?window.React:void 0!==e?e.React:null,v=(n=y)&&n.__esModule?n:{default:n},t=u("../utils"),m=u("../state");var r=0,h=function(){return"@@r"+ ++r};function o(r){var e=h(),o=!1,u=(0,m.createState)(),i=u.mutate(),c=u.map(),f={},a=[],s=void 0;function l(){return o}var n={__rine:"routine",id:e,name:(0,t.getFuncName)(r),isMounted:l,in:function(e,n,t){o=!0,i(e),r({render:function(e){return o?("string"==typeof e||"number"==typeof e||v.default.isValidElement(e)?t(e):t(null===e?function(){return null}:v.default.createElement(n,function(e){return f=p({},f,e)}(e))),new Promise(function(e){return s=e})):Promise.resolve()},useProps:function(e){u.onUpdate().pipe(e),e(c())},state:function(){var e=m.createState.apply(void 0,arguments);return a.push(e.teardown),e},isMounted:l})},updated:function(e){i(e)},rendered:function(){s&&s()},out:function(){o=!1,a.forEach(function(e){return e()}),a=[]}};return a.push(u.teardown),n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../state":3,"../utils":4}],3:[function(e,n,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return void 0===e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r(e)};t.createState=i,t.mergeStates=function(t){function e(){return Object.keys(t).reduce(function(e,n){return e[n]=t[n].__get(),e},{})}var n=i(e());return n.__set=function(n){if("object"!==(void 0===n?"undefined":o(n)))throw new Error("Wrong merged state value. Must be key-value pairs.");Object.keys(n).forEach(function(e){t[e].__set(n[e])})},n.__get=e,Object.keys(t).forEach(function(e){t[e].onUpdate().pipe(n.__triggerListeners)}),n};var y=e("./utils");function v(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}var u=0,c=function(){return"@@s"+ ++u},f=function(d,n){var p=[];return{add:function(e,n){p.push({type:e,func:n})},process:function(f){var a=0,s=n();function l(){return++a<p.length?e():s}function e(){var e=p[a],n=e.type,t=e.func;switch(n){case"pipe":var r=(t[0]||function(){}).apply(void 0,[s].concat(v(f)));return(0,y.isPromise)(r)?r.then(l):l();case"map":return s=(t[0]||function(e){return e}).apply(void 0,[s].concat(v(f))),(0,y.isPromise)(s)?s.then(function(e){return s=e,l()}):l();case"mutate":return s=(t[0]||function(e,n){return n}).apply(void 0,[s].concat(v(f))),(0,y.isPromise)(s)?s.then(function(e){return d(s=e),l()}):(d(s),l());case"filter":var o=t[0].apply(t,[s].concat(v(f)));return(0,y.isPromise)(o)?o.then(function(e){return e||(a=p.length),l()}):(o||(a=p.length),l());case"fork":var u=(s=t.map(function(e){return e.apply(void 0,[s].concat(v(f)))})).filter(y.isPromise);return 0<u.length?Promise.all(u).then(function(){return s.forEach(function(e,n){(0,y.isPromise)(e)&&e.then(function(e){return s[n]=e})}),l()}):l();case"branch":var i=t[0].apply(t,[s].concat(v(f))),c=function(e){if(e){var n=t[1].apply(t,[s].concat(v(f)));return a=p.length,(0,y.isPromise)(n)?n.then(l):l()}return l()};return(0,y.isPromise)(i)?i.then(c):c(i);case"cancel":return a=-1,p=[],s}throw new Error('Unsupported method "'+n+'".')}return 0<p.length?e():s},cancel:function(){p=[]}}};function i(e){function o(e,n){function o(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return u.process(n)}var u=f(i.__set,i.__get);return u.add(e,n),t.forEach(function(r){o[r]=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return u.add(r,n),o}}),r.push(u),o}var n=e,t=["pipe","map","mutate","filter","fork","branch","cancel"],i={},r=[],u=[];return i.__id=c(),i.__get=function(){return n},i.__set=function(e){n=e,i.__triggerListeners()},i.__triggerListeners=function(){return u.forEach(function(e){return e()})},i.__listeners=function(){return u},i.teardown=function(){t.forEach(function(e){return i[e]=function(){}}),r.forEach(function(e){return e.cancel()}),r=[],u=[]},i.onUpdate=function(){var e=o("pipe",[]);return u.push(e),e},t.forEach(function(r){i[r]=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return o(r,n)}}),i}},{"./utils":4}],4:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.isGenerator=function(e){return e&&"function"==typeof e.next},t.isPromise=function(e){return e&&"function"==typeof e.then},t.getFuncName=function(e){if(e.name)return e.name;var n=/^function\s+([\w\$]+)\s*\(/.exec(e.toString());return n?n[1]:"unknown"}},{}]},{},[1])(1)});