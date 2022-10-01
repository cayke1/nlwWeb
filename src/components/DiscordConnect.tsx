import { CheckCircle, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from 'react';

interface DiscordConnectProps {
    id: string,
}

interface DiscordReqProps {
    discord: string,
}

export function DiscordConnect({id}: DiscordConnectProps) {
    const [discordNick, setDiscordNick] = useState<DiscordReqProps>();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/ads/${id}/discord`)
        .then(response => response.json())
        .then(data => {
            setDiscordNick(data);
        })
      }, []); 

    return (
        <div className="flex flex-col align-center w-full">
            <Dialog.Close><X className="float-right"/></Dialog.Close>
            <div className="px-8 py-10">
            <div className="text-emerald-400 mt-[-50px] mx-auto w-16"><CheckCircle size={64}/></div>

            <h1 className="mt-6 text-2xl font-bold text-center">Let's play!</h1>
            <p className="text-zinc-400 text-center text-sm">Agora e so começar a jogar!</p>

            <p className="font-bold text-center text-lg mt-6">Adicione no Discord</p>

            <div className="flex flex-row justify-center align-center gap-8 w-[231px] h-[48px] px-[11px] py-4 bg-zinc-900 rounded mt-2 text-center text-zinc-200">
                <p className="text-lg">{discordNick ? discordNick.discord : "Não encontrado"}</p>
            </div>
            </div>
        </div>
    )
}