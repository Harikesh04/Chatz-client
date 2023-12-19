import axios from "axios";
import { API_URL } from "./endpoints";
import yup_validators from "./validators";
import * as yup from "yup";
/**
 * @typedef ResponseObject
 * @property {string} message Error or Success Message.
 * @property {boolean} success True if it is resolved otherwise False.
 * @property {number} code Response Code.
 * @property {object} data Response data.
 */
export const ErrorObject = {
  message: "",
  success: false,
  code: 400,
  data: {},
};

//Methods allowed from the requests
export function isMethodProper(method) {
  return ["post", "put", "delete"].includes(method);
}

export default function request_caller({
  method = "post",
  endpoint = "",
  data = {},
  params,
  validation = true,
  formdata = false,
}) {
  return new Promise((resolve, reject) => {
    //If method is not in the approved methods
    if (!isMethodProper(method)) {
      ErrorObject.message = "Method is not allowed";
      reject(ErrorObject);
    }

    if (yup_validators[endpoint] && validation) {
      const validations = yup.object().shape(yup_validators[endpoint]);
      try {
        validations.validateSync(data);
      } catch (error) {
        //If the body is invalid, send the error and reject the promise
        ErrorObject.message = error.errors.join(", ");
        // console.log("error from yup", ErrorObject.message);
        reject(ErrorObject);
        return;
      }
    }
    let contentType = "application/json";
    if (formdata) {
      contentType = "multipart/form-data";
    }

    const req_obj = {
      method: method,
      url: API_URL + endpoint,
      data: method !== "get" ? data : {}, //Send request body if method is not get
      params: method === "get" ? data : params,
      responseType: "json", //Response Type must be JSON
      withCredentials: true,
      crossDomain: true,
      headers: {
        "Content-Type": contentType,
      },
    };
    //Common function to call the axios request, will require for the Conditional calling of the request
    function axios_req() {
      axios
        .request(req_obj)
        .then((res) => {
          const data = res.data;
          // console.log(data);
          /*If success and successToast is true, show the toast message and resolve
           * else throw error
           * For this we have to maintain the sanity of the response
           * Backend should also send success as true or false
           */
          if (data.success) {
            // if (successToast) {
            // 	StartToast(data.message, "success");
            // }
            console.log(data.message, "success");
            resolve(data);
            // return data;
          } else {
            throw Error(data);
          }
        })
        .catch((error) => {
          let err = {};
          // Check if the error has a response status of 0 and a message
          // A status code of 0 often indicates a network-level error or a request that couldn't be completed.
          // It can occur due to network connectivity issues, CORS errors, blocked requests, or request abortion.
          if (error && error?.response?.status === 0 && error?.message) {
            ErrorObject.message = error.message;
            err = ErrorObject;
          }
          //Or success is false
          else if (
            error &&
            error?.response?.data?.success === false &&
            error?.response?.data?.message
          ) {
            err = error.response.data;
          } //Or Cancelled using AbortController
          else if (axios.isCancel(error)) {
            ErrorObject.code = 100;
            ErrorObject.message = "Cancelled";
            err = ErrorObject;
          }
          // Handle any other errors
          else {
            // ConsoleMsg.log([error], "error");
            console.log([error], "error");
            ErrorObject.message = `Something went wrong on our side.
					Please try again. Sorry for the inconvenience`;
            err = ErrorObject;
          }

          reject(err);
        });
    }
    axios_req();
  });
}
