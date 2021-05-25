import { Types } from "mongoose";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

import Book, { Books } from "./book";

@Resolver(Book)
class BookResolver {
  @Query(() => [Book])
  async books() {
    return Books.find({});
  }

  @Query(() => Book, { nullable: true })
  async getBook(@Arg("id") id: Types.ObjectId) {
    return Books.findById(id);
  }

  @Mutation(() => Book)
  async createBook(
    @Arg("title", { nullable: true }) title?: string,
    @Arg("author", { nullable: true }) author?: string
  ) {
    return Books.create({ ...(title && { title }), ...(author && { author }) });
  }

  @Mutation(() => Book, { nullable: true })
  async updateBook(
    @Arg("id") id: Types.ObjectId,
    @Arg("title", { nullable: true }) title?: string,
    @Arg("author", { nullable: true }) author?: string
  ) {
    return Books.findByIdAndUpdate(id, {
      ...(title && { title }),
      ...(author && { author }),
    });
  }

  @Mutation(() => Book, { nullable: true })
  async deleteBook(@Arg("id") id: Types.ObjectId) {
    return Books.findByIdAndDelete(id);
  }
}

export default BookResolver;
