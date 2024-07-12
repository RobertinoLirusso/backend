import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async create(user: User): Promise<User> {
        return this.userRepository.save(user);
      }
    
      async findAll(): Promise<User[]> {
        return this.userRepository.find();
      }
    
      async findOne(username: string): Promise<User> {
        return this.userRepository.findOneBy({ username });
      }
    
      async update(id: number, user: User): Promise<void> {
        await this.userRepository.update(id, user);
      }
    
      async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
      }

      async findOneByUsername(username: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { username } });
      }
      
}
