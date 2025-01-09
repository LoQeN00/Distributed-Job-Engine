import { IsNotEmpty, IsNumber } from 'class-validator';

export class FibbonaciData {
  @IsNumber()
  @IsNotEmpty()
  iterations: number;
}
