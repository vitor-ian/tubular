import{Z as de,M,V as ve,a9 as me,x as Q,aa as W,N as ne,p as X,z as Y,r as x,c as g,w as z,g as G,h as f,O as ue,ab as fe,l as H,v as ge,ac as he,k as Z,B as pe,ad as _e,o as ee,y as ce,ae,af as ye,ag as be,a5 as U,Y as Se,W as Ce,ah as xe,J as K,_ as qe,d as Pe,$ as we,a0 as Te,ai as ke,a3 as o,f as _,a2 as D,a4 as O,F as Ie,aj as $e}from"./index.f72980b7.js";import{c as Be,u as Ne,a as Ae,b as oe}from"./use-timeout.a6e67daf.js";import{F as Ve}from"./Footer.2a7c223c.js";const te={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ee=Object.keys(te);te.all=!0;function ie(e){const t={};for(const s of Ee)e[s]===!0&&(t[s]=!0);return Object.keys(t).length===0?te:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const je=["INPUT","TEXTAREA"];function se(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&je.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function ze(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((s,m)=>{const r=parseFloat(s);r&&(t[m]=r)}),t}var Fe=de({name:"touch-swipe",beforeMount(e,{value:t,arg:s,modifiers:m}){if(m.mouse!==!0&&M.has.touch!==!0)return;const r=m.mouseCapture===!0?"Capture":"",n={handler:t,sensitivity:ze(s),direction:ie(m),noop:ve,mouseStart(i){se(i,n)&&me(i)&&(Q(n,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(i,!0))},touchStart(i){if(se(i,n)){const u=i.target;Q(n,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","notPassiveCapture"],[u,"touchend","end","notPassiveCapture"]]),n.start(i)}},start(i,u){M.is.firefox===!0&&W(e,!0);const S=ne(i);n.event={x:S.left,y:S.top,time:Date.now(),mouse:u===!0,dir:!1}},move(i){if(n.event===void 0)return;if(n.event.dir!==!1){X(i);return}const u=Date.now()-n.event.time;if(u===0)return;const S=ne(i),y=S.left-n.event.x,c=Math.abs(y),b=S.top-n.event.y,v=Math.abs(b);if(n.event.mouse!==!0){if(c<n.sensitivity[1]&&v<n.sensitivity[1]){n.end(i);return}}else if(window.getSelection().toString()!==""){n.end(i);return}else if(c<n.sensitivity[2]&&v<n.sensitivity[2])return;const h=c/u,C=v/u;n.direction.vertical===!0&&c<v&&c<100&&C>n.sensitivity[0]&&(n.event.dir=b<0?"up":"down"),n.direction.horizontal===!0&&c>v&&v<100&&h>n.sensitivity[0]&&(n.event.dir=y<0?"left":"right"),n.direction.up===!0&&c<v&&b<0&&c<100&&C>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&c<v&&b>0&&c<100&&C>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&c>v&&y<0&&v<100&&h>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&c>v&&y>0&&v<100&&h>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(X(i),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Be(),n.styleCleanup=w=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const T=()=>{document.body.classList.remove("no-pointer-events--children")};w===!0?setTimeout(T,50):T()}),n.handler({evt:i,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:u,distance:{x:c,y:v}})):n.end(i)},end(i){n.event!==void 0&&(Y(n,"temp"),M.is.firefox===!0&&W(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),i!==void 0&&n.event.dir!==!1&&X(i),n.event=void 0)}};if(e.__qtouchswipe=n,m.mouse===!0){const i=m.mouseCapture===!0||m.mousecapture===!0?"Capture":"";Q(n,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}M.has.touch===!0&&Q(n,"main",[[e,"touchstart","touchStart",`passive${m.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const s=e.__qtouchswipe;s!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&s.end(),s.handler=t.value),s.direction=ie(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(Y(t,"main"),Y(t,"temp"),M.is.firefox===!0&&W(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function Le(){let e=Object.create(null);return{getCache:(t,s)=>e[t]===void 0?e[t]=typeof s=="function"?s():s:e[t],setCache(t,s){e[t]=s},hasCache(t){return Object.hasOwnProperty.call(e,t)},clearCache(t){t!==void 0?delete e[t]:e=Object.create(null)}}}const Me={name:{required:!0},disable:Boolean},re={setup(e,{slots:t}){return()=>f("div",{class:"q-panel scroll",role:"tabpanel"},H(t.default))}},De={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Oe=["update:modelValue","beforeTransition","transition"];function Re(){const{props:e,emit:t,proxy:s}=G(),{getCache:m}=Le();let r,n;const i=x(null),u=x(null);function S(a){const d=e.vertical===!0?"up":"left";q((s.$q.lang.rtl===!0?-1:1)*(a.direction===d?1:-1))}const y=g(()=>[[Fe,S,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),c=g(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),b=g(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),v=g(()=>`--q-transition-duration: ${e.transitionDuration}ms`),h=g(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),C=g(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),w=g(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);z(()=>e.modelValue,(a,d)=>{const P=k(a)===!0?$(a):-1;n!==!0&&B(P===-1?0:P<$(d)?-1:1),i.value!==P&&(i.value=P,t("beforeTransition",a,d),ge(()=>{t("transition",a,d)}))});function T(){q(1)}function N(){q(-1)}function F(a){t("update:modelValue",a)}function k(a){return a!=null&&a!==""}function $(a){return r.findIndex(d=>d.props.name===a&&d.props.disable!==""&&d.props.disable!==!0)}function A(){return r.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function B(a){const d=a!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(a===-1?c.value:b.value):null;u.value!==d&&(u.value=d)}function q(a,d=i.value){let P=d+a;for(;P!==-1&&P<r.length;){const E=r[P];if(E!==void 0&&E.props.disable!==""&&E.props.disable!==!0){B(a),n=!0,t("update:modelValue",E.props.name),setTimeout(()=>{n=!1});return}P+=a}e.infinite===!0&&r.length!==0&&d!==-1&&d!==r.length&&q(a,a===-1?r.length:-1)}function V(){const a=$(e.modelValue);return i.value!==a&&(i.value=a),!0}function L(){const a=k(e.modelValue)===!0&&V()&&r[i.value];return e.keepAlive===!0?[f(he,C.value,[f(w.value===!0?m(h.value,()=>({...re,name:h.value})):re,{key:h.value,style:v.value},()=>a)])]:[f("div",{class:"q-panel scroll",style:v.value,key:h.value,role:"tabpanel"},[a])]}function p(){if(r.length!==0)return e.animated===!0?[f(ue,{name:u.value},L)]:L()}function I(a){return r=fe(H(a.default,[])).filter(d=>d.props!==null&&d.props.slot===void 0&&k(d.props.name)===!0),r.length}function l(){return r}return Object.assign(s,{next:T,previous:N,goTo:F}),{panelIndex:i,panelDirectives:y,updatePanelsList:I,updatePanelIndex:V,getPanelContent:p,getEnabledPanels:A,getPanels:l,isValidPanelName:k,keepAliveProps:C,needsUniqueKeepAliveWrapper:w,goToPanelByOffset:q,goToPanel:F,nextPanel:T,previousPanel:N}}var J=Z({name:"QCarouselSlide",props:{...Me,imgSrc:String},setup(e,{slots:t}){const s=g(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>f("div",{class:"q-carousel__slide",style:s.value},H(t.default))}});let R=0;const Qe={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ue=["update:fullscreen","fullscreen"];function Ge(){const e=G(),{props:t,emit:s,proxy:m}=e;let r,n,i;const u=x(!1);pe(e)===!0&&z(()=>m.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&c()}),z(()=>t.fullscreen,b=>{u.value!==b&&S()}),z(u,b=>{s("update:fullscreen",b),s("fullscreen",b)});function S(){u.value===!0?c():y()}function y(){u.value!==!0&&(u.value=!0,i=m.$el.parentNode,i.replaceChild(n,m.$el),document.body.appendChild(m.$el),R++,R===1&&document.body.classList.add("q-body--fullscreen-mixin"),r={handler:c},ae.add(r))}function c(){u.value===!0&&(r!==void 0&&(ae.remove(r),r=void 0),i.replaceChild(m.$el,n),u.value=!1,R=Math.max(0,R-1),R===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),m.$el.scrollIntoView!==void 0&&setTimeout(()=>{m.$el.scrollIntoView()})))}return _e(()=>{n=document.createElement("span")}),ee(()=>{t.fullscreen===!0&&y()}),ce(c),Object.assign(m,{toggleFullscreen:S,setFullscreen:y,exitFullscreen:c}),{inFullscreen:u,toggleFullscreen:S}}const He=["top","right","bottom","left"],We=["regular","flat","outline","push","unelevated"];var le=Z({name:"QCarousel",props:{...Ne,...De,...Qe,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>We.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>He.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Ue,...Oe],setup(e,{slots:t}){const{proxy:{$q:s}}=G(),m=Ae(e,s);let r=null,n;const{updatePanelsList:i,getPanelContent:u,panelDirectives:S,goToPanel:y,previousPanel:c,nextPanel:b,getEnabledPanels:v,panelIndex:h}=Re(),{inFullscreen:C}=Ge(),w=g(()=>C.value!==!0&&e.height!==void 0?{height:e.height}:{}),T=g(()=>e.vertical===!0?"vertical":"horizontal"),N=g(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),F=g(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(C.value===!0?" fullscreen":"")+(m.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${T.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${N.value}`:"")),k=g(()=>{const p=[e.prevIcon||s.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||s.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&s.lang.rtl===!0?p.reverse():p}),$=g(()=>e.navigationIcon||s.iconSet.carousel.navigationIcon),A=g(()=>e.navigationActiveIcon||$.value),B=g(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));z(()=>e.modelValue,()=>{e.autoplay&&q()}),z(()=>e.autoplay,p=>{p?q():r!==null&&(clearTimeout(r),r=null)});function q(){const p=be(e.autoplay)===!0?Math.abs(e.autoplay):5e3;r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,p>=0?b():c()},p)}ee(()=>{e.autoplay&&q()}),ce(()=>{r!==null&&clearTimeout(r)});function V(p,I){return f("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${p} q-carousel__navigation--${N.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[f("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},v().map(I))])}function L(){const p=[];if(e.navigation===!0){const I=t["navigation-icon"]!==void 0?t["navigation-icon"]:a=>f(U,{key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`,...a.btnProps,onClick:a.onClick}),l=n-1;p.push(V("buttons",(a,d)=>{const P=a.props.name,E=h.value===d;return I({index:d,maxIndex:l,name:P,active:E,btnProps:{icon:E===!0?A.value:$.value,size:"sm",...B.value},onClick:()=>{y(P)}})}))}else if(e.thumbnails===!0){const I=e.controlColor!==void 0?` text-${e.controlColor}`:"";p.push(V("thumbnails",l=>{const a=l.props;return f("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+I,src:a.imgSrc||a["img-src"],onClick:()=>{y(a.name)}})}))}return e.arrows===!0&&h.value>=0&&((e.infinite===!0||h.value>0)&&p.push(f("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${T.value} absolute flex flex-center`},[f(U,{icon:k.value[0],...B.value,onClick:c})])),(e.infinite===!0||h.value<n-1)&&p.push(f("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${T.value} absolute flex flex-center`},[f(U,{icon:k.value[1],...B.value,onClick:b})]))),Se(t.control,p)}return()=>(n=i(t),f("div",{class:F.value,style:w.value},[ye("div",{class:"q-carousel__slides-container"},u(),"sl-cont",e.swipeable,()=>S.value)].concat(L())))}});const Xe={ratio:[String,Number]};function Ye(e,t){return g(()=>{const s=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(s)!==!0&&s>0?{paddingBottom:`${100/s}%`}:null})}const Ke=1.7778;var j=Z({name:"QImg",props:{...Xe,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Ke},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:s}){const m=x(e.initialRatio),r=Ye(e,m),n=G(),{registerTimeout:i,removeTimeout:u}=oe(),{registerTimeout:S,removeTimeout:y}=oe(),c=g(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),b=g(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),v=[x(null),x(c.value)],h=x(0),C=x(!1),w=x(!1),T=g(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),N=g(()=>({width:e.width,height:e.height})),F=g(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),k=g(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function $(){if(y(),e.loadingShowDelay===0){C.value=!0;return}S(()=>{C.value=!0},e.loadingShowDelay)}function A(){y(),C.value=!1}function B({target:l}){K(n)===!1&&(u(),m.value=l.naturalHeight===0?.5:l.naturalWidth/l.naturalHeight,q(l,1))}function q(l,a){a===1e3||K(n)===!0||(l.complete===!0?V(l):i(()=>{q(l,a+1)},50))}function V(l){K(n)!==!0&&(h.value=h.value^1,v[h.value].value=null,A(),l.getAttribute("__qerror")!=="true"&&(w.value=!1),s("load",l.currentSrc||l.src))}function L(l){u(),A(),w.value=!0,v[h.value].value=b.value,v[h.value^1].value=c.value,s("error",l)}function p(l){const a=v[l].value,d={key:"img_"+l,class:F.value,style:k.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...a};return h.value===l?Object.assign(d,{class:d.class+"current",onLoad:B,onError:L}):d.class+="loaded",f("div",{class:"q-img__container absolute-full",key:"img"+l},f("img",d))}function I(){return C.value===!1?f("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},H(t[w.value===!0?"error":"default"])):f("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[f(xe,{color:e.spinnerColor,size:e.spinnerSize})])}{let l=function(){z(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,a=>{u(),w.value=!1,a===null?(A(),v[h.value^1].value=c.value):$(),v[h.value].value=a},{immediate:!0})};Ce.value===!0?ee(l):l()}return()=>{const l=[];return r.value!==null&&l.push(f("div",{key:"filler",style:r.value})),v[0].value!==null&&l.push(p(0)),v[1].value!==null&&l.push(p(1)),l.push(f(ue,{name:"q-transition--fade"},I)),f("div",{key:"main",class:T.value,style:N.value,role:"img","aria-label":e.alt},l)}}}),Je="/assets/bg2.c96bbd24.png",Ze="/assets/bg3.d8d68e1d.png",et="/assets/IMG_7821.d9219987.png",tt="/assets/IMG_7824.421e0388.png",nt="/assets/calhas-3.20e6eccd.jpg",at="/assets/IMG_7818.79f168eb.jpg",ot="/assets/obra-unicapa.fde82ccc.png",it="/assets/obra-conata.4b5e7bd4.png",st="/assets/obra-sao-goncalo.a1c8a6eb.png",rt="/assets/belo-vale.37f7f62e.png",lt="/assets/vale.eb9a7815.png",ut="/assets/conata.e242d27c.png",ct="/assets/construcawa.0f2d65ce.png";const dt=Pe({name:"IndexPage",components:{FooterComponent:Ve},setup(){const e=x(1);return{slide:x(1),autoplayBanner:x(!0),slideClient:e,autoplayClient:x(!0)}}}),vt={class:"absolute-center custom-caption text-banner"},mt=o("div",{class:"text-h4"},"Qualidade e Inova\xE7\xE3o em ",-1),ft=o("div",{class:"text-h2"},"Pr\xE9 Moldados de Concreto",-1),gt={class:"absolute-center custom-caption text-banner"},ht=o("div",{class:"text-h4"},"Qualidade e Inova\xE7\xE3o em ",-1),pt=o("div",{class:"text-h2"},"Pr\xE9 Moldados de Concreto",-1),_t=o("div",{class:"tubo"},[o("div",{class:"triangulo"}),o("div",{class:"quadrado"})],-1),yt={class:"ct-cards"},bt={class:"card-header"},St={class:"ct-icon"},Ct=o("div",{class:"title-card"},"Profissionais Qualificados",-1),xt=o("div",{class:"text-card"},"A Tubular conta com uma equipe repleta de profissionais qualificados que sempre entregam o que nossos clientes precisam.",-1),qt={class:"card-header"},Pt={class:"ct-icon"},wt=o("div",{class:"title-card"},"Produtos certificados",-1),Tt=o("div",{class:"text-card"},"Usamos materiais com extrema qualidade para oferecer seguran\xE7a e tranquilidade para nossos clientes.",-1),kt={class:"card-header"},It={class:"ct-icon"},$t=o("div",{class:"title-card"},"Projetos personalizados",-1),Bt=o("div",{class:"text-card"},"Contamos com uma equipe dedicada para a elabora\xE7\xE3o de projetos 100% personalizados.",-1),Nt={class:"ct-main"},At=o("div",{class:"title-main"},"Principais Produtos",-1),Vt=$e('<div class="ct-produto"><img src="'+et+'" alt=""><div>Tubos</div></div><div class="ct-produto"><img src="'+tt+'" alt=""><div>Galerias</div></div><div class="ct-produto"><img src="'+nt+'" alt=""><div>Calhas</div></div><div class="ct-produto"><img src="'+at+'" alt=""><div>Pe\xE7as Especiais</div></div>',4),Et={id:"projetos"},jt={class:"ct-section"},zt=o("div",{class:"title-card"},"Galeria de Projetos",-1),Ft=o("div",{class:"text-card"},"Explore nossa galeria e veja como nossas solu\xE7\xF5es podem transformar suas ideias em realidade, sempre com respeito ao meio ambiente e atendimento dedicado. Inspire-se e descubra por que somos a escolha certa para o seu pr\xF3ximo projeto.",-1),Lt={class:"projects"},Mt={class:"ct-q-img"},Dt=o("div",{class:"text-card"},"Unicapa - Lagoa Santa",-1),Ot={class:"ct-q-img"},Rt=o("div",{class:"text-card"},"Conata - Ribeir\xE3o das Neves",-1),Qt={class:"ct-q-img"},Ut=o("div",{class:"text-card"},"Vale - S\xE3o Gon\xE7alo",-1),Gt={class:"ct-q-img"},Ht=o("div",{class:"text-card"},"Belo Vale",-1),Wt={id:"clientes"},Xt={class:"ct-section"},Yt=o("div",{class:"title-card"},"Alguns de nossos clientes",-1),Kt={class:"row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"};function Jt(e,t,s,m,r,n){const i=we("FooterComponent");return Te(),ke(Ie,null,[o("div",null,[_(le,{class:"banner",animated:"",modelValue:e.slide,"onUpdate:modelValue":t[0]||(t[0]=u=>e.slide=u),arrows:"",navigation:"",infinite:"",autoplay:e.autoplayBanner},{default:D(()=>[_(J,{name:1,"img-src":Je},{default:D(()=>[o("div",vt,[_(O,{name:"img:inovacao.png"}),mt,ft])]),_:1}),_(J,{name:2,"img-src":Ze},{default:D(()=>[o("div",gt,[_(O,{name:"img:inovacao.png"}),ht,pt])]),_:1})]),_:1},8,["modelValue","autoplay"])]),_t,o("section",yt,[o("div",bt,[o("div",St,[_(O,{name:"img:profissionais.png"})]),Ct,xt]),o("div",qt,[o("div",Pt,[_(O,{name:"img:qualidade.png"})]),wt,Tt]),o("div",kt,[o("div",It,[_(O,{name:"img:lapis-e-regua.png"})]),$t,Bt])]),o("main",null,[o("div",Nt,[At,_(U,{label:"Ver Todos",color:"white","text-color":"primary",to:"/produtos"})]),Vt]),o("section",Et,[o("div",jt,[zt,Ft,o("div",Lt,[o("div",Mt,[_(j,{src:ot,"no-native-menu":""}),Dt]),o("div",Ot,[_(j,{src:it,"no-native-menu":""}),Rt]),o("div",Qt,[_(j,{src:st,"no-native-menu":""}),Ut]),o("div",Gt,[_(j,{src:rt,"no-native-menu":""}),Ht])])])]),o("section",Wt,[o("div",Xt,[Yt,_(le,{modelValue:e.slideClient,"onUpdate:modelValue":t[1]||(t[1]=u=>e.slideClient=u),"transition-prev":"slide-right","transition-next":"slide-left",animated:"",padding:"",height:"180px","control-color":"primary",class:"carroussel-client q-mt-md",infinite:""},{default:D(()=>[_(J,{name:1,class:"column no-wrap"},{default:D(()=>[o("div",Kt,[_(j,{fit:"contain",class:"rounded-borders col-4 full-height",src:lt}),_(j,{fit:"contain",class:"rounded-borders col-4 full-height",src:ut}),_(j,{fit:"contain",class:"rounded-borders col-4 full-height",src:ct})])]),_:1})]),_:1},8,["modelValue"])])]),_(i)],64)}var nn=qe(dt,[["render",Jt]]);export{nn as default};
