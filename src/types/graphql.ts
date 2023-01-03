
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateNoteInput {
    title?: Nullable<string>;
    content?: Nullable<string>;
    user_id: number;
}

export class UpdateNoteInput {
    id: number;
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export class CreateUserInput {
    name: string;
    email: string;
    password: string;
}

export class UpdateUserInput {
    id: number;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export class Note {
    id: number;
    title?: Nullable<string>;
    content?: Nullable<string>;
    user_id: number;
}

export abstract class IQuery {
    abstract notes(): Nullable<Note>[] | Promise<Nullable<Note>[]>;

    abstract note(id: number): Nullable<Note> | Promise<Nullable<Note>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createNote(createNoteInput: CreateNoteInput): Note | Promise<Note>;

    abstract updateNote(updateNoteInput: UpdateNoteInput): Note | Promise<Note>;

    abstract removeNote(id: number): Nullable<Note> | Promise<Nullable<Note>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: number;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    notes?: Nullable<Nullable<Note>[]>;
}

type Nullable<T> = T | null;
