
import { getByProductId,performSearch } from "../utils/index.js"


export const availableFunctions = [
    {
        function : getByProductId,
        schema: {
            name : "getByPRoductId",
            description: "Get the products by the id if the id is provided otherwise use performSearch function",
            parameters : {
                type: "object",
                properties : {
                    id : {
                        type : "string",
                        description : "The id of the product"
                    }
                },
                required: ["id"],
            }
        }
    },
    {
        function : performSearch,
        schema: {
            name : "performSearch",
            description: "Get the products by the category name, name can be like laptop, mobile etc",
            parameters : {
                type: "object",
                properties : {
                    category : {
                        type : "string",
                        description : "The category of the product"
                    }
                },
                required: ["category"],
            }
        }
    }
]

