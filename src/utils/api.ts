import { r } from "./requests"
import { NLPResp } from "../types/nlp"


export const nlpPost = (
    langCode: string,
    text: string,
): Promise<NLPResp>=> {
    return r.post("/nlp", {
        "lang_code": langCode,
        "source": {
            "text": text
        }
    })
}