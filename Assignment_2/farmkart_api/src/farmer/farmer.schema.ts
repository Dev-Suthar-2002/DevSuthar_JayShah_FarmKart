import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Product } from "../product/product.schema";


export type FarmerDocument = HydratedDocument<Farmer>;

@Schema({ timestamps: true })
export class Farmer {
    @Prop({ required:true })
    name: string;

    @Prop({ required: true, unique: true})
    email: string;

    @Prop({ required: true})
    password: string;

    @Prop({ required: true})
    address: string;

    @Prop()
    bio: string;

    @Prop({ required: true })
    phone: number;

    @Prop({ type: [{ type : Types.ObjectId, ref: 'Product' }] })
    products: Types.ObjectId[];
}

export const FarmerSchema = SchemaFactory.createForClass(Farmer);