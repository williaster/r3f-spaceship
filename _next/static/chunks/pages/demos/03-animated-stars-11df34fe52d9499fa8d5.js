(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[792],{5979:function(t,e,a){"use strict";a.r(e);var r=a(7294),n=a(9101),s=a(2212),o=a(6147),i=a(5893);e.default=function(t){var e=t.speed,a=void 0===e?1:e,u=(0,o.M4)({starColor:"#db2438",starCount:{value:500,min:0,max:1e3,step:1},starSpread:{value:30,min:1,max:100,step:1},wrapDistance:{value:70,min:20,max:100,step:1}}),c=u.starCount,d=u.starColor,l=u.starSpread,x=u.wrapDistance,f=(0,r.useRef)(),h=(0,r.useMemo)((function(){return new s.Object3D}),[]),m=(0,r.useMemo)((function(){for(var t=[],e=0;e<c;e++)t.push({speedFactor:s.MathUtils.randFloat(.2,1),x:s.MathUtils.randFloat(-l,l),y:s.MathUtils.randFloat(-l,l),z:s.MathUtils.randFloat(-l,l),random:s.MathUtils.randFloat(20,100)});return t}),[c,l]);return(0,n.xQ)((function(t){var e=t.clock.elapsedTime;m.forEach((function(t,r){var n=t.x,s=t.y,o=t.z,i=t.random,u=t.speedFactor,c=(s-e*a*u)%x+(0===a?0:x/2),d=Math.cos(i);h.position.set(n,c,o),h.scale.set(d,d,d),h.rotation.set(0,Math.PI*e*(i/50),0),h.updateMatrix(),f.current.setMatrixAt(r,h.matrix)})),f.current.instanceMatrix.needsUpdate=!0})),(0,i.jsxs)("instancedMesh",{ref:f,args:[null,null,c],children:[(0,i.jsx)("planeGeometry",{args:[.25,10]}),(0,i.jsx)("meshPhongMaterial",{color:d,side:s.DoubleSide,depthWrite:!1})]})}},8858:function(t,e,a){"use strict";a.r(e);a(7294);var r=a(9101),n=a(6037),s=a(6147),o=a(5979),i=a(5893),u=function(){var t=(0,s.M4)({background:"#850085",speed:{value:0,min:0,max:200}}),e=t.background,a=t.speed;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("color",{attach:"background",args:[e]}),(0,i.jsx)(n.z,{}),(0,i.jsx)("ambientLight",{intensity:.5}),(0,i.jsx)(c,{}),(0,i.jsx)(o.default,{speed:a})]})},c=function(){return(0,i.jsxs)("mesh",{children:[(0,i.jsx)("coneGeometry",{args:[.75,2,30]}),(0,i.jsx)("meshStandardMaterial",{color:"#ff8474"})]})};e.default=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Xz,{children:(0,i.jsx)(u,{})}),(0,i.jsx)(s.Zf,{})]})}},9672:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demos/03-animated-stars",function(){return a(8858)}])}},function(t){t.O(0,[774,737,101,147,37,888,179],(function(){return e=9672,t(t.s=e);var e}));var e=t.O();_N_E=e}]);