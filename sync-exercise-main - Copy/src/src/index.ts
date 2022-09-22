import { argv } from 'node:process';

import * as fse from 'fs-extra';
import * as path from 'path';
import {fileURLToPath} from 'url';
//import index from './index.js';

const __filename: string = 'C:\\Users\\Bob\\Desktop\\Projects\\sync-exercise-main';
const __dirname = path.dirname(__filename);

function writeFiles () {

  fse.writeFileSync(path.join(__dirname, 'sync-exercise-main/lib', 'new3.txt'), "hello, people")



}

writeFiles()

path.isAbsolute
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
const args = argv.slice(2);
console.log(args)
let inArg = '';
let syncArg = '';

args.forEach((arg: string, i: number) => {
  if (arg === '--in') {
    inArg = args[i + 1];
  } else if (arg === '--sync') {
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
if(inArg) {
  console.log(inArg);
  
  let paths = inArg;
//why?
fse.lstat(paths, (err, stats) => {

    if(err)
        return console.log(err); //Handle error

    // console.log(`Is file: ${stats.isFile()}`);
     console.log(`Is directory: ${stats.isDirectory()}`);
    // console.log(`Is symbolic link: ${stats.isSymbolicLink()}`);
    // console.log(`Is FIFO: ${stats.isFIFO()}`);
    // console.log(`Is socket: ${stats.isSocket()}`);
    // console.log(`Is character device: ${stats.isCharacterDevice()}`);
    // console.log(`Is block device: ${stats.isBlockDevice()}`);
      console.log("stats:" , stats)
    if(stats.isDirectory()) {
      console.log('heyyy')
    }

    //if it is a file, copy it to sync folder
    if(stats.isFile()) {
      console.log('hello')
      console.log(syncArg)
    } else {
        console.log("no such file exists")
      fse.writeFileSync(path.join(__dirname, '/lib', paths), "hello, people")

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

process.on('uncaughtException', err => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1)
})