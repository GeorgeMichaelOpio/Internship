import { Alert } from "react-native";

export const passwordValidation = (password: string,confirm_password?:string) =>{
    //check if password is empty
    if(!(password)){
        console.log("Password is empty");
        Alert.alert("Error, password is required");
        return false;
    }
    //check if password is less than 6 characters
    if(password.length < 6){
        console.log("Password is too short");
        Alert.alert("Error, password must be at least 6 characters long");
        return false;
    }
    //check if password is and confirm password are the same
    return true;
}