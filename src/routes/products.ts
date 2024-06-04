import express from "express";
import { getMessage } from "../constants/messages";

const productsRoutes = express.Router();

productsRoutes.get("/", async (_, res) => {
  // const products = await getAllProducts();

  // res.status(200).send(products.rows);

  res.status(200).send([]);
});

productsRoutes.get("/search", async ({ body }, res) => {
  // const { partOfProductName, lastId, limit } = body;

  // const products = await searchProduct(partOfProductName, lastId, limit);

  // res.status(200).send(products.rows);

  res.status(200).send([]);
});

productsRoutes.post("/", async ({ body }, res) => {
  // const { name, quantity, price, userId, factoryId } = body;

  // await createProduct({ name, quantity, price, userId, factoryId });
  // res.status(201).send({ message: getMessage("Product").CREATED });

  res.status(201).send({ message: getMessage("Product").CREATED });
});

productsRoutes.post("/productsFactories", async ({ body }, res) => {
  // const { productId, factoryId } = body;

  // await createProductFactory({ productId, factoryId });
  // res.status(201).send({ message: getMessage("ProductFactory").CREATED });

  res.status(201).send({ message: getMessage("ProductFactory").CREATED });
});

export default productsRoutes;
