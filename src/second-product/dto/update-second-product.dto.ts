import { PartialType } from '@nestjs/mapped-types';
import { CreateSecondProductDto } from './create-second-product.dto';

export class UpdateSecondProductDto extends PartialType(CreateSecondProductDto) {}
