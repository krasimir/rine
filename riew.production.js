!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Riew=e()}}(function(){return function e(t,r,n){function u(o,a){if(!r[o]){if(!t[o]){var f="function"==typeof require&&require;if(!a&&f)return f(o,!0);if(i)return i(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var s=r[o]={exports:{}};t[o][0].call(s.exports,function(e){return u(t[o][1][e]||e)},s,s.exports,e,t,r,n)}return r[o].exports}for(var i="function"==typeof require&&require,o=0;o<n.length;o++)u(n[o]);return u}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.parallel=r.serial=r.compose=r.registry=r.react=r.riew=r.merge=r.state=void 0;var n=e("./utils");Object.defineProperty(r,"compose",{enumerable:!0,get:function(){return n.compose}}),Object.defineProperty(r,"serial",{enumerable:!0,get:function(){return n.serial}}),Object.defineProperty(r,"parallel",{enumerable:!0,get:function(){return n.parallel}});var u=e("./state"),i=f(e("./riew")),o=f(e("./react")),a=f(e("./registry"));function f(e){return e&&e.__esModule?e:{default:e}}r.state=u.createState,r.merge=u.mergeStates,r.riew=i.default,r.react={riew:o.default},r.registry=a.default},{"./react":2,"./registry":3,"./riew":4,"./state":7,"./utils":14}],2:[function(e,t,r){(function(t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,u=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){u=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(u)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};r.default=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),f=1;f<t;f++)r[f-1]=arguments[f];return function t(){var f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=function(t){var o=(0,u.useState)(null),s=n(o,2),l=s[0],d=s[1],y=(0,u.useState)(null),v=n(y,2),p=v[0],m=v[1];return(0,u.useEffect)(function(){l&&l.update(t)},[t]),(0,u.useEffect)(function(){var n;(l=a.default.apply(void 0,[function(t){m(null===t?null:i.default.createElement(e,t))}].concat(r)),f&&f.length>0)&&(l=(n=l).with.apply(n,c(f)));return d(l),l.mount(t),function(){l.unmount()}},[]),p};return s.displayName="Riew("+(0,o.getFuncName)(e)+")",s.with=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return t(r)},s}()};var u="undefined"!=typeof window?window.React:void 0!==t?t.React:null,i=f(u),o=e("../utils"),a=f(e("../riew"));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../riew":4,"../utils":14}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={__resources:{},__resolver:function(e){if(this.__resources[e])return this.__resources[e];throw new Error('"'+e+'" is missing in the registry.')},__dissolver:function(e){return delete this.__resources[e],e},add:function(e,t){this.__resources[e]=t},get:function(e){return this.__resolver(e)},free:function(e){return this.__dissolver(e)},custom:function(e){var t=e.resolver,r=e.dissolver;this.__resolver=t,this.__dissolver=r},reset:function(){this.__resources={}}};r.default=n},{}],4:[function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(r,"__esModule",{value:!0});var u=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,u=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){u=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(u)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)};r.default=function e(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];var a={};var c=!1;var p=[];var m=[];var h=[];var g={};var b=(0,f.createState)({}),_=u(b,1),w=_[0];var A=(0,f.createState)({}),S=u(A,1),O=S[0];var j=(0,f.createState)({}),P=u(j,1),E=P[0];var T=function(){return c};var x=O.mutate(function(e,t){var r=i({},e);return t&&Object.keys(t).forEach(function(e){if((0,f.isRiewQueueTrigger)(t[e])&&!t[e].isMutating()){var n=t[e];r[e]=n(),u=n.state,m.find(function(e){return e.state.id===u.id})||m.push(n.pipe(function(){return M(d({},e,n()))}).subscribe())}else r[e]=t[e];var u}),r});var M=x.filter(T).pipe(function(e){return t(e)});var C=E.mutate(v);var q=w.mutate(v);C({state:function(){var e=f.createState.apply(void 0,arguments);return p.push(e),e},render:function(e){return y(e,"The `render` method"),M(e)},isActive:T,props:w});function I(){Object.keys(g).forEach(function(e){var t=void 0;"@"===e.charAt(0)?(e=e.substr(1,e.length),t=s.default.get(e)):t=g[e],x(d({},e,t)),C(d({},e,t))})}a.isActive=T;a.mount=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};y(e,"The `mount` method"),q(e),x(e),I();var t=l.parallel.apply(void 0,n)(E()),r=function(e){return h=e||[]};return(0,l.isPromise)(t)?t.then(r):r(t),c=!0,M(),a};a.update=function(e){M(e),q(e)};a.unmount=function(){return c=!1,O.teardown(),E.teardown(),p.forEach(function(e){return e.teardown()}),p=[],h.filter(function(e){return"function"==typeof e}).forEach(function(e){return e()}),h=[],m.forEach(function(e){return e.unsubscribe()}),m=[],a};a.__setExternals=function(e){g=i({},g,e.reduce(function(e,t){return e=i({},e,"string"==typeof t?d({},"@"+t,!0):t)},{}))};a.with=function(){for(var r=arguments.length,u=Array(r),i=0;i<r;i++)u[i]=arguments[i];var o=e.apply(void 0,[t].concat(n));return o.__setExternals(u),o};a.test=function(r){var u=e.apply(void 0,[t].concat(n));return u.__setExternals([r]),u};return a};var a,f=e("./state"),c=e("./registry"),s=(a=c)&&a.__esModule?a:{default:a},l=e("./utils");function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(null===e||void 0!==e&&"object"!==(void 0===e?"undefined":o(e)))throw new Error(t+' must be called with a key-value object. Instead "'+e+'" passed.');return e}var v=function(e,t){return i({},e,t)}},{"./registry":3,"./state":7,"./utils":14}],5:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var t={},r=!0,n=e,u=[],a=[];return t.id=(0,o.getId)("s"),t.triggerListeners=function(){u.forEach(function(e){return e()})},t.get=function(){return n},t.set=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],u=(0,i.default)(n,e);n=e,r&&!u&&t.triggerListeners()},t.teardown=function(){a.forEach(function(e){return e.teardown()}),a=[],u=[],r=!1},t.addQueue=function(e){a.push(e)},t.removeQueue=function(e){a=a.filter(function(t){var r=t.id;return e.id!==r})},t.isActive=function(){return r},t.createdQueues=function(){return a},t.listeners=function(){return u},t.addListener=function(e){u.push(e)},t.removeListener=function(e){u=u.filter(function(t){return t.id!==e.id})},t};var n,u=e("fast-deep-equal"),i=(n=u)&&n.__esModule?n:{default:n},o=e("../utils")},{"../utils":14,"fast-deep-equal":15}],6:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return function(t,r,u,i){var o=e.apply(void 0,[t].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(r)));return(0,n.isPromise)(o)?o.then(function(e){return e||(i.index=i.items.length),u(t)}):(o||(i.index=i.items.length),u(t))}};var n=e("../utils")},{"../utils":14}],7:[function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(r,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)},i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,u=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){u=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(u)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};r.createState=l,r.mergeStates=function(e){var t=function(){return Object.keys(e).reduce(function(t,r){var n=i(e[r],1)[0];return t[r]=n(),t},{})},r=l(t());return(0,a.implementIterable)(r,r.map(t),r.mutate(function(t,r){if("object"!==(void 0===r?"undefined":u(r)))throw new Error("Wrong merged state value. Must be key-value pairs.");return Object.keys(e).reduce(function(t,n){var u=i(e[n],2),a=u[0],f=u[1];return n in r&&!(0,o.default)(r[n],a())?(f(r[n]),t[n]=r[n]):t[n]=a(),t},{})})),Object.keys(e).forEach(function(t){e[t].pipe(function(e){(0,i(r,2)[1])(function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}({},t,e))}).subscribe()}),r},r.isRiewQueueTrigger=function(e){return e&&!0===e.__riewTrigger};var o=s(e("fast-deep-equal")),a=e("../utils"),f=s(e("./core")),c=s(e("./trigger"));function s(e){return e&&e.__esModule?e:{default:e}}function l(e){return(0,c.default)((0,f.default)(e))()}},{"../utils":14,"./core":5,"./trigger":13,"fast-deep-equal":15}],8:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return function(t,r,u){var i=(e||function(e){return e}).apply(void 0,[t].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(r)));return(0,n.isPromise)(i)?i.then(u):u(i)}};var n=e("../utils")},{"../utils":14}],9:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return function(t,r,n){return n(function(t){return function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}({},e,t)}.apply(void 0,[t].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(r))))}}},{}],10:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return function(t,r,u,i){var o=(e||function(e,t){return t}).apply(void 0,[t].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(r)));return(0,n.isPromise)(o)?o.then(function(e){return i.setStateValue(e),u(e)}):(i.setStateValue(o),u(o))}};var n=e("../utils")},{"../utils":14}],11:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return function(t,r,u){var i=(e||function(){}).apply(void 0,[t].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(r)));return(0,n.isPromise)(i)?i.then(function(){return u(t)}):u(t)}};var n=e("../utils")},{"../utils":14}],12:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},u=arguments[3],i={index:0,setStateValue:e,getStateValue:t,result:t(),id:(0,n.getId)("q"),items:[],add:function(e,t){this.items.push({type:e,func:t,name:t.map(n.getFuncName)})},process:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=i.items;function a(e){return i.result=e,i.index++,i.index<o.length?f():(r(i),i.result)}function f(){var e=o[i.index],r=e.type,n=e.func,f=u[r];if(f)return f(i,n,t,a);throw new Error('Unsupported method "'+r+'".')}return i.index=0,o.length>0?f():i.result},teardown:function(){this.items=[]}};return i};var n=e("../utils")},{"../utils":14}],13:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var t=[],r={};return function l(){var y=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],v=void 0;function p(e,u){t.push(e),r[e]=function(e,t,r,i){var o=u.apply(void 0,d(t))(e.result,r,i,e);return(0,n.isPromise)(o)?o.then(i):i(o)}}var m=function t(){if(!e.isActive()||0===t.__itemsToCreate.length)return e.get();var n=(0,s.default)(e.set,e.get,e.removeQueue,r);return e.addQueue(n),t.__itemsToCreate.forEach(function(e){var t=e.type,r=e.func;return n.add(t,r)}),n.process.apply(n,arguments)};return p("pipe",i.default),p("map",o.default),p("mapToKey",a.default),p("mutate",f.default),p("filter",c.default),(0,n.implementIterable)(m),m.id=(0,n.getId)("t"),m.state=e,m.__riewTrigger=!0,m.__itemsToCreate=[].concat(d(y)),m.__listeners=e.listeners,m.__queues=e.createdQueues,t.forEach(function(e){m[e]=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return l([].concat(d(m.__itemsToCreate),[{type:e,func:r}]))}}),m.define=function(e,t){return p(e,t),m[e]=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return l([].concat(d(m.__itemsToCreate),[{type:e,func:r}]))},m},m.isMutating=function(){return!!m.__itemsToCreate.find(function(e){return"mutate"===e.type})},m.subscribe=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(m.isMutating())throw new Error("You should not subscribe a trigger that mutates the state. This will lead to endless recursion.");return t&&m(),e.addListener(m),m},m.unsubscribe=function(){return e.removeListener(m),m},m.cancel=function(){return m.__itemsToCreate=[],t.forEach(function(e){return m[e]=function(){return m}}),m},m.teardown=function(){return e.teardown(),v&&u.default.free(v),m},m.export=function(e){return v&&u.default.free(v),u.default.add(v=e,m),m},m.isActive=function(){return e.isActive()},m.test=function(e){var t=l([].concat(d(m.__itemsToCreate))),r={setValue:function(e){t.__itemsToCreate=[{type:"map",func:[function(){return e}]}].concat(d(t.__itemsToCreate))},swap:function(e,r,n){Array.isArray(r)||(r=[r]),t.__itemsToCreate[e].func=r,n&&(t.__itemsToCreate[e].type=n)},swapFirst:function(e,t){r.swap(0,e,t)},swapLast:function(e,n){r.swap(t.__itemsToCreate.length-1,e,n)}};return e(r),t},m}};var n=e("../utils"),u=l(e("../registry")),i=l(e("./pipe")),o=l(e("./map")),a=l(e("./mapToKey")),f=l(e("./mutate")),c=l(e("./filter")),s=l(e("./queue"));function l(e){return e&&e.__esModule?e:{default:e}}function d(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}},{"../registry":3,"../utils":14,"./filter":6,"./map":8,"./mapToKey":9,"./mutate":10,"./pipe":11,"./queue":12}],14:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=r.isPromise=function(e){return e&&"function"==typeof e.then},u=(r.isObjectLiteral=function(e){return!!e&&e.constructor==={}.constructor},r.getFuncName=function(e){if(e.name)return e.name;var t=/^function\s+([\w\$]+)\s*\(/.exec(e.toString());return t?t[1]:"unknown"},r.compose=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){var r=!1,u=function(){},i=[].concat(t);return function t(){if(0!==i.length){var o=i.shift()(e);n(o)?(r=!0,o.then(function(r){e=r,t()})):(e=o,t())}else u(e)}(),r?new Promise(function(e){return u=e}):e}},r.serial=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){var r=!1,u=function(){},i=[],o=[].concat(t);return function t(){if(0!==o.length){var a=o.shift()(e);n(a)?(r=!0,a.then(function(e){i.push(e),t()})):(i.push(a),t())}else u(i)}(),r?new Promise(function(e){return u=e}):i}},r.parallel=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){var r=!1,u=[],i=[].concat(t);return function t(){if(0!==i.length){var o=i.shift()(e);n(o)&&(r=!0),u.push(o),t()}}(),r?Promise.all(u.map(function(e){return n(e)?e:Promise.resolve(e)})):u}},r.implementIterable=function(e,t,r){"undefined"!=typeof Symbol&&void 0!==Symbol.iterator&&(e[Symbol.iterator]=function(){var n=[t||e.map(),r||e.mutate(),e],u=0;return{next:function(){return{value:n[u++],done:u>n.length}}}})},0);r.getId=function(e){return"@@"+e+ ++u}},{}],15:[function(e,t,r){"use strict";var n=Array.isArray,u=Object.keys,i=Object.prototype.hasOwnProperty;t.exports=function e(t,r){if(t===r)return!0;var o,a,f,c=n(t),s=n(r);if(c&&s){if((a=t.length)!=r.length)return!1;for(o=0;o<a;o++)if(!e(t[o],r[o]))return!1;return!0}if(c!=s)return!1;var l=t instanceof Date,d=r instanceof Date;if(l!=d)return!1;if(l&&d)return t.getTime()==r.getTime();var y=t instanceof RegExp,v=r instanceof RegExp;if(y!=v)return!1;if(y&&v)return t.toString()==r.toString();if(t instanceof Object&&r instanceof Object){var p=u(t);if((a=p.length)!==u(r).length)return!1;for(o=0;o<a;o++)if(!i.call(r,p[o]))return!1;for(o=0;o<a;o++)if(!e(t[f=p[o]],r[f]))return!1;return!0}return!1}},{}]},{},[1])(1)});