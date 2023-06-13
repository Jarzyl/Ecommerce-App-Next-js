import { initMongoose } from "@/lib/mongoose";
import { Order } from "@/models/Order";

export default async function handler(req: any, res: any){
    await initMongoose();
    res.json(await Order.find());
}
