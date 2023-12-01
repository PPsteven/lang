import { Stack, Box, SvgIcon, IconButton } from "@suid/material";
import { SvgIconProps } from "@suid/material/SvgIcon";
import { common, grey } from "@suid/material/colors";
import PlayCircleOutlineIcon from '@suid/icons-material/PlayCircleOutline';
import { For } from "solid-js";

import { SentenceObj, WordObj } from "../types/sentence";
import "./SentenceWithTool.css"

const Word = (props: { obj: WordObj}) => {
    const wordColer = () => {
        if (props.obj.level > 0) {
            return 'rgb(255, 189, 128)'
        } else {
            return 'white'
        }
    }
    console.log(props.obj.pronunciation)
    return (
        <Box 
            class="seg-word"
            sx = {{
                color: wordColer,
                // "&:hover": {
                //     borderColor: wordColer
                // }
            }}
        >
            <Stack>
                <Box class="pronunciation">{props.obj.pronunciation}</Box>
                <Box class="word">{props.obj.raw}</Box>
            </Stack>
        </Box>
    )
}

function SentenceIcon(props: SvgIconProps) {
    return (
        <IconButton>
            <SvgIcon 
                fontSize="medium"
                sx = {{
                    backgroundColor: "2b2e33",
                    ":hover": {
                        fill: '#fff',
                        cursor: 'pointer'
                    }
                }}
                {...props}
            />
        </IconButton>
    )
}

const SentencePlayBtnIcon = () => {
    return (
        <SentenceIcon sx={{ color: common.white }} class="play-btn-icon">
            <PlayCircleOutlineIcon />
        </SentenceIcon>
    )
}

const SentenceStarOutlineIconIcon = () => {
    return (
        <SentenceIcon sx={{ color: grey[500]}}>
            <path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
        </SentenceIcon>
    )
}

const SentenceMoreIconIcon = () => {
    return (
        <SentenceIcon sx={{ color: grey[500]}}>
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        </SentenceIcon>
    )
}

const SentenceToolBar = () => {
    return (
        <Stack direction="row">
            <SentenceStarOutlineIconIcon />
            <SentenceMoreIconIcon />
        </Stack>
    )
}

const Sentence = (props: {wordsObj: WordObj[]}) => {
    console.log(props.wordsObj)
    return (
        <Stack
            direction="row"
            alignItems="flex-end"
            sx = {{
                color: 'white',
            }}
            padding="4px 0px"
            flexWrap="wrap"
        >
            <For each={props.wordsObj}>
                {(obj, i) => {
                    return <Word obj={obj} />
                }}
            </For>
        </Stack>
    )
}

export const SentenceWithTool = (props:{obj: SentenceObj}) => {
    return (
        <Box  
            class="sentence-tool"
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Stack direction="row">
                    <SentencePlayBtnIcon />
                    <Stack
                        alignItems="flex-start"
                    >
                        <Sentence wordsObj={props.obj.words} />
                        <span class="trans"> {props.obj.tranlation}</span>
                    </Stack>
                </Stack>
                <SentenceToolBar />
            </Stack>
        </Box>
    )
}