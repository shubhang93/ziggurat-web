(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9eSz":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var i,n=a(r("PJYZ")),s=a(r("VbXa")),o=a(r("8OQS")),d=a(r("pVnL")),l=a(r("q1tI")),c=a(r("17x9")),u=function(e){var t=(0,d.default)({},e),r=t.resolutions,a=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,r=e.fixed,a=m(t||r||[]);return a&&a.src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),r=g(t);return p[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,S=y&&window.IntersectionObserver,v=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:n}),r&&l.default.createElement("source",{media:i,srcSet:r,sizes:n}))}))}function x(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function O(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:a})}))}function j(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:a})}))}function E(e,t){var r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),v.set(e,t)),function(){r.unobserve(e),v.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)})).join("")+"<img "+l+s+o+r+a+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=l.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(L,(0,d.default)({ref:t,src:r},n,{ariaHidden:s}));return a.length>1?l.default.createElement("picture",null,i(a),o):o})),L=l.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:r,srcSet:a,src:i},m,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&h(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&S&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),(r=g(t))&&(p[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,S=e.Tag,v=e.itemProp,x=e.loading,E=e.draggable,I=p||h;if(!I)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,H=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,d.default)({opacity:k?1:0,transition:H?"opacity "+y+"ms":"none"},o),C="boolean"==typeof b?"lightgray":b,T={transitionDelay:y+"ms"},P=(0,d.default)({opacity:this.state.imgLoaded?0:1},H&&T,o,f),W={title:t,alt:this.state.isVisible?"":r,style:P,className:g,itemProp:v},N=this.state.isHydrated?m(I):I[0];if(p)return l.default.createElement(S,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:N.maxWidth?N.maxWidth+"px":null,maxHeight:N.maxHeight?N.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},l.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),C&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},H&&T)}),N.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:N.base64,spreadProps:W,imageVariants:I,generateSources:j}),N.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:N.tracedSVG,spreadProps:W,imageVariants:I,generateSources:O}),this.state.isVisible&&l.default.createElement("picture",null,w(I),l.default.createElement(L,{alt:r,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:x,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)({alt:r,title:t,loading:x},N,{imageVariants:I}))}}));if(h){var F=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},n);return"inherit"===n.display&&delete F.display,l.default.createElement(S,{className:(a||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},C&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},H&&T)}),N.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:N.base64,spreadProps:W,imageVariants:I,generateSources:j}),N.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:N.tracedSVG,spreadProps:W,imageVariants:I,generateSources:O}),this.state.isVisible&&l.default.createElement("picture",null,w(I),l.default.createElement(L,{alt:r,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:x,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)({alt:r,title:t,loading:x},N,{imageVariants:I}))}}))}return null},t}(l.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var H=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function C(e){return function(t,r,a){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[r]=e,i),t,"prop",a)}}k.propTypes={resolutions:H,sizes:V,fixed:C(c.default.oneOfType([H,c.default.arrayOf(H)])),fluid:C(c.default.oneOfType([V,c.default.arrayOf(V)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=k;t.default=T},RXBc:function(e,t,r){"use strict";r.r(t);var a=r("2A+t"),i=r("izhR"),n=r("Bl7J"),s=r("Wbzz"),o=r("9eSz"),d=r.n(o),l=function(){var e,t,r=Object(s.useStaticQuery)("2389258745");return(null==r||null===(e=r.placeholderImage)||void 0===e||null===(t=e.childImageSharp)||void 0===t?void 0:t.fluid)?Object(a.c)(d.a,{sx:{width:["80%","60%","40%","45%","40%","25%"],height:"100%"},fluid:r.placeholderImage.childImageSharp.fluid}):Object(a.c)("div",null,"Picture not found")},c=r("vrFN");t.default=function(){return Object(a.c)(n.a,null,Object(a.c)(c.a,{title:"Home"}),Object(a.c)("section",{sx:{minHeight:"fit-content",width:"100vw",maxWidth:"100%",height:"100vh",marginBottom:"10vh"}},Object(a.c)(i.b,{sx:{alignItems:"center",flexDirection:"column",justifyContent:"center"}},Object(a.c)(l,null),Object(a.c)("h1",{sx:{fontFamily:"body",fontSize:["1.3rem","1.5rem","2.25rem","3.5rem","2rem"],color:"white",textAlign:"center",letterSpacing:"0.05em"}},"Redefining how you work with real time events."),Object(a.c)("p",{sx:{fontFamily:"body",fontSize:["0.867rem","1rem","1.5rem","2rem","1.5rem"],color:"white",backgroundSize:"100%",textAlign:"center"}},Object(a.c)("span",{className:"gradient-text"},"Powering more than 250 applications at Gojek.")),Object(a.c)("br",null),Object(a.c)("a",{href:"https://github.com/gojek/ziggurat",target:"_blank",rel:"noreferrer",sx:{borderRadius:"5px",background:"#31C38B",padding:["10px","10px","15px","15px","15px"],display:"flex",textDecoration:"none",justifyContent:"center",alignItems:"center"}},Object(a.c)("h3",{sx:{color:"white",marginTop:"0px",marginBottom:"0px",fontFamily:"body",fontSize:["0.8rem","0.8rem","1rem","2rem","1.3rem"]}},"Get Started →")))),Object(a.c)("br",null),Object(a.c)("section",{id:"description",sx:{minHeight:"fit-content",width:"100vw",maxWidth:"100%",height:"100vh"}},Object(a.c)(i.b,{sx:{flexDirection:"column",justifyContent:"center",alignItems:"center"}},Object(a.c)("h1",{sx:{fontFamily:"body",color:"white",fontSize:["1.3rem","1.5rem","2.25rem","3.5rem","2.3rem"]}},"Ziggurat"),Object(a.c)("h2",{sx:{fontFamily:"body",color:"#9B7D8E",fontSize:["0.867rem","1rem","1.5rem","2.5rem","1.8rem"]}},"/ˈzɪɡʊˌræt/"),Object(a.c)("p",{sx:{fontFamily:"body",color:"white",textAlign:"center",width:"60%",fontSize:["0.8rem","1rem","1rem","2rem","1.5rem"],lineHeight:"1.5"}},"Ziggurat is a framework built to simplify Stream processing on Kafka. It can be used to create a full-fledged Clojure app that reads and processes messages from Kafka. Ziggurat is built with the intent to abstract out"),Object(a.c)("pre",{sx:{fontFamily:"code",border:"2px",borderColor:"white",borderStyle:"solid",color:"white",textAlign:"left",padding:["10px","10px","10px","15px","20px"]}},Object(a.c)("code",null,Object(a.c)("ul",{sx:{listStyle:"none",fontSize:["0.8rem","0.8rem","1rem","1.8rem","1.3rem"]}},Object(a.c)("li",null,"→ reading messages from Kafka"),Object(a.c)("li",null,"→ retrying failed messages"),Object(a.c)("li",{style:{marginBottom:"0px"}},"→ setting up an HTTP server")))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-03bca07ca119d0e7d205.js.map