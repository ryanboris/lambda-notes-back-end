// Code generated by Prisma (prisma@1.23.0-test.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  note: (where?: NoteWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  note: (where: NoteWhereUniqueInput) => NotePromise;
  notes: (
    args?: {
      where?: NoteWhereInput;
      orderBy?: NoteOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Note>;
  notesConnection: (
    args?: {
      where?: NoteWhereInput;
      orderBy?: NoteOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => NoteConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createNote: (data: NoteCreateInput) => NotePromise;
  updateNote: (
    args: { data: NoteUpdateInput; where: NoteWhereUniqueInput }
  ) => NotePromise;
  updateManyNotes: (
    args: { data: NoteUpdateManyMutationInput; where?: NoteWhereInput }
  ) => BatchPayloadPromise;
  upsertNote: (
    args: {
      where: NoteWhereUniqueInput;
      create: NoteCreateInput;
      update: NoteUpdateInput;
    }
  ) => NotePromise;
  deleteNote: (where: NoteWhereUniqueInput) => NotePromise;
  deleteManyNotes: (where?: NoteWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  note: (
    where?: NoteSubscriptionWhereInput
  ) => NoteSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type NoteOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "textbody_ASC"
  | "textbody_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpdateOneWithoutNotesInput {
  create?: UserCreateWithoutNotesInput;
  update?: UserUpdateWithoutNotesDataInput;
  upsert?: UserUpsertWithoutNotesInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: UserWhereUniqueInput;
}

export type NoteWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface NoteUpdateManyMutationInput {
  title?: String;
  textbody?: String;
}

export interface NoteWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  textbody?: String;
  textbody_not?: String;
  textbody_in?: String[] | String;
  textbody_not_in?: String[] | String;
  textbody_lt?: String;
  textbody_lte?: String;
  textbody_gt?: String;
  textbody_gte?: String;
  textbody_contains?: String;
  textbody_not_contains?: String;
  textbody_starts_with?: String;
  textbody_not_starts_with?: String;
  textbody_ends_with?: String;
  textbody_not_ends_with?: String;
  AND?: NoteWhereInput[] | NoteWhereInput;
  OR?: NoteWhereInput[] | NoteWhereInput;
  NOT?: NoteWhereInput[] | NoteWhereInput;
}

export interface NoteCreateInput {
  title: String;
  textbody: String;
  author?: UserCreateOneWithoutNotesInput;
}

export interface NoteCreateManyWithoutAuthorInput {
  create?: NoteCreateWithoutAuthorInput[] | NoteCreateWithoutAuthorInput;
  connect?: NoteWhereUniqueInput[] | NoteWhereUniqueInput;
}

export interface UserCreateOneWithoutNotesInput {
  create?: UserCreateWithoutNotesInput;
  connect?: UserWhereUniqueInput;
}

export interface NoteSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: NoteWhereInput;
  AND?: NoteSubscriptionWhereInput[] | NoteSubscriptionWhereInput;
  OR?: NoteSubscriptionWhereInput[] | NoteSubscriptionWhereInput;
  NOT?: NoteSubscriptionWhereInput[] | NoteSubscriptionWhereInput;
}

export interface UserCreateWithoutNotesInput {
  name: String;
  email?: String;
}

export interface NoteUpdateManyDataInput {
  title?: String;
  textbody?: String;
}

export interface NoteUpdateInput {
  title?: String;
  textbody?: String;
  author?: UserUpdateOneWithoutNotesInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface NoteUpdateWithWhereUniqueWithoutAuthorInput {
  where: NoteWhereUniqueInput;
  data: NoteUpdateWithoutAuthorDataInput;
}

export interface NoteScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  textbody?: String;
  textbody_not?: String;
  textbody_in?: String[] | String;
  textbody_not_in?: String[] | String;
  textbody_lt?: String;
  textbody_lte?: String;
  textbody_gt?: String;
  textbody_gte?: String;
  textbody_contains?: String;
  textbody_not_contains?: String;
  textbody_starts_with?: String;
  textbody_not_starts_with?: String;
  textbody_ends_with?: String;
  textbody_not_ends_with?: String;
  AND?: NoteScalarWhereInput[] | NoteScalarWhereInput;
  OR?: NoteScalarWhereInput[] | NoteScalarWhereInput;
  NOT?: NoteScalarWhereInput[] | NoteScalarWhereInput;
}

export interface UserUpdateWithoutNotesDataInput {
  name?: String;
  email?: String;
}

export interface NoteUpdateWithoutAuthorDataInput {
  title?: String;
  textbody?: String;
}

export interface UserUpsertWithoutNotesInput {
  update: UserUpdateWithoutNotesDataInput;
  create: UserCreateWithoutNotesInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface UserCreateInput {
  name: String;
  email?: String;
  notes?: NoteCreateManyWithoutAuthorInput;
}

export interface NoteCreateWithoutAuthorInput {
  title: String;
  textbody: String;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  notes?: NoteUpdateManyWithoutAuthorInput;
}

export interface NoteUpdateManyWithoutAuthorInput {
  create?: NoteCreateWithoutAuthorInput[] | NoteCreateWithoutAuthorInput;
  delete?: NoteWhereUniqueInput[] | NoteWhereUniqueInput;
  connect?: NoteWhereUniqueInput[] | NoteWhereUniqueInput;
  disconnect?: NoteWhereUniqueInput[] | NoteWhereUniqueInput;
  update?:
    | NoteUpdateWithWhereUniqueWithoutAuthorInput[]
    | NoteUpdateWithWhereUniqueWithoutAuthorInput;
  upsert?:
    | NoteUpsertWithWhereUniqueWithoutAuthorInput[]
    | NoteUpsertWithWhereUniqueWithoutAuthorInput;
  deleteMany?: NoteScalarWhereInput[] | NoteScalarWhereInput;
  updateMany?:
    | NoteUpdateManyWithWhereNestedInput[]
    | NoteUpdateManyWithWhereNestedInput;
}

export interface UserUpdateManyMutationInput {
  name?: String;
  email?: String;
}

export interface NoteUpsertWithWhereUniqueWithoutAuthorInput {
  where: NoteWhereUniqueInput;
  update: NoteUpdateWithoutAuthorDataInput;
  create: NoteCreateWithoutAuthorInput;
}

export interface NoteUpdateManyWithWhereNestedInput {
  where: NoteScalarWhereInput;
  data: NoteUpdateManyDataInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email?: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface NoteSubscriptionPayload {
  mutation: MutationType;
  node: Note;
  updatedFields: String[];
  previousValues: NotePreviousValues;
}

export interface NoteSubscriptionPayloadPromise
  extends Promise<NoteSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = NotePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = NotePreviousValuesPromise>() => T;
}

export interface NoteSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<NoteSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = NoteSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = NotePreviousValuesSubscription>() => T;
}

export interface AggregateNote {
  count: Int;
}

export interface AggregateNotePromise
  extends Promise<AggregateNote>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateNoteSubscription
  extends Promise<AsyncIterator<AggregateNote>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Note {
  id: ID_Output;
  title: String;
  textbody: String;
}

export interface NotePromise extends Promise<Note>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  textbody: () => Promise<String>;
  author: <T = UserPromise>() => T;
}

export interface NoteSubscription
  extends Promise<AsyncIterator<Note>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  textbody: () => Promise<AsyncIterator<String>>;
  author: <T = UserSubscription>() => T;
}

