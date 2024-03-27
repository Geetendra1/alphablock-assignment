import FavouriteItemModel from '../model/FavouriteItemModel.js'

// Added seprate Data Access layer, These methood can be reused in other controllers as well .And seprate all the data base related operations

export const CreateFavouriteProduct = async({id,name}) => {
    const favouriteIem = new FavouriteItemModel({
        itemId : id,
        itemName: name
    })
    const favouriteIemResult = await favouriteIem.save()
    return favouriteIemResult
}

export const DeleteFavouriteProduct = async({id}) => {
    const itemTodeleteResult = await FavouriteItemModel.deleteOne({itemId:id})
    return itemTodeleteResult
}