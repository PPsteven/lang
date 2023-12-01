import { Stack } from "@suid/material";

import { useFetch } from "../hooks/useFetch";
import { nlpPost } from "../utils";
import { onMount, For } from "solid-js";
import { SentenceWithTool } from "./SentenceWithTool";
import { textObj } from "../store"
import { handleRespWithoutNotify } from "../utils/handle_resp";
import { setTextObjStore } from "../store";


export const TextRead = () => {
    const [loading, data] = useFetch(nlpPost)

    const text = "日本は古くから中国大陸、朝鮮半島との関係が深く、飛鳥時代・奈良時代には遣隋使、遣唐使といった交易を通して法制度・仏教・儒教・漢文などを輸入し、国家体制の構築に役立てている。また、正倉院にペルシア・インドを由来とする文化財が複数含まれることを例に取れるように、唐や朝鮮に限らず交易を通じてアジア・シルクロード文化も流入している。律令体制樹立後の平安時代末期より武家政権が成立し、幾度も交替する。江戸時代に至って交際国を限定する「鎖国」を行ったが、外圧を受けて開国し、明治維新の過程で王政復古の大号令で武家政権が終焉した。"
    onMount(() => {
        (async () => {
            const resp = await data("ja", text)
            console.log(resp)
            handleRespWithoutNotify(resp, (data) => {
              setTextObjStore.setNlpToTextObj(data, "")
            })
        })()
    })

    return (
      <Stack>
        <For each={textObj.sentences}>
            {(obj, i) => {
              return <SentenceWithTool obj={obj} />
            }}
        </For>
      </Stack>
    )
}