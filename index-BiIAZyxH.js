(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();const z={mainAudio:{title:"Happy Birthday (Piano Melody)",artist:"Nish Rymz",audioSrc:"/assets/Happy Birthday (Piano Melody) - Nish Rymz.mp3"},opening:{title:"Happy Birthday Ayla 🎂✨",description:"Today is your day, so just have fun and enjoy the surprises. I’ve prepared something special for you, and I hope you have a really great time.",prompt:"Get ready for your birthday surprise! 🎉",buttonText:"Let's Gooo",kittenImage:"/assets/ChatGPT Image Sep 25, 2026, 07_11_41 PM.png",cornerAvatarImage:"/assets/ChatGPT Image Sep 25, 2026, 07_10_29 PM.png",footerText:"Made for your special day 💕"},envelope:{headerTitle:"A Little Birthday Note 💌",headerSubtitle:"From my heart to the birthday queen",promptText:"Click to open your birthday surprise",tagText:"Birthday Special Delivery 🎂"},firstLetter:{headerTitle:"A Little Birthday Note 💌",headerSubtitle:"",badgeText:"To My Birthday Star ★",salutation:"My dearest birthday girl,",paragraphs:["happy birthday! I'm just very glad that we became friends and game partners. We’ve had a lot of fun, had some random talks, and made a ton of memories.","I'm very grateful to have you as a friend, and I hope you have a wonderful birthday! Here's to more games, laughs, and great times!"],signoff:"Always Friends",buttonText:"Continue It ✨",kittenImage:"/assets/ChatGPT Image Sep 25, 2026, 07_14_24 PM.png",stampText:"SPECIAL DELIVERY ★"},cake:{headerTitle:"It's Cake Time! 🎂",headerSubtitle:"Make your birthday wish come true!",instruction:"Tap the candle to blow it out & make a wish! 🕯️",cutInstruction:"Or drag your finger across to slice the cake ✂️",successTitle:"Happy Birthday, Beautiful! 🎂",successSubtitle:"May all your sweetest wishes come true today and always ✨",buttonText:"Make a Wish ✨"},celebration:{headerTitle:"It's Cake Time! 🎂",headerSubtitle:"Make your birthday wish come true!",characterImage:"/assets/Avatars_celebrating_birthday_ani_1080p_20260926163243-ezgif.com-video-to-gif-converter.gif",title:"Time to Make a Wish! ✨",prompt:"Close your eyes and make your birthday wish! 🌟",subtext:"Think of something wonderful for your new year!",buttonText:"I've Made My Wish! 💫"},musicSection:{headerTitle:"Birthday Vibes Playlist 🎵",headerSubtitle:"Songs to celebrate your special day",prompt:"Choose your birthday soundtrack ✨",buttonText:"Continue to Birthday Surprises ✨",audioFallbackText:"Music unavailable — the memories still remain ❤️"},memories:[{id:1,title:"Dil Ka Jo Haal Hai",artist:"Our Sweet Sunset Song",caption:"Here's to making this year unforgettable 🌟",image:"/assets/ChatGPT Image Sep 8, 2026, 05_31_58 PM.png",audioSrc:"/assets/Dil Ka Jo Haal Hai (Lyrical) _ Besharam _ Ranbir Kapoor _ Abhijeet Bhattacharya, Shreya Ghoshal - (320 Kbps) (1) (1).mp3"},{id:2,title:"Eenie Meenie",artist:"Because today is all about YOU",caption:"Because your birthday deserves a little extra fun! ✨",image:"/assets/Chat GPT Image Sep 28, 2026, 05_58_52 PM-2.png",audioSrc:"/assets/Sean Kingston, Justin Bieber - Eenie Meenie (Official Video) - (320 Kbps) (2).mp3"},{id:3,title:"Drama Queen",artist:"Every Beat for You",caption:"And if I ever annoyed you or did something wrong, sorry! 😅✨",image:"/assets/ChatGPT Image Sep 28, 2026, 06_09_23 PM.png",audioSrc:"/assets/Drama Queen Full Video - Hasee Toh Phasee Parineeti, Sidharth Shreya Ghoshal Karan Johar (1).mp3"}],wishSection:{headerTitle:"Birthday Wishes Cards 🎁",headerSubtitle:"Click each card to reveal a birthday message!",prompt:"Start discovering your birthday surprises ✨",progressTemplate:"{count} of {total} birthday wishes unlocked! Keep going 🎉",allUnlockedText:"All birthday wishes revealed! Ready for the grand finale? ✨",buttonText:"Open Final Letter 💌"},wishes:[{id:1,frontImage:"/assets/୨୧ Kɪᴛᴛᴇɴ 🌷✨.jpg",frontTitle:"Wish #1",backMessage:"Happy Birthday to the girl who makes every day feel like a celebration! 🎉 💕",flipBackText:"Tap to flip back"},{id:2,frontImage:"/assets/Goofy Little Menace 🐾.jpg",frontTitle:"Wish #2",backMessage:"Wishing you a birthday filled with happiness, laughter, and lots of wonderful moments! ✨",flipBackText:"Tap to flip back"},{id:3,frontImage:"/assets/Me and my pretty lady.jpg",frontTitle:"Wish #3",backMessage:"I hope today brings you lots of smiles, happy moments, and plenty of wonderful memories to look back on! 💖",flipBackText:"Tap to flip back"}],finalLetter:{headerTitle:"Final Birthday Letter 💌",headerSubtitle:"A little birthday message, just for you! ✨",badgeText:"Final Birthday Message 💌",salutation:"Happy Birthday Aayla 💖",paragraphs:["Happy Birthday, Ayla! May this day bring you joy and happiness! I hope you have a fun and memorable day full of good food and laughter! I'm so happy that we became friends, and I hope that we make many nice memories! May God always keep you happy and healthy and bless your life with lots of goodness! I hope this new chapter brings you nothing but great memories and happiness! Have a wonderful day and a great birthday! ✨"],signoff:`Wishing you lots of happiness and good memories! ✨
From Baki`,kittenImage:"/assets/lovely 🌹👀💞.jpg",sealPrompt:"Sealing will complete your birthday experience.",sealButtonText:"Seal The Letter 🎂",replayButtonText:"Experience Again"},completion:{title:"Your birthday surprise is complete ❤️",subtitle:"Made especially for Beautiful",closingNote:"I hope this brought a huge smile to your face today! You are cherished beyond words.",replayButtonText:"Experience Again 🔄"},theme:{bgPrimary:"#FFF7F8",bgSecondary:"#FFF1E8",softPink:"#F7C8D5",primaryPink:"#EFA6BA",darkPink:"#D96F8A",vibrantPink:"#E94D77",textDark:"#5C4148",textSecondary:"#8A6B72",cream:"#FFFDF8",cardBg:"#FFFDF6",accentGold:"#E8B86D",mintGreen:"#A7E8BD",macDotCoral:"#FF605C",macDotYellow:"#FFBD44",macDotGreen:"#00CA4E"}};var ae={};(function r(a,t,s,n){var o=!!(a.Worker&&a.Blob&&a.Promise&&a.OffscreenCanvas&&a.OffscreenCanvasRenderingContext2D&&a.HTMLCanvasElement&&a.HTMLCanvasElement.prototype.transferControlToOffscreen&&a.URL&&a.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!a.OffscreenCanvas)return!1;try{var i=new OffscreenCanvas(1,1),e=i.getContext("2d");e.fillRect(0,0,1,1);var l=i.transferToImageBitmap();e.createPattern(l,"no-repeat")}catch{return!1}return!0})();function P(){}function b(i){var e=t.exports.Promise,l=e!==void 0?e:a.Promise;return typeof l=="function"?new l(i):(i(P,P),null)}var B=(function(i,e){return{transform:function(l){if(i)return l;if(e.has(l))return e.get(l);var p=new OffscreenCanvas(l.width,l.height),y=p.getContext("2d");return y.drawImage(l,0,0),e.set(l,p),p},clear:function(){e.clear()}}})(d,new Map),R=(function(){var i=Math.floor(16.666666666666668),e,l,p={},y=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(f){var v=Math.random();return p[v]=requestAnimationFrame(function h(g){y===g||y+i-1<g?(y=g,delete p[v],f()):p[v]=requestAnimationFrame(h)}),v},l=function(f){p[f]&&cancelAnimationFrame(p[f])}):(e=function(f){return setTimeout(f,i)},l=function(f){return clearTimeout(f)}),{frame:e,cancel:l}})(),w=(function(){var i,e,l={};function p(y){function f(v,h){y.postMessage({options:v||{},callback:h})}y.init=function(h){var g=h.transferControlToOffscreen();y.postMessage({canvas:g},[g])},y.fire=function(h,g,C){if(e)return f(h,null),e;var I=Math.random().toString(36).slice(2);return e=b(function(F){function A(q){q.data.callback===I&&(delete l[I],y.removeEventListener("message",A),e=null,B.clear(),C(),F())}y.addEventListener("message",A),f(h,I),l[I]=A.bind(null,{data:{callback:I}})}),e},y.reset=function(){y.postMessage({reset:!0});for(var h in l)l[h](),delete l[h]}}return function(){if(i)return i;if(!s&&o){var y=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{i=new Worker(URL.createObjectURL(new Blob([y])))}catch(f){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",f),null}p(i)}return i}})(),L={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function D(i,e){return e?e(i):i}function _(i){return i!=null}function m(i,e,l){return D(i&&_(i[e])?i[e]:L[e],l)}function c(i){return i<0?0:Math.floor(i)}function S(i,e){return Math.floor(Math.random()*(e-i))+i}function M(i){return parseInt(i,16)}function H(i){return i.map(T)}function T(i){var e=String(i).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:M(e.substring(0,2)),g:M(e.substring(2,4)),b:M(e.substring(4,6))}}function $(i){var e=m(i,"origin",Object);return e.x=m(e,"x",Number),e.y=m(e,"y",Number),e}function K(i){i.width=document.documentElement.clientWidth,i.height=document.documentElement.clientHeight}function E(i){var e=i.getBoundingClientRect();i.width=e.width,i.height=e.height}function Z(i){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=i,e}function X(i,e,l,p,y,f,v,h,g){i.save(),i.translate(e,l),i.rotate(f),i.scale(p,y),i.arc(0,0,1,v,h,g),i.restore()}function k(i){var e=i.angle*(Math.PI/180),l=i.spread*(Math.PI/180);return{x:i.x,y:i.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:i.startVelocity*.5+Math.random()*i.startVelocity,angle2D:-e+(.5*l-Math.random()*l),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:i.color,shape:i.shape,tick:0,totalTicks:i.ticks,decay:i.decay,drift:i.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:i.gravity*3,ovalScalar:.6,scalar:i.scalar,flat:i.flat}}function G(i,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var l=e.tick++/e.totalTicks,p=e.x+e.random*e.tiltCos,y=e.y+e.random*e.tiltSin,f=e.wobbleX+e.random*e.tiltCos,v=e.wobbleY+e.random*e.tiltSin;if(i.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-l)+")",i.beginPath(),u&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))i.fill(ue(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(f-p)*.1,Math.abs(v-y)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var h=Math.PI/10*e.wobble,g=Math.abs(f-p)*.1,C=Math.abs(v-y)*.1,I=e.shape.bitmap.width*e.scalar,F=e.shape.bitmap.height*e.scalar,A=new DOMMatrix([Math.cos(h)*g,Math.sin(h)*g,-Math.sin(h)*C,Math.cos(h)*C,e.x,e.y]);A.multiplySelf(new DOMMatrix(e.shape.matrix));var q=i.createPattern(B.transform(e.shape.bitmap),"no-repeat");q.setTransform(A),i.globalAlpha=1-l,i.fillStyle=q,i.fillRect(e.x-I/2,e.y-F/2,I,F),i.globalAlpha=1}else if(e.shape==="circle")i.ellipse?i.ellipse(e.x,e.y,Math.abs(f-p)*e.ovalScalar,Math.abs(v-y)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):X(i,e.x,e.y,Math.abs(f-p)*e.ovalScalar,Math.abs(v-y)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var x=Math.PI/2*3,O=4*e.scalar,W=8*e.scalar,N=e.x,Y=e.y,Q=5,j=Math.PI/Q;Q--;)N=e.x+Math.cos(x)*W,Y=e.y+Math.sin(x)*W,i.lineTo(N,Y),x+=j,N=e.x+Math.cos(x)*O,Y=e.y+Math.sin(x)*O,i.lineTo(N,Y),x+=j;else i.moveTo(Math.floor(e.x),Math.floor(e.y)),i.lineTo(Math.floor(e.wobbleX),Math.floor(y)),i.lineTo(Math.floor(f),Math.floor(v)),i.lineTo(Math.floor(p),Math.floor(e.wobbleY));return i.closePath(),i.fill(),e.tick<e.totalTicks}function U(i,e,l,p,y){var f=e.slice(),v=i.getContext("2d"),h,g,C=b(function(I){function F(){h=g=null,v.clearRect(0,0,p.width,p.height),B.clear(),y(),I()}function A(){s&&!(p.width===n.width&&p.height===n.height)&&(p.width=i.width=n.width,p.height=i.height=n.height),!p.width&&!p.height&&(l(i),p.width=i.width,p.height=i.height),v.clearRect(0,0,p.width,p.height),f=f.filter(function(q){return G(v,q)}),f.length?h=R.frame(A):F()}h=R.frame(A),g=F});return{addFettis:function(I){return f=f.concat(I),C},canvas:i,promise:C,reset:function(){h&&R.cancel(h),g&&g()}}}function V(i,e){var l=!i,p=!!m(e||{},"resize"),y=!1,f=m(e,"disableForReducedMotion",Boolean),v=o&&!!m(e||{},"useWorker"),h=v?w():null,g=l?K:E,C=i&&h?!!i.__confetti_initialized:!1,I=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,F;function A(x,O,W){for(var N=m(x,"particleCount",c),Y=m(x,"angle",Number),Q=m(x,"spread",Number),j=m(x,"startVelocity",Number),me=m(x,"decay",Number),fe=m(x,"gravity",Number),ve=m(x,"drift",Number),ne=m(x,"colors",H),ge=m(x,"ticks",Number),oe=m(x,"shapes"),be=m(x,"scalar"),we=!!m(x,"flat"),le=$(x),ce=N,ie=[],xe=i.width*le.x,ke=i.height*le.y;ce--;)ie.push(k({x:xe,y:ke,angle:Y,spread:Q,startVelocity:j,color:ne[ce%ne.length],shape:oe[S(0,oe.length)],ticks:ge,decay:me,gravity:fe,drift:ve,scalar:be,flat:we}));return F?F.addFettis(ie):(F=U(i,ie,g,O,W),F.promise)}function q(x){var O=f||m(x,"disableForReducedMotion",Boolean),W=m(x,"zIndex",Number);if(O&&I)return b(function(j){j()});l&&F?i=F.canvas:l&&!i&&(i=Z(W),document.body.appendChild(i)),p&&!C&&g(i);var N={width:i.width,height:i.height};h&&!C&&h.init(i),C=!0,h&&(i.__confetti_initialized=!0);function Y(){if(h){var j={getBoundingClientRect:function(){if(!l)return i.getBoundingClientRect()}};g(j),h.postMessage({resize:{width:j.width,height:j.height}});return}N.width=N.height=null}function Q(){F=null,p&&(y=!1,a.removeEventListener("resize",Y)),l&&i&&(document.body.contains(i)&&document.body.removeChild(i),i=null,C=!1)}return p&&!y&&(y=!0,a.addEventListener("resize",Y,!1)),h?h.fire(x,N,Q):A(x,N,Q)}return q.reset=function(){h&&h.reset(),F&&F.reset()},q}var te;function re(){return te||(te=V(null,{useWorker:!0,resize:!0})),te}function ue(i,e,l,p,y,f,v){var h=new Path2D(i),g=new Path2D;g.addPath(h,new DOMMatrix(e));var C=new Path2D;return C.addPath(g,new DOMMatrix([Math.cos(v)*y,Math.sin(v)*y,-Math.sin(v)*f,Math.cos(v)*f,l,p])),C}function pe(i){if(!u)throw new Error("path confetti are not supported in this browser");var e,l;typeof i=="string"?e=i:(e=i.path,l=i.matrix);var p=new Path2D(e),y=document.createElement("canvas"),f=y.getContext("2d");if(!l){for(var v=1e3,h=v,g=v,C=0,I=0,F,A,q=0;q<v;q+=2)for(var x=0;x<v;x+=2)f.isPointInPath(p,q,x,"nonzero")&&(h=Math.min(h,q),g=Math.min(g,x),C=Math.max(C,q),I=Math.max(I,x));F=C-h,A=I-g;var O=10,W=Math.min(O/F,O/A);l=[W,0,0,W,-Math.round(F/2+h)*W,-Math.round(A/2+g)*W]}return{type:"path",path:e,matrix:l}}function ye(i){var e,l=1,p="#000000",y='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof i=="string"?e=i:(e=i.text,l="scalar"in i?i.scalar:l,y="fontFamily"in i?i.fontFamily:y,p="color"in i?i.color:p);var f=10*l,v=""+f+"px "+y,h=new OffscreenCanvas(f,f),g=h.getContext("2d");g.font=v;var C=g.measureText(e),I=Math.ceil(C.actualBoundingBoxRight+C.actualBoundingBoxLeft),F=Math.ceil(C.actualBoundingBoxAscent+C.actualBoundingBoxDescent),A=2,q=C.actualBoundingBoxLeft+A,x=C.actualBoundingBoxAscent+A;I+=A+A,F+=A+A,h=new OffscreenCanvas(I,F),g=h.getContext("2d"),g.font=v,g.fillStyle=p,g.fillText(e,q,x);var O=1/l;return{type:"bitmap",bitmap:h.transferToImageBitmap(),matrix:[O,0,0,O,-I*O/2,-F*O/2]}}t.exports=function(){return re().apply(this,arguments)},t.exports.reset=function(){re().reset()},t.exports.create=V,t.exports.shapeFromPath=pe,t.exports.shapeFromText=ye})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),ae,!1);const de=ae.exports;ae.exports.create;class Se{constructor(a){this.canvas=a,this.ctx=a.getContext("2d"),this.particles=[],this.animationFrameId=null,this.isRunning=!1,this.isReducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.maxParticles=window.innerWidth<600?24:45,this._resize=this._resize.bind(this),this._animate=this._animate.bind(this),window.addEventListener("resize",this._resize),document.addEventListener("visibilitychange",()=>{document.hidden?this.stop():this.start()}),this._resize(),this._initParticles()}_resize(){this.width=this.canvas.width=window.innerWidth,this.height=this.canvas.height=window.innerHeight,this.maxParticles=window.innerWidth<600?24:45}_initParticles(){this.particles=[];const a=this.isReducedMotion?10:this.maxParticles;for(let t=0;t<a;t++)this.particles.push(this._createParticle(!0))}_createParticle(a=!1){const t=["heart","star","circle","petal"],s=["rgba(247, 200, 213, ","rgba(239, 166, 186, ","rgba(232, 184, 109, ","rgba(255, 214, 165, ","rgba(200, 230, 201, "],n=t[Math.floor(Math.random()*t.length)],o=s[Math.floor(Math.random()*s.length)],u=Math.random()*12+6,d=this.isReducedMotion?.1:Math.random()*.45+.2,P=(Math.random()-.5)*.3,b=Math.random()*.45+.25;return{type:n,x:Math.random()*this.width,y:a?Math.random()*this.height:this.height+u+10,size:u,speedX:P,speedY:d,opacity:b,color:o,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.5)*.02,wobble:Math.random()*Math.PI*2,wobbleSpeed:Math.random()*.03+.01}}start(){this.isRunning||(this.isRunning=!0,this._animate())}stop(){this.isRunning=!1,this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}_animate(){if(this.isRunning){this.ctx.clearRect(0,0,this.width,this.height);for(let a=0;a<this.particles.length;a++){const t=this.particles[a];if(t.y-=t.speedY,t.wobble+=t.wobbleSpeed,t.x+=t.speedX+Math.sin(t.wobble)*.3,t.rotation+=t.rotationSpeed,t.y<-t.size*2||t.x<-t.size||t.x>this.width+t.size){this.particles[a]=this._createParticle(!1);continue}this.ctx.save(),this.ctx.translate(t.x,t.y),this.ctx.rotate(t.rotation),this.ctx.fillStyle=`${t.color}${t.opacity})`,t.type==="heart"?this._drawHeart(t.size):t.type==="star"?this._drawStar(t.size):t.type==="petal"?this._drawPetal(t.size):(this.ctx.beginPath(),this.ctx.arc(0,0,t.size/2.5,0,Math.PI*2),this.ctx.fill()),this.ctx.restore()}this.animationFrameId=requestAnimationFrame(this._animate)}}_drawHeart(a){const t=a*.6;this.ctx.beginPath(),this.ctx.moveTo(0,-t*.2),this.ctx.bezierCurveTo(-t,-t*.9,-t*1.3,t*.3,0,t*1.2),this.ctx.bezierCurveTo(t*1.3,t*.3,t,-t*.9,0,-t*.2),this.ctx.fill()}_drawStar(a){const s=a*.6,n=s*.45;this.ctx.beginPath();for(let o=0;o<10;o++){const u=o%2===0?s:n,d=o*Math.PI/5-Math.PI/2,P=Math.cos(d)*u,b=Math.sin(d)*u;o===0?this.ctx.moveTo(P,b):this.ctx.lineTo(P,b)}this.ctx.closePath(),this.ctx.fill()}_drawPetal(a){const t=a*.7;this.ctx.beginPath(),this.ctx.ellipse(0,0,t*.4,t*.9,0,0,Math.PI*2),this.ctx.fill()}}function ee(){const a={origin:{y:.7},colors:["#EFA6BA","#F7C8D5","#E8B86D","#FF9EAA","#C5E1A5","#FFF3E0"]};function t(s,n){de(Object.assign({},a,n,{particleCount:Math.floor(120*s)}))}t(.25,{spread:26,startVelocity:45}),t(.2,{spread:60}),t(.35,{spread:100,decay:.91,scalar:.8}),t(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),t(.1,{spread:120,startVelocity:40})}function se(r=.5,a=.5){de({particleCount:35,spread:60,origin:{x:r,y:a},colors:["#EFA6BA","#D96F8A","#FF758F","#FFB3C1"],shapes:["circle"],scalar:1.2})}class Me{constructor(a=[],t={}){this.memoriesPlaylist=a,this.playlist=a,this.mainBgmTrack=t.mainBgmTrack||{title:"Happy Birthday (Piano Melody)",artist:"Nish Rymz",audioSrc:"/assets/Happy Birthday (Piano Melody) - Nish Rymz.mp3"},this.mode="start",this.hasReachedMusicSection=!1,this.currentIndex=0,this.isPlaying=!1,this.isMuted=!1,this.audioElement=new Audio,this.audioElement.preload="auto",this.audioElement.loop=!0,this.audioElement.src=this.mainBgmTrack.audioSrc,this.audioContext=null,this.synthInterval=null,this.isUsingSynth=!1,this.onStateChange=t.onStateChange||(()=>{}),this._setupAudioListeners()}_setupAudioListeners(){this.audioElement.addEventListener("timeupdate",()=>{this._notifyState()}),this.audioElement.addEventListener("ended",()=>{this.mode==="start"?this.play().catch(()=>{}):this.play().catch(()=>{})}),this.audioElement.addEventListener("play",()=>{this.isPlaying=!0,this._notifyState()}),this.audioElement.addEventListener("pause",()=>{this.isPlaying=!1,this._notifyState()}),this.audioElement.addEventListener("error",a=>{console.warn("HTML5 audio playback failed, falling back to Web Audio Synth",a),this._startWebAudioSynth()})}getCurrentTrack(){return this.mode==="start"?this.mainBgmTrack:!this.memoriesPlaylist||this.memoriesPlaylist.length===0?null:this.memoriesPlaylist[this.currentIndex]}stopMainBgm(){if(this.hasReachedMusicSection=!0,this.mode==="start"){this.pause(),this.audioElement.currentTime=0,this.mode="memories";const a=this.getCurrentTrack();a&&(this.audioElement.src=a.audioSrc),this._notifyState()}}async play(){const a=this.getCurrentTrack();if(a){try{const t=this.audioElement.src||"",s=a.audioSrc;!t.includes(s)&&!t.includes(encodeURI(s))&&(this.audioElement.src=s),this.audioElement.muted=this.isMuted,await this.audioElement.play(),this.isPlaying=!0,this._stopWebAudioSynth()}catch(t){console.warn("Audio playback failed or was blocked by browser policy:",t),t.name!=="NotAllowedError"&&this._startWebAudioSynth()}this._notifyState()}}pause(){this.audioElement.pause(),this.isPlaying=!1,this._stopWebAudioSynth(),this._notifyState()}togglePlay(){this.isPlaying?this.pause():this.play().catch(()=>{})}next(){this.memoriesPlaylist.length&&this.setTrack((this.currentIndex+1)%this.memoriesPlaylist.length)}prev(){this.memoriesPlaylist.length&&this.setTrack((this.currentIndex-1+this.memoriesPlaylist.length)%this.memoriesPlaylist.length)}setTrack(a){if(a>=0&&a<this.memoriesPlaylist.length){this.mode="memories",this.hasReachedMusicSection=!0,this.currentIndex=a;const t=this.getCurrentTrack();if(t){const s=this.isPlaying;this.audioElement.src=t.audioSrc,s?this.play().catch(()=>{}):this._notifyState()}}}toggleMute(){this.isMuted=!this.isMuted,this.audioElement.muted=this.isMuted,this._notifyState()}seek(a){this.audioElement.duration&&!isNaN(this.audioElement.duration)&&(this.audioElement.currentTime=a*this.audioElement.duration,this._notifyState())}_notifyState(){this.onStateChange({isPlaying:this.isPlaying,isMuted:this.isMuted,track:this.getCurrentTrack(),currentIndex:this.currentIndex,currentTime:this.audioElement.currentTime||0,duration:this.audioElement.duration||60,isSynth:this.isUsingSynth})}_startWebAudioSynth(){if(!this.isUsingSynth)try{const a=window.AudioContext||window.webkitAudioContext;if(!a)return;this.audioContext||(this.audioContext=new a),this.audioContext.state==="suspended"&&this.audioContext.resume(),this.isUsingSynth=!0,this.isPlaying=!0;const t=[392,392,440,392,523.25,493.88,392,392,440,392,587.33,523.25,392,392,783.99,659.25,523.25,493.88,440,698.46,698.46,659.25,523.25,587.33,523.25];let s=0;this.synthInterval=setInterval(()=>{if(!this.isPlaying||this.isMuted)return;const n=t[s%t.length];this._playChime(n),s++},480),this._notifyState()}catch(a){console.warn("Web Audio synth not supported",a)}}_playChime(a){if(!this.audioContext||this.audioContext.state!=="running")return;const t=this.audioContext.currentTime,s=this.audioContext.createOscillator(),n=this.audioContext.createGain();s.type="sine",s.frequency.setValueAtTime(a,t),n.gain.setValueAtTime(.001,t),n.gain.exponentialRampToValueAtTime(.2,t+.02),n.gain.exponentialRampToValueAtTime(1e-4,t+1.2),s.connect(n),n.connect(this.audioContext.destination),s.start(t),s.stop(t+1.3)}_stopWebAudioSynth(){this.synthInterval&&(clearInterval(this.synthInterval),this.synthInterval=null),this.isUsingSynth=!1}}function Te(r,a,t){const{opening:s}=a;r.innerHTML=`
    <div class="story-card-wrapper scene-transition-enter" id="opening-scene">
      <div class="card-window">
        <!-- 3 Candy Mac Dots -->
        <div class="window-dots" aria-hidden="true">
          <div class="window-dot coral"></div>
          <div class="window-dot yellow"></div>
          <div class="window-dot green"></div>
        </div>

        <!-- Upper-Right Corner Avatar -->
        <div class="opening-corner-avatar" aria-hidden="true">
          <img src="${s.cornerAvatarImage||"/assets/ChatGPT Image Sep 25, 2026, 07_10_29 PM.png"}" alt="Cute Birthday Avatar" class="opening-corner-avatar-img" />
        </div>

        <div class="opening-content">
          <h1 class="opening-title">${s.title}</h1>
          <p class="opening-desc">${s.description}</p>
          <div class="opening-prompt">${s.prompt}</div>
          
          <button class="pill-btn" id="opening-cta-btn" type="button" aria-label="Open birthday surprise">
            ${s.buttonText}
          </button>
        </div>

        <!-- Adorable Kitten with Birthday Cupcake -->
        <div class="opening-kitten-wrapper" aria-hidden="true">
          <img src="${s.kittenImage}" alt="Cute Birthday Kitten" class="opening-kitten-img" />
        </div>
      </div>

      <div class="footer-love">${s.footerText}</div>
    </div>
  `;const n=r.querySelector("#opening-cta-btn"),o=r.querySelector("#opening-scene");n.addEventListener("click",()=>{var u;(u=window.birthdayApp)!=null&&u.audio&&!window.birthdayApp.audio.hasReachedMusicSection&&!window.birthdayApp.audio.isPlaying&&window.birthdayApp.audio.play().catch(()=>{}),o.classList.remove("scene-transition-enter"),o.classList.add("scene-transition-exit"),setTimeout(()=>{t()},550)})}function Ce(r,a,t){const{envelope:s}=a;r.innerHTML=`
    <div class="story-card-wrapper scene-transition-enter" id="envelope-scene">
      <div class="story-header">
        <h2 class="story-header-title">${s.headerTitle}</h2>
        <p class="story-header-subtitle">${s.headerSubtitle}</p>
      </div>

      <div class="card-window">
        <div class="envelope-scene-wrapper">
          <div class="envelope-container" id="interactive-envelope" role="button" tabindex="0" aria-label="Open the birthday letter envelope">
            <!-- Envelope Body -->
            <div class="envelope-body">
              <div class="envelope-side-left"></div>
              <div class="envelope-side-right"></div>
              <div class="envelope-pocket"></div>
            </div>

            <!-- Top Flap -->
            <div class="envelope-top-flap"></div>

            <!-- Wax Seal Heart Badge -->
            <div class="envelope-seal-badge">💌</div>

            <!-- Emerging Inner Letter Preview -->
            <div class="envelope-inner-letter">
              <div style="font-size: 20px; margin-bottom: 8px;">💌</div>
              <div class="envelope-inner-letter-line" style="width: 70%;"></div>
              <div class="envelope-inner-letter-line" style="width: 85%;"></div>
              <div class="envelope-inner-letter-line" style="width: 60%;"></div>
            </div>
          </div>

          <div class="envelope-instruction">${s.promptText}</div>
          <div class="envelope-tag">${s.tagText}</div>
        </div>
      </div>
    </div>
  `;const n=r.querySelector("#interactive-envelope"),o=r.querySelector("#envelope-scene");let u=!1;const d=P=>{if(u)return;u=!0,n.classList.add("opening");const b=n.getBoundingClientRect(),B=(b.left+b.width/2)/window.innerWidth,R=(b.top+b.height/2)/window.innerHeight;setTimeout(()=>{se(B,R)},450),setTimeout(()=>{o.classList.remove("scene-transition-enter"),o.classList.add("scene-transition-exit"),setTimeout(()=>{t()},500)},1250)};n.addEventListener("click",d),n.addEventListener("keydown",P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),d())})}function Fe(r,a,t){const{firstLetter:s}=a,n=s.paragraphs.map(d=>`<p>${d}</p>`).join("");r.innerHTML=`
    <div class="story-card-wrapper scene-transition-enter" id="letter-scene">
      <div class="story-header">
        <h2 class="story-header-title">${s.headerTitle}</h2>
        ${s.headerSubtitle?`<p class="story-header-subtitle">${s.headerSubtitle}</p>`:""}
      </div>

      <div class="card-window">
        <!-- Kitten in top right corner -->
        <div class="letter-kitten-corner" aria-hidden="true">
          <img src="${s.kittenImage}" alt="Birthday Photo" class="letter-kitten-img" />
        </div>

        <div class="letter-paper">
          <div class="letter-top-row">
            <div class="letter-recipient-badge">
              <span>💌</span> ${s.badgeText}
            </div>
          </div>

          <div class="letter-salutation">${s.salutation}</div>
          
          <div class="letter-body">
            ${n}
          </div>

          <div class="letter-bottom-row">
            <div class="letter-stamp" aria-hidden="true">
              <span>💌</span>
              <div>${s.stampText}</div>
            </div>

            <div class="letter-signoff">${s.signoff}</div>
          </div>
        </div>

        <div class="letter-action-row">
          <button class="pill-btn" id="letter-continue-btn" type="button" aria-label="Continue to birthday cake">
            ${s.buttonText}
          </button>
        </div>
      </div>
    </div>
  `;const o=r.querySelector("#letter-continue-btn"),u=r.querySelector("#letter-scene");o.addEventListener("click",()=>{u.classList.remove("scene-transition-enter"),u.classList.add("scene-transition-exit"),setTimeout(()=>{t()},550)})}function Pe(r,a,t){const{cake:s}=a;r.innerHTML=`
    <div class="story-card-wrapper scene-transition-enter" id="cake-scene">
      <div class="story-header">
        <h2 class="story-header-title">${s.headerTitle}</h2>
        <p class="story-header-subtitle">${s.headerSubtitle}</p>
      </div>

      <div class="card-window">
        <div class="cake-scene">
          <div class="cake-instructions" id="cake-main-instruction">${s.instruction||"Cut your birthday cake, birthday girl! 🎂"}</div>
          <div class="cake-sub-instruction" id="cake-sub-instruction">${s.cutInstruction||"Draw a line across the middle of the cake to cut it ✂️"}</div>
          <div class="cake-cut-badge" id="cake-cut-badge">Drag here to cut! ✂️</div>

          <!-- Interactive Cake Composition (Drag-to-cut only) -->
          <div class="cake-wrapper" id="interactive-cake" aria-label="Drag across to cut the birthday cake">
            <!-- Smoke cloud on extinguish -->
            <div class="smoke-cloud" id="smoke-cloud" aria-hidden="true">💨 ✨</div>

            <!-- 2D Vector Cake matching reference screenshot exactly -->
            <svg viewBox="0 0 320 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <!-- Soft Ambient Shadow on Card (NO ceramic plate) -->
                <radialGradient id="cakeAmbientShadow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#D9AAB6" stop-opacity="0.45" />
                  <stop offset="60%" stop-color="#EAC1CC" stop-opacity="0.25" />
                  <stop offset="100%" stop-color="#FFFDF7" stop-opacity="0" />
                </radialGradient>
                <linearGradient id="chocBodyGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#4E2713" />
                  <stop offset="25%" stop-color="#67361B" />
                  <stop offset="50%" stop-color="#7A4122" />
                  <stop offset="75%" stop-color="#67361B" />
                  <stop offset="100%" stop-color="#46220F" />
                </linearGradient>
                <linearGradient id="chocBottomGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#3D1D0D" />
                  <stop offset="30%" stop-color="#552B14" />
                  <stop offset="50%" stop-color="#66341A" />
                  <stop offset="70%" stop-color="#552B14" />
                  <stop offset="100%" stop-color="#35180A" />
                </linearGradient>
                <linearGradient id="creamDripGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#FFFFFF" />
                  <stop offset="40%" stop-color="#FFFDF2" />
                  <stop offset="100%" stop-color="#F7EED8" />
                </linearGradient>
                <linearGradient id="dripShadowGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#2D1307" stop-opacity="0.4" />
                  <stop offset="100%" stop-color="#2D1307" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="palePinkTop" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#FCE7EE" />
                  <stop offset="45%" stop-color="#FAD3DF" />
                  <stop offset="100%" stop-color="#F4BBCD" />
                </linearGradient>
                <linearGradient id="topSheen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.6" />
                  <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="candlePink" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#FF5D8F" />
                  <stop offset="40%" stop-color="#FF3366" />
                  <stop offset="100%" stop-color="#C71D4E" />
                </linearGradient>
                <linearGradient id="flameGrad" x1="0.5" y1="1" x2="0.5" y2="0">
                  <stop offset="0%" stop-color="#FF3B30" />
                  <stop offset="35%" stop-color="#FF8C00" />
                  <stop offset="75%" stop-color="#FFD600" />
                  <stop offset="100%" stop-color="#FFFFEE" />
                </linearGradient>
                <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#FFB300" stop-opacity="0.45" />
                  <stop offset="100%" stop-color="#FF8C00" stop-opacity="0" />
                </radialGradient>
              </defs>

              <!-- Soft Ambient Shadow on table/card (NO ceramic plate) -->
              <ellipse cx="160" cy="216" rx="116" ry="16" fill="url(#cakeAmbientShadow)" />

              <!-- CAKE BODY GROUP -->
              <g id="cake-illustration">
                <!-- Lower Chocolate Cylinder Body -->
                <path d="M 52 148 L 52 185 C 52 218, 268 218, 268 185 L 268 148 Z" fill="url(#chocBottomGrad)" />
                <!-- Upper Chocolate Cylinder Body -->
                <path d="M 52 115 L 52 152 C 52 185, 268 185, 268 152 L 268 115 Z" fill="url(#chocBodyGrad)" />
                <!-- Subtle Horizontal Layer Line across middle -->
                <path d="M 52 152 C 52 185, 268 185, 268 152" fill="none" stroke="#361709" stroke-width="2.5" opacity="0.65" />
                <path d="M 52 153.5 C 52 186.5, 268 186.5, 268 153.5" fill="none" stroke="#7A3D1E" stroke-width="1.2" opacity="0.45" />

                <!-- Drip Shadow onto Chocolate Body -->
                <path d="M 50 115 L 50 148 C 58 160, 68 164, 78 148 C 86 136, 96 136, 106 146 C 118 162, 132 162, 144 144 C 154 132, 166 132, 176 146 C 188 166, 204 166, 216 144 C 224 132, 234 136, 242 156 C 250 178, 262 174, 270 142 L 270 115 Z" fill="url(#dripShadowGrad)" />

                <!-- Thick Soft Cream-Colored Frosting Drips -->
                <path d="M 50 114 L 50 144 C 58 156, 68 160, 78 144 C 86 132, 96 132, 106 142 C 118 158, 132 158, 144 140 C 154 128, 166 128, 176 142 C 188 162, 204 162, 216 140 C 224 128, 234 132, 242 152 C 250 174, 262 170, 270 138 L 270 114 Z" fill="url(#creamDripGrad)" stroke="#FFF9EB" stroke-width="1.5" />

                <!-- Top Oval Pale Pink Frosting -->
                <ellipse cx="160" cy="114" rx="110" ry="34" fill="url(#palePinkTop)" stroke="#FFF0F5" stroke-width="2" />
                <!-- Glossy Rim Highlight Curve -->
                <path d="M 66 112 C 90 94, 230 94, 254 112 C 220 99, 100 99, 66 112 Z" fill="url(#topSheen)" />
                <!-- Cut Seam Line (Revealed on cut) -->
                <line id="cake-cut-seam" x1="160" y1="84" x2="160" y2="210" stroke="#FFFFFF" stroke-width="2.5" stroke-dasharray="4 3" opacity="0" />

                <!-- Subtle Animated Surface Glitter Across Cake -->
                <g class="cake-glitter-group" aria-hidden="true">
                  <path class="cake-glitter" d="M 105 118 Q 107 118 107 116 Q 107 118 109 118 Q 107 118 107 120 Q 107 118 105 118 Z" fill="#FFFBE8"/>
                  <path class="cake-glitter" d="M 160 128 Q 162.5 128 162.5 125.5 Q 162.5 128 165 128 Q 162.5 128 162.5 130.5 Q 162.5 128 160 128 Z" fill="#FFFFFF"/>
                  <path class="cake-glitter" d="M 220 121 Q 222 121 222 119 Q 222 121 224 121 Q 222 121 222 123 Q 222 121 220 121 Z" fill="#FFFBE8"/>
                  <path class="cake-glitter" d="M 135 146 Q 137 146 137 144 Q 137 146 139 146 Q 137 146 137 148 Q 137 146 135 146 Z" fill="#FFFFFF"/>
                </g>

                <!-- Dashed Cut Guide Line Across Middle of Cake -->
                <line id="cake-cut-guide-line" x1="58" y1="145" x2="262" y2="145" stroke="#FFBD44" stroke-width="2.5" stroke-dasharray="6 6" stroke-linecap="round" opacity="0.85" />
              </g>

              <!-- EXACTLY ONE BRIGHT PINK CANDLE IN CENTER -->
              <g id="candle-composition">
                <ellipse cx="160" cy="42" rx="28" ry="32" fill="url(#flameGlow)" />
                <rect x="154" y="60" width="12" height="54" rx="3.5" fill="url(#candlePink)" stroke="#FFFFFF" stroke-width="1.5" />
                <line x1="156.5" y1="62" x2="156.5" y2="112" stroke="#FFA3C0" stroke-width="1.5" stroke-linecap="round" />
                <!-- Wick -->
                <line x1="160" y1="60" x2="160" y2="50" stroke="#3D2012" stroke-width="2.2" stroke-linecap="round" />

                <!-- Naturally Animated Candle Flame -->
                <g class="candle-flame" id="candle-flame">
                  <path d="M 160 20 C 168 32, 172 42, 168 51 C 164 59, 156 59, 152 51 C 148 42, 152 32, 160 20 Z" fill="url(#flameGrad)" />
                  <ellipse cx="160" cy="46" rx="4.5" ry="8" fill="#FFFFFF" opacity="0.95" />
                </g>
              </g>
            </svg>
          </div>

          <!-- Celebration Text revealed after cut -->
          <div class="cake-celebration-message" id="cake-celebration-message" style="display: none;">
            <h3 class="cake-celebration-title">${s.successTitle}</h3>
            <p class="cake-celebration-sub">${s.successSubtitle}</p>
          </div>

          <div style="margin-top: 22px;">
            <button class="pill-btn" id="cake-continue-btn" type="button" style="display: none;">
              ${s.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;const n=r.querySelector("#interactive-cake"),o=r.querySelector("#candle-flame"),u=r.querySelector("#smoke-cloud"),d=r.querySelector("#cake-main-instruction"),P=r.querySelector("#cake-sub-instruction"),b=r.querySelector("#cake-cut-guide-line"),B=r.querySelector("#cake-cut-badge"),R=r.querySelector("#cake-cut-seam"),w=r.querySelector("#cake-celebration-message"),L=r.querySelector("#cake-continue-btn"),D=r.querySelector("#cake-scene");let _=!1;const m=()=>{if(_)return;_=!0,o.classList.add("extinguished"),u.classList.add("active"),b&&(b.style.opacity="0"),B&&(B.style.display="none"),P&&(P.style.display="none"),R&&(R.style.opacity="0.85"),n.style.transition="transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",n.style.transform="scale(1.04) translateY(-4px)",setTimeout(()=>{n.style.transform="scale(1) translateY(0)"},400);const E=document.createElement("div");E.className="cake-cut-fx",E.innerHTML=`
      <div class="cake-popper left" aria-hidden="true">🎉</div>
      <div class="cake-popper right" aria-hidden="true">🎉</div>
      <div class="cake-spark" style="left: 44%; top: 48%; --tx: -24px; --ty: -18px;">✨</div>
      <div class="cake-spark" style="left: 56%; top: 48%; --tx: 24px; --ty: -18px;">✨</div>
      <div class="cake-spark" style="left: 50%; top: 45%; --tx: 0px; --ty: -28px;">⭐</div>
      <div class="cake-crumb" style="left: 44%; top: 52%; --tx: -14px; --ty: 36px; width: 6px; height: 6px; background: #4E2713;"></div>
      <div class="cake-crumb" style="left: 50%; top: 53%; --tx: 3px; --ty: 40px; width: 5px; height: 5px; background: #67361B;"></div>
      <div class="cake-crumb" style="left: 57%; top: 51%; --tx: 16px; --ty: 37px; width: 6px; height: 6px; background: #3D1D0D;"></div>
      <div class="cake-crumb" style="left: 36%; top: 54%; --tx: -10px; --ty: 30px; width: 4px; height: 4px; background: #FAD3DF;"></div>
      <div class="cake-crumb" style="left: 64%; top: 54%; --tx: 12px; --ty: 32px; width: 4px; height: 4px; background: #FAD3DF;"></div>
    `,n.appendChild(E),setTimeout(()=>E.remove(),1500),ee(),d.innerHTML="✨ Your wish has flown to the stars! ✨",w.style.display="block",L.style.display="inline-flex"},c=()=>{D.classList.remove("scene-transition-enter"),D.classList.add("scene-transition-exit"),setTimeout(()=>{t()},550)};L.addEventListener("click",c);const S=r.querySelector("#candle-composition");S&&(S.style.cursor="pointer",S.addEventListener("click",E=>{E.stopPropagation(),m()}));let M=0,H=0;n.addEventListener("touchstart",E=>{M=E.touches[0].clientX,H=E.touches[0].clientY},{passive:!0}),n.addEventListener("touchend",E=>{const Z=E.changedTouches[0].clientX,X=E.changedTouches[0].clientY;Math.hypot(Z-M,X-H)>35&&m()});let T=0,$=0,K=!1;n.addEventListener("mousedown",E=>{K=!0,T=E.clientX,$=E.clientY}),window.addEventListener("mouseup",E=>{K&&(K=!1,Math.hypot(E.clientX-T,E.clientY-$)>40&&m())})}function Ee(r,a,t){const{celebration:s}=a;r.innerHTML=`
    <div class="story-card-wrapper scene-transition-enter" id="celebration-scene">
      <div class="story-header">
        <h2 class="story-header-title">${s.headerTitle}</h2>
        <p class="story-header-subtitle">${s.headerSubtitle}</p>
      </div>

      <div class="card-window">
        <div class="celebration-content">
          <!-- Cute Character waving wand -->
          <div class="celebration-character-card" aria-hidden="true">
            <img src="${s.characterImage}" alt="Cute Birthday Magic Kitty" class="celebration-character-img" />
          </div>

          <div class="celebration-cake-icon">🎂</div>
          <h3 class="celebration-title">${s.title}</h3>
          <p class="celebration-prompt">${s.prompt}</p>
          <p class="celebration-subtext">${s.subtext}</p>

          <button class="pill-btn" id="wish-made-btn" type="button" aria-label="I have made my wish">
            ${s.buttonText}
          </button>
        </div>
      </div>
    </div>
  `;const n=r.querySelector("#wish-made-btn"),o=r.querySelector("#celebration-scene");n.addEventListener("click",()=>{ee(),o.classList.remove("scene-transition-enter"),o.classList.add("scene-transition-exit"),setTimeout(()=>{t()},550)})}function Be(r,a,t,s){var Z,X;const{musicSection:n,memories:o}=a;let u=t.currentIndex||0;r.innerHTML=`
    <div class="story-card-wrapper scene-transition-enter" id="music-scene">
      <div class="story-header">
        <h2 class="story-header-title">${n.headerTitle}</h2>
        <p class="story-header-subtitle">${n.headerSubtitle}</p>
      </div>

      <div class="card-window">
        <div class="music-scene">
          <div class="music-prompt">${n.prompt}</div>

          <!-- Integrated Audio Player Card (Moved above cards; sound bars & mute kept) -->
          <div class="audio-player-card">
            <button class="audio-play-circle-btn" id="audio-play-btn" aria-label="Play or pause music">
              <span id="play-icon">▶</span>
            </button>

            <div class="audio-info">
              <div class="audio-song-name" id="player-song-title">${((Z=o[u])==null?void 0:Z.title)||"Our Song"}</div>
              <div class="audio-artist-name" id="player-artist-name">${((X=o[u])==null?void 0:X.artist)||"Special Memory"}</div>
              
              <!-- Scrubber -->
              <div class="audio-scrubber-track" id="audio-scrubber" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                <div class="audio-scrubber-fill" id="audio-scrubber-fill"></div>
              </div>
            </div>

            <!-- Equalizer Sound Wave Bars -->
            <div class="sound-bars" id="sound-bars" aria-hidden="true">
              <div class="sound-bar"></div>
              <div class="sound-bar"></div>
              <div class="sound-bar"></div>
            </div>

            <div class="audio-controls-right">
              <button class="audio-icon-btn" id="audio-mute-btn" title="Mute/Unmute" aria-label="Toggle mute">
                🔊
              </button>
            </div>
          </div>

          <!-- 3 Photo Cards in One Horizontal Row -->
          <div class="carousel-container">
            <button class="carousel-nav-btn prev" id="carousel-prev" aria-label="Previous memory card">❮</button>
            <div class="carousel-viewport" id="carousel-viewport">
              <div class="carousel-track" id="carousel-track">
                ${o.map((k,G)=>`
                  <div class="memory-card ${G===u?"active":""}" data-index="${G}" role="button" tabindex="0">
                    <div class="memory-photo-wrapper">
                      <img src="${k.image}" alt="${k.title}" class="memory-photo-img" loading="lazy" />
                    </div>
                    <div class="memory-card-title">${k.title}</div>
                    <div class="memory-card-caption">${k.caption}</div>
                  </div>
                `).join("")}
              </div>
            </div>
            <button class="carousel-nav-btn next" id="carousel-next" aria-label="Next memory card">❯</button>
          </div>

          <button class="pill-btn" id="music-continue-btn" type="button">
            ${n.buttonText}
          </button>
        </div>
      </div>
    </div>
  `,r.querySelector("#carousel-track");const d=r.querySelector("#carousel-viewport"),P=r.querySelector("#carousel-prev"),b=r.querySelector("#carousel-next"),B=r.querySelector("#audio-play-btn"),R=r.querySelector("#play-icon"),w=r.querySelector("#player-song-title"),L=r.querySelector("#player-artist-name"),D=r.querySelector("#audio-scrubber"),_=r.querySelector("#audio-scrubber-fill"),m=r.querySelector("#sound-bars"),c=r.querySelector("#audio-mute-btn"),S=r.querySelector("#music-continue-btn"),M=r.querySelector("#music-scene"),H=r.querySelectorAll(".memory-card");function T(k){u=Math.max(0,Math.min(k,o.length-1)),t.setTrack(u),H.forEach((U,V)=>{V===u?(U.classList.add("active"),U.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})):U.classList.remove("active")});const G=o[u];G&&(w.textContent=G.title,L.textContent=G.artist)}function $(k){if(R.textContent=k.isPlaying?"❚❚":"▶",c.textContent=k.isMuted?"🔇":"🔊",k.isPlaying?m.classList.add("playing"):m.classList.remove("playing"),k.duration>0){const G=k.currentTime/k.duration*100;_.style.width=`${Math.min(100,Math.max(0,G))}%`}}const K=t.onStateChange;t.onStateChange=k=>{$(k),K&&K(k)},$({isPlaying:t.isPlaying,isMuted:t.isMuted,currentTime:t.audioElement.currentTime||0,duration:t.audioElement.duration||60}),H.forEach(k=>{k.addEventListener("click",()=>{const G=parseInt(k.getAttribute("data-index"),10);T(G),t.play()})}),P.addEventListener("click",()=>{const k=(u-1+o.length)%o.length;T(k)}),b.addEventListener("click",()=>{const k=(u+1)%o.length;T(k)}),B.addEventListener("click",()=>{t.togglePlay()}),c.addEventListener("click",()=>{t.toggleMute()}),D.addEventListener("click",k=>{const G=D.getBoundingClientRect(),U=(k.clientX-G.left)/G.width;t.seek(Math.max(0,Math.min(1,U)))});let E=0;d.addEventListener("touchstart",k=>{E=k.touches[0].clientX},{passive:!0}),d.addEventListener("touchend",k=>{const U=k.changedTouches[0].clientX-E;if(U>45){const V=(u-1+o.length)%o.length;T(V)}else if(U<-45){const V=(u+1)%o.length;T(V)}}),T(u),S.addEventListener("click",()=>{t.isPlaying||t.play().catch(()=>{}),M.classList.remove("scene-transition-enter"),M.classList.add("scene-transition-exit"),setTimeout(()=>{s()},550)})}function Le(r,a,t){const{wishSection:s,wishes:n}=a,o=new Set;r.innerHTML=`
    <div class="story-card-wrapper scene-transition-enter" id="wishes-scene">
      <div class="story-header">
        <h2 class="story-header-title">${s.headerTitle}</h2>
        <p class="story-header-subtitle">${s.headerSubtitle}</p>
      </div>

      <div class="card-window">
        <div class="wishes-scene">
          <div class="wishes-grid" id="wishes-grid">
            ${n.map(w=>`
              <div class="flip-card" data-id="${w.id}" role="button" tabindex="0" aria-label="${w.frontTitle}: click to flip card">
                <div class="flip-card-inner">
                  <!-- Front Side -->
                  <div class="flip-card-front">
                    <img src="${w.frontImage}" alt="${w.frontTitle}" class="flip-card-front-img" />
                    <span class="flip-card-front-sparkle">✨</span>
                  </div>

                  <!-- Back Side -->
                  <div class="flip-card-back">
                    <div class="flip-card-back-text">${w.backMessage}</div>
                    <div class="flip-back-badge">${w.flipBackText}</div>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>

          <!-- Progress Indicator -->
          <div class="wishes-progress-wrapper">
            <div class="wishes-progress-text" id="wishes-progress-label">
              ${s.prompt}
            </div>
            <div class="wishes-progress-bar">
              <div class="wishes-progress-fill" id="wishes-progress-fill"></div>
            </div>
          </div>

          <div style="margin-top: 14px;">
            <button class="pill-btn" id="wishes-continue-btn" type="button" style="display: none;">
              ${s.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;const u=r.querySelectorAll(".flip-card"),d=r.querySelector("#wishes-progress-label"),P=r.querySelector("#wishes-progress-fill"),b=r.querySelector("#wishes-continue-btn"),B=r.querySelector("#wishes-scene");function R(){const w=o.size,L=n.length,D=w/L*100;P.style.width=`${D}%`,w===0?d.textContent=s.prompt:w<L?d.textContent=`${w} of ${L} birthday wishes unlocked! Keep going 🎉`:(d.textContent=s.allUnlockedText,b.style.display="inline-flex",ee())}u.forEach(w=>{const L=parseInt(w.getAttribute("data-id"),10),D=()=>{if(w.classList.toggle("flipped")&&!o.has(L)){o.add(L);const m=w.getBoundingClientRect(),c=(m.left+m.width/2)/window.innerWidth,S=(m.top+m.height/2)/window.innerHeight;se(c,S)}R()};w.addEventListener("click",D),w.addEventListener("keydown",_=>{(_.key==="Enter"||_.key===" ")&&(_.preventDefault(),D())})}),b.addEventListener("click",()=>{B.classList.remove("scene-transition-enter"),B.classList.add("scene-transition-exit"),setTimeout(()=>{t()},550)})}let J=null;function he(r){if(J){r.src=J;return}const a=()=>{try{const t=r.naturalWidth,s=r.naturalHeight;if(!t||!s)return;const n=document.createElement("canvas");n.width=t,n.height=s;const o=n.getContext("2d");o.drawImage(r,0,0);const u=o.getImageData(0,0,t,s),d=u.data;let P=!1;for(let c=3;c<d.length;c+=40)if(d[c]<250){P=!0;break}if(P)return;const b=new Uint8Array(t*s),B=new Int32Array(t*s);let R=0,w=0;for(let c=0;c<t;c++){const S=c,M=(s-1)*t+c;d[S*4]>=248&&d[S*4+1]>=248&&d[S*4+2]>=248&&(b[S]=1,B[w++]=S),d[M*4]>=248&&d[M*4+1]>=248&&d[M*4+2]>=248&&(b[M]=1,B[w++]=M)}for(let c=0;c<s;c++){const S=c*t,M=c*t+(t-1);d[S*4]>=248&&d[S*4+1]>=248&&d[S*4+2]>=248&&(b[S]=1,B[w++]=S),d[M*4]>=248&&d[M*4+1]>=248&&d[M*4+2]>=248&&(b[M]=1,B[w++]=M)}for(;R<w;){const c=B[R++],S=c%t,M=c/t|0,H=[S>0?c-1:-1,S<t-1?c+1:-1,M>0?c-t:-1,M<s-1?c+t:-1];for(const T of H)if(T>=0&&!b[T]){const $=T*4;d[$]>=248&&d[$+1]>=248&&d[$+2]>=248&&(b[T]=1,B[w++]=T)}}const L=new Uint8Array(b),D=new Int32Array(t*s);let _=0,m=0;for(let c=0;c<t*s;c++)if(b[c]){const S=c%t,M=c/t|0,H=[S>0?c-1:-1,S<t-1?c+1:-1,M>0?c-t:-1,M<s-1?c+t:-1];for(const T of H)if(T>=0&&!L[T]){const $=T*4;(d[$]<248||d[$+1]<248||d[$+2]<248)&&(L[T]=1,D[m++]=T)}}for(;_<m;){const c=D[_++],S=c%t,M=c/t|0,H=[S>0?c-1:-1,S<t-1?c+1:-1,M>0?c-t:-1,M<s-1?c+t:-1];for(const T of H)if(T>=0&&!L[T]){const $=T*4;(d[$]<248||d[$+1]<248||d[$+2]<248)&&(L[T]=1,D[m++]=T)}}for(let c=0;c<t*s;c++)L[c]&&(d[c*4+3]=0);o.putImageData(u,0,0),J=n.toDataURL("image/png"),r.src=J}catch(t){console.warn("Could not process sticker cutout:",t)}};r.complete&&r.naturalWidth>0?a():r.addEventListener("load",a,{once:!0})}if(typeof Image<"u"){const r=new Image;r.src="/assets/lovely 🌹👀💞.jpg",r.onload=()=>{he(r)}}function Ie(r,a,t){const{finalLetter:s,completion:n}=a,o=s.paragraphs.map(m=>`<p>${m}</p>`).join("");r.innerHTML=`
    <div class="story-card-wrapper scene-transition-enter" id="final-letter-scene">
      <div class="story-header" id="final-header">
        <h2 class="story-header-title">${s.headerTitle}</h2>
        <p class="story-header-subtitle">${s.headerSubtitle}</p>
      </div>

      <div class="card-window" id="final-card-window">
        <!-- Kitten hugging heart in top right -->
        <div class="letter-kitten-corner" id="final-kitten" aria-hidden="true">
          <img src="${J||s.kittenImage}" alt="Cute Kitten with Heart" class="letter-kitten-img" />
        </div>

        <!-- Final Letter View -->
        <div id="final-letter-content">
          <div class="final-letter-paper">
            <div class="letter-top-row">
              <div class="letter-recipient-badge">
                ${s.badgeText.includes("💌")?s.badgeText:`<span>💌</span> ${s.badgeText}`}
              </div>
            </div>

            <div class="letter-salutation">${s.salutation}</div>
            
            <div class="letter-body">
              ${o}
            </div>

            <div class="letter-bottom-row" style="margin-top: 20px;">
              <div></div>
              <div class="letter-signoff">${s.signoff.replace(/\n/g,"<br>")}</div>
            </div>
          </div>

          <div class="final-letter-actions">
            <div class="final-letter-prompt">${s.sealPrompt}</div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <button class="seal-stamp-btn" id="seal-letter-btn" type="button" aria-label="Seal this letter">
                ${s.sealButtonText}
              </button>
              <button class="replay-btn" id="quick-replay-btn" type="button" aria-label="Experience again">
                ${s.replayButtonText}
              </button>
            </div>
          </div>
        </div>

        <!-- Step 9: Sealed Completion Screen (Initially hidden) -->
        <div class="completion-content" id="completion-screen" style="display: none;">
          <div class="completion-heart-icon" aria-hidden="true">💖</div>
          <h2 class="completion-title">${n.title}</h2>
          <div class="completion-sub">${n.subtitle}</div>
          <p class="completion-note">${n.closingNote}</p>

          <button class="pill-btn" id="completion-replay-btn" type="button" aria-label="Restart the experience">
            ${n.replayButtonText}
          </button>
        </div>
      </div>
    </div>
  `;const u=r.querySelector("#seal-letter-btn"),d=r.querySelector("#quick-replay-btn"),P=r.querySelector("#completion-replay-btn"),b=r.querySelector("#final-letter-content"),B=r.querySelector("#completion-screen"),R=r.querySelector("#final-header"),w=r.querySelector("#final-kitten"),L=r.querySelector("#final-letter-scene"),D=r.querySelector("#final-kitten img");D&&!J&&he(D),u.addEventListener("click",()=>{u.style.transform="scale(0.92)",u.style.boxShadow="0 0 20px rgba(233, 77, 119, 0.8)",se(.5,.5),setTimeout(()=>{b.style.transition="all 0.5s ease",b.style.opacity="0",b.style.transform="scale(0.95)",w&&(w.style.display="none"),setTimeout(()=>{b.style.display="none",R.style.display="none",B.style.display="flex",ee()},500)},300)});const _=()=>{L.classList.remove("scene-transition-enter"),L.classList.add("scene-transition-exit"),setTimeout(()=>{t()},550)};d.addEventListener("click",_),P.addEventListener("click",_)}class Ae{constructor(){this.appRoot=document.getElementById("app-root"),this.progressDotsContainer=document.getElementById("story-progress-dots"),this.backBtn=document.getElementById("topbar-back-btn"),this.globalMusicBtn=document.getElementById("global-music-toggle-btn"),this.currentStep=1,this.totalSteps=8,this.initTheme(),this.initParticles(),this.initAudio(),this.initListeners(),window.birthdayApp=this,this.renderCurrentStep()}initTheme(){const a=document.documentElement,{theme:t}=z;t&&(a.style.setProperty("--bg-primary",t.bgPrimary),a.style.setProperty("--bg-secondary",t.bgSecondary),a.style.setProperty("--soft-pink",t.softPink),a.style.setProperty("--primary-pink",t.primaryPink),a.style.setProperty("--dark-pink",t.darkPink),a.style.setProperty("--vibrant-pink",t.vibrantPink),a.style.setProperty("--text-dark",t.textDark),a.style.setProperty("--text-secondary",t.textSecondary),a.style.setProperty("--cream",t.cream),a.style.setProperty("--card-bg",t.cardBg),a.style.setProperty("--accent-gold",t.accentGold),a.style.setProperty("--mint-green",t.mintGreen),a.style.setProperty("--macDotCoral",t.macDotCoral),a.style.setProperty("--macDotYellow",t.macDotYellow),a.style.setProperty("--macDotGreen",t.macDotGreen))}initParticles(){const a=document.getElementById("particle-canvas");a&&(this.particles=new Se(a),this.particles.start())}initAudio(){this.audio=new Me(z.memories,{mainBgmTrack:z.mainAudio,onStateChange:t=>{t.isPlaying?(this.globalMusicBtn.innerHTML="🎵 Playing",this.globalMusicBtn.style.background="linear-gradient(135deg, #FF688C, #E94D77)"):(this.globalMusicBtn.innerHTML="🎵 Music",this.globalMusicBtn.style.background="linear-gradient(135deg, #7A5AF8, #613BE7)")}}),this.audio.play().catch(()=>{});const a=()=>{!this.audio.hasReachedMusicSection&&!this.audio.isPlaying&&this.audio.play().catch(()=>{})};window.addEventListener("pointerdown",a,{once:!0}),window.addEventListener("keydown",a,{once:!0})}initListeners(){this.backBtn.addEventListener("click",()=>{this.currentStep>1&&this.goToStep(this.currentStep-1)}),this.globalMusicBtn.addEventListener("click",()=>{this.audio.togglePlay()})}updateProgressDots(){this.progressDotsContainer.innerHTML=Array.from({length:this.totalSteps}).map((a,t)=>`<div class="progress-dot ${t+1===this.currentStep?"active":""}"></div>`).join(""),this.currentStep>1?this.backBtn.style.visibility="visible":this.backBtn.style.visibility="hidden"}goToStep(a){this.currentStep=Math.max(1,Math.min(a,this.totalSteps)),this.currentStep>=6&&this.audio.stopMainBgm(),this.renderCurrentStep()}nextStep(){this.currentStep<this.totalSteps&&this.goToStep(this.currentStep+1)}replay(){this.goToStep(1)}renderCurrentStep(){switch(this.updateProgressDots(),this.appRoot.innerHTML="",window.scrollTo({top:0,behavior:"smooth"}),this.currentStep){case 1:Te(this.appRoot,z,()=>this.nextStep());break;case 2:Ce(this.appRoot,z,()=>this.nextStep());break;case 3:Fe(this.appRoot,z,()=>this.nextStep());break;case 4:Pe(this.appRoot,z,()=>this.nextStep());break;case 5:Ee(this.appRoot,z,()=>this.nextStep());break;case 6:Be(this.appRoot,z,this.audio,()=>this.nextStep());break;case 7:Le(this.appRoot,z,()=>this.nextStep());break;case 8:Ie(this.appRoot,z,()=>this.replay());break;default:this.goToStep(1)}}}document.addEventListener("DOMContentLoaded",()=>{window.app=new Ae});
