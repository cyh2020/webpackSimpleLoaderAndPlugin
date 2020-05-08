var Minimize = require('minimize');
var loaderUtils = require('loader-utils');
var hello2ninhao = require('./changeHello');

module.exports = function(source) {
    // 把我们的 loader 写成异步的方式，这样不会阻塞其他编译进度：
    var callback = this.async();
    if (this.cacheable) {
        this.cacheable();
    }

    // console.log(this)
    //从webpack.confg中获取配置
    // var opts = loaderUtils.getOptions(this) || {};
    // var minimize = new Minimize(opts);
    // minimize.parse(source, callback);

    
    hello2ninhao(source,callback);
};
