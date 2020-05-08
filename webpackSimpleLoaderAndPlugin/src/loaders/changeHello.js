function hello2ninhao (source,callback){
    let s = source.replace("hello","ninhao")
    callback(null,s)
}
module.exports = hello2ninhao;
