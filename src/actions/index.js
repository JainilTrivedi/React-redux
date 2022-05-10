
export const increase = () => {
    return {
        type: "INCREASE"
    }
}
export const decrease = () => {
    return {
        type: "DECREASE"
    }
}

/*
since only one thing is being retured, it will work even if we dont write the return keyword else we should sue this 
return {
    type: "INCREASE"
}
*/