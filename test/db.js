import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://joaquin:lajori848@codercluster.hkzyxhs.mongodb.net/ecommerce?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conectado a la base de datos"))
  .catch((error) => console.log(error));