import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(readonly userService: UserService) {}

  @Get(':test')
  test() {
    return this.userService.test();
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('fields') fields?: string[]) {
    return this.userService.findOne(id, fields);
  }
}
