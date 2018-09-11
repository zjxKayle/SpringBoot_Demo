// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("esri/layers/JoinDataSource","dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../lang ./DataSource ./LayerMapSource ./TableDataSource ./QueryDataSource ./RasterDataSource".split(" "),function(f,g,h,k,e,l,m,n,p,q){var d=f(l,{declaredClass:"esri.layers.JoinDataSource",constructor:function(a){a&&(a.leftTableSource&&(this.leftTableSource=this._createLayerSource(a.leftTableSource)),a.rightTableSource&&(this.rightTableSource=this._createLayerSource(a.rightTableSource)))},_createLayerSource:function(a){var b;
if("mapLayer"===a.type)b=new m(a);else{b={type:"dataLayer"};var c;switch(a.dataSource.type){case "table":c=new n(a.dataSource);break;case "queryTable":c=new p(a.dataSource);break;case "joinTable":c=new d(a.dataSource);break;case "raster":c=new q(a.dataSource);break;default:c=a.dataSource}b.dataSource=c;b.toJson=function(){var a={type:"dataLayer",dataSource:c.toJson()};return e.fixJson(a)}}return b},toJson:function(){var a={type:"joinTable",leftTableSource:this.leftTableSource&&this.leftTableSource.toJson(),
rightTableSource:this.rightTableSource&&this.rightTableSource.toJson(),leftTableKey:this.leftTableKey,rightTableKey:this.rightTableKey},b;b="left-outer-join"===this.joinType.toLowerCase()?"esriLeftOuterJoin":"left-inner-join"===this.joinType.toLowerCase()?"esriLeftInnerJoin":this.joinType;a.joinType=b;return e.fixJson(a)}});h("extend-esri")&&g.setObject("layers.JoinDataSource",d,k);return d});