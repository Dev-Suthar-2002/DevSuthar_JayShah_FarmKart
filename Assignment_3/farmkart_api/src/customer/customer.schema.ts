import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Order } from "src/order/order.schema";

export type CustomerDocument = HydratedDocument<Customer>;

@Schema({ timestamps: true })
export class Customer {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    phone: number;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Order' }] })
    orders: Types.ObjectId[];

    _id: Types.ObjectId;

}

export const CustomerSchema = SchemaFactory.createForClass(Customer);