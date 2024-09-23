const fs = require("fs")

const path = require("path");
const dirPath = path.join(__dirname, 'files');
// console.log(dirPath)

//----------For create dynamically files-----------

// for(i=0;i<5;i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt", "I am n demo content")
// }

//---------For read any folder how many files in there----------

// fs.readdir(dirPath, (err, files)=>{
//     console.log(files)
// })