export interface NotePreviousValues {
  id: ID_Output;
  title: String;
  textbody: String;
}

export interface NotePreviousValuesPromise
  extends Promise<NotePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  textbody: () => Promise<String>;
}

export interface NotePreviousValuesSubscription
  extends Promise<AsyncIterator<NotePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  textbody: () => Promise<AsyncIterator<String>>;
}

export interface NoteEdge {
  node: Note;
  cursor: String;
}

export interface NoteEdgePromise extends Promise<NoteEdge>, Fragmentable {
  node: <T = NotePromise>() => T;
  cursor: () => Promise<String>;
}

export interface NoteEdgeSubscription
  extends Promise<AsyncIterator<NoteEdge>>,
    Fragmentable {
  node: <T = NoteSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface NoteConnection {
  pageInfo: PageInfo;
  edges: NoteEdge[];
}

export interface NoteConnectionPromise
  extends Promise<NoteConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<NoteEdge>>() => T;
  aggregate: <T = AggregateNotePromise>() => T;
}

export interface NoteConnectionSubscription
  extends Promise<AsyncIterator<NoteConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<NoteEdgeSubscription>>>() => T;
  aggregate: <T = AggregateNoteSubscription>() => T;
}

export interface User {
  id: ID_Output;
  name: String;
  email?: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  notes: <T = FragmentableArray<Note>>(
    args?: {
      where?: NoteWhereInput;
      orderBy?: NoteOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  notes: <T = Promise<AsyncIterator<NoteSubscription>>>(
    args?: {
      where?: NoteWhereInput;
      orderBy?: NoteOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Note",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
