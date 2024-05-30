import { IsArray, IsNumber, IsPositive, IsString, IsUrl, MaxLength, MinLength } from "class-validator";

export class CreateSecondProductDto {

    @MinLength(3)
    @MaxLength(255)
    title: string;

    @IsNumber()
    @IsPositive()
    price: number;

    @IsString()
    @MinLength(150)
    description: string;

    @IsArray()
    @IsString()
    color: string[];

    @IsUrl()
    image: string




}
