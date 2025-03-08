/**
 * HTTP response status codes.
 * @constant {Object} RESPONSE
 * @property {number} OK - The request has succeeded (200).
 * @property {number} CREATED - The request has been fulfilled and resulted in a new resource being created (201).
 * @property {number} NO_CONTENT - The server successfully processed the request, but is not returning any content (204).
 * @property {number} BAD_REQUEST - The server cannot or will not process the request due to a client error (400).
 * @property {number} UNAUTHORIZED - The request requires user authentication (401).
 * @property {number} NOT_FOUND - The server has not found anything matching the request URI (404).
 * @property {number} SERVER_ERROR - The server encountered an unexpected condition which prevented it from fulfilling the request (500).
 */
export const RESPONSE = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
  };
  