import { AudioCard } from "./AudioCard";
import { Transcript } from "./Transcript";
import { TransclationCard } from "./TransclationCard";
import { Player as corePlayer, Audio } from "../../core/player";
import "./player.css";

import { createStore } from "solid-js/store";

export type Store = {
  playIndex: number;
  seek: number;
  duration: number;
  percent: number;
  status: "play" | "pause" | "loading";
  err?: string;
};

interface PlayerProps {
  audios: Audio[];
  debug?: boolean;
}

export const Player = (props: PlayerProps) => {
  const [store, setStore] = createStore<Store>({
    playIndex: 0,
    seek: 0,
    duration: 0,
    percent: 0,
    status: "pause",
  });

  const player = new corePlayer({
    audios: props.audios,
    debug: props.debug || false,
  });

  player.on("play", () => {
    setStore("status", "play");
    setStore("err", undefined);
    setStore("duration", player.howl.duration());
  });

  player.on("pause", () => {
    setStore("status", "pause");
  });

  player.on("load", () => {
    props.debug && console.log("load");
  });

  player.on("loaderror", (_, e) => {
    props.debug && console.log("loaderror", e);
    setStore("status", "pause");
    setStore("err", "load error");
  });

  player.on("playerror", (_, e) => {
    props.debug && console.log("playerror", e);
    setStore("status", "pause");
    setStore("err", "play error");
  });

  player.on("step", ({seek, percent, playing}) => {
    props.debug && console.log("seek");
    setStore("seek", seek)
    setStore("percent", percent)
    if (playing) {
        setStore("status", "play");
    }
  });

  player.on("seek", () => {
    setStore("status", "loading")
  })

  return (
    <div class="flex flex-row gap-6 justify-end overflow-y-hidden max-h-[700px] scroll-parent">
      <div class="flex flex-col justify-between">
        <AudioCard store={store} player={player} />
        <TransclationCard />
      </div>
      <Transcript />
    </div>
  );
};
