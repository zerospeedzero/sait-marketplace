"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9343],{75740:function(e,t,s){s.d(t,{ConfigCtrl:function(){return k},zv:function(){return j},uA:function(){return M},ExplorerCtrl:function(){return z},jb:function(){return q},OptionsCtrl:function(){return P},AV:function(){return E},ThemeCtrl:function(){return et},ToastCtrl:function(){return er}});let r=Symbol(),o=Symbol(),n=(e,t)=>new Proxy(e,t),l=Object.getPrototypeOf,a=new WeakMap,i=e=>e&&(a.has(e)?a.get(e):l(e)===Object.prototype||l(e)===Array.prototype),c=e=>"object"==typeof e&&null!==e,d=e=>{if(Array.isArray(e))return Array.from(e);let t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(e=>{e.configurable=!0}),Object.create(l(e),t)},u=e=>e[o]||e,f=(e,t,s,l)=>{if(!i(e))return e;let a=l&&l.get(e);if(!a){let t=u(e);a=Object.values(Object.getOwnPropertyDescriptors(t)).some(e=>!e.configurable&&!e.writable)?[t,d(t)]:[t],null==l||l.set(e,a)}let[c,p]=a,g=s&&s.get(c);return g&&!!p===g[1].f||((g=((e,t)=>{let s={f:t},n=!1,l=(t,r)=>{if(!n){let o=s.a.get(e);if(o||(o={},s.a.set(e,o)),"w"===t)o.w=!0;else{let e=o[t];e||(e=new Set,o[t]=e),e.add(r)}}},a={get:(t,r)=>r===o?e:(l("k",r),f(Reflect.get(t,r),s.a,s.c,s.t)),has:(t,o)=>o===r?(n=!0,s.a.delete(e),!0):(l("h",o),Reflect.has(t,o)),getOwnPropertyDescriptor:(e,t)=>(l("o",t),Reflect.getOwnPropertyDescriptor(e,t)),ownKeys:e=>(l("w"),Reflect.ownKeys(e))};return t&&(a.set=a.deleteProperty=()=>!1),[a,s]})(c,!!p))[1].p=n(p||c,g[0]),s&&s.set(c,g)),g[1].a=t,g[1].c=s,g[1].t=l,g[1].p},p=(e,t,s,r)=>{if(Object.is(e,t))return!1;if(!c(e)||!c(t))return!0;let o=s.get(u(e));if(!o)return!0;if(r){let s=r.get(e);if(s&&s.n===t)return s.g;r.set(e,{n:t,g:!1})}let n=null;try{for(let s of o.h||[])if(n=Reflect.has(e,s)!==Reflect.has(t,s))return n;if(!0===o.w){if(n=((e,t)=>{let s=Reflect.ownKeys(e),r=Reflect.ownKeys(t);return s.length!==r.length||s.some((e,t)=>e!==r[t])})(e,t))return n}else for(let s of o.o||[])if(n=!!Reflect.getOwnPropertyDescriptor(e,s)!=!!Reflect.getOwnPropertyDescriptor(t,s))return n;for(let l of o.k||[])if(n=p(e[l],t[l],s,r))return n;return null===n&&(n=!0),n}finally{r&&r.set(e,{n:t,g:n})}},g=e=>i(e)&&e[o]||null,h=(e,t=!0)=>{a.set(e,t)},m=e=>"object"==typeof e&&null!==e,w=new WeakMap,b=new WeakSet,y=(e=Object.is,t=(e,t)=>new Proxy(e,t),s=e=>m(e)&&!b.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),r=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},o=new WeakMap,n=(e,t,s=r)=>{let l=o.get(e);if((null==l?void 0:l[0])===t)return l[1];let a=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return h(a,!0),o.set(e,[t,a]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(a,t))return;let r=Reflect.get(e,t),o={value:r,enumerable:!0,configurable:!0};if(b.has(r))h(r,!1);else if(r instanceof Promise)delete o.value,o.get=()=>s(r);else if(w.has(r)){let[e,t]=w.get(r);o.value=n(e,t(),s)}Object.defineProperty(a,t,o)}),a},l=new WeakMap,a=[1,1],i=r=>{if(!m(r))throw Error("object required");let o=l.get(r);if(o)return o;let c=a[0],d=new Set,u=(e,t=++a[0])=>{c!==t&&(c=t,d.forEach(s=>s(e,t)))},f=a[1],p=(e=++a[1])=>(f===e||d.size||(f=e,y.forEach(([t])=>{let s=t[1](e);s>c&&(c=s)})),c),h=e=>(t,s)=>{let r=[...t];r[1]=[e,...r[1]],u(r,s)},y=new Map,v=(e,t)=>{if(y.has(e))throw Error("prop listener already exists");if(d.size){let s=t[3](h(e));y.set(e,[t,s])}else y.set(e,[t])},I=e=>{var t;let s=y.get(e);s&&(y.delete(e),null==(t=s[1])||t.call(s))},C=e=>{d.add(e),1===d.size&&y.forEach(([e,t],s)=>{if(t)throw Error("remove already exists");let r=e[3](h(s));y.set(s,[e,r])});let t=()=>{d.delete(e),0===d.size&&y.forEach(([e,t],s)=>{t&&(t(),y.set(s,[e]))})};return t},O=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r)),W={deleteProperty(e,t){let s=Reflect.get(e,t);I(t);let r=Reflect.deleteProperty(e,t);return r&&u(["delete",[t],s]),r},set(t,r,o,n){let a=Reflect.has(t,r),c=Reflect.get(t,r,n);if(a&&(e(c,o)||l.has(o)&&e(c,l.get(o))))return!0;I(r),m(o)&&(o=g(o)||o);let d=o;if(o instanceof Promise)o.then(e=>{o.status="fulfilled",o.value=e,u(["resolve",[r],e])}).catch(e=>{o.status="rejected",o.reason=e,u(["reject",[r],e])});else{!w.has(o)&&s(o)&&(d=i(o));let e=!b.has(d)&&w.get(d);e&&v(r,e)}return Reflect.set(t,r,d,n),u(["set",[r],o,c]),!0}},E=t(O,W);l.set(r,E);let j=[O,p,n,C];return w.set(E,j),Reflect.ownKeys(r).forEach(e=>{let t=Object.getOwnPropertyDescriptor(r,e);"value"in t&&(E[e]=r[e],delete t.value,delete t.writable),Object.defineProperty(O,e,t)}),E})=>[i,w,b,e,t,s,r,o,n,l,a],[v]=y();function I(e={}){return v(e)}function C(e,t,s){let r;let o=w.get(e);o||console.warn("Please use proxy object");let n=[],l=o[3],a=!1,i=l(e=>{if(n.push(e),s){t(n.splice(0));return}r||(r=Promise.resolve().then(()=>{r=void 0,a&&t(n.splice(0))}))});return a=!0,()=>{a=!1,i()}}var O=s(48764);let W=I({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),E={state:W,subscribe:e=>C(W,()=>e(W)),push(e,t){e!==W.view&&(W.view=e,t&&(W.data=t),W.history.push(e))},reset(e){W.view=e,W.history=[e]},replace(e){W.history.length>1&&(W.history[W.history.length-1]=e,W.view=e)},goBack(){if(W.history.length>1){W.history.pop();let[e]=W.history.slice(-1);W.view=e}},setData(e){W.data=e}},j={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>"u">typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>j.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){let e=navigator.userAgent.toLowerCase();return j.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(j.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;r.includes("://")||(r=`${r=e.replaceAll("/","").replaceAll(":","")}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);let o=encodeURIComponent(t);return`${r}wc?uri=${o}`},formatUniversalUrl(e,t,s){if(!j.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);let o=encodeURIComponent(t);return`${r}wc?uri=${o}`},wait:async e=>new Promise(t=>{setTimeout(t,e)}),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(j.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{let[t]=e.split("?");localStorage.setItem(j.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(j.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{"u">typeof localStorage&&localStorage.setItem(j.WCM_VERSION,"2.5.6")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;let t=null==(e=E.state.data)?void 0:e.Wallet;if(!t)throw Error('Missing "Wallet" view data');return t}},A="u">typeof location&&(location.hostname.includes("localhost")||location.protocol.includes("https")),L=I({enabled:A,userSessionId:"",events:[],connectedWalletId:void 0}),M={state:L,subscribe:e=>C(L.events,()=>e(function(e,t){let s=w.get(e);s||console.warn("Please use proxy object");let[r,o,n]=s;return n(r,o(),void 0)}(L.events[L.events.length-1]))),initialize(){L.enabled&&"u">typeof(null==crypto?void 0:crypto.randomUUID)&&(L.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){L.connectedWalletId=e},click(e){if(L.enabled){let t={type:"CLICK",name:e.name,userSessionId:L.userSessionId,timestamp:Date.now(),data:e};L.events.push(t)}},track(e){if(L.enabled){let t={type:"TRACK",name:e.name,userSessionId:L.userSessionId,timestamp:Date.now(),data:e};L.events.push(t)}},view(e){if(L.enabled){let t={type:"VIEW",name:e.name,userSessionId:L.userSessionId,timestamp:Date.now(),data:e};L.events.push(t)}}},D=I({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),P={state:D,subscribe:e=>C(D,()=>e(D)),setChains(e){D.chains=e},setWalletConnectUri(e){D.walletConnectUri=e},setIsCustomDesktop(e){D.isCustomDesktop=e},setIsCustomMobile(e){D.isCustomMobile=e},setIsDataLoaded(e){D.isDataLoaded=e},setIsUiLoaded(e){D.isUiLoaded=e},setIsAuth(e){D.isAuth=e}},U=I({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),k={state:U,subscribe:e=>C(U,()=>e(U)),setConfig(e){var t,s;M.initialize(),P.setChains(e.chains),P.setIsAuth(!!e.enableAuthMode),P.setIsCustomMobile(!!(null==(t=e.mobileWallets)?void 0:t.length)),P.setIsCustomDesktop(!!(null==(s=e.desktopWallets)?void 0:s.length)),j.setModalVersionInStorage(),Object.assign(U,e)}},S="https://explorer-api.walletconnect.com";async function R(e,t){let s=new URL(e,S);return s.searchParams.append("projectId",k.state.projectId),Object.entries(t).forEach(([e,t])=>{t&&s.searchParams.append(e,String(t))}),(await fetch(s)).json()}let N={getDesktopListings:async e=>R("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>R("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>R("/w3m/v1/getInjectedListings",e),getAllListings:async e=>R("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${S}/w3m/v1/getWalletImage/${e}?projectId=${k.state.projectId}`,getAssetImageUrl:e=>`${S}/w3m/v1/getAssetImage/${e}?projectId=${k.state.projectId}`};var x=Object.defineProperty,T=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,$=(e,t,s)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,H=(e,t)=>{for(var s in t||(t={}))_.call(t,s)&&$(e,s,t[s]);if(T)for(var s of T(t))K.call(t,s)&&$(e,s,t[s]);return e};let V=j.isMobile(),B=I({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),z={state:B,async getRecomendedWallets(){let{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=k.state;if("NONE"===e||"ALL"===t&&!e)return B.recomendedWallets;if(j.isArray(e)){let t={recommendedIds:e.join(",")},{listings:s}=await N.getAllListings(t),r=Object.values(s);r.sort((t,s)=>{let r=e.indexOf(t.id),o=e.indexOf(s.id);return r-o}),B.recomendedWallets=r}else{let{chains:e,isAuth:s}=P.state,r=e?.join(","),o=j.isArray(t),n={page:1,sdks:s?"auth_v1":void 0,entries:j.RECOMMENDED_WALLET_AMOUNT,chains:r,version:2,excludedIds:o?t.join(","):void 0},{listings:l}=V?await N.getMobileListings(n):await N.getDesktopListings(n);B.recomendedWallets=Object.values(l)}return B.recomendedWallets},async getWallets(e){let t=H({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=k.state,{recomendedWallets:o}=B;if("ALL"===r)return B.wallets;o.length?t.excludedIds=o.map(e=>e.id).join(","):j.isArray(s)&&(t.excludedIds=s.join(",")),j.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),P.state.isAuth&&(t.sdks="auth_v1");let{page:n,search:l}=e,{listings:a,total:i}=V?await N.getMobileListings(t):await N.getDesktopListings(t),c=Object.values(a),d=l?"search":"wallets";return B[d]={listings:[...B[d].listings,...c],total:i,page:n??1},{listings:c,total:i}},getWalletImageUrl:e=>N.getWalletImageUrl(e),getAssetImageUrl:e=>N.getAssetImageUrl(e),resetSearch(){B.search={listings:[],total:0,page:1}}},J=I({open:!1}),q={state:J,subscribe:e=>C(J,()=>e(J)),open:async e=>new Promise(t=>{let{isUiLoaded:s,isDataLoaded:r}=P.state;if(P.setWalletConnectUri(e?.uri),P.setChains(e?.chains),E.reset("ConnectWallet"),s&&r)J.open=!0,t();else{let e=setInterval(()=>{let s=P.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),J.open=!0,t())},200)}}),close(){J.open=!1}};var F=Object.defineProperty,G=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,Y=(e,t,s)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Z=(e,t)=>{for(var s in t||(t={}))Q.call(t,s)&&Y(e,s,t[s]);if(G)for(var s of G(t))X.call(t,s)&&Y(e,s,t[s]);return e};let ee=I({themeMode:"u">typeof matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),et={state:ee,subscribe:e=>C(ee,()=>e(ee)),setThemeConfig(e){let{themeMode:t,themeVariables:s}=e;t&&(ee.themeMode=t),s&&(ee.themeVariables=Z({},s))}},es=I({open:!1,message:"",variant:"success"}),er={state:es,subscribe:e=>C(es,()=>e(es)),openToast(e,t){es.open=!0,es.message=e,es.variant=t},closeToast(){es.open=!1}};"u">typeof window&&(window.Buffer||(window.Buffer=O.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}),window.global||(window.global=window))},45161:function(e,t,s){s.d(t,{WalletConnectModal:function(){return o}});var r=s(75740);class o{constructor(e){this.openModal=r.jb.open,this.closeModal=r.jb.close,this.subscribeModal=r.jb.subscribe,this.setTheme=r.ThemeCtrl.setThemeConfig,r.ThemeCtrl.setThemeConfig(e),r.ConfigCtrl.setConfig(e),this.initUi()}async initUi(){if("u">typeof window){await Promise.all([s.e(2024),s.e(981)]).then(s.bind(s,981));let e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),r.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);