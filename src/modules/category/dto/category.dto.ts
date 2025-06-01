import { ApiProperty } from "@nestjs/swagger";

export class CategoryDto {
    @ApiProperty({ description: 'name', example: 'meal' })
    name: string;

    @ApiProperty({ description: 'type', example: 'expense' })
    type: string;

    @ApiProperty({ description: 'user Id', example: 1 })
    userId: number;
}