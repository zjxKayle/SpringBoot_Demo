// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/base/conditionals/ISO19139A1_ROW15","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/topic dojo/has ../../../../../../kernel dojo/i18n!../../../../nls/i18nArcGIS ../../../../base/Conditional".split(" "),function(a,d,m,f,g,h,k,l){a=a(l,{key:"ISO19139A1_ROW15",postCreate:function(){this.inherited(arguments);var e=this;this.own(f.subscribe("gxe/interaction-occurred",function(b){try{if(e.parentXNode&&b&&b.inputWidget&&b.inputWidget.parentXNode){var c=
b.inputWidget.parentXNode.gxePath;"/metadata/spatRepInfo/Georect/chkPtAv"===c?e.emitInteractionOccurred():"/metadata/spatRepInfo/Georect/chkPtDesc"===c&&e.emitInteractionOccurred()}}catch(a){console.error(a)}}))},validateConditionals:function(a){var b=this.newStatus({message:k.conditionals[this.key]}),c=!0,d=this.parentXNode.parentElement;this.focusNode||(this.focusNode=this.parentXNode.inputWidget.focusNode);this.isXNodeOff(this.parentXNode)||this.isXNodeInputEmpty(this.parentXNode)&&this.forActiveXNodes("/metadata/spatRepInfo/Georect/chkPtAv",
d.domNode,function(a){if("True"===a.inputWidget.getInputValue())return c=!1,!0});b.isValid=c;this.track(b,a);return b}});g("extend-esri")&&d.setObject("dijit.metadata.types.arcgis.base.conditionals.ISO19139A1_ROW15",a,h);return a});