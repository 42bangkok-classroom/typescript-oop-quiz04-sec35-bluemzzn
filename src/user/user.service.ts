import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from './user.interface';
import path from 'path';
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

  //   findOne(id: string, fields?: string[]): Partial<IUser> {
  //     const users = this.findAll();
  //     const user = users.find((u) => u.id === id);

  //     if (!user) {
  //       throw new NotFoundException('User not Found');
  //     }

  //     if (!fields || fields.length === 0) {
  //       return user;
  //     }

  //     fields.forEach((field) => {
  //       return field.length > 0;
  //     });
  //   }

  create(dto: CreateUserDto) {
    const users = this.findAll();
    const newId = String(users.length + 1);
    const newUser = { id: newId, ...dto };

    users.push(newUser);

    const filePath = path.join(process.cwd(), 'data/users.json');
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    return newUser;
  }
}
