"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[830],{9830:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var a=n(7111),s=n(9434),r=n(3634),c="ContactForm_label__-cVXI",l="ContactForm_input__Bl93P",i="ContactForm_addContactForm__RJQC6",o=n(184),u=function(){var e=(0,s.I0)();return(0,o.jsxs)("form",{className:i,onSubmit:function(t){t.preventDefault();var n={name:t.target.name.value.trim(),number:t.target.number.value.trim()};e((0,r.uK)(n))},children:[(0,o.jsxs)("label",{className:c,children:["Name:",(0,o.jsx)("input",{type:"text",name:"name",className:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,o.jsxs)("label",{className:c,children:["Phone:",(0,o.jsx)("input",{type:"tel",name:"number",className:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,o.jsx)("button",{type:"submit",children:"Add contact!"})]})},d=n(6907),m="ListItem_liFlex__P+3M5",h="ListItem_deleteButton__oC0i+",_=function(e){var t=e.id,n=e.name,a=e.number,c=(0,s.I0)();return(0,o.jsxs)("li",{className:m,children:[n," : ",a,(0,o.jsx)("button",{className:h,type:"button",onClick:function(){return c((0,r.GK)(t))},children:"Delete"})]})},b=n(2791),p=n(6351),x="ContactsList_list__mmE3Y",f=function(){var e=(0,s.v9)((function(e){return e.contacts})).contactsArray,t=(0,s.v9)(p.AD),n=(0,s.I0)();return(0,b.useEffect)((function(){n((0,r.yF)())}),[n]),(0,o.jsxs)("ul",{className:x,children:[(0,o.jsx)("h2",{children:"My contacts: "}),e.filter((function(e){return e.name.toLowerCase().includes(t)})).map((function(e){return(0,o.jsx)(_,{id:e.id,name:e.name,number:e.number},e.id)})),0===e.length&&(0,o.jsx)("p",{children:"You have no contacts!"})]})},j=n(1634),v={contactsHead:"Filter_contactsHead__lztdd",labelFilter:"Filter_labelFilter__7SBy1"},C=function(){var e=(0,s.I0)(),t=(0,s.v9)(p.AD);return(0,o.jsxs)("div",{className:v.contactsHead,children:[(0,o.jsx)(f,{}),(0,o.jsxs)("label",{className:v.labelFilter,children:["Find contacts by name:",(0,o.jsx)("input",{type:"text",name:"filter",className:v.input,title:"Find the name!",value:t,onChange:function(t){e((0,j.Tv)(t.target.value.toLowerCase().trim()))}})]})]})},F=function(){return(0,o.jsxs)(a.$,{children:[(0,o.jsx)(d.ql,{children:(0,o.jsx)("title",{children:"Contacts"})}),(0,o.jsx)(u,{}),(0,o.jsx)(C,{})]})}}}]);
//# sourceMappingURL=830.394c5e55.chunk.js.map