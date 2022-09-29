import { GameAds } from "./GameBanner"
import { DuoInfo } from './DuoInfo';
import { GameController } from "phosphor-react";

export function GameAdBanner (props : GameAds) {

    return (
        <div  className="w-52 bg-[#1e1b25] rounded-lg p-5 align-center drop-shadow-2xl">
            <DuoInfo label="Nome" value={props.name} />
            <DuoInfo label="Tempo de jogo" value={`${props.yearsPlaying} anos`} />
            <DuoInfo label="Disponibilidade" value={`${props.weekDays.length} dias \u2022 ${props.hourStart} - ${props.hourEnd}`} />

            <DuoInfo label="Chamada de audio"
                    value={props.useVoiceChannel? "Sim": "Nao"}
                    color={props.useVoiceChannel? '#34D399' : '#F87171'}
                    />

                <button 
                    type="submit"
                    className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                  >
                    <GameController size={24}/>
                    Conectar
                  </button>
        </div>
    )
}