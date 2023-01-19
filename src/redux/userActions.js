export const increment = (amount) => {
    return {
        type:'increment',
        payload: amount
    };
};
export const decrement = (amount) => {
    return {
        type:'decrement',
        payload: amount
    };
};