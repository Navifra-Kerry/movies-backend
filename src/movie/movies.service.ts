import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Movies } from './entities';
import { CreateMovieDto } from './dtos';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movies)
    private readonly movieRepository: Repository<Movies>,
  ) {}

  async getMany() {
    return await this.movieRepository.find();
  }

  async getById(id: number) {
    const movie = await this.movieRepository.findOne(id).then((p) => p);
    if (!movie)
      throw new NotFoundException('Post does not exist or unauthorized');
    return movie;
  }

  async createOne(dto: CreateMovieDto) {
    const post = this.movieRepository.create({ ...dto });
    return await this.movieRepository.save(post);
  }

  async editOne(id: number) {}

  async deleteOne(id: number) {
    return await this.movieRepository.delete(id);
  }
}
