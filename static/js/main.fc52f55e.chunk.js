(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),u=n.n(r),i=n(3),a=n.n(i),o=(n(13),n(4)),s=n(5),l=n(7),b=n(6),m=function(t){var e=t.increment,n=t.decrement,r=t.handleSubmit,u=t.clear;return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{id:"decrease",onClick:n,children:"-"}),Object(c.jsx)("button",{id:"increase",onClick:e,children:"+"}),Object(c.jsxs)("form",{onSubmit:r,children:[Object(c.jsx)("input",{id:"custom-input",type:"number",name:"customNumber",placeholder:"Custom Amount"}),Object(c.jsx)("input",{id:"submit-button",type:"submit",value:"Submit"})]}),Object(c.jsx)("button",{id:"clear",onClick:u,children:"Clear"})]})},d=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),u=0;u<c;u++)r[u]=arguments[u];return(t=e.call.apply(e,[this].concat(r))).state={count:0},t.increment=function(e){t.setState({count:t.state.count+1})},t.decrement=function(e){t.setState({count:t.state.count-1})},t.clear=function(e){t.setState({count:0})},t.handleSubmit=function(e){e.preventDefault(),t.setState({count:parseInt(e.target.customNumber.value)}),e.target.customNumber.value=""},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"count",children:this.state.count}),Object(c.jsx)(m,{increment:this.increment,decrement:this.decrement,handleSubmit:this.handleSubmit,clear:this.clear})]})}}]),n}(r.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,u=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),u(t),i(t)}))};a.a.render(Object(c.jsx)(u.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),j()}},[[14,1,2]]]);
//# sourceMappingURL=main.fc52f55e.chunk.js.map