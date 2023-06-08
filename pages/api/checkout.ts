import {initMongoose} from "@/lib/mongoose";
import Product from "@/models/Product";
import {Order} from "@/models/Order";

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  picture: string;
}

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        res.json('should be a POST request');
        return;
    }
    const {name, email, city, postalCode, streetAddress, country, selectedProducts} = req.body;
    await initMongoose();
    const productsIds = selectedProducts;
    const uniqIds = Array.from(new Set(productsIds));
    const products = await Product.find({_id:{$in:uniqIds}}).exec();

    const line_items = [];
    for (const productId of uniqIds) {
      const quantity = productsIds.filter((id: string) => id === productId).length;
      const product = products.find((p: Product) => p._id.toString() === productId);
      if (quantity > 0 && product) {
        line_items.push({
          quantity,
          price_data: {
            currency: 'USD',
            product_data: { name: product.name },
            unit_amount: product.price * 100,
          },
        });
      }
    }

  const orderDoc = await Order.create({
    line_items,
    name, email, city, postalCode,
    streetAddress, country, paid:false,
  });

  const session = await stripe.checkout.sessions.create({
    line_items: line_items,
    mode: 'payment',
    customer_email: email,
    success_url: process.env.PUBLIC_URL + '/Checkout?success=1',
    cancel_url: process.env.PUBLIC_URL + '/Checkout?canceled=1',
    metadata: {orderId:orderDoc._id.toString(), test:'ok'},
  });

  res.json({
    url:session.url,
  });
};