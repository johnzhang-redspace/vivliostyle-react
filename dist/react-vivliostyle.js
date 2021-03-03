function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var n=e(require("@emotion/styled")),t=require("@vivliostyle/core"),o=require("react"),i=e(o);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function a(){var e,n,t=(e=["\n  overflow: scroll;\n  background: ",";\n\n  @media screen {\n    [data-vivliostyle-page-container] {\n      background: ",';\n      z-index: 0;\n    }\n\n    [data-vivliostyle-viewer-viewport] {\n      display: flex;\n      overflow: auto;\n      position: relative;\n    }\n\n    [data-vivliostyle-outer-zoom-box] {\n      margin: auto;\n      overflow: hidden;\n      flex: none;\n    }\n\n    [data-vivliostyle-viewer-viewport] [data-vivliostyle-spread-container] {\n      display: flex;\n      flex: none;\n      justify-content: center;\n      transform-origin: left top;\n    }\n\n    [data-vivliostyle-viewer-viewport][data-vivliostyle-page-progression="ltr"]\n      [data-vivliostyle-spread-container] {\n      flex-direction: row;\n    }\n\n    [data-vivliostyle-viewer-viewport][data-vivliostyle-page-progression="rtl"]\n      [data-vivliostyle-spread-container] {\n      flex-direction: row-reverse;\n    }\n\n    [data-vivliostyle-viewer-viewport] [data-vivliostyle-page-container] {\n      margin: 0 auto;\n      flex: none;\n      transform-origin: center top;\n    }\n\n    [data-vivliostyle-viewer-viewport][data-vivliostyle-spread-view="true"]\n      [data-vivliostyle-page-container][data-vivliostyle-page-side="left"] {\n      margin-right: 1px;\n      transform-origin: right top;\n    }\n\n    [data-vivliostyle-viewer-viewport][data-vivliostyle-spread-view="true"]\n      [data-vivliostyle-page-container][data-vivliostyle-page-side="right"] {\n      margin-left: 1px;\n      transform-origin: left top;\n    }\n\n    [data-vivliostyle-viewer-viewport][data-vivliostyle-spread-view="true"]\n      [data-vivliostyle-page-container][data-vivliostyle-unpaired-page="true"] {\n      margin-left: auto;\n      margin-right: auto;\n      transform-origin: center top;\n    }\n  }\n\n  /* vivliostyle-viewport */\n  [data-vivliostyle-layout-box] {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n    z-index: -1;\n  }\n\n  [data-vivliostyle-debug] [data-vivliostyle-layout-box] {\n    right: auto;\n    bottom: auto;\n    overflow: visible;\n    z-index: auto;\n  }\n\n  [data-vivliostyle-page-container] {\n    position: relative;\n    overflow: hidden;\n  }\n\n  [data-vivliostyle-bleed-box] {\n    position: absolute;\n    overflow: hidden;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n\n  [data-vivliostyle-page-box] ~ [data-vivliostyle-page-box] {\n    display: none;\n  }\n\n  [data-vivliostyle-toc-box] {\n    position: absolute;\n    left: 3px;\n    top: 3px;\n    overflow: scroll;\n    overflow-x: hidden;\n    background: rgba(248, 248, 248, 0.9);\n    border-radius: 2px;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n  }\n\n  @media print {\n    [data-vivliostyle-toc-box] {\n      display: none;\n    }\n\n    [data-vivliostyle-outer-zoom-box],\n    [data-vivliostyle-spread-container] {\n      width: 100% !important;\n      height: 100% !important;\n    }\n\n    [data-vivliostyle-spread-container],\n    [data-vivliostyle-page-container] {\n      -moz-transform: none !important;\n      -ms-transform: none !important;\n      -webkit-transform: none !important;\n      transform: none !important;\n    }\n\n    [data-vivliostyle-page-container] {\n      display: block !important;\n      max-width: 100%;\n      height: 100% !important;\n      max-height: 100%;\n    }\n\n    /* Workaround for Chrome printing problem */\n    /* [data-vivliostyle-page-box] {\n        padding-bottom: 0 !important;\n        overflow: visible !important;\n    } */\n    [data-vivliostyle-bleed-box] > div > div::before {\n      display: block;\n      content: "";\n      padding-top: 0.015625px;\n      margin-bottom: -0.015625px;\n    }\n\n    /* Gecko-only hack, see https://bugzilla.mozilla.org/show_bug.cgi?id=267029#c17 */\n    @-moz-document regexp(\'.*\') {\n      [data-vivliostyle-page-container]:nth-last-of-type(n + 2) {\n        top: -1px;\n        margin-top: 1px;\n        margin-bottom: -1px;\n      }\n    }\n  }\n'],n||(n=e.slice(0)),e.raw=n,e);return a=function(){return t},t}var l=n.div(a(),function(e){return e.background},function(e){return e.background});exports.Renderer=function(e){var n=e.source,a=e.cfiURL,d=e.page,v=void 0===d?1:d,s=e.zoom,u=void 0===s?1:s,c=e.fontSize,p=void 0===c?16:c,f=e.background,g=void 0===f?"#ececec":f,y=e.renderAllPages,m=void 0===y||y,b=e.autoResize,h=void 0===b||b,w=e.pageViewMode,x=void 0===w?t.PageViewMode.SINGLE_PAGE:w,L=e.defaultPaperSize,z=e.pageBorderWidth,S=void 0===z?1:z,k=e.fitToScreen,T=void 0!==k&&k,P=e.userStyleSheet,E=e.authorStyleSheet,R=e.style,C=e.navigateToInternalURLs,O=e.onToCLoad,W=e.onSetInstance,A=e.onMessage,M=e.onError,V=e.onReadyStateChange,j=e.onLoad,G=e.onNavigation,I=e.onHyperlink,N=e.children,q=o.useRef(null),B=o.useRef(),D=o.useRef();function U(){B.current.setOptions({fontSize:p,pageViewMode:x,zoom:u,renderAllPages:m,autoResize:h,defaultPaperSize:L,pageBorderWidth:S,fitToScreen:T})}function H(){var e,t,o=B.current,i=n.endsWith(".json"),l=r({},a?{fragment:a}:null,P?{userStyleSheet:[(e={},e[P.endsWith(".css")?"url":"text"]=P,e)]}:null,E?{authorStyleSheet:[(t={},t[E.endsWith(".css")?"url":"text"]=E,t)]}:null);i?o.loadPublication(n,l):o.loadDocument({url:n},l,{fontSize:p,pageViewMode:x,zoom:1,renderAllPages:m,autoResize:h,defaultPaperSize:L,pageBorderWidth:S,fitToScreen:!1})}o.useEffect(function(){return B.current=new t.CoreViewer({viewportElement:q.current}),U(),function(){function e(e,n){A&&A(e.content,n)}var n=function(n){return e(n,"debug")},o=function(n){return e(n,"info")},i=function(n){return e(n,"warn")};function r(e){M&&M(e.content)}function a(){V&&V(B.current.readyState)}function l(){j&&j(D.current),W&&W(s),O&&O(function(e,n){return s.showTOC(e,n)},s.isTOCVisible(),function(){return s.getTOC()})}function d(e){var n={cfi:e.cfi,docTitle:e.docTitle,epageCount:e.epageCount,epage:e.epage,metadata:e.metadata};D.current=n,G&&G(n)}function v(e){I&&I(e),C&&e.href&&e.internal&&s.navigateToInternalUrl(e.href)}var s=B.current;return s.addListener("debug",n),s.addListener("info",o),s.addListener("warn",i),s.addListener("error",r),s.addListener("readystatechange",a),s.addListener("loaded",l),s.addListener("nav",d),s.addListener("hyperlink",v),function(){s.loadDocument({url:""}),V&&V(t.ReadyState.LOADING),s.removeListener("debug",n),s.removeListener("info",o),s.removeListener("warn",i),s.removeListener("error",r),s.removeListener("readystatechange",a),s.removeListener("loaded",l),s.removeListener("nav",d),s.removeListener("hyperlink",v),W&&W(null),q.current&&(q.current.innerHTML=""),q.current=null,B.current=null,D.current=null}}()},[]),o.useEffect(function(){H()},[n,E,P]),o.useEffect(function(){U()},[p,x,u,m,h,L,S,T]),o.useEffect(function(){var e;null===(e=B.current)||void 0===e||e.navigateToPage(t.Navigation.EPAGE,v-1)},[v]);var _=i.createElement(l,{ref:q,style:R,background:g});return"function"==typeof N&&N instanceof Function?N({container:_,reload:H}):_};
//# sourceMappingURL=react-vivliostyle.js.map