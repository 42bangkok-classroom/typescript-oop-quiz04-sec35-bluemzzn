import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';
import * as path from 'path';
import * as fs from 'fs';

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
}
