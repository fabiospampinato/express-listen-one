
/* TYPES */

type Port = number;
type Path = string;
type VerbUpper = 'DELETE' | 'GET' | 'POST' | 'PUT';
type VerbLower = 'delete' | 'get' | 'post' | 'put';
type Verb = VerbUpper | VerbLower;
type Request = import ( 'express' ).Request;
type Response = import ( 'express' ).Response;
type Callback = ( request: Request, response: Response ) => any;
type Return = Promise<any>;

/* EXPORT */

export {Port, Path, Verb, Callback, Return};
