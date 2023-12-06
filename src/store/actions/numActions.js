
export function increment(val){
     return {
        type : "INCREMENT",
        incrementBy : val
     }
}

export function decrement(val){
    return {
       type : "DECREMENT",
       decrementBy : val
    }
}