"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6044],{6215:function(t,e,i){i.d(e,{W:function(){return r}});var s=i(42009),n=i(6475),a=i(54146);class r extends a.Z{constructor(t){let{chains:e=n.gL9,options:i}=t;super(),(0,s._)(this,"id",void 0),(0,s._)(this,"name",void 0),(0,s._)(this,"chains",void 0),(0,s._)(this,"options",void 0),(0,s._)(this,"ready",void 0),this.chains=e,this.options=i}getBlockExplorerUrls(t){let e=t.explorers?.map(t=>t.url)??[];return e.length>0?e:void 0}isChainUnsupported(t){return!this.chains.some(e=>e.chainId===t)}updateChains(t){this.chains=t}}},91477:function(t,e,i){i.d(e,{A:function(){return r},C:function(){return h},R:function(){return c},S:function(){return l},U:function(){return d},a:function(){return o}});var s=i(42009);class n extends Error{constructor(t,e){let{cause:i,code:n,data:a}=e;if(!Number.isInteger(n))throw Error('"code" must be an integer.');if(!t||"string"!=typeof t)throw Error('"message" must be a nonempty string.');super(`${t}. Cause: ${i}`),(0,s._)(this,"cause",void 0),(0,s._)(this,"code",void 0),(0,s._)(this,"data",void 0),this.cause=i,this.code=n,this.data=a}}class a extends n{constructor(t,e){let{cause:i,code:s,data:n}=e;if(!(Number.isInteger(s)&&s>=1e3&&s<=4999))throw Error('"code" must be an integer such that: 1000 <= code <= 4999');super(t,{cause:i,code:s,data:n})}}class r extends Error{constructor(){super(...arguments),(0,s._)(this,"name","AddChainError"),(0,s._)(this,"message","Error adding chain")}}class h extends Error{constructor(t){let{chainId:e,connectorId:i}=t;super(`Chain "${e}" not configured for connector "${i}".`),(0,s._)(this,"name","ChainNotConfigured")}}class o extends Error{constructor(){super(...arguments),(0,s._)(this,"name","ConnectorNotFoundError"),(0,s._)(this,"message","Connector not found")}}class c extends n{constructor(t){super("Resource unavailable",{cause:t,code:-32002}),(0,s._)(this,"name","ResourceUnavailable")}}class l extends a{constructor(t){super("Error switching chain",{cause:t,code:4902}),(0,s._)(this,"name","SwitchChainError")}}class d extends a{constructor(t){super("User rejected request",{cause:t,code:4001}),(0,s._)(this,"name","UserRejectedRequestError")}}},76044:function(t,e,i){i.d(e,{WalletConnectConnector:function(){return N}});var s=i(71958),n=i(16074),a=i(42009),r=i(19485),h=i(241),o=i(16441),c=i(53253),l=i(6215),d=i(91477);i(54146);let u=new Set([1,137,10,42161,56]),p="eip155",w="wagmi.requestedChains",g="wallet_addEthereumChain",m="last-used-chain-id";var f=new WeakMap,C=new WeakMap,v=new WeakMap,_=new WeakSet,b=new WeakSet,y=new WeakSet,E=new WeakSet,I=new WeakSet,S=new WeakSet,k=new WeakSet,x=new WeakSet;class N extends l.W{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),(0,s._)(this,x),(0,s._)(this,k),(0,s._)(this,S),(0,s._)(this,I),(0,s._)(this,E),(0,s._)(this,y),(0,s._)(this,b),(0,s._)(this,_),(0,a._)(this,"id",c.w.walletConnect),(0,a._)(this,"name","WalletConnect"),(0,a._)(this,"ready",!0),(0,n._)(this,f,{writable:!0,value:void 0}),(0,n._)(this,C,{writable:!0,value:void 0}),(0,n._)(this,v,{writable:!0,value:void 0}),(0,a._)(this,"filteredChains",void 0),(0,a._)(this,"onAccountsChanged",t=>{0===t.length?this.emit("disconnect"):this.emit("change",{account:r.getAddress(t[0])})}),(0,a._)(this,"onChainChanged",async t=>{let e=Number(t),i=this.isChainUnsupported(e);await (0,n.b)(this,v).setItem(m,String(t)),this.emit("change",{chain:{id:e,unsupported:i}})}),(0,a._)(this,"onDisconnect",async()=>{await (0,s.a)(this,I,P).call(this,[]),await (0,n.b)(this,v).removeItem(m),this.emit("disconnect")}),(0,a._)(this,"onDisplayUri",t=>{this.emit("message",{type:"display_uri",data:t})}),(0,a._)(this,"onConnect",()=>{this.emit("connect",{provider:(0,n.b)(this,f)})}),(0,n.a)(this,v,t.options.storage),(0,s.a)(this,_,U).call(this),this.filteredChains=this.chains.length>50?this.chains.filter(t=>u.has(t.chainId)):this.chains}async connect(){let{chainId:t,pairingTopic:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{let i=t;if(!i){let t=await (0,n.b)(this,v).getItem(m),e=t?parseInt(t):void 0;i=e&&!this.isChainUnsupported(e)?e:this.filteredChains[0]?.chainId}if(!i)throw Error("No chains found on connector.");let a=await this.getProvider();this.setupListeners();let o=await (0,s.a)(this,y,A).call(this);if(a.session&&o&&await a.disconnect(),!a.session||o){let t=this.filteredChains.filter(t=>t.chainId!==i).map(t=>t.chainId);this.emit("message",{type:"connecting"}),await a.connect({pairingTopic:e,chains:[i],optionalChains:t.length>0?t:[i]}),await (0,s.a)(this,I,P).call(this,this.filteredChains.map(t=>{let{chainId:e}=t;return e}))}let c=await a.enable();if(0===c.length)throw Error("No accounts found on provider.");let l=r.getAddress(c[0]),d=await this.getChainId(),u=this.isChainUnsupported(d);return{account:l,chain:{id:d,unsupported:u},provider:new h.Q(a)}}catch(t){if(/user rejected/i.test(t?.message))throw new d.U(t);throw t}}async disconnect(){let t=await this.getProvider();try{await t.disconnect()}catch(t){if(!/No matching key/i.test(t.message))throw t}finally{(0,s.a)(this,E,M).call(this),await (0,s.a)(this,I,P).call(this,[])}}async getAccount(){let{accounts:t}=await this.getProvider();if(0===t.length)throw Error("No accounts found on provider.");return r.getAddress(t[0])}async getChainId(){let{chainId:t}=await this.getProvider();return t}async getProvider(){let{chainId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((0,n.b)(this,f)||await (0,s.a)(this,_,U).call(this),t&&await this.switchChain(t),!(0,n.b)(this,f))throw Error("No provider found.");return(0,n.b)(this,f)}async getSigner(){let{chainId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[e,i]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]);return new h.Q(e,t).getSigner(i)}async isAuthorized(){try{let[t,e]=await Promise.all([this.getAccount(),this.getProvider()]),i=await (0,s.a)(this,y,A).call(this);if(!t)return!1;if(i&&e.session){try{await e.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){let e=this.chains.find(e=>e.chainId===t);if(!e)throw new d.S(`Chain with ID: ${t}, not found on connector.`);try{let i=await this.getProvider(),n=(0,s.a)(this,k,D).call(this),a=(0,s.a)(this,x,L).call(this),r=n.includes(t);if(!r&&a.includes(g)){let n=e.explorers?.length?{blockExplorerUrls:[e.explorers[0].url]}:{};await i.request({method:g,params:[{chainId:o.hexValue(e.chainId),chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:[...e.rpc],...n}]});let a=await (0,s.a)(this,S,q).call(this);a.push(t),await (0,s.a)(this,I,P).call(this,a)}return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:o.hexValue(t)}]}),e}catch(e){let t="string"==typeof e?e:e?.message;if(/user rejected request/i.test(t))throw new d.U(e);throw new d.S(e)}}async setupListeners(){(0,n.b)(this,f)&&((0,s.a)(this,E,M).call(this),(0,n.b)(this,f).on("accountsChanged",this.onAccountsChanged),(0,n.b)(this,f).on("chainChanged",this.onChainChanged),(0,n.b)(this,f).on("disconnect",this.onDisconnect),(0,n.b)(this,f).on("session_delete",this.onDisconnect),(0,n.b)(this,f).on("display_uri",this.onDisplayUri),(0,n.b)(this,f).on("connect",this.onConnect))}}async function U(){return(0,n.b)(this,C)||(0,n.a)(this,C,(0,s.a)(this,b,W).call(this)),(0,n.b)(this,C)}async function W(){let{default:t,OPTIONAL_EVENTS:e,OPTIONAL_METHODS:s}=await i.e(2692).then(i.bind(i,32692)),[a,...r]=this.filteredChains.map(t=>{let{chainId:e}=t;return e});a&&(0,n.a)(this,f,await t.init({showQrModal:!1!==this.options.qrcode,projectId:this.options.projectId,optionalMethods:s,optionalEvents:e,chains:[a],optionalChains:r,metadata:{name:this.options.dappMetadata.name,description:this.options.dappMetadata.description||"",url:this.options.dappMetadata.url,icons:[this.options.dappMetadata.logoUrl||""]},rpcMap:Object.fromEntries(this.filteredChains.map(t=>[t.chainId,t.rpc[0]])),qrModalOptions:this.options.qrModalOptions}))}async function A(){let t=(0,s.a)(this,x,L).call(this);if(t.includes(g)||!this.options.isNewChainsStale)return!1;let e=await (0,s.a)(this,S,q).call(this),i=this.filteredChains.map(t=>{let{chainId:e}=t;return e}),n=(0,s.a)(this,k,D).call(this);return(!n.length||!!n.some(t=>i.includes(t)))&&!i.every(t=>e.includes(t))}function M(){(0,n.b)(this,f)&&((0,n.b)(this,f).removeListener("accountsChanged",this.onAccountsChanged),(0,n.b)(this,f).removeListener("chainChanged",this.onChainChanged),(0,n.b)(this,f).removeListener("disconnect",this.onDisconnect),(0,n.b)(this,f).removeListener("session_delete",this.onDisconnect),(0,n.b)(this,f).removeListener("display_uri",this.onDisplayUri),(0,n.b)(this,f).removeListener("connect",this.onConnect))}async function P(t){await (0,n.b)(this,v).setItem(w,JSON.stringify(t))}async function q(){let t=await (0,n.b)(this,v).getItem(w);return t?JSON.parse(t):[]}function D(){if(!(0,n.b)(this,f))return[];let t=n.b(this,f).session?.namespaces[p]?.chains?.map(t=>parseInt(t.split(":")[1]||""));return t??[]}function L(){if(!(0,n.b)(this,f))return[];let t=n.b(this,f).session?.namespaces[p]?.methods;return t??[]}}}]);