"use strict";var g=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var d=g(function(x,n){
var l=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),c=require('@stdlib/ndarray-base-shape/dist'),u=require('@stdlib/ndarray-base-strides/dist'),q=require('@stdlib/ndarray-base-offset/dist'),f=require('@stdlib/ndarray-base-data-buffer/dist'),o=require('@stdlib/blas-ext-base-gtriu/dist').ndarray;function p(e){var r,a,s,t,i,v;return t=e[0],i=e[1],v=l(e[2]),r=c(t,!1),a=u(t,!1),s=u(i,!1),o(r[0],r[1],v,f(t),a[0],a[1],q(t),f(i),s[0],s[1],q(i)),i}n.exports=p
});var h=d();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
