// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("esri/tasks/datareviewer/ReviewerFilters","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/json ../../geometry/Polygon dojo/has ../../kernel".split(" "),function(f,c,d,g,h,k,l){f=f(null,{declaredClass:"esri.tasks.datareviewer.ReviewerFilters",constructor:function(){this.singleAttributeFilters=[];this.listAttributeFilters=[];this.rangeAttributeFilters=[];this.spatialFilters=[]},addAttributeFilter:function(a,b){var e={};e.fieldName=a;d.isArray(b)?1<b.length?(e.fieldValue=b,this.listAttributeFilters.push(e)):
(e.fieldValue=b[0],this.singleAttributeFilters.push(e)):(e.fieldValue=b,this.singleAttributeFilters.push(e))},addRangeFilter:function(a,b,e){var c={},d={};d.minFieldValue=b;d.maxFieldValue=e;c.fieldName=a;c.fieldValue=d;this.rangeAttributeFilters.push(c)},addSpatialFilter:function(a){var b={};a&&("rings"in a&&"spatialReference"in a)&&(b.rings=a.rings,b.spatialReference=a.spatialReference,this.spatialFilters.push(b))},toJSON:function(){var a=[];null!==this.singleAttributeFilters&&0<this.singleAttributeFilters.length&&
a.push({singleAttributeFilter:this.singleAttributeFilters});null!==this.listAttributeFilters&&0<this.listAttributeFilters.length&&a.push({listAttributeFilter:this.listAttributeFilters});null!==this.rangeAttributeFilters&&0<this.rangeAttributeFilters.length&&a.push({rangeAttributeFilter:this.rangeAttributeFilters});null!==this.spatialFilters&&0<this.spatialFilters.length&&a.push({spatialFilter:this.spatialFilters});return 0===a.length?"":g.stringify({filtersArray:a})},getCount:function(){var a=0;null!==
this.singleAttributeFilters&&0<this.singleAttributeFilters.length&&(a+=this.singleAttributeFilters.length);null!==this.listAttributeFilters&&0<this.listAttributeFilters.length&&(a+=this.listAttributeFilters.length);null!==this.rangeAttributeFilters&&0<this.rangeAttributeFilters.length&&(a+=this.rangeAttributeFilters.length);null!==this.spatialFilters&&0<this.spatialFilters.length&&(a+=this.spatialFilters.length);return a},addReviewerFilters:function(a){if(!a)return 0;var b=0;c.forEach(a.singleAttributeFilters,
function(a){this.addAttributeFilter(a.fieldName,a.fieldValue);b++});c.forEach(a.listAttributeFilters,function(a){this.addAttributeFilter(a.fieldName,a.fieldValue);b++});c.forEach(a.rangeAttributeFilters,function(a){this.addRangeFilter(a.fieldName,a.minValue,a.maxValue);b++});c.forEach(a.spatialFilters,function(a){this.addSpatialFilter(a);b++});return b},createFromJsonObject:function(a){a&&(a.filters&&d.isArray(a.filters))&&c.forEach(a.filters,d.hitch(this,function(a){"spatialFilter"in a?c.forEach(a.spatialFilter,
d.hitch(this,function(a){this.addSpatialFilter(new h(a))})):"singleAttributeFilter"in a?c.forEach(a.singleAttributeFilter,d.hitch(this,function(a){this.addAttributeFilter(a.fieldName,a.fieldValue)})):"listAttributeFilter"in a?c.forEach(a.listAttributeFilter,d.hitch(this,function(a){this.addAttributeFilter(a.fieldName,a.fieldValue)})):"rangeAttributeFilter"in a&&c.forEach(a.rangeAttributeFilter,d.hitch(this,function(a){this.addRangeFilter(a.fieldName,a.minValue,a.maxValue)}))}))}});k("extend-esri")&&
d.setObject("tasks.datareviewer.ReviewerFilters",f,l);return f});