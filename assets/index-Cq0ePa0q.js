var wl=Object.defineProperty;var cl=(Lg,Hg,AC)=>Hg in Lg?wl(Lg,Hg,{enumerable:!0,configurable:!0,writable:!0,value:AC}):Lg[Hg]=AC;var DA=(Lg,Hg,AC)=>(cl(Lg,typeof Hg!="symbol"?Hg+"":Hg,AC),AC);(async()=>{(function(){const Q=document.createElement("link").relList;if(Q&&Q.supports&&Q.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))I(g);new MutationObserver(g=>{for(const C of g)if(C.type==="childList")for(const B of C.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&I(B)}).observe(document,{childList:!0,subtree:!0});function A(g){const C={};return g.integrity&&(C.integrity=g.integrity),g.referrerPolicy&&(C.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?C.credentials="include":g.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function I(g){if(g.ep)return;g.ep=!0;const C=A(g);fetch(g.href,C)}})();const Lg="164",Hg=0,AC=1,Ms=2,Lo=1,Us=2,ug=3,mg=0,Ag=1,sg=2,IC=0,xC=1,NE=2,Ho=3,uo=4,Ks=5,cC=100,Ns=101,Js=102,Fs=103,Rs=104,ps=200,qs=201,ds=202,Ys=203,JE=204,FE=205,Ls=206,Hs=207,us=208,ms=209,fs=210,Ts=211,xs=212,bs=213,Os=214,_s=0,vs=1,Zs=2,cQ=3,Ws=4,Ps=5,js=6,Vs=7,RE=0,Xs=1,zs=2,gC=0,$s=1,AD=2,ID=3,gD=4,CD=5,BD=6,QD=7,mo="attached",ED="detached",fo=300,bC=301,OC=302,GQ=303,pE=304,lQ=306,GC=1e3,kg=1001,kQ=1002,HI=1003,To=1004,FB=1005,qI=1006,yQ=1007,yg=1008,Mg=1009,iD=1010,oD=1011,xo=1012,bo=1013,_C=1014,gg=1015,CC=1016,Oo=1017,_o=1018,RB=1020,eD=35902,tD=1021,aD=1022,Dg=1023,sD=1024,DD=1025,vC=1026,pB=1027,vo=1028,Zo=1029,hD=1030,Wo=1031,Po=1033,qE=33776,dE=33777,YE=33778,LE=33779,jo=35840,Vo=35841,Xo=35842,zo=35843,$o=36196,Ae=37492,Ie=37496,ge=37808,Ce=37809,Be=37810,Qe=37811,Ee=37812,ie=37813,oe=37814,ee=37815,te=37816,ae=37817,se=37818,De=37819,he=37820,re=37821,HE=36492,Se=36494,ne=36495,rD=36283,we=36284,ce=36285,Ge=36286,SD=2200,nD=2201,wD=2202,qB=2300,ZC=2301,uE=2302,WC=2400,PC=2401,MQ=2402,mE=2500,le=2501,cD=0,ke=1,fE=2,GD=3200,lD=3201,TE=0,kD=1,BC="",uI="srgb",UI="srgb-linear",xE="display-p3",UQ="display-p3-linear",KQ="linear",eI="srgb",NQ="rec709",JQ="p3",jC=7680,ye=519,yD=512,MD=513,UD=514,Me=515,KD=516,ND=517,JD=518,FD=519,bE=35044,Ue="300 es",fg=2e3,FQ=2001;class lC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const g=this._listeners[A];if(g!==void 0){const C=g.indexOf(I);C!==-1&&g.splice(C,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const I=this._listeners[A.type];if(I!==void 0){A.target=this;const g=I.slice(0);for(let C=0,B=g.length;C<B;C++)g[C].call(this,A);A.target=null}}}const xI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ke=1234567;const dB=Math.PI/180,VC=180/Math.PI;function hg(){const Q=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(xI[Q&255]+xI[Q>>8&255]+xI[Q>>16&255]+xI[Q>>24&255]+"-"+xI[A&255]+xI[A>>8&255]+"-"+xI[A>>16&15|64]+xI[A>>24&255]+"-"+xI[I&63|128]+xI[I>>8&255]+"-"+xI[I>>16&255]+xI[I>>24&255]+xI[g&255]+xI[g>>8&255]+xI[g>>16&255]+xI[g>>24&255]).toLowerCase()}function mI(Q,A,I){return Math.max(A,Math.min(I,Q))}function OE(Q,A){return(Q%A+A)%A}function RD(Q,A,I,g,C){return g+(Q-A)*(C-g)/(I-A)}function pD(Q,A,I){return Q!==A?(I-Q)/(A-Q):0}function YB(Q,A,I){return(1-I)*Q+I*A}function qD(Q,A,I,g){return YB(Q,A,1-Math.exp(-I*g))}function dD(Q,A=1){return A-Math.abs(OE(Q,A*2)-A)}function YD(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*(3-2*Q))}function LD(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*Q*(Q*(Q*6-15)+10))}function HD(Q,A){return Q+Math.floor(Math.random()*(A-Q+1))}function uD(Q,A){return Q+Math.random()*(A-Q)}function mD(Q){return Q*(.5-Math.random())}function fD(Q){Q!==void 0&&(Ke=Q);let A=Ke+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function TD(Q){return Q*dB}function xD(Q){return Q*VC}function bD(Q){return(Q&Q-1)===0&&Q!==0}function OD(Q){return Math.pow(2,Math.ceil(Math.log(Q)/Math.LN2))}function _D(Q){return Math.pow(2,Math.floor(Math.log(Q)/Math.LN2))}function vD(Q,A,I,g,C){const B=Math.cos,E=Math.sin,i=B(I/2),o=E(I/2),e=B((A+g)/2),t=E((A+g)/2),a=B((A-g)/2),s=E((A-g)/2),D=B((g-A)/2),n=E((g-A)/2);switch(C){case"XYX":Q.set(i*t,o*a,o*s,i*e);break;case"YZY":Q.set(o*s,i*t,o*a,i*e);break;case"ZXZ":Q.set(o*a,o*s,i*t,i*e);break;case"XZX":Q.set(i*t,o*n,o*D,i*e);break;case"YXY":Q.set(o*D,i*t,o*n,i*e);break;case"ZYZ":Q.set(o*n,o*D,i*t,i*e);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function rg(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint32Array:return Q/4294967295;case Uint16Array:return Q/65535;case Uint8Array:return Q/255;case Int32Array:return Math.max(Q/2147483647,-1);case Int16Array:return Math.max(Q/32767,-1);case Int8Array:return Math.max(Q/127,-1);default:throw new Error("Invalid component type.")}}function II(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint32Array:return Math.round(Q*4294967295);case Uint16Array:return Math.round(Q*65535);case Uint8Array:return Math.round(Q*255);case Int32Array:return Math.round(Q*2147483647);case Int16Array:return Math.round(Q*32767);case Int8Array:return Math.round(Q*127);default:throw new Error("Invalid component type.")}}const ZD={DEG2RAD:dB,RAD2DEG:VC,generateUUID:hg,clamp:mI,euclideanModulo:OE,mapLinear:RD,inverseLerp:pD,lerp:YB,damp:qD,pingpong:dD,smoothstep:YD,smootherstep:LD,randInt:HD,randFloat:uD,randFloatSpread:mD,seededRandom:fD,degToRad:TD,radToDeg:xD,isPowerOfTwo:bD,ceilPowerOfTwo:OD,floorPowerOfTwo:_D,setQuaternionFromProperEuler:vD,normalize:II,denormalize:rg};class JA{constructor(A=0,I=0){JA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(mI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),B=this.x-A.x,E=this.y-A.y;return this.x=B*g-E*C+A.x,this.y=B*C+E*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class YA{constructor(A,I,g,C,B,E,i,o,e){YA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,C,B,E,i,o,e)}set(A,I,g,C,B,E,i,o,e){const t=this.elements;return t[0]=A,t[1]=C,t[2]=i,t[3]=I,t[4]=B,t[5]=o,t[6]=g,t[7]=E,t[8]=e,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,E=g[0],i=g[3],o=g[6],e=g[1],t=g[4],a=g[7],s=g[2],D=g[5],n=g[8],w=C[0],S=C[3],h=C[6],l=C[1],G=C[4],M=C[7],p=C[2],N=C[5],K=C[8];return B[0]=E*w+i*l+o*p,B[3]=E*S+i*G+o*N,B[6]=E*h+i*M+o*K,B[1]=e*w+t*l+a*p,B[4]=e*S+t*G+a*N,B[7]=e*h+t*M+a*K,B[2]=s*w+D*l+n*p,B[5]=s*S+D*G+n*N,B[8]=s*h+D*M+n*K,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8];return I*E*t-I*i*e-g*B*t+g*i*o+C*B*e-C*E*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=t*E-i*e,s=i*o-t*B,D=e*B-E*o,n=I*a+g*s+C*D;if(n===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/n;return A[0]=a*w,A[1]=(C*e-t*g)*w,A[2]=(i*g-C*E)*w,A[3]=s*w,A[4]=(t*I-C*o)*w,A[5]=(C*B-i*I)*w,A[6]=D*w,A[7]=(g*o-e*I)*w,A[8]=(E*I-g*B)*w,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,B,E,i){const o=Math.cos(B),e=Math.sin(B);return this.set(g*o,g*e,-g*(o*E+e*i)+E+A,-C*e,C*o,-C*(-e*E+o*i)+i+I,0,0,1),this}scale(A,I){return this.premultiply(_E.makeScale(A,I)),this}rotate(A){return this.premultiply(_E.makeRotation(-A)),this}translate(A,I){return this.premultiply(_E.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const _E=new YA;function Ne(Q){for(let A=Q.length-1;A>=0;--A)if(Q[A]>=65535)return!0;return!1}function LB(Q){return document.createElementNS("http://www.w3.org/1999/xhtml",Q)}function WD(){const Q=LB("canvas");return Q.style.display="block",Q}const Je={};function Fe(Q){Q in Je||(Je[Q]=!0,console.warn(Q))}const Re=new YA().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pe=new YA().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),RQ={[UI]:{transfer:KQ,primaries:NQ,toReference:Q=>Q,fromReference:Q=>Q},[uI]:{transfer:eI,primaries:NQ,toReference:Q=>Q.convertSRGBToLinear(),fromReference:Q=>Q.convertLinearToSRGB()},[UQ]:{transfer:KQ,primaries:JQ,toReference:Q=>Q.applyMatrix3(pe),fromReference:Q=>Q.applyMatrix3(Re)},[xE]:{transfer:eI,primaries:JQ,toReference:Q=>Q.convertSRGBToLinear().applyMatrix3(pe),fromReference:Q=>Q.applyMatrix3(Re).convertLinearToSRGB()}},PD=new Set([UI,UQ]),zA={enabled:!0,_workingColorSpace:UI,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(Q){if(!PD.has(Q))throw new Error(`Unsupported working color space, "${Q}".`);this._workingColorSpace=Q},convert:function(Q,A,I){if(this.enabled===!1||A===I||!A||!I)return Q;const g=RQ[A].toReference,C=RQ[I].fromReference;return C(g(Q))},fromWorkingColorSpace:function(Q,A){return this.convert(Q,this._workingColorSpace,A)},toWorkingColorSpace:function(Q,A){return this.convert(Q,A,this._workingColorSpace)},getPrimaries:function(Q){return RQ[Q].primaries},getTransfer:function(Q){return Q===BC?KQ:RQ[Q].transfer}};function XC(Q){return Q<.04045?Q*.0773993808:Math.pow(Q*.9478672986+.0521327014,2.4)}function vE(Q){return Q<.0031308?Q*12.92:1.055*Math.pow(Q,.41666)-.055}let zC;class jD{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{zC===void 0&&(zC=LB("canvas")),zC.width=A.width,zC.height=A.height;const g=zC.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=zC}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=LB("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),B=C.data;for(let E=0;E<B.length;E++)B[E]=XC(B[E]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(XC(I[g]/255)*255):I[g]=XC(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let VD=0;class qe{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VD++}),this.uuid=hg(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let B;if(Array.isArray(C)){B=[];for(let E=0,i=C.length;E<i;E++)C[E].isDataTexture?B.push(ZE(C[E].image)):B.push(ZE(C[E]))}else B=ZE(C);g.url=B}return I||(A.images[this.uuid]=g),g}}function ZE(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap?jD.getDataURL(Q):Q.data?{data:Array.from(Q.data),width:Q.width,height:Q.height,type:Q.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let XD=0;class KI extends lC{constructor(A=KI.DEFAULT_IMAGE,I=KI.DEFAULT_MAPPING,g=kg,C=kg,B=qI,E=yg,i=Dg,o=Mg,e=KI.DEFAULT_ANISOTROPY,t=BC){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XD++}),this.uuid=hg(),this.name="",this.source=new qe(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=B,this.minFilter=E,this.anisotropy=e,this.format=i,this.internalFormat=null,this.type=o,this.offset=new JA(0,0),this.repeat=new JA(1,1),this.center=new JA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new YA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=t,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==fo)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case GC:A.x=A.x-Math.floor(A.x);break;case kg:A.x=A.x<0?0:1;break;case kQ:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case GC:A.y=A.y-Math.floor(A.y);break;case kg:A.y=A.y<0?0:1;break;case kQ:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(A){A===!0&&this.pmremVersion++}}KI.DEFAULT_IMAGE=null,KI.DEFAULT_MAPPING=fo,KI.DEFAULT_ANISOTROPY=1;class CI{constructor(A=0,I=0,g=0,C=1){CI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=this.w,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*C+E[12]*B,this.y=E[1]*I+E[5]*g+E[9]*C+E[13]*B,this.z=E[2]*I+E[6]*g+E[10]*C+E[14]*B,this.w=E[3]*I+E[7]*g+E[11]*C+E[15]*B,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,B;const E=A.elements,i=E[0],o=E[4],e=E[8],t=E[1],a=E[5],s=E[9],D=E[2],n=E[6],w=E[10];if(Math.abs(o-t)<.01&&Math.abs(e-D)<.01&&Math.abs(s-n)<.01){if(Math.abs(o+t)<.1&&Math.abs(e+D)<.1&&Math.abs(s+n)<.1&&Math.abs(i+a+w-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const h=(i+1)/2,l=(a+1)/2,G=(w+1)/2,M=(o+t)/4,p=(e+D)/4,N=(s+n)/4;return h>l&&h>G?h<.01?(g=0,C=.707106781,B=.707106781):(g=Math.sqrt(h),C=M/g,B=p/g):l>G?l<.01?(g=.707106781,C=0,B=.707106781):(C=Math.sqrt(l),g=M/C,B=N/C):G<.01?(g=.707106781,C=.707106781,B=0):(B=Math.sqrt(G),g=p/B,C=N/B),this.set(g,C,B,I),this}let S=Math.sqrt((n-s)*(n-s)+(e-D)*(e-D)+(t-o)*(t-o));return Math.abs(S)<.001&&(S=1),this.x=(n-s)/S,this.y=(e-D)/S,this.z=(t-o)/S,this.w=Math.acos((i+a+w-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zD extends lC{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new CI(0,0,A,I),this.scissorTest=!1,this.viewport=new CI(0,0,A,I);const C={width:A,height:I,depth:1};g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qI,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},g);const B=new KI(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace);B.flipY=!1,B.generateMipmaps=g.generateMipmaps,B.internalFormat=g.internalFormat,this.textures=[];const E=g.count;for(let i=0;i<E;i++)this.textures[i]=B.clone(),this.textures[i].isRenderTargetTexture=!0;this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.resolveDepthBuffer=g.resolveDepthBuffer,this.resolveStencilBuffer=g.resolveStencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}get texture(){return this.textures[0]}set texture(A){this.textures[0]=A}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let C=0,B=this.textures.length;C<B;C++)this.textures[C].image.width=A,this.textures[C].image.height=I,this.textures[C].image.depth=g;this.dispose()}this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.textures.length=0;for(let g=0,C=A.textures.length;g<C;g++)this.textures[g]=A.textures[g].clone(),this.textures[g].isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new qe(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kC extends zD{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class de extends KI{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=HI,this.minFilter=HI,this.wrapR=kg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $D extends KI{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=HI,this.minFilter=HI,this.wrapR=kg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dI{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,B,E,i){let o=g[C+0],e=g[C+1],t=g[C+2],a=g[C+3];const s=B[E+0],D=B[E+1],n=B[E+2],w=B[E+3];if(i===0){A[I+0]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a;return}if(i===1){A[I+0]=s,A[I+1]=D,A[I+2]=n,A[I+3]=w;return}if(a!==w||o!==s||e!==D||t!==n){let S=1-i;const h=o*s+e*D+t*n+a*w,l=h>=0?1:-1,G=1-h*h;if(G>Number.EPSILON){const p=Math.sqrt(G),N=Math.atan2(p,h*l);S=Math.sin(S*N)/p,i=Math.sin(i*N)/p}const M=i*l;if(o=o*S+s*M,e=e*S+D*M,t=t*S+n*M,a=a*S+w*M,S===1-i){const p=1/Math.sqrt(o*o+e*e+t*t+a*a);o*=p,e*=p,t*=p,a*=p}}A[I]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,B,E){const i=g[C],o=g[C+1],e=g[C+2],t=g[C+3],a=B[E],s=B[E+1],D=B[E+2],n=B[E+3];return A[I]=i*n+t*a+o*D-e*s,A[I+1]=o*n+t*s+e*a-i*D,A[I+2]=e*n+t*D+i*s-o*a,A[I+3]=t*n-i*a-o*s-e*D,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,C=A._y,B=A._z,E=A._order,i=Math.cos,o=Math.sin,e=i(g/2),t=i(C/2),a=i(B/2),s=o(g/2),D=o(C/2),n=o(B/2);switch(E){case"XYZ":this._x=s*t*a+e*D*n,this._y=e*D*a-s*t*n,this._z=e*t*n+s*D*a,this._w=e*t*a-s*D*n;break;case"YXZ":this._x=s*t*a+e*D*n,this._y=e*D*a-s*t*n,this._z=e*t*n-s*D*a,this._w=e*t*a+s*D*n;break;case"ZXY":this._x=s*t*a-e*D*n,this._y=e*D*a+s*t*n,this._z=e*t*n+s*D*a,this._w=e*t*a-s*D*n;break;case"ZYX":this._x=s*t*a-e*D*n,this._y=e*D*a+s*t*n,this._z=e*t*n-s*D*a,this._w=e*t*a+s*D*n;break;case"YZX":this._x=s*t*a+e*D*n,this._y=e*D*a+s*t*n,this._z=e*t*n-s*D*a,this._w=e*t*a-s*D*n;break;case"XZY":this._x=s*t*a-e*D*n,this._y=e*D*a-s*t*n,this._z=e*t*n+s*D*a,this._w=e*t*a+s*D*n;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],B=I[8],E=I[1],i=I[5],o=I[9],e=I[2],t=I[6],a=I[10],s=g+i+a;if(s>0){const D=.5/Math.sqrt(s+1);this._w=.25/D,this._x=(t-o)*D,this._y=(B-e)*D,this._z=(E-C)*D}else if(g>i&&g>a){const D=2*Math.sqrt(1+g-i-a);this._w=(t-o)/D,this._x=.25*D,this._y=(C+E)/D,this._z=(B+e)/D}else if(i>a){const D=2*Math.sqrt(1+i-g-a);this._w=(B-e)/D,this._x=(C+E)/D,this._y=.25*D,this._z=(o+t)/D}else{const D=2*Math.sqrt(1+a-g-i);this._w=(E-C)/D,this._x=(B+e)/D,this._y=(o+t)/D,this._z=.25*D}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(mI(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,B=A._z,E=A._w,i=I._x,o=I._y,e=I._z,t=I._w;return this._x=g*t+E*i+C*e-B*o,this._y=C*t+E*o+B*i-g*e,this._z=B*t+E*e+g*o-C*i,this._w=E*t-g*i-C*o-B*e,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,B=this._z,E=this._w;let i=E*A._w+g*A._x+C*A._y+B*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=g,this._y=C,this._z=B,this;const o=1-i*i;if(o<=Number.EPSILON){const D=1-I;return this._w=D*E+I*this._w,this._x=D*g+I*this._x,this._y=D*C+I*this._y,this._z=D*B+I*this._z,this.normalize(),this}const e=Math.sqrt(o),t=Math.atan2(e,i),a=Math.sin((1-I)*t)/e,s=Math.sin(I*t)/e;return this._w=E*a+this._w*s,this._x=g*a+this._x*s,this._y=C*a+this._y*s,this._z=B*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=2*Math.PI*Math.random(),I=2*Math.PI*Math.random(),g=Math.random(),C=Math.sqrt(1-g),B=Math.sqrt(g);return this.set(C*Math.sin(A),C*Math.cos(A),B*Math.sin(I),B*Math.cos(I))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(A=0,I=0,g=0){q.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(Ye.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(Ye.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6]*C,this.y=B[1]*I+B[4]*g+B[7]*C,this.z=B[2]*I+B[5]*g+B[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=A.elements,E=1/(B[3]*I+B[7]*g+B[11]*C+B[15]);return this.x=(B[0]*I+B[4]*g+B[8]*C+B[12])*E,this.y=(B[1]*I+B[5]*g+B[9]*C+B[13])*E,this.z=(B[2]*I+B[6]*g+B[10]*C+B[14])*E,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,B=A.x,E=A.y,i=A.z,o=A.w,e=2*(E*C-i*g),t=2*(i*I-B*C),a=2*(B*g-E*I);return this.x=I+o*e+E*a-i*t,this.y=g+o*t+i*e-B*a,this.z=C+o*a+B*t-E*e,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[4]*g+B[8]*C,this.y=B[1]*I+B[5]*g+B[9]*C,this.z=B[2]*I+B[6]*g+B[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,B=A.z,E=I.x,i=I.y,o=I.z;return this.x=C*o-B*i,this.y=B*E-g*o,this.z=g*i-C*E,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return WE.copy(this).projectOnVector(A),this.sub(WE)}reflect(A){return this.sub(WE.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(mI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=Math.random()*Math.PI*2,I=Math.random()*2-1,g=Math.sqrt(1-I*I);return this.x=g*Math.cos(A),this.y=I,this.z=g*Math.sin(A),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const WE=new q,Ye=new dI;class Tg{constructor(A=new q(1/0,1/0,1/0),I=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(Sg.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(Sg.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=Sg.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const B=g.getAttribute("position");if(I===!0&&B!==void 0&&A.isInstancedMesh!==!0)for(let E=0,i=B.count;E<i;E++)A.isMesh===!0?A.getVertexPosition(E,Sg):Sg.fromBufferAttribute(B,E),Sg.applyMatrix4(A.matrixWorld),this.expandByPoint(Sg);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),pQ.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),pQ.copy(g.boundingBox)),pQ.applyMatrix4(A.matrixWorld),this.union(pQ)}const C=A.children;for(let B=0,E=C.length;B<E;B++)this.expandByObject(C[B],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,Sg),Sg.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(HB),qQ.subVectors(this.max,HB),$C.subVectors(A.a,HB),AB.subVectors(A.b,HB),IB.subVectors(A.c,HB),QC.subVectors(AB,$C),EC.subVectors(IB,AB),yC.subVectors($C,IB);let I=[0,-QC.z,QC.y,0,-EC.z,EC.y,0,-yC.z,yC.y,QC.z,0,-QC.x,EC.z,0,-EC.x,yC.z,0,-yC.x,-QC.y,QC.x,0,-EC.y,EC.x,0,-yC.y,yC.x,0];return!PE(I,$C,AB,IB,qQ)||(I=[1,0,0,0,1,0,0,0,1],!PE(I,$C,AB,IB,qQ))?!1:(dQ.crossVectors(QC,EC),I=[dQ.x,dQ.y,dQ.z],PE(I,$C,AB,IB,qQ))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,Sg).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(Sg).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(xg[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),xg[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),xg[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),xg[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),xg[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),xg[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),xg[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),xg[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(xg),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const xg=[new q,new q,new q,new q,new q,new q,new q,new q],Sg=new q,pQ=new Tg,$C=new q,AB=new q,IB=new q,QC=new q,EC=new q,yC=new q,HB=new q,qQ=new q,dQ=new q,MC=new q;function PE(Q,A,I,g,C){for(let B=0,E=Q.length-3;B<=E;B+=3){MC.fromArray(Q,B);const i=C.x*Math.abs(MC.x)+C.y*Math.abs(MC.y)+C.z*Math.abs(MC.z),o=A.dot(MC),e=I.dot(MC),t=g.dot(MC);if(Math.max(-Math.max(o,e,t),Math.min(o,e,t))>i)return!1}return!0}const Ah=new Tg,uB=new q,jE=new q;class Ug{constructor(A=new q,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):Ah.setFromPoints(A).getCenter(g);let C=0;for(let B=0,E=A.length;B<E;B++)C=Math.max(C,g.distanceToSquared(A[B]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;uB.subVectors(A,this.center);const I=uB.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(uB,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(jE.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(uB.copy(A.center).add(jE)),this.expandByPoint(uB.copy(A.center).sub(jE))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bg=new q,VE=new q,YQ=new q,iC=new q,XE=new q,LQ=new q,zE=new q;class HQ{constructor(A=new q,I=new q(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,bg)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=bg.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(bg.copy(this.origin).addScaledVector(this.direction,I),bg.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){VE.copy(A).add(I).multiplyScalar(.5),YQ.copy(I).sub(A).normalize(),iC.copy(this.origin).sub(VE);const B=A.distanceTo(I)*.5,E=-this.direction.dot(YQ),i=iC.dot(this.direction),o=-iC.dot(YQ),e=iC.lengthSq(),t=Math.abs(1-E*E);let a,s,D,n;if(t>0)if(a=E*o-i,s=E*i-o,n=B*t,a>=0)if(s>=-n)if(s<=n){const w=1/t;a*=w,s*=w,D=a*(a+E*s+2*i)+s*(E*a+s+2*o)+e}else s=B,a=Math.max(0,-(E*s+i)),D=-a*a+s*(s+2*o)+e;else s=-B,a=Math.max(0,-(E*s+i)),D=-a*a+s*(s+2*o)+e;else s<=-n?(a=Math.max(0,-(-E*B+i)),s=a>0?-B:Math.min(Math.max(-B,-o),B),D=-a*a+s*(s+2*o)+e):s<=n?(a=0,s=Math.min(Math.max(-B,-o),B),D=s*(s+2*o)+e):(a=Math.max(0,-(E*B+i)),s=a>0?B:Math.min(Math.max(-B,-o),B),D=-a*a+s*(s+2*o)+e);else s=E>0?-B:B,a=Math.max(0,-(E*s+i)),D=-a*a+s*(s+2*o)+e;return g&&g.copy(this.origin).addScaledVector(this.direction,a),C&&C.copy(VE).addScaledVector(YQ,s),D}intersectSphere(A,I){bg.subVectors(A.center,this.origin);const g=bg.dot(this.direction),C=bg.dot(bg)-g*g,B=A.radius*A.radius;if(C>B)return null;const E=Math.sqrt(B-C),i=g-E,o=g+E;return o<0?null:i<0?this.at(o,I):this.at(i,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,B,E,i,o;const e=1/this.direction.x,t=1/this.direction.y,a=1/this.direction.z,s=this.origin;return e>=0?(g=(A.min.x-s.x)*e,C=(A.max.x-s.x)*e):(g=(A.max.x-s.x)*e,C=(A.min.x-s.x)*e),t>=0?(B=(A.min.y-s.y)*t,E=(A.max.y-s.y)*t):(B=(A.max.y-s.y)*t,E=(A.min.y-s.y)*t),g>E||B>C||((B>g||isNaN(g))&&(g=B),(E<C||isNaN(C))&&(C=E),a>=0?(i=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(i=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||i>C)||((i>g||g!==g)&&(g=i),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,bg)!==null}intersectTriangle(A,I,g,C,B){XE.subVectors(I,A),LQ.subVectors(g,A),zE.crossVectors(XE,LQ);let E=this.direction.dot(zE),i;if(E>0){if(C)return null;i=1}else if(E<0)i=-1,E=-E;else return null;iC.subVectors(this.origin,A);const o=i*this.direction.dot(LQ.crossVectors(iC,LQ));if(o<0)return null;const e=i*this.direction.dot(XE.cross(iC));if(e<0||o+e>E)return null;const t=-i*iC.dot(zE);return t<0?null:this.at(t/E,B)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pA{constructor(A,I,g,C,B,E,i,o,e,t,a,s,D,n,w,S){pA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,C,B,E,i,o,e,t,a,s,D,n,w,S)}set(A,I,g,C,B,E,i,o,e,t,a,s,D,n,w,S){const h=this.elements;return h[0]=A,h[4]=I,h[8]=g,h[12]=C,h[1]=B,h[5]=E,h[9]=i,h[13]=o,h[2]=e,h[6]=t,h[10]=a,h[14]=s,h[3]=D,h[7]=n,h[11]=w,h[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pA().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/gB.setFromMatrixColumn(A,0).length(),B=1/gB.setFromMatrixColumn(A,1).length(),E=1/gB.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*B,I[5]=g[5]*B,I[6]=g[6]*B,I[7]=0,I[8]=g[8]*E,I[9]=g[9]*E,I[10]=g[10]*E,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,B=A.z,E=Math.cos(g),i=Math.sin(g),o=Math.cos(C),e=Math.sin(C),t=Math.cos(B),a=Math.sin(B);if(A.order==="XYZ"){const s=E*t,D=E*a,n=i*t,w=i*a;I[0]=o*t,I[4]=-o*a,I[8]=e,I[1]=D+n*e,I[5]=s-w*e,I[9]=-i*o,I[2]=w-s*e,I[6]=n+D*e,I[10]=E*o}else if(A.order==="YXZ"){const s=o*t,D=o*a,n=e*t,w=e*a;I[0]=s+w*i,I[4]=n*i-D,I[8]=E*e,I[1]=E*a,I[5]=E*t,I[9]=-i,I[2]=D*i-n,I[6]=w+s*i,I[10]=E*o}else if(A.order==="ZXY"){const s=o*t,D=o*a,n=e*t,w=e*a;I[0]=s-w*i,I[4]=-E*a,I[8]=n+D*i,I[1]=D+n*i,I[5]=E*t,I[9]=w-s*i,I[2]=-E*e,I[6]=i,I[10]=E*o}else if(A.order==="ZYX"){const s=E*t,D=E*a,n=i*t,w=i*a;I[0]=o*t,I[4]=n*e-D,I[8]=s*e+w,I[1]=o*a,I[5]=w*e+s,I[9]=D*e-n,I[2]=-e,I[6]=i*o,I[10]=E*o}else if(A.order==="YZX"){const s=E*o,D=E*e,n=i*o,w=i*e;I[0]=o*t,I[4]=w-s*a,I[8]=n*a+D,I[1]=a,I[5]=E*t,I[9]=-i*t,I[2]=-e*t,I[6]=D*a+n,I[10]=s-w*a}else if(A.order==="XZY"){const s=E*o,D=E*e,n=i*o,w=i*e;I[0]=o*t,I[4]=-a,I[8]=e*t,I[1]=s*a+w,I[5]=E*t,I[9]=D*a-n,I[2]=n*a-D,I[6]=i*t,I[10]=w*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Ih,A,gh)}lookAt(A,I,g){const C=this.elements;return Cg.subVectors(A,I),Cg.lengthSq()===0&&(Cg.z=1),Cg.normalize(),oC.crossVectors(g,Cg),oC.lengthSq()===0&&(Math.abs(g.z)===1?Cg.x+=1e-4:Cg.z+=1e-4,Cg.normalize(),oC.crossVectors(g,Cg)),oC.normalize(),uQ.crossVectors(Cg,oC),C[0]=oC.x,C[4]=uQ.x,C[8]=Cg.x,C[1]=oC.y,C[5]=uQ.y,C[9]=Cg.y,C[2]=oC.z,C[6]=uQ.z,C[10]=Cg.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,E=g[0],i=g[4],o=g[8],e=g[12],t=g[1],a=g[5],s=g[9],D=g[13],n=g[2],w=g[6],S=g[10],h=g[14],l=g[3],G=g[7],M=g[11],p=g[15],N=C[0],K=C[4],H=C[8],y=C[12],c=C[1],m=C[5],x=C[9],R=C[13],v=C[2],P=C[6],V=C[10],gA=C[14],Z=C[3],AA=C[7],BA=C[11],FA=C[15];return B[0]=E*N+i*c+o*v+e*Z,B[4]=E*K+i*m+o*P+e*AA,B[8]=E*H+i*x+o*V+e*BA,B[12]=E*y+i*R+o*gA+e*FA,B[1]=t*N+a*c+s*v+D*Z,B[5]=t*K+a*m+s*P+D*AA,B[9]=t*H+a*x+s*V+D*BA,B[13]=t*y+a*R+s*gA+D*FA,B[2]=n*N+w*c+S*v+h*Z,B[6]=n*K+w*m+S*P+h*AA,B[10]=n*H+w*x+S*V+h*BA,B[14]=n*y+w*R+S*gA+h*FA,B[3]=l*N+G*c+M*v+p*Z,B[7]=l*K+G*m+M*P+p*AA,B[11]=l*H+G*x+M*V+p*BA,B[15]=l*y+G*R+M*gA+p*FA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],B=A[12],E=A[1],i=A[5],o=A[9],e=A[13],t=A[2],a=A[6],s=A[10],D=A[14],n=A[3],w=A[7],S=A[11],h=A[15];return n*(+B*o*a-C*e*a-B*i*s+g*e*s+C*i*D-g*o*D)+w*(+I*o*D-I*e*s+B*E*s-C*E*D+C*e*t-B*o*t)+S*(+I*e*a-I*i*D-B*E*a+g*E*D+B*i*t-g*e*t)+h*(-C*i*t-I*o*a+I*i*s+C*E*a-g*E*s+g*o*t)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=A[9],s=A[10],D=A[11],n=A[12],w=A[13],S=A[14],h=A[15],l=a*S*e-w*s*e+w*o*D-i*S*D-a*o*h+i*s*h,G=n*s*e-t*S*e-n*o*D+E*S*D+t*o*h-E*s*h,M=t*w*e-n*a*e+n*i*D-E*w*D-t*i*h+E*a*h,p=n*a*o-t*w*o-n*i*s+E*w*s+t*i*S-E*a*S,N=I*l+g*G+C*M+B*p;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/N;return A[0]=l*K,A[1]=(w*s*B-a*S*B-w*C*D+g*S*D+a*C*h-g*s*h)*K,A[2]=(i*S*B-w*o*B+w*C*e-g*S*e-i*C*h+g*o*h)*K,A[3]=(a*o*B-i*s*B-a*C*e+g*s*e+i*C*D-g*o*D)*K,A[4]=G*K,A[5]=(t*S*B-n*s*B+n*C*D-I*S*D-t*C*h+I*s*h)*K,A[6]=(n*o*B-E*S*B-n*C*e+I*S*e+E*C*h-I*o*h)*K,A[7]=(E*s*B-t*o*B+t*C*e-I*s*e-E*C*D+I*o*D)*K,A[8]=M*K,A[9]=(n*a*B-t*w*B-n*g*D+I*w*D+t*g*h-I*a*h)*K,A[10]=(E*w*B-n*i*B+n*g*e-I*w*e-E*g*h+I*i*h)*K,A[11]=(t*i*B-E*a*B-t*g*e+I*a*e+E*g*D-I*i*D)*K,A[12]=p*K,A[13]=(t*w*C-n*a*C+n*g*s-I*w*s-t*g*S+I*a*S)*K,A[14]=(n*i*C-E*w*C-n*g*o+I*w*o+E*g*S-I*i*S)*K,A[15]=(E*a*C-t*i*C+t*g*o-I*a*o-E*g*s+I*i*s)*K,this}scale(A){const I=this.elements,g=A.x,C=A.y,B=A.z;return I[0]*=g,I[4]*=C,I[8]*=B,I[1]*=g,I[5]*=C,I[9]*=B,I[2]*=g,I[6]*=C,I[10]*=B,I[3]*=g,I[7]*=C,I[11]*=B,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),B=1-g,E=A.x,i=A.y,o=A.z,e=B*E,t=B*i;return this.set(e*E+g,e*i-C*o,e*o+C*i,0,e*i+C*o,t*i+g,t*o-C*E,0,e*o-C*i,t*o+C*E,B*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,B,E){return this.set(1,g,B,0,A,1,E,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,B=I._x,E=I._y,i=I._z,o=I._w,e=B+B,t=E+E,a=i+i,s=B*e,D=B*t,n=B*a,w=E*t,S=E*a,h=i*a,l=o*e,G=o*t,M=o*a,p=g.x,N=g.y,K=g.z;return C[0]=(1-(w+h))*p,C[1]=(D+M)*p,C[2]=(n-G)*p,C[3]=0,C[4]=(D-M)*N,C[5]=(1-(s+h))*N,C[6]=(S+l)*N,C[7]=0,C[8]=(n+G)*K,C[9]=(S-l)*K,C[10]=(1-(s+w))*K,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let B=gB.set(C[0],C[1],C[2]).length();const E=gB.set(C[4],C[5],C[6]).length(),i=gB.set(C[8],C[9],C[10]).length();this.determinant()<0&&(B=-B),A.x=C[12],A.y=C[13],A.z=C[14],ng.copy(this);const o=1/B,e=1/E,t=1/i;return ng.elements[0]*=o,ng.elements[1]*=o,ng.elements[2]*=o,ng.elements[4]*=e,ng.elements[5]*=e,ng.elements[6]*=e,ng.elements[8]*=t,ng.elements[9]*=t,ng.elements[10]*=t,I.setFromRotationMatrix(ng),g.x=B,g.y=E,g.z=i,this}makePerspective(A,I,g,C,B,E,i=fg){const o=this.elements,e=2*B/(I-A),t=2*B/(g-C),a=(I+A)/(I-A),s=(g+C)/(g-C);let D,n;if(i===fg)D=-(E+B)/(E-B),n=-2*E*B/(E-B);else if(i===FQ)D=-E/(E-B),n=-E*B/(E-B);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return o[0]=e,o[4]=0,o[8]=a,o[12]=0,o[1]=0,o[5]=t,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=D,o[14]=n,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,C,B,E,i=fg){const o=this.elements,e=1/(I-A),t=1/(g-C),a=1/(E-B),s=(I+A)*e,D=(g+C)*t;let n,w;if(i===fg)n=(E+B)*a,w=-2*a;else if(i===FQ)n=B*a,w=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return o[0]=2*e,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*t,o[9]=0,o[13]=-D,o[2]=0,o[6]=0,o[10]=w,o[14]=-n,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const gB=new q,ng=new pA,Ih=new q(0,0,0),gh=new q(1,1,1),oC=new q,uQ=new q,Cg=new q,Le=new pA,He=new dI;class ZI{constructor(A=0,I=0,g=0,C=ZI.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,B=C[0],E=C[4],i=C[8],o=C[1],e=C[5],t=C[9],a=C[2],s=C[6],D=C[10];switch(I){case"XYZ":this._y=Math.asin(mI(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-t,D),this._z=Math.atan2(-E,B)):(this._x=Math.atan2(s,e),this._z=0);break;case"YXZ":this._x=Math.asin(-mI(t,-1,1)),Math.abs(t)<.9999999?(this._y=Math.atan2(i,D),this._z=Math.atan2(o,e)):(this._y=Math.atan2(-a,B),this._z=0);break;case"ZXY":this._x=Math.asin(mI(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,D),this._z=Math.atan2(-E,e)):(this._y=0,this._z=Math.atan2(o,B));break;case"ZYX":this._y=Math.asin(-mI(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,D),this._z=Math.atan2(o,B)):(this._x=0,this._z=Math.atan2(-E,e));break;case"YZX":this._z=Math.asin(mI(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-t,e),this._y=Math.atan2(-a,B)):(this._x=0,this._y=Math.atan2(i,D));break;case"XZY":this._z=Math.asin(-mI(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(s,e),this._y=Math.atan2(i,B)):(this._x=Math.atan2(-t,D),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return Le.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Le,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return He.setFromEuler(this),this.setFromQuaternion(He,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ZI.DEFAULT_ORDER="XYZ";class ue{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let Ch=0;const me=new q,CB=new dI,Og=new pA,mQ=new q,mB=new q,Bh=new q,Qh=new dI,fe=new q(1,0,0),Te=new q(0,1,0),xe=new q(0,0,1),be={type:"added"},Eh={type:"removed"},BB={type:"childadded",child:null},$E={type:"childremoved",child:null};class BI extends lC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=hg(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=BI.DEFAULT_UP.clone();const A=new q,I=new ZI,g=new dI,C=new q(1,1,1);function B(){g.setFromEuler(I,!1)}function E(){I.setFromQuaternion(g,void 0,!1)}I._onChange(B),g._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new pA},normalMatrix:{value:new YA}}),this.matrix=new pA,this.matrixWorld=new pA,this.matrixAutoUpdate=BI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=BI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ue,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return CB.setFromAxisAngle(A,I),this.quaternion.multiply(CB),this}rotateOnWorldAxis(A,I){return CB.setFromAxisAngle(A,I),this.quaternion.premultiply(CB),this}rotateX(A){return this.rotateOnAxis(fe,A)}rotateY(A){return this.rotateOnAxis(Te,A)}rotateZ(A){return this.rotateOnAxis(xe,A)}translateOnAxis(A,I){return me.copy(A).applyQuaternion(this.quaternion),this.position.add(me.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(fe,A)}translateY(A){return this.translateOnAxis(Te,A)}translateZ(A){return this.translateOnAxis(xe,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(Og.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?mQ.copy(A):mQ.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),mB.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Og.lookAt(mB,mQ,this.up):Og.lookAt(mQ,mB,this.up),this.quaternion.setFromRotationMatrix(Og),C&&(Og.extractRotation(C.matrixWorld),CB.setFromRotationMatrix(Og),this.quaternion.premultiply(CB.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.removeFromParent(),A.parent=this,this.children.push(A),A.dispatchEvent(be),BB.child=A,this.dispatchEvent(BB),BB.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(Eh),$E.child=A,this.dispatchEvent($E),$E.child=null),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),Og.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Og.multiply(A.parent.matrixWorld)),A.applyMatrix4(Og),A.removeFromParent(),A.parent=this,this.children.push(A),A.updateWorldMatrix(!1,!0),A.dispatchEvent(be),BB.child=A,this.dispatchEvent(BB),BB.child=null,this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const B=this.children[g].getObjectByProperty(A,I);if(B!==void 0)return B}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const C=this.children;for(let B=0,E=C.length;B<E;B++)C[B].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mB,A,Bh),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mB,Qh,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const B=I[g];(B.matrixWorldAutoUpdate===!0||A===!0)&&B.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let B=0,E=C.length;B<E;B++){const i=C[B];i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(C.type="BatchedMesh",C.perObjectFrustumCulled=this.perObjectFrustumCulled,C.sortObjects=this.sortObjects,C.drawRanges=this._drawRanges,C.reservedRanges=this._reservedRanges,C.visibility=this._visibility,C.active=this._active,C.bounds=this._bounds.map(i=>({boxInitialized:i.boxInitialized,boxMin:i.box.min.toArray(),boxMax:i.box.max.toArray(),sphereInitialized:i.sphereInitialized,sphereRadius:i.sphere.radius,sphereCenter:i.sphere.center.toArray()})),C.maxGeometryCount=this._maxGeometryCount,C.maxVertexCount=this._maxVertexCount,C.maxIndexCount=this._maxIndexCount,C.geometryInitialized=this._geometryInitialized,C.geometryCount=this._geometryCount,C.matricesTexture=this._matricesTexture.toJSON(A),this.boundingSphere!==null&&(C.boundingSphere={center:C.boundingSphere.center.toArray(),radius:C.boundingSphere.radius}),this.boundingBox!==null&&(C.boundingBox={min:C.boundingBox.min.toArray(),max:C.boundingBox.max.toArray()}));function B(i,o){return i[o.uuid]===void 0&&(i[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=B(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const o=i.shapes;if(Array.isArray(o))for(let e=0,t=o.length;e<t;e++){const a=o[e];B(A.shapes,a)}else B(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(B(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let o=0,e=this.material.length;o<e;o++)i.push(B(A.materials,this.material[o]));C.material=i}else C.material=B(A.materials,this.material);if(this.children.length>0){C.children=[];for(let i=0;i<this.children.length;i++)C.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let i=0;i<this.animations.length;i++){const o=this.animations[i];C.animations.push(B(A.animations,o))}}if(I){const i=E(A.geometries),o=E(A.materials),e=E(A.textures),t=E(A.images),a=E(A.shapes),s=E(A.skeletons),D=E(A.animations),n=E(A.nodes);i.length>0&&(g.geometries=i),o.length>0&&(g.materials=o),e.length>0&&(g.textures=e),t.length>0&&(g.images=t),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),D.length>0&&(g.animations=D),n.length>0&&(g.nodes=n)}return g.object=C,g;function E(i){const o=[];for(const e in i){const t=i[e];delete t.metadata,o.push(t)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}BI.DEFAULT_UP=new q(0,1,0),BI.DEFAULT_MATRIX_AUTO_UPDATE=!0,BI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wg=new q,_g=new q,Ai=new q,vg=new q,QB=new q,EB=new q,Oe=new q,Ii=new q,gi=new q,Ci=new q;class Kg{constructor(A=new q,I=new q,g=new q){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),wg.subVectors(A,I),C.cross(wg);const B=C.lengthSq();return B>0?C.multiplyScalar(1/Math.sqrt(B)):C.set(0,0,0)}static getBarycoord(A,I,g,C,B){wg.subVectors(C,I),_g.subVectors(g,I),Ai.subVectors(A,I);const E=wg.dot(wg),i=wg.dot(_g),o=wg.dot(Ai),e=_g.dot(_g),t=_g.dot(Ai),a=E*e-i*i;if(a===0)return B.set(0,0,0),null;const s=1/a,D=(e*o-i*t)*s,n=(E*t-i*o)*s;return B.set(1-D-n,n,D)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,vg)===null?!1:vg.x>=0&&vg.y>=0&&vg.x+vg.y<=1}static getInterpolation(A,I,g,C,B,E,i,o){return this.getBarycoord(A,I,g,C,vg)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(B,vg.x),o.addScaledVector(E,vg.y),o.addScaledVector(i,vg.z),o)}static isFrontFacing(A,I,g,C){return wg.subVectors(g,I),_g.subVectors(A,I),wg.cross(_g).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return wg.subVectors(this.c,this.b),_g.subVectors(this.a,this.b),wg.cross(_g).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return Kg.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return Kg.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,C,B){return Kg.getInterpolation(A,this.a,this.b,this.c,I,g,C,B)}containsPoint(A){return Kg.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return Kg.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,B=this.c;let E,i;QB.subVectors(C,g),EB.subVectors(B,g),Ii.subVectors(A,g);const o=QB.dot(Ii),e=EB.dot(Ii);if(o<=0&&e<=0)return I.copy(g);gi.subVectors(A,C);const t=QB.dot(gi),a=EB.dot(gi);if(t>=0&&a<=t)return I.copy(C);const s=o*a-t*e;if(s<=0&&o>=0&&t<=0)return E=o/(o-t),I.copy(g).addScaledVector(QB,E);Ci.subVectors(A,B);const D=QB.dot(Ci),n=EB.dot(Ci);if(n>=0&&D<=n)return I.copy(B);const w=D*e-o*n;if(w<=0&&e>=0&&n<=0)return i=e/(e-n),I.copy(g).addScaledVector(EB,i);const S=t*n-D*a;if(S<=0&&a-t>=0&&D-n>=0)return Oe.subVectors(B,C),i=(a-t)/(a-t+(D-n)),I.copy(C).addScaledVector(Oe,i);const h=1/(S+w+s);return E=w*h,i=s*h,I.copy(g).addScaledVector(QB,E).addScaledVector(EB,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const _e={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},eC={h:0,s:0,l:0},fQ={h:0,s:0,l:0};function Bi(Q,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?Q+(A-Q)*6*I:I<1/2?A:I<2/3?Q+(A-Q)*6*(2/3-I):Q}class kA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const C=A;C&&C.isColor?this.copy(C):typeof C=="number"?this.setHex(C):typeof C=="string"&&this.setStyle(C)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=uI){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,zA.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=zA.workingColorSpace){return this.r=A,this.g=I,this.b=g,zA.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=zA.workingColorSpace){if(A=OE(A,1),I=mI(I,0,1),g=mI(g,0,1),I===0)this.r=this.g=this.b=g;else{const B=g<=.5?g*(1+I):g+I-g*I,E=2*g-B;this.r=Bi(E,B,A+1/3),this.g=Bi(E,B,A),this.b=Bi(E,B,A-1/3)}return zA.toWorkingColorSpace(this,C),this}setStyle(A,I=uI){function g(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let B;const E=C[1],i=C[2];switch(E){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(B[4]),this.setRGB(Math.min(255,parseInt(B[1],10))/255,Math.min(255,parseInt(B[2],10))/255,Math.min(255,parseInt(B[3],10))/255,I);if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(B[4]),this.setRGB(Math.min(100,parseInt(B[1],10))/100,Math.min(100,parseInt(B[2],10))/100,Math.min(100,parseInt(B[3],10))/100,I);break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(B[4]),this.setHSL(parseFloat(B[1])/360,parseFloat(B[2])/100,parseFloat(B[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=C[1],E=B.length;if(E===3)return this.setRGB(parseInt(B.charAt(0),16)/15,parseInt(B.charAt(1),16)/15,parseInt(B.charAt(2),16)/15,I);if(E===6)return this.setHex(parseInt(B,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=uI){const g=_e[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=XC(A.r),this.g=XC(A.g),this.b=XC(A.b),this}copyLinearToSRGB(A){return this.r=vE(A.r),this.g=vE(A.g),this.b=vE(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=uI){return zA.fromWorkingColorSpace(bI.copy(this),A),Math.round(mI(bI.r*255,0,255))*65536+Math.round(mI(bI.g*255,0,255))*256+Math.round(mI(bI.b*255,0,255))}getHexString(A=uI){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=zA.workingColorSpace){zA.fromWorkingColorSpace(bI.copy(this),I);const g=bI.r,C=bI.g,B=bI.b,E=Math.max(g,C,B),i=Math.min(g,C,B);let o,e;const t=(i+E)/2;if(i===E)o=0,e=0;else{const a=E-i;switch(e=t<=.5?a/(E+i):a/(2-E-i),E){case g:o=(C-B)/a+(C<B?6:0);break;case C:o=(B-g)/a+2;break;case B:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=e,A.l=t,A}getRGB(A,I=zA.workingColorSpace){return zA.fromWorkingColorSpace(bI.copy(this),I),A.r=bI.r,A.g=bI.g,A.b=bI.b,A}getStyle(A=uI){zA.fromWorkingColorSpace(bI.copy(this),A);const I=bI.r,g=bI.g,C=bI.b;return A!==uI?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(eC),this.setHSL(eC.h+A,eC.s+I,eC.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(eC),A.getHSL(fQ);const g=YB(eC.h,fQ.h,I),C=YB(eC.s,fQ.s,I),B=YB(eC.l,fQ.l,I);return this.setHSL(g,C,B),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,B=A.elements;return this.r=B[0]*I+B[3]*g+B[6]*C,this.g=B[1]*I+B[4]*g+B[7]*C,this.b=B[2]*I+B[5]*g+B[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bI=new kA;kA.NAMES=_e;let ih=0;class cg extends lC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=hg(),this.name="",this.type="Material",this.blending=xC,this.side=mg,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=JE,this.blendDst=FE,this.blendEquation=cC,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kA(0,0,0),this.blendAlpha=0,this.depthFunc=cQ,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ye,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jC,this.stencilZFail=jC,this.stencilZPass=jC,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(g.dispersion=this.dispersion),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapRotation!==void 0&&(g.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==xC&&(g.blending=this.blending),this.side!==mg&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==JE&&(g.blendSrc=this.blendSrc),this.blendDst!==FE&&(g.blendDst=this.blendDst),this.blendEquation!==cC&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==cQ&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ye&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jC&&(g.stencilFail=this.stencilFail),this.stencilZFail!==jC&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==jC&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(B){const E=[];for(const i in B){const o=B[i];delete o.metadata,E.push(o)}return E}if(I){const B=C(A.textures),E=C(A.images);B.length>0&&(g.textures=B),E.length>0&&(g.images=E)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let B=0;B!==C;++B)g[B]=I[B].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class tC extends cg{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ZI,this.combine=RE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const Zg=oh();function oh(){const Q=new ArrayBuffer(4),A=new Float32Array(Q),I=new Uint32Array(Q),g=new Uint32Array(512),C=new Uint32Array(512);for(let o=0;o<256;++o){const e=o-127;e<-27?(g[o]=0,g[o|256]=32768,C[o]=24,C[o|256]=24):e<-14?(g[o]=1024>>-e-14,g[o|256]=1024>>-e-14|32768,C[o]=-e-1,C[o|256]=-e-1):e<=15?(g[o]=e+15<<10,g[o|256]=e+15<<10|32768,C[o]=13,C[o|256]=13):e<128?(g[o]=31744,g[o|256]=64512,C[o]=24,C[o|256]=24):(g[o]=31744,g[o|256]=64512,C[o]=13,C[o|256]=13)}const B=new Uint32Array(2048),E=new Uint32Array(64),i=new Uint32Array(64);for(let o=1;o<1024;++o){let e=o<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,B[o]=e|t}for(let o=1024;o<2048;++o)B[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)E[o]=o<<23;E[31]=1199570944,E[32]=2147483648;for(let o=33;o<63;++o)E[o]=2147483648+(o-32<<23);E[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(i[o]=1024);return{floatView:A,uint32View:I,baseTable:g,shiftTable:C,mantissaTable:B,exponentTable:E,offsetTable:i}}function eh(Q){Math.abs(Q)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),Q=mI(Q,-65504,65504),Zg.floatView[0]=Q;const A=Zg.uint32View[0],I=A>>23&511;return Zg.baseTable[I]+((A&8388607)>>Zg.shiftTable[I])}function th(Q){const A=Q>>10;return Zg.uint32View[0]=Zg.mantissaTable[Zg.offsetTable[A]+(Q&1023)]+Zg.exponentTable[A],Zg.floatView[0]}const TQ={toHalfFloat:eh,fromHalfFloat:th},kI=new q,xQ=new JA;class NI{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=bE,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gg,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}get updateRange(){return Fe("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,B=this.itemSize;C<B;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)xQ.fromBufferAttribute(this,I),xQ.applyMatrix3(A),this.setXY(I,xQ.x,xQ.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)kI.fromBufferAttribute(this,I),kI.applyMatrix3(A),this.setXYZ(I,kI.x,kI.y,kI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)kI.fromBufferAttribute(this,I),kI.applyMatrix4(A),this.setXYZ(I,kI.x,kI.y,kI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)kI.fromBufferAttribute(this,I),kI.applyNormalMatrix(A),this.setXYZ(I,kI.x,kI.y,kI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)kI.fromBufferAttribute(this,I),kI.transformDirection(A),this.setXYZ(I,kI.x,kI.y,kI.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=rg(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=II(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=rg(I,this.array)),I}setX(A,I){return this.normalized&&(I=II(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=rg(I,this.array)),I}setY(A,I){return this.normalized&&(I=II(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=rg(I,this.array)),I}setZ(A,I){return this.normalized&&(I=II(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=rg(I,this.array)),I}setW(A,I){return this.normalized&&(I=II(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=II(I,this.array),g=II(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=II(I,this.array),g=II(g,this.array),C=II(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=II(I,this.array),g=II(g,this.array),C=II(C,this.array),B=II(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=B,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==bE&&(A.usage=this.usage),A}}class ve extends NI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class Ze extends NI{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class WI extends NI{constructor(A,I,g){super(new Float32Array(A),I,g)}}let ah=0;const ig=new pA,Qi=new BI,iB=new q,Bg=new Tg,fB=new Tg,YI=new q;class PI extends lC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=hg(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Ne(A)?Ze:ve)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const B=new YA().getNormalMatrix(A);g.applyNormalMatrix(B),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return ig.makeRotationFromQuaternion(A),this.applyMatrix4(ig),this}rotateX(A){return ig.makeRotationX(A),this.applyMatrix4(ig),this}rotateY(A){return ig.makeRotationY(A),this.applyMatrix4(ig),this}rotateZ(A){return ig.makeRotationZ(A),this.applyMatrix4(ig),this}translate(A,I,g){return ig.makeTranslation(A,I,g),this.applyMatrix4(ig),this}scale(A,I,g){return ig.makeScale(A,I,g),this.applyMatrix4(ig),this}lookAt(A){return Qi.lookAt(A),Qi.updateMatrix(),this.applyMatrix4(Qi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(iB).negate(),this.translate(iB.x,iB.y,iB.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const B=A[g];I.push(B.x,B.y,B.z||0)}return this.setAttribute("position",new WI(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tg);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const B=I[g];Bg.setFromBufferAttribute(B),this.morphTargetsRelative?(YI.addVectors(this.boundingBox.min,Bg.min),this.boundingBox.expandByPoint(YI),YI.addVectors(this.boundingBox.max,Bg.max),this.boundingBox.expandByPoint(YI)):(this.boundingBox.expandByPoint(Bg.min),this.boundingBox.expandByPoint(Bg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ug);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(A){const g=this.boundingSphere.center;if(Bg.setFromBufferAttribute(A),I)for(let B=0,E=I.length;B<E;B++){const i=I[B];fB.setFromBufferAttribute(i),this.morphTargetsRelative?(YI.addVectors(Bg.min,fB.min),Bg.expandByPoint(YI),YI.addVectors(Bg.max,fB.max),Bg.expandByPoint(YI)):(Bg.expandByPoint(fB.min),Bg.expandByPoint(fB.max))}Bg.getCenter(g);let C=0;for(let B=0,E=A.count;B<E;B++)YI.fromBufferAttribute(A,B),C=Math.max(C,g.distanceToSquared(YI));if(I)for(let B=0,E=I.length;B<E;B++){const i=I[B],o=this.morphTargetsRelative;for(let e=0,t=i.count;e<t;e++)YI.fromBufferAttribute(i,e),o&&(iB.fromBufferAttribute(A,e),YI.add(iB)),C=Math.max(C,g.distanceToSquared(YI))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=I.position,C=I.normal,B=I.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new NI(new Float32Array(4*g.count),4));const E=this.getAttribute("tangent"),i=[],o=[];for(let H=0;H<g.count;H++)i[H]=new q,o[H]=new q;const e=new q,t=new q,a=new q,s=new JA,D=new JA,n=new JA,w=new q,S=new q;function h(H,y,c){e.fromBufferAttribute(g,H),t.fromBufferAttribute(g,y),a.fromBufferAttribute(g,c),s.fromBufferAttribute(B,H),D.fromBufferAttribute(B,y),n.fromBufferAttribute(B,c),t.sub(e),a.sub(e),D.sub(s),n.sub(s);const m=1/(D.x*n.y-n.x*D.y);isFinite(m)&&(w.copy(t).multiplyScalar(n.y).addScaledVector(a,-D.y).multiplyScalar(m),S.copy(a).multiplyScalar(D.x).addScaledVector(t,-n.x).multiplyScalar(m),i[H].add(w),i[y].add(w),i[c].add(w),o[H].add(S),o[y].add(S),o[c].add(S))}let l=this.groups;l.length===0&&(l=[{start:0,count:A.count}]);for(let H=0,y=l.length;H<y;++H){const c=l[H],m=c.start,x=c.count;for(let R=m,v=m+x;R<v;R+=3)h(A.getX(R+0),A.getX(R+1),A.getX(R+2))}const G=new q,M=new q,p=new q,N=new q;function K(H){p.fromBufferAttribute(C,H),N.copy(p);const y=i[H];G.copy(y),G.sub(p.multiplyScalar(p.dot(y))).normalize(),M.crossVectors(N,y);const c=M.dot(o[H])<0?-1:1;E.setXYZW(H,G.x,G.y,G.z,c)}for(let H=0,y=l.length;H<y;++H){const c=l[H],m=c.start,x=c.count;for(let R=m,v=m+x;R<v;R+=3)K(A.getX(R+0)),K(A.getX(R+1)),K(A.getX(R+2))}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new NI(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,D=g.count;s<D;s++)g.setXYZ(s,0,0,0);const C=new q,B=new q,E=new q,i=new q,o=new q,e=new q,t=new q,a=new q;if(A)for(let s=0,D=A.count;s<D;s+=3){const n=A.getX(s+0),w=A.getX(s+1),S=A.getX(s+2);C.fromBufferAttribute(I,n),B.fromBufferAttribute(I,w),E.fromBufferAttribute(I,S),t.subVectors(E,B),a.subVectors(C,B),t.cross(a),i.fromBufferAttribute(g,n),o.fromBufferAttribute(g,w),e.fromBufferAttribute(g,S),i.add(t),o.add(t),e.add(t),g.setXYZ(n,i.x,i.y,i.z),g.setXYZ(w,o.x,o.y,o.z),g.setXYZ(S,e.x,e.y,e.z)}else for(let s=0,D=I.count;s<D;s+=3)C.fromBufferAttribute(I,s+0),B.fromBufferAttribute(I,s+1),E.fromBufferAttribute(I,s+2),t.subVectors(E,B),a.subVectors(C,B),t.cross(a),g.setXYZ(s+0,t.x,t.y,t.z),g.setXYZ(s+1,t.x,t.y,t.z),g.setXYZ(s+2,t.x,t.y,t.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)YI.fromBufferAttribute(A,I),YI.normalize(),A.setXYZ(I,YI.x,YI.y,YI.z)}toNonIndexed(){function A(i,o){const e=i.array,t=i.itemSize,a=i.normalized,s=new e.constructor(o.length*t);let D=0,n=0;for(let w=0,S=o.length;w<S;w++){i.isInterleavedBufferAttribute?D=o[w]*i.data.stride+i.offset:D=o[w]*t;for(let h=0;h<t;h++)s[n++]=e[D++]}return new NI(s,t,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new PI,g=this.index.array,C=this.attributes;for(const i in C){const o=C[i],e=A(o,g);I.setAttribute(i,e)}const B=this.morphAttributes;for(const i in B){const o=[],e=B[i];for(let t=0,a=e.length;t<a;t++){const s=e[t],D=A(s,g);o.push(D)}I.morphAttributes[i]=o}I.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,o=E.length;i<o;i++){const e=E[i];I.addGroup(e.start,e.count,e.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const e in o)o[e]!==void 0&&(A[e]=o[e]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const e=g[o];A.data.attributes[o]=e.toJSON(A.data)}const C={};let B=!1;for(const o in this.morphAttributes){const e=this.morphAttributes[o],t=[];for(let a=0,s=e.length;a<s;a++){const D=e[a];t.push(D.toJSON(A.data))}t.length>0&&(C[o]=t,B=!0)}B&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const e in C){const t=C[e];this.setAttribute(e,t.clone(I))}const B=A.morphAttributes;for(const e in B){const t=[],a=B[e];for(let s=0,D=a.length;s<D;s++)t.push(a[s].clone(I));this.morphAttributes[e]=t}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let e=0,t=E.length;e<t;e++){const a=E[e];this.addGroup(a.start,a.count,a.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const We=new pA,UC=new HQ,bQ=new Ug,Pe=new q,oB=new q,eB=new q,tB=new q,Ei=new q,OQ=new q,_Q=new JA,vQ=new JA,ZQ=new JA,je=new q,Ve=new q,Xe=new q,WQ=new q,PQ=new q;class cI extends BI{constructor(A=new PI,I=new tC){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const A=this.geometry.morphAttributes,I=Object.keys(A);if(I.length>0){const g=A[I[0]];if(g!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,B=g.length;C<B;C++){const E=g[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=C}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,B=g.morphAttributes.position,E=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const i=this.morphTargetInfluences;if(B&&i){OQ.set(0,0,0);for(let o=0,e=B.length;o<e;o++){const t=i[o],a=B[o];t!==0&&(Ei.fromBufferAttribute(a,A),E?OQ.addScaledVector(Ei,t):OQ.addScaledVector(Ei.sub(I),t))}I.add(OQ)}return I}raycast(A,I){const g=this.geometry,C=this.material,B=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),bQ.copy(g.boundingSphere),bQ.applyMatrix4(B),UC.copy(A.ray).recast(A.near),!(bQ.containsPoint(UC.origin)===!1&&(UC.intersectSphere(bQ,Pe)===null||UC.origin.distanceToSquared(Pe)>(A.far-A.near)**2))&&(We.copy(B).invert(),UC.copy(A.ray).applyMatrix4(We),!(g.boundingBox!==null&&UC.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,UC)))}_computeIntersections(A,I,g){let C;const B=this.geometry,E=this.material,i=B.index,o=B.attributes.position,e=B.attributes.uv,t=B.attributes.uv1,a=B.attributes.normal,s=B.groups,D=B.drawRange;if(i!==null)if(Array.isArray(E))for(let n=0,w=s.length;n<w;n++){const S=s[n],h=E[S.materialIndex],l=Math.max(S.start,D.start),G=Math.min(i.count,Math.min(S.start+S.count,D.start+D.count));for(let M=l,p=G;M<p;M+=3){const N=i.getX(M),K=i.getX(M+1),H=i.getX(M+2);C=jQ(this,h,A,g,e,t,a,N,K,H),C&&(C.faceIndex=Math.floor(M/3),C.face.materialIndex=S.materialIndex,I.push(C))}}else{const n=Math.max(0,D.start),w=Math.min(i.count,D.start+D.count);for(let S=n,h=w;S<h;S+=3){const l=i.getX(S),G=i.getX(S+1),M=i.getX(S+2);C=jQ(this,E,A,g,e,t,a,l,G,M),C&&(C.faceIndex=Math.floor(S/3),I.push(C))}}else if(o!==void 0)if(Array.isArray(E))for(let n=0,w=s.length;n<w;n++){const S=s[n],h=E[S.materialIndex],l=Math.max(S.start,D.start),G=Math.min(o.count,Math.min(S.start+S.count,D.start+D.count));for(let M=l,p=G;M<p;M+=3){const N=M,K=M+1,H=M+2;C=jQ(this,h,A,g,e,t,a,N,K,H),C&&(C.faceIndex=Math.floor(M/3),C.face.materialIndex=S.materialIndex,I.push(C))}}else{const n=Math.max(0,D.start),w=Math.min(o.count,D.start+D.count);for(let S=n,h=w;S<h;S+=3){const l=S,G=S+1,M=S+2;C=jQ(this,E,A,g,e,t,a,l,G,M),C&&(C.faceIndex=Math.floor(S/3),I.push(C))}}}}function sh(Q,A,I,g,C,B,E,i){let o;if(A.side===Ag?o=g.intersectTriangle(E,B,C,!0,i):o=g.intersectTriangle(C,B,E,A.side===mg,i),o===null)return null;PQ.copy(i),PQ.applyMatrix4(Q.matrixWorld);const e=I.ray.origin.distanceTo(PQ);return e<I.near||e>I.far?null:{distance:e,point:PQ.clone(),object:Q}}function jQ(Q,A,I,g,C,B,E,i,o,e){Q.getVertexPosition(i,oB),Q.getVertexPosition(o,eB),Q.getVertexPosition(e,tB);const t=sh(Q,A,I,g,oB,eB,tB,WQ);if(t){C&&(_Q.fromBufferAttribute(C,i),vQ.fromBufferAttribute(C,o),ZQ.fromBufferAttribute(C,e),t.uv=Kg.getInterpolation(WQ,oB,eB,tB,_Q,vQ,ZQ,new JA)),B&&(_Q.fromBufferAttribute(B,i),vQ.fromBufferAttribute(B,o),ZQ.fromBufferAttribute(B,e),t.uv1=Kg.getInterpolation(WQ,oB,eB,tB,_Q,vQ,ZQ,new JA)),E&&(je.fromBufferAttribute(E,i),Ve.fromBufferAttribute(E,o),Xe.fromBufferAttribute(E,e),t.normal=Kg.getInterpolation(WQ,oB,eB,tB,je,Ve,Xe,new q),t.normal.dot(g.direction)>0&&t.normal.multiplyScalar(-1));const a={a:i,b:o,c:e,normal:new q,materialIndex:0};Kg.getNormal(oB,eB,tB,a.normal),t.face=a}return t}class aB extends PI{constructor(A=1,I=1,g=1,C=1,B=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:B,depthSegments:E};const i=this;C=Math.floor(C),B=Math.floor(B),E=Math.floor(E);const o=[],e=[],t=[],a=[];let s=0,D=0;n("z","y","x",-1,-1,g,I,A,E,B,0),n("z","y","x",1,-1,g,I,-A,E,B,1),n("x","z","y",1,1,A,g,I,C,E,2),n("x","z","y",1,-1,A,g,-I,C,E,3),n("x","y","z",1,-1,A,I,g,C,B,4),n("x","y","z",-1,-1,A,I,-g,C,B,5),this.setIndex(o),this.setAttribute("position",new WI(e,3)),this.setAttribute("normal",new WI(t,3)),this.setAttribute("uv",new WI(a,2));function n(w,S,h,l,G,M,p,N,K,H,y){const c=M/K,m=p/H,x=M/2,R=p/2,v=N/2,P=K+1,V=H+1;let gA=0,Z=0;const AA=new q;for(let BA=0;BA<V;BA++){const FA=BA*m-R;for(let OA=0;OA<P;OA++){const iI=OA*c-x;AA[w]=iI*l,AA[S]=FA*G,AA[h]=v,e.push(AA.x,AA.y,AA.z),AA[w]=0,AA[S]=0,AA[h]=N>0?1:-1,t.push(AA.x,AA.y,AA.z),a.push(OA/K),a.push(1-BA/H),gA+=1}}for(let BA=0;BA<H;BA++)for(let FA=0;FA<K;FA++){const OA=s+FA+P*BA,iI=s+FA+P*(BA+1),W=s+(FA+1)+P*(BA+1),CA=s+(FA+1)+P*BA;o.push(OA,iI,CA),o.push(iI,W,CA),Z+=6}i.addGroup(D,Z,y),D+=Z,s+=gA}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new aB(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function sB(Q){const A={};for(const I in Q){A[I]={};for(const g in Q[I]){const C=Q[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function jI(Q){const A={};for(let I=0;I<Q.length;I++){const g=sB(Q[I]);for(const C in g)A[C]=g[C]}return A}function Dh(Q){const A=[];for(let I=0;I<Q.length;I++)A.push(Q[I].clone());return A}function ze(Q){const A=Q.getRenderTarget();return A===null?Q.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:zA.workingColorSpace}const hh={clone:sB,merge:jI};var rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wg extends cg{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rh,this.fragmentShader=Sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=sB(A.uniforms),this.uniformsGroups=Dh(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const B=this.uniforms[C].value;B&&B.isTexture?I.uniforms[C]={type:"t",value:B.toJSON(A).uuid}:B&&B.isColor?I.uniforms[C]={type:"c",value:B.getHex()}:B&&B.isVector2?I.uniforms[C]={type:"v2",value:B.toArray()}:B&&B.isVector3?I.uniforms[C]={type:"v3",value:B.toArray()}:B&&B.isVector4?I.uniforms[C]={type:"v4",value:B.toArray()}:B&&B.isMatrix3?I.uniforms[C]={type:"m3",value:B.toArray()}:B&&B.isMatrix4?I.uniforms[C]={type:"m4",value:B.toArray()}:I.uniforms[C]={value:B}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class $e extends BI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pA,this.projectionMatrix=new pA,this.projectionMatrixInverse=new pA,this.coordinateSystem=fg}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const aC=new q,At=new JA,It=new JA;class VI extends $e{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=VC*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(dB*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return VC*2*Math.atan(Math.tan(dB*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){aC.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(aC.x,aC.y).multiplyScalar(-A/aC.z),aC.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(aC.x,aC.y).multiplyScalar(-A/aC.z)}getViewSize(A,I){return this.getViewBounds(A,At,It),I.subVectors(It,At)}setViewOffset(A,I,g,C,B,E){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(dB*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,B=-.5*C;const E=this.view;if(this.view!==null&&this.view.enabled){const o=E.fullWidth,e=E.fullHeight;B+=E.offsetX*C/o,I-=E.offsetY*g/e,C*=E.width/o,g*=E.height/e}const i=this.filmOffset;i!==0&&(B+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(B,B+C,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const DB=-90,hB=1;class nh extends BI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const C=new VI(DB,hB,A,I);C.layers=this.layers,this.add(C);const B=new VI(DB,hB,A,I);B.layers=this.layers,this.add(B);const E=new VI(DB,hB,A,I);E.layers=this.layers,this.add(E);const i=new VI(DB,hB,A,I);i.layers=this.layers,this.add(i);const o=new VI(DB,hB,A,I);o.layers=this.layers,this.add(o);const e=new VI(DB,hB,A,I);e.layers=this.layers,this.add(e)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,C,B,E,i,o]=I;for(const e of I)this.remove(e);if(A===fg)g.up.set(0,1,0),g.lookAt(1,0,0),C.up.set(0,1,0),C.lookAt(-1,0,0),B.up.set(0,0,-1),B.lookAt(0,1,0),E.up.set(0,0,1),E.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===FQ)g.up.set(0,-1,0),g.lookAt(-1,0,0),C.up.set(0,-1,0),C.lookAt(1,0,0),B.up.set(0,0,1),B.lookAt(0,1,0),E.up.set(0,0,-1),E.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const e of I)this.add(e),e.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:C}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[B,E,i,o,e,t]=this.children,a=A.getRenderTarget(),s=A.getActiveCubeFace(),D=A.getActiveMipmapLevel(),n=A.xr.enabled;A.xr.enabled=!1;const w=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,C),A.render(I,B),A.setRenderTarget(g,1,C),A.render(I,E),A.setRenderTarget(g,2,C),A.render(I,i),A.setRenderTarget(g,3,C),A.render(I,o),A.setRenderTarget(g,4,C),A.render(I,e),g.texture.generateMipmaps=w,A.setRenderTarget(g,5,C),A.render(I,t),A.setRenderTarget(a,s,D),A.xr.enabled=n,g.texture.needsPMREMUpdate=!0}}class gt extends KI{constructor(A,I,g,C,B,E,i,o,e,t){A=A!==void 0?A:[],I=I!==void 0?I:bC,super(A,I,g,C,B,E,i,o,e,t),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class wh extends kC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];this.texture=new gt(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:qI}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},C=new aB(5,5,5),B=new Wg({name:"CubemapFromEquirect",uniforms:sB(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:Ag,blending:IC});B.uniforms.tEquirect.value=I;const E=new cI(C,B),i=I.minFilter;return I.minFilter===yg&&(I.minFilter=qI),new nh(1,10,this).update(A,E),I.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,I,g,C){const B=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(I,g,C);A.setRenderTarget(B)}}const ii=new q,ch=new q,Gh=new YA;class KC{constructor(A=new q(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=ii.subVectors(g,I).cross(ch.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(ii),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const B=-(A.start.dot(this.normal)+this.constant)/C;return B<0||B>1?null:I.copy(A.start).addScaledVector(g,B)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||Gh.getNormalMatrix(A),C=this.coplanarPoint(ii).applyMatrix4(A),B=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(B),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const NC=new Ug,VQ=new q;class oi{constructor(A=new KC,I=new KC,g=new KC,C=new KC,B=new KC,E=new KC){this.planes=[A,I,g,C,B,E]}set(A,I,g,C,B,E){const i=this.planes;return i[0].copy(A),i[1].copy(I),i[2].copy(g),i[3].copy(C),i[4].copy(B),i[5].copy(E),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=fg){const g=this.planes,C=A.elements,B=C[0],E=C[1],i=C[2],o=C[3],e=C[4],t=C[5],a=C[6],s=C[7],D=C[8],n=C[9],w=C[10],S=C[11],h=C[12],l=C[13],G=C[14],M=C[15];if(g[0].setComponents(o-B,s-e,S-D,M-h).normalize(),g[1].setComponents(o+B,s+e,S+D,M+h).normalize(),g[2].setComponents(o+E,s+t,S+n,M+l).normalize(),g[3].setComponents(o-E,s-t,S-n,M-l).normalize(),g[4].setComponents(o-i,s-a,S-w,M-G).normalize(),I===fg)g[5].setComponents(o+i,s+a,S+w,M+G).normalize();else if(I===FQ)g[5].setComponents(i,a,w,G).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),NC.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),NC.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(NC)}intersectsSprite(A){return NC.center.set(0,0,0),NC.radius=.7071067811865476,NC.applyMatrix4(A.matrixWorld),this.intersectsSphere(NC)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let B=0;B<6;B++)if(I[B].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(VQ.x=C.normal.x>0?A.max.x:A.min.x,VQ.y=C.normal.y>0?A.max.y:A.min.y,VQ.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(VQ)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ct(){let Q=null,A=!1,I=null,g=null;function C(B,E){I(B,E),g=Q.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=Q.requestAnimationFrame(C),A=!0)},stop:function(){Q.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(B){I=B},setContext:function(B){Q=B}}}function lh(Q){const A=new WeakMap;function I(i,o){const e=i.array,t=i.usage,a=e.byteLength,s=Q.createBuffer();Q.bindBuffer(o,s),Q.bufferData(o,e,t),i.onUploadCallback();let D;if(e instanceof Float32Array)D=Q.FLOAT;else if(e instanceof Uint16Array)i.isFloat16BufferAttribute?D=Q.HALF_FLOAT:D=Q.UNSIGNED_SHORT;else if(e instanceof Int16Array)D=Q.SHORT;else if(e instanceof Uint32Array)D=Q.UNSIGNED_INT;else if(e instanceof Int32Array)D=Q.INT;else if(e instanceof Int8Array)D=Q.BYTE;else if(e instanceof Uint8Array)D=Q.UNSIGNED_BYTE;else if(e instanceof Uint8ClampedArray)D=Q.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+e);return{buffer:s,type:D,bytesPerElement:e.BYTES_PER_ELEMENT,version:i.version,size:a}}function g(i,o,e){const t=o.array,a=o._updateRange,s=o.updateRanges;if(Q.bindBuffer(e,i),a.count===-1&&s.length===0&&Q.bufferSubData(e,0,t),s.length!==0){for(let D=0,n=s.length;D<n;D++){const w=s[D];Q.bufferSubData(e,w.start*t.BYTES_PER_ELEMENT,t,w.start,w.count)}o.clearUpdateRanges()}a.count!==-1&&(Q.bufferSubData(e,a.offset*t.BYTES_PER_ELEMENT,t,a.offset,a.count),a.count=-1),o.onUploadCallback()}function C(i){return i.isInterleavedBufferAttribute&&(i=i.data),A.get(i)}function B(i){i.isInterleavedBufferAttribute&&(i=i.data);const o=A.get(i);o&&(Q.deleteBuffer(o.buffer),A.delete(i))}function E(i,o){if(i.isGLBufferAttribute){const t=A.get(i);(!t||t.version<i.version)&&A.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version});return}i.isInterleavedBufferAttribute&&(i=i.data);const e=A.get(i);if(e===void 0)A.set(i,I(i,o));else if(e.version<i.version){if(e.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");g(e.buffer,i,o),e.version=i.version}}return{get:C,remove:B,update:E}}class XQ extends PI{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const B=A/2,E=I/2,i=Math.floor(g),o=Math.floor(C),e=i+1,t=o+1,a=A/i,s=I/o,D=[],n=[],w=[],S=[];for(let h=0;h<t;h++){const l=h*s-E;for(let G=0;G<e;G++){const M=G*a-B;n.push(M,-l,0),w.push(0,0,1),S.push(G/i),S.push(1-h/o)}}for(let h=0;h<o;h++)for(let l=0;l<i;l++){const G=l+e*h,M=l+e*(h+1),p=l+1+e*(h+1),N=l+1+e*h;D.push(G,M,N),D.push(M,p,N)}this.setIndex(D),this.setAttribute("position",new WI(n,3)),this.setAttribute("normal",new WI(w,3)),this.setAttribute("uv",new WI(S,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new XQ(A.width,A.height,A.widthSegments,A.heightSegments)}}var kh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yh=`#ifdef USE_ALPHAHASH
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
#endif`,Mh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jh=`#ifdef USE_AOMAP
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
#endif`,Fh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rh=`#ifdef USE_BATCHING
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
#endif`,ph=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lh=`#ifdef USE_IRIDESCENCE
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
#endif`,Hh=`#ifdef USE_BUMPMAP
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
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vh=`#define PI 3.141592653589793
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
} // validated`,Zh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wh=`vec3 transformedNormal = objectNormal;
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
#endif`,Ph=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`
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
}`,Ar=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Ir=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gr=`#ifdef USE_ENVMAP
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
#endif`,Cr=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Br=`#ifdef USE_ENVMAP
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
#endif`,Qr=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Er=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ir=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,or=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,er=`#ifdef USE_GRADIENTMAP
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
}`,tr=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ar=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sr=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dr=`uniform bool receiveShadow;
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
#endif`,hr=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,rr=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sr=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nr=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wr=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cr=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Gr=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,lr=`
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
#endif`,kr=`#if defined( RE_IndirectDiffuse )
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
#endif`,yr=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mr=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ur=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kr=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nr=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jr=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fr=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rr=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pr=`#if defined( USE_POINTS_UV )
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
#endif`,qr=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dr=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yr=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lr=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hr=`#ifdef USE_MORPHNORMALS
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
#endif`,ur=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
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
#endif`,mr=`#ifdef USE_MORPHTARGETS
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
#endif`,fr=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tr=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xr=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,br=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Or=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_r=`#ifdef USE_NORMALMAP
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
#endif`,vr=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zr=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wr=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pr=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jr=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vr=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xr=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zr=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$r=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,BS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ES=`float getShadowMask() {
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
}`,iS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oS=`#ifdef USE_SKINNING
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
#endif`,eS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tS=`#ifdef USE_SKINNING
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
#endif`,aS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hS=`#ifndef saturate
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rS=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SS=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kS=`uniform sampler2D t2D;
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
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,JS=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
}`,FS=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,RS=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YS=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LS=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,HS=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,uS=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,mS=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,fS=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,TS=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,xS=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,bS=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OS=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,_S=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,vS=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,ZS=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,WS=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,PS=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,jS=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,VS=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,XS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,zS=`uniform vec3 color;
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
}`,$S=`uniform float rotation;
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
}`,An=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,LA={alphahash_fragment:kh,alphahash_pars_fragment:yh,alphamap_fragment:Mh,alphamap_pars_fragment:Uh,alphatest_fragment:Kh,alphatest_pars_fragment:Nh,aomap_fragment:Jh,aomap_pars_fragment:Fh,batching_pars_vertex:Rh,batching_vertex:ph,begin_vertex:qh,beginnormal_vertex:dh,bsdfs:Yh,iridescence_fragment:Lh,bumpmap_pars_fragment:Hh,clipping_planes_fragment:uh,clipping_planes_pars_fragment:mh,clipping_planes_pars_vertex:fh,clipping_planes_vertex:Th,color_fragment:xh,color_pars_fragment:bh,color_pars_vertex:Oh,color_vertex:_h,common:vh,cube_uv_reflection_fragment:Zh,defaultnormal_vertex:Wh,displacementmap_pars_vertex:Ph,displacementmap_vertex:jh,emissivemap_fragment:Vh,emissivemap_pars_fragment:Xh,colorspace_fragment:zh,colorspace_pars_fragment:$h,envmap_fragment:Ar,envmap_common_pars_fragment:Ir,envmap_pars_fragment:gr,envmap_pars_vertex:Cr,envmap_physical_pars_fragment:hr,envmap_vertex:Br,fog_vertex:Qr,fog_pars_vertex:Er,fog_fragment:ir,fog_pars_fragment:or,gradientmap_pars_fragment:er,lightmap_pars_fragment:tr,lights_lambert_fragment:ar,lights_lambert_pars_fragment:sr,lights_pars_begin:Dr,lights_toon_fragment:rr,lights_toon_pars_fragment:Sr,lights_phong_fragment:nr,lights_phong_pars_fragment:wr,lights_physical_fragment:cr,lights_physical_pars_fragment:Gr,lights_fragment_begin:lr,lights_fragment_maps:kr,lights_fragment_end:yr,logdepthbuf_fragment:Mr,logdepthbuf_pars_fragment:Ur,logdepthbuf_pars_vertex:Kr,logdepthbuf_vertex:Nr,map_fragment:Jr,map_pars_fragment:Fr,map_particle_fragment:Rr,map_particle_pars_fragment:pr,metalnessmap_fragment:qr,metalnessmap_pars_fragment:dr,morphinstance_vertex:Yr,morphcolor_vertex:Lr,morphnormal_vertex:Hr,morphtarget_pars_vertex:ur,morphtarget_vertex:mr,normal_fragment_begin:fr,normal_fragment_maps:Tr,normal_pars_fragment:xr,normal_pars_vertex:br,normal_vertex:Or,normalmap_pars_fragment:_r,clearcoat_normal_fragment_begin:vr,clearcoat_normal_fragment_maps:Zr,clearcoat_pars_fragment:Wr,iridescence_pars_fragment:Pr,opaque_fragment:jr,packing:Vr,premultiplied_alpha_fragment:Xr,project_vertex:zr,dithering_fragment:$r,dithering_pars_fragment:AS,roughnessmap_fragment:IS,roughnessmap_pars_fragment:gS,shadowmap_pars_fragment:CS,shadowmap_pars_vertex:BS,shadowmap_vertex:QS,shadowmask_pars_fragment:ES,skinbase_vertex:iS,skinning_pars_vertex:oS,skinning_vertex:eS,skinnormal_vertex:tS,specularmap_fragment:aS,specularmap_pars_fragment:sS,tonemapping_fragment:DS,tonemapping_pars_fragment:hS,transmission_fragment:rS,transmission_pars_fragment:SS,uv_pars_fragment:nS,uv_pars_vertex:wS,uv_vertex:cS,worldpos_vertex:GS,background_vert:lS,background_frag:kS,backgroundCube_vert:yS,backgroundCube_frag:MS,cube_vert:US,cube_frag:KS,depth_vert:NS,depth_frag:JS,distanceRGBA_vert:FS,distanceRGBA_frag:RS,equirect_vert:pS,equirect_frag:qS,linedashed_vert:dS,linedashed_frag:YS,meshbasic_vert:LS,meshbasic_frag:HS,meshlambert_vert:uS,meshlambert_frag:mS,meshmatcap_vert:fS,meshmatcap_frag:TS,meshnormal_vert:xS,meshnormal_frag:bS,meshphong_vert:OS,meshphong_frag:_S,meshphysical_vert:vS,meshphysical_frag:ZS,meshtoon_vert:WS,meshtoon_frag:PS,points_vert:jS,points_frag:VS,shadow_vert:XS,shadow_frag:zS,sprite_vert:$S,sprite_frag:An},iA={common:{diffuse:{value:new kA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new YA},alphaMap:{value:null},alphaMapTransform:{value:new YA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new YA}},envmap:{envMap:{value:null},envMapRotation:{value:new YA},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new YA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new YA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new YA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new YA},normalScale:{value:new JA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new YA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new YA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new YA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new YA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new YA},alphaTest:{value:0},uvTransform:{value:new YA}},sprite:{diffuse:{value:new kA(16777215)},opacity:{value:1},center:{value:new JA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new YA},alphaMap:{value:null},alphaMapTransform:{value:new YA},alphaTest:{value:0}}},Ng={basic:{uniforms:jI([iA.common,iA.specularmap,iA.envmap,iA.aomap,iA.lightmap,iA.fog]),vertexShader:LA.meshbasic_vert,fragmentShader:LA.meshbasic_frag},lambert:{uniforms:jI([iA.common,iA.specularmap,iA.envmap,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.fog,iA.lights,{emissive:{value:new kA(0)}}]),vertexShader:LA.meshlambert_vert,fragmentShader:LA.meshlambert_frag},phong:{uniforms:jI([iA.common,iA.specularmap,iA.envmap,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.fog,iA.lights,{emissive:{value:new kA(0)},specular:{value:new kA(1118481)},shininess:{value:30}}]),vertexShader:LA.meshphong_vert,fragmentShader:LA.meshphong_frag},standard:{uniforms:jI([iA.common,iA.envmap,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.roughnessmap,iA.metalnessmap,iA.fog,iA.lights,{emissive:{value:new kA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:LA.meshphysical_vert,fragmentShader:LA.meshphysical_frag},toon:{uniforms:jI([iA.common,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.gradientmap,iA.fog,iA.lights,{emissive:{value:new kA(0)}}]),vertexShader:LA.meshtoon_vert,fragmentShader:LA.meshtoon_frag},matcap:{uniforms:jI([iA.common,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.fog,{matcap:{value:null}}]),vertexShader:LA.meshmatcap_vert,fragmentShader:LA.meshmatcap_frag},points:{uniforms:jI([iA.points,iA.fog]),vertexShader:LA.points_vert,fragmentShader:LA.points_frag},dashed:{uniforms:jI([iA.common,iA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:LA.linedashed_vert,fragmentShader:LA.linedashed_frag},depth:{uniforms:jI([iA.common,iA.displacementmap]),vertexShader:LA.depth_vert,fragmentShader:LA.depth_frag},normal:{uniforms:jI([iA.common,iA.bumpmap,iA.normalmap,iA.displacementmap,{opacity:{value:1}}]),vertexShader:LA.meshnormal_vert,fragmentShader:LA.meshnormal_frag},sprite:{uniforms:jI([iA.sprite,iA.fog]),vertexShader:LA.sprite_vert,fragmentShader:LA.sprite_frag},background:{uniforms:{uvTransform:{value:new YA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:LA.background_vert,fragmentShader:LA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new YA}},vertexShader:LA.backgroundCube_vert,fragmentShader:LA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:LA.cube_vert,fragmentShader:LA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:LA.equirect_vert,fragmentShader:LA.equirect_frag},distanceRGBA:{uniforms:jI([iA.common,iA.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:LA.distanceRGBA_vert,fragmentShader:LA.distanceRGBA_frag},shadow:{uniforms:jI([iA.lights,iA.fog,{color:{value:new kA(0)},opacity:{value:1}}]),vertexShader:LA.shadow_vert,fragmentShader:LA.shadow_frag}};Ng.physical={uniforms:jI([Ng.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new YA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new YA},clearcoatNormalScale:{value:new JA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new YA},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new YA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new YA},sheen:{value:0},sheenColor:{value:new kA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new YA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new YA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new YA},transmissionSamplerSize:{value:new JA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new YA},attenuationDistance:{value:0},attenuationColor:{value:new kA(0)},specularColor:{value:new kA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new YA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new YA},anisotropyVector:{value:new JA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new YA}}]),vertexShader:LA.meshphysical_vert,fragmentShader:LA.meshphysical_frag};const zQ={r:0,b:0,g:0},JC=new ZI,In=new pA;function gn(Q,A,I,g,C,B,E){const i=new kA(0);let o=B===!0?0:1,e,t,a=null,s=0,D=null;function n(l){let G=l.isScene===!0?l.background:null;return G&&G.isTexture&&(G=(l.backgroundBlurriness>0?I:A).get(G)),G}function w(l){let G=!1;const M=n(l);M===null?h(i,o):M&&M.isColor&&(h(M,1),G=!0);const p=Q.xr.getEnvironmentBlendMode();p==="additive"?g.buffers.color.setClear(0,0,0,1,E):p==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,E),(Q.autoClear||G)&&Q.clear(Q.autoClearColor,Q.autoClearDepth,Q.autoClearStencil)}function S(l,G){const M=n(G);M&&(M.isCubeTexture||M.mapping===lQ)?(t===void 0&&(t=new cI(new aB(1,1,1),new Wg({name:"BackgroundCubeMaterial",uniforms:sB(Ng.backgroundCube.uniforms),vertexShader:Ng.backgroundCube.vertexShader,fragmentShader:Ng.backgroundCube.fragmentShader,side:Ag,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),t.geometry.deleteAttribute("uv"),t.onBeforeRender=function(p,N,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(t.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(t)),JC.copy(G.backgroundRotation),JC.x*=-1,JC.y*=-1,JC.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(JC.y*=-1,JC.z*=-1),t.material.uniforms.envMap.value=M,t.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,t.material.uniforms.backgroundBlurriness.value=G.backgroundBlurriness,t.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,t.material.uniforms.backgroundRotation.value.setFromMatrix4(In.makeRotationFromEuler(JC)),t.material.toneMapped=zA.getTransfer(M.colorSpace)!==eI,(a!==M||s!==M.version||D!==Q.toneMapping)&&(t.material.needsUpdate=!0,a=M,s=M.version,D=Q.toneMapping),t.layers.enableAll(),l.unshift(t,t.geometry,t.material,0,0,null)):M&&M.isTexture&&(e===void 0&&(e=new cI(new XQ(2,2),new Wg({name:"BackgroundMaterial",uniforms:sB(Ng.background.uniforms),vertexShader:Ng.background.vertexShader,fragmentShader:Ng.background.fragmentShader,side:mg,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),Object.defineProperty(e.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(e)),e.material.uniforms.t2D.value=M,e.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,e.material.toneMapped=zA.getTransfer(M.colorSpace)!==eI,M.matrixAutoUpdate===!0&&M.updateMatrix(),e.material.uniforms.uvTransform.value.copy(M.matrix),(a!==M||s!==M.version||D!==Q.toneMapping)&&(e.material.needsUpdate=!0,a=M,s=M.version,D=Q.toneMapping),e.layers.enableAll(),l.unshift(e,e.geometry,e.material,0,0,null))}function h(l,G){l.getRGB(zQ,ze(Q)),g.buffers.color.setClear(zQ.r,zQ.g,zQ.b,G,E)}return{getClearColor:function(){return i},setClearColor:function(l,G=1){i.set(l),o=G,h(i,o)},getClearAlpha:function(){return o},setClearAlpha:function(l){o=l,h(i,o)},render:w,addToRenderList:S}}function Cn(Q,A){const I=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),g={},C=s(null);let B=C,E=!1;function i(c,m,x,R,v){let P=!1;const V=a(R,x,m);B!==V&&(B=V,e(B.object)),P=D(c,R,x,v),P&&n(c,R,x,v),v!==null&&A.update(v,Q.ELEMENT_ARRAY_BUFFER),(P||E)&&(E=!1,M(c,m,x,R),v!==null&&Q.bindBuffer(Q.ELEMENT_ARRAY_BUFFER,A.get(v).buffer))}function o(){return Q.createVertexArray()}function e(c){return Q.bindVertexArray(c)}function t(c){return Q.deleteVertexArray(c)}function a(c,m,x){const R=x.wireframe===!0;let v=g[c.id];v===void 0&&(v={},g[c.id]=v);let P=v[m.id];P===void 0&&(P={},v[m.id]=P);let V=P[R];return V===void 0&&(V=s(o()),P[R]=V),V}function s(c){const m=[],x=[],R=[];for(let v=0;v<I;v++)m[v]=0,x[v]=0,R[v]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:m,enabledAttributes:x,attributeDivisors:R,object:c,attributes:{},index:null}}function D(c,m,x,R){const v=B.attributes,P=m.attributes;let V=0;const gA=x.getAttributes();for(const Z in gA)if(gA[Z].location>=0){const AA=v[Z];let BA=P[Z];if(BA===void 0&&(Z==="instanceMatrix"&&c.instanceMatrix&&(BA=c.instanceMatrix),Z==="instanceColor"&&c.instanceColor&&(BA=c.instanceColor)),AA===void 0||AA.attribute!==BA||BA&&AA.data!==BA.data)return!0;V++}return B.attributesNum!==V||B.index!==R}function n(c,m,x,R){const v={},P=m.attributes;let V=0;const gA=x.getAttributes();for(const Z in gA)if(gA[Z].location>=0){let AA=P[Z];AA===void 0&&(Z==="instanceMatrix"&&c.instanceMatrix&&(AA=c.instanceMatrix),Z==="instanceColor"&&c.instanceColor&&(AA=c.instanceColor));const BA={};BA.attribute=AA,AA&&AA.data&&(BA.data=AA.data),v[Z]=BA,V++}B.attributes=v,B.attributesNum=V,B.index=R}function w(){const c=B.newAttributes;for(let m=0,x=c.length;m<x;m++)c[m]=0}function S(c){h(c,0)}function h(c,m){const x=B.newAttributes,R=B.enabledAttributes,v=B.attributeDivisors;x[c]=1,R[c]===0&&(Q.enableVertexAttribArray(c),R[c]=1),v[c]!==m&&(Q.vertexAttribDivisor(c,m),v[c]=m)}function l(){const c=B.newAttributes,m=B.enabledAttributes;for(let x=0,R=m.length;x<R;x++)m[x]!==c[x]&&(Q.disableVertexAttribArray(x),m[x]=0)}function G(c,m,x,R,v,P,V){V===!0?Q.vertexAttribIPointer(c,m,x,v,P):Q.vertexAttribPointer(c,m,x,R,v,P)}function M(c,m,x,R){w();const v=R.attributes,P=x.getAttributes(),V=m.defaultAttributeValues;for(const gA in P){const Z=P[gA];if(Z.location>=0){let AA=v[gA];if(AA===void 0&&(gA==="instanceMatrix"&&c.instanceMatrix&&(AA=c.instanceMatrix),gA==="instanceColor"&&c.instanceColor&&(AA=c.instanceColor)),AA!==void 0){const BA=AA.normalized,FA=AA.itemSize,OA=A.get(AA);if(OA===void 0)continue;const iI=OA.buffer,W=OA.type,CA=OA.bytesPerElement,SA=W===Q.INT||W===Q.UNSIGNED_INT||AA.gpuType===bo;if(AA.isInterleavedBufferAttribute){const oA=AA.data,_A=oA.stride,vA=AA.offset;if(oA.isInstancedInterleavedBuffer){for(let f=0;f<Z.locationSize;f++)h(Z.location+f,oA.meshPerAttribute);c.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=oA.meshPerAttribute*oA.count)}else for(let f=0;f<Z.locationSize;f++)S(Z.location+f);Q.bindBuffer(Q.ARRAY_BUFFER,iI);for(let f=0;f<Z.locationSize;f++)G(Z.location+f,FA/Z.locationSize,W,BA,_A*CA,(vA+FA/Z.locationSize*f)*CA,SA)}else{if(AA.isInstancedBufferAttribute){for(let oA=0;oA<Z.locationSize;oA++)h(Z.location+oA,AA.meshPerAttribute);c.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=AA.meshPerAttribute*AA.count)}else for(let oA=0;oA<Z.locationSize;oA++)S(Z.location+oA);Q.bindBuffer(Q.ARRAY_BUFFER,iI);for(let oA=0;oA<Z.locationSize;oA++)G(Z.location+oA,FA/Z.locationSize,W,BA,FA*CA,FA/Z.locationSize*oA*CA,SA)}}else if(V!==void 0){const BA=V[gA];if(BA!==void 0)switch(BA.length){case 2:Q.vertexAttrib2fv(Z.location,BA);break;case 3:Q.vertexAttrib3fv(Z.location,BA);break;case 4:Q.vertexAttrib4fv(Z.location,BA);break;default:Q.vertexAttrib1fv(Z.location,BA)}}}}l()}function p(){H();for(const c in g){const m=g[c];for(const x in m){const R=m[x];for(const v in R)t(R[v].object),delete R[v];delete m[x]}delete g[c]}}function N(c){if(g[c.id]===void 0)return;const m=g[c.id];for(const x in m){const R=m[x];for(const v in R)t(R[v].object),delete R[v];delete m[x]}delete g[c.id]}function K(c){for(const m in g){const x=g[m];if(x[c.id]===void 0)continue;const R=x[c.id];for(const v in R)t(R[v].object),delete R[v];delete x[c.id]}}function H(){y(),E=!0,B!==C&&(B=C,e(B.object))}function y(){C.geometry=null,C.program=null,C.wireframe=!1}return{setup:i,reset:H,resetDefaultState:y,dispose:p,releaseStatesOfGeometry:N,releaseStatesOfProgram:K,initAttributes:w,enableAttribute:S,disableUnusedAttributes:l}}function Bn(Q,A,I){let g;function C(e){g=e}function B(e,t){Q.drawArrays(g,e,t),I.update(t,g,1)}function E(e,t,a){a!==0&&(Q.drawArraysInstanced(g,e,t,a),I.update(t,g,a))}function i(e,t,a){if(a===0)return;const s=A.get("WEBGL_multi_draw");if(s===null)for(let D=0;D<a;D++)this.render(e[D],t[D]);else{s.multiDrawArraysWEBGL(g,e,0,t,0,a);let D=0;for(let n=0;n<a;n++)D+=t[n];I.update(D,g,1)}}function o(e,t,a,s){if(a===0)return;const D=A.get("WEBGL_multi_draw");if(D===null)for(let n=0;n<e.length;n++)E(e[n],t[n],s[n]);else{D.multiDrawArraysInstancedWEBGL(g,e,0,t,0,s,0,a);let n=0;for(let w=0;w<a;w++)n+=t[w];for(let w=0;w<s.length;w++)I.update(n,g,s[w])}}this.setMode=C,this.render=B,this.renderInstances=E,this.renderMultiDraw=i,this.renderMultiDrawInstances=o}function Qn(Q,A,I,g){let C;function B(){if(C!==void 0)return C;if(A.has("EXT_texture_filter_anisotropic")===!0){const N=A.get("EXT_texture_filter_anisotropic");C=Q.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else C=0;return C}function E(N){return!(N!==Dg&&g.convert(N)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_FORMAT))}function i(N){const K=N===CC&&(A.has("EXT_color_buffer_half_float")||A.has("EXT_color_buffer_float"));return!(N!==Mg&&g.convert(N)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==gg&&!K)}function o(N){if(N==="highp"){if(Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.HIGH_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.MEDIUM_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let e=I.precision!==void 0?I.precision:"highp";const t=o(e);t!==e&&(console.warn("THREE.WebGLRenderer:",e,"not supported, using",t,"instead."),e=t);const a=I.logarithmicDepthBuffer===!0,s=Q.getParameter(Q.MAX_TEXTURE_IMAGE_UNITS),D=Q.getParameter(Q.MAX_VERTEX_TEXTURE_IMAGE_UNITS),n=Q.getParameter(Q.MAX_TEXTURE_SIZE),w=Q.getParameter(Q.MAX_CUBE_MAP_TEXTURE_SIZE),S=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),h=Q.getParameter(Q.MAX_VERTEX_UNIFORM_VECTORS),l=Q.getParameter(Q.MAX_VARYING_VECTORS),G=Q.getParameter(Q.MAX_FRAGMENT_UNIFORM_VECTORS),M=D>0,p=Q.getParameter(Q.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:B,getMaxPrecision:o,textureFormatReadable:E,textureTypeReadable:i,precision:e,logarithmicDepthBuffer:a,maxTextures:s,maxVertexTextures:D,maxTextureSize:n,maxCubemapSize:w,maxAttributes:S,maxVertexUniforms:h,maxVaryings:l,maxFragmentUniforms:G,vertexTextures:M,maxSamples:p}}function En(Q){const A=this;let I=null,g=0,C=!1,B=!1;const E=new KC,i=new YA,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s){const D=a.length!==0||s||g!==0||C;return C=s,g=a.length,D},this.beginShadows=function(){B=!0,t(null)},this.endShadows=function(){B=!1},this.setGlobalState=function(a,s){I=t(a,s,0)},this.setState=function(a,s,D){const n=a.clippingPlanes,w=a.clipIntersection,S=a.clipShadows,h=Q.get(a);if(!C||n===null||n.length===0||B&&!S)B?t(null):e();else{const l=B?0:g,G=l*4;let M=h.clippingState||null;o.value=M,M=t(n,s,G,D);for(let p=0;p!==G;++p)M[p]=I[p];h.clippingState=M,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=l}};function e(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function t(a,s,D,n){const w=a!==null?a.length:0;let S=null;if(w!==0){if(S=o.value,n!==!0||S===null){const h=D+w*4,l=s.matrixWorldInverse;i.getNormalMatrix(l),(S===null||S.length<h)&&(S=new Float32Array(h));for(let G=0,M=D;G!==w;++G,M+=4)E.copy(a[G]).applyMatrix4(l,i),E.normal.toArray(S,M),S[M+3]=E.constant}o.value=S,o.needsUpdate=!0}return A.numPlanes=w,A.numIntersection=0,S}}function on(Q){let A=new WeakMap;function I(E,i){return i===GQ?E.mapping=bC:i===pE&&(E.mapping=OC),E}function g(E){if(E&&E.isTexture){const i=E.mapping;if(i===GQ||i===pE)if(A.has(E)){const o=A.get(E).texture;return I(o,E.mapping)}else{const o=E.image;if(o&&o.height>0){const e=new wh(o.height);return e.fromEquirectangularTexture(Q,E),A.set(E,e),E.addEventListener("dispose",C),I(e.texture,E.mapping)}else return null}}return E}function C(E){const i=E.target;i.removeEventListener("dispose",C);const o=A.get(i);o!==void 0&&(A.delete(i),o.dispose())}function B(){A=new WeakMap}return{get:g,dispose:B}}class ei extends $e{constructor(A=-1,I=1,g=1,C=-1,B=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=B,this.far=E,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,B,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let B=g-A,E=g+A,i=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;B+=e*this.view.offsetX,E=B+e*this.view.width,i-=t*this.view.offsetY,o=i-t*this.view.height}this.projectionMatrix.makeOrthographic(B,E,i,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const rB=4,Bt=[.125,.215,.35,.446,.526,.582],FC=20,ti=new ei,Qt=new kA;let ai=null,si=0,Di=0,hi=!1;const RC=(1+Math.sqrt(5))/2,SB=1/RC,Et=[new q(-RC,SB,0),new q(RC,SB,0),new q(-SB,0,RC),new q(SB,0,RC),new q(0,RC,-SB),new q(0,RC,SB),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class it{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){ai=this._renderer.getRenderTarget(),si=this._renderer.getActiveCubeFace(),Di=this._renderer.getActiveMipmapLevel(),hi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const B=this._allocateTargets();return B.depthBuffer=!0,this._sceneToCubeUV(A,g,C,B),I>0&&this._blur(B,0,0,I),this._applyPMREM(B),this._cleanup(B),B}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tt(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=et(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(ai,si,Di),this._renderer.xr.enabled=hi,A.scissorTest=!1,$Q(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===bC||A.mapping===OC?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),ai=this._renderer.getRenderTarget(),si=this._renderer.getActiveCubeFace(),Di=this._renderer.getActiveMipmapLevel(),hi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:qI,minFilter:qI,generateMipmaps:!1,type:CC,format:Dg,colorSpace:UI,depthBuffer:!1},C=ot(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ot(A,I,g);const{_lodMax:B}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=en(B)),this._blurMaterial=tn(B,A,I)}return C}_compileMaterial(A){const I=new cI(this._lodPlanes[0],A);this._renderer.compile(I,ti)}_sceneToCubeUV(A,I,g,C){const B=new VI(90,1,I,g),E=[1,-1,1,1,1,1],i=[1,1,1,-1,-1,-1],o=this._renderer,e=o.autoClear,t=o.toneMapping;o.getClearColor(Qt),o.toneMapping=gC,o.autoClear=!1;const a=new tC({name:"PMREM.Background",side:Ag,depthWrite:!1,depthTest:!1}),s=new cI(new aB,a);let D=!1;const n=A.background;n?n.isColor&&(a.color.copy(n),A.background=null,D=!0):(a.color.copy(Qt),D=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(B.up.set(0,E[w],0),B.lookAt(i[w],0,0)):S===1?(B.up.set(0,0,E[w]),B.lookAt(0,i[w],0)):(B.up.set(0,E[w],0),B.lookAt(0,0,i[w]));const h=this._cubeSize;$Q(C,S*h,w>2?h:0,h,h),o.setRenderTarget(C),D&&o.render(s,B),o.render(A,B)}s.geometry.dispose(),s.material.dispose(),o.toneMapping=t,o.autoClear=e,A.background=n}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===bC||A.mapping===OC;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=tt()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=et());const B=C?this._cubemapMaterial:this._equirectMaterial,E=new cI(this._lodPlanes[0],B),i=B.uniforms;i.envMap.value=A;const o=this._cubeSize;$Q(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(E,ti)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;const C=this._lodPlanes.length;for(let B=1;B<C;B++){const E=Math.sqrt(this._sigmas[B]*this._sigmas[B]-this._sigmas[B-1]*this._sigmas[B-1]),i=Et[(C-B-1)%Et.length];this._blur(A,B-1,B,E,i)}I.autoClear=g}_blur(A,I,g,C,B){const E=this._pingPongRenderTarget;this._halfBlur(A,E,I,g,C,"latitudinal",B),this._halfBlur(E,A,g,g,C,"longitudinal",B)}_halfBlur(A,I,g,C,B,E,i){const o=this._renderer,e=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const t=3,a=new cI(this._lodPlanes[C],e),s=e.uniforms,D=this._sizeLods[g]-1,n=isFinite(B)?Math.PI/(2*D):2*Math.PI/(2*FC-1),w=B/n,S=isFinite(B)?1+Math.floor(t*w):FC;S>FC&&console.warn(`sigmaRadians, ${B}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${FC}`);const h=[];let l=0;for(let K=0;K<FC;++K){const H=K/w,y=Math.exp(-H*H/2);h.push(y),K===0?l+=y:K<S&&(l+=2*y)}for(let K=0;K<h.length;K++)h[K]=h[K]/l;s.envMap.value=A.texture,s.samples.value=S,s.weights.value=h,s.latitudinal.value=E==="latitudinal",i&&(s.poleAxis.value=i);const{_lodMax:G}=this;s.dTheta.value=n,s.mipInt.value=G-g;const M=this._sizeLods[C],p=3*M*(C>G-rB?C-G+rB:0),N=4*(this._cubeSize-M);$Q(I,p,N,3*M,2*M),o.setRenderTarget(I),o.render(a,ti)}}function en(Q){const A=[],I=[],g=[];let C=Q;const B=Q-rB+1+Bt.length;for(let E=0;E<B;E++){const i=Math.pow(2,C);I.push(i);let o=1/i;E>Q-rB?o=Bt[E-Q+rB-1]:E===0&&(o=0),g.push(o);const e=1/(i-2),t=-e,a=1+e,s=[t,t,a,t,a,a,t,t,a,a,t,a],D=6,n=6,w=3,S=2,h=1,l=new Float32Array(w*n*D),G=new Float32Array(S*n*D),M=new Float32Array(h*n*D);for(let N=0;N<D;N++){const K=N%3*2/3-1,H=N>2?0:-1,y=[K,H,0,K+2/3,H,0,K+2/3,H+1,0,K,H,0,K+2/3,H+1,0,K,H+1,0];l.set(y,w*n*N),G.set(s,S*n*N);const c=[N,N,N,N,N,N];M.set(c,h*n*N)}const p=new PI;p.setAttribute("position",new NI(l,w)),p.setAttribute("uv",new NI(G,S)),p.setAttribute("faceIndex",new NI(M,h)),A.push(p),C>rB&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function ot(Q,A,I){const g=new kC(Q,A,I);return g.texture.mapping=lQ,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function $Q(Q,A,I,g,C){Q.viewport.set(A,I,g,C),Q.scissor.set(A,I,g,C)}function tn(Q,A,I){const g=new Float32Array(FC),C=new q(0,1,0);return new Wg({name:"SphericalGaussianBlur",defines:{n:FC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${Q}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:ri(),fragmentShader:`

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
		`,blending:IC,depthTest:!1,depthWrite:!1})}function et(){return new Wg({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ri(),fragmentShader:`

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
		`,blending:IC,depthTest:!1,depthWrite:!1})}function tt(){return new Wg({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ri(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:IC,depthTest:!1,depthWrite:!1})}function ri(){return`

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
	`}function an(Q){let A=new WeakMap,I=null;function g(i){if(i&&i.isTexture){const o=i.mapping,e=o===GQ||o===pE,t=o===bC||o===OC;if(e||t){let a=A.get(i);const s=a!==void 0?a.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==s)return I===null&&(I=new it(Q)),a=e?I.fromEquirectangular(i,a):I.fromCubemap(i,a),a.texture.pmremVersion=i.pmremVersion,A.set(i,a),a.texture;if(a!==void 0)return a.texture;{const D=i.image;return e&&D&&D.height>0||t&&D&&C(D)?(I===null&&(I=new it(Q)),a=e?I.fromEquirectangular(i):I.fromCubemap(i),a.texture.pmremVersion=i.pmremVersion,A.set(i,a),i.addEventListener("dispose",B),a.texture):null}}}return i}function C(i){let o=0;const e=6;for(let t=0;t<e;t++)i[t]!==void 0&&o++;return o===e}function B(i){const o=i.target;o.removeEventListener("dispose",B);const e=A.get(o);e!==void 0&&(A.delete(o),e.dispose())}function E(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:E}}function sn(Q){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=Q.getExtension("WEBGL_depth_texture")||Q.getExtension("MOZ_WEBGL_depth_texture")||Q.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=Q.getExtension("EXT_texture_filter_anisotropic")||Q.getExtension("MOZ_EXT_texture_filter_anisotropic")||Q.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=Q.getExtension("WEBGL_compressed_texture_s3tc")||Q.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=Q.getExtension("WEBGL_compressed_texture_pvrtc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=Q.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(){I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance"),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture"),I("WEBGL_render_shared_exponent")},get:function(g){const C=I(g);return C===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function Dn(Q,A,I,g){const C={},B=new WeakMap;function E(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const n in s.attributes)A.remove(s.attributes[n]);for(const n in s.morphAttributes){const w=s.morphAttributes[n];for(let S=0,h=w.length;S<h;S++)A.remove(w[S])}s.removeEventListener("dispose",E),delete C[s.id];const D=B.get(s);D&&(A.remove(D),B.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function i(a,s){return C[s.id]===!0||(s.addEventListener("dispose",E),C[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const n in s)A.update(s[n],Q.ARRAY_BUFFER);const D=a.morphAttributes;for(const n in D){const w=D[n];for(let S=0,h=w.length;S<h;S++)A.update(w[S],Q.ARRAY_BUFFER)}}function e(a){const s=[],D=a.index,n=a.attributes.position;let w=0;if(D!==null){const l=D.array;w=D.version;for(let G=0,M=l.length;G<M;G+=3){const p=l[G+0],N=l[G+1],K=l[G+2];s.push(p,N,N,K,K,p)}}else if(n!==void 0){const l=n.array;w=n.version;for(let G=0,M=l.length/3-1;G<M;G+=3){const p=G+0,N=G+1,K=G+2;s.push(p,N,N,K,K,p)}}else return;const S=new(Ne(s)?Ze:ve)(s,1);S.version=w;const h=B.get(a);h&&A.remove(h),B.set(a,S)}function t(a){const s=B.get(a);if(s){const D=a.index;D!==null&&s.version<D.version&&e(a)}else e(a);return B.get(a)}return{get:i,update:o,getWireframeAttribute:t}}function hn(Q,A,I){let g;function C(s){g=s}let B,E;function i(s){B=s.type,E=s.bytesPerElement}function o(s,D){Q.drawElements(g,D,B,s*E),I.update(D,g,1)}function e(s,D,n){n!==0&&(Q.drawElementsInstanced(g,D,B,s*E,n),I.update(D,g,n))}function t(s,D,n){if(n===0)return;const w=A.get("WEBGL_multi_draw");if(w===null)for(let S=0;S<n;S++)this.render(s[S]/E,D[S]);else{w.multiDrawElementsWEBGL(g,D,0,B,s,0,n);let S=0;for(let h=0;h<n;h++)S+=D[h];I.update(S,g,1)}}function a(s,D,n,w){if(n===0)return;const S=A.get("WEBGL_multi_draw");if(S===null)for(let h=0;h<s.length;h++)e(s[h]/E,D[h],w[h]);else{S.multiDrawElementsInstancedWEBGL(g,D,0,B,s,0,w,0,n);let h=0;for(let l=0;l<n;l++)h+=D[l];for(let l=0;l<w.length;l++)I.update(h,g,w[l])}}this.setMode=C,this.setIndex=i,this.render=o,this.renderInstances=e,this.renderMultiDraw=t,this.renderMultiDrawInstances=a}function rn(Q){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(B,E,i){switch(I.calls++,E){case Q.TRIANGLES:I.triangles+=i*(B/3);break;case Q.LINES:I.lines+=i*(B/2);break;case Q.LINE_STRIP:I.lines+=i*(B-1);break;case Q.LINE_LOOP:I.lines+=i*B;break;case Q.POINTS:I.points+=i*B;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function C(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function Sn(Q,A,I){const g=new WeakMap,C=new CI;function B(E,i,o){const e=E.morphTargetInfluences,t=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,a=t!==void 0?t.length:0;let s=g.get(i);if(s===void 0||s.count!==a){let D=function(){H.dispose(),g.delete(i),i.removeEventListener("dispose",D)};s!==void 0&&s.texture.dispose();const n=i.morphAttributes.position!==void 0,w=i.morphAttributes.normal!==void 0,S=i.morphAttributes.color!==void 0,h=i.morphAttributes.position||[],l=i.morphAttributes.normal||[],G=i.morphAttributes.color||[];let M=0;n===!0&&(M=1),w===!0&&(M=2),S===!0&&(M=3);let p=i.attributes.position.count*M,N=1;p>A.maxTextureSize&&(N=Math.ceil(p/A.maxTextureSize),p=A.maxTextureSize);const K=new Float32Array(p*N*4*a),H=new de(K,p,N,a);H.type=gg,H.needsUpdate=!0;const y=M*4;for(let c=0;c<a;c++){const m=h[c],x=l[c],R=G[c],v=p*N*4*c;for(let P=0;P<m.count;P++){const V=P*y;n===!0&&(C.fromBufferAttribute(m,P),K[v+V+0]=C.x,K[v+V+1]=C.y,K[v+V+2]=C.z,K[v+V+3]=0),w===!0&&(C.fromBufferAttribute(x,P),K[v+V+4]=C.x,K[v+V+5]=C.y,K[v+V+6]=C.z,K[v+V+7]=0),S===!0&&(C.fromBufferAttribute(R,P),K[v+V+8]=C.x,K[v+V+9]=C.y,K[v+V+10]=C.z,K[v+V+11]=R.itemSize===4?C.w:1)}}s={count:a,texture:H,size:new JA(p,N)},g.set(i,s),i.addEventListener("dispose",D)}if(E.isInstancedMesh===!0&&E.morphTexture!==null)o.getUniforms().setValue(Q,"morphTexture",E.morphTexture,I);else{let D=0;for(let w=0;w<e.length;w++)D+=e[w];const n=i.morphTargetsRelative?1:1-D;o.getUniforms().setValue(Q,"morphTargetBaseInfluence",n),o.getUniforms().setValue(Q,"morphTargetInfluences",e)}o.getUniforms().setValue(Q,"morphTargetsTexture",s.texture,I),o.getUniforms().setValue(Q,"morphTargetsTextureSize",s.size)}return{update:B}}function nn(Q,A,I,g){let C=new WeakMap;function B(o){const e=g.render.frame,t=o.geometry,a=A.get(o,t);if(C.get(a)!==e&&(A.update(a),C.set(a,e)),o.isInstancedMesh&&(o.hasEventListener("dispose",i)===!1&&o.addEventListener("dispose",i),C.get(o)!==e&&(I.update(o.instanceMatrix,Q.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,Q.ARRAY_BUFFER),C.set(o,e))),o.isSkinnedMesh){const s=o.skeleton;C.get(s)!==e&&(s.update(),C.set(s,e))}return a}function E(){C=new WeakMap}function i(o){const e=o.target;e.removeEventListener("dispose",i),I.remove(e.instanceMatrix),e.instanceColor!==null&&I.remove(e.instanceColor)}return{update:B,dispose:E}}class at extends KI{constructor(A,I,g,C,B,E,i,o,e,t){if(t=t!==void 0?t:vC,t!==vC&&t!==pB)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&t===vC&&(g=_C),g===void 0&&t===pB&&(g=RB),super(null,C,B,E,i,o,t,g,e),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=i!==void 0?i:HI,this.minFilter=o!==void 0?o:HI,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}const st=new KI,Dt=new at(1,1);Dt.compareFunction=Me;const ht=new de,rt=new $D,St=new gt,nt=[],wt=[],ct=new Float32Array(16),Gt=new Float32Array(9),lt=new Float32Array(4);function nB(Q,A,I){const g=Q[0];if(g<=0||g>0)return Q;const C=A*I;let B=nt[C];if(B===void 0&&(B=new Float32Array(C),nt[C]=B),A!==0){g.toArray(B,0);for(let E=1,i=0;E!==A;++E)i+=I,Q[E].toArray(B,i)}return B}function JI(Q,A){if(Q.length!==A.length)return!1;for(let I=0,g=Q.length;I<g;I++)if(Q[I]!==A[I])return!1;return!0}function FI(Q,A){for(let I=0,g=A.length;I<g;I++)Q[I]=A[I]}function AE(Q,A){let I=wt[A];I===void 0&&(I=new Int32Array(A),wt[A]=I);for(let g=0;g!==A;++g)I[g]=Q.allocateTextureUnit();return I}function wn(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1f(this.addr,A),I[0]=A)}function cn(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(JI(I,A))return;Q.uniform2fv(this.addr,A),FI(I,A)}}function Gn(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(Q.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(JI(I,A))return;Q.uniform3fv(this.addr,A),FI(I,A)}}function ln(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(JI(I,A))return;Q.uniform4fv(this.addr,A),FI(I,A)}}function kn(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(JI(I,A))return;Q.uniformMatrix2fv(this.addr,!1,A),FI(I,A)}else{if(JI(I,g))return;lt.set(g),Q.uniformMatrix2fv(this.addr,!1,lt),FI(I,g)}}function yn(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(JI(I,A))return;Q.uniformMatrix3fv(this.addr,!1,A),FI(I,A)}else{if(JI(I,g))return;Gt.set(g),Q.uniformMatrix3fv(this.addr,!1,Gt),FI(I,g)}}function Mn(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(JI(I,A))return;Q.uniformMatrix4fv(this.addr,!1,A),FI(I,A)}else{if(JI(I,g))return;ct.set(g),Q.uniformMatrix4fv(this.addr,!1,ct),FI(I,g)}}function Un(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1i(this.addr,A),I[0]=A)}function Kn(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(JI(I,A))return;Q.uniform2iv(this.addr,A),FI(I,A)}}function Nn(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(JI(I,A))return;Q.uniform3iv(this.addr,A),FI(I,A)}}function Jn(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(JI(I,A))return;Q.uniform4iv(this.addr,A),FI(I,A)}}function Fn(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1ui(this.addr,A),I[0]=A)}function Rn(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(JI(I,A))return;Q.uniform2uiv(this.addr,A),FI(I,A)}}function pn(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(JI(I,A))return;Q.uniform3uiv(this.addr,A),FI(I,A)}}function qn(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(JI(I,A))return;Q.uniform4uiv(this.addr,A),FI(I,A)}}function dn(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C);const B=this.type===Q.SAMPLER_2D_SHADOW?Dt:st;I.setTexture2D(A||B,C)}function Yn(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||rt,C)}function Ln(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||St,C)}function Hn(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||ht,C)}function un(Q){switch(Q){case 5126:return wn;case 35664:return cn;case 35665:return Gn;case 35666:return ln;case 35674:return kn;case 35675:return yn;case 35676:return Mn;case 5124:case 35670:return Un;case 35667:case 35671:return Kn;case 35668:case 35672:return Nn;case 35669:case 35673:return Jn;case 5125:return Fn;case 36294:return Rn;case 36295:return pn;case 36296:return qn;case 35678:case 36198:case 36298:case 36306:case 35682:return dn;case 35679:case 36299:case 36307:return Yn;case 35680:case 36300:case 36308:case 36293:return Ln;case 36289:case 36303:case 36311:case 36292:return Hn}}function mn(Q,A){Q.uniform1fv(this.addr,A)}function fn(Q,A){const I=nB(A,this.size,2);Q.uniform2fv(this.addr,I)}function Tn(Q,A){const I=nB(A,this.size,3);Q.uniform3fv(this.addr,I)}function xn(Q,A){const I=nB(A,this.size,4);Q.uniform4fv(this.addr,I)}function bn(Q,A){const I=nB(A,this.size,4);Q.uniformMatrix2fv(this.addr,!1,I)}function On(Q,A){const I=nB(A,this.size,9);Q.uniformMatrix3fv(this.addr,!1,I)}function _n(Q,A){const I=nB(A,this.size,16);Q.uniformMatrix4fv(this.addr,!1,I)}function vn(Q,A){Q.uniform1iv(this.addr,A)}function Zn(Q,A){Q.uniform2iv(this.addr,A)}function Wn(Q,A){Q.uniform3iv(this.addr,A)}function Pn(Q,A){Q.uniform4iv(this.addr,A)}function jn(Q,A){Q.uniform1uiv(this.addr,A)}function Vn(Q,A){Q.uniform2uiv(this.addr,A)}function Xn(Q,A){Q.uniform3uiv(this.addr,A)}function zn(Q,A){Q.uniform4uiv(this.addr,A)}function $n(Q,A,I){const g=this.cache,C=A.length,B=AE(I,C);JI(g,B)||(Q.uniform1iv(this.addr,B),FI(g,B));for(let E=0;E!==C;++E)I.setTexture2D(A[E]||st,B[E])}function Aw(Q,A,I){const g=this.cache,C=A.length,B=AE(I,C);JI(g,B)||(Q.uniform1iv(this.addr,B),FI(g,B));for(let E=0;E!==C;++E)I.setTexture3D(A[E]||rt,B[E])}function Iw(Q,A,I){const g=this.cache,C=A.length,B=AE(I,C);JI(g,B)||(Q.uniform1iv(this.addr,B),FI(g,B));for(let E=0;E!==C;++E)I.setTextureCube(A[E]||St,B[E])}function gw(Q,A,I){const g=this.cache,C=A.length,B=AE(I,C);JI(g,B)||(Q.uniform1iv(this.addr,B),FI(g,B));for(let E=0;E!==C;++E)I.setTexture2DArray(A[E]||ht,B[E])}function Cw(Q){switch(Q){case 5126:return mn;case 35664:return fn;case 35665:return Tn;case 35666:return xn;case 35674:return bn;case 35675:return On;case 35676:return _n;case 5124:case 35670:return vn;case 35667:case 35671:return Zn;case 35668:case 35672:return Wn;case 35669:case 35673:return Pn;case 5125:return jn;case 36294:return Vn;case 36295:return Xn;case 36296:return zn;case 35678:case 36198:case 36298:case 36306:case 35682:return $n;case 35679:case 36299:case 36307:return Aw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return gw}}class Bw{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=un(I.type)}}class Qw{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=Cw(I.type)}}class Ew{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let B=0,E=C.length;B!==E;++B){const i=C[B];i.setValue(A,I[i.id],g)}}}const Si=/(\w+)(\])?(\[|\.)?/g;function kt(Q,A){Q.seq.push(A),Q.map[A.id]=A}function iw(Q,A,I){const g=Q.name,C=g.length;for(Si.lastIndex=0;;){const B=Si.exec(g),E=Si.lastIndex;let i=B[1];const o=B[2]==="]",e=B[3];if(o&&(i=i|0),e===void 0||e==="["&&E+2===C){kt(I,e===void 0?new Bw(i,Q,A):new Qw(i,Q,A));break}else{let t=I.map[i];t===void 0&&(t=new Ew(i),kt(I,t)),I=t}}}class IE{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const B=A.getActiveUniform(I,C),E=A.getUniformLocation(I,B.name);iw(B,E,this)}}setValue(A,I,g,C){const B=this.map[I];B!==void 0&&B.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let B=0,E=I.length;B!==E;++B){const i=I[B],o=g[i.id];o.needsUpdate!==!1&&i.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,B=A.length;C!==B;++C){const E=A[C];E.id in I&&g.push(E)}return g}}function yt(Q,A,I){const g=Q.createShader(A);return Q.shaderSource(g,I),Q.compileShader(g),g}const ow=37297;let ew=0;function tw(Q,A){const I=Q.split(`
`),g=[],C=Math.max(A-6,0),B=Math.min(A+6,I.length);for(let E=C;E<B;E++){const i=E+1;g.push(`${i===A?">":" "} ${i}: ${I[E]}`)}return g.join(`
`)}function aw(Q){const A=zA.getPrimaries(zA.workingColorSpace),I=zA.getPrimaries(Q);let g;switch(A===I?g="":A===JQ&&I===NQ?g="LinearDisplayP3ToLinearSRGB":A===NQ&&I===JQ&&(g="LinearSRGBToLinearDisplayP3"),Q){case UI:case UQ:return[g,"LinearTransferOETF"];case uI:case xE:return[g,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",Q),[g,"LinearTransferOETF"]}}function Mt(Q,A,I){const g=Q.getShaderParameter(A,Q.COMPILE_STATUS),C=Q.getShaderInfoLog(A).trim();if(g&&C==="")return"";const B=/ERROR: 0:(\d+)/.exec(C);if(B){const E=parseInt(B[1]);return I.toUpperCase()+`

`+C+`

`+tw(Q.getShaderSource(A),E)}else return C}function sw(Q,A){const I=aw(A);return`vec4 ${Q}( vec4 value ) { return ${I[0]}( ${I[1]}( value ) ); }`}function Dw(Q,A){let I;switch(A){case $s:I="Linear";break;case AD:I="Reinhard";break;case ID:I="OptimizedCineon";break;case gD:I="ACESFilmic";break;case BD:I="AgX";break;case QD:I="Neutral";break;case CD:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+Q+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function hw(Q){return[Q.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",Q.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(TB).join(`
`)}function rw(Q){const A=[];for(const I in Q){const g=Q[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function Sw(Q,A){const I={},g=Q.getProgramParameter(A,Q.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const B=Q.getActiveAttrib(A,C),E=B.name;let i=1;B.type===Q.FLOAT_MAT2&&(i=2),B.type===Q.FLOAT_MAT3&&(i=3),B.type===Q.FLOAT_MAT4&&(i=4),I[E]={type:B.type,location:Q.getAttribLocation(A,E),locationSize:i}}return I}function TB(Q){return Q!==""}function Ut(Q,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return Q.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Kt(Q,A){return Q.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const nw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ni(Q){return Q.replace(nw,cw)}const ww=new Map;function cw(Q,A){let I=LA[A];if(I===void 0){const g=ww.get(A);if(g!==void 0)I=LA[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return ni(I)}const Gw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nt(Q){return Q.replace(Gw,lw)}function lw(Q,A,I,g){let C="";for(let B=parseInt(A);B<parseInt(I);B++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+B+" ]").replace(/UNROLLED_LOOP_INDEX/g,B);return C}function Jt(Q){let A=`precision ${Q.precision} float;
	precision ${Q.precision} int;
	precision ${Q.precision} sampler2D;
	precision ${Q.precision} samplerCube;
	precision ${Q.precision} sampler3D;
	precision ${Q.precision} sampler2DArray;
	precision ${Q.precision} sampler2DShadow;
	precision ${Q.precision} samplerCubeShadow;
	precision ${Q.precision} sampler2DArrayShadow;
	precision ${Q.precision} isampler2D;
	precision ${Q.precision} isampler3D;
	precision ${Q.precision} isamplerCube;
	precision ${Q.precision} isampler2DArray;
	precision ${Q.precision} usampler2D;
	precision ${Q.precision} usampler3D;
	precision ${Q.precision} usamplerCube;
	precision ${Q.precision} usampler2DArray;
	`;return Q.precision==="highp"?A+=`
#define HIGH_PRECISION`:Q.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:Q.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function kw(Q){let A="SHADOWMAP_TYPE_BASIC";return Q.shadowMapType===Lo?A="SHADOWMAP_TYPE_PCF":Q.shadowMapType===Us?A="SHADOWMAP_TYPE_PCF_SOFT":Q.shadowMapType===ug&&(A="SHADOWMAP_TYPE_VSM"),A}function yw(Q){let A="ENVMAP_TYPE_CUBE";if(Q.envMap)switch(Q.envMapMode){case bC:case OC:A="ENVMAP_TYPE_CUBE";break;case lQ:A="ENVMAP_TYPE_CUBE_UV";break}return A}function Mw(Q){let A="ENVMAP_MODE_REFLECTION";if(Q.envMap)switch(Q.envMapMode){case OC:A="ENVMAP_MODE_REFRACTION";break}return A}function Uw(Q){let A="ENVMAP_BLENDING_NONE";if(Q.envMap)switch(Q.combine){case RE:A="ENVMAP_BLENDING_MULTIPLY";break;case Xs:A="ENVMAP_BLENDING_MIX";break;case zs:A="ENVMAP_BLENDING_ADD";break}return A}function Kw(Q){const A=Q.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function Nw(Q,A,I,g){const C=Q.getContext(),B=I.defines;let E=I.vertexShader,i=I.fragmentShader;const o=kw(I),e=yw(I),t=Mw(I),a=Uw(I),s=Kw(I),D=hw(I),n=rw(B),w=C.createProgram();let S,h,l=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(S=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,n].filter(TB).join(`
`),S.length>0&&(S+=`
`),h=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,n].filter(TB).join(`
`),h.length>0&&(h+=`
`)):(S=[Jt(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,n,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.instancingMorph?"#define USE_INSTANCING_MORPH":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(TB).join(`
`),h=[Jt(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,n,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.envMap?"#define "+t:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.dispersion?"#define USE_DISPERSION":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==gC?"#define TONE_MAPPING":"",I.toneMapping!==gC?LA.tonemapping_pars_fragment:"",I.toneMapping!==gC?Dw("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",LA.colorspace_pars_fragment,sw("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(TB).join(`
`)),E=ni(E),E=Ut(E,I),E=Kt(E,I),i=ni(i),i=Ut(i,I),i=Kt(i,I),E=Nt(E),i=Nt(i),I.isRawShaderMaterial!==!0&&(l=`#version 300 es
`,S=[D,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,h=["#define varying in",I.glslVersion===Ue?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===Ue?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const G=l+S+E,M=l+h+i,p=yt(C,C.VERTEX_SHADER,G),N=yt(C,C.FRAGMENT_SHADER,M);C.attachShader(w,p),C.attachShader(w,N),I.index0AttributeName!==void 0?C.bindAttribLocation(w,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(w,0,"position"),C.linkProgram(w);function K(m){if(Q.debug.checkShaderErrors){const x=C.getProgramInfoLog(w).trim(),R=C.getShaderInfoLog(p).trim(),v=C.getShaderInfoLog(N).trim();let P=!0,V=!0;if(C.getProgramParameter(w,C.LINK_STATUS)===!1)if(P=!1,typeof Q.debug.onShaderError=="function")Q.debug.onShaderError(C,w,p,N);else{const gA=Mt(C,p,"vertex"),Z=Mt(C,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(w,C.VALIDATE_STATUS)+`

Material Name: `+m.name+`
Material Type: `+m.type+`

Program Info Log: `+x+`
`+gA+`
`+Z)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(R===""||v==="")&&(V=!1);V&&(m.diagnostics={runnable:P,programLog:x,vertexShader:{log:R,prefix:S},fragmentShader:{log:v,prefix:h}})}C.deleteShader(p),C.deleteShader(N),H=new IE(C,w),y=Sw(C,w)}let H;this.getUniforms=function(){return H===void 0&&K(this),H};let y;this.getAttributes=function(){return y===void 0&&K(this),y};let c=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return c===!1&&(c=C.getProgramParameter(w,ow)),c},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(w),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=ew++,this.cacheKey=A,this.usedTimes=1,this.program=w,this.vertexShader=p,this.fragmentShader=N,this}let Jw=0;class Fw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),B=this._getShaderStage(g),E=this._getShaderCacheForMaterial(A);return E.has(C)===!1&&(E.add(C),C.usedTimes++),E.has(B)===!1&&(E.add(B),B.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new Rw(A),I.set(A,g)),g}}class Rw{constructor(A){this.id=Jw++,this.code=A,this.usedTimes=0}}function pw(Q,A,I,g,C,B,E){const i=new ue,o=new Fw,e=new Set,t=[],a=C.logarithmicDepthBuffer,s=C.vertexTextures;let D=C.precision;const n={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(y){return e.add(y),y===0?"uv":`uv${y}`}function S(y,c,m,x,R){const v=x.fog,P=R.geometry,V=y.isMeshStandardMaterial?x.environment:null,gA=(y.isMeshStandardMaterial?I:A).get(y.envMap||V),Z=gA&&gA.mapping===lQ?gA.image.height:null,AA=n[y.type];y.precision!==null&&(D=C.getMaxPrecision(y.precision),D!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",D,"instead."));const BA=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,FA=BA!==void 0?BA.length:0;let OA=0;P.morphAttributes.position!==void 0&&(OA=1),P.morphAttributes.normal!==void 0&&(OA=2),P.morphAttributes.color!==void 0&&(OA=3);let iI,W,CA,SA;if(AA){const gI=Ng[AA];iI=gI.vertexShader,W=gI.fragmentShader}else iI=y.vertexShader,W=y.fragmentShader,o.update(y),CA=o.getVertexShaderID(y),SA=o.getFragmentShaderID(y);const oA=Q.getRenderTarget(),_A=R.isInstancedMesh===!0,vA=R.isBatchedMesh===!0,f=!!y.map,aI=!!y.matcap,MA=!!gA,oI=!!y.aoMap,NA=!!y.lightMap,jA=!!y.bumpMap,fA=!!y.normalMap,VA=!!y.displacementMap,nI=!!y.emissiveMap,J=!!y.metalnessMap,k=!!y.roughnessMap,_=y.anisotropy>0,X=y.clearcoat>0,IA=y.dispersion>0,$=y.iridescence>0,GA=y.sheen>0,tA=y.transmission>0,aA=_&&!!y.anisotropyMap,qA=X&&!!y.clearcoatMap,QA=X&&!!y.clearcoatNormalMap,yA=X&&!!y.clearcoatRoughnessMap,XA=$&&!!y.iridescenceMap,UA=$&&!!y.iridescenceThicknessMap,hA=GA&&!!y.sheenColorMap,uA=GA&&!!y.sheenRoughnessMap,ZA=!!y.specularMap,lI=!!y.specularColorMap,mA=!!y.specularIntensityMap,L=tA&&!!y.transmissionMap,z=tA&&!!y.thicknessMap,j=!!y.gradientMap,sA=!!y.alphaMap,eA=y.alphaTest>0,sI=!!y.alphaHash,DI=!!y.extensions;let wI=gC;y.toneMapped&&(oA===null||oA.isXRRenderTarget===!0)&&(wI=Q.toneMapping);const _I={shaderID:AA,shaderType:y.type,shaderName:y.name,vertexShader:iI,fragmentShader:W,defines:y.defines,customVertexShaderID:CA,customFragmentShaderID:SA,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:D,batching:vA,instancing:_A,instancingColor:_A&&R.instanceColor!==null,instancingMorph:_A&&R.morphTexture!==null,supportsVertexTextures:s,outputColorSpace:oA===null?Q.outputColorSpace:oA.isXRRenderTarget===!0?oA.texture.colorSpace:UI,alphaToCoverage:!!y.alphaToCoverage,map:f,matcap:aI,envMap:MA,envMapMode:MA&&gA.mapping,envMapCubeUVHeight:Z,aoMap:oI,lightMap:NA,bumpMap:jA,normalMap:fA,displacementMap:s&&VA,emissiveMap:nI,normalMapObjectSpace:fA&&y.normalMapType===kD,normalMapTangentSpace:fA&&y.normalMapType===TE,metalnessMap:J,roughnessMap:k,anisotropy:_,anisotropyMap:aA,clearcoat:X,clearcoatMap:qA,clearcoatNormalMap:QA,clearcoatRoughnessMap:yA,dispersion:IA,iridescence:$,iridescenceMap:XA,iridescenceThicknessMap:UA,sheen:GA,sheenColorMap:hA,sheenRoughnessMap:uA,specularMap:ZA,specularColorMap:lI,specularIntensityMap:mA,transmission:tA,transmissionMap:L,thicknessMap:z,gradientMap:j,opaque:y.transparent===!1&&y.blending===xC&&y.alphaToCoverage===!1,alphaMap:sA,alphaTest:eA,alphaHash:sI,combine:y.combine,mapUv:f&&w(y.map.channel),aoMapUv:oI&&w(y.aoMap.channel),lightMapUv:NA&&w(y.lightMap.channel),bumpMapUv:jA&&w(y.bumpMap.channel),normalMapUv:fA&&w(y.normalMap.channel),displacementMapUv:VA&&w(y.displacementMap.channel),emissiveMapUv:nI&&w(y.emissiveMap.channel),metalnessMapUv:J&&w(y.metalnessMap.channel),roughnessMapUv:k&&w(y.roughnessMap.channel),anisotropyMapUv:aA&&w(y.anisotropyMap.channel),clearcoatMapUv:qA&&w(y.clearcoatMap.channel),clearcoatNormalMapUv:QA&&w(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yA&&w(y.clearcoatRoughnessMap.channel),iridescenceMapUv:XA&&w(y.iridescenceMap.channel),iridescenceThicknessMapUv:UA&&w(y.iridescenceThicknessMap.channel),sheenColorMapUv:hA&&w(y.sheenColorMap.channel),sheenRoughnessMapUv:uA&&w(y.sheenRoughnessMap.channel),specularMapUv:ZA&&w(y.specularMap.channel),specularColorMapUv:lI&&w(y.specularColorMap.channel),specularIntensityMapUv:mA&&w(y.specularIntensityMap.channel),transmissionMapUv:L&&w(y.transmissionMap.channel),thicknessMapUv:z&&w(y.thicknessMap.channel),alphaMapUv:sA&&w(y.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(fA||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!P.attributes.uv&&(f||sA),fog:!!v,useFog:y.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:a,skinning:R.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:FA,morphTextureStride:OA,numDirLights:c.directional.length,numPointLights:c.point.length,numSpotLights:c.spot.length,numSpotLightMaps:c.spotLightMap.length,numRectAreaLights:c.rectArea.length,numHemiLights:c.hemi.length,numDirLightShadows:c.directionalShadowMap.length,numPointLightShadows:c.pointShadowMap.length,numSpotLightShadows:c.spotShadowMap.length,numSpotLightShadowsWithMaps:c.numSpotLightShadowsWithMaps,numLightProbes:c.numLightProbes,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:y.dithering,shadowMapEnabled:Q.shadowMap.enabled&&m.length>0,shadowMapType:Q.shadowMap.type,toneMapping:wI,useLegacyLights:Q._useLegacyLights,decodeVideoTexture:f&&y.map.isVideoTexture===!0&&zA.getTransfer(y.map.colorSpace)===eI,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===sg,flipSided:y.side===Ag,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:DI&&y.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:DI&&y.extensions.multiDraw===!0&&g.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return _I.vertexUv1s=e.has(1),_I.vertexUv2s=e.has(2),_I.vertexUv3s=e.has(3),e.clear(),_I}function h(y){const c=[];if(y.shaderID?c.push(y.shaderID):(c.push(y.customVertexShaderID),c.push(y.customFragmentShaderID)),y.defines!==void 0)for(const m in y.defines)c.push(m),c.push(y.defines[m]);return y.isRawShaderMaterial===!1&&(l(c,y),G(c,y),c.push(Q.outputColorSpace)),c.push(y.customProgramCacheKey),c.join()}function l(y,c){y.push(c.precision),y.push(c.outputColorSpace),y.push(c.envMapMode),y.push(c.envMapCubeUVHeight),y.push(c.mapUv),y.push(c.alphaMapUv),y.push(c.lightMapUv),y.push(c.aoMapUv),y.push(c.bumpMapUv),y.push(c.normalMapUv),y.push(c.displacementMapUv),y.push(c.emissiveMapUv),y.push(c.metalnessMapUv),y.push(c.roughnessMapUv),y.push(c.anisotropyMapUv),y.push(c.clearcoatMapUv),y.push(c.clearcoatNormalMapUv),y.push(c.clearcoatRoughnessMapUv),y.push(c.iridescenceMapUv),y.push(c.iridescenceThicknessMapUv),y.push(c.sheenColorMapUv),y.push(c.sheenRoughnessMapUv),y.push(c.specularMapUv),y.push(c.specularColorMapUv),y.push(c.specularIntensityMapUv),y.push(c.transmissionMapUv),y.push(c.thicknessMapUv),y.push(c.combine),y.push(c.fogExp2),y.push(c.sizeAttenuation),y.push(c.morphTargetsCount),y.push(c.morphAttributeCount),y.push(c.numDirLights),y.push(c.numPointLights),y.push(c.numSpotLights),y.push(c.numSpotLightMaps),y.push(c.numHemiLights),y.push(c.numRectAreaLights),y.push(c.numDirLightShadows),y.push(c.numPointLightShadows),y.push(c.numSpotLightShadows),y.push(c.numSpotLightShadowsWithMaps),y.push(c.numLightProbes),y.push(c.shadowMapType),y.push(c.toneMapping),y.push(c.numClippingPlanes),y.push(c.numClipIntersection),y.push(c.depthPacking)}function G(y,c){i.disableAll(),c.supportsVertexTextures&&i.enable(0),c.instancing&&i.enable(1),c.instancingColor&&i.enable(2),c.instancingMorph&&i.enable(3),c.matcap&&i.enable(4),c.envMap&&i.enable(5),c.normalMapObjectSpace&&i.enable(6),c.normalMapTangentSpace&&i.enable(7),c.clearcoat&&i.enable(8),c.iridescence&&i.enable(9),c.alphaTest&&i.enable(10),c.vertexColors&&i.enable(11),c.vertexAlphas&&i.enable(12),c.vertexUv1s&&i.enable(13),c.vertexUv2s&&i.enable(14),c.vertexUv3s&&i.enable(15),c.vertexTangents&&i.enable(16),c.anisotropy&&i.enable(17),c.alphaHash&&i.enable(18),c.batching&&i.enable(19),c.dispersion&&i.enable(20),y.push(i.mask),i.disableAll(),c.fog&&i.enable(0),c.useFog&&i.enable(1),c.flatShading&&i.enable(2),c.logarithmicDepthBuffer&&i.enable(3),c.skinning&&i.enable(4),c.morphTargets&&i.enable(5),c.morphNormals&&i.enable(6),c.morphColors&&i.enable(7),c.premultipliedAlpha&&i.enable(8),c.shadowMapEnabled&&i.enable(9),c.useLegacyLights&&i.enable(10),c.doubleSided&&i.enable(11),c.flipSided&&i.enable(12),c.useDepthPacking&&i.enable(13),c.dithering&&i.enable(14),c.transmission&&i.enable(15),c.sheen&&i.enable(16),c.opaque&&i.enable(17),c.pointsUvs&&i.enable(18),c.decodeVideoTexture&&i.enable(19),c.alphaToCoverage&&i.enable(20),y.push(i.mask)}function M(y){const c=n[y.type];let m;if(c){const x=Ng[c];m=hh.clone(x.uniforms)}else m=y.uniforms;return m}function p(y,c){let m;for(let x=0,R=t.length;x<R;x++){const v=t[x];if(v.cacheKey===c){m=v,++m.usedTimes;break}}return m===void 0&&(m=new Nw(Q,c,y,B),t.push(m)),m}function N(y){if(--y.usedTimes===0){const c=t.indexOf(y);t[c]=t[t.length-1],t.pop(),y.destroy()}}function K(y){o.remove(y)}function H(){o.dispose()}return{getParameters:S,getProgramCacheKey:h,getUniforms:M,acquireProgram:p,releaseProgram:N,releaseShaderCache:K,programs:t,dispose:H}}function qw(){let Q=new WeakMap;function A(B){let E=Q.get(B);return E===void 0&&(E={},Q.set(B,E)),E}function I(B){Q.delete(B)}function g(B,E,i){Q.get(B)[E]=i}function C(){Q=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function dw(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.material.id!==A.material.id?Q.material.id-A.material.id:Q.z!==A.z?Q.z-A.z:Q.id-A.id}function Ft(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.z!==A.z?A.z-Q.z:Q.id-A.id}function Rt(){const Q=[];let A=0;const I=[],g=[],C=[];function B(){A=0,I.length=0,g.length=0,C.length=0}function E(a,s,D,n,w,S){let h=Q[A];return h===void 0?(h={id:a.id,object:a,geometry:s,material:D,groupOrder:n,renderOrder:a.renderOrder,z:w,group:S},Q[A]=h):(h.id=a.id,h.object=a,h.geometry=s,h.material=D,h.groupOrder=n,h.renderOrder=a.renderOrder,h.z=w,h.group=S),A++,h}function i(a,s,D,n,w,S){const h=E(a,s,D,n,w,S);D.transmission>0?g.push(h):D.transparent===!0?C.push(h):I.push(h)}function o(a,s,D,n,w,S){const h=E(a,s,D,n,w,S);D.transmission>0?g.unshift(h):D.transparent===!0?C.unshift(h):I.unshift(h)}function e(a,s){I.length>1&&I.sort(a||dw),g.length>1&&g.sort(s||Ft),C.length>1&&C.sort(s||Ft)}function t(){for(let a=A,s=Q.length;a<s;a++){const D=Q[a];if(D.id===null)break;D.id=null,D.object=null,D.geometry=null,D.material=null,D.group=null}}return{opaque:I,transmissive:g,transparent:C,init:B,push:i,unshift:o,finish:t,sort:e}}function Yw(){let Q=new WeakMap;function A(g,C){const B=Q.get(g);let E;return B===void 0?(E=new Rt,Q.set(g,[E])):C>=B.length?(E=new Rt,B.push(E)):E=B[C],E}function I(){Q=new WeakMap}return{get:A,dispose:I}}function Lw(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new q,color:new kA};break;case"SpotLight":I={position:new q,direction:new q,color:new kA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new q,color:new kA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new q,skyColor:new kA,groundColor:new kA};break;case"RectAreaLight":I={color:new kA,position:new q,halfWidth:new q,halfHeight:new q};break}return Q[A.id]=I,I}}}function Hw(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new JA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new JA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new JA,shadowCameraNear:1,shadowCameraFar:1e3};break}return Q[A.id]=I,I}}}let uw=0;function mw(Q,A){return(A.castShadow?2:0)-(Q.castShadow?2:0)+(A.map?1:0)-(Q.map?1:0)}function fw(Q){const A=new Lw,I=Hw(),g={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)g.probe.push(new q);const C=new q,B=new pA,E=new pA;function i(e,t){let a=0,s=0,D=0;for(let m=0;m<9;m++)g.probe[m].set(0,0,0);let n=0,w=0,S=0,h=0,l=0,G=0,M=0,p=0,N=0,K=0,H=0;e.sort(mw);const y=t===!0?Math.PI:1;for(let m=0,x=e.length;m<x;m++){const R=e[m],v=R.color,P=R.intensity,V=R.distance,gA=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)a+=v.r*P*y,s+=v.g*P*y,D+=v.b*P*y;else if(R.isLightProbe){for(let Z=0;Z<9;Z++)g.probe[Z].addScaledVector(R.sh.coefficients[Z],P);H++}else if(R.isDirectionalLight){const Z=A.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity*y),R.castShadow){const AA=R.shadow,BA=I.get(R);BA.shadowBias=AA.bias,BA.shadowNormalBias=AA.normalBias,BA.shadowRadius=AA.radius,BA.shadowMapSize=AA.mapSize,g.directionalShadow[n]=BA,g.directionalShadowMap[n]=gA,g.directionalShadowMatrix[n]=R.shadow.matrix,G++}g.directional[n]=Z,n++}else if(R.isSpotLight){const Z=A.get(R);Z.position.setFromMatrixPosition(R.matrixWorld),Z.color.copy(v).multiplyScalar(P*y),Z.distance=V,Z.coneCos=Math.cos(R.angle),Z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Z.decay=R.decay,g.spot[S]=Z;const AA=R.shadow;if(R.map&&(g.spotLightMap[N]=R.map,N++,AA.updateMatrices(R),R.castShadow&&K++),g.spotLightMatrix[S]=AA.matrix,R.castShadow){const BA=I.get(R);BA.shadowBias=AA.bias,BA.shadowNormalBias=AA.normalBias,BA.shadowRadius=AA.radius,BA.shadowMapSize=AA.mapSize,g.spotShadow[S]=BA,g.spotShadowMap[S]=gA,p++}S++}else if(R.isRectAreaLight){const Z=A.get(R);Z.color.copy(v).multiplyScalar(P),Z.halfWidth.set(R.width*.5,0,0),Z.halfHeight.set(0,R.height*.5,0),g.rectArea[h]=Z,h++}else if(R.isPointLight){const Z=A.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity*y),Z.distance=R.distance,Z.decay=R.decay,R.castShadow){const AA=R.shadow,BA=I.get(R);BA.shadowBias=AA.bias,BA.shadowNormalBias=AA.normalBias,BA.shadowRadius=AA.radius,BA.shadowMapSize=AA.mapSize,BA.shadowCameraNear=AA.camera.near,BA.shadowCameraFar=AA.camera.far,g.pointShadow[w]=BA,g.pointShadowMap[w]=gA,g.pointShadowMatrix[w]=R.shadow.matrix,M++}g.point[w]=Z,w++}else if(R.isHemisphereLight){const Z=A.get(R);Z.skyColor.copy(R.color).multiplyScalar(P*y),Z.groundColor.copy(R.groundColor).multiplyScalar(P*y),g.hemi[l]=Z,l++}}h>0&&(Q.has("OES_texture_float_linear")===!0?(g.rectAreaLTC1=iA.LTC_FLOAT_1,g.rectAreaLTC2=iA.LTC_FLOAT_2):(g.rectAreaLTC1=iA.LTC_HALF_1,g.rectAreaLTC2=iA.LTC_HALF_2)),g.ambient[0]=a,g.ambient[1]=s,g.ambient[2]=D;const c=g.hash;(c.directionalLength!==n||c.pointLength!==w||c.spotLength!==S||c.rectAreaLength!==h||c.hemiLength!==l||c.numDirectionalShadows!==G||c.numPointShadows!==M||c.numSpotShadows!==p||c.numSpotMaps!==N||c.numLightProbes!==H)&&(g.directional.length=n,g.spot.length=S,g.rectArea.length=h,g.point.length=w,g.hemi.length=l,g.directionalShadow.length=G,g.directionalShadowMap.length=G,g.pointShadow.length=M,g.pointShadowMap.length=M,g.spotShadow.length=p,g.spotShadowMap.length=p,g.directionalShadowMatrix.length=G,g.pointShadowMatrix.length=M,g.spotLightMatrix.length=p+N-K,g.spotLightMap.length=N,g.numSpotLightShadowsWithMaps=K,g.numLightProbes=H,c.directionalLength=n,c.pointLength=w,c.spotLength=S,c.rectAreaLength=h,c.hemiLength=l,c.numDirectionalShadows=G,c.numPointShadows=M,c.numSpotShadows=p,c.numSpotMaps=N,c.numLightProbes=H,g.version=uw++)}function o(e,t){let a=0,s=0,D=0,n=0,w=0;const S=t.matrixWorldInverse;for(let h=0,l=e.length;h<l;h++){const G=e[h];if(G.isDirectionalLight){const M=g.directional[a];M.direction.setFromMatrixPosition(G.matrixWorld),C.setFromMatrixPosition(G.target.matrixWorld),M.direction.sub(C),M.direction.transformDirection(S),a++}else if(G.isSpotLight){const M=g.spot[D];M.position.setFromMatrixPosition(G.matrixWorld),M.position.applyMatrix4(S),M.direction.setFromMatrixPosition(G.matrixWorld),C.setFromMatrixPosition(G.target.matrixWorld),M.direction.sub(C),M.direction.transformDirection(S),D++}else if(G.isRectAreaLight){const M=g.rectArea[n];M.position.setFromMatrixPosition(G.matrixWorld),M.position.applyMatrix4(S),E.identity(),B.copy(G.matrixWorld),B.premultiply(S),E.extractRotation(B),M.halfWidth.set(G.width*.5,0,0),M.halfHeight.set(0,G.height*.5,0),M.halfWidth.applyMatrix4(E),M.halfHeight.applyMatrix4(E),n++}else if(G.isPointLight){const M=g.point[s];M.position.setFromMatrixPosition(G.matrixWorld),M.position.applyMatrix4(S),s++}else if(G.isHemisphereLight){const M=g.hemi[w];M.direction.setFromMatrixPosition(G.matrixWorld),M.direction.transformDirection(S),w++}}}return{setup:i,setupView:o,state:g}}function pt(Q){const A=new fw(Q),I=[],g=[];function C(t){e.camera=t,I.length=0,g.length=0}function B(t){I.push(t)}function E(t){g.push(t)}function i(t){A.setup(I,t)}function o(t){A.setupView(I,t)}const e={lightsArray:I,shadowsArray:g,camera:null,lights:A,transmissionRenderTarget:{}};return{init:C,state:e,setupLights:i,setupLightsView:o,pushLight:B,pushShadow:E}}function Tw(Q){let A=new WeakMap;function I(C,B=0){const E=A.get(C);let i;return E===void 0?(i=new pt(Q),A.set(C,[i])):B>=E.length?(i=new pt(Q),E.push(i)):i=E[B],i}function g(){A=new WeakMap}return{get:I,dispose:g}}class xw extends cg{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class bw extends cg{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const Ow=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_w=`uniform sampler2D shadow_pass;
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
}`;function vw(Q,A,I){let g=new oi;const C=new JA,B=new JA,E=new CI,i=new xw({depthPacking:lD}),o=new bw,e={},t=I.maxTextureSize,a={[mg]:Ag,[Ag]:mg,[sg]:sg},s=new Wg({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new JA},radius:{value:4}},vertexShader:Ow,fragmentShader:_w}),D=s.clone();D.defines.HORIZONTAL_PASS=1;const n=new PI;n.setAttribute("position",new NI(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new cI(n,s),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lo;let h=this.type;this.render=function(N,K,H){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const y=Q.getRenderTarget(),c=Q.getActiveCubeFace(),m=Q.getActiveMipmapLevel(),x=Q.state;x.setBlending(IC),x.buffers.color.setClear(1,1,1,1),x.buffers.depth.setTest(!0),x.setScissorTest(!1);const R=h!==ug&&this.type===ug,v=h===ug&&this.type!==ug;for(let P=0,V=N.length;P<V;P++){const gA=N[P],Z=gA.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",gA,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;C.copy(Z.mapSize);const AA=Z.getFrameExtents();if(C.multiply(AA),B.copy(Z.mapSize),(C.x>t||C.y>t)&&(C.x>t&&(B.x=Math.floor(t/AA.x),C.x=B.x*AA.x,Z.mapSize.x=B.x),C.y>t&&(B.y=Math.floor(t/AA.y),C.y=B.y*AA.y,Z.mapSize.y=B.y)),Z.map===null||R===!0||v===!0){const FA=this.type!==ug?{minFilter:HI,magFilter:HI}:{};Z.map!==null&&Z.map.dispose(),Z.map=new kC(C.x,C.y,FA),Z.map.texture.name=gA.name+".shadowMap",Z.camera.updateProjectionMatrix()}Q.setRenderTarget(Z.map),Q.clear();const BA=Z.getViewportCount();for(let FA=0;FA<BA;FA++){const OA=Z.getViewport(FA);E.set(B.x*OA.x,B.y*OA.y,B.x*OA.z,B.y*OA.w),x.viewport(E),Z.updateMatrices(gA,FA),g=Z.getFrustum(),M(K,H,Z.camera,gA,this.type)}Z.isPointLightShadow!==!0&&this.type===ug&&l(Z,H),Z.needsUpdate=!1}h=this.type,S.needsUpdate=!1,Q.setRenderTarget(y,c,m)};function l(N,K){const H=A.update(w);s.defines.VSM_SAMPLES!==N.blurSamples&&(s.defines.VSM_SAMPLES=N.blurSamples,D.defines.VSM_SAMPLES=N.blurSamples,s.needsUpdate=!0,D.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new kC(C.x,C.y)),s.uniforms.shadow_pass.value=N.map.texture,s.uniforms.resolution.value=N.mapSize,s.uniforms.radius.value=N.radius,Q.setRenderTarget(N.mapPass),Q.clear(),Q.renderBufferDirect(K,null,H,s,w,null),D.uniforms.shadow_pass.value=N.mapPass.texture,D.uniforms.resolution.value=N.mapSize,D.uniforms.radius.value=N.radius,Q.setRenderTarget(N.map),Q.clear(),Q.renderBufferDirect(K,null,H,D,w,null)}function G(N,K,H,y){let c=null;const m=H.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(m!==void 0)c=m;else if(c=H.isPointLight===!0?o:i,Q.localClippingEnabled&&K.clipShadows===!0&&Array.isArray(K.clippingPlanes)&&K.clippingPlanes.length!==0||K.displacementMap&&K.displacementScale!==0||K.alphaMap&&K.alphaTest>0||K.map&&K.alphaTest>0){const x=c.uuid,R=K.uuid;let v=e[x];v===void 0&&(v={},e[x]=v);let P=v[R];P===void 0&&(P=c.clone(),v[R]=P,K.addEventListener("dispose",p)),c=P}if(c.visible=K.visible,c.wireframe=K.wireframe,y===ug?c.side=K.shadowSide!==null?K.shadowSide:K.side:c.side=K.shadowSide!==null?K.shadowSide:a[K.side],c.alphaMap=K.alphaMap,c.alphaTest=K.alphaTest,c.map=K.map,c.clipShadows=K.clipShadows,c.clippingPlanes=K.clippingPlanes,c.clipIntersection=K.clipIntersection,c.displacementMap=K.displacementMap,c.displacementScale=K.displacementScale,c.displacementBias=K.displacementBias,c.wireframeLinewidth=K.wireframeLinewidth,c.linewidth=K.linewidth,H.isPointLight===!0&&c.isMeshDistanceMaterial===!0){const x=Q.properties.get(c);x.light=H}return c}function M(N,K,H,y,c){if(N.visible===!1)return;if(N.layers.test(K.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&c===ug)&&(!N.frustumCulled||g.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,N.matrixWorld);const x=A.update(N),R=N.material;if(Array.isArray(R)){const v=x.groups;for(let P=0,V=v.length;P<V;P++){const gA=v[P],Z=R[gA.materialIndex];if(Z&&Z.visible){const AA=G(N,Z,y,c);N.onBeforeShadow(Q,N,K,H,x,AA,gA),Q.renderBufferDirect(H,null,x,AA,N,gA),N.onAfterShadow(Q,N,K,H,x,AA,gA)}}}else if(R.visible){const v=G(N,R,y,c);N.onBeforeShadow(Q,N,K,H,x,v,null),Q.renderBufferDirect(H,null,x,v,N,null),N.onAfterShadow(Q,N,K,H,x,v,null)}}const m=N.children;for(let x=0,R=m.length;x<R;x++)M(m[x],K,H,y,c)}function p(N){N.target.removeEventListener("dispose",p);for(const K in e){const H=e[K],y=N.target.uuid;y in H&&(H[y].dispose(),delete H[y])}}}function Zw(Q){function A(){let L=!1;const z=new CI;let j=null;const sA=new CI(0,0,0,0);return{setMask:function(eA){j!==eA&&!L&&(Q.colorMask(eA,eA,eA,eA),j=eA)},setLocked:function(eA){L=eA},setClear:function(eA,sI,DI,wI,_I){_I===!0&&(eA*=wI,sI*=wI,DI*=wI),z.set(eA,sI,DI,wI),sA.equals(z)===!1&&(Q.clearColor(eA,sI,DI,wI),sA.copy(z))},reset:function(){L=!1,j=null,sA.set(-1,0,0,0)}}}function I(){let L=!1,z=null,j=null,sA=null;return{setTest:function(eA){eA?SA(Q.DEPTH_TEST):oA(Q.DEPTH_TEST)},setMask:function(eA){z!==eA&&!L&&(Q.depthMask(eA),z=eA)},setFunc:function(eA){if(j!==eA){switch(eA){case _s:Q.depthFunc(Q.NEVER);break;case vs:Q.depthFunc(Q.ALWAYS);break;case Zs:Q.depthFunc(Q.LESS);break;case cQ:Q.depthFunc(Q.LEQUAL);break;case Ws:Q.depthFunc(Q.EQUAL);break;case Ps:Q.depthFunc(Q.GEQUAL);break;case js:Q.depthFunc(Q.GREATER);break;case Vs:Q.depthFunc(Q.NOTEQUAL);break;default:Q.depthFunc(Q.LEQUAL)}j=eA}},setLocked:function(eA){L=eA},setClear:function(eA){sA!==eA&&(Q.clearDepth(eA),sA=eA)},reset:function(){L=!1,z=null,j=null,sA=null}}}function g(){let L=!1,z=null,j=null,sA=null,eA=null,sI=null,DI=null,wI=null,_I=null;return{setTest:function(gI){L||(gI?SA(Q.STENCIL_TEST):oA(Q.STENCIL_TEST))},setMask:function(gI){z!==gI&&!L&&(Q.stencilMask(gI),z=gI)},setFunc:function(gI,Yg,zI){(j!==gI||sA!==Yg||eA!==zI)&&(Q.stencilFunc(gI,Yg,zI),j=gI,sA=Yg,eA=zI)},setOp:function(gI,Yg,zI){(sI!==gI||DI!==Yg||wI!==zI)&&(Q.stencilOp(gI,Yg,zI),sI=gI,DI=Yg,wI=zI)},setLocked:function(gI){L=gI},setClear:function(gI){_I!==gI&&(Q.clearStencil(gI),_I=gI)},reset:function(){L=!1,z=null,j=null,sA=null,eA=null,sI=null,DI=null,wI=null,_I=null}}}const C=new A,B=new I,E=new g,i=new WeakMap,o=new WeakMap;let e={},t={},a=new WeakMap,s=[],D=null,n=!1,w=null,S=null,h=null,l=null,G=null,M=null,p=null,N=new kA(0,0,0),K=0,H=!1,y=null,c=null,m=null,x=null,R=null;const v=Q.getParameter(Q.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,V=0;const gA=Q.getParameter(Q.VERSION);gA.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(gA)[1]),P=V>=1):gA.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(gA)[1]),P=V>=2);let Z=null,AA={};const BA=Q.getParameter(Q.SCISSOR_BOX),FA=Q.getParameter(Q.VIEWPORT),OA=new CI().fromArray(BA),iI=new CI().fromArray(FA);function W(L,z,j,sA){const eA=new Uint8Array(4),sI=Q.createTexture();Q.bindTexture(L,sI),Q.texParameteri(L,Q.TEXTURE_MIN_FILTER,Q.NEAREST),Q.texParameteri(L,Q.TEXTURE_MAG_FILTER,Q.NEAREST);for(let DI=0;DI<j;DI++)L===Q.TEXTURE_3D||L===Q.TEXTURE_2D_ARRAY?Q.texImage3D(z,0,Q.RGBA,1,1,sA,0,Q.RGBA,Q.UNSIGNED_BYTE,eA):Q.texImage2D(z+DI,0,Q.RGBA,1,1,0,Q.RGBA,Q.UNSIGNED_BYTE,eA);return sI}const CA={};CA[Q.TEXTURE_2D]=W(Q.TEXTURE_2D,Q.TEXTURE_2D,1),CA[Q.TEXTURE_CUBE_MAP]=W(Q.TEXTURE_CUBE_MAP,Q.TEXTURE_CUBE_MAP_POSITIVE_X,6),CA[Q.TEXTURE_2D_ARRAY]=W(Q.TEXTURE_2D_ARRAY,Q.TEXTURE_2D_ARRAY,1,1),CA[Q.TEXTURE_3D]=W(Q.TEXTURE_3D,Q.TEXTURE_3D,1,1),C.setClear(0,0,0,1),B.setClear(1),E.setClear(0),SA(Q.DEPTH_TEST),B.setFunc(cQ),jA(!1),fA(AC),SA(Q.CULL_FACE),oI(IC);function SA(L){e[L]!==!0&&(Q.enable(L),e[L]=!0)}function oA(L){e[L]!==!1&&(Q.disable(L),e[L]=!1)}function _A(L,z){return t[L]!==z?(Q.bindFramebuffer(L,z),t[L]=z,L===Q.DRAW_FRAMEBUFFER&&(t[Q.FRAMEBUFFER]=z),L===Q.FRAMEBUFFER&&(t[Q.DRAW_FRAMEBUFFER]=z),!0):!1}function vA(L,z){let j=s,sA=!1;if(L){j=a.get(z),j===void 0&&(j=[],a.set(z,j));const eA=L.textures;if(j.length!==eA.length||j[0]!==Q.COLOR_ATTACHMENT0){for(let sI=0,DI=eA.length;sI<DI;sI++)j[sI]=Q.COLOR_ATTACHMENT0+sI;j.length=eA.length,sA=!0}}else j[0]!==Q.BACK&&(j[0]=Q.BACK,sA=!0);sA&&Q.drawBuffers(j)}function f(L){return D!==L?(Q.useProgram(L),D=L,!0):!1}const aI={[cC]:Q.FUNC_ADD,[Ns]:Q.FUNC_SUBTRACT,[Js]:Q.FUNC_REVERSE_SUBTRACT};aI[Fs]=Q.MIN,aI[Rs]=Q.MAX;const MA={[ps]:Q.ZERO,[qs]:Q.ONE,[ds]:Q.SRC_COLOR,[JE]:Q.SRC_ALPHA,[fs]:Q.SRC_ALPHA_SATURATE,[us]:Q.DST_COLOR,[Ls]:Q.DST_ALPHA,[Ys]:Q.ONE_MINUS_SRC_COLOR,[FE]:Q.ONE_MINUS_SRC_ALPHA,[ms]:Q.ONE_MINUS_DST_COLOR,[Hs]:Q.ONE_MINUS_DST_ALPHA,[Ts]:Q.CONSTANT_COLOR,[xs]:Q.ONE_MINUS_CONSTANT_COLOR,[bs]:Q.CONSTANT_ALPHA,[Os]:Q.ONE_MINUS_CONSTANT_ALPHA};function oI(L,z,j,sA,eA,sI,DI,wI,_I,gI){if(L===IC){n===!0&&(oA(Q.BLEND),n=!1);return}if(n===!1&&(SA(Q.BLEND),n=!0),L!==Ks){if(L!==w||gI!==H){if((S!==cC||G!==cC)&&(Q.blendEquation(Q.FUNC_ADD),S=cC,G=cC),gI)switch(L){case xC:Q.blendFuncSeparate(Q.ONE,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA);break;case NE:Q.blendFunc(Q.ONE,Q.ONE);break;case Ho:Q.blendFuncSeparate(Q.ZERO,Q.ONE_MINUS_SRC_COLOR,Q.ZERO,Q.ONE);break;case uo:Q.blendFuncSeparate(Q.ZERO,Q.SRC_COLOR,Q.ZERO,Q.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case xC:Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA);break;case NE:Q.blendFunc(Q.SRC_ALPHA,Q.ONE);break;case Ho:Q.blendFuncSeparate(Q.ZERO,Q.ONE_MINUS_SRC_COLOR,Q.ZERO,Q.ONE);break;case uo:Q.blendFunc(Q.ZERO,Q.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}h=null,l=null,M=null,p=null,N.set(0,0,0),K=0,w=L,H=gI}return}eA=eA||z,sI=sI||j,DI=DI||sA,(z!==S||eA!==G)&&(Q.blendEquationSeparate(aI[z],aI[eA]),S=z,G=eA),(j!==h||sA!==l||sI!==M||DI!==p)&&(Q.blendFuncSeparate(MA[j],MA[sA],MA[sI],MA[DI]),h=j,l=sA,M=sI,p=DI),(wI.equals(N)===!1||_I!==K)&&(Q.blendColor(wI.r,wI.g,wI.b,_I),N.copy(wI),K=_I),w=L,H=!1}function NA(L,z){L.side===sg?oA(Q.CULL_FACE):SA(Q.CULL_FACE);let j=L.side===Ag;z&&(j=!j),jA(j),L.blending===xC&&L.transparent===!1?oI(IC):oI(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),B.setFunc(L.depthFunc),B.setTest(L.depthTest),B.setMask(L.depthWrite),C.setMask(L.colorWrite);const sA=L.stencilWrite;E.setTest(sA),sA&&(E.setMask(L.stencilWriteMask),E.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),E.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),nI(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?SA(Q.SAMPLE_ALPHA_TO_COVERAGE):oA(Q.SAMPLE_ALPHA_TO_COVERAGE)}function jA(L){y!==L&&(L?Q.frontFace(Q.CW):Q.frontFace(Q.CCW),y=L)}function fA(L){L!==Hg?(SA(Q.CULL_FACE),L!==c&&(L===AC?Q.cullFace(Q.BACK):L===Ms?Q.cullFace(Q.FRONT):Q.cullFace(Q.FRONT_AND_BACK))):oA(Q.CULL_FACE),c=L}function VA(L){L!==m&&(P&&Q.lineWidth(L),m=L)}function nI(L,z,j){L?(SA(Q.POLYGON_OFFSET_FILL),(x!==z||R!==j)&&(Q.polygonOffset(z,j),x=z,R=j)):oA(Q.POLYGON_OFFSET_FILL)}function J(L){L?SA(Q.SCISSOR_TEST):oA(Q.SCISSOR_TEST)}function k(L){L===void 0&&(L=Q.TEXTURE0+v-1),Z!==L&&(Q.activeTexture(L),Z=L)}function _(L,z,j){j===void 0&&(Z===null?j=Q.TEXTURE0+v-1:j=Z);let sA=AA[j];sA===void 0&&(sA={type:void 0,texture:void 0},AA[j]=sA),(sA.type!==L||sA.texture!==z)&&(Z!==j&&(Q.activeTexture(j),Z=j),Q.bindTexture(L,z||CA[L]),sA.type=L,sA.texture=z)}function X(){const L=AA[Z];L!==void 0&&L.type!==void 0&&(Q.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function IA(){try{Q.compressedTexImage2D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{Q.compressedTexImage3D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function GA(){try{Q.texSubImage2D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tA(){try{Q.texSubImage3D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function aA(){try{Q.compressedTexSubImage2D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qA(){try{Q.compressedTexSubImage3D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function QA(){try{Q.texStorage2D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yA(){try{Q.texStorage3D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function XA(){try{Q.texImage2D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function UA(){try{Q.texImage3D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function hA(L){OA.equals(L)===!1&&(Q.scissor(L.x,L.y,L.z,L.w),OA.copy(L))}function uA(L){iI.equals(L)===!1&&(Q.viewport(L.x,L.y,L.z,L.w),iI.copy(L))}function ZA(L,z){let j=o.get(z);j===void 0&&(j=new WeakMap,o.set(z,j));let sA=j.get(L);sA===void 0&&(sA=Q.getUniformBlockIndex(z,L.name),j.set(L,sA))}function lI(L,z){const j=o.get(z).get(L);i.get(z)!==j&&(Q.uniformBlockBinding(z,j,L.__bindingPointIndex),i.set(z,j))}function mA(){Q.disable(Q.BLEND),Q.disable(Q.CULL_FACE),Q.disable(Q.DEPTH_TEST),Q.disable(Q.POLYGON_OFFSET_FILL),Q.disable(Q.SCISSOR_TEST),Q.disable(Q.STENCIL_TEST),Q.disable(Q.SAMPLE_ALPHA_TO_COVERAGE),Q.blendEquation(Q.FUNC_ADD),Q.blendFunc(Q.ONE,Q.ZERO),Q.blendFuncSeparate(Q.ONE,Q.ZERO,Q.ONE,Q.ZERO),Q.blendColor(0,0,0,0),Q.colorMask(!0,!0,!0,!0),Q.clearColor(0,0,0,0),Q.depthMask(!0),Q.depthFunc(Q.LESS),Q.clearDepth(1),Q.stencilMask(4294967295),Q.stencilFunc(Q.ALWAYS,0,4294967295),Q.stencilOp(Q.KEEP,Q.KEEP,Q.KEEP),Q.clearStencil(0),Q.cullFace(Q.BACK),Q.frontFace(Q.CCW),Q.polygonOffset(0,0),Q.activeTexture(Q.TEXTURE0),Q.bindFramebuffer(Q.FRAMEBUFFER,null),Q.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null),Q.bindFramebuffer(Q.READ_FRAMEBUFFER,null),Q.useProgram(null),Q.lineWidth(1),Q.scissor(0,0,Q.canvas.width,Q.canvas.height),Q.viewport(0,0,Q.canvas.width,Q.canvas.height),e={},Z=null,AA={},t={},a=new WeakMap,s=[],D=null,n=!1,w=null,S=null,h=null,l=null,G=null,M=null,p=null,N=new kA(0,0,0),K=0,H=!1,y=null,c=null,m=null,x=null,R=null,OA.set(0,0,Q.canvas.width,Q.canvas.height),iI.set(0,0,Q.canvas.width,Q.canvas.height),C.reset(),B.reset(),E.reset()}return{buffers:{color:C,depth:B,stencil:E},enable:SA,disable:oA,bindFramebuffer:_A,drawBuffers:vA,useProgram:f,setBlending:oI,setMaterial:NA,setFlipSided:jA,setCullFace:fA,setLineWidth:VA,setPolygonOffset:nI,setScissorTest:J,activeTexture:k,bindTexture:_,unbindTexture:X,compressedTexImage2D:IA,compressedTexImage3D:$,texImage2D:XA,texImage3D:UA,updateUBOMapping:ZA,uniformBlockBinding:lI,texStorage2D:QA,texStorage3D:yA,texSubImage2D:GA,texSubImage3D:tA,compressedTexSubImage2D:aA,compressedTexSubImage3D:qA,scissor:hA,viewport:uA,reset:mA}}function Ww(Q,A,I,g,C,B,E){const i=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),e=new JA,t=new WeakMap;let a;const s=new WeakMap;let D=!1;try{D=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function n(J,k){return D?new OffscreenCanvas(J,k):LB("canvas")}function w(J,k,_){let X=1;const IA=nI(J);if((IA.width>_||IA.height>_)&&(X=_/Math.max(IA.width,IA.height)),X<1)if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap||typeof VideoFrame<"u"&&J instanceof VideoFrame){const $=Math.floor(X*IA.width),GA=Math.floor(X*IA.height);a===void 0&&(a=n($,GA));const tA=k?n($,GA):a;return tA.width=$,tA.height=GA,tA.getContext("2d").drawImage(J,0,0,$,GA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+IA.width+"x"+IA.height+") to ("+$+"x"+GA+")."),tA}else return"data"in J&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+IA.width+"x"+IA.height+")."),J;return J}function S(J){return J.generateMipmaps&&J.minFilter!==HI&&J.minFilter!==qI}function h(J){Q.generateMipmap(J)}function l(J,k,_,X,IA=!1){if(J!==null){if(Q[J]!==void 0)return Q[J];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+J+"'")}let $=k;if(k===Q.RED&&(_===Q.FLOAT&&($=Q.R32F),_===Q.HALF_FLOAT&&($=Q.R16F),_===Q.UNSIGNED_BYTE&&($=Q.R8)),k===Q.RED_INTEGER&&(_===Q.UNSIGNED_BYTE&&($=Q.R8UI),_===Q.UNSIGNED_SHORT&&($=Q.R16UI),_===Q.UNSIGNED_INT&&($=Q.R32UI),_===Q.BYTE&&($=Q.R8I),_===Q.SHORT&&($=Q.R16I),_===Q.INT&&($=Q.R32I)),k===Q.RG&&(_===Q.FLOAT&&($=Q.RG32F),_===Q.HALF_FLOAT&&($=Q.RG16F),_===Q.UNSIGNED_BYTE&&($=Q.RG8)),k===Q.RG_INTEGER&&(_===Q.UNSIGNED_BYTE&&($=Q.RG8UI),_===Q.UNSIGNED_SHORT&&($=Q.RG16UI),_===Q.UNSIGNED_INT&&($=Q.RG32UI),_===Q.BYTE&&($=Q.RG8I),_===Q.SHORT&&($=Q.RG16I),_===Q.INT&&($=Q.RG32I)),k===Q.RGB&&_===Q.UNSIGNED_INT_5_9_9_9_REV&&($=Q.RGB9_E5),k===Q.RGBA){const GA=IA?KQ:zA.getTransfer(X);_===Q.FLOAT&&($=Q.RGBA32F),_===Q.HALF_FLOAT&&($=Q.RGBA16F),_===Q.UNSIGNED_BYTE&&($=GA===eI?Q.SRGB8_ALPHA8:Q.RGBA8),_===Q.UNSIGNED_SHORT_4_4_4_4&&($=Q.RGBA4),_===Q.UNSIGNED_SHORT_5_5_5_1&&($=Q.RGB5_A1)}return($===Q.R16F||$===Q.R32F||$===Q.RG16F||$===Q.RG32F||$===Q.RGBA16F||$===Q.RGBA32F)&&A.get("EXT_color_buffer_float"),$}function G(J,k){return S(J)===!0||J.isFramebufferTexture&&J.minFilter!==HI&&J.minFilter!==qI?Math.log2(Math.max(k.width,k.height))+1:J.mipmaps!==void 0&&J.mipmaps.length>0?J.mipmaps.length:J.isCompressedTexture&&Array.isArray(J.image)?k.mipmaps.length:1}function M(J){const k=J.target;k.removeEventListener("dispose",M),N(k),k.isVideoTexture&&t.delete(k)}function p(J){const k=J.target;k.removeEventListener("dispose",p),H(k)}function N(J){const k=g.get(J);if(k.__webglInit===void 0)return;const _=J.source,X=s.get(_);if(X){const IA=X[k.__cacheKey];IA.usedTimes--,IA.usedTimes===0&&K(J),Object.keys(X).length===0&&s.delete(_)}g.remove(J)}function K(J){const k=g.get(J);Q.deleteTexture(k.__webglTexture);const _=J.source,X=s.get(_);delete X[k.__cacheKey],E.memory.textures--}function H(J){const k=g.get(J);if(J.depthTexture&&J.depthTexture.dispose(),J.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(k.__webglFramebuffer[X]))for(let IA=0;IA<k.__webglFramebuffer[X].length;IA++)Q.deleteFramebuffer(k.__webglFramebuffer[X][IA]);else Q.deleteFramebuffer(k.__webglFramebuffer[X]);k.__webglDepthbuffer&&Q.deleteRenderbuffer(k.__webglDepthbuffer[X])}else{if(Array.isArray(k.__webglFramebuffer))for(let X=0;X<k.__webglFramebuffer.length;X++)Q.deleteFramebuffer(k.__webglFramebuffer[X]);else Q.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&Q.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&Q.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let X=0;X<k.__webglColorRenderbuffer.length;X++)k.__webglColorRenderbuffer[X]&&Q.deleteRenderbuffer(k.__webglColorRenderbuffer[X]);k.__webglDepthRenderbuffer&&Q.deleteRenderbuffer(k.__webglDepthRenderbuffer)}const _=J.textures;for(let X=0,IA=_.length;X<IA;X++){const $=g.get(_[X]);$.__webglTexture&&(Q.deleteTexture($.__webglTexture),E.memory.textures--),g.remove(_[X])}g.remove(J)}let y=0;function c(){y=0}function m(){const J=y;return J>=C.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+J+" texture units while this GPU supports only "+C.maxTextures),y+=1,J}function x(J){const k=[];return k.push(J.wrapS),k.push(J.wrapT),k.push(J.wrapR||0),k.push(J.magFilter),k.push(J.minFilter),k.push(J.anisotropy),k.push(J.internalFormat),k.push(J.format),k.push(J.type),k.push(J.generateMipmaps),k.push(J.premultiplyAlpha),k.push(J.flipY),k.push(J.unpackAlignment),k.push(J.colorSpace),k.join()}function R(J,k){const _=g.get(J);if(J.isVideoTexture&&fA(J),J.isRenderTargetTexture===!1&&J.version>0&&_.__version!==J.version){const X=J.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{OA(_,J,k);return}}I.bindTexture(Q.TEXTURE_2D,_.__webglTexture,Q.TEXTURE0+k)}function v(J,k){const _=g.get(J);if(J.version>0&&_.__version!==J.version){OA(_,J,k);return}I.bindTexture(Q.TEXTURE_2D_ARRAY,_.__webglTexture,Q.TEXTURE0+k)}function P(J,k){const _=g.get(J);if(J.version>0&&_.__version!==J.version){OA(_,J,k);return}I.bindTexture(Q.TEXTURE_3D,_.__webglTexture,Q.TEXTURE0+k)}function V(J,k){const _=g.get(J);if(J.version>0&&_.__version!==J.version){iI(_,J,k);return}I.bindTexture(Q.TEXTURE_CUBE_MAP,_.__webglTexture,Q.TEXTURE0+k)}const gA={[GC]:Q.REPEAT,[kg]:Q.CLAMP_TO_EDGE,[kQ]:Q.MIRRORED_REPEAT},Z={[HI]:Q.NEAREST,[To]:Q.NEAREST_MIPMAP_NEAREST,[FB]:Q.NEAREST_MIPMAP_LINEAR,[qI]:Q.LINEAR,[yQ]:Q.LINEAR_MIPMAP_NEAREST,[yg]:Q.LINEAR_MIPMAP_LINEAR},AA={[yD]:Q.NEVER,[FD]:Q.ALWAYS,[MD]:Q.LESS,[Me]:Q.LEQUAL,[UD]:Q.EQUAL,[JD]:Q.GEQUAL,[KD]:Q.GREATER,[ND]:Q.NOTEQUAL};function BA(J,k){if(k.type===gg&&A.has("OES_texture_float_linear")===!1&&(k.magFilter===qI||k.magFilter===yQ||k.magFilter===FB||k.magFilter===yg||k.minFilter===qI||k.minFilter===yQ||k.minFilter===FB||k.minFilter===yg)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Q.texParameteri(J,Q.TEXTURE_WRAP_S,gA[k.wrapS]),Q.texParameteri(J,Q.TEXTURE_WRAP_T,gA[k.wrapT]),(J===Q.TEXTURE_3D||J===Q.TEXTURE_2D_ARRAY)&&Q.texParameteri(J,Q.TEXTURE_WRAP_R,gA[k.wrapR]),Q.texParameteri(J,Q.TEXTURE_MAG_FILTER,Z[k.magFilter]),Q.texParameteri(J,Q.TEXTURE_MIN_FILTER,Z[k.minFilter]),k.compareFunction&&(Q.texParameteri(J,Q.TEXTURE_COMPARE_MODE,Q.COMPARE_REF_TO_TEXTURE),Q.texParameteri(J,Q.TEXTURE_COMPARE_FUNC,AA[k.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===HI||k.minFilter!==FB&&k.minFilter!==yg||k.type===gg&&A.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||g.get(k).__currentAnisotropy){const _=A.get("EXT_texture_filter_anisotropic");Q.texParameterf(J,_.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,C.getMaxAnisotropy())),g.get(k).__currentAnisotropy=k.anisotropy}}}function FA(J,k){let _=!1;J.__webglInit===void 0&&(J.__webglInit=!0,k.addEventListener("dispose",M));const X=k.source;let IA=s.get(X);IA===void 0&&(IA={},s.set(X,IA));const $=x(k);if($!==J.__cacheKey){IA[$]===void 0&&(IA[$]={texture:Q.createTexture(),usedTimes:0},E.memory.textures++,_=!0),IA[$].usedTimes++;const GA=IA[J.__cacheKey];GA!==void 0&&(IA[J.__cacheKey].usedTimes--,GA.usedTimes===0&&K(k)),J.__cacheKey=$,J.__webglTexture=IA[$].texture}return _}function OA(J,k,_){let X=Q.TEXTURE_2D;(k.isDataArrayTexture||k.isCompressedArrayTexture)&&(X=Q.TEXTURE_2D_ARRAY),k.isData3DTexture&&(X=Q.TEXTURE_3D);const IA=FA(J,k),$=k.source;I.bindTexture(X,J.__webglTexture,Q.TEXTURE0+_);const GA=g.get($);if($.version!==GA.__version||IA===!0){I.activeTexture(Q.TEXTURE0+_);const tA=zA.getPrimaries(zA.workingColorSpace),aA=k.colorSpace===BC?null:zA.getPrimaries(k.colorSpace),qA=k.colorSpace===BC||tA===aA?Q.NONE:Q.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,k.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,k.unpackAlignment),Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,qA);let QA=w(k.image,!1,C.maxTextureSize);QA=VA(k,QA);const yA=B.convert(k.format,k.colorSpace),XA=B.convert(k.type);let UA=l(k.internalFormat,yA,XA,k.colorSpace,k.isVideoTexture);BA(X,k);let hA;const uA=k.mipmaps,ZA=k.isVideoTexture!==!0,lI=GA.__version===void 0||IA===!0,mA=$.dataReady,L=G(k,QA);if(k.isDepthTexture)UA=Q.DEPTH_COMPONENT16,k.type===gg?UA=Q.DEPTH_COMPONENT32F:k.type===_C?UA=Q.DEPTH_COMPONENT24:k.type===RB&&(UA=Q.DEPTH24_STENCIL8),lI&&(ZA?I.texStorage2D(Q.TEXTURE_2D,1,UA,QA.width,QA.height):I.texImage2D(Q.TEXTURE_2D,0,UA,QA.width,QA.height,0,yA,XA,null));else if(k.isDataTexture)if(uA.length>0){ZA&&lI&&I.texStorage2D(Q.TEXTURE_2D,L,UA,uA[0].width,uA[0].height);for(let z=0,j=uA.length;z<j;z++)hA=uA[z],ZA?mA&&I.texSubImage2D(Q.TEXTURE_2D,z,0,0,hA.width,hA.height,yA,XA,hA.data):I.texImage2D(Q.TEXTURE_2D,z,UA,hA.width,hA.height,0,yA,XA,hA.data);k.generateMipmaps=!1}else ZA?(lI&&I.texStorage2D(Q.TEXTURE_2D,L,UA,QA.width,QA.height),mA&&I.texSubImage2D(Q.TEXTURE_2D,0,0,0,QA.width,QA.height,yA,XA,QA.data)):I.texImage2D(Q.TEXTURE_2D,0,UA,QA.width,QA.height,0,yA,XA,QA.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){ZA&&lI&&I.texStorage3D(Q.TEXTURE_2D_ARRAY,L,UA,uA[0].width,uA[0].height,QA.depth);for(let z=0,j=uA.length;z<j;z++)hA=uA[z],k.format!==Dg?yA!==null?ZA?mA&&I.compressedTexSubImage3D(Q.TEXTURE_2D_ARRAY,z,0,0,0,hA.width,hA.height,QA.depth,yA,hA.data,0,0):I.compressedTexImage3D(Q.TEXTURE_2D_ARRAY,z,UA,hA.width,hA.height,QA.depth,0,hA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ZA?mA&&I.texSubImage3D(Q.TEXTURE_2D_ARRAY,z,0,0,0,hA.width,hA.height,QA.depth,yA,XA,hA.data):I.texImage3D(Q.TEXTURE_2D_ARRAY,z,UA,hA.width,hA.height,QA.depth,0,yA,XA,hA.data)}else{ZA&&lI&&I.texStorage2D(Q.TEXTURE_2D,L,UA,uA[0].width,uA[0].height);for(let z=0,j=uA.length;z<j;z++)hA=uA[z],k.format!==Dg?yA!==null?ZA?mA&&I.compressedTexSubImage2D(Q.TEXTURE_2D,z,0,0,hA.width,hA.height,yA,hA.data):I.compressedTexImage2D(Q.TEXTURE_2D,z,UA,hA.width,hA.height,0,hA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ZA?mA&&I.texSubImage2D(Q.TEXTURE_2D,z,0,0,hA.width,hA.height,yA,XA,hA.data):I.texImage2D(Q.TEXTURE_2D,z,UA,hA.width,hA.height,0,yA,XA,hA.data)}else if(k.isDataArrayTexture)ZA?(lI&&I.texStorage3D(Q.TEXTURE_2D_ARRAY,L,UA,QA.width,QA.height,QA.depth),mA&&I.texSubImage3D(Q.TEXTURE_2D_ARRAY,0,0,0,0,QA.width,QA.height,QA.depth,yA,XA,QA.data)):I.texImage3D(Q.TEXTURE_2D_ARRAY,0,UA,QA.width,QA.height,QA.depth,0,yA,XA,QA.data);else if(k.isData3DTexture)ZA?(lI&&I.texStorage3D(Q.TEXTURE_3D,L,UA,QA.width,QA.height,QA.depth),mA&&I.texSubImage3D(Q.TEXTURE_3D,0,0,0,0,QA.width,QA.height,QA.depth,yA,XA,QA.data)):I.texImage3D(Q.TEXTURE_3D,0,UA,QA.width,QA.height,QA.depth,0,yA,XA,QA.data);else if(k.isFramebufferTexture){if(lI)if(ZA)I.texStorage2D(Q.TEXTURE_2D,L,UA,QA.width,QA.height);else{let z=QA.width,j=QA.height;for(let sA=0;sA<L;sA++)I.texImage2D(Q.TEXTURE_2D,sA,UA,z,j,0,yA,XA,null),z>>=1,j>>=1}}else if(uA.length>0){if(ZA&&lI){const z=nI(uA[0]);I.texStorage2D(Q.TEXTURE_2D,L,UA,z.width,z.height)}for(let z=0,j=uA.length;z<j;z++)hA=uA[z],ZA?mA&&I.texSubImage2D(Q.TEXTURE_2D,z,0,0,yA,XA,hA):I.texImage2D(Q.TEXTURE_2D,z,UA,yA,XA,hA);k.generateMipmaps=!1}else if(ZA){if(lI){const z=nI(QA);I.texStorage2D(Q.TEXTURE_2D,L,UA,z.width,z.height)}mA&&I.texSubImage2D(Q.TEXTURE_2D,0,0,0,yA,XA,QA)}else I.texImage2D(Q.TEXTURE_2D,0,UA,yA,XA,QA);S(k)&&h(X),GA.__version=$.version,k.onUpdate&&k.onUpdate(k)}J.__version=k.version}function iI(J,k,_){if(k.image.length!==6)return;const X=FA(J,k),IA=k.source;I.bindTexture(Q.TEXTURE_CUBE_MAP,J.__webglTexture,Q.TEXTURE0+_);const $=g.get(IA);if(IA.version!==$.__version||X===!0){I.activeTexture(Q.TEXTURE0+_);const GA=zA.getPrimaries(zA.workingColorSpace),tA=k.colorSpace===BC?null:zA.getPrimaries(k.colorSpace),aA=k.colorSpace===BC||GA===tA?Q.NONE:Q.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,k.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,k.unpackAlignment),Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,aA);const qA=k.isCompressedTexture||k.image[0].isCompressedTexture,QA=k.image[0]&&k.image[0].isDataTexture,yA=[];for(let j=0;j<6;j++)!qA&&!QA?yA[j]=w(k.image[j],!0,C.maxCubemapSize):yA[j]=QA?k.image[j].image:k.image[j],yA[j]=VA(k,yA[j]);const XA=yA[0],UA=B.convert(k.format,k.colorSpace),hA=B.convert(k.type),uA=l(k.internalFormat,UA,hA,k.colorSpace),ZA=k.isVideoTexture!==!0,lI=$.__version===void 0||X===!0,mA=IA.dataReady;let L=G(k,XA);BA(Q.TEXTURE_CUBE_MAP,k);let z;if(qA){ZA&&lI&&I.texStorage2D(Q.TEXTURE_CUBE_MAP,L,uA,XA.width,XA.height);for(let j=0;j<6;j++){z=yA[j].mipmaps;for(let sA=0;sA<z.length;sA++){const eA=z[sA];k.format!==Dg?UA!==null?ZA?mA&&I.compressedTexSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,sA,0,0,eA.width,eA.height,UA,eA.data):I.compressedTexImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,sA,uA,eA.width,eA.height,0,eA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ZA?mA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,sA,0,0,eA.width,eA.height,UA,hA,eA.data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,sA,uA,eA.width,eA.height,0,UA,hA,eA.data)}}}else{if(z=k.mipmaps,ZA&&lI){z.length>0&&L++;const j=nI(yA[0]);I.texStorage2D(Q.TEXTURE_CUBE_MAP,L,uA,j.width,j.height)}for(let j=0;j<6;j++)if(QA){ZA?mA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,yA[j].width,yA[j].height,UA,hA,yA[j].data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,uA,yA[j].width,yA[j].height,0,UA,hA,yA[j].data);for(let sA=0;sA<z.length;sA++){const eA=z[sA].image[j].image;ZA?mA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,sA+1,0,0,eA.width,eA.height,UA,hA,eA.data):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,sA+1,uA,eA.width,eA.height,0,UA,hA,eA.data)}}else{ZA?mA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,UA,hA,yA[j]):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,uA,UA,hA,yA[j]);for(let sA=0;sA<z.length;sA++){const eA=z[sA];ZA?mA&&I.texSubImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,sA+1,0,0,UA,hA,eA.image[j]):I.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,sA+1,uA,UA,hA,eA.image[j])}}}S(k)&&h(Q.TEXTURE_CUBE_MAP),$.__version=IA.version,k.onUpdate&&k.onUpdate(k)}J.__version=k.version}function W(J,k,_,X,IA,$){const GA=B.convert(_.format,_.colorSpace),tA=B.convert(_.type),aA=l(_.internalFormat,GA,tA,_.colorSpace);if(!g.get(k).__hasExternalTextures){const qA=Math.max(1,k.width>>$),QA=Math.max(1,k.height>>$);IA===Q.TEXTURE_3D||IA===Q.TEXTURE_2D_ARRAY?I.texImage3D(IA,$,aA,qA,QA,k.depth,0,GA,tA,null):I.texImage2D(IA,$,aA,qA,QA,0,GA,tA,null)}I.bindFramebuffer(Q.FRAMEBUFFER,J),jA(k)?i.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,X,IA,g.get(_).__webglTexture,0,NA(k)):(IA===Q.TEXTURE_2D||IA>=Q.TEXTURE_CUBE_MAP_POSITIVE_X&&IA<=Q.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&Q.framebufferTexture2D(Q.FRAMEBUFFER,X,IA,g.get(_).__webglTexture,$),I.bindFramebuffer(Q.FRAMEBUFFER,null)}function CA(J,k,_){if(Q.bindRenderbuffer(Q.RENDERBUFFER,J),k.depthBuffer&&!k.stencilBuffer){let X=Q.DEPTH_COMPONENT24;if(_||jA(k)){const IA=k.depthTexture;IA&&IA.isDepthTexture&&(IA.type===gg?X=Q.DEPTH_COMPONENT32F:IA.type===_C&&(X=Q.DEPTH_COMPONENT24));const $=NA(k);jA(k)?i.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,$,X,k.width,k.height):Q.renderbufferStorageMultisample(Q.RENDERBUFFER,$,X,k.width,k.height)}else Q.renderbufferStorage(Q.RENDERBUFFER,X,k.width,k.height);Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.RENDERBUFFER,J)}else if(k.depthBuffer&&k.stencilBuffer){const X=NA(k);_&&jA(k)===!1?Q.renderbufferStorageMultisample(Q.RENDERBUFFER,X,Q.DEPTH24_STENCIL8,k.width,k.height):jA(k)?i.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,X,Q.DEPTH24_STENCIL8,k.width,k.height):Q.renderbufferStorage(Q.RENDERBUFFER,Q.DEPTH_STENCIL,k.width,k.height),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.RENDERBUFFER,J)}else{const X=k.textures;for(let IA=0;IA<X.length;IA++){const $=X[IA],GA=B.convert($.format,$.colorSpace),tA=B.convert($.type),aA=l($.internalFormat,GA,tA,$.colorSpace),qA=NA(k);_&&jA(k)===!1?Q.renderbufferStorageMultisample(Q.RENDERBUFFER,qA,aA,k.width,k.height):jA(k)?i.renderbufferStorageMultisampleEXT(Q.RENDERBUFFER,qA,aA,k.width,k.height):Q.renderbufferStorage(Q.RENDERBUFFER,aA,k.width,k.height)}}Q.bindRenderbuffer(Q.RENDERBUFFER,null)}function SA(J,k){if(k&&k.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(Q.FRAMEBUFFER,J),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(k.depthTexture).__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)&&(k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0),R(k.depthTexture,0);const _=g.get(k.depthTexture).__webglTexture,X=NA(k);if(k.depthTexture.format===vC)jA(k)?i.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.TEXTURE_2D,_,0,X):Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.DEPTH_ATTACHMENT,Q.TEXTURE_2D,_,0);else if(k.depthTexture.format===pB)jA(k)?i.framebufferTexture2DMultisampleEXT(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.TEXTURE_2D,_,0,X):Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.DEPTH_STENCIL_ATTACHMENT,Q.TEXTURE_2D,_,0);else throw new Error("Unknown depthTexture format")}function oA(J){const k=g.get(J),_=J.isWebGLCubeRenderTarget===!0;if(J.depthTexture&&!k.__autoAllocateDepthBuffer){if(_)throw new Error("target.depthTexture not supported in Cube render targets");SA(k.__webglFramebuffer,J)}else if(_){k.__webglDepthbuffer=[];for(let X=0;X<6;X++)I.bindFramebuffer(Q.FRAMEBUFFER,k.__webglFramebuffer[X]),k.__webglDepthbuffer[X]=Q.createRenderbuffer(),CA(k.__webglDepthbuffer[X],J,!1)}else I.bindFramebuffer(Q.FRAMEBUFFER,k.__webglFramebuffer),k.__webglDepthbuffer=Q.createRenderbuffer(),CA(k.__webglDepthbuffer,J,!1);I.bindFramebuffer(Q.FRAMEBUFFER,null)}function _A(J,k,_){const X=g.get(J);k!==void 0&&W(X.__webglFramebuffer,J,J.texture,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,0),_!==void 0&&oA(J)}function vA(J){const k=J.texture,_=g.get(J),X=g.get(k);J.addEventListener("dispose",p);const IA=J.textures,$=J.isWebGLCubeRenderTarget===!0,GA=IA.length>1;if(GA||(X.__webglTexture===void 0&&(X.__webglTexture=Q.createTexture()),X.__version=k.version,E.memory.textures++),$){_.__webglFramebuffer=[];for(let tA=0;tA<6;tA++)if(k.mipmaps&&k.mipmaps.length>0){_.__webglFramebuffer[tA]=[];for(let aA=0;aA<k.mipmaps.length;aA++)_.__webglFramebuffer[tA][aA]=Q.createFramebuffer()}else _.__webglFramebuffer[tA]=Q.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){_.__webglFramebuffer=[];for(let tA=0;tA<k.mipmaps.length;tA++)_.__webglFramebuffer[tA]=Q.createFramebuffer()}else _.__webglFramebuffer=Q.createFramebuffer();if(GA)for(let tA=0,aA=IA.length;tA<aA;tA++){const qA=g.get(IA[tA]);qA.__webglTexture===void 0&&(qA.__webglTexture=Q.createTexture(),E.memory.textures++)}if(J.samples>0&&jA(J)===!1){_.__webglMultisampledFramebuffer=Q.createFramebuffer(),_.__webglColorRenderbuffer=[],I.bindFramebuffer(Q.FRAMEBUFFER,_.__webglMultisampledFramebuffer);for(let tA=0;tA<IA.length;tA++){const aA=IA[tA];_.__webglColorRenderbuffer[tA]=Q.createRenderbuffer(),Q.bindRenderbuffer(Q.RENDERBUFFER,_.__webglColorRenderbuffer[tA]);const qA=B.convert(aA.format,aA.colorSpace),QA=B.convert(aA.type),yA=l(aA.internalFormat,qA,QA,aA.colorSpace,J.isXRRenderTarget===!0),XA=NA(J);Q.renderbufferStorageMultisample(Q.RENDERBUFFER,XA,yA,J.width,J.height),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+tA,Q.RENDERBUFFER,_.__webglColorRenderbuffer[tA])}Q.bindRenderbuffer(Q.RENDERBUFFER,null),J.depthBuffer&&(_.__webglDepthRenderbuffer=Q.createRenderbuffer(),CA(_.__webglDepthRenderbuffer,J,!0)),I.bindFramebuffer(Q.FRAMEBUFFER,null)}}if($){I.bindTexture(Q.TEXTURE_CUBE_MAP,X.__webglTexture),BA(Q.TEXTURE_CUBE_MAP,k);for(let tA=0;tA<6;tA++)if(k.mipmaps&&k.mipmaps.length>0)for(let aA=0;aA<k.mipmaps.length;aA++)W(_.__webglFramebuffer[tA][aA],J,k,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+tA,aA);else W(_.__webglFramebuffer[tA],J,k,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+tA,0);S(k)&&h(Q.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(GA){for(let tA=0,aA=IA.length;tA<aA;tA++){const qA=IA[tA],QA=g.get(qA);I.bindTexture(Q.TEXTURE_2D,QA.__webglTexture),BA(Q.TEXTURE_2D,qA),W(_.__webglFramebuffer,J,qA,Q.COLOR_ATTACHMENT0+tA,Q.TEXTURE_2D,0),S(qA)&&h(Q.TEXTURE_2D)}I.unbindTexture()}else{let tA=Q.TEXTURE_2D;if((J.isWebGL3DRenderTarget||J.isWebGLArrayRenderTarget)&&(tA=J.isWebGL3DRenderTarget?Q.TEXTURE_3D:Q.TEXTURE_2D_ARRAY),I.bindTexture(tA,X.__webglTexture),BA(tA,k),k.mipmaps&&k.mipmaps.length>0)for(let aA=0;aA<k.mipmaps.length;aA++)W(_.__webglFramebuffer[aA],J,k,Q.COLOR_ATTACHMENT0,tA,aA);else W(_.__webglFramebuffer,J,k,Q.COLOR_ATTACHMENT0,tA,0);S(k)&&h(tA),I.unbindTexture()}J.depthBuffer&&oA(J)}function f(J){const k=J.textures;for(let _=0,X=k.length;_<X;_++){const IA=k[_];if(S(IA)){const $=J.isWebGLCubeRenderTarget?Q.TEXTURE_CUBE_MAP:Q.TEXTURE_2D,GA=g.get(IA).__webglTexture;I.bindTexture($,GA),h($),I.unbindTexture()}}}const aI=[],MA=[];function oI(J){if(J.samples>0){if(jA(J)===!1){const k=J.textures,_=J.width,X=J.height;let IA=Q.COLOR_BUFFER_BIT;const $=J.stencilBuffer?Q.DEPTH_STENCIL_ATTACHMENT:Q.DEPTH_ATTACHMENT,GA=g.get(J),tA=k.length>1;if(tA)for(let aA=0;aA<k.length;aA++)I.bindFramebuffer(Q.FRAMEBUFFER,GA.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+aA,Q.RENDERBUFFER,null),I.bindFramebuffer(Q.FRAMEBUFFER,GA.__webglFramebuffer),Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0+aA,Q.TEXTURE_2D,null,0);I.bindFramebuffer(Q.READ_FRAMEBUFFER,GA.__webglMultisampledFramebuffer),I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,GA.__webglFramebuffer);for(let aA=0;aA<k.length;aA++){if(J.resolveDepthBuffer&&(J.depthBuffer&&(IA|=Q.DEPTH_BUFFER_BIT),J.stencilBuffer&&J.resolveStencilBuffer&&(IA|=Q.STENCIL_BUFFER_BIT)),tA){Q.framebufferRenderbuffer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.RENDERBUFFER,GA.__webglColorRenderbuffer[aA]);const qA=g.get(k[aA]).__webglTexture;Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,qA,0)}Q.blitFramebuffer(0,0,_,X,0,0,_,X,IA,Q.NEAREST),o===!0&&(aI.length=0,MA.length=0,aI.push(Q.COLOR_ATTACHMENT0+aA),J.depthBuffer&&J.resolveDepthBuffer===!1&&(aI.push($),MA.push($),Q.invalidateFramebuffer(Q.DRAW_FRAMEBUFFER,MA)),Q.invalidateFramebuffer(Q.READ_FRAMEBUFFER,aI))}if(I.bindFramebuffer(Q.READ_FRAMEBUFFER,null),I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null),tA)for(let aA=0;aA<k.length;aA++){I.bindFramebuffer(Q.FRAMEBUFFER,GA.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+aA,Q.RENDERBUFFER,GA.__webglColorRenderbuffer[aA]);const qA=g.get(k[aA]).__webglTexture;I.bindFramebuffer(Q.FRAMEBUFFER,GA.__webglFramebuffer),Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0+aA,Q.TEXTURE_2D,qA,0)}I.bindFramebuffer(Q.DRAW_FRAMEBUFFER,GA.__webglMultisampledFramebuffer)}else if(J.depthBuffer&&J.resolveDepthBuffer===!1&&o){const k=J.stencilBuffer?Q.DEPTH_STENCIL_ATTACHMENT:Q.DEPTH_ATTACHMENT;Q.invalidateFramebuffer(Q.DRAW_FRAMEBUFFER,[k])}}}function NA(J){return Math.min(C.maxSamples,J.samples)}function jA(J){const k=g.get(J);return J.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function fA(J){const k=E.render.frame;t.get(J)!==k&&(t.set(J,k),J.update())}function VA(J,k){const _=J.colorSpace,X=J.format,IA=J.type;return J.isCompressedTexture===!0||J.isVideoTexture===!0||_!==UI&&_!==BC&&(zA.getTransfer(_)===eI?(X!==Dg||IA!==Mg)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",_)),k}function nI(J){return typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement?(e.width=J.naturalWidth||J.width,e.height=J.naturalHeight||J.height):typeof VideoFrame<"u"&&J instanceof VideoFrame?(e.width=J.displayWidth,e.height=J.displayHeight):(e.width=J.width,e.height=J.height),e}this.allocateTextureUnit=m,this.resetTextureUnits=c,this.setTexture2D=R,this.setTexture2DArray=v,this.setTexture3D=P,this.setTextureCube=V,this.rebindTextures=_A,this.setupRenderTarget=vA,this.updateRenderTargetMipmap=f,this.updateMultisampleRenderTarget=oI,this.setupDepthRenderbuffer=oA,this.setupFrameBufferTexture=W,this.useMultisampledRTT=jA}function Pw(Q,A){function I(g,C=BC){let B;const E=zA.getTransfer(C);if(g===Mg)return Q.UNSIGNED_BYTE;if(g===Oo)return Q.UNSIGNED_SHORT_4_4_4_4;if(g===_o)return Q.UNSIGNED_SHORT_5_5_5_1;if(g===eD)return Q.UNSIGNED_INT_5_9_9_9_REV;if(g===iD)return Q.BYTE;if(g===oD)return Q.SHORT;if(g===xo)return Q.UNSIGNED_SHORT;if(g===bo)return Q.INT;if(g===_C)return Q.UNSIGNED_INT;if(g===gg)return Q.FLOAT;if(g===CC)return Q.HALF_FLOAT;if(g===tD)return Q.ALPHA;if(g===aD)return Q.RGB;if(g===Dg)return Q.RGBA;if(g===sD)return Q.LUMINANCE;if(g===DD)return Q.LUMINANCE_ALPHA;if(g===vC)return Q.DEPTH_COMPONENT;if(g===pB)return Q.DEPTH_STENCIL;if(g===vo)return Q.RED;if(g===Zo)return Q.RED_INTEGER;if(g===hD)return Q.RG;if(g===Wo)return Q.RG_INTEGER;if(g===Po)return Q.RGBA_INTEGER;if(g===qE||g===dE||g===YE||g===LE)if(E===eI)if(B=A.get("WEBGL_compressed_texture_s3tc_srgb"),B!==null){if(g===qE)return B.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(g===dE)return B.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(g===YE)return B.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(g===LE)return B.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(B=A.get("WEBGL_compressed_texture_s3tc"),B!==null){if(g===qE)return B.COMPRESSED_RGB_S3TC_DXT1_EXT;if(g===dE)return B.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(g===YE)return B.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(g===LE)return B.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(g===jo||g===Vo||g===Xo||g===zo)if(B=A.get("WEBGL_compressed_texture_pvrtc"),B!==null){if(g===jo)return B.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(g===Vo)return B.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(g===Xo)return B.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(g===zo)return B.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(g===$o||g===Ae||g===Ie)if(B=A.get("WEBGL_compressed_texture_etc"),B!==null){if(g===$o||g===Ae)return E===eI?B.COMPRESSED_SRGB8_ETC2:B.COMPRESSED_RGB8_ETC2;if(g===Ie)return E===eI?B.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:B.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(g===ge||g===Ce||g===Be||g===Qe||g===Ee||g===ie||g===oe||g===ee||g===te||g===ae||g===se||g===De||g===he||g===re)if(B=A.get("WEBGL_compressed_texture_astc"),B!==null){if(g===ge)return E===eI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:B.COMPRESSED_RGBA_ASTC_4x4_KHR;if(g===Ce)return E===eI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:B.COMPRESSED_RGBA_ASTC_5x4_KHR;if(g===Be)return E===eI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:B.COMPRESSED_RGBA_ASTC_5x5_KHR;if(g===Qe)return E===eI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:B.COMPRESSED_RGBA_ASTC_6x5_KHR;if(g===Ee)return E===eI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:B.COMPRESSED_RGBA_ASTC_6x6_KHR;if(g===ie)return E===eI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:B.COMPRESSED_RGBA_ASTC_8x5_KHR;if(g===oe)return E===eI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:B.COMPRESSED_RGBA_ASTC_8x6_KHR;if(g===ee)return E===eI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:B.COMPRESSED_RGBA_ASTC_8x8_KHR;if(g===te)return E===eI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:B.COMPRESSED_RGBA_ASTC_10x5_KHR;if(g===ae)return E===eI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:B.COMPRESSED_RGBA_ASTC_10x6_KHR;if(g===se)return E===eI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:B.COMPRESSED_RGBA_ASTC_10x8_KHR;if(g===De)return E===eI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:B.COMPRESSED_RGBA_ASTC_10x10_KHR;if(g===he)return E===eI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:B.COMPRESSED_RGBA_ASTC_12x10_KHR;if(g===re)return E===eI?B.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:B.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(g===HE||g===Se||g===ne)if(B=A.get("EXT_texture_compression_bptc"),B!==null){if(g===HE)return E===eI?B.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:B.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(g===Se)return B.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(g===ne)return B.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(g===rD||g===we||g===ce||g===Ge)if(B=A.get("EXT_texture_compression_rgtc"),B!==null){if(g===HE)return B.COMPRESSED_RED_RGTC1_EXT;if(g===we)return B.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(g===ce)return B.COMPRESSED_RED_GREEN_RGTC2_EXT;if(g===Ge)return B.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return g===RB?Q.UNSIGNED_INT_24_8:Q[g]!==void 0?Q[g]:null}return{convert:I}}class jw extends VI{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class Pg extends BI{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vw={type:"move"};class wi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pg,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pg,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pg,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,B=null,E=null;const i=this._targetRay,o=this._grip,e=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(e&&A.hand){E=!0;for(const w of A.hand.values()){const S=I.getJointPose(w,g),h=this._getHandJoint(e,w);S!==null&&(h.matrix.fromArray(S.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=S.radius),h.visible=S!==null}const t=e.joints["index-finger-tip"],a=e.joints["thumb-tip"],s=t.position.distanceTo(a.position),D=.02,n=.005;e.inputState.pinching&&s>D+n?(e.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!e.inputState.pinching&&s<=D-n&&(e.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(B=I.getPose(A.gripSpace,g),B!==null&&(o.matrix.fromArray(B.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,B.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(B.linearVelocity)):o.hasLinearVelocity=!1,B.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(B.angularVelocity)):o.hasAngularVelocity=!1));i!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&B!==null&&(C=B),C!==null&&(i.matrix.fromArray(C.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,C.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(C.linearVelocity)):i.hasLinearVelocity=!1,C.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(C.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(Vw)))}return i!==null&&(i.visible=C!==null),o!==null&&(o.visible=B!==null),e!==null&&(e.visible=E!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new Pg;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}const Xw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

`);this.workerSourceURL=URL.createObjectURL(new Blob([E]))}),this.decoderPending}_getWorker(A,I){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const C=new Worker(this.workerSourceURL);C._callbacks={},C._taskCosts={},C._taskLoad=0,C.postMessage({type:"init",decoderConfig:this.decoderConfig}),C.onmessage=function(B){const E=B.data;switch(E.type){case"decode":C._callbacks[E.id].resolve(E);break;case"error":C._callbacks[E.id].reject(E);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+E.type+'"')}},this.workerPool.push(C)}else this.workerPool.sort(function(C,B){return C._taskLoad>B._taskLoad?-1:1});const g=this.workerPool[this.workerPool.length-1];return g._taskCosts[A]=I,g._taskLoad+=I,g})}_releaseTask(A,I){A._taskLoad-=A._taskCosts[I],delete A._callbacks[I],delete A._taskCosts[I]}debug(){console.log("Task load: ",this.workerPool.map(A=>A._taskLoad))}dispose(){for(let A=0;A<this.workerPool.length;++A)this.workerPool[A].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function WG(){let Q,A;onmessage=function(E){const i=E.data;switch(i.type){case"init":Q=i.decoderConfig,A=new Promise(function(t){Q.onModuleLoaded=function(a){t({draco:a})},DracoDecoderModule(Q)});break;case"decode":const o=i.buffer,e=i.taskConfig;A.then(t=>{const a=t.draco,s=new a.Decoder;try{const D=I(a,s,new Int8Array(o),e),n=D.attributes.map(w=>w.array.buffer);D.index&&n.push(D.index.array.buffer),self.postMessage({type:"decode",id:i.id,geometry:D},n)}catch(D){console.error(D),self.postMessage({type:"error",id:i.id,error:D.message})}finally{a.destroy(s)}});break}};function I(E,i,o,e){const t=e.attributeIDs,a=e.attributeTypes;let s,D;const n=i.GetEncodedGeometryType(o);if(n===E.TRIANGULAR_MESH)s=new E.Mesh,D=i.DecodeArrayToMesh(o,o.byteLength,s);else if(n===E.POINT_CLOUD)s=new E.PointCloud,D=i.DecodeArrayToPointCloud(o,o.byteLength,s);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!D.ok()||s.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+D.error_msg());const w={index:null,attributes:[]};for(const S in t){const h=self[a[S]];let l,G;if(e.useUniqueIDs)G=t[S],l=i.GetAttributeByUniqueId(s,G);else{if(G=i.GetAttributeId(s,E[t[S]]),G===-1)continue;l=i.GetAttribute(s,G)}const M=C(E,i,s,S,h,l);S==="color"&&(M.vertexColorSpace=e.vertexColorSpace),w.attributes.push(M)}return n===E.TRIANGULAR_MESH&&(w.index=g(E,i,s)),E.destroy(s),w}function g(E,i,o){const e=o.num_faces()*3,t=e*4,a=E._malloc(t);i.GetTrianglesUInt32Array(o,t,a);const s=new Uint32Array(E.HEAPF32.buffer,a,e).slice();return E._free(a),{array:s,itemSize:1}}function C(E,i,o,e,t,a){const s=a.num_components(),D=o.num_points()*s,n=D*t.BYTES_PER_ELEMENT,w=B(E,t),S=E._malloc(n);i.GetAttributeDataArrayForAllPoints(o,a,w,n,S);const h=new t(E.HEAPF32.buffer,S,D).slice();return E._free(S),{name:e,array:h,itemSize:s}}function B(E,i){switch(i){case Float32Array:return E.DT_FLOAT32;case Int8Array:return E.DT_INT8;case Int16Array:return E.DT_INT16;case Int32Array:return E.DT_INT32;case Uint8Array:return E.DT_UINT8;case Uint16Array:return E.DT_UINT16;case Uint32Array:return E.DT_UINT32}}}class PG extends Pg{constructor(){super();DA(this,"mixer");DA(this,"glTFLoader");const I=new ZG;I.setDecoderPath("jsm/libs/draco/"),this.glTFLoader=new co,this.glTFLoader.setDRACOLoader(I)}async init(I){const[g,C,B,E]=await Promise.all([this.glTFLoader.loadAsync("./models/eve$@walk_compressed.glb"),this.glTFLoader.loadAsync("./models/eve@idle.glb"),this.glTFLoader.loadAsync("./models/eve@jump.glb"),this.glTFLoader.loadAsync("./models/eve@pose.glb")]);g.scene.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),this.mixer=new Zc(g.scene),I.idle=this.mixer.clipAction(C.animations[0]),I.walk=this.mixer.clipAction(Sc.subclip(g.animations[0],"walk",0,42)),B.animations[0].tracks=B.animations[0].tracks.filter(function(i){return!i.name.endsWith(".position")}),console.log(B.animations[0].tracks),I.jump=this.mixer.clipAction(B.animations[0]),I.pose=this.mixer.clipAction(E.animations[0]),I.idle.play(),this.add(g.scene)}update(I){var g;(g=this.mixer)==null||g.update(I)}}class jG{constructor(A,I){DA(this,"scene");DA(this,"wait",!1);DA(this,"animationActions",{});DA(this,"activeAction");DA(this,"speed",0);DA(this,"keyboard");DA(this,"model");this.scene=A,this.keyboard=I}async init(){this.model=new PG,await this.model.init(this.animationActions),this.activeAction=this.animationActions.idle,this.scene.add(this.model)}setAction(A){var I;this.activeAction!=A&&((I=this.activeAction)==null||I.fadeOut(.1),A.reset().fadeIn(.1).play(),this.activeAction=A)}update(A){var I,g;if(!this.wait){let C=!1;this.keyboard.keyMap.Space&&(this.setAction(this.animationActions.jump),C=!0,this.wait=!0,setTimeout(()=>this.wait=!1,1200)),!C&&(this.keyboard.keyMap.KeyW||this.keyboard.keyMap.KeyA||this.keyboard.keyMap.KeyS||this.keyboard.keyMap.KeyD)&&(this.setAction(this.animationActions.walk),C=!0),!C&&this.keyboard.keyMap.KeyQ&&(this.setAction(this.animationActions.pose),C=!0),!C&&this.setAction(this.animationActions.idle)}this.activeAction===this.animationActions.walk?(I=this.model)==null||I.update(A*2):(g=this.model)==null||g.update(A)}}class VG{constructor(A,I,g){DA(this,"camera");DA(this,"pivot",new BI);DA(this,"yaw",new BI);DA(this,"pitch",new BI);DA(this,"onDocumentMouseMove",A=>{this.yaw.rotation.y-=A.movementX*.002;const I=this.pitch.rotation.x-A.movementY*.002;I>-1&&I<1&&(this.pitch.rotation.x=I)});DA(this,"onDocumentMouseWheel",A=>{A.preventDefault();const I=this.camera.position.z+A.deltaY*.005;I>=.5&&I<=10&&(this.camera.position.z=I)});this.camera=I,this.yaw.position.y=.75,document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===g.domElement?(g.domElement.addEventListener("mousemove",this.onDocumentMouseMove),g.domElement.addEventListener("wheel",this.onDocumentMouseWheel)):(g.domElement.removeEventListener("mousemove",this.onDocumentMouseMove),g.domElement.removeEventListener("wheel",this.onDocumentMouseWheel))}),A.add(this.pivot),this.pivot.add(this.yaw),this.yaw.add(this.pitch),this.pitch.add(I)}}class XG{constructor(A){DA(this,"keyMap",{});DA(this,"onDocumentKey",A=>{this.keyMap[A.code]=A.type==="keydown"});document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===A.domElement?(document.addEventListener("keydown",this.onDocumentKey),document.addEventListener("keyup",this.onDocumentKey)):(document.removeEventListener("keydown",this.onDocumentKey),document.removeEventListener("keyup",this.onDocumentKey))})}}class gs{constructor(A,I,g,C,B=[0,0,0],E){DA(this,"scene");DA(this,"world");DA(this,"ui");DA(this,"body");DA(this,"animationController");DA(this,"vector",new q);DA(this,"inputVelocity",new q);DA(this,"euler",new ZI);DA(this,"quaternion",new dI);DA(this,"followTarget",new BI);DA(this,"grounded",!1);DA(this,"rotationMatrix",new pA);DA(this,"targetQuaternion",new dI);DA(this,"followCam");DA(this,"keyboard");DA(this,"wait",!1);DA(this,"handle",-1);this.scene=A,this.world=C,this.ui=E,this.keyboard=new XG(g),this.followCam=new VG(this.scene,I,g),A.add(this.followTarget),this.body=C.createRigidBody(OI.dynamic().setTranslation(...B).enabledRotations(!1,!1,!1).setCanSleep(!1)),this.handle=this.body.handle;const i=EI.capsule(.5,.15).setTranslation(0,.645,0).setMass(1).setFriction(0).setActiveEvents(iQ.COLLISION_EVENTS);C.createCollider(i,this.body)}async init(){this.animationController=new jG(this.scene,this.keyboard),await this.animationController.init()}setGrounded(A){A!=this.grounded&&(this.grounded=A,A?(this.body.setLinearDamping(4),setTimeout(()=>{this.wait=!1},250)):this.body.setLinearDamping(0))}reset(){this.body.setLinvel(new q(0,0,0),!0),this.body.setTranslation(new q(0,1,0),!0),this.ui.reset()}update(A){var g,C,B,E,i,o,e,t,a,s,D,n,w;this.inputVelocity.set(0,0,0);let I=1;this.grounded&&(this.keyboard.keyMap.KeyW&&(this.inputVelocity.z=-1,I=9.5),this.keyboard.keyMap.KeyS&&(this.inputVelocity.z=1,I=9.5),this.keyboard.keyMap.KeyA&&(this.inputVelocity.x=-1,I=9.5),this.keyboard.keyMap.KeyD&&(this.inputVelocity.x=1,I=9.5),this.inputVelocity.setLength(A*I),!this.wait&&this.keyboard.keyMap.Space&&(this.wait=!0,this.inputVelocity.y=5)),this.euler.y=this.followCam.yaw.rotation.y,this.quaternion.setFromEuler(this.euler),this.inputVelocity.applyQuaternion(this.quaternion),this.body.applyImpulse(this.inputVelocity,!0),this.body.translation().y<-3&&this.reset(),this.followTarget.position.copy(this.body.translation()),this.followTarget.getWorldPosition(this.vector),this.followCam.pivot.position.lerp(this.vector,A*10),(C=(g=this.animationController)==null?void 0:g.model)==null||C.position.lerp(this.vector,A*20),this.rotationMatrix.lookAt(this.followTarget.position,(E=(B=this.animationController)==null?void 0:B.model)==null?void 0:E.position,(o=(i=this.animationController)==null?void 0:i.model)==null?void 0:o.up),this.targetQuaternion.setFromRotationMatrix(this.rotationMatrix),((t=(e=this.animationController)==null?void 0:e.model)==null?void 0:t.position.distanceTo(this.followTarget.position))>1e-4&&!((s=(a=this.animationController)==null?void 0:a.model)!=null&&s.quaternion.equals(this.targetQuaternion))&&(this.targetQuaternion.z=0,this.targetQuaternion.x=0,this.targetQuaternion.normalize(),(n=(D=this.animationController)==null?void 0:D.model)==null||n.quaternion.rotateTowards(this.targetQuaternion,A*20)),(w=this.animationController)==null||w.update(A)}}class zG extends Kc{constructor(A){super(A),this.type=CC}parse(A){const I=function(h,l){switch(h){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(l||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(l||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(l||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(l||""))}},g=`
`,C=function(h,l,G){l=l||1024;let M=h.pos,p=-1,N=0,K="",H=String.fromCharCode.apply(null,new Uint16Array(h.subarray(M,M+128)));for(;0>(p=H.indexOf(g))&&N<l&&M<h.byteLength;)K+=H,N+=H.length,M+=128,H+=String.fromCharCode.apply(null,new Uint16Array(h.subarray(M,M+128)));return-1<p?(h.pos+=N+p+1,K+H.slice(0,p)):!1},B=function(h){const l=/^#\?(\S+)/,G=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,M=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,p=/^\s*FORMAT=(\S+)\s*$/,N=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,K={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let H,y;for((h.pos>=h.byteLength||!(H=C(h)))&&I(1,"no header found"),(y=H.match(l))||I(3,"bad initial token"),K.valid|=1,K.programtype=y[1],K.string+=H+`
`;H=C(h),H!==!1;){if(K.string+=H+`
`,H.charAt(0)==="#"){K.comments+=H+`
`;continue}if((y=H.match(G))&&(K.gamma=parseFloat(y[1])),(y=H.match(M))&&(K.exposure=parseFloat(y[1])),(y=H.match(p))&&(K.valid|=2,K.format=y[1]),(y=H.match(N))&&(K.valid|=4,K.height=parseInt(y[1],10),K.width=parseInt(y[2],10)),K.valid&2&&K.valid&4)break}return K.valid&2||I(3,"missing format specifier"),K.valid&4||I(3,"missing image size specifier"),K},E=function(h,l,G){const M=l;if(M<8||M>32767||h[0]!==2||h[1]!==2||h[2]&128)return new Uint8Array(h);M!==(h[2]<<8|h[3])&&I(3,"wrong scanline width");const p=new Uint8Array(4*l*G);p.length||I(4,"unable to allocate buffer space");let N=0,K=0;const H=4*M,y=new Uint8Array(4),c=new Uint8Array(H);let m=G;for(;m>0&&K<h.byteLength;){K+4>h.byteLength&&I(1),y[0]=h[K++],y[1]=h[K++],y[2]=h[K++],y[3]=h[K++],(y[0]!=2||y[1]!=2||(y[2]<<8|y[3])!=M)&&I(3,"bad rgbe scanline format");let x=0,R;for(;x<H&&K<h.byteLength;){R=h[K++];const P=R>128;if(P&&(R-=128),(R===0||x+R>H)&&I(3,"bad scanline data"),P){const V=h[K++];for(let gA=0;gA<R;gA++)c[x++]=V}else c.set(h.subarray(K,K+R),x),x+=R,K+=R}const v=M;for(let P=0;P<v;P++){let V=0;p[N]=c[P+V],V+=M,p[N+1]=c[P+V],V+=M,p[N+2]=c[P+V],V+=M,p[N+3]=c[P+V],N+=4}m--}return p},i=function(h,l,G,M){const p=h[l+3],N=Math.pow(2,p-128)/255;G[M+0]=h[l+0]*N,G[M+1]=h[l+1]*N,G[M+2]=h[l+2]*N,G[M+3]=1},o=function(h,l,G,M){const p=h[l+3],N=Math.pow(2,p-128)/255;G[M+0]=TQ.toHalfFloat(Math.min(h[l+0]*N,65504)),G[M+1]=TQ.toHalfFloat(Math.min(h[l+1]*N,65504)),G[M+2]=TQ.toHalfFloat(Math.min(h[l+2]*N,65504)),G[M+3]=TQ.toHalfFloat(1)},e=new Uint8Array(A);e.pos=0;const t=B(e),a=t.width,s=t.height,D=E(e.subarray(e.pos),a,s);let n,w,S;switch(this.type){case gg:S=D.length/4;const h=new Float32Array(S*4);for(let G=0;G<S;G++)i(D,G*4,h,G*4);n=h,w=gg;break;case CC:S=D.length/4;const l=new Uint16Array(S*4);for(let G=0;G<S;G++)o(D,G*4,l,G*4);n=l,w=CC;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:a,height:s,data:n,header:t.string,gamma:t.gamma,exposure:t.exposure,type:w}}setDataType(A){return this.type=A,this}load(A,I,g,C){function B(E,i){switch(E.type){case gg:case CC:E.colorSpace=UI,E.minFilter=qI,E.magFilter=qI,E.generateMipmaps=!1,E.flipY=!0;break}I&&I(E,i)}return super.load(A,B,g,C)}}class rQ extends cI{constructor(){super(rQ.Geometry,new tC({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const A=new q,I=new q,g=new Vt(16,16),C=new Vt(16,16);let B=Mg;const E=rQ.Geometry,i=new Fi({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),o=new Fi({uniforms:{map:{value:g},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),e=new cI(E,i),t=[],a=fC.Shader,s=new Fi({name:a.name,uniforms:{map:{value:null},occlusionMap:{value:C},color:{value:new kA(16777215)},scale:{value:new JA},screenPosition:{value:new q}},vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,blending:NE,transparent:!0,depthWrite:!1}),D=new cI(E,s);this.addElement=function(l){t.push(l)};const n=new JA,w=new JA,S=new Wc,h=new CI;this.onBeforeRender=function(l,G,M){l.getCurrentViewport(h);const p=l.getRenderTarget(),N=p!==null?p.texture.type:Mg;B!==N&&(g.dispose(),C.dispose(),g.type=C.type=N,B=N);const K=h.w/h.z,H=h.z/2,y=h.w/2;let c=16/h.w;if(n.set(c*K,c),S.min.set(h.x,h.y),S.max.set(h.x+(h.z-16),h.y+(h.w-16)),I.setFromMatrixPosition(this.matrixWorld),I.applyMatrix4(M.matrixWorldInverse),!(I.z>0)&&(A.copy(I).applyMatrix4(M.projectionMatrix),w.x=h.x+A.x*H+H-8,w.y=h.y+A.y*y+y-8,S.containsPoint(w))){l.copyFramebufferToTexture(w,g);let m=i.uniforms;m.scale.value=n,m.screenPosition.value=A,l.renderBufferDirect(M,null,E,i,e,null),l.copyFramebufferToTexture(w,C),m=o.uniforms,m.scale.value=n,m.screenPosition.value=A,l.renderBufferDirect(M,null,E,o,e,null);const x=-A.x*2,R=-A.y*2;for(let v=0,P=t.length;v<P;v++){const V=t[v],gA=s.uniforms;gA.color.value.copy(V.color),gA.map.value=V.texture,gA.screenPosition.value.x=A.x+x*V.distance,gA.screenPosition.value.y=A.y+R*V.distance,c=V.size/h.w;const Z=h.w/h.z;gA.scale.value.set(c*Z,c),s.uniformsNeedUpdate=!0,l.renderBufferDirect(M,null,E,s,D,null)}}},this.dispose=function(){i.dispose(),o.dispose(),s.dispose(),g.dispose(),C.dispose();for(let l=0,G=t.length;l<G;l++)t[l].texture.dispose()}}}class fC{constructor(A,I=1,g=0,C=new kA(16777215)){this.texture=A,this.size=I,this.distance=g,this.color=C}}fC.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`},rQ.Geometry=function(){const Q=new PI,A=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),I=new qt(A,5);return Q.setIndex([0,1,2,0,2,3]),Q.setAttribute("position",new xB(I,3,0,!1)),Q.setAttribute("uv",new xB(I,2,3,!1)),Q}();class $G{constructor(A){DA(this,"scene");DA(this,"light");this.scene=A,this.light=new Ba(16777215,Math.PI),this.light.position.set(65.7,19.2,50.2),this.light.castShadow=!0,this.scene.add(this.light);const I=new di,g=I.load("./img/lensflare0.png"),C=I.load("./img/lensflare3.png"),B=new rQ;B.addElement(new fC(g,1e3,0)),B.addElement(new fC(C,500,.2)),B.addElement(new fC(C,250,.8)),B.addElement(new fC(C,125,.6)),B.addElement(new fC(C,62.5,.4)),this.light.add(B)}async init(){await new zG().loadAsync("./img/venice_sunset_1k.hdr").then(A=>{A.mapping=GQ,this.scene.environment=A,this.scene.background=A,this.scene.backgroundBlurriness=.4})}}class Al{constructor(A,I){DA(this,"mesh");DA(this,"world");DA(this,"enabled",!0);this.world=I,this.mesh=new Zt(new PI,new Mi({color:16777215,vertexColors:!0})),this.mesh.frustumCulled=!1,A.add(this.mesh)}update(){if(this.enabled){const{vertices:A,colors:I}=this.world.debugRender();this.mesh.geometry.setAttribute("position",new NI(A,3)),this.mesh.geometry.setAttribute("color",new NI(I,4)),this.mesh.visible=!0}else this.mesh.visible=!1}}class qg{constructor(A,I,g,C,B="div"){this.parent=A,this.object=I,this.property=g,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(C),this.$name=document.createElement("div"),this.$name.classList.add("name"),qg.nextNameID=qg.nextNameID||0,this.$name.id="lil-gui-name-"+ ++qg.nextNameID,this.$widget=document.createElement(B),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(g)}name(A){return this._name=A,this.$name.innerHTML=A,this}onChange(A){return this._onChange=A,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(A=!0){return this.disable(!A)}disable(A=!0){return A===this._disabled||(this._disabled=A,this.domElement.classList.toggle("disabled",A),this.$disable.toggleAttribute("disabled",A)),this}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(A){const I=this.parent.add(this.object,this.property,A);return I.name(this._name),this.destroy(),I}min(A){return this}max(A){return this}step(A){return this}decimals(A){return this}listen(A=!0){return this._listening=A,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const A=this.save();A!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=A}getValue(){return this.object[this.property]}setValue(A){return this.object[this.property]=A,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(A){return this.setValue(A),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Il extends qg{constructor(A,I,g){super(A,I,g,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ko(Q){let A,I;return(A=Q.match(/(#|0x)?([a-f0-9]{6})/i))?I=A[2]:(A=Q.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?I=parseInt(A[1]).toString(16).padStart(2,0)+parseInt(A[2]).toString(16).padStart(2,0)+parseInt(A[3]).toString(16).padStart(2,0):(A=Q.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(I=A[1]+A[1]+A[2]+A[2]+A[3]+A[3]),!!I&&"#"+I}const gl={isPrimitive:!0,match:Q=>typeof Q=="string",fromHexString:Ko,toHexString:Ko},SQ={isPrimitive:!0,match:Q=>typeof Q=="number",fromHexString:Q=>parseInt(Q.substring(1),16),toHexString:Q=>"#"+Q.toString(16).padStart(6,0)},Cl={isPrimitive:!1,match:Array.isArray,fromHexString(Q,A,I=1){const g=SQ.fromHexString(Q);A[0]=(g>>16&255)/255*I,A[1]=(g>>8&255)/255*I,A[2]=(255&g)/255*I},toHexString:([Q,A,I],g=1)=>SQ.toHexString(Q*(g=255/g)<<16^A*g<<8^I*g<<0)},Bl={isPrimitive:!1,match:Q=>Object(Q)===Q,fromHexString(Q,A,I=1){const g=SQ.fromHexString(Q);A.r=(g>>16&255)/255*I,A.g=(g>>8&255)/255*I,A.b=(255&g)/255*I},toHexString:({r:Q,g:A,b:I},g=1)=>SQ.toHexString(Q*(g=255/g)<<16^A*g<<8^I*g<<0)},Ql=[gl,SQ,Cl,Bl];class El extends qg{constructor(A,I,g,C){var B;super(A,I,g,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(B=this.initialValue,Ql.find(E=>E.match(B))),this._rgbScale=C,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const E=Ko(this.$text.value);E&&this._setValueFromHexString(E)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(A){if(this._format.isPrimitive){const I=this._format.fromHexString(A);this.setValue(I)}else this._format.fromHexString(A,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(A){return this._setValueFromHexString(A),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class No extends qg{constructor(A,I,g){super(A,I,g,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",C=>{C.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class il extends qg{constructor(A,I,g,C,B,E){super(A,I,g,"number"),this._initInput(),this.min(C),this.max(B);const i=E!==void 0;this.step(i?E:this._getImplicitStep(),i),this.updateDisplay()}decimals(A){return this._decimals=A,this.updateDisplay(),this}min(A){return this._min=A,this._onUpdateMinMax(),this}max(A){return this._max=A,this._onUpdateMinMax(),this}step(A,I=!0){return this._step=A,this._stepExplicit=I,this}updateDisplay(){const A=this.getValue();if(this._hasSlider){let I=(A-this._min)/(this._max-this._min);I=Math.max(0,Math.min(I,1)),this.$fill.style.width=100*I+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?A:A.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const A=t=>{const a=parseFloat(this.$input.value);isNaN(a)||(this._snapClampSetValue(a+t),this.$input.value=this.getValue())};let I,g,C,B,E,i=!1;const o=t=>{if(i){const a=t.clientX-I,s=t.clientY-g;Math.abs(s)>5?(t.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(a)>5&&e()}if(!i){const a=t.clientY-C;E-=a*this._step*this._arrowKeyMultiplier(t),B+E>this._max?E=this._max-B:B+E<this._min&&(E=this._min-B),this._snapClampSetValue(B+E)}C=t.clientY},e=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",e)};this.$input.addEventListener("input",()=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._stepExplicit&&(t=this._snap(t)),this.setValue(this._clamp(t)))}),this.$input.addEventListener("keydown",t=>{t.code==="Enter"&&this.$input.blur(),t.code==="ArrowUp"&&(t.preventDefault(),A(this._step*this._arrowKeyMultiplier(t))),t.code==="ArrowDown"&&(t.preventDefault(),A(this._step*this._arrowKeyMultiplier(t)*-1))}),this.$input.addEventListener("wheel",t=>{this._inputFocused&&(t.preventDefault(),A(this._step*this._normalizeMouseWheel(t)))},{passive:!1}),this.$input.addEventListener("mousedown",t=>{I=t.clientX,g=C=t.clientY,i=!0,B=this.getValue(),E=0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",e)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const A=s=>{const D=this.$slider.getBoundingClientRect();let n=(w=s,S=D.left,h=D.right,l=this._min,G=this._max,(w-S)/(h-S)*(G-l)+l);var w,S,h,l,G;this._snapClampSetValue(n)},I=s=>{A(s.clientX)},g=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",g)};let C,B,E=!1;const i=s=>{s.preventDefault(),this._setDraggingStyle(!0),A(s.touches[0].clientX),E=!1},o=s=>{if(E){const D=s.touches[0].clientX-C,n=s.touches[0].clientY-B;Math.abs(D)>Math.abs(n)?i(s):(window.removeEventListener("touchmove",o),window.removeEventListener("touchend",e))}else s.preventDefault(),A(s.touches[0].clientX)},e=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",e)},t=this._callOnFinishChange.bind(this);let a;this.$slider.addEventListener("mousedown",s=>{this._setDraggingStyle(!0),A(s.clientX),window.addEventListener("mousemove",I),window.addEventListener("mouseup",g)}),this.$slider.addEventListener("touchstart",s=>{s.touches.length>1||(this._hasScrollBar?(C=s.touches[0].clientX,B=s.touches[0].clientY,E=!0):i(s),window.addEventListener("touchmove",o,{passive:!1}),window.addEventListener("touchend",e))},{passive:!1}),this.$slider.addEventListener("wheel",s=>{if(Math.abs(s.deltaX)<Math.abs(s.deltaY)&&this._hasScrollBar)return;s.preventDefault();const D=this._normalizeMouseWheel(s)*this._step;this._snapClampSetValue(this.getValue()+D),this.$input.value=this.getValue(),clearTimeout(a),a=setTimeout(t,400)},{passive:!1})}_setDraggingStyle(A,I="horizontal"){this.$slider&&this.$slider.classList.toggle("active",A),document.body.classList.toggle("lil-gui-dragging",A),document.body.classList.toggle("lil-gui-"+I,A)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(A){let{deltaX:I,deltaY:g}=A;return Math.floor(A.deltaY)!==A.deltaY&&A.wheelDelta&&(I=0,g=-A.wheelDelta/120,g*=this._stepExplicit?1:10),I+-g}_arrowKeyMultiplier(A){let I=this._stepExplicit?1:10;return A.shiftKey?I*=10:A.altKey&&(I/=10),I}_snap(A){const I=Math.round(A/this._step)*this._step;return parseFloat(I.toPrecision(15))}_clamp(A){return A<this._min&&(A=this._min),A>this._max&&(A=this._max),A}_snapClampSetValue(A){this.setValue(this._clamp(this._snap(A)))}get _hasScrollBar(){const A=this.parent.root.$children;return A.scrollHeight>A.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class ol extends qg{constructor(A,I,g,C){super(A,I,g,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(C)?C:Object.values(C),this._names=Array.isArray(C)?C:Object.keys(C),this._names.forEach(B=>{const E=document.createElement("option");E.innerHTML=B,this.$select.appendChild(E)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const A=this.getValue(),I=this._values.indexOf(A);return this.$select.selectedIndex=I,this.$display.innerHTML=I===-1?A:this._names[I],this}}class el extends qg{constructor(A,I,g){super(A,I,g,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",C=>{C.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Cs=!1;class Jo{constructor({parent:A,autoPlace:I=A===void 0,container:g,width:C,title:B="Controls",injectStyles:E=!0,touchStyles:i=!0}={}){if(this.parent=A,this.root=A?A.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",o=>{o.code!=="Enter"&&o.code!=="Space"||(o.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(B),i&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Cs&&E&&(function(o){const e=document.createElement("style");e.innerHTML=o;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Cs=!0),g?g.appendChild(this.domElement):I&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),C&&this.domElement.style.setProperty("--width",C+"px"),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation())}add(A,I,g,C,B){if(Object(g)===g)return new ol(this,A,I,g);const E=A[I];switch(typeof E){case"number":return new il(this,A,I,g,C,B);case"boolean":return new Il(this,A,I);case"string":return new el(this,A,I);case"function":return new No(this,A,I)}console.error(`gui.add failed
	property:`,I,`
	object:`,A,`
	value:`,E)}addColor(A,I,g=1){return new El(this,A,I,g)}addFolder(A){return new Jo({parent:this,title:A})}load(A,I=!0){return A.controllers&&this.controllers.forEach(g=>{g instanceof No||g._name in A.controllers&&g.load(A.controllers[g._name])}),I&&A.folders&&this.folders.forEach(g=>{g._title in A.folders&&g.load(A.folders[g._title])}),this}save(A=!0){const I={controllers:{},folders:{}};return this.controllers.forEach(g=>{if(!(g instanceof No)){if(g._name in I.controllers)throw new Error(`Cannot save GUI with duplicate property "${g._name}"`);I.controllers[g._name]=g.save()}}),A&&this.folders.forEach(g=>{if(g._title in I.folders)throw new Error(`Cannot save GUI with duplicate folder "${g._title}"`);I.folders[g._title]=g.save()}),I}open(A=!0){return this._closed=!A,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(A=!0){return this._closed=!A,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const I=this.$children.clientHeight;this.$children.style.height=I+"px",this.domElement.classList.add("transition");const g=B=>{B.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",g))};this.$children.addEventListener("transitionend",g);const C=A?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!A),requestAnimationFrame(()=>{this.$children.style.height=C+"px"})}),this}title(A){return this._title=A,this.$title.innerHTML=A,this}reset(A=!0){return(A?this.controllersRecursive():this.controllers).forEach(I=>I.reset()),this}onChange(A){return this._onChange=A,this}_callOnChange(A){this.parent&&this.parent._callOnChange(A),this._onChange!==void 0&&this._onChange.call(this,{object:A.object,property:A.property,value:A.getValue(),controller:A})}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(A){this.parent&&this.parent._callOnFinishChange(A),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:A.object,property:A.property,value:A.getValue(),controller:A})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(A=>A.destroy())}controllersRecursive(){let A=Array.from(this.controllers);return this.folders.forEach(I=>{A=A.concat(I.controllersRecursive())}),A}foldersRecursive(){let A=Array.from(this.folders);return this.folders.forEach(I=>{A=A.concat(I.foldersRecursive())}),A}}class tl{constructor(A,I,g){DA(this,"material",new jg);new co().load("./models/start.glb",C=>{var e;const B=C.scene.getObjectByName("Cylinder");B.receiveShadow=!0,A.add(B),this.material=B.material,(e=this.material.map)==null||e.center.set(.1034,0);const E=I.createRigidBody(OI.fixed().setTranslation(...g)),i=new Float32Array(B.geometry.attributes.position.array),o=EI.convexHull(i);I.createCollider(o,E),B.position.copy(E.translation()),B.quaternion.copy(E.rotation())})}}class dg{constructor(A,I,g,C,B=[0,0,0]){const E=new cI(new aB(...g),new jg);E.castShadow=!0,E.receiveShadow=!0,A.add(E);const i=I.createRigidBody(OI.fixed().setTranslation(...C).setRotation(new dI().setFromEuler(new ZI(...B)))),o=EI.cuboid(g[0]/2,g[1]/2,g[2]/2);I.createCollider(o,i),E.position.copy(i.translation()),E.quaternion.copy(i.rotation())}}class al{constructor(A,I,g){DA(this,"dynamicBody");DA(this,"material",new jg);DA(this,"texture");DA(this,"handle",-1);this.texture=new di().load("./img/finish.png",B=>{B.repeat.x=2,B.wrapS=GC,B.flipY=!0});const C=new cI(new vB(3.4,3.4,2,12,1,!0),new Dc({transparent:!0,opacity:.75,map:this.texture,side:sg}));C.position.set(...g),C.position.y+=3,A.add(C),new co().load("./models/finish.glb",B=>{const E=B.scene.getObjectByName("Cylinder");E.receiveShadow=!0,A.add(E),this.material=E.material;const i=I.createRigidBody(OI.fixed().setTranslation(...g));this.handle=i.handle;const o=new Float32Array(E.geometry.attributes.position.array),e=EI.convexHull(o);I.createCollider(e,i),E.position.copy(i.translation()),E.quaternion.copy(i.rotation()),setInterval(()=>{this.material.map.rotation+=Math.PI},500)})}update(A){this.texture.offset.x+=A/3}}class Bs{constructor(A,I,g){DA(this,"group");DA(this,"body");DA(this,"handle",-1);this.group=new Pg,this.group.position.set(...g),A.add(this.group);const C=new cI(new vB(.25,.25,1.5),new jg);C.castShadow=!0,this.group.add(C);const B=new cI(new vB(.25,.25,4),new jg);B.rotateX(-Math.PI/2),B.castShadow=!0,this.group.add(B),this.body=I.createRigidBody(OI.kinematicPositionBased().setTranslation(...g)),this.handle=this.body.handle;const E=EI.cylinder(2,.25).setRotation(new dI().setFromEuler(new ZI(-Math.PI/2,0,0)));I.createCollider(E,this.body)}update(A){this.group.rotation.y+=A,this.body.setNextKinematicRotation(this.group.quaternion)}}class ME{constructor(A,I,g,C=0){DA(this,"dynamicBodies",[]);DA(this,"handles",[-1,-1]);const B=[];for(let E=0;E<4;E++){const i=new cI(new Ji(.4),new jg);i.position.set(g[0],g[1],E+g[2]),i.castShadow=!0,A.add(i);let o;E==0?o=Eg.Fixed:o=Eg.Dynamic;const e=I.createRigidBody(new OI(o).setTranslation(g[0],g[1],E+g[2]).setRotation(new dI().setFromEuler(new ZI(0,C,0))));let t=EI.ball(.4).setMass(1);if(E>=2&&this.handles.push(e.handle),I.createCollider(t,e),E>0){let a=B[B.length-1],s=Rg.spherical(new nE(0,0,0),new nE(0,0,-1));I.createImpulseJoint(s,a,e,!0)}B.push(e),this.dynamicBodies.push([i,e])}}update(){for(let A=0,I=this.dynamicBodies.length;A<I;A++)this.dynamicBodies[A][0].position.copy(this.dynamicBodies[A][1].translation()),this.dynamicBodies[A][0].quaternion.copy(this.dynamicBodies[A][1].rotation())}}class sl{constructor(A,I,g){DA(this,"scene");DA(this,"camera");DA(this,"renderer");DA(this,"ui");DA(this,"player");DA(this,"world");DA(this,"rapierDebugRenderer");DA(this,"eventQueue");DA(this,"finish");DA(this,"spinners",[]);DA(this,"pendulums",[]);this.scene=A,this.camera=I,this.renderer=g,this.ui=new Pc(this.renderer)}async init(){await aG.init();const A=new q(0,-9.81,0);this.world=new DQ(A),this.eventQueue=new Za(!0),this.rapierDebugRenderer=new Al(this.scene,this.world),this.rapierDebugRenderer.enabled=!1,new Jo().add(this.rapierDebugRenderer,"enabled").name("Rapier Degug Renderer"),new tl(this.scene,this.world,[0,-.5,0]),new dg(this.scene,this.world,[1,.1,2],[0,0,6]),new dg(this.scene,this.world,[2.5,.1,1],[3,.25,6]),new dg(this.scene,this.world,[2,.1,1],[6,1,6]),new dg(this.scene,this.world,[.25,.1,4.5],[6,2,2.25]),new dg(this.scene,this.world,[4,.1,5],[6,2,-3]),this.spinners.push(new Bs(this.scene,this.world,[6,2.8,-3])),new dg(this.scene,this.world,[1,.1,2],[6.25,2.5,-7.5]),new dg(this.scene,this.world,[4,.1,4],[2.5,3,-8]),this.spinners.push(new Bs(this.scene,this.world,[2.5,3.8,-8])),new dg(this.scene,this.world,[1,.1,2.75],[1.5,3.75,-3.25],[-Math.PI/8,0,0]),new dg(this.scene,this.world,[6,.1,1],[-1,4.5,-1]),this.pendulums.push(new ME(this.scene,this.world,[0,8,-1])),this.pendulums.push(new ME(this.scene,this.world,[-2,8,-1])),new dg(this.scene,this.world,[1.5,.1,8],[-5.5,4.5,4.5],[0,0,-Math.PI/8]),this.pendulums.push(new ME(this.scene,this.world,[-5,8,2.5],Math.PI/2)),this.pendulums.push(new ME(this.scene,this.world,[-5,8,5],Math.PI/2)),this.finish=new al(this.scene,this.world,[0,4,10]),this.player=new gs(this.scene,this.camera,this.renderer,this.world,[-5.5,4.5,4.5],this.ui),this.player=new gs(this.scene,this.camera,this.renderer,this.world,[0,.1,0],this.ui),await this.player.init();const I=new $G(this.scene);await I.init(),I.light.target=this.player.followTarget,this.ui.show()}update(A){var I,g,C,B,E;this.spinners.forEach(i=>{i.update(A)}),this.world.timestep=Math.min(A,.1),(I=this.world)==null||I.step(this.eventQueue),(g=this.eventQueue)==null||g.drainCollisionEvents((i,o,e)=>{var s,D;e&&[i,o].includes((s=this.finish)==null?void 0:s.handle)&&this.ui.showLevelCompleted();let t=!1;this.spinners.forEach(n=>{[i,o].includes(n.handle)&&(t=!0)});let a=!1;this.pendulums.forEach(n=>{n.handles.some(w=>[i,o].includes(w))&&(a=!0)}),!t&&!a&&((D=this.player)==null||D.setGrounded(e))}),(C=this.player)==null||C.update(A),(B=this.finish)==null||B.update(A),this.pendulums.forEach(i=>{i.update()}),(E=this.rapierDebugRenderer)==null||E.update()}}const Qs=new Qc,nQ=new VI(75,window.innerWidth/window.innerHeight,.1,1e3);nQ.position.set(0,0,2);const JB=new Bc({antialias:!0});JB.setSize(window.innerWidth,window.innerHeight),JB.shadowMap.enabled=!0,document.body.appendChild(JB.domElement),window.addEventListener("resize",()=>{nQ.aspect=window.innerWidth/window.innerHeight,nQ.updateProjectionMatrix(),JB.setSize(window.innerWidth,window.innerHeight)});const Es=new VB;document.body.appendChild(Es.dom);const is=new sl(Qs,nQ,JB);await is.init();const Dl=new dc;let os=0;function es(){requestAnimationFrame(es),os=Dl.getDelta(),is.update(os),JB.render(Qs,nQ),Es.update()}es()})();