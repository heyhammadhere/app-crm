import{r as o,d as i}from"./antd-413b4d58.js";import{u as g,P as y,g as b,E as v,C as T}from"./createLoading-37881243.js";import"./index-449b5d3a.js";var O=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a},_=o.forwardRef(function(e,n){var a=e.chartRef,t=e.style,r=t===void 0?{height:"inherit"}:t,m=e.className,f=e.loading,u=e.loadingTemplate,s=e.errorTemplate,h=O(e,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),c=g(y,h),l=c.chart,d=c.container;return o.useEffect(function(){b(a,l.current)},[l.current]),o.useImperativeHandle(n,function(){return{getChart:function(){return l.current}}}),i.createElement(v,{errorTemplate:s},f&&i.createElement(T,{loadingTemplate:u,theme:e.theme}),i.createElement("div",{className:m,style:r,ref:d}))});export{_ as default};
