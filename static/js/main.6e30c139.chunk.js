(this["webpackJsonpreact-final-project"]=this["webpackJsonpreact-final-project"]||[]).push([[0],{125:function(e,t,n){},126:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n(14),i=n.n(c),s=(n(125),n(126),n(10)),o=n.n(s),j=n(17),l=n(83);n(157);l.a.initializeApp({apiKey:"AIzaSyAcrC8WFMcfXI8NVwjNDqL-WzqSmpttCeA",authDomain:"react-final-project-eba09.firebaseapp.com",databaseURL:"https://react-final-project-eba09-default-rtdb.firebaseio.com",projectId:"react-final-project-eba09",storageBucket:"react-final-project-eba09.appspot.com",messagingSenderId:"446437310002",appId:"1:446437310002:web:3dbcf986d210e41d16062b"});var b=l.a,d=n(101),u=n.n(d),O=b.firestore(),x=function(){var e=Object(j.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection(t).get();case 2:return n=e.sent,a=[],r="",n.forEach((function(e){r={data:e.data(),id:e.id},a.push(r)})),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=O.collection(t).doc(n),e.next=3,a.get();case 3:if(!(r=e.sent)){e.next=6;break}return e.abrupt("return",r.data());case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(j.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection(t).doc(n).delete();case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f={sendDataToServer:function(){var e=Object(j.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection(t).add(n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getDataFromServer:x,getAllItems:function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateServer:function(e,t,n){O.collection(e).doc(t).set(n)},deleteDataFromServer:h,getSpecificDocFromServer:m},v=n(4),p=Object(r.createContext)(),g=function(e){var t=Object(r.useState)(""),n=Object(v.a)(t,2),c=n[0],i=n[1];return Object(a.jsx)(p.Provider,{value:[c,i],children:e.children})},C=Object(r.createContext)(),S=function(e){var t=Object(r.useState)(""),n=Object(v.a)(t,2),c=n[0],i=n[1];return Object(a.jsx)(C.Provider,{value:[c,i],children:e.children})},y=Object(r.createContext)(),w=function(e){var t=Object(r.useState)(""),n=Object(v.a)(t,2),c=n[0],i=n[1];return Object(a.jsx)(y.Provider,{value:[c,i],children:e.children})},k=Object(r.createContext)(),I=function(e){var t=Object(r.useState)(""),n=Object(v.a)(t,2),c=n[0],i=n[1];return Object(a.jsx)(k.Provider,{value:[c,i],children:e.children})},M=Object(r.createContext)(),D=function(e){var t=Object(r.useState)(!1),n=Object(v.a)(t,2),c=n[0],i=n[1];return Object(a.jsx)(M.Provider,{value:[c,i],children:e.children})},N=n(86),T=n(192),z=n(196),U=n(190),A=n(203),E=n(208),q=n(206),W=n(193),G=n(187),F=Object(G.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:220},paper:{padding:e.spacing(3),borderColor:"black",borderStyle:"solid",borderWidth:"2px"}}}));var L=function(e){var t=F(),n=Object(r.useContext)(k),c=Object(v.a)(n,2),i=c[0],s=c[1],o=Object(r.useState)(""),j=Object(v.a)(o,2),l=j[0],b=j[1],d=Object(r.useContext)(p),u=Object(v.a)(d,2),O=u[0],x=(u[1],Object(r.useState)(!1)),m=Object(v.a)(x,2),h=m[0],g=m[1],C=Object(r.useState)(),S=Object(v.a)(C,2),y=S[0],w=S[1],I=Object(r.useState)([]),M=Object(v.a)(I,2),D=M[0],G=M[1],L=Object(r.useState)("2015-08-09"),P=Object(v.a)(L,2),B=P[0],R=P[1];return Object(r.useEffect)((function(){var t=[],n=i.find((function(t){return t.data.MemberId==e.memberId}));n&&(n.data.Movies.forEach((function(e){var n={movieName:O.find((function(t){return t.id==e.MovieId})).data.Title,date:e.DateWatched};t.push(n)})),b(t))}),[]),Object(a.jsx)("div",{children:Object(a.jsxs)(U.a,{container:!0,direction:"column",children:[Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(N.a,{variant:"h6",gutterBottom:!0,align:"center",children:"Movies Watched"})}),Object(a.jsx)(U.a,{item:!0,children:h?Object(a.jsx)(T.a,{style:{textTransform:"none"},variant:"contained",onClick:function(){g(!1)},children:"Close"}):Object(a.jsx)(T.a,{style:{textTransform:"none"},variant:"contained",onClick:function(){g(!0);var e=O.filter((function(e){return e.data.Title!=l.movieName}));G(e)},children:"Subscribe to a new movie"})}),h&&Object(a.jsxs)("div",{className:t.paper,children:[Object(a.jsx)(U.a,{item:!0,children:"Add a New Movie "}),Object(a.jsxs)(U.a,{item:!0,container:!0,direction:"row",children:[Object(a.jsx)(U.a,{item:!0,children:Object(a.jsxs)(W.a,{className:t.formControl,children:[Object(a.jsx)(q.a,{children:"Select a Movie"}),Object(a.jsx)(A.a,{onChange:function(e){w(e.target.value)},children:D.map((function(e,t){return Object(a.jsx)(E.a,{value:e,children:e.data.Title},t)}))})]})}),Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)("input",{style:{width:"150px",height:"50px"},type:"date","data-date":"","data-date-format":"DD/MM/YYYY",value:B,onChange:function(e){return R(e.target.value)}})})]}),Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(T.a,{style:{textTransform:"none"},variant:"contained",onClick:function(){var t={MovieId:y.id,DateWatched:B},n=i,a=n.findIndex((function(t){return t.data.MemberId==e.memberId}));if(a>=0){var r=n[a].data.Movies;r.push(t);var c={id:n[a].id,data:{MemberId:e.memberId,Movies:r}};n[a]=c,s(n);var o={MemberId:e.memberId,Movies:r};f.updateServer("Subscriptions",n[a].id,o)}},children:"Subscribe"})})]}),Object(a.jsx)(U.a,{item:!0,container:!0,direction:"column",children:Object(a.jsx)("ul",{children:l&&l.map((function(e,t){return Object(a.jsx)(U.a,{item:!0,children:Object(a.jsxs)("li",{children:[Object(a.jsx)(z.a,{href:"#",children:e.movieName}),", ",e.date]},t)})}))})})]})})},P=n(13),B=n(45),R=(n(75),n(65)),Y=n.n(R),V=n(64),H=n.n(V),J=(n(37),Object(G.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),borderColor:"black",borderStyle:"solid",borderWidth:"2px"}}})));var K=function(e){var t=Object(r.useContext)(C),n=Object(v.a)(t,2),c=n[0],i=n[1],s=J();return Object(a.jsxs)(U.a,{container:!0,direction:"column",alignItems:"center",children:[Object(a.jsx)(U.a,{item:!0,children:Object(a.jsxs)(N.a,{variant:"h5",gutterBottom:!0,align:"center",children:[e.memberDetails.data.Name,Object(a.jsx)("br",{})]})}),Object(a.jsx)(U.a,{item:!0,children:Object(a.jsxs)(N.a,{variant:"h6",gutterBottom:!0,align:"left",children:["Email : ",e.memberDetails.data.Email,Object(a.jsx)("br",{}),"City : ",e.memberDetails.data.City]})}),Object(a.jsxs)(U.a,{item:!0,container:!0,direction:"row",justify:"center",children:[Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(P.b,{to:"/Subscriptions/Edit/".concat(e.memberDetails.id),style:{textDecoration:"none"},children:Object(a.jsx)(T.a,{style:{textTransform:"none"},startIcon:Object(a.jsx)(H.a,{}),size:"large",variant:"contained"})})}),Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(T.a,{style:{textTransform:"none"},variant:"contained",size:"large",startIcon:Object(a.jsx)(Y.a,{}),onClick:function(){Object(B.confirmAlert)({title:"Are you sure you want to delete Member:",message:e.memberDetails.data.Name,buttons:[{label:"Yes",onClick:function(){return function(){var t=c.filter((function(t){return t.id!=e.memberDetails.id}));i(t),f.deleteDataFromServer("Members",e.memberDetails.id)}()}},{label:"No"}]})}})})]}),Object(a.jsx)("br",{}),Object(a.jsx)(U.a,{item:!0,className:s.paper,children:Object(a.jsx)(L,{memberId:e.memberDetails.id})}),Object(a.jsx)("br",{})]})},X=n(205),Q=n(32),Z=n.n(Q),$=n(66),_=n.n($),ee=n(197);var te=function(e){var t=Object(r.useState)(""),n=Object(v.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)(""),l=Object(v.a)(s,2),b=l[0],d=l[1],u=Object(r.useState)(""),O=Object(v.a)(u,2),x=O[0],m=O[1],h=Object(r.useContext)(C),p=Object(v.a)(h,2),g=p[0],S=p[1],y=Object(r.useState)(0),w=Object(v.a)(y,2),k=w[0],I=w[1],M=Object(r.useState)(!1),D=Object(v.a)(M,2),N=(D[0],D[1]),z=function(){var t=Object(j.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={Name:c,Email:b,City:x},t.next=3,f.sendDataToServer("Members",n);case 3:a=t.sent,I(a.id),e.clickedAllMembers();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),U=Object(r.useRef)(!0);return Object(r.useEffect)((function(){if(U.current)U.current=!1;else{var e={id:k,data:{Name:c,Email:b,City:x}},t=g;t.push(e),S(t),N(!0)}}),[k]),Object(a.jsxs)("div",{children:[Object(a.jsx)("br",{}),Object(a.jsxs)(ee.a,{children:["Name :  ",Object(a.jsx)(X.a,{required:!0,label:"Required",variant:"outlined",size:"small",onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("br",{}),"Email : \xa0",Object(a.jsx)(X.a,{required:!0,label:"Required",variant:"outlined",size:"small",onChange:function(e){return d(e.target.value)}}),Object(a.jsx)("br",{}),"City  : \xa0\xa0\xa0",Object(a.jsx)(X.a,{required:!0,label:"Required",variant:"outlined",size:"small",onChange:function(e){return m(e.target.value)}}),Object(a.jsx)("br",{})]}),Object(a.jsx)("br",{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(a.jsx)(T.a,{style:{textTransform:"none"},startIcon:Object(a.jsx)(_.a,{}),variant:"contained",size:"large",onClick:z}),Object(a.jsx)(T.a,{style:{textTransform:"none"},startIcon:Object(a.jsx)(Z.a,{}),variant:"contained",size:"large",onClick:function(){return e.clickedAllMembers()}})]})},ne=Object(G.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(3),borderColor:"black",borderStyle:"solid",borderWidth:"2px"}}}));var ae=function(){var e=ne(),t=Object(r.useContext)(C),n=Object(v.a)(t,2),c=n[0],i=(n[1],Object(r.useState)(!0)),s=Object(v.a)(i,2),o=s[0],j=s[1],l=Object(r.useState)(!1),b=Object(v.a)(l,2),d=b[0],u=b[1],O=Object(r.useState)("primary"),x=Object(v.a)(O,2),m=x[0],h=x[1],f=Object(r.useState)(""),p=Object(v.a)(f,2),g=p[0],S=p[1],y=function(){S(""),h("primary"),j(!0),u(!1)};return Object(a.jsx)("div",{children:Object(a.jsxs)(U.a,{container:!0,direction:"column",alignItems:"center",children:[Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(N.a,{variant:"h5",gutterBottom:!0,align:"center",children:"Subscriptions"})}),Object(a.jsxs)(U.a,{item:!0,container:!0,direction:"row",justify:"center",children:[Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(T.a,{style:{textTransform:"none"},variant:"contained",color:m,onClick:y,children:"All Members"})}),Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(T.a,{style:{textTransform:"none"},variant:"contained",color:g,onClick:function(){h(""),S("primary"),j(!1),u(!0)},children:"Add Member"})})]}),Object(a.jsxs)(U.a,{item:!0,container:!0,direction:"column",alignItems:"center",children:[o&&c&&c.map((function(t,n){return Object(a.jsx)(U.a,{item:!0,className:e.paper,children:Object(a.jsx)(K,{memberDetails:t})},n)})),d&&Object(a.jsx)("div",{className:e.paper,children:Object(a.jsx)(te,{clickedAllMembers:y})})]})]})})};var re=function(){var e=Object(r.useState)([{name:"Avi Cohen",date:"12/11/1998"}]),t=Object(v.a)(e,2),n=t[0];return t[1],Object(a.jsxs)("div",{children:[Object(a.jsx)(N.a,{variant:"h5",variantMapping:"h1",gutterBottom:!0,align:"center",children:"Subscriptions watched"}),Object(a.jsx)("ul",{children:n.map((function(e,t){return Object(a.jsxs)("li",{children:[Object(a.jsx)(z.a,{href:"#",children:e.name}),", ",e.date]},t)}))})]})},ce=Object(G.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(1),borderColor:"black",borderStyle:"solid",borderWidth:"2px"}}}));var ie=function(e){var t=ce(),n=Object(r.useContext)(p),c=Object(v.a)(n,2),i=c[0],s=c[1];return Object(a.jsxs)(U.a,{container:!0,direction:"column",alignItems:"center",children:[Object(a.jsxs)(U.a,{item:!0,children:[Object(a.jsxs)(N.a,{variant:"h4",gutterBottom:!0,align:"center",children:[e.movieDetails.data.Title," , ",e.movieDetails.data.date]}),Object(a.jsxs)(N.a,{variant:"h6",gutterBottom:!0,align:"left",children:["Genres: ",e.movieDetails.data.Genres.join(", ")]})]}),Object(a.jsx)(U.a,{item:!0}),Object(a.jsxs)(U.a,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-start",children:[Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)("img",{src:e.movieDetails.data.ImageUrl,width:"200",height:"300"})}),Object(a.jsx)(U.a,{item:!0,className:t.paper,children:Object(a.jsx)(re,{})})]}),Object(a.jsxs)(U.a,{item:!0,children:[Object(a.jsx)(P.b,{to:"/Movies/Edit/".concat(e.movieDetails.id),style:{textDecoration:"none"},children:Object(a.jsx)(T.a,{style:{textTransform:"none"},size:"large",startIcon:Object(a.jsx)(H.a,{}),variant:"contained"})}),Object(a.jsx)(T.a,{style:{textTransform:"none"},size:"large",variant:"contained",startIcon:Object(a.jsx)(Y.a,{}),onClick:function(){Object(B.confirmAlert)({title:"Are you sure you want to delete the movie:",message:e.movieDetails.data.Title,buttons:[{label:"Yes",onClick:function(){return function(){console.log("in delete");var t=i.filter((function(t){return t.id!=e.movieDetails.id}));s(t),f.deleteDataFromServer("Movies",e.movieDetails.id)}()}},{label:"No"}]})}})]})]})},se=function(e){var t=Object(r.useState)(""),n=Object(v.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)(""),l=Object(v.a)(s,2),b=l[0],d=l[1],u=Object(r.useState)(""),O=Object(v.a)(u,2),x=O[0],m=O[1],h=Object(r.useState)(),g=Object(v.a)(h,2),C=g[0],S=g[1],y=Object(r.useContext)(p),w=Object(v.a)(y,2),k=w[0],I=w[1],M=Object(r.useState)(0),D=Object(v.a)(M,2),N=D[0],z=D[1],U=Object(r.useState)(!1),A=Object(v.a)(U,2),E=(A[0],A[1]),q=function(){var t=Object(j.a)(o.a.mark((function t(){var n,a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=b.split(" "),a={Title:c,date:C,ImageUrl:x,Genres:n},t.next=4,f.sendDataToServer("Movies",a);case 4:r=t.sent,z(r.id),e.clickedAllMovies();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),W=Object(r.useRef)(!0);return Object(r.useEffect)((function(){if(console.log("useEffect - 1"),W.current)console.log("useEffect - 2"),W.current=!1;else{console.log("useEffect - 3");var e=b.split(" "),t={id:N,data:{Title:c,date:C,ImageUrl:x,Genres:e}},n=k;n.push(t),I(n),E(!0)}}),[N]),Object(a.jsxs)("div",{children:[Object(a.jsx)("br",{}),Object(a.jsxs)(ee.a,{children:["Name :  \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(a.jsx)(X.a,{required:!0,label:"Required",variant:"outlined",size:"small",onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("br",{}),"Genres : \xa0\xa0\xa0\xa0\xa0\xa0",Object(a.jsx)(X.a,{variant:"outlined",size:"small",onChange:function(e){return d(e.target.value)}}),Object(a.jsx)("br",{}),"Image URL : ",Object(a.jsx)(X.a,{variant:"outlined",size:"small",onChange:function(e){return m(e.target.value)}}),Object(a.jsx)("br",{}),"Premierd : \xa0\xa0\xa0",Object(a.jsx)(X.a,{variant:"outlined",size:"small",onChange:function(e){return S(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(a.jsx)(T.a,{style:{textTransform:"none"},startIcon:Object(a.jsx)(_.a,{}),size:"large",variant:"contained",onClick:q}),Object(a.jsx)(T.a,{style:{textTransform:"none"},startIcon:Object(a.jsx)(Z.a,{}),variant:"contained",size:"large",onClick:function(){return e.clickedAllMovies()}})]})},oe=n(104),je=n.n(oe),le=n(198),be=n(199),de=Object(G.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(3),borderColor:"black",borderStyle:"solid",borderWidth:"2px"}}}));var ue=function(){var e=Object(r.useState)("primary"),t=Object(v.a)(e,2),n=t[0],c=t[1],i=de(),s=Object(r.useState)(!0),o=Object(v.a)(s,2),j=o[0],l=o[1],b=Object(r.useState)(""),d=Object(v.a)(b,2),u=d[0],O=d[1],x=Object(r.useState)(""),m=Object(v.a)(x,2),h=m[0],f=m[1],g=Object(r.useContext)(p),C=Object(v.a)(g,2),S=C[0],y=(C[1],Object(r.useState)(!0)),w=Object(v.a)(y,2),k=w[0],I=w[1],M=Object(r.useState)(!1),D=Object(v.a)(M,2),z=D[0],A=D[1],E=Object(r.useState)(),q=Object(v.a)(E,2),W=q[0],G=q[1],F=function(){var e;console.log("page"),e=""!=h?S.filter((function(e){return e.data.Title.toUpperCase().startsWith(h)})):S,G(e)};Object(r.useEffect)((function(){F()}),[h,S]);var L=function(){f(""),O(""),c("primary"),l(!0),I(!0),A(!1),F()};return Object(a.jsx)("div",{children:Object(a.jsxs)(U.a,{container:!0,direction:"column",alignItems:"center",children:[Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(N.a,{variant:"h5",gutterBottom:!0,align:"center",children:"Movies"})}),Object(a.jsxs)(U.a,{item:!0,container:!0,direction:"row",justify:"center",children:[Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(T.a,{style:{textTransform:"none"},variant:"contained",color:n,onClick:L,children:"All Movies"})}),Object(a.jsxs)(U.a,{item:!0,children:[Object(a.jsx)(T.a,{style:{textTransform:"none"},variant:"contained",color:u,onClick:function(){c(""),O("primary"),l(!1),I(!1),A(!0)},children:"Add Movie"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]}),Object(a.jsx)(U.a,{item:!0,children:j?Object(a.jsxs)("label",{children:[Object(a.jsx)(X.a,{placeholder:"e.g., Titanic",onChange:function(e){f(e.target.value.toUpperCase())},InputProps:{endAdornment:Object(a.jsx)(le.a,{position:"end",children:Object(a.jsx)(be.a,{children:Object(a.jsx)(je.a,{})})})},variant:"outlined",style:{width:205},size:"small"}),Object(a.jsx)("br",{})]}):""})]}),Object(a.jsxs)(U.a,{item:!0,container:!0,direction:"column",alignItems:"center",children:[k&&W&&W.map((function(e,t){return Object(a.jsxs)("div",{children:[Object(a.jsx)(U.a,{item:!0,className:i.paper,children:Object(a.jsx)(ie,{movieDetails:e})},t),Object(a.jsx)("br",{})]})})),z&&Object(a.jsx)("div",{className:i.paper,children:Object(a.jsx)(se,{clickedAllMovies:L})})]})]})})},Oe=n(67),xe=n.n(Oe),me=Object(G.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(3),borderColor:"black",borderStyle:"solid",borderWidth:"2px"}}}));var he=function(e){var t=me(),n=Object(r.useState)(""),c=Object(v.a)(n,2),i=c[0],s=c[1],o=Object(r.useState)(""),j=Object(v.a)(o,2),l=j[0],b=j[1],d=Object(r.useState)(),u=Object(v.a)(d,2),O=u[0],x=u[1],m=Object(r.useContext)(p),h=Object(v.a)(m,2),g=h[0],C=h[1],S=Object(r.useState)(""),y=Object(v.a)(S,2),w=y[0],k=y[1];return Object(r.useEffect)((function(){!function(){var t=g.findIndex((function(t){return t.id==e.match.params.id}));t>=0&&(console.log(g[t]),k(g[t]),s(g[t].data.Genres),b(g[t].data.ImageUrl),x(g[t].data.date))}()}),[]),Object(a.jsx)("div",{children:Object(a.jsx)(U.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:Object(a.jsxs)(ee.a,{className:t.paper,children:[Object(a.jsxs)("h2",{children:["Edit Movie : ",w&&w.data.Title]}),"Name : ",Object(a.jsx)(X.a,{variant:"outlined",value:w&&w.data.Title}),Object(a.jsx)("br",{}),"Genres : ",Object(a.jsx)(X.a,{variant:"outlined",placeholder:w&&w.data.Genres,onChange:function(e){var t=e.target.value;t=t.split(" "),s(t)}}),Object(a.jsx)("br",{}),"Image URL :  ",Object(a.jsx)(X.a,{variant:"outlined",placeholder:w&&w.data.ImageUrl,onChange:function(e){return b(e.target.value)}}),Object(a.jsx)("br",{}),"Premierd :  ",Object(a.jsx)(X.a,{variant:"outlined",placeholder:w&&w.data.date,onChange:function(e){return x(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)(ee.a,{row:!0,children:[Object(a.jsx)(P.b,{style:{textDecoration:"none"},to:"/Movies",children:Object(a.jsx)(T.a,{style:{textTransform:"none"},startIcon:Object(a.jsx)(xe.a,{}),variant:"contained",size:"large",onClick:function(){var t={id:e.match.params.id,data:{Title:w.data.Title,date:O,ImageUrl:l,Genres:i}},n={Title:w.data.Title,date:O,ImageUrl:l,Genres:i},a=g,r=g.findIndex((function(e){return e.id==t.id}));r>=0&&(a[r]=t,C(a),f.updateServer("Movies",t.id,n))}})}),Object(a.jsx)(P.b,{style:{textDecoration:"none"},to:"/Movies",children:Object(a.jsx)(T.a,{style:{textTransform:"none"},startIcon:Object(a.jsx)(Z.a,{}),size:"large",variant:"contained"})})]})]})})})},fe=Object(G.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(3),borderColor:"black",borderStyle:"solid",borderWidth:"2px"}}}));var ve=function(e){var t=fe(),n=Object(r.useContext)(C),c=Object(v.a)(n,2),i=c[0],s=c[1],o=Object(r.useState)(""),j=Object(v.a)(o,2),l=j[0],b=j[1],d=Object(r.useState)(""),u=Object(v.a)(d,2),O=u[0],x=u[1],m=Object(r.useState)(""),h=Object(v.a)(m,2),p=h[0],g=h[1],S=Object(r.useState)(""),y=Object(v.a)(S,2),w=(y[0],y[1]);return Object(r.useEffect)((function(){!function(){var t=i.findIndex((function(t){return t.id==e.match.params.id}));t>=0&&(w(i[t]),b(i[t].data.Name),x(i[t].data.Email),g(i[t].data.City))}()}),[]),Object(a.jsx)("div",{children:Object(a.jsx)(U.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:Object(a.jsxs)(ee.a,{className:t.paper,children:[Object(a.jsxs)("h3",{children:["Edit Member : ",l]}),"Name :  ",Object(a.jsx)(X.a,{variant:"outlined",placeholder:l,onChange:function(e){return b(e.target.value)}}),Object(a.jsx)("br",{}),"Email : \xa0",Object(a.jsx)(X.a,{variant:"outlined",placeholder:O,onChange:function(e){return x(e.target.value)}}),Object(a.jsx)("br",{}),"City : \xa0\xa0\xa0",Object(a.jsx)(X.a,{variant:"outlined",placeholder:p,onChange:function(e){return g(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)(ee.a,{row:!0,children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(a.jsx)(P.b,{style:{textDecoration:"none"},to:"/Subscriptions",children:Object(a.jsx)(T.a,{style:{textTransform:"none"},startIcon:Object(a.jsx)(xe.a,{}),variant:"contained",size:"large",onClick:function(){var t={id:e.match.params.id,data:{Name:l,Email:O,City:p}},n={Name:l,Email:O,City:p},a=i,r=i.findIndex((function(e){return e.id==t.id}));r>=0&&(a[r]=t,s(a),f.updateServer("Members",t.id,n))}})}),Object(a.jsx)(P.b,{style:{textDecoration:"none"},to:"/Subscriptions",children:Object(a.jsx)(T.a,{style:{textTransform:"none"},startIcon:Object(a.jsx)(Z.a,{}),variant:"contained",size:"large"})})]})]})})})},pe=n(204),ge=n(200),Ce=Object(G.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(3),borderColor:"black",borderStyle:"solid",borderWidth:"2px"}}}));var Se=function(e){var t=Ce(),n=Object(r.useState)(!0),c=Object(v.a)(n,2),i=(c[0],c[1]),s=function(e){i(e.target.checked)};return Object(a.jsx)("div",{children:Object(a.jsx)(U.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:Object(a.jsxs)(ee.a,{className:t.paper,children:[Object(a.jsxs)("h3",{children:["Edit User : ",e.match.params.name]}),"First Name:",Object(a.jsx)(X.a,{required:!0,id:"outlined-basic",value:e.match.params.name,variant:"outlined"}),Object(a.jsx)("br",{}),"Last Name:",Object(a.jsx)(X.a,{required:!0,id:"outlined-basic",value:"Hello World",variant:"outlined"}),Object(a.jsx)("br",{}),"User Name:",Object(a.jsx)(X.a,{required:!0,id:"outlined-basic",value:"Hello World",variant:"outlined"}),Object(a.jsx)("br",{}),"Session time out (Minuts):",Object(a.jsx)(X.a,{required:!0,id:"outlined-basic",value:"Hello World",variant:"outlined"}),Object(a.jsx)("h4",{children:"Created data : "}),Object(a.jsx)("h3",{children:"Permissions :"}),Object(a.jsxs)(ee.a,{row:!0,children:[Object(a.jsx)(ge.a,{control:Object(a.jsx)(pe.a,{onChange:s,size:"small"}),label:"View Subscription"}),"\xa0\xa0\xa0\xa0",Object(a.jsx)(ge.a,{control:Object(a.jsx)(pe.a,{onChange:s,size:"small"}),label:"Create Subscription"}),Object(a.jsx)(ge.a,{control:Object(a.jsx)(pe.a,{onChange:s,size:"small"}),label:"Delete Subscription"})]}),Object(a.jsxs)(ee.a,{row:!0,children:[Object(a.jsx)(ge.a,{control:Object(a.jsx)(pe.a,{onChange:s,size:"small"}),label:"Update Subscription"}),Object(a.jsx)(ge.a,{control:Object(a.jsx)(pe.a,{onChange:s,size:"small"}),label:"View Movies"}),"\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0 \xa0\xa0",Object(a.jsx)(ge.a,{control:Object(a.jsx)(pe.a,{onChange:s,size:"small"}),label:"Create Movies"})]}),Object(a.jsxs)(ee.a,{row:!0,children:[Object(a.jsx)(ge.a,{control:Object(a.jsx)(pe.a,{onChange:s,size:"small"}),label:"Delete Movies"}),"\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0",Object(a.jsx)(ge.a,{control:Object(a.jsx)(pe.a,{onChange:s,size:"small"}),label:"Update Movies"})]}),Object(a.jsxs)(U.a,{container:!0,direction:"row",justify:"center",children:[Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(T.a,{style:{textTransform:"none"},startIcon:Object(a.jsx)(xe.a,{}),variant:"contained",size:"large"})}),Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(P.b,{style:{textDecoration:"none"},to:"/UsersManagment",children:Object(a.jsx)(T.a,{style:{textTransform:"none"},startIcon:Object(a.jsx)(Z.a,{}),size:"large",variant:"contained"})})})]})]})})})};var ye=function(e){var t=Object(r.useContext)(y),n=Object(v.a)(t,2),c=n[0],i=n[1];return Object(a.jsxs)("div",{children:["Name :  ",e.userDetails.data.FirstName,"  ",e.userDetails.data.LastName,Object(a.jsx)("br",{}),"User Name : ",e.userDetails.data.UserName,Object(a.jsx)("br",{}),"Session time out (Minuts) : ",e.userDetails.data.SessionTimeOut,Object(a.jsx)("br",{}),"Created data : ",e.userDetails.data.CreatedDate,Object(a.jsx)("br",{}),"Permissions:",Object(a.jsx)("br",{}),Object(a.jsxs)(U.a,{container:!0,direction:"row",justify:"center",children:[Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(P.b,{to:"/UsersManagment/Edit/".concat(e.userDetails.id),style:{textDecoration:"none"},children:Object(a.jsx)(T.a,{style:{textTransform:"none"},startIcon:Object(a.jsx)(H.a,{}),size:"large",variant:"contained"})})}),Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(T.a,{style:{textTransform:"none"},variant:"contained",startIcon:Object(a.jsx)(Y.a,{}),size:"large",onClick:function(){Object(B.confirmAlert)({title:"Are you sure you want to delete User:",message:e.userDetails.data.name,buttons:[{label:"Yes",onClick:function(){return function(){var t=c.filter((function(t){return t.id!=e.userDetails.id}));i(t),f.deleteDataFromServer("Users",e.userDetails.id)}()}},{label:"No"}]})}})})]})]})};var we=function(e){var t=Object(r.useState)(""),n=Object(v.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)(""),o=Object(v.a)(s,2),j=o[0],l=o[1],b=Object(r.useState)(""),d=Object(v.a)(b,2),u=d[0],O=d[1],x=Object(r.useState)(0),m=Object(v.a)(x,2),h=m[0],p=m[1],g=Object(r.useState)(!1),C=Object(v.a)(g,2),S=C[0],y=C[1],w=Object(r.useState)(!1),k=Object(v.a)(w,2),I=k[0],M=k[1],D=Object(r.useState)(!1),N=Object(v.a)(D,2),z=N[0],A=N[1],E=Object(r.useState)(!1),q=Object(v.a)(E,2),W=q[0],G=q[1],F=Object(r.useState)(!1),L=Object(v.a)(F,2),P=L[0],B=L[1],R=Object(r.useState)(!1),Y=Object(v.a)(R,2),V=Y[0],H=Y[1],J=Object(r.useState)(!1),K=Object(v.a)(J,2),Q=K[0],$=K[1],te=Object(r.useState)(!1),ne=Object(v.a)(te,2),ae=ne[0],re=ne[1];return Object(a.jsxs)("div",{children:[Object(a.jsxs)(ee.a,{children:["First Name:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(a.jsx)(X.a,{required:!0,label:"Required",variant:"outlined",size:"small",onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("br",{}),"Last Name:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(a.jsx)(X.a,{required:!0,label:"Required",variant:"outlined",size:"small",onChange:function(e){return l(e.target.value)}}),Object(a.jsx)("br",{}),"User Name:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(a.jsx)(X.a,{required:!0,label:"Required",variant:"outlined",size:"small",onChange:function(e){return O(e.target.value)}}),Object(a.jsx)("br",{}),"Session time out (Minuts):\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(a.jsx)(X.a,{required:!0,label:"Required",variant:"outlined",size:"small",onChange:function(e){return p(e.target.value)}}),Object(a.jsx)("h4",{children:"Created data : "}),Object(a.jsx)("h3",{children:"Permissions :"})]}),Object(a.jsxs)(ee.a,{children:[Object(a.jsx)(ge.a,{control:Object(a.jsx)(pe.a,{onChange:function(e){return y(e.target.checked)},size:"small"}),label:"View Subscription",name:"View Subscription"}),"\xa0\xa0\xa0\xa0",Object(a.jsx)(ge.a,{control:Object(a.jsx)(pe.a,{onChange:function(e){return M(e.target.checked)},size:"small"}),label:"Create Subscription",name:"Create Subscription"}),Object(a.jsx)(ge.a,{control:Object(a.jsx)(pe.a,{onChange:function(e){return A(e.target.checked)},size:"small"}),label:"Delete Subscription",name:"Delete Subscription"})]}),Object(a.jsxs)(ee.a,{row:!0,children:[Object(a.jsx)(ge.a,{control:Object(a.jsx)(pe.a,{onChange:function(e){return G(e.target.checked)},size:"small"}),label:"Update Subscription",name:"Update Subscription"}),Object(a.jsx)(ge.a,{control:Object(a.jsx)(pe.a,{onChange:function(e){return B(e.target.checked)},size:"small"}),label:"View Movies",name:"View Movies"}),"\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0 \xa0\xa0",Object(a.jsx)(ge.a,{control:Object(a.jsx)(pe.a,{onChange:function(e){return H(e.target.checked)},size:"small"}),label:"Create Movies",name:"Create Movies"})]}),Object(a.jsxs)(ee.a,{row:!0,children:[Object(a.jsx)(ge.a,{control:Object(a.jsx)(pe.a,{onChange:function(e){return $(e.target.checked)},size:"small"}),label:"Delete Movies",name:"Delete Movies"}),"\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0",Object(a.jsx)(ge.a,{control:Object(a.jsx)(pe.a,{onChange:function(e){return re(e.target.checked)},size:"small"}),label:"Update Movies",name:"Update Movies"})]}),Object(a.jsxs)(U.a,{container:!0,direction:"row",justify:"center",children:[Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(T.a,{style:{textTransform:"none"},startIcon:Object(a.jsx)(_.a,{}),variant:"contained",size:"large",onClick:function(){var e={viewSubscription:S,createSubscription:I,deleteSubscription:z,updateSubscription:W,viewMovies:P,createMovies:V,deleteMovies:Q,updateMovies:ae},t={FirstName:c,LastName:j,UserName:u,SessionTimeOut:h,CreatedDate:new Date,permissions:e};f.sendDataToServer("Users",t)}})}),Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(T.a,{style:{textTransform:"none"},startIcon:Object(a.jsx)(Z.a,{}),variant:"contained",size:"large",onClick:function(){return e.clickedAllUsers()}})})]})]})},ke=Object(G.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(5),borderColor:"black",borderStyle:"solid",borderWidth:"2px"}}}));var Ie=function(){var e=ke(),t=Object(r.useState)("primary"),n=Object(v.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)(""),o=Object(v.a)(s,2),j=o[0],l=o[1],b=Object(r.useState)(!0),d=Object(v.a)(b,2),u=d[0],O=d[1],x=Object(r.useState)(!1),m=Object(v.a)(x,2),h=m[0],f=m[1],p=Object(r.useContext)(y),g=Object(v.a)(p,2),C=g[0],S=(g[1],function(){l(""),i("primary"),O(!0),f(!1)});return Object(a.jsx)("div",{children:Object(a.jsxs)(U.a,{container:!0,direction:"column",alignItems:"center",children:[Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(N.a,{variant:"h5",gutterBottom:!0,align:"center",children:"Users Managment"})}),Object(a.jsxs)(U.a,{item:!0,container:!0,direction:"row",justify:"center",children:[Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(T.a,{style:{textTransform:"none"},variant:"contained",color:c,onClick:S,children:"All Users"})}),Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(T.a,{style:{textTransform:"none"},variant:"contained",color:j,onClick:function(){i(""),l("primary"),O(!1),f(!0)},children:"Add User"})})]}),Object(a.jsxs)(U.a,{item:!0,container:!0,direction:"column",alignItems:"center",children:[u&&C&&C.map((function(t,n){return Object(a.jsxs)("div",{children:[Object(a.jsx)(U.a,{item:!0,className:e.paper,children:Object(a.jsx)(ye,{userDetails:t})}),Object(a.jsx)("br",{})]})})),h&&Object(a.jsx)(U.a,{item:!0,className:e.paper,children:Object(a.jsx)(we,{clickedAllUsers:S})})]})]})})},Me=Object(G.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(3),borderColor:"black",borderStyle:"solid",borderWidth:"2px"}}}));var De=function(){var e=Me();return Object(a.jsx)("div",{children:Object(a.jsx)(U.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:Object(a.jsxs)(ee.a,{className:e.paper,children:[Object(a.jsx)("h2",{children:"Create an Account"}),Object(a.jsx)(X.a,{required:!0,id:"outlined-basic",label:"User Name",variant:"outlined"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(X.a,{required:!0,id:"outlined-basic",label:"Password",variant:"outlined"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)(U.a,{container:!0,direction:"row",justify:"center",children:[Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(T.a,{style:{textTransform:"none"},variant:"contained",size:"large",children:"Create"})}),Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(P.b,{style:{textDecoration:"none"},to:"/LogIn",children:Object(a.jsx)(T.a,{style:{textTransform:"none"},size:"large",variant:"contained",children:"Cancel"})})})]})]})})})},Ne=n(16),Te=Object(G.a)((function(e){return{link:{textDecoration:"none"},button:{color:"white"},paper:{padding:e.spacing(3),borderColor:"black",borderStyle:"solid",borderWidth:"2px"}}}));var ze=function(){var e=Te(),t=Object(r.useState)(""),n=Object(v.a)(t,2),c=(n[0],n[1]),i=Object(r.useState)(""),s=Object(v.a)(i,2),o=(s[0],s[1]),j=Object(Ne.f)(),l=Object(r.useContext)(M),b=Object(v.a)(l,2),d=b[0],u=b[1];return Object(a.jsx)("div",{children:Object(a.jsx)(U.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:Object(a.jsxs)(ee.a,{className:e.paper,children:[Object(a.jsx)("h2",{children:"Log In Page"}),Object(a.jsx)(X.a,{required:!0,id:"outlined-basic",label:"User Name",variant:"outlined",onChange:function(e){return c(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)(X.a,{required:!0,id:"outlined-basic",label:"Password",variant:"outlined",onChange:function(e){return o(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsxs)(U.a,{container:!0,direction:"row",justify:"center",children:[Object(a.jsx)(U.a,{item:!0,children:Object(a.jsx)(T.a,{style:{textTransform:"none"},variant:"contained",onClick:function(){console.log(d),j.push("/"),u(!0)},children:"Login"})}),Object(a.jsxs)(U.a,{item:!0,container:!0,direction:"column",alignItems:"center",children:[Object(a.jsx)("br",{}),"Don't have an account yet?",Object(a.jsx)(T.a,{style:{textTransform:"none"},variant:"contained",onClick:function(){j.push("/NewAccount")},children:"Create A New Account"})]})]})]})})})},Ue=n(105),Ae=n.n(Ue),Ee=n(201),qe=n(202);var We=function(){return Object(a.jsx)("div",{})},Ge=Object(G.a)((function(e){return{appbar:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},link:{textDecoration:"none"},button:{color:"white"},paper:{padding:e.spacing(3),borderColor:"black",borderStyle:"solid",borderWidth:"2px"}}}));var Fe=function(){var e=Ge(),t=Object(r.useState)(!0),n=Object(v.a)(t,2),c=n[0],i=(n[1],Object(r.useContext)(M)),s=Object(v.a)(i,2),l=s[0],b=(s[1],Object(r.useContext)(p)),d=Object(v.a)(b,2),u=(d[0],d[1]),O=Object(r.useContext)(C),x=Object(v.a)(O,2),m=(x[0],x[1]),h=Object(r.useContext)(y),g=Object(v.a)(h,2),S=(g[0],g[1]),w=Object(r.useContext)(k),I=Object(v.a)(w,2),D=(I[0],I[1]),N=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getDataFromServer("Users");case 2:t=e.sent,S(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getDataFromServer("Movies");case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getDataFromServer("Members");case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getDataFromServer("Subscriptions");case 2:t=e.sent,D(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)(Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("useEffect in main"),z(),A(),N(),E(),console.log(l);case 6:case"end":return e.stop()}}),e)}))),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)(Ee.a,{position:"sticky",className:e.appbar,children:Object(a.jsx)(qe.a,{children:Object(a.jsxs)(U.a,{container:!0,direction:"row",justify:"center",spacing:5,children:[Object(a.jsx)(U.a,{item:!0,children:l?Object(a.jsx)(P.b,{to:"/Movies",className:e.link,children:Object(a.jsx)(T.a,{className:e.button,children:"Movies"})}):Object(a.jsx)(P.b,{to:"/LogIn",className:e.link,children:Object(a.jsx)(T.a,{className:e.button,children:"Log In"})})}),Object(a.jsx)(U.a,{item:!0,children:l?Object(a.jsx)(P.b,{to:"/Subscriptions",className:e.link,children:Object(a.jsx)(T.a,{className:e.button,children:"Subscriptions"})}):Object(a.jsx)(P.b,{to:"/NewAccount",className:e.link,children:Object(a.jsx)(T.a,{className:e.button,children:"Sign In"})})}),Object(a.jsx)(U.a,{item:!0,children:c&&l&&Object(a.jsx)(P.b,{to:"/UsersManagment",className:e.link,children:Object(a.jsx)(T.a,{className:e.button,children:"User Managment"})})}),Object(a.jsx)(U.a,{item:!0,children:l?Object(a.jsx)(T.a,{className:e.button,startIcon:Object(a.jsx)(Ae.a,{}),onClick:function(){Object(B.confirmAlert)({title:"Are you sure you want to Log Out?",buttons:[{label:"Yes"},{label:"No"}]})},children:"Log Out"}):""})]})})}),Object(a.jsxs)(Ne.c,{children:[Object(a.jsx)(Ne.a,{exact:!0,path:"/",component:We}),Object(a.jsx)(Ne.a,{path:"/LogIn",component:ze}),Object(a.jsx)(Ne.a,{path:"/NewAccount",component:De}),Object(a.jsx)(Ne.a,{path:"/Movies/Edit/:id",component:he}),Object(a.jsx)(Ne.a,{path:"/Movies",component:ue}),Object(a.jsx)(Ne.a,{path:"/Subscriptions/Edit/:id",component:ve}),Object(a.jsx)(Ne.a,{path:"/Subscriptions",component:ae}),Object(a.jsx)(Ne.a,{path:"/UsersManagment/Edit/:id",component:Se}),Object(a.jsx)(Ne.a,{path:"/UsersManagment",component:Ie})]})]})};var Le=function(){return Object(r.useEffect)(Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)(N.a,{variant:"h3",gutterBottom:!0,align:"center",children:"Movies - Subscription Web Site"}),Object(a.jsx)(D,{children:Object(a.jsx)(I,{children:Object(a.jsx)(w,{children:Object(a.jsx)(S,{children:Object(a.jsx)(g,{children:Object(a.jsx)(Fe,{})})})})})})]})};var Pe=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(Le,{})})},Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,209)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(a.jsx)(P.a,{children:Object(a.jsx)(Pe,{})}),document.getElementById("root")),Be()},37:function(e,t,n){}},[[155,1,2]]]);
//# sourceMappingURL=main.6e30c139.chunk.js.map