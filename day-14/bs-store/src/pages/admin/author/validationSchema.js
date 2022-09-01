import {object,string} from "yup";

export const validationSchema = object({
    firstName: string().required("Firstname cannot be empty!"),
    lastName:string().required("Lastname cannot be empty!")
});