(this.webpackJsonpform_hosted=this.webpackJsonpform_hosted||[]).push([[0],{15:function(e,t,s){},16:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(1),l=s.n(c),n=s(4),r=s.n(n),i=(s(15),s(5)),o=s(6),d=s(7),m=s(2),j=s(9),h=s(8),b=(s(16),s(17),function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={fname:"",mname:"",lname:"",gender:null,doj:"",altNum:"",address:"",acadQual:"",examBody:"",yearPass:"",regNum:"",dataReg:"",nameOfBoard:"",practitioner:null,scientificPub:null,titleOfPaper:"",nimaBefore:null,branch:null,reasonDiscontinue:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(d.a)(s,[{key:"handleChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value)),console.log(this.state)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.altNum.altNum;if(""===t)return document.getElementById("messages").innerHTML="**PLEASE FILL MOBILE NUMBER",!1;if(isNaN(t))return document.getElementById("messages").innerHTML="**ENTER NUMERIC VALUES ONLY",!1;if(t.length<10)return document.getElementById("messages").innerHTML="**MOBILE NUMBER MUST HAVE 10 DIGITS ONLY",!1;if(t.length>10)return document.getElementById("messages").innerHTM="**MOBILE NUMBER MUST HAVE 10 DIGITS ONLY",!1;var s=this.state.fname.fname,a=this.state.mname.mname,c=this.state.lname.lname;return isNaN(s)&&isNaN(a)&&isNaN(c)?void console.log(this.state):(document.getElementById("messages").innerHTML="**ENTER CHARACTER VALUES ONLY",!1)}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container-fluid Form__name_container",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-2 col-xs-12",children:Object(a.jsx)("div",{className:"Form__dot"})}),Object(a.jsxs)("div",{className:"col-sm-10 col-xs-12 Form__mainheading",children:[Object(a.jsx)("div",{className:"Form__heading",children:"NIMA Mutual Benefits Scheme Application Form"}),Object(a.jsx)("div",{className:"Form__subheading",children:"Claim form for Fraternity Contribution"}),Object(a.jsx)("div",{className:"Form__address",children:"4140 Parker Rd. Allentown, New Mexico 31134"})]})]}),Object(a.jsxs)("form",{children:[Object(a.jsx)("div",{className:"Form__dmrow",children:"Deceased Member Details"}),Object(a.jsxs)("div",{className:"form-row Form__dm",children:[Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("input",{type:"text",className:"form-control",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",name:"fname",id:"fname",placeholder:" ",required:!0}),Object(a.jsx)("span",{children:"First Name"})]}),Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("input",{type:"text",className:"form-control",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",name:"mname",id:"mname",placeholder:" ",required:!0}),Object(a.jsx)("span",{children:"Middle Name"})]}),Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("input",{type:"text",className:"form-control",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",name:"lname",id:"lname",placeholder:" ",required:!0}),Object(a.jsx)("span",{children:"Last Name"})]}),Object(a.jsx)("div",{className:"col-sm-2 col-xs-12",children:Object(a.jsxs)("select",{className:"form-control",id:"M.B.S.Reg.Number",children:[Object(a.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"M.B.S.Reg.Number"}),Object(a.jsx)("option",{value:"0-10",children:"0-10"}),Object(a.jsx)("option",{value:"11-20",children:"11-20"}),Object(a.jsx)("option",{value:"21-30",children:"21-30"}),Object(a.jsx)("option",{value:"31-40",children:"31-40"}),Object(a.jsx)("option",{value:"41-50",children:"41-50"}),Object(a.jsx)("option",{value:"51-60",children:"51-60"}),Object(a.jsx)("option",{value:"61-70",children:"61-70"})]})}),Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("input",{type:"date",name:"doj",className:"form-control",placeholder:" ",required:!0}),Object(a.jsx)("span",{children:"Date of Joining Scheme"})]}),Object(a.jsx)("div",{className:"col-sm-2 col-xs-12",children:Object(a.jsxs)("select",{className:"form-control",id:"NIMA Local Branch",children:[Object(a.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"NIMA Local Branch"}),Object(a.jsx)("option",{value:"Hyderabad",children:"Hyderabad"}),Object(a.jsx)("option",{value:"Bangalore",children:"Bangalore"}),Object(a.jsx)("option",{value:"Kolhapur",children:"Kolhapur"}),Object(a.jsx)("option",{value:"Surat",children:"Surat"}),Object(a.jsx)("option",{value:"Pune",children:"Pune"})]})})]}),Object(a.jsxs)("div",{className:"form-row Form__dm",children:[Object(a.jsx)("div",{className:"col-sm-2 col-xs-12",children:Object(a.jsxs)("select",{className:"form-control",id:"State",children:[Object(a.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"State"}),Object(a.jsx)("option",{value:"Maharashtra",children:"Maharashtra"}),Object(a.jsx)("option",{value:"Gujarat",children:"Gujarat"}),Object(a.jsx)("option",{value:"Rajasthan",children:"Rajasthan"}),Object(a.jsx)("option",{value:"Uttar Pradesh",children:"Uttar Pradesh"}),Object(a.jsx)("option",{value:"Goa",children:"Goa"})]})}),Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("input",{type:"tel",className:"form-control",placeholder:" ",required:!0}),Object(a.jsx)("span",{children:"L.M. Number"})]})]}),Object(a.jsx)("div",{className:"Form__dmrow",children:"Nominee Details"}),Object(a.jsxs)("div",{className:"form-row Form__dm",children:[Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("input",{type:"text",name:"fname",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",className:"form-control",placeholder:" ",required:!0}),Object(a.jsx)("span",{children:"First Name"})]}),Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("input",{type:"text",name:"mname",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",className:"form-control",placeholder:" ",required:!0}),Object(a.jsx)("span",{children:"Middle Name"})]}),Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("input",{type:"text",name:"lname",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",className:"form-control",placeholder:" ",required:!0}),Object(a.jsx)("span",{children:"Last Name"})]}),Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("input",{type:"text",name:"des-relation",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",className:"form-control",placeholder:" ",required:!0}),Object(a.jsx)("span",{children:"Relation With Deceased"})]}),Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("input",{type:"tel",name:"altNum",title:"*NUMBER SHOULD BE OF 10 DIGITS ONLY",pattern:"[1-9]{1}[0-9]{9}",className:"form-control",placeholder:" ",required:!0}),Object(a.jsx)("span",{children:"Mobile Number"})]}),Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("input",{type:"tel",name:"altNum",title:"*NUMBER SHOULD BE OF 10 DIGITS ONLY",pattern:"[1-9]{1}[0-9]{9}",className:"form-control",placeholder:" ",required:!0}),Object(a.jsx)("span",{children:"Alternate Number"})]})]}),Object(a.jsxs)("div",{className:"form-row Form__dm",children:[Object(a.jsxs)("div",{className:"col-sm-10 col-xs-12",children:[Object(a.jsx)("textarea",{name:"address",className:"form-control address","aria-label":"With textarea",placeholder:" "}),Object(a.jsx)("span",{children:"Address"})]}),Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("label",{for:"pincode",className:"Form__pincode",children:"PIN code:"}),Object(a.jsx)("input",{name:"pinCode",type:"text",title:"*PIN CODE SHOULD BE OF 6 DIGITS",pattern:"[0-9]{6}",maxlength:"6",minlength:"6",className:"form-control",required:!0})]})]}),Object(a.jsx)("div",{className:"Form__dmrow",children:"Claimant Details"}),Object(a.jsxs)("div",{className:"form-row Form__dm",children:[Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("input",{type:"text",className:"form-control",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",name:"fname",id:"fname",placeholder:" ",required:!0}),Object(a.jsx)("span",{children:"First Name"})]}),Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("input",{type:"text",className:"form-control",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",name:"mname",id:"mname",placeholder:" ",required:!0}),Object(a.jsx)("span",{children:"Middle Name"})]}),Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("input",{type:"text",className:"form-control",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",name:"lname",id:"lname",placeholder:" ",required:!0}),Object(a.jsx)("span",{children:"Last Name"})]}),Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("input",{type:"text",name:"des-relation",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",className:"form-control",placeholder:" ",required:!0}),Object(a.jsx)("span",{children:"Relation With Deceased"})]}),Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("input",{type:"tel",name:"altNum",title:"*NUMBER SHOULD BE OF 10 DIGITS ONLY",pattern:"[1-9]{1}[0-9]{9}",className:"form-control",placeholder:" ",required:!0}),Object(a.jsx)("span",{children:"Mobile Number"})]}),Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("input",{type:"tel",name:"altNum",title:"*NUMBER SHOULD BE OF 10 DIGITS ONLY",pattern:"[1-9]{1}[0-9]{9}",className:"form-control",placeholder:" ",required:!0}),Object(a.jsx)("span",{children:"Alternate Number"})]})]}),Object(a.jsxs)("div",{className:"form-row Form__dm",children:[Object(a.jsxs)("div",{className:"col-sm-10 col-xs-12",children:[Object(a.jsx)("textarea",{className:"form-control address",name:"address","aria-label":"With textarea",placeholder:" "}),Object(a.jsx)("span",{children:"Address"})]}),Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("label",{for:"pincode",className:"Form__pincode",children:"PIN code:"}),Object(a.jsx)("input",{type:"text",name:"pinCode",title:"* PIN CODE SHOULD OF 6 DIGITS",pattern:"[0-9]{6}",maxlength:"6",minlength:"6",className:"form-control"})]})]}),Object(a.jsxs)("div",{className:"form-row Form__dm",children:[Object(a.jsx)("div",{className:"col-sm-2 col-xs-12",children:Object(a.jsxs)("select",{className:"form-control",id:"Town/District",children:[Object(a.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Town/District"}),Object(a.jsx)("option",{value:"Chennai",children:"Chennai"}),Object(a.jsx)("option",{value:"Mumbai",children:"Mumbai"}),Object(a.jsx)("option",{value:"Pune",children:"Pune"}),Object(a.jsx)("option",{value:"Kolkata",children:"Kolkata"}),Object(a.jsx)("option",{value:"Ahemdabad",children:"Ahemdabad"}),Object(a.jsx)("option",{value:"Jaipur",children:"Jaipur"}),Object(a.jsx)("option",{value:"Bhopal",children:"Bhopal"}),Object(a.jsx)("option",{value:"Chandigarh",children:"Chandigarh"})]})}),Object(a.jsxs)("div",{className:"col-sm-2 col-xs-12",children:[Object(a.jsx)("input",{type:"text",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",className:"form-control",placeholder:" ",required:!0}),Object(a.jsx)("span",{children:"State"})]})]}),Object(a.jsxs)("div",{className:"Form__form-submit",children:[Object(a.jsx)("button",{className:"btn Form__ViewButton",children:"View form"}),Object(a.jsx)("button",{type:"submit",className:"btn btn-success Form__SubmitButton",children:"Submit Form"})]})]})]})}}]),s}(l.a.Component));r.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.063a4ffd.chunk.js.map