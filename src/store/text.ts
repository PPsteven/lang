import { createStore} from "solid-js/store";
import { batch } from "solid-js";

import { SentenceObj, WordObj } from "../types/sentence";
import { NLPBody } from "../types/nlp";

let defaultText = "日本は古くから中国大陸、朝鮮半島との関係が深く、飛鳥時代・奈良時代には遣隋使、遣唐使といった交易を通して法制度・仏教・儒教・漢文などを輸入し、国家体制の構築に役立てている。また、正倉院にペルシア・インドを由来とする文化財が複数含まれることを例に取れるように、唐や朝鮮に限らず交易を通じてアジア・シルクロード文化も流入している。律令体制樹立後の平安時代末期より武家政権が成立し、幾度も交替する。江戸時代に至って交際国を限定する「鎖国」を行ったが、外圧を受けて開国し、明治維新の過程で王政復古の大号令で武家政権が終焉した。"

const [textObj, setTextObj] = createStore<{
    key: string
    text: string 
    sentences: SentenceObj[]
    sentence: SentenceObj
}>({
    key: defaultText,
    text: "",
    sentences: [],
    sentence: {} as SentenceObj,
})

const sentence: SentenceObj = {
    raw: defaultText, 
    tranlation: "去他妈的铁矿石头",
    words: [
    {
        raw: "ひっそり",
        stem: "ひっそり",
        pronunciation: "ひっそり",
        tag: 1,
        level: 0,
        },
        {
        raw: "遠く",
        stem: "遠く",
        pronunciation: "とおく",
        tag: 2,
        level: 3,
        },
        {
        raw: "離（はな）し難（がた）い",
        stem: "離し難い",
        pronunciation: "はなしがたい",
        tag: 3,
        level: 4,
        },
    ]

}

export const setTextObjStore = {
    setNlpToTextObj : (resp: NLPBody, text: string) => {
        setTextObj({
            "key": resp.key,
            "text": text,
            "sentences": resp.sentences.map((sentence): SentenceObj => {
                return {
                    raw: sentence.raw_text,
                    tranlation: "",
                    words: sentence.tokens.map((token): WordObj=>{
                        return {
                            raw: token.surface, 
                            stem: token.base_form, 
                            pronunciation: token.pronunciation,
                            tag: 0,
                            level: Math.floor(Math.random()*2),
                        }
                    })
                }
            }),
        })
    }
}


export { textObj }