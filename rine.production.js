!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).rine=e()}}(function(){return function i(o,a,f){function c(t,e){if(!a[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(s)return s(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var u=a[t]={exports:{}};o[t][0].call(u.exports,function(e){return c(o[t][1][e]||e)},u,u.exports,i,o,a,f)}return a[t].exports}for(var s="function"==typeof require&&require,e=0;e<f.length;e++)c(f[e]);return c}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=0;function i(e,t,n){var r={__rine:"task",id:"@@t"+ ++u,active:!0,once:!(2<arguments.length&&void 0!==n)||n,type:e,callback:t,done:null,cancel:function(){this.active=!1,o.removeTask(this)},execute:function(e,t){this.active&&(t?this.callback(e,t):this.callback(e),this.once&&o.removeTask(this))}};return t||(r.done=new Promise(function(e){r.callback=e})),r}var o={tasks:[],addTask:function(e,t,n){var r=i(e,t,n);return this.tasks.push(r),r},removeTask:function(t){this.tasks=this.tasks.filter(function(e){return e.id!==t.id})},put:function(t,n){this.tasks.forEach(function(e){e.type===t?e.execute(n):"*"===e.type&&e.execute(n,t)})},take:function(e,t){var n=this;return Array.isArray(e)?e.map(function(e){return n.addTask(e,t,!0)}):this.addTask(e,t,!0)},takeEvery:function(e,t){var n=this;return Array.isArray(e)?e.map(function(e){return n.addTask(e,t,!1)}):this.addTask(e,t,!1)},reset:function(){this.tasks=[]},isTask:function(e){return e&&"task"===e.__rine},putBulk:function(e){var t=this;e.forEach(function(e){return t.put(e)})}};n.default=o},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n.default=function(r,u){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(e){return e},e=3<arguments.length&&void 0!==arguments[3]&&arguments[3],o=function(r){return Object.keys(r).reduce(function(e,t){var n=r[t];return c(n)?e[t]=s(n):e[t]=n,e},{})}(r);!1===e&&u(i(o));var t=Object.keys(r).map(function(t){var e=r[t];if(c(e)){var n=e;return n.subscribe(function(){var e=s(n);(0,f.default)(o[t],e)||u(i(o=a({},o,function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}({},t,e))))})}}).filter(function(e){return!!e});return function(){return t.forEach(function(e){return e()})}};var r,u=e("fast-deep-equal"),f=(r=u)&&r.__esModule?r:{default:r};function c(e){return"state"===e.__rine}function s(e){return e.get()}},{"fast-deep-equal":7}],3:[function(i,e,o){(function(e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,u=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){u=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(u)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};o.createRoutineInstance=u,o.default=function(c){function e(e){var t=(0,p.useState)(null),n=l(t,2),r=n[0],u=n[1],i=(0,p.useState)(null),o=l(i,2),a=o[0],f=o[1];return(0,p.useEffect)(function(){r&&r.updated(e)},[e]),(0,p.useEffect)(function(){r&&r.rendered()},[a]),(0,p.useEffect)(function(){return u(r=d.createRoutineInstance(c)),r.in(e,s,f),function(){r.out(),y.default.put(k(r.id))}},[]),a}var s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){return null},d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{createRoutineInstance:u};return e.displayName="Routine("+(0,n.getFuncName)(c)+")",e};var p="undefined"!=typeof window?window.React:void 0!==e?e.React:null,v=t(p),y=t(i("./System")),n=i("../utils"),b=i("./state"),h=t(b);function t(e){return e&&e.__esModule?e:{default:e}}var r=0,m=function(){return"@@r"+ ++r},k=function(e){return e+"_unmounted"};function u(r){var e=m(),u=!1,i=[],o={},a=(0,h.default)(),f=[(0,b.teardownAction)(a.id)],c=void 0;function s(){return u}var t={__rine:"routine",id:e,name:(0,n.getFuncName)(r),isMounted:s,in:function(e,t,n){u=!0,a.set(e),r({render:function(e){return u?("string"==typeof e||"number"==typeof e||v.default.isValidElement(e)?n(e):n(null===e?function(){return null}:v.default.createElement(t,function(e){return o=d({},o,e)}(e))),new Promise(function(e){return c=e})):Promise.resolve()},useProps:function(e){a.subscribe(e),e(a.get())},put:function(){return y.default.put.apply(y.default,arguments)},take:function(){var e=y.default.take.apply(y.default,arguments);return i.push(e),e.done},takeEvery:function(){var e=y.default.takeEvery.apply(y.default,arguments);return i.push(e),e},state:function(){var e=h.default.apply(void 0,arguments);return f.push((0,b.teardownAction)(e.id)),e},isMounted:s})},updated:function(e){a.set(e)},rendered:function(){c&&c()},out:function(){u=!1}};return y.default.addTask(k(e),function(){i.forEach(function(e){return e.cancel()}),y.default.putBulk(f)}),t}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../utils":6,"./System":1,"./state":4}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isState=n.teardownAction=void 0,n.default=function(e,n){var r=0,u=e,i=[],t=void 0,o={__rine:"state",__subscribers:function(){return i},id:f(),set:function(e){u=e,i.forEach(function(e){return(0,e.update)(u)})},get:function(){return u},subscribe:function(e){var t=++r;return i.push({id:t,update:e}),function(){i=i.filter(function(e){return e.id!==t})}},teardown:function(){i=[],u=void 0},put:function(e,t){n&&this.set(n(u,{type:e,payload:t}))}};n&&(t=a.default.takeEvery("*",function(e,t){return o.put(t,e)}));return a.default.addTask(c(o.id),function(){o.teardown(),t&&t.cancel()}),o};var r,u=e("./System"),a=(r=u)&&r.__esModule?r:{default:r};var i=0,f=function(){return"@@s"+ ++i},c=n.teardownAction=function(e){return e+"_teardown"};n.isState=function(e){return e&&"state"===e.__rine}},{"./System":1}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.takeEvery=n.take=n.put=n.connect=n.state=n.routine=n.System=void 0;var r=e("./api/System");Object.defineProperty(n,"System",{enumerable:!0,get:function(){return f(r).default}});var u=e("./api/routine");Object.defineProperty(n,"routine",{enumerable:!0,get:function(){return f(u).default}});var i=e("./api/state");Object.defineProperty(n,"state",{enumerable:!0,get:function(){return f(i).default}});var o=e("./api/connect");Object.defineProperty(n,"connect",{enumerable:!0,get:function(){return f(o).default}});var a=f(r);function f(e){return e&&e.__esModule?e:{default:e}}n.put=a.default.put.bind(a.default),n.take=a.default.take.bind(a.default),n.takeEvery=a.default.takeEvery.bind(a.default)},{"./api/System":1,"./api/connect":2,"./api/routine":3,"./api/state":4}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.isGenerator=function(e){return e&&"function"==typeof e.next},n.isPromise=function(e){return e&&"function"==typeof e.then},n.getFuncName=function(e){if(e.name)return e.name;var t=/^function\s+([\w\$]+)\s*\(/.exec(e.toString());return t?t[1]:"unknown"}},{}],7:[function(e,t,n){"use strict";var p=Array.isArray,v=Object.keys,y=Object.prototype.hasOwnProperty;t.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var r,u,i,o=p(t),a=p(n);if(o&&a){if((u=t.length)!=n.length)return!1;for(r=u;0!=r--;)if(!e(t[r],n[r]))return!1;return!0}if(o!=a)return!1;var f=t instanceof Date,c=n instanceof Date;if(f!=c)return!1;if(f&&c)return t.getTime()==n.getTime();var s=t instanceof RegExp,d=n instanceof RegExp;if(s!=d)return!1;if(s&&d)return t.toString()==n.toString();var l=v(t);if((u=l.length)!==v(n).length)return!1;for(r=u;0!=r--;)if(!y.call(n,l[r]))return!1;for(r=u;0!=r--;)if(!e(t[i=l[r]],n[i]))return!1;return!0}return t!=t&&n!=n}},{}]},{},[5])(5)});