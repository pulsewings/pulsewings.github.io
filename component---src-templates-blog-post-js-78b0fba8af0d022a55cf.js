(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{206:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(221),i=r(219),p=r(217),l=r(210),c=(r(241),r(222)),s=r(213),m=r(218),u=r(211),d=l.b.div.withConfig({displayName:"Bio__BioWrapper",componentId:"d7fgaq-0"})(["& .author-image{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;top:-40px;left:50%;margin-left:-40px;width:80px;height:80px;border-radius:100%;overflow:hidden;padding:6px;z-index:2;box-shadow:#ececec 0 0 0 1px;background-color:",";}& .author-image .img{position:relative;display:block;width:100%;height:100%;background-size:cover;background-position:center center;border-radius:100%;}& .author-profile .author-image{position:relative;left:auto;top:auto;width:120px;height:120px;padding:3px;margin:-100px auto 0 auto;box-shadow:none;}"],u.a.backgroundArticle),A=Object(l.b)(c.c).withConfig({displayName:"Bio__BioText",componentId:"d7fgaq-1"})(["& a{border-bottom:1px dotted #ececec;}& a:hover{border-bottom-style:solid;}"]),g=function(){var t=Object(s.a)(),e=t.authorAvatar,r=t.authorName,n=t.authorDescription,a=Object(m.a)(e).fixed;return o.a.createElement(d,null,o.a.createElement("figure",{className:"author-image"},o.a.createElement("a",{alt:r,style:{backgroundImage:'url("'+a.src+'")'},className:"img"})),o.a.createElement("section",null,o.a.createElement("h4",null,"About the author"),o.a.createElement(A,{dangerouslySetInnerHTML:{__html:n}})))},f=r(248);r(212);var h=l.b.article.withConfig({displayName:"Article__ArticleWrapper",componentId:"jwdbi9-0"})(["padding:0 30px 30px;@media only screen and (max-width:500px){padding:0;}"]),b=l.b.footer.withConfig({displayName:"Article__ArticleFooter",componentId:"jwdbi9-1"})(["position:relative;margin:6rem 0 0;padding:3rem 0 0;border-top:1px solid #ececec;"]),x=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var t=this.props.post;t.tableOfContents;return o.a.createElement(h,null,o.a.createElement("ul",null),o.a.createElement(f.a,{content:t.body,date:t.frontmatter.date,tags:t.frontmatter.tags}),o.a.createElement(b,null,o.a.createElement(g,null)))},n}(o.a.Component),y=r(228);var v=function(t){var e,r;function a(){return t.apply(this,arguments)||this}return r=t,(e=a).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,a.prototype.render=function(){var t=this.props,e=[t.previous,t.next].filter(function(t){return t}).map(function(t){return{node:t}});return o.a.createElement(n.Fragment,null,o.a.createElement(y.a,{posts:e}))},a}(o.a.Component),E=r(220),w=r(243);r.d(e,"pageQuery",function(){return k});var Q=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var t=this.props.data.post,e=this.props.pageContext,r=e.previous,n=e.next;return o.a.createElement(a.a,{location:this.props.location},o.a.createElement(E.a,{title:t.frontmatter.title,description:t.excerpt,cover:t.frontmatter.cover,imageFb:t.frontmatter.imageFb&&t.frontmatter.imageFb.publicURL,imageTw:t.frontmatter.imageTw&&t.frontmatter.imageTw.publicURL,lang:t.frontmatter.language,path:t.frontmatter.slug,isBlogPost:!0}),o.a.createElement(p.a,{heroImg:t.frontmatter.cover&&t.frontmatter.cover.publicURL,title:t.frontmatter.title}),o.a.createElement(i.a,null,o.a.createElement(x,{post:t})),o.a.createElement(i.a,null,o.a.createElement(v,{previous:r,next:n})),o.a.createElement(i.a,null,o.a.createElement(w.a,{slug:t.frontmatter.slug,title:t.frontmatter.title})))},n}(o.a.Component),k=(e.default=Q,"2237880351")},214:function(t,e,r){"use strict";var n=r(0),o=r.n(n),a=r(210),i=r(215),p=r.n(i),l=r(216),c=r.n(l);var s=a.b.img.withConfig({displayName:"Flag__FlagImage",componentId:"sc-1n11y4w-0"})(["padding-right:0.5rem;padding-bottom:0.2rem;"]),m=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var t=this.props.language,e="en"===t?p.a:c.a,r="en"===t?"english post":"post en francais";return o.a.createElement(s,{src:e,alt:r,className:"flag"})},n}(o.a.Component);e.a=m},215:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAPASURBVDhPrZT7TxxVFMc/d/Y1wA60gEXwgSU1ViJiJSZqahpqm2jQNlRSHyhRa6wG2kTSpK3v2BptoyRorJi2IaLlF/qyoTU0sRAClDaKRqQ0qShElkJBdpd9z+7seGfQ+A9wkjvn3jnn3Pu93/PNFaY0lsiUf/2SmNATuqm4XYyPTRMOJ3C7nXbAMNLkF2STEw+RXAjjyvYSVDXmZhZwOBYx6HoKrWA5N4dmEZoXMflFi1m4YT2B4jtp2ncKny9IVpZKPK5TXfswlROXmb84RO5DFXQXP8CpYwOoqptoTOeWu4p4uUQn9/pfOJ7dgjJcupZIbz/qd8fZv7+aqk33EgpF5bkmQsivIqwZpviPWpNQIsnjm8p5S7tGocckZ8d2Bn6ZRLnUe5U9v+cSy9QI7H2Xmur7adxbJRHOEgrrSAikg0GIxQlHdK4vJNi5tZSNF9pQn6jC/WQV9fXfcrFvDCUm4fZ3DbPxkxEGVz2C75k6ykWAr1q3k6llkAyESM3NkwyG8OZnc2BdFsUnW1nW/CndvjQVFR/QNzBBTKJlzh8wdcM0o3raDOiWUEzTiEQWJ9Imd71njq5Zb3vbov/H/OGEXWfVW/uI0Z17TPObE5DhwVKcrTqLq/QiR44cDeGRsUQCQ6ITiiJzFhMVyafFq4SFeOEpFKtG98trzAdJ+YMYATmkTwcX7JGamSXpm7K9tTb8AdIyx47JPKvOqk/LzcVky1Ezs6cP0+0mlTSIRHWE1J1wyWEYhAd/InVjDueKfLwPVmDEJQrVIxEpqMLA5XJYgiNWuRZx4tzP5pU/YkQjCQqLNHY8Lwtm5zC+78JdV8vE1m3Mdxwnt6aG4o6j9tXDXd14VAfHnKu52j+CV+qytCQDh4uy95sPHGFqPETrkTpibe0kG17jHXMNpy/N8ljoCoHh31hx3z00/qhwvvMymxs246t/g1u7z/LZjTy+bjqMW3hQIpEYr7xey9i1j1l4cRuJM508V9ZIU8sZ8papiLSFRfIhuc3P1/i8uZ11lQe5/exJbpOkn5s4xJu7X0J3ulD2HXyaw4dqmVp5N9Ml5awaKaWz7bzcIFMOgWIRS8r2dpvJprfnV8nVq/y5YQvZPT/Q0L6btx/NQ8mYGmew4A4u7PqQso+GiYyNoWkSkXBgJPxMy3q/c7ntrbX1X5NiVpQUqwtr+bJjiKzRIcyZScTfwYDpTybxJBPkZMkOWofbJuQrEifqVFFk99Kyi5mpOF6vKmOLGrTABoOyefEkNxUVSipsBS6NLeHjCP8AHa/ubr0bcvgAAAAASUVORK5CYII="},216:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKnRFWHRDcmVhdGlvbiBUaW1lAEZyIDkgTm92IDIwMDcgMTY6Mjc6MDYgKzAxMDAM3ZqdAAAAB3RJTUUH1wsJDxwzm8yD2gAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAHdSURBVHjaxVO7btRAFD3zsNdxQIqQqBYk6ghR0tLxDXwCn8HX0BGlo6JCKAqCIlVCkCjQLgkgxbDB67XnlXPHRvsJGWs04/F53ZkxcNtNvXj5arG7uzf3KfJNIUSFh/dn2H9Qc564pABj0Z98hPt6CsVHyzoCrv6tl/bO3Xvzx0+fw0cveugp8ORRjWf7e1lAmi5naKuAHh2QSI4RpQbeHBzOrSfIBQ/vAzWRE8jcDQNCQk4g3TtinMtkEUHfIaxW0OIqa55rMTEYu3xXWm/r1AYZ5AYolqoJ6D4dU1jDCjFkMrskoFukKG2ys56EFEkyC38abE4+w1z/heU3K0Q/OUchp0zNxCCuU+sX37F69xZYt9CmQDHKUYDwQMPIONpo9A5o2gH9ZoPBjwKm5h78/glcs+ayylQtpyOjQFLS2fnovMHrDz9wftEixTACJKY1HFUmZbIk5GM4WkWyI/bg+AJD0CjKAmVhMlFPpchmaWUm4v8+HrElAu/Pmnz+RWmReGmU2QoYmRsRQHYdE2CbYMOaF51HOWNt1iJSoODFqeSd9YlAUe2g4+gVpjI0ZmoUspe/Lpfdqpk7cWH0QN0zVeOwqxnSjJtYVWi/fEO/DlDWZ2chX4W0vO1/EbgBHTnbxGOMU+UAAAAASUVORK5CYII="},228:function(t,e,r){"use strict";var n=r(0),o=r.n(n),a=r(222),i=r(214),p=r(213),l=r(210),c=l.b.ul.withConfig({displayName:"RelatedPosts__RelatedPostUl",componentId:"p1ctuz-0"})(["display:grid;grid-gap:10px;grid-template-columns:1fr 1fr;padding:0;margin:0;list-style:none;@media (max-width:780px){margin:0;}&:li:first-child:{text-align:right;color:#555;}"]),s=l.b.li.withConfig({displayName:"RelatedPosts__RelatedPostLi",componentId:"p1ctuz-1"})(["& > a{color:#555;border-bottom:1px dotted #555;line-height:1.5;}& > .previous-text,& > .next-text{line-height:1.5;font-size:12px;}&:first-child{text-align:left;border-right:1px solid #ececec;padding-right:10px;& > .next-text{display:none;}}&:nth-child(2){text-align:right;padding-left:10px;& > .previous-text{display:none;}}"]);e.a=function(t){var e=t.posts,r=Object(p.a)().multilangPosts;return o.a.createElement(c,null,e.map(function(t){var e=t.node.frontmatter.title,n=t.node.frontmatter.slug,p=t.node.frontmatter.language||"en";return o.a.createElement(s,{key:n},o.a.createElement("p",{class:"previous-text"},"<< 이전글 "),o.a.createElement("p",{class:"next-text"},"다음글 >>"),o.a.createElement(a.b,{to:"/"+n},r&&o.a.createElement(i.a,{language:p}),e))}))}},241:function(t,e,r){"use strict";r(267)("fixed",function(t){return function(){return t(this,"tt","","")}})},267:function(t,e,r){var n=r(1),o=r(13),a=r(43),i=/"/g,p=function(t,e,r,n){var o=String(a(t)),p="<"+e;return""!==r&&(p+=" "+r+'="'+String(n).replace(i,"&quot;")+'"'),p+">"+o+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(p),n(n.P+n.F*o(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",r)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-78b0fba8af0d022a55cf.js.map