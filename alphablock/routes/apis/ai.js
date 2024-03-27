import express from 'express' 
const router = express.Router()
import { getProduct,addfavouriteItem,deletefavouriteItem } from '../../controllers/productController.js'


router.get('/ping', (req,res) => {
    res.json({'message':'working api:ai'})
})

// Get the products based on the user intention either by id or by category,name etc
router.post('/products', getProduct)

// make an item favourite
router.post('/products/favourite', addfavouriteItem)


// remove  item from favourite
router.delete('/products/favourite/:id', deletefavouriteItem)

export default router