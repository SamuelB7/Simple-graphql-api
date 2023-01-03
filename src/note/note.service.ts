import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';

@Injectable()
export class NoteService {
  constructor (private prismaService: PrismaService) {}

  async create(createNoteInput: CreateNoteInput) {
    return await this.prismaService.note.create({
      data: {
        title: createNoteInput.title,
        content: createNoteInput.content,
        user_id: createNoteInput.user_id
      }
    });
  }

  findAll() {
    return this.prismaService.note.findMany({
      include: { user: true }
    });
  }

  findOne(id: number) {
    return this.prismaService.note.findUnique({
      where: { id },
      include: { user: true }
    });
  }

  async update(id: number, updateNoteInput: UpdateNoteInput) {
    return await this.prismaService.note.update({
      where: { id },
      data: {
        title: updateNoteInput.title,
        content: updateNoteInput.content
      }
    });
  }

  remove(id: number) {
    return this.prismaService.note.delete({
      where: { id }
    });
  }
}
