(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,a){t.exports=a(45)},22:function(t,e,a){},43:function(t,e,a){},45:function(t,e,a){"use strict";a.r(e);var n=a(0),l=a.n(n),o=a(9),r=a.n(o),i=(a(22),a(10)),u=a(11),c=a(14),s=a(12),h=a(15),d=a(13),v=a.n(d),m=(a(43),function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(c.a)(this,Object(s.a)(e).call(this,t))).state={data:null,loading:!0},a}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.load()}},{key:"load",value:function(){var t=this;v.a.get("https://xavierdpt.github.io/data/data.js").then(function(e){t.setState({loading:!1,data:e.data})}).catch(function(t){console.log(t)})}},{key:"loading",value:function(){return l.a.createElement("div",null,"Loading ...")}},{key:"authors",value:function(t){for(var e="",a="",n=0;n<t.length;++n)e=e+a+t[n],a=", ";return e}},{key:"books",value:function(){var t=this.state.data.books,e=[];for(var a in t)e.push(l.a.createElement("li",{key:a},t[a].title," ; ",this.authors(t[a].authors)," ; ",t[a].date));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Books"),l.a.createElement("ul",null,e))}},{key:"tv",value:function(){var t=this.state.data.tv,e=[];for(var a in t)e.push(l.a.createElement("li",{key:a},t[a].title," ; ",this.authors(t[a].authors)," ; ",t[a].date));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"TV"),l.a.createElement("ul",null,e))}},{key:"yt",value:function(){var t=this.state.data.youtube,e=[];for(var a in t)e.push(l.a.createElement("div",{key:a},l.a.createElement("div",null,l.a.createElement("img",{src:"https://i.ytimg.com/vi/"+a+"/hqdefault.jpg",style:{width:"246px",height:"138px"}})),l.a.createElement("div",null,t[a].title)));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"YouTube"),e)}},{key:"data",value:function(){var t=this.state.data,e=t.books,a=t.tv,n=[];for(var o in e)n.push(l.a.createElement("li",{key:o},e[o].title));var r=[];for(var i in a)r.push(l.a.createElement("li",{key:i},a[i].title));return l.a.createElement("div",null,this.books(),this.tv(),this.yt())}},{key:"render",value:function(){var t=this.state,e=t.loading;t.data;return e?this.loading():this.data()}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.2e6bb09b.chunk.js.map