(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{iML4:function(t,n,e){!function(t){"use strict";function n(){}function e(t){if(!t)return n;var e,o,i=t.scale[0],a=t.scale[1],r=t.translate[0],s=t.translate[1];return function(t,n){n||(e=o=0),t[0]=(e+=t[0])*i+r,t[1]=(o+=t[1])*a+s}}function o(t){if(!t)return n;var e,o,i=t.scale[0],a=t.scale[1],r=t.translate[0],s=t.translate[1];return function(t,n){n||(e=o=0);var l=Math.round((t[0]-r)/i),c=Math.round((t[1]-s)/a);t[0]=l-e,t[1]=c-o,e=l,o=c}}function i(t,n){for(var e,o=t.length,i=o-n;i<--o;)e=t[i],t[i++]=t[o],t[o]=e}function a(t,n){for(var e=0,o=t.length;e<o;){var i=e+o>>>1;t[i]<n?e=i+1:o=i}return e}function r(t,n){return"GeometryCollection"===n.type?{type:"FeatureCollection",features:n.geometries.map((function(n){return s(t,n)}))}:s(t,n)}function s(t,n){var e={type:"Feature",id:n.id,properties:n.properties||{},geometry:l(t,n)};return null==n.id&&delete e.id,e}function l(t,n){var o=e(t.transform),a=t.arcs;function r(t,n){n.length&&n.pop();for(var e,r=a[t<0?~t:t],s=0,l=r.length;s<l;++s)n.push(e=r[s].slice()),o(e,s);t<0&&i(n,l)}function s(t){return t=t.slice(),o(t,0),t}function l(t){for(var n=[],e=0,o=t.length;e<o;++e)r(t[e],n);return n.length<2&&n.push(n[0].slice()),n}function c(t){for(var n=l(t);n.length<4;)n.push(n[0].slice());return n}function u(t){return t.map(c)}function p(t){var n=t.type;return"GeometryCollection"===n?{type:n,geometries:t.geometries.map(p)}:n in d?{type:n,coordinates:d[n](t)}:null}var d={Point:function(t){return s(t.coordinates)},MultiPoint:function(t){return t.coordinates.map(s)},LineString:function(t){return l(t.arcs)},MultiLineString:function(t){return t.arcs.map(l)},Polygon:function(t){return u(t.arcs)},MultiPolygon:function(t){return t.arcs.map(u)}};return p(n)}function c(t,n){var e={},o={},i={},a=[],r=-1;function s(n){var e,o=t.arcs[n<0?~n:n],i=o[0];return t.transform?(e=[0,0],o.forEach((function(t){e[0]+=t[0],e[1]+=t[1]}))):e=o[o.length-1],n<0?[e,i]:[i,e]}function l(t,n){for(var o in t){var i=t[o];delete n[i.start],delete i.start,delete i.end,i.forEach((function(t){e[t<0?~t:t]=1})),a.push(i)}}return n.forEach((function(e,o){var i,a=t.arcs[e<0?~e:e];a.length<3&&!a[1][0]&&!a[1][1]&&(i=n[++r],n[r]=e,n[o]=i)})),n.forEach((function(t){var n,e,a=s(t),r=a[0],l=a[1];if(n=i[r])if(delete i[n.end],n.push(t),n.end=l,e=o[l]){delete o[e.start];var c=e===n?n:n.concat(e);o[c.start=n.start]=i[c.end=e.end]=c}else o[n.start]=i[n.end]=n;else if(n=o[l])if(delete o[n.start],n.unshift(t),n.start=r,e=i[r]){delete i[e.end];var u=e===n?n:e.concat(n);o[u.start=e.start]=i[u.end=n.end]=u}else o[n.start]=i[n.end]=n;else o[(n=[t]).start=r]=i[n.end=l]=n})),l(i,o),l(o,i),n.forEach((function(t){e[t<0?~t:t]||a.push([t])})),a}function u(t){return l(t,p.apply(this,arguments))}function p(t,n,e){var o=[];function i(t){var n=t<0?~t:t;(u[n]||(u[n]=[])).push({i:t,g:l})}function a(t){t.forEach(i)}function r(t){t.forEach(a)}function s(t){"GeometryCollection"===t.type?t.geometries.forEach(s):t.type in p&&(l=t,p[t.type](t.arcs))}if(arguments.length>1){var l,u=[],p={LineString:a,MultiLineString:r,Polygon:r,MultiPolygon:function(t){t.forEach(r)}};s(n),u.forEach(arguments.length<3?function(t){o.push(t[0].i)}:function(t){e(t[0].g,t[t.length-1].g)&&o.push(t[0].i)})}else for(var d=0,f=t.arcs.length;d<f;++d)o.push(d);return{type:"MultiLineString",arcs:c(t,o)}}function d(t){var n=t[0],e=t[1],o=t[2];return Math.abs((n[0]-o[0])*(e[1]-n[1])-(n[0]-e[0])*(o[1]-n[1]))}function f(t){for(var n,e=-1,o=t.length,i=t[o-1],a=0;++e<o;)n=i,i=t[e],a+=n[0]*i[1]-n[1]*i[0];return a/2}function h(t){return l(t,m.apply(this,arguments))}function m(t,n){var e={},o=[],i=[];function a(t){t.forEach((function(n){n.forEach((function(n){(e[n=n<0?~n:n]||(e[n]=[])).push(t)}))})),o.push(t)}function r(n){return Math.abs(f(l(t,{type:"Polygon",arcs:[n]}).coordinates[0]))}return n.forEach((function(t){"Polygon"===t.type?a(t.arcs):"MultiPolygon"===t.type&&t.arcs.forEach(a)})),o.forEach((function(t){if(!t._){var n=[],o=[t];for(t._=1,i.push(n);t=o.pop();)n.push(t),t.forEach((function(t){t.forEach((function(t){e[t<0?~t:t].forEach((function(t){t._||(t._=1,o.push(t))}))}))}))}})),o.forEach((function(t){delete t._})),{type:"MultiPolygon",arcs:i.map((function(n){var o,i=[];if(n.forEach((function(t){t.forEach((function(t){t.forEach((function(t){e[t<0?~t:t].length<2&&i.push(t)}))}))})),(o=(i=c(t,i)).length)>1)for(var a,s,l=1,u=r(i[0]);l<o;++l)(a=r(i[l]))>u&&(s=i[0],i[0]=i[l],i[l]=s,u=a);return i}))}}function v(t){var n={},e=t.map((function(){return[]}));function o(t,e){t.forEach((function(t){t<0&&(t=~t);var o=n[t];o?o.push(e):n[t]=[e]}))}function i(t,n){t.forEach((function(t){o(t,n)}))}function r(t,n){"GeometryCollection"===t.type?t.geometries.forEach((function(t){r(t,n)})):t.type in s&&s[t.type](t.arcs,n)}var s={LineString:o,MultiLineString:i,Polygon:i,MultiPolygon:function(t,n){t.forEach((function(t){i(t,n)}))}};for(var l in t.forEach(r),n)for(var c=n[l],u=c.length,p=0;p<u;++p)for(var d=p+1;d<u;++d){var f,h=c[p],m=c[d];(f=e[h])[l=a(f,m)]!==m&&f.splice(l,0,m),(f=e[m])[l=a(f,h)]!==h&&f.splice(l,0,h)}return e}function P(t,n){return t[1][2]-n[1][2]}function g(){var t={},n=[],e=0;function o(t,e){for(;e>0;){var o=(e+1>>1)-1,i=n[o];if(P(t,i)>=0)break;n[i._=e]=i,n[t._=e=o]=t}}function i(t,o){for(;;){var i=o+1<<1,a=i-1,r=o,s=n[r];if(a<e&&P(n[a],s)<0&&(s=n[r=a]),i<e&&P(n[i],s)<0&&(s=n[r=i]),r===o)break;n[s._=o]=s,n[t._=o=r]=t}}return t.push=function(t){return o(n[t._=e]=t,e++),e},t.pop=function(){if(!(e<=0)){var t,o=n[0];return--e>0&&(t=n[e],i(n[t._=0]=t,0)),o}},t.remove=function(t){var a,r=t._;if(n[r]===t)return r!==--e&&(P(a=n[e],t)<0?o:i)(n[a._=r]=a,r),r},t}function y(t,n){var i=e(t.transform),a=o(t.transform),r=g();function s(t){r.remove(t),t[1][2]=n(t),r.push(t)}return n||(n=d),t.arcs.forEach((function(t){var e,o,l,c,u=[],p=0;for(o=0,l=t.length;o<l;++o)c=t[o],i(t[o]=[c[0],c[1],1/0],o);for(o=1,l=t.length-1;o<l;++o)(e=t.slice(o-1,o+2))[1][2]=n(e),u.push(e),r.push(e);for(o=0,l=u.length;o<l;++o)(e=u[o]).previous=u[o-1],e.next=u[o+1];for(;e=r.pop();){var d=e.previous,f=e.next;e[1][2]<p?e[1][2]=p:p=e[1][2],d&&(d.next=f,d[2]=e[2],s(d)),f&&(f.previous=d,f[0]=e[0],s(f))}t.forEach(a)})),t}var w="1.6.27";t.version=w,t.mesh=u,t.meshArcs=p,t.merge=h,t.mergeArcs=m,t.feature=r,t.neighbors=v,t.presimplify=y,Object.defineProperty(t,"__esModule",{value:!0})}(n)},xZMB:function(t,n,e){"use strict";e.r(n);var o=e("a3WO");var i=e("BsWD");function a(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(i.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=e("nKUr"),s=(e("a6RD"),e("q1tI")),l=e.n(s),c=function(t,n){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};function u(t,n){function e(){this.constructor=t}c(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}var p=function(){return(p=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t}).apply(this,arguments)};var d={wrapperComponent:null,contentComponent:null,previousScale:1,scale:1,positionX:0,positionY:0,options:{disabled:!1,transformEnabled:!0,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,limitToWrapper:!1,centerContent:!0,wrapperClass:"",contentClass:""},wheel:{disabled:!1,step:5,wheelEnabled:!0,touchPadEnabled:!0,limitsOnWheel:!1},pan:{disabled:!1,panAnimationType:"linear",lockAxisX:!1,lockAxisY:!1,velocity:!0,velocityEqualToMove:!0,velocitySensitivity:2,velocityActiveScale:1,velocityMinSpeed:1,velocityBaseTime:1600,velocityAnimationType:"easeOutQuart",padding:!0,paddingSize:30,panReturnAnimationTime:400,panReturnAnimationType:"easeOut",disableOnTarget:[]},pinch:{disabled:!1},zoomIn:{disabled:!1,step:20,animation:!0,animationType:"easeOut",animationTime:200},zoomOut:{disabled:!1,step:20,animation:!0,animationType:"easeOut",animationTime:200},doubleClick:{disabled:!1,step:20,mode:"zoomIn",animation:!0,animationType:"easeOut",animationTime:200},reset:{disabled:!1,animation:!0,animationType:"easeOut",animationTime:200},scalePadding:{disabled:!1,size:.2,animationTime:200,animationType:"easeOut"}},f=function(t,n){return Number(t.toFixed(n))},h=function(t,n){return"number"===typeof t?t:n},m=function(t,n,e,o){return f(o?t<n?n:t>e?e:t:t,2)},v=function(t,n){return Math.sqrt(Math.pow(t.pageX-n.pageX,2)+Math.pow(t.pageY-n.pageY,2))},P=function(t,n){t&&"function"===typeof t&&t(n)},g=function(t,n,e){var o=e.scale,i=e.options,a=i.maxScale,r=i.minScale;return!!t&&(o<a||o>r||(Math.sign(t.deltaY)!==Math.sign(n.deltaY)||(t.deltaY>0&&t.deltaY<n.deltaY||(t.deltaY<0&&t.deltaY>n.deltaY||Math.sign(t.deltaY)!==Math.sign(n.deltaY)))))},y=function(t,n){return Object.keys(t).reduce((function(e,o){return"object"===typeof n[o]&&null!==n[o]?e[o]=p(p({},t[o]),n[o]):e[o]=void 0===n[o]?t[o]:n[o],e}),{})};var w={easeOut:function(t){return-Math.cos(t*Math.PI)/2+.5},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};function b(){this.mounted&&(this.animation&&cancelAnimationFrame(this.animation),this.animate=!1,this.animation=!1,this.velocity=!1)}function C(t,n,e){var o=this;if(this.mounted){var i=(new Date).getTime();b.call(this),this.animation=function(){if(o.animation&&o.mounted){var a=(new Date).getTime()-i,r=(0,w[t])(a/n);a>=n?(e(1),o.animation=null):(e(r),requestAnimationFrame(o.animation))}},requestAnimationFrame(this.animation)}}function S(t){var n=this,e=t.targetState,o=t.speed,i=t.type,a=this.stateProvider,r=a.scale,s=a.positionX,l=a.positionY,c=e.scale-r,u=e.positionX-s,p=e.positionY-l;0===o?(this.stateProvider.previousScale=this.stateProvider.scale,this.stateProvider.scale=e.scale,this.stateProvider.positionX=e.positionX,this.stateProvider.positionY=e.positionY,this.applyTransformation()):C.call(this,i,o,(function(t){n.stateProvider.previousScale=n.stateProvider.scale,n.stateProvider.scale=r+c*t,n.stateProvider.positionX=s+u*t,n.stateProvider.positionY=l+p*t,n.applyTransformation()}))}function T(t,n,e,o,i){var a=n-(i?o:0);return!isNaN(e)&&t>=e?e:!isNaN(n)&&t<=a?a:t}function Y(t,n,e,o,i,a){var r=e.minPositionX,s=e.minPositionY,l=e.maxPositionX,c=e.maxPositionY,u=a?i*a.offsetWidth/100:0,p=a?i*a.offsetHeight/100:0;return{x:m(t,r-u,l+u,o),y:m(n,s-p,c+p,o)}}function X(t,n,e){var o=n.getBoundingClientRect(),i=(t.clientX-o.left)/e,a=(t.clientY-o.top)/e;return(isNaN(i)||isNaN(a))&&console.error("No mouse or touch offset found"),{mouseX:i,mouseY:a}}function x(t,n,e,o,i){var a=this.stateProvider,r=a.scale,s=a.positionX,l=a.positionY,c=a.options.transformEnabled,u=e-r;return"number"!==typeof t||"number"!==typeof n?console.error("Mouse X and Y position were not provided!"):c?Y(s-t*u,l-n*u,o,i,0,null):{newPositionX:s,newPositionY:l}}function E(t){var n=t.touches;return n&&1===n.length?{clientX:n[0].clientX,clientY:n[0].clientY}:n?null:{clientX:t.clientX,clientY:t.clientY}}function O(t){var n=this.stateProvider,e=n.scale,o=n.positionX,i=n.positionY,a=n.options,r=a.limitToBounds,s=a.minScale,l=n.pan,c=l.lockAxisX,u=l.lockAxisY,p=l.padding,d=l.paddingSize,f=n.wrapperComponent;if(this.startCoords){var h=this.startCoords,m=h.x,v=h.y,P=E(t);if(!P)return console.error("Cannot find mouse client positions");var g=P.clientX,y=P.clientY,w=c?o:g-m,b=u?i:y-v,C=p&&e>=s?d:0;if(w!==o||b!==i){var S=Y(w,b,this.bounds,r,C,f);D.call(this,S.x,S.y)}}}function W(){var t=this.stateProvider,n=t.scale,e=t.options.minScale,o=t.pan,i=o.disabled,a=o.padding,r=o.panReturnAnimationTime,s=o.panReturnAnimationType;if(!(i||n<e||!a)){var l=M.call(this);S.call(this,{targetState:l,speed:r,type:s})}}function M(){var t=this.stateProvider,n=t.positionX,e=t.positionY,o=t.scale,i=t.options,a=i.disabled,r=i.limitToBounds,s=i.limitToWrapper,l=this.state.wrapperComponent;if(!a){var c=this.bounds,u=c.maxPositionX,p=c.minPositionX,d=c.maxPositionY,f=c.minPositionY,h=n>u||n<p,m=e>d||e<f,v=n>u?l.offsetWidth:this.stateProvider.minPositionX||0,P=e>d?l.offsetHeight:this.stateProvider.minPositionY||0,g=x.call(this,v,P,o,this.bounds,r||s),y=g.x,w=g.y;return{scale:o,positionX:h?y:n,positionY:m?w:e}}}function D(t,n){this.stateProvider.pan.padding&&(this.stateProvider.positionX=t,this.stateProvider.positionY=n,this.applyTransformation())}function k(t,n,e,o,i){var a=this.stateProvider,r=a.scale,s=a.options,l=s.maxScale,c=s.minScale,u=a.scalePadding,p=u.size,d=u.disabled,h=a.wrapperComponent,m=null;if(i){m=r+(n-n*(1e-4*window.innerWidth))*t*(r/(t<0?30:20))}else{var v=2-window.innerWidth/h.offsetWidth;m=r+n*t*((r-r*Math.max(.2,Math.min(.99,v)))/20)}if(o)return m;var P=!e&&!d;return T(f(m,3),c,l,p,P)}function _(t,n){var e=this.stateProvider,o=function(t,n,e){var o=t.offsetWidth,i=t.offsetHeight,a=n.offsetWidth*e,r=n.offsetHeight*e;return{wrapperWidth:o,wrapperHeight:i,newContentWidth:a,newDiffWidth:o-a,newContentHeight:r,newDiffHeight:i-r}}(e.wrapperComponent,e.contentComponent,t),i=o.wrapperWidth,a=o.wrapperHeight,r=function(t,n,e,o,i,a,r){var s=t>n?e*(r?1:.5):0,l=o>i?a*(r?1:.5):0;return{minPositionX:t-n-s,maxPositionX:s,minPositionY:o-i-l,maxPositionY:l}}(i,o.newContentWidth,o.newDiffWidth,a,o.newContentHeight,o.newDiffHeight,n);return this.bounds=r,r}function N(t){var n=this.stateProvider,e=n.scale,o=n.contentComponent,i=n.options.limitToBounds,a=n.scalePadding,r=a.size,s=a.disabled,l=n.wheel,c=l.step,u=l.limitsOnWheel;t.preventDefault(),t.stopPropagation();var p=function(t,n){var e=t?t.deltaY<0?1:-1:0;return h(n,e)}(t,null),d=k.call(this,p,c,!t.ctrlKey);if(e!==d){var f=_.call(this,d,!u),m=X(t,o,e),v=m.mouseX,P=m.mouseY,g=i&&(s||0===r||u),y=x.call(this,v,P,d,f,g),w=y.x,b=y.y;this.bounds=f,this.stateProvider.previousScale=e,this.stateProvider.scale=d,this.stateProvider.positionX=w,this.stateProvider.positionY=b,this.applyTransformation()}}function A(t,n,e,o,i){var a=this.stateProvider,r=a.contentComponent,s=a.options,l=s.disabled,c=s.minScale,u=s.maxScale,p=s.limitToBounds,d=s.limitToWrapper;if(!l&&!t){var h=T(f(n,2),c,u,null,null),m=_.call(this,h,d),v=e,P=o;if(i){var g=X(i,r,n);v=g.mouseX,P=g.mouseY}var y=x.call(this,v,P,h,m,p);return{scale:h,positionX:y.x,positionY:y.y}}}function z(){var t=this.stateProvider,n=t.scale,e=t.wrapperComponent,o=t.options,i=o.minScale,a=o.limitToBounds,r=t.scalePadding,s=r.disabled,l=r.animationTime,c=r.animationType,u=s||n>=i;if((n>=1||a)&&W.call(this),!u){var p=e.offsetWidth/2,d=e.offsetHeight/2,f=A.call(this,!1,i,p,d,null);S.call(this,{targetState:f,speed:l,type:c})}}function I(t){t.preventDefault(),t.stopPropagation();var n=this.stateProvider,e=n.contentComponent,o=n.scale,i=n.doubleClick,a=i.disabled,r=i.mode,s=i.step,l=i.animationTime,c=i.animationType;if("reset"===r)return L.call(this,t,l);var u="zoomOut"===r?-1:1,p=k.call(this,u,s,void 0,void 0,!0),d=X(t,e,o),f=d.mouseX,h=d.mouseY,m=A.call(this,a,p,f,h);if(m.scale!==o){var v=H(k.call(this,u,s,!0,void 0,!0),p,l);S.call(this,{targetState:m,speed:v,type:c})}}function B(t,n){var e=this.stateProvider,o=e.scale,i=e.positionX,a=e.positionY,r=e.wrapperComponent,s=e.zoomIn,l=e.zoomOut,c=(r.offsetWidth/2-i)/o,u=(r.offsetHeight/2-a)/o,p=k.call(this,t,n,void 0,void 0,!0),d=p>o,f=d?s.animationTime:l.animationTime,h=d?s.animationType:l.animationType,m=d?s.disabled:l.disabled,v=A.call(this,m,p,c,u);if(v.scale!==o){var P=H(k.call(this,t,n,!0,void 0,!0),p,f);S.call(this,{targetState:v,speed:P,type:h})}}function L(t){var n=this.props.defaultValues,e=n.defaultScale,o=n.defaultPositionX,i=n.defaultPositionY,a=this.stateProvider,r=a.scale,s=a.positionX,l=a.positionY,c=a.reset,u=a.options,p=u.disabled,f=u.limitToBounds,m=u.centerContent,v=u.limitToWrapper;if(!p&&!c.disabled&&(r!==e||s!==o||l!==i)){var P="number"===typeof t?t:c.animationTime,g=h(e,d.scale),y=h(o,d.positionX),w=h(i,d.positionY);if(f&&!v||m){var b=_.call(this,g,v);y=b.minPositionX,w=b.minPositionY}var C={scale:g,positionX:y,positionY:w};S.call(this,{targetState:C,speed:P,type:c.animationType})}}function H(t,n,e){return e*(n/t)}function R(t,n){var e=Math.pow(10,n);return Math.round(t*e)/e}function j(t){return t===1/0||t===-1/0}function U(t,n){var e=this.stateProvider,o=e.options,i=o.minScale,a=o.maxScale,r=e.scalePadding,s=r.size,l=r.disabled;if("number"!==typeof n||"number"!==typeof t)return console.error("Pinch touches distance was not provided");if(!(t<0)){var c=t/n*this.pinchStartScale;return T(f(c,2),i,a,s,!l)}}function V(t){var n=this.stateProvider,e=n.scale,o=n.options,i=o.limitToBounds,a=o.limitToWrapper,r=n.scalePadding,s=r.disabled,l=r.size,c=n.wheel.limitsOnWheel,u=n.pinch,p=this.state.contentComponent;if(!u.disabled&&!this.stateProvider.options.disabled&&(t.cancelable&&(t.preventDefault(),t.stopPropagation()),null!==this.pinchStartDistance)){var d=function(t,n,e){var o=e.getBoundingClientRect(),i=t.touches,a=R(i[0].clientX-o.left,5),r=R(i[0].clientY-o.top,5);return{mouseX:(a+R(i[1].clientX-o.left,5))/2/n,mouseY:(r+R(i[1].clientY-o.top,5))/2/n}}(t,e,p),f=d.mouseX,h=d.mouseY;if(!j(f)&&!j(h)){var m=function(t){return v(t.touches[0],t.touches[1])}(t),P=U.call(this,m,this.pinchStartDistance);if(!j(P)&&P!==e){var g=_.call(this,P,a),y=i&&(s||0===l||c),w=x.call(this,f,h,P,g,y),b=w.x,C=w.y;this.lastDistance=m,this.stateProvider.positionX=b,this.stateProvider.positionY=C,this.stateProvider.scale=P,this.stateProvider.previousScale=e,this.applyTransformation()}}}}function q(t,n){return this.stateProvider.pan.velocityEqualToMove?n-n/Math.max(1,t):n}function Q(){this.setState({startAnimation:!1})}function F(){this.setState({startAnimation:!0})}function Z(){var t=this,n=this.stateProvider,e=n.positionX,o=n.positionY,i=n.options.limitToBounds,a=n.pan,r=a.velocityBaseTime,s=a.lockAxisX,l=a.lockAxisY,c=a.velocityAnimationType,u=a.panReturnAnimationTime,p=a.panReturnAnimationType,d=a.padding,f=a.paddingSize,h=n.wrapperComponent;if(this.mounted){if(!this.velocity||!this.bounds)return b.call(this);var m=this.bounds,v=m.maxPositionX,P=m.minPositionX,g=m.maxPositionY,y=m.minPositionY,S=this.velocity,T=S.velocityX,X=S.velocityY,x=S.velocity,E=q.call(this,x,r);if(E){var O=T,M=X,D=E>u?E:u,k=d?f:0,_=h?k*h.offsetWidth/100:0,N=h?k*h.offsetHeight/100:0,A=v+_,z=P-_,I=g+N,B=y-N,L=Y(e,o,this.bounds,i,k,h),H=(new Date).getTime();C.call(this,c,D,(function(n){var a=(new Date).getTime()-H,r=(0,w[p])(a/u);(a>u||r>1||r===1/0||r===-1/0)&&(r=1);var c=G(s,O,n,r,P,v,i,e,L.x,z,A),d=G(l,M,n,r,y,g,i,o,L.y,B,I);e===c&&o===d||(t.stateProvider.positionX=c,t.stateProvider.positionY=d,t.applyTransformation())}))}else W.call(this)}}function K(t){var n=this,e=this.stateProvider,o=e.scale,i=e.options.disabled,a=e.pan,r=a.velocity,s=a.velocitySensitivity,l=a.velocityActiveScale,c=a.velocityMinSpeed,u=e.wrapperComponent;if(!(!r||l>=o||i)){Q.call(this);var p=Date.now();if(this.lastMousePosition){var d=E(t);if(!d)return console.error("No mouse or touch position detected");var f=d.clientX,h=d.clientY,m=f-this.lastMousePosition.clientX,v=h-this.lastMousePosition.clientY,P=p-this.velocityTime,g=2-u.offsetWidth/window.innerWidth,y=2-u.offsetHeight/window.innerHeight,w=m/P*s*o*(20*Math.max(c,Math.min(2,g))),b=v/P*s*o*(20*Math.max(c,Math.min(2,y))),C=m*m+v*v,S=Math.sqrt(C)/P*s;if(this.velocity&&S<this.velocity.velocity&&this.throttle)return;this.velocity={velocityX:w,velocityY:b,velocity:S},this.throttle&&clearTimeout(this.throttle),this.throttle=setTimeout((function(){n.mounted&&(n.throttle=!1)}),30)}var T=E(t);this.lastMousePosition=T,this.velocityTime=p}}function G(t,n,e,o,i,a,r,s,l,c,u){if(r){var p;if(l>i&&s>a)return(p=l-(l-a)*o)>u?u:p<a?a:p;if(l<i&&s<i)return(p=l-(l-i)*o)<c?c:p>i?i:p}return t?l:m(s+n*e,i,a,r)}var J=["previousScale","scale","positionX","positionY","defaultPositionX","defaultPositionY","defaultScale","onWheelStart","onWheel","onWheelStop","onPanningStart","onPanning","onPanningStop","onPinchingStart","onPinching","onPinchingStop","onZoomChange","options","wheel","scalePadding","pan","pinch","zoomIn","zoomOut","doubleClick","reset"],$=function(t){return Object.keys(t).reduce((function(n,e){return J.includes(e)&&(n[e]=t[e]),n}),{})},tt=l.a.createContext({}),nt=null,et=null;!function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.mounted=!0,n.state={wrapperComponent:void 0,contentComponent:void 0},n.stateProvider=p(p(p(p({},d),y(d,n.props.dynamicValues)),n.props.defaultValues),{previousScale:n.props.dynamicValues.scale||n.props.defaultValues.scale||d.scale}),n.windowToWrapperScaleX=0,n.windowToWrapperScaleY=0,n.startCoords=null,n.isDown=!1,n.pinchStartDistance=null,n.lastDistance=null,n.pinchStartScale=null,n.distance=null,n.bounds=null,n.velocityTime=null,n.lastMousePosition=null,n.velocity=null,n.offsetX=null,n.offsetY=null,n.throttle=!1,n.previousWheelEvent=null,n.lastScale=null,n.animate=null,n.animation=null,n.maxBounds=null,n.handleWheel=function(t){var e=n.stateProvider,o=e.scale,i=e.wheel,a=i.disabled,r=i.wheelEnabled,s=i.touchPadEnabled,l=n.props,c=l.onWheelStart,u=l.onWheel,p=l.onWheelStop,d=n.state,f=d.wrapperComponent,h=d.contentComponent;n.isDown||a||n.stateProvider.options.disabled||!f||!h||(r||t.ctrlKey)&&(!s&&t.ctrlKey||(nt||(n.lastScale=o,b.call(n),P(c,n.getCallbackProps())),N.call(n,t),P(u,n.getCallbackProps()),n.applyTransformation(null,null,null),n.previousWheelEvent=t,g(n.previousWheelEvent,t,n.stateProvider)&&(clearTimeout(nt),nt=setTimeout((function(){n.mounted&&(P(p,n.getCallbackProps()),nt=null)}),180)),n.animate=!1,n.lastScale=n.stateProvider.scale,clearTimeout(et),et=setTimeout((function(){n.mounted&&z.call(n,t)}),100)))},n.checkPanningTarget=function(t){var e=n.stateProvider.pan.disableOnTarget;return e.map((function(t){return t.toUpperCase()})).includes(t.target.tagName)||e.find((function(n){return t.target.classList.value.includes(n)}))},n.checkIsPanningActive=function(t){var e=n.stateProvider.pan.disabled,o=n.state,i=o.wrapperComponent,a=o.contentComponent;return!n.isDown||e||n.stateProvider.options.disabled||t.touches&&(1!==t.touches.length||Math.abs(n.startCoords.x-t.touches[0].clientX)<1||Math.abs(n.startCoords.y-t.touches[0].clientY)<1)||!i||!a},n.handleSetUpPanning=function(t,e){var o=n.stateProvider,i=o.positionX,a=o.positionY;n.isDown=!0,n.startCoords={x:t-i,y:e-a},P(n.props.onPanningStart,n.getCallbackProps())},n.handleStartPanning=function(t){var e=n.stateProvider,o=e.wrapperComponent,i=e.scale,a=e.options,r=a.minScale,s=a.maxScale,l=a.limitToWrapper,c=e.pan.disabled,u=t.target,p=t.touches;c||n.stateProvider.options.disabled||o&&!o.contains(u)||n.checkPanningTarget(t)||i<r||i>s||(b.call(n),n.bounds=_.call(n,i,l),p&&1===p.length&&n.handleSetUpPanning(p[0].clientX,p[0].clientY),p||n.handleSetUpPanning(t.clientX,t.clientY))},n.handlePanning=function(t){n.isDown&&t.preventDefault(),n.checkIsPanningActive(t)||(t.stopPropagation(),K.call(n,t),O.call(n,t),P(n.props.onPanning,n.getCallbackProps()))},n.handleStopPanning=function(){if(n.isDown){n.isDown=!1,n.animate=!1,n.animation=!1,F.call(n),P(n.props.onPanningStop,n.getCallbackProps());var t=n.stateProvider,e=t.pan.velocity,o=t.scale;n.velocity&&e&&o>1?Z.call(n):W.call(n)}},n.handlePinchStart=function(t){var e=n.stateProvider.scale;t.preventDefault(),t.stopPropagation(),b.call(n);var o=v(t.touches[0],t.touches[1]);n.pinchStartDistance=o,n.lastDistance=o,n.pinchStartScale=e,n.isDown=!1,P(n.props.onPinchingStart,n.getCallbackProps())},n.handlePinch=function(t){n.isDown=!1,V.call(n,t),P(n.props.onPinching,n.getCallbackProps())},n.handlePinchStop=function(){"number"===typeof n.pinchStartScale&&(n.isDown=!1,n.velocity=null,n.lastDistance=null,n.pinchStartScale=null,n.pinchStartDistance=null,z.call(n),P(n.props.onPinchingStop,n.getCallbackProps()))},n.handleTouchStart=function(t){var e=n.stateProvider,o=e.wrapperComponent,i=e.contentComponent,a=e.scale,r=e.options,s=r.disabled,l=r.minScale,c=t.touches;if(!s&&o&&i&&!(a<l))return b.call(n),c&&1===c.length?n.handleStartPanning(t):c&&2===c.length?n.handlePinchStart(t):void 0},n.handleTouch=function(t){var e=n.stateProvider,o=e.pan,i=e.pinch;if(!e.options.disabled)return o.disabled||1!==t.touches.length?i.disabled||2!==t.touches.length?void 0:n.handlePinch(t):n.handlePanning(t)},n.handleTouchStop=function(){n.handleStopPanning(),n.handlePinchStop()},n.zoomIn=function(t){var e=n.stateProvider,o=e.zoomIn,i=o.disabled,a=o.step,r=e.options,s=n.state,l=s.wrapperComponent,c=s.contentComponent;if(!t)throw Error("Zoom in function requires event prop");!i&&!r.disabled&&l&&c&&B.call(n,1,a)},n.zoomOut=function(t){var e=n.stateProvider,o=e.zoomOut,i=o.disabled,a=o.step,r=e.options,s=n.state,l=s.wrapperComponent,c=s.contentComponent;if(!t)throw Error("Zoom out function requires event prop");!i&&!r.disabled&&l&&c&&B.call(n,-1,a)},n.handleDbClick=function(t){var e=n.stateProvider,o=e.options,i=e.doubleClick,a=i.disabled,r=i.step,s=n.state,l=s.wrapperComponent,c=s.contentComponent;if(!t)throw Error("Double click function requires event prop");!a&&!o.disabled&&l&&c&&I.call(n,t,1,r)},n.setScale=function(t,e,o){void 0===e&&(e=200),void 0===o&&(o="easeOut");var i=n.stateProvider,a=i.positionX,r=i.positionY,s=i.scale,l=i.options.disabled,c=n.state,u=c.wrapperComponent,p=c.contentComponent;if(!l&&u&&p){var d={positionX:a,positionY:r,scale:isNaN(t)?s:t};S.call(n,{targetState:d,speed:e,type:o})}},n.setPositionX=function(t,e,o){void 0===e&&(e=200),void 0===o&&(o="easeOut");var i=n.stateProvider,a=i.positionX,r=i.positionY,s=i.scale,l=i.options,c=l.disabled,u=l.transformEnabled,p=n.state,d=p.wrapperComponent,f=p.contentComponent;if(!c&&u&&d&&f){var h={positionX:isNaN(t)?a:t,positionY:r,scale:s};S.call(n,{targetState:h,speed:e,type:o})}},n.setPositionY=function(t,e,o){void 0===e&&(e=200),void 0===o&&(o="easeOut");var i=n.stateProvider,a=i.positionX,r=i.scale,s=i.positionY,l=i.options,c=l.disabled,u=l.transformEnabled,p=n.state,d=p.wrapperComponent,f=p.contentComponent;if(!c&&u&&d&&f){var h={positionX:a,positionY:isNaN(t)?s:t,scale:r};S.call(n,{targetState:h,speed:e,type:o})}},n.setTransform=function(t,e,o,i,a){void 0===i&&(i=200),void 0===a&&(a="easeOut");var r=n.stateProvider,s=r.positionX,l=r.positionY,c=r.scale,u=r.options,p=u.disabled,d=u.transformEnabled,f=n.state,h=f.wrapperComponent,m=f.contentComponent;if(!p&&d&&h&&m){var v={positionX:isNaN(t)?s:t,positionY:isNaN(e)?l:e,scale:isNaN(o)?c:o};S.call(n,{targetState:v,speed:i,type:a})}},n.resetTransform=function(){var t=n.stateProvider.options,e=t.disabled,o=t.transformEnabled;!e&&o&&L.call(n)},n.setDefaultState=function(){n.animation=null,n.stateProvider=p(p(p({},n.stateProvider),{scale:d.scale,positionX:d.positionX,positionY:d.positionY}),n.props.defaultValues),n.forceUpdate()},n.setWrapperComponent=function(t){n.setState({wrapperComponent:t})},n.setContentComponent=function(t){n.setState({contentComponent:t},(function(){var e=n.stateProvider,o=e.wrapperComponent,i=e.options,a=i.centerContent,r=i.limitToBounds,s=i.limitToWrapper,l=e.scale,c=n.props.defaultValues,u=c.positionX,p=c.positionY;if(r&&!s||a&&!u&&!p){var d="translate(25%, 25%) scale("+l+")";t.style.transform=d,t.style.WebkitTransform=d,n.forceUpdate();var f=(new Date).getTime(),h=setInterval((function(){if(o.offsetWidth){var t=_.call(n,l,!1);n.stateProvider.positionX=t.minPositionX,n.stateProvider.positionY=t.minPositionY,n.applyTransformation(null,null,null),clearInterval(h),h=null}else(new Date).getTime()-f>2e3&&(clearInterval(h),h=null)}),20)}else n.applyTransformation(null,null,null)}))},n.applyTransformation=function(t,e,o){if(n.mounted){var i=n.state.contentComponent,a=n.props.onZoomChange,r=n.stateProvider,s=r.previousScale,l=r.scale,c=r.positionX,u=r.positionY;if(!i)return console.error("There is no content component");var p="translate("+(e||c)+"px, "+(o||u)+"px) scale("+(t||l)+")";i.style.transform=p,i.style.WebkitTransform=p,n.forceUpdate(),a&&s!==l&&P(a,n.getCallbackProps())}},n.getCallbackProps=function(){return $(n.stateProvider)},n}u(n,t),n.prototype.componentDidMount=function(){window.addEventListener("mousedown",this.handleStartPanning,false),window.addEventListener("mousemove",this.handlePanning,false),window.addEventListener("mouseup",this.handleStopPanning,false)},n.prototype.componentWillUnmount=function(){window.removeEventListener("mousedown",this.handleStartPanning,false),window.removeEventListener("mousemove",this.handlePanning,false),window.removeEventListener("mouseup",this.handleStopPanning,false),b.call(this)},n.prototype.componentDidUpdate=function(t,n){var e,o=this.state,i=o.wrapperComponent,a=o.contentComponent,r=this.props.dynamicValues;if(!n.contentComponent&&a&&(this.stateProvider.contentComponent=a),!n.wrapperComponent&&i&&void 0!==i){this.stateProvider.wrapperComponent=i,this.windowToWrapperScaleX=(e=i)?window.innerWidth/e.offsetWidth:0,this.windowToWrapperScaleY=function(t){return t?window.innerHeight/t.offsetHeight:0}(i);i.addEventListener("wheel",this.handleWheel,false),i.addEventListener("dblclick",this.handleDbClick,false),i.addEventListener("touchstart",this.handleTouchStart,false),i.addEventListener("touchmove",this.handleTouch,false),i.addEventListener("touchend",this.handleTouchStop,false)}(i&&a||t.dynamicValues!==r)&&(this.maxBounds=_.call(this,this.stateProvider.scale,this.stateProvider.options.limitToWrapper)),t.dynamicValues&&t.dynamicValues!==r&&(this.animation=null,this.stateProvider=p(p({},this.stateProvider),y(this.stateProvider,r)),this.applyTransformation(null,null,null))},n.prototype.render=function(){var t=this.state,n=t.wrapperComponent,e=t.contentComponent,o={loaded:Boolean(n&&e),state:this.getCallbackProps(),dispatch:{setScale:this.setScale,setPositionX:this.setPositionX,setPositionY:this.setPositionY,zoomIn:this.zoomIn,zoomOut:this.zoomOut,setTransform:this.setTransform,resetTransform:this.resetTransform,setDefaultState:this.setDefaultState},nodes:{setWrapperComponent:this.setWrapperComponent,setContentComponent:this.setContentComponent}},i=this.props.children,a="function"===typeof i?i(p(p({},o.state),o.dispatch)):i;return l.a.createElement(tt.Provider,{value:o},a)}}(s.Component);var ot="TransformComponent-module_container__3NwNd",it="TransformComponent-module_content__TZU5O";!function(t,n){void 0===n&&(n={});var e=n.insertAt;if(t&&"undefined"!==typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===e&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}(".TransformComponent-module_container__3NwNd {\n  position: relative;\n  width: fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.TransformComponent-module_content__TZU5O {\n  display: flex;\n  flex-wrap: wrap;\n  width: fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.TransformComponent-module_content__TZU5O img {\n  pointer-events: none;\n}\n"),(function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.wrapperRef=l.a.createRef(),n.contentRef=l.a.createRef(),n}return u(n,t),n.prototype.componentDidMount=function(){var t=this.context.nodes;t.setWrapperComponent(this.wrapperRef.current),t.setContentComponent(this.contentRef.current)},n.prototype.render=function(){var t=this.props.children,n=this.context.state,e=n.positionX,o=n.positionY,i=n.scale,a=n.options,r=a.wrapperClass,s=a.contentClass,c={WebkitTransform:"translate("+e+"px, "+o+"px) scale("+i+")",transform:"translate("+e+"px, "+o+"px) scale("+i+")"};return l.a.createElement("div",{ref:this.wrapperRef,className:"react-transform-component "+ot+" "+r},l.a.createElement("div",{ref:this.contentRef,className:"react-transform-element "+it+" "+s,style:c},t))},n}(l.a.Component)).contextType=tt;var at=e("uw7T"),rt=e("YSmr"),st=e("zM+O"),lt=e.n(st),ct=function(t,n){return'<span style="position: relative; left: 30px; top: 200px; color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;">'.concat(t.properties.name," (").concat(n["Electoral Votes"],")</span>")};n.default=function(){var t=Object(s.useContext)(at.b),n=t.data,e=t.windowSize,o=t.updateUserSelection,i=Object(s.useRef)(null),l=Object(s.useRef)(null);return Object(s.useEffect)((function(){void 0!==n&&null!==i.current&&(i.current.innerHTML="",l.current=function(t,n){if(void 0!==window)return new lt.a({element:t,scope:"usa",data:n,fills:rt.c,geographyConfig:{highlightOnHover:!0,highlightFillColor:!1,highlightBorderColor:"white",highlightBorderOpacity:"0.65",highlightBorderWidth:"4px",highlightFillOpacity:"0.85",popupTemplate:ct}})}(i.current,n),l.current.svg.selectAll(".datamaps-subunit").on("click",(function(t){o(t.id)})))}),[n].concat(a(e))),Object(r.jsx)("div",{style:{height:"100%"},ref:i})}}}]);