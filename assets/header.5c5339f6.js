import{k as M,c as w,h as _,l as ue,u as vt,m as ht,r as k,n as se,p as Ve,q as mt,g as B,t as Ce,v as O,x as Te,w as z,o as V,y as Q,z as gt,A as K,B as pt,C as le,a as Ke,D as bt,E as yt,G as wt,H as xt,I as _t,J as qt,K as kt,L as Pe,M as pe,N as Et,O as St,P as Ct,i as Tt,Q as he,R as Ne,S as je,U as Pt,V as Ie,W as Ue,X as Y,Y as Lt,Z as $t,_ as Ht,d as zt,$ as Bt,a0 as I,a1 as U,a2 as S,a3 as H,f as q,a4 as Le,a5 as A,a6 as J,a7 as Z}from"./index.36f67063.js";import{u as be,a as ye,c as Mt,b as Wt}from"./use-timeout.fd6c6280.js";var ee=M({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const n=w(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>_("div",{class:n.value},ue(o.default))}}),te=M({name:"QItem",props:{...be,...vt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:n}){const{proxy:{$q:t}}=B(),l=ye(e,t),{hasLink:u,linkAttrs:i,linkClass:d,linkTag:s,navigateOnClick:r}=ht(),c=k(null),p=k(null),y=w(()=>e.clickable===!0||u.value===!0||e.tag==="label"),a=w(()=>e.disable!==!0&&y.value===!0),h=w(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(u.value===!0&&e.active===null?d.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),L=w(()=>{if(e.insetLevel===void 0)return null;const f=t.lang.rtl===!0?"Right":"Left";return{["padding"+f]:16+e.insetLevel*56+"px"}});function T(f){a.value===!0&&(p.value!==null&&(f.qKeyEvent!==!0&&document.activeElement===c.value?p.value.focus():document.activeElement===p.value&&c.value.focus()),r(f))}function P(f){if(a.value===!0&&se(f,[13,32])===!0){Ve(f),f.qKeyEvent=!0;const v=new MouseEvent("click",f);v.qKeyEvent=!0,c.value.dispatchEvent(v)}n("keyup",f)}function m(){const f=mt(o.default,[]);return a.value===!0&&f.unshift(_("div",{class:"q-focus-helper",tabindex:-1,ref:p})),f}return()=>{const f={ref:c,class:h.value,style:L.value,role:"listitem",onClick:T,onKeyup:P};return a.value===!0?(f.tabindex=e.tabindex||"0",Object.assign(f,i.value)):y.value===!0&&(f["aria-disabled"]="true"),_(s.value,f,m())}}}),Rt=M({name:"QList",props:{...be,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:o}){const n=B(),t=ye(e,n.proxy.$q),l=w(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(t.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>_(e.tag,{class:l.value},ue(o.default))}});const Ft={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},Qt={...Ft,contextMenu:Boolean};function At({showing:e,avoidEmit:o,configureAnchorEl:n}){const{props:t,proxy:l,emit:u}=B(),i=k(null);let d=null;function s(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const r={};n===void 0&&(Object.assign(r,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){se(a,13)===!0&&r.toggle(a)},contextClick(a){l.hide(a),Ce(a),O(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:Ce,mobileTouch(a){if(r.mobileCleanup(a),s(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const h=a.target;Te(r,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),d=setTimeout(()=>{d=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),d!==null&&(clearTimeout(d),d=null),e.value===!0&&a!==void 0&&Mt()}}),n=function(a=t.contextMenu){if(t.noParentEvent===!0||i.value===null)return;let h;a===!0?l.$q.platform.is.mobile===!0?h=[[i.value,"touchstart","mobileTouch","passive"]]:h=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:h=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],Te(r,"anchor",h)});function c(){gt(r,"anchor")}function p(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;n()}function y(){if(t.target===!1||t.target===""||l.$el.parentNode===null)i.value=null;else if(t.target===!0)p(l.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,n()):(i.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return z(()=>t.contextMenu,a=>{i.value!==null&&(c(),n(a))}),z(()=>t.target,()=>{i.value!==null&&c(),y()}),z(()=>t.noParentEvent,a=>{i.value!==null&&(a===!0?c():n())}),V(()=>{y(),o!==!0&&t.modelValue===!0&&i.value===null&&u("update:modelValue",!1)}),Q(()=>{d!==null&&clearTimeout(d),c()}),{anchorEl:i,canShow:s,anchorEvents:r}}function Dt(e,o){const n=k(null);let t;function l(d,s){const r=`${s!==void 0?"add":"remove"}EventListener`,c=s!==void 0?s:t;d!==window&&d[r]("scroll",c,K.passive),window[r]("scroll",c,K.passive),t=s}function u(){n.value!==null&&(l(n.value),n.value=null)}const i=z(()=>e.noParentEvent,()=>{n.value!==null&&(u(),o())});return Q(i),{localScrollTarget:n,unconfigureScrollTarget:u,changeScrollEvent:l}}const Ot={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Vt=["beforeShow","show","beforeHide","hide"];function Kt({showing:e,canShow:o,hideOnRouteChange:n,handleShow:t,handleHide:l,processOnMount:u}){const i=B(),{props:d,emit:s,proxy:r}=i;let c;function p(m){e.value===!0?h(m):y(m)}function y(m){if(d.disable===!0||m!==void 0&&m.qAnchorHandled===!0||o!==void 0&&o(m)!==!0)return;const f=d["onUpdate:modelValue"]!==void 0;f===!0&&(s("update:modelValue",!0),c=m,O(()=>{c===m&&(c=void 0)})),(d.modelValue===null||f===!1)&&a(m)}function a(m){e.value!==!0&&(e.value=!0,s("beforeShow",m),t!==void 0?t(m):s("show",m))}function h(m){if(d.disable===!0)return;const f=d["onUpdate:modelValue"]!==void 0;f===!0&&(s("update:modelValue",!1),c=m,O(()=>{c===m&&(c=void 0)})),(d.modelValue===null||f===!1)&&L(m)}function L(m){e.value!==!1&&(e.value=!1,s("beforeHide",m),l!==void 0?l(m):s("hide",m))}function T(m){d.disable===!0&&m===!0?d["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!1):m===!0!==e.value&&(m===!0?a:L)(c)}z(()=>d.modelValue,T),n!==void 0&&pt(i)===!0&&z(()=>r.$route.fullPath,()=>{n.value===!0&&e.value===!0&&h()}),u===!0&&V(()=>{T(d.modelValue)});const P={show:y,hide:h,toggle:p};return Object.assign(r,P),P}let G=[],X=[];function Ge(e){X=X.filter(o=>o!==e)}function Nt(e){Ge(e),X.push(e)}function $e(e){Ge(e),X.length===0&&G.length!==0&&(G[G.length-1](),G=[])}function jt(e){X.length===0?e():G.push(e)}const D=[];function It(e){return D.find(o=>o.contentEl!==null&&o.contentEl.contains(e))}function Xe(e,o){do{if(e.$options.name==="QMenu"){if(e.hide(o),e.$props.separateClosePopup===!0)return le(e)}else if(e.__qPortal===!0){const n=le(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(o),n):e}e=le(e)}while(e!=null)}function Ut(e,o,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=Xe(e,o);continue}e.hide(o)}e=le(e)}}const Gt=M({name:"QPortal",setup(e,{slots:o}){return()=>o.default()}});function Xt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Yt(e,o,n,t){const l=k(!1),u=k(!1);let i=null;const d={},s=t==="dialog"&&Xt(e);function r(p){if(p===!0){$e(d),u.value=!0;return}u.value=!1,l.value===!1&&(s===!1&&i===null&&(i=wt(!1,t)),l.value=!0,D.push(e.proxy),Nt(d))}function c(p){if(u.value=!1,p!==!0)return;$e(d),l.value=!1;const y=D.indexOf(e.proxy);y!==-1&&D.splice(y,1),i!==null&&(xt(i),i=null)}return Ke(()=>{c(!0)}),e.proxy.__qPortal=!0,bt(e.proxy,"contentEl",()=>o.value),{showPortal:r,hidePortal:c,portalIsActive:l,portalIsAccessible:u,renderPortal:()=>s===!0?n():l.value===!0?[_(yt,{to:i},_(Gt,n))]:void 0}}const Jt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Zt(e,o=()=>{},n=()=>{}){return{transitionProps:w(()=>{const t=`q-transition--${e.transitionShow||o()}`,l=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${t}-enter-from`,enterActiveClass:`${t}-enter-active`,enterToClass:`${t}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:w(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function en(){let e;const o=B();function n(){e=void 0}return _t(n),Q(n),{removeTick:n,registerTick(t){e=t,O(()=>{e===t&&(qt(o)===!1&&e(),e=void 0)})}}}const Ye=[Element,String],tn=[null,document,document.body,document.scrollingElement,document.documentElement];function Je(e,o){let n=kt(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return tn.includes(n)?window:n}function nn(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function on(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ne;function ie(){if(ne!==void 0)return ne;const e=document.createElement("p"),o=document.createElement("div");Pe(e,{width:"100%",height:"200px"}),Pe(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let t=e.offsetWidth;return n===t&&(t=o.clientWidth),o.remove(),ne=n-t,ne}const W=[];let N;function ln(e){N=e.keyCode===27}function an(){N===!0&&(N=!1)}function rn(e){N===!0&&(N=!1,se(e,27)===!0&&W[W.length-1](e))}function Ze(e){window[e]("keydown",ln),window[e]("blur",an),window[e]("keyup",rn),N=!1}function un(e){pe.is.desktop===!0&&(W.push(e),W.length===1&&Ze("addEventListener"))}function He(e){const o=W.indexOf(e);o!==-1&&(W.splice(o,1),W.length===0&&Ze("removeEventListener"))}const R=[];function et(e){R[R.length-1](e)}function sn(e){pe.is.desktop===!0&&(R.push(e),R.length===1&&document.body.addEventListener("focusin",et))}function cn(e){const o=R.indexOf(e);o!==-1&&(R.splice(o,1),R.length===0&&document.body.removeEventListener("focusin",et))}const{notPassiveCapture:ae}=K,F=[];function re(e){const o=e.target;if(o===void 0||o.nodeType===8||o.classList.contains("no-pointer-events")===!0)return;let n=D.length-1;for(;n>=0;){const t=D[n].$;if(t.type.name==="QTooltip"){n--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;n--}for(let t=F.length-1;t>=0;t--){const l=F[t];if((l.anchorEl.value===null||l.anchorEl.value.contains(o)===!1)&&(o===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(o)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function dn(e){F.push(e),F.length===1&&(document.addEventListener("mousedown",re,ae),document.addEventListener("touchstart",re,ae))}function ze(e){const o=F.findIndex(n=>n===e);o!==-1&&(F.splice(o,1),F.length===0&&(document.removeEventListener("mousedown",re,ae),document.removeEventListener("touchstart",re,ae)))}let Be,Me;function We(e){const o=e.split(" ");return o.length!==2?!1:["top","center","bottom"].includes(o[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(o[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function fn(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const ge={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{ge[`${e}#ltr`]=e,ge[`${e}#rtl`]=e});function Re(e,o){const n=e.split(" ");return{vertical:n[0],horizontal:ge[`${n[1]}#${o===!0?"rtl":"ltr"}`]}}function vn(e,o){let{top:n,left:t,right:l,bottom:u,width:i,height:d}=e.getBoundingClientRect();return o!==void 0&&(n-=o[1],t-=o[0],u+=o[1],l+=o[0],i+=o[0],d+=o[1]),{top:n,bottom:u,height:d,left:t,right:l,width:i,middle:t+(l-t)/2,center:n+(u-n)/2}}function hn(e,o,n){let{top:t,left:l}=e.getBoundingClientRect();return t+=o.top,l+=o.left,n!==void 0&&(t+=n[1],l+=n[0]),{top:t,bottom:t+1,height:1,left:l,right:l+1,width:1,middle:l,center:t}}function mn(e,o){return{top:0,center:o/2,bottom:o,left:0,middle:e/2,right:e}}function Fe(e,o,n,t){return{top:e[n.vertical]-o[t.vertical],left:e[n.horizontal]-o[t.horizontal]}}function tt(e,o=0){if(e.targetEl===null||e.anchorEl===null||o>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{tt(e,o+1)},10);return}const{targetEl:n,offset:t,anchorEl:l,anchorOrigin:u,selfOrigin:i,absoluteOffset:d,fit:s,cover:r,maxHeight:c,maxWidth:p}=e;if(pe.is.ios===!0&&window.visualViewport!==void 0){const E=document.body.style,{offsetLeft:x,offsetTop:C}=window.visualViewport;x!==Be&&(E.setProperty("--q-pe-left",x+"px"),Be=x),C!==Me&&(E.setProperty("--q-pe-top",C+"px"),Me=C)}const{scrollLeft:y,scrollTop:a}=n,h=d===void 0?vn(l,r===!0?[0,0]:t):hn(l,d,t);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:p||"100vw",maxHeight:c||"100vh",visibility:"visible"});const{offsetWidth:L,offsetHeight:T}=n,{elWidth:P,elHeight:m}=s===!0||r===!0?{elWidth:Math.max(h.width,L),elHeight:r===!0?Math.max(h.height,T):T}:{elWidth:L,elHeight:T};let f={maxWidth:p,maxHeight:c};(s===!0||r===!0)&&(f.minWidth=h.width+"px",r===!0&&(f.minHeight=h.height+"px")),Object.assign(n.style,f);const v=mn(P,m);let b=Fe(h,v,u,i);if(d===void 0||t===void 0)me(b,h,v,u,i);else{const{top:E,left:x}=b;me(b,h,v,u,i);let C=!1;if(b.top!==E){C=!0;const $=2*t[1];h.center=h.top-=$,h.bottom-=$+2}if(b.left!==x){C=!0;const $=2*t[0];h.middle=h.left-=$,h.right-=$+2}C===!0&&(b=Fe(h,v,u,i),me(b,h,v,u,i))}f={top:b.top+"px",left:b.left+"px"},b.maxHeight!==void 0&&(f.maxHeight=b.maxHeight+"px",h.height>b.maxHeight&&(f.minHeight=f.maxHeight)),b.maxWidth!==void 0&&(f.maxWidth=b.maxWidth+"px",h.width>b.maxWidth&&(f.minWidth=f.maxWidth)),Object.assign(n.style,f),n.scrollTop!==a&&(n.scrollTop=a),n.scrollLeft!==y&&(n.scrollLeft=y)}function me(e,o,n,t,l){const u=n.bottom,i=n.right,d=ie(),s=window.innerHeight-d,r=document.body.clientWidth;if(e.top<0||e.top+u>s)if(l.vertical==="center")e.top=o[t.vertical]>s/2?Math.max(0,s-u):0,e.maxHeight=Math.min(u,s);else if(o[t.vertical]>s/2){const c=Math.min(s,t.vertical==="center"?o.center:t.vertical===l.vertical?o.bottom:o.top);e.maxHeight=Math.min(u,c),e.top=Math.max(0,c-u)}else e.top=Math.max(0,t.vertical==="center"?o.center:t.vertical===l.vertical?o.top:o.bottom),e.maxHeight=Math.min(u,s-e.top);if(e.left<0||e.left+i>r)if(e.maxWidth=Math.min(i,r),l.horizontal==="middle")e.left=o[t.horizontal]>r/2?Math.max(0,r-i):0;else if(o[t.horizontal]>r/2){const c=Math.min(r,t.horizontal==="middle"?o.middle:t.horizontal===l.horizontal?o.right:o.left);e.maxWidth=Math.min(i,c),e.left=Math.max(0,c-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?o.middle:t.horizontal===l.horizontal?o.left:o.right),e.maxWidth=Math.min(i,r-e.left)}var gn=M({name:"QMenu",inheritAttrs:!1,props:{...Qt,...Ot,...be,...Jt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:We},self:{type:String,validator:We},offset:{type:Array,validator:fn},scrollTarget:Ye,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Vt,"click","escapeKey"],setup(e,{slots:o,emit:n,attrs:t}){let l=null,u,i,d;const s=B(),{proxy:r}=s,{$q:c}=r,p=k(null),y=k(!1),a=w(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),h=ye(e,c),{registerTick:L,removeTick:T}=en(),{registerTimeout:P}=Wt(),{transitionProps:m,transitionStyle:f}=Zt(e),{localScrollTarget:v,changeScrollEvent:b,unconfigureScrollTarget:E}=Dt(e,Ee),{anchorEl:x,canShow:C}=At({showing:y}),{hide:$}=Kt({showing:y,canShow:C,handleShow:rt,handleHide:ut,hideOnRouteChange:a,processOnMount:!0}),{showPortal:we,hidePortal:xe,renderPortal:ot}=Yt(s,p,ct,"menu"),ce={anchorEl:x,innerRef:p,onClickOutside(g){if(e.persistent!==!0&&y.value===!0)return $(g),(g.type==="touchstart"||g.target.classList.contains("q-dialog__backdrop"))&&Ve(g),!0}},_e=w(()=>Re(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),lt=w(()=>e.cover===!0?_e.value:Re(e.self||"top start",c.lang.rtl)),it=w(()=>(e.square===!0?" q-menu--square":"")+(h.value===!0?" q-menu--dark q-dark":"")),at=w(()=>e.autoClose===!0?{onClick:st}:{}),qe=w(()=>y.value===!0&&e.persistent!==!0);z(qe,g=>{g===!0?(un(fe),dn(ce)):(He(fe),ze(ce))});function de(){jt(()=>{let g=p.value;g&&g.contains(document.activeElement)!==!0&&(g=g.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||g.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||g.querySelector("[autofocus], [data-autofocus]")||g,g.focus({preventScroll:!0}))})}function rt(g){if(l=e.noRefocus===!1?document.activeElement:null,sn(Se),we(),Ee(),u=void 0,g!==void 0&&(e.touchPosition||e.contextMenu)){const ve=Et(g);if(ve.left!==void 0){const{top:dt,left:ft}=x.value.getBoundingClientRect();u={left:ve.left-ft,top:ve.top-dt}}}i===void 0&&(i=z(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,j)),e.noFocus!==!0&&document.activeElement.blur(),L(()=>{j(),e.noFocus!==!0&&de()}),P(()=>{c.platform.is.ios===!0&&(d=e.autoClose,p.value.click()),j(),we(!0),n("show",g)},e.transitionDuration)}function ut(g){T(),xe(),ke(!0),l!==null&&(g===void 0||g.qClickOutside!==!0)&&(((g&&g.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),P(()=>{xe(!0),n("hide",g)},e.transitionDuration)}function ke(g){u=void 0,i!==void 0&&(i(),i=void 0),(g===!0||y.value===!0)&&(cn(Se),E(),ze(ce),He(fe)),g!==!0&&(l=null)}function Ee(){(x.value!==null||e.scrollTarget!==void 0)&&(v.value=Je(x.value,e.scrollTarget),b(v.value,j))}function st(g){d!==!0?(Xe(r,g),n("click",g)):d=!1}function Se(g){qe.value===!0&&e.noFocus!==!0&&Ct(p.value,g.target)!==!0&&de()}function fe(g){n("escapeKey"),$(g)}function j(){tt({targetEl:p.value,offset:e.offset,anchorEl:x.value,anchorOrigin:_e.value,selfOrigin:lt.value,absoluteOffset:u,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ct(){return _(St,m.value,()=>y.value===!0?_("div",{role:"menu",...t,ref:p,tabindex:-1,class:["q-menu q-position-engine scroll"+it.value,t.class],style:[t.style,f.value],...at.value},ue(o.default)):null)}return Q(ke),Object.assign(r,{focus:de,updatePosition:j}),ot}}),pn=M({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=B(),t=Tt(je,he);if(t===he)return console.error("QPageContainer needs to be child of QLayout"),he;Ne(Pt,!0);const l=w(()=>{const u={};return t.header.space===!0&&(u.paddingTop=`${t.header.size}px`),t.right.space===!0&&(u[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(u.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(u[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),u});return()=>_("div",{class:"q-page-container",style:l.value},ue(o.default))}});const{passive:Qe}=K,bn=["both","horizontal","vertical"];var yn=M({name:"QScrollObserver",props:{axis:{type:String,validator:e=>bn.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Ye},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,l,u;z(()=>e.scrollTarget,()=>{s(),d()});function i(){t!==null&&t();const p=Math.max(0,nn(l)),y=on(l),a={top:p-n.position.top,left:y-n.position.left};if(e.axis==="vertical"&&a.top===0||e.axis==="horizontal"&&a.left===0)return;const h=Math.abs(a.top)>=Math.abs(a.left)?a.top<0?"up":"down":a.left<0?"left":"right";n.position={top:p,left:y},n.directionChanged=n.direction!==h,n.delta=a,n.directionChanged===!0&&(n.direction=h,n.inflectionPoint=n.position),o("scroll",{...n})}function d(){l=Je(u,e.scrollTarget),l.addEventListener("scroll",r,Qe),r(!0)}function s(){l!==void 0&&(l.removeEventListener("scroll",r,Qe),l=void 0)}function r(p){if(p===!0||e.debounce===0||e.debounce==="0")i();else if(t===null){const[y,a]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];t=()=>{a(y),t=null}}}const{proxy:c}=B();return z(()=>c.$q.lang.rtl,i),V(()=>{u=c.$el.parentNode,d()}),Q(()=>{t!==null&&t(),s()}),Object.assign(c,{trigger:r,getPosition:()=>n}),Ie}});function wn(){const e=k(!Ue.value);return e.value===!1&&V(()=>{e.value=!0}),{isHydrated:e}}const nt=typeof ResizeObserver!="undefined",Ae=nt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var De=M({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,t,l={width:-1,height:-1};function u(s){s===!0||e.debounce===0||e.debounce==="0"?i():n===null&&(n=setTimeout(i,e.debounce))}function i(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:s,offsetHeight:r}=t;(s!==l.width||r!==l.height)&&(l={width:s,height:r},o("resize",l))}}const{proxy:d}=B();if(d.trigger=u,nt===!0){let s;const r=c=>{t=d.$el.parentNode,t?(s=new ResizeObserver(u),s.observe(t),i()):c!==!0&&O(()=>{r(!0)})};return V(()=>{r()}),Q(()=>{n!==null&&clearTimeout(n),s!==void 0&&(s.disconnect!==void 0?s.disconnect():t&&s.unobserve(t))}),Ie}else{let c=function(){n!==null&&(clearTimeout(n),n=null),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",u,K.passive),r=void 0)},p=function(){c(),t&&t.contentDocument&&(r=t.contentDocument.defaultView,r.addEventListener("resize",u,K.passive),i())};const{isHydrated:s}=wn();let r;return V(()=>{O(()=>{t=d.$el,t&&p()})}),Q(c),()=>{if(s.value===!0)return _("object",{class:"q--avoid-card-border",style:Ae.style,tabindex:-1,type:"text/html",data:Ae.url,"aria-hidden":"true",onLoad:p})}}}}),xn=M({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:t}}=B(),l=k(null),u=k(t.screen.height),i=k(e.container===!0?0:t.screen.width),d=k({position:0,direction:"down",inflectionPoint:0}),s=k(0),r=k(Ue.value===!0?0:ie()),c=w(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=w(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),y=w(()=>r.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),a=w(()=>r.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function h(v){if(e.container===!0||document.qScrollPrevented!==!0){const b={position:v.position.top,direction:v.direction,directionChanged:v.directionChanged,inflectionPoint:v.inflectionPoint.top,delta:v.delta.top};d.value=b,e.onScroll!==void 0&&n("scroll",b)}}function L(v){const{height:b,width:E}=v;let x=!1;u.value!==b&&(x=!0,u.value=b,e.onScrollHeight!==void 0&&n("scrollHeight",b),P()),i.value!==E&&(x=!0,i.value=E),x===!0&&e.onResize!==void 0&&n("resize",v)}function T({height:v}){s.value!==v&&(s.value=v,P())}function P(){if(e.container===!0){const v=u.value>s.value?ie():0;r.value!==v&&(r.value=v)}}let m=null;const f={instances:{},view:w(()=>e.view),isContainer:w(()=>e.container),rootRef:l,height:u,containerHeight:s,scrollbarWidth:r,totalWidth:w(()=>i.value+r.value),rows:w(()=>{const v=e.view.toLowerCase().split(" ");return{top:v[0].split(""),middle:v[1].split(""),bottom:v[2].split("")}}),header:Y({size:0,offset:0,space:!1}),right:Y({size:300,offset:0,space:!1}),footer:Y({size:0,offset:0,space:!1}),left:Y({size:300,offset:0,space:!1}),scroll:d,animate(){m!==null?clearTimeout(m):document.body.classList.add("q-body--layout-animate"),m=setTimeout(()=>{m=null,document.body.classList.remove("q-body--layout-animate")},155)},update(v,b,E){f[v][b]=E}};if(Ne(je,f),ie()>0){let E=function(){v=null,b.classList.remove("hide-scrollbar")},x=function(){if(v===null){if(b.scrollHeight>t.screen.height)return;b.classList.add("hide-scrollbar")}else clearTimeout(v);v=setTimeout(E,300)},C=function($){v!==null&&$==="remove"&&(clearTimeout(v),E()),window[`${$}EventListener`]("resize",x)},v=null;const b=document.body;z(()=>e.container!==!0?"add":"remove",C),e.container!==!0&&C("add"),Ke(()=>{C("remove")})}return()=>{const v=Lt(o.default,[_(yn,{onScroll:h}),_(De,{onResize:L})]),b=_("div",{class:c.value,style:p.value,ref:e.container===!0?void 0:l,tabindex:-1},v);return e.container===!0?_("div",{class:"q-layout-container overflow-hidden",ref:l},[_(De,{onResize:T}),_("div",{class:"absolute-full",style:y.value},[_("div",{class:"scroll",style:a.value},[b])])]):b}}});function Oe(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const o=parseInt(e,10);return isNaN(o)?0:o}var oe=$t({name:"close-popup",beforeMount(e,{value:o}){const n={depth:Oe(o),handler(t){n.depth!==0&&setTimeout(()=>{const l=It(e);l!==void 0&&Ut(l,t,n.depth)})},handlerKey(t){se(t,13)===!0&&n.handler(t)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:o,oldValue:n}){o!==n&&(e.__qclosepopup.depth=Oe(o))},beforeUnmount(e){const o=e.__qclosepopup;e.removeEventListener("click",o.handler),e.removeEventListener("keyup",o.handlerKey),delete e.__qclosepopup}}),_n="/tubular/assets/logo.ae920b24.png",qn="/tubular/assets/whatsapp.484eca65.webp";const kn=zt({name:"MainLayout",setup(){return{}}}),En={class:"fixed-header"},Sn={class:"header-contact"},Cn={target:"_blank",href:"https://wa.me/553141015898?text=Ol%C3%A1!%20Vim%20pelo%20site%20Tubular.%20"},Tn=H("span",null,"31 4101-5898",-1),Pn={target:"_blank",href:"mailto:comercial.tubular@gmail.com"},Ln=H("span",null,"comercial.tubular@gmail.com",-1),$n=H("img",{src:_n,alt:""},null,-1),Hn={id:"menu"},zn=H("a",{href:"https://wa.me/553141015898?text=Ol%C3%A1!%20Vim%20pelo%20site%20Tubular.%20",target:"_blank",class:"btn-whats"},[H("img",{src:qn,alt:""})],-1);function Bn(e,o,n,t,l,u){const i=Bt("router-view");return I(),U(xn,{view:"hHh lpR fFf"},{default:S(()=>[H("div",En,[H("div",Sn,[H("a",Cn,[q(Le,{name:"call"}),Tn]),H("a",Pn,[q(Le,{name:"email"}),Ln])]),H("header",null,[q(A,{class:"logo-header",to:"/"},{default:S(()=>[$n]),_:1}),H("nav",Hn,[q(A,{flat:"",color:"accent",label:"In\xEDcio",class:"q-mx-xs",to:"/"}),q(A,{flat:"",color:"accent",label:"Sobre",class:"q-mx-xs",to:"/sobre"}),q(A,{flat:"",color:"accent",label:"Produtos",class:"q-mx-xs",to:"/produtos"}),q(A,{color:"primary",label:"Contato",class:"q-mx-xs",to:"/contato"})]),q(A,{color:"primary",icon:"menu",id:"menu-mobile"},{default:S(()=>[q(gn,null,{default:S(()=>[q(Rt,{style:{"min-width":"100px"}},{default:S(()=>[J((I(),U(te,{clickable:"",to:"/"},{default:S(()=>[q(ee,null,{default:S(()=>[Z("In\xEDcio")]),_:1})]),_:1})),[[oe]]),J((I(),U(te,{clickable:"",to:"/sobre"},{default:S(()=>[q(ee,null,{default:S(()=>[Z("Sobre")]),_:1})]),_:1})),[[oe]]),J((I(),U(te,{clickable:"",to:"/produtos"},{default:S(()=>[q(ee,null,{default:S(()=>[Z("Produtos")]),_:1})]),_:1})),[[oe]]),J((I(),U(te,{clickable:"",to:"/contato"},{default:S(()=>[q(ee,null,{default:S(()=>[Z("Contato")]),_:1})]),_:1})),[[oe]])]),_:1})]),_:1})]),_:1})])]),q(pn,null,{default:S(()=>[q(i)]),_:1}),zn]),_:1})}var Rn=Ht(kn,[["render",Bn]]);export{Rn as default};
