import n from"@emotion/styled";import{ReadyState as e,Navigation as t,PageViewMode as o,CoreViewer as i}from"@vivliostyle/core";import r,{useRef as a,useEffect as l}from"react";function d(){return(d=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function v(){var n,e,t=(n=["\n  overflow: scroll;\n  background: ",";\n\n  @media screen {\n    [data-vivliostyle-page-container] {\n      background: ",';\n      z-index: 0;\n    }\n\n    [data-vivliostyle-viewer-viewport] {\n      display: flex;\n      overflow: auto;\n      position: relative;\n    }\n\n    [data-vivliostyle-outer-zoom-box] {\n      margin: auto;\n      overflow: hidden;\n      flex: none;\n    }\n\n    [data-vivliostyle-viewer-viewport] [data-vivliostyle-spread-container] {\n      display: flex;\n      flex: none;\n      justify-content: center;\n      transform-origin: left top;\n    }\n\n    [data-vivliostyle-viewer-viewport][data-vivliostyle-page-progression="ltr"]\n      [data-vivliostyle-spread-container] {\n      flex-direction: row;\n    }\n\n    [data-vivliostyle-viewer-viewport][data-vivliostyle-page-progression="rtl"]\n      [data-vivliostyle-spread-container] {\n      flex-direction: row-reverse;\n    }\n\n    [data-vivliostyle-viewer-viewport] [data-vivliostyle-page-container] {\n      margin: 0 auto;\n      flex: none;\n      transform-origin: center top;\n    }\n\n    [data-vivliostyle-viewer-viewport][data-vivliostyle-spread-view="true"]\n      [data-vivliostyle-page-container][data-vivliostyle-page-side="left"] {\n      margin-right: 1px;\n      transform-origin: right top;\n    }\n\n    [data-vivliostyle-viewer-viewport][data-vivliostyle-spread-view="true"]\n      [data-vivliostyle-page-container][data-vivliostyle-page-side="right"] {\n      margin-left: 1px;\n      transform-origin: left top;\n    }\n\n    [data-vivliostyle-viewer-viewport][data-vivliostyle-spread-view="true"]\n      [data-vivliostyle-page-container][data-vivliostyle-unpaired-page="true"] {\n      margin-left: auto;\n      margin-right: auto;\n      transform-origin: center top;\n    }\n  }\n\n  /* vivliostyle-viewport */\n  [data-vivliostyle-layout-box] {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n    z-index: -1;\n  }\n\n  [data-vivliostyle-debug] [data-vivliostyle-layout-box] {\n    right: auto;\n    bottom: auto;\n    overflow: visible;\n    z-index: auto;\n  }\n\n  [data-vivliostyle-page-container] {\n    position: relative;\n    overflow: hidden;\n  }\n\n  [data-vivliostyle-bleed-box] {\n    position: absolute;\n    overflow: hidden;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n\n  [data-vivliostyle-page-box] ~ [data-vivliostyle-page-box] {\n    display: none;\n  }\n\n  [data-vivliostyle-toc-box] {\n    position: absolute;\n    left: 3px;\n    top: 3px;\n    overflow: scroll;\n    overflow-x: hidden;\n    background: rgba(248, 248, 248, 0.9);\n    border-radius: 2px;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n  }\n\n  @media print {\n    [data-vivliostyle-toc-box] {\n      display: none;\n    }\n\n    [data-vivliostyle-outer-zoom-box],\n    [data-vivliostyle-spread-container] {\n      width: 100% !important;\n      height: 100% !important;\n    }\n\n    [data-vivliostyle-spread-container],\n    [data-vivliostyle-page-container] {\n      -moz-transform: none !important;\n      -ms-transform: none !important;\n      -webkit-transform: none !important;\n      transform: none !important;\n    }\n\n    [data-vivliostyle-page-container] {\n      display: block !important;\n      max-width: 100%;\n      height: 100% !important;\n      max-height: 100%;\n    }\n\n    /* Workaround for Chrome printing problem */\n    /* [data-vivliostyle-page-box] {\n        padding-bottom: 0 !important;\n        overflow: visible !important;\n    } */\n    [data-vivliostyle-bleed-box] > div > div::before {\n      display: block;\n      content: "";\n      padding-top: 0.015625px;\n      margin-bottom: -0.015625px;\n    }\n\n    /* Gecko-only hack, see https://bugzilla.mozilla.org/show_bug.cgi?id=267029#c17 */\n    @-moz-document regexp(\'.*\') {\n      [data-vivliostyle-page-container]:nth-last-of-type(n + 2) {\n        top: -1px;\n        margin-top: 1px;\n        margin-bottom: -1px;\n      }\n    }\n  }\n'],e||(e=n.slice(0)),n.raw=e,n);return v=function(){return t},t}var s=function(n){var v=n.source,s=n.cfiURL,p=n.page,c=void 0===p?1:p,g=n.zoom,f=void 0===g?1:g,m=n.fontSize,y=void 0===m?16:m,b=n.background,h=void 0===b?"#ececec":b,w=n.renderAllPages,x=void 0===w||w,L=n.autoResize,z=void 0===L||L,S=n.pageViewMode,k=void 0===S?o.SINGLE_PAGE:S,T=n.defaultPaperSize,P=n.pageBorderWidth,C=void 0===P?1:P,O=n.fitToScreen,E=void 0!==O&&O,W=n.userStyleSheet,A=n.authorStyleSheet,R=n.style,G=n.navigateToInternalURLs,I=n.onToCLoad,M=n.onSetInstance,j=n.onMessage,V=n.onError,B=n.onReadyStateChange,D=n.onLoad,N=n.onNavigation,U=n.onHyperlink,H=n.children,_=a(null),F=a(),q=a();function J(){F.current.setOptions({fontSize:y,pageViewMode:k,zoom:f,renderAllPages:x,autoResize:z,defaultPaperSize:T,pageBorderWidth:C,fitToScreen:E})}function K(){var n,e,t=F.current,o=v.endsWith(".json"),i=d({},s?{fragment:s}:null,W?{userStyleSheet:[(n={},n[W.endsWith(".css")?"url":"text"]=W,n)]}:null,A?{authorStyleSheet:[(e={},e[A.endsWith(".css")?"url":"text"]=A,e)]}:null);o?t.loadPublication(v,i):t.loadDocument({url:v},i,{fontSize:y,pageViewMode:k,zoom:1,renderAllPages:x,autoResize:z,defaultPaperSize:T,pageBorderWidth:C,fitToScreen:!1})}l(function(){return F.current=new i({viewportElement:_.current}),J(),function(){function n(n,e){j&&j(n.content,e)}var t=function(e){return n(e,"debug")},o=function(e){return n(e,"info")},i=function(e){return n(e,"warn")};function r(n){V&&V(n.content)}function a(){B&&B(F.current.readyState)}function l(){D&&D(q.current),M&&M(s),I&&I(function(n,e){return s.showTOC(n,e)},s.isTOCVisible(),function(){return s.getTOC()})}function d(n){var e={cfi:n.cfi,docTitle:n.docTitle,epageCount:n.epageCount,epage:n.epage,metadata:n.metadata};q.current=e,N&&N(e)}function v(n){U&&U(n),G&&n.href&&n.internal&&s.navigateToInternalUrl(n.href)}var s=F.current;return s.addListener("debug",t),s.addListener("info",o),s.addListener("warn",i),s.addListener("error",r),s.addListener("readystatechange",a),s.addListener("loaded",l),s.addListener("nav",d),s.addListener("hyperlink",v),function(){s.loadDocument({url:""}),B&&B(e.LOADING),s.removeListener("debug",t),s.removeListener("info",o),s.removeListener("warn",i),s.removeListener("error",r),s.removeListener("readystatechange",a),s.removeListener("loaded",l),s.removeListener("nav",d),s.removeListener("hyperlink",v),M&&M(null),_.current&&(_.current.innerHTML=""),_.current=null,F.current=null,q.current=null}}()},[]),l(function(){K()},[v,A,W]),l(function(){J()},[y,k,f,x,z,T,C,E]),l(function(){var n;null===(n=F.current)||void 0===n||n.navigateToPage(t.EPAGE,c-1)},[c]);var Q=r.createElement(u,{ref:_,style:R,background:h});return"function"==typeof H&&H instanceof Function?H({container:Q,reload:K}):Q},u=n.div(v(),function(n){return n.background},function(n){return n.background});export{s as Renderer};
//# sourceMappingURL=react-vivliostyle.modern.js.map