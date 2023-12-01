
export interface WordObj {
    raw: string 
    stem: string  
    pronunciation: string
    tag: number
    level: number
}

export interface SentenceObj {
    raw: string,
    tranlation: string,
    words: WordObj[],
}