(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),i=a(5),r=a.n(i),l=(a(15),a(2)),o=a.n(l),d=a(4),h=a(6),m=a(7),b=a(9),j=a(8),p=(a(17),a.p+"static/media/stand.c056d600.jpg"),u=a.p+"static/media/sola.8882935f.jpg",O=a.p+"static/media/aboutme3.99aad19a.jpg",x=a.p+"static/media/etsy.554ca028.png",v=a.p+"static/media/facebook.b22498db.png",f=a.p+"static/media/instagram.1e26d691.png",w=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this,e)).state={navBarSelected:["","","","",""],shop:[{id:"",link:"",description:""}],gallery:[{id:"",link:"",description:""}]},c.getEtsyImages=Object(d.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://34.106.89.214:443/EtsyImages","localhost"===window.location.hostname&&(t="https://localhost:443/EtsyImages"),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,c.setState({shop:n}),console.log(n);case 10:case"end":return e.stop()}}),e)}))),c.getInstagramImages=Object(d.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://34.106.89.214:443/InstagramImages","localhost"===window.location.hostname&&(t="https://localhost:443/InstagramImages"),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,c.setState({gallery:n}),console.log(n);case 10:case"end":return e.stop()}}),e)}))),c.checkSelected=function(){c.inViewPort(c.Shop)?c.setState({navBarSelected:["navListSelected","","","",""]}):c.inViewPort(c.Gallery)?c.setState({navBarSelected:["","navListSelected","","",""]}):c.inViewPort(c.Events)?c.setState({navBarSelected:["","","navListSelected","",""]}):c.inViewPort(c.AboutMe)?c.setState({navBarSelected:["","","","navListSelected",""]}):c.inViewPort(c.ContactMe)?c.setState({navBarSelected:["","","","","navListSelected"]}):c.setState({navBarSelected:["","","",""]})},c.inViewPort=function(e){var t=e.current.getBoundingClientRect(),a=window.innerHeight||document.documentElement.clientHeight;return!(Math.floor(100-(t.top>=0?0:t.top)/(+-t.height/1)*100)<10||Math.floor(100-(t.bottom-a)/t.height*100)<10)},c.mainC=s.a.createRef(),c.Shop=s.a.createRef(),c.Gallery=s.a.createRef(),c.Events=s.a.createRef(),c.AboutMe=s.a.createRef(),c.ContactMe=s.a.createRef(),c.getEtsyImages(),c.getInstagramImages(),c}return Object(m.a)(a,[{key:"scrollTo",value:function(e){e.current.scrollIntoView(!0),document.getElementById("main-container").scrollBy(0,-80)}},{key:"render",value:function(){var e=this,t=this.state.shop.map((function(e){return Object(c.jsx)("li",{style:{backgroundImage:"url(".concat(e.link,")")},children:Object(c.jsx)("div",{className:"shopButton",children:Object(c.jsxs)("div",{className:"shopButtonPackage",children:[Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"https://www.etsy.com/shop/LinDiBracelets?ref=simple-shop-header-name&listing_id=584303931",target:"_blank",rel:"noreferrer",children:"Go To Store"})}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:e.page,target:"_blank",rel:"noreferrer",children:"Product Details"})})]})})},e.id)})),a=this.state.gallery.map((function(e){return e.link.includes(".mp4")?Object(c.jsx)("li",{children:Object(c.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,children:Object(c.jsx)("source",{src:e.link,type:"video/mp4"})})},e.id):Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:e.link,alt:"stand"})},e.id)})),n=[{id:0,pic:"https://secureservercdn.net/198.71.233.184/49c.223.myftpupload.com/wp-content/uploads/2015/09/06.22.2017_AuroraLifestyle_192-1024x682.jpg",location:"the LOCAL Southlands",date:"Now",link:"https://www.google.com/maps/dir//the+LOCAL+Southlands,+6205+S+Main+St,+Aurora,+CO+80016/@39.6043105,-104.711328,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x876c8c7ce8b12059:0xa92bdf99bdb169ca!2m2!1d-104.7091393!2d39.6043105!3e0"},{id:1,pic:"https://lh5.googleusercontent.com/p/AF1QipNTD1v6zNinsi0uqhHd0jaD7vzFsTrZnVXaD8LE=s1148-k-no",location:"the LOCAL Parker",date:"Now",link:"https://www.google.com/maps/place/the+LOCAL+Parker/@39.5185752,-104.7620033,17z/data=!3m1!4b1!4m5!3m4!1s0x876c91fb146edb0f:0x31e54245863d15c4!8m2!3d39.5185752!4d-104.7620033"},{id:2,pic:u,location:"Sola Salons",date:"Now",link:"https://www.google.com/maps/dir//sola+salon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x876c8c7cf1023691:0xf100f2b3f623dddf?sa=X&ved=2ahUKEwj2h66O0pTuAhWEVs0KHYFTAWsQ9RcwAHoECAoQBA"}].map((function(e){return Object(c.jsxs)("li",{className:"event",children:[Object(c.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{src:e.pic,alt:"eventLocation"})}),Object(c.jsxs)("div",{className:"eventDescription",children:[Object(c.jsxs)("p",{children:["Where: ",Object(c.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:e.location})]}),Object(c.jsxs)("p",{children:["When: ",e.date]})]})]},e.id)}));return Object(c.jsxs)("div",{ref:this.mainC,id:"main-container",onScroll:this.checkSelected,children:[Object(c.jsxs)("nav",{className:"navBar",children:[Object(c.jsxs)("ul",{className:"navList",children:[Object(c.jsx)("li",{className:"removeIcon",children:Object(c.jsx)("a",{href:"https://www.instagram.com/lindibracelets/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{className:"navSocialMediaIcon",src:f,alt:"InstagramLogo"})})}),Object(c.jsx)("li",{className:"removeIcon",children:Object(c.jsx)("a",{href:"https://www.facebook.com/LinDiBracelets/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{className:"navSocialMediaIcon",src:v,alt:"FacebookLogo"})})}),Object(c.jsx)("li",{className:"removeIcon",children:Object(c.jsx)("a",{href:"https://www.etsy.com/shop/LinDiBracelets?ref=simple-shop-header-name&listing_id=584303931",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{className:"navSocialMediaIcon",src:x,alt:"EtsyLogo"})})}),Object(c.jsx)("li",{className:this.state.navBarSelected[4],onClick:function(){e.scrollTo(e.ContactMe)},children:"Contact Me"}),Object(c.jsx)("li",{className:this.state.navBarSelected[3],onClick:function(){e.scrollTo(e.AboutMe)},children:"About Me"}),Object(c.jsx)("li",{className:this.state.navBarSelected[2],onClick:function(){e.scrollTo(e.Events)},children:"Events"}),Object(c.jsx)("li",{className:this.state.navBarSelected[1],onClick:function(){e.scrollTo(e.Gallery)},children:"Gallery"}),Object(c.jsx)("li",{className:this.state.navBarSelected[0],onClick:function(){e.scrollTo(e.Shop)},children:"Shop"})]}),Object(c.jsx)("img",{className:"logo",src:"data:image/png;base64,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",alt:"logo",onClick:function(){document.getElementById("main-container").scrollTo(0,0)}})]}),Object(c.jsxs)("div",{className:"headerText",children:[Object(c.jsx)("h2",{className:"lindiName",children:"Lindi Bracelets"}),Object(c.jsx)("h2",{className:"headerBold",children:"Love"}),Object(c.jsx)("h2",{className:"headerReg",children:"what you wear. be"}),Object(c.jsx)("h2",{className:"headerBold",children:"Unique"})]}),Object(c.jsxs)("div",{ref:this.Shop,className:"shop",children:[Object(c.jsx)("h1",{children:"Shop"}),Object(c.jsx)("ul",{children:t})]}),Object(c.jsxs)("div",{ref:this.Gallery,className:"gallery",children:[Object(c.jsx)("h1",{children:"Gallery"}),Object(c.jsx)("ul",{children:a})]}),Object(c.jsxs)("div",{ref:this.Events,className:"eventsTitle",children:[Object(c.jsx)("h1",{children:"Events"}),Object(c.jsx)("ul",{children:n})]}),Object(c.jsxs)("div",{ref:this.AboutMe,className:"aboutMe eventsTitle",children:[Object(c.jsx)("h1",{children:" About Me"}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{className:"event",children:[Object(c.jsx)("img",{src:"https://i.etsystatic.com/isa/d8132b/1911746164/isa_760xN.1911746164_8nx5.jpg?version=0",alt:"eventLocation"}),Object(c.jsx)("div",{className:"eventDescription",children:Object(c.jsx)("p",{children:"I learned how to crochet from my mom and grandma when I was little. The new high quality thin cotton strings in variety of colors in combination with the beads created new possiblity in front of me. I started making the bracelets in 2017."})})]}),Object(c.jsxs)("li",{className:"event",children:[Object(c.jsx)("img",{src:p,alt:"eventLocation"}),Object(c.jsx)("div",{className:"eventDescription",children:Object(c.jsx)("p",{children:"I love experimenting and incorporating different patterns with the sparkle of the beads and jam stones. Some bracelets are inspired by the ancient Bulgarian embroidery patterns, and others are sparkling asymmetrically"})})]}),Object(c.jsxs)("li",{className:"event",children:[Object(c.jsx)("img",{src:O,alt:"eventLocation"}),Object(c.jsx)("div",{className:"eventDescription",children:Object(c.jsx)("p",{children:"I love traveling and nature. I draw inspiration from every place I visit and I encorperate that into the design of my creations If you like any of my product but you have a different favorite color let me know I would love to make it custom."})})]})]})]}),Object(c.jsxs)("div",{ref:this.ContactMe,className:"contactMe",children:[Object(c.jsx)("h1",{children:"Contact Me"}),Object(c.jsx)("p",{children:"Got something different in mind? Send me an email and we can make it a realty"}),Object(c.jsxs)("form",{className:"contactMeForm",children:[Object(c.jsx)("input",{type:"text",placeholder:"Email"}),Object(c.jsx)("input",{type:"text",placeholder:"Subject"}),Object(c.jsx)("textarea",{className:"formContent"}),Object(c.jsx)("button",{className:"button",type:"submit",children:"Submit"})]})]}),Object(c.jsxs)("div",{className:"socialMedia",children:[Object(c.jsx)("p",{children:"All rights reserved"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://www.instagram.com/lindibracelets/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{className:"socialMediaIcon",src:f,alt:"FacebookLogo"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://www.facebook.com/LinDiBracelets/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{className:"socialMediaIcon",src:v,alt:"InstagramLogo"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://www.etsy.com/shop/LinDiBracelets?ref=simple-shop-header-name&listing_id=584303931",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{className:"socialMediaIcon",src:x,alt:"EtsyLogo"})})})]})]})]})}}]),a}(n.PureComponent),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(w,{}),document.getElementById("root")),y()}},[[18,1,2]]]);
//# sourceMappingURL=main.96d45235.chunk.js.map