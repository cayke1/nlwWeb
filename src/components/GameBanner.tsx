import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { GameAdBanner } from "./GameAdBanner";
interface GameBannerProps {
    id: string;
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export interface GameAds {
  id: string,
  name: string,
  weekDays: [],
  useVoiceChannel: boolean,
  yearsPlaying: number,
  hourStart: string,
  hourEnd: string
}

export function GameBanner ({bannerUrl, title, adsCount, id}: GameBannerProps) {
  const [gameAds, setGameAds] = useState<GameAds[]>([]);


  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/games/${id}/ads`)
    .then(response => response.json())
    .then(data => {
      setGameAds(data);
    })
  }, []); 
    return (
      <Dialog.Root>
        <Dialog.Trigger className="relative rounded-lg overflow-hidden">
          <img src={bannerUrl} alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <span className="font-bold text-white block">{title}</span>
            <span className="text-zinc-300 text-sm">{adsCount} anúncio(s)</span>
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
              <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

              <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10
          text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            rounded-lg md:w-[720px] max-h-[600px] w-[480px] overflow-y-auto scrollbar-thumb-gray-900 shadow-lg shadow-black/25">
              <h1 className="text-2xl font-bold mb-3 text-center">{title}</h1>
              <div className=" flex flex-row gap-40 align-center justify-center">
                <div className="opacity-[0.75] hidden md:block">
                  <img src={bannerUrl} />
                </div>
                <div>
                  {gameAds.map(gamead => {
                    return (
                      <GameAdBanner 
                      id={gamead.id}
                      name={gamead.name}
                      weekDays={gamead.weekDays}
                      useVoiceChannel={gamead.useVoiceChannel}
                      yearsPlaying={gamead.yearsPlaying}
                      hourStart={gamead.hourStart}
                      hourEnd={gamead.hourEnd}
                      />
                    );
                  })}
                </div>
                </div>
                
              </Dialog.Content>
            </Dialog.Portal>
      </Dialog.Root>
    )
}