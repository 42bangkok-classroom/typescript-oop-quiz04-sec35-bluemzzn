import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(readonly userService : UserService){}
    @Get(':test')
    test(){
        return this.userService.test();

    }
}
