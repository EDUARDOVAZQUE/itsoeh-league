(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Co="160",Dd=0,pl=1,Id=2,Fd=1,Pg=2,Vi=3,Ai=0,$t=1,zn=2,ti=0,gi=1,yr=2,Tr=3,Mr=4,Dl=5,kn=100,Il=101,Fl=102,ml=103,gl=104,Ol=200,Bl=201,Vl=202,Gl=203,eo=204,to=205,zl=206,kl=207,Hl=208,Wl=209,Xl=210,Ug=211,Dg=212,Ig=213,Fg=214,$l=0,ql=1,Yl=2,Er=3,Kl=4,jl=5,Zl=6,Ql=7,$a=0,Og=1,Bg=2,Wn=0,Od=1,Bd=2,Vd=3,Gd=4,Vg=5,Gg=6,zd=300,rs=301,os=302,br=303,Ar=304,qa=306,no=1e3,Qn=1001,io=1002,mt=1003,Rr=1004,Rs=1005,Tn=1006,kd=1007,Wi=1008,ni=1009,Hd=1010,Wd=1011,Lo=1012,Po=1013,ei=1014,kt=1015,Ei=1016,Jl=1017,eu=1018,_i=1020,Xd=1021,Hn=1023,$d=1024,qd=1025,ii=1026,Ri=1027,tu=1028,nu=1029,iu=1030,su=1031,ru=1033,fr=33776,ws=33777,Ns=33778,Cs=33779,ya=35840,Ta=35841,Ma=35842,Ea=35843,ou=36196,so=37492,ro=37496,oo=37808,ao=37809,co=37810,lo=37811,uo=37812,ho=37813,fo=37814,po=37815,mo=37816,go=37817,_o=37818,xo=37819,vo=37820,So=37821,pr=36492,ah=36494,ch=36495,Yd=36283,ba=36284,Aa=36285,Ra=36286,au=3e3,is=3001,zg=3200,kg=3201,Ls=0,Kd=1,gn="",Ee="srgb",Xn="srgb-linear",cu="display-p3",Ya="display-p3-linear",wa="linear",Tt="srgb",Na="rec709",Ca="p3",Hg=0,Ts=7680,Wg=7681,Xg=7682,$g=7683,qg=34055,Yg=34056,Kg=5386,jg=512,Zg=513,Qg=514,Jg=515,e_=516,t_=517,n_=518,_l=519,lu=512,Ka=513,uu=514,ja=515,hu=516,du=517,fu=518,pu=519,La=35044,mu=35048,lh="300 es",xl=1035,Mi=2e3,wr=2001;class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uh=1234567;const Kr=Math.PI/180,Nr=180/Math.PI;function Hi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function on(r,e,t){return Math.max(e,Math.min(t,r))}function gu(r,e){return(r%e+e)%e}function i_(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function s_(r,e,t){return r!==e?(t-r)/(e-r):0}function jr(r,e,t){return(1-t)*r+t*e}function r_(r,e,t,n){return jr(r,e,1-Math.exp(-t*n))}function o_(r,e=1){return e-Math.abs(gu(r,e*2)-e)}function a_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function c_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function l_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function u_(r,e){return r+Math.random()*(e-r)}function h_(r){return r*(.5-Math.random())}function d_(r){r!==void 0&&(uh=r);let e=uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function f_(r){return r*Kr}function p_(r){return r*Nr}function vl(r){return(r&r-1)===0&&r!==0}function m_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Pa(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function g_(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,c*h,c*d,a*l);break;case"YZY":r.set(c*d,a*u,c*h,a*l);break;case"ZXZ":r.set(c*h,c*d,a*u,a*l);break;case"XZX":r.set(a*u,c*g,c*f,a*l);break;case"YXY":r.set(c*f,a*u,c*g,a*l);break;case"ZYZ":r.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ke(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const jd={DEG2RAD:Kr,RAD2DEG:Nr,generateUUID:Hi,clamp:on,euclideanModulo:gu,mapLinear:i_,inverseLerp:s_,lerp:jr,damp:r_,pingpong:o_,smoothstep:a_,smootherstep:c_,randInt:l_,randFloat:u_,randFloatSpread:h_,seededRandom:d_,degToRad:f_,radToDeg:p_,isPowerOfTwo:vl,ceilPowerOfTwo:m_,floorPowerOfTwo:Pa,setQuaternionFromProperEuler:g_,normalize:Ke,denormalize:wn};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,i,s,o,a,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],x=i[4],E=i[7],L=i[2],A=i[5],R=i[8];return s[0]=o*_+a*S+c*L,s[3]=o*m+a*x+c*A,s[6]=o*p+a*E+c*R,s[1]=l*_+u*S+h*L,s[4]=l*m+u*x+h*A,s[7]=l*p+u*E+h*R,s[2]=d*_+f*S+g*L,s[5]=d*m+f*x+g*A,s[8]=d*p+f*E+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_c.makeScale(e,t)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,t){return this.premultiply(_c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _c=new Je;function Zd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ua(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Qd(){const r=Ua("canvas");return r.style.display="block",r}const hh={};function Zr(r){r in hh||(hh[r]=!0,console.warn(r))}const dh=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fh=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wo={[Xn]:{transfer:wa,primaries:Na,toReference:r=>r,fromReference:r=>r},[Ee]:{transfer:Tt,primaries:Na,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ya]:{transfer:wa,primaries:Ca,toReference:r=>r.applyMatrix3(fh),fromReference:r=>r.applyMatrix3(dh)},[cu]:{transfer:Tt,primaries:Ca,toReference:r=>r.convertSRGBToLinear().applyMatrix3(fh),fromReference:r=>r.applyMatrix3(dh).convertLinearToSRGB()}},__=new Set([Xn,Ya]),pt={enabled:!0,_workingColorSpace:Xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!__.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Wo[e].toReference,i=Wo[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Wo[r].primaries},getTransfer:function(r){return r===gn?wa:Wo[r].transfer}};function mr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ws;class Jd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ws===void 0&&(Ws=Ua("canvas")),Ws.width=e.width,Ws.height=e.height;const n=Ws.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ua("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=mr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mr(t[n]/255)*255):t[n]=mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let x_=0;class ef{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=Hi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(vc(i[o].image)):s.push(vc(i[o]))}else s=vc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function vc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Jd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let v_=0;class En extends ls{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,n=Qn,i=Qn,s=Tn,o=Wi,a=Hn,c=ni,l=En.DEFAULT_ANISOTROPY,u=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=Hi(),this.name="",this.source=new ef(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===is?Ee:gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case no:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case no:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ee?is:au}set encoding(e){Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===is?Ee:gn}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=zd;En.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,E=(f+1)/2,L=(p+1)/2,A=(u+d)/4,R=(h+_)/4,Y=(g+m)/4;return x>E&&x>L?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=R/n):E>L?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=A/i,s=Y/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=R/s,i=Y/s),this.set(n,i,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(d-u)/S,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yo extends ls{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Zr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===is?Ee:gn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new En(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ef(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ps extends yo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _u extends En{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class S_ extends En{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uo{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),A=Math.atan2(L,p*S);m=Math.sin(m*A)/L,a=Math.sin(a*A)/L}const E=a*S;if(c=c*m+d*E,l=l*m+f*E,u=u*m+g*E,h=h*m+_*E,m===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ph.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=i+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sc=new U,ph=new Uo;class Do{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hi):hi.fromBufferAttribute(s,o),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xo.copy(n.boundingBox)),Xo.applyMatrix4(e.matrixWorld),this.union(Xo)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),$o.subVectors(this.max,Gr),Xs.subVectors(e.a,Gr),$s.subVectors(e.b,Gr),qs.subVectors(e.c,Gr),Yi.subVectors($s,Xs),Ki.subVectors(qs,$s),ms.subVectors(Xs,qs);let t=[0,-Yi.z,Yi.y,0,-Ki.z,Ki.y,0,-ms.z,ms.y,Yi.z,0,-Yi.x,Ki.z,0,-Ki.x,ms.z,0,-ms.x,-Yi.y,Yi.x,0,-Ki.y,Ki.x,0,-ms.y,ms.x,0];return!yc(t,Xs,$s,qs,$o)||(t=[1,0,0,0,1,0,0,0,1],!yc(t,Xs,$s,qs,$o))?!1:(qo.crossVectors(Yi,Ki),t=[qo.x,qo.y,qo.z],yc(t,Xs,$s,qs,$o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new U,new U,new U,new U,new U,new U,new U,new U],hi=new U,Xo=new Do,Xs=new U,$s=new U,qs=new U,Yi=new U,Ki=new U,ms=new U,Gr=new U,$o=new U,qo=new U,gs=new U;function yc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){gs.fromArray(r,s);const a=i.x*Math.abs(gs.x)+i.y*Math.abs(gs.y)+i.z*Math.abs(gs.z),c=e.dot(gs),l=t.dot(gs),u=n.dot(gs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const y_=new Do,zr=new U,Tc=new U;class xu{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):y_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);const t=zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(zr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(Tc)),this.expandByPoint(zr.copy(e.center).sub(Tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new U,Mc=new U,Yo=new U,ji=new U,Ec=new U,Ko=new U,bc=new U;class T_{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Mc.copy(e).add(t).multiplyScalar(.5),Yo.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(Mc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Yo),a=ji.dot(this.direction),c=-ji.dot(Yo),l=ji.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Mc).addScaledVector(Yo,d),f}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const n=Ii.dot(this.direction),i=Ii.dot(Ii)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,i,s){Ec.subVectors(t,e),Ko.subVectors(n,e),bc.crossVectors(Ec,Ko);let o=this.direction.dot(bc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);const c=a*this.direction.dot(Ko.crossVectors(ji,Ko));if(c<0)return null;const l=a*this.direction.dot(Ec.cross(ji));if(l<0||c+l>o)return null;const u=-a*ji.dot(bc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,n,i,s,o,a,c,l,u,h,d,f,g,_,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,h,d,f,g,_,m)}set(e,t,n,i,s,o,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ys.setFromMatrixColumn(e,0).length(),s=1/Ys.setFromMatrixColumn(e,1).length(),o=1/Ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M_,e,E_)}lookAt(e,t,n){const i=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Zi.crossVectors(n,In),Zi.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Zi.crossVectors(n,In)),Zi.normalize(),jo.crossVectors(In,Zi),i[0]=Zi.x,i[4]=jo.x,i[8]=In.x,i[1]=Zi.y,i[5]=jo.y,i[9]=In.y,i[2]=Zi.z,i[6]=jo.z,i[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],x=n[7],E=n[11],L=n[15],A=i[0],R=i[4],Y=i[8],T=i[12],b=i[1],$=i[5],ie=i[9],pe=i[13],P=i[2],H=i[6],K=i[10],ee=i[14],Q=i[3],j=i[7],ae=i[11],ue=i[15];return s[0]=o*A+a*b+c*P+l*Q,s[4]=o*R+a*$+c*H+l*j,s[8]=o*Y+a*ie+c*K+l*ae,s[12]=o*T+a*pe+c*ee+l*ue,s[1]=u*A+h*b+d*P+f*Q,s[5]=u*R+h*$+d*H+f*j,s[9]=u*Y+h*ie+d*K+f*ae,s[13]=u*T+h*pe+d*ee+f*ue,s[2]=g*A+_*b+m*P+p*Q,s[6]=g*R+_*$+m*H+p*j,s[10]=g*Y+_*ie+m*K+p*ae,s[14]=g*T+_*pe+m*ee+p*ue,s[3]=S*A+x*b+E*P+L*Q,s[7]=S*R+x*$+E*H+L*j,s[11]=S*Y+x*ie+E*K+L*ae,s[15]=S*T+x*pe+E*ee+L*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*h-i*l*h-s*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+s*o*d-i*o*f+i*l*u-s*c*u)+m*(+t*l*h-t*a*f-s*o*h+n*o*f+s*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,x=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,E=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,L=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,A=t*S+n*x+i*E+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=S*R,e[1]=(_*d*s-h*m*s-_*i*f+n*m*f+h*i*p-n*d*p)*R,e[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*p+n*c*p)*R,e[3]=(h*c*s-a*d*s-h*i*l+n*d*l+a*i*f-n*c*f)*R,e[4]=x*R,e[5]=(u*m*s-g*d*s+g*i*f-t*m*f-u*i*p+t*d*p)*R,e[6]=(g*c*s-o*m*s-g*i*l+t*m*l+o*i*p-t*c*p)*R,e[7]=(o*d*s-u*c*s+u*i*l-t*d*l-o*i*f+t*c*f)*R,e[8]=E*R,e[9]=(g*h*s-u*_*s-g*n*f+t*_*f+u*n*p-t*h*p)*R,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*p+t*a*p)*R,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*f-t*a*f)*R,e[12]=L*R,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*R,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*R,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,g=s*h,_=o*u,m=o*h,p=a*h,S=c*l,x=c*u,E=c*h,L=n.x,A=n.y,R=n.z;return i[0]=(1-(_+p))*L,i[1]=(f+E)*L,i[2]=(g-x)*L,i[3]=0,i[4]=(f-E)*A,i[5]=(1-(d+p))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(g+x)*R,i[9]=(m-S)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ys.set(i[0],i[1],i[2]).length();const o=Ys.set(i[4],i[5],i[6]).length(),a=Ys.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],di.copy(this);const l=1/s,u=1/o,h=1/a;return di.elements[0]*=l,di.elements[1]*=l,di.elements[2]*=l,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=h,di.elements[9]*=h,di.elements[10]*=h,t.setFromRotationMatrix(di),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Mi){const c=this.elements,l=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Mi)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===wr)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Mi){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*l,f=(n+i)*u;let g,_;if(a===Mi)g=(o+s)*h,_=-2*h;else if(a===wr)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ys=new U,di=new Rt,M_=new U(0,0,0),E_=new U(1,1,1),Zi=new U,jo=new U,In=new U,mh=new Rt,gh=new Uo;class Za{constructor(e=0,t=0,n=0,i=Za.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gh.setFromEuler(this),this.setFromQuaternion(gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Za.DEFAULT_ORDER="XYZ";class tf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let b_=0;const _h=new U,Ks=new Uo,Fi=new Rt,Zo=new U,kr=new U,A_=new U,R_=new Uo,xh=new U(1,0,0),vh=new U(0,1,0),Sh=new U(0,0,1),w_={type:"added"},N_={type:"removed"};class qt extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new U,t=new Za,n=new Uo,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Je}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(xh,e)}rotateY(e){return this.rotateOnAxis(vh,e)}rotateZ(e){return this.rotateOnAxis(Sh,e)}translateOnAxis(e,t){return _h.copy(e).applyQuaternion(this.quaternion),this.position.add(_h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xh,e)}translateY(e){return this.translateOnAxis(vh,e)}translateZ(e){return this.translateOnAxis(Sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zo.copy(e):Zo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(kr,Zo,this.up):Fi.lookAt(Zo,kr,this.up),this.quaternion.setFromRotationMatrix(Fi),i&&(Fi.extractRotation(i.matrixWorld),Ks.setFromRotationMatrix(Fi),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(w_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(N_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,A_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,R_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}qt.DEFAULT_UP=new U(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new U,Oi=new U,Ac=new U,Bi=new U,js=new U,Zs=new U,yh=new U,Rc=new U,wc=new U,Nc=new U;let Qo=!1;class mi{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fi.subVectors(e,t),i.cross(fi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){fi.subVectors(i,t),Oi.subVectors(n,t),Ac.subVectors(e,t);const o=fi.dot(fi),a=fi.dot(Oi),c=fi.dot(Ac),l=Oi.dot(Oi),u=Oi.dot(Ac),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getUV(e,t,n,i,s,o,a,c){return Qo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qo=!0),this.getInterpolation(e,t,n,i,s,o,a,c)}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Bi.x),c.addScaledVector(o,Bi.y),c.addScaledVector(a,Bi.z),c)}static isFrontFacing(e,t,n,i){return fi.subVectors(n,t),Oi.subVectors(e,t),fi.cross(Oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),fi.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Qo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qo=!0),mi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return mi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;js.subVectors(i,n),Zs.subVectors(s,n),Rc.subVectors(e,n);const c=js.dot(Rc),l=Zs.dot(Rc);if(c<=0&&l<=0)return t.copy(n);wc.subVectors(e,i);const u=js.dot(wc),h=Zs.dot(wc);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(js,o);Nc.subVectors(e,s);const f=js.dot(Nc),g=Zs.dot(Nc);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Zs,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return yh.subVectors(s,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(yh,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(js,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function Cc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ee){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=gu(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Cc(o,s,e+1/3),this.g=Cc(o,s,e),this.b=Cc(o,s,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ee){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ee){const n=nf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=xc(e.r),this.g=xc(e.g),this.b=xc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ee){return pt.fromWorkingColorSpace(pn.copy(this),e),Math.round(on(pn.r*255,0,255))*65536+Math.round(on(pn.g*255,0,255))*256+Math.round(on(pn.b*255,0,255))}getHexString(e=Ee){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(pn.copy(this),t);const n=pn.r,i=pn.g,s=pn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Ee){pt.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,n=pn.g,i=pn.b;return e!==Ee?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Jo);const n=jr(Qi.h,Jo.h,t),i=jr(Qi.s,Jo.s,t),s=jr(Qi.l,Jo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Pe;Pe.NAMES=nf;let C_=0;class ci extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=gi,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eo,this.blendDst=to,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==eo&&(n.blendSrc=this.blendSrc),this.blendDst!==to&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vu extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ki=L_();function L_(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Fn(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=on(r,-65504,65504),ki.floatView[0]=r;const e=ki.uint32View[0],t=e>>23&511;return ki.baseTable[t]+((e&8388607)>>ki.shiftTable[t])}function ea(r){const e=r>>10;return ki.uint32View[0]=ki.mantissaTable[ki.offsetTable[e]+(r&1023)]+ki.exponentTable[e],ki.floatView[0]}const Ot=new U,ta=new Be;class si{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=La,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==La&&(e.usage=this.usage),e}}class Su extends si{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yu extends si{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sf extends si{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ea(this.array[e*this.itemSize]);return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=Fn(t),this}getY(e){let t=ea(this.array[e*this.itemSize+1]);return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=Fn(t),this}getZ(e){let t=ea(this.array[e*this.itemSize+2]);return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=Fn(t),this}getW(e){let t=ea(this.array[e*this.itemSize+3]);return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=Fn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=Fn(t),this.array[e+1]=Fn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=Fn(t),this.array[e+1]=Fn(n),this.array[e+2]=Fn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.array[e+0]=Fn(t),this.array[e+1]=Fn(n),this.array[e+2]=Fn(i),this.array[e+3]=Fn(s),this}}class ri extends si{constructor(e,t,n){super(new Float32Array(e),t,n)}}let P_=0;const Yn=new Rt,Lc=new qt,Qs=new U,On=new Do,Hr=new Do,Qt=new U;class qi extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zd(e)?yu:Su)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ri(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(On.min,Hr.min),On.expandByPoint(Qt),Qt.addVectors(On.max,Hr.max),On.expandByPoint(Qt)):(On.expandByPoint(Hr.min),On.expandByPoint(Hr.max))}On.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Qt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Qt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Qt.fromBufferAttribute(a,l),c&&(Qs.fromBufferAttribute(e,l),Qt.add(Qs)),i=Math.max(i,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<a;b++)l[b]=new U,u[b]=new U;const h=new U,d=new U,f=new U,g=new Be,_=new Be,m=new Be,p=new U,S=new U;function x(b,$,ie){h.fromArray(i,b*3),d.fromArray(i,$*3),f.fromArray(i,ie*3),g.fromArray(o,b*2),_.fromArray(o,$*2),m.fromArray(o,ie*2),d.sub(h),f.sub(h),_.sub(g),m.sub(g);const pe=1/(_.x*m.y-m.x*_.y);isFinite(pe)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(pe),S.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(pe),l[b].add(p),l[$].add(p),l[ie].add(p),u[b].add(S),u[$].add(S),u[ie].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let b=0,$=E.length;b<$;++b){const ie=E[b],pe=ie.start,P=ie.count;for(let H=pe,K=pe+P;H<K;H+=3)x(n[H+0],n[H+1],n[H+2])}const L=new U,A=new U,R=new U,Y=new U;function T(b){R.fromArray(s,b*3),Y.copy(R);const $=l[b];L.copy($),L.sub(R.multiplyScalar(R.dot($))).normalize(),A.crossVectors(Y,$);const pe=A.dot(u[b])<0?-1:1;c[b*4]=L.x,c[b*4+1]=L.y,c[b*4+2]=L.z,c[b*4+3]=pe}for(let b=0,$=E.length;b<$;++b){const ie=E[b],pe=ie.start,P=ie.count;for(let H=pe,K=pe+P;H<K;H+=3)T(n[H+0]),T(n[H+1]),T(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new U,s=new U,o=new U,a=new U,c=new U,l=new U,u=new U,h=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new si(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qi,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Th=new Rt,_s=new T_,na=new xu,Mh=new U,Js=new U,er=new U,tr=new U,Pc=new U,ia=new U,sa=new Be,ra=new Be,oa=new Be,Eh=new U,bh=new U,Ah=new U,aa=new U,ca=new U;class an extends qt{constructor(e=new qi,t=new vu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){ia.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Pc.fromBufferAttribute(h,e),o?ia.addScaledVector(Pc,u):ia.addScaledVector(Pc.sub(t),u))}t.add(ia)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),_s.copy(e.ray).recast(e.near),!(na.containsPoint(_s.origin)===!1&&(_s.intersectSphere(na,Mh)===null||_s.origin.distanceToSquared(Mh)>(e.far-e.near)**2))&&(Th.copy(s).invert(),_s.copy(e.ray).applyMatrix4(Th),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=S,L=x;E<L;E+=3){const A=a.getX(E),R=a.getX(E+1),Y=a.getX(E+2);i=la(this,p,e,n,l,u,h,A,R,Y),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),x=a.getX(m+1),E=a.getX(m+2);i=la(this,o,e,n,l,u,h,S,x,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let E=S,L=x;E<L;E+=3){const A=E,R=E+1,Y=E+2;i=la(this,p,e,n,l,u,h,A,R,Y),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,x=m+1,E=m+2;i=la(this,o,e,n,l,u,h,S,x,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function U_(r,e,t,n,i,s,o,a){let c;if(e.side===$t?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Ai,a),c===null)return null;ca.copy(a),ca.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(ca);return l<t.near||l>t.far?null:{distance:l,point:ca.clone(),object:r}}function la(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Js),r.getVertexPosition(c,er),r.getVertexPosition(l,tr);const u=U_(r,e,t,n,Js,er,tr,aa);if(u){i&&(sa.fromBufferAttribute(i,a),ra.fromBufferAttribute(i,c),oa.fromBufferAttribute(i,l),u.uv=mi.getInterpolation(aa,Js,er,tr,sa,ra,oa,new Be)),s&&(sa.fromBufferAttribute(s,a),ra.fromBufferAttribute(s,c),oa.fromBufferAttribute(s,l),u.uv1=mi.getInterpolation(aa,Js,er,tr,sa,ra,oa,new Be),u.uv2=u.uv1),o&&(Eh.fromBufferAttribute(o,a),bh.fromBufferAttribute(o,c),Ah.fromBufferAttribute(o,l),u.normal=mi.getInterpolation(aa,Js,er,tr,Eh,bh,Ah,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new U,materialIndex:0};mi.getNormal(Js,er,tr,h.normal),u.face=h}return u}class Xi extends qi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ri(l,3)),this.setAttribute("normal",new ri(u,3)),this.setAttribute("uv",new ri(h,2));function g(_,m,p,S,x,E,L,A,R,Y,T){const b=E/R,$=L/Y,ie=E/2,pe=L/2,P=A/2,H=R+1,K=Y+1;let ee=0,Q=0;const j=new U;for(let ae=0;ae<K;ae++){const ue=ae*$-pe;for(let Se=0;Se<H;Se++){const q=Se*b-ie;j[_]=q*S,j[m]=ue*x,j[p]=P,l.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[p]=A>0?1:-1,u.push(j.x,j.y,j.z),h.push(Se/R),h.push(1-ae/Y),ee+=1}}for(let ae=0;ae<Y;ae++)for(let ue=0;ue<R;ue++){const Se=d+ue+H*ae,q=d+ue+H*(ae+1),te=d+(ue+1)+H*(ae+1),xe=d+(ue+1)+H*ae;c.push(Se,q,xe),c.push(q,te,xe),Q+=6}a.addGroup(f,Q,T),f+=Q,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yn(r){const e={};for(let t=0;t<r.length;t++){const n=Cr(r[t]);for(const i in n)e[i]=n[i]}return e}function D_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function rf(r){return r.getRenderTarget()===null?r.outputColorSpace:pt.workingColorSpace}const I_={clone:Cr,merge:yn};var F_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class as extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F_,this.fragmentShader=O_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=D_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class of extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vn extends of{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const nr=-90,ir=1;class af extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vn(nr,ir,e,t);i.layers=this.layers,this.add(i);const s=new Vn(nr,ir,e,t);s.layers=this.layers,this.add(s);const o=new Vn(nr,ir,e,t);o.layers=this.layers,this.add(o);const a=new Vn(nr,ir,e,t);a.layers=this.layers,this.add(a);const c=new Vn(nr,ir,e,t);c.layers=this.layers,this.add(c);const l=new Vn(nr,ir,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Tu extends En{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:rs,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cf extends Ps{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Zr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===is?Ee:gn),this.texture=new Tu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Xi(5,5,5),s=new as({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:ti});s.uniforms.tEquirect.value=t;const o=new an(i,s),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=Tn),new af(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Uc=new U,B_=new U,V_=new Je;class Ms{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Uc.subVectors(n,t).cross(B_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Uc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||V_.getNormalMatrix(e),i=this.coplanarPoint(Uc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new xu,ua=new U;class Qa{constructor(e=new Ms,t=new Ms,n=new Ms,i=new Ms,s=new Ms,o=new Ms){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],x=i[14],E=i[15];if(n[0].setComponents(c-s,d-l,m-f,E-p).normalize(),n[1].setComponents(c+s,d+l,m+f,E+p).normalize(),n[2].setComponents(c+o,d+u,m+g,E+S).normalize(),n[3].setComponents(c-o,d-u,m-g,E-S).normalize(),n[4].setComponents(c-a,d-h,m-_,E-x).normalize(),t===Mi)n[5].setComponents(c+a,d+h,m+_,E+x).normalize();else if(t===wr)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ua.x=i.normal.x>0?e.max.x:e.min.x,ua.y=i.normal.y>0?e.max.y:e.min.y,ua.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function G_(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,f=h.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,h,d),l.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:f}}function s(l,u,h){const d=u.array,f=u._updateRange,g=u.updateRanges;if(r.bindBuffer(h,l),f.count===-1&&g.length===0&&r.bufferSubData(h,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];t?r.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):r.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(t?r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,i(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}class Ja extends qi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*d-o;for(let x=0;x<l;x++){const E=x*h-s;g.push(E,-S,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const x=S+l*p,E=S+l*(p+1),L=S+1+l*(p+1),A=S+1+l*p;f.push(x,E,A),f.push(E,L,A)}this.setIndex(f),this.setAttribute("position",new ri(g,3)),this.setAttribute("normal",new ri(_,3)),this.setAttribute("uv",new ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.widthSegments,e.heightSegments)}}var z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,H_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Y_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,j_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Z_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ex=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ux=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,px=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_x="gl_FragColor = linearToOutputTexel( gl_FragColor );",xx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,vx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ux=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ev=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,iv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Mv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ev=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Iv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Yv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,r0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,a0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,x0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:z_,alphahash_pars_fragment:k_,alphamap_fragment:H_,alphamap_pars_fragment:W_,alphatest_fragment:X_,alphatest_pars_fragment:$_,aomap_fragment:q_,aomap_pars_fragment:Y_,batching_pars_vertex:K_,batching_vertex:j_,begin_vertex:Z_,beginnormal_vertex:Q_,bsdfs:J_,iridescence_fragment:ex,bumpmap_pars_fragment:tx,clipping_planes_fragment:nx,clipping_planes_pars_fragment:ix,clipping_planes_pars_vertex:sx,clipping_planes_vertex:rx,color_fragment:ox,color_pars_fragment:ax,color_pars_vertex:cx,color_vertex:lx,common:ux,cube_uv_reflection_fragment:hx,defaultnormal_vertex:dx,displacementmap_pars_vertex:fx,displacementmap_vertex:px,emissivemap_fragment:mx,emissivemap_pars_fragment:gx,colorspace_fragment:_x,colorspace_pars_fragment:xx,envmap_fragment:vx,envmap_common_pars_fragment:Sx,envmap_pars_fragment:yx,envmap_pars_vertex:Tx,envmap_physical_pars_fragment:Dx,envmap_vertex:Mx,fog_vertex:Ex,fog_pars_vertex:bx,fog_fragment:Ax,fog_pars_fragment:Rx,gradientmap_pars_fragment:wx,lightmap_fragment:Nx,lightmap_pars_fragment:Cx,lights_lambert_fragment:Lx,lights_lambert_pars_fragment:Px,lights_pars_begin:Ux,lights_toon_fragment:Ix,lights_toon_pars_fragment:Fx,lights_phong_fragment:Ox,lights_phong_pars_fragment:Bx,lights_physical_fragment:Vx,lights_physical_pars_fragment:Gx,lights_fragment_begin:zx,lights_fragment_maps:kx,lights_fragment_end:Hx,logdepthbuf_fragment:Wx,logdepthbuf_pars_fragment:Xx,logdepthbuf_pars_vertex:$x,logdepthbuf_vertex:qx,map_fragment:Yx,map_pars_fragment:Kx,map_particle_fragment:jx,map_particle_pars_fragment:Zx,metalnessmap_fragment:Qx,metalnessmap_pars_fragment:Jx,morphcolor_vertex:ev,morphnormal_vertex:tv,morphtarget_pars_vertex:nv,morphtarget_vertex:iv,normal_fragment_begin:sv,normal_fragment_maps:rv,normal_pars_fragment:ov,normal_pars_vertex:av,normal_vertex:cv,normalmap_pars_fragment:lv,clearcoat_normal_fragment_begin:uv,clearcoat_normal_fragment_maps:hv,clearcoat_pars_fragment:dv,iridescence_pars_fragment:fv,opaque_fragment:pv,packing:mv,premultiplied_alpha_fragment:gv,project_vertex:_v,dithering_fragment:xv,dithering_pars_fragment:vv,roughnessmap_fragment:Sv,roughnessmap_pars_fragment:yv,shadowmap_pars_fragment:Tv,shadowmap_pars_vertex:Mv,shadowmap_vertex:Ev,shadowmask_pars_fragment:bv,skinbase_vertex:Av,skinning_pars_vertex:Rv,skinning_vertex:wv,skinnormal_vertex:Nv,specularmap_fragment:Cv,specularmap_pars_fragment:Lv,tonemapping_fragment:Pv,tonemapping_pars_fragment:Uv,transmission_fragment:Dv,transmission_pars_fragment:Iv,uv_pars_fragment:Fv,uv_pars_vertex:Ov,uv_vertex:Bv,worldpos_vertex:Vv,background_vert:Gv,background_frag:zv,backgroundCube_vert:kv,backgroundCube_frag:Hv,cube_vert:Wv,cube_frag:Xv,depth_vert:$v,depth_frag:qv,distanceRGBA_vert:Yv,distanceRGBA_frag:Kv,equirect_vert:jv,equirect_frag:Zv,linedashed_vert:Qv,linedashed_frag:Jv,meshbasic_vert:e0,meshbasic_frag:t0,meshlambert_vert:n0,meshlambert_frag:i0,meshmatcap_vert:s0,meshmatcap_frag:r0,meshnormal_vert:o0,meshnormal_frag:a0,meshphong_vert:c0,meshphong_frag:l0,meshphysical_vert:u0,meshphysical_frag:h0,meshtoon_vert:d0,meshtoon_frag:f0,points_vert:p0,points_frag:m0,shadow_vert:g0,shadow_frag:_0,sprite_vert:x0,sprite_frag:v0},de={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},yi={basic:{uniforms:yn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:yn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:yn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:yn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:yn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:yn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:yn([de.points,de.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:yn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:yn([de.common,de.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:yn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:yn([de.sprite,de.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:yn([de.common,de.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:yn([de.lights,de.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};yi.physical={uniforms:yn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const ha={r:0,b:0,g:0};function S0(r,e,t,n,i,s,o){const a=new Pe(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function g(m,p){let S=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),S=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===qa)?(u===void 0&&(u=new an(new Xi(1,1,1),new as({name:"BackgroundCubeMaterial",uniforms:Cr(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=pt.getTransfer(x.colorSpace)!==Tt,(h!==x||d!==x.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new an(new Ja(2,2),new as({name:"BackgroundMaterial",uniforms:Cr(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=pt.getTransfer(x.colorSpace)!==Tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(ha,rf(r)),n.buffers.color.setClear(ha.r,ha.g,ha.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function y0(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=m(null);let l=c,u=!1;function h(P,H,K,ee,Q){let j=!1;if(o){const ae=_(ee,K,H);l!==ae&&(l=ae,f(l.object)),j=p(P,ee,K,Q),j&&S(P,ee,K,Q)}else{const ae=H.wireframe===!0;(l.geometry!==ee.id||l.program!==K.id||l.wireframe!==ae)&&(l.geometry=ee.id,l.program=K.id,l.wireframe=ae,j=!0)}Q!==null&&t.update(Q,r.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,Y(P,H,K,ee),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,H,K){const ee=K.wireframe===!0;let Q=a[P.id];Q===void 0&&(Q={},a[P.id]=Q);let j=Q[H.id];j===void 0&&(j={},Q[H.id]=j);let ae=j[ee];return ae===void 0&&(ae=m(d()),j[ee]=ae),ae}function m(P){const H=[],K=[],ee=[];for(let Q=0;Q<i;Q++)H[Q]=0,K[Q]=0,ee[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:ee,object:P,attributes:{},index:null}}function p(P,H,K,ee){const Q=l.attributes,j=H.attributes;let ae=0;const ue=K.getAttributes();for(const Se in ue)if(ue[Se].location>=0){const te=Q[Se];let xe=j[Se];if(xe===void 0&&(Se==="instanceMatrix"&&P.instanceMatrix&&(xe=P.instanceMatrix),Se==="instanceColor"&&P.instanceColor&&(xe=P.instanceColor)),te===void 0||te.attribute!==xe||xe&&te.data!==xe.data)return!0;ae++}return l.attributesNum!==ae||l.index!==ee}function S(P,H,K,ee){const Q={},j=H.attributes;let ae=0;const ue=K.getAttributes();for(const Se in ue)if(ue[Se].location>=0){let te=j[Se];te===void 0&&(Se==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),Se==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));const xe={};xe.attribute=te,te&&te.data&&(xe.data=te.data),Q[Se]=xe,ae++}l.attributes=Q,l.attributesNum=ae,l.index=ee}function x(){const P=l.newAttributes;for(let H=0,K=P.length;H<K;H++)P[H]=0}function E(P){L(P,0)}function L(P,H){const K=l.newAttributes,ee=l.enabledAttributes,Q=l.attributeDivisors;K[P]=1,ee[P]===0&&(r.enableVertexAttribArray(P),ee[P]=1),Q[P]!==H&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,H),Q[P]=H)}function A(){const P=l.newAttributes,H=l.enabledAttributes;for(let K=0,ee=H.length;K<ee;K++)H[K]!==P[K]&&(r.disableVertexAttribArray(K),H[K]=0)}function R(P,H,K,ee,Q,j,ae){ae===!0?r.vertexAttribIPointer(P,H,K,Q,j):r.vertexAttribPointer(P,H,K,ee,Q,j)}function Y(P,H,K,ee){if(n.isWebGL2===!1&&(P.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const Q=ee.attributes,j=K.getAttributes(),ae=H.defaultAttributeValues;for(const ue in j){const Se=j[ue];if(Se.location>=0){let q=Q[ue];if(q===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(q=P.instanceColor)),q!==void 0){const te=q.normalized,xe=q.itemSize,Ce=t.get(q);if(Ce===void 0)continue;const Ne=Ce.buffer,qe=Ce.type,je=Ce.bytesPerElement,ze=n.isWebGL2===!0&&(qe===r.INT||qe===r.UNSIGNED_INT||q.gpuType===Po);if(q.isInterleavedBufferAttribute){const lt=q.data,B=lt.stride,_n=q.offset;if(lt.isInstancedInterleavedBuffer){for(let Ue=0;Ue<Se.locationSize;Ue++)L(Se.location+Ue,lt.meshPerAttribute);P.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ue=0;Ue<Se.locationSize;Ue++)E(Se.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let Ue=0;Ue<Se.locationSize;Ue++)R(Se.location+Ue,xe/Se.locationSize,qe,te,B*je,(_n+xe/Se.locationSize*Ue)*je,ze)}else{if(q.isInstancedBufferAttribute){for(let lt=0;lt<Se.locationSize;lt++)L(Se.location+lt,q.meshPerAttribute);P.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let lt=0;lt<Se.locationSize;lt++)E(Se.location+lt);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let lt=0;lt<Se.locationSize;lt++)R(Se.location+lt,xe/Se.locationSize,qe,te,xe*je,xe/Se.locationSize*lt*je,ze)}}else if(ae!==void 0){const te=ae[ue];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(Se.location,te);break;case 3:r.vertexAttrib3fv(Se.location,te);break;case 4:r.vertexAttrib4fv(Se.location,te);break;default:r.vertexAttrib1fv(Se.location,te)}}}}A()}function T(){ie();for(const P in a){const H=a[P];for(const K in H){const ee=H[K];for(const Q in ee)g(ee[Q].object),delete ee[Q];delete H[K]}delete a[P]}}function b(P){if(a[P.id]===void 0)return;const H=a[P.id];for(const K in H){const ee=H[K];for(const Q in ee)g(ee[Q].object),delete ee[Q];delete H[K]}delete a[P.id]}function $(P){for(const H in a){const K=a[H];if(K[P.id]===void 0)continue;const ee=K[P.id];for(const Q in ee)g(ee[Q].object),delete ee[Q];delete K[P.id]}}function ie(){pe(),u=!0,l!==c&&(l=c,f(l.object))}function pe(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:ie,resetDefaultState:pe,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:$,initAttributes:x,enableAttribute:E,disableUnusedAttributes:A}}function T0(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function c(u,h,d){if(d===0)return;let f,g;if(i)f=r,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,h,d),t.update(h,s,d)}function l(u,h,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function M0(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,E=o||e.has("OES_texture_float"),L=x&&E,A=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:L,maxSamples:A}}function E0(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ms,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{const S=s?0:n,x=S*4;let E=p.clippingState||null;c.value=E,E=u(g,d,x,f);for(let L=0;L!==x;++L)E[L]=t[L];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,E=f;x!==_;++x,E+=4)o.copy(h[x]).applyMatrix4(S,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function b0(r){let e=new WeakMap;function t(o,a){return a===br?o.mapping=rs:a===Ar&&(o.mapping=os),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===br||a===Ar)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new cf(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ec extends of{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ar=4,Rh=[.125,.215,.35,.446,.526,.582],bs=20,Dc=new ec,wh=new Pe;let Ic=null,Fc=0,Oc=0;const Es=(1+Math.sqrt(5))/2,sr=1/Es,Nh=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Es,sr),new U(0,Es,-sr),new U(sr,0,Es),new U(-sr,0,Es),new U(Es,sr,0),new U(-Es,sr,0)];class Ch{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ic=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ic,Fc,Oc),e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ic=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Ei,format:Hn,colorSpace:Xn,depthBuffer:!1},i=Lh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A0(s)),this._blurMaterial=R0(s,e,t)}return i}_compileMaterial(e){const t=new an(this._lodPlanes[0],e);this._renderer.compile(t,Dc)}_sceneToCubeUV(e,t,n,i){const a=new Vn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(wh),u.toneMapping=Wn,u.autoClear=!1;const f=new vu({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new an(new Xi,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(wh),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;da(i,S*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===rs||e.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new an(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;da(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Dc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Nh[(i-1)%Nh.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new an(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*bs-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):bs;m>bs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bs}`);const p=[];let S=0;for(let R=0;R<bs;++R){const Y=R/_,T=Math.exp(-Y*Y/2);p.push(T),R===0?S+=T:R<m&&(S+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const E=this._sizeLods[i],L=3*E*(i>x-ar?i-x+ar:0),A=4*(this._cubeSize-E);da(t,L,A,3*E,2*E),c.setRenderTarget(t),c.render(h,Dc)}}function A0(r){const e=[],t=[],n=[];let i=r;const s=r-ar+1+Rh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-ar?c=Rh[o-r+ar-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),x=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,Y=A>2?0:-1,T=[R,Y,0,R+2/3,Y,0,R+2/3,Y+1,0,R,Y,0,R+2/3,Y+1,0,R,Y+1,0];S.set(T,_*g*A),x.set(d,m*g*A);const b=[A,A,A,A,A,A];E.set(b,p*g*A)}const L=new qi;L.setAttribute("position",new si(S,_)),L.setAttribute("uv",new si(x,m)),L.setAttribute("faceIndex",new si(E,p)),e.push(L),i>ar&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lh(r,e,t){const n=new Ps(r,e,t);return n.texture.mapping=qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function da(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function R0(r,e,t){const n=new Float32Array(bs),i=new U(0,1,0);return new as({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ph(){return new as({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Uh(){return new as({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function w0(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===br||c===Ar,u=c===rs||c===os;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Ch(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Ch(r));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function N0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function C0(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let x=0,E=S.length;x<E;x+=3){const L=S[x+0],A=S[x+1],R=S[x+2];d.push(L,A,A,R,R,L)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,E=S.length/3-1;x<E;x+=3){const L=x+0,A=x+1,R=x+2;d.push(L,A,A,R,R,L)}}else return;const m=new(Zd(d)?yu:Su)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function L0(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,g){r.drawElements(s,g,a,f*c),t.update(g,s,1)}function h(f,g,_){if(_===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,f*c,_),t.update(g,s,_)}function d(f,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,f,0,_);let p=0;for(let S=0;S<_;S++)p+=g[S];t.update(p,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function P0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function U0(r,e){return r[0]-e[0]}function D0(r,e){return Math.abs(e[1])-Math.abs(r[1])}function I0(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new ot,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let P=function(){ie.dispose(),s.delete(u),u.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const S=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let Y=0;S===!0&&(Y=1),x===!0&&(Y=2),E===!0&&(Y=3);let T=u.attributes.position.count*Y,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const $=new Float32Array(T*b*4*g),ie=new _u($,T,b,g);ie.type=kt,ie.needsUpdate=!0;const pe=Y*4;for(let H=0;H<g;H++){const K=L[H],ee=A[H],Q=R[H],j=T*b*4*H;for(let ae=0;ae<K.count;ae++){const ue=ae*pe;S===!0&&(o.fromBufferAttribute(K,ae),$[j+ue+0]=o.x,$[j+ue+1]=o.y,$[j+ue+2]=o.z,$[j+ue+3]=0),x===!0&&(o.fromBufferAttribute(ee,ae),$[j+ue+4]=o.x,$[j+ue+5]=o.y,$[j+ue+6]=o.z,$[j+ue+7]=0),E===!0&&(o.fromBufferAttribute(Q,ae),$[j+ue+8]=o.x,$[j+ue+9]=o.y,$[j+ue+10]=o.z,$[j+ue+11]=Q.itemSize===4?o.w:1)}}_={count:g,texture:ie,size:new Be(T,b)},s.set(u,_),u.addEventListener("dispose",P)}let m=0;for(let S=0;S<d.length;S++)m+=d[S];const p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",p),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const f=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<f;x++){const E=g[x];E[0]=x,E[1]=d[x]}g.sort(D0);for(let x=0;x<8;x++)x<f&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(U0);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const E=a[x],L=E[0],A=E[1];L!==Number.MAX_SAFE_INTEGER&&A?(_&&u.getAttribute("morphTarget"+x)!==_[L]&&u.setAttribute("morphTarget"+x,_[L]),m&&u.getAttribute("morphNormal"+x)!==m[L]&&u.setAttribute("morphNormal"+x,m[L]),i[x]=A,p+=A):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const S=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",S),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function F0(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Vs extends En{constructor(e,t,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:ii,u!==ii&&u!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ii&&(n=ei),n===void 0&&u===Ri&&(n=_i),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mt,this.minFilter=c!==void 0?c:mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const uf=new En,hf=new Vs(1,1);hf.compareFunction=ja;const df=new _u,ff=new S_,pf=new Tu,Dh=[],Ih=[],Fh=new Float32Array(16),Oh=new Float32Array(9),Bh=new Float32Array(4);function Dr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Dh[i];if(s===void 0&&(s=new Float32Array(i),Dh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Kt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function tc(r,e){let t=Ih[e];t===void 0&&(t=new Int32Array(e),Ih[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function O0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function B0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2fv(this.addr,e),Kt(t,e)}}function V0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;r.uniform3fv(this.addr,e),Kt(t,e)}}function G0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4fv(this.addr,e),Kt(t,e)}}function z0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;Bh.set(n),r.uniformMatrix2fv(this.addr,!1,Bh),Kt(t,n)}}function k0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;Oh.set(n),r.uniformMatrix3fv(this.addr,!1,Oh),Kt(t,n)}}function H0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;Fh.set(n),r.uniformMatrix4fv(this.addr,!1,Fh),Kt(t,n)}}function W0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function X0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2iv(this.addr,e),Kt(t,e)}}function $0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;r.uniform3iv(this.addr,e),Kt(t,e)}}function q0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4iv(this.addr,e),Kt(t,e)}}function Y0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function K0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2uiv(this.addr,e),Kt(t,e)}}function j0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;r.uniform3uiv(this.addr,e),Kt(t,e)}}function Z0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4uiv(this.addr,e),Kt(t,e)}}function Q0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?hf:uf;t.setTexture2D(e||s,i)}function J0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ff,i)}function eS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||pf,i)}function tS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||df,i)}function nS(r){switch(r){case 5126:return O0;case 35664:return B0;case 35665:return V0;case 35666:return G0;case 35674:return z0;case 35675:return k0;case 35676:return H0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return $0;case 35669:case 35673:return q0;case 5125:return Y0;case 36294:return K0;case 36295:return j0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return eS;case 36289:case 36303:case 36311:case 36292:return tS}}function iS(r,e){r.uniform1fv(this.addr,e)}function sS(r,e){const t=Dr(e,this.size,2);r.uniform2fv(this.addr,t)}function rS(r,e){const t=Dr(e,this.size,3);r.uniform3fv(this.addr,t)}function oS(r,e){const t=Dr(e,this.size,4);r.uniform4fv(this.addr,t)}function aS(r,e){const t=Dr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function cS(r,e){const t=Dr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function lS(r,e){const t=Dr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function uS(r,e){r.uniform1iv(this.addr,e)}function hS(r,e){r.uniform2iv(this.addr,e)}function dS(r,e){r.uniform3iv(this.addr,e)}function fS(r,e){r.uniform4iv(this.addr,e)}function pS(r,e){r.uniform1uiv(this.addr,e)}function mS(r,e){r.uniform2uiv(this.addr,e)}function gS(r,e){r.uniform3uiv(this.addr,e)}function _S(r,e){r.uniform4uiv(this.addr,e)}function xS(r,e,t){const n=this.cache,i=e.length,s=tc(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||uf,s[o])}function vS(r,e,t){const n=this.cache,i=e.length,s=tc(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ff,s[o])}function SS(r,e,t){const n=this.cache,i=e.length,s=tc(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||pf,s[o])}function yS(r,e,t){const n=this.cache,i=e.length,s=tc(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||df,s[o])}function TS(r){switch(r){case 5126:return iS;case 35664:return sS;case 35665:return rS;case 35666:return oS;case 35674:return aS;case 35675:return cS;case 35676:return lS;case 5124:case 35670:return uS;case 35667:case 35671:return hS;case 35668:case 35672:return dS;case 35669:case 35673:return fS;case 5125:return pS;case 36294:return mS;case 36295:return gS;case 36296:return _S;case 35678:case 36198:case 36298:case 36306:case 35682:return xS;case 35679:case 36299:case 36307:return vS;case 35680:case 36300:case 36308:case 36293:return SS;case 36289:case 36303:case 36311:case 36292:return yS}}class MS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nS(t.type)}}class ES{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TS(t.type)}}class bS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Bc=/(\w+)(\])?(\[|\.)?/g;function Vh(r,e){r.seq.push(e),r.map[e.id]=e}function AS(r,e,t){const n=r.name,i=n.length;for(Bc.lastIndex=0;;){const s=Bc.exec(n),o=Bc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Vh(t,l===void 0?new MS(a,r,e):new ES(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new bS(a),Vh(t,h)),t=h}}}class va{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);AS(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Gh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const RS=37297;let wS=0;function NS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function CS(r){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(r);let n;switch(e===t?n="":e===Ca&&t===Na?n="LinearDisplayP3ToLinearSRGB":e===Na&&t===Ca&&(n="LinearSRGBToLinearDisplayP3"),r){case Xn:case Ya:return[n,"LinearTransferOETF"];case Ee:case cu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function zh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+NS(r.getShaderSource(e),o)}else return i}function LS(r,e){const t=CS(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function PS(r,e){let t;switch(e){case Od:t="Linear";break;case Bd:t="Reinhard";break;case Vd:t="OptimizedCineon";break;case Gd:t="ACESFilmic";break;case Gg:t="AgX";break;case Vg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function US(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cr).join(`
`)}function DS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(cr).join(`
`)}function IS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function FS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function cr(r){return r!==""}function kh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(r){return r.replace(OS,VS)}const BS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function VS(r,e){let t=Qe[e];if(t===void 0){const n=BS.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sl(t)}const GS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(r){return r.replace(GS,zS)}function zS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Fd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Pg?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function HS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case rs:case os:e="ENVMAP_TYPE_CUBE";break;case qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function XS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $a:e="ENVMAP_BLENDING_MULTIPLY";break;case Og:e="ENVMAP_BLENDING_MIX";break;case Bg:e="ENVMAP_BLENDING_ADD";break}return e}function $S(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qS(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=kS(t),l=HS(t),u=WS(t),h=XS(t),d=$S(t),f=t.isWebGL2?"":US(t),g=DS(t),_=IS(s),m=i.createProgram();let p,S,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(cr).join(`
`),p.length>0&&(p+=`
`),S=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(cr).join(`
`),S.length>0&&(S+=`
`)):(p=[Xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),S=[f,Xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Wn?PS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,LS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),o=Sl(o),o=kh(o,t),o=Hh(o,t),a=Sl(a),a=kh(a,t),a=Hh(a,t),o=Wh(o),a=Wh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const E=x+p+o,L=x+S+a,A=Gh(i,i.VERTEX_SHADER,E),R=Gh(i,i.FRAGMENT_SHADER,L);i.attachShader(m,A),i.attachShader(m,R),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function Y(ie){if(r.debug.checkShaderErrors){const pe=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(A).trim(),H=i.getShaderInfoLog(R).trim();let K=!0,ee=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,A,R);else{const Q=zh(i,A,"vertex"),j=zh(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+pe+`
`+Q+`
`+j)}else pe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pe):(P===""||H==="")&&(ee=!1);ee&&(ie.diagnostics={runnable:K,programLog:pe,vertexShader:{log:P,prefix:p},fragmentShader:{log:H,prefix:S}})}i.deleteShader(A),i.deleteShader(R),T=new va(i,m),b=FS(i,m)}let T;this.getUniforms=function(){return T===void 0&&Y(this),T};let b;this.getAttributes=function(){return b===void 0&&Y(this),b};let $=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=i.getProgramParameter(m,RS)),$},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wS++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=R,this}let YS=0;class KS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jS(e),t.set(e,n)),n}}class jS{constructor(e){this.id=YS++,this.code=e,this.usedTimes=0}}function ZS(r,e,t,n,i,s,o){const a=new tf,c=new KS,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return T===0?"uv":`uv${T}`}function m(T,b,$,ie,pe){const P=ie.fog,H=pe.geometry,K=T.isMeshStandardMaterial?ie.environment:null,ee=(T.isMeshStandardMaterial?t:e).get(T.envMap||K),Q=ee&&ee.mapping===qa?ee.image.height:null,j=g[T.type];T.precision!==null&&(f=i.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const ae=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ue=ae!==void 0?ae.length:0;let Se=0;H.morphAttributes.position!==void 0&&(Se=1),H.morphAttributes.normal!==void 0&&(Se=2),H.morphAttributes.color!==void 0&&(Se=3);let q,te,xe,Ce;if(j){const xn=yi[j];q=xn.vertexShader,te=xn.fragmentShader}else q=T.vertexShader,te=T.fragmentShader,c.update(T),xe=c.getVertexShaderID(T),Ce=c.getFragmentShaderID(T);const Ne=r.getRenderTarget(),qe=pe.isInstancedMesh===!0,je=pe.isBatchedMesh===!0,ze=!!T.map,lt=!!T.matcap,B=!!ee,_n=!!T.aoMap,Ue=!!T.lightMap,Xe=!!T.bumpMap,be=!!T.normalMap,bt=!!T.displacementMap,et=!!T.emissiveMap,M=!!T.metalnessMap,v=!!T.roughnessMap,z=T.anisotropy>0,ce=T.clearcoat>0,se=T.iridescence>0,le=T.sheen>0,Ae=T.transmission>0,_e=z&&!!T.anisotropyMap,ye=ce&&!!T.clearcoatMap,Ve=ce&&!!T.clearcoatNormalMap,tt=ce&&!!T.clearcoatRoughnessMap,ne=se&&!!T.iridescenceMap,ft=se&&!!T.iridescenceThicknessMap,rt=le&&!!T.sheenColorMap,We=le&&!!T.sheenRoughnessMap,Le=!!T.specularMap,Te=!!T.specularColorMap,Ze=!!T.specularIntensityMap,dt=Ae&&!!T.transmissionMap,Nt=Ae&&!!T.thicknessMap,it=!!T.gradientMap,he=!!T.alphaMap,N=T.alphaTest>0,me=!!T.alphaHash,ge=!!T.extensions,ke=!!H.attributes.uv1,De=!!H.attributes.uv2,xt=!!H.attributes.uv3;let vt=Wn;return T.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(vt=r.toneMapping),{isWebGL2:u,shaderID:j,shaderType:T.type,shaderName:T.name,vertexShader:q,fragmentShader:te,defines:T.defines,customVertexShaderID:xe,customFragmentShaderID:Ce,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:je,instancing:qe,instancingColor:qe&&pe.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ne===null?r.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Xn,map:ze,matcap:lt,envMap:B,envMapMode:B&&ee.mapping,envMapCubeUVHeight:Q,aoMap:_n,lightMap:Ue,bumpMap:Xe,normalMap:be,displacementMap:d&&bt,emissiveMap:et,normalMapObjectSpace:be&&T.normalMapType===Kd,normalMapTangentSpace:be&&T.normalMapType===Ls,metalnessMap:M,roughnessMap:v,anisotropy:z,anisotropyMap:_e,clearcoat:ce,clearcoatMap:ye,clearcoatNormalMap:Ve,clearcoatRoughnessMap:tt,iridescence:se,iridescenceMap:ne,iridescenceThicknessMap:ft,sheen:le,sheenColorMap:rt,sheenRoughnessMap:We,specularMap:Le,specularColorMap:Te,specularIntensityMap:Ze,transmission:Ae,transmissionMap:dt,thicknessMap:Nt,gradientMap:it,opaque:T.transparent===!1&&T.blending===gi,alphaMap:he,alphaTest:N,alphaHash:me,combine:T.combine,mapUv:ze&&_(T.map.channel),aoMapUv:_n&&_(T.aoMap.channel),lightMapUv:Ue&&_(T.lightMap.channel),bumpMapUv:Xe&&_(T.bumpMap.channel),normalMapUv:be&&_(T.normalMap.channel),displacementMapUv:bt&&_(T.displacementMap.channel),emissiveMapUv:et&&_(T.emissiveMap.channel),metalnessMapUv:M&&_(T.metalnessMap.channel),roughnessMapUv:v&&_(T.roughnessMap.channel),anisotropyMapUv:_e&&_(T.anisotropyMap.channel),clearcoatMapUv:ye&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:We&&_(T.sheenRoughnessMap.channel),specularMapUv:Le&&_(T.specularMap.channel),specularColorMapUv:Te&&_(T.specularColorMap.channel),specularIntensityMapUv:Ze&&_(T.specularIntensityMap.channel),transmissionMapUv:dt&&_(T.transmissionMap.channel),thicknessMapUv:Nt&&_(T.thicknessMap.channel),alphaMapUv:he&&_(T.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(be||z),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:ke,vertexUv2s:De,vertexUv3s:xt,pointsUvs:pe.isPoints===!0&&!!H.attributes.uv&&(ze||he),fog:!!P,useFog:T.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:pe.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&$.length>0,shadowMapType:r.shadowMap.type,toneMapping:vt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ze&&T.map.isVideoTexture===!0&&pt.getTransfer(T.map.colorSpace)===Tt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===zn,flipSided:T.side===$t,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:ge&&T.extensions.derivatives===!0,extensionFragDepth:ge&&T.extensions.fragDepth===!0,extensionDrawBuffers:ge&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&T.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function p(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const $ in T.defines)b.push($),b.push(T.defines[$]);return T.isRawShaderMaterial===!1&&(S(b,T),x(b,T),b.push(r.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function S(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function x(T,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),T.push(a.mask)}function E(T){const b=g[T.type];let $;if(b){const ie=yi[b];$=I_.clone(ie.uniforms)}else $=T.uniforms;return $}function L(T,b){let $;for(let ie=0,pe=l.length;ie<pe;ie++){const P=l[ie];if(P.cacheKey===b){$=P,++$.usedTimes;break}}return $===void 0&&($=new qS(r,b,T,s),l.push($)),$}function A(T){if(--T.usedTimes===0){const b=l.indexOf(T);l[b]=l[l.length-1],l.pop(),T.destroy()}}function R(T){c.remove(T)}function Y(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:L,releaseProgram:A,releaseShaderCache:R,programs:l,dispose:Y}}function QS(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function JS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function $h(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function qh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||JS),n.length>1&&n.sort(d||$h),i.length>1&&i.sort(d||$h)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function ey(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new qh,r.set(n,[o])):i>=s.length?(o=new qh,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ty(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Pe};break;case"SpotLight":t={position:new U,direction:new U,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function ny(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let iy=0;function sy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ry(r,e){const t=new ty,n=ny(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const s=new U,o=new Rt,a=new Rt;function c(u,h){let d=0,f=0,g=0;for(let ie=0;ie<9;ie++)i.probe[ie].set(0,0,0);let _=0,m=0,p=0,S=0,x=0,E=0,L=0,A=0,R=0,Y=0,T=0;u.sort(sy);const b=h===!0?Math.PI:1;for(let ie=0,pe=u.length;ie<pe;ie++){const P=u[ie],H=P.color,K=P.intensity,ee=P.distance,Q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=H.r*K*b,f+=H.g*K*b,g+=H.b*K*b;else if(P.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],K);T++}else if(P.isDirectionalLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const ae=P.shadow,ue=n.get(P);ue.shadowBias=ae.bias,ue.shadowNormalBias=ae.normalBias,ue.shadowRadius=ae.radius,ue.shadowMapSize=ae.mapSize,i.directionalShadow[_]=ue,i.directionalShadowMap[_]=Q,i.directionalShadowMatrix[_]=P.shadow.matrix,E++}i.directional[_]=j,_++}else if(P.isSpotLight){const j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(H).multiplyScalar(K*b),j.distance=ee,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[p]=j;const ae=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,ae.updateMatrices(P),P.castShadow&&Y++),i.spotLightMatrix[p]=ae.matrix,P.castShadow){const ue=n.get(P);ue.shadowBias=ae.bias,ue.shadowNormalBias=ae.normalBias,ue.shadowRadius=ae.radius,ue.shadowMapSize=ae.mapSize,i.spotShadow[p]=ue,i.spotShadowMap[p]=Q,A++}p++}else if(P.isRectAreaLight){const j=t.get(P);j.color.copy(H).multiplyScalar(K),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[S]=j,S++}else if(P.isPointLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*b),j.distance=P.distance,j.decay=P.decay,P.castShadow){const ae=P.shadow,ue=n.get(P);ue.shadowBias=ae.bias,ue.shadowNormalBias=ae.normalBias,ue.shadowRadius=ae.radius,ue.shadowMapSize=ae.mapSize,ue.shadowCameraNear=ae.camera.near,ue.shadowCameraFar=ae.camera.far,i.pointShadow[m]=ue,i.pointShadowMap[m]=Q,i.pointShadowMatrix[m]=P.shadow.matrix,L++}i.point[m]=j,m++}else if(P.isHemisphereLight){const j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(K*b),j.groundColor.copy(P.groundColor).multiplyScalar(K*b),i.hemi[x]=j,x++}}S>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const $=i.hash;($.directionalLength!==_||$.pointLength!==m||$.spotLength!==p||$.rectAreaLength!==S||$.hemiLength!==x||$.numDirectionalShadows!==E||$.numPointShadows!==L||$.numSpotShadows!==A||$.numSpotMaps!==R||$.numLightProbes!==T)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=S,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=A+R-Y,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=Y,i.numLightProbes=T,$.directionalLength=_,$.pointLength=m,$.spotLength=p,$.rectAreaLength=S,$.hemiLength=x,$.numDirectionalShadows=E,$.numPointShadows=L,$.numSpotShadows=A,$.numSpotMaps=R,$.numLightProbes=T,i.version=iy++)}function l(u,h){let d=0,f=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let S=0,x=u.length;S<x;S++){const E=u[S];if(E.isDirectionalLight){const L=i.directional[d];L.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(p),d++}else if(E.isSpotLight){const L=i.spot[g];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(p),g++}else if(E.isRectAreaLight){const L=i.rectArea[_];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(p),a.identity(),o.copy(E.matrixWorld),o.premultiply(p),a.extractRotation(o),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const L=i.point[f];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const L=i.hemi[m];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function Yh(r,e){const t=new ry(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function oy(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Yh(r,e),t.set(s,[c])):o>=a.length?(c=new Yh(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class ay extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cy extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hy(r,e,t){let n=new Qa;const i=new Be,s=new Be,o=new ot,a=new ay({depthPacking:kg}),c=new cy,l={},u=t.maxTextureSize,h={[Ai]:$t,[$t]:Ai,[zn]:zn},d=new as({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:ly,fragmentShader:uy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new qi;g.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new an(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fd;let p=this.type;this.render=function(A,R,Y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=r.getRenderTarget(),b=r.getActiveCubeFace(),$=r.getActiveMipmapLevel(),ie=r.state;ie.setBlending(ti),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const pe=p!==Vi&&this.type===Vi,P=p===Vi&&this.type!==Vi;for(let H=0,K=A.length;H<K;H++){const ee=A[H],Q=ee.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);const j=Q.getFrameExtents();if(i.multiply(j),s.copy(Q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,Q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,Q.mapSize.y=s.y)),Q.map===null||pe===!0||P===!0){const ue=this.type!==Vi?{minFilter:mt,magFilter:mt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Ps(i.x,i.y,ue),Q.map.texture.name=ee.name+".shadowMap",Q.camera.updateProjectionMatrix()}r.setRenderTarget(Q.map),r.clear();const ae=Q.getViewportCount();for(let ue=0;ue<ae;ue++){const Se=Q.getViewport(ue);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),ie.viewport(o),Q.updateMatrices(ee,ue),n=Q.getFrustum(),E(R,Y,Q.camera,ee,this.type)}Q.isPointLightShadow!==!0&&this.type===Vi&&S(Q,Y),Q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(T,b,$)};function S(A,R){const Y=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ps(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(R,null,Y,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(R,null,Y,f,_,null)}function x(A,R,Y,T){let b=null;const $=Y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if($!==void 0)b=$;else if(b=Y.isPointLight===!0?c:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const ie=b.uuid,pe=R.uuid;let P=l[ie];P===void 0&&(P={},l[ie]=P);let H=P[pe];H===void 0&&(H=b.clone(),P[pe]=H,R.addEventListener("dispose",L)),b=H}if(b.visible=R.visible,b.wireframe=R.wireframe,T===Vi?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:h[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,Y.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ie=r.properties.get(b);ie.light=Y}return b}function E(A,R,Y,T,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Vi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld);const pe=e.update(A),P=A.material;if(Array.isArray(P)){const H=pe.groups;for(let K=0,ee=H.length;K<ee;K++){const Q=H[K],j=P[Q.materialIndex];if(j&&j.visible){const ae=x(A,j,T,b);A.onBeforeShadow(r,A,R,Y,pe,ae,Q),r.renderBufferDirect(Y,null,pe,ae,A,Q),A.onAfterShadow(r,A,R,Y,pe,ae,Q)}}}else if(P.visible){const H=x(A,P,T,b);A.onBeforeShadow(r,A,R,Y,pe,H,null),r.renderBufferDirect(Y,null,pe,H,A,null),A.onAfterShadow(r,A,R,Y,pe,H,null)}}const ie=A.children;for(let pe=0,P=ie.length;pe<P;pe++)E(ie[pe],R,Y,T,b)}function L(A){A.target.removeEventListener("dispose",L);for(const Y in l){const T=l[Y],b=A.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}function dy(r,e,t){const n=t.isWebGL2;function i(){let N=!1;const me=new ot;let ge=null;const ke=new ot(0,0,0,0);return{setMask:function(De){ge!==De&&!N&&(r.colorMask(De,De,De,De),ge=De)},setLocked:function(De){N=De},setClear:function(De,xt,vt,jt,xn){xn===!0&&(De*=jt,xt*=jt,vt*=jt),me.set(De,xt,vt,jt),ke.equals(me)===!1&&(r.clearColor(De,xt,vt,jt),ke.copy(me))},reset:function(){N=!1,ge=null,ke.set(-1,0,0,0)}}}function s(){let N=!1,me=null,ge=null,ke=null;return{setTest:function(De){De?je(r.DEPTH_TEST):ze(r.DEPTH_TEST)},setMask:function(De){me!==De&&!N&&(r.depthMask(De),me=De)},setFunc:function(De){if(ge!==De){switch(De){case $l:r.depthFunc(r.NEVER);break;case ql:r.depthFunc(r.ALWAYS);break;case Yl:r.depthFunc(r.LESS);break;case Er:r.depthFunc(r.LEQUAL);break;case Kl:r.depthFunc(r.EQUAL);break;case jl:r.depthFunc(r.GEQUAL);break;case Zl:r.depthFunc(r.GREATER);break;case Ql:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=De}},setLocked:function(De){N=De},setClear:function(De){ke!==De&&(r.clearDepth(De),ke=De)},reset:function(){N=!1,me=null,ge=null,ke=null}}}function o(){let N=!1,me=null,ge=null,ke=null,De=null,xt=null,vt=null,jt=null,xn=null;return{setTest:function(St){N||(St?je(r.STENCIL_TEST):ze(r.STENCIL_TEST))},setMask:function(St){me!==St&&!N&&(r.stencilMask(St),me=St)},setFunc:function(St,vn,Si){(ge!==St||ke!==vn||De!==Si)&&(r.stencilFunc(St,vn,Si),ge=St,ke=vn,De=Si)},setOp:function(St,vn,Si){(xt!==St||vt!==vn||jt!==Si)&&(r.stencilOp(St,vn,Si),xt=St,vt=vn,jt=Si)},setLocked:function(St){N=St},setClear:function(St){xn!==St&&(r.clearStencil(St),xn=St)},reset:function(){N=!1,me=null,ge=null,ke=null,De=null,xt=null,vt=null,jt=null,xn=null}}}const a=new i,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,_=[],m=null,p=!1,S=null,x=null,E=null,L=null,A=null,R=null,Y=null,T=new Pe(0,0,0),b=0,$=!1,ie=null,pe=null,P=null,H=null,K=null;const ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,j=0;const ae=r.getParameter(r.VERSION);ae.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ae)[1]),Q=j>=1):ae.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),Q=j>=2);let ue=null,Se={};const q=r.getParameter(r.SCISSOR_BOX),te=r.getParameter(r.VIEWPORT),xe=new ot().fromArray(q),Ce=new ot().fromArray(te);function Ne(N,me,ge,ke){const De=new Uint8Array(4),xt=r.createTexture();r.bindTexture(N,xt),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let vt=0;vt<ge;vt++)n&&(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)?r.texImage3D(me,0,r.RGBA,1,1,ke,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(me+vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return xt}const qe={};qe[r.TEXTURE_2D]=Ne(r.TEXTURE_2D,r.TEXTURE_2D,1),qe[r.TEXTURE_CUBE_MAP]=Ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(qe[r.TEXTURE_2D_ARRAY]=Ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),qe[r.TEXTURE_3D]=Ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),je(r.DEPTH_TEST),c.setFunc(Er),et(!1),M(pl),je(r.CULL_FACE),be(ti);function je(N){d[N]!==!0&&(r.enable(N),d[N]=!0)}function ze(N){d[N]!==!1&&(r.disable(N),d[N]=!1)}function lt(N,me){return f[N]!==me?(r.bindFramebuffer(N,me),f[N]=me,n&&(N===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=me),N===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=me)),!0):!1}function B(N,me){let ge=_,ke=!1;if(N)if(ge=g.get(me),ge===void 0&&(ge=[],g.set(me,ge)),N.isWebGLMultipleRenderTargets){const De=N.texture;if(ge.length!==De.length||ge[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,vt=De.length;xt<vt;xt++)ge[xt]=r.COLOR_ATTACHMENT0+xt;ge.length=De.length,ke=!0}}else ge[0]!==r.COLOR_ATTACHMENT0&&(ge[0]=r.COLOR_ATTACHMENT0,ke=!0);else ge[0]!==r.BACK&&(ge[0]=r.BACK,ke=!0);ke&&(t.isWebGL2?r.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function _n(N){return m!==N?(r.useProgram(N),m=N,!0):!1}const Ue={[kn]:r.FUNC_ADD,[Il]:r.FUNC_SUBTRACT,[Fl]:r.FUNC_REVERSE_SUBTRACT};if(n)Ue[ml]=r.MIN,Ue[gl]=r.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Ue[ml]=N.MIN_EXT,Ue[gl]=N.MAX_EXT)}const Xe={[Ol]:r.ZERO,[Bl]:r.ONE,[Vl]:r.SRC_COLOR,[eo]:r.SRC_ALPHA,[Xl]:r.SRC_ALPHA_SATURATE,[Hl]:r.DST_COLOR,[zl]:r.DST_ALPHA,[Gl]:r.ONE_MINUS_SRC_COLOR,[to]:r.ONE_MINUS_SRC_ALPHA,[Wl]:r.ONE_MINUS_DST_COLOR,[kl]:r.ONE_MINUS_DST_ALPHA,[Ug]:r.CONSTANT_COLOR,[Dg]:r.ONE_MINUS_CONSTANT_COLOR,[Ig]:r.CONSTANT_ALPHA,[Fg]:r.ONE_MINUS_CONSTANT_ALPHA};function be(N,me,ge,ke,De,xt,vt,jt,xn,St){if(N===ti){p===!0&&(ze(r.BLEND),p=!1);return}if(p===!1&&(je(r.BLEND),p=!0),N!==Dl){if(N!==S||St!==$){if((x!==kn||A!==kn)&&(r.blendEquation(r.FUNC_ADD),x=kn,A=kn),St)switch(N){case gi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yr:r.blendFunc(r.ONE,r.ONE);break;case Tr:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mr:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case gi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Tr:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mr:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,L=null,R=null,Y=null,T.set(0,0,0),b=0,S=N,$=St}return}De=De||me,xt=xt||ge,vt=vt||ke,(me!==x||De!==A)&&(r.blendEquationSeparate(Ue[me],Ue[De]),x=me,A=De),(ge!==E||ke!==L||xt!==R||vt!==Y)&&(r.blendFuncSeparate(Xe[ge],Xe[ke],Xe[xt],Xe[vt]),E=ge,L=ke,R=xt,Y=vt),(jt.equals(T)===!1||xn!==b)&&(r.blendColor(jt.r,jt.g,jt.b,xn),T.copy(jt),b=xn),S=N,$=!1}function bt(N,me){N.side===zn?ze(r.CULL_FACE):je(r.CULL_FACE);let ge=N.side===$t;me&&(ge=!ge),et(ge),N.blending===gi&&N.transparent===!1?be(ti):be(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);const ke=N.stencilWrite;l.setTest(ke),ke&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),z(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?je(r.SAMPLE_ALPHA_TO_COVERAGE):ze(r.SAMPLE_ALPHA_TO_COVERAGE)}function et(N){ie!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),ie=N)}function M(N){N!==Dd?(je(r.CULL_FACE),N!==pe&&(N===pl?r.cullFace(r.BACK):N===Id?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ze(r.CULL_FACE),pe=N}function v(N){N!==P&&(Q&&r.lineWidth(N),P=N)}function z(N,me,ge){N?(je(r.POLYGON_OFFSET_FILL),(H!==me||K!==ge)&&(r.polygonOffset(me,ge),H=me,K=ge)):ze(r.POLYGON_OFFSET_FILL)}function ce(N){N?je(r.SCISSOR_TEST):ze(r.SCISSOR_TEST)}function se(N){N===void 0&&(N=r.TEXTURE0+ee-1),ue!==N&&(r.activeTexture(N),ue=N)}function le(N,me,ge){ge===void 0&&(ue===null?ge=r.TEXTURE0+ee-1:ge=ue);let ke=Se[ge];ke===void 0&&(ke={type:void 0,texture:void 0},Se[ge]=ke),(ke.type!==N||ke.texture!==me)&&(ue!==ge&&(r.activeTexture(ge),ue=ge),r.bindTexture(N,me||qe[N]),ke.type=N,ke.texture=me)}function Ae(){const N=Se[ue];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _e(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function We(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ze(N){xe.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),xe.copy(N))}function dt(N){Ce.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Ce.copy(N))}function Nt(N,me){let ge=h.get(me);ge===void 0&&(ge=new WeakMap,h.set(me,ge));let ke=ge.get(N);ke===void 0&&(ke=r.getUniformBlockIndex(me,N.name),ge.set(N,ke))}function it(N,me){const ke=h.get(me).get(N);u.get(me)!==ke&&(r.uniformBlockBinding(me,ke,N.__bindingPointIndex),u.set(me,ke))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},ue=null,Se={},f={},g=new WeakMap,_=[],m=null,p=!1,S=null,x=null,E=null,L=null,A=null,R=null,Y=null,T=new Pe(0,0,0),b=0,$=!1,ie=null,pe=null,P=null,H=null,K=null,xe.set(0,0,r.canvas.width,r.canvas.height),Ce.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:je,disable:ze,bindFramebuffer:lt,drawBuffers:B,useProgram:_n,setBlending:be,setMaterial:bt,setFlipSided:et,setCullFace:M,setLineWidth:v,setPolygonOffset:z,setScissorTest:ce,activeTexture:se,bindTexture:le,unbindTexture:Ae,compressedTexImage2D:_e,compressedTexImage3D:ye,texImage2D:Le,texImage3D:Te,updateUBOMapping:Nt,uniformBlockBinding:it,texStorage2D:rt,texStorage3D:We,texSubImage2D:Ve,texSubImage3D:tt,compressedTexSubImage2D:ne,compressedTexSubImage3D:ft,scissor:Ze,viewport:dt,reset:he}}function fy(r,e,t,n,i,s,o){const a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return f?new OffscreenCanvas(M,v):Ua("canvas")}function _(M,v,z,ce){let se=1;if((M.width>ce||M.height>ce)&&(se=ce/Math.max(M.width,M.height)),se<1||v===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const le=v?Pa:Math.floor,Ae=le(se*M.width),_e=le(se*M.height);h===void 0&&(h=g(Ae,_e));const ye=z?g(Ae,_e):h;return ye.width=Ae,ye.height=_e,ye.getContext("2d").drawImage(M,0,0,Ae,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Ae+"x"+_e+")."),ye}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return vl(M.width)&&vl(M.height)}function p(M){return a?!1:M.wrapS!==Qn||M.wrapT!==Qn||M.minFilter!==mt&&M.minFilter!==Tn}function S(M,v){return M.generateMipmaps&&v&&M.minFilter!==mt&&M.minFilter!==Tn}function x(M){r.generateMipmap(M)}function E(M,v,z,ce,se=!1){if(a===!1)return v;if(M!==null){if(r[M]!==void 0)return r[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let le=v;if(v===r.RED&&(z===r.FLOAT&&(le=r.R32F),z===r.HALF_FLOAT&&(le=r.R16F),z===r.UNSIGNED_BYTE&&(le=r.R8)),v===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(le=r.R8UI),z===r.UNSIGNED_SHORT&&(le=r.R16UI),z===r.UNSIGNED_INT&&(le=r.R32UI),z===r.BYTE&&(le=r.R8I),z===r.SHORT&&(le=r.R16I),z===r.INT&&(le=r.R32I)),v===r.RG&&(z===r.FLOAT&&(le=r.RG32F),z===r.HALF_FLOAT&&(le=r.RG16F),z===r.UNSIGNED_BYTE&&(le=r.RG8)),v===r.RGBA){const Ae=se?wa:pt.getTransfer(ce);z===r.FLOAT&&(le=r.RGBA32F),z===r.HALF_FLOAT&&(le=r.RGBA16F),z===r.UNSIGNED_BYTE&&(le=Ae===Tt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(le=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(le=r.RGB5_A1)}return(le===r.R16F||le===r.R32F||le===r.RG16F||le===r.RG32F||le===r.RGBA16F||le===r.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function L(M,v,z){return S(M,z)===!0||M.isFramebufferTexture&&M.minFilter!==mt&&M.minFilter!==Tn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function A(M){return M===mt||M===Rr||M===Rs?r.NEAREST:r.LINEAR}function R(M){const v=M.target;v.removeEventListener("dispose",R),T(v),v.isVideoTexture&&u.delete(v)}function Y(M){const v=M.target;v.removeEventListener("dispose",Y),$(v)}function T(M){const v=n.get(M);if(v.__webglInit===void 0)return;const z=M.source,ce=d.get(z);if(ce){const se=ce[v.__cacheKey];se.usedTimes--,se.usedTimes===0&&b(M),Object.keys(ce).length===0&&d.delete(z)}n.remove(M)}function b(M){const v=n.get(M);r.deleteTexture(v.__webglTexture);const z=M.source,ce=d.get(z);delete ce[v.__cacheKey],o.memory.textures--}function $(M){const v=M.texture,z=n.get(M),ce=n.get(v);if(ce.__webglTexture!==void 0&&(r.deleteTexture(ce.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(z.__webglFramebuffer[se]))for(let le=0;le<z.__webglFramebuffer[se].length;le++)r.deleteFramebuffer(z.__webglFramebuffer[se][le]);else r.deleteFramebuffer(z.__webglFramebuffer[se]);z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[se])}else{if(Array.isArray(z.__webglFramebuffer))for(let se=0;se<z.__webglFramebuffer.length;se++)r.deleteFramebuffer(z.__webglFramebuffer[se]);else r.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let se=0;se<z.__webglColorRenderbuffer.length;se++)z.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[se]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let se=0,le=v.length;se<le;se++){const Ae=n.get(v[se]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),o.memory.textures--),n.remove(v[se])}n.remove(v),n.remove(M)}let ie=0;function pe(){ie=0}function P(){const M=ie;return M>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),ie+=1,M}function H(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function K(M,v){const z=n.get(M);if(M.isVideoTexture&&bt(M),M.isRenderTargetTexture===!1&&M.version>0&&z.__version!==M.version){const ce=M.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(z,M,v);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+v)}function ee(M,v){const z=n.get(M);if(M.version>0&&z.__version!==M.version){xe(z,M,v);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+v)}function Q(M,v){const z=n.get(M);if(M.version>0&&z.__version!==M.version){xe(z,M,v);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+v)}function j(M,v){const z=n.get(M);if(M.version>0&&z.__version!==M.version){Ce(z,M,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+v)}const ae={[no]:r.REPEAT,[Qn]:r.CLAMP_TO_EDGE,[io]:r.MIRRORED_REPEAT},ue={[mt]:r.NEAREST,[Rr]:r.NEAREST_MIPMAP_NEAREST,[Rs]:r.NEAREST_MIPMAP_LINEAR,[Tn]:r.LINEAR,[kd]:r.LINEAR_MIPMAP_NEAREST,[Wi]:r.LINEAR_MIPMAP_LINEAR},Se={[lu]:r.NEVER,[pu]:r.ALWAYS,[Ka]:r.LESS,[ja]:r.LEQUAL,[uu]:r.EQUAL,[fu]:r.GEQUAL,[hu]:r.GREATER,[du]:r.NOTEQUAL};function q(M,v,z){if(z?(r.texParameteri(M,r.TEXTURE_WRAP_S,ae[v.wrapS]),r.texParameteri(M,r.TEXTURE_WRAP_T,ae[v.wrapT]),(M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY)&&r.texParameteri(M,r.TEXTURE_WRAP_R,ae[v.wrapR]),r.texParameteri(M,r.TEXTURE_MAG_FILTER,ue[v.magFilter]),r.texParameteri(M,r.TEXTURE_MIN_FILTER,ue[v.minFilter])):(r.texParameteri(M,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(M,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY)&&r.texParameteri(M,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(v.wrapS!==Qn||v.wrapT!==Qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(M,r.TEXTURE_MAG_FILTER,A(v.magFilter)),r.texParameteri(M,r.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==mt&&v.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(r.texParameteri(M,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(M,r.TEXTURE_COMPARE_FUNC,Se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ce=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===mt||v.minFilter!==Rs&&v.minFilter!==Wi||v.type===kt&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Ei&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(r.texParameterf(M,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function te(M,v){let z=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",R));const ce=v.source;let se=d.get(ce);se===void 0&&(se={},d.set(ce,se));const le=H(v);if(le!==M.__cacheKey){se[le]===void 0&&(se[le]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),se[le].usedTimes++;const Ae=se[M.__cacheKey];Ae!==void 0&&(se[M.__cacheKey].usedTimes--,Ae.usedTimes===0&&b(v)),M.__cacheKey=le,M.__webglTexture=se[le].texture}return z}function xe(M,v,z){let ce=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ce=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ce=r.TEXTURE_3D);const se=te(M,v),le=v.source;t.bindTexture(ce,M.__webglTexture,r.TEXTURE0+z);const Ae=n.get(le);if(le.version!==Ae.__version||se===!0){t.activeTexture(r.TEXTURE0+z);const _e=pt.getPrimaries(pt.workingColorSpace),ye=v.colorSpace===gn?null:pt.getPrimaries(v.colorSpace),Ve=v.colorSpace===gn||_e===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const tt=p(v)&&m(v.image)===!1;let ne=_(v.image,tt,!1,i.maxTextureSize);ne=et(v,ne);const ft=m(ne)||a,rt=s.convert(v.format,v.colorSpace);let We=s.convert(v.type),Le=E(v.internalFormat,rt,We,v.colorSpace,v.isVideoTexture);q(ce,v,ft);let Te;const Ze=v.mipmaps,dt=a&&v.isVideoTexture!==!0&&Le!==ou,Nt=Ae.__version===void 0||se===!0,it=L(v,ne,ft);if(v.isDepthTexture)Le=r.DEPTH_COMPONENT,a?v.type===kt?Le=r.DEPTH_COMPONENT32F:v.type===ei?Le=r.DEPTH_COMPONENT24:v.type===_i?Le=r.DEPTH24_STENCIL8:Le=r.DEPTH_COMPONENT16:v.type===kt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ii&&Le===r.DEPTH_COMPONENT&&v.type!==Lo&&v.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=ei,We=s.convert(v.type)),v.format===Ri&&Le===r.DEPTH_COMPONENT&&(Le=r.DEPTH_STENCIL,v.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=_i,We=s.convert(v.type))),Nt&&(dt?t.texStorage2D(r.TEXTURE_2D,1,Le,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Le,ne.width,ne.height,0,rt,We,null));else if(v.isDataTexture)if(Ze.length>0&&ft){dt&&Nt&&t.texStorage2D(r.TEXTURE_2D,it,Le,Ze[0].width,Ze[0].height);for(let he=0,N=Ze.length;he<N;he++)Te=Ze[he],dt?t.texSubImage2D(r.TEXTURE_2D,he,0,0,Te.width,Te.height,rt,We,Te.data):t.texImage2D(r.TEXTURE_2D,he,Le,Te.width,Te.height,0,rt,We,Te.data);v.generateMipmaps=!1}else dt?(Nt&&t.texStorage2D(r.TEXTURE_2D,it,Le,ne.width,ne.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,rt,We,ne.data)):t.texImage2D(r.TEXTURE_2D,0,Le,ne.width,ne.height,0,rt,We,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){dt&&Nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,it,Le,Ze[0].width,Ze[0].height,ne.depth);for(let he=0,N=Ze.length;he<N;he++)Te=Ze[he],v.format!==Hn?rt!==null?dt?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,Te.width,Te.height,ne.depth,rt,Te.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,he,Le,Te.width,Te.height,ne.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?t.texSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,Te.width,Te.height,ne.depth,rt,We,Te.data):t.texImage3D(r.TEXTURE_2D_ARRAY,he,Le,Te.width,Te.height,ne.depth,0,rt,We,Te.data)}else{dt&&Nt&&t.texStorage2D(r.TEXTURE_2D,it,Le,Ze[0].width,Ze[0].height);for(let he=0,N=Ze.length;he<N;he++)Te=Ze[he],v.format!==Hn?rt!==null?dt?t.compressedTexSubImage2D(r.TEXTURE_2D,he,0,0,Te.width,Te.height,rt,Te.data):t.compressedTexImage2D(r.TEXTURE_2D,he,Le,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?t.texSubImage2D(r.TEXTURE_2D,he,0,0,Te.width,Te.height,rt,We,Te.data):t.texImage2D(r.TEXTURE_2D,he,Le,Te.width,Te.height,0,rt,We,Te.data)}else if(v.isDataArrayTexture)dt?(Nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,it,Le,ne.width,ne.height,ne.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,rt,We,ne.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,ne.width,ne.height,ne.depth,0,rt,We,ne.data);else if(v.isData3DTexture)dt?(Nt&&t.texStorage3D(r.TEXTURE_3D,it,Le,ne.width,ne.height,ne.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,rt,We,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Le,ne.width,ne.height,ne.depth,0,rt,We,ne.data);else if(v.isFramebufferTexture){if(Nt)if(dt)t.texStorage2D(r.TEXTURE_2D,it,Le,ne.width,ne.height);else{let he=ne.width,N=ne.height;for(let me=0;me<it;me++)t.texImage2D(r.TEXTURE_2D,me,Le,he,N,0,rt,We,null),he>>=1,N>>=1}}else if(Ze.length>0&&ft){dt&&Nt&&t.texStorage2D(r.TEXTURE_2D,it,Le,Ze[0].width,Ze[0].height);for(let he=0,N=Ze.length;he<N;he++)Te=Ze[he],dt?t.texSubImage2D(r.TEXTURE_2D,he,0,0,rt,We,Te):t.texImage2D(r.TEXTURE_2D,he,Le,rt,We,Te);v.generateMipmaps=!1}else dt?(Nt&&t.texStorage2D(r.TEXTURE_2D,it,Le,ne.width,ne.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,rt,We,ne)):t.texImage2D(r.TEXTURE_2D,0,Le,rt,We,ne);S(v,ft)&&x(ce),Ae.__version=le.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Ce(M,v,z){if(v.image.length!==6)return;const ce=te(M,v),se=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,M.__webglTexture,r.TEXTURE0+z);const le=n.get(se);if(se.version!==le.__version||ce===!0){t.activeTexture(r.TEXTURE0+z);const Ae=pt.getPrimaries(pt.workingColorSpace),_e=v.colorSpace===gn?null:pt.getPrimaries(v.colorSpace),ye=v.colorSpace===gn||Ae===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ve=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,ne=[];for(let he=0;he<6;he++)!Ve&&!tt?ne[he]=_(v.image[he],!1,!0,i.maxCubemapSize):ne[he]=tt?v.image[he].image:v.image[he],ne[he]=et(v,ne[he]);const ft=ne[0],rt=m(ft)||a,We=s.convert(v.format,v.colorSpace),Le=s.convert(v.type),Te=E(v.internalFormat,We,Le,v.colorSpace),Ze=a&&v.isVideoTexture!==!0,dt=le.__version===void 0||ce===!0;let Nt=L(v,ft,rt);q(r.TEXTURE_CUBE_MAP,v,rt);let it;if(Ve){Ze&&dt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,Te,ft.width,ft.height);for(let he=0;he<6;he++){it=ne[he].mipmaps;for(let N=0;N<it.length;N++){const me=it[N];v.format!==Hn?We!==null?Ze?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,N,0,0,me.width,me.height,We,me.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,N,Te,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,N,0,0,me.width,me.height,We,Le,me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,N,Te,me.width,me.height,0,We,Le,me.data)}}}else{it=v.mipmaps,Ze&&dt&&(it.length>0&&Nt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,Te,ne[0].width,ne[0].height));for(let he=0;he<6;he++)if(tt){Ze?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ne[he].width,ne[he].height,We,Le,ne[he].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Te,ne[he].width,ne[he].height,0,We,Le,ne[he].data);for(let N=0;N<it.length;N++){const ge=it[N].image[he].image;Ze?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,N+1,0,0,ge.width,ge.height,We,Le,ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,N+1,Te,ge.width,ge.height,0,We,Le,ge.data)}}else{Ze?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,We,Le,ne[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Te,We,Le,ne[he]);for(let N=0;N<it.length;N++){const me=it[N];Ze?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,N+1,0,0,We,Le,me.image[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,N+1,Te,We,Le,me.image[he])}}}S(v,rt)&&x(r.TEXTURE_CUBE_MAP),le.__version=se.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Ne(M,v,z,ce,se,le){const Ae=s.convert(z.format,z.colorSpace),_e=s.convert(z.type),ye=E(z.internalFormat,Ae,_e,z.colorSpace);if(!n.get(v).__hasExternalTextures){const tt=Math.max(1,v.width>>le),ne=Math.max(1,v.height>>le);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,le,ye,tt,ne,v.depth,0,Ae,_e,null):t.texImage2D(se,le,ye,tt,ne,0,Ae,_e,null)}t.bindFramebuffer(r.FRAMEBUFFER,M),be(v)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ce,se,n.get(z).__webglTexture,0,Xe(v)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ce,se,n.get(z).__webglTexture,le),t.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(M,v,z){if(r.bindRenderbuffer(r.RENDERBUFFER,M),v.depthBuffer&&!v.stencilBuffer){let ce=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(z||be(v)){const se=v.depthTexture;se&&se.isDepthTexture&&(se.type===kt?ce=r.DEPTH_COMPONENT32F:se.type===ei&&(ce=r.DEPTH_COMPONENT24));const le=Xe(v);be(v)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,ce,v.width,v.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,le,ce,v.width,v.height)}else r.renderbufferStorage(r.RENDERBUFFER,ce,v.width,v.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,M)}else if(v.depthBuffer&&v.stencilBuffer){const ce=Xe(v);z&&be(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,r.DEPTH24_STENCIL8,v.width,v.height):be(v)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,r.DEPTH24_STENCIL8,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,M)}else{const ce=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let se=0;se<ce.length;se++){const le=ce[se],Ae=s.convert(le.format,le.colorSpace),_e=s.convert(le.type),ye=E(le.internalFormat,Ae,_e,le.colorSpace),Ve=Xe(v);z&&be(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,ye,v.width,v.height):be(v)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ve,ye,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ye,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function je(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const ce=n.get(v.depthTexture).__webglTexture,se=Xe(v);if(v.depthTexture.format===ii)be(v)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ce,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ce,0);else if(v.depthTexture.format===Ri)be(v)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ce,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function ze(M){const v=n.get(M),z=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");je(v.__webglFramebuffer,M)}else if(z){v.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[ce]),v.__webglDepthbuffer[ce]=r.createRenderbuffer(),qe(v.__webglDepthbuffer[ce],M,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),qe(v.__webglDepthbuffer,M,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(M,v,z){const ce=n.get(M);v!==void 0&&Ne(ce.__webglFramebuffer,M,M.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&ze(M)}function B(M){const v=M.texture,z=n.get(M),ce=n.get(v);M.addEventListener("dispose",Y),M.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=r.createTexture()),ce.__version=v.version,o.memory.textures++);const se=M.isWebGLCubeRenderTarget===!0,le=M.isWebGLMultipleRenderTargets===!0,Ae=m(M)||a;if(se){z.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(a&&v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[_e]=[];for(let ye=0;ye<v.mipmaps.length;ye++)z.__webglFramebuffer[_e][ye]=r.createFramebuffer()}else z.__webglFramebuffer[_e]=r.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let _e=0;_e<v.mipmaps.length;_e++)z.__webglFramebuffer[_e]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(le)if(i.drawBuffers){const _e=M.texture;for(let ye=0,Ve=_e.length;ye<Ve;ye++){const tt=n.get(_e[ye]);tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&be(M)===!1){const _e=le?v:[v];z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ye=0;ye<_e.length;ye++){const Ve=_e[ye];z.__webglColorRenderbuffer[ye]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[ye]);const tt=s.convert(Ve.format,Ve.colorSpace),ne=s.convert(Ve.type),ft=E(Ve.internalFormat,tt,ne,Ve.colorSpace,M.isXRRenderTarget===!0),rt=Xe(M);r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,ft,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,z.__webglColorRenderbuffer[ye])}r.bindRenderbuffer(r.RENDERBUFFER,null),M.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),qe(z.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(se){t.bindTexture(r.TEXTURE_CUBE_MAP,ce.__webglTexture),q(r.TEXTURE_CUBE_MAP,v,Ae);for(let _e=0;_e<6;_e++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ye=0;ye<v.mipmaps.length;ye++)Ne(z.__webglFramebuffer[_e][ye],M,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ye);else Ne(z.__webglFramebuffer[_e],M,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);S(v,Ae)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const _e=M.texture;for(let ye=0,Ve=_e.length;ye<Ve;ye++){const tt=_e[ye],ne=n.get(tt);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),q(r.TEXTURE_2D,tt,Ae),Ne(z.__webglFramebuffer,M,tt,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,0),S(tt,Ae)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let _e=r.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?_e=M.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,ce.__webglTexture),q(_e,v,Ae),a&&v.mipmaps&&v.mipmaps.length>0)for(let ye=0;ye<v.mipmaps.length;ye++)Ne(z.__webglFramebuffer[ye],M,v,r.COLOR_ATTACHMENT0,_e,ye);else Ne(z.__webglFramebuffer,M,v,r.COLOR_ATTACHMENT0,_e,0);S(v,Ae)&&x(_e),t.unbindTexture()}M.depthBuffer&&ze(M)}function _n(M){const v=m(M)||a,z=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ce=0,se=z.length;ce<se;ce++){const le=z[ce];if(S(le,v)){const Ae=M.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,_e=n.get(le).__webglTexture;t.bindTexture(Ae,_e),x(Ae),t.unbindTexture()}}}function Ue(M){if(a&&M.samples>0&&be(M)===!1){const v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],z=M.width,ce=M.height;let se=r.COLOR_BUFFER_BIT;const le=[],Ae=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=n.get(M),ye=M.isWebGLMultipleRenderTargets===!0;if(ye)for(let Ve=0;Ve<v.length;Ve++)t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ve=0;Ve<v.length;Ve++){le.push(r.COLOR_ATTACHMENT0+Ve),M.depthBuffer&&le.push(Ae);const tt=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(tt===!1&&(M.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),M.stencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),ye&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_e.__webglColorRenderbuffer[Ve]),tt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ae]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ae])),ye){const ne=n.get(v[Ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,z,ce,0,0,z,ce,se,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ye)for(let Ve=0;Ve<v.length;Ve++){t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.RENDERBUFFER,_e.__webglColorRenderbuffer[Ve]);const tt=n.get(v[Ve]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.TEXTURE_2D,tt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function Xe(M){return Math.min(i.maxSamples,M.samples)}function be(M){const v=n.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function bt(M){const v=o.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function et(M,v){const z=M.colorSpace,ce=M.format,se=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===xl||z!==Xn&&z!==gn&&(pt.getTransfer(z)===Tt?a===!1?e.has("EXT_sRGB")===!0&&ce===Hn?(M.format=xl,M.minFilter=Tn,M.generateMipmaps=!1):v=Jd.sRGBToLinear(v):(ce!==Hn||se!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}this.allocateTextureUnit=P,this.resetTextureUnits=pe,this.setTexture2D=K,this.setTexture2DArray=ee,this.setTexture3D=Q,this.setTextureCube=j,this.rebindTextures=lt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=_n,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=be}function py(r,e,t){const n=t.isWebGL2;function i(s,o=gn){let a;const c=pt.getTransfer(o);if(s===ni)return r.UNSIGNED_BYTE;if(s===Jl)return r.UNSIGNED_SHORT_4_4_4_4;if(s===eu)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Hd)return r.BYTE;if(s===Wd)return r.SHORT;if(s===Lo)return r.UNSIGNED_SHORT;if(s===Po)return r.INT;if(s===ei)return r.UNSIGNED_INT;if(s===kt)return r.FLOAT;if(s===Ei)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Xd)return r.ALPHA;if(s===Hn)return r.RGBA;if(s===$d)return r.LUMINANCE;if(s===qd)return r.LUMINANCE_ALPHA;if(s===ii)return r.DEPTH_COMPONENT;if(s===Ri)return r.DEPTH_STENCIL;if(s===xl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===tu)return r.RED;if(s===nu)return r.RED_INTEGER;if(s===iu)return r.RG;if(s===su)return r.RG_INTEGER;if(s===ru)return r.RGBA_INTEGER;if(s===fr||s===ws||s===Ns||s===Cs)if(c===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===fr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===fr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ws)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ns)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ya||s===Ta||s===Ma||s===Ea)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ya)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ta)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ma)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ea)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ou)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===so||s===ro)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===so)return c===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ro)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===oo||s===ao||s===co||s===lo||s===uo||s===ho||s===fo||s===po||s===mo||s===go||s===_o||s===xo||s===vo||s===So)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===oo)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ao)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===co)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lo)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===uo)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ho)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fo)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===po)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===mo)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===go)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_o)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xo)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vo)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===So)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pr||s===ah||s===ch)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===pr)return c===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ah)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ch)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Yd||s===ba||s===Aa||s===Ra)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===pr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ba)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Aa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ra)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_i?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class my extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fa extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gy={type:"move"};class Vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gy)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _y extends ls{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const S=[],x=[],E=new Be;let L=null;const A=new Vn;A.layers.enable(1),A.viewport=new ot;const R=new Vn;R.layers.enable(2),R.viewport=new ot;const Y=[A,R],T=new my;T.layers.enable(1),T.layers.enable(2);let b=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=S[q];return te===void 0&&(te=new Vc,S[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=S[q];return te===void 0&&(te=new Vc,S[q]=te),te.getGripSpace()},this.getHand=function(q){let te=S[q];return te===void 0&&(te=new Vc,S[q]=te),te.getHandSpace()};function ie(q){const te=x.indexOf(q.inputSource);if(te===-1)return;const xe=S[te];xe!==void 0&&(xe.update(q.inputSource,q.frame,l||o),xe.dispatchEvent({type:q.type,data:q.inputSource}))}function pe(){i.removeEventListener("select",ie),i.removeEventListener("selectstart",ie),i.removeEventListener("selectend",ie),i.removeEventListener("squeeze",ie),i.removeEventListener("squeezestart",ie),i.removeEventListener("squeezeend",ie),i.removeEventListener("end",pe),i.removeEventListener("inputsourceschange",P);for(let q=0;q<S.length;q++){const te=x[q];te!==null&&(x[q]=null,S[q].disconnect(te))}b=null,$=null,e.setRenderTarget(m),f=null,d=null,h=null,i=null,p=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",ie),i.addEventListener("selectstart",ie),i.addEventListener("selectend",ie),i.addEventListener("squeeze",ie),i.addEventListener("squeezestart",ie),i.addEventListener("squeezeend",ie),i.addEventListener("end",pe),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Ps(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let te=null,xe=null,Ce=null;_.depth&&(Ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=_.stencil?Ri:ii,xe=_.stencil?_i:ei);const Ne={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Ne),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Ps(d.textureWidth,d.textureHeight,{format:Hn,type:ni,depthTexture:new Vs(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const qe=e.properties.get(p);qe.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Se.setContext(i),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(q){for(let te=0;te<q.removed.length;te++){const xe=q.removed[te],Ce=x.indexOf(xe);Ce>=0&&(x[Ce]=null,S[Ce].disconnect(xe))}for(let te=0;te<q.added.length;te++){const xe=q.added[te];let Ce=x.indexOf(xe);if(Ce===-1){for(let qe=0;qe<S.length;qe++)if(qe>=x.length){x.push(xe),Ce=qe;break}else if(x[qe]===null){x[qe]=xe,Ce=qe;break}if(Ce===-1)break}const Ne=S[Ce];Ne&&Ne.connect(xe)}}const H=new U,K=new U;function ee(q,te,xe){H.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(xe.matrixWorld);const Ce=H.distanceTo(K),Ne=te.projectionMatrix.elements,qe=xe.projectionMatrix.elements,je=Ne[14]/(Ne[10]-1),ze=Ne[14]/(Ne[10]+1),lt=(Ne[9]+1)/Ne[5],B=(Ne[9]-1)/Ne[5],_n=(Ne[8]-1)/Ne[0],Ue=(qe[8]+1)/qe[0],Xe=je*_n,be=je*Ue,bt=Ce/(-_n+Ue),et=bt*-_n;te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(et),q.translateZ(bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const M=je+bt,v=ze+bt,z=Xe-et,ce=be+(Ce-et),se=lt*ze/v*M,le=B*ze/v*M;q.projectionMatrix.makePerspective(z,ce,se,le,M,v),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Q(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;T.near=R.near=A.near=q.near,T.far=R.far=A.far=q.far,(b!==T.near||$!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),b=T.near,$=T.far);const te=q.parent,xe=T.cameras;Q(T,te);for(let Ce=0;Ce<xe.length;Ce++)Q(xe[Ce],te);xe.length===2?ee(T,A,R):T.projectionMatrix.copy(A.projectionMatrix),j(q,T,te)};function j(q,te,xe){xe===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(xe.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Nr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)};let ae=null;function ue(q,te){if(u=te.getViewerPose(l||o),g=te,u!==null){const xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Ce=!1;xe.length!==T.cameras.length&&(T.cameras.length=0,Ce=!0);for(let Ne=0;Ne<xe.length;Ne++){const qe=xe[Ne];let je=null;if(f!==null)je=f.getViewport(qe);else{const lt=h.getViewSubImage(d,qe);je=lt.viewport,Ne===0&&(e.setRenderTargetTextures(p,lt.colorTexture,d.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(p))}let ze=Y[Ne];ze===void 0&&(ze=new Vn,ze.layers.enable(Ne),ze.viewport=new ot,Y[Ne]=ze),ze.matrix.fromArray(qe.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(qe.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(je.x,je.y,je.width,je.height),Ne===0&&(T.matrix.copy(ze.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ce===!0&&T.cameras.push(ze)}}for(let xe=0;xe<S.length;xe++){const Ce=x[xe],Ne=S[xe];Ce!==null&&Ne!==void 0&&Ne.update(Ce,te,l||o)}ae&&ae(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Se=new lf;Se.setAnimationLoop(ue),this.setAnimationLoop=function(q){ae=q},this.dispose=function(){}}}function xy(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vy(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,x){const E=x.program;n.uniformBlockBinding(S,E)}function l(S,x){let E=i[S.id];E===void 0&&(g(S),E=u(S),i[S.id]=E,S.addEventListener("dispose",m));const L=x.program;n.updateUBOMapping(S,L);const A=e.render.frame;s[S.id]!==A&&(d(S),s[S.id]=A)}function u(S){const x=h();S.__bindingPointIndex=x;const E=r.createBuffer(),L=S.__size,A=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,L,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,E),E}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=i[S.id],E=S.uniforms,L=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,R=E.length;A<R;A++){const Y=Array.isArray(E[A])?E[A]:[E[A]];for(let T=0,b=Y.length;T<b;T++){const $=Y[T];if(f($,A,T,L)===!0){const ie=$.__offset,pe=Array.isArray($.value)?$.value:[$.value];let P=0;for(let H=0;H<pe.length;H++){const K=pe[H],ee=_(K);typeof K=="number"||typeof K=="boolean"?($.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,ie+P,$.__data)):K.isMatrix3?($.__data[0]=K.elements[0],$.__data[1]=K.elements[1],$.__data[2]=K.elements[2],$.__data[3]=0,$.__data[4]=K.elements[3],$.__data[5]=K.elements[4],$.__data[6]=K.elements[5],$.__data[7]=0,$.__data[8]=K.elements[6],$.__data[9]=K.elements[7],$.__data[10]=K.elements[8],$.__data[11]=0):(K.toArray($.__data,P),P+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ie,$.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(S,x,E,L){const A=S.value,R=x+"_"+E;if(L[R]===void 0)return typeof A=="number"||typeof A=="boolean"?L[R]=A:L[R]=A.clone(),!0;{const Y=L[R];if(typeof A=="number"||typeof A=="boolean"){if(Y!==A)return L[R]=A,!0}else if(Y.equals(A)===!1)return Y.copy(A),!0}return!1}function g(S){const x=S.uniforms;let E=0;const L=16;for(let R=0,Y=x.length;R<Y;R++){const T=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,$=T.length;b<$;b++){const ie=T[b],pe=Array.isArray(ie.value)?ie.value:[ie.value];for(let P=0,H=pe.length;P<H;P++){const K=pe[P],ee=_(K),Q=E%L;Q!==0&&L-Q<ee.boundary&&(E+=L-Q),ie.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=E,E+=ee.storage}}}const A=E%L;return A>0&&(E+=L-A),S.__size=E,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class mf{constructor(e={}){const{canvas:t=Qd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this._useLegacyLights=!1,this.toneMapping=Wn,this.toneMappingExposure=1;const x=this;let E=!1,L=0,A=0,R=null,Y=-1,T=null;const b=new ot,$=new ot;let ie=null;const pe=new Pe(0);let P=0,H=t.width,K=t.height,ee=1,Q=null,j=null;const ae=new ot(0,0,H,K),ue=new ot(0,0,H,K);let Se=!1;const q=new Qa;let te=!1,xe=!1,Ce=null;const Ne=new Rt,qe=new Be,je=new U,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return R===null?ee:1}let B=n;function _n(y,I){for(let k=0;k<y.length;k++){const W=y[k],V=t.getContext(W,I);if(V!==null)return V}return null}try{const y={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Co}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",me,!1),B===null){const I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),B=_n(I,y),B===null)throw _n(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ue,Xe,be,bt,et,M,v,z,ce,se,le,Ae,_e,ye,Ve,tt,ne,ft,rt,We,Le,Te,Ze,dt;function Nt(){Ue=new N0(B),Xe=new M0(B,Ue,e),Ue.init(Xe),Te=new py(B,Ue,Xe),be=new dy(B,Ue,Xe),bt=new P0(B),et=new QS,M=new fy(B,Ue,be,et,Xe,Te,bt),v=new b0(x),z=new w0(x),ce=new G_(B,Xe),Ze=new y0(B,Ue,ce,Xe),se=new C0(B,ce,bt,Ze),le=new F0(B,se,ce,bt),rt=new I0(B,Xe,M),tt=new E0(et),Ae=new ZS(x,v,z,Ue,Xe,Ze,tt),_e=new xy(x,et),ye=new ey,Ve=new oy(Ue,Xe),ft=new S0(x,v,z,be,le,d,c),ne=new hy(x,le,Xe),dt=new vy(B,bt,Xe,be),We=new T0(B,Ue,bt,Xe),Le=new L0(B,Ue,bt,Xe),bt.programs=Ae.programs,x.capabilities=Xe,x.extensions=Ue,x.properties=et,x.renderLists=ye,x.shadowMap=ne,x.state=be,x.info=bt}Nt();const it=new _y(x,B);this.xr=it,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const y=Ue.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ue.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(y){y!==void 0&&(ee=y,this.setSize(H,K,!1))},this.getSize=function(y){return y.set(H,K)},this.setSize=function(y,I,k=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=y,K=I,t.width=Math.floor(y*ee),t.height=Math.floor(I*ee),k===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(H*ee,K*ee).floor()},this.setDrawingBufferSize=function(y,I,k){H=y,K=I,ee=k,t.width=Math.floor(y*k),t.height=Math.floor(I*k),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(b)},this.getViewport=function(y){return y.copy(ae)},this.setViewport=function(y,I,k,W){y.isVector4?ae.set(y.x,y.y,y.z,y.w):ae.set(y,I,k,W),be.viewport(b.copy(ae).multiplyScalar(ee).floor())},this.getScissor=function(y){return y.copy(ue)},this.setScissor=function(y,I,k,W){y.isVector4?ue.set(y.x,y.y,y.z,y.w):ue.set(y,I,k,W),be.scissor($.copy(ue).multiplyScalar(ee).floor())},this.getScissorTest=function(){return Se},this.setScissorTest=function(y){be.setScissorTest(Se=y)},this.setOpaqueSort=function(y){Q=y},this.setTransparentSort=function(y){j=y},this.getClearColor=function(y){return y.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor.apply(ft,arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha.apply(ft,arguments)},this.clear=function(y=!0,I=!0,k=!0){let W=0;if(y){let V=!1;if(R!==null){const ve=R.texture.format;V=ve===ru||ve===su||ve===nu}if(V){const ve=R.texture.type,Re=ve===ni||ve===ei||ve===Lo||ve===_i||ve===Jl||ve===eu,Fe=ft.getClearColor(),He=ft.getClearAlpha(),nt=Fe.r,$e=Fe.g,Ye=Fe.b;Re?(f[0]=nt,f[1]=$e,f[2]=Ye,f[3]=He,B.clearBufferuiv(B.COLOR,0,f)):(g[0]=nt,g[1]=$e,g[2]=Ye,g[3]=He,B.clearBufferiv(B.COLOR,0,g))}else W|=B.COLOR_BUFFER_BIT}I&&(W|=B.DEPTH_BUFFER_BIT),k&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ye.dispose(),Ve.dispose(),et.dispose(),v.dispose(),z.dispose(),le.dispose(),Ze.dispose(),dt.dispose(),Ae.dispose(),it.dispose(),it.removeEventListener("sessionstart",xn),it.removeEventListener("sessionend",St),Ce&&(Ce.dispose(),Ce=null),vn.stop()};function he(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const y=bt.autoReset,I=ne.enabled,k=ne.autoUpdate,W=ne.needsUpdate,V=ne.type;Nt(),bt.autoReset=y,ne.enabled=I,ne.autoUpdate=k,ne.needsUpdate=W,ne.type=V}function me(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ge(y){const I=y.target;I.removeEventListener("dispose",ge),ke(I)}function ke(y){De(y),et.remove(y)}function De(y){const I=et.get(y).programs;I!==void 0&&(I.forEach(function(k){Ae.releaseProgram(k)}),y.isShaderMaterial&&Ae.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,k,W,V,ve){I===null&&(I=ze);const Re=V.isMesh&&V.matrixWorld.determinant()<0,Fe=wg(y,I,k,W,V);be.setMaterial(W,Re);let He=k.index,nt=1;if(W.wireframe===!0){if(He=se.getWireframeAttribute(k),He===void 0)return;nt=2}const $e=k.drawRange,Ye=k.attributes.position;let Dt=$e.start*nt,Dn=($e.start+$e.count)*nt;ve!==null&&(Dt=Math.max(Dt,ve.start*nt),Dn=Math.min(Dn,(ve.start+ve.count)*nt)),He!==null?(Dt=Math.max(Dt,0),Dn=Math.min(Dn,He.count)):Ye!=null&&(Dt=Math.max(Dt,0),Dn=Math.min(Dn,Ye.count));const Zt=Dn-Dt;if(Zt<0||Zt===1/0)return;Ze.setup(V,W,Fe,k,He);let Ui,At=We;if(He!==null&&(Ui=ce.get(He),At=Le,At.setIndex(Ui)),V.isMesh)W.wireframe===!0?(be.setLineWidth(W.wireframeLinewidth*lt()),At.setMode(B.LINES)):At.setMode(B.TRIANGLES);else if(V.isLine){let st=W.linewidth;st===void 0&&(st=1),be.setLineWidth(st*lt()),V.isLineSegments?At.setMode(B.LINES):V.isLineLoop?At.setMode(B.LINE_LOOP):At.setMode(B.LINE_STRIP)}else V.isPoints?At.setMode(B.POINTS):V.isSprite&&At.setMode(B.TRIANGLES);if(V.isBatchedMesh)At.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)At.renderInstances(Dt,Zt,V.count);else if(k.isInstancedBufferGeometry){const st=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,fc=Math.min(k.instanceCount,st);At.renderInstances(Dt,Zt,fc)}else At.render(Dt,Zt)};function xt(y,I,k){y.transparent===!0&&y.side===zn&&y.forceSinglePass===!1?(y.side=$t,y.needsUpdate=!0,Ho(y,I,k),y.side=Ai,y.needsUpdate=!0,Ho(y,I,k),y.side=zn):Ho(y,I,k)}this.compile=function(y,I,k=null){k===null&&(k=y),m=Ve.get(k),m.init(),S.push(m),k.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),y!==k&&y.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights);const W=new Set;return y.traverse(function(V){const ve=V.material;if(ve)if(Array.isArray(ve))for(let Re=0;Re<ve.length;Re++){const Fe=ve[Re];xt(Fe,k,V),W.add(Fe)}else xt(ve,k,V),W.add(ve)}),S.pop(),m=null,W},this.compileAsync=function(y,I,k=null){const W=this.compile(y,I,k);return new Promise(V=>{function ve(){if(W.forEach(function(Re){et.get(Re).currentProgram.isReady()&&W.delete(Re)}),W.size===0){V(y);return}setTimeout(ve,10)}Ue.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let vt=null;function jt(y){vt&&vt(y)}function xn(){vn.stop()}function St(){vn.start()}const vn=new lf;vn.setAnimationLoop(jt),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(y){vt=y,it.setAnimationLoop(y),y===null?vn.stop():vn.start()},it.addEventListener("sessionstart",xn),it.addEventListener("sessionend",St),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(I),I=it.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,I,R),m=Ve.get(y,S.length),m.init(),S.push(m),Ne.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(Ne),xe=this.localClippingEnabled,te=tt.init(this.clippingPlanes,xe),_=ye.get(y,p.length),_.init(),p.push(_),Si(y,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Q,j),this.info.render.frame++,te===!0&&tt.beginShadows();const k=m.state.shadowsArray;if(ne.render(k,y,I),te===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ft.render(_,y),m.setupLights(x._useLegacyLights),I.isArrayCamera){const W=I.cameras;for(let V=0,ve=W.length;V<ve;V++){const Re=W[V];th(_,y,Re,Re.viewport)}}else th(_,y,I);R!==null&&(M.updateMultisampleRenderTarget(R),M.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(x,y,I),Ze.resetDefaultState(),Y=-1,T=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Si(y,I,k,W){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){W&&je.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ne);const Re=le.update(y),Fe=y.material;Fe.visible&&_.push(y,Re,Fe,k,je.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||q.intersectsObject(y))){const Re=le.update(y),Fe=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),je.copy(y.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),je.copy(Re.boundingSphere.center)),je.applyMatrix4(y.matrixWorld).applyMatrix4(Ne)),Array.isArray(Fe)){const He=Re.groups;for(let nt=0,$e=He.length;nt<$e;nt++){const Ye=He[nt],Dt=Fe[Ye.materialIndex];Dt&&Dt.visible&&_.push(y,Re,Dt,k,je.z,Ye)}}else Fe.visible&&_.push(y,Re,Fe,k,je.z,null)}}const ve=y.children;for(let Re=0,Fe=ve.length;Re<Fe;Re++)Si(ve[Re],I,k,W)}function th(y,I,k,W){const V=y.opaque,ve=y.transmissive,Re=y.transparent;m.setupLightsView(k),te===!0&&tt.setGlobalState(x.clippingPlanes,k),ve.length>0&&Rg(V,ve,I,k),W&&be.viewport(b.copy(W)),V.length>0&&ko(V,I,k),ve.length>0&&ko(ve,I,k),Re.length>0&&ko(Re,I,k),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Rg(y,I,k,W){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const ve=Xe.isWebGL2;Ce===null&&(Ce=new Ps(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?Ei:ni,minFilter:Wi,samples:ve?4:0})),x.getDrawingBufferSize(qe),ve?Ce.setSize(qe.x,qe.y):Ce.setSize(Pa(qe.x),Pa(qe.y));const Re=x.getRenderTarget();x.setRenderTarget(Ce),x.getClearColor(pe),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Fe=x.toneMapping;x.toneMapping=Wn,ko(y,k,W),M.updateMultisampleRenderTarget(Ce),M.updateRenderTargetMipmap(Ce);let He=!1;for(let nt=0,$e=I.length;nt<$e;nt++){const Ye=I[nt],Dt=Ye.object,Dn=Ye.geometry,Zt=Ye.material,Ui=Ye.group;if(Zt.side===zn&&Dt.layers.test(W.layers)){const At=Zt.side;Zt.side=$t,Zt.needsUpdate=!0,nh(Dt,k,W,Dn,Zt,Ui),Zt.side=At,Zt.needsUpdate=!0,He=!0}}He===!0&&(M.updateMultisampleRenderTarget(Ce),M.updateRenderTargetMipmap(Ce)),x.setRenderTarget(Re),x.setClearColor(pe,P),x.toneMapping=Fe}function ko(y,I,k){const W=I.isScene===!0?I.overrideMaterial:null;for(let V=0,ve=y.length;V<ve;V++){const Re=y[V],Fe=Re.object,He=Re.geometry,nt=W===null?Re.material:W,$e=Re.group;Fe.layers.test(k.layers)&&nh(Fe,I,k,He,nt,$e)}}function nh(y,I,k,W,V,ve){y.onBeforeRender(x,I,k,W,V,ve),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(x,I,k,W,y,ve),V.transparent===!0&&V.side===zn&&V.forceSinglePass===!1?(V.side=$t,V.needsUpdate=!0,x.renderBufferDirect(k,I,W,V,y,ve),V.side=Ai,V.needsUpdate=!0,x.renderBufferDirect(k,I,W,V,y,ve),V.side=zn):x.renderBufferDirect(k,I,W,V,y,ve),y.onAfterRender(x,I,k,W,V,ve)}function Ho(y,I,k){I.isScene!==!0&&(I=ze);const W=et.get(y),V=m.state.lights,ve=m.state.shadowsArray,Re=V.state.version,Fe=Ae.getParameters(y,V.state,ve,I,k),He=Ae.getProgramCacheKey(Fe);let nt=W.programs;W.environment=y.isMeshStandardMaterial?I.environment:null,W.fog=I.fog,W.envMap=(y.isMeshStandardMaterial?z:v).get(y.envMap||W.environment),nt===void 0&&(y.addEventListener("dispose",ge),nt=new Map,W.programs=nt);let $e=nt.get(He);if($e!==void 0){if(W.currentProgram===$e&&W.lightsStateVersion===Re)return sh(y,Fe),$e}else Fe.uniforms=Ae.getUniforms(y),y.onBuild(k,Fe,x),y.onBeforeCompile(Fe,x),$e=Ae.acquireProgram(Fe,He),nt.set(He,$e),W.uniforms=Fe.uniforms;const Ye=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ye.clippingPlanes=tt.uniform),sh(y,Fe),W.needsLights=Cg(y),W.lightsStateVersion=Re,W.needsLights&&(Ye.ambientLightColor.value=V.state.ambient,Ye.lightProbe.value=V.state.probe,Ye.directionalLights.value=V.state.directional,Ye.directionalLightShadows.value=V.state.directionalShadow,Ye.spotLights.value=V.state.spot,Ye.spotLightShadows.value=V.state.spotShadow,Ye.rectAreaLights.value=V.state.rectArea,Ye.ltc_1.value=V.state.rectAreaLTC1,Ye.ltc_2.value=V.state.rectAreaLTC2,Ye.pointLights.value=V.state.point,Ye.pointLightShadows.value=V.state.pointShadow,Ye.hemisphereLights.value=V.state.hemi,Ye.directionalShadowMap.value=V.state.directionalShadowMap,Ye.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ye.spotShadowMap.value=V.state.spotShadowMap,Ye.spotLightMatrix.value=V.state.spotLightMatrix,Ye.spotLightMap.value=V.state.spotLightMap,Ye.pointShadowMap.value=V.state.pointShadowMap,Ye.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=$e,W.uniformsList=null,$e}function ih(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=va.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function sh(y,I){const k=et.get(y);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function wg(y,I,k,W,V){I.isScene!==!0&&(I=ze),M.resetTextureUnits();const ve=I.fog,Re=W.isMeshStandardMaterial?I.environment:null,Fe=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Xn,He=(W.isMeshStandardMaterial?z:v).get(W.envMap||Re),nt=W.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,$e=!!k.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ye=!!k.morphAttributes.position,Dt=!!k.morphAttributes.normal,Dn=!!k.morphAttributes.color;let Zt=Wn;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Zt=x.toneMapping);const Ui=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,At=Ui!==void 0?Ui.length:0,st=et.get(W),fc=m.state.lights;if(te===!0&&(xe===!0||y!==T)){const qn=y===T&&W.id===Y;tt.setState(W,y,qn)}let Ct=!1;W.version===st.__version?(st.needsLights&&st.lightsStateVersion!==fc.state.version||st.outputColorSpace!==Fe||V.isBatchedMesh&&st.batching===!1||!V.isBatchedMesh&&st.batching===!0||V.isInstancedMesh&&st.instancing===!1||!V.isInstancedMesh&&st.instancing===!0||V.isSkinnedMesh&&st.skinning===!1||!V.isSkinnedMesh&&st.skinning===!0||V.isInstancedMesh&&st.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&st.instancingColor===!1&&V.instanceColor!==null||st.envMap!==He||W.fog===!0&&st.fog!==ve||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==tt.numPlanes||st.numIntersection!==tt.numIntersection)||st.vertexAlphas!==nt||st.vertexTangents!==$e||st.morphTargets!==Ye||st.morphNormals!==Dt||st.morphColors!==Dn||st.toneMapping!==Zt||Xe.isWebGL2===!0&&st.morphTargetsCount!==At)&&(Ct=!0):(Ct=!0,st.__version=W.version);let fs=st.currentProgram;Ct===!0&&(fs=Ho(W,I,V));let rh=!1,Vr=!1,pc=!1;const dn=fs.getUniforms(),ps=st.uniforms;if(be.useProgram(fs.program)&&(rh=!0,Vr=!0,pc=!0),W.id!==Y&&(Y=W.id,Vr=!0),rh||T!==y){dn.setValue(B,"projectionMatrix",y.projectionMatrix),dn.setValue(B,"viewMatrix",y.matrixWorldInverse);const qn=dn.map.cameraPosition;qn!==void 0&&qn.setValue(B,je.setFromMatrixPosition(y.matrixWorld)),Xe.logarithmicDepthBuffer&&dn.setValue(B,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&dn.setValue(B,"isOrthographic",y.isOrthographicCamera===!0),T!==y&&(T=y,Vr=!0,pc=!0)}if(V.isSkinnedMesh){dn.setOptional(B,V,"bindMatrix"),dn.setOptional(B,V,"bindMatrixInverse");const qn=V.skeleton;qn&&(Xe.floatVertexTextures?(qn.boneTexture===null&&qn.computeBoneTexture(),dn.setValue(B,"boneTexture",qn.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(dn.setOptional(B,V,"batchingTexture"),dn.setValue(B,"batchingTexture",V._matricesTexture,M));const mc=k.morphAttributes;if((mc.position!==void 0||mc.normal!==void 0||mc.color!==void 0&&Xe.isWebGL2===!0)&&rt.update(V,k,fs),(Vr||st.receiveShadow!==V.receiveShadow)&&(st.receiveShadow=V.receiveShadow,dn.setValue(B,"receiveShadow",V.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ps.envMap.value=He,ps.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Vr&&(dn.setValue(B,"toneMappingExposure",x.toneMappingExposure),st.needsLights&&Ng(ps,pc),ve&&W.fog===!0&&_e.refreshFogUniforms(ps,ve),_e.refreshMaterialUniforms(ps,W,ee,K,Ce),va.upload(B,ih(st),ps,M)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(va.upload(B,ih(st),ps,M),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&dn.setValue(B,"center",V.center),dn.setValue(B,"modelViewMatrix",V.modelViewMatrix),dn.setValue(B,"normalMatrix",V.normalMatrix),dn.setValue(B,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const qn=W.uniformsGroups;for(let gc=0,Lg=qn.length;gc<Lg;gc++)if(Xe.isWebGL2){const oh=qn[gc];dt.update(oh,fs),dt.bind(oh,fs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fs}function Ng(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Cg(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,I,k){et.get(y.texture).__webglTexture=I,et.get(y.depthTexture).__webglTexture=k;const W=et.get(y);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=k===void 0,W.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,I){const k=et.get(y);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,k=0){R=y,L=I,A=k;let W=!0,V=null,ve=!1,Re=!1;if(y){const He=et.get(y);He.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(B.FRAMEBUFFER,null),W=!1):He.__webglFramebuffer===void 0?M.setupRenderTarget(y):He.__hasExternalTextures&&M.rebindTextures(y,et.get(y.texture).__webglTexture,et.get(y.depthTexture).__webglTexture);const nt=y.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Re=!0);const $e=et.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray($e[I])?V=$e[I][k]:V=$e[I],ve=!0):Xe.isWebGL2&&y.samples>0&&M.useMultisampledRTT(y)===!1?V=et.get(y).__webglMultisampledFramebuffer:Array.isArray($e)?V=$e[k]:V=$e,b.copy(y.viewport),$.copy(y.scissor),ie=y.scissorTest}else b.copy(ae).multiplyScalar(ee).floor(),$.copy(ue).multiplyScalar(ee).floor(),ie=Se;if(be.bindFramebuffer(B.FRAMEBUFFER,V)&&Xe.drawBuffers&&W&&be.drawBuffers(y,V),be.viewport(b),be.scissor($),be.setScissorTest(ie),ve){const He=et.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+I,He.__webglTexture,k)}else if(Re){const He=et.get(y.texture),nt=I||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,He.__webglTexture,k||0,nt)}Y=-1},this.readRenderTargetPixels=function(y,I,k,W,V,ve,Re){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=et.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe){be.bindFramebuffer(B.FRAMEBUFFER,Fe);try{const He=y.texture,nt=He.format,$e=He.type;if(nt!==Hn&&Te.convert(nt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=$e===Ei&&(Ue.has("EXT_color_buffer_half_float")||Xe.isWebGL2&&Ue.has("EXT_color_buffer_float"));if($e!==ni&&Te.convert($e)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===kt&&(Xe.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-W&&k>=0&&k<=y.height-V&&B.readPixels(I,k,W,V,Te.convert(nt),Te.convert($e),ve)}finally{const He=R!==null?et.get(R).__webglFramebuffer:null;be.bindFramebuffer(B.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(y,I,k=0){const W=Math.pow(2,-k),V=Math.floor(I.image.width*W),ve=Math.floor(I.image.height*W);M.setTexture2D(I,0),B.copyTexSubImage2D(B.TEXTURE_2D,k,0,0,y.x,y.y,V,ve),be.unbindTexture()},this.copyTextureToTexture=function(y,I,k,W=0){const V=I.image.width,ve=I.image.height,Re=Te.convert(k.format),Fe=Te.convert(k.type);M.setTexture2D(k,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment),I.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,y.x,y.y,V,ve,Re,Fe,I.image.data):I.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,y.x,y.y,I.mipmaps[0].width,I.mipmaps[0].height,Re,I.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,W,y.x,y.y,Re,Fe,I.image),W===0&&k.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(y,I,k,W,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=y.max.x-y.min.x+1,Re=y.max.y-y.min.y+1,Fe=y.max.z-y.min.z+1,He=Te.convert(W.format),nt=Te.convert(W.type);let $e;if(W.isData3DTexture)M.setTexture3D(W,0),$e=B.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)M.setTexture2DArray(W,0),$e=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const Ye=B.getParameter(B.UNPACK_ROW_LENGTH),Dt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Dn=B.getParameter(B.UNPACK_SKIP_PIXELS),Zt=B.getParameter(B.UNPACK_SKIP_ROWS),Ui=B.getParameter(B.UNPACK_SKIP_IMAGES),At=k.isCompressedTexture?k.mipmaps[V]:k.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,At.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,y.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,y.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,y.min.z),k.isDataTexture||k.isData3DTexture?B.texSubImage3D($e,V,I.x,I.y,I.z,ve,Re,Fe,He,nt,At.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D($e,V,I.x,I.y,I.z,ve,Re,Fe,He,At.data)):B.texSubImage3D($e,V,I.x,I.y,I.z,ve,Re,Fe,He,nt,At),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ye),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Dt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Dn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Zt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ui),V===0&&W.generateMipmaps&&B.generateMipmap($e),be.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),be.unbindTexture()},this.resetState=function(){L=0,A=0,R=null,be.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===cu?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===Ya?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ee?is:au}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===is?Ee:Xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Sy extends mf{}Sy.prototype.isWebGL1Renderer=!0;class Eu extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class gf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=La,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Sn=new U;class bu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new si(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yy extends ci{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class _f extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class xf extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class vf extends En{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=mt,this.minFilter=mt,this.generateMipmaps=!1,this.needsUpdate=!0}}class nc extends qi{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new U,d=new U,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],x=p/n;let E=0;p===0&&o===0?E=.5/t:p===n&&c===Math.PI&&(E=-.5/t);for(let L=0;L<=t;L++){const A=L/t;h.x=-e*Math.cos(i+A*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(i+A*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(A+E,1-x),S.push(l++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const x=u[p][S+1],E=u[p][S],L=u[p+1][S],A=u[p+1][S+1];(p!==0||o>0)&&f.push(x,E,A),(p!==n-1||c<Math.PI)&&f.push(E,L,A)}this.setIndex(f),this.setAttribute("position",new ri(g,3)),this.setAttribute("normal",new ri(_,3)),this.setAttribute("uv",new ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class To extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ls,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ty extends To{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class My extends ci{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pe(16777215),this.specular=new Pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ls,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ey extends ci{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ls,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class by extends ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ls,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sf extends _f{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Io extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Ay extends Io{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Gc=new Rt,Kh=new U,jh=new U;class Au{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kh),jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jh),t.updateMatrixWorld(),Gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ry extends Au{constructor(){super(new Vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Nr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class yf extends Io{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Ry}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Zh=new Rt,Wr=new U,zc=new U;class wy extends Au{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Wr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wr),zc.copy(n.position),zc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zc),n.updateMatrixWorld(),i.makeTranslation(-Wr.x,-Wr.y,-Wr.z),Zh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh)}}class Ny extends Io{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Cy extends Au{constructor(){super(new ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tf extends Io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Cy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mf extends Io{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ly extends gf{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);class Py{constructor(e,t){this.nodes=e,this.info=t,this.animationLoop=null,this.requestId=null,this._init()}_init(){const e=(t,n)=>{this.requestId=self.requestAnimationFrame(e),this.nodes.nodeFrame.update(),this.info.frame=this.nodes.nodeFrame.frameId,this.animationLoop!==null&&this.animationLoop(t,n)};e()}dispose(){self.cancelAnimationFrame(this.requestId)}setAnimationLoop(e){this.animationLoop=e}}class Us{constructor(){this.weakMap=new WeakMap}get(e){if(Array.isArray(e)){let t=this.weakMap;for(let n=0;n<e.length;n++)if(t=t.get(e[n]),t===void 0)return;return t.get(e[e.length-1])}else return super.get(e)}set(e,t){if(Array.isArray(e)){let n=this.weakMap;for(let i=0;i<e.length;i++){const s=e[i];n.has(s)===!1&&n.set(s,new WeakMap),n=n.get(s)}return n.set(e[e.length-1],t)}else return super.set(e,t)}delete(e){if(Array.isArray(e)){let t=this.weakMap;for(let n=0;n<e.length;n++)if(t=t.get(e[n]),t===void 0)return!1;return t.delete(e[e.length-1])}else return super.delete(e)}dispose(){this.weakMap.clear()}}let Uy=0;class Dy{constructor(e,t,n,i,s,o,a,c,l){this._nodes=e,this._geometries=t,this.id=Uy++,this.renderer=n,this.object=i,this.material=s,this.scene=o,this.camera=a,this.lightsNode=c,this.context=l,this.geometry=i.geometry,this.version=s.version,this.attributes=null,this.pipeline=null,this.vertexBuffers=null,this.initialNodesCacheKey=this.getNodesCacheKey(),this.initialCacheKey=this.getCacheKey(),this._nodeBuilderState=null,this._bindings=null,this.onDispose=null,this.isRenderObject=!0,this.onMaterialDispose=()=>{this.dispose()},this.material.addEventListener("dispose",this.onMaterialDispose)}getNodeBuilderState(){return this._nodeBuilderState||(this._nodeBuilderState=this._nodes.getForRender(this))}getBindings(){return this._bindings||(this._bindings=this.getNodeBuilderState().createBindings())}getIndex(){return this._geometries.getIndex(this)}getChainArray(){return[this.object,this.material,this.context,this.lightsNode]}getAttributes(){if(this.attributes!==null)return this.attributes;const e=this.getNodeBuilderState().nodeAttributes,t=this.geometry,n=[],i=new Set;for(const s of e){const o=s.node&&s.node.attribute?s.node.attribute:t.getAttribute(s.name);n.push(o);const a=o.isInterleavedBufferAttribute?o.data:o;i.add(a)}return this.attributes=n,this.vertexBuffers=Array.from(i.values()),n}getVertexBuffers(){return this.vertexBuffers===null&&this.getAttributes(),this.vertexBuffers}getMaterialCacheKey(){const{object:e,material:t}=this;let n=t.customProgramCacheKey();for(const i in t){if(/^(is[A-Z])|^(visible|version|uuid|name|opacity|userData)$/.test(i))continue;let s=t[i];if(s!==null){const o=typeof s;o==="number"?s=s!==0?"1":"0":o==="object"&&(s="{}")}n+=s+","}return e.skeleton&&(n+=e.skeleton.uuid+","),e.morphTargetInfluences&&(n+=e.morphTargetInfluences.length+","),n}get needsUpdate(){return this.initialNodesCacheKey!==this.getNodesCacheKey()}getNodesCacheKey(){return this._nodes.getCacheKey(this.scene,this.lightsNode)}getCacheKey(){return this.getMaterialCacheKey()+","+this.getNodesCacheKey()}dispose(){this.material.removeEventListener("dispose",this.onMaterialDispose),this.onDispose()}}class Iy{constructor(e,t,n,i,s,o){this.renderer=e,this.nodes=t,this.geometries=n,this.pipelines=i,this.bindings=s,this.info=o,this.chainMaps={}}get(e,t,n,i,s,o,a){const c=this.getChainMap(a),l=[e,t,o,s];let u=c.get(l);return u===void 0?(u=this.createRenderObject(this.nodes,this.geometries,this.renderer,e,t,n,i,s,o,a),c.set(l,u)):(u.version!==t.version||u.needsUpdate)&&(u.initialCacheKey!==u.getCacheKey()?(u.dispose(),u=this.get(e,t,n,i,s,o,a)):u.version=t.version),u}getChainMap(e="default"){return this.chainMaps[e]||(this.chainMaps[e]=new Us)}dispose(){this.chainMaps={}}createRenderObject(e,t,n,i,s,o,a,c,l,u){const h=this.getChainMap(u),d=new Dy(e,t,n,i,s,o,a,c,l);return d.onDispose=()=>{this.pipelines.delete(d),this.bindings.delete(d),this.nodes.delete(d),h.delete(d.getChainArray())},d}}class Gs{constructor(){this.data=new WeakMap}get(e){let t=this.data.get(e);return t===void 0&&(t={},this.data.set(e,t)),t}delete(e){let t;return this.data.has(e)&&(t=this.data.get(e),this.data.delete(e)),t}has(e){return this.data.has(e)}dispose(){this.data.clear()}}const gr={VERTEX:1,INDEX:2,STORAGE:4},ts=16,Fy=211,Oy=212;class By extends Gs{constructor(e){super(),this.backend=e}delete(e){super.delete(e)!==void 0&&this.backend.destroyAttribute(e)}update(e,t){const n=this.get(e);if(n.version===void 0)t===gr.VERTEX?this.backend.createAttribute(e):t===gr.INDEX?this.backend.createIndexAttribute(e):t===gr.STORAGE&&this.backend.createStorageAttribute(e),n.version=this._getBufferAttribute(e).version;else{const i=this._getBufferAttribute(e);(n.version<i.version||i.usage===mu)&&(this.backend.updateAttribute(e),n.version=i.version)}}_getBufferAttribute(e){return e.isInterleavedBufferAttribute&&(e=e.data),e}}function Vy(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ef(r){return r.index!==null?r.index.version:r.attributes.position.version}function Qh(r){const e=[],t=r.index,n=r.attributes.position;if(t!==null){const s=t.array;for(let o=0,a=s.length;o<a;o+=3){const c=s[o+0],l=s[o+1],u=s[o+2];e.push(c,l,l,u,u,c)}}else{const s=n.array;for(let o=0,a=s.length/3-1;o<a;o+=3){const c=o+0,l=o+1,u=o+2;e.push(c,l,l,u,u,c)}}const i=new(Vy(e)?yu:Su)(e,1);return i.version=Ef(r),i}class Gy extends Gs{constructor(e,t){super(),this.attributes=e,this.info=t,this.wireframes=new WeakMap,this.attributeCall=new WeakMap}has(e){const t=e.geometry;return super.has(t)&&this.get(t).initialized===!0}updateForRender(e){this.has(e)===!1&&this.initGeometry(e),this.updateAttributes(e)}initGeometry(e){const t=e.geometry,n=this.get(t);n.initialized=!0,this.info.memory.geometries++;const i=()=>{this.info.memory.geometries--;const s=t.index,o=e.getAttributes();s!==null&&this.attributes.delete(s);for(const c of o)this.attributes.delete(c);const a=this.wireframes.get(t);a!==void 0&&this.attributes.delete(a),t.removeEventListener("dispose",i)};t.addEventListener("dispose",i)}updateAttributes(e){const t=e.getAttributes();for(const i of t)this.updateAttribute(i,gr.VERTEX);const n=this.getIndex(e);n!==null&&this.updateAttribute(n,gr.INDEX)}updateAttribute(e,t){const n=this.info.render.calls;this.attributeCall.get(e)!==n&&(this.attributes.update(e,t),this.attributeCall.set(e,n))}getIndex(e){const{geometry:t,material:n}=e;let i=t.index;if(n.wireframe===!0){const s=this.wireframes;let o=s.get(t);o===void 0?(o=Qh(t),s.set(t,o)):o.version!==Ef(t)&&(this.attributes.delete(o),o=Qh(t),s.set(t,o)),i=o}return i}}class zy{constructor(){this.autoReset=!0,this.frame=0,this.calls=0,this.render={calls:0,drawCalls:0,triangles:0,points:0,lines:0},this.compute={calls:0},this.memory={geometries:0,textures:0}}update(e,t,n){this.render.drawCalls++,e.isMesh||e.isSprite?this.render.triangles+=n*(t/3):e.isPoints?this.render.points+=n*t:e.isLineSegments?this.render.lines+=n*(t/2):e.isLine?this.render.lines+=n*(t-1):console.error("THREE.WebGPUInfo: Unknown object type.")}reset(){this.render.drawCalls=0,this.render.triangles=0,this.render.points=0,this.render.lines=0}dispose(){this.reset(),this.calls=0,this.render.calls=0,this.compute.calls=0,this.memory.geometries=0,this.memory.textures=0}}class bf{constructor(e){this.cacheKey=e,this.usedTimes=0}}class ky extends bf{constructor(e,t,n){super(e),this.vertexProgram=t,this.fragmentProgram=n}}class Hy extends bf{constructor(e,t){super(e),this.computeProgram=t,this.isComputePipeline=!0}}let Wy=0;class kc{constructor(e,t){this.id=Wy++,this.code=e,this.stage=t,this.usedTimes=0}}class Xy extends Gs{constructor(e,t){super(),this.backend=e,this.nodes=t,this.bindings=null,this.caches=new Map,this.programs={vertex:new Map,fragment:new Map,compute:new Map}}getForCompute(e,t){const{backend:n}=this,i=this.get(e);if(this._needsComputeUpdate(e)){const s=i.pipeline;s&&(s.usedTimes--,s.computeProgram.usedTimes--);const o=this.nodes.getForCompute(e);let a=this.programs.compute.get(o.computeShader);a===void 0&&(s&&s.computeProgram.usedTimes===0&&this._releaseProgram(s.computeProgram),a=new kc(o.computeShader,"compute"),this.programs.compute.set(o.computeShader,a),n.createProgram(a));const c=this._getComputeCacheKey(e,a);let l=this.caches.get(c);l===void 0&&(s&&s.usedTimes===0&&this._releasePipeline(e),l=this._getComputePipeline(e,a,c,t)),l.usedTimes++,a.usedTimes++,i.version=e.version,i.pipeline=l}return i.pipeline}getForRender(e){const{backend:t}=this,n=this.get(e);if(this._needsRenderUpdate(e)){const i=n.pipeline;i&&(i.usedTimes--,i.vertexProgram.usedTimes--,i.fragmentProgram.usedTimes--);const s=e.getNodeBuilderState();let o=this.programs.vertex.get(s.vertexShader);o===void 0&&(i&&i.vertexProgram.usedTimes===0&&this._releaseProgram(i.vertexProgram),o=new kc(s.vertexShader,"vertex"),this.programs.vertex.set(s.vertexShader,o),t.createProgram(o));let a=this.programs.fragment.get(s.fragmentShader);a===void 0&&(i&&i.fragmentProgram.usedTimes===0&&this._releaseProgram(i.fragmentProgram),a=new kc(s.fragmentShader,"fragment"),this.programs.fragment.set(s.fragmentShader,a),t.createProgram(a));const c=this._getRenderCacheKey(e,o,a);let l=this.caches.get(c);l===void 0?(i&&i.usedTimes===0&&this._releasePipeline(i),l=this._getRenderPipeline(e,o,a,c)):e.pipeline=l,l.usedTimes++,o.usedTimes++,a.usedTimes++,n.pipeline=l}return n.pipeline}delete(e){const t=this.get(e).pipeline;t&&(t.usedTimes--,t.usedTimes===0&&this._releasePipeline(t),t.isComputePipeline?(t.computeProgram.usedTimes--,t.computeProgram.usedTimes===0&&this._releaseProgram(t.computeProgram)):(t.fragmentProgram.usedTimes--,t.vertexProgram.usedTimes--,t.vertexProgram.usedTimes===0&&this._releaseProgram(t.vertexProgram),t.fragmentProgram.usedTimes===0&&this._releaseProgram(t.fragmentProgram))),super.delete(e)}dispose(){super.dispose(),this.caches=new Map,this.programs={vertex:new Map,fragment:new Map,compute:new Map}}updateForRender(e){this.getForRender(e)}_getComputePipeline(e,t,n,i){n=n||this._getComputeCacheKey(e,t);let s=this.caches.get(n);return s===void 0&&(s=new Hy(n,t),this.caches.set(n,s),this.backend.createComputePipeline(s,i)),s}_getRenderPipeline(e,t,n,i){i=i||this._getRenderCacheKey(e,t,n);let s=this.caches.get(i);return s===void 0&&(s=new ky(i,t,n),this.caches.set(i,s),e.pipeline=s,this.backend.createRenderPipeline(e)),s}_getComputeCacheKey(e,t){return e.id+","+t.id}_getRenderCacheKey(e,t,n){return t.id+","+n.id+","+this.backend.getRenderCacheKey(e)}_releasePipeline(e){this.caches.delete(e.cacheKey)}_releaseProgram(e){const t=e.code,n=e.stage;this.programs[n].delete(t)}_needsComputeUpdate(e){const t=this.get(e);return t.pipeline===void 0||t.version!==e.version}_needsRenderUpdate(e){return this.get(e).pipeline===void 0||this.backend.needsRenderUpdate(e)}}class $y extends Gs{constructor(e,t,n,i,s,o){super(),this.backend=e,this.textures=n,this.pipelines=s,this.attributes=i,this.nodes=t,this.info=o,this.pipelines.bindings=this}getForRender(e){const t=e.getBindings(),n=this.get(e);return n.bindings!==t&&(n.bindings=t,this._init(t),this.backend.createBindings(t)),n.bindings}getForCompute(e){const t=this.get(e);if(t.bindings===void 0){const i=this.nodes.getForCompute(e).bindings.compute;t.bindings=i,this._init(i),this.backend.createBindings(i)}return t.bindings}updateForCompute(e){this._update(e,this.getForCompute(e))}updateForRender(e){this._update(e,this.getForRender(e))}_init(e){for(const t of e)if(t.isSampledTexture)this.textures.updateTexture(t.texture);else if(t.isStorageBuffer){const n=t.attribute;this.attributes.update(n,gr.STORAGE)}}_update(e,t){const{backend:n}=this;let i=!1;for(const s of t)if(!(s.isNodeUniformsGroup&&!this.nodes.updateGroup(s))){if(s.isUniformBuffer)s.update()&&n.updateBinding(s);else if(s.isSampledTexture){const o=s.texture;if(s.needsBindingsUpdate&&(i=!0),s.update()&&this.textures.updateTexture(s.texture),o.isStorageTexture===!0){const c=this.get(o);s.store===!0?c.needsMipmap=!0:o.generateMipmaps===!0&&this.textures.needsMipmaps(o)&&c.needsMipmap===!0&&(this.backend.generateMipmaps(o),c.needsMipmap=!1)}}}if(i===!0){const s=this.pipelines.getForRender(e);this.backend.updateBindings(t,s)}}}const Jh={VERTEX:"vertex"},gt={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},qy=["fragment","vertex"],ed=["setup","analyze","generate"],Yy=[...qy,"compute"],Ru=["x","y","z","w"];function Af(r){let e="{";r.isNode===!0&&(e+=r.id);for(const{property:t,childNode:n}of Da(r))e+=","+t.slice(0,-4)+":"+n.getCacheKey();return e+="}",e}function*Da(r,e=!1){for(const t in r){if(t.startsWith("_")===!0)continue;const n=r[t];if(Array.isArray(n)===!0)for(let i=0;i<n.length;i++){const s=n[i];s&&(s.isNode===!0||e&&typeof s.toJSON=="function")&&(yield{property:t,index:i,childNode:s})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const i in n){const s=n[i];s&&(s.isNode===!0||e&&typeof s.toJSON=="function")&&(yield{property:t,index:i,childNode:s})}}}function As(r){if(r==null)return null;const e=typeof r;return r.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":r.isVector2===!0?"vec2":r.isVector3===!0?"vec3":r.isVector4===!0?"vec4":r.isMatrix3===!0?"mat3":r.isMatrix4===!0?"mat4":r.isColor===!0?"color":r instanceof ArrayBuffer?"ArrayBuffer":null}function Rf(r,...e){const t=r?r.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),r==="color"?new Pe(...e):t==="vec2"?new Be(...e):t==="vec3"?new U(...e):t==="vec4"?new ot(...e):t==="mat3"?new Je(...e):t==="mat4"?new Rt(...e):r==="bool"?e[0]||!1:r==="float"||r==="int"||r==="uint"?e[0]||0:r==="string"?e[0]||"":r==="ArrayBuffer"?Nf(e[0]):null}function wf(r){let e="";const t=new Uint8Array(r);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function Nf(r){return Uint8Array.from(atob(r),e=>e.charCodeAt(0)).buffer}const td=new Map;let Ky=0;class we extends ls{constructor(e=null){super(),this.nodeType=e,this.updateType=gt.NONE,this.updateBeforeType=gt.NONE,this.uuid=jd.generateUUID(),this.isNode=!0,Object.defineProperty(this,"id",{value:Ky++})}get type(){return this.constructor.type}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return!1}*getChildren(){for(const{childNode:e}of Da(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}getCacheKey(){return Af(this)}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){const t=e.getNodeProperties(this);for(const n of this.getChildren())t["_node"+n.id]=n;return null}construct(e){return console.warn("THREE.Node: construct() is deprecated. Use setup() instead."),this.setup(e)}analyze(e){const t=e.getDataFromNode(this);if(t.dependenciesCount=t.dependenciesCount===void 0?1:t.dependenciesCount+1,t.dependenciesCount===1){const n=e.getNodeProperties(this);for(const i of Object.values(n))i&&i.isNode===!0&&i.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let i=null;const s=e.getBuildStage();if(s==="setup"){const o=e.getNodeProperties(this);if(o.initialized!==!0||e.context.tempRead===!1){const a=e.stack.nodes.length;o.initialized=!0,o.outputNode=this.setup(e),o.outputNode!==null&&e.stack.nodes.length!==a&&(o.outputNode=e.stack);for(const c of Object.values(o))c&&c.isNode===!0&&c.build(e)}}else if(s==="analyze")this.analyze(e);else if(s==="generate")if(this.generate.length===1){const a=this.getNodeType(e),c=e.getDataFromNode(this);i=c.snippet,i===void 0&&(i=this.generate(e)||"",c.snippet=i),i=e.format(i,a,t)}else i=this.generate(e,t)||"";return e.removeChain(this),i}getSerializeChildren(){return Da(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:i,index:s,childNode:o}of t)s!==void 0?(n[i]===void 0&&(n[i]=Number.isInteger(s)?[]:{}),n[i][s]=o.toJSON(e.meta).uuid):n[i]=o.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const i=[];for(const s of e.inputNodes[n])i.push(t[s]);this[n]=i}else if(typeof e.inputNodes[n]=="object"){const i={};for(const s in e.inputNodes[n]){const o=e.inputNodes[n][s];i[s]=t[o]}this[n]=i}else{const i=e.inputNodes[n];this[n]=t[i]}}}toJSON(e){const{uuid:t,type:n}=this,i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{},nodes:{}});let s=e.nodes[t];s===void 0&&(s={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},i!==!0&&(e.nodes[s.uuid]=s),this.serialize(s),delete s.meta);function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}if(i){const a=o(e.textures),c=o(e.images),l=o(e.nodes);a.length>0&&(s.textures=a),c.length>0&&(s.images=c),l.length>0&&(s.nodes=l)}return s}}function Z(r,e){if(typeof e!="function"||!r)throw new Error(`Node class ${r} is not a class`);if(td.has(r)){console.warn(`Redefinition of node class ${r}`);return}td.set(r,e),e.type=r}class ic extends we{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?As(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=As(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=wf(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?Rf(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}Z("InputNode",ic);class wu extends we{constructor(e,t=!1){super("string"),this.name=e,this.version=0,this.shared=t,this.isUniformGroup=!0}set needsUpdate(e){e===!0&&this.version++}}const jy=r=>new wu(r),Cf=r=>new wu(r,!0),Zy=Cf("frame"),Qy=Cf("render"),Lf=jy("object");Z("UniformGroupNode",wu);class Nu extends we{constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}Z("ArrayElementNode",Nu);class Cu extends we{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const i of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(i))&&(n=i);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,i=this.getNodeType(e),s=n.build(e,i);return e.format(s,i,t)}}Z("ConvertNode",Cu);class wt extends we{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).dependenciesCount>1}build(e,t){if(e.getBuildStage()==="generate"){const i=e.getVectorType(this.getNodeType(e,t)),s=e.getDataFromNode(this);if(e.context.tempRead!==!1&&s.propertyName!==void 0)return e.format(s.propertyName,i,t);if(e.context.tempWrite!==!1&&i!=="void"&&t!=="void"&&this.hasDependencies(e)){const o=super.build(e,i),a=e.getVarFromNode(this,null,i),c=e.getPropertyName(a);return e.addLineFlowCode(`${c} = ${o}`),s.snippet=o,s.propertyName=c,e.format(s.propertyName,i,t)}}return super.build(e,t)}}Z("TempNode",wt);class Pf extends wt{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),i=this.nodes,s=e.getPrimitiveType(n),o=[];for(const c of i){let l=c.build(e);const u=e.getPrimitiveType(c.getNodeType(e));u!==s&&(l=e.format(l,u,s)),o.push(l)}const a=`${e.getType(n)}( ${o.join(", ")} )`;return e.format(a,n,t)}}Z("JoinNode",Pf);const Jy=Ru.join("");class yl extends we{constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(Ru.indexOf(t)+1,e);return e}getPrimitiveType(e){return e.getPrimitiveType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getPrimitiveType(e))}generate(e,t){const n=this.node,i=e.getTypeLength(n.getNodeType(e));let s=null;if(i>1){let o=null;this.getVectorLength()>=i&&(o=e.getTypeFromLength(this.getVectorLength(),this.getPrimitiveType(e)));const c=n.build(e,o);this.components.length===i&&this.components===Jy.slice(0,this.components.length)?s=e.format(c,o,t):s=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else s=n.build(e,t);return s}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}Z("SplitNode",yl);class Uf extends wt{constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:i}=this,s=this.getNodeType(e),o=e.getTypeFromLength(n.length),a=i.build(e,o),c=t.build(e,s),l=e.getTypeLength(s),u=[];for(let h=0;h<l;h++){const d=Ru[h];d===n[0]?(u.push(a),h+=n.length-1):u.push(c+"."+d)}return`${e.getType(s)}( ${u.join(", ")} )`}}Z("SetNode",Uf);class li extends ic{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}Z("ConstNode",li);let Lr=null;const lr=new Map;function F(r,e){if(lr.has(r)){console.warn(`Redefinition of node element ${r}`);return}if(typeof e!="function")throw new Error(`Node element ${r} is not a function`);lr.set(r,e)}const nd=r=>r.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),Df={setup(r,e){const t=e.shift();return r(oc(t),...e)},get(r,e,t){if(typeof e=="string"&&r[e]===void 0){if(r.isStackNode!==!0&&e==="assign")return(...n)=>(Lr.assign(t,...n),t);if(lr.has(e)){const n=lr.get(e);return r.isStackNode?(...i)=>t.add(n(...i)):(...i)=>n(t,...i)}else{if(e==="self")return r;if(e.endsWith("Assign")&&lr.has(e.slice(0,e.length-6))){const n=lr.get(e.slice(0,e.length-6));return r.isStackNode?(...i)=>t.assign(i[0],n(...i)):(...i)=>t.assign(n(t,...i))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=nd(e),Me(new yl(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=nd(e.slice(3).toLowerCase()),e=e.split("").sort().join(""),n=>Me(new Uf(r,e,n));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),Me(new yl(r,e));if(/^\d+$/.test(e)===!0)return Me(new Nu(t,new li(Number(e),"uint")))}}}return Reflect.get(r,e,t)},set(r,e,t,n){return typeof e=="string"&&r[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(r,e,t,n)}},Hc=new WeakMap,id=new WeakMap,eT=function(r,e=null){const t=As(r);if(t==="node"){let n=Hc.get(r);return n===void 0&&(n=new Proxy(r,Df),Hc.set(r,n),Hc.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return Me(Tl(r,e));if(t==="shader")return J(r)}return r},tT=function(r,e=null){for(const t in r)r[t]=Me(r[t],e);return r},nT=function(r,e=null){const t=r.length;for(let n=0;n<t;n++)r[n]=Me(r[n],e);return r},iT=function(r,e=null,t=null,n=null){const i=s=>Me(n!==null?Object.assign(s,n):s);return e===null?(...s)=>i(new r(..._r(s))):t!==null?(t=Me(t),(...s)=>i(new r(e,..._r(s),t))):(...s)=>i(new r(e,..._r(s)))},sT=function(r,...e){return Me(new r(..._r(e)))};class rT extends we{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){const{outputNode:t}=e.getNodeProperties(this);return t?t.getNodeType(e):super.getNodeType(e)}call(e){const{shaderNode:t,inputNodes:n}=this;if(t.layout){let o=id.get(e.constructor);o===void 0&&(o=new WeakMap,id.set(e.constructor,o));let a=o.get(t);return a===void 0&&(a=Me(e.buildFunctionNode(t)),o.set(t,a)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(a),Me(a.call(n))}const i=t.jsFunc,s=n!==null?i(n,e.stack,e):i(e.stack,e);return Me(s)}setup(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);return n===null?this.call(e).build(e,t):super.generate(e,t)}}class oT extends we{constructor(e){super(),this.jsFunc=e,this.layout=null}get isArrayInput(){return/^\(\s+?\[/.test(this.jsFunc.toString())}setLayout(e){return this.layout=e,this}call(e=null){return oc(e),Me(new rT(this,e))}setup(){return this.call()}}const aT=[!1,!0],cT=[0,1,2,3],lT=[-1,-2],If=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],Lu=new Map;for(const r of aT)Lu.set(r,new li(r));const Pu=new Map;for(const r of cT)Pu.set(r,new li(r,"uint"));const Ff=new Map([...Pu].map(r=>new li(r.value,"int")));for(const r of lT)Ff.set(r,new li(r,"int"));const sc=new Map([...Ff].map(r=>new li(r.value)));for(const r of If)sc.set(r,new li(r));for(const r of If)sc.set(-r,new li(-r));const rc={bool:Lu,uint:Pu,float:sc},sd=new Map([...Lu,...sc]),Tl=(r,e)=>sd.has(r)?sd.get(r):r.isNode===!0?r:new li(r,e),uT=r=>{try{return r.getNodeType()}catch{return}},Et=function(r,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(r)&&t.every(i=>typeof i!="object"))&&(t=[Rf(r,...t)]),t.length===1&&e!==null&&e.has(t[0]))return Me(e.get(t[0]));if(t.length===1){const i=Tl(t[0],r);return uT(i)===r?Me(i):Me(new Cu(i,r))}const n=t.map(i=>Tl(i));return Me(new Pf(n,r))}},hT=r=>r!=null?r.nodeType||r.convertTo||(typeof r=="string"?r:null):null;function Qr(r){return new Proxy(new oT(r),Df)}const Me=(r,e=null)=>eT(r,e),oc=(r,e=null)=>new tT(r,e),_r=(r,e=null)=>new nT(r,e),G=(...r)=>new iT(...r),oe=(...r)=>new sT(...r),J=r=>{const e=new Qr(r),t=(...n)=>{let i;return oc(n),n[0]&&n[0].isNode?i=[...n]:i=n[0],e.call(i)};return t.shaderNode=e,t.setLayout=n=>(e.setLayout(n),t),t};Z("ShaderNode",Qr);const Ia=r=>{Lr=r},Of=()=>Lr,yt=(...r)=>Lr.if(...r);function dT(r){return Lr&&Lr.add(r),r}F("append",dT);const fT=new Et("color"),C=new Et("float",rc.float),w=new Et("int",rc.int),fe=new Et("uint",rc.uint),Ds=new Et("bool",rc.bool),Ie=new Et("vec2"),Bf=new Et("ivec2"),pT=new Et("uvec2"),mT=new Et("bvec2"),X=new Et("vec3"),gT=new Et("ivec3"),Fo=new Et("uvec3"),Vf=new Et("bvec3"),ct=new Et("vec4"),_T=new Et("ivec4"),xT=new Et("uvec4"),vT=new Et("bvec4"),Pr=new Et("mat3"),ST=new Et("imat3"),yT=new Et("umat3"),TT=new Et("bmat3"),Gf=new Et("mat4"),MT=new Et("imat4"),ET=new Et("umat4"),bT=new Et("bmat4"),AT=(r="")=>Me(new li(r,"string")),RT=r=>Me(new li(r,"ArrayBuffer"));F("color",fT);F("float",C);F("int",w);F("uint",fe);F("bool",Ds);F("vec2",Ie);F("ivec2",Bf);F("uvec2",pT);F("bvec2",mT);F("vec3",X);F("ivec3",gT);F("uvec3",Fo);F("bvec3",Vf);F("vec4",ct);F("ivec4",_T);F("uvec4",xT);F("bvec4",vT);F("mat3",Pr);F("imat3",ST);F("umat3",yT);F("bmat3",TT);F("mat4",Gf);F("imat4",MT);F("umat4",ET);F("bmat4",bT);F("string",AT);F("arrayBuffer",RT);const wT=G(Nu),NT=(r,e)=>Me(new Cu(Me(r),e));F("element",wT);F("convert",NT);class us extends ic{constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.groupNode=Lf}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}generate(e,t){const n=this.getNodeType(e),i=this.getUniformHash(e);let s=e.getNodeFromHash(i);s===void 0&&(e.setHashNode(this,i),s=this);const o=s.getInputType(e),a=e.getUniformFromNode(s,o,e.shaderStage,e.context.label),c=e.getPropertyName(a);return e.context.label!==void 0&&delete e.context.label,e.format(c,n,t)}}const Ft=(r,e)=>{const t=hT(e||r),n=r&&r.isNode===!0?r.node&&r.node.value||r.value:r;return Me(new us(n,t))};Z("UniformNode",us);class CT extends us{constructor(e=[]){super(),this.isArrayUniformNode=!0,this.nodes=e}getNodeType(e){return this.nodes[0].getNodeType(e)}}Z("ArrayUniformNode",CT);class zf extends wt{constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}generate(e,t){const n=this.targetNode,i=this.sourceNode,s=n.getNodeType(e),o=n.build(e),a=i.build(e,s),c=`${o} = ${a}`;if(t==="void"){e.addLineFlowCode(c);return}else return i.getNodeType(e)==="void"?(e.addLineFlowCode(c),o):e.format(c,s,t)}}const LT=G(zf);Z("AssignNode",zf);F("assign",LT);class kf extends we{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{name:t,node:n}=this,i=this.getNodeType(e),s=e.getVaryingFromNode(this,t,i);s.needsInterpolation||(s.needsInterpolation=e.shaderStage==="fragment");const o=e.getPropertyName(s,Jh.VERTEX);return e.flowNodeFromShaderStage(Jh.VERTEX,n,i,o),e.getPropertyName(s)}}const It=G(kf);F("varying",It);Z("VaryingNode",kf);class Uu extends we{constructor(e,t=null){super(t),this._attributeName=e}isGlobal(){return!0}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=super.getNodeType(e);if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const i=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(i)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const s=e.geometry.getAttribute(t),o=e.getTypeFromAttribute(s),a=e.getAttribute(t,o);return e.shaderStage==="vertex"?e.format(a.name,o,n):It(this).build(e,n)}else return console.warn(`AttributeNode: Attribute "${t}" not found.`),e.generateConst(n)}}const Mn=(r,e)=>Me(new Uu(r,e));Z("AttributeNode",Uu);class Hf extends we{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t),this.outputNode.build(e)}}const Wf=G(Hf);F("bypass",Wf);Z("BypassNode",Hf);let PT=0;class Xf{constructor(){this.id=PT++,this.nodesData=new WeakMap}getNodeData(e){return this.nodesData.get(e)}setNodeData(e,t){this.nodesData.set(e,t)}}class $f extends we{constructor(e,t=new Xf){super(),this.isCacheNode=!0,this.node=e,this.cache=t}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache(),i=this.cache||e.globalCache;e.setCache(i);const s=this.node.build(e,...t);return e.setCache(n),s}}const Fa=G($f),UT=r=>Fa(r,null);F("cache",Fa);F("globalCache",UT);Z("CacheNode",$f);class Du extends we{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}setup(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const i=this.node.build(e,t);return e.setContext(n),i}}const bi=G(Du),qf=(r,e)=>bi(r,{label:e});F("context",bi);F("label",qf);Z("ContextNode",Du);class wi extends we{constructor(e){super("uint"),this.scope=e,this.isInstanceIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let i;if(n===wi.VERTEX)i=e.getVertexIndex();else if(n===wi.INSTANCE)i=e.getInstanceIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let s;return e.shaderStage==="vertex"||e.shaderStage==="compute"?s=i:s=It(this).build(e,t),s}}wi.VERTEX="vertex";wi.INSTANCE="instance";const DT=oe(wi,wi.VERTEX),IT=oe(wi,wi.INSTANCE);Z("IndexNode",wi);class Yf{start(){}finish(){}direct(){}indirectDiffuse(){}indirectSpecular(){}ambientOcclusion(){}}class Kf extends we{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVarNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{node:t,name:n}=this,i=e.getVarFromNode(this,n,e.getVectorType(this.getNodeType(e))),s=e.getPropertyName(i),o=t.build(e,i.type);return e.addLineFlowCode(`${s} = ${o}`),s}}const Mo=G(Kf);F("temp",Mo);F("toVar",(...r)=>Mo(...r).append());Z("VarNode",Kf);class rd{constructor(e,t,n=null){this.isNodeAttribute=!0,this.name=e,this.type=t,this.node=n}}class FT{constructor(e,t,n,i=void 0){this.isNodeUniform=!0,this.name=e,this.type=t,this.node=n.getSelf(),this.needsUpdate=i}get value(){return this.node.value}set value(e){this.node.value=e}get id(){return this.node.id}get groupNode(){return this.node.groupNode}}class jf{constructor(e,t){this.isNodeVar=!0,this.name=e,this.type=t}}class OT extends jf{constructor(e,t){super(e,t),this.needsInterpolation=!1,this.isNodeVarying=!0}}class BT{constructor(e,t,n=""){this.name=e,this.type=t,this.code=n,Object.defineProperty(this,"isNodeCode",{value:!0})}}class VT{constructor(){this.keywords=[],this.nodes=[],this.keywordsCallback={}}getNode(e){let t=this.nodes[e];return t===void 0&&this.keywordsCallback[e]!==void 0&&(t=this.keywordsCallback[e](e),this.nodes[e]=t),t}addKeyword(e,t){return this.keywords.push(e),this.keywordsCallback[e]=t,this}parse(e){const t=this.keywords,n=new RegExp(`\\b${t.join("\\b|\\b")}\\b`,"g"),i=e.match(n),s=[];if(i!==null)for(const o of i){const a=this.getNode(o);a!==void 0&&s.indexOf(a)===-1&&s.push(a)}return s}include(e,t){const n=this.parse(t);for(const i of n)i.build(e)}}class zt extends we{constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const Jn=(r,e)=>Me(new zt(r,e)),Ji=(r,e)=>Me(new zt(r,e,!0)),mn=oe(zt,"vec4","DiffuseColor"),Jr=oe(zt,"float","Roughness"),GT=oe(zt,"float","Metalness"),Ml=oe(zt,"float","Clearcoat"),Oa=oe(zt,"float","ClearcoatRoughness"),ur=oe(zt,"vec3","Sheen"),Iu=oe(zt,"float","SheenRoughness"),Fu=oe(zt,"float","Iridescence"),Zf=oe(zt,"float","IridescenceIOR"),Qf=oe(zt,"float","IridescenceThickness"),Gi=oe(zt,"color","SpecularColor"),El=oe(zt,"float","Shininess"),zT=oe(zt,"vec4","Output"),xr=oe(zt,"float","dashSize"),Ba=oe(zt,"float","gapSize");oe(zt,"float","pointWidth");Z("PropertyNode",zt);class bl extends zt{constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}Z("ParameterNode",bl);class ns extends we{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this.includes=t}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){const t=this.getIncludes(e);for(const i of t)i.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}G(ns);Z("CodeNode",ns);class Jf extends ns{constructor(e="",t=[],n=""){super(e,t,n),this.keywords={}}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const t=e.getDataFromNode(this);let n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);const n=this.getNodeFunction(e),i=n.name,s=n.type,o=e.getCodeFromNode(this,s);i!==""&&(o.name=i);const a=e.getPropertyName(o);let c=this.getNodeFunction(e).getCode(a);const l=this.keywords,u=Object.keys(l);if(u.length>0)for(const h of u){const d=new RegExp(`\\b${h}\\b`,"g"),f=l[h].build(e,"property");c=c.replace(d,f)}return o.code=c+`
`,t==="property"?a:e.format(`${a}()`,s,t)}}Z("FunctionNode",Jf);class ep extends Uu{constructor(e=0){super(null,"vec2"),this.isUVNode=!0,this.index=e}getAttributeName(){const e=this.index;return"uv"+(e>0?e:"")}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}const hs=(...r)=>Me(new ep(...r));Z("UVNode",ep);class tp extends we{constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),i=this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${i} )`,this.getNodeType(e),t)}}const np=G(tp);F("textureSize",np);Z("TextureSizeNode",tp);class Ut extends wt{constructor(e,t,n,...i){if(super(),this.op=e,i.length>0){let s=n;for(let o=0;o<i.length;o++)s=new Ut(e,s,i[o]);n=s}this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,i=this.aNode,s=this.bNode,o=i.getNodeType(e),a=s.getNodeType(e);if(o==="void"||a==="void")return"void";if(n==="%")return o;if(n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(o);if(n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=t?e.getTypeLength(t):Math.max(e.getTypeLength(o),e.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else return o==="float"&&e.isMatrix(a)?a:e.isMatrix(o)&&e.isVector(a)?e.getVectorFromMatrix(o):e.isVector(o)&&e.isMatrix(a)?e.getVectorFromMatrix(a):e.getTypeLength(a)>e.getTypeLength(o)?a:o}generate(e,t){const n=this.op,i=this.aNode,s=this.bNode,o=this.getNodeType(e,t);let a=null,c=null;o!=="void"?(a=i.getNodeType(e),c=s.getNodeType(e),n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(a)?c=a:a=c="float":n===">>"||n==="<<"?(a=o,c=e.changeComponentType(c,"uint")):e.isMatrix(a)&&e.isVector(c)?c=e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(c)?a=e.getVectorFromMatrix(c):a=c=o):a=c=o;const l=i.build(e,a),u=s.build(e,c),h=e.getTypeLength(t),d=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&h>1?e.format(`${e.getMethod("lessThan")}( ${l}, ${u} )`,o,t):n==="<="&&h>1?e.format(`${e.getMethod("lessThanEqual")}( ${l}, ${u} )`,o,t):n===">"&&h>1?e.format(`${e.getMethod("greaterThan")}( ${l}, ${u} )`,o,t):n===">="&&h>1?e.format(`${e.getMethod("greaterThanEqual")}( ${l}, ${u} )`,o,t):d?e.format(`${d}( ${l}, ${u} )`,o,t):e.format(`( ${l} ${n} ${u} )`,o,t);if(a!=="void")return d?e.format(`${d}( ${l}, ${u} )`,o,t):e.format(`${l} ${n} ${u}`,o,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const oi=G(Ut,"+"),cn=G(Ut,"-"),Lt=G(Ut,"*"),Eo=G(Ut,"/"),kT=G(Ut,"%"),HT=G(Ut,"=="),WT=G(Ut,"!="),XT=G(Ut,"<"),ip=G(Ut,">"),$T=G(Ut,"<="),qT=G(Ut,">="),YT=G(Ut,"&&"),KT=G(Ut,"||"),jT=G(Ut,"^^"),ZT=G(Ut,"&"),QT=G(Ut,"|"),JT=G(Ut,"^"),eM=G(Ut,"<<"),tM=G(Ut,">>");F("add",oi);F("sub",cn);F("mul",Lt);F("div",Eo);F("remainder",kT);F("equal",HT);F("notEqual",WT);F("lessThan",XT);F("greaterThan",ip);F("lessThanEqual",$T);F("greaterThanEqual",qT);F("and",YT);F("or",KT);F("xor",jT);F("bitAnd",ZT);F("bitOr",QT);F("bitXor",JT);F("shiftLeft",eM);F("shiftRight",tM);Z("OperatorNode",Ut);class D extends wt{constructor(e,t,n=null,i=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=i}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,i=this.cNode?this.cNode.getNodeType(e):null,s=e.isMatrix(t)?0:e.getTypeLength(t),o=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(i)?0:e.getTypeLength(i);return s>o&&s>a?t:o>a?n:a>s?i:t}getNodeType(e){const t=this.method;return t===D.LENGTH||t===D.DISTANCE||t===D.DOT?"float":t===D.CROSS?"vec3":this.getInputType(e)}generate(e,t){const n=this.method,i=this.getNodeType(e),s=this.getInputType(e),o=this.aNode,a=this.bNode,c=this.cNode,l=e.renderer.isWebGLRenderer===!0;if(n===D.TRANSFORM_DIRECTION){let u=o,h=a;e.isMatrix(u.getNodeType(e))?h=ct(X(h),0):u=ct(X(u),0);const d=Lt(u,h).xyz;return ai(d).build(e,t)}else{if(n===D.NEGATE)return e.format("( - "+o.build(e,s)+" )",i,t);if(n===D.ONE_MINUS)return cn(1,o).build(e,t);if(n===D.RECIPROCAL)return Eo(1,o).build(e,t);if(n===D.DIFFERENCE)return Zn(cn(o,a)).build(e,t);{const u=[];return n===D.CROSS?u.push(o.build(e,i),a.build(e,i)):n===D.STEP?u.push(o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":s),a.build(e,s)):l&&(n===D.MIN||n===D.MAX)||n===D.MOD?u.push(o.build(e,s),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":s)):n===D.REFRACT?u.push(o.build(e,s),a.build(e,s),c.build(e,"float")):n===D.MIX?u.push(o.build(e,s),a.build(e,s),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":s)):(u.push(o.build(e,s)),a!==null&&u.push(a.build(e,s)),c!==null&&u.push(c.build(e,s))),e.format(`${e.getMethod(n)}( ${u.join(", ")} )`,i,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}D.RADIANS="radians";D.DEGREES="degrees";D.EXP="exp";D.EXP2="exp2";D.LOG="log";D.LOG2="log2";D.SQRT="sqrt";D.INVERSE_SQRT="inversesqrt";D.FLOOR="floor";D.CEIL="ceil";D.NORMALIZE="normalize";D.FRACT="fract";D.SIN="sin";D.COS="cos";D.TAN="tan";D.ASIN="asin";D.ACOS="acos";D.ATAN="atan";D.ABS="abs";D.SIGN="sign";D.LENGTH="length";D.NEGATE="negate";D.ONE_MINUS="oneMinus";D.DFDX="dFdx";D.DFDY="dFdy";D.ROUND="round";D.RECIPROCAL="reciprocal";D.TRUNC="trunc";D.FWIDTH="fwidth";D.BITCAST="bitcast";D.ATAN2="atan2";D.MIN="min";D.MAX="max";D.MOD="mod";D.STEP="step";D.REFLECT="reflect";D.DISTANCE="distance";D.DIFFERENCE="difference";D.DOT="dot";D.CROSS="cross";D.POW="pow";D.TRANSFORM_DIRECTION="transformDirection";D.MIX="mix";D.CLAMP="clamp";D.REFRACT="refract";D.SMOOTHSTEP="smoothstep";D.FACEFORWARD="faceforward";const sp=C(1e-6);C(1e6);const nM=G(D,D.RADIANS),iM=G(D,D.DEGREES),sM=G(D,D.EXP),rM=G(D,D.EXP2),oM=G(D,D.LOG),aM=G(D,D.LOG2),zs=G(D,D.SQRT),cM=G(D,D.INVERSE_SQRT),Oo=G(D,D.FLOOR),rp=G(D,D.CEIL),ai=G(D,D.NORMALIZE),Ou=G(D,D.FRACT),lM=G(D,D.SIN),uM=G(D,D.COS),hM=G(D,D.TAN),dM=G(D,D.ASIN),fM=G(D,D.ACOS),pM=G(D,D.ATAN),Zn=G(D,D.ABS),mM=G(D,D.SIGN),gM=G(D,D.LENGTH),_M=G(D,D.NEGATE),xM=G(D,D.ONE_MINUS),vM=G(D,D.DFDX),SM=G(D,D.DFDY),yM=G(D,D.ROUND),TM=G(D,D.RECIPROCAL),op=G(D,D.TRUNC),MM=G(D,D.FWIDTH);G(D,D.BITCAST);const EM=G(D,D.ATAN2),bo=G(D,D.MIN),Is=G(D,D.MAX),bM=G(D,D.MOD),AM=G(D,D.STEP),RM=G(D,D.REFLECT),wM=G(D,D.DISTANCE),NM=G(D,D.DIFFERENCE),Bo=G(D,D.DOT),CM=G(D,D.CROSS),Bu=G(D,D.POW),LM=G(D,D.POW,2),PM=G(D,D.POW,3),UM=G(D,D.POW,4),DM=G(D,D.TRANSFORM_DIRECTION),Li=G(D,D.MIX),ap=(r,e=0,t=1)=>Me(new D(D.CLAMP,Me(r),Me(e),Me(t))),IM=r=>ap(r),FM=G(D,D.REFRACT),Fs=G(D,D.SMOOTHSTEP),OM=G(D,D.FACEFORWARD),BM=(r,e,t)=>Li(e,t,r),VM=(r,e,t)=>Fs(e,t,r);F("radians",nM);F("degrees",iM);F("exp",sM);F("exp2",rM);F("log",oM);F("log2",aM);F("sqrt",zs);F("inverseSqrt",cM);F("floor",Oo);F("ceil",rp);F("normalize",ai);F("fract",Ou);F("sin",lM);F("cos",uM);F("tan",hM);F("asin",dM);F("acos",fM);F("atan",pM);F("abs",Zn);F("sign",mM);F("length",gM);F("negate",_M);F("oneMinus",xM);F("dFdx",vM);F("dFdy",SM);F("round",yM);F("reciprocal",TM);F("trunc",op);F("fwidth",MM);F("atan2",EM);F("min",bo);F("max",Is);F("mod",bM);F("step",AM);F("reflect",RM);F("distance",wM);F("dot",Bo);F("cross",CM);F("pow",Bu);F("pow2",LM);F("pow3",PM);F("pow4",UM);F("transformDirection",DM);F("mix",BM);F("clamp",ap);F("refract",FM);F("smoothstep",VM);F("faceForward",OM);F("difference",NM);F("saturate",IM);Z("MathNode",D);const GM=J(r=>{const{value:e}=r,{rgb:t}=e,n=t.mul(.9478672986).add(.0521327014).pow(2.4),i=t.mul(.0773993808),s=t.lessThanEqual(.04045),o=Li(n,i,s);return ct(o,e.a)}),zM=J(r=>{const{value:e}=r,{rgb:t}=e,n=t.pow(.41666).mul(1.055).sub(.055),i=t.mul(12.92),s=t.lessThanEqual(.0031308),o=Li(n,i,s);return ct(o,e.a)}),od=r=>{let e=null;return r===Xn?e="Linear":r===Ee&&(e="sRGB"),e},cp=(r,e)=>od(r)+"To"+od(e);class Un extends wt{constructor(e,t){super("vec4"),this.method=e,this.node=t}setup(){const{method:e,node:t}=this;return e===Un.LINEAR_TO_LINEAR?t:kM[e]({value:t})}}Un.LINEAR_TO_LINEAR="LinearToLinear";Un.LINEAR_TO_sRGB="LinearTosRGB";Un.sRGB_TO_LINEAR="sRGBToLinear";const kM={[Un.LINEAR_TO_sRGB]:zM,[Un.sRGB_TO_LINEAR]:GM},HM=(r,e)=>Me(new Un(cp(Xn,e),Me(r))),lp=(r,e)=>Me(new Un(cp(e,Xn),Me(r))),WM=G(Un,Un.LINEAR_TO_sRGB),XM=G(Un,Un.sRGB_TO_LINEAR);F("linearTosRGB",WM);F("sRGBToLinear",XM);F("linearToColorSpace",HM);F("colorSpaceToLinear",lp);Z("ColorSpaceNode",Un);class up extends we{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),i=this.snippet;if(n==="void")e.addLineFlowCode(i);else return e.format(`( ${i} )`,n,t)}}const Vu=G(up);Z("ExpressionNode",up);class hp extends us{constructor(e){super(0),this.textureNode=e,this.updateType=gt.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:i,height:s}=n;this.value=Math.log2(Math.max(i,s))}}}const Gu=G(hp);Z("MaxMipLevelNode",hp);class Ir extends us{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.compareNode=null,this.depthNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=gt.NONE,this.setUpdateMatrix(t===null)}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":"vec4"}getInputType(){return"texture"}getDefaultUV(){return hs(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){const t=this.value;return Ft(t.matrix).mul(X(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?gt.FRAME:gt.NONE,this}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(t=t.setY(t.y.oneMinus())),t}setup(e){const t=e.getNodeProperties(this);let n=this.uvNode;(n===null||e.context.forceUVContext===!0)&&e.context.getUV&&(n=e.context.getUV(this)),n||(n=this.getDefaultUV()),this.updateMatrix===!0&&(n=this.getTransformedUV(n)),n=this.setupUV(e,n);let i=this.levelNode;i===null&&e.context.getTextureLevel&&(i=e.context.getTextureLevel(this)),i!==null&&e.context.getTextureLevelAlgorithm!==void 0&&(i=e.context.getTextureLevelAlgorithm(this,i)),t.uvNode=n,t.levelNode=i,t.compareNode=this.compareNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,i,s,o){const a=this.value;let c;return i?c=e.generateTextureLevel(a,t,n,i,s):o?c=e.generateTextureCompare(a,t,n,o,s):this.sampler===!1?c=e.generateTextureLoad(a,t,n,s):c=e.generateTexture(a,t,n,s),c}generate(e,t){const n=e.getNodeProperties(this),i=this.value;if(!i||i.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const s=super.generate(e,"property");if(t==="sampler")return s+"_sampler";if(e.isReference(t))return s;{const o=e.getDataFromNode(this);let a=o.propertyName;if(a===void 0){const{uvNode:u,levelNode:h,compareNode:d,depthNode:f}=n,g=this.generateUV(e,u),_=h?h.build(e,"float"):null,m=f?f.build(e,"int"):null,p=d?d.build(e,"float"):null,S=e.getVarFromNode(this);a=e.getPropertyName(S);const x=this.generateSnippet(e,s,g,_,m,p);e.addLineFlowCode(`${a} = ${x}`),e.context.tempWrite!==!1&&(o.snippet=x,o.propertyName=a)}let c=a;const l=this.getNodeType(e);return e.needsColorSpaceToLinear(i)&&(c=lp(Vu(c,l),i.colorSpace).setup(e).build(e,l)),e.format(c,l,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){const t=this.clone();return t.uvNode=e,Me(t)}blur(e){const t=this.clone();return t.levelNode=e.mul(Gu(t)),Me(t)}level(e){const t=this.clone();return t.levelNode=e,t}size(e){return np(this,e)}compare(e){const t=this.clone();return t.compareNode=Me(e),Me(t)}depth(e){const t=this.clone();return t.depthNode=Me(e),Me(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}update(){const e=this.value;e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e}}const Cn=G(Ir),$M=(...r)=>Cn(...r).setSampler(!1);F("texture",Cn);Z("TextureNode",Ir);class Vo extends we{constructor(e,t,n=null){super(),this.property=e,this.index=null,this.uniformType=t,this.object=n,this.reference=null,this.node=null,this.updateType=gt.OBJECT,this.setNodeType(t)}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setIndex(e){return this.index=e,this}getIndex(){return this.index}setNodeType(e){let t=null;e==="texture"?t=Cn(null):t=Ft(e),this.node=t}getNodeType(e){return this.node.getNodeType(e)}update(){let e=this.reference[this.property];this.index!==null&&(e=e[this.index]),this.node.value=e}setup(){return this.node}}const Gn=(r,e,t)=>Me(new Vo(r,e,t)),qM=(r,e,t,n)=>Me(new Vo(r,t,n).setIndex(e));Z("ReferenceNode",Vo);class dp extends Vo{constructor(e,t,n=null){super(e,t,n),this.material=n}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}setup(e){const t=this.material!==null?this.material:e.material;return this.node.value=t[this.property],super.setup(e)}}const YM=(r,e,t)=>Me(new dp(r,e,t));Z("MaterialReferenceNode",dp);class Ge extends we{constructor(e=Ge.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=gt.OBJECT,this._uniformNode=new us(null)}getNodeType(){const e=this.scope;if(e===Ge.WORLD_MATRIX||e===Ge.VIEW_MATRIX)return"mat4";if(e===Ge.NORMAL_MATRIX)return"mat3";if(e===Ge.POSITION||e===Ge.VIEW_POSITION||e===Ge.DIRECTION||e===Ge.SCALE)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,i=this.scope;if(i===Ge.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(i===Ge.NORMAL_MATRIX)n.value=t.normalMatrix;else if(i===Ge.WORLD_MATRIX)n.value=t.matrixWorld;else if(i===Ge.POSITION)n.value=n.value||new U,n.value.setFromMatrixPosition(t.matrixWorld);else if(i===Ge.SCALE)n.value=n.value||new U,n.value.setFromMatrixScale(t.matrixWorld);else if(i===Ge.DIRECTION)n.value=n.value||new U,t.getWorldDirection(n.value);else if(i===Ge.VIEW_POSITION){const s=e.camera;n.value=n.value||new U,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(s.matrixWorldInverse)}}generate(e){const t=this.scope;return t===Ge.WORLD_MATRIX||t===Ge.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===Ge.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===Ge.POSITION||t===Ge.VIEW_POSITION||t===Ge.DIRECTION||t===Ge.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Ge.VIEW_MATRIX="viewMatrix";Ge.NORMAL_MATRIX="normalMatrix";Ge.WORLD_MATRIX="worldMatrix";Ge.POSITION="position";Ge.SCALE="scale";Ge.VIEW_POSITION="viewPosition";Ge.DIRECTION="direction";G(Ge,Ge.DIRECTION);G(Ge,Ge.VIEW_MATRIX);G(Ge,Ge.NORMAL_MATRIX);G(Ge,Ge.WORLD_MATRIX);const Al=G(Ge,Ge.POSITION);G(Ge,Ge.SCALE);const fp=G(Ge,Ge.VIEW_POSITION);Z("Object3DNode",Ge);class at extends Ge{constructor(e=at.POSITION){super(e),this.updateType=gt.RENDER}getNodeType(e){const t=this.scope;return t===at.PROJECTION_MATRIX?"mat4":t===at.NEAR||t===at.FAR||t===at.LOG_DEPTH?"float":super.getNodeType(e)}update(e){const t=e.camera,n=this._uniformNode,i=this.scope;i===at.VIEW_MATRIX?n.value=t.matrixWorldInverse:i===at.PROJECTION_MATRIX?n.value=t.projectionMatrix:i===at.NEAR?n.value=t.near:i===at.FAR?n.value=t.far:i===at.LOG_DEPTH?n.value=2/(Math.log(t.far+1)/Math.LN2):(this.object3d=t,super.update(e))}generate(e){const t=this.scope;return t===at.PROJECTION_MATRIX?this._uniformNode.nodeType="mat4":(t===at.NEAR||t===at.FAR||t===at.LOG_DEPTH)&&(this._uniformNode.nodeType="float"),super.generate(e)}}at.PROJECTION_MATRIX="projectionMatrix";at.NEAR="near";at.FAR="far";at.LOG_DEPTH="logDepth";const zi=qf(oe(at,at.PROJECTION_MATRIX),"projectionMatrix"),Wc=oe(at,at.NEAR),Xc=oe(at,at.FAR),KM=oe(at,at.LOG_DEPTH),ds=oe(at,at.VIEW_MATRIX);oe(at,at.NORMAL_MATRIX);oe(at,at.WORLD_MATRIX);oe(at,at.POSITION);Z("CameraNode",at);class hn extends Ge{constructor(e=hn.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}oe(hn,hn.DIRECTION);const Os=oe(hn,hn.VIEW_MATRIX).label("modelViewMatrix").temp("ModelViewMatrix"),pp=oe(hn,hn.NORMAL_MATRIX),Va=oe(hn,hn.WORLD_MATRIX);oe(hn,hn.POSITION);oe(hn,hn.SCALE);oe(hn,hn.VIEW_POSITION);Z("ModelNode",hn);class Ht extends we{constructor(e=Ht.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`normal-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===Ht.GEOMETRY)n=Mn("normal","vec3");else if(t===Ht.LOCAL)n=It(Ga);else if(t===Ht.VIEW){const i=pp.mul($i);n=ai(It(i))}else if(t===Ht.WORLD){const i=cs.transformDirection(ds);n=ai(It(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Ht.GEOMETRY="geometry";Ht.LOCAL="local";Ht.VIEW="view";Ht.WORLD="world";const Ga=oe(Ht,Ht.GEOMETRY),$i=oe(Ht,Ht.LOCAL).temp("Normal"),cs=oe(Ht,Ht.VIEW),ac=oe(Ht,Ht.WORLD),Gt=Jn("vec3","TransformedNormalView"),jM=Gt.transformDirection(ds).normalize(),hr=Jn("vec3","TransformedClearcoatNormalView");Z("NormalNode",Ht);const ad=new Map;class re extends we{constructor(e){super(),this.scope=e}getCache(e,t){let n=ad.get(e);return n===void 0&&(n=YM(e,t),ad.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let i=null;if(n===re.COLOR){const s=this.getColor(n);t.map&&t.map.isTexture===!0?i=s.mul(this.getTexture("map")):i=s}else if(n===re.OPACITY){const s=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?i=s.mul(this.getTexture("alpha")):i=s}else if(n===re.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?i=this.getTexture(n).r:i=C(1);else if(n===re.ROUGHNESS){const s=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?i=s.mul(this.getTexture(n).g):i=s}else if(n===re.METALNESS){const s=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?i=s.mul(this.getTexture(n).b):i=s}else if(n===re.EMISSIVE){const s=this.getColor(n);t.emissiveMap&&t.emissiveMap.isTexture===!0?i=s.mul(this.getTexture(n)):i=s}else if(n===re.NORMAL)t.normalMap?i=this.getTexture("normal").normalMap(this.getCache("normalScale","vec2")):t.bumpMap?i=this.getTexture("bump").r.bumpMap(this.getFloat("bumpScale")):i=cs;else if(n===re.CLEARCOAT){const s=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?i=s.mul(this.getTexture(n).r):i=s}else if(n===re.CLEARCOAT_ROUGHNESS){const s=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?i=s.mul(this.getTexture(n).r):i=s}else if(n===re.CLEARCOAT_NORMAL)t.clearcoatNormalMap?i=this.getTexture(n).normalMap(this.getCache(n+"Scale","vec2")):i=cs;else if(n===re.SHEEN){const s=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?i=s.mul(this.getTexture("sheenColor").rgb):i=s}else if(n===re.SHEEN_ROUGHNESS){const s=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?i=s.mul(this.getTexture(n).a):i=s,i=i.clamp(.07,1)}else if(n===re.IRIDESCENCE_THICKNESS){const s=Gn(1,"float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const o=Gn(0,"float",t.iridescenceThicknessRange);i=s.sub(o).mul(this.getTexture(n).g).add(o)}else i=s}else{const s=this.getNodeType(e);i=this.getCache(n,s)}return i}}re.ALPHA_TEST="alphaTest";re.COLOR="color";re.OPACITY="opacity";re.SHININESS="shininess";re.SPECULAR_COLOR="specular";re.SPECULAR_STRENGTH="specularStrength";re.REFLECTIVITY="reflectivity";re.ROUGHNESS="roughness";re.METALNESS="metalness";re.NORMAL="normal";re.CLEARCOAT="clearcoat";re.CLEARCOAT_ROUGHNESS="clearcoatRoughness";re.CLEARCOAT_NORMAL="clearcoatNormal";re.EMISSIVE="emissive";re.ROTATION="rotation";re.SHEEN="sheen";re.SHEEN_ROUGHNESS="sheenRoughness";re.IRIDESCENCE="iridescence";re.IRIDESCENCE_IOR="iridescenceIOR";re.IRIDESCENCE_THICKNESS="iridescenceThickness";re.LINE_SCALE="scale";re.LINE_DASH_SIZE="dashSize";re.LINE_GAP_SIZE="gapSize";re.LINE_WIDTH="linewidth";re.LINE_DASH_OFFSET="dashOffset";re.POINT_WIDTH="pointWidth";const ZM=oe(re,re.ALPHA_TEST),Ao=oe(re,re.COLOR),QM=oe(re,re.SHININESS),JM=oe(re,re.EMISSIVE),mp=oe(re,re.OPACITY),eE=oe(re,re.SPECULAR_COLOR),tE=oe(re,re.SPECULAR_STRENGTH);oe(re,re.REFLECTIVITY);const nE=oe(re,re.ROUGHNESS),iE=oe(re,re.METALNESS),sE=oe(re,re.NORMAL),rE=oe(re,re.CLEARCOAT),oE=oe(re,re.CLEARCOAT_ROUGHNESS),aE=oe(re,re.CLEARCOAT_NORMAL),cE=oe(re,re.ROTATION),lE=oe(re,re.SHEEN),uE=oe(re,re.SHEEN_ROUGHNESS),hE=oe(re,re.IRIDESCENCE),dE=oe(re,re.IRIDESCENCE_IOR),fE=oe(re,re.IRIDESCENCE_THICKNESS),Rl=oe(re,re.LINE_SCALE),gp=oe(re,re.LINE_DASH_SIZE),_p=oe(re,re.LINE_GAP_SIZE),Xr=oe(re,re.LINE_WIDTH),cd=oe(re,re.LINE_DASH_OFFSET),pE=oe(re,re.POINT_WIDTH);Z("MaterialNode",re);class _t extends we{constructor(e=_t.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`position-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===_t.GEOMETRY)n=Mn("position","vec3");else if(t===_t.LOCAL)n=It(An);else if(t===_t.WORLD){const i=Va.mul(Ln);n=It(i)}else if(t===_t.VIEW){const i=Os.mul(Ln);n=It(i)}else if(t===_t.VIEW_DIRECTION){const i=Ni.negate();n=ai(It(i))}else if(t===_t.WORLD_DIRECTION){const i=Ln.transformDirection(Va);n=ai(It(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}_t.GEOMETRY="geometry";_t.LOCAL="local";_t.WORLD="world";_t.WORLD_DIRECTION="worldDirection";_t.VIEW="view";_t.VIEW_DIRECTION="viewDirection";const An=oe(_t,_t.GEOMETRY),Ln=oe(_t,_t.LOCAL).temp("Position"),mE=oe(_t,_t.WORLD),xp=oe(_t,_t.WORLD_DIRECTION),Ni=oe(_t,_t.VIEW),en=oe(_t,_t.VIEW_DIRECTION);Z("PositionNode",_t);class vp extends wt{constructor(e=null){super("vec4"),this.positionNode=e}setup(e){if(e.shaderStage==="fragment")return It(e.context.mvp);const t=this.positionNode||Ln;return zi.mul(Os).mul(t)}}const wl=G(vp);Z("ModelViewProjectionNode",vp);class Sp extends ic{constructor(e,t=null,n=0,i=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=i,this.usage=La,this.instanced=!1,this.attribute=null,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,i=e.getTypeLength(t),s=this.bufferStride||i,o=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new gf(n,s),c=new bu(a,i,o);a.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),i=e.getPropertyName(n);let s=null;return e.shaderStage==="vertex"?s=i:s=It(this).build(e,t),s}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this}setInstanced(e){return this.instanced=e,this}}const zu=(r,e,t,n)=>Me(new Sp(r,e,t,n)),gE=(r,e,t,n)=>zu(r,e,t,n).setUsage(mu),_E=(r,e,t,n)=>zu(r,e,t,n).setInstanced(!0),xE=(r,e,t,n)=>gE(r,e,t,n).setInstanced(!0);F("toAttribute",r=>zu(r.value));Z("BufferAttributeNode",Sp);class yp extends we{constructor(e){super("void"),this.instanceMesh=e,this.instanceMatrixNode=null}setup(){let e=this.instanceMatrixNode;if(e===null){const a=this.instanceMesh.instanceMatrix,c=new Ly(a.array,16,1),l=a.usage===mu?xE:_E,u=[l(c,"vec4",16,0),l(c,"vec4",16,4),l(c,"vec4",16,8),l(c,"vec4",16,12)];e=Gf(...u),this.instanceMatrixNode=e}const t=e.mul(Ln).xyz,n=Pr(e[0].xyz,e[1].xyz,e[2].xyz),i=$i.div(X(n[0].dot(n[0]),n[1].dot(n[1]),n[2].dot(n[2]))),s=n.mul(i).xyz;Ln.assign(t),$i.assign(s)}}const vE=G(yp);Z("InstanceNode",yp);class ku extends us{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getInputType(){return"buffer"}}const Tp=(r,e,t)=>Me(new ku(r,e,t));Z("BufferNode",ku);class Vt extends we{constructor(e=Vt.LOCAL){super(),this.scope=e}getHash(){return`tangent-${this.scope}`}getNodeType(){return this.scope===Vt.GEOMETRY?"vec4":"vec3"}generate(e){const t=this.scope;let n=null;if(t===Vt.GEOMETRY)n=Mn("tangent","vec4");else if(t===Vt.LOCAL)n=It(za.xyz);else if(t===Vt.VIEW){const i=Os.mul(Hu).xyz;n=ai(It(i))}else if(t===Vt.WORLD){const i=cc.transformDirection(ds);n=ai(It(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Vt.GEOMETRY="geometry";Vt.LOCAL="local";Vt.VIEW="view";Vt.WORLD="world";const za=oe(Vt,Vt.GEOMETRY),Hu=oe(Vt,Vt.LOCAL),cc=oe(Vt,Vt.VIEW),SE=oe(Vt,Vt.WORLD),Mp=Mo(cc,"TransformedTangentView");ai(Mp.transformDirection(ds));Z("TangentNode",Vt);class Ep extends we{constructor(e){super("void"),this.skinnedMesh=e,this.updateType=gt.OBJECT,this.skinIndexNode=Mn("skinIndex","uvec4"),this.skinWeightNode=Mn("skinWeight","vec4"),this.bindMatrixNode=Ft(e.bindMatrix,"mat4"),this.bindMatrixInverseNode=Ft(e.bindMatrixInverse,"mat4"),this.boneMatricesNode=Tp(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)}setup(e){const{skinIndexNode:t,skinWeightNode:n,bindMatrixNode:i,bindMatrixInverseNode:s,boneMatricesNode:o}=this,a=o.element(t.x),c=o.element(t.y),l=o.element(t.z),u=o.element(t.w),h=i.mul(Ln),d=oi(a.mul(n.x).mul(h),c.mul(n.y).mul(h),l.mul(n.z).mul(h),u.mul(n.w).mul(h)),f=s.mul(d).xyz;let g=oi(n.x.mul(a),n.y.mul(c),n.z.mul(l),n.w.mul(u));g=s.mul(g).mul(i);const _=g.transformDirection($i).xyz;Ln.assign(f),$i.assign(_),e.hasGeometryAttribute("tangent")&&Hu.assign(_)}generate(e,t){if(t!=="void")return Ln.build(e,t)}update(){this.skinnedMesh.skeleton.update()}}const yE=G(Ep);Z("SkinningNode",Ep);const $c=new WeakMap,Bn=new ot,ld=J(({bufferMap:r,influence:e,stride:t,width:n,depth:i,offset:s})=>{const o=w(DT).mul(t).add(s),a=o.div(n),c=o.sub(a.mul(n));return $M(r,Bf(c,a)).depth(i).mul(e)});function TE(r){const e=r.morphAttributes.position!==void 0,t=r.morphAttributes.normal!==void 0,n=r.morphAttributes.color!==void 0,i=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,s=i!==void 0?i.length:0;let o=$c.get(r);if(o===void 0||o.count!==s){let p=function(){_.dispose(),$c.delete(r),r.removeEventListener("dispose",p)};o!==void 0&&o.texture.dispose();const a=r.morphAttributes.position||[],c=r.morphAttributes.normal||[],l=r.morphAttributes.color||[];let u=0;e===!0&&(u=1),t===!0&&(u=2),n===!0&&(u=3);let h=r.attributes.position.count*u,d=1;const f=4096;h>f&&(d=Math.ceil(h/f),h=f);const g=new Float32Array(h*d*4*s),_=new _u(g,h,d,s);_.type=kt,_.needsUpdate=!0;const m=u*4;for(let S=0;S<s;S++){const x=a[S],E=c[S],L=l[S],A=h*d*4*S;for(let R=0;R<x.count;R++){const Y=R*m;e===!0&&(Bn.fromBufferAttribute(x,R),g[A+Y+0]=Bn.x,g[A+Y+1]=Bn.y,g[A+Y+2]=Bn.z,g[A+Y+3]=0),t===!0&&(Bn.fromBufferAttribute(E,R),g[A+Y+4]=Bn.x,g[A+Y+5]=Bn.y,g[A+Y+6]=Bn.z,g[A+Y+7]=0),n===!0&&(Bn.fromBufferAttribute(L,R),g[A+Y+8]=Bn.x,g[A+Y+9]=Bn.y,g[A+Y+10]=Bn.z,g[A+Y+11]=L.itemSize===4?Bn.w:1)}}o={count:s,texture:_,stride:u,size:new Be(h,d)},$c.set(r,o),r.addEventListener("dispose",p)}return o}class bp extends we{constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=Ft(1),this.updateType=gt.OBJECT}setup(e){const{geometry:t}=e,n=t.morphAttributes.position!==void 0,i=t.morphAttributes.normal!==void 0,s=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,o=s!==void 0?s.length:0,{texture:a,stride:c,size:l}=TE(t);n===!0&&Ln.mulAssign(this.morphBaseInfluence),i===!0&&$i.mulAssign(this.morphBaseInfluence);const u=w(l.width);for(let h=0;h<o;h++){const d=qM("morphTargetInfluences",h,"float"),f=w(h);n===!0&&Ln.addAssign(ld({bufferMap:a,influence:d,stride:c,width:u,depth:f,offset:w(0)})),i===!0&&$i.addAssign(ld({bufferMap:a,influence:d,stride:c,width:u,depth:f,offset:w(1)}))}}update(){const e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}}const ME=G(bp);Z("MorphNode",bp);class Ap extends we{constructor(){super("vec3")}getHash(){return"reflectVector"}setup(){return en.negate().reflect(Gt).transformDirection(ds)}}const EE=oe(Ap);Z("ReflectVectorNode",Ap);class Rp extends Ir{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return EE}setUpdateMatrix(){}setupUV(e,t){return X(t.x.negate(),t.yz)}generateUV(e,t){return t.build(e,"vec3")}}const Ro=G(Rp);F("cubeTexture",Ro);Z("CubeTextureNode",Rp);class lc extends we{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}Z("LightingNode",lc);let qc=null;class ks extends lc{constructor(e=null){super(),this.updateType=gt.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.color=new Pe,this._defaultColorNode=Ft(this.color),this.colorNode=this._defaultColorNode,this.isAnalyticLightNode=!0}getCacheKey(){return super.getCacheKey()+"-"+(this.light.id+"-"+(this.light.castShadow?"1":"0"))}getHash(){return this.light.uuid}setupShadow(e){let t=this.shadowNode;if(t===null){qc===null&&(qc=e.createNodeMaterial("MeshBasicNodeMaterial"));const n=this.light.shadow,i=e.getRenderTarget(n.mapSize.width,n.mapSize.height),s=new Vs;s.minFilter=mt,s.magFilter=mt,s.image.width=n.mapSize.width,s.image.height=n.mapSize.height,s.compareFunction=Ka,i.depthTexture=s,n.camera.updateProjectionMatrix();const o=Gn("bias","float",n),a=Gn("normalBias","float",n);let c=Ft(n.matrix).mul(mE.add(ac.mul(a)));c=c.xyz.div(c.w);const l=c.x.greaterThanEqual(0).and(c.x.lessThanEqual(1)).and(c.y.greaterThanEqual(0)).and(c.y.lessThanEqual(1)).and(c.z.lessThanEqual(1));let u=c.z.add(o);e.renderer.coordinateSystem===wr&&(u=u.mul(2).sub(1)),c=X(c.x,c.y.oneMinus(),u),t=((d,f,g)=>Cn(d,f).compare(g))(s,c.xy,c.z),this.rtt=i,this.colorNode=this.colorNode.mul(l.mix(1,t)),this.shadowNode=t,this.updateBeforeType=gt.RENDER}}setup(e){this.light.castShadow?this.setupShadow(e):this.shadowNode!==null&&this.disposeShadow()}updateShadow(e){const{rtt:t,light:n}=this,{renderer:i,scene:s}=e,o=s.overrideMaterial;s.overrideMaterial=qc,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n);const a=i.getRenderTarget(),c=i.getRenderObjectFunction();i.setRenderObjectFunction((l,...u)=>{l.castShadow===!0&&i.renderObject(l,...u)}),i.setRenderTarget(t),i.render(s,n.shadow.camera),i.setRenderTarget(a),i.setRenderObjectFunction(c),s.overrideMaterial=o}disposeShadow(){this.rtt.dispose(),this.shadowNode=null,this.rtt=null,this.colorNode=this._defaultColorNode}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(){const{light:e}=this;this.color.copy(e.color).multiplyScalar(e.intensity)}}Z("AnalyticLightNode",ks);const ka=new WeakMap,bE=r=>r.sort((e,t)=>e.id-t.id);class wp extends we{constructor(e=[]){super("vec3"),this.totalDiffuseNode=X().temp("totalDiffuse"),this.totalSpecularNode=X().temp("totalSpecular"),this.outgoingLightNode=X().temp("outgoingLight"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}getHash(){if(this._hash===null){const e=[];for(const t of this.lightNodes)e.push(t.getHash());this._hash="lights-"+e.join(",")}return this._hash}setup(e){const t=e.context,n=t.lightingModel;let i=this.outgoingLightNode;if(n){const{lightNodes:s,totalDiffuseNode:o,totalSpecularNode:a}=this;t.outgoingLight=i;const c=e.addStack();n.start(t,c,e);for(const m of s)m.build(e);n.indirectDiffuse(t,c,e),n.indirectSpecular(t,c,e),n.ambientOcclusion(t,c,e);const{backdrop:l,backdropAlpha:u}=t,{directDiffuse:h,directSpecular:d,indirectDiffuse:f,indirectSpecular:g}=t.reflectedLight;let _=h.add(f);l!==null&&(_=X(u!==null?u.mix(_,l):l)),o.assign(_),a.assign(d.add(g)),i.assign(o.add(a)),n.finish(t,c,e),i=i.bypass(e.removeStack())}return i}_getLightNodeById(e){for(const t of this.lightNodes)if(t.isAnalyticLightNode&&t.light.id===e)return t;return null}fromLights(e=[]){const t=[];e=bE(e);for(const n of e){let i=this._getLightNodeById(n.id);if(i===null){const s=n.constructor,o=ka.has(s)?ka.get(s):ks;i=Me(new o(n))}t.push(i)}return this.lightNodes=t,this._hash=null,this}}const AE=G(wp);function Fr(r,e){if(ka.has(r)){console.warn(`Redefinition of light node ${e.type}`);return}if(typeof r!="function")throw new Error(`Light ${r.name} is not a class`);if(typeof e!="function"||!e.type)throw new Error(`Light node ${e.type} is not a class`);ka.set(r,e)}class Np extends lc{constructor(e=null){super(),this.aoNode=e}setup(e){const n=this.aoNode.x.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}Z("AONode",Np);class Cp extends Du{constructor(e,t=null,n=null,i=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=i,this._context=null}getContext(){const{backdropNode:e,backdropAlphaNode:t}=this,n=X().temp("directDiffuse"),i=X().temp("directSpecular"),s=X().temp("indirectDiffuse"),o=X().temp("indirectSpecular"),a={directDiffuse:n,directSpecular:i,indirectDiffuse:s,indirectSpecular:o};return{radiance:X().temp("radiance"),irradiance:X().temp("irradiance"),iblIrradiance:X().temp("iblIrradiance"),ambientOcclusion:C(1).temp("ambientOcclusion"),reflectedLight:a,backdrop:e,backdropAlpha:t}}setup(e){return this.context=this._context||(this._context=this.getContext()),this.context.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}}const Lp=G(Cp);F("lightingContext",Lp);Z("LightingContextNode",Cp);class Pp extends wt{constructor(e=xp){super("vec2"),this.dirNode=e}setup(){const e=this.dirNode,t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.negate().clamp(-1,1).asin().mul(1/Math.PI).add(.5);return Ie(t,n)}}const uc=G(Pp);Z("EquirectUVNode",Pp);class Up extends we{constructor(e,t=null){super("float"),this.textureNode=e,this.roughnessNode=t}setup(){const{textureNode:e,roughnessNode:t}=this,n=Gu(e),i=t.mul(t).mul(Math.PI).div(t.add(1));return n.add(i.log2()).clamp(0,n)}}const RE=G(Up);Z("SpecularMIPLevelNode",Up);const ud=new WeakMap;class Dp extends lc{constructor(e=null){super(),this.envNode=e}setup(e){let t=this.envNode;if(t.isTextureNode&&t.value.isCubeTexture!==!0){let c=ud.get(t.value);if(c===void 0){const l=t.value,u=e.renderer,h=e.getCubeRenderTarget(512).fromEquirectangularTexture(u,l);c=Ro(h.texture),ud.set(t.value,c)}t=c}const n=Gn("envMapIntensity","float",e.material),i=bi(t,hd(Jr,Gt)).mul(n),s=bi(t,wE(jM)).mul(Math.PI).mul(n),o=Fa(i);e.context.radiance.addAssign(o),e.context.iblIrradiance.addAssign(s);const a=e.context.lightingModel.clearcoatRadiance;if(a){const c=bi(t,hd(Oa,hr)).mul(n),l=Fa(c);a.addAssign(l)}}}const hd=(r,e)=>{let t=null,n=null;return{getUV:i=>{let s=null;return t===null&&(t=en.negate().reflect(e),t=r.mul(r).mix(t,e).normalize(),t=t.transformDirection(ds)),i.isCubeTextureNode?s=t:i.isTextureNode&&(n===null&&(n=uc(t)),s=n),s},getTextureLevel:()=>r,getTextureLevelAlgorithm:(i,s)=>RE(i,s)}},wE=r=>{let e=null;return{getUV:t=>{let n=null;return t.isCubeTextureNode?n=r:t.isTextureNode&&(e===null&&(e=uc(r),e=Ie(e.x,e.y.oneMinus())),n=e),n},getTextureLevel:t=>Gu(t)}};Z("EnvironmentNode",Dp);let Yc,Kc;class ut extends we{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===ut.VIEWPORT?"vec4":"vec2"}getUpdateType(){let e=gt.NONE;return(this.scope===ut.RESOLUTION||this.scope===ut.VIEWPORT)&&(e=gt.FRAME),this.updateType=e,e}update({renderer:e}){this.scope===ut.VIEWPORT?e.getViewport(Kc):e.getDrawingBufferSize(Yc)}setup(){const e=this.scope;if(e===ut.COORDINATE)return;let t=null;if(e===ut.RESOLUTION)t=Ft(Yc||(Yc=new Be));else if(e===ut.VIEWPORT)t=Ft(Kc||(Kc=new ot));else{t=NE.div(dd);let n=t.x,i=t.y;/bottom/i.test(e)&&(i=i.oneMinus()),/right/i.test(e)&&(n=n.oneMinus()),t=Ie(n,i)}return t}generate(e){if(this.scope===ut.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties(dd).outputNode.build(e);t=`${e.getType("vec2")}( ${t}.x, ${n}.y - ${t}.y )`}return t}return super.generate(e)}}ut.COORDINATE="coordinate";ut.RESOLUTION="resolution";ut.VIEWPORT="viewport";ut.TOP_LEFT="topLeft";ut.BOTTOM_LEFT="bottomLeft";ut.TOP_RIGHT="topRight";ut.BOTTOM_RIGHT="bottomRight";const NE=oe(ut,ut.COORDINATE),dd=oe(ut,ut.RESOLUTION),vr=oe(ut,ut.VIEWPORT),Wu=oe(ut,ut.TOP_LEFT),CE=oe(ut,ut.BOTTOM_LEFT);oe(ut,ut.TOP_RIGHT);oe(ut,ut.BOTTOM_RIGHT);Z("ViewportNode",ut);const $r=new Be;class Go extends Ir{constructor(e=Wu,t=null,n=null){n===null&&(n=new vf,n.minFilter=Wi),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=gt.FRAME}updateBefore(e){const t=e.renderer;t.getDrawingBufferSize($r);const n=this.value;(n.image.width!==$r.width||n.image.height!==$r.height)&&(n.image.width=$r.width,n.image.height=$r.height,n.needsUpdate=!0);const i=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=i}clone(){return new this.constructor(this.uvNode,this.levelNode,this.value)}}const LE=G(Go),PE=G(Go,null,null,{generateMipmaps:!0});F("viewportTexture",LE);F("viewportMipTexture",PE);Z("ViewportTextureNode",Go);let rr=null;class Ip extends Go{constructor(e=Wu,t=null){rr===null&&(rr=new Vs,rr.minFilter=Rr,rr.type=ei,rr.format=ii),super(e,t,rr)}}const Fp=G(Ip);F("viewportDepthTexture",Fp);Z("ViewportDepthTextureNode",Ip);class ln extends we{constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===ln.DEPTH_PIXEL?e.getFragDepth():super.generate(e)}setup(){const{scope:e}=this;let t=null;if(e===ln.DEPTH)t=Nl(Ni.z,Wc,Xc);else if(e===ln.DEPTH_TEXTURE){const n=this.valueNode||Fp(),i=Op(n,Wc,Xc);t=Nl(i,Wc,Xc)}else e===ln.DEPTH_PIXEL&&this.valueNode!==null&&(t=Bp().assign(this.valueNode));return t}}const Nl=(r,e,t)=>r.add(e).div(e.sub(t)),Op=(r,e,t)=>e.mul(t).div(t.sub(e).mul(r).sub(t));ln.DEPTH="depth";ln.DEPTH_TEXTURE="depthTexture";ln.DEPTH_PIXEL="depthPixel";const Bp=G(ln,ln.DEPTH_PIXEL);oe(ln,ln.DEPTH);G(ln,ln.DEPTH_TEXTURE);const Vp=oe(ln,ln.DEPTH_PIXEL);Vp.assign=r=>Bp(r);Z("ViewportDepthNode",ln);const Cl=new Map;class bn extends as{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.type,this.forceSinglePass=!1,this.fog=!0,this.lights=!0,this.normals=!0,this.colorSpaced=!0,this.lightsNode=null,this.envNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.depthNode=null,this.outputNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+Af(this)}build(e){this.setup(e)}setup(e){e.addStack(),e.stack.outputNode=this.vertexNode||this.setupPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack();let t;if(this.fragmentNode===null){this.depthWrite===!0&&this.setupDepth(e),this.normals===!0&&this.setupNormal(e),this.setupDiffuseColor(e),this.setupVariants(e);const n=this.setupLighting(e);t=this.setupOutput(e,ct(n,mn.a)),zT.assign(t),this.outputNode!==null&&(t=this.outputNode)}else t=this.setupOutput(e,this.fragmentNode);e.stack.outputNode=t,e.addFlow("fragment",e.removeStack())}setupDepth(e){const{renderer:t}=e;let n=this.depthNode;n===null&&t.logarithmicDepthBuffer===!0&&(n=wl().w.add(1).log2().mul(KM).mul(.5)),n!==null&&Vp.assign(n).append()}setupPosition(e){const{object:t}=e,n=t.geometry;e.addStack(),(n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&ME(t).append(),t.isSkinnedMesh===!0&&yE(t).append(),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&e.isAvailable("instance")===!0&&vE(t).append(),this.positionNode!==null&&Ln.assign(this.positionNode);const i=wl();return e.context.vertex=e.removeStack(),e.context.mvp=i,i}setupDiffuseColor({geometry:e}){let t=this.colorNode?ct(this.colorNode):Ao;this.vertexColors===!0&&e.hasAttribute("color")&&(t=ct(t.xyz.mul(Mn("color","vec3")),t.a)),mn.assign(t);const n=this.opacityNode?C(this.opacityNode):mp;if(mn.a.assign(mn.a.mul(n)),this.alphaTestNode!==null||this.alphaTest>0){const i=this.alphaTestNode!==null?C(this.alphaTestNode):ZM;mn.a.lessThanEqual(i).discard()}}setupVariants(){}setupNormal(){if(this.flatShading===!0){const e=Ni.dFdx().cross(Ni.dFdy()).normalize();Gt.assign(e)}else{const e=this.normalNode?X(this.normalNode):sE;Gt.assign(e)}}getEnvNode(e){let t=null;return this.envNode?t=this.envNode:this.envMap?t=this.envMap.isCubeTexture?Ro(this.envMap):Cn(this.envMap):e.environmentNode&&(t=e.environmentNode),t}setupLights(e){const t=this.getEnvNode(e),n=[];t&&n.push(new Dp(t)),e.material.aoMap&&n.push(new Np(Cn(e.material.aoMap)));let i=this.lightsNode||e.lightsNode;return n.length>0&&(i=AE([...i.lightNodes,...n])),i}setupLightingModel(){}setupLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:i,emissiveNode:s}=this,a=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null;let c=mn.rgb;if(a&&a.hasLight!==!1){const l=this.setupLightingModel(e);c=Lp(a,l,n,i)}else n!==null&&(c=X(i!==null?Li(c,n,i):n));return(s&&s.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(c=c.add(X(s||JM))),c}setupOutput(e,t){const n=e.renderer,i=e.toneMappingNode;if(this.toneMapped===!0&&i&&(t=ct(i.context({color:t.rgb}),t.a)),this.fog===!0){const s=e.fogNode;s&&(t=ct(s.mixAssign(t.rgb),t.a))}if(this.colorSpaced===!0){const s=n.currentColorSpace;s!==Xn&&s!==gn&&(t=t.linearToColorSpace(s))}return t}setDefaultValues(e){for(const n in e){const i=e[n];this[n]===void 0&&(this[n]=i,i&&i.clone&&(this[n]=i.clone()))}Object.assign(this.defines,e.defines);const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=ci.prototype.toJSON.call(this,e),i=Da(this);n.inputNodes={};for(const{property:o,childNode:a}of i)n.inputNodes[o]=a.toJSON(e).uuid;function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}if(t){const o=s(e.textures),a=s(e.images),c=s(e.nodes);o.length>0&&(n.textures=o),a.length>0&&(n.images=a),c.length>0&&(n.nodes=c)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.depthNode=e.depthNode,this.outputNode=e.outputNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=Xu(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const i in e)n[i]=e[i];return n}}function $n(r,e){if(typeof e!="function"||!r)throw new Error(`Node material ${r} is not a class`);if(Cl.has(r)){console.warn(`Redefinition of node material ${r}`);return}Cl.set(r,e),e.type=r}function Xu(r){const e=Cl.get(r);if(e!==void 0)return new e}$n("NodeMaterial",bn);class Hs{constructor(e,t=null){this.name=e,this.value=t,this.boundary=0,this.itemSize=0,this.offset=0}setValue(e){this.value=e}getValue(){return this.value}}class UE extends Hs{constructor(e,t=0){super(e,t),this.isFloatUniform=!0,this.boundary=4,this.itemSize=1}}class DE extends Hs{constructor(e,t=new Be){super(e,t),this.isVector2Uniform=!0,this.boundary=8,this.itemSize=2}}class IE extends Hs{constructor(e,t=new U){super(e,t),this.isVector3Uniform=!0,this.boundary=16,this.itemSize=3}}class FE extends Hs{constructor(e,t=new ot){super(e,t),this.isVector4Uniform=!0,this.boundary=16,this.itemSize=4}}class OE extends Hs{constructor(e,t=new Pe){super(e,t),this.isColorUniform=!0,this.boundary=16,this.itemSize=3}}class BE extends Hs{constructor(e,t=new Je){super(e,t),this.isMatrix3Uniform=!0,this.boundary=48,this.itemSize=12}}class VE extends Hs{constructor(e,t=new Rt){super(e,t),this.isMatrix4Uniform=!0,this.boundary=64,this.itemSize=16}}class GE extends UE{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class zE extends DE{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class kE extends IE{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class HE extends FE{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class WE extends OE{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class XE extends BE{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class $E extends VE{constructor(e){super(e.name,e.value),this.nodeUniform=e}getValue(){return this.nodeUniform.value}}class $u extends we{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}generate(e){const t=this.getNodeType(e),n={tempWrite:!1},{ifNode:i,elseNode:s}=this,o=i.getNodeType(e)!=="void"||s&&s.getNodeType(e)!=="void",a=o?Jn(t).build(e):"",c=bi(this.condNode).build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${c} ) {

`).addFlowTab();let l=bi(this.ifNode,n).build(e,t);if(l=o?a+" = "+l+";":l,e.removeFlowTab().addFlowCode(e.tab+"	"+l+`

`+e.tab+"}"),s!==null){e.addFlowCode(` else {

`).addFlowTab();let u=bi(s,n).build(e,t);u=a?a+" = "+u+";":u,e.removeFlowTab().addFlowCode(e.tab+"	"+u+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return a}}const ss=G($u);F("cond",ss);Z("CondNode",$u);class Gp extends we{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(e),this}if(e,t){const n=new Qr(t);return this._currentCond=ss(e,n),this.add(this._currentCond)}elseif(e,t){const n=new Qr(t),i=ss(e,n);return this._currentCond.elseNode=i,this._currentCond=i,this}else(e){return this._currentCond.elseNode=new Qr(e),this}build(e,...t){const n=Of();Ia(this);for(const i of this.nodes)i.build(e,"void");return Ia(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}const fd=G(Gp);Z("StackNode",Gp);class qE extends cf{constructor(e=1,t={}){super(e,t),this.isCubeRenderTarget=!0}fromEquirectangularTexture(e,t){const n=t.minFilter,i=t.generateMipmaps;t.generateMipmaps=!0,this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s=new Xi(5,5,5),o=uc(xp),a=Xu("MeshBasicNodeMaterial");a.colorNode=Cn(t,o,0),a.side=$t,a.blending=ti;const c=new an(s,a),l=new Eu;return l.add(c),t.minFilter===Wi&&(t.minFilter=Tn),new af(1,10,this).update(e,l),t.minFilter=n,t.currentGenerateMipmaps=i,c.geometry.dispose(),c.material.dispose(),this}}const pd=new Us,YE=new Map([[2,"vec2"],[3,"vec3"],[4,"vec4"],[9,"mat3"],[16,"mat4"]]),KE=new Map([[Int8Array,"int"],[Int16Array,"int"],[Int32Array,"int"],[Uint8Array,"uint"],[Uint16Array,"uint"],[Uint32Array,"uint"],[Float32Array,"float"]]),pa=r=>(r=Number(r),r+(r%1?"":".0"));class zp{constructor(e,t,n,i=null,s=null){this.object=e,this.material=s||e&&e.material||null,this.geometry=e&&e.geometry||null,this.renderer=t,this.parser=n,this.scene=i,this.nodes=[],this.updateNodes=[],this.updateBeforeNodes=[],this.hashNodes={},this.lightsNode=null,this.environmentNode=null,this.fogNode=null,this.toneMappingNode=null,this.vertexShader=null,this.fragmentShader=null,this.computeShader=null,this.flowNodes={vertex:[],fragment:[],compute:[]},this.flowCode={vertex:"",fragment:"",compute:[]},this.uniforms={vertex:[],fragment:[],compute:[],index:0},this.structs={vertex:[],fragment:[],compute:[],index:0},this.bindings={vertex:[],fragment:[],compute:[]},this.bindingsOffset={vertex:0,fragment:0,compute:0},this.bindingsArray=null,this.attributes=[],this.bufferAttributes=[],this.varyings=[],this.codes={},this.vars={},this.flow={code:""},this.chaining=[],this.stack=fd(),this.stacks=[],this.tab="	",this.currentFunctionNode=null,this.context={keywords:new VT,material:this.material},this.cache=new Xf,this.globalCache=this.cache,this.flowsData=new WeakMap,this.shaderStage=null,this.buildStage=null}getRenderTarget(e,t,n){return new yo(e,t,n)}getCubeRenderTarget(e,t){return new qE(e,t)}includes(e){return this.nodes.includes(e)}_getSharedBindings(e){const t=[];for(const n of e)if(n.shared===!0){const i=n.getNodes();let s=pd.get(i);s===void 0&&(pd.set(i,n),s=n),t.push(s)}else t.push(n);return t}getBindings(){let e=this.bindingsArray;if(e===null){const t=this.bindings;this.bindingsArray=e=this._getSharedBindings(this.material!==null?[...t.vertex,...t.fragment]:t.compute)}return e}setHashNode(e,t){this.hashNodes[t]=e}addNode(e){this.nodes.includes(e)===!1&&(this.nodes.push(e),this.setHashNode(e,e.getHash(this)))}buildUpdateNodes(){for(const e of this.nodes){const t=e.getUpdateType(),n=e.getUpdateBeforeType();t!==gt.NONE&&this.updateNodes.push(e.getSelf()),n!==gt.NONE&&this.updateBeforeNodes.push(e)}}get currentNode(){return this.chaining[this.chaining.length-1]}addChain(e){this.chaining.push(e)}removeChain(e){if(this.chaining.pop()!==e)throw new Error("NodeBuilder: Invalid node chaining!")}getMethod(e){return e}getNodeFromHash(e){return this.hashNodes[e]}addFlow(e,t){return this.flowNodes[e].push(t),t}setContext(e){this.context=e}getContext(){return this.context}setCache(e){this.cache=e}getCache(){return this.cache}isAvailable(){return!1}getVertexIndex(){console.warn("Abstract function.")}getInstanceIndex(){console.warn("Abstract function.")}getFrontFacing(){console.warn("Abstract function.")}getFragCoord(){console.warn("Abstract function.")}isFlipY(){return!1}generateTexture(){console.warn("Abstract function.")}generateTextureLod(){console.warn("Abstract function.")}generateConst(e,t=null){if(t===null&&(e==="float"||e==="int"||e==="uint"?t=0:e==="bool"?t=!1:e==="color"?t=new Pe:e==="vec2"?t=new Be:e==="vec3"?t=new U:e==="vec4"&&(t=new ot)),e==="float")return pa(t);if(e==="int")return`${Math.round(t)}`;if(e==="uint")return t>=0?`${Math.round(t)}u`:"0u";if(e==="bool")return t?"true":"false";if(e==="color")return`${this.getType("vec3")}( ${pa(t.r)}, ${pa(t.g)}, ${pa(t.b)} )`;const n=this.getTypeLength(e),i=this.getComponentType(e),s=o=>this.generateConst(i,o);if(n===2)return`${this.getType(e)}( ${s(t.x)}, ${s(t.y)} )`;if(n===3)return`${this.getType(e)}( ${s(t.x)}, ${s(t.y)}, ${s(t.z)} )`;if(n===4)return`${this.getType(e)}( ${s(t.x)}, ${s(t.y)}, ${s(t.z)}, ${s(t.w)} )`;if(n>4&&t&&(t.isMatrix3||t.isMatrix4))return`${this.getType(e)}( ${t.elements.map(s).join(", ")} )`;if(n>4)return`${this.getType(e)}()`;throw new Error(`NodeBuilder: Type '${e}' not found in generate constant attempt.`)}getType(e){return e==="color"?"vec3":e}generateMethod(e){return e}hasGeometryAttribute(e){return this.geometry&&this.geometry.getAttribute(e)!==void 0}getAttribute(e,t){const n=this.attributes;for(const s of n)if(s.name===e)return s;const i=new rd(e,t);return n.push(i),i}getPropertyName(e){return e.name}isVector(e){return/vec\d/.test(e)}isMatrix(e){return/mat\d/.test(e)}isReference(e){return e==="void"||e==="property"||e==="sampler"||e==="texture"||e==="cubeTexture"}needsColorSpaceToLinear(){return!1}getTextureEncodingFromMap(e){return console.warn("THREE.NodeBuilder: Method .getTextureEncodingFromMap replaced by .getTextureColorSpaceFromMap in r152+."),this.getTextureColorSpaceFromMap(e)===Ee?is:au}getTextureColorSpaceFromMap(e){let t;return e&&e.isTexture?t=e.colorSpace:e&&e.isWebGLRenderTarget?t=e.texture.colorSpace:t=gn,t}getComponentType(e){if(e=this.getVectorType(e),e==="float"||e==="bool"||e==="int"||e==="uint")return e;const t=/(b|i|u|)(vec|mat)([2-4])/.exec(e);return t===null?null:t[1]==="b"?"bool":t[1]==="i"?"int":t[1]==="u"?"uint":"float"}getVectorType(e){return e==="color"?"vec3":e==="texture"?"vec4":e}getTypeFromLength(e,t="float"){if(e===1)return t;const n=YE.get(e);return(t==="float"?"":t[0])+n}getTypeFromArray(e){return KE.get(e.constructor)}getTypeFromAttribute(e){let t=e;e.isInterleavedBufferAttribute&&(t=e.data);const n=t.array,i=e.itemSize,s=e.normalized;let o;return!(e instanceof sf)&&s!==!0&&(o=this.getTypeFromArray(n)),this.getTypeFromLength(i,o)}getTypeLength(e){const t=this.getVectorType(e),n=/vec([2-4])/.exec(t);return n!==null?Number(n[1]):t==="float"||t==="bool"||t==="int"||t==="uint"?1:/mat3/.test(e)===!0?9:/mat4/.test(e)===!0?16:0}getVectorFromMatrix(e){return e.replace("mat","vec")}changeComponentType(e,t){return this.getTypeFromLength(this.getTypeLength(e),t)}getIntegerType(e){const t=this.getComponentType(e);return t==="int"||t==="uint"?e:this.changeComponentType(e,"int")}addStack(){return this.stack=fd(this.stack),this.stacks.push(Of()||this.stack),Ia(this.stack),this.stack}removeStack(){const e=this.stack;return this.stack=e.parent,Ia(this.stacks.pop()),e}getDataFromNode(e,t=this.shaderStage,n=null){n=n===null?e.isGlobal(this)?this.globalCache:this.cache:n;let i=n.getNodeData(e);return i===void 0&&(i={},n.setNodeData(e,i)),i[t]===void 0&&(i[t]={}),i[t]}getNodeProperties(e,t="any"){const n=this.getDataFromNode(e,t);return n.properties||(n.properties={outputNode:null})}getBufferAttributeFromNode(e,t){const n=this.getDataFromNode(e);let i=n.bufferAttribute;if(i===void 0){const s=this.uniforms.index++;i=new rd("nodeAttribute"+s,t,e),this.bufferAttributes.push(i),n.bufferAttribute=i}return i}getStructTypeFromNode(e,t=this.shaderStage){const n=this.getDataFromNode(e,t);if(n.structType===void 0){const i=this.structs.index++;e.name=`StructType${i}`,this.structs[t].push(e),n.structType=e}return e}getUniformFromNode(e,t,n=this.shaderStage,i=null){const s=this.getDataFromNode(e,n,this.globalCache);let o=s.uniform;if(o===void 0){const a=this.uniforms.index++;o=new FT(i||"nodeUniform"+a,t,e),this.uniforms[n].push(o),s.uniform=o}return o}getVarFromNode(e,t=null,n=e.getNodeType(this),i=this.shaderStage){const s=this.getDataFromNode(e,i);let o=s.variable;if(o===void 0){const a=this.vars[i]||(this.vars[i]=[]);t===null&&(t="nodeVar"+a.length),o=new jf(t,n),a.push(o),s.variable=o}return o}getVaryingFromNode(e,t=null,n=e.getNodeType(this)){const i=this.getDataFromNode(e,"any");let s=i.varying;if(s===void 0){const o=this.varyings,a=o.length;t===null&&(t="nodeVarying"+a),s=new OT(t,n),o.push(s),i.varying=s}return s}getCodeFromNode(e,t,n=this.shaderStage){const i=this.getDataFromNode(e);let s=i.code;if(s===void 0){const o=this.codes[n]||(this.codes[n]=[]),a=o.length;s=new BT("nodeCode"+a,t),o.push(s),i.code=s}return s}addLineFlowCode(e){return e===""?this:(e=this.tab+e,/;\s*$/.test(e)||(e=e+`;
`),this.flow.code+=e,this)}addFlowCode(e){return this.flow.code+=e,this}addFlowTab(){return this.tab+="	",this}removeFlowTab(){return this.tab=this.tab.slice(0,-1),this}getFlowData(e){return this.flowsData.get(e)}flowNode(e){const t=e.getNodeType(this),n=this.flowChildNode(e,t);return this.flowsData.set(e,n),n}buildFunctionNode(e){const t=new Jf,n=this.currentFunctionNode;return this.currentFunctionNode=t,t.code=this.buildFunctionCode(e),this.currentFunctionNode=n,t}flowShaderNode(e){const t=e.layout;let n;if(e.isArrayInput){n=[];for(const o of t.inputs)n.push(new bl(o.type,o.name))}else{n={};for(const o of t.inputs)n[o.name]=new bl(o.type,o.name)}e.layout=null;const i=e.call(n),s=this.flowStagesNode(i,t.type);return e.layout=t,s}flowStagesNode(e,t=null){const n=this.flow,i=this.vars,s=this.buildStage,o={code:""};this.flow=o,this.vars={};for(const a of ed)this.setBuildStage(a),o.result=e.build(this,t);return o.vars=this.getVars(this.shaderStage),this.flow=n,this.vars=i,this.setBuildStage(s),o}getFunctionOperator(){return null}flowChildNode(e,t=null){const n=this.flow,i={code:""};return this.flow=i,i.result=e.build(this,t),this.flow=n,i}flowNodeFromShaderStage(e,t,n=null,i=null){const s=this.shaderStage;this.setShaderStage(e);const o=this.flowChildNode(t,n);return i!==null&&(o.code+=`${this.tab+i} = ${o.result};
`),this.flowCode[e]=this.flowCode[e]+o.code,this.setShaderStage(s),o}getAttributesArray(){return this.attributes.concat(this.bufferAttributes)}getAttributes(){console.warn("Abstract function.")}getVaryings(){console.warn("Abstract function.")}getVar(e,t){return`${this.getType(e)} ${t}`}getVars(e){let t="";const n=this.vars[e];if(n!==void 0)for(const i of n)t+=`${this.getVar(i.type,i.name)}; `;return t}getUniforms(){console.warn("Abstract function.")}getCodes(e){const t=this.codes[e];let n="";if(t!==void 0)for(const i of t)n+=i.code+`
`;return n}getHash(){return this.vertexShader+this.fragmentShader+this.computeShader}setShaderStage(e){this.shaderStage=e}getShaderStage(){return this.shaderStage}setBuildStage(e){this.buildStage=e}getBuildStage(){return this.buildStage}buildCode(){console.warn("Abstract function.")}build(){for(const e of ed){this.setBuildStage(e),this.context.vertex&&this.context.vertex.isNode&&this.flowNodeFromShaderStage("vertex",this.context.vertex);for(const t of Yy){this.setShaderStage(t);const n=this.flowNodes[t];for(const i of n)e==="generate"?this.flowNode(i):i.build(this)}}return this.setBuildStage(null),this.setShaderStage(null),this.buildCode(),this.buildUpdateNodes(),this}getNodeUniform(e,t){if(t==="float")return new GE(e);if(t==="vec2")return new zE(e);if(t==="vec3")return new kE(e);if(t==="vec4")return new HE(e);if(t==="color")return new WE(e);if(t==="mat3")return new XE(e);if(t==="mat4")return new $E(e);throw new Error(`Uniform "${t}" not declared.`)}createNodeMaterial(e){return Xu(e)}getPrimitiveType(e){let t;return e[0]==="i"?t="int":e[0]==="u"?t="uint":t="float",t}format(e,t,n){if(t=this.getVectorType(t),n=this.getVectorType(n),t===n||n===null||this.isReference(n))return e;const i=this.getTypeLength(t),s=this.getTypeLength(n);return i>4||s>4||s===0?e:i===s?`${this.getType(n)}( ${e} )`:i>s?this.format(`${e}.${"xyz".slice(0,s)}`,this.getTypeFromLength(s,this.getComponentType(t)),n):s===4&&i>1?`${this.getType(n)}( ${this.format(e,t,"vec3")}, 1.0 )`:i===2?`${this.getType(n)}( ${this.format(e,t,"vec2")}, 0.0 )`:(i===1&&s>1&&t[0]!==n[0]&&(e=`${this.getType(this.getPrimitiveType(n))}( ${e} )`),`${this.getType(n)}( ${e} )`)}getSignature(){return`// Three.js r${Co} - NodeMaterial System
`}}class md{constructor(){this.time=0,this.deltaTime=0,this.frameId=0,this.renderId=0,this.startTime=null,this.updateMap=new WeakMap,this.updateBeforeMap=new WeakMap,this.renderer=null,this.material=null,this.camera=null,this.object=null,this.scene=null}_getMaps(e,t){let n=e.get(t);return n===void 0&&(n={renderMap:new WeakMap,frameMap:new WeakMap},e.set(t,n)),n}updateBeforeNode(e){const t=e.getUpdateBeforeType(),n=e.updateReference(this);if(t===gt.FRAME){const{frameMap:i}=this._getMaps(this.updateBeforeMap,n);i.get(e)!==this.frameId&&(i.set(e,this.frameId),e.updateBefore(this))}else if(t===gt.RENDER){const{renderMap:i}=this._getMaps(this.updateBeforeMap,n);i.get(e)!==this.renderId&&(i.set(e,this.renderId),e.updateBefore(this))}else t===gt.OBJECT&&e.updateBefore(this)}updateNode(e){const t=e.getUpdateType(),n=e.updateReference(this);if(t===gt.FRAME){const{frameMap:i}=this._getMaps(this.updateMap,n);i.get(e)!==this.frameId&&(i.set(e,this.frameId),e.update(this))}else if(t===gt.RENDER){const{renderMap:i}=this._getMaps(this.updateMap,n);i.get(e)!==this.renderId&&(i.set(e,this.renderId),e.update(this))}else t===gt.OBJECT&&e.update(this)}update(){this.frameId++,this.lastTime===void 0&&(this.lastTime=performance.now()),this.deltaTime=(performance.now()-this.lastTime)/1e3,this.lastTime=performance.now(),this.time+=this.deltaTime}}class qu{constructor(e,t,n=null,i="",s=!1){this.type=e,this.name=t,this.count=n,this.qualifier=i,this.isConst=s}}qu.isNodeFunctionInput=!0;class kp extends we{constructor(e){super(),this.types=e,this.isStructTypeNode=!0}getMemberTypes(){return this.types}}Z("StructTypeNode",kp);class Hp extends we{constructor(...e){super(),this.isOutputStructNode=!0,this.members=e}setup(e){super.setup(e);const t=this.members,n=[];for(let i=0;i<t.length;i++)n.push(t[i].getNodeType(e));this.nodeType=e.getStructTypeFromNode(new kp(n)).name}generate(e,t){const n=e.getVarFromNode(this);n.isOutputStructVar=!0;const i=e.getPropertyName(n),s=this.members,o=i!==""?i+".":"";for(let a=0;a<s.length;a++){const c=s[a].build(e,t);e.addLineFlowCode(`${o}m${a} = ${c}`)}return i}}G(Hp);Z("OutputStructNode",Hp);class Wp extends we{constructor(e){super(),this.seedNode=e}setup(){const e=this.seedNode.uint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).float().mul(1/2**32)}}const jE=G(Wp);F("hash",jE);Z("HashNode",Wp);let jc;class Xp extends $u{constructor(e){jc=jc||Vu("discard"),super(e,jc)}}const ZE=G(Xp),QE=r=>ZE(r).append();F("discard",QE);Z("DiscardNode",Xp);class $p extends we{constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){const t=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let i=null,s=-1;for(const o of this.functionNodes){const c=o.shaderNode.layout;if(c===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const l=c.inputs;if(t.length===l.length){let u=0;for(let h=0;h<t.length;h++){const d=t[h],f=l[h];d.getNodeType(e)===f.type?u++:u=0}u>s&&(i=o,s=u)}}this._candidateFnCall=n=i(...t)}return n}}const JE=G($p),ui=r=>(...e)=>JE(r,...e);Z("FunctionOverloadingNode",$p);class qp extends we{constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode(105+e)}getProperties(e){const t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;const n={};for(let i=0,s=this.params.length-1;i<s;i++){const o=this.params[i],a=o.isNode!==!0&&o.name||this.getVarName(i),c=o.isNode!==!0&&o.type||"int";n[a]=Vu(a,c)}return t.returnsNode=this.params[this.params.length-1](n,e.addStack(),e),t.stackNode=e.removeStack(),t}getNodeType(e){const{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){const t=this.getProperties(e),n={tempWrite:!1},i=this.params,s=t.stackNode;for(let c=0,l=i.length-1;c<l;c++){const u=i[c];let h=null,d=null,f=null,g=null,_=null,m=null;u.isNode?(g="int",f=this.getVarName(c),h="0",d=u.build(e,g),_="<"):(g=u.type||"int",f=u.name||this.getVarName(c),h=u.start,d=u.end,_=u.condition,m=u.update,typeof h=="number"?h=h.toString():h&&h.isNode&&(h=h.build(e,g)),typeof d=="number"?d=d.toString():d&&d.isNode&&(d=d.build(e,g)),h!==void 0&&d===void 0?(h=h+" - 1",d="0",_=">="):d!==void 0&&h===void 0&&(h="0",_="<"),_===void 0&&(Number(h)>Number(d)?_=">=":_="<"));const p={start:h,end:d},S=p.start,x=p.end;let E="",L="",A="";m||(g==="int"?_.includes("<")?m="++":m="--":_.includes("<")?m="+= 1":m="-= 1"),E+=e.getVar(g,f)+" = "+S,L+=f+" "+_+" "+x,A+=f+" "+m;const R=`for ( ${E}; ${L}; ${A} )`;e.addFlowCode((c===0?`
`:"")+e.tab+R+` {

`).addFlowTab()}const o=bi(s,n).build(e,"void"),a=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+o);for(let c=0,l=this.params.length-1;c<l;c++)e.addFlowCode((c===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),a}}const nn=(...r)=>Me(new qp(_r(r,"int"))).append();F("loop",(r,...e)=>Wf(r,nn(...e)));Z("LoopNode",qp);class Yp extends wt{constructor(){super("vec2")}setup(){const e=X(en.z,0,en.x.negate()).normalize(),t=en.cross(e);return Ie(e.dot(Gt),t.dot(Gt)).mul(.495).add(.5)}}oe(Yp);Z("MatcapUVNode",Yp);class Nn extends us{constructor(e=Nn.LOCAL,t=1,n=0){super(n),this.scope=e,this.scale=t,this.updateType=gt.FRAME}update(e){const t=this.scope,n=this.scale;t===Nn.LOCAL?this.value+=e.deltaTime*n:t===Nn.DELTA?this.value=e.deltaTime*n:t===Nn.FRAME?this.value=e.frameId:this.value=e.time*n}serialize(e){super.serialize(e),e.scope=this.scope,e.scale=this.scale}deserialize(e){super.deserialize(e),this.scope=e.scope,this.scale=e.scale}}Nn.LOCAL="local";Nn.GLOBAL="global";Nn.DELTA="delta";Nn.FRAME="frame";const eb=(r,e=0)=>Me(new Nn(Nn.LOCAL,r,e));oe(Nn,Nn.FRAME).uint();Z("TimerNode",Nn);class Wt extends we{constructor(e=Wt.SINE,t=eb()){super(),this.method=e,this.timeNode=t}getNodeType(e){return this.timeNode.getNodeType(e)}setup(){const e=this.method,t=Me(this.timeNode);let n=null;return e===Wt.SINE?n=t.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5):e===Wt.SQUARE?n=t.fract().round():e===Wt.TRIANGLE?n=t.add(.5).fract().mul(2).sub(1).abs():e===Wt.SAWTOOTH&&(n=t.fract()),n}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}Wt.SINE="sine";Wt.SQUARE="square";Wt.TRIANGLE="triangle";Wt.SAWTOOTH="sawtooth";G(Wt,Wt.SINE);G(Wt,Wt.SQUARE);G(Wt,Wt.TRIANGLE);G(Wt,Wt.SAWTOOTH);Z("OscNode",Wt);class Ci extends wt{constructor(e,t){super(),this.scope=e,this.node=t}getNodeType(e){return this.node.getNodeType(e)}setup(){const{scope:e,node:t}=this;let n=null;return e===Ci.DIRECTION_TO_COLOR?n=t.mul(.5).add(.5):e===Ci.COLOR_TO_DIRECTION&&(n=t.mul(2).sub(1)),n}}Ci.DIRECTION_TO_COLOR="directionToColor";Ci.COLOR_TO_DIRECTION="colorToDirection";const Kp=G(Ci,Ci.DIRECTION_TO_COLOR),tb=G(Ci,Ci.COLOR_TO_DIRECTION);F("directionToColor",Kp);F("colorToDirection",tb);Z("PackingNode",Ci);class Yu extends we{constructor(e,t,n,i=C(0),s=C(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=i,this.outHighNode=s,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:i,outHighNode:s,doClamp:o}=this;let a=e.sub(t).div(n.sub(t));return o===!0&&(a=a.clamp()),a.mul(s.sub(i)).add(i)}}const nb=G(Yu,null,null,{doClamp:!1}),ib=G(Yu);F("remap",nb);F("remapClamp",ib);Z("RemapNode",Yu);class jp extends wt{constructor(e,t,n=Ie(.5)){super("vec2"),this.uvNode=e,this.rotationNode=t,this.centerNode=n}setup(){const{uvNode:e,rotationNode:t,centerNode:n}=this,i=t.cos(),s=t.sin(),o=e.sub(n);return Ie(Ie(i,s).dot(o),Ie(s.negate(),i).dot(o)).add(n)}}const sb=G(jp);F("rotateUV",sb);Z("RotateUVNode",jp);class Zp extends we{constructor(e,t=hs(),n=C(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){const{frameNode:e,uvNode:t,countNode:n}=this,{width:i,height:s}=n,o=e.mod(i.mul(s)).floor(),a=o.mod(i),c=s.sub(o.add(1).div(i).ceil()),l=n.reciprocal(),u=Ie(a,c);return t.add(u).mul(l)}}G(Zp);Z("SpriteSheetUVNode",Zp);class Qp extends we{constructor(e,t=null,n=null,i=C(1),s=Ln,o=$i){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=i,this.positionNode=s,this.normalNode=o}setup(){const{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:i,positionNode:s,normalNode:o}=this;let a=o.abs().normalize();a=a.div(a.dot(X(1)));const c=s.yz.mul(i),l=s.zx.mul(i),u=s.xy.mul(i),h=e.value,d=t!==null?t.value:h,f=n!==null?n.value:h,g=Cn(h,c).mul(a.x),_=Cn(d,l).mul(a.y),m=Cn(f,u).mul(a.z);return oi(g,_,m)}}const rb=G(Qp),ob=(...r)=>rb(...r);F("triplanarTexture",ob);Z("TriplanarTexturesNode",Qp);class Xt extends we{constructor(e=Xt.LOCAL){super("vec3"),this.scope=e}getHash(){return`bitangent-${this.scope}`}generate(e){const t=this.scope;let n;t===Xt.GEOMETRY?n=Ga.cross(za):t===Xt.LOCAL?n=$i.cross(Hu):t===Xt.VIEW?n=cs.cross(cc):t===Xt.WORLD&&(n=ac.cross(SE));const i=n.mul(za.w).xyz;return ai(It(i)).build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Xt.GEOMETRY="geometry";Xt.LOCAL="local";Xt.VIEW="view";Xt.WORLD="world";oe(Xt,Xt.GEOMETRY);oe(Xt,Xt.LOCAL);const ab=oe(Xt,Xt.VIEW);oe(Xt,Xt.WORLD);const cb=ai(Gt.cross(Mp).mul(za.w));ai(cb.transformDirection(ds));Z("BitangentNode",Xt);const hc=1/6,Jp=r=>Lt(hc,Lt(r,Lt(r,r.negate().add(3)).sub(3)).add(1)),Ll=r=>Lt(hc,Lt(r,Lt(r,Lt(3,r).sub(6))).add(4)),em=r=>Lt(hc,Lt(r,Lt(r,Lt(-3,r).add(3)).add(3)).add(1)),Pl=r=>Lt(hc,Bu(r,3)),gd=r=>Jp(r).add(Ll(r)),_d=r=>em(r).add(Pl(r)),xd=r=>oi(-1,Ll(r).div(Jp(r).add(Ll(r)))),vd=r=>oi(1,Pl(r).div(em(r).add(Pl(r)))),Sd=(r,e,t)=>{const n=r.uvNode,i=Lt(n,e.zw).add(.5),s=Oo(i),o=Ou(i),a=gd(o.x),c=_d(o.x),l=xd(o.x),u=vd(o.x),h=xd(o.y),d=vd(o.y),f=Ie(s.x.add(l),s.y.add(h)).sub(.5).mul(e.xy),g=Ie(s.x.add(u),s.y.add(h)).sub(.5).mul(e.xy),_=Ie(s.x.add(l),s.y.add(d)).sub(.5).mul(e.xy),m=Ie(s.x.add(u),s.y.add(d)).sub(.5).mul(e.xy),p=gd(o.y).mul(oi(a.mul(r.uv(f).level(t)),c.mul(r.uv(g).level(t)))),S=_d(o.y).mul(oi(a.mul(r.uv(_).level(t)),c.mul(r.uv(m).level(t))));return p.add(S)},lb=(r,e)=>{const t=Ie(r.size(w(e))),n=Ie(r.size(w(e.add(1)))),i=Eo(1,t),s=Eo(1,n),o=Sd(r,ct(i,t),Oo(e)),a=Sd(r,ct(s,n),rp(e));return Ou(e).mix(o,a)};class tm extends wt{constructor(e,t=C(3)){super("vec4"),this.textureNode=e,this.blurNode=t}setup(){return lb(this.textureNode,this.blurNode)}}const ub=G(tm);F("bicubic",ub);Z("TextureBicubicNode",tm);class nm extends we{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}oe(nm);Z("PointUVNode",nm);class xi extends we{constructor(e=xi.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let i;return t===xi.BACKGROUND_BLURRINESS?i=Gn("backgroundBlurriness","float",n):t===xi.BACKGROUND_INTENSITY?i=Gn("backgroundIntensity","float",n):console.error("THREE.SceneNode: Unknown scope:",t),i}}xi.BACKGROUND_BLURRINESS="backgroundBlurriness";xi.BACKGROUND_INTENSITY="backgroundIntensity";const hb=oe(xi,xi.BACKGROUND_BLURRINESS),db=oe(xi,xi.BACKGROUND_INTENSITY);Z("SceneNode",xi);class fb extends ku{constructor(e,t,n=0){super(e,t,n),this.isStorageBufferNode=!0}getInputType(){return"storageBuffer"}}Z("StorageBufferNode",fb);class im extends Ir{constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStoreTextureNode=!0}getNodeType(){return"void"}}G(im);Z("TextureStoreNode",im);class pb extends Vo{constructor(e,t,n=null){super(e,t,n),this.userData=n}update(e){this.reference=this.userData!==null?this.userData:e.object.userData,super.update(e)}}Z("UserDataNode",pb);const mb=J(({base:r,blend:e})=>{const t=n=>e[n].lessThan(sp).cond(e[n],r[n].oneMinus().div(e[n]).oneMinus().max(0));return X(t("x"),t("y"),t("z"))}),gb=J(({base:r,blend:e})=>{const t=n=>e[n].equal(1).cond(e[n],r[n].div(e[n].oneMinus()).max(0));return X(t("x"),t("y"),t("z"))}),_b=J(({base:r,blend:e})=>{const t=n=>r[n].oneMinus().mul(e[n].oneMinus()).oneMinus();return X(t("x"),t("y"),t("z"))}),xb=J(({base:r,blend:e})=>{const t=n=>r[n].lessThan(.5).cond(r[n].mul(e[n],2),r[n].oneMinus().mul(e[n].oneMinus()).oneMinus());return X(t("x"),t("y"),t("z"))});class tn extends wt{constructor(e,t,n){super(),this.blendMode=e,this.baseNode=t,this.blendNode=n}setup(){const{blendMode:e,baseNode:t,blendNode:n}=this,i={base:t,blend:n};let s=null;return e===tn.BURN?s=mb(i):e===tn.DODGE?s=gb(i):e===tn.SCREEN?s=_b(i):e===tn.OVERLAY&&(s=xb(i)),s}}tn.BURN="burn";tn.DODGE="dodge";tn.SCREEN="screen";tn.OVERLAY="overlay";const vb=G(tn,tn.BURN),Sb=G(tn,tn.DODGE),yb=G(tn,tn.OVERLAY),Tb=G(tn,tn.SCREEN);F("burn",vb);F("dodge",Sb);F("overlay",yb);F("screen",Tb);Z("BlendModeNode",tn);class sm extends we{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){return e.getFrontFacing()}}const Mb=oe(sm),rm=C(Mb).mul(2).sub(1);Z("FrontFacingNode",sm);const Eb=J(({textureNode:r,bumpScale:e})=>{let t=r;if(t.isTextureNode!==!0&&t.traverse(o=>{o.isTextureNode===!0&&(t=o)}),t.isTextureNode!==!0)throw new Error("THREE.TSL: dHdxy_fwd() requires a TextureNode.");const n=C(r),i=t.uvNode||hs(),s=o=>r.cache().context({getUV:()=>o,forceUVContext:!0});return Ie(C(s(i.add(i.dFdx()))).sub(n),C(s(i.add(i.dFdy()))).sub(n)).mul(e)}),bb=J(r=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=r,i=e.dFdx().normalize(),s=e.dFdy().normalize(),o=t,a=s.cross(o),c=o.cross(i),l=i.dot(a).mul(rm),u=l.sign().mul(n.x.mul(a).add(n.y.mul(c)));return l.abs().mul(t).sub(u).normalize()});class om extends wt{constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=Eb({textureNode:this.textureNode,bumpScale:e});return bb({surf_pos:Ni,surf_norm:cs,dHdxy:t})}}const Ab=G(om);F("bumpMap",Ab);Z("BumpMapNode",om);const Rb=J(({color:r,adjustment:e})=>e.mix(Db(r.rgb),r.rgb)),wb=J(({color:r,adjustment:e})=>{const t=oi(r.r,r.g,r.b).div(3),n=r.r.max(r.g.max(r.b)),i=n.sub(t).mul(e).mul(-3);return Li(r.rgb,n,i)}),Nb=J(({color:r,adjustment:e})=>{const t=X(.57735,.57735,.57735),n=e.cos();return X(r.rgb.mul(n).add(t.cross(r.rgb).mul(e.sin()).add(t.mul(Bo(t,r.rgb).mul(n.oneMinus())))))});class Pn extends wt{constructor(e,t,n=C(1)){super("vec3"),this.method=e,this.colorNode=t,this.adjustmentNode=n}setup(){const{method:e,colorNode:t,adjustmentNode:n}=this,i={color:t,adjustment:n};let s=null;return e===Pn.SATURATION?s=Rb(i):e===Pn.VIBRANCE?s=wb(i):e===Pn.HUE?s=Nb(i):console.error(`${this.type}: Method "${this.method}" not supported!`),s}}Pn.SATURATION="saturation";Pn.VIBRANCE="vibrance";Pn.HUE="hue";const Cb=G(Pn,Pn.SATURATION),Lb=G(Pn,Pn.VIBRANCE),Pb=G(Pn,Pn.HUE),Ub=X(.2125,.7154,.0721),Db=(r,e=Ub)=>Bo(r,e);F("saturation",Cb);F("vibrance",Lb);F("hue",Pb);Z("ColorAdjustmentNode",Pn);const Ib=J(r=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:i}=r,s=e.dFdx(),o=e.dFdy(),a=i.dFdx(),c=i.dFdy(),l=t,u=o.cross(l),h=l.cross(s),d=u.mul(a.x).add(h.mul(c.x)),f=u.mul(a.y).add(h.mul(c.y)),g=d.dot(d).max(f.dot(f)),_=rm.mul(g.inverseSqrt());return oi(d.mul(n.x,_),f.mul(n.y,_),l.mul(n.z)).normalize()});class am extends wt{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=Ls}setup(e){const{normalMapType:t,scaleNode:n}=this;let i=this.node.mul(2).sub(1);n!==null&&(i=X(i.xy.mul(n),i.z));let s=null;return t===Kd?s=pp.mul(i).normalize():t===Ls&&(e.hasGeometryAttribute("tangent")===!0?s=Ob.mul(i).normalize():s=Ib({eye_pos:Ni,surf_norm:cs,mapN:i,uv:hs()})),s}}const Fb=G(am),Ob=Pr(cc,ab,cs);F("normalMap",Fb);Z("NormalMapNode",am);class cm extends wt{constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){const{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}}const Bb=G(cm);F("posterize",Bb);Z("PosterizeNode",cm);const Vb=J(({color:r,exposure:e})=>r.mul(e).clamp()),Gb=J(({color:r,exposure:e})=>(r=r.mul(e),r.div(r.add(1)).clamp())),zb=J(({color:r,exposure:e})=>{r=r.mul(e),r=r.sub(.004).max(0);const t=r.mul(r.mul(6.2).add(.5)),n=r.mul(r.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),kb=J(({color:r})=>{const e=r.mul(r.add(.0245786)).sub(90537e-9),t=r.mul(r.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),Hb=J(({color:r,exposure:e})=>{const t=Pr(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=Pr(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return r=r.mul(e).div(.6),r=t.mul(r),r=kb({color:r}),r=n.mul(r),r.clamp()}),Wb={[Od]:Vb,[Bd]:Gb,[Vd]:zb,[Gd]:Hb};class lm extends wt{constructor(e=Wn,t=C(1),n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}getCacheKey(){let e=super.getCacheKey();return e="{toneMapping:"+this.toneMapping+",nodes:"+e+"}",e}setup(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===Wn)return t;const i={exposure:this.exposureNode,color:t},s=Wb[n];let o=null;return s?o=s(i):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),o=t),o}}const Xb=(r,e,t)=>Me(new lm(r,Me(e),Me(t)));Z("ToneMappingNode",lm);let Zc=null;class um extends Go{constructor(e=Wu,t=null){Zc===null&&(Zc=new vf),super(e,t,Zc)}}const $b=G(um);F("viewportSharedTexture",$b);Z("ViewportSharedTextureNode",um);const qb=new ec(-1,1,1,-1,0,1);class Yb extends qi{constructor(e=!1){super();const t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new ri([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ri(t,2))}}const Kb=new Yb;class jb{constructor(e=null){this._mesh=new an(Kb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,qb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const Qc=new jb;class Zb extends wt{constructor(e,t=2){super(e),this.textureNode=e,this.sigma=t,this.directionNode=Ie(1),this._invSize=Ft(new Be),this._passDirection=Ft(new Be),this._horizontalRT=new yo,this._verticalRT=new yo,this.updateBeforeType=gt.RENDER,this.resolution=new Be(1,1)}setSize(e,t){e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._invSize.value.set(1/e,1/t),this._horizontalRT.setSize(e,t),this._verticalRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,i=n.value,s=t.getRenderTarget(),o=n.value;Qc.material=this._material,this.setSize(i.image.width,i.image.height),t.setRenderTarget(this._horizontalRT),this._passDirection.value.set(1,0),Qc.render(t),n.value=this._horizontalRT.texture,t.setRenderTarget(this._verticalRT),this._passDirection.value.set(0,1),Qc.render(t),t.setRenderTarget(s),n.value=o}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("GaussianBlurNode requires a TextureNode."),ct();const n=t.uvNode||hs(),i=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),s=J(()=>{const c=3+2*this.sigma,l=this._getCoefficients(c),u=this._invSize,h=Ie(this.directionNode).mul(this._passDirection),d=C(l[0]).toVar(),f=X(i(n).mul(d)).toVar();for(let g=1;g<c;g++){const _=C(g),m=C(l[g]),p=Ie(h.mul(u.mul(_))).toVar(),S=X(i(n.add(p))),x=X(i(n.sub(p)));f.addAssign(S.add(x).mul(m)),d.addAssign(Lt(2,m))}return ct(f.div(d),1)}),o=this._material||(this._material=e.createNodeMaterial("MeshBasicNodeMaterial"));o.fragmentNode=s();const a=e.getNodeProperties(this);return a.textureNode=t,Cn(this._verticalRT.texture)}_getCoefficients(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return t}}const Qb=(r,e)=>Me(new Zb(Me(r),e));F("gaussianBlur",Qb);class yd extends Ir{constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class zo extends wt{constructor(e,t,n){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this._pixelRatio=1,this._width=1,this._height=1;const i=new Vs;i.isRenderTargetTexture=!0,i.type=kt,i.name="PostProcessingDepth";const s=new yo(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ei});s.texture.name="PostProcessing",s.depthTexture=i,this.renderTarget=s,this.updateBeforeType=gt.FRAME,this._textureNode=Me(new yd(this,s.texture)),this._depthTextureNode=Me(new yd(this,i)),this._depthNode=null,this._cameraNear=Ft(0),this._cameraFar=Ft(0),this.isPassNode=!0}isGlobal(){return!0}getTextureNode(){return this._textureNode}getTextureDepthNode(){return this._depthTextureNode}getDepthNode(){if(this._depthNode===null){const e=this._cameraNear,t=this._cameraFar;this._depthNode=Nl(Op(this._depthTextureNode,e,t),e,t)}return this._depthNode}setup(){return this.scope===zo.COLOR?this.getTextureNode():this.getDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n,camera:i}=this;this._pixelRatio=t.getPixelRatio();const s=t.getSize(new Be);this.setSize(s.width,s.height);const o=t.toneMapping,a=t.toneMappingNode,c=t.getRenderTarget();this._cameraNear.value=i.near,this._cameraFar.value=i.far,t.toneMapping=Wn,t.toneMappingNode=null,t.setRenderTarget(this.renderTarget),t.render(n,i),t.toneMapping=o,t.toneMappingNode=a,t.setRenderTarget(c)}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget.setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}zo.COLOR="color";zo.DEPTH="depth";Z("PassNode",zo);class hm extends wt{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,i=n.getInputs(e),s=this.parameters;if(Array.isArray(s))for(let a=0;a<s.length;a++){const c=i[a],l=s[a];t.push(l.build(e,c.type))}else for(const a of i){const c=s[a.name];if(c!==void 0)t.push(c.build(e,a.type));else throw new Error(`FunctionCallNode: Input '${a.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const Jb=(r,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?_r(e):oc(e[0]),Me(new hm(Me(r),e)));F("call",Jb);Z("FunctionCallNode",hm);class dm extends we{constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outpuType=null,this.events=new ls,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:C()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=wf(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=Nf(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}}const Sa=G(dm);F("scriptableValue",Sa);Z("ScriptableValueNode",dm);class fm extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){const i=t(...n);return this.set(e,i),i}}}class eA{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){const t=this.parameters[e];return t?t.getValue():null}}const Jc=new fm;class pm extends we{constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new fm,this._output=Sa(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(const t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(const t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){const n=this._outputs;return n[e]===void 0?n[e]=Sa(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){const n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=Sa(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){const i=this.getObject()[e];if(typeof i=="function")return i(...t)}async callAsync(e,...t){const i=this.getObject()[e];if(typeof i=="function")return i.constructor.name==="AsyncFunction"?await i(...t):i(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const e=()=>this.refresh(),t=(l,u)=>this.setOutput(l,u),n=new eA(this),i=Jc.get("THREE"),s=Jc.get("TSL"),o=this.getMethod(this.codeNode),a=[n,this._local,Jc,e,t,i,s];this._object=o(...a);const c=this._object.layout;if(c&&(c.cache===!1&&this._local.clear(),this._output.outputType=c.outputType||null,Array.isArray(c.elements)))for(const l of c.elements){const u=l.id||l.name;l.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=l.inputType),l.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=l.outputType)}return this._object}deserialize(e){super.deserialize(e);for(const t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const e=this.getDefaultOutput().value;return e&&e.isNode?e:C()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),i="var "+n+`; var output = {};
`,s=`
return { ...output, `+n+" };",o=i+this.codeNode.code+s;return this._method=new Function(...e,o),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const tA=G(pm);F("scriptable",tA);Z("ScriptableNode",pm);class dc extends we{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}mixAssign(e){return this.mix(e,this.colorNode)}setup(){return this.factorNode}}const nA=G(dc);F("fog",nA);Z("FogNode",dc);class mm extends dc{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}setup(){return Fs(this.nearNode,this.farNode,Ni.z.negate())}}const gm=G(mm);F("rangeFog",gm);Z("FogRangeNode",mm);class _m extends dc{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}setup(){const e=Ni.z.negate(),t=this.densityNode;return t.mul(t,e,e).negate().exp().oneMinus()}}const xm=G(_m);F("densityFog",xm);Z("FogExp2Node",_m);let vs=null,Ss=null;class vm extends we{constructor(e=C(),t=C()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){const t=e.getTypeLength(As(this.minNode.value)),n=e.getTypeLength(As(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.isInstancedMesh===!0?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){const t=e.object;let n=null;if(t.isInstancedMesh===!0){const i=this.minNode.value,s=this.maxNode.value,o=e.getTypeLength(As(i)),a=e.getTypeLength(As(s));vs=vs||new ot,Ss=Ss||new ot,vs.setScalar(0),Ss.setScalar(0),o===1?vs.setScalar(i):i.isColor?vs.set(i.r,i.g,i.b):vs.set(i.x,i.y,i.z||0,i.w||0),a===1?Ss.setScalar(s):s.isColor?Ss.set(s.r,s.g,s.b):Ss.set(s.x,s.y,s.z||0,s.w||0);const c=4,l=c*t.count,u=new Float32Array(l);for(let d=0;d<l;d++){const f=d%c,g=vs.getComponent(f),_=Ss.getComponent(f);u[d]=jd.lerp(g,_,Math.random())}const h=this.getNodeType(e);n=Tp(u,"vec4",t.count).element(IT).convert(h)}else n=C(0);return n}}G(vm);Z("RangeNode",vm);class Sm extends we{constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.updateBeforeType=gt.OBJECT,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let n=t[0];for(let i=1;i<t.length;i++)n*=t[i];this.dispatchCount=Math.ceil(e/n)}onInit(){}updateBefore({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if(t==="compute"){const n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n)}}}const iA=(r,e,t)=>Me(new Sm(Me(r),e,t));F("compute",iA);Z("ComputeNode",Sm);class Bs extends we{constructor(e=Bs.TARGET_DIRECTION,t=null){super(),this.scope=e,this.light=t}setup(){const{scope:e,light:t}=this;let n=null;return e===Bs.TARGET_DIRECTION&&(n=ds.transformDirection(Al(t).sub(Al(t.target)))),n}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Bs.TARGET_DIRECTION="targetDirection";const ym=G(Bs,Bs.TARGET_DIRECTION);Z("LightNode",Bs);const Tm=J(r=>{const{lightDistance:e,cutoffDistance:t,decayExponent:n}=r,i=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).cond(i.mul(e.div(t).pow4().oneMinus().clamp().pow2()),i)});class Mm extends ks{constructor(e=null){super(e),this.cutoffDistanceNode=Ft(0),this.decayExponentNode=Ft(0)}update(e){const{light:t}=this;super.update(e),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}setup(e){const{colorNode:t,cutoffDistanceNode:n,decayExponentNode:i,light:s}=this,o=e.context.lightingModel,a=fp(s).sub(Ni),c=a.normalize(),l=a.length(),u=Tm({lightDistance:l,cutoffDistance:n,decayExponent:i}),h=t.mul(u),d=e.context.reflectedLight;o.direct({lightDirection:c,lightColor:h,reflectedLight:d},e.stack,e)}}Z("PointLightNode",Mm);Fr(Ny,Mm);class Em extends ks{constructor(e=null){super(e)}setup(e){super.setup(e);const t=e.context.lightingModel,n=this.colorNode,i=ym(this.light),s=e.context.reflectedLight;t.direct({lightDirection:i,lightColor:n,reflectedLight:s},e.stack,e)}}Z("DirectionalLightNode",Em);Fr(Tf,Em);class Ku extends ks{constructor(e=null){super(e),this.coneCosNode=Ft(0),this.penumbraCosNode=Ft(0),this.cutoffDistanceNode=Ft(0),this.decayExponentNode=Ft(0)}update(e){super.update(e);const{light:t}=this;this.coneCosNode.value=Math.cos(t.angle),this.penumbraCosNode.value=Math.cos(t.angle*(1-t.penumbra)),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}getSpotAttenuation(e){const{coneCosNode:t,penumbraCosNode:n}=this;return Fs(t,n,e)}setup(e){super.setup(e);const t=e.context.lightingModel,{colorNode:n,cutoffDistanceNode:i,decayExponentNode:s,light:o}=this,a=fp(o).sub(Ni),c=a.normalize(),l=c.dot(ym(o)),u=this.getSpotAttenuation(l),h=a.length(),d=Tm({lightDistance:h,cutoffDistance:i,decayExponent:s}),f=n.mul(u).mul(d),g=e.context.reflectedLight;t.direct({lightDirection:c,lightColor:f,reflectedLight:g},e.stack,e)}}Z("SpotLightNode",Ku);Fr(yf,Ku);class sA extends yf{constructor(e,t,n,i,s,o){super(e,t,n,i,s,o),this.iesMap=null}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this}}class bm extends Ku{getSpotAttenuation(e){const t=this.light.iesMap;let n=null;if(t&&t.isTexture===!0){const i=e.acos().mul(1/Math.PI);n=Cn(t,Ie(i,0),0).r}else n=super.getSpotAttenuation(e);return n}}Z("IESSpotLightNode",bm);Fr(sA,bm);class Am extends ks{constructor(e=null){super(e)}setup({context:e}){e.irradiance.addAssign(this.colorNode)}}Z("AmbientLightNode",Am);Fr(Mf,Am);class Rm extends ks{constructor(e=null){super(e),this.lightPositionNode=Al(e),this.lightDirectionNode=this.lightPositionNode.normalize(),this.groundColorNode=Ft(new Pe)}update(e){const{light:t}=this;super.update(e),this.lightPositionNode.object3d=t,this.groundColorNode.value.copy(t.groundColor).multiplyScalar(t.intensity)}setup(e){const{colorNode:t,groundColorNode:n,lightDirectionNode:i}=this,o=cs.dot(i).mul(.5).add(.5),a=Li(n,t,o);e.context.irradiance.addAssign(a)}}Z("HemisphereLightNode",Rm);Fr(Ay,Rm);const rA=J(r=>{const e=r.uv.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()});class wm extends wt{constructor(e=hs()){super("float"),this.uvNode=e}setup(){return rA({uv:this.uvNode})}}const oA=G(wm);F("checker",oA);Z("CheckerNode",wm);const aA=new xf;class cA extends bn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.pointWidth=1,this.pointColorNode=null,this.setDefaultValues(aA),this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor;this.vertexNode=J(()=>{It(Ie(),"vUv").assign(hs());const n=Mn("instancePosition"),i=Jn("vec4","mvPos");i.assign(Os.mul(ct(n,1)));const s=vr.z.div(vr.w),o=zi.mul(i),a=Jn("vec2","offset");return a.assign(An.xy),a.assign(a.mul(pE)),a.assign(a.div(vr.z)),a.y.assign(a.y.mul(s)),a.assign(a.mul(o.w)),o.assign(o.add(ct(a,0,0))),o})(),this.fragmentNode=J(()=>{const n=It(Ie(),"vUv"),i=Jn("float","alpha");i.assign(1);const s=n.x,o=n.y,a=s.mul(s).add(o.mul(o));if(e){const l=Jn("float","dlen");l.assign(a.fwidth()),i.assign(Fs(l.oneMinus(),l.add(1),a).oneMinus())}else a.greaterThan(1).discard();let c;return this.pointColorNode?c=this.pointColorNode:t?c=Mn("instanceColor").mul(Ao):c=Ao,ct(c,i)})(),this.needsUpdate=!0}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}$n("InstancedPointsNodeMaterial",cA);const lA=new _f;class uA extends bn{constructor(e){super(),this.isLineBasicNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(lA),this.setValues(e)}}$n("LineBasicNodeMaterial",uA);const hA=new Sf;class dA extends bn{constructor(e){super(),this.isLineDashedNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(hA),this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setupVariants(){const e=this.offsetNode,t=this.dashScaleNode?C(this.dashScaleNode):Rl,n=this.dashSizeNode?C(this.dashSizeNode):gp,i=this.dashSizeNode?C(this.dashGapNode):_p;xr.assign(n),Ba.assign(i);const s=It(Mn("lineDistance").mul(t));(e?s.add(e):s).mod(xr.add(Ba)).greaterThan(xr).discard()}}$n("LineDashedNodeMaterial",dA);const fA=new Sf;class pA extends bn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.setDefaultValues(fA),this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.useDash=e.dashed,this.useWorldUnits=!1,this.dashOffset=0,this.lineWidth=1,this.lineColorNode=null,this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor,n=this.dashed,i=this.worldUnits,s=J(({start:a,end:c})=>{const l=zi.element(2).element(2),d=zi.element(3).element(2).mul(-.5).div(l).sub(a.z).div(c.z.sub(a.z));return ct(Li(a.xyz,c.xyz,d),c.w)});this.vertexNode=J(()=>{Ji("vec2","vUv").assign(hs());const a=Mn("instanceStart"),c=Mn("instanceEnd"),l=Jn("vec4","start"),u=Jn("vec4","end");l.assign(Os.mul(ct(a,1))),u.assign(Os.mul(ct(c,1))),i&&(Ji("vec3","worldStart").assign(l.xyz),Ji("vec3","worldEnd").assign(u.xyz));const h=vr.z.div(vr.w),d=zi.element(2).element(3).equal(-1);yt(d,()=>{yt(l.z.lessThan(0).and(u.z.greaterThan(0)),()=>{u.assign(s({start:l,end:u}))}).elseif(u.z.lessThan(0).and(l.z.greaterThanEqual(0)),()=>{l.assign(s({start:u,end:l}))})});const f=zi.mul(l),g=zi.mul(u),_=f.xyz.div(f.w),m=g.xyz.div(g.w),p=m.xy.sub(_.xy).temp();p.x.assign(p.x.mul(h)),p.assign(p.normalize());const S=Mo(ct());if(i){const x=u.xyz.sub(l.xyz).normalize(),E=An.y.lessThan(.5).cond(l.xyz.cross(x).normalize(),u.xyz.cross(x).normalize());E.assign(An.x.lessThan(0).cond(E.negate(),E));const L=x.dot(X(0,0,1));n||(l.assign(l.sub(ct(x.mul(Xr).mul(.5),0))),u.assign(u.add(ct(x.mul(Xr).mul(.5),0))),E.assign(E.sub(X(p.mul(L),0))),E.z.assign(E.z.add(.5))),yt(An.y.greaterThan(1).or(An.y.lessThan(0)),()=>{E.assign(E.add(X(p.mul(2).mul(L),0)))}),E.assign(E.mul(Xr).mul(.5));const A=Ji("vec4","worldPos");A.assign(An.y.lessThan(.5).cond(l,u)),A.assign(A.add(ct(E,0))),S.assign(zi.mul(A));const R=Mo(X());R.assign(An.y.lessThan(.5).cond(_,m)),S.z.assign(R.z.mul(S.w))}else{const x=Jn("vec2","offset");x.assign(Ie(p.y,p.x.negate())),p.x.assign(p.x.div(h)),x.x.assign(x.x.div(h)),x.assign(An.x.lessThan(0).cond(x.negate(),x)),yt(An.y.lessThan(0),()=>{x.assign(x.sub(p))}).elseif(An.y.greaterThan(1),()=>{x.assign(x.add(p))}),x.assign(x.mul(Xr)),x.assign(x.div(vr.w)),S.assign(An.y.lessThan(.5).cond(f,g)),x.assign(x.mul(S.w)),S.assign(S.add(ct(x,0,0)))}return S})();const o=J(({p1:a,p2:c,p3:l,p4:u})=>{const h=a.sub(l),d=u.sub(l),f=c.sub(a),g=h.dot(d),_=d.dot(f),m=h.dot(f),p=d.dot(d),x=f.dot(f).mul(p).sub(_.mul(_)),L=g.mul(_).sub(m.mul(p)).div(x).clamp(),A=g.add(_.mul(L)).div(p).clamp();return Ie(L,A)});this.fragmentNode=J(()=>{const a=Ji("vec2","vUv");if(n){const u=this.offsetNode?C(this.offsetNodeNode):cd,h=this.dashScaleNode?C(this.dashScaleNode):Rl,d=this.dashSizeNode?C(this.dashSizeNode):gp,f=this.dashSizeNode?C(this.dashGapNode):_p;xr.assign(d),Ba.assign(f);const g=Mn("instanceDistanceStart"),_=Mn("instanceDistanceEnd"),m=An.y.lessThan(.5).cond(h.mul(g),Rl.mul(_)),p=It(m.add(cd)),S=u?p.add(u):p;a.y.lessThan(-1).or(a.y.greaterThan(1)).discard(),S.mod(xr.add(Ba)).greaterThan(xr).discard()}const c=Jn("float","alpha");if(c.assign(1),i){const u=Ji("vec3","worldStart"),h=Ji("vec3","worldEnd"),d=Ji("vec4","worldPos").xyz.normalize().mul(1e5),f=h.sub(u),g=o({p1:u,p2:h,p3:X(0,0,0),p4:d}),_=u.add(f.mul(g.x)),m=d.mul(g.y),x=_.sub(m).length().div(Xr);if(!n)if(e){const E=x.fwidth();c.assign(Fs(E.negate().add(.5),E.add(.5),x).oneMinus())}else x.greaterThan(.5).discard()}else if(e){const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1)),d=u.mul(u).add(h.mul(h)),f=Jn("float","dlen");f.assign(d.fwidth()),yt(a.y.abs().greaterThan(1),()=>{c.assign(Fs(f.oneMinus(),f.add(1),d).oneMinus())})}else yt(a.y.abs().greaterThan(1),()=>{const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1));u.mul(u).add(h.mul(h)).greaterThan(1).discard()});let l;if(this.lineColorNode)l=this.lineColorNode;else if(t){const u=Mn("instanceColorStart"),h=Mn("instanceColorEnd");l=An.y.lessThan(.5).cond(u,h).mul(Ao)}else l=Ao;return ct(l,c)})(),this.needsUpdate=!0}get worldUnits(){return this.useWorldUnits}set worldUnits(e){this.useWorldUnits!==e&&(this.useWorldUnits=e,this.setupShaders())}get dashed(){return this.useDash}set dashed(e){this.useDash!==e&&(this.useDash=e,this.setupShaders())}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}$n("Line2NodeMaterial",pA);const mA=new Ey;class gA extends bn{constructor(e){super(),this.isMeshNormalNodeMaterial=!0,this.colorSpaced=!1,this.setDefaultValues(mA),this.setValues(e)}setupDiffuseColor(){const e=this.opacityNode?C(this.opacityNode):mp;mn.assign(ct(Kp(Gt),e))}}$n("MeshNormalNodeMaterial",gA);const _A=new vu;class xA extends bn{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(_A),this.setValues(e)}}$n("MeshBasicNodeMaterial",xA);const wo=J(({f0:r,f90:e,dotVH:t})=>{const n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return r.mul(n.oneMinus()).add(e.mul(n))}),Ha=J(r=>r.diffuseColor.mul(1/Math.PI)),vA=()=>C(.25),SA=J(({dotNH:r})=>El.mul(.5/Math.PI).add(1).mul(r.pow(El))),yA=J(({lightDirection:r})=>{const e=r.add(en).normalize(),t=Gt.dot(e).clamp(),n=en.dot(e).clamp(),i=wo({f0:Gi,f90:1,dotVH:n}),s=vA(),o=SA({dotNH:t});return i.mul(s).mul(o)});class Nm extends Yf{constructor(e=!0){super(),this.specular=e}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const s=Gt.dot(e).clamp().mul(t);n.directDiffuse.addAssign(s.mul(Ha({diffuseColor:mn.rgb}))),this.specular===!0&&n.directSpecular.addAssign(s.mul(yA({lightDirection:e})).mul(tE))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(Ha({diffuseColor:mn})))}}const TA=new by;class MA extends bn{constructor(e){super(),this.isMeshLambertNodeMaterial=!0,this.lights=!0,this.setDefaultValues(TA),this.setValues(e)}setupLightingModel(){return new Nm(!1)}}$n("MeshLambertNodeMaterial",MA);const EA=new My;class bA extends bn{constructor(e){super(),this.isMeshPhongNodeMaterial=!0,this.lights=!0,this.shininessNode=null,this.specularNode=null,this.setDefaultValues(EA),this.setValues(e)}setupLightingModel(){return new Nm}setupVariants(){const e=(this.shininessNode?C(this.shininessNode):QM).max(1e-4);El.assign(e);const t=this.specularNode||eE;Gi.assign(t)}copy(e){return this.shininessNode=e.shininessNode,this.specularNode=e.specularNode,super.copy(e)}}$n("MeshPhongNodeMaterial",bA);const AA=J(()=>{const r=Ga.dFdx().abs().max(Ga.dFdy().abs());return r.x.max(r.y).max(r.z)}),RA=J(r=>{const{roughness:e}=r,t=AA();let n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),wA=J(r=>{const{alpha:e,dotNL:t,dotNV:n}=r,i=e.pow2(),s=t.mul(i.add(i.oneMinus().mul(n.pow2())).sqrt()),o=n.mul(i.add(i.oneMinus().mul(t.pow2())).sqrt());return Eo(.5,s.add(o).max(sp))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),NA=J(({alpha:r,dotNH:e})=>{const t=r.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),Td=J(r=>{const{lightDirection:e,f0:t,f90:n,roughness:i,iridescenceFresnel:s}=r,o=r.normalView||Gt,a=i.pow2(),c=e.add(en).normalize(),l=o.dot(e).clamp(),u=o.dot(en).clamp(),h=o.dot(c).clamp(),d=en.dot(c).clamp();let f=wo({f0:t,f90:n,dotVH:d});s&&(f=Fu.mix(f,s));const g=wA({alpha:a,dotNL:l,dotNV:u}),_=NA({alpha:a,dotNH:h});return f.mul(g).mul(_)}),Cm=J(({roughness:r,dotNV:e})=>{const t=ct(-1,-.0275,-.572,.022),n=ct(1,.0425,1.04,-.04),i=r.mul(t).add(n),s=i.x.mul(i.x).min(e.mul(-9.28).exp2()).mul(i.x).add(i.y);return Ie(-1.04,1.04).mul(s).add(i.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),CA=J(r=>{const{dotNV:e,specularColor:t,specularF90:n,roughness:i}=r,s=Cm({dotNV:e,roughness:i});return t.mul(s.x).add(n.mul(s.y))}),LA=J(({f:r,f90:e,dotVH:t})=>{const n=t.oneMinus().saturate(),i=n.mul(n),s=n.mul(i,i).clamp(0,.9999);return r.sub(X(e).mul(s)).div(s.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),PA=J(({roughness:r,dotNH:e})=>{const t=r.pow2(),n=C(1).div(t),s=e.pow2().oneMinus().max(.0078125);return C(2).add(n).mul(s.pow(n.mul(.5))).div(2*Math.PI)}).setLayout({name:"D_Charlie",type:"float",inputs:[{name:"roughness",type:"float"},{name:"dotNH",type:"float"}]}),UA=J(({dotNV:r,dotNL:e})=>C(1).div(C(4).mul(e.add(r).sub(e.mul(r))))).setLayout({name:"V_Neubelt",type:"float",inputs:[{name:"dotNV",type:"float"},{name:"dotNL",type:"float"}]}),DA=J(({lightDirection:r})=>{const e=r.add(en).normalize(),t=Gt.dot(r).clamp(),n=Gt.dot(en).clamp(),i=Gt.dot(e).clamp(),s=PA({roughness:Iu,dotNH:i}),o=UA({dotNV:n,dotNL:t});return ur.mul(s).mul(o)}),IA=Pr(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),FA=r=>{const e=r.sqrt();return X(1).add(e).div(X(1).sub(e))},Md=(r,e)=>r.sub(e).div(r.add(e)).pow2(),OA=(r,e)=>{const t=r.mul(2*Math.PI*1e-9),n=X(54856e-17,44201e-17,52481e-17),i=X(1681e3,1795300,2208400),s=X(43278e5,93046e5,66121e5),o=C(9747e-17*Math.sqrt(2*Math.PI*45282e5)).mul(t.mul(2239900).add(e.x).cos()).mul(t.pow2().mul(-45282e5).exp());let a=n.mul(s.mul(2*Math.PI).sqrt()).mul(i.mul(t).add(e).cos()).mul(t.pow2().negate().mul(s).exp());return a=X(a.x.add(o),a.y,a.z).div(10685e-11),IA.mul(a)},BA=J(({outsideIOR:r,eta2:e,cosTheta1:t,thinFilmThickness:n,baseF0:i})=>{const s=Li(r,e,Fs(0,.03,n)),o=r.div(s).pow2().mul(C(1).sub(t.pow2())),c=C(1).sub(o).sqrt(),l=Md(s,r),u=wo({f0:l,f90:1,dotVH:t}),h=u.oneMinus(),d=s.lessThan(r).cond(Math.PI,0),f=C(Math.PI).sub(d),g=FA(i.clamp(0,.9999)),_=Md(g,s.vec3()),m=wo({f0:_,f90:1,dotVH:c}),p=X(g.x.lessThan(s).cond(Math.PI,0),g.y.lessThan(s).cond(Math.PI,0),g.z.lessThan(s).cond(Math.PI,0)),S=s.mul(n,c,2),x=X(f).add(p),E=u.mul(m).clamp(1e-5,.9999),L=E.sqrt(),A=h.pow2().mul(m).div(X(1).sub(E));let Y=u.add(A),T=A.sub(h);for(let b=1;b<=2;++b){T=T.mul(L);const $=OA(C(b).mul(S),C(b).mul(x)).mul(2);Y=Y.add(T.mul($))}return Y.max(X(0))}).setLayout({name:"evalIridescence",type:"vec3",inputs:[{name:"outsideIOR",type:"float"},{name:"eta2",type:"float"},{name:"cosTheta1",type:"float"},{name:"thinFilmThickness",type:"float"},{name:"baseF0",type:"vec3"}]}),VA=J(({normal:r,viewDir:e,roughness:t})=>{const n=r.dot(e).saturate(),i=t.pow2(),s=ss(t.lessThan(.25),C(-339.2).mul(i).add(C(161.4).mul(t)).sub(25.9),C(-8.48).mul(i).add(C(14.3).mul(t)).sub(9.95)),o=ss(t.lessThan(.25),C(44).mul(i).sub(C(23.7).mul(t)).add(3.26),C(1.97).mul(i).sub(C(3.27).mul(t)).add(.72));return ss(t.lessThan(.25),0,C(.1).mul(t).sub(.025)).add(s.mul(n).add(o).exp()).mul(1/Math.PI).saturate()}),el=X(.04),tl=X(1);class Lm extends Yf{constructor(e=!1,t=!1,n=!1){super(),this.clearcoat=e,this.sheen=t,this.iridescence=n,this.clearcoatRadiance=null,this.clearcoatSpecularDirect=null,this.clearcoatSpecularIndirect=null,this.sheenSpecularDirect=null,this.sheenSpecularIndirect=null,this.iridescenceFresnel=null,this.iridescenceF0=null}start(){if(this.clearcoat===!0&&(this.clearcoatRadiance=X().temp("clearcoatRadiance"),this.clearcoatSpecularDirect=X().temp("clearcoatSpecularDirect"),this.clearcoatSpecularIndirect=X().temp("clearcoatSpecularIndirect")),this.sheen===!0&&(this.sheenSpecularDirect=X().temp("sheenSpecularDirect"),this.sheenSpecularIndirect=X().temp("sheenSpecularIndirect")),this.iridescence===!0){const e=Gt.dot(en).clamp();this.iridescenceFresnel=BA({outsideIOR:C(1),eta2:Zf,cosTheta1:e,thinFilmThickness:Qf,baseF0:Gi}),this.iridescenceF0=LA({f:this.iridescenceFresnel,f90:1,dotVH:e})}}computeMultiscattering(e,t,n=C(1)){const i=Gt.dot(en).clamp(),s=Cm({roughness:Jr,dotNV:i}),a=(this.iridescenceF0?Fu.mix(Gi,this.iridescenceF0):Gi).mul(s.x).add(n.mul(s.y)),l=s.x.add(s.y).oneMinus(),u=Gi.add(Gi.oneMinus().mul(.047619)),h=a.mul(u).div(l.mul(u).oneMinus());e.addAssign(a),t.addAssign(h.mul(l))}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const s=Gt.dot(e).clamp().mul(t);if(this.sheen===!0&&this.sheenSpecularDirect.addAssign(s.mul(DA({lightDirection:e}))),this.clearcoat===!0){const a=hr.dot(e).clamp().mul(t);this.clearcoatSpecularDirect.addAssign(a.mul(Td({lightDirection:e,f0:el,f90:tl,roughness:Oa,normalView:hr})))}n.directDiffuse.addAssign(s.mul(Ha({diffuseColor:mn.rgb}))),n.directSpecular.addAssign(s.mul(Td({lightDirection:e,f0:Gi,f90:1,roughness:Jr,iridescence:this.iridescence,iridescenceFresnel:this.iridescenceFresnel})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(Ha({diffuseColor:mn})))}indirectSpecular({radiance:e,iblIrradiance:t,reflectedLight:n}){if(this.sheen===!0&&this.sheenSpecularIndirect.addAssign(t.mul(ur,VA({normal:Gt,viewDir:en,roughness:Iu}))),this.clearcoat===!0){const l=hr.dot(en).clamp(),u=CA({dotNV:l,specularColor:el,specularF90:tl,roughness:Oa});this.clearcoatSpecularIndirect.addAssign(this.clearcoatRadiance.mul(u))}const i=X().temp("singleScattering"),s=X().temp("multiScattering"),o=t.mul(1/Math.PI);this.computeMultiscattering(i,s);const a=i.add(s),c=mn.mul(a.r.max(a.g).max(a.b).oneMinus());n.indirectSpecular.addAssign(e.mul(i)),n.indirectSpecular.addAssign(s.mul(o)),n.indirectDiffuse.addAssign(c.mul(o))}ambientOcclusion({ambientOcclusion:e,reflectedLight:t}){const i=Gt.dot(en).clamp().add(e),s=Jr.mul(-16).oneMinus().negate().exp2(),o=e.sub(i.pow(s).oneMinus()).clamp();this.clearcoat===!0&&this.clearcoatSpecularIndirect.mulAssign(e),this.sheen===!0&&this.sheenSpecularIndirect.mulAssign(e),t.indirectDiffuse.mulAssign(e),t.indirectSpecular.mulAssign(o)}finish(e){const{outgoingLight:t}=e;if(this.clearcoat===!0){const n=hr.dot(en).clamp(),i=wo({dotVH:n,f0:el,f90:tl}),s=t.mul(Ml.mul(i).oneMinus()).add(this.clearcoatSpecularDirect.add(this.clearcoatSpecularIndirect).mul(Ml));t.assign(s)}if(this.sheen===!0){const n=ur.r.max(ur.g).max(ur.b).mul(.157).oneMinus(),i=t.mul(n).add(this.sheenSpecularDirect,this.sheenSpecularIndirect);t.assign(i)}}}const GA=new To;class Pm extends bn{constructor(e){super(),this.isMeshStandardNodeMaterial=!0,this.emissiveNode=null,this.metalnessNode=null,this.roughnessNode=null,this.setDefaultValues(GA),this.setValues(e)}setupLightingModel(){return new Lm}setupVariants(){const e=this.metalnessNode?C(this.metalnessNode):iE;GT.assign(e);let t=this.roughnessNode?C(this.roughnessNode):nE;t=RA({roughness:t}),Jr.assign(t);const n=Li(X(.04),mn.rgb,e);Gi.assign(n),mn.assign(ct(mn.rgb.mul(e.oneMinus()),mn.a))}copy(e){return this.emissiveNode=e.emissiveNode,this.metalnessNode=e.metalnessNode,this.roughnessNode=e.roughnessNode,super.copy(e)}}$n("MeshStandardNodeMaterial",Pm);const zA=new Ty;class kA extends Pm{constructor(e){super(),this.isMeshPhysicalNodeMaterial=!0,this.clearcoatNode=null,this.clearcoatRoughnessNode=null,this.clearcoatNormalNode=null,this.sheenNode=null,this.sheenRoughnessNode=null,this.iridescenceNode=null,this.iridescenceIORNode=null,this.iridescenceThicknessNode=null,this.specularIntensityNode=null,this.specularColorNode=null,this.transmissionNode=null,this.thicknessNode=null,this.attenuationDistanceNode=null,this.attenuationColorNode=null,this.setDefaultValues(zA),this.setValues(e)}get useClearcoat(){return this.clearcoat>0||this.clearcoatNode!==null}get useIridescence(){return this.iridescence>0||this.iridescenceNode!==null}get useSheen(){return this.sheen>0||this.sheenNode!==null}setupLightingModel(){return new Lm(this.useClearcoat,this.useSheen,this.useIridescence)}setupVariants(e){if(super.setupVariants(e),this.useClearcoat){const t=this.clearcoatNode?C(this.clearcoatNode):rE,n=this.clearcoatRoughnessNode?C(this.clearcoatRoughnessNode):oE;Ml.assign(t),Oa.assign(n)}if(this.useSheen){const t=this.sheenNode?X(this.sheenNode):lE,n=this.sheenRoughnessNode?C(this.sheenRoughnessNode):uE;ur.assign(t),Iu.assign(n)}if(this.useIridescence){const t=this.iridescenceNode?C(this.iridescenceNode):hE,n=this.iridescenceIORNode?C(this.iridescenceIORNode):dE,i=this.iridescenceThicknessNode?C(this.iridescenceThicknessNode):fE;Fu.assign(t),Zf.assign(n),Qf.assign(i)}}setupNormal(e){super.setupNormal(e);const t=this.clearcoatNormalNode?X(this.clearcoatNormalNode):aE;hr.assign(t)}copy(e){return this.clearcoatNode=e.clearcoatNode,this.clearcoatRoughnessNode=e.clearcoatRoughnessNode,this.clearcoatNormalNode=e.clearcoatNormalNode,this.sheenNode=e.sheenNode,this.sheenRoughnessNode=e.sheenRoughnessNode,this.iridescenceNode=e.iridescenceNode,this.iridescenceIORNode=e.iridescenceIORNode,this.iridescenceThicknessNode=e.iridescenceThicknessNode,this.specularIntensityNode=e.specularIntensityNode,this.specularColorNode=e.specularColorNode,this.transmissionNode=e.transmissionNode,this.thicknessNode=e.thicknessNode,this.attenuationDistanceNode=e.attenuationDistanceNode,this.attenuationColorNode=e.attenuationColorNode,super.copy(e)}}$n("MeshPhysicalNodeMaterial",kA);const HA=new xf;class WA extends bn{constructor(e){super(),this.isPointsNodeMaterial=!0,this.lights=!1,this.normals=!1,this.transparent=!0,this.sizeNode=null,this.setDefaultValues(HA),this.setValues(e)}copy(e){return this.sizeNode=e.sizeNode,super.copy(e)}}$n("PointsNodeMaterial",WA);const XA=new yy;class $A extends bn{constructor(e){super(),this.isSpriteNodeMaterial=!0,this.lights=!1,this.normals=!1,this.positionNode=null,this.rotationNode=null,this.scaleNode=null,this.setDefaultValues(XA),this.setValues(e)}setupPosition({object:e,context:t}){const{positionNode:n,rotationNode:i,scaleNode:s}=this,o=Ln;let a=Os.mul(X(n||0)),c=Ie(Va[0].xyz.length(),Va[1].xyz.length());s!==null&&(c=c.mul(s));let l=o.xy;e.center&&e.center.isVector2===!0&&(l=l.sub(Ft(e.center).sub(.5))),l=l.mul(c);const u=C(i||cE),h=u.cos(),d=u.sin(),f=Ie(Ie(h,d.negate()).dot(l),Ie(d,h).dot(l));a=ct(a.xy.add(f),a.zw);const g=zi.mul(a);return t.vertex=o,g}copy(e){return this.positionNode=e.positionNode,this.rotationNode=e.rotationNode,this.scaleNode=e.scaleNode,super.copy(e)}}$n("SpriteNodeMaterial",$A);class Um{parseFunction(){console.warn("Abstract function.")}}class ju{constructor(e,t,n="",i=""){this.type=e,this.inputs=t,this.name=n,this.presicion=i}getCode(){console.warn("Abstract function.")}}ju.isNodeFunction=!0;const qA=/^\s*(highp|mediump|lowp)?\s*([a-z_0-9]+)\s*([a-z_0-9]+)?\s*\(([\s\S]*?)\)/i,YA=/[a-z_0-9]+/ig,Ed="#pragma main",KA=r=>{r=r.trim();const e=r.indexOf(Ed),t=e!==-1?r.slice(e+Ed.length):r,n=t.match(qA);if(n!==null&&n.length===5){const i=n[4],s=[];let o=null;for(;(o=YA.exec(i))!==null;)s.push(o);const a=[];let c=0;for(;c<s.length;){const g=s[c][0]==="const";g===!0&&c++;let _=s[c][0];_==="in"||_==="out"||_==="inout"?c++:_="";const m=s[c++][0];let p=Number.parseInt(s[c][0]);Number.isNaN(p)===!1?c++:p=null;const S=s[c++][0];a.push(new qu(m,S,p,_,g))}const l=t.substring(n[0].length),u=n[3]!==void 0?n[3]:"",h=n[2],d=n[1]!==void 0?n[1]:"",f=e!==-1?r.slice(0,e):"";return{type:h,inputs:a,name:u,presicion:d,inputsCode:i,blockCode:l,headerCode:f}}else throw new Error("FunctionNode: Function is not a GLSL code.")};class jA extends ju{constructor(e){const{type:t,inputs:n,name:i,presicion:s,inputsCode:o,blockCode:a,headerCode:c}=KA(e);super(t,n,i,s),this.inputsCode=o,this.blockCode=a,this.headerCode=c}getCode(e=this.name){let t;const n=this.blockCode;if(n!==""){const{type:i,inputsCode:s,headerCode:o,presicion:a}=this;let c=`${i} ${e} ( ${s.trim()} )`;a!==""&&(c=`${a} ${c}`),t=o+c+n}else t="";return t}}class ZA extends Um{parseFunction(e){return new jA(e)}}const Sr=J(([r,e,t])=>{const n=C(t).toVar(),i=C(e).toVar(),s=Ds(r).toVar();return ss(s,i,n)}),No=J(([r,e])=>{const t=Ds(e).toVar(),n=C(r).toVar();return ss(t,n.negate(),n)}),Pt=J(([r])=>{const e=C(r).toVar();return w(Oo(e))}),Mt=J(([r,e])=>{const t=C(r).toVar();return e.assign(Pt(t)),t.sub(C(e))}),Dm=J(([r,e,t,n,i,s])=>{const o=C(s).toVar(),a=C(i).toVar(),c=C(n).toVar(),l=C(t).toVar(),u=C(e).toVar(),h=C(r).toVar(),d=C(cn(1,a)).toVar();return cn(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}),Im=J(([r,e,t,n,i,s])=>{const o=C(s).toVar(),a=C(i).toVar(),c=X(n).toVar(),l=X(t).toVar(),u=X(e).toVar(),h=X(r).toVar(),d=C(cn(1,a)).toVar();return cn(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}),Fm=ui([Dm,Im]),Om=J(([r,e,t,n,i,s,o,a,c,l,u])=>{const h=C(u).toVar(),d=C(l).toVar(),f=C(c).toVar(),g=C(a).toVar(),_=C(o).toVar(),m=C(s).toVar(),p=C(i).toVar(),S=C(n).toVar(),x=C(t).toVar(),E=C(e).toVar(),L=C(r).toVar(),A=C(cn(1,f)).toVar(),R=C(cn(1,d)).toVar();return C(cn(1,h)).toVar().mul(R.mul(L.mul(A).add(E.mul(f))).add(d.mul(x.mul(A).add(S.mul(f))))).add(h.mul(R.mul(p.mul(A).add(m.mul(f))).add(d.mul(_.mul(A).add(g.mul(f))))))}),Bm=J(([r,e,t,n,i,s,o,a,c,l,u])=>{const h=C(u).toVar(),d=C(l).toVar(),f=C(c).toVar(),g=X(a).toVar(),_=X(o).toVar(),m=X(s).toVar(),p=X(i).toVar(),S=X(n).toVar(),x=X(t).toVar(),E=X(e).toVar(),L=X(r).toVar(),A=C(cn(1,f)).toVar(),R=C(cn(1,d)).toVar();return C(cn(1,h)).toVar().mul(R.mul(L.mul(A).add(E.mul(f))).add(d.mul(x.mul(A).add(S.mul(f))))).add(h.mul(R.mul(p.mul(A).add(m.mul(f))).add(d.mul(_.mul(A).add(g.mul(f))))))}),Vm=ui([Om,Bm]),Gm=J(([r,e,t])=>{const n=C(t).toVar(),i=C(e).toVar(),s=fe(r).toVar(),o=fe(s.bitAnd(fe(7))).toVar(),a=C(Sr(o.lessThan(fe(4)),i,n)).toVar(),c=C(Lt(2,Sr(o.lessThan(fe(4)),n,i))).toVar();return No(a,Ds(o.bitAnd(fe(1)))).add(No(c,Ds(o.bitAnd(fe(2)))))}),zm=J(([r,e,t,n])=>{const i=C(n).toVar(),s=C(t).toVar(),o=C(e).toVar(),a=fe(r).toVar(),c=fe(a.bitAnd(fe(15))).toVar(),l=C(Sr(c.lessThan(fe(8)),o,s)).toVar(),u=C(Sr(c.lessThan(fe(4)),s,Sr(c.equal(fe(12)).or(c.equal(fe(14))),o,i))).toVar();return No(l,Ds(c.bitAnd(fe(1)))).add(No(u,Ds(c.bitAnd(fe(2)))))}),Jt=ui([Gm,zm]),km=J(([r,e,t])=>{const n=C(t).toVar(),i=C(e).toVar(),s=Fo(r).toVar();return X(Jt(s.x,i,n),Jt(s.y,i,n),Jt(s.z,i,n))}),Hm=J(([r,e,t,n])=>{const i=C(n).toVar(),s=C(t).toVar(),o=C(e).toVar(),a=Fo(r).toVar();return X(Jt(a.x,o,s,i),Jt(a.y,o,s,i),Jt(a.z,o,s,i))}),Kn=ui([km,Hm]),Wm=J(([r])=>{const e=C(r).toVar();return Lt(.6616,e)}),Xm=J(([r])=>{const e=C(r).toVar();return Lt(.982,e)}),$m=J(([r])=>{const e=X(r).toVar();return Lt(.6616,e)}),qm=ui([Wm,$m]),Ym=J(([r])=>{const e=X(r).toVar();return Lt(.982,e)}),Km=ui([Xm,Ym]),Rn=J(([r,e])=>{const t=w(e).toVar(),n=fe(r).toVar();return n.shiftLeft(t).bitOr(n.shiftRight(w(32).sub(t)))}),jm=J(([r,e,t])=>{r.subAssign(t),r.bitXorAssign(Rn(t,w(4))),t.addAssign(e),e.subAssign(r),e.bitXorAssign(Rn(r,w(6))),r.addAssign(t),t.subAssign(e),t.bitXorAssign(Rn(e,w(8))),e.addAssign(r),r.subAssign(t),r.bitXorAssign(Rn(t,w(16))),t.addAssign(e),e.subAssign(r),e.bitXorAssign(Rn(r,w(19))),r.addAssign(t),t.subAssign(e),t.bitXorAssign(Rn(e,w(4))),e.addAssign(r)}),Or=J(([r,e,t])=>{const n=fe(t).toVar(),i=fe(e).toVar(),s=fe(r).toVar();return n.bitXorAssign(i),n.subAssign(Rn(i,w(14))),s.bitXorAssign(n),s.subAssign(Rn(n,w(11))),i.bitXorAssign(s),i.subAssign(Rn(s,w(25))),n.bitXorAssign(i),n.subAssign(Rn(i,w(16))),s.bitXorAssign(n),s.subAssign(Rn(n,w(4))),i.bitXorAssign(s),i.subAssign(Rn(s,w(14))),n.bitXorAssign(i),n.subAssign(Rn(i,w(24))),n}),un=J(([r])=>{const e=fe(r).toVar();return C(e).div(C(fe(w(4294967295))))}),vi=J(([r])=>{const e=C(r).toVar();return e.mul(e.mul(e.mul(e.mul(e.mul(6).sub(15)).add(10))))}),Zm=J(([r])=>{const e=w(r).toVar(),t=fe(fe(1)).toVar(),n=fe(fe(w(3735928559)).add(t.shiftLeft(fe(2)).add(fe(13)))).toVar();return Or(n.add(fe(e)),n,n)}),Qm=J(([r,e])=>{const t=w(e).toVar(),n=w(r).toVar(),i=fe(fe(2)).toVar(),s=fe().toVar(),o=fe().toVar(),a=fe().toVar();return s.assign(o.assign(a.assign(fe(w(3735928559)).add(i.shiftLeft(fe(2)).add(fe(13)))))),s.addAssign(fe(n)),o.addAssign(fe(t)),Or(s,o,a)}),Jm=J(([r,e,t])=>{const n=w(t).toVar(),i=w(e).toVar(),s=w(r).toVar(),o=fe(fe(3)).toVar(),a=fe().toVar(),c=fe().toVar(),l=fe().toVar();return a.assign(c.assign(l.assign(fe(w(3735928559)).add(o.shiftLeft(fe(2)).add(fe(13)))))),a.addAssign(fe(s)),c.addAssign(fe(i)),l.addAssign(fe(n)),Or(a,c,l)}),eg=J(([r,e,t,n])=>{const i=w(n).toVar(),s=w(t).toVar(),o=w(e).toVar(),a=w(r).toVar(),c=fe(fe(4)).toVar(),l=fe().toVar(),u=fe().toVar(),h=fe().toVar();return l.assign(u.assign(h.assign(fe(w(3735928559)).add(c.shiftLeft(fe(2)).add(fe(13)))))),l.addAssign(fe(a)),u.addAssign(fe(o)),h.addAssign(fe(s)),jm(l,u,h),l.addAssign(fe(i)),Or(l,u,h)}),tg=J(([r,e,t,n,i])=>{const s=w(i).toVar(),o=w(n).toVar(),a=w(t).toVar(),c=w(e).toVar(),l=w(r).toVar(),u=fe(fe(5)).toVar(),h=fe().toVar(),d=fe().toVar(),f=fe().toVar();return h.assign(d.assign(f.assign(fe(w(3735928559)).add(u.shiftLeft(fe(2)).add(fe(13)))))),h.addAssign(fe(l)),d.addAssign(fe(c)),f.addAssign(fe(a)),jm(h,d,f),h.addAssign(fe(o)),d.addAssign(fe(s)),Or(h,d,f)}),ht=ui([Zm,Qm,Jm,eg,tg]),ng=J(([r,e])=>{const t=w(e).toVar(),n=w(r).toVar(),i=fe(ht(n,t)).toVar(),s=Fo().toVar();return s.x.assign(i.bitAnd(w(255))),s.y.assign(i.shiftRight(w(8)).bitAnd(w(255))),s.z.assign(i.shiftRight(w(16)).bitAnd(w(255))),s}),ig=J(([r,e,t])=>{const n=w(t).toVar(),i=w(e).toVar(),s=w(r).toVar(),o=fe(ht(s,i,n)).toVar(),a=Fo().toVar();return a.x.assign(o.bitAnd(w(255))),a.y.assign(o.shiftRight(w(8)).bitAnd(w(255))),a.z.assign(o.shiftRight(w(16)).bitAnd(w(255))),a}),jn=ui([ng,ig]),sg=J(([r])=>{const e=Ie(r).toVar(),t=w().toVar(),n=w().toVar(),i=C(Mt(e.x,t)).toVar(),s=C(Mt(e.y,n)).toVar(),o=C(vi(i)).toVar(),a=C(vi(s)).toVar(),c=C(Fm(Jt(ht(t,n),i,s),Jt(ht(t.add(w(1)),n),i.sub(1),s),Jt(ht(t,n.add(w(1))),i,s.sub(1)),Jt(ht(t.add(w(1)),n.add(w(1))),i.sub(1),s.sub(1)),o,a)).toVar();return qm(c)}),rg=J(([r])=>{const e=X(r).toVar(),t=w().toVar(),n=w().toVar(),i=w().toVar(),s=C(Mt(e.x,t)).toVar(),o=C(Mt(e.y,n)).toVar(),a=C(Mt(e.z,i)).toVar(),c=C(vi(s)).toVar(),l=C(vi(o)).toVar(),u=C(vi(a)).toVar(),h=C(Vm(Jt(ht(t,n,i),s,o,a),Jt(ht(t.add(w(1)),n,i),s.sub(1),o,a),Jt(ht(t,n.add(w(1)),i),s,o.sub(1),a),Jt(ht(t.add(w(1)),n.add(w(1)),i),s.sub(1),o.sub(1),a),Jt(ht(t,n,i.add(w(1))),s,o,a.sub(1)),Jt(ht(t.add(w(1)),n,i.add(w(1))),s.sub(1),o,a.sub(1)),Jt(ht(t,n.add(w(1)),i.add(w(1))),s,o.sub(1),a.sub(1)),Jt(ht(t.add(w(1)),n.add(w(1)),i.add(w(1))),s.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return Km(h)}),QA=ui([sg,rg]),og=J(([r])=>{const e=Ie(r).toVar(),t=w().toVar(),n=w().toVar(),i=C(Mt(e.x,t)).toVar(),s=C(Mt(e.y,n)).toVar(),o=C(vi(i)).toVar(),a=C(vi(s)).toVar(),c=X(Fm(Kn(jn(t,n),i,s),Kn(jn(t.add(w(1)),n),i.sub(1),s),Kn(jn(t,n.add(w(1))),i,s.sub(1)),Kn(jn(t.add(w(1)),n.add(w(1))),i.sub(1),s.sub(1)),o,a)).toVar();return qm(c)}),ag=J(([r])=>{const e=X(r).toVar(),t=w().toVar(),n=w().toVar(),i=w().toVar(),s=C(Mt(e.x,t)).toVar(),o=C(Mt(e.y,n)).toVar(),a=C(Mt(e.z,i)).toVar(),c=C(vi(s)).toVar(),l=C(vi(o)).toVar(),u=C(vi(a)).toVar(),h=X(Vm(Kn(jn(t,n,i),s,o,a),Kn(jn(t.add(w(1)),n,i),s.sub(1),o,a),Kn(jn(t,n.add(w(1)),i),s,o.sub(1),a),Kn(jn(t.add(w(1)),n.add(w(1)),i),s.sub(1),o.sub(1),a),Kn(jn(t,n,i.add(w(1))),s,o,a.sub(1)),Kn(jn(t.add(w(1)),n,i.add(w(1))),s.sub(1),o,a.sub(1)),Kn(jn(t,n.add(w(1)),i.add(w(1))),s,o.sub(1),a.sub(1)),Kn(jn(t.add(w(1)),n.add(w(1)),i.add(w(1))),s.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return Km(h)}),JA=ui([og,ag]),eR=J(([r])=>{const e=C(r).toVar(),t=w(Pt(e)).toVar();return un(ht(t))}),tR=J(([r])=>{const e=Ie(r).toVar(),t=w(Pt(e.x)).toVar(),n=w(Pt(e.y)).toVar();return un(ht(t,n))}),nR=J(([r])=>{const e=X(r).toVar(),t=w(Pt(e.x)).toVar(),n=w(Pt(e.y)).toVar(),i=w(Pt(e.z)).toVar();return un(ht(t,n,i))}),iR=J(([r])=>{const e=ct(r).toVar(),t=w(Pt(e.x)).toVar(),n=w(Pt(e.y)).toVar(),i=w(Pt(e.z)).toVar(),s=w(Pt(e.w)).toVar();return un(ht(t,n,i,s))}),cg=J(([r])=>{const e=C(r).toVar(),t=w(Pt(e)).toVar();return X(un(ht(t,w(0))),un(ht(t,w(1))),un(ht(t,w(2))))}),lg=J(([r])=>{const e=Ie(r).toVar(),t=w(Pt(e.x)).toVar(),n=w(Pt(e.y)).toVar();return X(un(ht(t,n,w(0))),un(ht(t,n,w(1))),un(ht(t,n,w(2))))}),ug=J(([r])=>{const e=X(r).toVar(),t=w(Pt(e.x)).toVar(),n=w(Pt(e.y)).toVar(),i=w(Pt(e.z)).toVar();return X(un(ht(t,n,i,w(0))),un(ht(t,n,i,w(1))),un(ht(t,n,i,w(2))))}),hg=J(([r])=>{const e=ct(r).toVar(),t=w(Pt(e.x)).toVar(),n=w(Pt(e.y)).toVar(),i=w(Pt(e.z)).toVar(),s=w(Pt(e.w)).toVar();return X(un(ht(t,n,i,s,w(0))),un(ht(t,n,i,s,w(1))),un(ht(t,n,i,s,w(2))))}),dg=ui([cg,lg,ug,hg]),Wa=J(([r,e,t,n])=>{const i=C(n).toVar(),s=C(t).toVar(),o=w(e).toVar(),a=X(r).toVar(),c=C(0).toVar(),l=C(1).toVar();return nn({start:w(0),end:o},({i:u})=>{c.addAssign(l.mul(QA(a))),l.mulAssign(i),a.mulAssign(s)}),c}),fg=J(([r,e,t,n])=>{const i=C(n).toVar(),s=C(t).toVar(),o=w(e).toVar(),a=X(r).toVar(),c=X(0).toVar(),l=C(1).toVar();return nn({start:w(0),end:o},({i:u})=>{c.addAssign(l.mul(JA(a))),l.mulAssign(i),a.mulAssign(s)}),c}),sR=J(([r,e,t,n])=>{const i=C(n).toVar(),s=C(t).toVar(),o=w(e).toVar(),a=X(r).toVar();return Ie(Wa(a,o,s,i),Wa(a.add(X(w(19),w(193),w(17))),o,s,i))}),rR=J(([r,e,t,n])=>{const i=C(n).toVar(),s=C(t).toVar(),o=w(e).toVar(),a=X(r).toVar(),c=X(fg(a,o,s,i)).toVar(),l=C(Wa(a.add(X(w(19),w(193),w(17))),o,s,i)).toVar();return ct(c,l)}),pg=J(([r,e,t,n,i,s,o])=>{const a=w(o).toVar(),c=C(s).toVar(),l=w(i).toVar(),u=w(n).toVar(),h=w(t).toVar(),d=w(e).toVar(),f=Ie(r).toVar(),g=X(dg(Ie(d.add(u),h.add(l)))).toVar(),_=Ie(g.x,g.y).toVar();_.subAssign(.5),_.mulAssign(c),_.addAssign(.5);const m=Ie(Ie(C(d),C(h)).add(_)).toVar(),p=Ie(m.sub(f)).toVar();return yt(a.equal(w(2)),()=>Zn(p.x).add(Zn(p.y))),yt(a.equal(w(3)),()=>Is(Zn(p.x),Zn(p.y))),Bo(p,p)}),mg=J(([r,e,t,n,i,s,o,a,c])=>{const l=w(c).toVar(),u=C(a).toVar(),h=w(o).toVar(),d=w(s).toVar(),f=w(i).toVar(),g=w(n).toVar(),_=w(t).toVar(),m=w(e).toVar(),p=X(r).toVar(),S=X(dg(X(m.add(f),_.add(d),g.add(h)))).toVar();S.subAssign(.5),S.mulAssign(u),S.addAssign(.5);const x=X(X(C(m),C(_),C(g)).add(S)).toVar(),E=X(x.sub(p)).toVar();return yt(l.equal(w(2)),()=>Zn(E.x).add(Zn(E.y).add(Zn(E.z)))),yt(l.equal(w(3)),()=>Is(Is(Zn(E.x),Zn(E.y)),Zn(E.z))),Bo(E,E)}),Br=ui([pg,mg]),oR=J(([r,e,t])=>{const n=w(t).toVar(),i=C(e).toVar(),s=Ie(r).toVar(),o=w().toVar(),a=w().toVar(),c=Ie(Mt(s.x,o),Mt(s.y,a)).toVar(),l=C(1e6).toVar();return nn({start:-1,end:w(1),name:"x",condition:"<="},({x:u})=>{nn({start:-1,end:w(1),name:"y",condition:"<="},({y:h})=>{const d=C(Br(c,u,h,o,a,i,n)).toVar();l.assign(bo(l,d))})}),yt(n.equal(w(0)),()=>{l.assign(zs(l))}),l}),aR=J(([r,e,t])=>{const n=w(t).toVar(),i=C(e).toVar(),s=Ie(r).toVar(),o=w().toVar(),a=w().toVar(),c=Ie(Mt(s.x,o),Mt(s.y,a)).toVar(),l=Ie(1e6,1e6).toVar();return nn({start:-1,end:w(1),name:"x",condition:"<="},({x:u})=>{nn({start:-1,end:w(1),name:"y",condition:"<="},({y:h})=>{const d=C(Br(c,u,h,o,a,i,n)).toVar();yt(d.lessThan(l.x),()=>{l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.y.assign(d)})})}),yt(n.equal(w(0)),()=>{l.assign(zs(l))}),l}),cR=J(([r,e,t])=>{const n=w(t).toVar(),i=C(e).toVar(),s=Ie(r).toVar(),o=w().toVar(),a=w().toVar(),c=Ie(Mt(s.x,o),Mt(s.y,a)).toVar(),l=X(1e6,1e6,1e6).toVar();return nn({start:-1,end:w(1),name:"x",condition:"<="},({x:u})=>{nn({start:-1,end:w(1),name:"y",condition:"<="},({y:h})=>{const d=C(Br(c,u,h,o,a,i,n)).toVar();yt(d.lessThan(l.x),()=>{l.z.assign(l.y),l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.z.assign(l.y),l.y.assign(d)}).elseif(d.lessThan(l.z),()=>{l.z.assign(d)})})}),yt(n.equal(w(0)),()=>{l.assign(zs(l))}),l}),lR=J(([r,e,t])=>{const n=w(t).toVar(),i=C(e).toVar(),s=X(r).toVar(),o=w().toVar(),a=w().toVar(),c=w().toVar(),l=X(Mt(s.x,o),Mt(s.y,a),Mt(s.z,c)).toVar(),u=C(1e6).toVar();return nn({start:-1,end:w(1),name:"x",condition:"<="},({x:h})=>{nn({start:-1,end:w(1),name:"y",condition:"<="},({y:d})=>{nn({start:-1,end:w(1),name:"z",condition:"<="},({z:f})=>{const g=C(Br(l,h,d,f,o,a,c,i,n)).toVar();u.assign(bo(u,g))})})}),yt(n.equal(w(0)),()=>{u.assign(zs(u))}),u}),uR=J(([r,e,t])=>{const n=w(t).toVar(),i=C(e).toVar(),s=X(r).toVar(),o=w().toVar(),a=w().toVar(),c=w().toVar(),l=X(Mt(s.x,o),Mt(s.y,a),Mt(s.z,c)).toVar(),u=Ie(1e6,1e6).toVar();return nn({start:-1,end:w(1),name:"x",condition:"<="},({x:h})=>{nn({start:-1,end:w(1),name:"y",condition:"<="},({y:d})=>{nn({start:-1,end:w(1),name:"z",condition:"<="},({z:f})=>{const g=C(Br(l,h,d,f,o,a,c,i,n)).toVar();yt(g.lessThan(u.x),()=>{u.y.assign(u.x),u.x.assign(g)}).elseif(g.lessThan(u.y),()=>{u.y.assign(g)})})})}),yt(n.equal(w(0)),()=>{u.assign(zs(u))}),u}),hR=J(([r,e,t])=>{const n=w(t).toVar(),i=C(e).toVar(),s=X(r).toVar(),o=w().toVar(),a=w().toVar(),c=w().toVar(),l=X(Mt(s.x,o),Mt(s.y,a),Mt(s.z,c)).toVar(),u=X(1e6,1e6,1e6).toVar();return nn({start:-1,end:w(1),name:"x",condition:"<="},({x:h})=>{nn({start:-1,end:w(1),name:"y",condition:"<="},({y:d})=>{nn({start:-1,end:w(1),name:"z",condition:"<="},({z:f})=>{const g=C(Br(l,h,d,f,o,a,c,i,n)).toVar();yt(g.lessThan(u.x),()=>{u.z.assign(u.y),u.y.assign(u.x),u.x.assign(g)}).elseif(g.lessThan(u.y),()=>{u.z.assign(u.y),u.y.assign(g)}).elseif(g.lessThan(u.z),()=>{u.z.assign(g)})})})}),yt(n.equal(w(0)),()=>{u.assign(zs(u))}),u});Sr.setLayout({name:"mx_select",type:"float",inputs:[{name:"b",type:"bool"},{name:"t",type:"float"},{name:"f",type:"float"}]});No.setLayout({name:"mx_negate_if",type:"float",inputs:[{name:"val",type:"float"},{name:"b",type:"bool"}]});Pt.setLayout({name:"mx_floor",type:"int",inputs:[{name:"x",type:"float"}]});Dm.setLayout({name:"mx_bilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"}]});Im.setLayout({name:"mx_bilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"}]});Om.setLayout({name:"mx_trilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"v4",type:"float"},{name:"v5",type:"float"},{name:"v6",type:"float"},{name:"v7",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});Bm.setLayout({name:"mx_trilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"v4",type:"vec3"},{name:"v5",type:"vec3"},{name:"v6",type:"vec3"},{name:"v7",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});Gm.setLayout({name:"mx_gradient_float_0",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"}]});zm.setLayout({name:"mx_gradient_float_1",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});km.setLayout({name:"mx_gradient_vec3_0",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"}]});Hm.setLayout({name:"mx_gradient_vec3_1",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});Wm.setLayout({name:"mx_gradient_scale2d_0",type:"float",inputs:[{name:"v",type:"float"}]});Xm.setLayout({name:"mx_gradient_scale3d_0",type:"float",inputs:[{name:"v",type:"float"}]});$m.setLayout({name:"mx_gradient_scale2d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});Ym.setLayout({name:"mx_gradient_scale3d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});Rn.setLayout({name:"mx_rotl32",type:"uint",inputs:[{name:"x",type:"uint"},{name:"k",type:"int"}]});Or.setLayout({name:"mx_bjfinal",type:"uint",inputs:[{name:"a",type:"uint"},{name:"b",type:"uint"},{name:"c",type:"uint"}]});un.setLayout({name:"mx_bits_to_01",type:"float",inputs:[{name:"bits",type:"uint"}]});vi.setLayout({name:"mx_fade",type:"float",inputs:[{name:"t",type:"float"}]});Zm.setLayout({name:"mx_hash_int_0",type:"uint",inputs:[{name:"x",type:"int"}]});Qm.setLayout({name:"mx_hash_int_1",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});Jm.setLayout({name:"mx_hash_int_2",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});eg.setLayout({name:"mx_hash_int_3",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"}]});tg.setLayout({name:"mx_hash_int_4",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"},{name:"yy",type:"int"}]});ng.setLayout({name:"mx_hash_vec3_0",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});ig.setLayout({name:"mx_hash_vec3_1",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});sg.setLayout({name:"mx_perlin_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"}]});rg.setLayout({name:"mx_perlin_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"}]});og.setLayout({name:"mx_perlin_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"}]});ag.setLayout({name:"mx_perlin_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"}]});eR.setLayout({name:"mx_cell_noise_float_0",type:"float",inputs:[{name:"p",type:"float"}]});tR.setLayout({name:"mx_cell_noise_float_1",type:"float",inputs:[{name:"p",type:"vec2"}]});nR.setLayout({name:"mx_cell_noise_float_2",type:"float",inputs:[{name:"p",type:"vec3"}]});iR.setLayout({name:"mx_cell_noise_float_3",type:"float",inputs:[{name:"p",type:"vec4"}]});cg.setLayout({name:"mx_cell_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"float"}]});lg.setLayout({name:"mx_cell_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec2"}]});ug.setLayout({name:"mx_cell_noise_vec3_2",type:"vec3",inputs:[{name:"p",type:"vec3"}]});hg.setLayout({name:"mx_cell_noise_vec3_3",type:"vec3",inputs:[{name:"p",type:"vec4"}]});Wa.setLayout({name:"mx_fractal_noise_float",type:"float",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});fg.setLayout({name:"mx_fractal_noise_vec3",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});sR.setLayout({name:"mx_fractal_noise_vec2",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});rR.setLayout({name:"mx_fractal_noise_vec4",type:"vec4",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});pg.setLayout({name:"mx_worley_distance_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});mg.setLayout({name:"mx_worley_distance_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"zoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});oR.setLayout({name:"mx_worley_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});aR.setLayout({name:"mx_worley_noise_vec2_0",type:"vec2",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});cR.setLayout({name:"mx_worley_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});lR.setLayout({name:"mx_worley_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});uR.setLayout({name:"mx_worley_noise_vec2_1",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});hR.setLayout({name:"mx_worley_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});const dR=J(([r])=>{const e=X(r).toVar(),t=C(e.x).toVar(),n=C(e.y).toVar(),i=C(e.z).toVar();yt(n.lessThan(1e-4),()=>X(i,i,i)).else(()=>{t.assign(Lt(6,t.sub(Oo(t))));const s=w(op(t)).toVar(),o=C(t.sub(C(s))).toVar(),a=C(i.mul(cn(1,n))).toVar(),c=C(i.mul(cn(1,n.mul(o)))).toVar(),l=C(i.mul(cn(1,n.mul(cn(1,o))))).toVar();return yt(s.equal(w(0)),()=>X(i,l,a)).elseif(s.equal(w(1)),()=>X(c,i,a)).elseif(s.equal(w(2)),()=>X(a,i,l)).elseif(s.equal(w(3)),()=>X(a,c,i)).elseif(s.equal(w(4)),()=>X(l,a,i)),X(i,a,c)})}),fR=J(([r])=>{const e=X(r).toVar(),t=C(e.x).toVar(),n=C(e.y).toVar(),i=C(e.z).toVar(),s=C(bo(t,bo(n,i))).toVar(),o=C(Is(t,Is(n,i))).toVar(),a=C(o.sub(s)).toVar(),c=C().toVar(),l=C().toVar(),u=C().toVar();return u.assign(o),yt(o.greaterThan(0),()=>{l.assign(a.div(o))}).else(()=>{l.assign(0)}),yt(l.lessThanEqual(0),()=>{c.assign(0)}).else(()=>{yt(t.greaterThanEqual(o),()=>{c.assign(n.sub(i).div(a))}).elseif(n.greaterThanEqual(o),()=>{c.assign(oi(2,i.sub(t).div(a)))}).else(()=>{c.assign(oi(4,t.sub(n).div(a)))}),c.mulAssign(1/6),yt(c.lessThan(0),()=>{c.addAssign(1)})}),X(c,l,u)});dR.setLayout({name:"mx_hsvtorgb",type:"vec3",inputs:[{name:"hsv",type:"vec3"}]});fR.setLayout({name:"mx_rgbtohsv",type:"vec3",inputs:[{name:"c",type:"vec3"}]});const pR=J(([r])=>{const e=X(r).toVar(),t=Vf(ip(e,X(.04045))).toVar(),n=X(e.div(12.92)).toVar(),i=X(Bu(Is(e.add(X(.055)),X(0)).div(1.055),X(2.4))).toVar();return Li(n,i,t)});pR.setLayout({name:"mx_srgb_texture_to_lin_rec709",type:"vec3",inputs:[{name:"color",type:"vec3"}]});function mR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function gR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}class _R{constructor(){this.renderItems=[],this.renderItemsIndex=0,this.opaque=[],this.transparent=[],this.lightsNode=new wp([]),this.lightsArray=[],this.occlusionQueryCount=0}begin(){return this.renderItemsIndex=0,this.opaque.length=0,this.transparent.length=0,this.lightsArray.length=0,this.occlusionQueryCount=0,this}getNextRenderItem(e,t,n,i,s,o){let a=this.renderItems[this.renderItemsIndex];return a===void 0?(a={id:e.id,object:e,geometry:t,material:n,groupOrder:i,renderOrder:e.renderOrder,z:s,group:o},this.renderItems[this.renderItemsIndex]=a):(a.id=e.id,a.object=e,a.geometry=t,a.material=n,a.groupOrder=i,a.renderOrder=e.renderOrder,a.z=s,a.group=o),this.renderItemsIndex++,a}push(e,t,n,i,s,o){const a=this.getNextRenderItem(e,t,n,i,s,o);e.occlusionTest===!0&&this.occlusionQueryCount++,(n.transparent===!0?this.transparent:this.opaque).push(a)}unshift(e,t,n,i,s,o){const a=this.getNextRenderItem(e,t,n,i,s,o);(n.transparent===!0?this.transparent:this.opaque).unshift(a)}pushLight(e){this.lightsArray.push(e)}getLightsNode(){return this.lightsNode.fromLights(this.lightsArray)}sort(e,t){this.opaque.length>1&&this.opaque.sort(e||mR),this.transparent.length>1&&this.transparent.sort(t||gR)}finish(){this.lightsNode.fromLights(this.lightsArray);for(let e=this.renderItemsIndex,t=this.renderItems.length;e<t;e++){const n=this.renderItems[e];if(n.id===null)break;n.id=null,n.object=null,n.geometry=null,n.material=null,n.groupOrder=null,n.renderOrder=null,n.z=null,n.group=null}}}class xR{constructor(){this.lists=new Us}get(e,t){const n=this.lists,i=[e,t];let s=n.get(i);return s===void 0&&(s=new _R,n.set(i,s)),s}dispose(){this.lists=new Us}}let vR=0;class SR{constructor(){this.id=vR++,this.color=!0,this.clearColor=!0,this.clearColorValue={r:0,g:0,b:0,a:1},this.depth=!0,this.clearDepth=!0,this.clearDepthValue=1,this.stencil=!0,this.clearStencil=!0,this.clearStencilValue=1,this.viewport=!1,this.viewportValue=new ot,this.scissor=!1,this.scissorValue=new ot,this.textures=null,this.depthTexture=null,this.activeCubeFace=0,this.sampleCount=1,this.width=0,this.height=0}}class yR{constructor(){this.chainMaps={}}get(e,t,n=null){const i=[e,t];let s;if(n===null)s="default";else{let c,l;n.isWebGLMultipleRenderTargets?(c=n.texture[0].format,l=n.texture.length):(c=n.texture.format,l=1),s=`${l}:${c}:${n.samples}:${n.depthBuffer}:${n.stencilBuffer}`}const o=this.getChainMap(s);let a=o.get(i);return a===void 0&&(a=new SR,o.set(i,a)),n!==null&&(a.sampleCount=n.samples===0?1:n.samples),a}getChainMap(e){return this.chainMaps[e]||(this.chainMaps[e]=new Us)}dispose(){this.chainMaps={}}}const TR=new U;class MR extends Gs{constructor(e,t){super(),this.backend=e,this.info=t}updateRenderTarget(e,t=0){const n=this.get(e),i=e.samples===0?1:e.samples,s=n.depthTextureMips||(n.depthTextureMips={});let o,a;e.isWebGLMultipleRenderTargets?(a=e.texture,o=e.texture[0]):(a=[e.texture],o=e.texture);const c=this.getSize(o),l=c.width>>t,u=c.height>>t;let h=e.depthTexture||s[t],d=!1;h===void 0&&(h=new Vs,h.format=Ri,h.type=_i,h.image.width=l,h.image.height=u,s[t]=h),(n.width!==c.width||c.height!==n.height)&&(d=!0,h.needsUpdate=!0,h.image.width=l,h.image.height=u),n.width=c.width,n.height=c.height,n.textures=a,n.depthTexture=h,n.depth=e.depthBuffer,n.stencil=e.stencilBuffer,n.sampleCount!==i&&(d=!0,h.needsUpdate=!0,n.sampleCount=i);const f={sampleCount:i};for(let g=0;g<a.length;g++){const _=a[g];d&&(_.needsUpdate=!0),this.updateTexture(_,f)}if(this.updateTexture(h,f),n.initialized!==!0){n.initialized=!0;const g=()=>{if(e.removeEventListener("dispose",g),a!==void 0)for(let _=0;_<a.length;_++)this._destroyTexture(a[_]);else this._destroyTexture(o);this._destroyTexture(h)};e.addEventListener("dispose",g)}}updateTexture(e,t={}){const n=this.get(e);if(n.initialized===!0&&n.version===e.version)return;const i=e.isRenderTargetTexture||e.isDepthTexture||e.isFramebufferTexture,s=this.backend;i&&n.initialized===!0&&(s.destroySampler(e),s.destroyTexture(e));const{width:o,height:a,depth:c}=this.getSize(e);if(t.width=o,t.height=a,t.depth=c,t.needsMipmaps=this.needsMipmaps(e),t.levels=t.needsMipmaps?this.getMipLevels(e,o,a):1,i||e.isStorageTexture===!0)s.createSampler(e),s.createTexture(e,t);else if(n.initialized!==!0&&s.createSampler(e),e.version>0){const u=e.image;if(u===void 0)console.warn("THREE.Renderer: Texture marked for update but image is undefined.");else if(u.complete===!1)console.warn("THREE.Renderer: Texture marked for update but image is incomplete.");else{if(e.images){const h=[];for(const d of e.images)h.push(d);t.images=h}else t.image=u;(n.isDefaultTexture===void 0||n.isDefaultTexture===!0)&&(s.createTexture(e,t),n.isDefaultTexture=!1),s.updateTexture(e,t),t.needsMipmaps&&e.mipmaps.length===0&&s.generateMipmaps(e)}}else s.createDefaultTexture(e),n.isDefaultTexture=!0;if(n.initialized!==!0){n.initialized=!0,this.info.memory.textures++;const l=()=>{e.removeEventListener("dispose",l),this._destroyTexture(e),this.info.memory.textures--};e.addEventListener("dispose",l)}n.version=e.version}getSize(e,t=TR){let n=e.images?e.images[0]:e.image;return n?(n.image!==void 0&&(n=n.image),t.width=n.width,t.height=n.height,t.depth=e.isCubeTexture?6:n.depth||1):t.width=t.height=t.depth=1,t}getMipLevels(e,t,n){let i;return e.isCompressedTexture?i=e.mipmaps.length:i=Math.floor(Math.log2(Math.max(t,n)))+1,i}needsMipmaps(e){return this.isEnvironmentTexture(e)?!0:e.isCompressedTexture===!0||e.minFilter!==mt&&e.minFilter!==Tn}isEnvironmentTexture(e){const t=e.mapping;return t===br||t===Ar||t===rs||t===os}_destroyTexture(e){this.backend.destroySampler(e),this.backend.destroyTexture(e),this.delete(e)}}class Zu extends Pe{constructor(e,t,n,i=1){super(e,t,n),this.a=i}set(e,t,n,i=1){return this.a=i,super.set(e,t,n)}copy(e){return e.a!==void 0&&(this.a=e.a),super.copy(e)}clone(){return new this.constructor(this.r,this.g,this.b,this.a)}}const pi=new Zu;class ER extends Gs{constructor(e,t){super(),this.renderer=e,this.nodes=t}update(e,t,n){const i=this.renderer,s=this.nodes.getBackgroundNode(e)||e.background;let o=!1;if(s===null)i._clearColor.getRGB(pi,this.renderer.currentColorSpace),pi.a=i._clearColor.a;else if(s.isColor===!0)s.getRGB(pi,this.renderer.currentColorSpace),pi.a=1,o=!0;else if(s.isNode===!0){const a=this.get(e),c=s;pi.copy(i._clearColor);let l=a.backgroundMesh;if(l===void 0){const h=bi(ct(c),{getUV:()=>ac,getTextureLevel:()=>hb}).mul(db);let d=wl();d=d.setZ(d.w);const f=new bn;f.side=$t,f.depthTest=!1,f.depthWrite=!1,f.fog=!1,f.vertexNode=d,f.fragmentNode=h,a.backgroundMeshNode=h,a.backgroundMesh=l=new an(new nc(1,32,32),f),l.frustumCulled=!1,l.onBeforeRender=function(g,_,m){this.matrixWorld.copyPosition(m.matrixWorld)}}const u=c.getCacheKey();a.backgroundCacheKey!==u&&(a.backgroundMeshNode.node=ct(c),l.material.needsUpdate=!0,a.backgroundCacheKey=u),t.unshift(l,l.geometry,l.material,0,0,null)}else console.error("THREE.Renderer: Unsupported background configuration.",s);if(i.autoClear===!0||o===!0){pi.multiplyScalar(pi.a);const a=n.clearColorValue;a.r=pi.r,a.g=pi.g,a.b=pi.b,a.a=pi.a,n.depthClearValue=i._clearDepth,n.stencilClearValue=i._clearStencil,n.clearColor=i.autoClearColor===!0,n.clearDepth=i.autoClearDepth===!0,n.clearStencil=i.autoClearStencil===!0}else n.clearColor=!1,n.clearDepth=!1,n.clearStencil=!1}}class bR{constructor(e,t,n,i,s,o,a){this.vertexShader=e,this.fragmentShader=t,this.computeShader=n,this.nodeAttributes=i,this.bindings=s,this.updateNodes=o,this.updateBeforeNodes=a,this.usedTimes=0}createBindings(){const e=[];for(const t of this.bindings){let n=t;t.shared!==!0&&(n=t.clone()),e.push(n)}return e}}class AR extends Gs{constructor(e,t){super(),this.renderer=e,this.backend=t,this.nodeFrame=new md,this.nodeBuilderCache=new Map,this.callHashCache=new Us,this.groupsData=new Us}updateGroup(e){const t=e.groupNode,n=t.name;if(n===Lf.name)return!0;if(n===Qy.name){const o=this.get(e),a=this.nodeFrame.renderId;return o.renderId!==a?(o.renderId=a,!0):!1}if(n===Zy.name){const o=this.get(e),a=this.nodeFrame.frameId;return o.frameId!==a?(o.frameId=a,!0):!1}const i=[t,e];let s=this.groupsData.get(i);return s===void 0&&this.groupsData.set(i,s={}),s.version!==t.version?(s.version=t.version,!0):!1}getForRenderCacheKey(e){return e.initialCacheKey}getForRender(e){const t=this.get(e);let n=t.nodeBuilderState;if(n===void 0){const{nodeBuilderCache:i}=this,s=this.getForRenderCacheKey(e);if(n=i.get(s),n===void 0){const o=this.backend.createNodeBuilder(e.object,this.renderer,e.scene);o.material=e.material,o.context.material=e.material,o.lightsNode=e.lightsNode,o.environmentNode=this.getEnvironmentNode(e.scene),o.fogNode=this.getFogNode(e.scene),o.toneMappingNode=this.getToneMappingNode(),o.build(),n=this._createNodeBuilderState(o),i.set(s,n)}n.usedTimes++,t.nodeBuilderState=n}return n}delete(e){if(e.isRenderObject){const t=this.get(e).nodeBuilderState;t.usedTimes--,t.usedTimes===0&&this.nodeBuilderCache.delete(this.getForRenderCacheKey(e))}return super.delete(e)}getForCompute(e){const t=this.get(e);let n=t.nodeBuilderState;if(n===void 0){const i=this.backend.createNodeBuilder(e,this.renderer);i.build(),n=this._createNodeBuilderState(i),t.nodeBuilderState=i}return n}_createNodeBuilderState(e){return new bR(e.vertexShader,e.fragmentShader,e.computeShader,e.getAttributesArray(),e.getBindings(),e.updateNodes,e.updateBeforeNodes)}getEnvironmentNode(e){return e.environmentNode||this.get(e).environmentNode||null}getBackgroundNode(e){return e.backgroundNode||this.get(e).backgroundNode||null}getFogNode(e){return e.fogNode||this.get(e).fogNode||null}getToneMappingNode(){return this.isToneMappingState===!1?null:this.renderer.toneMappingNode||this.get(this.renderer).toneMappingNode||null}getCacheKey(e,t){const n=[e,t],i=this.renderer.info.calls;let s=this.callHashCache.get(n);if(s===void 0||s.callId!==i){const o=this.getEnvironmentNode(e),a=this.getFogNode(e),c=this.getToneMappingNode(),l=[];t&&l.push(t.getCacheKey()),o&&l.push(o.getCacheKey()),a&&l.push(a.getCacheKey()),c&&l.push(c.getCacheKey()),s={callId:i,cacheKey:l.join(",")},this.callHashCache.set(n,s)}return s.cacheKey}updateScene(e){this.updateEnvironment(e),this.updateFog(e),this.updateBackground(e),this.updateToneMapping()}get isToneMappingState(){const t=this.renderer.getRenderTarget();return!(t&&t.isCubeRenderTarget)}updateToneMapping(){const e=this.renderer,t=this.get(e),n=e.toneMapping;if(this.isToneMappingState&&n!==Wn){if(t.toneMapping!==n){const i=t.rendererToneMappingNode||Xb(n,Gn("toneMappingExposure","float",e));i.toneMapping=n,t.rendererToneMappingNode=i,t.toneMappingNode=i,t.toneMapping=n}}else delete t.toneMappingNode,delete t.toneMapping}updateBackground(e){const t=this.get(e),n=e.background;if(n){if(t.background!==n){let i=null;if(n.isCubeTexture===!0)i=Ro(n,ac);else if(n.isTexture===!0){let s=null;n.mapping===br||n.mapping===Ar?s=uc():s=CE,i=Cn(n,s).setUpdateMatrix(!0)}else n.isColor!==!0&&console.error("WebGPUNodes: Unsupported background configuration.",n);t.backgroundNode=i,t.background=n}}else t.backgroundNode&&(delete t.backgroundNode,delete t.background)}updateFog(e){const t=this.get(e),n=e.fog;if(n){if(t.fog!==n){let i=null;n.isFogExp2?i=xm(Gn("color","color",n),Gn("density","float",n)):n.isFog?i=gm(Gn("color","color",n),Gn("near","float",n),Gn("far","float",n)):console.error("WebGPUNodes: Unsupported fog configuration.",n),t.fogNode=i,t.fog=n}}else delete t.fogNode,delete t.fog}updateEnvironment(e){const t=this.get(e),n=e.environment;if(n){if(t.environment!==n){let i=null;n.isCubeTexture===!0?i=Ro(n):n.isTexture===!0?i=Cn(n):console.error("Nodes: Unsupported environment configuration.",n),t.environmentNode=i,t.environment=n}}else t.environmentNode&&(delete t.environmentNode,delete t.environment)}getNodeFrame(e=this.renderer,t=null,n=null,i=null,s=null){const o=this.nodeFrame;return o.renderer=e,o.scene=t,o.object=n,o.camera=i,o.material=s,o}getNodeFrameForRender(e){return this.getNodeFrame(e.renderer,e.scene,e.object,e.camera,e.material)}updateBefore(e){const t=this.getNodeFrameForRender(e),n=e.getNodeBuilderState();for(const i of n.updateBeforeNodes)t.updateBeforeNode(i)}updateForCompute(e){const t=this.getNodeFrame(),n=this.getForCompute(e);for(const i of n.updateNodes)t.updateNode(i)}updateForRender(e){const t=this.getNodeFrameForRender(e),n=e.getNodeBuilderState();for(const i of n.updateNodes)t.updateNode(i)}dispose(){super.dispose(),this.nodeFrame=new md,this.nodeBuilderCache=new Map}}const RR=new Eu,nl=new Be,il=new ot,sl=new Qa,ma=new Rt,qr=new U;class wR{constructor(e,t={}){this.isRenderer=!0;const{logarithmicDepthBuffer:n=!1}=t;this.domElement=e.getDomElement(),this.backend=e,this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.logarithmicDepthBuffer=n,this.outputColorSpace=Ee,this.toneMapping=Wn,this.toneMappingExposure=1,this.sortObjects=!0,this.depth=!0,this.stencil=!0,this.info=new zy,this._pixelRatio=1,this._width=this.domElement.width,this._height=this.domElement.height,this._viewport=new ot(0,0,this._width,this._height),this._scissor=new ot(0,0,this._width,this._height),this._scissorTest=!1,this._properties=null,this._attributes=null,this._geometries=null,this._nodes=null,this._animation=null,this._bindings=null,this._objects=null,this._pipelines=null,this._renderLists=null,this._renderContexts=null,this._textures=null,this._background=null,this._currentRenderContext=null,this._opaqueSort=null,this._transparentSort=null,this._clearColor=new Zu(0),this._clearDepth=1,this._clearStencil=0,this._renderTarget=null,this._activeCubeFace=0,this._activeMipmapLevel=0,this._renderObjectFunction=null,this._currentRenderObjectFunction=null,this._initialized=!1,this._initPromise=null,this.shadowMap={enabled:!1,type:null},this.xr={enabled:!1}}async init(){if(this._initialized)throw new Error("Renderer: Backend has already been initialized.");return this._initPromise!==null?this._initPromise:(this._initPromise=new Promise(async(e,t)=>{const n=this.backend;try{await n.init(this)}catch(i){t(i);return}this._nodes=new AR(this,n),this._animation=new Py(this._nodes,this.info),this._attributes=new By(n),this._background=new ER(this,this._nodes),this._geometries=new Gy(this._attributes,this.info),this._textures=new MR(n,this.info),this._pipelines=new Xy(n,this._nodes),this._bindings=new $y(n,this._nodes,this._textures,this._attributes,this._pipelines,this.info),this._objects=new Iy(this,this._nodes,this._geometries,this._pipelines,this._bindings,this.info),this._renderLists=new xR,this._renderContexts=new yR,this._initialized=!0,e()}),this._initPromise)}get coordinateSystem(){return this.backend.coordinateSystem}async compile(){console.warn("THREE.Renderer: .compile() is not implemented yet.")}async render(e,t){this._initialized===!1&&await this.init();const n=this._nodes.nodeFrame,i=n.renderId,s=this._currentRenderContext,o=this._currentRenderObjectFunction,a=e.isScene===!0?e:RR,c=this._renderTarget,l=this._renderContexts.get(e,t,c),u=this._activeCubeFace,h=this._activeMipmapLevel;this._currentRenderContext=l,this._currentRenderObjectFunction=this._renderObjectFunction||this.renderObject,this.info.calls++,this.info.render.calls++,n.renderId=this.info.calls;const d=this.coordinateSystem;t.coordinateSystem!==d&&(t.coordinateSystem=d,t.updateProjectionMatrix()),e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),this.info.autoReset===!0&&this.info.reset();let f=this._viewport,g=this._scissor,_=this._pixelRatio;c!==null&&(f=c.viewport,g=c.scissor,_=1),this.getDrawingBufferSize(nl),il.set(0,0,nl.width,nl.height);const m=f.minDepth===void 0?0:f.minDepth,p=f.maxDepth===void 0?1:f.maxDepth;l.viewportValue.copy(f).multiplyScalar(_).floor(),l.viewportValue.width>>=h,l.viewportValue.height>>=h,l.viewportValue.minDepth=m,l.viewportValue.maxDepth=p,l.viewport=l.viewportValue.equals(il)===!1,l.scissorValue.copy(g).multiplyScalar(_).floor(),l.scissor=this._scissorTest&&l.scissorValue.equals(il)===!1,l.scissorValue.width>>=h,l.scissorValue.height>>=h,l.depth=this.depth,l.stencil=this.stencil,a.onBeforeRender(this,e,t,c),ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),sl.setFromProjectionMatrix(ma,d);const S=this._renderLists.get(e,t);if(S.begin(),this._projectObject(e,t,0,S),S.finish(),this.sortObjects===!0&&S.sort(this._opaqueSort,this._transparentSort),c!==null){this._textures.updateRenderTarget(c,h);const A=this._textures.get(c);l.textures=A.textures,l.depthTexture=A.depthTexture,l.width=A.width,l.height=A.height,l.renderTarget=c}else l.textures=null,l.depthTexture=null,l.width=this.domElement.width,l.height=this.domElement.height;l.width>>=h,l.height>>=h,l.activeCubeFace=u,l.activeMipmapLevel=h,l.occlusionQueryCount=S.occlusionQueryCount,this._nodes.updateScene(a),this._background.update(a,S,l),this.backend.beginRender(l);const x=S.opaque,E=S.transparent,L=S.lightsNode;x.length>0&&this._renderObjects(x,t,a,L),E.length>0&&this._renderObjects(E,t,a,L),this.backend.finishRender(l),n.renderId=i,this._currentRenderContext=s,this._currentRenderObjectFunction=o,a.onAfterRender(this,e,t,c)}getMaxAnisotropy(){return this.backend.getMaxAnisotropy()}getActiveCubeFace(){return this._activeCubeFace}getActiveMipmapLevel(){return this._activeMipmapLevel}async setAnimationLoop(e){this._initialized===!1&&await this.init(),this._animation.setAnimationLoop(e)}getArrayBuffer(e){return console.warn("THREE.Renderer: getArrayBuffer() is deprecated. Use getArrayBufferAsync() instead."),this.getArrayBufferAsync(e)}async getArrayBufferAsync(e){return await this.backend.getArrayBufferAsync(e)}getContext(){return this._context}getPixelRatio(){return this._pixelRatio}getDrawingBufferSize(e){return e.set(this._width*this._pixelRatio,this._height*this._pixelRatio).floor()}getSize(e){return e.set(this._width,this._height)}setPixelRatio(e=1){this._pixelRatio=e,this.setSize(this._width,this._height,!1)}setDrawingBufferSize(e,t,n){this._width=e,this._height=t,this._pixelRatio=n,this.domElement.width=Math.floor(e*n),this.domElement.height=Math.floor(t*n),this.setViewport(0,0,e,t),this._initialized&&this.backend.updateSize()}setSize(e,t,n=!0){this._width=e,this._height=t,this.domElement.width=Math.floor(e*this._pixelRatio),this.domElement.height=Math.floor(t*this._pixelRatio),n===!0&&(this.domElement.style.width=e+"px",this.domElement.style.height=t+"px"),this.setViewport(0,0,e,t),this._initialized&&this.backend.updateSize()}setOpaqueSort(e){this._opaqueSort=e}setTransparentSort(e){this._transparentSort=e}getScissor(e){const t=this._scissor;return e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height,e}setScissor(e,t,n,i){const s=this._scissor;e.isVector4?s.copy(e):s.set(e,t,n,i)}getScissorTest(){return this._scissorTest}setScissorTest(e){this._scissorTest=e}getViewport(e){return e.copy(this._viewport)}setViewport(e,t,n,i,s=0,o=1){const a=this._viewport;e.isVector4?a.copy(e):a.set(e,t,n,i),a.minDepth=s,a.maxDepth=o}getClearColor(e){return e.copy(this._clearColor)}setClearColor(e,t=1){this._clearColor.set(e),this._clearColor.a=t}getClearAlpha(){return this._clearColor.a}setClearAlpha(e){this._clearColor.a=e}getClearDepth(){return this._clearDepth}setClearDepth(e){this._clearDepth=e}getClearStencil(){return this._clearStencil}setClearStencil(e){this._clearStencil=e}isOccluded(e){const t=this._currentRenderContext;return t&&this.backend.isOccluded(t,e)}clear(e=!0,t=!0,n=!0){let i=null;const s=this._renderTarget;s!==null&&(this._textures.updateRenderTarget(s),i=this._textures.get(s)),this.backend.clear(e,t,n,i)}clearColor(){this.clear(!0,!1,!1)}clearDepth(){this.clear(!1,!0,!1)}clearStencil(){this.clear(!1,!1,!0)}get currentColorSpace(){const e=this._renderTarget;if(e!==null){const t=e.texture;return(Array.isArray(t)?t[0]:t).colorSpace}return this.outputColorSpace}dispose(){this.info.dispose(),this._animation.dispose(),this._objects.dispose(),this._properties.dispose(),this._pipelines.dispose(),this._nodes.dispose(),this._bindings.dispose(),this._renderLists.dispose(),this._renderContexts.dispose(),this._textures.dispose(),this.setRenderTarget(null),this.setAnimationLoop(null)}setRenderTarget(e,t=0,n=0){this._renderTarget=e,this._activeCubeFace=t,this._activeMipmapLevel=n}getRenderTarget(){return this._renderTarget}setRenderObjectFunction(e){this._renderObjectFunction=e}getRenderObjectFunction(){return this._renderObjectFunction}async compute(e){this._initialized===!1&&await this.init();const t=this._nodes.nodeFrame,n=t.renderId;this.info.calls++,this.info.compute.calls++,t.renderId=this.info.calls;const i=this.backend,s=this._pipelines,o=this._bindings,a=this._nodes,c=Array.isArray(e)?e:[e];if(c[0]===void 0||c[0].isComputeNode!==!0)throw new Error("THREE.Renderer: .compute() expects a ComputeNode.");i.beginCompute(e);for(const l of c){if(s.has(l)===!1){const d=()=>{l.removeEventListener("dispose",d),s.delete(l),o.delete(l),a.delete(l)};l.addEventListener("dispose",d),l.onInit({renderer:this})}a.updateForCompute(l),o.updateForCompute(l);const u=o.getForCompute(l),h=s.getForCompute(l,u);i.compute(e,l,u,h)}i.finishCompute(e),t.renderId=n}hasFeature(e){return this.backend.hasFeature(e)}copyFramebufferToTexture(e){const t=this._currentRenderContext;this._textures.updateTexture(e),this.backend.copyFramebufferToTexture(e,t)}readRenderTargetPixelsAsync(e,t,n,i,s){return this.backend.copyTextureToBuffer(e.texture,t,n,i,s)}_projectObject(e,t,n,i){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)i.pushLight(e);else if(e.isSprite){if(!e.frustumCulled||sl.intersectsSprite(e)){this.sortObjects===!0&&qr.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ma);const a=e.geometry,c=e.material;c.visible&&i.push(e,a,c,n,qr.z,null)}}else if(e.isLineLoop)console.error("THREE.Renderer: Objects of type THREE.LineLoop are not supported. Please use THREE.Line or THREE.LineSegments.");else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||sl.intersectsObject(e))){const a=e.geometry,c=e.material;if(this.sortObjects===!0&&(a.boundingSphere===null&&a.computeBoundingSphere(),qr.copy(a.boundingSphere.center).applyMatrix4(e.matrixWorld).applyMatrix4(ma)),Array.isArray(c)){const l=a.groups;for(let u=0,h=l.length;u<h;u++){const d=l[u],f=c[d.materialIndex];f&&f.visible&&i.push(e,a,f,n,qr.z,d)}}else c.visible&&i.push(e,a,c,n,qr.z,null)}}const o=e.children;for(let a=0,c=o.length;a<c;a++)this._projectObject(o[a],t,n,i)}_renderObjects(e,t,n,i){for(let s=0,o=e.length;s<o;s++){const a=e[s],{object:c,geometry:l,material:u,group:h}=a;if(t.isArrayCamera){const d=t.cameras;for(let f=0,g=d.length;f<g;f++){const _=d[f];if(c.layers.test(_.layers)){const m=_.viewport,p=m.minDepth===void 0?0:m.minDepth,S=m.maxDepth===void 0?1:m.maxDepth,x=this._currentRenderContext.viewportValue;x.copy(m).multiplyScalar(this._pixelRatio).floor(),x.minDepth=p,x.maxDepth=S,this.backend.updateViewport(this._currentRenderContext),this._currentRenderObjectFunction(c,n,_,l,u,h,i)}}}else this._currentRenderObjectFunction(c,n,t,l,u,h,i)}}renderObject(e,t,n,i,s,o,a){let c;if(e.onBeforeRender(this,t,n,i,s,o),s.onBeforeRender(this,t,n,i,s,o),t.overrideMaterial!==null){const l=t.overrideMaterial;s.positionNode&&s.positionNode.isNode&&(c=l.positionNode,l.positionNode=s.positionNode),s=l}s.transparent===!0&&s.side===zn&&s.forceSinglePass===!1?(s.side=$t,this._renderObjectDirect(e,s,t,n,a,"backSide"),s.side=Ai,this._renderObjectDirect(e,s,t,n,a),s.side=zn):this._renderObjectDirect(e,s,t,n,a),c!==void 0&&(t.overrideMaterial.positionNode=c),e.onAfterRender(this,t,n,i,s,o)}_renderObjectDirect(e,t,n,i,s,o){const a=this._objects.get(e,t,n,i,s,this._currentRenderContext,o);this._nodes.updateBefore(a),e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),this._nodes.updateForRender(a),this._geometries.updateForRender(a),this._bindings.updateForRender(a),this._pipelines.updateForRender(a),this.backend.draw(a,this.info)}}class Qu{constructor(e=""){this.name=e,this.visibility=0}setVisibility(e){this.visibility|=e}clone(){return Object.assign(new this.constructor,this)}}function gg(r){return r+(ts-r%ts)%ts}function NR(r,e=4){const n=_g(e)*r;return gg(n)}function _g(r){return r+(4-r%4)%4}class xg extends Qu{constructor(e,t=null){super(e),this.isBuffer=!0,this.bytesPerElement=Float32Array.BYTES_PER_ELEMENT,this._buffer=t}get byteLength(){return gg(this._buffer.byteLength)}get buffer(){return this._buffer}update(){return!0}}class Ju extends xg{constructor(e,t=null){super(e,t),this.isUniformBuffer=!0}}class CR extends Ju{constructor(e){super(e),this.isUniformsGroup=!0,this.uniforms=[]}addUniform(e){return this.uniforms.push(e),this}removeUniform(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}get buffer(){let e=this._buffer;if(e===null){const t=this.byteLength;e=new Float32Array(new ArrayBuffer(t)),this._buffer=e}return e}get byteLength(){let e=0;for(let t=0,n=this.uniforms.length;t<n;t++){const i=this.uniforms[t],s=e%ts,o=ts-s;s!==0&&o-i.boundary<0?e+=ts-s:s%i.boundary!==0&&(e+=s%i.boundary),i.offset=e/this.bytesPerElement,e+=i.itemSize*this.bytesPerElement}return Math.ceil(e/ts)*ts}update(){let e=!1;for(const t of this.uniforms)this.updateByType(t)===!0&&(e=!0);return e}updateByType(e){if(e.isFloatUniform)return this.updateNumber(e);if(e.isVector2Uniform)return this.updateVector2(e);if(e.isVector3Uniform)return this.updateVector3(e);if(e.isVector4Uniform)return this.updateVector4(e);if(e.isColorUniform)return this.updateColor(e);if(e.isMatrix3Uniform)return this.updateMatrix3(e);if(e.isMatrix4Uniform)return this.updateMatrix4(e);console.error("THREE.WebGPUUniformsGroup: Unsupported uniform type.",e)}updateNumber(e){let t=!1;const n=this.buffer,i=e.getValue(),s=e.offset;return n[s]!==i&&(n[s]=i,t=!0),t}updateVector2(e){let t=!1;const n=this.buffer,i=e.getValue(),s=e.offset;return(n[s+0]!==i.x||n[s+1]!==i.y)&&(n[s+0]=i.x,n[s+1]=i.y,t=!0),t}updateVector3(e){let t=!1;const n=this.buffer,i=e.getValue(),s=e.offset;return(n[s+0]!==i.x||n[s+1]!==i.y||n[s+2]!==i.z)&&(n[s+0]=i.x,n[s+1]=i.y,n[s+2]=i.z,t=!0),t}updateVector4(e){let t=!1;const n=this.buffer,i=e.getValue(),s=e.offset;return(n[s+0]!==i.x||n[s+1]!==i.y||n[s+2]!==i.z||n[s+4]!==i.w)&&(n[s+0]=i.x,n[s+1]=i.y,n[s+2]=i.z,n[s+3]=i.w,t=!0),t}updateColor(e){let t=!1;const n=this.buffer,i=e.getValue(),s=e.offset;return(n[s+0]!==i.r||n[s+1]!==i.g||n[s+2]!==i.b)&&(n[s+0]=i.r,n[s+1]=i.g,n[s+2]=i.b,t=!0),t}updateMatrix3(e){let t=!1;const n=this.buffer,i=e.getValue().elements,s=e.offset;return(n[s+0]!==i[0]||n[s+1]!==i[1]||n[s+2]!==i[2]||n[s+4]!==i[3]||n[s+5]!==i[4]||n[s+6]!==i[5]||n[s+8]!==i[6]||n[s+9]!==i[7]||n[s+10]!==i[8])&&(n[s+0]=i[0],n[s+1]=i[1],n[s+2]=i[2],n[s+4]=i[3],n[s+5]=i[4],n[s+6]=i[5],n[s+8]=i[6],n[s+9]=i[7],n[s+10]=i[8],t=!0),t}updateMatrix4(e){let t=!1;const n=this.buffer,i=e.getValue().elements,s=e.offset;return LR(n,i,s)===!1&&(n.set(i,s),t=!0),t}}function LR(r,e,t){for(let n=0,i=e.length;n<i;n++)if(r[t+n]!==e[n])return!1;return!0}let PR=0;class vg extends CR{constructor(e,t){super(e),this.id=PR++,this.groupNode=t,this.isNodeUniformsGroup=!0}get shared(){return this.groupNode.shared}getNodes(){const e=[];for(const t of this.uniforms){const n=t.nodeUniform.node;if(!n)throw new Error("NodeUniformsGroup: Uniform has no node.");e.push(n)}return e}}let UR=0;class DR extends Qu{constructor(e,t){super(e),this.id=UR++,this.texture=t,this.version=t?t.version:0,this.store=!1,this.isSampledTexture=!0}get needsBindingsUpdate(){const{texture:e,version:t}=this;return e.isVideoTexture?!0:t!==e.version}update(){const{texture:e,version:t}=this;return t!==e.version?(this.version=e.version,!0):!1}}class eh extends DR{constructor(e,t){super(e,t?t.value:null),this.textureNode=t}get needsBindingsUpdate(){return this.textureNode.value!==this.texture||super.needsBindingsUpdate}update(){const{textureNode:e}=this;return this.texture!==e.value?(this.texture=e.value,!0):super.update()}}class Sg extends eh{constructor(e,t){super(e,t),this.isSampledCubeTexture=!0}}const IR={[D.ATAN2]:"atan",textureDimensions:"textureSize"},FR={low:"lowp",medium:"mediump",high:"highp"},OR={instance:!0},bd=`
precision highp float;
precision highp int;
precision mediump sampler2DArray;
precision lowp sampler2DShadow;
`;class BR extends zp{constructor(e,t,n=null){super(e,t,new ZA,n),this.uniformGroups={}}getMethod(e){return IR[e]||e}getPropertyName(e,t){return e.isOutputStructVar?"":super.getPropertyName(e,t)}buildFunctionCode(e){const t=e.layout,n=this.flowShaderNode(e),i=[];for(const o of t.inputs)i.push(this.getType(o.type)+" "+o.name);return`${this.getType(t.type)} ${t.name}( ${i.join(", ")} ) {

	${n.vars}

${n.code}
	return ${n.result};

}`}generateTextureLoad(e,t,n,i,s="0"){return i?`texelFetch( ${t}, ivec3( ${n}, ${i} ), ${s} )`:`texelFetch( ${t}, ${n}, ${s} )`}generateTexture(e,t,n,i){return e.isTextureCube?`textureCube( ${t}, ${n} )`:e.isDepthTexture?`texture( ${t}, ${n} ).x`:(i&&(n=`vec3( ${n}, ${i} )`),`texture( ${t}, ${n} )`)}generateTextureLevel(e,t,n,i){return`textureLod( ${t}, ${n}, ${i} )`}generateTextureCompare(e,t,n,i,s,o=this.shaderStage){if(o==="fragment")return`texture( ${t}, vec3( ${n}, ${i} ) )`;console.error(`WebGPURenderer: THREE.DepthTexture.compareFunction() does not support ${o} shader.`)}getVars(e){const t=[],n=this.vars[e];if(n!==void 0)for(const i of n)i.isOutputStructVar||t.push(`${this.getVar(i.type,i.name)};`);return t.join(`
	`)}getUniforms(e){const t=this.uniforms[e],n=[],i={};for(const o of t){let a=null,c=!1;if(o.type==="texture"){const u=o.node.value;u.compareFunction?a=`sampler2DShadow ${o.name};`:u.isDataArrayTexture===!0?a=`sampler2DArray ${o.name};`:a=`sampler2D ${o.name};`}else if(o.type==="cubeTexture")a=`samplerCube ${o.name};`;else if(o.type==="buffer"){const u=o.node,h=this.getType(u.bufferType),d=u.bufferCount,f=d>0?d:"";a=`${u.name} {
	${h} ${o.name}[${f}];
};
`}else a=`${this.getVectorType(o.type)} ${o.name};`,c=!0;const l=o.node.precision;if(l!==null&&(a=FR[l]+" "+a),c){a="	"+a;const u=o.groupNode.name;(i[u]||(i[u]=[])).push(a)}else a="uniform "+a,n.push(a)}let s="";for(const o in i){const a=i[o];s+=this._getGLSLUniformStruct(e+"_"+o,a.join(`
`))+`
`}return s+=n.join(`
`),s}getTypeFromAttribute(e){let t=super.getTypeFromAttribute(e);if(/^[iu]/.test(t)&&e.gpuType!==Po){let n=e;e.isInterleavedBufferAttribute&&(n=e.data);const i=n.array;i instanceof Uint32Array||i instanceof Int32Array||(t=t.slice(1))}return t}getAttributes(e){let t="";if(e==="vertex"){const n=this.getAttributesArray();let i=0;for(const s of n)t+=`layout( location = ${i++} ) in ${s.type} ${s.name};
`}return t}getStructMembers(e){const t=[],n=e.getMemberTypes();for(let i=0;i<n.length;i++){const s=n[i];t.push(`layout( location = ${i} ) out ${s} m${i};`)}return t.join(`
`)}getStructs(e){const t=[],n=this.structs[e];if(n.length===0)return`layout( location = 0 ) out vec4 fragColor;
`;for(let i=0,s=n.length;i<s;i++){const o=n[i];let a=`
`;a+=this.getStructMembers(o),a+=`
`,t.push(a)}return t.join(`

`)}getVaryings(e){let t="";const n=this.varyings;if(e==="vertex")for(const i of n){const s=i.type;t+=`${s==="int"||s==="uint"?"flat ":""}${i.needsInterpolation?"out":"/*out*/"} ${s} ${i.name};
`}else if(e==="fragment"){for(const i of n)if(i.needsInterpolation){const s=i.type;t+=`${s==="int"||s==="uint"?"flat ":""}in ${s} ${i.name};
`}}return t}getVertexIndex(){return"uint( gl_VertexID )"}getInstanceIndex(){return"uint( gl_InstanceID )"}getFrontFacing(){return"gl_FrontFacing"}getFragCoord(){return"gl_FragCoord"}getFragDepth(){return"gl_FragDepth"}isAvailable(e){return OR[e]===!0}isFlipY(){return!0}_getGLSLUniformStruct(e,t){return`
layout( std140 ) uniform ${e} {
${t}
};`}_getGLSLVertexCode(e){return`#version 300 es

${this.getSignature()}

// precision
${bd}

// uniforms
${e.uniforms}

// varyings
${e.varyings}

// attributes
${e.attributes}

// codes
${e.codes}

void main() {

	// vars
	${e.vars}

	// flow
	${e.flow}

	gl_PointSize = 1.0;

}
`}_getGLSLFragmentCode(e){return`#version 300 es

${this.getSignature()}

// precision
${bd}

// uniforms
${e.uniforms}

// varyings
${e.varyings}

// codes
${e.codes}

${e.structs}

void main() {

	// vars
	${e.vars}

	// flow
	${e.flow}

}
`}buildCode(){const e=this.material!==null?{fragment:{},vertex:{}}:{compute:{}};for(const t in e){let n=`// code

`;n+=this.flowCode[t];const i=this.flowNodes[t],s=i[i.length-1];for(const a of i){const c=this.getFlowData(a),l=a.name;l&&(n.length>0&&(n+=`
`),n+=`	// flow -> ${l}
	`),n+=`${c.code}
	`,a===s&&t!=="compute"&&(n+=`// result
	`,t==="vertex"?(n+="gl_Position = ",n+=`${c.result};`):t==="fragment"&&(a.outputNode.isOutputStructNode||(n+="fragColor = ",n+=`${c.result};`)))}const o=e[t];o.uniforms=this.getUniforms(t),o.attributes=this.getAttributes(t),o.varyings=this.getVaryings(t),o.vars=this.getVars(t),o.structs=this.getStructs(t),o.codes=this.getCodes(t),o.flow=n}this.material!==null?(this.vertexShader=this._getGLSLVertexCode(e.vertex),this.fragmentShader=this._getGLSLFragmentCode(e.fragment)):console.warn("GLSLNodeBuilder: compute shaders are not supported.")}getUniformFromNode(e,t,n,i=null){const s=super.getUniformFromNode(e,t,n,i),o=this.getDataFromNode(e,n,this.globalCache);let a=o.uniformGPU;if(a===void 0){if(t==="texture")a=new eh(s.name,s.node),this.bindings[n].push(a);else if(t==="cubeTexture")a=new Sg(s.name,s.node),this.bindings[n].push(a);else if(t==="buffer"){e.name=`NodeBuffer_${e.id}`;const c=new Ju(e.name,e.value);s.name=`buffer${e.id}`,this.bindings[n].push(c),a=c}else{const c=e.groupNode,l=c.name,u=this.uniformGroups[n]||(this.uniformGroups[n]={});let h=u[l];h===void 0&&(h=new vg(n+"_"+l,c),u[l]=h,this.bindings[n].push(h)),a=this.getNodeUniform(s,t),h.addUniform(a)}o.uniformGPU=a}return s}build(){const{object:e,material:t}=this;return t!==null?bn.fromMaterial(t).build(this):this.addFlow("compute",e),super.build()}}let rl=null,ol=null,or=null;class yg{constructor(e={}){this.parameters=Object.assign({},e),this.data=new WeakMap,this.renderer=null,this.domElement=null}async init(e){this.renderer=e}begin(e){}finish(e){}draw(e,t){}createProgram(e){}destroyProgram(e){}createBindings(e){}updateBindings(e){}createRenderPipeline(e){}createComputePipeline(e,t){}destroyPipeline(e){}needsRenderUpdate(e){}getRenderCacheKey(e){}createNodeBuilder(e){}createSampler(e){}createDefaultTexture(e){}createTexture(e){}copyTextureToBuffer(e,t,n,i,s){}createAttribute(e){}createIndexAttribute(e){}updateAttribute(e){}destroyAttribute(e){}updateSize(){}hasFeature(e){}getInstanceCount(e){const{object:t,geometry:n}=e;return n.isInstancedBufferGeometry?n.instanceCount:t.isInstancedMesh?t.count:1}getDrawingBufferSize(){return rl=rl||new Be,this.renderer.getDrawingBufferSize(rl)}getScissor(){return ol=ol||new ot,this.renderer.getScissor(ol)}getClearColor(){const e=this.renderer;return or=or||new Zu,e.getClearColor(or),or.getRGB(or,this.renderer.currentColorSpace),or}getDomElement(){let e=this.domElement;return e===null&&(e=this.parameters.canvas!==void 0?this.parameters.canvas:Qd(),"setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Co} webgpu`),this.domElement=e),e}set(e,t){this.data.set(e,t)}get(e){let t=this.data.get(e);return t===void 0&&(t={},this.data.set(e,t)),t}delete(e){this.data.delete(e)}}class VR{constructor(e){this.backend=e}createAttribute(e,t){const n=this.backend,{gl:i}=n,s=e.array,o=e.usage||i.STATIC_DRAW,a=e.isInterleavedBufferAttribute?e.data:e,c=n.get(a);let l=c.bufferGPU;l===void 0&&(l=i.createBuffer(),i.bindBuffer(t,l),i.bufferData(t,s,o),i.bindBuffer(t,null),c.bufferGPU=l,c.bufferType=t,c.version=a.version);let u;if(s instanceof Float32Array)u=i.FLOAT;else if(s instanceof Uint16Array)e.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(s instanceof Int16Array)u=i.SHORT;else if(s instanceof Uint32Array)u=i.UNSIGNED_INT;else if(s instanceof Int32Array)u=i.INT;else if(s instanceof Int8Array)u=i.BYTE;else if(s instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(s instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLBackend: Unsupported buffer data format: "+s);n.set(e,{bufferGPU:l,type:u,bytesPerElement:s.BYTES_PER_ELEMENT,version:e.version,isInteger:u===i.INT||u===i.UNSIGNED_INT||e.gpuType===Po})}updateAttribute(e){const t=this.backend,{gl:n}=t,i=e.array,s=e.isInterleavedBufferAttribute?e.data:e,o=t.get(s),a=o.bufferType,c=e.isInterleavedBufferAttribute?e.data.updateRanges:e.updateRanges;if(n.bindBuffer(a,o.bufferGPU),c.length===0)n.bufferSubData(a,0,i);else{for(let l=0,u=c.length;l<u;l++){const h=c[l];n.bufferSubData(a,h.start*i.BYTES_PER_ELEMENT,i,h.start,h.count)}s.clearUpdateRanges()}n.bindBuffer(a,null),o.version=s.version}async getArrayBufferAsync(e){const t=this.backend,{gl:n}=t,i=e.isInterleavedBufferAttribute?e.data:e,{bufferGPU:s}=t.get(i),o=e.array,a=o.byteLength;n.bindBuffer(n.COPY_READ_BUFFER,s);const c=n.createBuffer();n.bindBuffer(n.COPY_WRITE_BUFFER,c),n.bufferData(n.COPY_WRITE_BUFFER,a,n.STREAM_READ),n.copyBufferSubData(n.COPY_READ_BUFFER,n.COPY_WRITE_BUFFER,0,0,a),await t.utils._clientWaitAsync();const l=new e.array.constructor(o.length);return n.getBufferSubData(n.COPY_WRITE_BUFFER,0,l),n.deleteBuffer(c),l.buffer}}let Ad=!1,al,Yr;class GR{constructor(e){this.backend=e,this.gl=this.backend.gl,this.enabled={},this.currentFlipSided=null,this.currentCullFace=null,this.currentProgram=null,this.currentBlendingEnabled=!1,this.currentBlending=null,this.currentBlendSrc=null,this.currentBlendDst=null,this.currentBlendSrcAlpha=null,this.currentBlendDstAlpha=null,this.currentPremultipledAlpha=null,this.currentPolygonOffsetFactor=null,this.currentPolygonOffsetUnits=null,this.currentColorMask=null,this.currentDepthFunc=null,this.currentDepthMask=null,this.currentStencilFunc=null,this.currentStencilRef=null,this.currentStencilFuncMask=null,this.currentStencilFail=null,this.currentStencilZFail=null,this.currentStencilZPass=null,this.currentStencilMask=null,Ad===!1&&(this._init(this.gl),Ad=!0)}_init(e){al={[kn]:e.FUNC_ADD,[Il]:e.FUNC_SUBTRACT,[Fl]:e.FUNC_REVERSE_SUBTRACT},Yr={[Ol]:e.ZERO,[Bl]:e.ONE,[Vl]:e.SRC_COLOR,[eo]:e.SRC_ALPHA,[Xl]:e.SRC_ALPHA_SATURATE,[Hl]:e.DST_COLOR,[zl]:e.DST_ALPHA,[Gl]:e.ONE_MINUS_SRC_COLOR,[to]:e.ONE_MINUS_SRC_ALPHA,[Wl]:e.ONE_MINUS_DST_COLOR,[kl]:e.ONE_MINUS_DST_ALPHA}}enable(e){const{enabled:t}=this;t[e]!==!0&&(this.gl.enable(e),t[e]=!0)}disable(e){const{enabled:t}=this;t[e]!==!1&&(this.gl.disable(e),t[e]=!1)}setFlipSided(e){if(this.currentFlipSided!==e){const{gl:t}=this;e?t.frontFace(t.CW):t.frontFace(t.CCW),this.currentFlipSided=e}}setCullFace(e){const{gl:t}=this;e!==Dd?(this.enable(t.CULL_FACE),e!==this.currentCullFace&&(e===pl?t.cullFace(t.BACK):e===Id?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):this.disable(t.CULL_FACE),this.currentCullFace=e}setBlending(e,t,n,i,s,o,a,c){const{gl:l}=this;if(e===ti){this.currentBlendingEnabled===!0&&(this.disable(l.BLEND),this.currentBlendingEnabled=!1);return}if(this.currentBlendingEnabled===!1&&(this.enable(l.BLEND),this.currentBlendingEnabled=!0),e!==Dl){if(e!==this.currentBlending||c!==this.currentPremultipledAlpha){if((this.currentBlendEquation!==kn||this.currentBlendEquationAlpha!==kn)&&(l.blendEquation(l.FUNC_ADD),this.currentBlendEquation=kn,this.currentBlendEquationAlpha=kn),c)switch(e){case gi:l.blendFuncSeparate(l.ONE,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case yr:l.blendFunc(l.ONE,l.ONE);break;case Tr:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case Mr:l.blendFuncSeparate(l.ZERO,l.SRC_COLOR,l.ZERO,l.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",e);break}else switch(e){case gi:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case yr:l.blendFunc(l.SRC_ALPHA,l.ONE);break;case Tr:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case Mr:l.blendFunc(l.ZERO,l.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",e);break}this.currentBlendSrc=null,this.currentBlendDst=null,this.currentBlendSrcAlpha=null,this.currentBlendDstAlpha=null,this.currentBlending=e,this.currentPremultipledAlpha=c}return}s=s||t,o=o||n,a=a||i,(t!==this.currentBlendEquation||s!==this.currentBlendEquationAlpha)&&(l.blendEquationSeparate(al[t],al[s]),this.currentBlendEquation=t,this.currentBlendEquationAlpha=s),(n!==this.currentBlendSrc||i!==this.currentBlendDst||o!==this.currentBlendSrcAlpha||a!==this.currentBlendDstAlpha)&&(l.blendFuncSeparate(Yr[n],Yr[i],Yr[o],Yr[a]),this.currentBlendSrc=n,this.currentBlendDst=i,this.currentBlendSrcAlpha=o,this.currentBlendDstAlpha=a),this.currentBlending=e,this.currentPremultipledAlpha=!1}setColorMask(e){this.currentColorMask!==e&&(this.gl.colorMask(e,e,e,e),this.currentColorMask=e)}setDepthTest(e){const{gl:t}=this;e?this.enable(t.DEPTH_TEST):this.disable(t.DEPTH_TEST)}setDepthMask(e){this.currentDepthMask!==e&&(this.gl.depthMask(e),this.currentDepthMask=e)}setDepthFunc(e){if(this.currentDepthFunc!==e){const{gl:t}=this;switch(e){case $l:t.depthFunc(t.NEVER);break;case ql:t.depthFunc(t.ALWAYS);break;case Yl:t.depthFunc(t.LESS);break;case Er:t.depthFunc(t.LEQUAL);break;case Kl:t.depthFunc(t.EQUAL);break;case jl:t.depthFunc(t.GEQUAL);break;case Zl:t.depthFunc(t.GREATER);break;case Ql:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}this.currentDepthFunc=e}}setStencilTest(e){const{gl:t}=this;e?this.enable(t.STENCIL_TEST):this.disable(t.STENCIL_TEST)}setStencilMask(e){this.currentStencilMask!==e&&(this.gl.stencilMask(e),this.currentStencilMask=e)}setStencilFunc(e,t,n){(this.currentStencilFunc!==e||this.currentStencilRef!==t||this.currentStencilFuncMask!==n)&&(this.gl.stencilFunc(e,t,n),this.currentStencilFunc=e,this.currentStencilRef=t,this.currentStencilFuncMask=n)}setStencilOp(e,t,n){(this.currentStencilFail!==e||this.currentStencilZFail!==t||this.currentStencilZPass!==n)&&(this.gl.stencilOp(e,t,n),this.currentStencilFail=e,this.currentStencilZFail=t,this.currentStencilZPass=n)}setMaterial(e,t){const{gl:n}=this;e.side===zn?this.disable(n.CULL_FACE):this.enable(n.CULL_FACE);let i=e.side===$t;t&&(i=!i),this.setFlipSided(i),e.blending===gi&&e.transparent===!1?this.setBlending(ti):this.setBlending(e.blending,e.blendEquation,e.blendSrc,e.blendDst,e.blendEquationAlpha,e.blendSrcAlpha,e.blendDstAlpha,e.premultipliedAlpha),this.setDepthFunc(e.depthFunc),this.setDepthTest(e.depthTest),this.setDepthMask(e.depthWrite),this.setColorMask(e.colorWrite);const s=e.stencilWrite;this.setStencilTest(s),s&&(this.setStencilMask(e.stencilWriteMask),this.setStencilFunc(e.stencilFunc,e.stencilRef,e.stencilFuncMask),this.setStencilOp(e.stencilFail,e.stencilZFail,e.stencilZPass)),this.setPolygonOffset(e.polygonOffset,e.polygonOffsetFactor,e.polygonOffsetUnits),e.alphaToCoverage===!0?this.enable(n.SAMPLE_ALPHA_TO_COVERAGE):this.disable(n.SAMPLE_ALPHA_TO_COVERAGE)}setPolygonOffset(e,t,n){const{gl:i}=this;e?(this.enable(i.POLYGON_OFFSET_FILL),(this.currentPolygonOffsetFactor!==t||this.currentPolygonOffsetUnits!==n)&&(i.polygonOffset(t,n),this.currentPolygonOffsetFactor=t,this.currentPolygonOffsetUnits=n)):this.disable(i.POLYGON_OFFSET_FILL)}useProgram(e){return this.currentProgram!==e?(this.gl.useProgram(e),this.currentProgram=e,!0):!1}}class zR{constructor(e){this.backend=e,this.gl=this.backend.gl,this.extensions=e.extensions}convert(e,t=gn){const{gl:n,extensions:i}=this;let s;if(e===ni)return n.UNSIGNED_BYTE;if(e===Jl)return n.UNSIGNED_SHORT_4_4_4_4;if(e===eu)return n.UNSIGNED_SHORT_5_5_5_1;if(e===Hd)return n.BYTE;if(e===Wd)return n.SHORT;if(e===Lo)return n.UNSIGNED_SHORT;if(e===Po)return n.INT;if(e===ei)return n.UNSIGNED_INT;if(e===kt)return n.FLOAT;if(e===Ei)return n.HALF_FLOAT;if(e===Xd)return n.ALPHA;if(e===Hn)return n.RGBA;if(e===$d)return n.LUMINANCE;if(e===qd)return n.LUMINANCE_ALPHA;if(e===ii)return n.DEPTH_COMPONENT;if(e===Ri)return n.DEPTH_STENCIL;if(e===tu)return n.RED;if(e===nu)return n.RED_INTEGER;if(e===iu)return n.RG;if(e===su)return n.RG_INTEGER;if(e===ru)return n.RGBA_INTEGER;if(e===fr||e===ws||e===Ns||e===Cs)if(t===Ee)if(s=i.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(e===fr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(e===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(e===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(e===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=i.get("WEBGL_compressed_texture_s3tc"),s!==null){if(e===fr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===Ns)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===Cs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(e===ya||e===Ta||e===Ma||e===Ea)if(s=i.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(e===ya)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===Ta)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===Ma)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===Ea)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(e===ou)return s=i.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(e===so||e===ro)if(s=i.get("WEBGL_compressed_texture_etc"),s!==null){if(e===so)return t===Ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(e===ro)return t===Ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(e===oo||e===ao||e===co||e===lo||e===uo||e===ho||e===fo||e===po||e===mo||e===go||e===_o||e===xo||e===vo||e===So)if(s=i.get("WEBGL_compressed_texture_astc"),s!==null){if(e===oo)return t===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(e===ao)return t===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(e===co)return t===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(e===lo)return t===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(e===uo)return t===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(e===ho)return t===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(e===fo)return t===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(e===po)return t===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(e===mo)return t===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(e===go)return t===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(e===_o)return t===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(e===xo)return t===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(e===vo)return t===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(e===So)return t===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(e===pr)if(s=i.get("EXT_texture_compression_bptc"),s!==null){if(e===pr)return t===Ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(e===Yd||e===ba||e===Aa||e===Ra)if(s=i.get("EXT_texture_compression_rgtc"),s!==null){if(e===pr)return s.COMPRESSED_RED_RGTC1_EXT;if(e===ba)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(e===Aa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(e===Ra)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return e===_i?n.UNSIGNED_INT_24_8:n[e]!==void 0?n[e]:null}_clientWaitAsync(){const{gl:e}=this,t=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0);return e.flush(),new Promise((n,i)=>{function s(){const o=e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0);if(o===e.WAIT_FAILED){e.deleteSync(t),i();return}if(o===e.TIMEOUT_EXPIRED){requestAnimationFrame(s);return}e.deleteSync(t),n()}s()})}}let Rd=!1,ga,cl,wd;class kR{constructor(e){this.backend=e,this.gl=e.gl,this.extensions=e.extensions,Rd===!1&&(this._init(this.gl),Rd=!0)}_init(e){ga={[no]:e.REPEAT,[Qn]:e.CLAMP_TO_EDGE,[io]:e.MIRRORED_REPEAT},cl={[mt]:e.NEAREST,[Rr]:e.NEAREST_MIPMAP_NEAREST,[Rs]:e.NEAREST_MIPMAP_LINEAR,[Tn]:e.LINEAR,[kd]:e.LINEAR_MIPMAP_NEAREST,[Wi]:e.LINEAR_MIPMAP_LINEAR},wd={[lu]:e.NEVER,[pu]:e.ALWAYS,[Ka]:e.LESS,[ja]:e.LEQUAL,[uu]:e.EQUAL,[fu]:e.GEQUAL,[hu]:e.GREATER,[du]:e.NOTEQUAL}}filterFallback(e){const{gl:t}=this;return e===mt||e===Rr||e===Rs?t.NEAREST:t.LINEAR}getGLTextureType(e){const{gl:t}=this;let n;return e.isCubeTexture===!0?n=t.TEXTURE_CUBE_MAP:e.isDataArrayTexture===!0?n=t.TEXTURE_2D_ARRAY:n=t.TEXTURE_2D,n}getInternalFormat(e,t,n,i,s=!1){const{gl:o,extensions:a}=this;if(e!==null){if(o[e]!==void 0)return o[e];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+e+"'")}let c=t;return t===o.RED&&(n===o.FLOAT&&(c=o.R32F),n===o.HALF_FLOAT&&(c=o.R16F),n===o.UNSIGNED_BYTE&&(c=o.R8)),t===o.RED_INTEGER&&(n===o.UNSIGNED_BYTE&&(c=o.R8UI),n===o.UNSIGNED_SHORT&&(c=o.R16UI),n===o.UNSIGNED_INT&&(c=o.R32UI),n===o.BYTE&&(c=o.R8I),n===o.SHORT&&(c=o.R16I),n===o.INT&&(c=o.R32I)),t===o.RG&&(n===o.FLOAT&&(c=o.RG32F),n===o.HALF_FLOAT&&(c=o.RG16F),n===o.UNSIGNED_BYTE&&(c=o.RG8)),t===o.RGBA&&(n===o.FLOAT&&(c=o.RGBA32F),n===o.HALF_FLOAT&&(c=o.RGBA16F),n===o.UNSIGNED_BYTE&&(c=i===Ee&&s===!1?o.SRGB8_ALPHA8:o.RGBA8),n===o.UNSIGNED_SHORT_4_4_4_4&&(c=o.RGBA4),n===o.UNSIGNED_SHORT_5_5_5_1&&(c=o.RGB5_A1)),t===o.DEPTH_COMPONENT&&(n===o.UNSIGNED_INT&&(c=o.DEPTH24_STENCIL8),n===o.FLOAT&&(c=o.DEPTH_COMPONENT32F)),t===o.DEPTH_STENCIL&&n===o.UNSIGNED_INT_24_8&&(c=o.DEPTH24_STENCIL8),(c===o.R16F||c===o.R32F||c===o.RG16F||c===o.RG32F||c===o.RGBA16F||c===o.RGBA32F)&&a.get("EXT_color_buffer_float"),c}setTextureParameters(e,t){const{gl:n,extensions:i}=this;if(n.texParameteri(e,n.TEXTURE_WRAP_S,ga[t.wrapS]),n.texParameteri(e,n.TEXTURE_WRAP_T,ga[t.wrapT]),(e===n.TEXTURE_3D||e===n.TEXTURE_2D_ARRAY)&&n.texParameteri(e,n.TEXTURE_WRAP_R,ga[t.wrapR]),n.texParameteri(e,n.TEXTURE_MAG_FILTER,cl[t.magFilter]),n.texParameteri(e,n.TEXTURE_MIN_FILTER,cl[t.minFilter]),t.compareFunction&&(n.texParameteri(e,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(e,n.TEXTURE_COMPARE_FUNC,wd[t.compareFunction])),i.has("EXT_texture_filter_anisotropic")===!0){if(t.magFilter===mt||t.minFilter!==Rs&&t.minFilter!==Wi||t.type===kt&&i.has("OES_texture_float_linear")===!1)return;t.anisotropy>1}}async copyTextureToBuffer(e,t,n,i,s){const{backend:o,gl:a}=this,{textureGPU:c,glFormat:l,glType:u}=this.backend.get(e),h=a.createFramebuffer();a.bindFramebuffer(a.READ_FRAMEBUFFER,h),a.framebufferTexture2D(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,c,0);const d=this._getTypedArrayType(u),f=this._getBytesPerTexel(l),g=i*s,_=g*f,m=a.createBuffer();a.bindBuffer(a.PIXEL_PACK_BUFFER,m),a.bufferData(a.PIXEL_PACK_BUFFER,_,a.STREAM_READ),a.readPixels(t,n,i,s,l,u,0),a.bindBuffer(a.PIXEL_PACK_BUFFER,null),await o.utils._clientWaitAsync();const p=new d(g);return a.bindBuffer(a.PIXEL_PACK_BUFFER,m),a.getBufferSubData(a.PIXEL_PACK_BUFFER,0,p),a.bindBuffer(a.PIXEL_PACK_BUFFER,null),a.deleteFramebuffer(h),p}_getTypedArrayType(e){const{gl:t}=this;if(e===t.UNSIGNED_BYTE)return Uint8Array;if(e===t.UNSIGNED_SHORT_4_4_4_4||e===t.UNSIGNED_SHORT_5_5_5_1||e===t.UNSIGNED_SHORT_5_6_5||e===t.UNSIGNED_SHORT)return Uint16Array;if(e===t.UNSIGNED_INT)return Uint32Array;if(e===t.UNSIGNED_FLOAT)return Float32Array}_getBytesPerTexel(e){const{gl:t}=this;if(e===t.RGBA)return 4;if(e===t.RGB)return 3;if(e===t.ALPHA)return 1}}class HR{constructor(e){this.backend=e,this.gl=this.backend.gl,this.availableExtensions=this.gl.getSupportedExtensions(),this.extensions={}}get(e){let t=this.extensions[e];return t===void 0&&(t=this.gl.getExtension(e)),t}has(e){return this.availableExtensions.includes(e)}}class WR{constructor(e){this.backend=e,this.maxAnisotropy=null}getMaxAnisotropy(){if(this.maxAnisotropy!==null)return this.maxAnisotropy;const e=this.backend.gl,t=this.backend.extensions;if(t.has("EXT_texture_filter_anisotropic")===!0){const n=t.get("EXT_texture_filter_anisotropic");this.maxAnisotropy=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else this.maxAnisotropy=0;return this.maxAnisotropy}}class XR extends yg{constructor(e={}){super(e),this.isWebGLBackend=!0}async init(e){await super.init(e);const t=this.parameters,n=t.context!==void 0?t.context:e.domElement.getContext("webgl2");this.gl=n,this.extensions=new HR(this),this.capabilities=new WR(this),this.attributeUtils=new VR(this),this.textureUtils=new kR(this),this.state=new GR(this),this.utils=new zR(this),this.defaultTextures={},this.extensions.get("EXT_color_buffer_float"),this._currentContext=null}get coordinateSystem(){return Mi}async getArrayBufferAsync(e){return await this.attributeUtils.getArrayBufferAsync(e)}beginRender(e){const{gl:t}=this,n=this.get(e);n.previousContext=this._currentContext,this._currentContext=e,this._setFramebuffer(e),this.clear(e.clearColor,e.clearDepth,e.clearStencil,e),e.viewport?this.updateViewport(e):t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight);const i=e.occlusionQueryCount;i>0&&(n.currentOcclusionQueries=n.occlusionQueries,n.currentOcclusionQueryObjects=n.occlusionQueryObjects,n.lastOcclusionObject=null,n.occlusionQueries=new Array(i),n.occlusionQueryObjects=new Array(i),n.occlusionQueryIndex=0)}finishRender(e){const n=this.get(e).previousContext;if(this._currentContext=n,n!==null)if(this._setFramebuffer(n),n.viewport)this.updateViewport(n);else{const s=this.gl;s.viewport(0,0,s.drawingBufferWidth,s.drawingBufferHeight)}const i=e.occlusionQueryCount;if(i>0){const s=this.get(e);if(i>s.occlusionQueryIndex){const{gl:o}=this;o.endQuery(o.ANY_SAMPLES_PASSED)}this.resolveOccludedAsync(e)}}resolveOccludedAsync(e){const t=this.get(e),{currentOcclusionQueries:n,currentOcclusionQueryObjects:i}=t;if(n&&i){const s=new WeakSet,{gl:o}=this;t.currentOcclusionQueryObjects=null,t.currentOcclusionQueries=null;const a=()=>{let c=0;for(let l=0;l<n.length;l++){const u=n[l];u!==null&&o.getQueryParameter(u,o.QUERY_RESULT_AVAILABLE)&&(o.getQueryParameter(u,o.QUERY_RESULT)>0&&s.add(i[l]),n[l]=null,o.deleteQuery(u),c++)}c<n.length?requestAnimationFrame(a):t.occluded=s};a()}}isOccluded(e,t){const n=this.get(e);return n.occluded&&n.occluded.has(t)}updateViewport(e){const t=this.gl,{x:n,y:i,width:s,height:o}=e.viewportValue;t.viewport(n,i,s,o)}clear(e,t,n,i=null){const{gl:s}=this;i===null&&(i={textures:null,clearColorValue:this.getClearColor()});let o=0;if(e&&(o|=s.COLOR_BUFFER_BIT),t&&(o|=s.DEPTH_BUFFER_BIT),n&&(o|=s.STENCIL_BUFFER_BIT),o!==0){const a=i.clearColorValue;if(t&&this.state.setDepthMask(!0),i.textures===null)s.clearColor(a.r,a.g,a.b,a.a),s.clear(o);else{if(e)for(let c=0;c<i.textures.length;c++)s.clearBufferfv(s.COLOR,c,[a.r,a.g,a.b,a.a]);t&&n?s.clearBufferfi(s.DEPTH_STENCIL,0,1,0):t?s.clearBufferfv(s.DEPTH,0,[1]):n&&s.clearBufferiv(s.STENCIL,0,[0])}}}beginCompute(){console.warn("Abstract class.")}compute(){console.warn("Abstract class.")}finishCompute(){console.warn("Abstract class.")}draw(e,t){const{pipeline:n,material:i,context:s}=e,{programGPU:o,vaoGPU:a}=this.get(n),{gl:c,state:l}=this,u=this.get(s),h=e.getBindings();for(const E of h){const L=this.get(E),A=L.index;E.isUniformsGroup||E.isUniformBuffer?c.bindBufferBase(c.UNIFORM_BUFFER,A,L.bufferGPU):E.isSampledTexture&&(c.activeTexture(c.TEXTURE0+A),c.bindTexture(L.glTextureType,L.textureGPU))}l.setMaterial(i),c.useProgram(o),c.bindVertexArray(a);const d=e.getIndex(),f=e.object,g=e.geometry,_=g.drawRange,m=_.start,p=u.lastOcclusionObject;if(p!==f&&p!==void 0){if(p!==null&&p.occlusionTest===!0&&(c.endQuery(c.ANY_SAMPLES_PASSED),u.occlusionQueryIndex++),f.occlusionTest===!0){const E=c.createQuery();c.beginQuery(c.ANY_SAMPLES_PASSED,E),u.occlusionQueries[u.occlusionQueryIndex]=E,u.occlusionQueryObjects[u.occlusionQueryIndex]=f}u.lastOcclusionObject=f}let S;f.isPoints?S=c.POINTS:f.isLineSegments?S=c.LINES:f.isLine?S=c.LINE_STRIP:f.isLineLoop?S=c.LINE_LOOP:S=c.TRIANGLES;const x=this.getInstanceCount(e);if(d!==null){const E=this.get(d),L=_.count!==1/0?_.count:d.count;x>1?c.drawElementsInstanced(S,d.count,E.type,m,x):c.drawElements(S,d.count,E.type,m),t.update(f,L,1)}else{const E=g.attributes.position,L=_.count!==1/0?_.count:E.count;x>1?c.drawArraysInstanced(S,0,L,x):c.drawArrays(S,0,L),t.update(f,L,1)}c.bindVertexArray(null)}needsRenderUpdate(e){return!1}getRenderCacheKey(e){return e.id}createSampler(){}createDefaultTexture(e){const{gl:t,textureUtils:n,defaultTextures:i}=this,s=n.getGLTextureType(e);let o=i[s];o===void 0&&(o=t.createTexture(),t.bindTexture(s,o),t.texParameteri(s,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(s,t.TEXTURE_MAG_FILTER,t.NEAREST),i[s]=o),this.set(e,{textureGPU:o,glTextureType:s,isDefault:!0})}createTexture(e,t){const{gl:n,utils:i,textureUtils:s}=this,{levels:o,width:a,height:c,depth:l}=t,u=i.convert(e.format,e.colorSpace),h=i.convert(e.type),d=s.getInternalFormat(e.internalFormat,u,h,e.colorSpace,e.isVideoTexture),f=n.createTexture(),g=s.getGLTextureType(e);n.bindTexture(g,f),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,e.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,e.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE),s.setTextureParameters(g,e),n.bindTexture(g,f),e.isDataArrayTexture?n.texStorage3D(n.TEXTURE_2D_ARRAY,o,d,a,c,l):e.isVideoTexture||n.texStorage2D(g,o,d,a,c),this.set(e,{textureGPU:f,glTextureType:g,glFormat:u,glType:h,glInternalFormat:d})}updateTexture(e,t){const{gl:n}=this,{width:i,height:s}=t,{textureGPU:o,glTextureType:a,glFormat:c,glType:l,glInternalFormat:u}=this.get(e),h=d=>d.isDataTexture?d.image.data:d instanceof ImageBitmap||d instanceof OffscreenCanvas||d instanceof HTMLImageElement||d instanceof HTMLCanvasElement?d:d.data;if(n.bindTexture(a,o),e.isCubeTexture){const d=t.images;for(let f=0;f<6;f++){const g=h(d[f]);n.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,0,0,i,s,c,l,g)}}else if(e.isDataArrayTexture){const d=t.image;n.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,d.width,d.height,d.depth,c,l,d.data)}else if(e.isVideoTexture)e.update(),n.texImage2D(a,0,u,c,l,t.image);else{const d=h(t.image);n.texSubImage2D(a,0,0,0,i,s,c,l,d)}}generateMipmaps(e){const{gl:t}=this,{textureGPU:n,glTextureType:i}=this.get(e);t.bindTexture(i,n),t.generateMipmap(i)}destroyTexture(e){const{gl:t}=this,{textureGPU:n}=this.get(e);t.deleteTexture(n),this.delete(e)}destroySampler(){}copyTextureToBuffer(e,t,n,i,s){return this.textureUtils.copyTextureToBuffer(e,t,n,i,s)}createNodeBuilder(e,t,n=null){return new BR(e,t,n)}createProgram(e){const t=this.gl,{stage:n,code:i}=e,s=n==="vertex"?t.createShader(t.VERTEX_SHADER):t.createShader(t.FRAGMENT_SHADER);t.shaderSource(s,i),t.compileShader(s),this.set(e,{shaderGPU:s})}destroyProgram(){console.warn("Abstract class.")}createRenderPipeline(e){const t=this.gl,n=e.pipeline,{fragmentProgram:i,vertexProgram:s}=n,o=t.createProgram(),a=this.get(i).shaderGPU,c=this.get(s).shaderGPU;t.attachShader(o,a),t.attachShader(o,c),t.linkProgram(o),t.getProgramParameter(o,t.LINK_STATUS)===!1&&(console.error("THREE.WebGLBackend:",t.getProgramInfoLog(o)),console.error("THREE.WebGLBackend:",t.getShaderInfoLog(a)),console.error("THREE.WebGLBackend:",t.getShaderInfoLog(c))),t.useProgram(o);const l=e.getBindings();for(const f of l){const _=this.get(f).index;if(f.isUniformsGroup||f.isUniformBuffer){const m=t.getUniformBlockIndex(o,f.name);t.uniformBlockBinding(o,m,_)}else if(f.isSampledTexture){const m=t.getUniformLocation(o,f.name);t.uniform1i(m,_)}}const u=t.createVertexArray(),h=e.getIndex(),d=e.getAttributes();if(t.bindVertexArray(u),h!==null){const f=this.get(h);t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,f.bufferGPU)}for(let f=0;f<d.length;f++){const g=d[f],_=this.get(g);t.bindBuffer(t.ARRAY_BUFFER,_.bufferGPU),t.enableVertexAttribArray(f);let m,p;g.isInterleavedBufferAttribute===!0?(m=g.data.stride*_.bytesPerElement,p=g.offset*_.bytesPerElement):(m=0,p=0),_.isInteger?t.vertexAttribIPointer(f,g.itemSize,_.type,m,p):t.vertexAttribPointer(f,g.itemSize,_.type,g.normalized,m,p),g.isInstancedBufferAttribute&&!g.isInterleavedBufferAttribute?t.vertexAttribDivisor(f,g.meshPerAttribute):g.isInterleavedBufferAttribute&&g.data.isInstancedInterleavedBuffer&&t.vertexAttribDivisor(f,g.data.meshPerAttribute)}t.bindVertexArray(null),this.set(n,{programGPU:o,vaoGPU:u})}createComputePipeline(){console.warn("Abstract class.")}createBindings(e){this.updateBindings(e)}updateBindings(e){const{gl:t}=this;let n=0,i=0;for(const s of e)if(s.isUniformsGroup||s.isUniformBuffer){const o=t.createBuffer(),a=s.buffer;t.bindBuffer(t.UNIFORM_BUFFER,o),t.bufferData(t.UNIFORM_BUFFER,a,t.DYNAMIC_DRAW),t.bindBufferBase(t.UNIFORM_BUFFER,n,o),this.set(s,{index:n++,bufferGPU:o})}else if(s.isSampledTexture){const{textureGPU:o,glTextureType:a}=this.get(s.texture);this.set(s,{index:i++,textureGPU:o,glTextureType:a})}}updateBinding(e){const t=this.gl;if(e.isUniformsGroup||e.isUniformBuffer){const i=this.get(e).bufferGPU,s=e.buffer;t.bindBuffer(t.UNIFORM_BUFFER,i),t.bufferData(t.UNIFORM_BUFFER,s,t.DYNAMIC_DRAW)}}createIndexAttribute(e){const t=this.gl;this.attributeUtils.createAttribute(e,t.ELEMENT_ARRAY_BUFFER)}createAttribute(e){const t=this.gl;this.attributeUtils.createAttribute(e,t.ARRAY_BUFFER)}createStorageAttribute(){console.warn("Abstract class.")}updateAttribute(e){this.attributeUtils.updateAttribute(e)}destroyAttribute(){console.warn("Abstract class.")}updateSize(){}hasFeature(){return!0}getMaxAnisotropy(){return this.capabilities.getMaxAnisotropy()}copyFramebufferToTexture(e,t){const{gl:n}=this,{textureGPU:i}=this.get(e),s=e.image.width,o=e.image.height;if(n.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.isDepthTexture){const a=n.createFramebuffer();n.bindFramebuffer(n.DRAW_FRAMEBUFFER,a),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,i,0),n.blitFramebuffer(0,0,s,o,0,0,s,o,n.DEPTH_BUFFER_BIT,n.NEAREST),n.deleteFramebuffer(a)}else n.bindTexture(n.TEXTURE_2D,i),n.copyTexSubImage2D(n.TEXTURE_2D,0,0,0,0,0,s,o),n.bindTexture(n.TEXTURE_2D,null);e.generateMipmaps&&this.generateMipmaps(e),this._setFramebuffer(t)}_setFramebuffer(e){const{gl:t}=this;if(e.textures!==null){const n=this.get(e.renderTarget);let i=n.framebuffer;if(i===void 0){i=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,i);const s=e.textures,o=[];for(let a=0;a<s.length;a++){const c=s[a],{textureGPU:l}=this.get(c),u=t.COLOR_ATTACHMENT0+a;t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+a,t.TEXTURE_2D,l,0),o.push(u)}if(t.drawBuffers(o),e.depthTexture!==null){const{textureGPU:a}=this.get(e.depthTexture);t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,a,0)}n.framebuffer=i}else t.bindFramebuffer(t.FRAMEBUFFER,i)}else t.bindFramebuffer(t.FRAMEBUFFER,null)}}const dr={PointList:"point-list",LineList:"line-list",LineStrip:"line-strip",TriangleList:"triangle-list",TriangleStrip:"triangle-strip"},sn={Never:"never",Less:"less",Equal:"equal",LessEqual:"less-equal",Greater:"greater",NotEqual:"not-equal",GreaterEqual:"greater-equal",Always:"always"},rn={Store:"store"},Bt={Load:"load",Clear:"clear"},ll={CCW:"ccw"},ul={None:"none",Front:"front",Back:"back"},Ur={Uint16:"uint16",Uint32:"uint32"},O={R8Unorm:"r8unorm",R8Snorm:"r8snorm",R8Uint:"r8uint",R8Sint:"r8sint",R16Uint:"r16uint",R16Sint:"r16sint",R16Float:"r16float",RG8Unorm:"rg8unorm",RG8Snorm:"rg8snorm",RG8Uint:"rg8uint",RG8Sint:"rg8sint",R32Uint:"r32uint",R32Sint:"r32sint",R32Float:"r32float",RG16Uint:"rg16uint",RG16Sint:"rg16sint",RG16Float:"rg16float",RGBA8Unorm:"rgba8unorm",RGBA8UnormSRGB:"rgba8unorm-srgb",RGBA8Snorm:"rgba8snorm",RGBA8Uint:"rgba8uint",RGBA8Sint:"rgba8sint",BGRA8Unorm:"bgra8unorm",RG32Uint:"rg32uint",RG32Sint:"rg32sint",RG32Float:"rg32float",RGBA16Uint:"rgba16uint",RGBA16Sint:"rgba16sint",RGBA16Float:"rgba16float",RGBA32Uint:"rgba32uint",RGBA32Sint:"rgba32sint",RGBA32Float:"rgba32float",Depth16Unorm:"depth16unorm",Depth24Plus:"depth24plus",Depth24PlusStencil8:"depth24plus-stencil8",Depth32Float:"depth32float",Depth32FloatStencil8:"depth32float-stencil8",BC1RGBAUnorm:"bc1-rgba-unorm",BC1RGBAUnormSRGB:"bc1-rgba-unorm-srgb",BC2RGBAUnorm:"bc2-rgba-unorm",BC2RGBAUnormSRGB:"bc2-rgba-unorm-srgb",BC3RGBAUnorm:"bc3-rgba-unorm",BC3RGBAUnormSRGB:"bc3-rgba-unorm-srgb",BC4RUnorm:"bc4-r-unorm",BC5RGUnorm:"bc5-rg-unorm",BC5RGSnorm:"bc5-rg-snorm",BC6HRGBUFloat:"bc6h-rgb-ufloat",BC6HRGBFloat:"bc6h-rgb-float",BC7RGBAUnorm:"bc7-rgba-unorm",BC7RGBAUnormSRGB:"bc7-rgba-srgb",ETC2RGB8Unorm:"etc2-rgb8unorm",ETC2RGB8UnormSRGB:"etc2-rgb8unorm-srgb",ETC2RGB8A1Unorm:"etc2-rgb8a1unorm",ETC2RGB8A1UnormSRGB:"etc2-rgb8a1unorm-srgb",ETC2RGBA8Unorm:"etc2-rgba8unorm",ETC2RGBA8UnormSRGB:"etc2-rgba8unorm-srgb",EACR11Unorm:"eac-r11unorm",EACR11Snorm:"eac-r11snorm",EACRG11Unorm:"eac-rg11unorm",EACRG11Snorm:"eac-rg11snorm",ASTC4x4Unorm:"astc-4x4-unorm",ASTC4x4UnormSRGB:"astc-4x4-unorm-srgb",ASTC5x4Unorm:"astc-5x4-unorm",ASTC5x4UnormSRGB:"astc-5x4-unorm-srgb",ASTC5x5Unorm:"astc-5x5-unorm",ASTC5x5UnormSRGB:"astc-5x5-unorm-srgb",ASTC6x5Unorm:"astc-6x5-unorm",ASTC6x5UnormSRGB:"astc-6x5-unorm-srgb",ASTC6x6Unorm:"astc-6x6-unorm",ASTC6x6UnormSRGB:"astc-6x6-unorm-srgb",ASTC8x5Unorm:"astc-8x5-unorm",ASTC8x5UnormSRGB:"astc-8x5-unorm-srgb",ASTC8x6Unorm:"astc-8x6-unorm",ASTC8x6UnormSRGB:"astc-8x6-unorm-srgb",ASTC8x8Unorm:"astc-8x8-unorm",ASTC8x8UnormSRGB:"astc-8x8-unorm-srgb",ASTC10x5Unorm:"astc-10x5-unorm",ASTC10x5UnormSRGB:"astc-10x5-unorm-srgb",ASTC10x6Unorm:"astc-10x6-unorm",ASTC10x6UnormSRGB:"astc-10x6-unorm-srgb",ASTC10x8Unorm:"astc-10x8-unorm",ASTC10x8UnormSRGB:"astc-10x8-unorm-srgb",ASTC10x10Unorm:"astc-10x10-unorm",ASTC10x10UnormSRGB:"astc-10x10-unorm-srgb",ASTC12x10Unorm:"astc-12x10-unorm",ASTC12x10UnormSRGB:"astc-12x10-unorm-srgb",ASTC12x12Unorm:"astc-12x12-unorm",ASTC12x12UnormSRGB:"astc-12x12-unorm-srgb"},hl={ClampToEdge:"clamp-to-edge",Repeat:"repeat",MirrorRepeat:"mirror-repeat"},Xa={Linear:"linear",Nearest:"nearest"},Oe={Zero:"zero",One:"one",Src:"src",OneMinusSrc:"one-minus-src",SrcAlpha:"src-alpha",OneMinusSrcAlpha:"one-minus-src-alpha",Dst:"dst",OneMinusDstColor:"one-minus-dst",DstAlpha:"dst-alpha",OneMinusDstAlpha:"one-minus-dst-alpha",SrcAlphaSaturated:"src-alpha-saturated",Constant:"constant",OneMinusConstant:"one-minus-constant"},ys={Add:"add",Subtract:"subtract",ReverseSubtract:"reverse-subtract",Min:"min",Max:"max"},Nd={None:0,All:15},es={Keep:"keep",Zero:"zero",Replace:"replace",Invert:"invert",IncrementClamp:"increment-clamp",DecrementClamp:"decrement-clamp",IncrementWrap:"increment-wrap",DecrementWrap:"decrement-wrap"},$R={Storage:"storage"},Cd={UnfilterableFloat:"unfilterable-float",Depth:"depth"},Ld={TwoD:"2d",ThreeD:"3d"},Ti={TwoD:"2d",TwoDArray:"2d-array",Cube:"cube"},qR={All:"all"},_a={Vertex:"vertex",Instance:"instance"},Ul={DepthClipControl:"depth-clip-control",Depth32FloatStencil8:"depth32float-stencil8",TextureCompressionBC:"texture-compression-bc",TextureCompressionETC2:"texture-compression-etc2",TextureCompressionASTC:"texture-compression-astc",TimestampQuery:"timestamp-query",IndirectFirstInstance:"indirect-first-instance",ShaderF16:"shader-f16",RG11B10UFloat:"rg11b10ufloat-renderable",BGRA8UNormStorage:"bgra8unorm-storage",Float32Filterable:"float32-filterable"};class YR extends Qu{constructor(e,t){super(e),this.texture=t,this.version=t?t.version:0,this.isSampler=!0}}class KR extends YR{constructor(e,t){super(e,t?t.value:null),this.textureNode=t}}class jR extends xg{constructor(e,t){super(e,t?t.array:null),this.attribute=t,this.isStorageBuffer=!0}}class ZR{constructor(e){this.device=e;const t=`
struct VarysStruct {
	@builtin( position ) Position: vec4<f32>,
	@location( 0 ) vTex : vec2<f32>
};

@vertex
fn main( @builtin( vertex_index ) vertexIndex : u32 ) -> VarysStruct {

	var Varys : VarysStruct;

	var pos = array< vec2<f32>, 4 >(
		vec2<f32>( -1.0,  1.0 ),
		vec2<f32>(  1.0,  1.0 ),
		vec2<f32>( -1.0, -1.0 ),
		vec2<f32>(  1.0, -1.0 )
	);

	var tex = array< vec2<f32>, 4 >(
		vec2<f32>( 0.0, 0.0 ),
		vec2<f32>( 1.0, 0.0 ),
		vec2<f32>( 0.0, 1.0 ),
		vec2<f32>( 1.0, 1.0 )
	);

	Varys.vTex = tex[ vertexIndex ];
	Varys.Position = vec4<f32>( pos[ vertexIndex ], 0.0, 1.0 );

	return Varys;

}
`,n=`
@group( 0 ) @binding( 0 )
var imgSampler : sampler;

@group( 0 ) @binding( 1 )
var img : texture_2d<f32>;

@fragment
fn main( @location( 0 ) vTex : vec2<f32> ) -> @location( 0 ) vec4<f32> {

	return textureSample( img, imgSampler, vTex );

}
`,i=`
@group( 0 ) @binding( 0 )
var imgSampler : sampler;

@group( 0 ) @binding( 1 )
var img : texture_2d<f32>;

@fragment
fn main( @location( 0 ) vTex : vec2<f32> ) -> @location( 0 ) vec4<f32> {

	return textureSample( img, imgSampler, vec2( vTex.x, 1.0 - vTex.y ) );

}
`;this.mipmapSampler=e.createSampler({minFilter:Xa.Linear}),this.flipYSampler=e.createSampler({minFilter:Xa.Nearest}),this.transferPipelines={},this.flipYPipelines={},this.mipmapVertexShaderModule=e.createShaderModule({label:"mipmapVertex",code:t}),this.mipmapFragmentShaderModule=e.createShaderModule({label:"mipmapFragment",code:n}),this.flipYFragmentShaderModule=e.createShaderModule({label:"flipYFragment",code:i})}getTransferPipeline(e){let t=this.transferPipelines[e];return t===void 0&&(t=this.device.createRenderPipeline({vertex:{module:this.mipmapVertexShaderModule,entryPoint:"main"},fragment:{module:this.mipmapFragmentShaderModule,entryPoint:"main",targets:[{format:e}]},primitive:{topology:dr.TriangleStrip,stripIndexFormat:Ur.Uint32},layout:"auto"}),this.transferPipelines[e]=t),t}getFlipYPipeline(e){let t=this.flipYPipelines[e];return t===void 0&&(t=this.device.createRenderPipeline({vertex:{module:this.mipmapVertexShaderModule,entryPoint:"main"},fragment:{module:this.flipYFragmentShaderModule,entryPoint:"main",targets:[{format:e}]},primitive:{topology:dr.TriangleStrip,stripIndexFormat:Ur.Uint32},layout:"auto"}),this.flipYPipelines[e]=t),t}flipY(e,t,n=0){const i=t.format,{width:s,height:o}=t.size,a=this.getTransferPipeline(i),c=this.getFlipYPipeline(i),l=this.device.createTexture({size:{width:s,height:o,depthOrArrayLayers:1},format:i,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),u=e.createView({baseMipLevel:0,mipLevelCount:1,dimension:Ti.TwoD,baseArrayLayer:n}),h=l.createView({baseMipLevel:0,mipLevelCount:1,dimension:Ti.TwoD,baseArrayLayer:0}),d=this.device.createCommandEncoder({}),f=(g,_,m)=>{const p=g.getBindGroupLayout(0),S=this.device.createBindGroup({layout:p,entries:[{binding:0,resource:this.flipYSampler},{binding:1,resource:_}]}),x=d.beginRenderPass({colorAttachments:[{view:m,loadOp:Bt.Clear,storeOp:rn.Store,clearValue:[0,0,0,0]}]});x.setPipeline(g),x.setBindGroup(0,S),x.draw(4,1,0,0),x.end()};f(a,u,h),f(c,h,u),this.device.queue.submit([d.finish()]),l.destroy()}generateMipmaps(e,t,n=0){const i=this.getTransferPipeline(t.format),s=this.device.createCommandEncoder({}),o=i.getBindGroupLayout(0);let a=e.createView({baseMipLevel:0,mipLevelCount:1,dimension:Ti.TwoD,baseArrayLayer:n});for(let c=1;c<t.mipLevelCount;c++){const l=this.device.createBindGroup({layout:o,entries:[{binding:0,resource:this.mipmapSampler},{binding:1,resource:a}]}),u=e.createView({baseMipLevel:c,mipLevelCount:1,dimension:Ti.TwoD,baseArrayLayer:n}),h=s.beginRenderPass({colorAttachments:[{view:u,loadOp:Bt.Clear,storeOp:rn.Store,clearValue:[0,0,0,0]}]});h.setPipeline(i),h.setBindGroup(0,l),h.draw(4,1,0,0),h.end(),a=u}this.device.queue.submit([s.finish()])}}const QR={[lu]:"never",[Ka]:"less",[uu]:"equal",[ja]:"less-equal",[hu]:"greater",[fu]:"greater-equal",[pu]:"always",[du]:"not-equal"},JR=[0,1,3,2,4,5];class ew{constructor(e){this.backend=e,this._passUtils=null,this.defaultTexture=null,this.defaultCubeTexture=null,this.colorBuffer=null,this.depthTexture=new Vs,this.depthTexture.name="depthBuffer"}createSampler(e){const t=this.backend,n=t.device,i=t.get(e),s={addressModeU:this._convertAddressMode(e.wrapS),addressModeV:this._convertAddressMode(e.wrapT),addressModeW:this._convertAddressMode(e.wrapR),magFilter:this._convertFilterMode(e.magFilter),minFilter:this._convertFilterMode(e.minFilter),mipmapFilter:this._convertFilterMode(e.minFilter),maxAnisotropy:e.anisotropy};e.isDepthTexture&&e.compareFunction!==null&&(s.compare=QR[e.compareFunction]),i.sampler=n.createSampler(s)}createDefaultTexture(e){let t;e.isCubeTexture?t=this._getDefaultCubeTextureGPU():t=this._getDefaultTextureGPU(),this.backend.get(e).texture=t}createTexture(e,t={}){const n=this.backend,i=n.get(e);if(i.initialized)throw new Error("WebGPUTextureUtils: Texture already initialized.");t.needsMipmaps===void 0&&(t.needsMipmaps=!1),t.levels===void 0&&(t.levels=1),t.depth===void 0&&(t.depth=1);const{width:s,height:o,depth:a,levels:c}=t,l=this._getDimension(e),u=e.internalFormat||Tg(e,n.device),h=t.sampleCount!==void 0?t.sampleCount:1,d=e.isRenderTargetTexture?1:h;let f=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC;e.isStorageTexture===!0&&(f|=GPUTextureUsage.STORAGE_BINDING),e.isCompressedTexture!==!0&&(f|=GPUTextureUsage.RENDER_ATTACHMENT);const g={label:e.name,size:{width:s,height:o,depthOrArrayLayers:a},mipLevelCount:c,sampleCount:d,dimension:l,format:u,usage:f};if(e.isVideoTexture){const _=e.source.data,m=new VideoFrame(_);g.size.width=m.displayWidth,g.size.height=m.displayHeight,m.close(),i.externalTexture=_}else{if(u===void 0)return console.warn("WebGPURenderer: Texture format not supported."),this.createDefaultTexture(e);i.texture=n.device.createTexture(g)}if(e.isRenderTargetTexture&&h>1){const _=Object.assign({},g);_.label=_.label+"-msaa",_.sampleCount=h,i.msaaTexture=n.device.createTexture(_)}i.initialized=!0,i.textureDescriptorGPU=g}destroyTexture(e){const t=this.backend,n=t.get(e);n.texture.destroy(),n.msaaTexture!==void 0&&n.msaaTexture.destroy(),t.delete(e)}destroySampler(e){const n=this.backend.get(e);delete n.sampler}generateMipmaps(e){const t=this.backend.get(e);if(e.isCubeTexture)for(let n=0;n<6;n++)this._generateMipmaps(t.texture,t.textureDescriptorGPU,n);else this._generateMipmaps(t.texture,t.textureDescriptorGPU)}getColorBuffer(){this.colorBuffer&&this.colorBuffer.destroy();const e=this.backend,{width:t,height:n}=e.getDrawingBufferSize();return this.colorBuffer=e.device.createTexture({label:"colorBuffer",size:{width:t,height:n,depthOrArrayLayers:1},sampleCount:e.parameters.sampleCount,format:O.BGRA8Unorm,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),this.colorBuffer}getDepthBuffer(e=!0,t=!0){const n=this.backend,{width:i,height:s}=n.getDrawingBufferSize(),o=this.depthTexture,a=n.get(o).texture;let c,l;if(t?(c=Ri,l=_i):e&&(c=ii,l=ei),a!==void 0){if(o.image.width===i&&o.image.height===s&&o.format===c&&o.type===l)return a;this.destroyTexture(o)}return o.name="depthBuffer",o.format=c,o.type=l,o.image.width=i,o.image.height=s,this.createTexture(o,{sampleCount:n.parameters.sampleCount,width:i,height:s}),n.get(o).texture}updateTexture(e,t){const n=this.backend.get(e),{textureDescriptorGPU:i}=n;if(!(e.isRenderTargetTexture||i===void 0)){if(e.isDataTexture||e.isData3DTexture)this._copyBufferToTexture(t.image,n.texture,i,0,!1);else if(e.isDataArrayTexture)for(let s=0;s<t.image.depth;s++)this._copyBufferToTexture(t.image,n.texture,i,s,!1,s);else if(e.isCompressedTexture)this._copyCompressedBufferToTexture(e.mipmaps,n.texture,i);else if(e.isCubeTexture)this._copyCubeMapToTexture(t.images,n.texture,i,e.flipY);else if(e.isVideoTexture){const s=e.source.data;n.externalTexture=s}else this._copyImageToTexture(t.image,n.texture,i,0,e.flipY);n.version=e.version,e.onUpdate&&e.onUpdate(e)}}async copyTextureToBuffer(e,t,n,i,s){const o=this.backend.device,a=this.backend.get(e),c=a.texture,l=a.textureDescriptorGPU.format,u=this._getBytesPerTexel(l),h=o.createBuffer({size:i*s*u,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),d=o.createCommandEncoder();d.copyTextureToBuffer({texture:c,origin:{x:t,y:n}},{buffer:h,bytesPerRow:i*u},{width:i,height:s});const f=this._getTypedArrayType(l);o.queue.submit([d.finish()]),await h.mapAsync(GPUMapMode.READ);const g=h.getMappedRange();return new f(g)}_isEnvironmentTexture(e){const t=e.mapping;return t===br||t===Ar||t===rs||t===os}_getDefaultTextureGPU(){let e=this.defaultTexture;if(e===null){const t=new En;t.minFilter=mt,t.magFilter=mt,this.createTexture(t,{width:1,height:1}),this.defaultTexture=e=t}return this.backend.get(e).texture}_getDefaultCubeTextureGPU(){let e=this.defaultTexture;if(e===null){const t=new Tu;t.minFilter=mt,t.magFilter=mt,this.createTexture(t,{width:1,height:1,depth:6}),this.defaultCubeTexture=e=t}return this.backend.get(e).texture}_copyCubeMapToTexture(e,t,n,i){for(let s=0;s<6;s++){const o=e[s],a=i===!0?JR[s]:s;o.isDataTexture?this._copyBufferToTexture(o.image,t,n,a,i):this._copyImageToTexture(o,t,n,a,i)}}_copyImageToTexture(e,t,n,i,s){this.backend.device.queue.copyExternalImageToTexture({source:e},{texture:t,mipLevel:0,origin:{x:0,y:0,z:i}},{width:e.width,height:e.height,depthOrArrayLayers:1}),s===!0&&this._flipY(t,n,i)}_getPassUtils(){let e=this._passUtils;return e===null&&(this._passUtils=e=new ZR(this.backend.device)),e}_generateMipmaps(e,t,n=0){this._getPassUtils().generateMipmaps(e,t,n)}_flipY(e,t,n=0){this._getPassUtils().flipY(e,t,n)}_copyBufferToTexture(e,t,n,i,s,o=0){const a=this.backend.device,c=e.data,l=this._getBytesPerTexel(n.format),u=e.width*l;a.queue.writeTexture({texture:t,mipLevel:0,origin:{x:0,y:0,z:i}},c,{offset:e.width*e.height*l*o,bytesPerRow:u},{width:e.width,height:e.height,depthOrArrayLayers:1}),s===!0&&this._flipY(t,n,i)}_copyCompressedBufferToTexture(e,t,n){const i=this.backend.device,s=this._getBlockData(n.format);for(let o=0;o<e.length;o++){const a=e[o],c=a.width,l=a.height,u=Math.ceil(c/s.width)*s.byteLength;i.queue.writeTexture({texture:t,mipLevel:o},a.data,{offset:0,bytesPerRow:u},{width:Math.ceil(c/s.width)*s.width,height:Math.ceil(l/s.width)*s.width,depthOrArrayLayers:1})}}_getBlockData(e){if(e===O.BC1RGBAUnorm||e===O.BC1RGBAUnormSRGB)return{byteLength:8,width:4,height:4};if(e===O.BC2RGBAUnorm||e===O.BC2RGBAUnormSRGB)return{byteLength:16,width:4,height:4};if(e===O.BC3RGBAUnorm||e===O.BC3RGBAUnormSRGB)return{byteLength:16,width:4,height:4};if(e===O.BC4RUnorm||e===O.BC4RSNorm)return{byteLength:8,width:4,height:4};if(e===O.BC5RGUnorm||e===O.BC5RGSnorm)return{byteLength:16,width:4,height:4};if(e===O.BC6HRGBUFloat||e===O.BC6HRGBFloat)return{byteLength:16,width:4,height:4};if(e===O.BC7RGBAUnorm||e===O.BC7RGBAUnormSRGB)return{byteLength:16,width:4,height:4};if(e===O.ETC2RGB8Unorm||e===O.ETC2RGB8UnormSRGB)return{byteLength:8,width:4,height:4};if(e===O.ETC2RGB8A1Unorm||e===O.ETC2RGB8A1UnormSRGB)return{byteLength:8,width:4,height:4};if(e===O.ETC2RGBA8Unorm||e===O.ETC2RGBA8UnormSRGB)return{byteLength:16,width:4,height:4};if(e===O.EACR11Unorm)return{byteLength:8,width:4,height:4};if(e===O.EACR11Snorm)return{byteLength:8,width:4,height:4};if(e===O.EACRG11Unorm)return{byteLength:16,width:4,height:4};if(e===O.EACRG11Snorm)return{byteLength:16,width:4,height:4};if(e===O.ASTC4x4Unorm||e===O.ASTC4x4UnormSRGB)return{byteLength:16,width:4,height:4};if(e===O.ASTC5x4Unorm||e===O.ASTC5x4UnormSRGB)return{byteLength:16,width:5,height:4};if(e===O.ASTC5x5Unorm||e===O.ASTC5x5UnormSRGB)return{byteLength:16,width:5,height:5};if(e===O.ASTC6x5Unorm||e===O.ASTC6x5UnormSRGB)return{byteLength:16,width:6,height:5};if(e===O.ASTC6x6Unorm||e===O.ASTC6x6UnormSRGB)return{byteLength:16,width:6,height:6};if(e===O.ASTC8x5Unorm||e===O.ASTC8x5UnormSRGB)return{byteLength:16,width:8,height:5};if(e===O.ASTC8x6Unorm||e===O.ASTC8x6UnormSRGB)return{byteLength:16,width:8,height:6};if(e===O.ASTC8x8Unorm||e===O.ASTC8x8UnormSRGB)return{byteLength:16,width:8,height:8};if(e===O.ASTC10x5Unorm||e===O.ASTC10x5UnormSRGB)return{byteLength:16,width:10,height:5};if(e===O.ASTC10x6Unorm||e===O.ASTC10x6UnormSRGB)return{byteLength:16,width:10,height:6};if(e===O.ASTC10x8Unorm||e===O.ASTC10x8UnormSRGB)return{byteLength:16,width:10,height:8};if(e===O.ASTC10x10Unorm||e===O.ASTC10x10UnormSRGB)return{byteLength:16,width:10,height:10};if(e===O.ASTC12x10Unorm||e===O.ASTC12x10UnormSRGB)return{byteLength:16,width:12,height:10};if(e===O.ASTC12x12Unorm||e===O.ASTC12x12UnormSRGB)return{byteLength:16,width:12,height:12}}_convertAddressMode(e){let t=hl.ClampToEdge;return e===no?t=hl.Repeat:e===io&&(t=hl.MirrorRepeat),t}_convertFilterMode(e){let t=Xa.Linear;return(e===mt||e===Rr||e===Rs)&&(t=Xa.Nearest),t}_getBytesPerTexel(e){if(e===O.R8Unorm)return 1;if(e===O.R16Float||e===O.RG8Unorm)return 2;if(e===O.RG16Float||e===O.R32Float||e===O.RGBA8Unorm||e===O.RGBA8UnormSRGB)return 4;if(e===O.RG32Float||e===O.RGBA16Float)return 8;if(e===O.RGBA32Float)return 16}_getTypedArrayType(e){if(e===O.R8Uint)return Uint8Array;if(e===O.R8Sint)return Int8Array;if(e===O.R8Unorm)return Uint8Array;if(e===O.R8Snorm)return Int8Array;if(e===O.RG8Uint)return Uint8Array;if(e===O.RG8Sint)return Int8Array;if(e===O.RG8Unorm)return Uint8Array;if(e===O.RG8Snorm)return Int8Array;if(e===O.RGBA8Uint)return Uint8Array;if(e===O.RGBA8Sint)return Int8Array;if(e===O.RGBA8Unorm)return Uint8Array;if(e===O.RGBA8Snorm)return Int8Array;if(e===O.R16Uint)return Uint16Array;if(e===O.R16Sint)return Int16Array;if(e===O.RG16Uint)return Uint16Array;if(e===O.RG16Sint)return Int16Array;if(e===O.RGBA16Uint)return Uint16Array;if(e===O.RGBA16Sint)return Int16Array;if(e===O.R32Uint)return Uint32Array;if(e===O.R32Sint)return Int32Array;if(e===O.R32Float)return Float32Array;if(e===O.RG32Uint)return Uint32Array;if(e===O.RG32Sint)return Int32Array;if(e===O.RG32Float)return Float32Array;if(e===O.RGBA32Uint)return Uint32Array;if(e===O.RGBA32Sint)return Int32Array;if(e===O.RGBA32Float)return Float32Array}_getDimension(e){let t;return e.isData3DTexture?t=Ld.ThreeD:t=Ld.TwoD,t}}function Tg(r,e=null){const t=r.format,n=r.type,i=r.colorSpace;let s;if(r.isFramebufferTexture===!0)s=O.BGRA8Unorm;else if(r.isCompressedTexture===!0)switch(t){case ws:s=i===Ee?O.BC1RGBAUnormSRGB:O.BC1RGBAUnorm;break;case Ns:s=i===Ee?O.BC2RGBAUnormSRGB:O.BC2RGBAUnorm;break;case Cs:s=i===Ee?O.BC3RGBAUnormSRGB:O.BC3RGBAUnorm;break;case so:s=i===Ee?O.ETC2RGB8UnormSRGB:O.ETC2RGB8Unorm;break;case ro:s=i===Ee?O.ETC2RGBA8UnormSRGB:O.ETC2RGBA8Unorm;break;case oo:s=i===Ee?O.ASTC4x4UnormSRGB:O.ASTC4x4Unorm;break;case ao:s=i===Ee?O.ASTC5x4UnormSRGB:O.ASTC5x4Unorm;break;case co:s=i===Ee?O.ASTC5x5UnormSRGB:O.ASTC5x5Unorm;break;case lo:s=i===Ee?O.ASTC6x5UnormSRGB:O.ASTC6x5Unorm;break;case uo:s=i===Ee?O.ASTC6x6UnormSRGB:O.ASTC6x6Unorm;break;case ho:s=i===Ee?O.ASTC8x5UnormSRGB:O.ASTC8x5Unorm;break;case fo:s=i===Ee?O.ASTC8x6UnormSRGB:O.ASTC8x6Unorm;break;case po:s=i===Ee?O.ASTC8x8UnormSRGB:O.ASTC8x8Unorm;break;case mo:s=i===Ee?O.ASTC10x5UnormSRGB:O.ASTC10x5Unorm;break;case go:s=i===Ee?O.ASTC10x6UnormSRGB:O.ASTC10x6Unorm;break;case _o:s=i===Ee?O.ASTC10x8UnormSRGB:O.ASTC10x8Unorm;break;case xo:s=i===Ee?O.ASTC10x10UnormSRGB:O.ASTC10x10Unorm;break;case vo:s=i===Ee?O.ASTC12x10UnormSRGB:O.ASTC12x10Unorm;break;case So:s=i===Ee?O.ASTC12x12UnormSRGB:O.ASTC12x12Unorm;break;default:console.error("WebGPURenderer: Unsupported texture format.",t)}else switch(t){case Hn:switch(n){case ni:s=i===Ee?O.RGBA8UnormSRGB:O.RGBA8Unorm;break;case Ei:s=O.RGBA16Float;break;case kt:s=O.RGBA32Float;break;default:console.error("WebGPURenderer: Unsupported texture type with RGBAFormat.",n)}break;case tu:switch(n){case ni:s=O.R8Unorm;break;case Ei:s=O.R16Float;break;case kt:s=O.R32Float;break;default:console.error("WebGPURenderer: Unsupported texture type with RedFormat.",n)}break;case iu:switch(n){case ni:s=O.RG8Unorm;break;case Ei:s=O.RG16Float;break;case kt:s=O.RG32Float;break;default:console.error("WebGPURenderer: Unsupported texture type with RGFormat.",n)}break;case ii:switch(n){case Lo:s=O.Depth16Unorm;break;case ei:s=O.Depth24Plus;break;case kt:s=O.Depth32Float;break;default:console.error("WebGPURenderer: Unsupported texture type with DepthFormat.",n)}break;case Ri:switch(n){case _i:s=O.Depth24PlusStencil8;break;case kt:e&&e.features.has(Ul.Depth32FloatStencil8)===!1&&console.error('WebGPURenderer: Depth textures with DepthStencilFormat + FloatType can only be used with the "depth32float-stencil8" GPU feature.'),s=O.Depth32FloatStencil8;break;default:console.error("WebGPURenderer: Unsupported texture type with DepthStencilFormat.",n)}break;default:console.error("WebGPURenderer: Unsupported texture format.",t)}return s}const tw=/^[fn]*\s*([a-z_0-9]+)?\s*\(([\s\S]*?)\)\s*[\-\>]*\s*([a-z_0-9]+)?/i,nw=/[a-z_0-9]+|<(.*?)>+/ig,iw={f32:"float"},sw=r=>{r=r.trim();const e=r.match(tw);if(e!==null&&e.length===4){const t=e[2],n=[];let i=null;for(;(i=nw.exec(t))!==null;)n.push(i);const s=[];let o=0;for(;o<n.length;){const u=n[o++][0];let h=n[o++][0];h=iw[h]||h,o<n.length&&n[o][0].startsWith("<")===!0&&o++,s.push(new qu(h,u))}const a=r.substring(e[0].length),c=e[1]!==void 0?e[1]:"";return{type:e[3]||"void",inputs:s,name:c,inputsCode:t,blockCode:a}}else throw new Error("FunctionNode: Function is not a WGSL code.")};class rw extends ju{constructor(e){const{type:t,inputs:n,name:i,inputsCode:s,blockCode:o}=sw(e);super(t,n,i),this.inputsCode=s,this.blockCode=o}getCode(e=this.name){const t=this.type!=="void"?"-> "+this.type:"";return`fn ${e} ( ${this.inputsCode.trim()} ) ${t}`+this.blockCode}}class ow extends Um{parseFunction(e){return new rw(e)}}const xa={vertex:GPUShaderStage.VERTEX,fragment:GPUShaderStage.FRAGMENT,compute:GPUShaderStage.COMPUTE},aw={instance:!0},cw={"^^":"threejs_xor"},lw={float:"f32",int:"i32",uint:"u32",bool:"bool",color:"vec3<f32>",vec2:"vec2<f32>",ivec2:"vec2<i32>",uvec2:"vec2<u32>",bvec2:"vec2<bool>",vec3:"vec3<f32>",ivec3:"vec3<i32>",uvec3:"vec3<u32>",bvec3:"vec3<bool>",vec4:"vec4<f32>",ivec4:"vec4<i32>",uvec4:"vec4<u32>",bvec4:"vec4<bool>",mat3:"mat3x3<f32>",imat3:"mat3x3<i32>",umat3:"mat3x3<u32>",bmat3:"mat3x3<bool>",mat4:"mat4x4<f32>",imat4:"mat4x4<i32>",umat4:"mat4x4<u32>",bmat4:"mat4x4<bool>"},uw={dFdx:"dpdx",dFdy:"- dpdy",mod:"threejs_mod",lessThanEqual:"threejs_lessThanEqual",greaterThan:"threejs_greaterThan",inversesqrt:"inverseSqrt",bitcast:"bitcast<f32>"},Pd={threejs_xor:new ns(`
fn threejs_xor( a : bool, b : bool ) -> bool {

	return ( a || b ) && !( a && b );

}
`),lessThanEqual:new ns(`
fn threejs_lessThanEqual( a : vec3<f32>, b : vec3<f32> ) -> vec3<bool> {

	return vec3<bool>( a.x <= b.x, a.y <= b.y, a.z <= b.z );

}
`),greaterThan:new ns(`
fn threejs_greaterThan( a : vec3<f32>, b : vec3<f32> ) -> vec3<bool> {

	return vec3<bool>( a.x > b.x, a.y > b.y, a.z > b.z );

}
`),mod:new ns(`
fn threejs_mod( x : f32, y : f32 ) -> f32 {

	return x - y * floor( x / y );

}
`),repeatWrapping:new ns(`
fn threejs_repeatWrapping( uv : vec2<f32>, dimension : vec2<u32> ) -> vec2<u32> {

	let uvScaled = vec2<u32>( uv * vec2<f32>( dimension ) );

	return ( ( uvScaled % dimension ) + dimension ) % dimension;

}
`)};class hw extends zp{constructor(e,t,n=null){super(e,t,new ow,n),this.uniformGroups={},this.builtins={}}build(){const{object:e,material:t}=this;return t!==null?bn.fromMaterial(t).build(this):this.addFlow("compute",e),super.build()}needsColorSpaceToLinear(e){return e.isVideoTexture===!0&&e.colorSpace!==gn}_generateTextureSample(e,t,n,i,s=this.shaderStage){return s==="fragment"?i?`textureSample( ${t}, ${t}_sampler, ${n}, ${i} )`:`textureSample( ${t}, ${t}_sampler, ${n} )`:this.generateTextureLod(e,t,n)}_generateVideoSample(e,t,n=this.shaderStage){if(n==="fragment")return`textureSampleBaseClampToEdge( ${e}, ${e}_sampler, vec2<f32>( ${t}.x, 1.0 - ${t}.y ) )`;console.error(`WebGPURenderer: THREE.VideoTexture does not support ${n} shader.`)}_generateTextureSampleLevel(e,t,n,i,s,o=this.shaderStage){return o==="fragment"&&this.isUnfilterable(e)===!1?`textureSampleLevel( ${t}, ${t}_sampler, ${n}, ${i} )`:this.generateTextureLod(e,t,n,i)}generateTextureLod(e,t,n,i="0"){this._include("repeatWrapping");const s=`textureDimensions( ${t}, 0 )`;return`textureLoad( ${t}, threejs_repeatWrapping( ${n}, ${s} ), i32( ${i} ) )`}generateTextureLoad(e,t,n,i,s="0u"){return i?`textureLoad( ${t}, ${n}, ${i}, ${s} )`:`textureLoad( ${t}, ${n}, ${s} )`}isUnfilterable(e){return e.isDataTexture===!0&&e.type===kt}generateTexture(e,t,n,i,s=this.shaderStage){let o=null;return e.isVideoTexture===!0?o=this._generateVideoSample(t,n,s):this.isUnfilterable(e)?o=this.generateTextureLod(e,t,n,"0",i,s):o=this._generateTextureSample(e,t,n,i,s),o}generateTextureCompare(e,t,n,i,s,o=this.shaderStage){if(o==="fragment")return`textureSampleCompare( ${t}, ${t}_sampler, ${n}, ${i} )`;console.error(`WebGPURenderer: THREE.DepthTexture.compareFunction() does not support ${o} shader.`)}generateTextureLevel(e,t,n,i,s,o=this.shaderStage){let a=null;return e.isVideoTexture===!0?a=this._generateVideoSample(t,n,o):a=this._generateTextureSampleLevel(e,t,n,i,s,o),a}getPropertyName(e,t=this.shaderStage){if(e.isNodeVarying===!0&&e.needsInterpolation===!0){if(t==="vertex")return`varyings.${e.name}`}else if(e.isNodeUniform===!0){const n=e.name,i=e.type;return i==="texture"||i==="cubeTexture"?n:i==="buffer"||i==="storageBuffer"?`NodeBuffer_${e.id}.${n}`:e.groupNode.name+"."+n}return super.getPropertyName(e)}_getUniformGroupCount(e){return Object.keys(this.uniforms[e]).length}getFunctionOperator(e){const t=cw[e];return t!==void 0?(this._include(t),t):null}getUniformFromNode(e,t,n,i=null){const s=super.getUniformFromNode(e,t,n,i),o=this.getDataFromNode(e,n,this.globalCache);if(o.uniformGPU===void 0){let a;const c=this.bindings[n];if(t==="texture"||t==="cubeTexture"){let l=null;if(t==="texture"?l=new eh(s.name,s.node):t==="cubeTexture"&&(l=new Sg(s.name,s.node)),l.store=e.isStoreTextureNode===!0,l.setVisibility(xa[n]),n==="fragment"&&this.isUnfilterable(e.value)===!1&&l.store===!1){const u=new KR(`${s.name}_sampler`,s.node);u.setVisibility(xa[n]),c.push(u,l),a=[u,l]}else c.push(l),a=[l]}else if(t==="buffer"||t==="storageBuffer"){const l=t==="storageBuffer"?jR:Ju,u=new l("NodeBuffer_"+e.id,e.value);u.setVisibility(xa[n]),c.push(u),a=u}else{const l=e.groupNode,u=l.name,h=this.uniformGroups[n]||(this.uniformGroups[n]={});let d=h[u];if(d===void 0&&(d=new vg(u,l),d.setVisibility(xa[n]),h[u]=d,c.push(d)),e.isArrayUniformNode===!0){a=[];for(const f of e.nodes){const g=this.getNodeUniform(f,t);g.boundary=NR(g.itemSize),g.itemSize=_g(g.itemSize),d.addUniform(g),a.push(g)}}else a=this.getNodeUniform(s,t),d.addUniform(a)}o.uniformGPU=a,n==="vertex"&&(this.bindingsOffset.fragment=c.length)}return s}isReference(e){return super.isReference(e)||e==="texture_2d"||e==="texture_cube"||e==="texture_depth_2d"||e==="texture_storage_2d"}getBuiltin(e,t,n,i=this.shaderStage){const s=this.builtins[i]||(this.builtins[i]=new Map);return s.has(e)===!1&&s.set(e,{name:e,property:t,type:n}),t}getVertexIndex(){return this.shaderStage==="vertex"?this.getBuiltin("vertex_index","vertexIndex","u32","attribute"):"vertexIndex"}buildFunctionCode(e){const t=e.layout,n=this.flowShaderNode(e),i=[];for(const o of t.inputs)i.push(o.name+" : "+this.getType(o.type));return`fn ${t.name}( ${i.join(", ")} ) -> ${this.getType(t.type)} {
${n.vars}
${n.code}
	return ${n.result};

}`}getInstanceIndex(){return this.shaderStage==="vertex"?this.getBuiltin("instance_index","instanceIndex","u32","attribute"):"instanceIndex"}getFrontFacing(){return this.getBuiltin("front_facing","isFront","bool")}getFragCoord(){return this.getBuiltin("position","fragCoord","vec4<f32>")+".xy"}getFragDepth(){return"output."+this.getBuiltin("frag_depth","depth","f32","output")}isFlipY(){return!1}getBuiltins(e){const t=[],n=this.builtins[e];if(n!==void 0)for(const{name:i,property:s,type:o}of n.values())t.push(`@builtin( ${i} ) ${s} : ${o}`);return t.join(`,
	`)}getAttributes(e){const t=[];if(e==="compute"&&this.getBuiltin("global_invocation_id","id","vec3<u32>","attribute"),e==="vertex"||e==="compute"){const n=this.getBuiltins("attribute");n&&t.push(n);const i=this.getAttributesArray();for(let s=0,o=i.length;s<o;s++){const a=i[s],c=a.name,l=this.getType(a.type);t.push(`@location( ${s} ) ${c} : ${l}`)}}return t.join(`,
	`)}getStructMembers(e){const t=[],n=e.getMemberTypes();for(let i=0;i<n.length;i++){const s=n[i];t.push(`	@location( ${i} ) m${i} : ${s}<f32>`)}return t.join(`,
`)}getStructs(e){const t=[],n=this.structs[e];for(let i=0,s=n.length;i<s;i++){const o=n[i];let c=`struct ${o.name} {
`;c+=this.getStructMembers(o),c+=`
}`,t.push(c)}return t.join(`

`)}getVar(e,t){return`var ${t} : ${this.getType(e)}`}getVars(e){const t=[],n=this.vars[e];if(n!==void 0)for(const i of n)t.push(`	${this.getVar(i.type,i.name)};`);return`
${t.join(`
`)}
`}getVaryings(e){const t=[];if(e==="vertex"&&this.getBuiltin("position","Vertex","vec4<f32>","vertex"),e==="vertex"||e==="fragment"){const s=this.varyings,o=this.vars[e];for(let a=0;a<s.length;a++){const c=s[a];if(c.needsInterpolation){let l=`@location( ${a} )`;/^(int|uint|ivec|uvec)/.test(c.type)&&(l+=" @interpolate( flat )"),t.push(`${l} ${c.name} : ${this.getType(c.type)}`)}else e==="vertex"&&o.includes(c)===!1&&o.push(c)}}const n=this.getBuiltins(e);n&&t.push(n);const i=t.join(`,
	`);return e==="vertex"?this._getWGSLStruct("VaryingsStruct","	"+i):i}getUniforms(e){const t=this.uniforms[e],n=[],i=[],s=[],o={};let a=this.bindingsOffset[e];for(const l of t)if(l.type==="texture"||l.type==="cubeTexture"){const u=l.node.value;e==="fragment"&&this.isUnfilterable(u)===!1&&l.node.isStoreTextureNode!==!0&&(u.isDepthTexture===!0&&u.compareFunction!==null?n.push(`@binding( ${a++} ) @group( 0 ) var ${l.name}_sampler : sampler_comparison;`):n.push(`@binding( ${a++} ) @group( 0 ) var ${l.name}_sampler : sampler;`));let h;u.isCubeTexture===!0?h="texture_cube<f32>":u.isDataArrayTexture===!0?h="texture_2d_array<f32>":u.isDepthTexture===!0?h="texture_depth_2d":u.isVideoTexture===!0?h="texture_external":l.node.isStoreTextureNode===!0?h="texture_storage_2d<"+Tg(u)+", write>":h="texture_2d<f32>",n.push(`@binding( ${a++} ) @group( 0 ) var ${l.name} : ${h};`)}else if(l.type==="buffer"||l.type==="storageBuffer"){const u=l.node,h=this.getType(u.bufferType),d=u.bufferCount,f=d>0?", "+d:"",g=`	${l.name} : array< ${h}${f} >
`,_=u.isStorageBufferNode?"storage,read_write":"uniform";i.push(this._getWGSLStructBinding("NodeBuffer_"+u.id,g,_,a++))}else{const u=this.getType(this.getVectorType(l.type)),h=l.groupNode.name,d=o[h]||(o[h]={index:a++,snippets:[]});if(Array.isArray(l.value)===!0){const f=l.value.length;d.snippets.push(`uniform ${u}[ ${f} ] ${l.name}`)}else d.snippets.push(`	${l.name} : ${u}`)}for(const l in o){const u=o[l];s.push(this._getWGSLStructBinding(l,u.snippets.join(`,
`),"uniform",u.index))}let c=n.join(`
`);return c+=i.join(`
`),c+=s.join(`
`),c}buildCode(){const e=this.material!==null?{fragment:{},vertex:{}}:{compute:{}};for(const t in e){const n=e[t];n.uniforms=this.getUniforms(t),n.attributes=this.getAttributes(t),n.varyings=this.getVaryings(t),n.structs=this.getStructs(t),n.vars=this.getVars(t),n.codes=this.getCodes(t);let i=`// code

`;i+=this.flowCode[t];const s=this.flowNodes[t],o=s[s.length-1],a=o.outputNode,c=a!==void 0&&a.isOutputStructNode===!0;for(const l of s){const u=this.getFlowData(l),h=l.name;if(h&&(i.length>0&&(i+=`
`),i+=`	// flow -> ${h}
	`),i+=`${u.code}
	`,l===o&&t!=="compute"){if(i+=`// result

	`,t==="vertex")i+=`varyings.Vertex = ${u.result};`;else if(t==="fragment")if(c)n.returnType=a.nodeType,i+=`return ${u.result};`;else{let d="	@location(0) color: vec4<f32>";const f=this.getBuiltins("output");f&&(d+=`,
	`+f),n.returnType="OutputStruct",n.structs+=this._getWGSLStruct("OutputStruct",d),n.structs+=`
var<private> output : OutputStruct;

`,i+=`output.color = ${u.result};

	return output;`}}}n.flow=i}this.material!==null?(this.vertexShader=this._getWGSLVertexCode(e.vertex),this.fragmentShader=this._getWGSLFragmentCode(e.fragment)):this.computeShader=this._getWGSLComputeCode(e.compute,(this.object.workgroupSize||[64]).join(", "))}getMethod(e){return Pd[e]!==void 0&&this._include(e),uw[e]||e}getType(e){return lw[e]||e}isAvailable(e){return aw[e]===!0}_include(e){const t=Pd[e];return t.build(this),this.currentFunctionNode!==null&&this.currentFunctionNode.includes.push(t),t}_getWGSLVertexCode(e){return`${this.getSignature()}

// uniforms
${e.uniforms}

// varyings
${e.varyings}
var<private> varyings : VaryingsStruct;

// codes
${e.codes}

@vertex
fn main( ${e.attributes} ) -> VaryingsStruct {

	// vars
	${e.vars}

	// flow
	${e.flow}

	return varyings;

}
`}_getWGSLFragmentCode(e){return`${this.getSignature()}

// uniforms
${e.uniforms}

// structs
${e.structs}

// codes
${e.codes}

@fragment
fn main( ${e.varyings} ) -> ${e.returnType} {

	// vars
	${e.vars}

	// flow
	${e.flow}

}
`}_getWGSLComputeCode(e,t){return`${this.getSignature()}
// system
var<private> instanceIndex : u32;

// uniforms
${e.uniforms}

// codes
${e.codes}

@compute @workgroup_size( ${t} )
fn main( ${e.attributes} ) {

	// system
	instanceIndex = id.x;

	// vars
	${e.vars}

	// flow
	${e.flow}

}
`}_getWGSLStruct(e,t){return`
struct ${e} {
${t}
};`}_getWGSLStructBinding(e,t,n,i=0,s=0){const o=e+"Struct";return`${this._getWGSLStruct(o,t)}
@binding( ${i} ) @group( ${s} )
var<${n}> ${e} : ${o};`}}class dw{constructor(e){this.backend=e}getCurrentDepthStencilFormat(e){let t;return e.depthTexture!==null?t=this.getTextureFormatGPU(e.depthTexture):e.depth&&e.stencil?t=O.Depth24PlusStencil8:e.depth&&(t=O.Depth24Plus),t}getTextureFormatGPU(e){return this.backend.get(e).texture.format}getCurrentColorFormat(e){let t;return e.textures!==null?t=this.getTextureFormatGPU(e.textures[0]):t=O.BGRA8Unorm,t}getCurrentColorSpace(e){return e.textures!==null?e.textures[0].colorSpace:this.backend.renderer.outputColorSpace}getPrimitiveTopology(e,t){if(e.isPoints)return dr.PointList;if(e.isLineSegments||e.isMesh&&t.wireframe===!0)return dr.LineList;if(e.isLine)return dr.LineStrip;if(e.isMesh)return dr.TriangleList}getSampleCount(e){return e.textures!==null?e.sampleCount:this.backend.parameters.sampleCount}}const fw=new Map([[Int8Array,["sint8","snorm8"]],[Uint8Array,["uint8","unorm8"]],[Int16Array,["sint16","snorm16"]],[Uint16Array,["uint16","unorm16"]],[Int32Array,["sint32","snorm32"]],[Uint32Array,["uint32","unorm32"]],[Float32Array,["float32"]]]),pw=new Map([[sf,["float16"]]]),mw=new Map([[Int32Array,"sint32"],[Uint32Array,"uint32"],[Float32Array,"float32"]]);class gw{constructor(e){this.backend=e}createAttribute(e,t){const n=this._getBufferAttribute(e),i=this.backend,s=i.get(n);let o=s.buffer;if(o===void 0){const a=i.device,c=n.array,l=c.byteLength+(4-c.byteLength%4)%4;o=a.createBuffer({label:n.name,size:l,usage:t,mappedAtCreation:!0}),new c.constructor(o.getMappedRange()).set(c),o.unmap(),s.buffer=o}}updateAttribute(e){const t=this._getBufferAttribute(e),n=this.backend,i=n.device,s=n.get(t).buffer,o=t.array,a=t.updateRanges;if(a.length===0)i.queue.writeBuffer(s,0,o,0);else{for(let c=0,l=a.length;c<l;c++){const u=a[c];i.queue.writeBuffer(s,0,o,u.start*o.BYTES_PER_ELEMENT,u.count*o.BYTES_PER_ELEMENT)}t.clearUpdateRanges()}}createShaderVertexBuffers(e){const t=e.getAttributes(),n=new Map;for(let i=0;i<t.length;i++){const s=t[i],o=s.array.BYTES_PER_ELEMENT,a=this._getBufferAttribute(s);let c=n.get(a);if(c===void 0){let h,d;s.isInterleavedBufferAttribute===!0?(h=s.data.stride*o,d=s.data.isInstancedInterleavedBuffer?_a.Instance:_a.Vertex):(h=s.itemSize*o,d=s.isInstancedBufferAttribute?_a.Instance:_a.Vertex),c={arrayStride:h,attributes:[],stepMode:d},n.set(a,c)}const l=this._getVertexFormat(s),u=s.isInterleavedBufferAttribute===!0?s.offset*o:0;c.attributes.push({shaderLocation:i,offset:u,format:l})}return Array.from(n.values())}destroyAttribute(e){const t=this.backend;t.get(this._getBufferAttribute(e)).buffer.destroy(),t.delete(e)}async getArrayBufferAsync(e){const t=this.backend,n=t.device,i=t.get(this._getBufferAttribute(e)),s=i.buffer,o=s.size;let a=i.readBuffer,c=!0;a===void 0&&(a=n.createBuffer({label:e.name,size:o,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),c=!1,i.readBuffer=a);const l=n.createCommandEncoder({});l.copyBufferToBuffer(s,0,a,0,o),c&&a.unmap();const u=l.finish();return n.queue.submit([u]),await a.mapAsync(GPUMapMode.READ),a.getMappedRange()}_getVertexFormat(e){const{itemSize:t,normalized:n}=e,i=e.array.constructor,s=e.constructor;let o;if(t==1)o=mw.get(i);else{const c=(pw.get(s)||fw.get(i))[n?1:0];if(c){const l=i.BYTES_PER_ELEMENT*t,h=Math.floor((l+3)/4)*4/i.BYTES_PER_ELEMENT;if(h%1)throw new Error("THREE.WebGPUAttributeUtils: Bad vertex format item size.");o=`${c}x${h}`}}return o||console.error("THREE.WebGPUAttributeUtils: Vertex format not supported yet."),o}_getBufferAttribute(e){return e.isInterleavedBufferAttribute&&(e=e.data),e}}class _w{constructor(e){this.backend=e}createBindingsLayout(e){const n=this.backend.device,i=[];let s=0;for(const o of e){const a={binding:s++,visibility:o.visibility};if(o.isUniformBuffer||o.isStorageBuffer){const c={};o.isStorageBuffer&&(c.type=$R.Storage),a.buffer=c}else if(o.isSampler){const c={};o.texture.isDepthTexture&&o.texture.compareFunction!==null&&(c.type="comparison"),a.sampler=c}else if(o.isSampledTexture&&o.texture.isVideoTexture)a.externalTexture={};else if(o.isSampledTexture&&o.store){const c=this.backend.get(o.texture).texture.format;a.storageTexture={format:c}}else if(o.isSampledTexture){const c={};o.texture.isDepthTexture?c.sampleType=Cd.Depth:o.texture.isDataTexture&&o.texture.type===kt&&(c.sampleType=Cd.UnfilterableFloat),o.isSampledCubeTexture?c.viewDimension=Ti.Cube:o.texture.isDataArrayTexture&&(c.viewDimension=Ti.TwoDArray),a.texture=c}else console.error(`WebGPUBindingUtils: Unsupported binding "${o}".`);i.push(a)}return n.createBindGroupLayout({entries:i})}createBindings(e){const n=this.backend.get(e),i=this.createBindingsLayout(e),s=this.createBindGroup(e,i);n.layout=i,n.group=s,n.bindings=e}updateBinding(e){const t=this.backend,n=t.device,i=e.buffer,s=t.get(e).buffer;n.queue.writeBuffer(s,0,i,0)}createBindGroup(e,t){const n=this.backend,i=n.device;let s=0;const o=[];for(const a of e){if(a.isUniformBuffer){const c=n.get(a);if(c.buffer===void 0){const l=a.byteLength,u=GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,h=i.createBuffer({label:"bindingBuffer_"+a.name,size:l,usage:u});c.buffer=h}o.push({binding:s,resource:{buffer:c.buffer}})}else if(a.isStorageBuffer){const c=n.get(a);if(c.buffer===void 0){const l=a.attribute;c.buffer=n.get(l).buffer}o.push({binding:s,resource:{buffer:c.buffer}})}else if(a.isSampler){const c=n.get(a.texture);o.push({binding:s,resource:c.sampler})}else if(a.isSampledTexture){const c=n.get(a.texture);let l;a.isSampledCubeTexture?l=Ti.Cube:a.texture.isDataArrayTexture?l=Ti.TwoDArray:l=Ti.TwoD;let u;if(c.externalTexture!==void 0)u=i.importExternalTexture({source:c.externalTexture});else{const h=qR.All;u=c.texture.createView({aspect:h,dimension:l,mipLevelCount:a.store?1:c.mipLevelCount})}o.push({binding:s,resource:u})}s++}return i.createBindGroup({layout:t,entries:o})}}class xw{constructor(e){this.backend=e}createRenderPipeline(e){const{object:t,material:n,geometry:i,pipeline:s}=e,{vertexProgram:o,fragmentProgram:a}=s,c=this.backend,l=c.device,u=c.utils,h=c.get(s),d=c.get(e.getBindings()),f=c.attributeUtils.createShaderVertexBuffers(e);let g;n.transparent===!0&&n.blending!==ti&&(g=this._getBlending(n));let _={};n.stencilWrite===!0&&(_={compare:this._getStencilCompare(n),failOp:this._getStencilOperation(n.stencilFail),depthFailOp:this._getStencilOperation(n.stencilZFail),passOp:this._getStencilOperation(n.stencilZPass)});const m=this._getColorWriteMask(n),p=[];if(e.context.textures!==null){const Y=e.context.textures;for(let T=0;T<Y.length;T++){const b=u.getTextureFormatGPU(Y[T]);p.push({format:b,blend:g,writeMask:m})}}else{const Y=u.getCurrentColorFormat(e.context);p.push({format:Y,blend:g,writeMask:m})}const S=c.get(o).module,x=c.get(a).module,E=this._getPrimitiveState(t,i,n),L=this._getDepthCompare(n),A=u.getCurrentDepthStencilFormat(e.context),R=u.getSampleCount(e.context);h.pipeline=l.createRenderPipeline({vertex:Object.assign({},S,{buffers:f}),fragment:Object.assign({},x,{targets:p}),primitive:E,depthStencil:{format:A,depthWriteEnabled:n.depthWrite,depthCompare:L,stencilFront:_,stencilBack:{},stencilReadMask:n.stencilFuncMask,stencilWriteMask:n.stencilWriteMask},multisample:{count:R,alphaToCoverageEnabled:n.alphaToCoverage},layout:l.createPipelineLayout({bindGroupLayouts:[d.layout]})})}createComputePipeline(e,t){const n=this.backend,i=n.device,s=n.get(e.computeProgram).module,o=n.get(e),a=n.get(t);o.pipeline=i.createComputePipeline({compute:s,layout:i.createPipelineLayout({bindGroupLayouts:[a.layout]})})}_getBlending(e){let t,n;const i=e.blending;if(i===Dl){const s=e.blendSrcAlpha!==null?e.blendSrcAlpha:Oe.One,o=e.blendDstAlpha!==null?e.blendDstAlpha:Oe.Zero,a=e.blendEquationAlpha!==null?e.blendEquationAlpha:Oe.Add;t={srcFactor:this._getBlendFactor(e.blendSrc),dstFactor:this._getBlendFactor(e.blendDst),operation:this._getBlendOperation(e.blendEquation)},n={srcFactor:this._getBlendFactor(s),dstFactor:this._getBlendFactor(o),operation:this._getBlendOperation(a)}}else{const s=e.premultipliedAlpha,o=(a,c,l,u)=>{t={srcFactor:a,dstFactor:c,operation:ys.Add},n={srcFactor:l,dstFactor:u,operation:ys.Add}};if(s)switch(i){case gi:o(Oe.SrcAlpha,Oe.OneMinusSrcAlpha,Oe.One,Oe.OneMinusSrcAlpha);break;case yr:o(Oe.SrcAlpha,Oe.One,Oe.One,Oe.One);break;case Tr:o(Oe.Zero,Oe.OneMinusSrc,Oe.Zero,Oe.One);break;case Mr:o(Oe.Zero,Oe.Src,Oe.Zero,Oe.SrcAlpha);break}else switch(i){case gi:o(Oe.SrcAlpha,Oe.OneMinusSrcAlpha,Oe.One,Oe.OneMinusSrcAlpha);break;case yr:o(Oe.SrcAlpha,Oe.One,Oe.SrcAlpha,Oe.One);break;case Tr:o(Oe.Zero,Oe.OneMinusSrc,Oe.Zero,Oe.One);break;case Mr:o(Oe.Zero,Oe.Src,Oe.Zero,Oe.Src);break}}if(t!==void 0&&n!==void 0)return{color:t,alpha:n};console.error("THREE.WebGPURenderer: Invalid blending: ",i)}_getBlendFactor(e){let t;switch(e){case Ol:t=Oe.Zero;break;case Bl:t=Oe.One;break;case Vl:t=Oe.Src;break;case Gl:t=Oe.OneMinusSrc;break;case eo:t=Oe.SrcAlpha;break;case to:t=Oe.OneMinusSrcAlpha;break;case Hl:t=Oe.Dst;break;case Wl:t=Oe.OneMinusDstColor;break;case zl:t=Oe.DstAlpha;break;case kl:t=Oe.OneMinusDstAlpha;break;case Xl:t=Oe.SrcAlphaSaturated;break;case Fy:t=Oe.Constant;break;case Oy:t=Oe.OneMinusConstant;break;default:console.error("THREE.WebGPURenderer: Blend factor not supported.",e)}return t}_getStencilCompare(e){let t;const n=e.stencilFunc;switch(n){case jg:t=sn.Never;break;case _l:t=sn.Always;break;case Zg:t=sn.Less;break;case Jg:t=sn.LessEqual;break;case Qg:t=sn.Equal;break;case n_:t=sn.GreaterEqual;break;case e_:t=sn.Greater;break;case t_:t=sn.NotEqual;break;default:console.error("THREE.WebGPURenderer: Invalid stencil function.",n)}return t}_getStencilOperation(e){let t;switch(e){case Ts:t=es.Keep;break;case Hg:t=es.Zero;break;case Wg:t=es.Replace;break;case Kg:t=es.Invert;break;case Xg:t=es.IncrementClamp;break;case $g:t=es.DecrementClamp;break;case qg:t=es.IncrementWrap;break;case Yg:t=es.DecrementWrap;break;default:console.error("THREE.WebGPURenderer: Invalid stencil operation.",t)}return t}_getBlendOperation(e){let t;switch(e){case kn:t=ys.Add;break;case Il:t=ys.Subtract;break;case Fl:t=ys.ReverseSubtract;break;case ml:t=ys.Min;break;case gl:t=ys.Max;break;default:console.error("THREE.WebGPUPipelineUtils: Blend equation not supported.",e)}return t}_getPrimitiveState(e,t,n){const i={},s=this.backend.utils;switch(i.topology=s.getPrimitiveTopology(e,n),t.index!==null&&e.isLine===!0&&e.isLineSegments!==!0&&(i.stripIndexFormat=t.index.array instanceof Uint16Array?Ur.Uint16:Ur.Uint32),n.side){case Ai:i.frontFace=ll.CCW,i.cullMode=ul.Back;break;case $t:i.frontFace=ll.CCW,i.cullMode=ul.Front;break;case zn:i.frontFace=ll.CCW,i.cullMode=ul.None;break;default:console.error("THREE.WebGPUPipelineUtils: Unknown material.side value.",n.side);break}return i}_getColorWriteMask(e){return e.colorWrite===!0?Nd.All:Nd.None}_getDepthCompare(e){let t;if(e.depthTest===!1)t=sn.Always;else{const n=e.depthFunc;switch(n){case $l:t=sn.Never;break;case ql:t=sn.Always;break;case Yl:t=sn.Less;break;case Er:t=sn.LessEqual;break;case Kl:t=sn.Equal;break;case jl:t=sn.GreaterEqual;break;case Zl:t=sn.Greater;break;case Ql:t=sn.NotEqual;break;default:console.error("THREE.WebGPUPipelineUtils: Invalid depth function.",n)}}return t}}let Mg=null;navigator.gpu!==void 0&&(Mg=await navigator.gpu.requestAdapter());class vw extends yg{constructor(e={}){super(e),this.isWebGPUBackend=!0,this.parameters.antialias=e.antialias===!0,this.parameters.antialias===!0?this.parameters.sampleCount=e.sampleCount===void 0?4:e.sampleCount:this.parameters.sampleCount=1,this.parameters.requiredLimits=e.requiredLimits===void 0?{}:e.requiredLimits,this.adapter=null,this.device=null,this.context=null,this.colorBuffer=null,this.utils=new dw(this),this.attributeUtils=new gw(this),this.bindingUtils=new _w(this),this.pipelineUtils=new xw(this),this.textureUtils=new ew(this),this.occludedResolveCache=new Map}async init(e){await super.init(e);const t=this.parameters,n={powerPreference:t.powerPreference},i=await navigator.gpu.requestAdapter(n);if(i===null)throw new Error("WebGPUBackend: Unable to create WebGPU adapter.");const s=Object.values(Ul),o=[];for(const u of s)i.features.has(u)&&o.push(u);const a={requiredFeatures:o,requiredLimits:t.requiredLimits},c=await i.requestDevice(a),l=t.context!==void 0?t.context:e.domElement.getContext("webgpu");this.adapter=i,this.device=c,this.context=l,this.context.configure({device:this.device,format:O.BGRA8Unorm,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC,alphaMode:"premultiplied"}),this.updateSize()}get coordinateSystem(){return wr}async getArrayBufferAsync(e){return await this.attributeUtils.getArrayBufferAsync(e)}beginRender(e){const t=this.get(e),n=this.device,i=e.occlusionQueryCount;let s;i>0&&(t.currentOcclusionQuerySet&&t.currentOcclusionQuerySet.destroy(),t.currentOcclusionQueryBuffer&&t.currentOcclusionQueryBuffer.destroy(),t.currentOcclusionQuerySet=t.occlusionQuerySet,t.currentOcclusionQueryBuffer=t.occlusionQueryBuffer,t.currentOcclusionQueryObjects=t.occlusionQueryObjects,s=n.createQuerySet({type:"occlusion",count:i}),t.occlusionQuerySet=s,t.occlusionQueryIndex=0,t.occlusionQueryObjects=new Array(i),t.lastOcclusionObject=null);const o={colorAttachments:[{view:null}],depthStencilAttachment:{view:null},occlusionQuerySet:s},a=o.colorAttachments[0],c=o.depthStencilAttachment,l=this.parameters.antialias;if(e.textures!==null){const d=e.textures;o.colorAttachments=[];const f=o.colorAttachments;for(let _=0;_<d.length;_++){const m=this.get(d[_]),p=m.texture.createView({baseMipLevel:e.activeMipmapLevel,mipLevelCount:1,baseArrayLayer:e.activeCubeFace,dimension:Ti.TwoD});let S,x;m.msaaTexture!==void 0?(S=m.msaaTexture.createView(),x=p):(S=p,x=void 0),f.push({view:S,resolveTarget:x,loadOp:Bt.Load,storeOp:rn.Store})}const g=this.get(e.depthTexture);c.view=g.texture.createView(),e.stencil&&e.depthTexture.format===ii&&(e.stencil=!1)}else l===!0?(a.view=this.colorBuffer.createView(),a.resolveTarget=this.context.getCurrentTexture().createView()):(a.view=this.context.getCurrentTexture().createView(),a.resolveTarget=void 0),c.view=this.textureUtils.getDepthBuffer(e.depth,e.stencil).createView();if(e.textures!==null){const d=o.colorAttachments;for(let f=0;f<d.length;f++){const g=d[f];e.clearColor?(g.clearValue=e.clearColorValue,g.loadOp=Bt.Clear,g.storeOp=rn.Store):(g.loadOp=Bt.Load,g.storeOp=rn.Store)}}else e.clearColor?(a.clearValue=e.clearColorValue,a.loadOp=Bt.Clear,a.storeOp=rn.Store):(a.loadOp=Bt.Load,a.storeOp=rn.Store);e.depth&&(e.clearDepth?(c.depthClearValue=e.clearDepthValue,c.depthLoadOp=Bt.Clear,c.depthStoreOp=rn.Store):(c.depthLoadOp=Bt.Load,c.depthStoreOp=rn.Store)),e.stencil&&(e.clearStencil?(c.stencilClearValue=e.clearStencilValue,c.stencilLoadOp=Bt.Clear,c.stencilStoreOp=rn.Store):(c.stencilLoadOp=Bt.Load,c.stencilStoreOp=rn.Store));const u=n.createCommandEncoder({label:"renderContext_"+e.id}),h=u.beginRenderPass(o);if(t.descriptor=o,t.encoder=u,t.currentPass=h,t.currentSets={attributes:{}},e.viewport&&this.updateViewport(e),e.scissor){const{x:d,y:f,width:g,height:_}=e.scissorValue;h.setScissorRect(d,e.height-_-f,g,_)}}finishRender(e){const t=this.get(e),n=e.occlusionQueryCount;if(n>t.occlusionQueryIndex&&t.currentPass.endOcclusionQuery(),t.currentPass.end(),n>0){const i=n*8;let s=this.occludedResolveCache.get(i);s===void 0&&(s=this.device.createBuffer({size:i,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.occludedResolveCache.set(i,s));const o=this.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});t.encoder.resolveQuerySet(t.occlusionQuerySet,0,n,s,0),t.encoder.copyBufferToBuffer(s,0,o,0,i),t.occlusionQueryBuffer=o,this.resolveOccludedAsync(e)}if(this.device.queue.submit([t.encoder.finish()]),e.textures!==null){const i=e.textures;for(let s=0;s<i.length;s++){const o=i[s];o.generateMipmaps===!0&&this.textureUtils.generateMipmaps(o)}}}isOccluded(e,t){const n=this.get(e);return n.occluded&&n.occluded.has(t)}async resolveOccludedAsync(e){const t=this.get(e),{currentOcclusionQueryBuffer:n,currentOcclusionQueryObjects:i}=t;if(n&&i){const s=new WeakSet;t.currentOcclusionQueryObjects=null,t.currentOcclusionQueryBuffer=null,await n.mapAsync(GPUMapMode.READ);const o=n.getMappedRange(),a=new BigUint64Array(o);for(let c=0;c<i.length;c++)a[c]!==0n&&s.add(i[c]);n.destroy(),t.occluded=s}}updateViewport(e){const{currentPass:t}=this.get(e);let{x:n,y:i,width:s,height:o,minDepth:a,maxDepth:c}=e.viewportValue;t.setViewport(n,e.height-o-i,s,o,a,c)}clear(e,t,n,i=null){const s=this.device,o=this.renderer,a=[];let c,l,u,h;if(e){const g=this.getClearColor();l={r:g.r,g:g.g,b:g.b,a:g.a}}if(i===null){if(u=o.depth,h=o.stencil,t=t&&u,n=n&&h,e){const g=this.parameters.antialias,_={};g===!0?(_.view=this.colorBuffer.createView(),_.resolveTarget=this.context.getCurrentTexture().createView()):_.view=this.context.getCurrentTexture().createView(),_.clearValue=l,_.loadOp=Bt.Clear,_.storeOp=rn.Store,a.push(_)}(t||n)&&(c={view:this.textureUtils.getDepthBuffer(o.depth,o.stencil).createView()})}else{if(u=i.depth,h=i.stencil,t=t&&u,n=n&&h,e)for(const g of i.textures){const _=this.get(g),m=_.texture.createView();let p,S;_.msaaTexture!==void 0?(p=_.msaaTexture.createView(),S=m):(p=m,S=void 0),a.push({view:p,resolveTarget:S,clearValue:l,loadOp:Bt.Clear,storeOp:rn.Store})}(t||n)&&(c={view:this.get(i.depthTexture).texture.createView()})}c!==void 0&&(t?(c.depthLoadOp=Bt.Clear,c.depthClearValue=o.getClearDepth(),c.depthStoreOp=rn.Store):(c.depthLoadOp=Bt.Load,c.depthStoreOp=rn.Store),n?(c.stencilLoadOp=Bt.Clear,c.stencilClearValue=o.getClearStencil(),c.stencilStoreOp=rn.Store):(c.stencilLoadOp=Bt.Load,c.stencilStoreOp=rn.Store));const d=s.createCommandEncoder({});d.beginRenderPass({colorAttachments:a,depthStencilAttachment:c}).end(),s.queue.submit([d.finish()])}beginCompute(e){const t=this.get(e);t.cmdEncoderGPU=this.device.createCommandEncoder({}),t.passEncoderGPU=t.cmdEncoderGPU.beginComputePass()}compute(e,t,n,i){const{passEncoderGPU:s}=this.get(e),o=this.get(i).pipeline;s.setPipeline(o);const a=this.get(n).group;s.setBindGroup(0,a),s.dispatchWorkgroups(t.dispatchCount)}finishCompute(e){const t=this.get(e);t.passEncoderGPU.end(),this.device.queue.submit([t.cmdEncoderGPU.finish()])}draw(e,t){const{object:n,geometry:i,context:s,pipeline:o}=e,a=this.get(e.getBindings()),c=this.get(s),l=this.get(o).pipeline,u=c.currentSets,h=c.currentPass;u.pipeline!==l&&(h.setPipeline(l),u.pipeline=l);const d=a.group;h.setBindGroup(0,d);const f=e.getIndex(),g=f!==null;if(g===!0&&u.index!==f){const x=this.get(f).buffer,E=f.array instanceof Uint16Array?Ur.Uint16:Ur.Uint32;h.setIndexBuffer(x,E),u.index=f}const _=e.getVertexBuffers();for(let x=0,E=_.length;x<E;x++){const L=_[x];if(u.attributes[x]!==L){const A=this.get(L).buffer;h.setVertexBuffer(x,A),u.attributes[x]=L}}if(c.occlusionQuerySet!==void 0){const x=c.lastOcclusionObject;x!==n&&(x!==null&&x.occlusionTest===!0&&(h.endOcclusionQuery(),c.occlusionQueryIndex++),n.occlusionTest===!0&&(h.beginOcclusionQuery(c.occlusionQueryIndex),c.occlusionQueryObjects[c.occlusionQueryIndex]=n),c.lastOcclusionObject=n)}const m=i.drawRange,p=m.start,S=this.getInstanceCount(e);if(S!==0)if(g===!0){const x=m.count!==1/0?m.count:f.count;h.drawIndexed(x,S,p,0,0),t.update(n,x,S)}else{const x=i.attributes.position,E=m.count!==1/0?m.count:x.count;h.draw(E,S,p,0),t.update(n,E,S)}}needsRenderUpdate(e){const t=this.get(e),{object:n,material:i}=e,s=this.utils,o=s.getSampleCount(e.context),a=s.getCurrentColorSpace(e.context),c=s.getCurrentColorFormat(e.context),l=s.getCurrentDepthStencilFormat(e.context),u=s.getPrimitiveTopology(n,i);let h=!1;return(t.material!==i||t.materialVersion!==i.version||t.transparent!==i.transparent||t.blending!==i.blending||t.premultipliedAlpha!==i.premultipliedAlpha||t.blendSrc!==i.blendSrc||t.blendDst!==i.blendDst||t.blendEquation!==i.blendEquation||t.blendSrcAlpha!==i.blendSrcAlpha||t.blendDstAlpha!==i.blendDstAlpha||t.blendEquationAlpha!==i.blendEquationAlpha||t.colorWrite!==i.colorWrite||t.depthWrite!==i.depthWrite||t.depthTest!==i.depthTest||t.depthFunc!==i.depthFunc||t.stencilWrite!==i.stencilWrite||t.stencilFunc!==i.stencilFunc||t.stencilFail!==i.stencilFail||t.stencilZFail!==i.stencilZFail||t.stencilZPass!==i.stencilZPass||t.stencilFuncMask!==i.stencilFuncMask||t.stencilWriteMask!==i.stencilWriteMask||t.side!==i.side||t.alphaToCoverage!==i.alphaToCoverage||t.sampleCount!==o||t.colorSpace!==a||t.colorFormat!==c||t.depthStencilFormat!==l||t.primitiveTopology!==u)&&(t.material=i,t.materialVersion=i.version,t.transparent=i.transparent,t.blending=i.blending,t.premultipliedAlpha=i.premultipliedAlpha,t.blendSrc=i.blendSrc,t.blendDst=i.blendDst,t.blendEquation=i.blendEquation,t.blendSrcAlpha=i.blendSrcAlpha,t.blendDstAlpha=i.blendDstAlpha,t.blendEquationAlpha=i.blendEquationAlpha,t.colorWrite=i.colorWrite,t.depthWrite=i.depthWrite,t.depthTest=i.depthTest,t.depthFunc=i.depthFunc,t.stencilWrite=i.stencilWrite,t.stencilFunc=i.stencilFunc,t.stencilFail=i.stencilFail,t.stencilZFail=i.stencilZFail,t.stencilZPass=i.stencilZPass,t.stencilFuncMask=i.stencilFuncMask,t.stencilWriteMask=i.stencilWriteMask,t.side=i.side,t.alphaToCoverage=i.alphaToCoverage,t.sampleCount=o,t.colorSpace=a,t.colorFormat=c,t.depthStencilFormat=l,t.primitiveTopology=u,h=!0),h}getRenderCacheKey(e){const{object:t,material:n}=e,i=this.utils,s=e.context;return[n.transparent,n.blending,n.premultipliedAlpha,n.blendSrc,n.blendDst,n.blendEquation,n.blendSrcAlpha,n.blendDstAlpha,n.blendEquationAlpha,n.colorWrite,n.depthWrite,n.depthTest,n.depthFunc,n.stencilWrite,n.stencilFunc,n.stencilFail,n.stencilZFail,n.stencilZPass,n.stencilFuncMask,n.stencilWriteMask,n.side,i.getSampleCount(s),i.getCurrentColorSpace(s),i.getCurrentColorFormat(s),i.getCurrentDepthStencilFormat(s),i.getPrimitiveTopology(t,n)].join()}createSampler(e){this.textureUtils.createSampler(e)}destroySampler(e){this.textureUtils.destroySampler(e)}createDefaultTexture(e){this.textureUtils.createDefaultTexture(e)}createTexture(e,t){this.textureUtils.createTexture(e,t)}updateTexture(e,t){this.textureUtils.updateTexture(e,t)}generateMipmaps(e){this.textureUtils.generateMipmaps(e)}destroyTexture(e){this.textureUtils.destroyTexture(e)}copyTextureToBuffer(e,t,n,i,s){return this.textureUtils.copyTextureToBuffer(e,t,n,i,s)}createNodeBuilder(e,t,n=null){return new hw(e,t,n)}createProgram(e){const t=this.get(e);t.module={module:this.device.createShaderModule({code:e.code,label:e.stage}),entryPoint:"main"}}destroyProgram(e){this.delete(e)}createRenderPipeline(e){this.pipelineUtils.createRenderPipeline(e)}createComputePipeline(e,t){this.pipelineUtils.createComputePipeline(e,t)}createBindings(e){this.bindingUtils.createBindings(e)}updateBindings(e){this.bindingUtils.createBindings(e)}updateBinding(e){this.bindingUtils.updateBinding(e)}createIndexAttribute(e){this.attributeUtils.createAttribute(e,GPUBufferUsage.INDEX|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST)}createAttribute(e){this.attributeUtils.createAttribute(e,GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST)}createStorageAttribute(e){this.attributeUtils.createAttribute(e,GPUBufferUsage.STORAGE|GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST)}updateAttribute(e){this.attributeUtils.updateAttribute(e)}destroyAttribute(e){this.attributeUtils.destroyAttribute(e)}updateSize(){this.colorBuffer=this.textureUtils.getColorBuffer()}getMaxAnisotropy(){return 16}hasFeature(e){const t=this.adapter||Mg;if(Object.values(Ul).includes(e)===!1)throw new Error("THREE.WebGPURenderer: Unknown WebGPU GPU feature: "+e);return t.features.has(e)}copyFramebufferToTexture(e,t){const n=this.get(t),{encoder:i,descriptor:s}=n;let o=null;e.isFramebufferTexture?o=this.context.getCurrentTexture():e.isDepthTexture&&(o=this.textureUtils.getDepthBuffer(t.depth,t.stencil));const a=this.get(e).texture;n.currentPass.end(),i.copyTextureToTexture({texture:o,origin:{x:0,y:0,z:0}},{texture:a},[e.image.width,e.image.height]),e.generateMipmaps&&this.textureUtils.generateMipmaps(e),s.colorAttachments[0].loadOp=Bt.Load,t.depth&&(s.depthStencilAttachment.depthLoadOp=Bt.Load),t.stencil&&(s.depthStencilAttachment.stencilLoadOp=Bt.Load),n.currentPass=i.beginRenderPass(s),n.currentSets={attributes:{}}}}window.GPUShaderStage===void 0&&(window.GPUShaderStage={VERTEX:1,FRAGMENT:2,COMPUTE:4});let Eg=!1;navigator.gpu!==void 0&&await navigator.gpu.requestAdapter()!==null&&(Eg=!0);class Sw{static isAvailable(){return Eg}static getErrorMessage(){const e='Your browser does not support <a href="https://gpuweb.github.io/gpuweb/" style="color:blue">WebGPU</a> yet',t=document.createElement("div");return t.id="webgpumessage",t.style.fontFamily="monospace",t.style.fontSize="13px",t.style.fontWeight="normal",t.style.textAlign="center",t.style.background="#fff",t.style.color="#000",t.style.padding="1.5em",t.style.maxWidth="400px",t.style.margin="5em auto 0",t.innerHTML=e,t}}class yw extends wR{constructor(e={}){let t;Sw.isAvailable()?t=vw:(t=XR,console.warn("THREE.WebGPURenderer: WebGPU is not available, running under WebGL2 backend."));const n=new t(e);super(n,e),this.isWebGPURenderer=!0}}class bg{mesh;position;velocity;radius;mass;constructor(e,t,n,i,s){this.radius=t,this.mass=n,this.velocity=new U(0,0,0);const o=new To({color:i});this.mesh=new an(s,o),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.position=this.mesh.position,e.add(this.mesh)}}class Ud extends bg{rotation=0;speed=0;acceleration=40;maxSpeed=30;turnSpeed=4;friction=.95;controls;constructor(e,t,n,i){const s=new Xi(2,1,4);super(e,1.5,10,t,s),this.position.copy(n),this.controls=i}update(e,t){if(t.isDown(this.controls.up)&&(this.speed+=this.acceleration*e),t.isDown(this.controls.down)&&(this.speed-=this.acceleration*e),Math.abs(this.speed)>.1){const i=Math.sign(this.speed);t.isDown(this.controls.left)&&(this.rotation+=this.turnSpeed*e*i),t.isDown(this.controls.right)&&(this.rotation-=this.turnSpeed*e*i)}this.speed*=this.friction;const n=t.isDown(this.controls.nitro)?this.maxSpeed*1.5:this.maxSpeed;this.speed=Math.min(Math.max(this.speed,-n),n),this.velocity.x=Math.sin(this.rotation)*this.speed,this.velocity.z=Math.cos(this.rotation)*this.speed,this.position.addScaledVector(this.velocity,e),this.mesh.position.copy(this.position),this.mesh.rotation.y=this.rotation}}class Tw extends bg{constructor(e){const t=new nc(1.5,16,16);super(e,1.5,1,16777215,t),this.position.y=1.5}update(e){this.velocity.multiplyScalar(.98),this.position.addScaledVector(this.velocity,e),this.mesh.rotation.x+=this.velocity.z*e,this.mesh.rotation.z-=this.velocity.x*e,this.mesh.position.copy(this.position)}}class Mw{keys={};constructor(){window.addEventListener("keydown",e=>{this.keys[e.key]=!0,this.keys[e.code]=!0}),window.addEventListener("keyup",e=>{this.keys[e.key]=!1,this.keys[e.code]=!1})}isDown(e){return!!this.keys[e]}}function dl(r,e){const t=r.position.distanceToSquared(e.position),n=r.radius+e.radius;return t<n*n}function fl(r,e){const t=new U().subVectors(e.position,r.position).normalize(),i=new U().subVectors(e.velocity,r.velocity).dot(t);if(i>0)return;let s=-1.8*i;s/=1/r.mass+1/e.mass;const o=t.multiplyScalar(s);r.velocity.sub(o.clone().multiplyScalar(1/r.mass)),e.velocity.add(o.clone().multiplyScalar(1/e.mass));const a=r.position.distanceTo(e.position),c=r.radius+e.radius-a;if(c>0){const l=t.normalize().multiplyScalar(c/2);r.position.sub(l),e.position.add(l)}}class Ew{renderer;scene;camera;input;p1;p2;ball;scoreP1=0;scoreP2=0;scoreElP1;scoreElP2;lastTime=0;constructor(e){this.input=new Mw;try{this.renderer=new yw({antialias:!0})}catch{console.warn("WebGPU not supported, falling back to WebGL"),this.renderer=new mf({antialias:!0})}this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,e.appendChild(this.renderer.domElement),this.scoreElP1=document.getElementById("p1-score"),this.scoreElP2=document.getElementById("p2-score"),this.scene=new Eu,this.scene.background=new Pe(2105376);const t=window.innerWidth/window.innerHeight,n=25;this.camera=new ec(-n*t,n*t,n,-n,1,1e3),this.camera.position.set(20,20,20),this.camera.lookAt(this.scene.position);const i=new Mf(16777215,.6);this.scene.add(i);const s=new Tf(16777215,1);s.position.set(10,20,10),s.castShadow=!0,s.shadow.camera.top=n,s.shadow.camera.bottom=-n,s.shadow.camera.left=-n*t,s.shadow.camera.right=n*t,s.shadow.bias=-5e-4,this.scene.add(s);const o=new Ja(50,34),a=new To({color:2263074}),c=new an(o,a);c.rotation.x=-Math.PI/2,c.receiveShadow=!0,this.scene.add(c);const l=new To({color:8947848}),u=new Xi(52,1,1),h=new Xi(1,1,36),d=new an(u,l);d.position.set(0,.5,-17.5),this.scene.add(d);const f=new an(u,l);f.position.set(0,.5,17.5),this.scene.add(f);const g=new an(h,l);g.position.set(-25.5,.5,0),this.scene.add(g);const _=new an(h,l);_.position.set(25.5,.5,0),this.scene.add(_),this.p1=new Ud(this.scene,3368703,new U(-15,.5,0),{up:"w",down:"s",left:"a",right:"d",nitro:"Shift"}),this.p2=new Ud(this.scene,16737843,new U(15,.5,0),{up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",nitro:"Enter"}),this.p2.rotation=Math.PI,this.p2.mesh.rotation.y=Math.PI,this.ball=new Tw(this.scene),window.addEventListener("resize",this.onWindowResize.bind(this)),this.renderer.setAnimationLoop(this.animate.bind(this))}onWindowResize(){const t=window.innerWidth/window.innerHeight;this.camera.left=-25*t,this.camera.right=25*t,this.camera.top=25,this.camera.bottom=-25,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(e){const t=Math.min((e-this.lastTime)/1e3,.1);this.lastTime=e,this.update(t),this.renderer.render(this.scene,this.camera)}update(e){this.p1.update(e,this.input),this.p2.update(e,this.input),this.ball.update(e),dl(this.p1,this.ball)&&fl(this.p1,this.ball),dl(this.p2,this.ball)&&fl(this.p2,this.ball),dl(this.p1,this.p2)&&fl(this.p1,this.p2);const t=25,n=17,i=this.ball.radius;this.ball.position.x>t-i?Math.abs(this.ball.position.z)<5?this.handleGoal(1):(this.ball.position.x=t-i,this.ball.velocity.x*=-.8):this.ball.position.x<-t+i&&(Math.abs(this.ball.position.z)<5?this.handleGoal(2):(this.ball.position.x=-t+i,this.ball.velocity.x*=-.8)),this.ball.position.z>n-i?(this.ball.position.z=n-i,this.ball.velocity.z*=-.8):this.ball.position.z<-n+i&&(this.ball.position.z=-n+i,this.ball.velocity.z*=-.8),this.constrainEntity(this.p1,t,n),this.constrainEntity(this.p2,t,n)}constrainEntity(e,t,n){e.position.x>t&&(e.position.x=t),e.position.x<-t&&(e.position.x=-t),e.position.z>n&&(e.position.z=n),e.position.z<-n&&(e.position.z=-n)}handleGoal(e){e===1?(this.scoreP1++,this.scoreElP1.innerText=`P1: ${this.scoreP1}`,this.resetPositions()):(this.scoreP2++,this.scoreElP2.innerText=`P2: ${this.scoreP2}`,this.resetPositions())}resetPositions(){this.ball.position.set(0,1.5,0),this.ball.velocity.set(0,0,0),this.p1.position.set(-15,.5,0),this.p1.rotation=0,this.p1.speed=0,this.p1.velocity.set(0,0,0),this.p2.position.set(15,.5,0),this.p2.rotation=Math.PI,this.p2.speed=0,this.p2.velocity.set(0,0,0)}}const Ag=document.querySelector("#app");new Ew(Ag);const Pi=document.createElement("div");Pi.style.position="absolute";Pi.style.top="10px";Pi.style.left="50%";Pi.style.transform="translateX(-50%)";Pi.style.color="white";Pi.style.fontSize="24px";Pi.style.fontFamily="Arial, sans-serif";Pi.style.pointerEvents="none";Pi.innerHTML=`
    <div style="display: flex; gap: 40px; text-shadow: 2px 2px 4px #000;">
        <div id="p1-score" style="color: #ff4444;">P1: 0</div>
        <div style="font-size: 14px; opacity: 0.7; align-self: center;">VS</div>
        <div id="p2-score" style="color: #4444ff;">P2: 0</div>
    </div>
    <div style="margin-top: 5px; font-size: 12px; text-align: center; opacity: 0.8;">
        P1: WASD + Shift | P2: Arrows + Enter
    </div>
`;Ag.appendChild(Pi);
