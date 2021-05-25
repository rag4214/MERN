import { getModelForClass, prop } from "@typegoose/typegoose";
import { Types } from "mongoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Book {
  @Field()
  readonly _id!: Types.ObjectId;

  @prop()
  @Field({ nullable: true })
  title?: string;

  @prop()
  @Field({ nullable: true })
  author?: string;
}

export const Books = getModelForClass(Book);
