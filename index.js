function throttle(func, interval){
    let enabled = false;
    return function(...args){
        if(!enabled){
            func.apply(this, args);
            enabled = true

            setTimeout(() => {
                enabled = false
            }, interval)
        }
    }
}