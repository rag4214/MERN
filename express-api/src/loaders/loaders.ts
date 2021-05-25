import mongoLoader from "./mongo";

const loaders: Promise<void[]> = Promise.all([mongoLoader]);

export default loaders;
