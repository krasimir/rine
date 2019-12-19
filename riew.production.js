!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Riew=e()}}(function(){return function e(t,n,r){function u(i,a){if(!n[i]){if(!t[i]){var f="function"==typeof require&&require;if(!a&&f)return f(i,!0);if(o)return o(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[i]={exports:{}};t[i][0].call(s.exports,function(e){return u(t[i][1][e]||e)},s,s.exports,e,t,n,r)}return n[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)u(r[i]);return u}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(0,o.default)();return n.setValue=function(e){return n.value=e},n.put=function(r,u){var o=!0;n.value.length<e?n.value.push(r):t?(n.value.shift(),n.value.push(r)):o=!1,n.takes.length>0&&n.takes.shift()(n.value.shift()),u(o)},n.take=function(e){0===n.value.length?n.takes.push(e):e(n.value.shift())},n};var r,u=e("./Interface"),o=(r=u)&&r.__esModule?r:{default:r}},{"./Interface":4}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var e=(0,o.default)();arguments.length>0&&(e.value=[arguments.length<=0?void 0:arguments[0]]);return e.setValue=function(t){return e.value=t},e.put=function(t,n){e.value=[t],n(!0)},e.take=function(t){t(e.value[0])},e};var r,u=e("./Interface"),o=(r=u)&&r.__esModule?r:{default:r}},{"./Interface":4}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=(0,o.default)();return t.setValue=function(e){return t.value=e},t.put=function(n,r){0===t.takes.length?t.value.length<e?(t.value.push(n),r(!0)):t.puts.push(function(e){t.value.push(n),t.takes.length>0&&t.takes.shift()(t.value.shift()),r(e||!0)}):(t.value.push(n),t.takes.shift()(t.value.shift()),r(!0))},t.take=function(n){if(0===t.value.length)t.puts.length>0?(t.puts.shift()(),t.take(n)):t.takes.push(n);else{var r=t.value.shift();t.value.length<e&&t.puts.length>0&&t.puts.shift()(),n(r)}},t};var r,u=e("./Interface"),o=(r=u)&&r.__esModule?r:{default:r}},{"./Interface":4}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return{value:[],puts:[],takes:[],isEmpty:function(){return 0===this.value.length},reset:function(){this.value=[],this.puts=[],this.takes=[]},setValue:function(e){this.value=e},getValue:function(){return this.value}}}},{}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=i(e("./FixedBuffer")),u=i(e("./DroppingBuffer")),o=i(e("./EverBuffer"));function i(e){return e&&e.__esModule?e:{default:e}}var a={fixed:r.default,dropping:u.default,sliding:function(e){return(0,u.default)(e,!0)},ever:o.default};n.default=a},{"./DroppingBuffer":1,"./EverBuffer":2,"./FixedBuffer":3}],6:[function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(n,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return void 0===e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r(e)},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,u=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){u=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(u)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};n.createChannel=function(){for(var e=f.OPEN,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=function(e){var t=void 0,n=void 0;2===e.length?(t=e[0],n=e[1]):1===e.length&&"string"==typeof e[0]?(t=e[0],n=l.default.fixed()):1===e.length&&"object"===u(e[0])?(t=(0,a.getId)("ch"),n=e[0]):(t=(0,a.getId)("ch"),n=l.default.fixed());return[t,n]}(n),s=o(i,2),d=s[0],p=s[1];if(c.CHANNELS.exists(d))return c.CHANNELS.get(d);var v=c.CHANNELS.set(d,{id:d,"@channel":!0,subscribers:[]});return v.isActive=function(){return v.state()===f.OPEN},v.buff=p,v.state=function(t){return void 0!==t&&(e=t),e},v.value=function(){return p.getValue()},v};var i,a=e("../utils"),f=e("./constants"),c=e("../index"),s=e("./buffer"),l=(i=s)&&i.__esModule?i:{default:i}},{"../index":17,"../utils":20,"./buffer":5,"./constants":7}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.OPEN=Symbol("OPEN"),n.CLOSED=Symbol("CLOSED"),n.ENDED=Symbol("ENDED"),n.PUT="PUT",n.TAKE="TAKE",n.NOOP="NOOP",n.SLEEP="SLEEP",n.STOP="STOP",n.RERUN="RERUN",n.SUB="SUB",n.CHANNELS={channels:{},getAll:function(){return this.channels},get:function(e){return this.channels[e]},set:function(e,t){return this.channels[e]=t,t},del:function(e){delete this.channels[e]},exists:function(e){return!!this.channels[e]},reset:function(){this.channels={}}}},{}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.merge=function(){for(var e=(0,r.chan)(),t=arguments.length,n=Array(t),u=0;u<t;u++)n[u]=arguments[u];return n.forEach(function(t){!function n(){(0,r.stake)(t,function(t){t!==r.CLOSED&&t!==r.ENDED&&e.state()===r.OPEN&&(0,r.sput)(e,t,n)})}()}),e};var r=e("../../index")},{"../../index":17}],9:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.mult=function(e,t){e._taps||(e._taps=[]);e._isMultTakerFired?t.forEach(function(t){e._taps.find(function(e){return t.id===e.id})||e._taps.push(t)}):(e._isMultTakerFired=!0,e._taps=e._taps.concat(t),function t(){(0,r.stake)(e,function(n){if(n!==r.CLOSED&&n!==r.ENDED){var u=0,o=function(n){(u+=1)>=e._taps.length&&t()};e._taps.forEach(function(t,i){e.state()===r.OPEN?(0,r.sput)(t,n,function(){return o()}):(u+=1,e._taps.splice(i,1),o())})}})}())},n.unmult=function(e,t){e._taps=(e._taps||[]).filter(function(e){return e.id!==t.id})},n.unmultAll=function(e){e._taps=[]};var r=e("../index")},{"../index":13}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.sub=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,f=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(void 0===t)return{ch:e,op:u.SUB};e=function(e){Array.isArray(e)||(e=[e]);return e.map(function(e,t){return(0,r.isState)(e)&&(e=e.READ),(0,r.isChannel)(e)?e:(0,r.chan)(e)})}(e),t=function(e){if("function"==typeof e)return e;if((0,r.isChannel)(e))return e.__subFunc||(e.__subFunc=function(t){return(0,o.sput)(e,t)});if("string"==typeof e)return(0,r.chan)(e,r.buffer.ever()).__subFunc=function(t){return(0,o.sput)(e,t)};throw new Error("'sub' accepts string, channel or a function as a second argument. "+e+" given.")}(t);var c=e.map(function(){return i}),s=!1;return e.forEach(function(e,r){var u=function(e){c[r]=e,!s&&1!==c.length&&c.includes(i)||(s=!0,t(n.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(c))))};e.subscribers.find(function(e){return e.to===t})||e.subscribers.push({to:t,notify:u});var o=e.value();f&&o.length>0&&u(o[0])}),t},n.subOnce=function(e,t){var n=(0,r.isChannel)(e)?e:(0,r.chan)(e),u=function(n){t(n),f(e,t)};n.subscribers.find(function(e){return e===u})||n.subscribers.push({notify:u,to:t})},n.unsub=f;var r=e("../../index"),u=e("../constants"),o=e("../ops");var i=Symbol("Nothing");function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 1===t.length?t[0]:t}function f(e,t){var n=(0,r.isChannel)(e)?e:(0,r.chan)(e);n.subscribers=n.subscribers.filter(function(e){return e.to!==t})}},{"../../index":17,"../constants":7,"../ops":14}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.createState=function(){var e=arguments.length<=0?void 0:arguments[0],t=(0,u.getId)("state"),n=[],o=[],i=arguments.length>0;function a(e){return function(t){if(null===e)throw t;e(t)}}function f(t,n){var o=t.ch,i=t.selector,f=t.onError;if((0,u.isGeneratorFunction)(i))(0,r.go)(i,function(e){return(0,r.sput)(o,e)},e);else{var c=void 0;try{c=i(n)}catch(e){a(f)(e)}(0,u.isPromise)(c)?c.then(function(e){return(0,r.sput)(o,e)}).catch(a(f)):(0,r.sput)(o,c)}}function c(t,o){t.ch;var i=t.reducer,c=t.onError;if((0,u.isGeneratorFunction)(i))(0,r.go)(i,function(t){e=t,n.forEach(function(e){return f(e,t)})},e,o);else{try{e=i(e,o)}catch(e){a(c)(e)}(0,u.isPromise)(e)?e.then(function(e){return n.forEach(function(t){return f(t,e)})}).catch(a(c)):n.forEach(function(t){return f(t,e)})}}var s={id:t,"@state":!0,READ:t+"_read",WRITE:t+"_write",select:function(t){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=(0,r.isChannel)(t)?t:(0,r.chan)(t,r.buffer.ever());a["@statereadchannel"]=!0;var c={ch:a,selector:u,onError:o};n.push(c),i&&f(c,e)},mutate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,t){return t},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,u=(0,r.isChannel)(e)?e:(0,r.chan)(e,r.buffer.ever());u["@statewritechannel"]=!0;var i={ch:u,reducer:t,onError:n};o.push(i),(0,r.sub)(u,function(e){return c(i,e)})},destroy:function(){n.forEach(function(e){var t=e.ch;return(0,r.sclose)(t)}),o.forEach(function(e){var t=e.ch;return(0,r.sclose)(t)}),e=void 0,r.grid.remove(s)},get:function(){return e},set:function(t){e=t,n.forEach(function(t){f(t,e)})}};return s.select(s.READ),s.mutate(s.WRITE),s},n.isState=function(e){return e&&!0===e["@state"]},n.isStateReadChannel=function(e){return e&&!0===e["@statereadchannel"]},n.isStateWriteChannel=function(e){return e&&!0===e["@statewritechannel"]};var r=e("../../index"),u=e("../../utils")},{"../../index":17,"../../utils":20}],12:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.timeout=function(e){var t=(0,r.chan)();return setTimeout(function(){return(0,r.close)(t)},e),t};var r=e("../../index")},{"../../index":17}],13:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("./buffer");Object.defineProperty(n,"buffer",{enumerable:!0,get:function(){return(e=r,e&&e.__esModule?e:{default:e}).default;var e}});var u=e("./channel");Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return u[e]}})});var o=e("./ops");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return o[e]}})});var i=e("./ext/merge");Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return i[e]}})});var a=e("./ext/mult");Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return a[e]}})});var f=e("./ext/timeout");Object.keys(f).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return f[e]}})});var c=e("./ext/state");Object.keys(c).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return c[e]}})});var s=e("./ext/pubsub");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return s[e]}})});var l=e("./constants");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return l[e]}})})},{"./buffer":5,"./channel":6,"./constants":7,"./ext/merge":8,"./ext/mult":9,"./ext/pubsub":10,"./ext/state":11,"./ext/timeout":12,"./ops":14}],14:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isChannel=void 0,n.put=a,n.sput=function(e,t,n){return a(e,t,n||i)},n.take=f,n.stake=function(e,t){return f(e,t||i)},n.close=c,n.sclose=function(e){return c(e)},n.channelReset=s,n.schannelReset=function(e){s(e)},n.go=function(e){for(var t=arguments.length,n=Array(t>2?t-2:0),i=2;i<t;i++)n[i-2]=arguments[i];var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},s="STOPPED",l="RUNNING",d={stop:function(){l=s},rerun:function(){p=e.apply(void 0,n),v()}},p=e.apply(void 0,n);function v(t){if(l!==s){var i=p.next(t);if(!0!==i.done)if((0,o.isPromise)(i.value))i.value.then(v).catch(function(e){return p.throw(e)});else switch(i.value.op){case r.PUT:a(i.value.ch,i.value.item,v);break;case r.TAKE:f(i.value.ch,v);break;case r.NOOP:v();break;case r.SLEEP:setTimeout(v,i.value.ms);break;case r.STOP:l=s;break;case r.RERUN:p=e.apply(void 0,n),v();break;case r.SUB:(0,u.subOnce)(i.value.ch,v);break;default:throw new Error("Unrecognized operation "+i.value.op+" for a routine.")}else c&&c(i.value)}}return v(),d},n.sleep=function(e,t){if("function"!=typeof t)return{op:r.SLEEP,ms:e};setTimeout(t,e)},n.stop=function(){return{op:r.STOP}},n.rerun=function(){return{op:r.RERUN}};var r=e("./constants"),u=e("../index"),o=e("../utils"),i=function(){};function a(e,t,n){if((0,u.isState)(e))throw new Error("'put' accepts a channel as first argument. You passed a state.");var o=l(e)?e:(0,u.chan)(e);if("function"!=typeof n)return{ch:o,op:r.PUT,item:t};!function(e,t,n){var u=e.state();u===r.CLOSED||u===r.ENDED?n(u):(e.subscribers.forEach(function(e){return(0,e.notify)(t)}),e.buff.put(t,n))}(o,t,n)}function f(e,t){var n=l(e)?e:(0,u.chan)(e);if("function"!=typeof t)return{ch:n,op:r.TAKE};(0,u.isStateWriteChannel)(n)&&console.warn("You are about to `take` from a state WRITE channel. This type of channel is using `ever` buffer which means that will resolve its takes and puts immediately. You probably want to use `sub(<channel>)`."),function(e,t){var n=e.state();n===r.ENDED?t(r.ENDED):n===r.CLOSED&&e.buff.isEmpty()?(e.state(r.ENDED),t(r.ENDED)):e.buff.take(function(e){return t(e)})}(n,t)}function c(e){var t=l(e)?e:(0,u.chan)(e),n=t.buff.isEmpty()?r.ENDED:r.CLOSED;return t.state(n),t.buff.puts.forEach(function(e){return e(n)}),t.buff.takes.forEach(function(e){return e(n)}),u.grid.remove(t),t.subscribers=[],r.CHANNELS.del(t.id),{op:r.NOOP}}function s(e){var t=l(e)?e:(0,u.chan)(e);return t.state(r.OPEN),t.buff.reset(),{ch:t,op:r.NOOP}}var l=n.isChannel=function(e){return e&&!0===e["@channel"]}},{"../index":17,"../utils":20,"./constants":7}],15:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,u,o=(u=[],(r={}).add=function(e){if(!e||!e.id)throw new Error('Each node in the grid must be an object with "id" field. Instead "'+e+'" given.');u.push(e)},r.remove=function(e){var t=u.findIndex(function(t){return t.id===e.id});t>=0&&u.splice(t,1)},r.reset=function(){u=[]},r.nodes=function(){return u},r.getNodeById=function(e){return u.find(function(t){return t.id===e})},r);n.default=o},{}],16:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=a(e("./riew")),u=a(e("./react")),o=a(e("./grid")),i=e("./csp");function a(e){return e&&e.__esModule?e:{default:e}}var f,c,s=function(e){e.defineProduct("riew",function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),u=1;u<t;u++)n[u-1]=arguments[u];var i=r.default.apply(void 0,[e].concat(n));return o.default.add(i),i}),e.defineProduct("reactRiew",function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return u.default.apply(void 0,[e].concat(n))}),e.defineProduct("channel",function(){var e=i.createChannel.apply(void 0,arguments);return o.default.add(e),e}),e.defineProduct("state",function(){var e=i.createState.apply(void 0,arguments);return o.default.add(e),e})},l=(c={},(f={}).defineProduct=function(e,t){if(c[e])throw new Error('A product with type "'+e+'" already exists.');c[e]=t},f.undefineProduct=function(e){if(!c[e])throw new Error('There is no product with type "'+e+'" to be removed.');delete c[e]},f.produce=function(e){for(var t,n=arguments.length,r=Array(n>1?n-1:0),u=1;u<n;u++)r[u-1]=arguments[u];if(!c[e])throw new Error('There is no product with type "'+e+'".');return(t=c)[e].apply(t,r)},f.reset=function(){c={},s(f)},f.debug=function(){return{productNames:Object.keys(c)}},f);s(l),n.default=l},{"./csp":13,"./grid":15,"./react":18,"./riew":19}],17:[function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(n,"__esModule",{value:!0}),n.grid=n.harvester=n.reset=n.register=n.use=n.state=n.chan=n.react=n.riew=void 0;var u="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return void 0===e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r(e)},o=e("./csp");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return o[e]}})});var i=f(e("./harvester")),a=f(e("./grid"));function f(e){return e&&e.__esModule?e:{default:e}}n.riew=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.default.produce.apply(i.default,["riew"].concat(t))},n.react={riew:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.default.produce.apply(i.default,["reactRiew"].concat(t))}},n.chan=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.default.produce.apply(i.default,["channel"].concat(t))},n.state=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.default.produce.apply(i.default,["state"].concat(t))},n.use=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return i.default.produce.apply(i.default,[e].concat(n))},n.register=function(e,t){return"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t||(t.__registered=e),i.default.defineProduct(e,function(){return t}),t},n.reset=function(){return a.default.reset(),i.default.reset(),o.CHANNELS.reset()},n.harvester=i.default,n.grid=a.default},{"./csp":13,"./grid":15,"./harvester":16}],18:[function(e,t,n){(function(t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,u=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){u=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(u)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};n.default=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),u=1;u<t;u++)n[u-1]=arguments[u];return function t(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=function(t){var a=(0,o.useState)(null),s=r(a,2),l=s[0],d=s[1],p=(0,o.useState)(null),v=r(p,2),h=v[0],y=v[1],b=(0,o.useRef)(!0);return(0,o.useEffect)(function(){l&&l.update(t)},[t]),(0,o.useEffect)(function(){var e;(l=f.riew.apply(void 0,[function(e){b&&y(null===e?null:e)}].concat(n)),u&&u.length>0)&&(l=(e=l).with.apply(e,c(u)));return d(l),l.mount(t),b.current=!0,function(){b.current=!1,l.unmount()}},[]),null===h?null:i.default.createElement(e,h)};return s.displayName="Riew_"+(0,a.getFuncName)(e),s.with=function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t(n)},s}()};var u,o="undefined"!=typeof window?window.React:void 0!==t?t.React:null,i=(u=o)&&u.__esModule?u:{default:u},a=e("../utils"),f=e("../index");function c(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../index":17,"../utils":20}],19:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n.default=function e(t){for(var n=arguments.length,f=Array(n>1?n-1:0),c=1;c<n;c++)f[c-1]=arguments[c];var s=(0,o.getFuncName)(t);var l={id:(0,o.getId)(s),name:s};var d=a(t);var p=[];var v=[];var h=[];var y={};var b={};var g=function(){var e=u.state.apply(void 0,arguments);return p.push(e),e};var m=function(e,t){e in b||(b[e]=!0,(0,u.sub)(e,t))};var E=l.id+"_view";var _=l.id+"_props";var O=function(e){return Object.keys(e).reduce(function(t,n){if((0,u.isState)(e[n]))m(e[n].READ,function(e){return(0,u.sput)(E,i({},n,e))}),(0,u.stake)(e[n].READ,function(e){return(0,u.sput)(E,i({},n,e))});else if("$"===n.charAt(0)){var r=n.substr(1,n.length);m(e[n],function(e){(0,u.sput)(E,i({},r,e))}),(0,u.stake)(e[n],function(e){return(0,u.sput)(E,i({},r,e))})}else t[n]=e[n];return t},{})};l.mount=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,o.requireObject)(e),m(_,function(e){return(0,u.sput)(E,e)}),m(E,d.push),h=f.map(function(e){return(0,u.go)(e,function(e){"function"==typeof e&&v.push(e)},r({render:function(e){(0,o.requireObject)(e),(0,u.sput)(E,O(e))},state:g,props:_},y))}),(0,o.isObjectEmpty)(y)||(0,u.sput)(E,O(y)),(0,u.sput)(_,e)};l.unmount=function(){v.forEach(function(e){return e()}),v=[],p.forEach(function(e){return e.destroy()}),p=[],h.forEach(function(e){return e.stop()}),h=[],d.destroy(),(0,u.close)(_),(0,u.close)(E)};l.update=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,o.requireObject)(e),(0,u.sput)(_,e)};l.with=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l.__setExternals(t),l};l.test=function(n){var r=e.apply(void 0,[t].concat(f));return r.__setExternals([n]),r};l.__setExternals=function(e){e=e.reduce(function(e,t){return e=r({},e,"string"==typeof t?i({},t,(0,u.use)(t)):t)},{}),y=r({},y,e)};return l};var u=e("./index"),o=e("./utils");function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(e){var t={},n=!1,r=!0;return{push:function(i){i!==u.chan.CLOSED&&i!==u.chan.ENDED&&(t=(0,o.accumulate)(t,i),n||(n=!0,Promise.resolve().then(function(){r&&e(t),n=!1})))},destroy:function(){r=!1}}}},{"./index":17,"./utils":20}],20:[function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(n,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return void 0===e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r(e)};n.isObjectEmpty=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},n.requireObject=function(e){if(null==e||void 0!==e&&"object"!==(void 0===e?"undefined":o(e)))throw new Error('A key-value object expected. Instead "'+e+'" passed.')};n.getFuncName=function(e){if(e.name)return e.name;var t=/^function\s+([\w\$]+)\s*\(/.exec(e.toString());return t?t[1]:"unknown"};var i=0;n.getId=function(e){return e+"_"+ ++i};n.accumulate=function(e,t){return u({},e,t)},n.isPromise=function(e){return e&&"function"==typeof e.then},n.isObjectLiteral=function(e){return!!e&&e.constructor==={}.constructor};var a=n.isGenerator=function(e){return e&&"function"==typeof e.next&&"function"==typeof e.throw};n.isGeneratorFunction=function(e){var t=e.constructor;return!!t&&("GeneratorFunction"===t.name||"GeneratorFunction"===t.displayName||a(t.prototype))}},{}]},{},[17])(17)});