import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';
import * as path from 'path';
import * as fs from 'fs';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  test() {
    return [];
  }
  findAll(): IUser[] {
    const filePath = path.join(process.cwd(), 'data/users.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data) as IUser[];
  }
  //   findId(id: string, fields?: string[]): Partial<IUser>{
  //     const Users = this.findAll();
  //     const User = Users.find(user => user.id === id);

  //     if(!User){
  //         throw new NotFoundException('User Not Found');
  //     }

  //     if(!fields ||fields.length === 0){
  //         return User;
  //     }

  //     const filter: Partial<IUser> = {};
  //     fields.forEach
  //   }

  create(createUserDto: CreateUserDto): IUser {
    const users = this.findAll();
    const newId = String(users.length + 1);
    const newUser: IUser = { id: newId, ...createUserDto };

    users.push(newUser);

    const filePath = path.join(process.cwd(), 'data/users.json');
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    return newUser;
  }
}
