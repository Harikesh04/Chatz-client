import * as yup from "yup";
import url_handlers from "./url-handlers";

const roomid = yup.string().trim().required("Room Id is required");
const owner = yup.string().trim().required("Owner is required");
const type = yup.string().trim().required("Room Type is required");
const image = yup.string().trim().required("Image is required");
const name = yup.string().trim().required("Name is required");
const yup_validators = {
  [url_handlers.api.room.create]: {
    roomid,
    owner,
    type,
    image,
    name,
  },
};

export default yup_validators;
