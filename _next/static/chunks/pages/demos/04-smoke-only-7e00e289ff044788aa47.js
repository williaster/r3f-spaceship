(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5360:function(e,t,a){"use strict";a.r(t);var s=a(7294),n=a(2212),o=a(9101),r=a(6147),i=a(5893);t.default=function(e){var t=e.speed,a=void 0===t?100:t,m=e.particleSize,u=void 0===m?.1:m,l=(0,r.M4)({smokeDensity:{value:485,min:0,max:1e3,step:1},smokeSpread:{value:3,min:0,max:10,step:.5},smokeLength:{value:15,min:10,max:100,step:1},smokeColor:"#4ce5df",smokeOpacity:{value:.25,min:0,max:1,step:.05},smokeSize:{value:5,min:1,max:100,step:1},smokeGrowthRate:{value:.5,min:.1,max:1.5,step:.05}}),p=l.smokeDensity,c=l.smokeSpread,h=l.smokeLength,d=l.smokeColor,k=l.smokeOpacity,M=l.smokeSize,f=l.smokeGrowthRate,v=(0,s.useRef)(),x=(0,s.useMemo)((function(){return new n.Object3D}),[]),w=(0,s.useMemo)((function(){for(var e=[],t=0;t<p;t++)e.push({speedVariation:n.MathUtils.randFloat(.01,.51),y:n.MathUtils.randFloat(0,0+h),growX:n.MathUtils.randFloatSpread(c),growZ:n.MathUtils.randFloatSpread(c)});return e}),[p,c,h]);return(0,o.xQ)((function(e){var t=e.clock.elapsedTime;w.forEach((function(e,s){var n=e.speedVariation,o=e.y,r=e.growX,i=e.growZ,m=t*Math.max(1,a)*n,u=Math.min(0,(o-m)%h),l=u/h,p=r*l+Math.sin(r*t)*c*l,d=i*l+Math.sin(i*t)*c*l,k=Math.min(.5*Math.pow(2,Math.abs(u*f)),M);x.position.set(p,u,d),x.scale.set(k,k,k),x.updateMatrix(),v.current.setMatrixAt(s,x.matrix)})),v.current.instanceMatrix.needsUpdate=!0})),(0,i.jsxs)("instancedMesh",{ref:v,args:[null,null,p],position:[0,-1,0],children:[(0,i.jsx)("sphereGeometry",{args:[u,10,10]}),(0,i.jsx)("meshBasicMaterial",{color:d,transparent:!0,opacity:k,depthWrite:!1})]})}},5138:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demos/04-smoke-only",function(){return a(5360)}])}},function(e){e.O(0,[774,737,101,147,888,179],(function(){return t=5138,e(e.s=t);var t}));var t=e.O();_N_E=t}]);