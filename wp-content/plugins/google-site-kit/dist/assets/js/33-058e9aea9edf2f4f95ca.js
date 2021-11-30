(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[33],{1011:function(t,e){!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=function(t){for(var e=window.document,n=r(e);n;)n=r(e=n.ownerDocument);return e}(),e=[],n=null,o=null;IntersectionObserver.prototype.THROTTLE_TIMEOUT=100,IntersectionObserver.prototype.POLL_INTERVAL=null,IntersectionObserver.prototype.USE_MUTATION_OBSERVER=!0,IntersectionObserver._setupCrossOriginUpdater=function(){return n||(n=function(t,n){o=t&&n?u(t,n):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),n},IntersectionObserver._resetCrossOriginUpdater=function(){n=null,o=null},IntersectionObserver.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},IntersectionObserver.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},IntersectionObserver.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},IntersectionObserver.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},IntersectionObserver.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},IntersectionObserver.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},IntersectionObserver.prototype._monitorIntersections=function(e){var n=e.defaultView;if(n&&-1==this._monitoringDocuments.indexOf(e)){var o=this._checkForIntersections,h=null,c=null;this.POLL_INTERVAL?h=n.setInterval(o,this.POLL_INTERVAL):(i(n,"resize",o,!0),i(e,"scroll",o,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in n&&(c=new n.MutationObserver(o)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(h&&t.clearInterval(h),s(t,"resize",o,!0)),s(e,"scroll",o,!0),c&&c.disconnect()}));var u=this.root&&(this.root.ownerDocument||this.root)||t;if(e!=u){var a=r(e);a&&this._monitorIntersections(a.ownerDocument)}}},IntersectionObserver.prototype._unmonitorIntersections=function(e){var n=this._monitoringDocuments.indexOf(e);if(-1!=n){var o=this.root&&(this.root.ownerDocument||this.root)||t;if(!this._observationTargets.some((function(t){var n=t.element.ownerDocument;if(n==e)return!0;for(;n&&n!=o;){var i=r(n);if((n=i&&i.ownerDocument)==e)return!0}return!1}))){var i=this._monitoringUnsubscribes[n];if(this._monitoringDocuments.splice(n,1),this._monitoringUnsubscribes.splice(n,1),i(),e!=o){var s=r(e);s&&this._unmonitorIntersections(s.ownerDocument)}}}},IntersectionObserver.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},IntersectionObserver.prototype._checkForIntersections=function(){if(this.root||!n||o){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var r=o.element,i=h(r),s=this._rootContainsTarget(r),c=o.entry,u=t&&s&&this._computeTargetAndRootIntersection(r,i,e),a=null;this._rootContainsTarget(r)?n&&!this.root||(a=e):a={top:0,bottom:0,left:0,right:0,width:0,height:0};var l=o.entry=new IntersectionObserverEntry({time:window.performance&&performance.now&&performance.now(),target:r,boundingClientRect:i,rootBounds:a,intersectionRect:u});c?t&&s?this._hasCrossedThreshold(c,l)&&this._queuedEntries.push(l):c&&c.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},IntersectionObserver.prototype._computeTargetAndRootIntersection=function(e,r,i){if("none"!=window.getComputedStyle(e).display){for(var s,c,a,f,p,d,g,v,b=r,m=l(e),_=!1;!_&&m;){var w=null,I=1==m.nodeType?window.getComputedStyle(m):{};if("none"==I.display)return null;if(m==this.root||9==m.nodeType)if(_=!0,m==this.root||m==t)n&&!this.root?!o||0==o.width&&0==o.height?(m=null,w=null,b=null):w=o:w=i;else{var y=l(m),O=y&&h(y),E=y&&this._computeTargetAndRootIntersection(y,O,i);O&&E?(m=y,w=u(O,E)):(m=null,b=null)}else{var T=m.ownerDocument;m!=T.body&&m!=T.documentElement&&"visible"!=I.overflow&&(w=h(m))}if(w&&(s=w,c=b,a=void 0,f=void 0,p=void 0,d=void 0,g=void 0,v=void 0,a=Math.max(s.top,c.top),f=Math.min(s.bottom,c.bottom),p=Math.max(s.left,c.left),d=Math.min(s.right,c.right),v=f-a,b=(g=d-p)>=0&&v>=0&&{top:a,bottom:f,left:p,right:d,width:g,height:v}||null),!b)break;m=m&&l(m)}return b}},IntersectionObserver.prototype._getRootRect=function(){var e;if(this.root&&!f(this.root))e=h(this.root);else{var n=f(this.root)?this.root:t,o=n.documentElement,r=n.body;e={top:0,left:0,right:o.clientWidth||r.clientWidth,width:o.clientWidth||r.clientWidth,bottom:o.clientHeight||r.clientHeight,height:o.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(e)},IntersectionObserver.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},IntersectionObserver.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!=i<o)return!0}},IntersectionObserver.prototype._rootIsInDom=function(){return!this.root||a(t,this.root)},IntersectionObserver.prototype._rootContainsTarget=function(e){var n=this.root&&(this.root.ownerDocument||this.root)||t;return a(n,e)&&(!this.root||n==e.ownerDocument)},IntersectionObserver.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},IntersectionObserver.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=IntersectionObserver,window.IntersectionObserverEntry=IntersectionObserverEntry}function r(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function IntersectionObserverEntry(t){this.time=t.time,this.target=t.target,this.rootBounds=c(t.rootBounds),this.boundingClientRect=c(t.boundingClientRect),this.intersectionRect=c(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,r=o.width*o.height;this.intersectionRatio=n?Number((r/n).toFixed(4)):this.isIntersecting?1:0}function IntersectionObserver(t,e){var n,o,r,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType&&9!=i.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,r=null,function(){r||(r=setTimeout((function(){n(),r=null}),o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function i(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function s(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function h(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function c(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function u(t,e){var n=e.top-t.top,o=e.left-t.left;return{top:n,left:o,height:e.height,width:e.width,bottom:n+e.height,right:o+e.width}}function a(t,e){for(var n=e;n;){if(n==t)return!0;n=l(n)}return!1}function l(e){var n=e.parentNode;return 9==e.nodeType&&e!=t?r(e):(n&&n.assignedSlot&&(n=n.assignedSlot.parentNode),n&&11==n.nodeType&&n.host?n.host:n)}function f(t){return t&&9===t.nodeType}}()}}]);