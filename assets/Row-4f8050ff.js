import{r as m,a as C,c as d,u as N,f as h,h as B}from"./index-0ae2e782.js";function y({as:l,bsPrefix:s,className:r,...e}){s=N(s,"col");const f=h(),t=B(),o=[],i=[];return f.forEach(u=>{const p=e[u];delete e[u];let a,n,c;typeof p=="object"&&p!=null?{span:a,offset:n,order:c}=p:a=p;const $=u!==t?`-${u}`:"";a&&o.push(a===!0?`${s}${$}`:`${s}${$}-${a}`),c!=null&&i.push(`order${$}-${c}`),n!=null&&i.push(`offset${$}-${n}`)}),[{...e,className:d(r,...o,...i)},{as:l,bsPrefix:s,spans:o}]}const w=m.forwardRef((l,s)=>{const[{className:r,...e},{as:f="div",bsPrefix:t,spans:o}]=y(l);return C(f,{...e,ref:s,className:d(r,!o.length&&t)})});w.displayName="Col";const v=w,x=m.forwardRef(({bsPrefix:l,fluid:s=!1,as:r="div",className:e,...f},t)=>{const o=N(l,"container"),i=typeof s=="string"?`-${s}`:"-fluid";return C(r,{ref:t,...f,className:d(e,s?`${o}${i}`:o)})});x.displayName="Container";const E=x,R=m.forwardRef(({bsPrefix:l,className:s,as:r="div",...e},f)=>{const t=N(l,"row"),o=h(),i=B(),u=`${t}-cols`,p=[];return o.forEach(a=>{const n=e[a];delete e[a];let c;n!=null&&typeof n=="object"?{cols:c}=n:c=n;const $=a!==i?`-${a}`:"";c!=null&&p.push(`${u}${$}-${c}`)}),C(r,{ref:f,...e,className:d(s,t,...p)})});R.displayName="Row";const g=R;export{E as C,g as R,v as a};