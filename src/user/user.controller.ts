import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

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

  @Post()
  create(@Body(ValidationPipe) dto: CreateUserDto) {
    return this.userService.create(dto);
  }
}
