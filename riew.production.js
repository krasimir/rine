!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Riew=e()}}(function(){return function u(i,a,f){function c(t,e){if(!a[t]){if(!i[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(s)return s(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=a[t]={exports:{}};i[t][0].call(o.exports,function(e){return c(i[t][1][e]||e)},o,o.exports,u,i,a,f)}return a[t].exports}for(var s="function"==typeof require&&require,e=0;e<f.length;e++)c(f[e]);return c}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.react=r.riew=r.merge=r.state=void 0;var n=e("./state"),o=i(e("./riew")),u=i(e("./react"));function i(e){return e&&e.__esModule?e:{default:e}}r.state=n.createState,r.merge=n.mergeStates,r.riew=o.default,r.react={riew:u.default}},{"./react":2,"./riew":4,"./state":5}],2:[function(n,e,u){(function(e){"use strict";Object.defineProperty(u,"__esModule",{value:!0});var y=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw u}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};u.default=function(l){var d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:r;return function n(e,t){function r(t){var e=(0,v.useState)(null),r=y(e,2),n=r[0],o=r[1],u=(0,v.useState)({content:null,done:function(){}}),i=y(u,2),a=i[0],f=i[1];return(0,v.useEffect)(function(){n&&n.update(t)},[t]),(0,v.useEffect)(function(){n&&a.done()},[a]),(0,v.useEffect)(function(){var e;n=(0,m.default)(function(e,t){f(null===e?{content:null,done:t}:{content:p.default.createElement(l,e),done:t})},d),null!==c&&(n=n.with(c)),null!==s&&(n=(e=n).withState.apply(e,function(e){{if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}}(s)));return o(n),n.in(t),function(){n.out()}},[]),a.content}var c=0<arguments.length&&void 0!==e?e:null,s=1<arguments.length&&void 0!==t?t:null;return r.displayName="Riew("+(0,o.getFuncName)(d)+")",r.with=function(e){return n(e)},r.withState=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n(null,t)},r}(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{})};var v="undefined"!=typeof window?window.React:void 0!==e?e.React:null,p=t(v),o=n("../utils"),m=t(n("../riew"));function t(e){return e&&e.__esModule?e:{default:e}}var r=function(){}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../riew":4,"../utils":6}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={__resources:{},__resolver:function(e){if(this.__resources[e])return this.__resources[e];throw new Error('"'+e+'" is missing in the registry.')},__dissolver:function(e){return delete this.__resources[e],e},add:function(e,t){this.__resources[e]=t},get:function(e){return this.__resolver(e)},free:function(e){return this.__dissolver(e)},custom:function(e){var t=e.resolver,r=e.dissolver;this.__resolver=t,this.__dissolver=r}};r.default=n},{}],4:[function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(r,"__esModule",{value:!0});var _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)};r.default=function o(u){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:A;var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};var r={};var n=!1;var f=[];var c=A;var s=function(){return n};var l=(0,b.createState)({});var d=l.mutate(function(e,t){return _({},e,t)});var y=(0,b.createState)({});var v=y.mutate(function(e,t){return _({},e,t)});var p=(0,b.createState)({render:function(t){return T(t,"render"),n?new Promise(function(e){c=e,v(t)}):Promise.resolve()},props:l,isActive:s});var m=p.mutate(function(e,t){return _({},e,t)});function h(){u(y.get(),c),c=A}function g(){Object.keys(a).forEach(function(t){var e=(0,b.isRiewState)(a[t]),r=(0,b.isRiewQueueTrigger)(a[t]),n=void 0;if(e)n=a[t],m(E({},t,n)),v(E({},t,n.get())),n.stream.pipe(function(e){return v(E({},t,e))});else if(r){var o=a[t];m(E({},t,o)),o.__activity()===b.IMMUTABLE?o.__state.stream.filter(s).pipe(function(){return v(E({},t,o()))})():console.warn("In the view you are not allowed to use directly a trigger that mutates the state. If you need that pass a prop from the controller to the view.")}else if("$"===t.charAt(0)&&"@"===t.charAt(1)){var u=t.substr(2,t.length);n=S.default.get(u),m(E({},u,n)),v(E({},u,n.get())),n.stream.filter(s).pipe(function(e){return v(E({},u,e))})}else if("$"===t.charAt(0)){var i=t.substr(1,t.length);n=(0,b.createState)(a[t]),f.push(n.teardown),m(E({},i,n)),v(E({},i,n.get())),n.stream.filter(s).pipe(function(e){return v(E({},i,e))})}else m(E({},t,a[t])),v(E({},t,a[t]))})}r.isActive=s;r.in=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};n=!0,T(e,"in"),d(e),g();var t=i(p.get());if(t){if("object"!==(void 0===t?"undefined":w(t)))throw new Error("You must return a key-value object from your controller.");v(t)}return l.stream(),y.stream.pipe(h)(),r};r.update=d;r.out=function(){return f.forEach(function(e){return e()}),f=[],l.teardown(),y.teardown(),p.teardown(),n=!1,r};r.with=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return o(u,i,_({},a,j(t)))};r.withState=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=j(t);return o(u,i,Object.keys(n).reduce(function(e,t){return e["$"+t]=n[t],e},a))};r.test=function(e){return o(u,i,_({},a,e))};return r};var o,b=e("./state"),u=e("./registry"),S=(o=u)&&o.__esModule?o:{default:o};function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(){}function T(e,t){if(null===e||void 0!==e&&"object"!==(void 0===e?"undefined":w(e)))throw new Error("The riew's \""+t+'" method must be called with a key-value object. Instead "'+e+'" passed.')}function j(e){return e.reduce(function(e,t){return e=_({},e,"string"==typeof t?E({},"@"+t,!0):t)},{})}},{"./registry":3,"./state":5}],5:[function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(r,"__esModule",{value:!0}),r.MUTABLE=r.IMMUTABLE=void 0;var o="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)};r.createState=l,r.mergeStates=function(r){function e(){return Object.keys(r).reduce(function(e,t){return e[t]=r[t].get(),e},{})}var n=l(e());return n.set=function(t){if("object"!==(void 0===t?"undefined":o(t)))throw new Error("Wrong merged state value. Must be key-value pairs.");Object.keys(t).forEach(function(e){r[e].set(t[e],!1)}),n.__triggerListeners()},n.get=e,Object.keys(r).forEach(function(e){r[e].stream.pipe(function(){n.__triggerListeners()})}),n},r.createStream=function(e){return l(e).stream},r.isRiewState=function(e){return e&&!0===e.__riew},r.isRiewQueueTrigger=function(e){return e&&!0===e.__riewTrigger};var u,d=e("./utils"),i=e("./registry"),a=(u=i)&&u.__esModule?u:{default:u};function v(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var f=r.IMMUTABLE="IMMUTABLE",c=r.MUTABLE="MUTABLE",s=0,p=function(e){return"@@"+e+ ++s},m=["pipe","map","mutate","filter","parallel","cancel","mapToKey"],h=function(e){var t=!0,r=!1,n=void 0;try{for(var o,u=e[Symbol.iterator]();!(t=(o=u.next()).done);t=!0){if("mutate"===o.value.type)return c}}catch(e){r=!0,n=e}finally{try{!t&&u.return&&u.return()}finally{if(r)throw n}}return f};function g(s,e,t){var n=2<arguments.length&&void 0!==t?t:function(){},l={index:0,result:e(),id:p("q"),items:[],add:function(e,t){this.items.push({type:e,func:t,name:t.map(d.getFuncName)})},process:function(){for(var e=arguments.length,i=Array(e),t=0;t<e;t++)i[t]=arguments[t];var a=l.items,f=function(){return l.items=[]};function c(){return l.index++,l.index<a.length?r():(n(l),l.result)}function r(){var e=a[l.index],t=e.type,r=e.func;switch(t){case"pipe":var n=(r[0]||function(){}).apply(void 0,[l.result].concat(i));return(0,d.isPromise)(n)?n.then(c):c();case"map":return l.result=(r[0]||function(e){return e}).apply(void 0,[l.result].concat(i)),(0,d.isPromise)(l.result)?l.result.then(function(e){return l.result=e,c()}):c();case"mapToKey":return l.result=function(e){return function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},r[0],e)}.apply(void 0,[l.result].concat(i)),c();case"mutate":return l.result=(r[0]||function(e,t){return t}).apply(void 0,[l.result].concat(i)),(0,d.isPromise)(l.result)?l.result.then(function(e){return l.result=e,s(l.result),c()}):(s(l.result),c());case"filter":var o=r[0].apply(r,[l.result].concat(i));return(0,d.isPromise)(o)?o.then(function(e){return e||(l.index=a.length),c()}):(o||(l.index=a.length),c());case"parallel":l.result=r.map(function(e){return e.apply(void 0,[l.result].concat(i))});var u=l.result.filter(d.isPromise);return 0<u.length?Promise.all(u).then(function(){return l.result.forEach(function(e,t){(0,d.isPromise)(e)&&e.then(function(e){return l.result[t]=e})}),c()}):c();case"cancel":return l.index=-1,f(),l.result}throw new Error('Unsupported method "'+t+'".')}return(l.index=0)<a.length?r():l.result},cancel:function(){this.items=[]}};return l}function l(e){var t=e,f={},c=[],s=[],l=!0,r=void 0;function d(){return function(){0<arguments.length?f.set(arguments.length<=0?void 0:arguments[0]):f.__triggerListeners()}}function y(e,t,r){function o(){if(!1===l)return f.get();var n=g(f.set,f.get,function(r){return c=c.filter(function(e){var t=e.id;return r.id!==t})});return c.push(n),o.__itemsToCreate.forEach(function(e){var t=e.type,r=e.func;return n.add(t,r)}),n.process.apply(n,arguments)}function n(e,o,u){m.forEach(function(n){e[n]=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return y([].concat(v(i),[{type:n,func:t}]),u,o)}})}var i=0<arguments.length&&void 0!==e?e:[],u=t,a=2<arguments.length&&void 0!==r?r:null;return o.id=p("t"),o.stream=d(),o.__riewTrigger=!0,o.__itemsToCreate=[].concat(v(i)),o.__state=f,o.__activity=function(){return h(o.__itemsToCreate)},n(o,o,u),n(o.stream,o,!0),["set","get","teardown"].forEach(function(e){o[e]=function(){throw new Error('"'+e+'" is not a queue method but a method of the state object.')}}),o.test=function(e){var n=y([].concat(v(i)),u,o),r={setValue:function(e){n.__itemsToCreate=[{type:"map",func:[function(){return e}]}].concat(v(n.__itemsToCreate))},swap:function(e,t,r){Array.isArray(t)||(t=[t]),n.__itemsToCreate[e].func=t,r&&(n.__itemsToCreate[e].type=r)},swapFirst:function(e,t){r.swap(0,e,t)},swapLast:function(e,t){r.swap(n.__itemsToCreate.length-1,e,t)}};return e(r),n},u&&(s.push(o),a&&function(e){var t=e.id;s=s.filter(function(e){return e.id!==t})}(a)),o}function n(e,o){m.forEach(function(n){e[n]=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return y([{type:n,func:t}],o)}})}return f.id=p("s"),f.__riew=!0,f.__triggerListeners=function(){return s.forEach(function(e){return e()})},f.__listeners=function(){return s},f.__queues=function(){return c},f.active=function(){return l},f.get=function(){return t},f.set=function(e){t=e,1<arguments.length&&void 0!==arguments[1]&&!arguments[1]||f.__triggerListeners()},f.teardown=function(){c.forEach(function(e){return e.cancel()}),c=[],l=!(s=[]),r&&a.default.free(r)},f.export=function(e){return r&&a.default.free(r),a.default.add(r=e,f),f},f.stream=d(),n(f),n(f.stream,!0),f}},{"./registry":3,"./utils":6}],6:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.isPromise=function(e){return e&&"function"==typeof e.then},r.getFuncName=function(e){if(e.name)return e.name;var t=/^function\s+([\w\$]+)\s*\(/.exec(e.toString());return t?t[1]:"unknown"}},{}]},{},[1])(1)});