(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{4317:function(e,t,r){Promise.resolve().then(r.bind(r,2196))},291:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(9920)._(r(2265)).default.createContext(null)},9949:function(e,t,r){"use strict";var n=r(8877);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,s){if(s!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r,r}},1448:function(e,t,r){e.exports=r(9949)()},8877:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6712:function(e,t,r){"use strict";var n=r(6800),a=r.n(n),o=r(2265),s=r(2574),l=r(7437);let i=o.forwardRef((e,t)=>{let[{className:r,...n},{as:o="div",bsPrefix:i,spans:c}]=function(e){let{as:t,bsPrefix:r,className:n,...o}=e;r=(0,s.vE)(r,"col");let l=(0,s.pi)(),i=(0,s.zG)(),c=[],u=[];return l.forEach(e=>{let t,n,a;let s=o[e];delete o[e],"object"==typeof s&&null!=s?{span:t,offset:n,order:a}=s:t=s;let l=e!==i?"-".concat(e):"";t&&c.push(!0===t?"".concat(r).concat(l):"".concat(r).concat(l,"-").concat(t)),null!=a&&u.push("order".concat(l,"-").concat(a)),null!=n&&u.push("offset".concat(l,"-").concat(n))}),[{...o,className:a()(n,...c,...u)},{as:t,bsPrefix:r,spans:c}]}(e);return(0,l.jsx)(o,{...n,ref:t,className:a()(r,!c.length&&i)})});i.displayName="Col",t.default=i},2824:function(e,t,r){"use strict";var n=r(6800),a=r.n(n),o=r(2265),s=r(2574),l=r(7437);let i=o.forwardRef((e,t)=>{let{bsPrefix:r,fluid:n=!1,as:o="div",className:i,...c}=e,u=(0,s.vE)(r,"container");return(0,l.jsx)(o,{ref:t,...c,className:a()(i,n?"".concat(u).concat("string"==typeof n?"-".concat(n):"-fluid"):u)})});i.displayName="Container",t.default=i},358:function(e,t,r){"use strict";var n=r(6800),a=r.n(n),o=r(2265),s=r(2574),l=r(7437);let i=o.forwardRef((e,t)=>{let{bsPrefix:r,className:n,as:o="div",...i}=e,c=(0,s.vE)(r,"row"),u=(0,s.pi)(),d=(0,s.zG)(),f="".concat(c,"-cols"),p=[];return u.forEach(e=>{let t;let r=i[e];delete i[e],null!=r&&"object"==typeof r?{cols:t}=r:t=r,null!=t&&p.push("".concat(f).concat(e!==d?"-".concat(e):"","-").concat(t))}),(0,l.jsx)(o,{ref:t,...i,className:a()(n,c,...p)})});i.displayName="Row",t.default=i},2574:function(e,t,r){"use strict";r.d(t,{pi:function(){return i},vE:function(){return l},zG:function(){return c}});var n=r(2265);r(7437);let a=n.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:o,Provider:s}=a;function l(e,t){let{prefixes:r}=(0,n.useContext)(a);return e||r[t]||t}function i(){let{breakpoints:e}=(0,n.useContext)(a);return e}function c(){let{minBreakpoint:e}=(0,n.useContext)(a);return e}},5556:function(e){"use strict";e.exports=function(){}},2196:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return X}});var n=r(7437);r(594);var a=r(2824),o=r(358),s=r(6712),l=r(6800),i=r.n(l),c=r(1448),u=r.n(c),d=r(2265);let f={type:u().string,tooltip:u().bool,as:u().elementType},p=d.forwardRef((e,t)=>{let{as:r="div",className:a,type:o="valid",tooltip:s=!1,...l}=e;return(0,n.jsx)(r,{...l,ref:t,className:i()(a,"".concat(o,"-").concat(s?"tooltip":"feedback"))})});p.displayName="Feedback",p.propTypes=f;let m=d.createContext({});var h=r(2574);let y=d.forwardRef((e,t)=>{let{id:r,bsPrefix:a,className:o,type:s="checkbox",isValid:l=!1,isInvalid:c=!1,as:u="input",...f}=e,{controlId:p}=(0,d.useContext)(m);return a=(0,h.vE)(a,"form-check-input"),(0,n.jsx)(u,{...f,ref:t,type:s,id:r||p,className:i()(o,a,l&&"is-valid",c&&"is-invalid")})});y.displayName="FormCheckInput";let b=d.forwardRef((e,t)=>{let{bsPrefix:r,className:a,htmlFor:o,...s}=e,{controlId:l}=(0,d.useContext)(m);return r=(0,h.vE)(r,"form-check-label"),(0,n.jsx)("label",{...s,ref:t,htmlFor:o||l,className:i()(a,r)})});b.displayName="FormCheckLabel";let x=d.forwardRef((e,t)=>{let{id:r,bsPrefix:a,bsSwitchPrefix:o,inline:s=!1,reverse:l=!1,disabled:c=!1,isValid:u=!1,isInvalid:f=!1,feedbackTooltip:x=!1,feedback:v,feedbackType:j,className:g,style:N,title:w="",type:O="checkbox",label:C,children:E,as:k="input",...P}=e;a=(0,h.vE)(a,"form-check"),o=(0,h.vE)(o,"form-switch");let{controlId:R}=(0,d.useContext)(m),F=(0,d.useMemo)(()=>({controlId:r||R}),[R,r]),I=!E&&null!=C&&!1!==C||d.Children.toArray(E).some(e=>d.isValidElement(e)&&e.type===b),S=(0,n.jsx)(y,{...P,type:"switch"===O?"checkbox":O,ref:t,isValid:u,isInvalid:f,disabled:c,as:k});return(0,n.jsx)(m.Provider,{value:F,children:(0,n.jsx)("div",{style:N,className:i()(g,I&&a,s&&"".concat(a,"-inline"),l&&"".concat(a,"-reverse"),"switch"===O&&o),children:E||(0,n.jsxs)(n.Fragment,{children:[S,I&&(0,n.jsx)(b,{title:w,children:C}),v&&(0,n.jsx)(p,{type:j,tooltip:x,children:v})]})})})});x.displayName="FormCheck";var v=Object.assign(x,{Input:y,Label:b});r(5556);let j=d.forwardRef((e,t)=>{let{bsPrefix:r,type:a,size:o,htmlSize:s,id:l,className:c,isValid:u=!1,isInvalid:f=!1,plaintext:p,readOnly:y,as:b="input",...x}=e,{controlId:v}=(0,d.useContext)(m);return r=(0,h.vE)(r,"form-control"),(0,n.jsx)(b,{...x,type:a,size:s,ref:t,readOnly:y,id:l||v,className:i()(c,p?"".concat(r,"-plaintext"):r,o&&"".concat(r,"-").concat(o),"color"===a&&"".concat(r,"-color"),u&&"is-valid",f&&"is-invalid")})});j.displayName="FormControl";var g=Object.assign(j,{Feedback:p});let N=d.forwardRef((e,t)=>{let{className:r,bsPrefix:a,as:o="div",...s}=e;return a=(0,h.vE)(a,"form-floating"),(0,n.jsx)(o,{ref:t,className:i()(r,a),...s})});N.displayName="FormFloating";let w=d.forwardRef((e,t)=>{let{controlId:r,as:a="div",...o}=e,s=(0,d.useMemo)(()=>({controlId:r}),[r]);return(0,n.jsx)(m.Provider,{value:s,children:(0,n.jsx)(a,{...o,ref:t})})});w.displayName="FormGroup";let O=d.forwardRef((e,t)=>{let{as:r="label",bsPrefix:a,column:o=!1,visuallyHidden:l=!1,className:c,htmlFor:u,...f}=e,{controlId:p}=(0,d.useContext)(m);a=(0,h.vE)(a,"form-label");let y="col-form-label";"string"==typeof o&&(y="".concat(y," ").concat(y,"-").concat(o));let b=i()(c,a,l&&"visually-hidden",o&&y);return(u=u||p,o)?(0,n.jsx)(s.default,{ref:t,as:"label",className:b,htmlFor:u,...f}):(0,n.jsx)(r,{ref:t,className:b,htmlFor:u,...f})});O.displayName="FormLabel";let C=d.forwardRef((e,t)=>{let{bsPrefix:r,className:a,id:o,...s}=e,{controlId:l}=(0,d.useContext)(m);return r=(0,h.vE)(r,"form-range"),(0,n.jsx)("input",{...s,type:"range",ref:t,className:i()(a,r),id:o||l})});C.displayName="FormRange";let E=d.forwardRef((e,t)=>{let{bsPrefix:r,size:a,htmlSize:o,className:s,isValid:l=!1,isInvalid:c=!1,id:u,...f}=e,{controlId:p}=(0,d.useContext)(m);return r=(0,h.vE)(r,"form-select"),(0,n.jsx)("select",{...f,size:o,ref:t,className:i()(s,r,a&&"".concat(r,"-").concat(a),l&&"is-valid",c&&"is-invalid"),id:u||p})});E.displayName="FormSelect";let k=d.forwardRef((e,t)=>{let{bsPrefix:r,className:a,as:o="small",muted:s,...l}=e;return r=(0,h.vE)(r,"form-text"),(0,n.jsx)(o,{...l,ref:t,className:i()(a,r,s&&"text-muted")})});k.displayName="FormText";let P=d.forwardRef((e,t)=>(0,n.jsx)(v,{...e,ref:t,type:"switch"}));P.displayName="Switch";var R=Object.assign(P,{Input:v.Input,Label:v.Label});let F=d.forwardRef((e,t)=>{let{bsPrefix:r,className:a,children:o,controlId:s,label:l,...c}=e;return r=(0,h.vE)(r,"form-floating"),(0,n.jsxs)(w,{ref:t,className:i()(a,r),controlId:s,...c,children:[o,(0,n.jsx)("label",{htmlFor:s,children:l})]})});F.displayName="FloatingLabel";let I={_ref:u().any,validated:u().bool,as:u().elementType},S=d.forwardRef((e,t)=>{let{className:r,validated:a,as:o="form",...s}=e;return(0,n.jsx)(o,{...s,ref:t,className:i()(r,a&&"was-validated")})});S.displayName="Form",S.propTypes=I;var T=Object.assign(S,{Group:w,Control:g,Floating:N,Check:v,Switch:R,Label:O,Text:k,Range:C,Select:E,FloatingLabel:F});let L=["as","disabled"];function _({tagName:e,disabled:t,href:r,target:n,rel:a,role:o,onClick:s,tabIndex:l=0,type:i}){e||(e=null!=r||null!=n||null!=a?"a":"button");let c={tagName:e};if("button"===e)return[{type:i||"button",disabled:t},c];let u=n=>{var a;if(!t&&("a"!==e||(a=r)&&"#"!==a.trim())||n.preventDefault(),t){n.stopPropagation();return}null==s||s(n)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:t?void 0:l,href:r,target:"a"===e?n:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}d.forwardRef((e,t)=>{let{as:r,disabled:a}=e,o=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,L),[s,{tagName:l}]=_(Object.assign({tagName:r,disabled:a},o));return(0,n.jsx)(l,Object.assign({},o,s,{ref:t}))}).displayName="Button";let G=d.forwardRef((e,t)=>{let{as:r,bsPrefix:a,variant:o="primary",size:s,active:l=!1,disabled:c=!1,className:u,...d}=e,f=(0,h.vE)(a,"btn"),[p,{tagName:m}]=_({tagName:r,disabled:c,...d});return(0,n.jsx)(m,{...p,...d,ref:t,disabled:c,className:i()(u,f,l&&"active",o&&"".concat(f,"-").concat(o),s&&"".concat(f,"-").concat(s),d.href&&c&&"disabled")})});G.displayName="Button";var D=r(7138),B=r(1942),X=()=>((0,d.useEffect)(()=>{let e=document.createElement("style");return e.innerHTML="\n      .form-control {\n        border-color: #c6e6f5;\n        border-width: 2px;\n      }\n      .custom-bg {\n        background-color: #c6e6f5;\n        padding: 0 4px;\n      }\n      .custom-button {\n        background-color: #1d9ada;\n        border-color: #1d9ada;\n        color: #fff;\n                font-weight: bold;\n\n      }\n      .custom-button:hover {\n        background-color: ##c6e6f5;\n        border-color: #c6e6f5;\n        color: #fff;\n      }\n          h1, h5 {\n        font-weight: bold;\n      }\n      .highlight {\n        font-weight: bold;\n      }\n    ",document.head.appendChild(e),()=>{document.head.removeChild(e)}},[]),(0,n.jsx)(a.default,{className:"my-5",children:(0,n.jsx)(o.default,{className:"justify-content-center",children:(0,n.jsxs)(s.default,{md:8,children:[(0,n.jsx)("h1",{children:"Contact Us"}),(0,n.jsx)("p",{children:"Connect with our experts."}),(0,n.jsxs)("p",{children:["Our dedicated team is eager to understand your business needs and address any inquiries you may have. Please use our quick contact form to reach out to us. We promise to respond ",(0,n.jsx)("span",{className:"custom-bg highlight",children:"within one business day."})]}),(0,n.jsxs)(T,{children:[(0,n.jsxs)(T.Group,{controlId:"serviceArea",className:"mb-3",children:[(0,n.jsx)(T.Label,{children:"I'm interested in: *"}),(0,n.jsxs)(T.Control,{as:"select",children:[(0,n.jsx)("option",{children:"Please select a service area"}),(0,n.jsx)("option",{children:"PEO/Employer of Record"}),(0,n.jsx)("option",{children:"Market entry (Advisory, formation & licensing)"}),(0,n.jsx)("option",{children:"BOI incentive support"}),(0,n.jsx)("option",{children:"Operational support (Governance, Accounting & tax, HR & payroll, Visas & work permits)"}),(0,n.jsx)("option",{children:"Legal services"}),(0,n.jsx)("option",{children:"Corporate advisory & transaction support"}),(0,n.jsx)("option",{children:"Something else"})]})]}),(0,n.jsxs)(T.Group,{controlId:"businessName",className:"mb-3",children:[(0,n.jsx)(T.Label,{children:"Business/Organisation Name *"}),(0,n.jsx)(T.Control,{type:"text",placeholder:"Acme Corporation"})]}),(0,n.jsxs)(T.Group,{controlId:"projectDetails",className:"mb-3",children:[(0,n.jsx)(T.Label,{children:"Project Details *"}),(0,n.jsx)(T.Control,{as:"textarea",rows:3,placeholder:"Tell us more about your business and what you are aiming to achieve."})]}),(0,n.jsx)("h5",{children:"How can we reach you?"}),(0,n.jsxs)(T.Group,{controlId:"firstName",className:"mb-3",children:[(0,n.jsx)(T.Label,{children:"First Name *"}),(0,n.jsx)(T.Control,{type:"text"})]}),(0,n.jsxs)(T.Group,{controlId:"lastName",className:"mb-3",children:[(0,n.jsx)(T.Label,{children:"Last Name *"}),(0,n.jsx)(T.Control,{type:"text"})]}),(0,n.jsxs)(T.Group,{controlId:"businessEmail",className:"mb-3",children:[(0,n.jsx)(T.Label,{children:"Business Email *"}),(0,n.jsx)(T.Control,{type:"email",placeholder:"(We will contact you by email)"})]}),(0,n.jsxs)(T.Group,{controlId:"phone",className:"mb-3",children:[(0,n.jsx)(T.Label,{children:"Phone (E.g. +66 XX XXX XXXX)"}),(0,n.jsx)(T.Control,{type:"text",placeholder:"(In case we cannot reach you by email)"})]}),(0,n.jsx)(G,{variant:"primary",type:"submit",className:"custom-button",children:"Submit"})]}),(0,n.jsx)("h5",{className:"mt-5",children:"Other ways to get in touch"}),(0,n.jsxs)("p",{children:[(0,n.jsx)(B.I7T,{})," ",(0,n.jsx)("span",{className:"highlight",children:"+668 78611021 00"})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(B.I7T,{})," ",(0,n.jsx)("span",{className:"highlight",children:"+668 78611052 00"})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(B.SRX,{})," ",(0,n.jsx)("span",{className:"highlight",children:"k.siamwala@yahoo.com"})]}),(0,n.jsxs)("h5",{className:"mt-5",children:[(0,n.jsx)(B.kUi,{})," Your Privacy"]}),(0,n.jsx)("p",{children:"We value your privacy and will never share your information with any third party."}),(0,n.jsxs)("p",{children:["This form collects your name, contact number, and email address so that we can communicate with you and provide a quote for our services. Please review our ",(0,n.jsx)(D.default,{href:"/privacy-policy",children:"Privacy Policy"})," to understand how we manage and protect your data."]}),(0,n.jsx)("h5",{className:"mt-5",children:"Visit our Thailand Office"}),(0,n.jsx)("p",{children:"We are open from Monday to Friday, 9am – 6pm."}),(0,n.jsxs)("address",{className:"highlight",children:["Big Step (Thailand) Co., Ltd.",(0,n.jsx)("br",{}),"74 Soi Santiphab, Naret Road,",(0,n.jsx)("br",{}),"Bangrak, Bangkok 10500, Thailand",(0,n.jsx)("br",{})]})]})})}))},6800:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=o(t,r));return t}(r)))}return e}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0!==(r=(function(){return a}).apply(t,[]))&&(e.exports=r)}()},1810:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),s=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var n,a;n=t,a=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,l({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:a,size:o,title:i}=e,u=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,s),d=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==o?n.createElement(o.Consumer,null,e=>t(e)):t(a)}}},function(e){e.O(0,[610,699,573,971,23,744],function(){return e(e.s=4317)}),_N_E=e.O()}]);