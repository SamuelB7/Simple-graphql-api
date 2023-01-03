import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import * as argon from 'argon2'

@Injectable()
export class UserService {
  constructor (private prismaService: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    const hash = await argon.hash(createUserInput.password)

    return this.prismaService.user.create({
      data: {
        name: createUserInput.name,
        email: createUserInput.email,
        password: hash
      }
    })
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: { id },
      select: { name: true, email: true}
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return this.prismaService.user.update({
      where: { id },
      data: {
        name: updateUserInput.name,
        email: updateUserInput.email,
        password: updateUserInput.password
      }
    });
  }

  remove(id: number) {
    return this.prismaService.user.delete({
      where: { id }
    });
  }
}
