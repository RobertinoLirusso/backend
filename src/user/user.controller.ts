import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() user: User): Promise<User> {
      return this.userService.create(user);
    }
  
    @Get()
    findAll(): Promise<User[]> {
      return this.userService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('username') username: string): Promise<User> {
      return this.userService.findOne(username);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() user: User): Promise<void> {
      return this.userService.update(+id, user);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.userService.remove(+id);
    }
}
