/**
 * date:2019/08/16
 * author:Mr.Chung
 * description:此处放layui自定义扩展
 * version:2.0.4
 */

/**
 * [获取URL中的参数名及参数值的集合]
 * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
 * @param {[string]} urlStr [当该参数不为空的时候，则解析该url中的参数集合]
 * @return {[string]}       [参数集合]
 */
function GetRequest() {
	var urlStr = window.location.href;
    if (typeof urlStr == "undefined") {
        var url = decodeURI(location.search); //获取url中"?"符后的字符串
    } else {
        var url = "?" + urlStr.split("?")[1];
    }
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

// 检测是否登陆    
if (localStorage.getItem("token") == null) {
	$uid = GetRequest();
	if ($uid['uid'] === '') {
		location.href = '/login.html';
	}
}

/**
 * @param {Object} layer
 * @param {Object} data
 * @param {Object} object_
 */
function verifyToken(layer, data, object_ = null)
{
	if (data.code == 404)  // token 问题
	{
		layer.msg(data.msg, {
			icon: 2,
			time: 2000
		},function(){
			 // 删除cookie
			 localStorage.removeItem('token');
			//延迟1秒
			setTimeout(function () {
				window.location.href = "/login.html";
			}, 1000);
		});
		return false;
	} 
	else if (data.code == 100)   // 无子设备只有当前设备
	{
		var childCC = object_;
		childCC.css('display', 'block');
		// console.log(data.data.childCC);
		childCC.append('<label class="layui-form-label">问题描述</label>');
		childCC.append('<input type="hidden" id="isOne" value="0" />');
		childCC.append(
			'<div class="layui-input-block clearAll">\n' +
			'<input type="text" name="content" id="content"  placeholder="请输入问题描述" autocomplete="off"\n' +
			' class="layui-input layui-input-inline _content"' +
			'" style="float: none; width: 100%">\n' +
			'</div>'
		);
	}
	else  
	{
		layer.msg(data.msg, {
			icon: 2,
			time: 2000
		});
		return false;
	}
}

/**
 * 显示弹窗并关闭子窗口
 * @param msg
 * @param reload
 */
function showMsgAndCloseFrame(msg, time, reload) {
	let index = layer.msg(msg, {
		icon: 1,
		time: time
	}, function () {
		// 关闭弹出层
		layer.close(index);
		let iframeIndex = parent.layer.getFrameIndex(window.name);
		parent.layer.close(iframeIndex);
		if (reload) {
			parent.location.reload();
		}
	});
}

window.rootPath = (function (src) {
    src = document.scripts[document.scripts.length - 1].src;
    return src.substring(0, src.lastIndexOf("/") + 1);
})();

layui.config({
    base: rootPath + "lay-module/",
    version: true
}).extend({
    miniAdmin: "layuimini/miniAdmin", // layuimini后台扩展
    miniMenu: "layuimini/miniMenu", // layuimini菜单扩展
    miniTab: "layuimini/miniTab", // layuimini tab扩展
    miniTheme: "layuimini/miniTheme", // layuimini 主题扩展
    miniTongji: "layuimini/miniTongji", // layuimini 统计扩展
    step: 'step-lay/step', // 分步表单扩展
    treetable: 'treetable-lay/treetable', //table树形扩展
    tableSelect: 'tableSelect/tableSelect', // table选择扩展
    iconPickerFa: 'iconPicker/iconPickerFa', // fa图标选择扩展
    echarts: 'echarts/echarts', // echarts图表扩展
    echartsTheme: 'echarts/echartsTheme', // echarts图表主题扩展
    wangEditor: 'wangEditor/wangEditor', // wangEditor富文本扩展
    layarea: 'layarea/layarea', //  省市县区三级联动下拉选择器
});
