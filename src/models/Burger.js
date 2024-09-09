import { Schema } from "mongoose";

export const BurgerSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 100, minlength: 3, },
    price: { type: Number, required: true, max: 1000, min: 0 },
    numberOfPatties: { type: Number, required: true, max: 8, min: 0, default: 1 },
    toppings: { type: String, required: true, maxLength: 300, minlength: 4, default: `Lettuce, Tomato, Onion, Sauce` },
    vegetarian: { type: Boolean, default: false }
  }
)