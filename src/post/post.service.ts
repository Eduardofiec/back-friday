import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AppDataSource } from '../database/data-source';
import { post } from '../database/entity/post';

@Injectable()
export class PostService {
  repo=AppDataSource.getRepository(post)
  async create(createPostDto: CreatePostDto) {
    let create = createPostDto;
    return await this.repo.save(create);
  }

  async findAll() {
    return await this.repo.find()
  }

  async findOne(id: number) {
    return await this.repo.findBy({
      id_post:id
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    let update=updatePostDto;
    update.id_post=id;
    return this.repo.save(update)
  }

  async remove(id: number) {
    let remove = await this.repo.findOneBy({
      id_post:id
    })
    return await this.repo.remove(remove);
  }
}
