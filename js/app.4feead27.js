(function(e){function t(t){for(var n,c,r=t[0],l=t[1],o=t[2],f=0,b=[];f<r.length;f++)c=r[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(b.length)b.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,r=1;r<s.length;r++){var l=s[r];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=s[0]))}return e}var n={},a={app:0},i=[];function c(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=n,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var d=l;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=i(e);return s(t)}function i(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("9299");var n=s("7a23"),a=(s("4de4"),s("c975"),s("ac1f"),s("1276"),{class:"section"}),i={class:"container"},c={class:"columns is-centered"},r={class:"column is-11"},l=Object(n["f"])("h1",{class:"title has-text-white-ter"}," Uncertainty Notebook ",-1),o=Object(n["f"])("p",{class:"subtitle has-text-primary-dark"}," Monte Carlo uncertainty simulation software ",-1),d={class:"control"},f=Object(n["e"])(" Open "),b=Object(n["f"])("i",{style:{width:"18px"},"data-feather":"external-link"},null,-1),u=Object(n["f"])("hr",null,null,-1),j={class:"column is-half p-0 m-0"},p={class:""},m={class:"ml-2 is-size-7 has-text-white-bis"},h={class:"columns"},O={class:"column is-half"},g={class:"field has-text-white-bis"},x=Object(n["f"])("label",{for:"expr"},"Expression:",-1),v={class:"control"},k={class:"column is-2"},y={class:"field has-text-white-bis"},w=Object(n["f"])("label",{for:"unit"},"Unit:",-1),C={class:"control"},T={class:"columns"},S={class:"column is-7"},U={key:0},z={class:"field"},P={class:"control"},E={style:{width:"60px"},class:"button is-small is-static has-background-info-dark has-text-primary-light"},_={class:"control"},V={class:"select is-small"},N={key:0,class:"ml-2"},D={class:"field"},A={class:"control"},I={class:"button is-small is-static has-background-dark has-text-primary-dark"},M={class:"control"},F={class:"field ml-1"},R={class:"control"},J={class:"button is-small is-static has-background-dark has-text-primary-dark"},L={class:"control"},Z={key:0,class:"field ml-1"},B={class:"control"},W={class:"button is-small is-static has-background-dark has-text-primary-dark"},H={class:"control"},X={class:"column is-full"},q={class:"has-text-white-bis"},K={key:0},$={class:"is-family-secondary"},G=Object(n["f"])("span",{class:"is-italic"},"Result: ",-1),Q={class:""},Y={class:"column is-5"};function ee(e,t,s,ee,te,se){var ne=this;return Object(n["g"])(),Object(n["c"])("section",a,[Object(n["f"])("div",i,[Object(n["f"])("div",c,[Object(n["f"])("div",r,[l,o,Object(n["f"])("span",d,[Object(n["f"])("a",{onClick:t[1]||(t[1]=function(){return e.genPermalink.apply(e,arguments)}),style:{width:"80px"},class:"button is-small has-background-info-dark has-text-primary-light"}," Permalink: "),Object(n["f"])("a",{target:"_blank",rel:"noopener noreferrer",href:e.permalink,style:{width:"80px"},class:"button is-small has-background-success-dark has-text-primary-light"},[f,b],8,["href"]),Object(n["m"])(Object(n["f"])("textarea",{class:"textarea is-small",rows:"2",cols:"60","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.permalink=t}),autocorrect:"off",autocapitalize:"off",spellcheck:"false"},null,512),[[n["k"],e.permalink]])]),u,(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(e.notebook.cells,(function(s,a){return Object(n["g"])(),Object(n["c"])("div",{class:"box mt-0 pt-2 is-shadowless is-radiusless",key:a},[Object(n["f"])("div",j,[Object(n["f"])("span",p,"#"+Object(n["i"])(a+1),1),Object(n["f"])("span",m,"id: "+Object(n["i"])(s.id?s.id.split("-")[0]:""),1)]),Object(n["f"])("div",h,[Object(n["f"])("div",O,[Object(n["f"])("div",g,[x,Object(n["f"])("div",v,[Object(n["m"])(Object(n["f"])("input",{class:"input","onUpdate:modelValue":function(e){return s.expr=e},name:"expr",onKeyup:t[3]||(t[3]=function(){return e.preFill.apply(e,arguments)}),autocomplete:"off"},null,40,["onUpdate:modelValue"]),[[n["k"],s.expr]])])])]),Object(n["f"])("div",k,[Object(n["f"])("div",y,[w,Object(n["f"])("div",C,[Object(n["m"])(Object(n["f"])("input",{class:"input","onUpdate:modelValue":function(e){return s.unit=e},name:"unit",onKeyup:t[4]||(t[4]=function(){return e.preFill.apply(e,arguments)}),autocomplete:"off"},null,40,["onUpdate:modelValue"]),[[n["k"],s.unit]])])])])]),Object(n["f"])("div",T,[Object(n["f"])("span",S,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(s.data,(function(t,i){return Object(n["g"])(),Object(n["c"])("div",{class:"mb-1",key:i},[-1!==ne.expressionsVars[a].indexOf(t.var)?(Object(n["g"])(),Object(n["c"])("div",U,[Object(n["f"])("span",z,[Object(n["f"])("span",P,[Object(n["f"])("a",E,Object(n["i"])(t.var)+": ",1)]),Object(n["f"])("span",_,[Object(n["f"])("span",V,[Object(n["m"])(Object(n["f"])("select",{"onUpdate:modelValue":function(e){return t.dist=e}},[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(e.distributions,(function(e){return Object(n["g"])(),Object(n["c"])("option",{value:e,key:e},Object(n["i"])(e),9,["value"])})),128)),(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(e.exportedPiecewise.filter((function(e){return e.id!==s.id})),(function(e){return Object(n["g"])(),Object(n["c"])("option",{value:e.id,key:e.id},Object(n["i"])(e.id?e.id.split("-")[0]:""),9,["value"])})),128))],8,["onUpdate:modelValue"]),[[n["j"],t.dist]])])])]),-1!==["Uniform","Normal","StudentsT","Triangular","LogNormal","Arcsine","Trap","CTrap"].indexOf(t.dist)?(Object(n["g"])(),Object(n["c"])("span",N,[Object(n["f"])("span",D,[Object(n["f"])("span",A,[Object(n["f"])("a",I,Object(n["i"])(-1!==["Uniform","Triangular","Arcsine","Trap","CTrap"].indexOf(t.dist)?"a":null)+" "+Object(n["i"])("Normal"===t.dist?"mean":null)+" "+Object(n["i"])(-1!==["StudentsT","LogNormal"].indexOf(t.dist)?"loc":null)+" : ",1)]),Object(n["f"])("span",M,[Object(n["m"])(Object(n["f"])("input",{style:{width:"80px"},class:"input is-small","onUpdate:modelValue":function(e){return t.args[0]=e},name:"a",autocomplete:"off"},null,8,["onUpdate:modelValue"]),[[n["k"],t.args[0],void 0,{number:!0}]])])]),Object(n["f"])("span",F,[Object(n["f"])("span",R,[Object(n["f"])("a",J,Object(n["i"])(-1!==["Uniform","Triangular","Arcsine","Trap","CTrap"].indexOf(t.dist)?"b":null)+" "+Object(n["i"])("Normal"===t.dist?"std_dev":null)+" "+Object(n["i"])(-1!==["StudentsT","LogNormal"].indexOf(t.dist)?"scale":null)+" : ",1)]),Object(n["f"])("span",L,[Object(n["m"])(Object(n["f"])("input",{style:{width:"80px"},class:"input is-small","onUpdate:modelValue":function(e){return t.args[1]=e},name:"b",autocomplete:"off"},null,8,["onUpdate:modelValue"]),[[n["k"],t.args[1],void 0,{number:!0}]])])]),-1!==["StudentsT","Triangular","Trap","CTrap"].indexOf(t.dist)?(Object(n["g"])(),Object(n["c"])("span",Z,[Object(n["f"])("span",B,[Object(n["f"])("a",W,Object(n["i"])("StudentsT"===t.dist?"ν":null)+" "+Object(n["i"])(-1!==["Triangular","CTrap"].indexOf(t.dist)?"d":null)+" "+Object(n["i"])(-1!==["Trap"].indexOf(t.dist)?"β":null),1)]),Object(n["f"])("span",H,[Object(n["m"])(Object(n["f"])("input",{style:{width:"60px"},class:"input is-small","onUpdate:modelValue":function(e){return t.args[2]=e},name:"c",autocomplete:"off"},null,8,["onUpdate:modelValue"]),[[n["k"],t.args[2],void 0,{number:!0}]])])])):Object(n["d"])("",!0)])):Object(n["d"])("",!0)])):Object(n["d"])("",!0)])})),128)),Object(n["f"])("button",{class:["button is-small is-primary mt-2",e.stateControl.processing?"is-loading":""],onClick:function(t){return e.calcCell(a)},disabled:e.stateControl.processing},"Calculate",10,["onClick","disabled"]),Object(n["f"])("button",{class:"button is-small is-danger mt-2 ml-2",onClick:function(t){return e.removeCell(a)}},"Remove",8,["onClick"]),Object(n["f"])("span",X,[Object(n["f"])("div",q,[void 0!==s.pcil?(Object(n["g"])(),Object(n["c"])("div",K,[Object(n["f"])("p",$,[G,Object(n["f"])("span",Q,Object(n["i"])(s.y)+" ± "+Object(n["i"])(s.sd)+" "+Object(n["i"])(s.unit),1)])])):Object(n["d"])("",!0)])])]),Object(n["f"])("span",Y,[Object(n["m"])(Object(n["f"])("canvas",{ref:"hist_"+a},null,512),[[n["l"],e.histCharts[a]]])])])])})),128)),Object(n["f"])("button",{class:"button is-primary",onClick:t[5]||(t[5]=function(){return e.createCell.apply(e,arguments)})},"New Cell")])])])])}s("cb29"),s("4160"),s("a15b"),s("d81d"),s("13d5"),s("fb6a"),s("a434"),s("b680"),s("d3b7"),s("25f0"),s("466d"),s("5319"),s("498a"),s("159b");var te={HIST_SIZE:50,N_BURSTS:10,BURST_SIZE:1e4},se=function(){return new Worker(s.p+"js/worker.d346c1b5.worker.js")},ne=s("30ef"),ae=function(e){return{type:"bar",plugins:["annotation"],data:{labels:new Array(te.HIST_SIZE).fill(0),datasets:[{backgroundColor:"rgba(179, 204, 255, .4)",label:"",borderWidth:1,data:e}]},options:{annotation:{annotations:[{drawTime:"afterDatasetsDraw",id:"a-line-1",type:"line",mode:"vertical",scaleID:"x-axis-0",value:void 0,borderColor:"#F14668",borderWidth:2,label:{enabled:!0,content:""}},{drawTime:"afterDatasetsDraw",id:"a-line-2",type:"line",mode:"vertical",scaleID:"x-axis-0",value:void 0,borderColor:"#F14668",borderWidth:2,label:{enabled:!0,content:""}}]},legend:{display:!1},tooltips:{enabled:!0},scales:{xAxes:[{id:"x-axis-0",stacked:!0,display:!1,barPercentage:1,categoryPercentage:1,gridLines:{offsetGridLines:!0},ticks:{enabled:!0}},{display:!0}],yAxes:[{ticks:{beginAtZero:!0}}]}}}},ie=s("626f"),ce=s("4128"),re=s("77c6"),le=s.n(re),oe=10;ce["Decimal"].set({precision:13,rounding:6}),window.Decimal=ce["Decimal"],ne["Chart"].plugins.register({annotation:ie["annotation"]});var de=new Array(oe).fill(!1),fe=new Array(oe).fill(void 0).map((function(e,t){var s=new se;return s.onmessage=function(e){de[e.data]=!0},s.postMessage({init:!0,i:t}),s})),be=function e(){de.reduce((function(e,t){return e&&t}),!0)?console.log("pool ready!"):window.setTimeout((function(){e()}),100)};function ue(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";return e.replace(/[xy]/g,(function(e){var t=16*Math.random()|0,s="x"==e?t:3&t|8;return s.toString(16)}))}be();var je={name:"App",components:{},watch:{},data:function(){return{notebook:{cells:[{expr:"X1",res:{}},{expr:"X1",res:{}}]},histCharts:[],stateControl:{processing:!1},permalink:""}},methods:{genPermalink:function(){this.permalink=window.location.origin+window.location.pathname+"#/"+JSON.stringify(this.notebook)},preFill:function(){var e=this;this.$nextTick((function(){e.expressionsVars.forEach((function(t,s){var n=e.notebook.cells[s];n.data=n.data||[],t.forEach((function(e){var t=n.data.filter((function(t){return t.var===e}))[0]||n.data[n.data.push({})-1];t.var=t.var||e,t.dist=t.dist||"Uniform",t.args=t.args||new Array(3).fill(0)}))}))}))},calcCell:function(e){var t=this;if(!this.stateControl.processing){this.stateControl.processing=!0;var s=this.notebook.cells[e],n=te.HIST_SIZE,a=te.N_BURSTS,i=te.BURST_SIZE,c=0,r=this.histCharts,l=void 0,o=i*a*oe;fe.forEach((function(a){t.stateControl.processing&&(a.onerror=function(){t.stateControl.processing&&(t.stateControl.processing=!1,alert("Error. Check provided expression and parameters."))},a.onmessage=function(a){var d=[].slice.call(a.data);l=l||new Array(d.length).fill(0),l=l.map((function(e,t){return(e*c+d[t]*i)/(c+i)})),c+=i;var f=l.slice(6);r[e]=r[e]||new ne["Chart"](t.$refs["hist_"+e].getContext("2d"),ae(f));var b=r[e],u=[],j=[];if(f.forEach((function(e,t){var a=l[3]+t*(l[4]-l[3])/n;c===o&&(u.push(0===t?e/o*100:e/o*100+u[t-1]),j.push(a)),b.data.labels[t]=(Math.abs(a)<.1?a.toExponential(3):a.toFixed(3))+(" "+s.unit||!1),b.data.datasets[0].data[t]=Math.round(e)})),c===o&&(u[u.length-1]=1,s.piecewise=u.reduce((function(e,t){return e+"|"+t.toExponential(3)}),"").slice(1)+";"+j[0].toExponential(3)+"|"+j[j.length-1].toExponential(3),console.log(s.piecewise)),c===o){var p=new ce["Decimal"](l[5]);s.sd=p.toSD(2).toString();var m=new ce["Decimal"](l[0]),h=new ce["Decimal"](l[1]),O=new ce["Decimal"](l[2]);s.pcil=m.toPrecision(4).toString(),s.pcih=h.toPrecision(4).toString(),s.y=O.toPrecision(4).toString();var g=l[3],x=l[4],v=n/(x-g),k=v*(s.pcil-g);b.annotation.elements["a-line-1"].options.value=k,b.annotation.elements["a-line-1"].options.label.xAdjust=15,b.annotation.elements["a-line-1"].options.label.content=s.pcil;var y=v*(s.pcih-g);b.annotation.elements["a-line-2"].options.value=y,b.annotation.elements["a-line-2"].options.label.xAdjust=-15,b.annotation.elements["a-line-2"].options.label.content=s.pcih,b.update(),t.stateControl.processing=!1}})}));var d=JSON.parse(JSON.stringify(s));d.data=d.data.filter((function(s){return-1!==t.expressionsVars[e].indexOf(s.var)})),d.p=.95,d.data.forEach((function(e){var s=t.exportedPiecewiseObj[e.dist];s&&(e.dist=s)})),console.log(d);for(var f=0;f<a;f++)fe.forEach((function(e){e.postMessage(d)}))}},createCell:function(){var e={id:ue(),expr:"X1",unit:"V",res:{}};this.notebook.cells.push(e),this.preFill()},removeCell:function(e){this.notebook.cells.splice(e,1)},exportCell:function(e){this.stateControl.processing||this.calcCell(e)}},computed:{exportedPiecewise:function(){return this.notebook.cells.map((function(e){return Object({id:e.id,piecewise:e.piecewise})}))},exportedPiecewiseObj:function(){return this.exportedPiecewise.reduce((function(e,t){return e[t.id]=t.piecewise,e}),{})},distributions:function(){return["Uniform","Normal","StudentsT","Triangular","Arcsine","Trap","CTrap"]},expressionsVars:function(){return this.notebook.cells.map((function(e){return e.expr.split(/[\s+*\-()/]+/).filter((function(e){return e.trim().length})).filter((function(e){return!e.match(/^\d/)})).map((function(e){return e.trim()}))}))}},mounted:function(){var e=window.location.href.split("/#/").slice(1).join("/#/");if(e.length)try{this.notebook=JSON.parse(decodeURI(e))}catch(t){console.warn("Unable to parse url input."),console.log(e)}this.preFill(),le.a.replace()}},pe=je;s("64be");pe.render=ee;var me=pe;Object(n["b"])(me).mount("#app")},"64be":function(e,t,s){"use strict";s("c894")},9299:function(e,t,s){},c894:function(e,t,s){}});
//# sourceMappingURL=app.4feead27.js.map