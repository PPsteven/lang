import { TbPlayerPauseFilled } from "solid-icons/tb";
import { TbPlayerPlayFilled } from "solid-icons/tb";
import { TbPlayerTrackNext } from "solid-icons/tb";
import { TbPlayerTrackPrev } from "solid-icons/tb";
import { TbPlayerSkipForward } from "solid-icons/tb";
import { TbPlayerSkipBack } from "solid-icons/tb";

import { Player as corePlayer } from "../../core/player";
import { Store } from "./Player";
import { formatTime } from "../../utils/helper";

interface SliderProps {
  store: Store;
  onChange: (per: number) => void;
}

const Slider = (props: SliderProps) => {
  return (
    <div class="flex flex-col gap-2 text-xl">
      <input
        type="range"
        min="0"
        max="100"
        value={props.store.percent}
        class="range range-xs"
        onInput={(e) => {
          props.onChange(parseInt(e.currentTarget.value) / 100);
        }}
      />
      <div class="flex flex-row justify-between">
        <span class="text-white">{formatTime(props.store.seek)}</span>
        <span>{formatTime(props.store.duration)}</span>
      </div>
    </div>
  );
};

interface ControlProps {
  status: string;
  player: corePlayer;
}

const Control = (props: ControlProps) => {
  return (
    <div class="flex flex-row text-2xl text-white justify-center">
      <button class="btn btn-circle btn-ghost bg-transparent">
        <span class="text-3xl">
          <TbPlayerSkipBack />
        </span>
      </button>
      <button class="btn btn-circle btn-ghost bg-transparent">
        <span class="text-3xl">
          <TbPlayerTrackPrev />
        </span>
      </button>
      <button
        class="btn btn-circle btn-ghost bg-transparent"
        onClick={() => {
          if (props.status === "play") {
            props.player.pause();
          } else if (props.status === "pause") {
            props.player.play();
          }
        }}
      >
        {props.status == "play" ? (
          <span class="text-3xl">
            <TbPlayerPauseFilled />
          </span>
        ) : (
          <span class="text-3xl">
            <TbPlayerPlayFilled />
          </span>
        )}
      </button>
      <button class="btn btn-circle btn-ghost bg-transparent">
        <span class="text-3xl">
          <TbPlayerTrackNext />
        </span>
      </button>
      <button class="btn btn-circle btn-ghost bg-transparent">
        <span class="text-3xl">
          <TbPlayerSkipForward />
        </span>
      </button>
    </div>
  );
};

interface AudioCardProps {
  store: Store;
  player: corePlayer;
}

export const AudioCard = (props: AudioCardProps) => {
  return (
    <div class="card card-compact w-96 bg-transparent shadow-xl">
      <figure>
        <img src="src/assets/bg1.jpg" />
      </figure>
      <div class="card-body">
        <div class="card-actions justify-center">
          <Control status={props.store.status} player={props.player} />
        </div>
        <Slider
          store={props.store}
          onChange={(pos) => {
            props.player.seek(pos);
          }}
        />
      </div>
    </div>
  );
};
