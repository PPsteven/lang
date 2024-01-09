import classNames from "classnames";
export interface LineObj {
  raw: string;
  translation: string;
  isSelected: boolean;
}

const Line = (props: { obj: LineObj }) => {
  return (
    <div>
      <span
        class={classNames(
          "font-bold text-5xl leading-[1.5]",
          props.obj.isSelected ? "text-white shadow-2xl" : "text-gray-400"
        )}
      >
        {props.obj.raw}
      </span>
    </div>
  );
};

export const Transcript = () => {
  const linesObj: LineObj[] = [
    {
      raw: "In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever sinc",
      translation: "Comment ça va?",
      isSelected: false,
    },
    {
      raw: "Whenever you feel like criticizing any one, just remember that all the people in this world haven’t had the advantages that you’ve had",
      translation: "Bonjour",
      isSelected: false,
    },
    {
      raw: "He didn’t say any more but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that",
      translation: "Je vais bien, merci!",
      isSelected: true,
    },
    {
      raw: "He didn’t say any more but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that",
      translation: "Je vais bien, merci!",
      isSelected: false,
    },
    {
      raw: "He didn’t say any more but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that",
      translation: "Je vais bien, merci!",
      isSelected: false,
    },
    {
      raw: "He didn’t say any more but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that",
      translation: "Je vais bien, merci!",
      isSelected: false,
    },
    {
      raw: "He didn’t say any more but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that",
      translation: "Je vais bien, merci!",
      isSelected: false,
    },
    {
      raw: "He didn’t say any more but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that",
      translation: "Je vais bien, merci!",
      isSelected: false,
    },
    {
      raw: "He didn’t say any more but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that",
      translation: "Je vais bien, merci!",
      isSelected: false,
    },
    {
      raw: "He didn’t say any more but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that",
      translation: "Je vais bien, merci!",
      isSelected: false,
    },
    {
      raw: "He didn’t say any more but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that",
      translation: "Je vais bien, merci!",
      isSelected: false,
    },
  ];
  return (
    <div class="flex flex-col gap-5 ml-4 overflow-y-auto px-4">
      <div class="max-h-full">
        {linesObj.map((v, idx) => {
          return <Line obj={v} />;
        })}
      </div>
    </div>
  );
};
