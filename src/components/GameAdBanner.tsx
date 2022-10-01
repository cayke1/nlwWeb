import { GameAds } from "./GameBanner"
import { DuoInfo } from './DuoInfo';
import { GameController } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { DiscordConnect } from "./DiscordConnect";
import { useState } from 'react';

export function GameAdBanner (props : GameAds) {

    return (
        <div  className="w-52 bg-[#1e1b25] rounded-lg p-5 align-center drop-shadow-2xl mt-4">
            <DuoInfo label="Nome" value={props.name} />
            <DuoInfo label="Tempo de jogo" value={`${props.yearsPlaying} anos`} />
            <DuoInfo label="Disponibilidade" value={`${props.weekDays.length} dias \u2022 ${props.hourStart} - ${props.hourEnd}`} />

            <DuoInfo label="Chamada de audio"
                    value={props.useVoiceChannel? "Sim": "Nao"}
                    color={props.useVoiceChannel? '#34D399' : '#F87171'}
                    />

            <Dialog.Root>
                <Dialog.Trigger>
                    <button 
                        type="submit"
                        className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                    >
                        <GameController size={24}/>
                        Conectar
                    </button>
                  </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
                <Dialog.Content className="fixed bg-[#2A2634] text-white rounded-lg
                 min-w-[311px] shadow-lg shadow-black/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-10">
                        <DiscordConnect id={props.id} />
                </Dialog.Content>
            </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}