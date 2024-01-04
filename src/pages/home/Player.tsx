// TODO: replace to @
import { MusicCard } from "../../components/MusicCard/MusicCard";
import { Transcript } from "../../components/Transcript/Transcript";

export const Player = () => {
  return (
    <div class="flex flex-row gap-6 justify-end">
      <div class="flex-none">
        <MusicCard />
      </div>
      <Transcript />
    </div>
  );
};
