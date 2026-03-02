import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('test')
  test() {
    return this.userService.test();
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  //   @Get(':id')
  //   findId(@Query()){
  //     return this.userService.findId();
  //   }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
