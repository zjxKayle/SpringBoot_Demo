// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/form/InputContactName","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/etc/docUtil ../../../form/InputText".split(" "),function(a,b,e,f,g,h){a=a([h],{postCreate:function(){this.inherited(arguments)},emitInteractionOccurred:function(a){this.inherited(arguments);try{var c=this.parentXNode.target;if("rpIndName"===c||"rpPosName"===c){var d=g.findInputWidget(this.parentXNode.parentElement.gxePath+"/rpOrgName",this.parentXNode.domNode.parentNode);
d&&d.emitInteractionOccurred()}}catch(b){console.error(b)}}});e("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.form.InputContactName",a,f);return a});