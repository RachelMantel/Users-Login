import { UserType } from "../models/userType";


const initiaUser : UserType = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
};

export type Action={
        type: 'CREATE_USER',
        data: Partial<UserType> 
    } | {
        type: 'UPDATE_USER',
        data: Partial<UserType>
    } | {
        type: "REMOVE_USER",
       data: Partial<UserType>,
}


export default  (state: UserType, action: Action): UserType => {
    switch (action.type) {
      case "CREATE_USER":
        const user = action.data;
        return   {firstName: user.firstName || '',
        lastName: user.lastName || '',
        password: user.password || '',
        }
        case "UPDATE_USER":
          const user1 = action.data;
          return {
            firstName: user1.firstName||'',
            lastName: user1.lastName,
            email: user1.email,
            password: user1.password||'',
            address: user1.address,
            phoneNumber: user1.phoneNumber}
      case "REMOVE_USER":
        return initiaUser;
      default:
          return state;
      }
};