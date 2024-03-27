import { callFunction, getOpenaiResponse } from "../services/openaiService.js";
import { CreateFavouriteProduct,DeleteFavouriteProduct } from "../dataAccess/productRepository.js";

export const addfavouriteItem= async (req,res) => {
    
    const {id, name} = req.body
    
    try {
        const result = await CreateFavouriteProduct({id,name})
        res.status(200).json({data:result})

    } catch (error) {
        console.log('error',error);
        res.status(500).json({message:'Internal Server Error'})

    }

}

export const deletefavouriteItem = async (req,res) => {
    const {id} = req.params
    console.log('id',id);
    try {
        const result = await DeleteFavouriteProduct({id})
        res.status(200).json({data:result})

    } catch (error) {
        console.log('error',error);
        res.status(500).json({message:'Internal Server Error'})

    }

}

export const getProduct = async (req,res) => {
    try {
            const history = [
                {
                    role : 'user',
                    content: req.body.query
                }
            ]
        
            const response = await getOpenaiResponse(history)
            let result = []
            if(response.finish_reason === 'stop'){
                console.log(response.message.content);
            } else if(response.finish_reason === 'function_call') {
                result = await callFunction(response.message.function_call)
                console.log('result',result);
                history.push({role:"function", name: response.message.function_call.name, content:result})
            } else {
                //  this is because we didnt find the correct function o call against the given query
                const noData = [{"error" : "unable to answer the question, please try again"}]
                result = noData
            }
    
        
       res.status(200).json({data:result})
        
    } catch (error) {
        console.log('error',error);
        res.status(500).json({message:'Internal Server Error'})
    }
} 