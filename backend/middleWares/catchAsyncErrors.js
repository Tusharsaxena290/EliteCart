export default (controllerFunction)=>
(req,res,next)=>
Promise.resolve(controllerFunction(req,res,next)).catch(next);


  //  const asyncErrorHander=(controllerFunction)=>{
  //  return(req,res,next)=>{
  //  controllerFunction.catch(req,res,next).catch(err=>next(err))
  //  }
  //  }
  //  export default asyncErrorHander;

/**
 * const asyncErrorHandler = (func)=>{
 * func(req,res,next).catch(err=>next(err))
 * }
 * it is wrong as it will directly execute the fn
 */

/**
 * so correct is
 * const asyncErrorHander=(controllerFunction)=>{
 * return(req,res,next)=>{
 * controllerFunction.catch(req,res,next).catch(err=>next(err))
 * }
 * }
 */