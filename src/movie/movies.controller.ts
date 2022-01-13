import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dtos';

@ApiTags('Movies')
@Controller('movie')
export class MoviesController {
  constructor(private readonly postService: MoviesService) {}

  @Get()
  async getMany() {
    const data = await this.postService.getMany();
    return { data };
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.postService.getById(id);
    return { data };
  }

  @Post()
  async createMovie(@Body() dto: CreateMovieDto) {
    const data = await this.postService.createOne(dto);
    return { message: 'Movie created', data };
  }

  @Put(':id')
  async editOne(@Param('id') id: number) {
    let data;
    return { message: 'Movie update not support', data };
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    let data;
    data = await this.postService.deleteOne(id);

    return { message: 'Movie deleted', data };
  }
}
