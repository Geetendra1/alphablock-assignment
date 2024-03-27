import OpenAI from "openai";
import { config } from "../config/index.js";
import {availableFunctions} from '../model/openaiFunctionModel.js'

const openai = new OpenAI({
    apiKey: config.OPENAI_API_KEY
})


async function getOpenaiResponse(history){
    console.log('history',history);
    try {
        const payload = {
            model:"gpt-3.5-turbo",
            messages:[
                {
                    role:'system' , content:'Your are tasked to suggest the correct function to call for the search query.'
                },
                ...history
            ],
            functions : availableFunctions.map((func) => func.schema),
        }
    
        const result = await openai.chat.completions.create(payload)
    
        return result.choices[0]
        
    } catch (error) {
        console.log('error from openai', error);
    }
}

// generic function to fall the funcions in any controller if required
function callFunction(function_call) {
    const func = availableFunctions.find((func) => func.schema.name === function_call.name)
    const args = JSON.parse(function_call.arguments);

    return func.function(args)
}

export {getOpenaiResponse,callFunction}