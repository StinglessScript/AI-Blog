import{d as u,u as d,n as p,p as _,V as a,Q as m,_ as f}from"./CuGlreuw.js";const h={class:"timeline"},v=u({__name:"Timeline",setup(T){const r=d();function l(){const c=r.default();return c?c.map(t=>{var n,o,i;const e=((o=(n=t.children)==null?void 0:n.default)==null?void 0:o.call(n)[0].children)||"",s=(i=e==null?void 0:e.match)==null?void 0:i.call(e,/^\{(?<caption>.*)\}$/);return s!=null&&s.groups?a("div",{class:"timeline-caption"},[s.groups.caption]):a("div",{class:"timeline-body card"},[t])}):a("span",null,[m("时间线为空")])}return(c,t)=>(_(),p("div",h,[a(l)]))}}),g=Object.assign(f(v,[["__scopeId","data-v-b65725ac"]]),{__name:"Timeline"});export{g as default};
