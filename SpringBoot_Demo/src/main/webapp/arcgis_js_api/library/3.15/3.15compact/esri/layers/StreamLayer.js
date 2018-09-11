// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
require({cache:{"esri/layers/StreamTrackManager":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../kernel ../graphic ../geometry/Polyline ./TrackManager".split(" "),function(l,v,d,u,r,x,y,z){l=l([z],{declaredClass:"esri.layers._StreamTrackManager",constructor:function(d){this.inherited(arguments)},initialize:function(d){this.inherited(arguments)},addFeatures:function(h,m){function n(e,g){var d,a,c,b;p[e]||(p[e]=[]);d=p[e];0<q&&(g.length>q&&g.splice(0,g.length-q),c=
g.length+d.length,c>q&&(a=d.splice(0,c-q)));c=g.length;for(b=0;b<c;b+=1)d.push(g[b]);return{deletes:a,adds:g}}var p,e,w,q,f={},g={},s;if(m)return this.inherited(arguments),f;p=this.trackMap;e=this.layer;w=e._trackIdField;q=e.maximumTrackPoints||0;d.forEach(h,function(e){var d=e.attributes[w];e.visible&&(g[d]||(g[d]=[]),g[d].push(e))});for(s in g)g.hasOwnProperty(s)&&(e=n(s,g[s]),f[s]=e);return f},removeFeatures:function(h){var m=[],n=this.layer.objectIdField,p=this.layer._trackIdField;h&&(d.forEach(h,
function(e){var h,q,f,g;q=e.attributes[p];h=e.attributes[n];if(f=this.trackMap[q])for(e=0;e<f.length;e+=1)if(g=f[e],g.attributes[n]===h){this.trackMap[q].splice(e,1);-1===d.indexOf(q)&&m.push(q);break}},this),0<h.length&&this.refreshTracks(m))},drawTracks:function(h){function m(g){var d=e[g],f=d&&1<d.length,h,m,a;if((a=n.trackLineMap[g])&&!f)p.remove(a),delete n.trackLineMap[g],a=null;if(!f)return!1;f=[];for(h=d.length-1;0<=h;h-=1)(m=d[h].geometry)&&f.push([m.x,m.y]);d={};d[q]=g;1<f.length&&(a?(g=
a.geometry,g.removePath(0),g.addPath(f),a.setGeometry(g)):(a=new x(new y({paths:[f],spatialReference:l}),null,d),p.add(a),n.trackLineMap[g]=a))}var n=this,p=this.container,e,l,q,f;if(p)if(e=this.trackMap,l=this.map.spatialReference,q=this.layer._trackIdField,h)d.forEach(h,function(d){m(d)});else for(f in e)e.hasOwnProperty(f)&&m(f)},refreshTracks:function(h){function m(d){var e,f;d=n[d]||[];e=d.length;for(f=0;f<e;f++)p._repaint(d[f],null,!0)}var n=this.trackMap,p=this.layer;p._getRenderer();var e;
this.drawTracks(h);if(h)d.forEach(h,function(d){m(d)});else for(e in n)n.hasOwnProperty(e)&&m(e)},getLatestObservations:function(){var d,m,n=this.trackMap,p=[];for(d in n)n.hasOwnProperty(d)&&(m=n[d],p.push(m[m.length-1]));return p},destroy:function(){this.inherited(arguments);this.trackLineMap=null}});u("extend-esri")&&v.setObject("layers._StreamTrackManager",l,r);return l})},"esri/layers/PurgeOptions":function(){define(["dojo/_base/declare","dojo/_base/lang","dojo/Stateful","dojo/has","../kernel"],
function(l,v,d,u,r){l=l([d],{declaredClass:"esri.layers.PurgeOptions",constructor:function(d,l){this.parent=d;for(var r in l)this[r]=l[r]},_displayCountSetter:function(d){this.displayCount=d;this.parent.refresh()}});u("extend-esri")&&v.setObject("layers.PurgeOptions",l,r);return l})},"*noref":1}});
define("esri/layers/StreamLayer","dojo/_base/declare dojo/_base/connect dojo/_base/array dojo/_base/Color dojo/_base/lang dojo/has dojo/io-query dojo/on dojo/aspect ../kernel ../request ../graphic ./FeatureLayer ./StreamMode ./StreamTrackManager ../geometry/jsonUtils ../symbols/SimpleFillSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleMarkerSymbol ../renderers/SimpleRenderer ./PurgeOptions".split(" "),function(l,v,d,u,r,x,y,z,h,m,n,p,e,w,q,f,g,s,A,C,B){l=l([e],{declaredClass:"esri.layers.StreamLayer",
_preventInit:!0,constructor:function(a,c){c=c||{};if(!c.mode||c.mode===e.MODE_STREAM)this._isStream=!0,this.currentMode=this.mode=e.MODE_STREAM,this._mode=new w(this);this.purgeOptions=new B(this,c.purgeOptions||{});this.purgeInterval=c.purgeInterval||0;this._reconnectAttempts=0;this.maxReconnectAttempts=10;this.socket=this._reconnectTimeoutId=null;this._keepLatestQueried=!1;this._keepLatestUrl=null;this._relatedQueried=!1;this._joinField=this._relatedUrl=null;this._refreshing=!1;this._attemptReconnect=
r.hitch(this,this._attemptReconnect);this._purge=r.hitch(this,this._purge);this._processServiceJson=r.hitch(this,this._processServiceJson);if(r.isObject(a)&&a.layerDefinition)this._initFeatureLayer(a,c);else{var b=this;n({url:a,content:r.mixin({f:"json"}),callbackParamName:"callback"}).then(function(a){b._processServiceJson(a,c)},function(a){this._errorHandler(a)})}},_processServiceJson:function(a,c){var b=this;a.relatedFeatures&&a.relatedFeatures.featuresUrl&&a.relatedFeatures.joinField?(this._relatedUrl=
a.relatedFeatures.featuresUrl,this.objectIdField=this._joinField=a.relatedFeatures.joinField,n({url:this._relatedUrl,content:{f:"json"},callbackParamName:"callback"}).then(function(k){k=k.fields||[];var t=d.map(a.fields,function(a){return a.name});d.forEach(k,function(b){-1===d.indexOf(t,b.name)&&a.fields.push(b)});c.resourceInfo=a;b._initFeatureLayer(b._url,c)},function(a){b.onError({error:a})})):(c.resourceInfo=a,this._initFeatureLayer(this._url,c))},_initLayer:function(a,c){this.inherited(arguments);
if(a){var b;if(a.layerDefinition)this.purgeOptions=new B(this,this._params.purgeOptions||{}),this.socketUrl=this._params.socketUrl||a.layerDefinition.socketUrl||void 0;else{if(this._params.socketUrl)this.socketUrl=this._params.socketUrl;else{var k=this._getWebsocketConnectionInfo(a),t=k.urls;t&&t.length?(this._socketUrls=t,this.socketUrl=t[0],this.socketDirection="broadcast"===this._params.socketDirection?"broadcast":"subscribe",this.socketUrl+="/"+this.socketDirection,this._websocketToken=k.token,
t.length>this.maxReconnectAttempts&&(this.maxReconnectAttempts=t.length)):(this.socketUrl=void 0,k="No web socket urls were retrieved from the Stream Service. Layer will not attempt to connect.","https:"===location.protocol&&(k+=" An insecure web socket connection cannot be made from a secure web page."),this.onError(Error(k)))}if(this._params.filter)try{this._filter=b=this._makeFilter(this._params.filter)}catch(d){this.onError(Error("Error trying to create filter object: "+d+". Layer will not have filter applied")),
this._filter=null}if(this._params.geometryDefinition||this._outFields||this._defnExpr){b=b||{};b.geometry=this._params.geometryDefinition;b.outFields=this._outFields;b.where=this._defnExpr;try{this._filter=b=this._makeFilter(b)}catch(e){this.onError(Error("Error trying to create filter object: "+e+". Layer will not have filter applied")),this._filter=null}}}this.maximumTrackPoints=this._params.maximumTrackPoints||0===this._params.maximumTrackPoints?this._params.maximumTrackPoints:1;(this._params.refreshRate||
0===this._params.refreshRate)&&this._mode&&this._mode._setRefreshRate&&this._mode._setRefreshRate(this._params.refreshRate);this._keepLatestUrl=a.keepLatestArchive?a.keepLatestArchive.featuresUrl:null;a.relatedFeatures&&(a.relatedFeatures.featuresUrl&&a.relatedFeatures.joinField)&&(this._relatedUrl=a.relatedFeatures.featuresUrl,this.objectIdField=this._joinField=a.relatedFeatures.joinField);this.objectIdField||this._makeObjectIdField();this._map&&(this.socketUrl&&!this._connected)&&this.connect()}},
_setMap:function(a){var c=this.inherited(arguments),b=this._getRenderer();if(this.timeInfo&&(this._trackIdField||b&&(b.latestObservationRenderer||b.trackRenderer)))this._trackManager=new q(this),this._trackManager.initialize(a);this.socketUrl&&(!this._connected&&this._map)&&this.connect();return c},_unsetMap:function(a,c){d.forEach(this._connects,v.disconnect);(this._connected||this._reconnecting||this.socket)&&this.disconnect();this._togglePurgeT();this.inherited(arguments);this._map=null},_suspend:function(){this._togglePurgeT();
this.inherited(arguments)},_resume:function(){this.inherited(arguments);this._togglePurgeT(!0)},clear:function(){try{this._mode&&this._mode._clearDrawBuffer&&this._mode._clearDrawBuffer(),this._mode&&this._mode._clearTimeBin&&this._mode._clearTimeBin(),this._mode&&this._mode._clearFeatureMap&&this._mode._clearFeatureMap(),this._trackManager&&this._trackManager.clearTracks()}catch(a){}this.inherited(arguments)},redraw:function(){this._mode&&this._mode._flushDrawBuffer&&this._mode._flushDrawBuffer();
this.inherited(arguments)},setDefinitionExpression:function(a){this.setFilter({where:a})},getDefinitionExpression:function(){var a;this._filter&&(a=this._filter.where);return a},destroy:function(){this.disconnect();this.inherited(arguments)},onResume:function(a){this.inherited(arguments)},setGeometryDefinition:function(a){this.setFilter({geometry:a})},getGeometryDefinition:function(){var a;this._filter&&(a=this._filter.geometry);return a},connect:function(a){var c=this,b={},k=this._filter,t,d,e=this.socketUrl,
g;try{if(!this._connected){if(this._map){var f;if(this._relatedUrl&&!this._relatedQueried&&this._mode._fetchArchive)return f=this.on("update-end",function(a){c._relatedQueried=!0;f.remove();f=null;a&&a.error?console.log("Not connecting. Error fetching related features"):c.connect()}),this._mode._fetchArchive(this._relatedUrl),!1;if(this._keepLatestUrl&&!this._keepLatestQueried&&this._mode._fetchArchive)return f=this.on("update-end",function(a){c._keepLatestQueried=!0;f.remove();f=null;a&&a.error?
console.log("Not connecting. Error fetching archived features"):c.connect()}),this._mode._fetchArchive(this._keepLatestUrl),!1}this._websocketToken&&(b.token=this._websocketToken);this._map&&(this._map.spatialReference&&this.spatialReference)&&this._map.spatialReference.wkid!==this.spatialReference.wkid&&(b.outSR=this._map.spatialReference.wkid);if(k)for(d in k)null!==k[d]&&(t="geometry"===d?JSON.stringify(k[d]):k[d],b[d]=t);e+="?"+y.objectToQuery(b);return g=this._createConnection(e,a)}}catch(h){console.log("Error connecting to data stream: ",
h),a&&a(h,!1),this.onConnectionError({error:h})}},disconnect:function(a){var c=this._refreshing?"Disconnecting as part of layer refresh cycle":"Connection closed from client",b=this._refreshing?!0:!1;this._reconnectTimeoutId&&clearTimeout(this._reconnectTimeoutId);this._refreshing=this._reconnecting=this._connected=!1;this.socket&&this.socket.close();this.onDisconnect({willReconnect:b,message:c});a&&a(null,!0)},setFilter:function(a){var c,b;if(this._collection)return this.onError("Filter can only be set when the source of the layer is a Stream Service"),
!1;try{if(void 0!==a.outFields)return b=Error("Outfields property cannot be changed after layer is created"),this.onFilterChange({filter:this.getFilter(),error:b}),!1;c=this._makeFilter(a)}catch(k){return b=Error(k),this.onFilterChange({filter:this.getFilter(),error:b}),!1}if(this.socket)a={filter:c},this.socket.send(JSON.stringify(a));else z.once(this,"connect",function(a){this.setFilter(c)});return!0},getFilter:function(){var a=this._filter,c={},b=["geometry","outFields","where"];a&&d.forEach(b,
function(b){var d=a[b];d&&("geometry"===b?d=f.fromJson(d):"outFields"===b&&(d=d.split(",")),c[b]=d)});return c},setMaximumTrackPoints:function(a){if(!a&&0!==a)return!1;this.maximumTrackPoints=a;this._mode.propertyChangeHandler(3)},getUniqueValues:function(a){var c,b={},k=[];c=this._getField(a,!0);if(!c)return k;a=c.name;d.forEach(this.graphics||[],function(c){c=(c.attributes||{})[a];void 0!==c&&!b[c]&&(b[c]=1,k.push(c))});k.sort(function(a,b){return a<b?-1:a>b?1:0});return k},getLatestObservations:function(){var a=
[];return a=this._trackManager?this._trackManager.getLatestObservations():this.graphics},setPurgeInterval:function(a){var c=this.purgeInterval;this.purgeInterval=a;this._togglePurgeT();a&&this._togglePurgeT(!0);if(c!==a)this.onPurgeIntervalChange();return this},_togglePurgeT:function(a){if(a&&this.purgeInterval){var c=this;clearTimeout(this._purgeT);this._mode&&this._mode._flushDrawBuffer&&(this._purgeT=setTimeout(function(){!c.updating&&!c.suspended&&(c._mode._flushDrawBuffer(),c._togglePurgeT(!0))},
6E4*this.purgeInterval))}else this._purgeT&&(clearTimeout(this._purgeT),this._refreshT=null)},onMessage:function(){},onConnect:function(){},onDisconnect:function(){},onFilterChange:function(){},onAttemptReconnect:function(){},onConnectionError:function(){},onPurgeIntervalChange:function(){},_createConnection:function(a,c){var b=this,d=new WebSocket(a);d.onopen=function(){b.socket=d;b._connected=!0;b._reconnecting=!1;b._reconnectAttempts=0;b._bind();b.onConnect();c&&c(null,!0)};d.onclose=function(a){var c,
d=!0,k=b._connected,e=null;if(b._connected||b._reconnecting){if(a.code)if(c="Connection failed: ",4400===a.code)c+=a.reason||"Invalid url parameters. Check filter properties.",d=!1;else if(4404===a.code)c+="Service not found",d=!1;else if(4401===a.code||4403===a.code)c+="Not authorized",d=!1;d&&(b._reconnectAttempts+=1,b._reconnectAttempts>b.maxReconnectAttempts&&(c="Maximum reconnect attempts exceeded",d=!1,k=!0));b._connected=!1;k&&(c&&(e=Error(c)),b.onDisconnect({error:e,willReconnect:d}));d?b._attemptReconnect():
b.socket=null}else b.socket||(e=Error("Could not make connection to service"),b.onConnectionError({error:e})),b.socket=null,b._connected=!1};d.onerror=function(a){console.log("Socket error")};return d},_purge:function(){var a,c=[],b;if(this.purgeOptions.displayCount&&this.graphics.length>this.purgeOptions.displayCount)for(a=0;a<this.graphics.length-this.purgeOptions.displayCount;a++)b=this.graphics[a],c.push(b);0<c.length&&(this._mode._removeFeatures(c),this._trackManager&&this._trackManager.removeFeatures(c))},
_bind:function(){var a=this;this.socket.onmessage=function(c){a._onMessage(JSON.parse(c.data))}},_onMessage:function(a){var c=this;this.onMessage(a);var b={create:function(a){c._create(a)},update:function(a){c._update(a)},"delete":function(a){c._delete(a)}};if(a.type)b[a.type](a.feature);else a.hasOwnProperty("filter")?c._handleFilterMessage(a):this._create(a)},_create:function(a){function c(a){if(!b._featureHasOID(a,d)){if(!a.geometry)return!1;a.attributes=a.attributes||{};a.attributes[d]=b._nextId++}a=
a.declaredClass?a:new p(a);b._mode.drawFeature(a)}var b=this,d=b.objectIdField;a.length?a.forEach(function(a){a&&c(a)}):a&&c(a)},_delete:function(a){var c=this,b=a[c.objectIdField]||a.attributes[c.objectIdField],d=!1;this.graphics.forEach(function(a){a.attributes[c.objectIdField]==b&&(d=a)});d&&this.remove(d)},_update:function(a){var c=this,b=!1;this.graphics.forEach(function(d){d.attributes[c.objectIdField]==a.attributes[c.objectIdField]&&(b=d)});b&&(a.attributes&&b.setAttributes(a.attributes),a.geometry&&
b.setGeometry(f.fromJson(a.geometry)))},_makeFilter:function(a){var c,b=null;a=a||{};if(void 0!==a.geometry)if(b=b||{},null===a.geometry)b.geometry=null;else{c="string"===typeof a.geometry?f.fromJson(JSON.parse(a.geometry)):a.geometry.declaredClass?a.geometry:f.fromJson(a.geometry);if(!c||"point"===c.type)throw"Query object contains invalid geometry";"extent"!==c.type&&(c=c.getExtent());if(!c||0===c.getHeight()&&0===c.getWidth())throw"Invalid filter geometry: Extent cannot have a height and width of 0";
b.spatialRel="esriSpatialRelIntersects";b.geometryType="esriGeometryEnvelope";b.geometry=c.toJson()}void 0!==a.where&&(b=b||{},b.where=a.where);if(void 0!==a.outFields&&(b=b||{},a="string"===typeof a.outFields?"*"===a.outFields?null:a.outFields.replace(/,\s+/g,",").split(","):null===a.outFields?null:a.outFields,a=this._makeOutFields(a))){if(a.errors&&0<a.errors.length)throw"Invalid filter outFields. "+a.errors.join(",");b.outFields=a.fields?a.fields.join(","):null}return b},_makeOutFields:function(a){var c=
this,b=[],e=[],f={fields:null};if(!a||0===a.length)return f;d.forEach(a,function(a){if("*"===a)return f;var d=c._getField(a,!0);d?b.push(d.name):e.push("Field named "+a+" not found in schema.")});a=c._getOutFields();d.forEach(a,function(a){c._getField(a)&&-1===d.indexOf(b,a)&&b.push(a)});f.fields=b;f.errors=e;return f},_handleFilterMessage:function(a){a.error?(a=Error(a.error.join(",")),this.onFilterChange({filter:this.getFilter(),error:a})):(a=a.filter,a.geometry&&"string"===typeof a.geometry&&(a.geometry=
JSON.parse(a.geometry)),this._filter=a,this.onFilterChange({filter:this.getFilter()}))},_getWebsocketConnectionInfo:function(a){var c={urls:[]},b,e=[],f=[],g,h,l;a.streamUrls&&d.forEach(a.streamUrls,function(a){"ws"===a.transport&&(b=a.urls,c.token=a.token)});if(!b)return c;d.forEach(b,function(a){0===a.lastIndexOf("wss",0)?f.push(a):e.push(a)});a="https:"===location.protocol||0===this.url.lastIndexOf("https:",0)?f:0===e.length?f:e;if(1<a.length)for(g=0;g<a.length-1;g++)h=g+Math.floor(Math.random()*
(a.length-g)),l=a[h],a[h]=a[g],a[g]=l;c.urls=a;return c},_attemptReconnect:function(){var a=this,c;this._reconnectTimeoutId=null;a._connected=!1;if(!a._socketUrls)return!1;if(!a._collection&&!a._reconnecting&&a.socket&&a.credential)return a._reconnecting=!0,a._getServiceConnectionMetadata(a._attemptReconnect),!1;a._reconnecting=!0;a.socket=null;if(a._reconnectAttempts>a.maxReconnectAttempts)return a._reconnecting=!1;a.socketUrl=a._socketUrls[a._reconnectAttempts>a._socketUrls.length-1?a._reconnectAttempts%
a._socketUrls.length:a._reconnectAttempts];a.socketUrl+="/"+a.socketDirection;c=a._randomIntFromInterval(0,1E3);this._reconnectTimeoutId=setTimeout(function(){a.onAttemptReconnect({count:a._reconnectAttempts,url:a.socketUrl});a.connect()},1E3*a._reconnectAttempts+c)},_getServiceConnectionMetadata:function(a){var c=this,b=c._url.path;a="function"===typeof a?a:null;n({url:b,content:r.mixin({f:"json"},this._url.query),callbackParamName:"callback"}).then(function(b){b=c._getWebsocketConnectionInfo(b);
c._websocketToken=b.token;a&&a()},function(a){c.onError(Error(a))})},_setDefaultRenderer:function(){var a=this.geometryType,c=new u([5,112,176,0.8]),b=new u([255,255,255]),b=new s(s.STYLE_SOLID,b,1),d;if("esriGeometryPoint"===a||"esriGeometryMultipoint"===a)d=new A(A.STYLE_CIRCLE,10,b,c);else if("esriGeometryPolyline"===a)d=new s(s.STYLE_SOLID,c,2);else if("esriGeometryPolygon"===a||"esriGeometryEnvelope"===a)c=new u([5,112,176,0.2]),b=new u([5,112,176,0.8]),b=new s(s.STYLE_SOLID,b,1),d=new g(g.STYLE_SOLID,
b,c);d&&this.setRenderer(new C(d))},_makeObjectIdField:function(){var a=1,c,b,e=[];if(!this.objectIdField){c=this.fields.length;for(b=0;b<c;b++)e.push(this.fields[b].name.toLowerCase());for(;-1!==d.indexOf(e,"objectid_"+a);)a+=1;this.objectIdField="objectid_"+a;this.fields.push({name:"objectid_"+a,type:"esriFieldTypeOID",alias:"objectid_"+a,nullable:!1})}},_featureHasOID:function(a,c){return a.attributes&&(a.attributes[c]||0===a.attributes[c])},_randomIntFromInterval:function(a,c){return Math.floor(Math.random()*
(c-a+1)+a)}});x("extend-esri")&&r.setObject("layers.StreamLayer",l,m);return l});