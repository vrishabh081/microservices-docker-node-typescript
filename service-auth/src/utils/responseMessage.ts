import { ResponseMessageInterface } from "./interface"

export const successMessage: ResponseMessageInterface = {
    successLogin: "Successfully logged in."
}

// Error message-
export const errorMessage: ResponseMessageInterface = {
    emailNotExist: "This email does not exist.",
    incorrectPassword: "Password is incorrect.",
    jwtFailure: "Failed to generate jwt token",
    noFile: "File not found"
}