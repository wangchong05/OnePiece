var fs = require('fs');
var path = require('path');
var readline = require('readline');


var filePath = path.resolve('./');//当前文件夹

//调用文件遍历方法
fileDisplay(filePath);

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath){
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath, function(err, files){
        if(err){
            console.warn(err)
        }else{
            //遍历读取到的文件列表
            files.forEach(function(filename){
                //获取当前文件的绝对路径
                var filedir = path.join(filePath, filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir, function(eror, stats){
                    if(eror){
                        console.warn('Failed to get the file stats');
                    }else{
                        var isFile = stats.isFile();//是文件
                        var isDir = stats.isDirectory();//是文件夹
                        if(isFile){
                            if(filedir.indexOf('\\asd\\') != -1) {// asd文件夹下的文件
                              // fs.readFile(filedir, function(err, data) {
                              //   if (err) return err;
                              //   let content = data.toString();
                              //   content = content.replace('replaceTextName', 'hyachyac');
                              //   fs.writeFileSync(filedir, content, function(err) {
                              //     if (err) return err;
                              //   })
                              //   // readline.insert(filedir, 2, 'hello');



                              // })
                              

                              var fRead = fs.createReadStream(filedir); 
                              // var fWrite = fs.createWriteStream(filedir);
                              var fWrite = fs.createWriteStream('output.txt');


                              var objReadline = readline.createInterface({ 
                                input: fRead,
                                output: fWrite
                              }); 

                              objReadline.on('line', (line)=>{
                                if(line.indexOf('hyac') != -1) {
                                  // fWrite.write('strTemp'); 
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