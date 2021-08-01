var fs = require('fs');
var path = require('path');
var readline = require('readline');

var filePath = path.resolve('./');

//调用文件遍历方法
fileDisplay(filePath);

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath){
    fs.readdir(filePath, function(err, files){
        if(err){
            console.warn(err)
        }else{
            //遍历读取到的文件列表
            files.forEach(function(filename){
                var filedir = path.join(filePath, filename);//获取当前文件的绝对路径
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir, function(eror, stats){
                    if(eror){
                        console.warn('Failed to get the file stats');
                    }else{
                        var isFile = stats.isFile();
                        var isDir = stats.isDirectory();
                        if(isFile){
                            if(filedir.indexOf('stories.tsx') != -1) {// stories.tsx后缀的文件

                              var fRead = fs.createReadStream(filedir); 


                              var objReadline = readline.createInterface({ 
                                input: fRead
                              }); 

                              objReadline.on('line', (line)=>{
                                if(line.indexOf("from '..") != -1) {// 判断 "from '.." 
                                  line = '789789'
                                  fs.writeFileSync(filedir, line, function(err) {
                                    if (err) return err;
                                  })
                                }
                              });
                            } else {
                              console.log(222)
                            }
                        }
                        if(isDir){
                            fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                        }
                    }
                })
            });
        }
    });
}