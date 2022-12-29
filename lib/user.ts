import {IsNotEmpty, IsEmail, IsPhoneNumber} from "class-validator"
export default class User {
  constructor(name: string, email: string, phone: string, school: string ){
      this.email = email;
      this.name = name;
      this.phone = phone;
      this.school = school;
  }
  @IsNotEmpty()
  name:          string;

  @IsEmail()
  @IsNotEmpty()
  email:         string;       

  @IsPhoneNumber("IN")
  @IsNotEmpty()
  phone:   string;

  @IsNotEmpty()
  school:        string;
}
