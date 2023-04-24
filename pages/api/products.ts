import { initMongoose } from "@/lib/mongoose";
import Product from "@/models/Product";

export async function findAllProducts() {
  return Product.find().exec();
}

export default async function handle(req: any, res: any) {
  try {
    await initMongoose();
    const { ids } = req.query;
    // console.log('ids:', ids); // Dodany console log
    if (ids) {
      const idsArray = ids.split(',');
      // console.log('idsArray:', idsArray); // Dodany console log
      const products = await Product.find({
        '_id': { $in: idsArray }
      }).exec();
      // console.log('products:', products); // Dodany console log
      res.json(products);
    } else {
      const products = await findAllProducts();
      // console.log('all products:', products); // Dodany console log
      res.json(products);
    }
  } catch (error) {
    console.error(error); // Dodany console log
    res.status(500).send('Internal Server Error');
  }
}
