import{i as v,an as p,_,d as f,r as h,o as g,$ as b,a0 as y,ai as x,a3 as e,f as s,a4 as i,ao as q,a5 as C,F,aj as S,al as E,am as I,a7 as d}from"./index.503630d3.js";import{F as $}from"./Footer.eeb746d1.js";function j(){return v(p)}const B=f({name:"ContatoPage",components:{FooterComponent:$},setup(){const a=j(),t=h(!1),n="1Z2UX6vAlH2v0brIi";g(async()=>{emailjs.init({publicKey:n})});async function c(r){t.value=!0,await emailjs.sendForm("service_5lkwlcj","template_3xz0r7i",this.$refs.form,{publicKey:n}).then(()=>{a.notify({position:"top",type:"positive",message:"Mensagem enviada com sucesso!"})},l=>{console.log("FAILED...",l.text),a.notify({position:"top",type:"negative",message:"Falha ao enviar mensagem, tente novamente mais tarde."})}),t.value=!1}return{onSubmit:c,loading:t}}}),o=a=>(E("data-v-71efe98c"),a=a(),I(),a),K=S('<div class="head-page parallax parallax2" data-v-71efe98c><div data-v-71efe98c><div class="text-h2" data-v-71efe98c>Contato</div></div></div><div class="tubo" data-v-71efe98c><div class="triangulo" data-v-71efe98c></div><div class="quadrado" data-v-71efe98c></div></div>',2),M={class:"ct-contato"},N={class:"social-contact"},w=o(()=>e("div",{class:"title-card"},"Contato",-1)),V=o(()=>e("div",{class:"q-mb-md text-blue-grey-9"},[d(" Entre em contato conosco para esclarecimento de d\xFAvidas, sugest\xF5es ou solicita\xE7\xF5es de or\xE7amento. "),e("br"),d(" Utilize um dos nossos canais de contato ou preencha o formul\xE1rio ao lado. Responderemos o mais breve poss\xEDvel. Agradecemos por nos escolher, e estamos ansiosos para atender voc\xEA! ")],-1)),k={class:"main-ctt"},A=o(()=>e("div",{class:"q-my-sm ct-dados"},[e("span",null,"Telefone"),e("div",{class:"text-h6"},"31 4101-5898")],-1)),Q={class:"main-ctt"},z=o(()=>e("div",{class:"q-my-sm ct-dados"},[e("span",null,"E-mail"),e("div",{class:"text-h6"},"comercial.tubular@gmail.com")],-1)),R={class:"main-ctt"},T=o(()=>e("div",{class:"q-my-sm ct-dados"},[e("span",null,"Endere\xE7o"),e("div",{class:"text-h6"},"Rod. Br040, Km522 - Contagem, MG 32150-340")],-1)),U=o(()=>e("div",null,[e("label",null,"Nome"),e("input",{type:"text",name:"user_name",required:""})],-1)),D=o(()=>e("div",null,[e("label",null,"E-mail"),e("input",{type:"email",name:"user_email",required:""})],-1)),G=o(()=>e("div",null,[e("label",null,"Mensagem"),e("textarea",{name:"message",required:""})],-1));function H(a,t,n,c,r,l){const m=b("FooterComponent");return y(),x(F,null,[K,e("section",null,[e("div",M,[e("div",N,[w,V,e("div",k,[s(i,{name:"phone"}),A]),e("div",Q,[s(i,{name:"email"}),z]),e("div",R,[s(i,{name:"location_on"}),T])]),e("form",{class:"form-contact",ref:"form",onSubmit:t[0]||(t[0]=q((...u)=>a.onSubmit&&a.onSubmit(...u),["prevent"]))},[U,D,G,s(C,{label:"Enviar",type:"submit",loading:a.loading,class:"btn-contact q-mt-sm",color:"primary"},null,8,["loading"])],544)])]),s(m)],64)}var X=_(B,[["render",H],["__scopeId","data-v-71efe98c"]]);export{X as default};
