!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Riew=e()}}(function(){return function e(t,r,n){function u(i,a){if(!r[i]){if(!t[i]){var f="function"==typeof require&&require;if(!a&&f)return f(i,!0);if(o)return o(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var s=r[i]={exports:{}};t[i][0].call(s.exports,function(e){return u(t[i][1][e]||e)},s,s.exports,e,t,r,n)}return r[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)u(n[i]);return u}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.implementIterable=void 0,r.isRiewEffect=function(e){return e&&!0===e.__riewEffect},r.default=function(e,t){var r=[],s={},p=[],y=!0;function v(e,u){r.push(e),s[e]=function(e,t,r,o){var i=u.apply(void 0,l(t))(e.result,r,e);return(0,n.isPromise)(i)?i.then(o):o(i)},p.forEach(function(r){r[e]=function(){for(var n=arguments.length,u=Array(n),o=0;o<n;o++)u[o]=arguments[o];return t.fork([].concat(l(r.__itemsToCreate),[{type:e,func:u}]))}})}return v("pipe",u.default),v("map",o.default),v("mapToKey",i.default),v("mutate",a.default),v("filter",f.default),function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=function r(){if(!y||0===r.__itemsToCreate.length)return e.get();var n=(0,c.default)(e.set,e.get,function(){r.__queues=r.__queues.filter(function(e){var t=e.id;return n.id!==t}),t.out(r)},function(){t.queueStep(r)},s);return r.__queues.push(n),r.__itemsToCreate.forEach(function(e){var t=e.type,r=e.func;return n.add(t,r)}),t.in(r),n.process.apply(n,arguments)};return o.id=(0,n.getId)("e"),o.state=e,o.__queues=[],o.__riewEffect=!0,o.__itemsToCreate=[].concat(l(u)),o.__listeners=e.listeners,p.push(o),d(o),r.forEach(function(e){o[e]=function(){for(var r=arguments.length,n=Array(r),u=0;u<r;u++)n[u]=arguments[u];return t.fork([].concat(l(o.__itemsToCreate),[{type:e,func:n}]))}}),o.define=function(e,t){return v(e,t),o},o.isMutating=function(){return!!o.__itemsToCreate.find(function(e){return"mutate"===e.type})},o.subscribe=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(o.isMutating())throw new Error("You should not subscribe a effect that mutates the state. This will lead to endless recursion.");return t&&o(),e.addListener(o),o},o.unsubscribe=function(){return e.removeListener(o),o},o.cancel=function(){return o.__queues.forEach(function(e){return e.cancel()}),o},o.cleanUp=function(){o.cancel(),o.unsubscribe()},o.teardown=function(){return y=!1,e.teardown(),p.forEach(function(e){return e.cleanUp()}),p=[o],t.teardown(o),o},o.isActive=function(){return y},o.export=function(e){return t.export(o,e),o},o.test=function(e){var r=t.fork([].concat(l(o.__itemsToCreate))),n={setValue:function(e){r.__itemsToCreate=[{type:"map",func:[function(){return e}]}].concat(l(r.__itemsToCreate))},swap:function(e,t,n){Array.isArray(t)||(t=[t]),r.__itemsToCreate[e].func=t,n&&(r.__itemsToCreate[e].type=n)},swapFirst:function(e,t){n.swap(0,e,t)},swapLast:function(e,t){n.swap(r.__itemsToCreate.length-1,e,t)}};return e(n),r},o}};var n=e("./utils"),u=s(e("./queueMethods/pipe")),o=s(e("./queueMethods/map")),i=s(e("./queueMethods/mapToKey")),a=s(e("./queueMethods/mutate")),f=s(e("./queueMethods/filter")),c=s(e("./queue"));function s(e){return e&&e.__esModule?e:{default:e}}function l(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var d=r.implementIterable=function(e){"undefined"!=typeof Symbol&&void 0!==Symbol.iterator&&(e[Symbol.iterator]=function(){var t=[e.map(),e.mutate(),e],r=0;return{next:function(){return{value:t[r++],done:r>t.length}}}})}},{"./queue":6,"./queueMethods/filter":7,"./queueMethods/map":8,"./queueMethods/mapToKey":9,"./queueMethods/mutate":10,"./queueMethods/pipe":11,"./utils":15}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,u,o=(u=[],(n={}).get=function(e){var t=u.find(function(t){return t.id===e});if(t)return t;throw new Error('A node with identifier "'+e+'" is missing in the grid.')},n.add=function(e){if(!e||!e.id)throw new Error('Each node in the grid must be an object with "id" field. Instead "'+e+'" given.');return u.push(e),n},n.free=function(e){return u=u.filter(function(t){return t.id!==e}),n},n.reset=function(){return u=[]},n.nodes=function(){return u},n);r.gridAdd=function(e){return o.add(e)},r.gridFreeNode=function(e){return o.free(e.id)},r.gridReset=function(){return o.reset()},r.gridGetNode=function(e){return o.get(e)},r.gridGetNodes=function(){return o.nodes()}},{}],3:[function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(r,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,u=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){u=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(u)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=p(e("fast-deep-equal")),a=e("./state"),f=p(e("./effect")),c=p(e("./riew")),s=p(e("./react")),l=e("./grid"),d=e("./logger");function p(e){return e&&e.__esModule?e:{default:e}}var y,v,h,m=function(e){e.defineProduct("effectFactory",function(t,r){var n=(0,f.default)(t,{in:function(e){(0,l.gridAdd)(e),r(d.EFFECT_ADDED,e)},out:function(t){(0,l.gridFreeNode)(t),"__exportedAs"in t&&e.undefineProduct(t.__exportedAs),r(d.EFFECT_REMOVED,t)},queueStep:function(e){r(d.EFFECT_STEP,e)},teardown:function(t){(0,l.gridFreeNode)(t),(0,l.gridFreeNode)(t.state),"__exportedAs"in t&&e.undefineProduct(t.__exportedAs),r(d.EFFECT_TEARDOWN,t)},export:function(t,n){t.__exportedAs=n,e.defineProduct(n,function(){return t}),r(d.EFFECT_EXPORTED,t,n)},fork:function(e){return n(e)}});return n}),e.defineProduct("state",function(t,r){var n=r?e.logger.log:function(){},u=(0,a.State)(t),o=e.produce("effectFactory",u,n)();return(0,l.gridAdd)(u),n(d.STATE_CREATED,u),o}),e.defineProduct("mergeStates",function(t){var r=e.produce("state");return r.state.get=function(){return Object.keys(t).reduce(function(e,r){var n=o(t[r],1)[0];return e[r]=n(),e},{})},r.state.set=function(e){if("object"!==(void 0===e?"undefined":u(e)))throw new Error("Wrong merged state value. Must be key-value pairs.");Object.keys(e).forEach(function(r){if(!t[r])throw new Error('There is no state with key "'+r+'".');var n=o(t[r],2),u=n[0],a=n[1];(0,i.default)(e[r],u())||a(e[r])},{})},Object.keys(t).forEach(function(e){t[e].pipe(r.state.triggerListeners).subscribe()}),r}),e.defineProduct("riew",function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),u=1;u<r;u++)n[u-1]=arguments[u];var o=c.default.apply(void 0,[t].concat(n));return e.logger.log(d.RIEW_CREATED,t,n),o}),e.defineProduct("reactRiew",function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return s.default.apply(void 0,[e].concat(r))})},g=(y={},v=(0,d.createLogger)(),h={},y.defineProduct=function(e,t){if(h[e])throw new Error('An entry with name "'+e+'" already exists.');h[e]=t},y.undefineProduct=function(e){if(!h[e])throw new Error('There is no entry with name "'+e+'" to be removed.');delete h[e]},y.produce=function(e){for(var t,r=arguments.length,n=Array(r>1?r-1:0),u=1;u<r;u++)n[u-1]=arguments[u];if(!h[e])throw new Error('There is no entry with name "'+e+'".');return(t=h)[e].apply(t,n)},y.reset=function(){h={},(0,l.gridReset)(),m(y)},y.logger=v,y.grid=function(){return(0,l.gridGetNodes)()},y);m(g),r.default=g},{"./effect":1,"./grid":2,"./logger":5,"./react":12,"./riew":13,"./state":14,"fast-deep-equal":16}],4:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.harvester=r.parallel=r.serial=r.compose=r.register=r.use=r.react=r.riew=r.merge=r.internalState=r.state=void 0;var n=e("./utils");Object.defineProperty(r,"compose",{enumerable:!0,get:function(){return n.compose}}),Object.defineProperty(r,"serial",{enumerable:!0,get:function(){return n.serial}}),Object.defineProperty(r,"parallel",{enumerable:!0,get:function(){return n.parallel}});var u,o=e("./harvester"),i=(u=o)&&u.__esModule?u:{default:u};r.state=function(e){return i.default.produce("state",e,!0)},r.internalState=function(e){return i.default.produce("state",e,!1)},r.merge=function(e){return i.default.produce("mergeStates",e)},r.riew=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return i.default.produce.apply(i.default,["riew"].concat(t))},r.react={riew:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return i.default.produce.apply(i.default,["reactRiew"].concat(t))}},r.use=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return i.default.produce.apply(i.default,[e].concat(r))},r.register=function(e,t){return i.default.defineProduct(e,function(){return t})},r.harvester=i.default},{"./harvester":3,"./utils":15}],5:[function(e,t,r){t.exports=e("/Users/krasimir/Work/Krasimir/riew/src/__swap__/logger.js")},{"/Users/krasimir/Work/Krasimir/riew/src/__swap__/logger.js":17}],6:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},o=arguments[4],i={id:(0,n.getId)("q"),index:0,setStateValue:e,getStateValue:t,result:t(),items:[],add:function(e,t){this.items.push({type:e,func:t,name:t.map(n.getFuncName)})},process:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function a(e){return i.result=e,i.index++,i.index<i.items.length?f():(r(),i.result)}function f(){var e=i.items[i.index],r=e.type,n=e.func,f=o[r];if(f)return f(i,n,t,function(e){return u(i),a(e)});throw new Error('Unsupported method "'+r+'".')}return i.index=0,i.items.length>0?f():i.result},cancel:function(){i.items=[]}};return i};var n=e("./utils")},{"./utils":15}],7:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return function(t,r,u){var o=e.apply(void 0,[t].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(r)));return(0,n.isPromise)(o)?o.then(function(e){return e||(u.index=u.items.length),t}):(o||(u.index=u.items.length),t)}};var n=e("../utils")},{"../utils":15}],8:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return function(t,r){return(e||function(e){return e}).apply(void 0,[t].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(r)))}}},{}],9:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return function(t,r){return function(t){return function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}({},e,t)}.apply(void 0,[t].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(r)))}}},{}],10:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return function(t,r,u){var o=(e||function(e,t){return t}).apply(void 0,[t].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(r)));return(0,n.isPromise)(o)?o.then(function(e){return u.setStateValue(e),e}):(u.setStateValue(o),o)}};var n=e("../utils")},{"../utils":15}],11:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return function(t,r){var u=(e||function(){}).apply(void 0,[t].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(r)));return(0,n.isPromise)(u)?u.then(function(){return t}):t}};var n=e("../utils")},{"../utils":15}],12:[function(e,t,r){(function(t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,u=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){u=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(u)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};r.default=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),f=1;f<t;f++)r[f-1]=arguments[f];return function t(){var f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=function(t){var i=(0,u.useState)(null),s=n(i,2),l=s[0],d=s[1],p=(0,u.useState)(null),y=n(p,2),v=y[0],h=y[1];return(0,u.useEffect)(function(){l&&l.update(t)},[t]),(0,u.useEffect)(function(){var n;(l=a.default.apply(void 0,[function(t){h(null===t?null:o.default.createElement(e,t))}].concat(r)),f&&f.length>0)&&(l=(n=l).with.apply(n,c(f)));return d(l),l.mount(t),function(){l.unmount()}},[]),v};return s.displayName="Riew("+(0,i.getFuncName)(e)+")",s.with=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return t(r)},s}()};var u="undefined"!=typeof window?window.React:void 0!==t?t.React:null,o=f(u),i=e("../utils"),a=f(e("../riew"));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../riew":13,"../utils":15}],13:[function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(r,"__esModule",{value:!0});var u=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,u=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){u=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(u)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)};r.default=function e(t){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var p={id:(0,c.getId)("r"),name:(0,c.getFuncName)(t)};var y=!1;var v=[];var h=[];var m=[];var g={};var _=(0,a.internalState)({}),b=u(_,1),w=b[0];var A=(0,a.internalState)({}),E=u(A,1),S=E[0];var P=(0,a.internalState)({}),j=u(P,1),O=j[0];var T=function(){return y};var x=S.mutate(function(e,t){var r=o({},e);return t&&Object.keys(t).forEach(function(e){if((0,f.isRiewEffect)(t[e])&&!t[e].isMutating()){var n=t[e];r[e]=n(),u=n.state,h.find(function(e){return e.state.id===u.id})||h.push(n.pipe(function(){return M(s({},e,n()))}).subscribe())}else r[e]=t[e];var u}),r});var M=x.filter(T).pipe(function(e){t(e)});var q=O.mutate(d);var F=w.mutate(d);q({state:function(){var e=a.state.apply(void 0,arguments);return v.push(e),e},render:function(e){return l(e,"The `render` method"),M(e)},isActive:T,props:w});function k(){Object.keys(g).forEach(function(e){var t=void 0;"@"===e.charAt(0)?(e=e.substr(1,e.length),t=(0,a.use)(e)):t=g[e],x(s({},e,t)),q(s({},e,t))})}p.isActive=T;p.mount=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l(e,"The `mount` method"),F(e),x(e),k();var t=c.parallel.apply(void 0,n)(O()),r=function(e){return m=e||[]};return(0,c.isPromise)(t)?t.then(r):r(t),y=!0,M(),p};p.update=function(e){M(e),F(e)};p.unmount=function(){return y=!1,S.teardown(),O.teardown(),v.forEach(function(e){return e.teardown()}),v=[],m.filter(function(e){return"function"==typeof e}).forEach(function(e){return e()}),m=[],h.forEach(function(e){return e.unsubscribe()}),h=[],p};p.__setExternals=function(e){g=o({},g,e.reduce(function(e,t){return e=o({},e,"string"==typeof t?s({},"@"+t,!0):t)},{}))};p.with=function(){for(var r=arguments.length,u=Array(r),o=0;o<r;o++)u[o]=arguments[o];var i=e.apply(void 0,[t].concat(n));return i.__setExternals(u),i};p.test=function(r){var u=e.apply(void 0,[t].concat(n));return u.__setExternals([r]),u};return p};var a=e("./index"),f=e("./effect"),c=e("./utils");function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){if(null===e||void 0!==e&&"object"!==(void 0===e?"undefined":i(e)))throw new Error(t+' must be called with a key-value object. Instead "'+e+'" passed.');return e}var d=function(e,t){return o({},e,t)}},{"./effect":1,"./index":4,"./utils":15}],14:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.State=function(e){var t={},r=e,n=[];return t.id=(0,i.getId)("s"),t.triggerListeners=function(){n.forEach(function(e){return e()})},t.get=function(){return r},t.set=function(e){var n=(0,o.default)(r,e);r=e,n||t.triggerListeners()},t.teardown=function(){n=[]},t.listeners=function(){return n},t.addListener=function(e){n.push(e)},t.removeListener=function(e){n=n.filter(function(t){return t.id!==e.id})},t};var n,u=e("fast-deep-equal"),o=(n=u)&&n.__esModule?n:{default:n},i=e("./utils")},{"./utils":15,"fast-deep-equal":16}],15:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=r.isPromise=function(e){return e&&"function"==typeof e.then},u=(r.isObjectLiteral=function(e){return!!e&&e.constructor==={}.constructor},r.getFuncName=function(e){if(e.name)return e.name;var t=/^function\s+([\w\$]+)\s*\(/.exec(e.toString());return t?t[1]:"unknown"},r.compose=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){var r=!1,u=function(){},o=[].concat(t);return function t(){if(0!==o.length){var i=o.shift()(e);n(i)?(r=!0,i.then(function(r){e=r,t()})):(e=i,t())}else u(e)}(),r?new Promise(function(e){return u=e}):e}},r.serial=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){var r=!1,u=function(){},o=[],i=[].concat(t);return function t(){if(0!==i.length){var a=i.shift()(e);n(a)?(r=!0,a.then(function(e){o.push(e),t()})):(o.push(a),t())}else u(o)}(),r?new Promise(function(e){return u=e}):o}},r.parallel=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){var r=!1,u=[],o=[].concat(t);return function t(){if(0!==o.length){var i=o.shift()(e);n(i)&&(r=!0),u.push(i),t()}}(),r?Promise.all(u.map(function(e){return n(e)?e:Promise.resolve(e)})):u}},0);r.getId=function(e){return"@@"+e+ ++u}},{}],16:[function(e,t,r){"use strict";var n=Array.isArray,u=Object.keys,o=Object.prototype.hasOwnProperty;t.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var i,a,f,c=n(t),s=n(r);if(c&&s){if((a=t.length)!=r.length)return!1;for(i=a;0!=i--;)if(!e(t[i],r[i]))return!1;return!0}if(c!=s)return!1;var l=t instanceof Date,d=r instanceof Date;if(l!=d)return!1;if(l&&d)return t.getTime()==r.getTime();var p=t instanceof RegExp,y=r instanceof RegExp;if(p!=y)return!1;if(p&&y)return t.toString()==r.toString();var v=u(t);if((a=v.length)!==u(r).length)return!1;for(i=a;0!=i--;)if(!o.call(r,v[i]))return!1;for(i=a;0!=i--;)if(!e(t[f=v[i]],r[f]))return!1;return!0}return t!=t&&r!=r}},{}],17:[function(e,t,r){arguments[4][5][0].apply(r,arguments)},{"/Users/krasimir/Work/Krasimir/riew/src/__swap__/logger.js":17,dup:5}]},{},[4])(4)});