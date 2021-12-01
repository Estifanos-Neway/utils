
/**
 * This code can be accessed by the link
 * 'https://github.com/StivsGit/utils/raw/main/JS/utils.js'
 * 
 * and it can be required using the module 'require-from-url'
 * or any other similar modules (or ways).
 */

/**
 * this module contains utilities (functions)
 * to be used by other programs.
 * */
class log{
    #normalLog;
    #errorLog;
    constructor(normalLog = process.stdout, errorLog = process.stderr){
        setNormalLog(normalLog);
        setErrorLog(errorLog);
    }
    set setNormalLog(stream){
        this.#normalLog = stream;
    }
    get getNormalLog(){
        return this.#normalLog;
    }
    set setErrorLog(stream){
        this.#errorLog = stream;
    }
    get getErrorLog(){
        return this.#errorLog;
    }
}
 function clog(data){
     /**
      * this is a short hand to console.log() vbvc
      */
     return console.log(data);
 }

function wait(duration){
     /**
      * this will return a promise to be
      * fullfiled after the given duration
      */
     return new Promise((resolve) =>{
         setTimeout(resolve,duration)
     })
 }

 async function waitThenGet(duration,processor,...args){
     /**
      * this will wait for the given duration
      * then return the return value of the
      * given function after execute it with
      * the given aguments.
      */
     await wait(duration);
     return processor(...args);
 }

 exports.clog = clog;
 exports.wait = wait;
 exports.waitThenGet = waitThenGet;
