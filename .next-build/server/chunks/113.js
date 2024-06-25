exports.id=113,exports.ids=[113],exports.modules={6574:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},2779:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2481,23)),Promise.resolve().then(t.t.bind(t,9404,23)),Promise.resolve().then(t.bind(t,596)),Promise.resolve().then(t.bind(t,5518))},6424:(e,s,t)=>{"use strict";t.d(s,{default:()=>d});var r=t(8029),o=t.n(r),n=t(7577),a=t(2227),i=t(326);let l=n.forwardRef((e,s)=>{let[{className:t,...r},{as:n="div",bsPrefix:l,spans:d}]=function({as:e,bsPrefix:s,className:t,...r}){s=(0,a.vE)(s,"col");let n=(0,a.pi)(),i=(0,a.zG)(),l=[],d=[];return n.forEach(e=>{let t,o,n;let a=r[e];delete r[e],"object"==typeof a&&null!=a?{span:t,offset:o,order:n}=a:t=a;let c=e!==i?`-${e}`:"";t&&l.push(!0===t?`${s}${c}`:`${s}${c}-${t}`),null!=n&&d.push(`order${c}-${n}`),null!=o&&d.push(`offset${c}-${o}`)}),[{...r,className:o()(t,...l,...d)},{as:e,bsPrefix:s,spans:l}]}(e);return(0,i.jsx)(n,{...r,ref:s,className:o()(t,!d.length&&l)})});l.displayName="Col";let d=l},959:(e,s,t)=>{"use strict";t.d(s,{default:()=>d});var r=t(8029),o=t.n(r),n=t(7577),a=t(2227),i=t(326);let l=n.forwardRef(({bsPrefix:e,fluid:s=!1,as:t="div",className:r,...n},l)=>{let d=(0,a.vE)(e,"container"),c="string"==typeof s?`-${s}`:"-fluid";return(0,i.jsx)(t,{ref:l,...n,className:o()(r,s?`${d}${c}`:d)})});l.displayName="Container";let d=l},7503:(e,s,t)=>{"use strict";t.d(s,{default:()=>d});var r=t(8029),o=t.n(r),n=t(7577),a=t(2227),i=t(326);let l=n.forwardRef(({bsPrefix:e,className:s,as:t="div",...r},n)=>{let l=(0,a.vE)(e,"row"),d=(0,a.pi)(),c=(0,a.zG)(),m=`${l}-cols`,f=[];return d.forEach(e=>{let s;let t=r[e];delete r[e],null!=t&&"object"==typeof t?{cols:s}=t:s=t;let o=e!==c?`-${e}`:"";null!=s&&f.push(`${m}${o}-${s}`)}),(0,i.jsx)(t,{ref:n,...r,className:o()(s,l,...f)})});l.displayName="Row";let d=l},2227:(e,s,t)=>{"use strict";t.d(s,{pi:()=>l,vE:()=>i,zG:()=>d});var r=t(7577);t(326);let o=r.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:n,Provider:a}=o;function i(e,s){let{prefixes:t}=(0,r.useContext)(o);return e||t[s]||s}function l(){let{breakpoints:e}=(0,r.useContext)(o);return e}function d(){let{minBreakpoint:e}=(0,r.useContext)(o);return e}},596:(e,s,t)=>{"use strict";t.d(s,{default:()=>d});var r=t(326),o=t(7577),n=t(6226),a=t(434),i=t(9067),l=t.n(i);let d=()=>{let[e,s]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=e=>{e.target.closest(".dropdown")||s(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);let t=()=>{s(!e)};return r.jsx("header",{className:`navbar navbar-expand-lg navbar-light ${l().header}`,children:(0,r.jsxs)("div",{className:"container p-4",children:[r.jsx("div",{className:`navbar-brand ${l().navBrand}`,children:r.jsx(a.default,{href:"/",passHref:!0,children:r.jsx(n.default,{src:"/images/logo.svg",alt:"Logo",width:300,height:100,className:"img-fluid"})})}),r.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:r.jsx("span",{className:"navbar-toggler-icon"})}),r.jsx("div",{className:"collapse navbar-collapse",id:"navbarNav",children:(0,r.jsxs)("ul",{className:`navbar-nav ms-auto ${l().navList}`,style:{fontSize:"1.3rem"},children:[r.jsx("li",{className:"nav-item",children:r.jsx(a.default,{href:"/",className:`nav-link ${l().navLink}`,children:"Home"})}),(0,r.jsxs)("li",{className:"nav-item dropdown",onMouseEnter:t,onMouseLeave:t,children:[r.jsx("a",{className:`nav-link dropdown-toggle ${l().navLink}`,role:"button",id:"servicesDropdown","data-bs-toggle":"dropdown","aria-expanded":e?"true":"false",children:"Services"}),(0,r.jsxs)("ul",{className:`dropdown-menu ${e?"show":""}`,"aria-labelledby":"servicesDropdown",children:[r.jsx("li",{children:r.jsx(a.default,{href:"/registration",className:`dropdown-item ${l().dropdownItem}`,children:"Business Registration"})}),r.jsx("li",{children:r.jsx(a.default,{href:"/accounting",className:`dropdown-item ${l().dropdownItem}`,children:"Accounting"})}),r.jsx("li",{children:r.jsx(a.default,{href:"/visa",className:`dropdown-item ${l().dropdownItem}`,children:"Visa & Work Permit"})})]})]}),r.jsx("li",{className:"nav-item",children:r.jsx(a.default,{href:"/contact",className:`nav-link ${l().navLink}`,children:"Contact Us"})})]})})]})})}},5518:(e,s,t)=>{"use strict";t.d(s,{default:()=>l});var r=t(326);t(7577);var o=t(9497),n=t(6771),a=t(3925),i=t.n(a);let l=()=>r.jsx("div",{className:i().wrapper,children:(0,r.jsxs)("div",{className:`${i().middleSection} ${i().sticky}`,children:[r.jsx(o.G,{icon:n._ei,className:`${i().icon} ${i().skype}`,onClick:()=>{window.open("https://join.skype.com/invite/qZOC9H9xfewa")}}),r.jsx(o.G,{icon:n.OPk,className:`${i().icon} ${i().line}`,onClick:()=>{window.open("your line link")}})]})})},3870:e=>{e.exports={footer:"footer_footer__17AzZ",footerContent:"footer_footerContent__nRm8V",footerLogo:"footer_footerLogo__3rM00",footerContact:"footer_footerContact__T9wz_",footerServices:"footer_footerServices__PHarL",footerLink:"footer_footerLink__MJ8YK",footerCopyright:"footer_footerCopyright__tCJn0",footerHr:"footer_footerHr__MMCPm"}},9067:e=>{e.exports={header:"header_header__wFPaD","fade-out":"header_fade-out__Nu7pC",navBrand:"header_navBrand__1PacP",navLink:"header_navLink__Rgirv",dropdownItem:"header_dropdownItem__c8A2i","navbar-toggler":"header_navbar-toggler__EvduX","navbar-toggler-icon":"header_navbar-toggler-icon__pDeum","dropdown-menu":"header_dropdown-menu__cviLS"}},3925:e=>{e.exports={wrapper:"middleSectionIcons_wrapper__QQoT3",middleSection:"middleSectionIcons_middleSection__9yyOW",icon:"middleSectionIcons_icon__cU4C2",skype:"middleSectionIcons_skype__Ps6ta",line:"middleSectionIcons_line___RKJp"}},6885:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>b,metadata:()=>j});var r=t(9510),o=t(1723),n=t.n(o);t(1159);var a=t(8570);let i=(0,a.createProxy)(String.raw`C:\Users\User\OneDrive\Desktop\Big Step Consulting\src\components\Header.js`),{__esModule:l,$$typeof:d}=i;i.default;let c=(0,a.createProxy)(String.raw`C:\Users\User\OneDrive\Desktop\Big Step Consulting\src\components\Header.js#default`);var m=t(7371),f=t(7710),u=t(3870),h=t.n(u);let v=()=>(0,r.jsxs)("footer",{className:`${h().footer} ${h().footerContent}`,children:[r.jsx("div",{className:"container p-4",children:(0,r.jsxs)("div",{className:"row",children:[r.jsx("div",{className:"col-lg-3 col-md-6 mb-4 mb-md-0",children:r.jsx(f.default,{src:"/images/logo.svg",alt:"Logo",width:450,height:200,className:`${h().imgFluid} ${h().footerLogo}`})}),(0,r.jsxs)("div",{className:`col-lg-6 col-md-6 mb-4 mb-md-0 ${h().footerContact}`,children:[r.jsx("p",{className:"mb-0",children:"Phone: (123) 456-7890"}),r.jsx("p",{className:"mb-0",children:"We are open Monday - Friday"}),r.jsx("p",{children:"Time: 9:00 AM - 6:00 PM (UTC+7)"})]}),(0,r.jsxs)("div",{className:`col-lg-3 col-md-6 mb-4 mb-md-0 ${h().footerServices}`,children:[r.jsx("h5",{className:"text-uppercase mb-3",children:"Services"}),(0,r.jsxs)("ul",{className:"list-unstyled mb-0",children:[r.jsx("li",{children:r.jsx(m.default,{href:"/registration",className:h().footerLink,children:"Business Registration"})}),r.jsx("li",{children:r.jsx(m.default,{href:"/accounting",className:h().footerLink,children:"Accounting"})}),r.jsx("li",{children:r.jsx(m.default,{href:"/visa",className:h().footerLink,children:"Visa & Work Permit"})})]})]})]})}),r.jsx("hr",{className:h().footerHr}),r.jsx("div",{className:`text-center p-3 ${h().footerCopyright}`,style:{fontFamily:"Roboto, sans-serif"},children:r.jsx("b",{children:"\xa9 2024 Big Step"})})]});t(7453);let p=(0,a.createProxy)(String.raw`C:\Users\User\OneDrive\Desktop\Big Step Consulting\src\components\MiddleSectionIcons.js`),{__esModule:x,$$typeof:g}=p;p.default;let _=(0,a.createProxy)(String.raw`C:\Users\User\OneDrive\Desktop\Big Step Consulting\src\components\MiddleSectionIcons.js#default`),j={title:"Big Step Consulting",description:"Generated by create next app"};function b({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[r.jsx("head",{}),(0,r.jsxs)("body",{className:n().className,children:[r.jsx(c,{}),e,r.jsx(_,{}),r.jsx(v,{})]})]})}},3881:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var r=t(6621);let o=e=>[{type:"image/x-icon",sizes:"58x58",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};