!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Riew=e()}}(function(){return function e(t,r,n){function u(o,a){if(!r[o]){if(!t[o]){var f="function"==typeof require&&require;if(!a&&f)return f(o,!0);if(i)return i(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var s=r[o]={exports:{}};t[o][0].call(s.exports,function(e){return u(t[o][1][e]||e)},s,s.exports,e,t,r,n)}return r[o].exports}for(var i="function"==typeof require&&require,o=0;o<n.length;o++)u(n[o]);return u}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.parallel=r.serial=r.compose=r.registry=r.react=r.riew=r.merge=r.state=void 0;var n=e("./utils");Object.defineProperty(r,"compose",{enumerable:!0,get:function(){return n.compose}}),Object.defineProperty(r,"serial",{enumerable:!0,get:function(){return n.serial}}),Object.defineProperty(r,"parallel",{enumerable:!0,get:function(){return n.parallel}});var u=e("./state"),i=f(e("./riew")),o=f(e("./react")),a=f(e("./registry"));function f(e){return e&&e.__esModule?e:{default:e}}r.state=u.createState,r.merge=u.mergeStates,r.riew=i.default,r.react={riew:o.default},r.registry=a.default},{"./react":2,"./registry":3,"./riew":4,"./state":7,"./utils":14}],2:[function(e,t,r){(function(t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,u=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){u=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(u)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};r.default=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),f=1;f<t;f++)r[f-1]=arguments[f];return function t(){var f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=function(t){var o=(0,u.useState)(null),s=n(o,2),l=s[0],d=s[1],y=(0,u.useState)(null),v=n(y,2),p=v[0],m=v[1];return(0,u.useEffect)(function(){l&&l.update(t)},[t]),(0,u.useEffect)(function(){var n;(l=a.default.apply(void 0,[function(t){m(null===t?null:i.default.createElement(e,t))}].concat(r)),f&&f.length>0)&&(l=(n=l).with.apply(n,c(f)));return d(l),l.mount(t),function(){l.unmount()}},[]),p};return s.displayName="Riew("+(0,o.getFuncName)(e)+")",s.with=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return t(r)},s}()};var u="undefined"!=typeof window?window.React:void 0!==t?t.React:null,i=f(u),o=e("../utils"),a=f(e("../riew"));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../riew":4,"../utils":14}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={__resources:{},__resolver:function(e){if(this.__resources[e])return this.__resources[e];throw new Error('"'+e+'" is missing in the registry.')},__dissolver:function(e){return delete this.__resources[e],e},add:function(e,t){this.__resources[e]=t},get:function(e){return this.__resolver(e)},free:function(e){return this.__dissolver(e)},custom:function(e){var t=e.resolver,r=e.dissolver;this.__resolver=t,this.__dissolver=r},reset:function(){this.__resources={}}};r.default=n},{}],4:[function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(r,"__esModule",{value:!0});var u=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,u=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){u=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(u)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)};r.default=function e(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];var a={};var c=!1;var p=[];var m=[];var h=[];var g={};var b=(0,f.createState)({}),_=u(b,1),w=_[0];var A=(0,f.createState)({}),S=u(A,1),O=S[0];var j=(0,f.createState)({}),P=u(j,1),E=P[0];var T=function(){return c};var x=O.mutate(function(e,t){var r=i({},e);return t&&Object.keys(t).forEach(function(e){if((0,f.isRiewQueueTrigger)(t[e])&&!t[e].isMutating()){var n=t[e];r[e]=n(),u=n.state,m.find(function(e){return e.state.id===u.id})||m.push(n.pipe(function(){return M(d({},e,n()))}).subscribe())}else r[e]=t[e];var u}),r});var M=x.filter(T).pipe(function(e){return t(e)});var C=E.mutate(v);var q=w.mutate(v);C({state:function(){var e=f.createState.apply(void 0,arguments);return p.push(e),e},render:function(e){return y(e,"The `render` method"),M(e)},isActive:T,props:w});function k(){Object.keys(g).forEach(function(e){var t=void 0;"@"===e.charAt(0)?(e=e.substr(1,e.length),t=s.default.get(e)):t=g[e],x(d({},e,t)),C(d({},e,t))})}a.isActive=T;a.mount=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};y(e,"The `mount` method"),q(e),x(e),k();var t=l.parallel.apply(void 0,n)(E()),r=function(e){return h=e||[]};return(0,l.isPromise)(t)?t.then(r):r(t),c=!0,M(),a};a.update=function(e){M(e),q(e)};a.unmount=function(){return c=!1,O.teardown(),E.teardown(),p.forEach(function(e){return e.teardown()}),p=[],h.filter(function(e){return"function"==typeof e}).forEach(function(e){return e()}),h=[],m.forEach(function(e){return e.unsubscribe()}),m=[],a};a.__setExternals=function(e){g=i({},g,e.reduce(function(e,t){return e=i({},e,"string"==typeof t?d({},"@"+t,!0):t)},{}))};a.with=function(){for(var r=arguments.length,u=Array(r),i=0;i<r;i++)u[i]=arguments[i];var o=e.apply(void 0,[t].concat(n));return o.__setExternals(u),o};a.test=function(r){var u=e.apply(void 0,[t].concat(n));return u.__setExternals([r]),u};return a};var a,f=e("./state"),c=e("./registry"),s=(a=c)&&a.__esModule?a:{default:a},l=e("./utils");function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(null===e||void 0!==e&&"object"!==(void 0===e?"undefined":o(e)))throw new Error(t+' must be called with a key-value object. Instead "'+e+'" passed.');return e}var v=function(e,t){return i({},e,t)}},{"./registry":3,"./state":7,"./utils":14}],5:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var t={},r=!0,n=e,u=[],a=[];return t.id=(0,o.getId)("s"),t.triggerListeners=function(){u.forEach(function(e){return e()})},t.get=function(){return n},t.set=function(e){var r=(0,i.default)(n,e);n=e,r||t.triggerListeners()},t.teardown=function(){a.forEach(function(e){return e.teardown()}),a=[],u=[],r=!1},t.addQueue=function(e){a.push(e)},t.removeQueue=function(e){a=a.filter(function(t){var r=t.id;return e.id!==r})},t.isActive=function(){return r},t.createdQueues=function(){return a},t.listeners=function(){return u},t.addListener=function(e){u.push(e)},t.removeListener=function(e){u=u.filter(function(t){return t.id!==e.id})},t};var n,u=e("fast-deep-equal"),i=(n=u)&&n.__esModule?n:{default:n},o=e("../utils")},{"../utils":14,"fast-deep-equal":15}],6:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return function(t,r,u,i){var o=e.apply(void 0,[t].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(r)));return(0,n.isPromise)(o)?o.then(function(e){return e||(i.index=i.items.length),u(t)}):(o||(i.index=i.items.length),u(t))}};var n=e("../utils")},{"../utils":14}],7:[function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(r,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)},i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,u=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){u=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(u)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};r.createState=c,r.mergeStates=function(e){var t=c();return t.state.get=function(){return Object.keys(e).reduce(function(t,r){var n=i(e[r],1)[0];return t[r]=n(),t},{})},t.state.set=function(t){if("object"!==(void 0===t?"undefined":u(t)))throw new Error("Wrong merged state value. Must be key-value pairs.");Object.keys(t).forEach(function(r){if(!e[r])throw new Error('There is no state with key "'+r+'".');var n=i(e[r],2),u=n[0],a=n[1];(0,o.default)(t[r],u())||a(t[r])},{})},Object.keys(e).forEach(function(r){e[r].pipe(t.state.triggerListeners).subscribe()}),t},r.isRiewQueueTrigger=function(e){return e&&!0===e.__riewTrigger};var o=f(e("fast-deep-equal")),a=f(e("./trigger"));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){return(0,a.default)(e)()}},{"./trigger":13,"fast-deep-equal":15}],8:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return function(t,r,u){var i=(e||function(e){return e}).apply(void 0,[t].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(r)));return(0,n.isPromise)(i)?i.then(u):u(i)}};var n=e("../utils")},{"../utils":14}],9:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return function(t,r,n){return n(function(t){return function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}({},e,t)}.apply(void 0,[t].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(r))))}}},{}],10:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return function(t,r,u,i){var o=(e||function(e,t){return t}).apply(void 0,[t].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(r)));return(0,n.isPromise)(o)?o.then(function(e){return i.setStateValue(e),u(e)}):(i.setStateValue(o),u(o))}};var n=e("../utils")},{"../utils":14}],11:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return function(t,r,u){var i=(e||function(){}).apply(void 0,[t].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(r)));return(0,n.isPromise)(i)?i.then(function(){return u(t)}):u(t)}};var n=e("../utils")},{"../utils":14}],12:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},u=arguments[3],i={index:0,setStateValue:e,getStateValue:t,result:t(),id:(0,n.getId)("q"),items:[],add:function(e,t){this.items.push({type:e,func:t,name:t.map(n.getFuncName)})},process:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=i.items;function a(e){return i.result=e,i.index++,i.index<o.length?f():(r(i),i.result)}function f(){var e=o[i.index],r=e.type,n=e.func,f=u[r];if(f)return f(i,n,t,a);throw new Error('Unsupported method "'+r+'".')}return i.index=0,o.length>0?f():i.result},teardown:function(){this.items=[]}};return i};var n=e("../utils")},{"../utils":14}],13:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.implementIterable=void 0,r.default=function(e){var t=(0,l.default)(e),r=[],d={};return function e(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],p=void 0;function m(e,t){r.push(e),d[e]=function(e,r,u,i){var o=t.apply(void 0,y(r))(e.result,u,i,e);return(0,n.isPromise)(o)?o.then(i):i(o)}}var h=function e(){if(!t.isActive()||0===e.__itemsToCreate.length)return t.get();var r=(0,s.default)(t.set,t.get,t.removeQueue,d);return t.addQueue(r),e.__itemsToCreate.forEach(function(e){var t=e.type,n=e.func;return r.add(t,n)}),r.process.apply(r,arguments)};return m("pipe",i.default),m("map",o.default),m("mapToKey",a.default),m("mutate",f.default),m("filter",c.default),v(h),h.id=(0,n.getId)("t"),h.state=t,h.__riewTrigger=!0,h.__itemsToCreate=[].concat(y(l)),h.__listeners=t.listeners,h.__queues=t.createdQueues,r.forEach(function(t){h[t]=function(){for(var r=arguments.length,n=Array(r),u=0;u<r;u++)n[u]=arguments[u];return e([].concat(y(h.__itemsToCreate),[{type:t,func:n}]))}}),h.define=function(t,r){return m(t,r),h[t]=function(){for(var r=arguments.length,n=Array(r),u=0;u<r;u++)n[u]=arguments[u];return e([].concat(y(h.__itemsToCreate),[{type:t,func:n}]))},h},h.isMutating=function(){return!!h.__itemsToCreate.find(function(e){return"mutate"===e.type})},h.subscribe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(h.isMutating())throw new Error("You should not subscribe a trigger that mutates the state. This will lead to endless recursion.");return e&&h(),t.addListener(h),h},h.unsubscribe=function(){return t.removeListener(h),h},h.cancel=function(){return h.__itemsToCreate=[],r.forEach(function(e){return h[e]=function(){return h}}),h},h.teardown=function(){return t.teardown(),p&&u.default.free(p),h},h.export=function(e){return p&&u.default.free(p),u.default.add(p=e,h),h},h.isActive=function(){return t.isActive()},h.test=function(t){var r=e([].concat(y(h.__itemsToCreate))),n={setValue:function(e){r.__itemsToCreate=[{type:"map",func:[function(){return e}]}].concat(y(r.__itemsToCreate))},swap:function(e,t,n){Array.isArray(t)||(t=[t]),r.__itemsToCreate[e].func=t,n&&(r.__itemsToCreate[e].type=n)},swapFirst:function(e,t){n.swap(0,e,t)},swapLast:function(e,t){n.swap(r.__itemsToCreate.length-1,e,t)}};return t(n),r},h}};var n=e("../utils"),u=d(e("../registry")),i=d(e("./pipe")),o=d(e("./map")),a=d(e("./mapToKey")),f=d(e("./mutate")),c=d(e("./filter")),s=d(e("./queue")),l=d(e("./core"));function d(e){return e&&e.__esModule?e:{default:e}}function y(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var v=r.implementIterable=function(e){"undefined"!=typeof Symbol&&void 0!==Symbol.iterator&&(e[Symbol.iterator]=function(){var t=[e.map(),e.mutate(),e],r=0;return{next:function(){return{value:t[r++],done:r>t.length}}}})}},{"../registry":3,"../utils":14,"./core":5,"./filter":6,"./map":8,"./mapToKey":9,"./mutate":10,"./pipe":11,"./queue":12}],14:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=r.isPromise=function(e){return e&&"function"==typeof e.then},u=(r.isObjectLiteral=function(e){return!!e&&e.constructor==={}.constructor},r.getFuncName=function(e){if(e.name)return e.name;var t=/^function\s+([\w\$]+)\s*\(/.exec(e.toString());return t?t[1]:"unknown"},r.compose=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){var r=!1,u=function(){},i=[].concat(t);return function t(){if(0!==i.length){var o=i.shift()(e);n(o)?(r=!0,o.then(function(r){e=r,t()})):(e=o,t())}else u(e)}(),r?new Promise(function(e){return u=e}):e}},r.serial=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){var r=!1,u=function(){},i=[],o=[].concat(t);return function t(){if(0!==o.length){var a=o.shift()(e);n(a)?(r=!0,a.then(function(e){i.push(e),t()})):(i.push(a),t())}else u(i)}(),r?new Promise(function(e){return u=e}):i}},r.parallel=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){var r=!1,u=[],i=[].concat(t);return function t(){if(0!==i.length){var o=i.shift()(e);n(o)&&(r=!0),u.push(o),t()}}(),r?Promise.all(u.map(function(e){return n(e)?e:Promise.resolve(e)})):u}},0);r.getId=function(e){return"@@"+e+ ++u}},{}],15:[function(e,t,r){"use strict";var n=Array.isArray,u=Object.keys,i=Object.prototype.hasOwnProperty;t.exports=function e(t,r){if(t===r)return!0;var o,a,f,c=n(t),s=n(r);if(c&&s){if((a=t.length)!=r.length)return!1;for(o=0;o<a;o++)if(!e(t[o],r[o]))return!1;return!0}if(c!=s)return!1;var l=t instanceof Date,d=r instanceof Date;if(l!=d)return!1;if(l&&d)return t.getTime()==r.getTime();var y=t instanceof RegExp,v=r instanceof RegExp;if(y!=v)return!1;if(y&&v)return t.toString()==r.toString();if(t instanceof Object&&r instanceof Object){var p=u(t);if((a=p.length)!==u(r).length)return!1;for(o=0;o<a;o++)if(!i.call(r,p[o]))return!1;for(o=0;o<a;o++)if(!e(t[f=p[o]],r[f]))return!1;return!0}return!1}},{}]},{},[1])(1)});