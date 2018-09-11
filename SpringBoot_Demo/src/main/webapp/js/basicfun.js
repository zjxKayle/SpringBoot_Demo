//根据x,y的坐标显示在地图上
function ShowLocation(x, y,facilitylocation,facilitynum) {
    var symbolurl = "img/111.jpg";
    point = new esri.geometry.Point(x, y, new esri.SpatialReference({wkid:4326}));
    var pictureMarkerSymbol = new esri.symbol.PictureMarkerSymbol(symbolurl,60,60);    //设置图片及大小
    var graphic = new esri.Graphic(point,pictureMarkerSymbol,{ "facilitylocation": facilitylocation, "facilitynum": facilitynum, "id": facilitynum });
    graphicsLayer.add(graphic);
}

//将点位的设备编号添加到交保路线中
function addJb(gaFacilitynum,gaFacilitylocation) {
    gaFacilitynumArr.push(gaFacilitynum);
    var html = " <tr><td style='font-size: smaller'>" +gaFacilitylocation+ "</td></tr>";
    $("#tablecla").append(html);

}
function tijiao() {
    alert(gaFacilitynumArr.toString());
}

//获取鼠标的经纬坐标
function showCoordinates(evt) {
    var mp = evt.mapPoint;    //获取到evt的地图坐标
    dojo.byId("info").innerHTML ="x坐标"+ mp.x + ", " +"y坐标" + mp.y;
}

//显示监控视频
function showMonitoring (evt) {
    gaFacilitylocation =evt.graphic.attributes.facilitylocation;   //设备名称
    gaFacilitynum =evt.graphic.attributes.facilitynum;   //设备编号
    var content = "设备位置："+gaFacilitylocation+"<br>" +
                  "设备编号:"+gaFacilitynum+"<br>" +
                  "<button onclick='addJb(gaFacilitynum,gaFacilitylocation)'>添加到交保路线</button>";
    var facilitynum = evt.graphic.attributes.id;
    map.infoWindow.setTitle("监控信息");
    map.infoWindow.setContent(content);
    map.infoWindow.resize(350, 450);
    map.infoWindow.show(evt.screenPoint,map.getInfoWindowAnchor(evt.screenPoint));
}

//启用工具栏，禁用地图导航
function initToolbar(map) {
    var tb = new esri.toolbars.Draw(map);
    //在范围框内找点
    dojo.connect(tb, "onDrawEnd", findPointsInExtent);
    //set drawing mode to extent
    tb.activate(esri.toolbars.Draw.EXTENT);
}

//find all points within argument extent
function findPointsInExtent(extent) {
    deactivate();
    var graphics = map.graphics;
    var results = [];
    var graphic;
    for (var i=0, il=graphics.length; i<il; i++) {
        graphic = graphics[i];
        //if point is contained within extent, highlight it and add for display in results list
        if (extent.contains(graphic.geometry)) {
            graphic.setSymbol(highlightSymbol);
            results.push(graphic.getContent());
        }
        //else if point was previously highlighted, reset its symbology
        else if (graphic.symbol == highlightSymbol) {
            graphic.setSymbol(defaultSymbol);
        }
    }
    //display number of points in extent
    dojo.byId("inextent").innerHTML = results.length;
    //display list of points in extent
    dojo.byId("results").innerHTML = "<table><tbody>" + results.join("") + "</tbody></table>";
}

