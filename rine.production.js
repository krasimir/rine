!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Rine=e()}}(function(){return function o(i,c,a){function f(t,e){if(!c[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(s)return s(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var u=c[t]={exports:{}};i[t][0].call(u.exports,function(e){return f(i[t][1][e]||e)},u,u.exports,o,i,c,a)}return c[t].exports}for(var s="function"==typeof require&&require,e=0;e<a.length;e++)f(a[e]);return f}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.react=n.compose=n.merge=n.state=void 0;var r,u=e("./state"),o=e("./react"),i=(r=o)&&r.__esModule?r:{default:r},c=e("./utils");n.state=u.createState,n.merge=u.mergeStates,n.compose=c.compose,n.react={routine:i.default}},{"./react":2,"./state":4,"./utils":6}],2:[function(r,e,u){(function(e){"use strict";Object.defineProperty(u,"__esModule",{value:!0});var d=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,u=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){u=!0,o=e}finally{try{!r&&c.return&&c.return()}finally{if(u)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};u.default=function(f,s){void 0===s&&(s=f,f=function(){});function t(e){var t=(0,p.useState)(null),n=d(t,2),r=n[0],u=n[1],o=(0,p.useState)({content:null,done:function(){}}),i=d(o,2),c=i[0],a=i[1];return(0,p.useEffect)(function(){r&&r.update(e)},[e]),(0,p.useEffect)(function(){r&&c.done()},[c]),(0,p.useEffect)(function(){return r=(0,m.default)(f,function(e,t){a(null===e?{content:null,done:t}:{content:y.default.createElement(s,e),done:t})}),null!==l&&r.withState(l),u(r),r.in(e),function(){r.out()}},[]),c.content}var l=null;return t.displayName="Routine("+(0,n.getFuncName)(f)+")",t.withState=function(e){return l=e,t},t};var p="undefined"!=typeof window?window.React:void 0!==e?e.React:null,y=t(p),n=r("../utils"),m=t(r("../routine"));function t(e){return e&&e.__esModule?e:{default:e}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../routine":3,"../utils":6}],3:[function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(n,"__esModule",{value:!0});var h="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return void 0===e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r(e)},_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n.default=function(n,e){void 0===e&&(e=n,n=w);var r={},u=!1,o=[],i=null,c=null,a=null,f=w,s=(0,g.createState)({}),l=s.mutate(function(e,t){return _({},e,t)}),d=(0,g.createState)({}),p=d.mutate(function(e,t){return _({},e,t)});function y(){return u}function m(){e(s.get(),f),f=w}function v(e,t){if(null===e||void 0!==e&&"object"!==(void 0===e?"undefined":h(e)))throw new Error("The routine's \""+t+'" method must be called with a key-value object. Instead "'+e+'" passed.')}return r.__states=function(){return c},r.__triggers=function(){return a},r.isActive=y,r.in=function(e){u=!0,v(e,"in"),p(e),null!==i&&Object.keys(i).forEach(function(t){null===c&&(c={}),null===a&&(a={});var e=(0,g.isRineState)(i[t]),n=(0,g.isRineQueueTrigger)(i[t]),r=void 0;e?(r=i[t],l(b({},t,r.get())),r.stream.pipe(function(e){return l(b({},t,e))}),c[t]=r):n?(a[t]=i[t],i[t].__state.stream.filter(y).pipe(m),l(b({},t,a[t]))):(r=(0,g.createState)(i[t]),o.push(r.teardown),l(b({},t,r.get())),r.stream.filter(y).pipe(function(e){return l(b({},t,e))}),c[t]=r)});var t=n(Object.assign({render:function(t){return v(t,"render"),u?new Promise(function(e){f=e,l(t)}):Promise.resolve()},props:d,isActive:y},null!==c?_({},c,a):{}));if(t){if("object"!==(void 0===t?"undefined":h(t)))throw new Error("You must return a key-value object from your controller.");l(t)}return d.stream(),s.stream.pipe(m),m(),r},r.update=p,r.out=function(){return o.forEach(function(e){return e()}),o=[],s.teardown(),c=null,u=!1,r},r.withState=function(e){return i=e,r},r};var g=e("./state");function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(){}},{"./state":4}],4:[function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(n,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return void 0===e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r(e)};n.createState=a,n.mergeStates=function(n){function e(){return Object.keys(n).reduce(function(e,t){return e[t]=n[t].get(),e},{})}var r=a(e());return r.set=function(t){if("object"!==(void 0===t?"undefined":u(t)))throw new Error("Wrong merged state value. Must be key-value pairs.");Object.keys(t).forEach(function(e){n[e].set(t[e],!1)}),r.__triggerListeners()},r.get=e,Object.keys(n).forEach(function(e){n[e].stream.pipe(function(){r.__triggerListeners()})}),r},n.createStream=function(e){return a(e).stream},n.isRineState=function(e){return e&&!0===e.__rine},n.isRineQueueTrigger=function(e){return e&&!0===e.__rineTrigger};var o,d=e("./utils"),i=e("./system");(o=i)&&o.__esModule;function p(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var c=0,y=function(e){return"@@"+e+ ++c},m=["pipe","map","mutate","filter","parallel","cancel","mapToKey"];function v(s,e,t){var r=2<arguments.length&&void 0!==t?t:function(){},l={index:0,result:e(),id:y("q"),items:[],add:function(e,t){this.items.push({type:e,func:t,name:t.map(d.getFuncName)})},process:function(){for(var e=arguments.length,i=Array(e),t=0;t<e;t++)i[t]=arguments[t];var c=l.items,a=function(){return l.items=[]};function f(){return l.index++,l.index<c.length?n():(r(l),l.result)}function n(){var e=c[l.index],t=e.type,n=e.func;switch(t){case"pipe":var r=(n[0]||function(){}).apply(void 0,[l.result].concat(i));return(0,d.isPromise)(r)?r.then(f):f();case"map":return l.result=(n[0]||function(e){return e}).apply(void 0,[l.result].concat(i)),(0,d.isPromise)(l.result)?l.result.then(function(e){return l.result=e,f()}):f();case"mapToKey":return l.result=function(e){return function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n[0],e)}.apply(void 0,[l.result].concat(i)),f();case"mutate":return l.result=(n[0]||function(e,t){return t}).apply(void 0,[l.result].concat(i)),(0,d.isPromise)(l.result)?l.result.then(function(e){return l.result=e,s(l.result),f()}):(s(l.result),f());case"filter":var u=n[0].apply(n,[l.result].concat(i));return(0,d.isPromise)(u)?u.then(function(e){return e||(l.index=c.length),f()}):(u||(l.index=c.length),f());case"parallel":l.result=n.map(function(e){return e.apply(void 0,[l.result].concat(i))});var o=l.result.filter(d.isPromise);return 0<o.length?Promise.all(o).then(function(){return l.result.forEach(function(e,t){(0,d.isPromise)(e)&&e.then(function(e){return l.result[t]=e})}),f()}):f();case"cancel":return l.index=-1,a(),l.result}throw new Error('Unsupported method "'+t+'".')}return(l.index=0)<c.length?n():l.result},cancel:function(){this.items=[]}};return l}function a(e){var t=e,a={},f=[],s=[],l=!0;function d(){return function(){0<arguments.length?a.set(arguments.length<=0?void 0:arguments[0]):a.__triggerListeners()}}function n(e,u){function c(e,t,n){function u(){if(!1===l)return a.get();var r=v(a.set,a.get,function(n){return f=f.filter(function(e){var t=e.id;return n.id!==t})});return f.push(r),u.__itemsToCreate.forEach(function(e){var t=e.type,n=e.func;return r.add(t,n)}),r.process.apply(r,arguments)}var o=0<arguments.length&&void 0!==e?e:[],i=t,r=2<arguments.length&&void 0!==n?n:null;return u.id=y("t"),u.stream=d(),u.__rineTrigger=!0,u.__itemsToCreate=[].concat(p(o)),u.__state=a,m.forEach(function(r){u[r]=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c([].concat(p(o),[{type:r,func:t}]),i,u)},u.stream[r]=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c([].concat(p(o),[{type:r,func:t}]),!0,u)}}),["set","get","teardown"].forEach(function(e){u[e]=function(){throw new Error('"'+e+'" is not a queue method but a method of the state object.')}}),u.test=function(e){var r=c([].concat(p(o)),i,u),n={setValue:function(e){r.__itemsToCreate=[{type:"map",func:[function(){return e}]}].concat(p(r.__itemsToCreate))},swap:function(e,t,n){Array.isArray(t)||(t=[t]),r.__itemsToCreate[e].func=t,n&&(r.__itemsToCreate[e].type=n)},swapFirst:function(e,t){n.swap(0,e,t)},swapLast:function(e,t){n.swap(r.__itemsToCreate.length-1,e,t)}};return e(n),r},i&&(s.push(u),r&&function(e){var t=e.id;s=s.filter(function(e){return e.id!==t})}(r)),u}m.forEach(function(r){e[r]=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c([{type:r,func:t}],u)}})}return a.__rine=!0,a.id=y("s"),a.__triggerListeners=function(){return s.forEach(function(e){return e()})},a.__listeners=function(){return s},a.__queues=function(){return f},a.active=function(){return l},a.get=function(){return t},a.set=function(e){t=e,1<arguments.length&&void 0!==arguments[1]&&!arguments[1]||a.__triggerListeners()},a.teardown=function(){f.forEach(function(e){return e.cancel()}),f=[],l=!(s=[])},a.stream=d(),n(a),n(a.stream,!0),a}},{"./system":5,"./utils":6}],5:[function(e,t,n){"use strict";function r(e){return{value:e.__get(),queues:e.__queues().map(function(e){return{index:e.index,result:e.result,items:e.items.map(function(e){var t=e.type;return e.name.join(",")+"("+t+")"})}})}}Object.defineProperty(n,"__esModule",{value:!0});var u={__states:[],onStateCreated:function(e){this.__states.push(e)},onStateTeardown:function(t){this.__states=this.__states.filter(function(e){return e.id===t.id})},snapshot:function(){return this.__states.map(r)}};n.default=u},{}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.isPromise=function(e){return e&&"function"==typeof e.then},n.getFuncName=function(e){if(e.name)return e.name;var t=/^function\s+([\w\$]+)\s*\(/.exec(e.toString());return t?t[1]:"unknown"},n.compose=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.forEach(function(e){return e.apply(void 0,t)})}}},{}]},{},[1])(1)});