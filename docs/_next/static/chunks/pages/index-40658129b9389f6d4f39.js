_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},"/9aa":function(e,t,n){var r=n("NykK"),o=n("ExA7");e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},"2qu3":function(e,t,n){"use strict";var r=n("lSNA"),o=n("lwsE"),i=n("W8MJ");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.__esModule=!0,t.default=void 0;var s,f=(s=n("q1tI"))&&s.__esModule?s:{default:s},d=n("8L3h"),p=n("jwwS");var b=[],y=[],h=!1;function v(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function O(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=v(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function j(e,t){return f.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function m(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:j,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new g(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!h&&"function"===typeof n.webpack){var i=n.webpack();y.push((function(e){var t,n=u(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(a){n.e(a)}finally{n.f()}}))}var a=function(e,t){o();var i=f.default.useContext(p.LoadableContext),a=(0,d.useSubscription)(r);return f.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),i&&Array.isArray(n.modules)&&n.modules.forEach((function(e){i(e)})),f.default.useMemo((function(){return a.loading||a.error?f.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:r.retry}):a.loaded?n.render(a.loaded,e):null}),[e,a])};return a.preload=function(){return o()},a.displayName="LoadableComponent",f.default.forwardRef(a)}var g=function(){function e(t,n){o(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=c(c({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function x(e){return m(v,e)}function w(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return w(e,t)}))}x.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return m(O,e)},x.preloadAll=function(){return new Promise((function(e,t){w(b).then(e,t)}))},x.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return h=!0,t()};w(y,e).then(n,n)}))},window.__NEXT_PRELOADREADY=x.preloadReady;var S=x;t.default=S},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),c=n("FYa8"),u=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var l=d[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var s=o.props[l],f=r[l]||new Set;f.has(s)?i=!1:(f.add(s),r[l]=f)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}b.rewind=function(){};var y=b;t.default=y},AP2z:function(e,t,n){var r=n("nmnc"),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(u){}var o=a.call(e);return r&&(t?e[c]=n:delete e[c]),o}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("a3WO");function o(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},DzJC:function(e,t,n){var r=n("sEfC"),o=n("GoyQ");e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),r(e,t,{leading:i,maxWait:t,trailing:a})}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},GoyQ:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,n){var r=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function u(e){return function(t){return r.createElement(l,a({attr:a({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,a({key:n},t.attr),e(t.child))}))}(e.child))}}function l(e){var t=function(t){var n,o=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var i=e.attr,u=e.title,l=c(e,["attr","title"]);return r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,l,{className:n,style:a({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},NykK:function(e,t,n){var r=n("nmnc"),o=n("AP2z"),i=n("KfNM"),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},ODXe:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("BsWD");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},QIyF:function(e,t,n){var r=n("Kz5y");e.exports=function(){return r.Date.now()}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return L})),n.d(t,"default",(function(){return R}));var r=n("nKUr"),o=n("q1tI"),i=n.n(o);function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=n("rePB"),u=n("a6RD"),l=n.n(u);n("vcXL");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){var t=e.justifyContent,n=e.alignItems,r=e.display,o=e.flex,i=e.flexDirection,a=e.flexWrap,c=e.order,u=e.flexGrow,l=e.flexShrink,s=e.flexBasis,d=e.width,p=e.height;return f(f({},e.style),{},{justifyContent:t,alignItems:n,height:p,width:d,display:r,order:c,flexDirection:i,flex:o,flexWrap:a,flexGrow:u,flexShrink:l,flexBasis:s})},p=i.a.forwardRef((function(e,t){var n=e.key,o=e.id,i=e.onMouseEnter,c=e.onMouseLeave,u=e.onClick,l=e.children,s=a(e,["key","id","onMouseEnter","onMouseLeave","onClick","children"]);return Object(r.jsx)("div",{id:o,onClick:u,onMouseEnter:i,onMouseLeave:c,ref:t,style:d(s),children:l},n)})),b=n("ma3e"),y=function(e){var t=e.value,n=e.onChange,i=e.options,a=e.maxWidth,c=void 0===a?200:a,u=Object(o.useRef)(null);return Object(r.jsxs)("div",{style:{position:"relative",border:"1px solid lightgray",padding:"10px",borderRadius:"5px",display:"flex",alignItems:"center"},children:[Object(r.jsx)("span",{style:{whiteSpace:"nowrap",textOverflow:"ellipsis",maxWidth:"".concat(c,"px"),overflow:"hidden"},children:t}),Object(r.jsx)(b.a,{style:{marginLeft:"10px"}}),Object(r.jsx)("select",{value:t,ref:u,onChange:function(){n(u.current.value)},style:{opacity:0,position:"absolute",top:0,left:"10px",width:"100%",height:"100%"},children:i.map((function(e){return Object(r.jsx)("option",{children:e},e)}))})]})},h=n("ODXe"),v=n("uw7T"),O=n("YSmr"),j=function(e){var t=e.stateName,n=Object(o.useContext)(v.b),a=n.focusedState,c=n.stateOrder,u=n.data,l=n.updateUserSelection,s=u[t],f=Object(o.useRef)(null),d=s.fillKey,b=i.a.useState(!1),y=Object(h.a)(b,2),j=y[0],m=y[1],g=O.c[d],x=s["Electoral Votes"];return Object(o.useLayoutEffect)((function(){console.log(a),console.log(f),null!==f.current&&(a===t?(f.current.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),m(!0)):m(!1))}),[a]),Object(r.jsxs)(p,{ref:f,flexBasis:"".concat(7*x,"px"),flexShrink:0,flexGrow:1,order:c.indexOf(t),onClick:function(){l(t,d)},onMouseEnter:function(){m(!0)},onFocus:function(){m(!0)},onBlur:function(){m(!0)},onMouseLeave:function(){m(!1)},id:t,className:"State",style:{textAlign:"center",cursor:"pointer",marginRight:"1px",borderBottom:"8px solid ".concat(j?g:"white"),boxShadow:j?"inset 1px 12px 13px -5px rgba(255, 255, 255, 0.4)":void 0,background:g,color:"white",padding:"10px"},children:[Object(r.jsx)(p,{children:t}),Object(r.jsx)(p,{style:{fontSize:"0.5rem"},children:x})]},t)},m=function(){var e=Object(o.useContext)(v.b).data;return void 0===e?null:Object(r.jsx)(p,{display:"flex",flexDirection:"row",style:{overflowX:"scroll"},width:"100vw",children:Object.entries(e).map((function(e){var t=Object(h.a)(e,1)[0];return Object(r.jsx)(j,{stateName:t},t)}))})},g=n("Lnxd");function x(e){return Object(g.a)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}}]})(e)}var w=function(e){var t,n,i=e.party,a=Object(o.useContext)(v.b).totals;return a?a[i]>=270?Object(r.jsxs)("h1",{id:"".concat(i,"Total"),style:(t={flex:"1",background:O.d[i],color:"white",padding:"0 2px",textShadow:"0px 1px 1px #444",textAlign:"center",fontSize:"1.15rem"},Object(c.a)(t,"padding","20px 0"),Object(c.a)(t,"margin",0),Object(c.a)(t,"display","flex"),Object(c.a)(t,"justifyContent","center"),Object(c.a)(t,"alignItems","center"),t),children:[Object(r.jsx)(x,{style:{marginRight:"10px"}}),a[i]]}):Object(r.jsx)("h1",{id:"".concat(i,"Total"),style:(n={flex:"1",color:O.d[i],padding:"0 2px",textShadow:"0px 1px 1px #444"},Object(c.a)(n,"padding","20px 0"),Object(c.a)(n,"textAlign","center"),Object(c.a)(n,"fontSize","1.15rem"),Object(c.a)(n,"margin",0),n),children:a[i]}):null},S=function(){return Object(r.jsxs)(p,{flex:"1",display:"flex",flexDirection:"row",justifyContext:"space-between",style:{margin:"0px 8%"},children:[Object(r.jsx)(w,{party:"dems"}),Object(r.jsx)(w,{party:"neutral"}),Object(r.jsx)(w,{party:"GOP"})]})};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=l()((function(){return Promise.all([n.e(4),n.e(5),n.e(11)]).then(n.bind(null,"xZMB"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["xZMB"]},modules:["./Map"]}}),C=function(e){var t=e.onClick,n=e.style,o=void 0===n?{}:n,i=e.children;return Object(r.jsx)("button",{onClick:function(){return t()},style:P({marginLeft:"10px",border:"0px solid transparent",background:"transparent",cursor:"pointer"},o),children:i})},E=function(){var e=Object(o.useContext)(v.b),t=e.title,n=e.resetUserSelections,i=e.changeData,a=e.windowSize,c=(e.loading,a[0]),u=c&&c<500?"".concat(c,"px"):"33%";return Object(r.jsxs)(p,{style:{textAlign:"center"},display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(p,{flexGrow:"1",flexShrink:"1",flexBasis:u,style:{margin:"3vh 0"},children:Object(r.jsx)("h1",{style:{lineHeight:"1.25",padding:"0 10px",fontSize:"1rem",margin:"0",color:"lightslategray",whiteSpace:"nowrap"},children:"U.S Electoral College Map"})}),Object(r.jsx)(p,{flexGrow:"1",flexShrink:"1",flexBasis:u,style:{margin:"3vh 0"},children:Object(r.jsx)("h2",{style:{fontSize:"0.75rem",color:"darkslategray",margin:0},children:Object(r.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(r.jsx)(y,{value:t,options:O.b,maxWidth:c?c-100:void 0,onChange:i}),Object(r.jsx)(C,{onClick:function(){return n()},style:{marginLeft:"10px"},children:Object(r.jsx)(b.b,{})})]})})}),Object(r.jsx)(p,{flexGrow:"1",flexShrink:"1",flexBasis:u,style:{margin:"3vh 0"},display:"flex",children:Object(r.jsx)(S,{})})]})},M=function(e){e.height,e.flex;var t=e.children;a(e,["height","flex","children"]);return Object(r.jsx)(p,{children:t})},D=function(e){var t=e.children;return Object(r.jsx)(p,{display:"flex",flexDirection:"column",height:"100%",children:t})},A=function(){return Object(r.jsx)(p,{children:Object(r.jsx)(E,{})})},I=function(e){var t=e.initialData;return Object(r.jsx)(v.a,{initialData:t,children:Object(r.jsxs)(D,{children:[Object(r.jsx)(m,{}),Object(r.jsx)(A,{}),Object(r.jsx)(p,{flex:"1",style:{overflowY:"hidden"},children:Object(r.jsx)(k,{})}),Object(r.jsx)(M,{children:Object(r.jsx)(p,{children:!1})})]})})},N=n("8Kt/"),T=n.n(N),L=!0;function R(e){var t=e.initialData;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(T.a,{children:[Object(r.jsx)("title",{children:"US Electoral College Map"}),Object(r.jsx)("link",{rel:"shortcut icon",href:"favicon.ico"}),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"})]}),Object(r.jsx)(I,{initialData:t})]})}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),f=function(e){a(n,e);var t=l(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=f},YSmr:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u}));var r="cornflowerblue",o="lightslategray",i=["2020 Battlegrounds","2020 Calls","2020 - Possible EC Tie","2020 - My Prediction","2016 Trump v Clinton","2012 Obama v Romney","2008 Obama v McCain"],a=i[0],c={defaultFill:o,1:o,2:r,3:"indianred"},u={dems:r,neutral:o,GOP:"indianred"}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},a6RD:function(e,t,n){"use strict";var r=n("lSNA");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.__esModule=!0,t.noSSR=u,t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=i(i({},r),e));if(r=i(i({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=a.default.Map;var o={},c=e.modules();Object.keys(c).forEach((function(e){var t=c[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=o}r.loadableGenerated&&delete(r=i(i({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)};c(n("q1tI"));var a=c(n("2qu3"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},jwwS:function(e,t,n){"use strict";var r;t.__esModule=!0,t.LoadableContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},nmnc:function(e,t,n){var r=n("Kz5y").Symbol;e.exports=r},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},sEfC:function(e,t,n){var r=n("GoyQ"),o=n("QIyF"),i=n("tLB3"),a=Math.max,c=Math.min;e.exports=function(e,t,n){var u,l,s,f,d,p,b=0,y=!1,h=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function O(t){var n=u,r=l;return u=l=void 0,b=t,f=e.apply(r,n)}function j(e){return b=e,d=setTimeout(g,t),y?O(e):f}function m(e){var n=e-p;return void 0===p||n>=t||n<0||h&&e-b>=s}function g(){var e=o();if(m(e))return x(e);d=setTimeout(g,function(e){var n=t-(e-p);return h?c(n,s-(e-b)):n}(e))}function x(e){return d=void 0,v&&u?O(e):(u=l=void 0,f)}function w(){var e=o(),n=m(e);if(u=arguments,l=this,p=e,n){if(void 0===d)return j(p);if(h)return clearTimeout(d),d=setTimeout(g,t),O(p)}return void 0===d&&(d=setTimeout(g,t)),f}return t=i(t)||0,r(n)&&(y=!!n.leading,s=(h="maxWait"in n)?a(i(n.maxWait)||0,t):s,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==d&&clearTimeout(d),b=0,u=p=l=d=void 0},w.flush=function(){return void 0===d?f:x(o())},w}},tLB3:function(e,t,n){var r=n("GoyQ"),o=n("/9aa"),i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=c.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):a.test(e)?NaN:+e}},uw7T:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r,o=n("rePB"),i=n("ODXe"),a=n("nKUr"),c=n("q1tI"),u=n.n(c),l=n("vcXL"),s=n.n(l),f=n("YSmr"),d=n("DzJC"),p=n.n(d);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=u.a.createContext({}),v=null!==(r=JSON.parse(window.localStorage.getItem("uselectoralmap")))&&void 0!==r?r:{},O=v.whichData||f.a,j=v.selections||{},m={1:"neutral",2:"dems",3:"GOP"},g=function(e){var t=Object(c.useState)(O),n=t[0],r=t[1],a=Object(c.useState)(e),u=a[0],l=a[1],f=Object(c.useState)({}),d=f[0],b=f[1],h=Object(c.useState)(!1),v=h[0],g=h[1],x=Object(c.useState)([]),w=x[0],S=x[1],_=Object.keys(u);if(Object(c.useEffect)((function(){s()("results/president/".concat(n,".json")).then((function(e){return e.json()})).then((function(e){l(e)}))}),[n]),Object(c.useEffect)((function(){b(j),S([window.innerWidth,window.innerHeight]);var e=function(){S([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),"undefined"===typeof u)return{loading:!0,windowSize:w,stateOrder:_};var P=y(y({},u),d);console.debug(JSON.stringify(P));var k=function(e){return Object.entries(e).reduce((function(e,t){var n=Object(i.a)(t,2),r=(n[0],n[1]),a=r.fillKey,c=r["Electoral Votes"],u=m[a];return y(y({},e),{},Object(o.a)({},u,e[u]+c))}),{GOP:0,dems:0,neutral:0})}(P),C=p()(g,400);return{stateOrder:_,title:n,totals:k,windowSize:w,data:P,updateUserSelection:function(e){var t=P[e],r=y(y({},d),{},Object(o.a)({},e,y(y({},t),{},{fillKey:(t.fillKey+1)%3+1})));window.localStorage.setItem("uselectoralmap",JSON.stringify({whichData:n,selections:r})),b(r)},loading:!1,resetUserSelections:function(){window.localStorage.setItem("uselectoralmap",JSON.stringify({whichData:n})),b({})},changeData:function(e){window.localStorage.setItem("uselectoralmap",JSON.stringify({})),b({}),r(e)},focusedState:v,setFocusedState:C}},x=function(e){var t=e.initialData,n=e.children,r=g(t);r.loading;return Object(a.jsx)(h.Provider,{value:r,children:n})};t.b=h},vcXL:function(e,t,n){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}},[["vlRD",0,1,3]]]);