if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const f=e=>n(e,o),c={module:{uri:o},exports:t,require:f};i[o]=Promise.all(r.map((e=>c[e]||f(e)))).then((e=>(s(...e),t)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-3d5bf0a2.css",revision:null},{url:"assets/index-fa4aeed6.js",revision:null},{url:"index.html",revision:"7a95951d55a51320db5884be11b4513b"},{url:"registerSW.js",revision:"d0992f3e3ae8a7de9d9070682643f4fd"},{url:"favicon.ico",revision:"c90296b90882858b24d0a9199c22a456"},{url:"icon-192x192.png",revision:"574b7d06119045fe892ca034f072e695"},{url:"icon-256x256.png",revision:"4a1e034be001d5e774000481a3ea7df0"},{url:"icon-384x384.png",revision:"1594697e239a5f2c16cd0a1b29f2a87c"},{url:"icon-512x512.png",revision:"c2e30695bc72fb6ab4329b22075fffec"},{url:"manifest.webmanifest",revision:"6f3845f52cdb6af4d11154ed310e61ab"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
