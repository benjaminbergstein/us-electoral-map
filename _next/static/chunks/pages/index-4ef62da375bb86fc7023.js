_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},i=r("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,i=e.hasQuery,a=void 0!==i&&i;return r||o&&a}},"2qu3":function(e,t,r){"use strict";var n=r("lSNA"),o=r("lwsE"),i=r("W8MJ");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var s,f=(s=r("q1tI"))&&s.__esModule?s:{default:s},d=r("8L3h"),p=r("jwwS");var b=[],y=[],h=!1;function O(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function j(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var o=O(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function v(e,t){return f.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function m(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:v,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new g(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!h&&"function"===typeof r.webpack){var i=r.webpack();y.push((function(e){var t,r=u(i);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(a){r.e(a)}finally{r.f()}}))}var a=function(e,t){o();var i=f.default.useContext(p.LoadableContext),a=(0,d.useSubscription)(n);return f.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),f.default.useMemo((function(){return a.loading||a.error?f.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:n.retry}):a.loaded?r.render(a.loaded,e):null}),[e,a])};return a.preload=function(){return o()},a.displayName="LoadableComponent",f.default.forwardRef(a)}var g=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=c(c({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function w(e){return m(O,e)}function x(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return x(e,t)}))}w.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return m(j,e)},w.preloadAll=function(){return new Promise((function(e,t){x(b).then(e,t)}))},w.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return h=!0,t()};x(y,e).then(r,r)}))},window.__NEXT_PRELOADREADY=w.preloadReady;var _=w;t.default=_},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),i=(n=r("Xuae"))&&n.__esModule?n:{default:n},a=r("lwAK"),c=r("FYa8"),u=r("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var l=d[c];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?i=!1:r.add(l);else{var s=o.props[l],f=n[l]||new Set;f.has(s)?i=!1:(f.add(s),n[l]=f)}}}return i}}()).reverse().map((function(e,t){var r=e.key||t;return o.default.cloneElement(e,{key:r})}))}function b(e){var t=e.children,r=(0,o.useContext)(a.AmpStateContext),n=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)}b.rewind=function(){};var y=b;t.default=y},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},BsWD:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("a3WO");function o(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("q1tI"),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r};function u(e){return function(t){return n.createElement(l,a({attr:a({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return n.createElement(t.tag,a({key:r},t.attr),e(t.child))}))}(e.child))}}function l(e){var t=function(t){var r,o=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var i=e.attr,u=e.title,l=c(e,["attr","title"]);return n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,l,{className:r,style:a({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},ODXe:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("BsWD");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),i=r("ZhPi"),a=r("Bnag");e.exports=function(e){return n(e)||o(e)||i(e)||a()}},RNiq:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return R}));var n=r("nKUr"),o=r("8Kt/"),i=r.n(o),a=r("q1tI");function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=r("rePB"),l=r("a6RD"),s=r.n(l);r("vcXL");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(u.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=e.justifyContent,r=e.alignItems,n=e.display,o=e.flex,i=e.flexDirection,a=e.flexWrap,c=e.width,u=e.height;return d(d({},e.style),{},{justifyContent:t,alignItems:r,height:u,width:c,display:n,flexDirection:i,flex:o,flexWrap:a})},b=function(e){var t=e.children,r=c(e,["children"]);return Object(n.jsx)("div",{style:p(r),children:t})},y=r("ma3e"),h=function(e){var t=e.value,r=e.onChange,o=e.options,i=Object(a.useRef)(null);return Object(n.jsxs)("div",{style:{position:"relative",border:"1px solid lightgray",padding:"10px",borderRadius:"5px",display:"flex",alignItems:"center"},children:[t,Object(n.jsx)(y.a,{style:{marginLeft:"10px"}}),Object(n.jsx)("select",{value:t,ref:i,onChange:function(){r(i.current.value)},style:{opacity:0,position:"absolute",top:0,left:"10px",width:"100%",height:"100%"},children:o.map((function(e){return Object(n.jsx)("option",{children:e},e)}))})]})},O=r("ODXe"),j=r("uw7T"),v=r("YSmr"),m=function(){var e=Object(a.useContext)(j.b),t=e.data,r=e.updateUserSelection;return void 0===t?null:Object(n.jsx)(n.Fragment,{children:Object.entries(t).map((function(e){var t=Object(O.a)(e,2),o=t[0],i=t[1].fillKey;return Object(n.jsx)("div",{onClick:function(){r(o,i)},id:o,className:"State",style:{background:v.a[i],color:"white",padding:"10px"},children:o},o)}))})},g=function(e){var t=e.party,r=Object(a.useContext)(j.b).totals;return r?Object(n.jsx)(b,{flex:"1",children:Object(n.jsx)("h1",{id:"".concat(t,"Total"),style:{color:v.b[t],padding:"0 2px",textShadow:"0px 1px 1px #444",textAlign:"center",fontSize:"1.15rem",margin:0},children:r[t]})}):null},w=function(){return Object(n.jsxs)(b,{display:"flex",flexDirection:"row",justifyContext:"space-between",style:{margin:"0px 8%"},children:[Object(n.jsx)(g,{party:"dems"}),Object(n.jsx)(g,{party:"neutral"}),Object(n.jsx)(g,{party:"GOP"})]})};function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){Object(u.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=s()((function(){return Promise.all([r.e(4),r.e(5),r.e(11)]).then(r.bind(null,"xZMB"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["xZMB"]},modules:["./Map"]}}),S=["2008 Presidential Election","2016 Presidential Election","2020 Presidential Election","2020 Presidential Election - Predictions"],k=function(e){var t=e.onClick,r=e.style,o=void 0===r?{}:r,i=e.children;return Object(n.jsx)("button",{onClick:function(){return t()},style:_({marginLeft:"10px",border:"0px solid transparent",background:"transparent",cursor:"pointer"},o),children:i})},E=function(){var e=Object(a.useContext)(j.b),t=e.title,r=e.resetUserSelections,o=e.changeData;return Object(n.jsxs)("div",{style:{textAlign:"center"},children:[Object(n.jsx)("h1",{style:{lineHeight:"1.25",padding:"0 10px",fontSize:"1rem",margin:"0.75rem",color:"lightslategray"},children:"U.S Electoral College Map"}),Object(n.jsx)("h2",{style:{fontSize:"0.75rem",color:"darkslategray"},children:Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(n.jsx)(h,{value:t,options:S,onChange:o}),Object(n.jsx)(k,{onClick:function(){return r()},style:{marginLeft:"10px"},children:Object(n.jsx)(y.b,{})})]})})]})},C=function(){var e=Object(a.useContext)(j.b);return Object(n.jsx)("div",{style:{display:"flex",flexDirection:"row",overflowX:"scroll",width:"100vw"},children:Object(n.jsx)(m,{data:e})})},D=function(e){e.height,e.flex;var t=e.children;c(e,["height","flex","children"]);return Object(n.jsx)(b,{children:t})},M=function(e){var t=e.children;return Object(n.jsx)(b,{display:"flex",flexDirection:"column",height:"100%",children:t})},A=function(){return Object(n.jsxs)(b,{children:[Object(n.jsx)(b,{children:Object(n.jsx)(E,{})}),Object(n.jsx)(w,{})]})},I=function(){return Object(n.jsx)(j.a,{children:Object(n.jsxs)(M,{children:[Object(n.jsx)(C,{}),Object(n.jsx)(D,{children:Object(n.jsx)(b,{children:Object(n.jsx)(A,{})})}),Object(n.jsx)(b,{flex:"1",style:{overflowY:"hidden"},children:Object(n.jsx)(P,{})}),Object(n.jsx)(D,{children:Object(n.jsx)(b,{children:!1})})]})})},N=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(i.a,{children:[Object(n.jsx)("title",{children:"US Electoral College Map"}),Object(n.jsx)("link",{rel:"shortcut icon",href:"favicon.ico"}),Object(n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"})]}),Object(n.jsx)(I,{})]})};function R(){return Object(n.jsx)(N,{})}},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},W8MJ:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),o=r("lwsE"),i=r("W8MJ"),a=(r("PJYZ"),r("7W2i")),c=r("a1gu"),u=r("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}t.__esModule=!0,t.default=void 0;var s=r("q1tI"),f=function(e){a(r,e);var t=l(r);function r(e){var i;return o(this,r),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(s.Component);t.default=f},YSmr:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a}));var n="cornflowerblue",o="lightslategray",i={defaultFill:o,1:o,2:n,3:"indianred"},a={dems:n,neutral:o,GOP:"indianred"}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},a1gu:function(e,t,r){var n=r("cDf5"),o=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},a3WO:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},a6RD:function(e,t,r){"use strict";var n=r("lSNA");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=u,t.default=function(e,t){var r=a.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=i(i({},n),e));if(n=i(i({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=a.default.Map;var o={},c=e.modules();Object.keys(c).forEach((function(e){var t=c[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=o}n.loadableGenerated&&delete(n=i(i({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,u(r,n);delete n.ssr}return r(n)};c(r("q1tI"));var a=c(r("2qu3"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},cDf5:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},jwwS:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},uw7T:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r("ODXe"),o=r("rePB"),i=r("nKUr"),a=r("q1tI"),c=r.n(a),u=r("vcXL"),l=r.n(u);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=c.a.createContext({}),p=JSON.parse(window.localStorage.getItem("uselectoralmap")),b=p.whichData||"2020 Presidential Election",y=p.selections||{},h=function(e){var t=e.children,r=function(){var e=Object(a.useState)(b),t=e[0],r=e[1],i=Object(a.useState)(void 0),c=i[0],u=i[1],s=Object(a.useState)(y),d=s[0],p=s[1],h=Object(a.useState)([]),O=h[0],j=h[1];if(Object(a.useEffect)((function(){l()("results/president/".concat(t,".json")).then((function(e){return e.json()})).then((function(e){u(e)}))}),[t]),Object(a.useEffect)((function(){var e=function(){j([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),"undefined"===typeof c)return{loading:!0};var v=f(f({},c),d);console.debug(JSON.stringify(v));var m=Object.entries(v).reduce((function(e,t){var r=Object(n.a)(t,2),i=(r[0],r[1]),a=i.fillKey,c=i["Electoral Votes"],u=1===a?"neutral":2===a?"dems":"GOP";return f(f({},e),{},Object(o.a)({},u,e[u]+c))}),{GOP:0,dems:0,neutral:0});return{title:t,totals:m,windowSize:O,data:v,updateUserSelection:function(e){var r=v[e],n=f(f({},d),{},Object(o.a)({},e,f(f({},r),{},{fillKey:(r.fillKey+1)%3+1})));window.localStorage.setItem("uselectoralmap",JSON.stringify({whichData:t,selections:n})),p(n)},loading:!1,resetUserSelections:function(){window.localStorage.setItem("uselectoralmap",JSON.stringify({whichData:t})),p({})},changeData:function(e){window.localStorage.setItem("uselectoralmap",JSON.stringify({})),p({}),r(e)}}}();return Object(i.jsx)(d.Provider,{value:r,children:t})};t.b=d},vcXL:function(e,t,r){"use strict";var n=self.fetch.bind(self);e.exports=n,e.exports.default=e.exports},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",0,1,3]]]);