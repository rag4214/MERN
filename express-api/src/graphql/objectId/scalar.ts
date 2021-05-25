import { GraphQLScalarType, Kind } from "graphql";
import { Types } from "mongoose";

const ObjectIdScalar = new GraphQLScalarType({
  name: "ObjectId",
  description: "MongoDB ObjectId Scalar Type",

  serialize(value: Types.ObjectId) {
    return value.toHexString();
  },

  parseValue(value) {
    return new Types.ObjectId(value);
  },

  parseLiteral(valueNode) {
    if (valueNode.kind === Kind.STRING) {
      return new Types.ObjectId(valueNode.value);
    }
    throw new Error("ObjectID Can Only Parse String Values");
  },
});

export default ObjectIdScalar;
