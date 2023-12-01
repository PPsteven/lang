import { Accessor } from "solid-js"
import { createSignal } from "solid-js"
import { PResp } from "../types/resp"

export const useLoading = <T>(
    p: (...arg: any[]) => Promise<T>,
    initalLoading?: boolean          // optional
): [
    Accessor<boolean>,
    (...arg: any[]) => Promise<T>
]=> {
    const [loading, setLoading] = createSignal<boolean>(initalLoading ?? false)
    return [
        loading,
        async (...arg: any[]) => {
            setLoading(true)
            const data = await p(...arg)
            return data
        }
    ]
}

export const useFetch = <T>(
    p: (...arg: any[]) => PResp<T>,
    loading?: boolean,
) => {
    return useLoading(p, loading)
}