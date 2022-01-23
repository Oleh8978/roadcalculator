  
  export class BadRequest extends Error {
    constructor(message: string = "Bad request!") {
      super(message);
    }
  }