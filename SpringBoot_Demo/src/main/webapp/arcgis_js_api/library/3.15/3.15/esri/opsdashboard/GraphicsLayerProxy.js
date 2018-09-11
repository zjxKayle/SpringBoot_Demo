// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("esri/opsdashboard/GraphicsLayerProxy",["dojo/_base/declare","dojo/_base/lang","./core/messageHandler"],function(c,d,b){return c(null,{visible:null,opacity:null,minScale:null,maxScale:null,renderer:null,_uniqueId:0,constructor:function(a,b,c){this._mapWidgetProxy=a;this._id=b;d.mixin(this,c||{})},setVisibility:function(a){this.visible=a;b._sendMessage({functionName:"setGraphicsLayerVisibility",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,visible:a}})},setOpacity:function(a){0>
a&&(a=0);1<a&&(a=1);this.opacity=a;b._sendMessage({functionName:"setGraphicsLayerOpacity",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,opacity:a}})},setMinScale:function(a){this.minScale=a;b._sendMessage({functionName:"setGraphicsLayerMinScale",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,minScale:a}})},setMaxScale:function(a){this.maxScale=a;b._sendMessage({functionName:"setGraphicsLayerMaxScale",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,
maxScale:a}})},setRenderer:function(a){this.renderer=a;b._sendMessage({functionName:"setGraphicsLayerRenderer",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,renderer:a?a.toJson():void 0}})},removeGraphic:function(a){a.attributes&&(a=a.attributes.__id)&&b._sendMessage({functionName:"removeGraphic",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,graphicId:a}})},addOrUpdateGraphic:function(a){this.addOrUpdateGraphics([a])},addOrUpdateGraphics:function(a){Array.isArray(a)&&
0!==a.length&&(a=a.map(function(a){a.attributes||(a.attributes={});a.attributes.__id||(a.attributes.__id=++this._uniqueId);return a.toJson()},this),b._sendMessage({functionName:"updateGraphics",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,graphics:a}}))},clear:function(){b._sendMessage({functionName:"clearGraphics",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id}})}})});