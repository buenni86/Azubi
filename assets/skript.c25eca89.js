var ae=Object.defineProperty,ie=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var z=(t,e,n)=>e in t?ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Y=(t,e)=>{for(var n in e||(e={}))ue.call(e,n)&&z(t,n,e[n]);if(q)for(var n of q(e))le.call(e,n)&&z(t,n,e[n]);return t},Z=(t,e)=>ie(t,se(e));class L{constructor(e){this.properties=e!=null?e:[]}get(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const r=this.get(e);if(r!==void 0){if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}getType(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const x="https://unpkg.com/@workadventure/scripting-api-extra@1.3.3/dist";class ce{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new L(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function K(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(x+"/configuration.html"+e)}async function pe(t,e){const n=await WA.room.getTiledMap(),r=new Map;return $(n.layers,r,t,e),r}function $(t,e,n,r){for(const o of t)if(o.type==="objectgroup"){for(const a of o.objects)if(a.type==="variable"||a.class==="variable"){if(!!n&&o.name!==n||!!r&&!r.includes(a.name))continue;e.set(a.name,new ce(a))}}else o.type==="group"&&$(o.layers,e,n,r)}let I;async function O(){return I===void 0&&(I=fe()),I}async function fe(){return ge(await WA.room.getTiledMap())}function ge(t){const e=new Map;return ee(t.layers,"",e),e}function ee(t,e,n){for(const r of t)r.type==="group"?ee(r.layers,e+r.name+"/",n):(r.name=e+r.name,n.set(r.name,r))}function de(t){let e=1/0,n=1/0,r=0,o=0;const a=t.data;if(typeof a=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<t.height;i++)for(let u=0;u<t.width;u++)a[u+i*t.width]!==0&&(e=Math.min(e,u),o=Math.max(o,u),n=Math.min(n,i),r=Math.max(r,i));return{top:n,left:e,right:o+1,bottom:r+1}}function te(t){let e=1/0,n=1/0,r=0,o=0;for(const a of t){const i=de(a);i.left<e&&(e=i.left),i.top<n&&(n=i.top),i.right>o&&(o=i.right),i.bottom>r&&(r=i.bottom)}return{top:n,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var he=Object.prototype.toString,P=Array.isArray||function(e){return he.call(e)==="[object Array]"};function V(t){return typeof t=="function"}function Ae(t){return P(t)?"array":typeof t}function G(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function J(t,e){return t!=null&&typeof t=="object"&&e in t}function ye(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var be=RegExp.prototype.test;function me(t,e){return be.call(t,e)}var we=/\S/;function ve(t){return!me(we,t)}var We={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function Be(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return We[n]})}var Ce=/\s*/,Se=/\s+/,X=/\s*=/,Ee=/\s*\}/,Pe=/#|\^|\/|>|\{|&|=|!/;function ke(t,e){if(!t)return[];var n=!1,r=[],o=[],a=[],i=!1,u=!1,s="",c=0;function g(){if(i&&!u)for(;a.length;)delete o[a.pop()];else a=[];i=!1,u=!1}var A,b,f;function C(B){if(typeof B=="string"&&(B=B.split(Se,2)),!P(B)||B.length!==2)throw new Error("Invalid tags: "+B);A=new RegExp(G(B[0])+"\\s*"),b=new RegExp("\\s*"+G(B[1])),f=new RegExp("\\s*"+G("}"+B[1]))}C(e||m.tags);for(var l=new T(t),p,h,v,k,U,S;!l.eos();){if(p=l.pos,v=l.scanUntil(A),v)for(var Q=0,oe=v.length;Q<oe;++Q)k=v.charAt(Q),ve(k)?(a.push(o.length),s+=k):(u=!0,n=!0,s+=" "),o.push(["text",k,p,p+1]),p+=1,k===`
`&&(g(),s="",c=0,n=!1);if(!l.scan(A))break;if(i=!0,h=l.scan(Pe)||"name",l.scan(Ce),h==="="?(v=l.scanUntil(X),l.scan(X),l.scanUntil(b)):h==="{"?(v=l.scanUntil(f),l.scan(Ee),l.scanUntil(b),h="&"):v=l.scanUntil(b),!l.scan(b))throw new Error("Unclosed tag at "+l.pos);if(h==">"?U=[h,v,p,l.pos,s,c,n]:U=[h,v,p,l.pos],c++,o.push(U),h==="#"||h==="^")r.push(U);else if(h==="/"){if(S=r.pop(),!S)throw new Error('Unopened section "'+v+'" at '+p);if(S[1]!==v)throw new Error('Unclosed section "'+S[1]+'" at '+p)}else h==="name"||h==="{"||h==="&"?u=!0:h==="="&&C(v)}if(g(),S=r.pop(),S)throw new Error('Unclosed section "'+S[1]+'" at '+l.pos);return Me(Le(o))}function Le(t){for(var e=[],n,r,o=0,a=t.length;o<a;++o)n=t[o],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function Me(t){for(var e=[],n=e,r=[],o,a,i=0,u=t.length;i<u;++i)switch(o=t[i],o[0]){case"#":case"^":n.push(o),r.push(o),n=o[4]=[];break;case"/":a=r.pop(),a[5]=o[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(o)}return e}function T(t){this.string=t,this.tail=t,this.pos=0}T.prototype.eos=function(){return this.tail===""};T.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};T.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function E(t,e){this.view=t,this.cache={".":this.view},this.parent=e}E.prototype.push=function(e){return new E(e,this)};E.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var o=this,a,i,u,s=!1;o;){if(e.indexOf(".")>0)for(a=o.view,i=e.split("."),u=0;a!=null&&u<i.length;)u===i.length-1&&(s=J(a,i[u])||ye(a,i[u])),a=a[i[u++]];else a=o.view[e],s=J(o.view,e);if(s){r=a;break}o=o.parent}n[e]=r}return V(r)&&(r=r.call(this.view)),r};function y(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}y.prototype.clearCache=function(){typeof this.templateCache!="undefined"&&this.templateCache.clear()};y.prototype.parse=function(e,n){var r=this.templateCache,o=e+":"+(n||m.tags).join(":"),a=typeof r!="undefined",i=a?r.get(o):void 0;return i==null&&(i=ke(e,n),a&&r.set(o,i)),i};y.prototype.render=function(e,n,r,o){var a=this.getConfigTags(o),i=this.parse(e,a),u=n instanceof E?n:new E(n,void 0);return this.renderTokens(i,u,r,e,o)};y.prototype.renderTokens=function(e,n,r,o,a){for(var i="",u,s,c,g=0,A=e.length;g<A;++g)c=void 0,u=e[g],s=u[0],s==="#"?c=this.renderSection(u,n,r,o,a):s==="^"?c=this.renderInverted(u,n,r,o,a):s===">"?c=this.renderPartial(u,n,r,a):s==="&"?c=this.unescapedValue(u,n):s==="name"?c=this.escapedValue(u,n,a):s==="text"&&(c=this.rawValue(u)),c!==void 0&&(i+=c);return i};y.prototype.renderSection=function(e,n,r,o,a){var i=this,u="",s=n.lookup(e[1]);function c(b){return i.render(b,n,r,a)}if(!!s){if(P(s))for(var g=0,A=s.length;g<A;++g)u+=this.renderTokens(e[4],n.push(s[g]),r,o,a);else if(typeof s=="object"||typeof s=="string"||typeof s=="number")u+=this.renderTokens(e[4],n.push(s),r,o,a);else if(V(s)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");s=s.call(n.view,o.slice(e[3],e[5]),c),s!=null&&(u+=s)}else u+=this.renderTokens(e[4],n,r,o,a);return u}};y.prototype.renderInverted=function(e,n,r,o,a){var i=n.lookup(e[1]);if(!i||P(i)&&i.length===0)return this.renderTokens(e[4],n,r,o,a)};y.prototype.indentPartial=function(e,n,r){for(var o=n.replace(/[^ \t]/g,""),a=e.split(`
`),i=0;i<a.length;i++)a[i].length&&(i>0||!r)&&(a[i]=o+a[i]);return a.join(`
`)};y.prototype.renderPartial=function(e,n,r,o){if(!!r){var a=this.getConfigTags(o),i=V(r)?r(e[1]):r[e[1]];if(i!=null){var u=e[6],s=e[5],c=e[4],g=i;s==0&&c&&(g=this.indentPartial(i,c,u));var A=this.parse(g,a);return this.renderTokens(A,n,r,g,o)}}};y.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r};y.prototype.escapedValue=function(e,n,r){var o=this.getConfigEscape(r)||m.escape,a=n.lookup(e[1]);if(a!=null)return typeof a=="number"&&o===m.escape?String(a):o(a)};y.prototype.rawValue=function(e){return e[1]};y.prototype.getConfigTags=function(e){return P(e)?e:e&&typeof e=="object"?e.tags:void 0};y.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!P(e))return e.escape};var m={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){M.templateCache=t},get templateCache(){return M.templateCache}},M=new y;m.clearCache=function(){return M.clearCache()};m.parse=function(e,n){return M.parse(e,n)};m.render=function(e,n,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+Ae(e)+'" was given as the first argument for mustache#render(template, view, partials)');return M.render(e,n,r,o)};m.escape=Be;m.Scanner=T;m.Context=E;m.Writer=y;class Te{constructor(e,n){this.template=e,this.state=n,this.ast=m.parse(e)}getValue(){return this.value===void 0&&(this.value=m.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const o=m.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const r of e){const o=r[0],a=r[1],i=r[4];["name","&","#","^"].includes(o)&&n.add(a),i!==void 0&&typeof i!="string"&&this.recursiveGetUsedVariables(i,n)}}}async function Ue(){var t;const e=await O();for(const[n,r]of e.entries()){const o=(t=r.properties)!==null&&t!==void 0?t:[];for(const a of o){if(a.type==="int"||a.type==="bool"||a.type==="object"||typeof a.value!="string")continue;const i=new Te(a.value,WA.state);if(i.isPureString())continue;const u=i.getValue();F(n,a.name,u),i.onChange(s=>{F(n,a.name,s)})}}}function F(t,e,n){WA.room.setProperty(t,e,n),e==="visible"&&(n?WA.room.showLayer(t):WA.room.hideLayer(t))}let R,H=0,j=0;function N(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function De(t){const e=t.properties.getString("openSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=re(t.properties.mustGetString("openLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function xe(t){const e=t.properties.getString("closeSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=re(t.properties.mustGetString("closeLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function ne(t){return t.map(e=>R.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function re(t){const e=ne(t),n=te(e),r=((n.right-n.left)/2+n.left)*32,o=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(H-r,2)+Math.pow(j-o,2))}function Oe(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?De(t):xe(t),N(t)}),N(t)}function Qe(t,e,n,r){const o=t.name;let a,i,u=!1;const s=n.getString("tag");let c=!0;s&&!WA.player.tags.includes(s)&&(c=!1);const g=!!s;function A(){var l;a&&a.remove(),a=WA.ui.displayActionMessage({message:(l=n.getString("closeTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,b()}})}function b(){var l;a&&a.remove(),a=WA.ui.displayActionMessage({message:(l=n.getString("openTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,A()}})}function f(l){const p=te(ne(e.properties.mustGetString("closeLayer").split(`
`)));i=WA.room.website.create({name:"doorKeypad"+l,url:r+"/keypad.html#"+encodeURIComponent(l),position:{x:p.right*32,y:p.top*32,width:32*3,height:32*4},allowApi:!0})}function C(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(u=!0,n.getBoolean("autoOpen")&&c){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(g&&!c||!g)&&(n.getString("code")||n.getString("codeVariable"))){f(o);return}!c||(WA.state[e.name]?A():b())}),WA.room.onLeaveLayer(o).subscribe(()=>{u=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),a&&a.remove(),C()}),WA.state.onVariableChange(e.name).subscribe(()=>{u&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&A(),i&&WA.state[e.name]===!0&&C(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&b())})}function Ie(t){const e=t.properties.mustGetString("bellSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Math.sqrt(Math.pow(t.x-H,2)+Math.pow(t.y-j,2));if(o>n)return;r=1-o/n}WA.sound.loadSound(e).play({volume:r})}function Ge(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Ie(t)})}function Re(t,e,n){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(n).subscribe(()=>{var a;o?r=WA.ui.openPopup(o,"",[{label:(a=e.getString("bellButtonText"))!==null&&a!==void 0?a:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(n).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Ve(t){t=t!=null?t:x;const e=await pe();R=await O();for(const n of e.values())n.properties.get("door")&&Oe(n),n.properties.get("bell")&&Ge(n);for(const n of R.values()){const r=new L(n.properties),o=r.getString("doorVariable");if(o&&n.type==="tilelayer"){const i=e.get(o);if(i===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+n.name+'"');Qe(n,i,r,t)}const a=r.getString("bellVariable");a&&Re(a,r,n.name)}WA.player.onPlayerMove(n=>{H=n.x,j=n.y})}function He(t,e){const n=t.getString("bindVariable");if(n){const r=t.get("enterValue"),o=t.get("leaveValue"),a=t.getString("triggerMessage"),i=t.getString("tag");je(n,e,r,o,a,i)}}function je(t,e,n,r,o,a){a&&!WA.player.tags.includes(a)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=n)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function qe(){const t=await O();for(const e of t.values()){const n=new L(e.properties);He(n,e.name)}}let _;async function ze(t){const e=await WA.room.getTiledMap();t=t!=null?t:x,_=await O();const n=e.layers.find(r=>r.name==="configuration");if(n){const o=new L(n.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const a of _.values()){const i=new L(a.properties),u=i.getString("openConfig");u&&a.type==="tilelayer"&&Ye(u.split(","),a.name,i)}}}function Ye(t,e,n){let r;const o=n.getString("openConfigAdminTag");let a=!0;o&&!WA.player.tags.includes(o)&&(a=!1);function i(){var s;r&&r.remove(),r=WA.ui.displayActionMessage({message:(s=n.getString("openConfigTriggerMessage"))!==null&&s!==void 0?s:"Press SPACE or touch here to configure",callback:()=>K(t)})}function u(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const s=n.getString("openConfigTrigger");a&&(s&&s==="onaction"?i():K(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),u()})}const Ze=[{lowerBound:0,uppperBound:.5,config:{width:250,height:390,scale:1}},{lowerBound:.5,uppperBound:.8,config:{width:224,height:350,scale:.9}},{lowerBound:.8,uppperBound:1.25,config:{width:132,height:211,scale:.53}},{lowerBound:1.25,uppperBound:2.28,config:{width:64,height:99,scale:.25}},{lowerBound:1.25,config:{width:39,height:63,scale:.16}}],Ke=[{lowerBound:0,uppperBound:1,config:{width:427,height:270,scale:1}},{lowerBound:1,uppperBound:1.9,config:{width:300,height:188,scale:.7}},{lowerBound:1.9,uppperBound:3.5,config:{width:150,height:94,scale:.35}},{lowerBound:3.5,uppperBound:5,config:{width:93,height:58,scale:.21}},{lowerBound:4,config:{width:75,height:46,scale:.17}}];async function Je(){var t;const e=WA.player.state.tutorialDone,n=/Mobi|Android/i.test(navigator.userAgent),o=await((t=(await WA.room.getTiledMap()).properties)===null||t===void 0?void 0:t.find(i=>i.name==="tutorial")),a=o&&o.value;if(!e&&a){Xe(n);let i=await WA.player.getPosition(),u;const s=await WA.room.website.get("tutorial"),c=()=>{const C=i.x+s.x+s.width>u.x+u.width,l=i.x+s.x<u.x,p=i.y+s.y+s.height>u.y+u.height,h=i.y+s.y<u.y;C?s.x=-s.width-1.5*16:l&&(s.x=1.5*16),p?s.y=-s.height:h&&(s.y=16)},g=f=>{s.width=f.width,s.height=f.height,s.scale=f.scale},A=f=>{const l=(n?Ze:Ke).filter(p=>{if(p.lowerBound&&p.uppperBound)return p.lowerBound<f&&f<=p.uppperBound;if(p.lowerBound&&!p.uppperBound)return p.lowerBound<f;if(!p.lowerBound&&p.uppperBound)return f<=p.uppperBound;throw new Error(`Zoom level of: ${f} could not fit in any of the desktopConfig's ranges.`)});g(l[0].config)},b=()=>{if(u===void 0)return;const f=u.zoom;A(f),c()};WA.player.onPlayerMove(f=>{i=f,b()}),WA.camera.onCameraUpdate().subscribe(f=>{u=f,b()}),WA.player.state.tutorialDone=!0}}function Xe(t){let e={allow:"",name:"tutorial",url:x+"/tutorial.html",position:{height:224,width:407,x:16,y:-112},visible:!0,allowApi:!0,origin:"player",scale:.9};t&&(e=Z(Y({},e),{position:{x:32,y:-225,height:390,width:250},scale:1})),WA.room.website.create(e)}function Fe(){return WA.onInit().then(()=>{Ve().catch(t=>console.error(t)),qe().catch(t=>console.error(t)),ze().catch(t=>console.error(t)),Ue().catch(t=>console.error(t)),Je().catch(t=>console.error(t))}).catch(t=>console.error(t))}Fe();var W=void 0,w=!1,D=void 0;function d(){W!==void 0&&(W.close(),W=void 0)}var Ne="https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure-erste-schritte",_e="https://forms.office.com/Pages/ResponsePage.aspx?id=nC2noeZJbU-a9lqvoRg7_SoZREurD2tJrJwSfyf3bX5UNEczWlNIRkJDNjNUUjZKODUyVE9aNjQ0Uy4u",$e="https://db-planet.deutschebahn.com/pages/telefonie/apps/content/maps",et="https://play.workadventu.re/@/db-systel/basic/bahnhof_test";WA.room.onEnterLayer("needHelpZone").subscribe(()=>{W=WA.ui.openPopup("needHelpPopup",`Tutorial
ansehen?`,[{label:"OK",className:"primary",callback:t=>{WA.nav.openTab(Ne),w=!0,d()}}])});WA.room.onLeaveLayer("needHelpZone").subscribe(()=>{d(),w&&(WA.nav.closeCoWebSite(),w=!1)});WA.room.onEnterLayer("feedbackZone").subscribe(()=>{W=WA.ui.openPopup("feedbackPopup","M\xF6chtest du ein Feedback geben?",[{label:"Nein",className:"secondary",callback:()=>d()},{label:"Gerne",className:"primary",callback:t=>{WA.nav.openCoWebSite(_e),w=!0,d()}}])});WA.room.onLeaveLayer("feedbackZone").subscribe(()=>{d(),w&&(WA.nav.closeCoWebSite(),w=!1)});WA.room.onEnterLayer("infoSaule_zone").subscribe(()=>{W=WA.ui.openPopup("infoPopUp",WA.state.infoPopUp,[{label:"alle Neuigkeiten",className:"primary",callback:t=>{WA.state.info_iframe?WA.nav.openCoWebSite(WA.state.infoURL):WA.nav.openTab(WA.state.infoURL),d()}}])});WA.room.onLeaveLayer("infoSaule_zone").subscribe(()=>{d(),w&&(WA.nav.closeCoWebSite(),w=!1)});WA.room.onEnterLayer("portal_program").subscribe(()=>{W=WA.ui.openPopup("popUpPortal",`Du willst wissen was mit WorkAdventure alles m\xF6glich ist?
Besuche unsere Testumgebung, in der verschiedene Funktionen eingebaut und viele Umgebungen miteinander verkn\xFCpft sind! Beispiele f\xFCr bestehende Welten gibt es auf DB Planet, beim Design sind keine Grenzen gesetzt und alles ist m\xF6glich!`,[{label:"Zur Testumgebung",callback:t=>{WA.nav.openTab(et),w=!0,d()}},{label:"DB Planet",className:"primary",callback:t=>{WA.nav.openTab($e),w=!0,d()}}])});WA.room.onLeaveLayer("portal_program").subscribe(()=>{d(),w&&(WA.nav.closeCoWebSite(),w=!1)});WA.room.area.onEnter("designer_zone").subscribe(()=>{W=WA.ui.openPopup("designer_PopUp",`Architekten und Designer gesucht!
Du hast Ideen f\xFCr die Gestaltung der Umgebung oder m\xF6chtest dich im Designteam kreativ einbringen?`,[{label:"Mail",className:"primary",callback:t=>{WA.nav.openTab(WA.state.mail),w=!0,d()}},{label:"Chat",className:"primary",callback:t=>{WA.nav.openTab(WA.state.chat),w=!0,d()}}])});WA.room.area.onLeave("designer_zone").subscribe(()=>{d()});WA.room.onEnterLayer("info_zone").subscribe(()=>{W=WA.ui.openPopup("popUpInfo",WA.state.info_popupText,[{label:WA.state.button_info,callback:t=>{WA.state.info_iframe?WA.nav.openCoWebSite(WA.state.program_info):WA.nav.openTab(WA.state.program_info)}},{label:WA.state.button_info2,callback:t=>{WA.nav.openTab(WA.state.teams_support_url)}},{label:"Schlie\xDFen",callback:t=>{d()}}])});WA.room.onLeaveLayer("info_zone").subscribe(()=>{d()});WA.room.onEnterLayer("reiseSaule_zone").subscribe(()=>{W=WA.ui.openPopup("popUpReiseSaule",WA.state.popUp_saeule,[{label:WA.state.button_saeule,callback:t=>{WA.state.saeule_iframe?WA.nav.openCoWebSite(WA.state.program_saeule):WA.nav.openTab(WA.state.program_saeule)}},{label:"Schlie\xDFen",className:"error",callback:t=>{d()}}])});WA.room.onLeaveLayer("reiseSaule_zone").subscribe(()=>{d()});WA.onInit().then(async()=>{console.log("Scripting API ready"),WA.player.tags.includes("moderator")&&(console.log("moderator Tag found!"),WA.ui.registerMenuCommand("Konfigurieren",{callback:()=>{WA.nav.openCoWebSite("../config.html",!0)}})),WA.ui.actionBar.addButton({id:"minimap",type:"action",imageSrc:"data:image/png;base64,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",toolTip:"Minimap",callback:async()=>{D!==void 0?(D.close(),D=void 0):D=await WA.nav.openCoWebSite("../minimap.html",!0)}})}).catch(t=>console.error(t));
