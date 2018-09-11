// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/base/templates/Root.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3c!-- ArcGIS root metadata element --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/MetadataElement"\r\n    data-dojo-props\x3d"target:\'metadata\',noIndent:true,showHeader:false,label:\'${i18nArcGIS.documentTypes.arcgis.editorCaption}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs" data-dojo-props\x3d"noIndent:true"\x3e\r\n\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/resource/Resource"\r\n        data-dojo-props\x3d"label:\'${i18nArcGIS.sections.resource}\'"\x3e\r\n      \x3c/div\x3e  \r\n    \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/quality/Quality"\r\n        data-dojo-props\x3d"isQualitySection:true,label:\'${i18nArcGIS.sections.quality}\'"\x3e\r\n      \x3c/div\x3e\r\n  \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/distribution/Distribution"\r\n        data-dojo-props\x3d"label:\'${i18nArcGIS.sections.distribution}\'"\x3e\r\n      \x3c/div\x3e    \r\n\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/reference/SpatialRepresentation"\r\n        data-dojo-props\x3d"label:\'${i18nArcGIS.sections.representation}\'"\x3e\r\n      \x3c/div\x3e\r\n                  \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/content/Content"\r\n        data-dojo-props\x3d"label:\'${i18nArcGIS.sections.content}\'"\x3e\r\n      \x3c/div\x3e\r\n        \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/eainfo/EAInfo"\r\n        data-dojo-props\x3d"label:\'${i18nArcGIS.sections.eainfo}\'"\x3e\r\n      \x3c/div\x3e\r\n            \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/reference/Reference"\r\n        data-dojo-props\x3d"label:\'${i18nArcGIS.sections.reference}\'"\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/metadata/Metadata"\r\n        data-dojo-props\x3d"label:\'${i18nArcGIS.sections.metadata}\'"\x3e\r\n      \x3c/div\x3e  \r\n                  \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/base/Root","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/Root.html ../form/MetadataElement ../metadata/Metadata ../resource/Resource ../reference/Reference ../reference/SpatialRepresentation ../content/Content ../distribution/Distribution ../eainfo/EAInfo ../quality/Quality".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.base.Root",
a,d);return a});