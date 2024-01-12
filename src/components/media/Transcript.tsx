import classNames from "classnames";
import { For, createEffect, createMemo } from "solid-js";

export interface LineObj {
  raw: string;
  translation: string;
  isSelected: boolean;
  start: number;
  end: number;
}

const Line = (props: { obj: LineObj, isActive: boolean, lineNo: number}) => {
  return (
    <div>
      <span
        class={classNames(
          "font-bold text-5xl leading-[1.5]",
          props.isActive ? "text-white shadow-2xl active" : "text-gray-400"
        )}
        id={"line"+props.lineNo}
      >
        {props.obj.raw}
      </span>
    </div>
  );
};

interface TranscriptProps {
  seek: number
}

export const Transcript = (props: TranscriptProps) => {
  const lines: LineObj[] = [
    {
      raw: "In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever sinc",
      translation: "Comment ça va?",
      isSelected: false,
      start: 0,
      end: 5,
    },
    {
      raw: "Whenever you feel like criticizing any one, just remember that all the people in this world haven’t had the advantages that you’ve had",
      translation: "Bonjour",
      isSelected: false,
      start: 5,
      end: 10,
    },
    {
      raw: "He didn’t say any more but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that",
      translation: "Je vais bien, merci!",
      isSelected: true,
      start: 10,
      end: 13,
    },
    {
      raw: "He didn’t say any more but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that",
      translation: "Je vais bien, merci!",
      isSelected: false,
      start: 14,
      end: 15,
    },
    {
      raw: "He didn’t say any more but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that",
      translation: "Je vais bien, merci!",
      isSelected: false,
      start: 15,
      end: 18,
    },
    {
      raw: "He didn’t say any more but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that",
      translation: "Je vais bien, merci!",
      isSelected: false,
      start: 18,
      end: 25,
    },
  ];

  const scrollActive = () => {
    const active = document.querySelector(".transcript .active")
    if (active) {
      active.scrollIntoView({ block: "center", behavior: "smooth" })
    }
  }

  const activeIndex = createMemo(() => {
    const index = lines.findIndex((item) => {
      return item.start <= props.seek && item.end >= props.seek
    })
    return index
  })

  createEffect(()=>{
    activeIndex()
    scrollActive()
  })

  return (
    <div class="flex flex-col gap-5 ml-4 overflow-y-auto px-4 transcript">
      <div class="max-h-full">
        <For each={lines}>
          {(item, i)=> (
            <Line obj={item} isActive={activeIndex() == i()} lineNo={i()}/>
          )}
        </For>
      </div>
    </div>
  );
};
