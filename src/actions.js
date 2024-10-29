export const increment = () => {
    return {
      type: 'INCREMENTAR'
    };
  };
  
  export const decrement = () => {
    return {
      type: 'DECREMENTAR'
    };
  };

  export const reset = () => {
    return { type: "RESET" };
  };