
// This code can be accessed by the link
// 'https://github.com/Estifanos-Neway/utils/raw/main/JS/utils.js'
// and it can be required using the module 'require-from-url'
// or any other similar modules (or ways).

/**
 * this module contains utilities (functions, classes)
 * to be used by other programs.
 * */

class js_utils{
    cLog(data) {
        /**
         * this is a short hand to console.log()
         */
        return console.log(data);
    }
    
    eLog(data) {
        /**
         * this is a short hand to console.error()
         */
        return console.error(data)
    }
    
    wait(duration) {
        /**
         * this will return a promise to be
         * fulfilled after the given duration
         */
        return new Promise((resolve) => {
            setTimeout(resolve, duration)
        })
    }
    
    async waitThenGet(duration, processor, ...args) {
        /**
         * this will wait for the given duration
         * then return the return value of the
         * given function after execute it with
         * the given aguments.
         */
        await wait(duration);
        return processor(...args);
    }
    
    notifyError(errorText, logText, exit) {
        /**
         * this func. will write to the error log
         * and console log then exit the process
         * if the 'exit' argument is truthy.
         */
        errorText = errorText ? errorText : "unmentioned error";
        logText = logText ? logText : "";
        eLog(errorText);
        cLog(logText);
        exit ? process.exit() : "";
    }
}

module.exports = new js_utils();
