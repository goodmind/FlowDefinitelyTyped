declare module "mongoose-mock" {
  declare var mock: mongoose.Mongoose;
  declare module.exports: typeof mock;
}
