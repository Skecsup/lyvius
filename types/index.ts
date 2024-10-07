import { carts, products } from '@/db/schema'
import { cartItemSchema, shippingAddressSchema } from '@/lib/validator'
import { InferSelectModel } from 'drizzle-orm'
import { z } from 'zod'

// PRODUCTS
export type Product = InferSelectModel<typeof products>

//CART item
export type CartItem = z.infer<typeof cartItemSchema>

// CART
export type Cart = InferSelectModel<typeof carts>

//SHIPPING
export type ShippingAddress = z.infer<typeof shippingAddressSchema>
