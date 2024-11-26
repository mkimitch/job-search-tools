"use strict";(self.webpackChunkjob_search_tools=self.webpackChunkjob_search_tools||[]).push([[462],{462:(e,r,t)=>{t.r(r),t.d(r,{default:()=>h});var o=t(848),n=t(72),a=t.n(n),i=t(825),l=t.n(i),c=t(659),p=t.n(c),u=t(56),s=t.n(u),A=t(159),m=t.n(A),d=t(113),y=t.n(d),f=t(542),b={};b.styleTagTransform=y(),b.setAttributes=s(),b.insert=p().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=m(),a()(f.A,b),f.A&&f.A.locals&&f.A.locals;var g=t(540);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function C(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=Array(r);t<r;t++)o[t]=e[t];return o}const h=function(){var e,r,t=(e=(0,g.useState)({companyName:"",hiringManagerName:"",jobTitle:"",yourExperience:localStorage.getItem("yourExperience")||"",yourField:localStorage.getItem("yourField")||"",yourName:localStorage.getItem("yourName")||""}),r=2,function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,n,a,i,l=[],c=!0,p=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;c=!1}else for(;!(c=(o=a.call(t)).done)&&(l.push(o.value),l.length!==r);c=!0);}catch(e){p=!0,n=e}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(p)throw n}}return l}}(e,r)||function(e,r){if(e){if("string"==typeof e)return C(e,r);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?C(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=t[0],a=t[1];(0,g.useEffect)((function(){localStorage.setItem("yourExperience",n.yourExperience),localStorage.setItem("yourField",n.yourField),localStorage.setItem("yourName",n.yourName)}),[n.yourExperience,n.yourField,n.yourName]);var i=function(e){var r=e.target,t=r.name,o=r.value;a(Object.assign(Object.assign({},n),function(e,r,t){return(r=function(e){var r=function(e){if("object"!=x(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!=x(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==x(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}({},t,o)))},l=function(){return"Dear ".concat(n.hiringManagerName,",\n\nI hope this message finds you well. My name is ").concat(n.yourName,", and I recently applied for the ").concat(n.jobTitle," position at ").concat(n.companyName,". I'm reaching out to express my enthusiasm for the role and to introduce myself briefly.\n\nWith over ").concat(n.yourExperience," years of experience in ").concat(n.yourField,", I believe I would be a strong contributor to your team. I'm particularly excited about the opportunity to work at ").concat(n.companyName," and contribute to your ongoing success.\n\nI would greatly appreciate any updates you may have on my application, or if there are any additional details you'd need from me. I look forward to the opportunity to contribute to ").concat(n.companyName," and would be happy to discuss my application further at your convenience.\n\nThank you for your time and consideration.\n\nBest regards,\n").concat(n.yourName)};return(0,o.jsxs)("div",{className:"App",children:[(0,o.jsx)("h2",{children:"Generate Job Application Follow-Up"}),(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{children:"Hiring Manager Name:"}),(0,o.jsx)("input",{type:"text",name:"hiringManagerName",value:n.hiringManagerName,onChange:i})]}),(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{children:"Company Name:"}),(0,o.jsx)("input",{type:"text",name:"companyName",value:n.companyName,onChange:i})]}),(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{children:"Job Title:"}),(0,o.jsx)("input",{type:"text",name:"jobTitle",value:n.jobTitle,onChange:i})]}),(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{children:"Your Name:"}),(0,o.jsx)("input",{type:"text",name:"yourName",value:n.yourName,onChange:i})]}),(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{children:"Your Experience (in years):"}),(0,o.jsx)("input",{type:"number",name:"yourExperience",value:n.yourExperience,onChange:i})]}),(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{children:"Your Field:"}),(0,o.jsx)("input",{type:"text",name:"yourField",value:n.yourField,onChange:i})]}),(0,o.jsx)("button",{onClick:function(){return navigator.clipboard.writeText(l())},children:"Generate & Copy Message"}),(0,o.jsxs)("div",{className:"output",children:[(0,o.jsx)("h3",{children:"Generated Message:"}),(0,o.jsx)("pre",{children:l()})]})]})}},542:(e,r,t)=>{t.d(r,{A:()=>l});var o=t(354),n=t.n(o),a=t(314),i=t.n(a)()(n());i.push([e.id,'@keyframes ellipsis{0%{content:""}25%{content:"."}50%{content:".."}75%{content:"..."}}.App{font-family:Arial,sans-serif;margin:20px auto;max-width:600px}.App .form-group{margin-bottom:15px}.App label{display:block;font-weight:bold;margin-bottom:5px}.App input{box-sizing:border-box;padding:8px;width:100%}.App button{cursor:pointer;font-size:16px;padding:10px 15px}.App .output{background-color:#f9f9f9;border:1px solid #ccc;margin-top:20px;padding:10px;word-wrap:wrap}.App .output pre{text-wrap-mode:wrap}',"",{version:3,sources:["webpack://./src/styles/mixins.scss","webpack://./src/pages/Home/Home.scss"],names:[],mappings:"AAmDA,oBACC,GACC,UAAA,CAGD,IACC,WAAA,CAGD,IACC,YAAA,CAGD,IACC,aAAA,CAAA,CChEF,KACC,4BAAA,CACA,gBAAA,CACA,eAAA,CAEA,iBACC,kBAAA,CAGD,WACC,aAAA,CACA,gBAAA,CACA,iBAAA,CAGD,WACC,qBAAA,CACA,WAAA,CACA,UAAA,CAGD,YACC,cAAA,CACA,cAAA,CACA,iBAAA,CAGD,aACC,wBAAA,CACA,qBAAA,CACA,eAAA,CACA,YAAA,CACA,cAAA,CAEA,iBACC,mBAAA",sourcesContent:[null,'@keyframes ellipsis{0%{content:""}25%{content:"."}50%{content:".."}75%{content:"..."}}.App{font-family:Arial,sans-serif;margin:20px auto;max-width:600px}.App .form-group{margin-bottom:15px}.App label{display:block;font-weight:bold;margin-bottom:5px}.App input{box-sizing:border-box;padding:8px;width:100%}.App button{cursor:pointer;font-size:16px;padding:10px 15px}.App .output{background-color:#f9f9f9;border:1px solid #ccc;margin-top:20px;padding:10px;word-wrap:wrap}.App .output pre{text-wrap-mode:wrap}'],sourceRoot:""}]);const l=i}}]);
//# sourceMappingURL=462.bundle.js.map