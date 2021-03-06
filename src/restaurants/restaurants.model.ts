import * as mongosse from 'mongoose';

export interface MenuItem extends mongosse.Document {
    name: string,
    price: number
}

export interface Restaurant extends mongosse.Document {
    name: string,
    menu: MenuItem[]
}

const menuSchema = new mongosse.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const restSchema = new mongosse.Schema({
    name: {
        type: String,
        required: true
    },
    menu: {
        type: [menuSchema],
        required: false,
        select: false,
        default:[]
    }
})

export const Restaurant = mongosse.model<Restaurant>('Restaurant', restSchema)