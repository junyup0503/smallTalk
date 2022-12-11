// eslint-disable-next-line max-classes-per-file
export class ApplicationError extends Error {
  constructor(statusCode, code, message = "an error occurred") {
    super(message);

    this.statusCode = statusCode || 500;
    this.code = code || 5000;
    this.message = message;

    // this.errors = errors;
  }
}
export class ValidationError extends ApplicationError {
  constructor(message = "", code = 4000) {
    super(400, code, message || "ValidationError error");
  }
}
export class AuthenticationError extends ApplicationError {
  constructor(message = "", code = 4010) {
    super(401, code, message || "Authentication error");
  }
}
export class AuthorizationError extends ApplicationError {
  constructor(message = "", code = 4030) {
    super(403, code, message || "Authorization error");
  }
}
export class NotFoundError extends ApplicationError {
  constructor(message = "", code = 4040) {
    super(404, code, message || "Resource not found");
  }
}

export class ServerError extends ApplicationError {
  constructor(message = "", code = 5000) {
    super(500, code, message || "Server Error");
  }
}

//   constructor(statusCode, message = 'an error occurred', errors) {
//     super(message);
//     this.statusCode = statusCode || 500;
//     this.message = message;
//     this.errors = errors;
//   }
// }

// export class ValidationError extends ApplicationError {
//   constructor(code, message) {
//     super(400, { code: code || 4000, msg: message || 'Validation Error' });
//     this.code = 4000;
//   }
// }

// export class AuthenticationError extends ApplicationError {
//   constructor(code, message) {
//     super(401, { code: code || 4010, msg: message || 'Authentication error' });
//     this.code = 4010;
//   }
// }

// export class AuthorizationError extends ApplicationError {
//   constructor(code, message) {
//     super(403, { code: code || 4030, msg: message || 'Authorization error' });
//     this.code = 4030;
//   }
// }

// export class NotFoundError extends ApplicationError {
//   constructor(code, message) {
//     super(404, { code: code || 4040, msg: message || 'Resource not found' });
//     this.code = 4040;
//   }
// }
