import { initMongoose } from "@/lib/mongoose";
import Product from "@/models/Product";

export async function findAllProducts() {
  return Product.find().exec();
}

export default async function handle(req: any, res: any) {
  try {
    await initMongoose();
    const { ids } = req.query;
    if (ids) {
      const idsArray = ids.split(',');
      const products = await Product.find({
        '_id': { $in: idsArray }
      }).exec();
      res.json(products);
    } else {
      const products = await findAllProducts();
      res.json(products);
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}
