var bparser=function(){"use strict";function r(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],e=!0,o=!1,u=void 0;try{for(var a,i=r[Symbol.iterator]();!(e=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);e=!0);}catch(r){o=!0,u=r}finally{try{e||null==i.return||i.return()}finally{if(o)throw u}}return n}(r,t)||n(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(r){return function(r){if(Array.isArray(r))return e(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||n(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(r,t){if(r){if("string"==typeof r)return e(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(r,t):void 0}}function e(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}var o=function(r){return Array.isArray(r)?r:[r]},u=function(r,n,e){var u=o(n),a=o(e);return 0===u.length||0===a.length?u.concat(a):u.reduce((function(r,n){return r.push.apply(r,t(a.map((function(r){return r+","+n})))),r}),[])},a=function(r){return r.toString(16)},i=function(r){for(var t=arguments.length,n=new Array(t>1?t-1:0),e=1;e<t;e++)n[e-1]=arguments[e];return n.reduce((function(r,t){return u(0,r,t)}),[])},c=function(r,t){return r.replace(/(&|\|)/g,",").split(",").every(t.get)},f=function(r,t,n){var e=function(r){return function(t){for(var n,e=!1;n=t.match(/\([^\(]+?\)/g);){for(var o=0,u=n.length;o<u;o++){var a=n[o],i=a.substr(1,a.length-2);if(!(e=c(i,r)))break;t=t.replace(a,r.add(i,"$"))}if(!e)break}return!(!e||!c(t,r))&&t}}(n)("("+function(r){return function(t,n){return t.replace(n,(function(t){return r.add(t,"#")}))}}(n)(r,t).replace(/\s/g,"").replace(/AND/g,"&").replace(/OR/g,"|")+")");return e||!1},l=function(r,t){return-1!==r.indexOf(t)};return function(n,e){var o,u=function(){var r,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=0,e={};return{add:function(o,u){return r=u+t(++n),e[r]=o,r},get:function(r){return e[r]}}}(),c=f(n,e,u);return{isValid:!!c,results:c?(o=[]).concat.apply(o,t(function n(e){var o=r(["|","&"].map((function(r){return l(e,r)})),2),a=o[0],c=o[1],f=!l(e,"$"),p=a?e.split("|"):e;return f?p:a?e.split("|").map(n):c?i.apply(void 0,[e].concat(t(e.split("&").map(n)))):n(u.get(e))}(c))).map((function(r){return(t=r.replace(/&/g,",").split(",")).sort(),t;var t})).map((function(r){return r.map((function(r){return u.get(r)}))})):[]}}}();
