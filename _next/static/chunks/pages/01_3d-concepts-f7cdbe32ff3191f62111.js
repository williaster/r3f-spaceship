(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{4116:function(e,t,n){"use strict";n.r(t);var r=n(9008),i=n(6825),s=n.n(i),o=n(7294),c=n(7770),a=n(5893),u="/r3f-spaceship";t.default=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],i=(0,o.useState)(!1),l=i[0],h=i[1],d=(0,o.useState)(!1),f=d[0],p=d[1],x=(0,o.useState)(!1),j=x[0],m=x[1],w=(0,o.useState)(!1),g=w[0],b=w[1],v=(0,o.useState)(!1),y=v[0],_=v[1],O=(0,o.useState)(!1),k=O[0],S=O[1],P=(0,o.useState)(!1),C=P[0],M=P[1];return(0,a.jsxs)("div",{className:s().container,children:[(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:"3D basics"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("main",{className:s().main,children:[(0,a.jsx)("h3",{children:"A 3D Scene \ud83d\udd76"}),"Show demo"," ",(0,a.jsx)("input",{type:"checkbox",checked:t,onChange:function(){return n(!t)}}),!t&&(0,a.jsxs)("div",{className:s().flex,children:[(0,a.jsx)("img",{src:"".concat(u,"/cartesian.png"),alt:"",width:150,height:130}),(0,a.jsx)("img",{src:"".concat(u,"/camera.jpeg"),alt:"",width:240,height:220}),(0,a.jsx)("img",{src:"".concat(u,"/mesh.png"),alt:"",width:210,height:180}),(0,a.jsx)("img",{src:"".concat(u,"/materials.png"),alt:"",width:350,height:110}),(0,a.jsx)("img",{src:"".concat(u,"/lights.jpeg"),alt:"",width:300,height:220})]}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["Cartesian 3D space"," ",t&&(0,a.jsx)("input",{type:"checkbox",checked:l,onChange:function(){return h(!l)}})]}),(0,a.jsxs)("li",{children:["Perspective Camera (position, near/far)"," ",t&&(0,a.jsx)("input",{type:"checkbox",checked:f,onChange:function(){return p(!f)}})]}),(0,a.jsxs)("li",{children:["Mesh"," ",t&&(0,a.jsx)("input",{type:"checkbox",checked:k,onChange:function(){return S(!k)}}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Geometry (points and edges)"}),(0,a.jsxs)("li",{children:["Materials (color, shiny/rough, texture)"," ",t&&(0,a.jsx)("input",{type:"checkbox",checked:C,onChange:function(){return M(!C)}}),(0,a.jsx)("ul",{children:(0,a.jsxs)("li",{children:["Mesh normal"," ",t&&(0,a.jsx)("input",{type:"checkbox",checked:y,onChange:function(){return _(!y)}})]})})]})]})]}),(0,a.jsxs)("li",{children:["Lights",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["Ambient (global illumination)",t&&(0,a.jsx)("input",{type:"checkbox",checked:j,onChange:function(){return m(!j)}})]}),(0,a.jsx)("li",{children:"Directional (single direction, parallel rays)"}),(0,a.jsxs)("li",{children:["Point (single point, all directions)"," ",t&&(0,a.jsx)("input",{type:"checkbox",checked:g,onChange:function(){return b(!g)}})]}),(0,a.jsx)("li",{children:"Spotlight (single point, single directional cone)"})]})]})]}),t&&(0,a.jsx)(c.default,{showAmbient:j,showBoxes:k,showPoint:g,showMaterials:C,showMeshNormal:y,showCamera:f,showAxes:l})]})]})}},7770:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.r(t),n.d(t,{default:function(){return g}});var i=n(2809),s=n(7294),o=n(9101);function c(e,t,...n){const r=s.useRef(),i=(0,o.Ky)((e=>e.scene));return s.useEffect((()=>(t&&e.current&&(r.current=new t(e.current,...n),r.current&&i.add(r.current)),()=>{r.current&&i.remove(r.current)})),[i,t,e,n]),(0,o.xQ)((()=>{var e;null!=(e=r.current)&&e.update&&r.current.update()})),r}var a=n(6037),u=n(2212),l=n(5893),h=["rotation","wireframe","normals"],d=["wireframe"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(e){var t=e.showAmbient,n=void 0===t||t,r=e.showAxes,i=void 0===r||r,h=e.showPoint,d=void 0===h||h,f=e.showBoxes,p=void 0===f||f,x=e.showCamera,g=void 0===x||x,b=e.showMaterials,v=void 0===b||b,y=e.showMeshNormal,_=void 0===y||y,O=(0,s.useRef)();return c(d&&O,u.PointLightHelper,.5),(0,o.xQ)((function(e){var t=e.clock;O.current&&(O.current.position.x=Math.sin(t.elapsedTime)*Math.PI,O.current.position.y=Math.cos(t.elapsedTime)*Math.PI)})),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.z,{}),i&&(0,l.jsx)("axesHelper",{}),g&&(0,l.jsx)(w,{}),n&&(0,l.jsx)("ambientLight",{intensity:.2}),d&&(0,l.jsx)("pointLight",{ref:O,castShadow:!0,intensity:.5,position:[2,2,2],"shadow-mapSize-height":1024,"shadow-mapSize-width":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),p&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(j,{castShadow:!0,wireframe:!v,position:[-1.2,0,1],rotation:-.01}),(0,l.jsx)(j,{wireframe:!v,normals:_,castShadow:!1,position:[1.2,0,1]}),(0,l.jsx)(j,{wireframe:!0,castShadow:!1,scale:1.05,position:[1.2,0,1]}),(0,l.jsx)(m,{wireframe:!v,rotation:[0,Math.PI,0]})]})]})},j=function(e){var t,n=e.rotation,i=void 0===n?.01:n,c=e.wireframe,a=e.normals,u=r(e,h),d=(0,s.useRef)(),f=(0,s.useState)(!1),x=f[0],j=f[1],m=(0,s.useState)(!1),w=m[0],g=m[1];return(0,o.xQ)((function(){d.current&&(d.current.rotation.x+=i)})),(0,l.jsxs)("mesh",p(p({},u),{},{ref:d,scale:(null!==(t=u.scale)&&void 0!==t?t:1)*(w?1.5:1),onClick:function(){return g(!w)},onPointerOver:function(){return j(!0)},onPointerOut:function(){return j(!1)},children:[(0,l.jsx)("boxGeometry",{args:[1,1,1]}),a?(0,l.jsx)("meshNormalMaterial",{wireframe:c,color:c?"#000":x?"hotpink":"orange"}):(0,l.jsx)("meshStandardMaterial",{wireframe:c,color:c?"#000":x?"hotpink":"orange"})]}))},m=function(e){var t=e.wireframe,n=r(e,d);return(0,l.jsxs)("mesh",p(p({},n),{},{receiveShadow:!0,position:[0,0,-.01],children:[(0,l.jsx)("planeGeometry",{args:[10,10,10,10]}),(0,l.jsx)("meshStandardMaterial",{wireframe:t,color:"#3ae8ce",side:u.DoubleSide,metalness:.5,roughness:.15})]}))},w=function(){var e=s.useRef();return c(e,u.CameraHelper),(0,l.jsx)("perspectiveCamera",{makeDefault:!1,position:[0,0,5],near:1,far:5.2,ref:e,children:(0,l.jsx)("meshBasicMaterial",{})})},g=function(e){return(0,l.jsx)(o.Xz,{shadows:!0,style:{background:"#0a5c5b",height:600},children:(0,l.jsx)(x,p({},e))})}},3034:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/01_3d-concepts",function(){return n(4116)}])},6825:function(e){e.exports={main:"r3f_main__3hApG",demo:"r3f_demo__3X7Q1",code:"r3f_code__1BM0E",scene:"r3f_scene__3Un_L",scene__full_width:"r3f_scene__full_width__38Hpq",flex:"r3f_flex__228D6"}},9008:function(e,t,n){e.exports=n(639)},7462:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},2809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774,737,101,37,888,179],(function(){return t=3034,e(e.s=t);var t}));var t=e.O();_N_E=t}]);