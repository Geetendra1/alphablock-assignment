import mongoose from 'mongoose'

const {Schema} = mongoose


const FavouriteItemSchema = new Schema ({
    itemId:String,
    itemName:String,
    isFavourite:Boolean
}, {timestamps:true})


export default mongoose.model('favouriteItem', FavouriteItemSchema)