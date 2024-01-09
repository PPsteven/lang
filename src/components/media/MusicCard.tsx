import { TbPlayerPauseFilled } from 'solid-icons/tb'
import { TbPlayerTrackNext } from 'solid-icons/tb'
import { TbPlayerTrackPrev } from 'solid-icons/tb'
import { TbPlayerSkipForward } from 'solid-icons/tb'
import { TbPlayerSkipBack } from 'solid-icons/tb'


const Slider = () => {
  return (
    <div class="flex flex-col gap-2 text-xl">
      <input type="range" min="0" max="100" value="40" class="range range-xs" />
      <div class="flex flex-row justify-between">
        <span class="text-white">03:41</span>
        <span>12:11</span>
      </div>
    </div>
  );
};

const MediaControl = () => {
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
      <button class="btn btn-circle btn-ghost bg-transparent">
        <span class="text-3xl">
          <TbPlayerPauseFilled />
        </span>
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

export const MusicCard = () => {
  return (
    <div class="card card-compact w-96 bg-transparent shadow-xl">
      <figure>
        <img src="src/assets/bg1.jpg" />
      </figure>
      <div class="card-body">
        <div class="card-actions justify-center">
          <MediaControl />
        </div>
        <Slider />
      </div>
    </div>
  );
};
