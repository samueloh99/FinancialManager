(this["webpackJsonpfinancial-manager"]=this["webpackJsonpfinancial-manager"]||[]).push([[0],{236:function(e,t,c){},359:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(78),s=c.n(a),i=(c(236),c(376)),j=c(80),l=c(29),o=c(378),b=c(407),d=c(379),O=c(380),u=c(381),x=c(406),h=c(2),p=function(e){var t=e.children;return Object(h.jsx)(i.a,{pr:{base:"0px",lg:"120px"},direction:"column",alignItems:"end",w:"100%",children:Object(h.jsx)(x.b,{w:"90%",bg:"gray.800",p:"10",m:{base:"0 auto",lg:"0px"},borderRadius:8,align:{base:"center",lg:"start"},children:t})})},m=c(10),g=c.n(m),f=c(19),v=c(33),y=c(124),C=c.n(y),S=C.a.create({baseURL:"https://ironrest.herokuapp.com/samuel-web-customers"}),w=C.a.create({baseURL:"https://ironrest.herokuapp.com/samuel-web-movimentacoes"}),k=C.a.create({baseURL:"https://ironrest.herokuapp.com/samuel-web-users"});function I(){return z.apply(this,arguments)}function z(){return(z=Object(f.a)(g.a.mark((function e(){var t,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get();case 2:return t=e.sent,c=t.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return Object(v.useQuery)("clientes",I,{staleTime:5e3})}var R=function(){var e=E(),t=e.data;e.isLoading,e.error,e.isFetching;return Object(h.jsx)(p,{children:Object(h.jsxs)(i.a,{direction:"column",w:"100%",children:[Object(h.jsx)(o.a,{children:"Dashboard"}),Object(h.jsxs)(b.a,{flex:"1",gap:"4",minChildWidth:"220px",align:"flex-start",mt:"10",children:[Object(h.jsxs)(d.a,{p:"7",bg:"gray.900",borderRadius:8,children:[Object(h.jsx)(o.a,{fontSize:{base:"14px",lg:"20px"},mb:"5",children:"Conta Bradesco"}),Object(h.jsx)(O.b,{children:Object(h.jsxs)(O.a,{fontSize:{base:"12px",lg:"18px"},children:[Object(h.jsx)(O.c,{children:"Saldo"}),Object(h.jsx)(O.d,{children:"R$ 345,670"})]})})]}),Object(h.jsxs)(d.a,{p:"7",bg:"gray.900",borderRadius:8,children:[Object(h.jsx)(o.a,{fontSize:{base:"14px",lg:"20px"},mb:"5",children:"A Receber"}),Object(h.jsx)(O.b,{children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)(O.c,{children:"Valor"}),Object(h.jsx)(O.d,{children:"R$ 345,670"})]})})]}),Object(h.jsxs)(d.a,{p:"7",bg:"gray.900",borderRadius:8,children:[Object(h.jsx)(o.a,{fontSize:{base:"14px",lg:"20px"},mb:"5",children:"Clientes"}),Object(h.jsxs)(O.b,{flexDirection:"column-reverse",children:[Object(h.jsxs)(O.a,{children:[Object(h.jsx)(O.c,{children:"Total"}),Object(h.jsxs)(O.d,{children:["R$",t&&t.reduce((function(e,t){return parseInt(e.valor)+parseInt(t.valor)}))]})]}),Object(h.jsxs)(O.a,{children:[Object(h.jsx)(O.c,{children:"Quantidade"}),Object(h.jsx)(O.d,{children:t&&t.length})]})]})]}),Object(h.jsxs)(d.a,{p:"7",bg:"gray.900",borderRadius:8,children:[Object(h.jsx)(o.a,{fontSize:{base:"14px",lg:"20px"},mb:"5",children:"Despesa Fixo"}),Object(h.jsx)(O.b,{children:Object(h.jsxs)(u.a,{size:"sm",children:[Object(h.jsx)(u.e,{children:Object(h.jsxs)(u.f,{children:[Object(h.jsx)(u.d,{children:"T\xedtulo"}),Object(h.jsx)(u.d,{isNumeric:!0,children:"Valor"})]})}),Object(h.jsxs)(u.b,{children:[Object(h.jsxs)(u.f,{children:[Object(h.jsx)(u.c,{children:"Agua"}),Object(h.jsx)(u.c,{isNumeric:!0,children:"R$ 200,00"})]}),Object(h.jsxs)(u.f,{children:[Object(h.jsx)(u.c,{children:"Salario Gusta"}),Object(h.jsx)(u.c,{isNumeric:!0,children:"R$2000,00"})]}),Object(h.jsxs)(u.f,{children:[Object(h.jsx)(u.c,{children:"Salario Gusta"}),Object(h.jsx)(u.c,{isNumeric:!0,children:"R$2000,00"})]})]})]})})]})]})]})})},A=c(401),M=c(383),T=c(149),L=c(385),q=c(386),D=c(387),F=c(125),V=c.p+"static/media/logo.c023be1a.png",Q=c(382),N=Object(n.createContext)({});function _(e){var t=e.children,c=Object(Q.a)();return Object(h.jsx)(N.Provider,{value:c,children:t})}var $=function(){return Object(n.useContext)(N)},B=function(){var e=$().onOpen,t=Object(A.a)({base:!1,lg:!0});return Object(h.jsxs)(i.a,{as:"header",w:"100%",maxWidth:"100%",h:"20",m:"40px 0px",px:{base:"30px",lg:"120px"},align:"center",children:[!t&&Object(h.jsx)(M.a,{"aria-label":"Open navigation",fontSize:"24",variant:"unstyled",mr:"5",onClick:e,icon:Object(h.jsx)(T.a,{as:F.a})}),Object(h.jsx)(j.b,{to:"/",children:Object(h.jsx)(L.a,{width:"100px",src:V})}),Object(h.jsxs)(i.a,{align:"center",ml:"auto",children:[Object(h.jsxs)(x.a,{spacing:["3","8"],mx:["2","8"],pr:["2","8"],py:"1",color:"gray.300",borderRightWidth:1,borderColor:"gray.700",children:[Object(h.jsx)(T.a,{as:F.b,fontSize:"20"}),Object(h.jsx)(T.a,{as:F.c,fontSize:"20"})]}),Object(h.jsxs)(i.a,{align:"center",children:[Object(h.jsx)(d.a,{children:t&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(q.a,{children:"Samuel Oh"}),Object(h.jsx)(q.a,{color:"gray.300",fontSize:"small",children:"teste@gmail.com"})]})}),Object(h.jsx)(D.a,{size:"md",ml:"3",name:"Samuel Oh"})]})]})]})},W=c(408),P=c(55),U=c(59),G=c(203),J=[{title:"Home",icon:Object(h.jsx)(U.c,{size:20}),link:"/"},{title:"Clientes",icon:Object(h.jsx)(U.e,{size:20}),link:"/clientes"},{title:"Financeiros",icon:Object(h.jsx)(G.a,{size:20}),link:"/financeiros"}],H=function(e){var t=e.onClose,c=function(){t()};return Object(h.jsx)(x.b,{align:"start",spacing:5,children:J.map((function(e,t){var n=e.link,r=e.title,a=e.icon;return Object(h.jsx)(j.c,{onClick:c,exact:!0,activeStyle:{fontWeight:"bold",color:"#ED64A6"},to:n,children:Object(h.jsxs)(i.a,{align:"center",children:[a,Object(h.jsx)(q.a,{ml:"3",children:r})]})},t)}))})},K=function(){var e=$(),t=e.isOpen,c=e.onClose;return Object(A.a)({base:!0,lg:!1})?Object(h.jsx)(W.a,{isOpen:t,placement:"left",onClose:c,children:Object(h.jsx)(P.g,{children:Object(h.jsxs)(W.b,{bg:"gray.800",color:"white",alignSelf:"center",justifyContent:"center",children:[Object(h.jsx)(P.c,{}),Object(h.jsx)(P.f,{children:"Navega\xe7\xe3o"}),Object(h.jsx)(P.b,{children:Object(h.jsx)(H,{onClose:c})})]})})}):Object(h.jsx)(d.a,{as:"aside",w:"15%",px:"120px",children:Object(h.jsx)(H,{onClose:c})})},X=c(384),Y=c(391),Z=c(213),ee=function(e){var t=e.isOpen,c=e.onOpen,n=e.onClose,r=e.children,a=e.btnText,s=e.modalTitle;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Z.a,{colorScheme:"pink",onClick:c,children:a}),Object(h.jsxs)(P.a,{size:"xl",isOpen:t,onClose:n,children:[Object(h.jsx)(P.g,{}),Object(h.jsxs)(P.d,{bg:"gray.900",children:[Object(h.jsx)(P.f,{children:s}),Object(h.jsx)(P.c,{colorScheme:"pink",color:"pink"}),Object(h.jsx)(P.b,{bg:"gray.900",children:r})]})]})]})},te=c(393),ce=c(394),ne=c(395),re=new v.QueryClient,ae=c(11),se=c(58),ie=c(389),je=c(74),le=c(390),oe=c(392),be=c(214),de=c(403),Oe=c(400),ue=function(e){var t=e.id,c=Object(Q.a)(),n=c.isOpen,r=c.onOpen,a=c.onClose,s=Object(v.useMutation)(function(){var e=Object(f.a)(g.a.mark((function e(t){var c,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={mkt:t.mkt,suport:t.suport,socialMedia:t.socialMedia,vencimento:t.vencimento,cliente:t.cliente},e.next=3,S.put("/".concat(t._id),Object(ae.a)({},c));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{onSuccess:function(){return re.invalidateQueries("clientes")}}),i=re.getQueryData("clientes").find((function(e){return e._id===t})),j=Object(se.a)({defaultValues:i}),l=j.register,o=j.handleSubmit,O=j.formState,u=O.errors,p=O.isSubmitting,m=function(){var e=Object(f.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.mutateAsync(t);case 2:a();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Z.a,{onClick:r,colorScheme:"pink",children:"Editar"}),Object(h.jsxs)(P.a,{isOpen:n,onClose:a,size:"xl",children:[Object(h.jsx)(P.g,{}),Object(h.jsxs)(P.d,{bg:"gray.900",children:[Object(h.jsx)(P.f,{children:"Editar Cliente"}),Object(h.jsx)(P.c,{}),Object(h.jsx)(P.b,{bg:"gray.900",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(ie.a,{}),Object(h.jsx)(x.c,{my:"10",children:Object(h.jsx)("form",{onSubmit:o(m),children:Object(h.jsxs)(b.a,{w:"100%",spacing:"10",children:[Object(h.jsx)(x.c,{align:"start",children:Object(h.jsxs)(je.a,{isInvalid:u.cliente,children:[Object(h.jsx)(le.a,{children:"CLIENTE"}),Object(h.jsx)(Y.a,Object(ae.a)({},l("cliente",{required:{value:!0,message:"Campo Obrigat\xf3rio"}}))),Object(h.jsx)(oe.a,{children:u.cliente&&u.cliente.message})]})}),Object(h.jsx)(be.a,{colorScheme:"pink",children:Object(h.jsxs)(x.a,{children:[Object(h.jsx)(de.a,Object(ae.a)(Object(ae.a)({},l("mkt")),{},{children:"Marketing"})),Object(h.jsx)(de.a,Object(ae.a)(Object(ae.a)({},l("socialMedia")),{},{children:"Midia Social"})),Object(h.jsx)(de.a,Object(ae.a)(Object(ae.a)({},l("suport")),{},{children:"Manunten\xe7\xe3o"}))]})}),Object(h.jsx)(x.c,{align:"start",children:Object(h.jsxs)(je.a,{isInvalid:u.vencimento,children:[Object(h.jsx)(le.a,{children:"DATA DE VENCIMENTO"}),Object(h.jsxs)(Oe.c,{defaultValue:0,min:1,max:30,children:[Object(h.jsx)(Oe.d,Object(ae.a)({},l("vencimento",{required:{value:!0,message:"Campo Obrigat\xf3rio"},maxLength:2}))),Object(h.jsxs)(Oe.e,{children:[Object(h.jsx)(Oe.b,{}),Object(h.jsx)(Oe.a,{})]})]}),Object(h.jsx)(oe.a,{children:u.vencimento&&u.vencimento.message})]})}),Object(h.jsx)(x.c,{align:"start",children:Object(h.jsxs)(je.a,{isInvalid:u.cliente,children:[Object(h.jsx)(le.a,{children:"VALOR"}),Object(h.jsx)(Y.a,Object(ae.a)({},l("valor",{required:{value:!0,message:"Campo Obrigat\xf3rio"}}))),Object(h.jsx)(oe.a,{children:u.cliente&&u.cliente.message})]})}),Object(h.jsxs)(x.c,{w:"100%",children:[Object(h.jsx)(Z.a,{w:"100%",colorScheme:"pink",type:"submit",isLoading:p,children:"Atualizar Cliente"}),Object(h.jsx)(Z.a,{w:"100%",colorScheme:"pink",onClick:a,children:"Fechar"})]})]})})})]})})]})]})]})},xe=function(e){var t=e.isLoading,c=e.error,n=e.data,r=Object(v.useMutation)(function(){var e=Object(f.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.delete("/".concat(t));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{onSuccess:function(){return re.invalidateQueries("clientes")}}),a=function(){var e=Object(f.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.mutateAsync(t);case 2:re.resetQueries("clientes");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=Object(A.a)({base:!1,lg:!0});return Object(h.jsx)(h.Fragment,{children:t?Object(h.jsx)(i.a,{justify:"center",children:Object(h.jsx)(X.a,{})}):c?Object(h.jsx)(i.a,{justify:"center",children:Object(h.jsx)(q.a,{children:"Falha ao obter os dados"})}):Object(h.jsxs)(u.a,{m:"30px 0px",variant:"simple",children:[Object(h.jsx)(u.e,{children:Object(h.jsxs)(u.f,{children:[Object(h.jsx)(u.d,{children:"Cliente"}),s&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u.d,{children:"Manunten\xe7\xe3o"}),Object(h.jsx)(u.d,{children:"Marketing"}),Object(h.jsx)(u.d,{children:"Midia Social"}),Object(h.jsx)(u.d,{children:"Data Vencimento"}),Object(h.jsx)(u.d,{children:"Valor"}),Object(h.jsx)(u.d,{children:"Apagar"})]}),Object(h.jsx)(u.d,{children:"Editar"})]})}),Object(h.jsx)(u.b,{children:n.map((function(e,t){return Object(h.jsxs)(u.f,{children:[Object(h.jsx)(u.c,{children:e.cliente}),s&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u.c,{children:e.suport?Object(h.jsx)(te.a,{color:"green"}):Object(h.jsx)(ce.a,{color:"red"})}),Object(h.jsx)(u.c,{children:e.mkt?Object(h.jsx)(te.a,{color:"green"}):Object(h.jsx)(ce.a,{color:"red"})}),Object(h.jsx)(u.c,{children:e.socialMedia?Object(h.jsx)(te.a,{color:"green"}):Object(h.jsx)(ce.a,{color:"red"})}),Object(h.jsx)(u.c,{children:Object(h.jsxs)(q.a,{children:["DIA ",e.vencimento]})}),Object(h.jsx)(u.c,{children:Object(h.jsxs)(q.a,{children:["R$",e.valor]})}),Object(h.jsx)(u.c,{children:Object(h.jsx)(ne.a,{cursor:"pointer",onClick:function(){return a(e._id)}})})]}),Object(h.jsx)(u.c,{children:Object(h.jsx)(ue,{id:e._id})})]},t)}))})]})})},he=function(e){var t=e.onClose,c=Object(v.useMutation)(function(){var e=Object(f.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.post("",Object(ae.a)({},t));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{onSuccess:function(){return re.invalidateQueries("clientes")}}),n=Object(se.a)(),r=n.register,a=n.handleSubmit,s=n.formState,i=s.errors,j=s.isSubmitting,l=function(){var e=Object(f.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.mutateAsync(n);case 2:t();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(d.a,{children:[Object(h.jsx)(ie.a,{}),Object(h.jsx)(x.c,{my:"10",children:Object(h.jsx)("form",{onSubmit:a(l),children:Object(h.jsxs)(b.a,{w:"100%",spacing:"10",children:[Object(h.jsx)(x.c,{align:"start",children:Object(h.jsxs)(je.a,{isInvalid:i.cliente,children:[Object(h.jsx)(le.a,{children:"CLIENTE"}),Object(h.jsx)(Y.a,Object(ae.a)({},r("cliente",{required:{value:!0,message:"Campo Obrigat\xf3rio"}}))),Object(h.jsx)(oe.a,{children:i.cliente&&i.cliente.message})]})}),Object(h.jsx)(be.a,{colorScheme:"pink",children:Object(h.jsxs)(x.a,{children:[Object(h.jsx)(de.a,Object(ae.a)(Object(ae.a)({},r("mkt")),{},{children:"Marketing"})),Object(h.jsx)(de.a,Object(ae.a)(Object(ae.a)({},r("socialMedia")),{},{children:"Midia Social"})),Object(h.jsx)(de.a,Object(ae.a)(Object(ae.a)({},r("suport")),{},{children:"Manunten\xe7\xe3o"}))]})}),Object(h.jsx)(x.c,{align:"start",children:Object(h.jsxs)(je.a,{isInvalid:i.vencimento,children:[Object(h.jsx)(le.a,{children:"DATA DE VENCIMENTO"}),Object(h.jsxs)(Oe.c,{defaultValue:0,min:1,max:30,children:[Object(h.jsx)(Oe.d,Object(ae.a)({},r("vencimento",{required:{value:!0,message:"Campo Obrigat\xf3rio"},maxLength:2}))),Object(h.jsxs)(Oe.e,{children:[Object(h.jsx)(Oe.b,{}),Object(h.jsx)(Oe.a,{})]})]}),Object(h.jsx)(oe.a,{children:i.vencimento&&i.vencimento.message})]})}),Object(h.jsx)(x.c,{align:"start",children:Object(h.jsxs)(je.a,{isInvalid:i.cliente,children:[Object(h.jsx)(le.a,{children:"VALOR"}),Object(h.jsx)(Y.a,Object(ae.a)({},r("valor",{required:{value:!0,message:"Campo Obrigat\xf3rio"}}))),Object(h.jsx)(oe.a,{children:i.cliente&&i.cliente.message})]})}),Object(h.jsx)(Z.a,{colorScheme:"pink",type:"submit",isLoading:j,children:"Adicionar cliente"})]})})})]})},pe=function(){var e=Object(Q.a)(),t=e.isOpen,c=e.onOpen,n=e.onClose,r=E(),a=r.data,s=r.isLoading,j=r.error,l=r.isFetching;return Object(h.jsxs)(p,{children:[Object(h.jsxs)(i.a,{w:"100%",justifyContent:"space-between",direction:{base:"column",lg:"row"},children:[Object(h.jsxs)(x.b,{direction:{base:"column",lg:"row"},mb:{base:"60px",lg:"0px"},align:"center",spacing:10,children:[Object(h.jsx)(q.a,{fontSize:"20px",fontWeight:"bold",textTransform:"uppercase",children:"Clientes"}),Object(h.jsx)(ee,{isOpen:t,onOpen:c,onClose:n,modalTitle:"Criar Usuario",btnText:"Adicionar Cliente",children:Object(h.jsx)(he,{onClose:n})}),!s&&l&&Object(h.jsx)(X.a,{size:"sm",color:"gray.500"})]}),Object(h.jsx)(x.a,{m:{base:"auto",lg:"0 0 0 auto"},children:Object(h.jsxs)(i.a,{marginLeft:"auto",bg:"gray.900",p:"5",borderRadius:"100px",children:[Object(h.jsx)(Y.a,{variant:"unstyled",px:"4",mr:"4",placeholder:"Procurar...",_placeholder:{color:"gray.200"}}),Object(h.jsx)(T.a,{as:U.d,fontSize:"20"})]})})]}),Object(h.jsx)(i.a,{w:"100%",children:Object(h.jsx)(xe,{isLoading:s,error:j,data:a})})]})};function me(){return ge.apply(this,arguments)}function ge(){return(ge=Object(f.a)(g.a.mark((function e(){var t,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get();case 2:return t=e.sent,c=t.data,console.log(c),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var fe=function(e){var t=e.id,c=Object(Q.a)(),n=c.isOpen,r=c.onOpen,a=c.onClose,s=Object(v.useMutation)(function(){var e=Object(f.a)(g.a.mark((function e(t){var c,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={titulo:t.titulo,valor:t.valor,tipo:t.tipo,date:t.date,responsavel:t.responsavel},e.next=3,w.put("/".concat(t._id),Object(ae.a)({},c));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{onSuccess:function(){return re.invalidateQueries("movimentacoes")}}),i=re.getQueryData("movimentacoes").find((function(e){return e._id===t})),j=Object(se.a)({defaultValues:Object(ae.a)({titulo:i.titulo,valor:parseInt(i.valor)},i)}),l=j.register,o=j.handleSubmit,d=j.formState,O=d.errors,u=d.isSubmitting,p=function(){var e=Object(f.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.mutateAsync(t);case 2:a();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Z.a,{onClick:r,colorScheme:"pink",children:"Editar"}),Object(h.jsxs)(P.a,{isOpen:n,onClose:a,size:"xl",children:[Object(h.jsx)(P.g,{}),Object(h.jsxs)(P.d,{bg:"gray.900",children:[Object(h.jsx)(P.f,{children:"Editar Cliente"}),Object(h.jsx)(P.c,{}),Object(h.jsxs)(P.b,{bg:"gray.900",children:[Object(h.jsx)(ie.a,{}),Object(h.jsx)(x.c,{my:"10",children:Object(h.jsx)("form",{onSubmit:o(p),children:Object(h.jsxs)(b.a,{w:"100%",spacing:"10",children:[Object(h.jsx)(x.c,{align:"start",children:Object(h.jsxs)(je.a,{isInvalid:O.titulo,children:[Object(h.jsx)(le.a,{children:"Titulo"}),Object(h.jsx)(Y.a,Object(ae.a)({},l("titulo",{required:{value:!0,message:"Campo Obrigat\xf3rio"}}))),Object(h.jsx)(oe.a,{children:O.titulo&&O.titulo.message})]})}),Object(h.jsxs)(x.a,{alignItems:"end",justifyItems:"end",spacing:"6",children:[Object(h.jsxs)(je.a,{isInvalid:O.valor,children:[Object(h.jsx)(le.a,{children:"Valor"}),Object(h.jsx)(Y.a,Object(ae.a)({type:"number"},l("valor",{required:{value:!0,message:"Campo Valor Obrigat\xf3rio"}}))),Object(h.jsx)(oe.a,{children:O.valor&&O.valor.message})]}),Object(h.jsx)(je.a,{isInvalid:O.tipo,children:Object(h.jsxs)(x.c,{alignItems:"center",justifyItems:"center",children:[Object(h.jsxs)(x.a,{w:"100%",children:[Object(h.jsx)(q.a,{children:"Entrada"}),Object(h.jsx)("input",Object(ae.a)(Object(ae.a)({},l("tipo",{required:{value:!0,message:"Campo Obrigat\xf3rio"}})),{},{type:"radio",value:"entrada"}))]}),Object(h.jsxs)(x.a,{w:"100%",children:[Object(h.jsx)(q.a,{children:"Saida"}),Object(h.jsx)("input",Object(ae.a)(Object(ae.a)({},l("tipo",{required:{value:!0,message:"Campo Obrigat\xf3rio"}})),{},{type:"radio",value:"saida"}))]}),Object(h.jsx)(oe.a,{children:O.tipo&&O.tipo.message})]})})]}),Object(h.jsx)(x.c,{align:"start",children:Object(h.jsxs)(je.a,{isInvalid:O.responsavel,children:[Object(h.jsx)(le.a,{children:"Respons\xe1vel"}),Object(h.jsx)(Y.a,Object(ae.a)({},l("responsavel",{required:{value:!0,message:"Campo Obrigat\xf3rio"}}))),Object(h.jsx)(oe.a,{children:O.responsavel&&O.responsavel.message})]})}),Object(h.jsx)(x.c,{align:"start",children:Object(h.jsxs)(je.a,{isInvalid:O.date,children:[Object(h.jsx)(le.a,{children:"DATA"}),Object(h.jsx)(Y.a,Object(ae.a)({type:"date"},l("date",{required:{value:!0,message:"Campo Obrigat\xf3rio"}}))),Object(h.jsx)(oe.a,{children:O.date&&O.date.message})]})}),Object(h.jsx)(Z.a,{colorScheme:"pink",type:"submit",isLoading:u,children:"Atualizar"})]})})})]})]})]})]})},ve=function(e){var t=e.isLoading,c=e.error,n=e.data,r=Object(A.a)({base:!1,lg:!0});return Object(h.jsx)(h.Fragment,{children:t?Object(h.jsx)(i.a,{justify:"center",children:Object(h.jsx)(X.a,{})}):c?Object(h.jsx)(i.a,{justify:"center",children:Object(h.jsx)(q.a,{children:"Falha ao obter os dados"})}):Object(h.jsxs)(u.a,{m:"30px 0px",variant:"simple",size:r?"lg":"sm",children:[Object(h.jsx)(u.e,{children:Object(h.jsxs)(u.f,{fontSize:{base:"12px",lg:"18px"},children:[Object(h.jsx)(u.d,{children:"T\xedtulo"}),Object(h.jsx)(u.d,{children:"Entrada"}),Object(h.jsx)(u.d,{children:"Sa\xedda"}),r&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u.d,{children:"Respons\xe1vel"}),Object(h.jsx)(u.d,{children:"Data"}),Object(h.jsx)(u.d,{children:"Editar"})]})]})}),Object(h.jsx)(u.b,{children:n.map((function(e,t){return Object(h.jsxs)(u.f,{fontSize:{base:"12px",lg:"18px"},children:[Object(h.jsx)(u.c,{children:e.titulo}),Object(h.jsxs)(u.c,{children:["R$ ","entrada"===e.tipo?e.valor:0]}),Object(h.jsxs)(u.c,{children:["R$ ","saida"===e.tipo?e.valor:0]}),r&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u.c,{children:e.responsavel}),Object(h.jsx)(u.c,{children:Object(h.jsx)(q.a,{children:e.date})}),Object(h.jsx)(u.c,{children:Object(h.jsx)(fe,{id:e._id})})]})]},t)}))})]})})},ye=function(e){var t=e.onClose,c=Object(v.useMutation)(function(){var e=Object(f.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.post("",Object(ae.a)({},t));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{onSuccess:function(){return re.invalidateQueries("movimentacoes")}}),n=Object(se.a)(),r=n.register,a=n.handleSubmit,s=n.formState,i=s.errors,j=s.isSubmitting,l=function(){var e=Object(f.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.mutateAsync(n);case 2:t();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(d.a,{children:[Object(h.jsx)(ie.a,{}),Object(h.jsx)(x.c,{my:"10",children:Object(h.jsx)("form",{onSubmit:a(l),children:Object(h.jsxs)(b.a,{w:"100%",spacing:"10",children:[Object(h.jsx)(x.c,{align:"start",children:Object(h.jsxs)(je.a,{isInvalid:i.titulo,children:[Object(h.jsx)(le.a,{children:"Titulo"}),Object(h.jsx)(Y.a,Object(ae.a)({},r("titulo",{required:{value:!0,message:"Campo Obrigat\xf3rio"}}))),Object(h.jsx)(oe.a,{children:i.titulo&&i.titulo.message})]})}),Object(h.jsxs)(x.a,{alignItems:"end",justifyItems:"end",spacing:"6",children:[Object(h.jsxs)(je.a,{isInvalid:i.valor,children:[Object(h.jsx)(le.a,{children:"Valor"}),Object(h.jsx)(Y.a,Object(ae.a)({type:"number"},r("valor",{required:{value:!0,message:"Campo Valor Obrigat\xf3rio"}}))),Object(h.jsx)(oe.a,{children:i.valor&&i.valor.message})]}),Object(h.jsx)(je.a,{isInvalid:i.tipo,children:Object(h.jsxs)(x.c,{alignItems:"center",justifyItems:"center",children:[Object(h.jsxs)(x.a,{w:"100%",children:[Object(h.jsx)(q.a,{children:"Entrada"}),Object(h.jsx)("input",Object(ae.a)(Object(ae.a)({},r("tipo",{required:{value:!0,message:"Campo Obrigat\xf3rio"}})),{},{type:"radio",value:"entrada"}))]}),Object(h.jsxs)(x.a,{w:"100%",children:[Object(h.jsx)(q.a,{children:"Saida"}),Object(h.jsx)("input",Object(ae.a)(Object(ae.a)({},r("tipo",{required:{value:!0,message:"Campo Obrigat\xf3rio"}})),{},{type:"radio",value:"saida"}))]}),Object(h.jsx)(oe.a,{children:i.tipo&&i.tipo.message})]})})]}),Object(h.jsx)(x.c,{align:"start",children:Object(h.jsxs)(je.a,{isInvalid:i.responsavel,children:[Object(h.jsx)(le.a,{children:"Respons\xe1vel"}),Object(h.jsx)(Y.a,Object(ae.a)({},r("responsavel",{required:{value:!0,message:"Campo Obrigat\xf3rio"}}))),Object(h.jsx)(oe.a,{children:i.responsavel&&i.responsavel.message})]})}),Object(h.jsx)(x.c,{align:"start",children:Object(h.jsxs)(je.a,{isInvalid:i.date,children:[Object(h.jsx)(le.a,{children:"DATA"}),Object(h.jsx)(Y.a,Object(ae.a)({type:"date"},r("date",{required:{value:!0,message:"Campo Obrigat\xf3rio"}}))),Object(h.jsx)(oe.a,{children:i.date&&i.date.message})]})}),Object(h.jsx)(Z.a,{colorScheme:"pink",type:"submit",isLoading:j,children:"Adicionar Movimenta\xe7\xe3o"})]})})})]})},Ce=function(){var e=Object(Q.a)(),t=e.isOpen,c=e.onOpen,n=e.onClose,r=Object(v.useQuery)("movimentacoes",me,{staleTime:5e3}),a=r.data,s=r.isLoading,j=r.error,l=r.isFetching;return Object(h.jsxs)(p,{children:[Object(h.jsxs)(i.a,{w:"100%",justifyContent:"space-between",direction:{base:"column",lg:"row"},children:[Object(h.jsxs)(x.b,{direction:{base:"column",lg:"row"},mb:{base:"60px",lg:"0px"},align:"center",spacing:10,children:[Object(h.jsx)(q.a,{fontSize:"20px",fontWeight:"bold",textTransform:"uppercase",children:"Financeiro"}),Object(h.jsx)(ee,{isOpen:t,onOpen:c,onClose:n,modalTitle:"Movimenta\xe7\xe3o",btnText:"Adicionar Movimenta\xe7\xe3o",children:Object(h.jsx)(ye,{onClose:n})}),!s&&l&&Object(h.jsx)(X.a,{size:"sm",color:"gray.500"})]}),Object(h.jsx)(x.a,{m:{base:"auto",lg:"0 0 0 auto"},children:Object(h.jsxs)(i.a,{marginLeft:"auto",bg:"gray.900",p:"5",borderRadius:"100px",children:[Object(h.jsx)(Y.a,{variant:"unstyled",px:"4",mr:"4",placeholder:"Procurar...",_placeholder:{color:"gray.200"}}),Object(h.jsx)(T.a,{as:U.d,fontSize:"20"})]})})]}),Object(h.jsx)(i.a,{w:"100%",justifyContent:"center",children:Object(h.jsx)(ve,{isLoading:s,error:j,data:a})})]})},Se=c(6),we=c(5),ke=c(126),Ie=c(396),ze=c(397),Ee=Object(n.createContext)({});function Re(e){var t=e.children,c=Object(n.useState)(),r=Object(Se.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(!1),j=Object(Se.a)(i,2),l=j[0],o=j[1];function b(){return(b=Object(f.a)(g.a.mark((function e(t){var c,n,r,a,i,j;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.email,n=t.senha,e.prev=1,e.next=4,k.get();case 4:r=e.sent,a=r.data,i=a.find((function(e){return e.email===c})),j=a.find((function(e){return e.senha===n})),i&&j?(o(!0),s(a)):o(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return Object(h.jsx)(Ee.Provider,{value:{signIn:function(e){return b.apply(this,arguments)},userData:a,isAuth:l},children:t})}var Ae=ke.a({email:ke.b().required("Required"),senha:ke.b().required("Required")}),Me=function(){var e,t=Object(n.useContext)(Ee).signIn,c=Object(n.useState)(!1),r=Object(Se.a)(c,2),a=r[0],s=r[1],j=(e=Ae,Object(n.useCallback)(function(){var t=Object(f.a)(g.a.mark((function t(c){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.validate(c,{abortEarly:!1});case 3:return n=t.sent,t.abrupt("return",{values:n,errors:{}});case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",{values:{},errors:t.t0.inner.reduce((function(e,t){var c;return Object(ae.a)(Object(ae.a)({},e),{},Object(we.a)({},t.path,{type:null!==(c=t.type)&&void 0!==c?c:"validation",message:t.message}))}),{})});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),[e])),l=Object(se.a)({resolver:j}),b=l.handleSubmit,O=l.register;l.formState.errors;return Object(h.jsxs)(i.a,{direction:"column",w:"100%",h:"100vh",justifyContent:"center",alignItems:"center",border:"1px solid red",children:[Object(h.jsx)(o.a,{children:"LOGIN"}),Object(h.jsx)(d.a,{mt:"10",children:Object(h.jsxs)("form",{onSubmit:b((function(e){return t(e)})),children:[Object(h.jsx)(le.a,{children:"Email"}),Object(h.jsx)(Y.a,Object(ae.a)({_focus:{boxShadow:"none"}},O("email"))),Object(h.jsx)(le.a,{children:"Senha"}),Object(h.jsxs)(Ie.a,{size:"md",children:[Object(h.jsx)(Y.a,Object(ae.a)(Object(ae.a)({_focus:{boxShadow:"none"}},O("senha")),{},{pr:"4.5rem",type:a?"text":"password"})),Object(h.jsx)(ze.a,{width:"4.5rem",children:Object(h.jsx)(Z.a,{h:"1.75rem",size:"sm",onClick:function(){return s(!a)},_focus:{boxShadow:"none"},children:a?Object(h.jsx)(T.a,{fontSize:18,as:U.a}):Object(h.jsx)(T.a,{fontSize:18,as:U.b})})})]}),Object(h.jsx)(Z.a,{type:"submit",w:"100%",mt:"10",colorScheme:"pink",children:"ENTRAR"})]})})]})},Te=function(){return Object(n.useContext)(Ee).isAuth?Object(h.jsxs)(j.a,{children:[Object(h.jsx)(B,{}),Object(h.jsxs)(i.a,{h:"100vh",children:[Object(h.jsx)(K,{}),Object(h.jsx)(l.a,{component:R,path:"/",exact:!0}),Object(h.jsx)(l.a,{component:pe,path:"/clientes"}),Object(h.jsx)(l.a,{component:Ce,path:"/financeiros"})]})]}):Object(h.jsx)(j.a,{children:Object(h.jsx)(l.a,{component:Me,exact:!0,path:"/"})})},Le=function(){return Object(h.jsx)(Te,{})},qe=c(209),De=c(402),Fe=c(398),Ve=Object(Fe.a)({colors:{gray:{900:"#181B23",800:"#1F2029",700:"#353646",600:"#4B4D63",500:"#616480",400:"#797D9A",300:"#9699B0",200:"#B3B5C6",100:"#D1D2DC",50:"#EEEEF2"},black:{900:"#252525",700:"#3E3E3E"}},styles:{global:{body:{bg:"gray.900",color:"white"}}}});s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(Re,{children:Object(h.jsxs)(v.QueryClientProvider,{client:re,children:[Object(h.jsx)(De.a,{resetCSS:!0,theme:Ve,children:Object(h.jsx)(_,{children:Object(h.jsx)(Le,{})})}),Object(h.jsx)(qe.ReactQueryDevtools,{})]})})}),document.getElementById("root"))}},[[359,1,2]]]);
//# sourceMappingURL=main.47299cdc.chunk.js.map