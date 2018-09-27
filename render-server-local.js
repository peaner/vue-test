var fs = require("fs");
var path = require("path");
var Express = require("express");
var App = new Express();

function getJsonData(fileName, res) {
  var jsonPath = path.join(__dirname, "./data-dev/" + fileName + ".json"); //路径结合、合并，路径最后不会带目录分隔符，_dirname指从当前目录开始找
  var dataJson = fs.readFileSync(jsonPath).toString(); //同步写法：读文件，没有回调函数
  res.json(JSON.parse(dataJson)); // 将JSON格式的数据转化为对象
}

App.all("*", function (req, res, next) {
  /**
   * 前端在发送ajax的时候设置request的withCredentials为true
   *
   * withCredentials {boolean}
   *    true  跨域请求传送cookie等认证信息到服务器端
   *          responese的Access-Control-Allow-Origin不能设置为* 必须明确
   *          Access-Control-Allow-Credentials 设置为true
   *    false [默认]跨域不传送 cookie等认证信息到服务器端
   *
   * **/
  // req.headers.origin 获取请求的域名
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Access-Token')
  res.setHeader('Access-Control-Expose-Headers', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  next()
})

App.all('/data/show/classRoom', function (req, res) {
  getJsonData('showClassRoom', res)
})
App.all('/', function (req, res) {
  res.json({
    message: '111'
  })
})

App.all('/helper/classroom/student/page', function (req, res) {
  getJsonData('classroom', res)
})


App.listen(9999, '0.0.0.0')

