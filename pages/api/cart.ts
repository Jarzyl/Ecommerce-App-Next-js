import {initMongoose} from "@/lib/mongoose";
import Product from "@/models/Product";

export default async function handle(req: any, res: any) {
  await initMongoose();
  const ids = req.body.ids;
  res.json(await Product.find({_id:ids}));
}