"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_process_1 = require("node:process");
var fse = __importStar(require("fs-extra"));
var path = __importStar(require("path"));
//import index from './index.js';
var __filename = 'C:\\Users\\Bob\\Desktop\\Projects\\sync-exercise-main';
var __dirname = path.dirname(__filename);
function writeFiles() {
    fse.writeFileSync(path.join(__dirname, 'sync-exercise-main/lib', 'new3.txt'), "hello, people");
}
//writeFiles();
path.isAbsolute;
//const directoryPath = path.join(__dirname, 'sync-exercise-main/lib');
// fse.readdir(directoryPath, function(err, files) {
//   if (err) {
//     return console.log('err:', err)
//   }
//   files.forEach(function (file) {
//     console.log(file)
//   // fs.copySync('./sync-exercise-main/lib', './sync-exercise-main/dest')
//   })
// })
// function readDir() {
//   const libContents = fse.readdirSync(path.join(__dirname, 'lib'));
//   console.log("dircont:", libContents);
//  const destContents =  fse.readdirSync(path.join(__dirname, 'dest'));
//   libContents.forEach(file => {
//     if(fse.existsSync(`sync-exercise-main/dest/${file}`) == false) {
//      try {
//     fse.copyFileSync(`./sync-exercise-main/lib/${file}`, `./sync-exercise-main/dest/${file}`)
//      }  
//      catch(err) {
//       console.log(err)
//      }
//     }
//   });
//   console.log(destContents[0])
// }
//readDir();
// function readFile () {
// const fileContents = fse.readFileSync(
//   path.join(__dirname, 'index.js'),
//   {
//     encoding: 'utf-8',
//   },
// );
// console.log(fileContents)
// }
//readFile();
//console.log(argv)
var args = node_process_1.argv.slice(2);
console.log(args);
var inArg = '';
var syncArg = '';
args.forEach(function (arg, i) {
    if (arg === '--in') {
        inArg = args[i + 1];
    }
    else if (arg === '--sync') {
        syncArg = args[i + 1];
    }
});
if (!inArg) {
    throw new Error('The "--in" argument is required');
}
if (!syncArg) {
    throw new Error('The "--sync" argument is required');
}
// (async() => {
//   console.log(inArg);
//   const stat = fse.lstat(inArg)
//   console.log(stat.isFile())
// })().catch(console.error)
if (inArg) {
    let finalIn = "";

    if(path.isAbsolute(inArg)) {
        finalIn = inArg
    } else {
        finalIn = path.join(process.cwd(), inArg)
    }



   // var paths_1 = inArg;
    //why?
    fse.lstat(finalIn, function (err, stats) {
        if (err)
            return console.log(err); //Handle error
        // console.log(`Is file: ${stats.isFile()}`);
        console.log("Is directory: ".concat(stats.isDirectory()));
        // console.log(`Is symbolic link: ${stats.isSymbolicLink()}`);
        // console.log(`Is FIFO: ${stats.isFIFO()}`);
        // console.log(`Is socket: ${stats.isSocket()}`);
        // console.log(`Is character device: ${stats.isCharacterDevice()}`);
        // console.log(`Is block device: ${stats.isBlockDevice()}`);
        console.log("stats:", stats);
        if (stats.isDirectory()) {
            console.log('heyyy');
        }
        //if it is a file, copy it to sync folder
        if (stats.isFile()) {
            console.log('hello');
            console.log(syncArg);
        }
        else {
            console.log("no such file exists");
            fse.writeFileSync((finalIn, "utf8")
        }
        //if the file doesn't exist, create it and sync in destination
        //test
    });
}
//check if i have access to file
//if syncArg == delete, delete file path
// if(syncArg == 'delete') {
//     console.log('sync:' , syncArg)
//     fse.readdir(directory, (err, files) => {
//       if (err) throw err;
//       for (const file of files) {
//         fse.unlink(path.join(directory, file), err => {
//           if (err) throw err;
//         });
//       }
//     });
// }
// // // eslint-disable-next-line no-console
// // console.info(`Syncing ${inArg} with ${syncArg}`);
// let dataFile = path.join(__dirname, 'sync-exercise-main' , '/lib/new.txt')
// fse.readFile(dataFile, 'utf8', (err, data) => {
//   if(err) throw err
//   console.info(data)
// })
// const pathDelete = './lib/new3.txt'
// console.log("dir:" , __dirname);
//   try {
//     fse.unlinkSync(pathDelete)
//     //file removed
//   } catch(err) {
//     console.error(err)
//   }
// //}
// fse.watch('dest', (eventType, filename) => {
//   //if eventype === change copyfile to dest folder with same name
//   //if eventype === rename then find in argument and set dest with same name to rename
//   console.log(`event type is: ${eventType}`);
//   if (filename) {
//     console.log(`filename provided: ${filename}`);
//   } else {
//     console.log('filename not provided');
//   }
// });
// fse.copySync('lib', 'dest')
// let dataFile = path.join(__dirname, 'sync-exercise-main' , '/lib/new.txt')
// fs.readFile(dataFile, 'utf8', (err, data) => {
//   if(err) throw err
//   console.info(data)
// })
process.on('uncaughtException', function (err) {
    console.error("There was an uncaught error: ".concat(err));
    process.exit(1);
});
//# sourceMappingURL=index.js.map