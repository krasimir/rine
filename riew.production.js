!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Riew=e()}}(function(){return function e(t,r,n){function o(i,a){if(!r[i]){if(!t[i]){var f="function"==typeof require&&require;if(!a&&f)return f(i,!0);if(u)return u(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var s=r[i]={exports:{}};t[i][0].call(s.exports,function(e){return o(t[i][1][e]||e)},s,s.exports,e,t,r,n)}return r[i].exports}for(var u="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.parallel=r.serial=r.compose=r.react=r.riew=r.merge=r.state=void 0;var n=e("./utils");Object.defineProperty(r,"compose",{enumerable:!0,get:function(){return n.compose}}),Object.defineProperty(r,"serial",{enumerable:!0,get:function(){return n.serial}}),Object.defineProperty(r,"parallel",{enumerable:!0,get:function(){return n.parallel}});var o=e("./state"),u=a(e("./riew")),i=a(e("./react"));function a(e){return e&&e.__esModule?e:{default:e}}r.state=o.createState,r.merge=o.mergeStates,r.riew=u.default,r.react={riew:i.default}},{"./react":2,"./riew":4,"./state":5,"./utils":6}],2:[function(e,t,r){(function(t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw u}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};r.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;return function r(){var f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,l=function(r){var i=(0,o.useState)(null),l=n(i,2),d=l[0],v=l[1],p=(0,o.useState)({content:null,done:function(){}}),y=n(p,2),m=y[0],h=y[1];return(0,o.useEffect)(function(){d&&d.update(r)},[r]),(0,o.useEffect)(function(){d&&m.done()},[m]),(0,o.useEffect)(function(){var n;(d=(0,a.default)(function(t,r){h(null===t?{content:null,done:r}:{content:u.default.createElement(e,t),done:r})},t),null!==f&&(d=d.with(f)),null!==s)&&(d=(n=d).withState.apply(n,c(s)));return v(d),d.in(r),function(){d.out()}},[]),m.content};return l.displayName="Riew("+(0,i.getFuncName)(t)+")",l.with=function(e){return r(e)},l.withState=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r(null,t)},l}(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})};var o="undefined"!=typeof window?window.React:void 0!==t?t.React:null,u=f(o),i=e("../utils"),a=f(e("../riew"));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var s=function(){}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../riew":4,"../utils":6}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={__resources:{},__resolver:function(e){if(this.__resources[e])return this.__resources[e];throw new Error('"'+e+'" is missing in the registry.')},__dissolver:function(e){return delete this.__resources[e],e},add:function(e,t){this.__resources[e]=t},get:function(e){return this.__resolver(e)},free:function(e){return this.__dissolver(e)},custom:function(e){var t=e.resolver,r=e.dissolver;this.__resolver=t,this.__dissolver=r}};r.default=n},{}],4:[function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(r,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)};r.default=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d;var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var u={};var i=!1;var f=[];var y=d;var m=void 0;var h=function(){return i};var g=(0,a.createState)({});var _=g.mutate(function(e,t){return o({},e,t)});var b=(0,a.createState)({});var w=function(e){var t=(m||function(e){return e})(e);(0,s.isObjectLiteral)(t)?b.set(t):b.set(e)};var S=(0,a.createState)({render:function(e){return v(e,"render"),i?new Promise(function(t){y=t,_(e)}):Promise.resolve()},props:function(e){m=e},isActive:h});var A=S.mutate(function(e,t){return o({},e,t)});function E(){t(o({},b.get(),g.get()),y),y=d}function j(){Object.keys(n).forEach(function(e){var t=(0,a.isRiewState)(n[e]),r=(0,a.isRiewQueueTrigger)(n[e]),o=void 0;if(t)o=n[e],A(l({},e,o)),_(l({},e,o.get())),o.stream.pipe(function(t){return _(l({},e,t))});else if(r){var u=n[e];A(l({},e,u)),u.__activity()===a.IMMUTABLE?u.__state.stream.filter(h).pipe(function(){return _(l({},e,u()))})():console.warn("In the view you are not allowed to use directly a trigger that mutates the state. If you need that pass a prop from the controller to the view.")}else if("$"===e.charAt(0)&&"@"===e.charAt(1)){var i=e.substr(2,e.length);o=c.default.get(i),A(l({},i,o)),_(l({},i,o.get())),o.stream.filter(h).pipe(function(e){return _(l({},i,e))})}else if("$"===e.charAt(0)){var s=e.substr(1,e.length);o=(0,a.createState)(n[e]),f.push(o.teardown),A(l({},s,o)),_(l({},s,o.get())),o.stream.filter(h).pipe(function(e){return _(l({},s,e))})}else A(l({},e,n[e])),_(l({},e,n[e]))})}u.isActive=h;u.in=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i=!0,v(e,"in"),j();var t=r(S.get());return w(e),b.stream.filter(h).pipe(E),g.stream.filter(h).pipe(E),(0,s.isObjectLiteral)(t)?_(t):E(),u};u.update=w;u.out=function(){return f.forEach(function(e){return e()}),f=[],b.teardown(),g.teardown(),S.teardown(),i=!1,u};u.with=function(){for(var u=arguments.length,i=Array(u),a=0;a<u;a++)i[a]=arguments[a];return e(t,r,o({},n,p(i)))};u.withState=function(){for(var o=arguments.length,u=Array(o),i=0;i<o;i++)u[i]=arguments[i];var a=p(u);return e(t,r,Object.keys(a).reduce(function(e,t){return e["$"+t]=a[t],e},n))};u.test=function(u){return e(t,r,o({},n,u))};return u};var i,a=e("./state"),f=e("./registry"),c=(i=f)&&i.__esModule?i:{default:i},s=e("./utils");function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(){}function v(e,t){if(null===e||void 0!==e&&"object"!==(void 0===e?"undefined":u(e)))throw new Error("The riew's \""+t+'" method must be called with a key-value object. Instead "'+e+'" passed.')}function p(e){return e.reduce(function(e,t){return e=o({},e,"string"==typeof t?l({},"@"+t,!0):t)},{})}},{"./registry":3,"./state":5,"./utils":6}],5:[function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(r,"__esModule",{value:!0}),r.MUTABLE=r.IMMUTABLE=void 0;var o="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)};r.createState=g,r.mergeStates=function(e){var t=function(){return Object.keys(e).reduce(function(t,r){return t[r]=e[r].get(),t},{})},r=g(t());return r.set=function(t){if("object"!==(void 0===t?"undefined":o(t)))throw new Error("Wrong merged state value. Must be key-value pairs.");Object.keys(t).forEach(function(r){e[r].set(t[r],!1)}),r.__triggerListeners()},r.get=t,Object.keys(e).forEach(function(t){e[t].stream.pipe(function(){r.__triggerListeners()})}),r},r.createStream=function(e){return g(e).stream},r.isRiewState=function(e){return e&&!0===e.__riew},r.isRiewQueueTrigger=function(e){return e&&!0===e.__riewTrigger};var u,i=e("./utils"),a=e("./registry"),f=(u=a)&&u.__esModule?u:{default:u};function c(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=r.IMMUTABLE="IMMUTABLE",d=r.MUTABLE="MUTABLE",v=0,p=function(e){return"@@"+e+ ++v},y=["pipe","map","mutate","filter","parallel","cancel","mapToKey"],m=function(e){var t=!0,r=!1,n=void 0;try{for(var o,u=e[Symbol.iterator]();!(t=(o=u.next()).done);t=!0){if("mutate"===o.value.type)return d}}catch(e){r=!0,n=e}finally{try{!t&&u.return&&u.return()}finally{if(r)throw n}}return l};function h(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n={index:0,result:t(),id:p("q"),items:[],add:function(e,t){this.items.push({type:e,func:t,name:t.map(i.getFuncName)})},process:function(){for(var t=arguments.length,o=Array(t),u=0;u<t;u++)o[u]=arguments[u];var a=n.items,f=function(){return n.items=[]};function c(){return n.index++,n.index<a.length?l():(r(n),n.result)}function l(){var t=a[n.index],r=t.type,u=t.func;switch(r){case"pipe":var l=(u[0]||function(){}).apply(void 0,[n.result].concat(o));return(0,i.isPromise)(l)?l.then(c):c();case"map":return n.result=(u[0]||function(e){return e}).apply(void 0,[n.result].concat(o)),(0,i.isPromise)(n.result)?n.result.then(function(e){return n.result=e,c()}):c();case"mapToKey":return n.result=function(e){return s({},u[0],e)}.apply(void 0,[n.result].concat(o)),c();case"mutate":return n.result=(u[0]||function(e,t){return t}).apply(void 0,[n.result].concat(o)),(0,i.isPromise)(n.result)?n.result.then(function(t){return n.result=t,e(n.result),c()}):(e(n.result),c());case"filter":var d=u[0].apply(u,[n.result].concat(o));return(0,i.isPromise)(d)?d.then(function(e){return e||(n.index=a.length),c()}):(d||(n.index=a.length),c());case"parallel":n.result=u.map(function(e){return e.apply(void 0,[n.result].concat(o))});var v=n.result.filter(i.isPromise);return v.length>0?Promise.all(v).then(function(){return n.result.forEach(function(e,t){(0,i.isPromise)(e)&&e.then(function(e){return n.result[t]=e})}),c()}):c();case"cancel":return n.index=-1,f(),n.result}throw new Error('Unsupported method "'+r+'".')}return n.index=0,a.length>0?l():n.result},cancel:function(){this.items=[]}};return n}function g(e){var t=e,r={},n=[],o=[],u=!0,i=void 0;function a(){return function(){arguments.length>0?r.set(arguments.length<=0?void 0:arguments[0]):r.__triggerListeners()}}function s(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments[1],f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=function e(){if(!1===u)return r.get();var t=h(r.set,r.get,function(e){return n=n.filter(function(t){var r=t.id;return e.id!==r})});return n.push(t),e.__itemsToCreate.forEach(function(e){var r=e.type,n=e.func;return t.add(r,n)}),t.process.apply(t,arguments)},d=function(e,r,n){y.forEach(function(o){e[o]=function(){for(var e=arguments.length,u=Array(e),i=0;i<e;i++)u[i]=arguments[i];return s([].concat(c(t),[{type:o,func:u}]),n,r)}})};return l.id=p("t"),l.stream=a(),l.__riewTrigger=!0,l.__itemsToCreate=[].concat(c(t)),l.__state=r,l.__activity=function(){return m(l.__itemsToCreate)},d(l,l,i),d(l.stream,l,!0),["set","get","teardown"].forEach(function(e){l[e]=function(){throw new Error('"'+e+'" is not a queue method but a method of the state object.')}}),l.test=function(e){var r=s([].concat(c(t)),i,l),n={setValue:function(e){r.__itemsToCreate=[{type:"map",func:[function(){return e}]}].concat(c(r.__itemsToCreate))},swap:function(e,t,n){Array.isArray(t)||(t=[t]),r.__itemsToCreate[e].func=t,n&&(r.__itemsToCreate[e].type=n)},swapFirst:function(e,t){n.swap(0,e,t)},swapLast:function(e,t){n.swap(r.__itemsToCreate.length-1,e,t)}};return e(n),r},i&&(o.push(l),f&&(e=f.id,o=o.filter(function(t){return t.id!==e}))),l}function l(e,t){y.forEach(function(r){e[r]=function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return s([{type:r,func:n}],t)}})}return r.id=p("s"),r.__riew=!0,r.__triggerListeners=function(){return o.forEach(function(e){return e()})},r.__listeners=function(){return o},r.__queues=function(){return n},r.active=function(){return u},r.get=function(){return t},r.set=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t=e,n&&r.__triggerListeners()},r.teardown=function(){n.forEach(function(e){return e.cancel()}),n=[],o=[],u=!1,i&&f.default.free(i)},r.export=function(e){return i&&f.default.free(i),f.default.add(i=e,r),r},r.stream=a(),l(r),l(r.stream,!0),r}},{"./registry":3,"./utils":6}],6:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=r.isPromise=function(e){return e&&"function"==typeof e.then};r.isObjectLiteral=function(e){return!!e&&e.constructor==={}.constructor},r.getFuncName=function(e){if(e.name)return e.name;var t=/^function\s+([\w\$]+)\s*\(/.exec(e.toString());return t?t[1]:"unknown"},r.compose=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){var r=!1,o=function(){};return function u(){if(0!==t.length){var i=t.shift()(e);n(i)?(r=!0,i.then(function(t){e=t,u()})):(e=i,u())}else o(e)}(),r?new Promise(function(e){return o=e}):e}},r.serial=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){var r=!1,o=function(){},u=[];return function i(){if(0!==t.length){var a=t.shift()(e);n(a)?(r=!0,a.then(function(e){u.push(e),i()})):(u.push(a),i())}else o(u)}(),r?new Promise(function(e){return o=e}):u}},r.parallel=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){var r=!1,o=[];return function u(){if(0!==t.length){var i=t.shift()(e);n(i)&&(r=!0),o.push(i),u()}}(),r?Promise.all(o.map(function(e){return n(e)?e:Promise.resolve(e)})):o}}},{}]},{},[1])(1)});