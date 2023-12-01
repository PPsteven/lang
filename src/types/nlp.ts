import { Resp } from "./resp"

export interface Token {
   id?: number, 
   start?: number
   end?: number
   surface: string,
   class?: string,
   pos?: string[],
   base_form: string ,
   reading ?: string,
   pronunciation: string,
   features?: string[],
}

export interface sentence {
    raw_text: string,
    tokens: Token[],
}

export interface NLPBody {
    key: string,
    sentences: sentence[]
}

export type NLPResp = Resp<NLPBody>