import { MusicCard} from "./MusicCard"
import { Transcript } from "./Transcript"
import { TransclationCard } from "./TransclationCard"
import "./player.css"

export const Player = () => {
    return (
        <div class="flex flex-row gap-6 justify-end overflow-y-hidden max-h-[700px] scroll-parent">
            <div class="flex flex-col justify-between">
                <MusicCard />
                <TransclationCard />
            </div>
        <Transcript />
        </div>
    )
}