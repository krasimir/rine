!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Riew=e()}}(function(){return function e(n,t,r){function o(u,a){if(!t[u]){if(!n[u]){var l="function"==typeof require&&require;if(!a&&l)return l(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var c=t[u]={exports:{}};n[u][0].call(c.exports,function(e){return o(n[u][1][e]||e)},c,c.exports,e,n,t,r)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("./utils"),o=e("../index"),i={dropping:!1,sliding:!1},u=function(e,n){return n(e)};function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,t=n.dropping,a=n.sliding,l={value:[],puts:[],takes:[],hooks:{beforePut:u,afterPut:u,beforeTake:u,afterTake:u},parent:null,dropping:t,sliding:a,beforePut:function(e){return l.hooks.beforePut=e},afterPut:function(e){return l.hooks.afterPut=e},beforeTake:function(e){return l.hooks.beforeTake=e},afterTake:function(e){return l.hooks.afterTake=e},isEmpty:function(){return 0===l.value.length},reset:function(){l.value=[],l.puts=[],l.takes=[],l.hooks={beforePut:u,afterPut:u,beforeTake:u,afterTake:u}},setValue:function(e){l.value=e},getValue:function(){return l.value},decomposeTakers:function(){return l.takes.reduce(function(e,n){return e[n.options.read?"readers":"takers"].push(n),e},{readers:[],takers:[]})},consumeTake:function(e,n){if(!e.options.listen){var t=l.takes.findIndex(function(n){return n===e});t>=0&&l.takes.splice(t,1)}e.callback(n)},deleteTaker:function(e){var n=l.takes.findIndex(function(n){return n.callback===e});n>=0&&l.takes.splice(n,1)},deleteListeners:function(){l.takes=l.takes.filter(function(e){return!e.options.listen})}};l.setValue=function(e){return l.value=e};return l.put=function(n,r){o.logger.log(l.parent,"CHANNEL_PUT_INITIATED",n),l.hooks.beforePut(n,function(n){!function(n,r){var o=l.decomposeTakers(),i=o.readers,u=o.takers;if(i.forEach(function(e){return l.consumeTake(e,n)}),u.length>0)l.consumeTake(u[0],n),r(!0);else{if(l.value.length<e)return l.value.push(n),void r(!0);if(t)return void r(!1);if(a)return l.value.shift(),l.value.push(n),void r(!0);l.puts.push({callback:function(e){l.value.push(n),r(e||!0)},item:n})}}(n,function(e){return l.hooks.afterPut(e,function(e){o.logger.log(l.parent,"CHANNEL_PUT_RESOLVED",e),r(e)})})})},l.take=function(n,t){var i=function(){};return o.logger.log(l.parent,"CHANNEL_TAKE_INITIATED"),l.hooks.beforeTake(void 0,function(){return i=function(n,t){var o=function(){return l.takes.push({callback:n,options:t}),function(){return l.deleteTaker(n)}};if((t=(0,r.normalizeOptions)(t)).listen)return t.read=!0,t.initialCall&&n(l.value[0]),o();if(!t.read){if(0===l.value.length){if(!(l.puts.length>0))return o();l.puts.shift().callback(),n(l.value.shift())}else{var i=l.value.shift();n(i),l.value.length<e&&l.puts.length>0&&l.puts.shift().callback()}return function(){}}n(l.value[0])}(function(e){return l.hooks.afterTake(e,function(e){o.logger.log(l.parent,"CHANNEL_TAKE_RESOLVED",e),n(e)})},t)}),function(){return i()}},l}var l={fixed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return a(e,{dropping:!1,sliding:!1})},dropping:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(e<1)throw new Error("The dropping buffer should have at least size of one.");return a(e,{dropping:!0,sliding:!1})},sliding:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(e<1)throw new Error("The sliding buffer should have at least size of one.");return a(e,{dropping:!1,sliding:!0})}};t.default=l},{"../index":7,"./utils":5}],2:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=i.OPEN;if(e=e?(0,o.getId)(e):(0,o.getId)("ch"),n=n||a.default.fixed(),i.CHANNELS.exists(e))throw new Error('Channel with id "'+e+'" already exists.');var u=function e(n,t){return n.length>1?(0,o.setProp)(e,"name",n[0]+t+n[1]):(0,o.setProp)(e,"name",n[0]),e};u.id=e,u["@channel"]=!0,u.parent=t;var l=i.CHANNELS.set(e,u);return n.parent=l,l.isActive=function(){return l.state()===i.OPEN},l.buff=n,l.state=function(e){return void 0!==e&&(r=e),r},l.value=function(){return n.getValue()},l.beforePut=n.beforePut,l.afterPut=n.afterPut,l.beforeTake=n.beforeTake,l.afterTake=n.afterTake,l.exportAs=function(e){return(0,i.register)(e,l)},i.grid.add(l),i.logger.log(l,"CHANNEL_CREATED"),l};var r,o=e("../utils"),i=e("../index"),u=e("./buf"),a=(r=u)&&r.__esModule?r:{default:r}},{"../index":7,"../utils":16,"./buf":1}],3:[function(e,n,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return void 0===e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r(e)},i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u=e("../index"),a=e("../utils"),l=e("./utils");function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}var s=function(){},d={sput:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,r=(e=(0,l.normalizeChannels)(e)).map(function(){return u.NOTHING}),o=function(e,n){r[e]=n,r.includes(u.NOTHING)||t(1===r.length?r[0]:r)};e.forEach(function(e,t){var r=e.state();r!==u.OPEN?o(t,r):e.buff.put(n,function(e){return o(t,e)})})},put:function(e,n){return{channels:e,op:u.PUT,item:n}},stake:function(e,n,t){e=(0,l.normalizeChannels)(e),t=(0,l.normalizeOptions)(t),n=(0,l.normalizeTo)(n);var r=void 0;if(t.strategy===u.ALL_REQUIRED){var o=e.map(function(){return u.NOTHING}),i=function(e,t){o[e]=t,o.includes(u.NOTHING)||n(1===o.length?o[0]:[].concat(c(o)))};r=e.map(function(e,n){var r=e.state();if(r===u.ENDED)i(n,r);else{if(r!==u.CLOSED||!e.buff.isEmpty())return e.buff.take(function(e){return i(n,e)},t);e.state(u.ENDED),i(n,u.ENDED)}})}else{if(t.strategy!==u.ONE_OF)throw new Error('Unrecognized strategy "'+t.strategy+'"');var a=function(){t.listen||r.filter(function(e){return e}).forEach(function(e){return e()}),n.apply(void 0,arguments)};r=e.map(function(e,n){var r=e.state();if(r===u.ENDED)a(r,n);else{if(r!==u.CLOSED||!e.buff.isEmpty())return e.buff.take(function(e){return a(e,n)},t);e.state(u.ENDED),a(u.ENDED,n)}})}return function(){r.filter(function(e){return e}).forEach(function(e){return e()})}},take:function(e,n){return{channels:e,op:u.TAKE,options:n}},read:function(e,n){return{channels:e,op:u.READ,options:i({},n,{read:!0})}},sread:function(e,n,t){return d.stake(e,n,i({},t,{read:!0}))},unsubAll:function(e){e.buff.deleteListeners()},listen:function(e,n,t){return d.stake(e,n,i({},t,{listen:!0}))},close:function(e){return(e=(0,l.normalizeChannels)(e)).forEach(function(e){var n=e.buff.isEmpty()?u.ENDED:u.CLOSED;e.state(n),e.buff.puts.forEach(function(e){return e.callback(n)}),e.buff.deleteListeners(),e.buff.takes.forEach(function(e){return e.callback(n)}),u.grid.remove(e),u.CHANNELS.del(e.id),u.logger.log(e,"CHANNEL_CLOSED")}),{op:u.NOOP}},sclose:function(e){return d.close(e)},channelReset:function(e){return(e=(0,l.normalizeChannels)(e)).forEach(function(e){e.state(u.OPEN),e.buff.reset(),u.logger.log(e,"CHANNEL_RESET")}),{op:u.NOOP}},schannelReset:function(e){d.channelReset(e)},call:function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return{op:u.CALL_ROUTINE,routine:e,args:t}},fork:function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return{op:u.FORK_ROUTINE,routine:e,args:t}},merge:function(){for(var e=(0,u.chan)(),n=arguments.length,t=Array(n),r=0;r<n;r++)t[r]=arguments[r];return t.forEach(function(n){!function t(){d.stake(n,function(n){n!==u.CLOSED&&n!==u.ENDED&&e.state()===u.OPEN&&d.sput(e,n,t)})}()}),e},timeout:function(e){var n=(0,u.chan)();return setTimeout(function(){return d.close(n)},e),n},isChannel:function(e){return e&&!0===e["@channel"]},isRiew:function(e){return e&&!0===e["@riew"]},isState:function(e){return e&&!0===e["@state"]},isRoutine:function(e){return e&&!0===e["@routine"]},verifyChannel:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(d.isChannel(e))return e;if(n)throw new Error(e+(void 0!==e?" ("+(void 0===e?"undefined":o(e))+")":"")+" is not a channel."+("string"==typeof e?' Did you forget to define it?\nExample: chan("'+e+'")':""));return null},go:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o="RUNNING",i="STOPPED",l=o,f=(0,a.getFuncName)(e),s={id:(0,a.getId)("routine_"+f),"@routine":!0,parent:r,name:f,children:[],stop:function(){l=i,this.children.forEach(function(e){return e.stop()}),u.grid.remove(s),u.logger.log(s,"ROUTINE_STOPPED")},rerun:function(){g=e.apply(void 0,c(t)),v(),u.logger.log(this,"ROUTINE_RERUN")}},p=function(e){return s.children.push(e)};u.logger.log(s,"ROUTINE_STARTED");var g=e.apply(void 0,c(t));function y(e){switch(e.value.op){case u.PUT:d.sput(e.value.channels,e.value.item,v);break;case u.TAKE:d.stake(e.value.channels,function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];v(1===n.length?n[0]:n)},e.value.options);break;case u.NOOP:v();break;case u.SLEEP:setTimeout(v,e.value.ms);break;case u.STOP:s.stop();break;case u.READ:d.sread(e.value.channels,v,e.value.options);break;case u.CALL_ROUTINE:p(d.go(e.value.routine,v,e.value.args,s.id));break;case u.FORK_ROUTINE:p(d.go(e.value.routine,function(){},e.value.args,s.id)),v();break;default:throw new Error("Unrecognized operation "+e.value.op+" for a routine.")}}function v(e){if(l!==i){var t=g.next(e);!0===t.done?(n&&n(t.value),t.value&&!0===t.value["@go"]?s.rerun():(u.grid.remove(s),u.logger.log(s,"ROUTINE_END"))):(0,a.isPromise)(t.value)?(u.logger.log(s,"ROUTINE_ASYNC_BEGIN"),t.value.then(function(){u.logger.log(s,"ROUTINE_ASYNC_END"),v.apply(void 0,arguments)}).catch(function(e){u.logger.log(s,"ROUTINE_ASYNC_ERROR",e),y(g.throw(e))})):y(t)}}return u.grid.add(s),v(),s}};d.go["@go"]=!0,d.go.with=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n.reduce(function(e,n){return e=i({},e,"string"==typeof n?f({},n,(0,u.use)(n)):n)},{});return function(e){for(var n=arguments.length,t=Array(n>2?n-2:0),o=2;o<n;o++)t[o-2]=arguments[o];var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return t.push(r),d.go(e,i,t)}},d.sleep=function(e,n){if("function"!=typeof n)return{op:u.SLEEP,ms:e};setTimeout(n,e)},d.stop=function(){return{op:u.STOP}},t.default=d},{"../index":7,"../utils":16,"./utils":5}],4:[function(e,n,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return void 0===e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r(e)};t.default=function(e){var n=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=e,c=(0,u.getId)("state"),s=[];function d(e){s.forEach(function(n){n.id!==e.id&&(0,i.sput)(n,{value:r,syncing:!0})})}var p=function e(n,t){return n.length>1?(0,u.setProp)(e,"name",n[0]+t+n[1]):(0,u.setProp)(e,"name",n[0]),e};return(0,u.setProp)(p,"name","state"),p.id=c,p["@state"]=!0,p.parent=t,p.children=function(){return s},p.chan=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f,g=(0,i.sliding)(1,"sliding",c);return(0,i.sput)(g,r),g.afterTake(function(n,r){try{if((0,u.isGeneratorFunction)(e))return void(0,i.go)(e,function(e){return r(e)},[n],c);r(e(n))}catch(e){t(e)}}),g.beforePut(function(e,a){if(null!==e&&"object"===(void 0===e?"undefined":o(e))&&"syncing"in e&&e.syncing)a(e.value);else try{if((0,u.isGeneratorFunction)(n))return void(0,i.go)(n,function(e){r=e,d(g),a(r),i.logger.log(p,"STATE_VALUE_SET",r)},[r,e],c);r=n(r,e),d(g),a(r),i.logger.log(p,"STATE_VALUE_SET",r)}catch(e){t(e)}}),s.push(g),g},p.select=function(e,n){return p.chan(e,l,n)},p.mutate=function(e,n){return p.chan(a,e,n)},p.destroy=function(){return s.forEach(function(e){return(0,i.sclose)(e)}),r=void 0,i.grid.remove(p),i.logger.log(p,"STATE_DESTROYED"),n},p.get=function(){return r},p.set=function(e){return r=e,d({}),i.logger.log(p,"STATE_VALUE_SET",e),e},i.logger.log(p,"STATE_CREATED"),p.DEFAULT=p.chan(),i.grid.add(p),p};var i=e("../index"),u=e("../utils"),a=function(e){return e},l=function(e,n){return n},f=function(e){throw e}},{"../index":7,"../utils":16}],5:[function(e,n,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return void 0===e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r(e)};t.normalizeChannels=function(e){Array.isArray(e)||(e=[e]);return e.map(function(e){return(0,i.isState)(e)?e.DEFAULT:(0,i.verifyChannel)(e)})},t.normalizeTo=function(e){if((0,i.isChannel)(e))return function(n){return(0,i.sput)(e,n)};if("function"==typeof e)return e;throw new Error(e+(void 0!==e?" ("+(void 0===e?"undefined":o(e))+")":"")+" is not a channel."+("string"==typeof ch?' Did you forget to define it?\nExample: chan("'+e+'")':""))},t.normalizeOptions=function(e){var n=(e=e||u).onError||u.onError,t=e.strategy||i.ALL_REQUIRED,r="listen"in e&&e.listen,o="read"in e&&e.read,a="initialCall"in e?e.initialCall:u.initialCall;return{onError:n,strategy:t,initialCall:a,listen:r,read:o,userTakeCallback:e.userTakeCallback}};var i=e("../index");var u={onError:null,initialCall:!1}},{"../index":7}],6:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e={},n=[];return e.add=function(e){if(!e||!e.id)throw new Error('Each node in the grid must be an object with "id" field. Instead "'+e+'" given.');n.push(e)},e.remove=function(e){var t=n.findIndex(function(n){return n.id===e.id});t>=0&&n.splice(t,1)},e.reset=function(){n=[]},e.nodes=function(){return n},e.getNodeById=function(e){return n.find(function(n){return n.id===e})},e}},{}],7:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.inspector=t.stop=t.sleep=t.go=t.isRoutine=t.isState=t.isRiew=t.getChannel=t.isChannel=t.verifyChannel=t.timeout=t.merge=t.fork=t.call=t.schannelReset=t.channelReset=t.sclose=t.close=t.unsubAll=t.listen=t.sread=t.read=t.take=t.stake=t.put=t.sput=t.registry=t.reset=t.grid=t.logger=t.register=t.use=t.react=t.state=t.dropping=t.sliding=t.fixed=t.chan=t.buffer=t.CHANNELS=t.ONE_OF=t.ALL_REQUIRED=t.NOTHING=t.FORK_ROUTINE=t.CALL_ROUTINE=t.READ=t.STOP=t.SLEEP=t.NOOP=t.TAKE=t.PUT=t.ENDED=t.CLOSED=t.OPEN=void 0;var r=e("./riew");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var o=g(e("./registry")),i=g(e("./grid")),u=g(e("./logger")),a=e("./utils"),l=g(e("./react")),f=g(e("./csp/buf")),c=g(e("./csp/channel")),s=g(e("./csp/ops")),d=g(e("./csp/state")),p=g(e("./inspector"));function g(e){return e&&e.__esModule?e:{default:e}}t.OPEN=Symbol("OPEN"),t.CLOSED=Symbol("CLOSED"),t.ENDED=Symbol("ENDED"),t.PUT="PUT",t.TAKE="TAKE",t.NOOP="NOOP",t.SLEEP="SLEEP",t.STOP="STOP",t.READ="READ",t.CALL_ROUTINE="CALL_ROUTINE",t.FORK_ROUTINE="FORK_ROUTINE",t.NOTHING=Symbol("NOTHING"),t.ALL_REQUIRED=Symbol("ALL_REQUIRED"),t.ONE_OF=Symbol("ONE_OF");var y=t.CHANNELS={channels:{},getAll:function(){return this.channels},get:function(e){return this.channels[e]},set:function(e,n){return this.channels[e]=n,n},del:function(e){delete this.channels[e]},exists:function(e){return!!this.channels[e]},reset:function(){this.channels={}}},v=t.buffer=f.default,h=t.chan=c.default,b=(t.fixed=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return h(n||"fixed",v.fixed(e),t)},t.sliding=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return h(n||"sliding",v.sliding(e),t)},t.dropping=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return h(n||"dropping",v.dropping(e),t)},t.state=d.default,t.react={riew:function(){return l.default.apply(void 0,arguments)}},t.use=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return o.default.produce.apply(o.default,[e].concat(t))},t.register=function(e,n){return o.default.defineProduct(e,function(){return n}),n},t.logger=new u.default),m=t.grid=new i.default;t.reset=function(){return(0,a.resetIds)(),m.reset(),o.default.reset(),y.reset(),b.reset()},t.registry=o.default,t.sput=s.default.sput,t.put=s.default.put,t.stake=s.default.stake,t.take=s.default.take,t.read=s.default.read,t.sread=s.default.sread,t.listen=s.default.listen,t.unsubAll=s.default.unsubAll,t.close=s.default.close,t.sclose=s.default.sclose,t.channelReset=s.default.channelReset,t.schannelReset=s.default.schannelReset,t.call=s.default.call,t.fork=s.default.fork,t.merge=s.default.merge,t.timeout=s.default.timeout,t.verifyChannel=s.default.verifyChannel,t.isChannel=s.default.isChannel,t.getChannel=s.default.getChannel,t.isRiew=s.default.isRiew,t.isState=s.default.isState,t.isRoutine=s.default.isRoutine,t.go=s.default.go,t.sleep=s.default.sleep,t.stop=s.default.stop,t.inspector=(0,p.default)(b)},{"./csp/buf":1,"./csp/channel":2,"./csp/ops":3,"./csp/state":4,"./grid":6,"./inspector":8,"./logger":9,"./react":10,"./registry":11,"./riew":12,"./utils":16}],8:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.enable(),e.on(function(e){"undefined"!=typeof window&&(t&&console.log("Riew:inspector",e),n(e),window.postMessage({type:"RIEW_SNAPSHOT",source:"riew",origin:o(),snapshot:e,time:(new Date).getTime()},"*"))})}};var r=function(e){return void 0!==e};function o(){return r(location)&&r(location.protocol)&&r(location.host)?location.protocol+"//"+location.host:"unknown"}},{}],9:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e={},n=[],t=[],r=!1,i=!1,l=[];return e.on=function(e){return l.push(e)},e.log=function(n,f,c){if(!i)return null;var g;(0,o.isRiew)(n)?n={id:(g=n).id,name:g.name,type:a,viewData:(0,u.default)(g.renderer.data()),children:g.children.map(function(e){return(0,o.isState)(e)?s(e):(0,o.isChannel)(e)?d(e):(0,o.isRoutine)(e)?p(e):void console.warn("Riew logger: unrecognized riew child",e)})}:(0,o.isState)(n)?n=s(n):(0,o.isChannel)(n)?n=d(n):(0,o.isRoutine)(n)?n=p(n):console.warn("Riew logger: unrecognized who",n,f),t.push({who:n,what:f,meta:(0,u.default)(c)}),r||(r=!0,Promise.resolve().then(function(){var n=e.frame(t);r=!1,t=[],l.forEach(function(e){return e(n)})}))},e.frame=function(e){if(!i)return null;var t=(0,u.default)(e);return n.push(t),t},e.now=function(){return n.length>0?n[n.length-1]:null},e.frames=function(){return n},e.reset=function(){n=[],i=!1},e.enable=function(){i=!0},e.disable=function(){i=!1},e};var r,o=e("./index"),i=e("./sanitize"),u=(r=i)&&r.__esModule?r:{default:r};var a="RIEW",l="STATE",f="CHANNEL",c="ROUTINE";function s(e){return{id:e.id,name:e.name,parent:e.parent,type:l,value:(0,u.default)(e.get()),children:e.children().map(function(e){if((0,o.isChannel)(e))return d(e);console.warn("Riew logger: unrecognized state child",e)})}}function d(e){return{id:e.id,name:e.name,parent:e.parent,type:f,value:(0,u.default)(e.value()),puts:e.buff.puts.map(function(e){return{item:e.item}}),takes:e.buff.takes.map(function(e){var n=e.options;return{read:n.read,listen:n.listen}})}}function p(e){return{id:e.id,type:c,name:e.name,parent:e.parent}}},{"./index":7,"./sanitize":13}],10:[function(e,n,t){(function(n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];var c=(0,a.getFuncName)(e);return function n(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=function(n){var a=(0,i.useState)(null),s=r(a,2),d=s[0],p=s[1],g=(0,i.useState)(null),y=r(g,2),v=y[0],h=y[1],b=(0,i.useRef)(!0);return(0,i.useEffect)(function(){d&&d.update(n)},[n]),(0,i.useEffect)(function(){var e;(d=l.namedRiew.apply(void 0,[c,function(e){b&&h(null===e?null:e)}].concat(t)),o&&o.length>0)&&(d=(e=d).with.apply(e,f(o)));return d.name=c,p(d),d.mount(n),b.current=!0,function(){b.current=!1,d.unmount()}},[]),null===v?null:u.default.createElement(e,v)};return a.displayName="Riew_"+c,a.with=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n(t)},a}()};var o,i="undefined"!=typeof window?window.React:void 0!==n?n.React:null,u=(o=i)&&o.__esModule?o:{default:o},a=e("../utils"),l=e("../index");function f(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../index":7,"../utils":16}],11:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i=(o={},(r={}).defineProduct=function(e,n){if(o[e])throw new Error('A resource with type "'+e+'" already exists.');o[e]=n},r.undefineProduct=function(e){if(!o[e])throw new Error('There is no resource with type "'+e+'" to be removed.');delete o[e]},r.produce=function(e){for(var n,t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];if(!o[e])throw new Error('There is no resource with type "'+e+'".');return(n=o)[e].apply(n,r)},r.reset=function(){o={}},r.debug=function(){return{productNames:Object.keys(o)}},r);t.default=i},{}],12:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};t.riew=l,t.namedRiew=f;var o=e("./index"),i=e("./utils");function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var a=function(e){var n={},t=!1,r=!0;return{push:function(u){u!==o.CLOSED&&u!==o.ENDED&&(n=(0,i.accumulate)(n,u),t||(t=!0,Promise.resolve().then(function(){r&&e(n),t=!1})))},destroy:function(){r=!1},data:function(){return n}}};function l(e){for(var n=(0,i.getFuncName)(e),t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return f.apply(void 0,[n,e].concat(r))}function f(e,n){for(var t=arguments.length,f=Array(t>2?t-2:0),c=2;c<t;c++)f[c-2]=arguments[c];var s=a(function(e){n(e),o.logger.log(p,"RIEW_RENDERED",e)}),d=(0,i.getId)(e+"_riew"),p={id:d,name:e,"@riew":!0,children:[],renderer:s},g=[],y={},v={},h=function(e){return p.children.push(e),e},b=function(e){return h((0,o.state)(e,d))},m=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return h((0,o.sliding)(n,t||"sliding_"+e,d))},E=function(n){return h((0,o.fixed)(n,"fixed_"+e,d))},O=function(n){return h((0,o.dropping)(n,"dropping_"+e,d))},S=function(e,n){e.id in v||(v[e.id]=(0,o.listen)(e,n,{initialCall:!0}))},N=m(1,"sliding_"+e+"_view",d),T=m(1,"sliding_"+e+"_props",d),_=function(e){return Object.keys(e).reduce(function(n,t){var r=(0,o.verifyChannel)(e[t],!1);return null!==r?S(r,function(e){return(0,o.sput)(N,u({},t,e))}):(0,o.isState)(e[t])?S(e[t].DEFAULT,function(e){return(0,o.sput)(N,u({},t,e))}):n[t]=e[t],n},{})};return p.mount=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,i.requireObject)(e),(0,o.sput)(T,e),S(T,function(e){(0,o.sput)(N,e)}),S(N,s.push),p.children=p.children.concat(f.map(function(e){return(0,o.go)(e,function(e){"function"==typeof e&&g.push(e)},[r({render:function(e){(0,i.requireObject)(e),(0,o.sput)(N,_(e))},state:b,fixed:E,sliding:m,dropping:O,props:T},y)],d)})),(0,i.isObjectEmpty)(y)||(0,o.sput)(N,_(y)),o.logger.log(p,"RIEW_MOUNTED",e)},p.unmount=function(){g.forEach(function(e){return e()}),g=[],Object.keys(v).forEach(function(e){v[e]()}),v={},p.children.forEach(function(e){(0,o.isState)(e)?e.destroy():(0,o.isRoutine)(e)?e.stop():(0,o.isChannel)(e)&&(0,o.close)(e)}),p.children=[],s.destroy(),o.grid.remove(p),o.logger.log(p,"RIEW_UNMOUNTED")},p.update=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,i.requireObject)(e),(0,o.sput)(T,e),o.logger.log(p,"RIEW_UPDATED",e)},p.with=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return p.__setExternals(n),p},p.test=function(e){var t=l.apply(void 0,[n].concat(f));return t.__setExternals([e]),t},p.__setExternals=function(e){var n=e.reduce(function(e,n){return e=r({},e,"string"==typeof n?u({},n,(0,o.use)(n)):n)},{});y=r({},y,n)},o.grid.add(p),o.logger.log(p,"RIEW_CREATED"),p}},{"./index":7,"./utils":16}],13:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=void 0;try{t=JSON.parse(r.default.stringify(e,function(e,n){return"function"==typeof n?""===n.name?"<anonymous>":"function "+n.name+"()":n instanceof Error?(0,o.default)(n):n},void 0,!0))}catch(e){n&&console.log(e),t=null}return t};var r=i(e("./vendors/CircularJSON")),o=i(e("./vendors/SerializeError"));function i(e){return e&&e.__esModule?e:{default:e}}},{"./vendors/CircularJSON":14,"./vendors/SerializeError":15}],14:[function(e,n,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return void 0===e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r(e)},i="~",u="\\x"+("0"+i.charCodeAt(0).toString(16)).slice(-2),a="\\"+u,l=new RegExp(u,"g"),f=new RegExp(a,"g"),c=new RegExp("(?:^|([^\\\\]))"+a),s=[].indexOf||function(e){for(var n=this.length;n--&&this[n]!==e;);return n},d=String;function p(e,n,t){return n instanceof Array?function(e,n,t){for(var r=0,o=n.length;r<o;r++)n[r]=p(e,n[r],t);return n}(e,n,t):n instanceof d?n.length?t.hasOwnProperty(n)?t[n]:t[n]=function(e,n){for(var t=0,r=n.length;t<r;e=e[n[t++].replace(f,i)]);return e}(e,n.split(i)):e:n instanceof Object?function(e,n,t){for(var r in n)n.hasOwnProperty(r)&&(n[r]=p(e,n[r],t));return n}(e,n,t):n}t.default={stringify:function(e,n,t,r){return JSON.stringify(e,function(e,n,t){var r,f,c=!!n,d=[],p=[e],g=[e],y=[t?i:"<circular>"],v=e,h=1;return c&&(f="object"===(void 0===n?"undefined":o(n))?function(e,t){return""!==e&&n.indexOf(e)<0?void 0:t}:n),function(e,n){return c&&(n=f.call(this,e,n)),""!==e&&(v!==this&&(r=h-s.call(p,this)-1,h-=r,p.splice(h,p.length),d.splice(h-1,d.length),v=this),"object"===(void 0===n?"undefined":o(n))&&n?(s.call(p,n)<0&&p.push(v=n),h=p.length,(r=s.call(g,n))<0?(r=g.push(n)-1,t?(d.push((""+e).replace(l,u)),y[r]=i+d.join(i)):y[r]=y[0]):n=y[r]):"string"==typeof n&&t&&(n=n.replace(u,a).replace(i,u))),n}}(e,n,!r),t)},parse:function(e,n){return JSON.parse(e,function(e){return function(n,t){var r="string"==typeof t;return r&&t.charAt(0)===i?new d(t.slice(1)):(""===n&&(t=p(t,t,{})),r&&(t=t.replace(c,"$1"+i).replace(a,u)),e?e.call(this,n,t):t)}}(n))}}},{}],15:[function(e,n,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return void 0===e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r(e)};n.exports=function(e){return"object"===(void 0===e?"undefined":o(e))?function e(n,t){var r=Array.isArray(n)?[]:{};t.push(n);var i=!0;var u=!1;var a=void 0;try{for(var l,f=Object.keys(n)[Symbol.iterator]();!(i=(l=f.next()).done);i=!0){var c=l.value,s=n[c];"function"!=typeof s&&(s&&"object"===(void 0===s?"undefined":o(s))?-1!==t.indexOf(n[c])?r[c]="[Circular]":r[c]=e(n[c],t.slice(0)):r[c]=s)}}catch(e){u=!0,a=e}finally{try{!i&&f.return&&f.return()}finally{if(u)throw a}}"string"==typeof n.name&&(r.name=n.name);"string"==typeof n.message&&(r.message=n.message);"string"==typeof n.stack&&(r.stack=n.stack);return r}(e,[]):"function"==typeof e?"[Function: "+(e.name||"anonymous")+"]":e}},{}],16:[function(e,n,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return void 0===e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r(e)};t.isObjectEmpty=function(e){for(var n in e)if(e.hasOwnProperty(n))return!1;return!0},t.requireObject=function(e){if(null==e||void 0!==e&&"object"!==(void 0===e?"undefined":i(e)))throw new Error('A key-value object expected. Instead "'+e+'" passed.')},t.resetIds=function(){u=0},t.setProp=function(e,n,t){Object.defineProperty(e,n,{writable:!0,value:t})};t.getFuncName=function(e){if(e.name)return e.name;var n=/^function\s+([\w\$]+)\s*\(/.exec(e.toString());return n?n[1]:"unknown"};var u=0;t.getId=function(e){return e+"_"+ ++u};t.accumulate=function(e,n){return o({},e,n)},t.isPromise=function(e){return e&&"function"==typeof e.then},t.isObjectLiteral=function(e){return!!e&&e.constructor==={}.constructor};var a=t.isGenerator=function(e){return e&&"function"==typeof e.next&&"function"==typeof e.throw};t.isGeneratorFunction=function(e){var n=e.constructor;return!!n&&("GeneratorFunction"===n.name||"GeneratorFunction"===n.displayName||a(n.prototype))}},{}]},{},[7])(7)});