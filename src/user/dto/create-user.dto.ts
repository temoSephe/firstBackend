import { IsEmail, IsInt, IsNumber, IsString, Min, Max, IsPhoneNumber, IsIn, MinLength, MaxLength } from "class-validator";

export class CreateUserDto { 
    @MaxLength(15)
    @MinLength(3)
    @IsString()
    firstname: string;

    @MaxLength(15)
    @MinLength(3)
    @IsString()
    lastname: string;

    @IsEmail()
    email: string;


    @IsNumber()
    @IsInt()
    @Min(12)
    @Max(65)
    age: number;

    @IsPhoneNumber()
    phone: number;

    @IsIn(['male', 'Female'])
    gender: string;


}
