(this.webpackJsonprunner=this.webpackJsonprunner||[]).push([[6],{175:function(t,e,c){t.exports={Account:"Account_Account__cwVDt",Account__Content:"Account_Account__Content__3qh8S",Account__Main:"Account_Account__Main__1luDu"}},176:function(t,e,c){t.exports={SidebarList:"SidebarList_SidebarList__3iV3Z",active:"SidebarList_active__2P3Y2"}},177:function(t,e,c){t.exports={Main:"Main_Main__1vzDD"}},178:function(t,e,c){t.exports={OrdersList:"OrdersList_OrdersList__24P70",OrdersList__Heading:"OrdersList_OrdersList__Heading__2OZke",OrdersList_EmptyTitle:"OrdersList_OrdersList_EmptyTitle__3QDRv"}},179:function(t,e,c){t.exports={Item:"OrdersListItem_Item__vj_BH",Item__Img:"OrdersListItem_Item__Img__2XSaK",Item__List:"OrdersListItem_Item__List__2VKrp",Item__List_Name:"OrdersListItem_Item__List_Name__RlnNz"}},183:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c(1),i=c(11),r=c(12),a=c(21),u=c(5),j=c(175),_=c.n(j),d=c(176),o=c.n(d),l=function(t){var e=Object(i.c)((function(t){return t.auth.firstName})),c=Object(i.c)((function(t){return t.auth.email}));return Object(n.jsxs)("ul",{className:o.a.SidebarList,children:[Object(n.jsxs)("li",{children:["HELLO\xa0",e,"!",Object(n.jsx)("span",{children:c})]}),Object(n.jsx)("li",{className:o.a.active,children:"Orders"}),Object(n.jsx)("li",{onClick:function(){t.dispatch(u.D())},children:"Log Out"})]})},O=c(177),b=c.n(O),m=c(178),h=c.n(m),x=c(48),L=c(14),f=c(179),p=c.n(f),g=function(t){return Object(n.jsxs)("li",{className:p.a.Item,children:[Object(n.jsx)("div",{className:p.a.Item__Img,children:Object(n.jsx)(L.b,{to:"/products/".concat(t.id,"?category=").concat(t.category),children:Object(n.jsx)("img",{src:"/images/ProductsPage/img/".concat(t.category,"/").concat(t.imgUrl),alt:"ITEM"})})}),Object(n.jsxs)("ul",{className:p.a.Item__List,children:[Object(n.jsx)("li",{children:t.category}),Object(n.jsx)("li",{className:p.a.Item__List_Name,children:t.name}),Object(n.jsxs)("li",{children:["Size\xa0",Object(n.jsx)("span",{children:t.size})," / Amount\xa0",Object(n.jsx)("span",{children:t.amount})]}),Object(n.jsxs)("li",{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:"Price"})," \xa0\u20bd ",t.price," Rub"]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:"Total Price"})," \xa0\u20bd ",+t.price*+t.amount," Rub"]})]})]})]})},I=function(t){var e=Object(i.b)(),c=Object(i.c)((function(t){return t.order.itemsArr})),r=Object(i.c)((function(t){return t.auth.userId})),j=Object(i.c)((function(t){return t.auth.token})),_=Object(i.c)((function(t){return t.order.loading})),d=Object(s.useCallback)((function(){e(u.s(r,j))}),[e,r,j]);Object(s.useEffect)((function(){d()}),[d]);var o=Object(n.jsxs)("ul",{className:h.a.OrdersList,children:[Object(n.jsx)("li",{className:h.a.OrdersList__Heading,children:"Orders"}),c.map((function(t,e){return Object(n.jsx)(g,{id:t.id,category:t.category,name:t.name,size:t.size,amount:t.amount,price:t.price,imgUrl:t.imgUrl.split(" ")[0]},e)})),0!==c.length?"":Object(n.jsx)("li",{className:h.a.OrdersList_EmptyTitle,children:"No Orders Yet"})]});return _&&(o=Object(n.jsx)(x.a,{})),Object(n.jsx)(a.a,{children:o})},v=function(t){return Object(n.jsx)("div",{className:b.a.Main,children:Object(n.jsx)(I,{})})};e.default=function(t){var e=Object(i.b)(),c=Object(i.c)((function(t){return null!==t.auth.token})),j=Object(n.jsx)("div",{className:_.a.Account+" AccountWrapper",children:Object(n.jsxs)("div",{className:_.a.Account__Content,children:[Object(n.jsx)("div",{className:_.a.Account__Sidebar,children:Object(n.jsx)(l,{dispatch:e})}),Object(n.jsx)("div",{className:_.a.Account__Main,children:Object(n.jsx)(v,{})})]})});c||(j=Object(n.jsx)(r.a,{to:"/auth"}));var d=Object(i.c)((function(t){return t.auth.authRedirectPath}));return Object(s.useEffect)((function(){"/account"!==d&&e(u.L("/account"))}),[e,d]),Object(n.jsx)(a.a,{children:j})}}}]);
//# sourceMappingURL=6.3d454165.chunk.js.map