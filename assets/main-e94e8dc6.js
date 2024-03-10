import{u as z,m as w,r as d,M as X,i as U,a as R,c as K,f as b,b as C,d as T,e as se,g as V,h as ne,j as ie,p as re,v as oe,k as ae,w as ce,l as s,n as a,o as le,R as de}from"./motion-eda4ab28.js";function $(e){const t=z(()=>w(e)),{isStatic:r}=d.useContext(X);if(r){const[,n]=d.useState(e);d.useEffect(()=>t.on("change",n),[])}return t}const ue=e=>typeof e=="object"&&e.mix,he=e=>ue(e)?e.mix:void 0;function fe(...e){const t=!Array.isArray(e[0]),r=t?0:-1,n=e[0+r],i=e[1+r],o=e[2+r],c=e[3+r],l=U(i,o,{mixer:he(o[0]),...c});return t?l(n):l}function J(e,t){const r=$(t()),n=()=>r.set(t());return n(),R(()=>{const i=()=>b.update(n,!1,!0),o=e.map(c=>c.on("change",i));return()=>{o.forEach(c=>c()),K(n)}}),r}function pe(e){C.current=[],e();const t=J(C.current,e);return C.current=void 0,t}function I(e,t,r,n){if(typeof e=="function")return pe(e);const i=typeof t=="function"?t:fe(t,r,n);return Array.isArray(e)?W(e,i):W([e],([o])=>i(o))}function W(e,t){const r=z(()=>[]);return J(e,()=>{r.length=0;const n=e.length;for(let i=0;i<n;i++)r[i]=e[i].get();return t(r)})}function me(e,t={}){const{isStatic:r}=d.useContext(X),n=d.useRef(null),i=$(T(e)?e.get():e),o=()=>{n.current&&n.current.stop()};return d.useInsertionEffect(()=>i.attach((c,l)=>{if(r)return l(c);if(o(),n.current=se({keyframes:[i.get(),c],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:l}),!V.isProcessing){const u=performance.now()-V.timestamp;u<30&&(n.current.time=ne(u))}return i.get()},o),[JSON.stringify(t)]),R(()=>{if(T(e))return e.on("change",c=>i.set(parseFloat(c)))},[i]),i}function Q(e,t,r){var n;if(typeof e=="string"){let i=document;t&&(ie(!!t.current),i=t.current),r?((n=r[e])!==null&&n!==void 0||(r[e]=i.querySelectorAll(e)),e=r[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const k=new WeakMap;let g;function ge(e,t){if(t){const{inlineSize:r,blockSize:n}=t[0];return{width:r,height:n}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function xe({target:e,contentRect:t,borderBoxSize:r}){var n;(n=k.get(e))===null||n===void 0||n.forEach(i=>{i({target:e,contentSize:t,get size(){return ge(e,r)}})})}function ve(e){e.forEach(xe)}function je(){typeof ResizeObserver>"u"||(g=new ResizeObserver(ve))}function ye(e,t){g||je();const r=Q(e);return r.forEach(n=>{let i=k.get(n);i||(i=new Set,k.set(n,i)),i.add(t),g==null||g.observe(n)}),()=>{r.forEach(n=>{const i=k.get(n);i==null||i.delete(t),i!=null&&i.size||g==null||g.unobserve(n)})}}const L=new Set;let E;function we(){E=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};L.forEach(r=>r(t))},window.addEventListener("resize",E)}function be(e){return L.add(e),E||we(),()=>{L.delete(e),!L.size&&E&&(E=void 0)}}function Ee(e,t){return typeof e=="function"?be(e):ye(e,t)}const Ne=50,B=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),Se=()=>({time:0,x:B(),y:B()}),ke={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function P(e,t,r,n){const i=r[t],{length:o,position:c}=ke[t],l=i.current,u=r.time;i.current=e["scroll"+c],i.scrollLength=e["scroll"+o]-e["client"+o],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=re(0,i.scrollLength,i.current);const f=n-u;i.velocity=f>Ne?0:oe(i.current-l,f)}function Le(e,t,r){P(e,"x",t,r),P(e,"y",t,r),t.time=r}function Ce(e,t){const r={x:0,y:0};let n=e;for(;n&&n!==t;)if(n instanceof HTMLElement)r.x+=n.offsetLeft,r.y+=n.offsetTop,n=n.offsetParent;else if(n.tagName==="svg"){const i=n.getBoundingClientRect();n=n.parentElement;const o=n.getBoundingClientRect();r.x+=i.left-o.left,r.y+=i.top-o.top}else if(n instanceof SVGGraphicsElement){const{x:i,y:o}=n.getBBox();r.x+=i,r.y+=o;let c=null,l=n.parentNode;for(;!c;)l.tagName==="svg"&&(c=l),l=n.parentNode;n=c}else break;return r}const He={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},O={start:0,center:.5,end:1};function _(e,t,r=0){let n=0;if(O[e]!==void 0&&(e=O[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?n=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?n=i/100*document.documentElement.clientWidth:e.endsWith("vh")?n=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(n=t*e),r+n}const Ve=[0,0];function Ie(e,t,r,n){let i=Array.isArray(e)?e:Ve,o=0,c=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,O[e]?e:"0"]),o=_(i[0],r,n),c=_(i[1],t),o-c}const Oe={x:0,y:0};function ze(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function Re(e,t,r){let{offset:n=He.All}=r;const{target:i=e,axis:o="y"}=r,c=o==="y"?"height":"width",l=i!==e?Ce(i,e):Oe,u=i===e?{width:e.scrollWidth,height:e.scrollHeight}:ze(i),f={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let h=!t[o].interpolate;const x=n.length;for(let p=0;p<x;p++){const A=Ie(n[p],f[c],u[c],l[o]);!h&&A!==t[o].interpolatorOffsets[p]&&(h=!0),t[o].offset[p]=A}h&&(t[o].interpolate=U(t[o].offset,ae(n)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function Me(e,t=e,r){if(r.x.targetOffset=0,r.y.targetOffset=0,t!==e){let n=t;for(;n&&n!==e;)r.x.targetOffset+=n.offsetLeft,r.y.targetOffset+=n.offsetTop,n=n.offsetParent}r.x.targetLength=t===e?t.scrollWidth:t.clientWidth,r.y.targetLength=t===e?t.scrollHeight:t.clientHeight,r.x.containerLength=e.clientWidth,r.y.containerLength=e.clientHeight}function Ae(e,t,r,n={}){return{measure:()=>Me(e,n.target,r),update:i=>{Le(e,r,i),(n.offset||n.target)&&Re(e,r,n)},notify:()=>t(r)}}const y=new WeakMap,G=new WeakMap,H=new WeakMap,D=e=>e===document.documentElement?window:e;function Te(e,{container:t=document.documentElement,...r}={}){let n=H.get(t);n||(n=new Set,H.set(t,n));const i=Se(),o=Ae(t,e,i,r);if(n.add(o),!y.has(t)){const l=()=>{for(const p of n)p.measure()},u=()=>{for(const p of n)p.update(V.timestamp)},f=()=>{for(const p of n)p.notify()},h=()=>{b.read(l,!1,!0),b.update(u,!1,!0),b.update(f,!1,!0)};y.set(t,h);const x=D(t);window.addEventListener("resize",h,{passive:!0}),t!==document.documentElement&&G.set(t,Ee(t,h)),x.addEventListener("scroll",h,{passive:!0})}const c=y.get(t);return b.read(c,!1,!0),()=>{var l;K(c);const u=H.get(t);if(!u||(u.delete(o),u.size))return;const f=y.get(t);y.delete(t),f&&(D(t).removeEventListener("scroll",f),(l=G.get(t))===null||l===void 0||l(),window.removeEventListener("resize",f))}}function q(e,t){ce(!!(!t||t.current))}const We=()=>({scrollX:w(0),scrollY:w(0),scrollXProgress:w(0),scrollYProgress:w(0)});function M({container:e,target:t,layoutEffect:r=!0,...n}={}){const i=z(We);return(r?R:d.useEffect)(()=>(q("target",t),q("container",e),Te(({x:c,y:l})=>{i.scrollX.set(c.current),i.scrollXProgress.set(c.progress),i.scrollY.set(l.current),i.scrollYProgress.set(l.progress)},{...n,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(n.offset)]),i}const Be={some:0,all:1};function Pe(e,t,{root:r,margin:n,amount:i="some"}={}){const o=Q(e),c=new WeakMap,l=f=>{f.forEach(h=>{const x=c.get(h.target);if(h.isIntersecting!==!!x)if(h.isIntersecting){const p=t(h);typeof p=="function"?c.set(h.target,p):u.unobserve(h.target)}else x&&(x(h),c.delete(h.target))})},u=new IntersectionObserver(l,{root:r,rootMargin:n,threshold:typeof i=="number"?i:Be[i]});return o.forEach(f=>u.observe(f)),()=>u.disconnect()}function Z(e,{root:t,margin:r,amount:n,once:i=!1}={}){const[o,c]=d.useState(!1);return d.useEffect(()=>{if(!e.current||i&&o)return;const l=()=>(c(!0),i?void 0:()=>c(!1)),u={root:t&&t.current||void 0,margin:r,amount:n};return Pe(e.current,l,u)},[t,e,r,i]),o}const N={_origin:"https://api.emailjs.com"},_e=(e,t="https://api.emailjs.com")=>{N._userID=e,N._origin=t},ee=(e,t,r)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class F{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const te=(e,t,r={})=>new Promise((n,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:c})=>{const l=new F(c);l.status===200||l.text==="OK"?n(l):i(l)}),o.addEventListener("error",({target:c})=>{i(new F(c))}),o.open("POST",N._origin+e,!0),Object.keys(r).forEach(c=>{o.setRequestHeader(c,r[c])}),o.send(t)}),Ge=(e,t,r,n)=>{const i=n||N._userID;return ee(i,e,t),te("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:i,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"})},De=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},qe=(e,t,r,n)=>{const i=n||N._userID,o=De(r);ee(i,e,t);const c=new FormData(o);return c.append("lib_version","3.11.0"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",i),te("/api/v1.0/email/send-form",c)},Fe={init:_e,send:Ge,sendForm:qe},j={initial:{y:500,opacity:0},animate:{y:0,opacity:1,transition:{duration:.5,staggerChildren:.1}}},Ye=()=>{const e=d.useRef(),t=d.useRef(),[r,n]=d.useState(!1),[i,o]=d.useState(!1),c=Z(e,{margin:"-100px"}),l=u=>{u.preventDefault(),Fe.sendForm("service_94y20xo","template_v10u2oh",t.current,"pX_2hasGmGcuvjXIW").then(f=>{o(!0)},f=>{n(!0)})};return s.jsxs(a.div,{ref:e,className:"contact",variants:j,initial:"initial",whileInView:"animate",children:[s.jsxs(a.div,{className:"textContainer",variants:j,children:[s.jsxs(a.h1,{variants:j,children:["Let’s ",s.jsx(a.b,{whileHover:{color:"orange"},children:"fly"})," together"]}),s.jsx(a.div,{className:"item",variants:j,children:s.jsx("h2",{children:"Please feel free to duck in for any information or corrections."})}),s.jsxs(a.div,{className:"item",variants:j,children:[s.jsx("h2",{children:"Mail"}),s.jsx("span",{children:"vitruastudio@gmail.com"})]}),s.jsxs(a.div,{className:"item",variants:j,children:[s.jsx("h2",{children:"Our experts currently available for you to hire:"}),s.jsxs("div",{children:[s.jsx("img",{src:"/favicon.ico",alt:"",style:{width:"16px",height:"16px",marginRight:"8px"}}),s.jsx("span",{children:"Business Analyst"})]}),s.jsxs("div",{children:[s.jsx("img",{src:"/favicon.ico",alt:"",style:{width:"16px",height:"16px",marginRight:"8px"}}),s.jsx("span",{children:"DevOps Engineer"})]})]})]}),s.jsxs("div",{className:"formContainer",children:[s.jsx(a.div,{className:"phoneSvg",initial:{opacity:1},whileInView:{opacity:0},transition:{delay:3,duration:1},children:s.jsx("svg",{width:"450px",height:"450px",viewBox:"0 0 32.666 32.666",children:s.jsx(a.path,{strokeWidth:.2,fill:"none",initial:{pathLength:0},animate:c&&{pathLength:1},transition:{duration:3},d:`M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z`})})}),s.jsxs(a.form,{ref:t,onSubmit:l,initial:{opacity:0},whileInView:{opacity:1},transition:{delay:4,duration:1},children:[s.jsx("input",{type:"text",required:!0,placeholder:"Name",name:"name"}),s.jsx("input",{type:"email",required:!0,placeholder:"Email",name:"email"}),s.jsx("textarea",{rows:8,placeholder:"Message",name:"message"}),s.jsx("button",{children:"Submit"}),r&&"Error",i&&"Success"]})]})]})};const Xe=()=>{const[e,t]=d.useState({x:0,y:0});return d.useEffect(()=>{const r=n=>{t({x:n.clientX,y:n.clientY})};return window.addEventListener("mousemove",r),()=>{window.removeEventListener("mousemove",r)}},[]),s.jsx(a.div,{className:"cursor",animate:{x:e.x+10,y:e.y+10}})};const v={initial:{x:-500,opacity:0},animate:{x:0,opacity:1,transition:{duration:1,staggerChildren:.1}},scrollButton:{opacity:0,y:10,transition:{duration:2,repeat:1/0}}},Ue={initial:{x:0},animate:{x:"-220%",transition:{repeat:1/0,repeatType:"mirror",duration:20}}},Ke=()=>s.jsxs("div",{className:"hero",children:[s.jsx("div",{className:"wrapper",children:s.jsxs(a.div,{className:"textContainer",variants:v,initial:"initial",animate:"animate",style:{position:"relative",zIndex:1},children:[s.jsx(a.h2,{variants:v,children:"NEST OF GUIDES AND TOOLS"}),s.jsx(a.h1,{variants:v,children:"VitRua"}),s.jsxs(a.div,{variants:v,className:"buttons",children:[s.jsx("a",{href:"#Guides",children:s.jsx(a.button,{variants:v,children:"Jump to Guides"})}),s.jsx("a",{href:"#Contact",children:s.jsx(a.button,{variants:v,children:"Let's connect"})})]}),s.jsx(a.img,{variants:v,animate:"scrollButton",src:"/scroll.png",alt:""})]})}),s.jsx(a.div,{className:"slidingTextContainer",variants:Ue,initial:"initial",animate:"animate",children:"DevOps Software Marketing Ducks Turtles"}),s.jsx("div",{className:"imageContainer",children:s.jsx("img",{src:"/hero.png",alt:""})})]}),$e={open:{transition:{staggerChildren:.1}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},Je={open:{y:0,opacity:1},closed:{y:50,opacity:0}},Qe=()=>{const e=["Home","Tools","Guides","Contact","About Us"];return s.jsx(a.div,{className:"links",variants:$e,children:e.map(t=>s.jsx(a.a,{href:`#${t}`,variants:Je,whileHover:{scale:1.1},whileTap:{scale:.95},children:t},t))})};const Ze=({setOpen:e})=>s.jsx("button",{onClick:()=>e(t=>!t),children:s.jsxs("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[s.jsx(a.path,{strokeWidth:"3",stroke:"black",strokeLinecap:"round",variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),s.jsx(a.path,{strokeWidth:"3",stroke:"black",strokeLinecap:"round",d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}}}),s.jsx(a.path,{strokeWidth:"3",stroke:"black",strokeLinecap:"round",variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})}),et={open:{clipPath:"circle(1200px at 50px 50px)",transition:{type:"spring",stiffness:20}},closed:{clipPath:"circle(30px at 50px 50px)",transition:{delay:.5,type:"spring",stiffness:400,damping:40}}},tt=()=>{const[e,t]=d.useState(!1),r=d.useRef(null);return d.useEffect(()=>{const n=i=>{r.current&&!r.current.contains(i.target)&&t(!1)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[]),s.jsxs(a.div,{className:"sidebar",ref:r,animate:e?"open":"closed",children:[s.jsx(a.div,{className:"bg",variants:et,children:s.jsx(Qe,{})}),s.jsx(Ze,{setOpen:t})]})};const st=()=>s.jsxs("div",{className:"navbar",children:[s.jsx(tt,{}),s.jsxs("div",{className:"wrapper",children:[s.jsx(a.span,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5},children:"Welcome to vitrua.top only official website"}),s.jsxs("div",{className:"social",children:[s.jsx("a",{href:"https://patreon.com/Vitrua",children:s.jsx("img",{src:"/patreon.png",alt:""})}),s.jsx("a",{href:"https://instagram.com/vitruastudio",children:s.jsx("img",{src:"/instagram.png",alt:""})})]})]})]});const Y=({type:e})=>{const t=d.useRef(),{scrollYProgress:r}=M({target:t,offset:["start start","end start"]}),n=I(r,[0,1],["0%","500%"]),i=I(r,[0,1],["0%","100%"]);return s.jsxs("div",{className:"parallax",ref:t,style:{background:e==="services"?"linear-gradient(180deg, #111132, #0c0c1d)":"linear-gradient(180deg, #111132, #505064)"},children:[s.jsx(a.h1,{style:{y:n},children:e==="services"?"Tools":"Guides"}),s.jsx(a.div,{className:"field"}),s.jsx(a.div,{className:"planets",style:{y:i,backgroundImage:`url(${e==="services"?"/planets.png":"/sun.png"})`}}),s.jsx(a.div,{style:{x:i},className:"stars"})]})};const nt=[{id:1,title:"Git Magic",img:"https://i.imgur.com/PV4MYNn.jpg",desc:"Embark on a magical journey into the realm of version control with our introductory Git lesson, where wizards and apprentices alike will unravel the secrets of collaborative coding."},{id:2,title:"Kubernetes services",img:"https://i.imgur.com/7dfLRHR.jpg",desc:"Embark on a heroic quest into the Kubernetes Dungeon of Services! Conquer beginner challenges with basic commands, mastering the art of deploying, scaling, and discovering enchanting services."}],it=({item:e})=>{const t=d.useRef(),{scrollYProgress:r}=M({target:t}),n=I(r,[0,1],[-300,300]);return s.jsx("section",{children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"wrapper",children:[s.jsx("div",{className:"imageContainer",ref:t,children:s.jsx("img",{src:e.img,alt:""})}),s.jsxs(a.div,{className:"textContainer",style:{y:n},children:[s.jsx("h2",{children:e.title}),s.jsx("p",{children:e.desc}),s.jsx("button",{children:"Let's go"})]})]})})})},rt=()=>{const e=d.useRef(),{scrollYProgress:t}=M({target:e,offset:["end end","start start"]}),r=me(t,{stiffness:100,damping:30});return s.jsxs("div",{className:"portfolio",ref:e,children:[s.jsxs("div",{className:"progress",children:[s.jsx("h1",{children:"Available Guides"}),s.jsx(a.div,{style:{scaleX:r},className:"progressBar"})]}),nt.map(n=>s.jsx(it,{item:n},n.id))]})};const S={initial:{x:-500,y:100,opacity:0},animate:{x:0,opacity:1,y:0,transition:{duration:1,staggerChildren:.1}}},ot=()=>{const e=d.useRef();return Z(e,{margin:"-100px"}),s.jsxs(a.div,{className:"services",variants:S,initial:"initial",ref:e,animate:"animate",children:[s.jsxs(a.div,{className:"textContainer",variants:S,children:[s.jsxs("p",{children:["Our tools: easy to initialize",s.jsx("br",{})," and free to use"]}),s.jsx("hr",{})]}),s.jsxs(a.div,{className:"titleContainer",variants:S,children:[s.jsxs("div",{className:"title",children:[s.jsx("img",{src:"/people.webp",alt:""}),s.jsxs("h1",{children:[s.jsx(a.b,{whileHover:{color:"orange"},children:"Enjoy"})," and have"]})]}),s.jsxs("div",{className:"title",children:[s.jsxs("h1",{children:[s.jsx(a.b,{whileHover:{color:"orange"},children:"fun"})," with these"]}),s.jsx("button",{onClick:()=>window.location.href="https://patreon.com/Vitrua",children:"SUPPORT THE DEVELOPING"})]})]}),s.jsxs(a.div,{className:"listContainer",variants:S,children:[s.jsxs(a.div,{className:"box",whileHover:{background:"lightgray",color:"black"},children:[s.jsx("h2",{children:"Chobe - Italian Media Experience for Kodi"}),s.jsx("p",{children:"Chobe is a Kodi addon designed to enhance the Italian media consumption experience for learners and enthusiasts. Whether you're interested in dubbed or original Italian content, or you're a fan of Italian-subtitled anime, Chobe brings an authentic touch to your media library."}),s.jsx("button",{onClick:()=>window.location.href="https://vitrua.top/chobe/",children:"Go"})]}),s.jsxs(a.div,{className:"box",whileHover:{background:"lightgray",color:"black"},children:[s.jsx("h2",{children:"AutoVersion snippet - for self versioning Github projects"}),s.jsx("p",{children:"A GitHub action snippet designed to streamline the process of versioning and release management for software projects following the conventional commits specification outlined at www.conventionalcommits.org. By utilizing this snippet, developers can easily initiate a project that automatically updates its version based on the semantic versioning (SemVer) rules."}),s.jsx("button",{onClick:()=>window.location.href="https://vitrua.top/autoversion/",children:"Go"})]}),s.jsxs(a.div,{className:"box",whileHover:{background:"lightgray",color:"black"},children:[s.jsx("h2",{children:"Helm Chart Unused Values Finder - clean your Kubernetes configs"}),s.jsx("p",{children:"A utility tool designed to assist in the management and optimization of Kubernetes configurations. By identifying values within Helm charts that are defined but not utilized in templates, this python script helps ensuring efficiency and cleanliness in your deployments."}),s.jsx("button",{onClick:()=>window.location.href="https://vitrua.top/helmunused/",children:"Go"})]})]})]})};const m={initial:{y:500,opacity:0},animate:{y:0,opacity:1,transition:{duration:.5,staggerChildren:.1}}},at=()=>{const e=d.useRef();return s.jsx(a.div,{ref:e,className:"about",variants:m,initial:"initial",whileInView:"animate",children:s.jsxs(a.div,{className:"textContainer",variants:m,children:[s.jsx(a.h1,{variants:m,children:s.jsx(a.b,{whileHover:{color:"orange"},children:"VịtRùa"})}),s.jsx(a.div,{className:"item",variants:m,children:s.jsx("h4",{children:"VịtRùa is a collaborative initiative driven by the passion of a diverse, international team of tech enthusiasts, including students and professionals with varied specializations. Unified by a shared objective, our team aims to create an inclusive platform that demystifies technology, offering comprehensive guides accessible to everyone. The project embodies versatility, adaptability, and a steadfast commitment to promoting accessible knowledge and practical tools for diverse tasks and needs, ultimately striving to break down barriers and make the vast realm of technology accessible to individuals from all walks of life."})}),s.jsx(a.div,{className:"item",variants:m,children:s.jsx("h4",{children:"This initiative, fueled entirely by our team's dedication during our free time, exemplifies the spirit of collaboration and community-driven learning. We believe in the power of freely sharing tools and guides to empower individuals globally, fostering a culture of continuous learning and innovation."})}),s.jsx(a.div,{className:"item",variants:m,children:s.jsx("h4",{children:"All our resources and instruments are generously provided without charge, reinforcing our commitment to breaking down financial barriers to knowledge. However, if you find our tools useful, we warmly welcome donations that will enable us to enhance and expedite our mission. Your contributions will not only support the continuation of these initiatives but also enable us to expand our reach, spreading knowledge even further."})}),s.jsxs(a.div,{className:"item",variants:m,children:[s.jsx("h2",{children:"Our precious sponsors:"}),s.jsxs("h5",{children:[s.jsx("img",{src:"/favicon.ico",alt:"",style:{width:"16px",height:"16px",marginRight:"1px"}}),"Albon, ",s.jsx("img",{src:"/favicon.ico",alt:"",style:{width:"16px",height:"16px",marginRight:"1px"}}),"JackArgetlam, ",s.jsx("img",{src:"/favicon.ico",alt:"",style:{width:"16px",height:"16px",marginRight:"1px"}}),"Heobe"]})]}),s.jsx(a.div,{className:"item",variants:m,children:s.jsx("a",{href:"https://patreon.com/Vitrua",children:s.jsx("div",{className:"imageContainer",children:s.jsx("img",{src:"/supportmon.png",alt:"",style:{width:"300px",height:"300px",marginRight:"1px"}})})})})]})})},ct=()=>s.jsxs("div",{children:[s.jsx(Xe,{}),s.jsxs("section",{id:"Home",children:[s.jsx(st,{}),s.jsx(Ke,{})]}),s.jsx("section",{id:"Tools",children:s.jsx(Y,{type:"services"})}),s.jsx("section",{children:s.jsx(ot,{})}),s.jsx("section",{id:"Guides",children:s.jsx(Y,{type:"portfolio"})}),s.jsx(rt,{}),s.jsx("section",{id:"Contact",children:s.jsx(Ye,{})}),s.jsx("section",{id:"About Us",children:s.jsx(at,{})})]});le.createRoot(document.getElementById("root")).render(s.jsx(de.StrictMode,{children:s.jsx(ct,{})}));