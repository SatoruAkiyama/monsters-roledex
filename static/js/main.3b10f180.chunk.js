(this["webpackJsonpmonster-roledex"]=this["webpackJsonpmonster-roledex"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(3),c=n.n(s),o=(n(14),n(1)),l=n.n(o),i=n(4),u=n(5),m=n(6),h=n(8),p=n(7);n(16),n(17),n(18);var d=function(e){return a.a.createElement("div",{className:"card-container col s12 m4 l3"},a.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),a.a.createElement("h2",null,e.monster.name),a.a.createElement("p",null,e.monster.email))},f=function(e){var t=e.monsters.map((function(e,t){return a.a.createElement(d,{key:t,monster:e})}));return a.a.createElement("div",{className:"card-list row"},t)},E=(n(19),function(e){var t=e.placeholder,n=e.searching;return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{type:"text",placeholder:t,onChange:n}))}),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).searching=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({monsters:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return 0===r.length?a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monsters RolodBox"),a.a.createElement(E,{placeholder:"search monsters",searching:this.searching}),a.a.createElement("h3",{className:"white-text"},"Sorry, not eixist...")):a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monsters RolodBox"),a.a.createElement(E,{placeholder:"search monsters",searching:this.searching}),a.a.createElement(f,{monsters:r}))}}]),n}(r.Component);c.a.render(a.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.3b10f180.chunk.js.map