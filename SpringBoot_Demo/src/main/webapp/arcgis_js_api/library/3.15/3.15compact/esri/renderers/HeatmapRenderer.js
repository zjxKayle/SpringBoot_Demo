// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("esri/renderers/HeatmapRenderer","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct ../sniff ../kernel ../lang ../symbols/PictureMarkerSymbol ../Color ./Renderer".split(" "),function(h,l,k,n,p,q,r,s,m,t){h=h([t],{declaredClass:"esri.renderer.HeatmapRenderer",colors:null,blurRadius:10,maxPixelIntensity:100,minPixelIntensity:0,field:null,fieldOffset:null,colorStops:null,constructor:function(a){(this._supportsCanvas=window.CanvasRenderingContext2D?!0:!1)?("string"==typeof a&&
(a=JSON.parse(a)),l.mixin(this,a),this._canvas=null,!this.colors&&!this.colorStops&&(this.colorStops=[{ratio:0,color:"rgba(255, 140, 0, 0)"},{ratio:0.75,color:"rgba(255, 140, 0, 1)"},{ratio:0.9,color:"rgba(255, 0,   0, 1)"}]),this.gradient=this._generateGradient(this.colorStops||this.colors)):console.log("The HeatmapRenderer requires a Canvas enabled Browser.  IE8 and less does not support Canvas.")},getSymbol:function(a){if(!this._supportsCanvas)return!1;var b=a.attributes.imageData;a=a.attributes.size;
if(!a)return null;var c=this._getContext(a[0],a[1]),d=c.getImageData(0,0,a[0],a[1]);window.ArrayBuffer&&b instanceof ArrayBuffer?b=window.Uint8ClampedArray?new Uint8ClampedArray(b):new Uint8Array(b):b.BYTES_PER_ELEMENT&&1!==b.BYTES_PER_ELEMENT&&(b=window.Uint8ClampedArray?new Uint8ClampedArray(b.buffer):new Uint8Array(b.buffer));if(window.CanvasPixelArray&&d.data instanceof window.CanvasPixelArray)for(var f=d.data,e=f.length;e--;)f[e]=b[e];else d.data.set(b);c.putImageData(d,0,0);return new s(c.canvas.toDataURL(),
a[0],a[1])},setColors:function(a){if(a&&(a instanceof Array||a.colors))this.gradient=this._generateGradient(a.colors||a),this.colors=a;return this},setColorStops:function(a){if(a&&(a instanceof Array||a.colorStops))this.gradient=this._generateGradient(a.colorStops||a),this.colorStops=a;return this},setMaxPixelIntensity:function(a){this.maxPixelIntensity=a;return this},setMinPixelIntensity:function(a){this.minPixelIntensity=a;return this},setField:function(a){this.field=a;return this},setFieldOffset:function(a){this.fieldOffset=
a;return this},setBlurRadius:function(a){this.blurRadius=a;return this},getStats:function(){},getHistogramData:function(){},toJson:function(){var a=l.mixin(this.inherited(arguments),{type:"heatmap",blurRadius:this.blurRadius,colorStops:this._colorsToStops(this.colorStops||this.colors),maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity,field:this.field});null!=this.fieldOffset&&(a.fieldOffset=this.fieldOffset);k.forEach(a.colorStops,function(a){a.color=m.toJsonColor(a.color)});
return r.fixJson(a)},_getContext:function(a,b){this._canvas?(this._canvas.width=a,this._canvas.height=b):this._canvas=this._initCanvas(a,b);return this._canvas.getContext("2d")},_initCanvas:function(a,b){var c=n.create("canvas",{id:"hm_canvas-"+Math.floor(1E3*Math.random()),style:"position: absolute; left: -10000px; top: 0px;"},null);c.width=a;c.height=b;document.body.appendChild(c);return c},_generateGradient:function(a,b){b||(b=512);for(var c=this._colorsToStops(a),d=this._getContext(1,b||512),
f=d.createLinearGradient(0,0,0,b),e=0,g;e<c.length;e++)g=c[e],f.addColorStop(g.ratio,g.color.toCss(!0));d.fillStyle=f;d.fillRect(0,0,1,b);return d.getImageData(0,0,1,b).data},_colorsToStops:function(a){var b=[];if(!a[0])return b;if(null!=a[0].ratio)b=k.map(a,function(a){return{ratio:a.ratio,color:this._toColor(a.color)}},this);else if(null!=a[0].value){var c=Infinity,b=-Infinity,d=0,f;for(f=0;f<a.length;f++){var e=a[f].value;e<c&&(c=e);e>b&&(b=e)}d=b-c;this.maxPixelIntensity=b;this.minPixelIntensity=
c;b=k.map(a,function(a){var b=a.value;a=this._toColor(a.color);return{value:b,ratio:(b-c)/d,color:a}},this)}else var g=a.length-1,b=k.map(a,function(a,b){return{color:this._toColor(a),ratio:b/g}},this);return b},_toColor:function(a){!a.toRgba&&!a.declaredClass&&(a=new m(a));return a}});p("extend-esri")&&l.setObject("renderer.HeatmapRenderer",h,q);return h});