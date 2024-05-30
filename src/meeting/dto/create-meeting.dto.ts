import { Type } from "class-transformer";
import { IsDateString, IsObject, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { CreateUserDto } from "src/user/dto/create-user.dto";


export class CreateMeetingDto {
    @MaxLength(255)
    @MinLength(3)
    @IsString()
    title: string;
    
    @IsDateString()
    date: string;

    @IsObject()
    @ValidateNested()
    @Type(()=> CreateUserDto)
    mentor: CreateUserDto;

    @IsObject()
    @ValidateNested()
    @Type(()=> CreateUserDto)
    students: CreateUserDto[];
}
