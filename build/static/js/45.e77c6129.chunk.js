(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{750:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(140),o=t(141),i=t(97),s=t(363),c=t.n(s),m=t(147),f=t(148),h=function(){return n.a.createElement(m.a,null,n.a.createElement(f.a,null,n.a.createElement("h4",{className:"header-title mb-3"},"Line with Data Labels"),n.a.createElement(c.a,{options:{chart:{height:380,type:"line",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#727cf5","#0acf97"],dataLabels:{enabled:!0},stroke:{width:[3,3],curve:"smooth"},title:{text:"Average High & Low Temperature",align:"left",style:{fontSize:"14px"}},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"},markers:{style:"inverted",size:6},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],title:{text:"Month"}},yaxis:{title:{text:"Temperature"},min:5,max:40},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]},series:[{name:"High - 2018",data:[28,29,33,36,32,32,33]},{name:"Low - 2018",data:[12,11,14,18,17,13,13]}],type:"line",className:"apex-charts"})))},p=function(){var e={annotations:{yaxis:[{y:8200,borderColor:"#0acf97",label:{borderColor:"#0acf97",style:{color:"#fff",background:"#0acf97"},text:"Support"}}],xaxis:[{x:new Date("23 Nov 2017").getTime(),borderColor:"#775DD0",label:{borderColor:"#775DD0",style:{color:"#fff",background:"#775DD0"},text:"Anno Test"}},{x:new Date("03 Dec 2017").getTime(),borderColor:"#ffbc00",label:{borderColor:"#ffbc00",style:{color:"#fff",background:"#ffbc00"},orientation:"horizontal",text:"New Beginning"}}],points:[{x:new Date("27 Nov 2017").getTime(),y:8506.9,marker:{size:8,fillColor:"#fff",strokeColor:"#fa5c7c",radius:2},label:{borderColor:"#fa5c7c",offsetY:0,style:{color:"#fff",background:"#fa5c7c"},text:"Point Annotation"}}]},chart:{height:380,type:"line",id:"areachart-2"},labels:["13 Nov 2017","14 Nov 2017","15 Nov 2017","16 Nov 2017","17 Nov 2017","20 Nov 2017","21 Nov 2017","22 Nov 2017","23 Nov 2017","24 Nov 2017","27 Nov 2017","28 Nov 2017","29 Nov 2017","30 Nov 2017","01 Dec 2017","04 Dec 2017","05 Dec 2017","06 Dec 2017","07 Dec 2017","08 Dec 2017"],colors:["#39afd1"],dataLabels:{enabled:!1},stroke:{width:[3],curve:"straight"},title:{text:"Line with Annotations",align:"left"},xaxis:{type:"datetime"},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]};return n.a.createElement(m.a,null,n.a.createElement(f.a,null,n.a.createElement("h4",{className:"header-title mb-3"},"Line Chart with Annotations"),n.a.createElement(c.a,{options:e,series:[{name:"Prices",data:[8107.85,8128,8122.9,8165.5,8340.7,8423.7,8423.5,8514.3,8481.85,8487.7,8506.9,8626.2,8668.95,8602.3,8607.55,8512.9,8496.25,8600.65,8881.1,9340.85]}],type:"line",className:"apex-charts"})))},d=function(){return n.a.createElement(m.a,null,n.a.createElement(f.a,null,n.a.createElement("h4",{className:"header-title mb-3"},"Spline Area"),n.a.createElement(c.a,{options:{chart:{height:380,type:"area"},dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth"},colors:["#727cf5","#6c757d"],legend:{offsetY:-10},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"]},tooltip:{fixed:{enabled:!1,position:"topRight"}},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"}},series:[{name:"Series 1",data:[31,40,28,51,42,109,100]},{name:"Series 2",data:[11,32,45,32,34,52,41]}],type:"area",className:"apex-charts"})))},u=function(){var e={chart:{height:422,type:"area",stacked:!0,events:{selection:function(e,a){console.log(new Date(a.xaxis.min))}}},colors:["#727cf5","#0acf97","#e3eaef"],dataLabels:{enabled:!1},stroke:{width:2,curve:"smooth"},fill:{gradient:{enabled:!0,opacityFrom:.6,opacityTo:.8}},legend:{position:"top",horizontalAlign:"left"},xaxis:{type:"datetime"},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}}}}]},a=function(e,a,t){for(var r=0,n=[];r<a;){var l=e,o=Math.floor(Math.random()*(t.max-t.min+1))+t.min;n.push([l,o]),e+=864e5,r++}return n},t=[{name:"South",data:a(new Date("11 Feb 2017").getTime(),20,{min:10,max:60})},{name:"North",data:a(new Date("11 Feb 2017").getTime(),20,{min:10,max:20})},{name:"Central",data:a(new Date("11 Feb 2017").getTime(),20,{min:10,max:15})}];return n.a.createElement(m.a,null,n.a.createElement(f.a,null,n.a.createElement("h4",{className:"header-title mb-3"},"Stacked Area"),n.a.createElement(c.a,{options:e,series:t,type:"area",className:"apex-charts"})))},b=function(){return n.a.createElement(m.a,null,n.a.createElement(f.a,null,n.a.createElement("h4",{className:"header-title mb-3"},"Bar Chart"),n.a.createElement(c.a,{options:{chart:{height:380,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,dataLabels:{position:"top"}}},dataLabels:{enabled:!0,offsetX:-6,style:{fontSize:"12px",colors:["#fff"]}},colors:["#fa5c7c","#6c757d"],stroke:{show:!0,width:1,colors:["#fff"]},xaxis:{categories:[2001,2002,2003,2004,2005,2006,2007]},legend:{offsetY:-10},states:{hover:{filter:"none"}},grid:{borderColor:"#f1f3fa"}},series:[{name:"Series 1",data:[44,55,41,64,22,43,21]},{name:"Series 2",data:[53,32,33,52,13,44,32]}],type:"bar",className:"apex-charts"})))},g=function(){var e={chart:{height:380,type:"bar",stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0}},stroke:{show:!1},xaxis:{categories:[2008,2009,2010,2011,2012,2013,2014],labels:{formatter:function(e){return e+"K"}}},yaxis:{title:{text:void 0}},colors:["#727cf5","#0acf97","#fa5c7c","#6c757d","#39afd1"],tooltip:{y:{formatter:function(e){return e+"K"}}},fill:{opacity:1},states:{hover:{filter:"none"}},legend:{position:"top",horizontalAlign:"center"},grid:{borderColor:"#f1f3fa"}};return n.a.createElement(m.a,null,n.a.createElement(f.a,null,n.a.createElement("h4",{className:"header-title mb-3"},"Stacked Bar Chart"),n.a.createElement(c.a,{options:e,series:[{name:"Marine Sprite",data:[44,55,41,37,22,43,21]},{name:"Striking Calf",data:[53,32,33,52,13,43,32]},{name:"Tank Picture",data:[12,17,11,9,15,11,20]},{name:"Bucket Slope",data:[9,7,5,8,6,9,4]},{name:"Reborn Kid",data:[25,12,19,32,25,24,10]}],type:"bar",className:"apex-charts"})))},E=function(){return n.a.createElement(m.a,null,n.a.createElement(f.a,null,n.a.createElement("h4",{className:"header-title mb-3"},"Donut Chart"),n.a.createElement(c.a,{options:{chart:{height:320,type:"pie"},labels:["Series 1","Series 2","Series 3","Series 4","Series 5"],colors:["#727cf5","#6c757d","#0acf97","#fa5c7c","#e3eaef"],legend:{show:!0,position:"bottom",horizontalAlign:"center",verticalAlign:"middle",floating:!1,fontSize:"14px",offsetX:0,offsetY:-10},responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}]},series:[44,55,41,17,15],type:"donut",height:320,className:"apex-charts"})))},x=function(){return n.a.createElement(m.a,null,n.a.createElement(f.a,null,n.a.createElement("h4",{className:"header-title mb-3"},"Pie Chart"),n.a.createElement(c.a,{options:{chart:{height:320,type:"pie"},labels:["Series 1","Series 2","Series 3","Series 4","Series 5"],colors:["#727cf5","#6c757d","#0acf97","#fa5c7c","#e3eaef"],legend:{show:!0,position:"bottom",horizontalAlign:"center",verticalAlign:"middle",floating:!1,fontSize:"14px",offsetX:0,offsetY:-10},responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}]},series:[44,55,41,17,15],type:"pie",height:320,className:"apex-charts"})))},y=function(){return n.a.createElement(m.a,null,n.a.createElement(f.a,null,n.a.createElement("h4",{className:"header-title mb-3"},"Line, Bar and Area (Mixed)"),n.a.createElement(c.a,{options:{chart:{height:380,type:"line",stacked:!1,toolbar:{show:!1}},stroke:{width:[0,2,4],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},colors:["#727cf5","#39afd1","#fa5c7c"],fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],markers:{size:0},legend:{offsetY:-10},xaxis:{type:"datetime"},yaxis:{title:{text:"Points"}},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?e.toFixed(0)+" points":e}}},grid:{borderColor:"#f1f3fa"}},series:[{name:"Team A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}],type:"line",height:320,className:"apex-charts"})))};a.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{breadCrumbItems:[{label:"Charts",path:"/features/charts/apex"},{label:"Apex",path:"/features/charts/apex",active:!0}],title:"Apex Charts"}),n.a.createElement(l.a,null,n.a.createElement(o.a,{xl:6},n.a.createElement(h,null)),n.a.createElement(o.a,{xl:6},n.a.createElement(p,null))),n.a.createElement(l.a,null,n.a.createElement(o.a,{xl:6},n.a.createElement(d,null)),n.a.createElement(o.a,{xl:6},n.a.createElement(u,null))),n.a.createElement(l.a,null,n.a.createElement(o.a,{xl:6},n.a.createElement(b,null)),n.a.createElement(o.a,{xl:6},n.a.createElement(g,null))),n.a.createElement(l.a,null,n.a.createElement(o.a,{xl:6},n.a.createElement(E,null)),n.a.createElement(o.a,{xl:6},n.a.createElement(x,null))),n.a.createElement(l.a,null,n.a.createElement(o.a,null,n.a.createElement(y,null))))}},97:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(28),o=t(140),i=t(141),s=t(151),c=t(152);t(11);a.a=function(e){return n.a.createElement(o.a,null,n.a.createElement(i.a,null,n.a.createElement("div",{className:"page-title-box"},n.a.createElement("div",{className:"page-title-right"},n.a.createElement(s.a,null,n.a.createElement(c.a,null,n.a.createElement(l.b,{to:"/"},"Gomisa")),e.breadCrumbItems.map(function(e,a){return e.active?n.a.createElement(c.a,{active:!0,key:a},e.label):n.a.createElement(c.a,{key:a},n.a.createElement(l.b,{to:e.path},e.label))}))),n.a.createElement("h4",{className:"page-title"},e.title))))}}}]);
//# sourceMappingURL=45.e77c6129.chunk.js.map