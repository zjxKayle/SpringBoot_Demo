//>>built
require({cache:{"url:dojox/grid/enhanced/templates/FilterDefPane.html":'\x3cdiv class\x3d"dojoxGridFDPane"\x3e\r\n\t\x3cdiv class\x3d"dojoxGridFDPaneRelation"\x3e${_relMsgFront}\r\n\t\x3cspan class\x3d"dojoxGridFDPaneModes" dojoAttachPoint\x3d"criteriaModeNode"\x3e\r\n\t\t\x3cselect dojoAttachPoint\x3d"_relSelect" dojoType\x3d"dijit.form.Select" dojoAttachEvent\x3d"onChange: _onRelSelectChange"\x3e\r\n\t\t\t\x3coption value\x3d"0"\x3e${_relAll}\x3c/option\x3e\r\n\t\t\t\x3coption value\x3d"1"\x3e${_relAny}\x3c/option\x3e\r\n\t\t\x3c/select\x3e\r\n\t\x3c/span\x3e\r\n\t${_relMsgTail}\r\n\t\x3c/div\x3e\r\n\t\x3cdiv dojoAttachPoint\x3d"criteriaPane" class\x3d"dojoxGridFDPaneRulePane"\x3e\x3c/div\x3e\r\n\t\x3cdiv dojoAttachPoint\x3d"_addCBoxBtn" dojoType\x3d"dijit.form.Button" \r\n\t\tclass\x3d"dojoxGridFDPaneAddCBoxBtn" iconClass\x3d"dojoxGridFDPaneAddCBoxBtnIcon"\r\n\t\tdojoAttachEvent\x3d"onClick:_onAddCBox" label\x3d"${_addRuleBtnLabel}" showLabel\x3d"false"\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"dojoxGridFDPaneBtns" dojoAttachPoint\x3d"buttonsPane"\x3e\r\n\t\t\x3cspan dojoAttachPoint\x3d"_cancelBtn" dojoType\x3d"dijit.form.Button" \r\n\t\t\tdojoAttachEvent\x3d"onClick:_onCancel" label\x3d"${_cancelBtnLabel}"\x3e\r\n\t\t\x3c/span\x3e\r\n\t\t\x3cspan dojoAttachPoint\x3d"_clearFilterBtn" dojoType\x3d"dijit.form.Button" \r\n\t\t\tdojoAttachEvent\x3d"onClick:_onClearFilter" label\x3d"${_clearBtnLabel}" disabled\x3d"true"\x3e\r\n\t\t\x3c/span\x3e\r\n\t\t\x3cspan dojoAttachPoint\x3d"_filterBtn" dojoType\x3d"dijit.form.Button" \r\n\t\t\tdojoAttachEvent\x3d"onClick:_onFilter" label\x3d"${_filterBtnLabel}" disabled\x3d"true"\x3e\r\n\t\t\x3c/span\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:dojox/grid/enhanced/templates/FilterBoolValueBox.html":'\x3cdiv class\x3d"dojoxGridBoolValueBox"\x3e\r\n\t\x3cdiv class\x3d"dojoxGridTrueBox"\x3e\r\n\t\t\x3cinput dojoType\x3d"dijit.form.RadioButton" type\x3d\'radio\' name\x3d\'a1\' id\x3d\'${_baseId}_rbTrue\' checked\x3d"true" \r\n\t\t\tdojoAttachPoint\x3d"rbTrue" dojoAttachEvent\x3d"onChange: onChange"/\x3e\r\n\t\t\x3cdiv class\x3d"dojoxGridTrueLabel" for\x3d\'${_baseId}_rbTrue\'\x3e${_lblTrue}\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"dojoxGridFalseBox"\x3e\r\n\t\t\x3cinput dojoType\x3d"dijit.form.RadioButton" dojoAttachPoint\x3d"rbFalse" type\x3d\'radio\' name\x3d\'a1\' id\x3d\'${_baseId}_rbFalse\'/\x3e\r\n\t\t\x3cdiv class\x3d"dojoxGridTrueLabel" for\x3d\'${_baseId}_rbFalse\'\x3e${_lblFalse}\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:dojox/grid/enhanced/templates/CriteriaBox.html":'\x3cdiv class\x3d"dojoxGridFCBox"\x3e\r\n\t\x3cdiv class\x3d"dojoxGridFCBoxSelCol" dojoAttachPoint\x3d"selColNode"\x3e\r\n\t\t\x3cspan class\x3d"dojoxGridFCBoxField"\x3e${_colSelectLabel}\x3c/span\x3e\r\n\t\t\x3cselect dojoAttachPoint\x3d"_colSelect" dojoType\x3d"dijit.form.Select" \r\n\t\t\tclass\x3d"dojoxGridFCBoxColSelect"\r\n\t\t\tdojoAttachEvent\x3d"onChange:_onChangeColumn"\x3e\r\n\t\t\x3c/select\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"dojoxGridFCBoxCondition" dojoAttachPoint\x3d"condNode"\x3e\r\n\t\t\x3cspan class\x3d"dojoxGridFCBoxField"\x3e${_condSelectLabel}\x3c/span\x3e\r\n\t\t\x3cselect dojoAttachPoint\x3d"_condSelect" dojoType\x3d"dijit.form.Select" \r\n\t\t\tclass\x3d"dojoxGridFCBoxCondSelect"\r\n\t\t\tdojoAttachEvent\x3d"onChange:_onChangeCondition"\x3e\r\n\t\t\x3c/select\x3e\r\n\t\t\x3cdiv class\x3d"dojoxGridFCBoxCondSelectAlt" dojoAttachPoint\x3d"_condSelectAlt" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"dojoxGridFCBoxValue" dojoAttachPoint\x3d"valueNode"\x3e\r\n\t\t\x3cspan class\x3d"dojoxGridFCBoxField"\x3e${_valueBoxLabel}\x3c/span\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojox/grid/enhanced/plugins/filter/FilterDefDialog","dojo/_base/declare dojo/_base/array dojo/_base/connect dojo/_base/lang dojo/_base/event dojo/_base/html dojo/_base/sniff dojo/keys dojo/on dojo/string dojo/window dojo/date/locale ./FilterBuilder ../Dialog dijit/form/ComboBox dijit/form/TextBox dijit/form/NumberTextBox dijit/form/DateTextBox dijit/form/TimeTextBox dijit/form/Button dijit/layout/AccordionContainer dijit/layout/ContentPane dijit/_Widget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/focus dojox/html/metrics dijit/a11y dojo/text!../../templates/FilterDefPane.html dojo/text!../../templates/CriteriaBox.html dojo/text!../../templates/FilterBoolValueBox.html dijit/Tooltip dijit/form/Select dijit/form/RadioButton dojox/html/ellipsis ../../../cells/dijit".split(" "),
function(m,k,p,g,v,f,n,l,x,q,y,z,A,B,C,D,E,F,G,H,I,J,r,s,t,u,K,L,M,N,O){var P=m("dojox.grid.enhanced.plugins.filter.AccordionContainer",I,{nls:null,addChild:function(a,c){var b=arguments[0]=a._pane=new J({content:a});this.inherited(arguments);this._modifyChild(b)},removeChild:function(a){var c=a,b=!1;a._pane&&(b=!0,c=arguments[0]=a._pane);this.inherited(arguments);b&&(this._hackHeight(!1,this._titleHeight),b=this.getChildren(),1===b.length&&f.style(b[0]._removeCBoxBtn.domNode,"display","none"));c.destroyRecursive()},
selectChild:function(a){a._pane&&(arguments[0]=a._pane);this.inherited(arguments)},resize:function(){this.inherited(arguments);k.forEach(this.getChildren(),this._setupTitleDom)},startup:function(){this._started||(this.inherited(arguments),7==parseInt(n("ie"),10)&&k.some(this._connects,function(a){if("onresize"==(a[0]||{})[1])return this.disconnect(a),!0},this),k.forEach(this.getChildren(),function(a){this._modifyChild(a,!0)},this))},_onKeyPress:function(a,c){if(!this.disabled&&!(a.altKey||!c&&!a.ctrlKey)){var b=
a.charOrCode,d=f._isBodyLtr(),e=null;if(c&&b==l.UP_ARROW||a.ctrlKey&&b==l.PAGE_UP)e=!1;else if(c&&b==l.DOWN_ARROW||a.ctrlKey&&(b==l.PAGE_DOWN||b==l.TAB))e=!0;else if(b==(d?l.LEFT_ARROW:l.RIGHT_ARROW))e=this._focusOnRemoveBtn?null:!1,this._focusOnRemoveBtn=!this._focusOnRemoveBtn;else if(b==(d?l.RIGHT_ARROW:l.LEFT_ARROW))e=this._focusOnRemoveBtn?!0:null,this._focusOnRemoveBtn=!this._focusOnRemoveBtn;else return;null!==e&&this._adjacent(e)._buttonWidget._onTitleClick();v.stop(a);y.scrollIntoView(this.selectedChildWidget._buttonWidget.domNode.parentNode);
n("ie")&&this.selectedChildWidget._removeCBoxBtn.focusNode.setAttribute("tabIndex",this._focusOnRemoveBtn?70:-1);u.focus(this.selectedChildWidget[this._focusOnRemoveBtn?"_removeCBoxBtn":"_buttonWidget"].focusNode)}},_modifyChild:function(a,c){if(a&&this._started){f.style(a.domNode,"overflow","hidden");a._buttonWidget.connect(a._buttonWidget,"_setSelectedAttr",function(){this.focusNode.setAttribute("tabIndex",this.selected?70:"-1")});var b=this;a._buttonWidget.connect(a._buttonWidget.domNode,"onclick",
function(){b._focusOnRemoveBtn=!1});(a._removeCBoxBtn=new H({label:this.nls.removeRuleButton,showLabel:!1,iconClass:"dojoxGridFCBoxRemoveCBoxBtnIcon",tabIndex:-1,onClick:g.hitch(a.content,"onRemove"),onKeyPress:function(c){b._onKeyPress(c,a._buttonWidget.contentWidget)}})).placeAt(a._buttonWidget.domNode);var d,e=this.getChildren();if(1===e.length)a._buttonWidget.set("selected",!0),f.style(a._removeCBoxBtn.domNode,"display","none");else for(d=0;d<e.length;++d)e[d]._removeCBoxBtn&&f.style(e[d]._removeCBoxBtn.domNode,
"display","");this._setupTitleDom(a);if(!this._titleHeight)for(d=0;d<e.length;++d)if(e[d]!=this.selectedChildWidget){this._titleHeight=f.marginBox(e[d]._buttonWidget.domNode.parentNode).h;break}c||this._hackHeight(!0,this._titleHeight)}},_hackHeight:function(a,c){var b=this.getChildren(),d=this.domNode,e=f.style(d,"height");if(a)if(1<b.length)d.style.height=e+c+"px";else return;else d.style.height=e-c+"px";this.resize()},_setupTitleDom:function(a){var c=f.contentBox(a._buttonWidget.titleNode).w;8>
n("ie")&&(c-=8);f.style(a._buttonWidget.titleTextNode,"width",c+"px")}}),Q=m("dojox.grid.enhanced.plugins.filter.FilterDefPane",[r,s,t],{templateString:M,widgetsInTemplate:!0,dlg:null,postMixInProperties:function(){this.plugin=this.dlg.plugin;var a=this.plugin.nls;this._addRuleBtnLabel=a.addRuleButton;this._cancelBtnLabel=a.cancelButton;this._clearBtnLabel=a.clearButton;this._filterBtnLabel=a.filterButton;this._relAll=a.relationAll;this._relAny=a.relationAny;this._relMsgFront=a.relationMsgFront;this._relMsgTail=
a.relationMsgTail},postCreate:function(){this.inherited(arguments);x(this.domNode,"keydown",g.hitch(this,"_onKey"));(this.cboxContainer=new P({nls:this.plugin.nls})).placeAt(this.criteriaPane);this._relSelect.set("tabIndex",60);this._addCBoxBtn.set("tabIndex",20);this._cancelBtn.set("tabIndex",50);this._clearFilterBtn.set("tabIndex",40);this._filterBtn.set("tabIndex",30);var a=this.plugin.nls;this._relSelect.domNode.setAttribute("aria-label",a.waiRelAll);this._addCBoxBtn.domNode.setAttribute("aria-label",
a.waiAddRuleButton);this._cancelBtn.domNode.setAttribute("aria-label",a.waiCancelButton);this._clearFilterBtn.domNode.setAttribute("aria-label",a.waiClearButton);this._filterBtn.domNode.setAttribute("aria-label",a.waiFilterButton);this._relSelect.set("value","logicall"===this.dlg._relOpCls?"0":"1")},uninitialize:function(){this.cboxContainer.destroyRecursive();this.dlg=this.plugin=null},_onRelSelectChange:function(a){this.dlg._relOpCls="0"==a?"logicall":"logicany";this._relSelect.domNode.setAttribute("aria-label",
this.plugin.nls["0"==a?"waiRelAll":"waiRelAny"])},_onAddCBox:function(){this.dlg.addCriteriaBoxes(1)},_onCancel:function(){this.dlg.onCancel()},_onClearFilter:function(){this.dlg.onClearFilter()},_onFilter:function(){this.dlg.onFilter()},_onKey:function(a){if(a.keyCode==l.ENTER)this.dlg.onFilter()}}),w=m("dojox.grid.enhanced.plugins.filter.CriteriaBox",[r,s,t],{templateString:N,widgetsInTemplate:!0,dlg:null,postMixInProperties:function(){this.plugin=this.dlg.plugin;this._curValueBox=null;var a=this.plugin.nls;
this._colSelectLabel=a.columnSelectLabel;this._condSelectLabel=a.conditionSelectLabel;this._valueBoxLabel=a.valueBoxLabel;this._anyColumnOption=a.anyColumnOption},postCreate:function(){var a=this.dlg,c=this.plugin.grid;this._colSelect.set("tabIndex",90);this._colOptions=this._getColumnOptions();this._colSelect.addOption([{label:this.plugin.nls.anyColumnOption,value:"anycolumn",selected:0>a.curColIdx},{value:""}].concat(this._colOptions));this._condSelect.set("tabIndex",95);this._condSelect.addOption(this._getUsableConditions(a.getColumnType(a.curColIdx)));
this._showSelectOrLabel(this._condSelect,this._condSelectAlt);this.connect(c.layout,"moveColumn","onMoveColumn");var b=this;setTimeout(function(){var c=a.getColumnType(a.curColIdx);b._setValueBoxByType(c)},0)},_getColumnOptions:function(){var a=0<=this.dlg.curColIdx?String(this.dlg.curColIdx):"anycolumn";return k.map(k.filter(this.plugin.grid.layout.cells,function(a){return!(!1===a.filterable||a.hidden)}),function(c){return{label:c.name||c.field,value:String(c.index),selected:a==String(c.index)}})},
onMoveColumn:function(){var a=this._onChangeColumn;this._onChangeColumn=function(){};var c=this._colSelect.get("selectedOptions");this._colSelect.removeOption(this._colOptions);this._colOptions=this._getColumnOptions();this._colSelect.addOption(this._colOptions);for(var b=0;b<this._colOptions.length&&this._colOptions[b].label!=c.label;++b);b<this._colOptions.length&&this._colSelect.set("value",this._colOptions[b].value);var d=this;setTimeout(function(){d._onChangeColumn=a},0)},onRemove:function(){this.dlg.removeCriteriaBoxes(this)},
uninitialize:function(){this._curValueBox&&(this._curValueBox.destroyRecursive(),this._curValueBox=null);this.dlg=this.plugin=null},_showSelectOrLabel:function(a,c){var b=a.getOptions();1==b.length?(c.innerHTML=b[0].label,f.style(a.domNode,"display","none"),f.style(c,"display","")):(f.style(a.domNode,"display",""),f.style(c,"display","none"))},_onChangeColumn:function(a){this._checkValidCriteria();a=this.dlg.getColumnType(a);this._setConditionsByType(a);this._setValueBoxByType(a);this._updateValueBox()},
_onChangeCondition:function(a){this._checkValidCriteria();a="range"==a;a^this._isRange&&(this._isRange=a,this._setValueBoxByType(this.dlg.getColumnType(this._colSelect.get("value"))));this._updateValueBox()},_updateValueBox:function(a){this._curValueBox.set("disabled","isempty"==this._condSelect.get("value"))},_checkValidCriteria:function(){setTimeout(g.hitch(this,function(){this.updateRuleTitle();this.dlg._updatePane()}),0)},_createValueBox:function(a,c){var b=g.hitch(c.cbox,"_checkValidCriteria");
return new a(g.mixin(c,{tabIndex:10,onKeyPress:b,onChange:b,"class":"dojoxGridFCBoxValueBox"}))},_createRangeBox:function(a,c){var b=g.hitch(c.cbox,"_checkValidCriteria");g.mixin(c,{tabIndex:10,onKeyPress:b,onChange:b});var b=f.create("div",{"class":"dojoxGridFCBoxValueBox"}),d=new a(c),e=f.create("span",{"class":"dojoxGridFCBoxRangeValueTxt",innerHTML:this.plugin.nls.rangeTo}),h=new a(c);f.addClass(d.domNode,"dojoxGridFCBoxStartValue");f.addClass(h.domNode,"dojoxGridFCBoxEndValue");b.appendChild(d.domNode);
b.appendChild(e);b.appendChild(h.domNode);b.domNode=b;b.set=function(a,b){g.isObject(b)&&(d.set("value",b.start),h.set("value",b.end))};b.get=function(){var a=d.get("value"),b=h.get("value");return a&&b?{start:a,end:b}:""};return b},changeCurrentColumn:function(a){a=this.dlg.curColIdx;this._colSelect.removeOption(this._colOptions);this._colOptions=this._getColumnOptions();this._colSelect.addOption(this._colOptions);this._colSelect.set("value",0<=a?String(a):"anycolumn");this.updateRuleTitle(!0)},
curColumn:function(){return this._colSelect.getOptions(this._colSelect.get("value")).label},curCondition:function(){return this._condSelect.getOptions(this._condSelect.get("value")).label},curValue:function(){return"isempty"==this._condSelect.get("value")?"":this._curValueBox?this._curValueBox.get("value"):""},save:function(){if(this.isEmpty())return null;var a=this._colSelect.get("value"),c=this.dlg.getColumnType(a),b=this.curValue(),d=this._condSelect.get("value");return{column:a,condition:d,value:b,
formattedVal:this.formatValue(c,d,b),type:c,colTxt:this.curColumn(),condTxt:this.curCondition()}},load:function(a){var c=[this._onChangeColumn,this._onChangeCondition];this._onChangeColumn=this._onChangeCondition=function(){};a.column&&this._colSelect.set("value",a.column);a.type?(this._setConditionsByType(a.type),this._setValueBoxByType(a.type)):a.type=this.dlg.getColumnType(this._colSelect.get("value"));a.condition&&this._condSelect.set("value",a.condition);var b=a.value||"";(b||"date"!=a.type&&
"time"!=a.type)&&this._curValueBox.set("value",b);this._updateValueBox();setTimeout(g.hitch(this,function(){this._onChangeColumn=c[0];this._onChangeCondition=c[1]}),0)},getExpr:function(){if(this.isEmpty())return null;var a=this._colSelect.get("value");return this.dlg.getExprForCriteria({type:this.dlg.getColumnType(a),column:a,condition:this._condSelect.get("value"),value:this.curValue()})},isEmpty:function(){if("isempty"==this._condSelect.get("value"))return!1;var a=this.curValue();return""===a||
null===a||"undefined"==typeof a||"number"==typeof a&&isNaN(a)},updateRuleTitle:function(a){var c=this._pane._buttonWidget.titleTextNode,b=["\x3cdiv class\x3d'dojoxEllipsis'\x3e"];if(a||this.isEmpty())c.title=q.substitute(this.plugin.nls.ruleTitleTemplate,[this._ruleIndex||1]),b.push(c.title);else{var d=this.dlg.getColumnType(this._colSelect.get("value"));a=this.curColumn();var e=this.curCondition(),d=this.formatValue(d,this._condSelect.get("value"),this.curValue());b.push(a,"\x26nbsp;\x3cspan class\x3d'dojoxGridRuleTitleCondition'\x3e",
e,"\x3c/span\x3e\x26nbsp;",d);c.title=[a," ",e," ",d].join("")}c.innerHTML=b.join("");n("mozilla")&&(f.create("div",{style:"width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 9999;"},c).title=c.title)},updateRuleIndex:function(a){this._ruleIndex!=a&&(this._ruleIndex=a,this.isEmpty()&&this.updateRuleTitle())},setAriaInfo:function(a){var c=q.substitute,b=this.plugin.nls;this._colSelect.domNode.setAttribute("aria-label",c(b.waiColumnSelectTemplate,[a]));this._condSelect.domNode.setAttribute("aria-label",
c(b.waiConditionSelectTemplate,[a]));this._pane._removeCBoxBtn.domNode.setAttribute("aria-label",c(b.waiRemoveRuleButtonTemplate,[a]));this._index=a},_getUsableConditions:function(a){var c=g.clone(this.dlg._dataTypeMap[a].conditions);a=(this.plugin.args.disabledConditions||{})[a];var b=parseInt(this._colSelect.get("value"),10),b=isNaN(b)?(this.plugin.args.disabledConditions||{}).anycolumn:this.plugin.grid.layout.cells[b].disabledConditions;g.isArray(a)||(a=[]);g.isArray(b)||(b=[]);a=a.concat(b);if(a.length){var d=
{};k.forEach(a,function(a){g.isString(a)&&(d[a.toLowerCase()]=!0)});return k.filter(c,function(a){return!(a.value in d)})}return c},_setConditionsByType:function(a){var c=this._condSelect;c.removeOption(c.options);c.addOption(this._getUsableConditions(a));this._showSelectOrLabel(this._condSelect,this._condSelectAlt)},_setValueBoxByType:function(a){if(this._curValueBox){this.valueNode.removeChild(this._curValueBox.domNode);try{this._curValueBox.destroyRecursive()}catch(c){}delete this._curValueBox}var b=
this.dlg._dataTypeMap[a].valueBoxCls[this._getValueBoxClsInfo(this._colSelect.get("value"),a)];a=this._getValueBoxArgByType(a);this._curValueBox=this[this._isRange?"_createRangeBox":"_createValueBox"](b,a);this.valueNode.appendChild(this._curValueBox.domNode);this._curValueBox.focusNode.setAttribute("aria-label",q.substitute(this.plugin.nls.waiValueBoxTemplate,[this._index]));this.dlg.onRendered(this)},_getValueBoxArgByType:function(a){var c=this.plugin.grid,b=c.layout.cells[parseInt(this._colSelect.get("value"),
10)],d={cbox:this};if("string"==a){if(b&&(b.suggestion||b.autoComplete))g.mixin(d,{store:c.store,searchAttr:b.field||b.name,query:c.query||{},fetchProperties:{sort:[{attribute:b.field||b.name}],queryOptions:g.mixin({ignoreCase:!0,deep:!0},c.queryOptions||{})}})}else"boolean"==a&&g.mixin(d,this.dlg.builder.defaultArgs["boolean"]);b&&b.dataTypeArgs&&g.mixin(d,b.dataTypeArgs);return d},formatValue:function(a,c,b){if("isempty"==c)return"";if("date"==a||"time"==a){a={selector:a};var d=z.format;return"range"==
c?q.substitute(this.plugin.nls.rangeTemplate,[d(b.start,a),d(b.end,a)]):d(b,a)}return"boolean"==a?b?this._curValueBox._lblTrue:this._curValueBox._lblFalse:b},_getValueBoxClsInfo:function(a,c){var b=this.plugin.grid.layout.cells[parseInt(a,10)];return"string"==c?b&&(b.suggestion||b.autoComplete)?"ac":"dft":"dft"}}),R=m("dojox.grid.enhanced.plugins.filter.UniqueComboBox",C,{_openResultList:function(a){var c={},b=this.store,d=this.searchAttr;arguments[0]=k.filter(a,function(a){a=b.getValue(a,d);var h=
c[a];c[a]=!0;return!h});this.inherited(arguments)},_onKey:function(a){a.charOrCode===l.ENTER&&this._opened&&v.stop(a);this.inherited(arguments)}}),S=m("dojox.grid.enhanced.plugins.filter.BooleanValueBox",[r,s,t],{templateString:O,widgetsInTemplate:!0,constructor:function(a){var c=a.cbox.plugin.nls;this._baseId=a.cbox.id;this._lblTrue=a.trueLabel||c.trueLabel||"true";this._lblFalse=a.falseLabel||c.falseLabel||"false";this.args=a},postCreate:function(){this.onChange()},onChange:function(){},get:function(a){return this.rbTrue.get("checked")},
set:function(a,c){this.inherited(arguments);"value"==a&&(this.rbTrue.set("checked",!!c),this.rbFalse.set("checked",!c))}});return m("dojox.grid.enhanced.plugins.filter.FilterDefDialog",null,{curColIdx:-1,_relOpCls:"logicall",_savedCriterias:null,plugin:null,constructor:function(a){a=this.plugin=a.plugin;this.builder=new A;this._setupData();this._cboxes=[];this.defaultType=a.args.defaultType||"string";(this.filterDefPane=new Q({dlg:this})).startup();(this._defPane=new B({refNode:this.plugin.grid.domNode,
title:a.nls.filterDefDialogTitle,"class":"dojoxGridFDTitlePane",iconClass:"dojoxGridFDPaneIcon",content:this.filterDefPane})).startup();this._defPane.connect(a.grid.layer("filter"),"filterDef",g.hitch(this,"_onSetFilter"));a.grid.setFilter=g.hitch(this,"setFilter");a.grid.getFilter=g.hitch(this,"getFilter");a.grid.getFilterRelation=g.hitch(this,function(){return this._relOpCls});a.connect(a.grid.layout,"moveColumn",g.hitch(this,"onMoveColumn"))},onMoveColumn:function(a,c,b,d,e){if(this._savedCriterias&&
b!=d){e&&--d;var h=b<d?b:d,g=b<d?d:b,f=d>h?1:-1;k.forEach(this._savedCriterias,function(a){var c=parseInt(a.column,10);!isNaN(c)&&(c>=h&&c<=g)&&(a.column=String(c==b?c+(g-h)*f:c-f))})}},destroy:function(){this._defPane.destroyRecursive();this._cboxes=this._dataTypeMap=this.builder=this.filterDefPane=this._defPane=null;var a=this.plugin.grid;a.setFilter=null;a.getFilter=null;this.plugin=a.getFilterRelation=null},_setupData:function(){var a=this.plugin.nls;this._dataTypeMap={number:{valueBoxCls:{dft:E},
conditions:[{label:a.conditionEqual,value:"equalto",selected:!0},{label:a.conditionNotEqual,value:"notequalto"},{label:a.conditionLess,value:"lessthan"},{label:a.conditionLessEqual,value:"lessthanorequalto"},{label:a.conditionLarger,value:"largerthan"},{label:a.conditionLargerEqual,value:"largerthanorequalto"},{label:a.conditionIsEmpty,value:"isempty"}]},string:{valueBoxCls:{dft:D,ac:R},conditions:[{label:a.conditionContains,value:"contains",selected:!0},{label:a.conditionIs,value:"equalto"},{label:a.conditionStartsWith,
value:"startswith"},{label:a.conditionEndWith,value:"endswith"},{label:a.conditionNotContain,value:"notcontains"},{label:a.conditionIsNot,value:"notequalto"},{label:a.conditionNotStartWith,value:"notstartswith"},{label:a.conditionNotEndWith,value:"notendswith"},{label:a.conditionIsEmpty,value:"isempty"}]},date:{valueBoxCls:{dft:F},conditions:[{label:a.conditionIs,value:"equalto",selected:!0},{label:a.conditionBefore,value:"lessthan"},{label:a.conditionAfter,value:"largerthan"},{label:a.conditionRange,
value:"range"},{label:a.conditionIsEmpty,value:"isempty"}]},time:{valueBoxCls:{dft:G},conditions:[{label:a.conditionIs,value:"equalto",selected:!0},{label:a.conditionBefore,value:"lessthan"},{label:a.conditionAfter,value:"largerthan"},{label:a.conditionRange,value:"range"},{label:a.conditionIsEmpty,value:"isempty"}]},"boolean":{valueBoxCls:{dft:S},conditions:[{label:a.conditionIs,value:"equalto",selected:!0},{label:a.conditionIsEmpty,value:"isempty"}]}}},setFilter:function(a,c){a=a||[];g.isArray(a)||
(a=[a]);var b=function(){if(a.length){this._savedCriterias=k.map(a,function(a){var b=a.type||this.defaultType;return{type:b,column:String(a.column),condition:a.condition,value:a.value,colTxt:this.getColumnLabelByValue(String(a.column)),condTxt:this.getConditionLabelByValue(b,a.condition),formattedVal:a.formattedVal||a.value}},this);this._criteriasChanged=!0;if("logicall"===c||"logicany"===c)this._relOpCls=c;var b=k.map(a,this.getExprForCriteria,this),b=this.builder.buildExpression(1==b.length?b[0]:
{op:this._relOpCls,data:b});this.plugin.grid.layer("filter").filterDef(b);this.plugin.filterBar.toggleClearFilterBtn(!1)}this._closeDlgAndUpdateGrid()};if(this._savedCriterias){this._clearWithoutRefresh=!0;var d=p.connect(this,"clearFilter",this,function(){p.disconnect(d);this._clearWithoutRefresh=!1;b.apply(this)});this.onClearFilter()}else b.apply(this)},getFilter:function(){return g.clone(this._savedCriterias)||[]},getColumnLabelByValue:function(a){var c=this.plugin.nls;return"anycolumn"==a.toLowerCase()?
c.anyColumnOption:(a=this.plugin.grid.layout.cells[parseInt(a,10)])?a.name||a.field:""},getConditionLabelByValue:function(a,c){for(var b=this._dataTypeMap[a].conditions,d=b.length-1;0<=d;--d){var e=b[d];if(e.value==c.toLowerCase())return e.label}return""},addCriteriaBoxes:function(a){if(!("number"!=typeof a||0>=a)){var c=this._cboxes,b=this.filterDefPane.cboxContainer,d=this.plugin.args.ruleCount,e=c.length;for(0<d&&e+a>d&&(a=d-e);0<a;--a)d=new w({dlg:this}),c.push(d),b.addChild(d);b.startup();this._updatePane();
this._updateCBoxTitles();b.selectChild(c[c.length-1]);this.filterDefPane.criteriaPane.scrollTop=1E6;4===c.length&&(6>=n("ie")&&!this.__alreadyResizedForIE6?(a=f.position(b.domNode),a.w-=K.getScrollbar().w,b.resize(a),this.__alreadyResizedForIE6=!0):b.resize())}},removeCriteriaBoxes:function(a,c){var b=this._cboxes,d=this.filterDefPane.cboxContainer,e=b.length,h=e-a,f=e-1,l=k.indexOf(b,d.selectedChildWidget.content);if(g.isArray(a)){f=a;f.sort();a=f.length;for(h=e-1;0<=h&&0<=k.indexOf(f,h);--h);if(0<=
h){h!=l&&d.selectChild(b[h]);for(h=a-1;0<=h;--h)0<=f[h]&&f[h]<e&&(d.removeChild(b[f[h]]),b.splice(f[h],1))}}else{if(!0===c)if(0<=a&&a<e)h=f=a,a=1;else return;else if(a instanceof w)e=a,a=1,h=f=k.indexOf(b,e);else{if("number"!=typeof a||0>=a)return;a>=e&&(a=f,h=1)}if(f<h)return;for(l>=h&&l<=f&&d.selectChild(b[h?h-1:f+1]);f>=h;--f)d.removeChild(b[f]);b.splice(h,a)}this._updatePane();this._updateCBoxTitles();3===b.length&&d.resize()},getCriteria:function(a){return"number"!=typeof a?this._savedCriterias?
this._savedCriterias.length:0:this._savedCriterias&&this._savedCriterias[a]?g.mixin({relation:"logicall"==this._relOpCls?this.plugin.nls.and:this.plugin.nls.or},this._savedCriterias[a]):null},getExprForCriteria:function(a){if("anycolumn"==a.column){var c=k.filter(this.plugin.grid.layout.cells,function(a){return!(!1===a.filterable||a.hidden)});return{op:"logicany",data:k.map(c,function(b){return this.getExprForColumn(a.value,b.index,a.type,a.condition)},this)}}return this.getExprForColumn(a.value,
a.column,a.type,a.condition)},getExprForColumn:function(a,c,b,d){c=parseInt(c,10);var e=this.plugin.grid.layout.cells[c],f=e.field||e.name;c={datatype:b||this.getColumnType(c),args:e.dataTypeArgs,isColumn:!0};e=[g.mixin({data:this.plugin.args.isServerSide?f:e},c)];c.isColumn=!1;"range"==d?e.push(g.mixin({data:a.start},c),g.mixin({data:a.end},c)):"isempty"!=d&&e.push(g.mixin({data:a},c));return{op:d,data:e}},getColumnType:function(a){a=this.plugin.grid.layout.cells[parseInt(a,10)];if(!a||!a.datatype)return this.defaultType;
a=String(a.datatype).toLowerCase();return this._dataTypeMap[a]?a:this.defaultType},clearFilter:function(a){if(this._savedCriterias){this._savedCriterias=null;this.plugin.grid.layer("filter").filterDef(null);try{this.plugin.filterBar.toggleClearFilterBtn(!0),this.filterDefPane._clearFilterBtn.set("disabled",!0),this.removeCriteriaBoxes(this._cboxes.length-1),this._cboxes[0].load({})}catch(c){}a?this.closeDialog():this._closeDlgAndUpdateGrid()}},showDialog:function(a){this._defPane.show();this.plugin.filterStatusTip.closeDialog();
this._prepareDialog(a)},closeDialog:function(){this._defPane.open&&this._defPane.hide()},onFilter:function(a){this.canFilter()&&(this._defineFilter(),this._closeDlgAndUpdateGrid(),this.plugin.filterBar.toggleClearFilterBtn(!1))},onClearFilter:function(a){this._savedCriterias&&(this._savedCriterias.length>=this.plugin.ruleCountToConfirmClearFilter?this.plugin.clearFilterDialog.show():this.clearFilter(this._clearWithoutRefresh))},onCancel:function(a){a=this._savedCriterias;var c=this._cboxes;a?(this.addCriteriaBoxes(a.length-
c.length),this.removeCriteriaBoxes(c.length-a.length),k.forEach(a,function(a,d){c[d].load(a)})):(this.removeCriteriaBoxes(c.length-1),c[0].load({}));this.closeDialog()},onRendered:function(a){n("ff")?(a=this._defPane,a._getFocusItems(a.domNode),u.focus(a._firstFocusItem)):(a=L._getTabNavigable(f.byId(a.domNode)),u.focus(a.lowest||a.first))},_onSetFilter:function(a){null===a&&this._savedCriterias&&this.clearFilter()},_prepareDialog:function(a){var c=this._savedCriterias,b=this._cboxes,d;this.curColIdx=
a;if(c){if(this._criteriasChanged){this.filterDefPane._relSelect.set("value","logicall"===this._relOpCls?"0":"1");this._criteriasChanged=!1;var e=c.length>b.length?c.length-b.length:0;this.addCriteriaBoxes(e);this.removeCriteriaBoxes(b.length-c.length);this.filterDefPane._clearFilterBtn.set("disabled",!1);for(a=0;a<b.length-e;++a)b[a].load(c[a]);if(0<e)var f=[],g=p.connect(this,"onRendered",function(a){var d=k.indexOf(b,a);f[d]||(f[d]=!0,0===--e&&p.disconnect(g),a.load(c[d]))})}}else if(0===b.length)this.addCriteriaBoxes(1);
else for(a=0;d=b[a];++a)d.changeCurrentColumn();this.filterDefPane.cboxContainer.resize()},_defineFilter:function(){var a=this._cboxes,c=function(b){return k.filter(k.map(a,function(a){return a[b]()}),function(a){return!!a})},b=c("getExpr");this._savedCriterias=c("save");b=1==b.length?b[0]:{op:this._relOpCls,data:b};b=this.builder.buildExpression(b);this.plugin.grid.layer("filter").filterDef(b);this.filterDefPane._clearFilterBtn.set("disabled",!1)},_updateCBoxTitles:function(){for(var a=this._cboxes,
c=a.length;0<c;--c)a[c-1].updateRuleIndex(c),a[c-1].setAriaInfo(c)},_updatePane:function(){var a=this.filterDefPane;a._addCBoxBtn.set("disabled",this._cboxes.length==this.plugin.args.ruleCount);a._filterBtn.set("disabled",!this.canFilter())},canFilter:function(){return 0<k.filter(this._cboxes,function(a){return!a.isEmpty()}).length},_closeDlgAndUpdateGrid:function(){this.closeDialog();var a=this.plugin.grid;a.showMessage(a.loadingMessage);setTimeout(g.hitch(a,a._refresh),this._defPane.duration+10)}})});