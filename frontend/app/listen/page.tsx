"use client"

import DialogBox from "@/components/DialogBox";
import BottomBar from "@/components/BottomBar";
import { useEffect, useState } from "react";
import { codeToLabel } from "@/lib/languages";
import { getPreferredLanguage } from "@/lib/langPreference";

export default function Listen() {
    const [lang, setLang] = useState<string | null>(null);

    useEffect(() => {
        const saved = getPreferredLanguage();
        setLang(saved);
        function onLangChanged(e: Event) {
            const code = (e as CustomEvent<string>).detail;
            setLang(code);
        }
        window.addEventListener('language-changed', onLangChanged as EventListener);
        return () => window.removeEventListener('language-changed', onLangChanged as EventListener);
    }, []);
    return (
        <div className="flex flex-col items-center w-full h-full justify-center gap animate-fade-in-up">
            <p className="mt-7 sm:mt-3 text-center animate-bounce-in">click <span className="inline-flex animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-blue-600 hover:scale-110 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                </svg>
            </span> to see if accurately spoke the sentence </p>
            <div className="w-full card-wide mx-auto my-2 relative flex flex-col animate-slide-in-left">
                <div className="text-center mb-2">
                    <span className="inline-block text-xs px-3 py-2 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium animate-bounce-in">{codeToLabel(lang)}</span>
                </div>
                <div className="w-full relative">
                {/* Always show the gradient border, even if the card is short */}
                <div className="absolute left-0 top-0 h-full w-[5px] sm:w-[6px] rounded-l-2xl bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 shadow-lg z-10"></div>
                <div className="flex-1 min-h-[40vh] max-h-fit sm:px-8 p-8 xs:px-4
                      flex flex-col items-center justify-around 
                      glass rounded-r-2xl shadow-2xl relative z-20 border border-gray-100 ml-[5px] sm:ml-[5px]">
                    <DialogBox />
                    <div className="flex gap-8">
                        <button className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl rounded-full px-8 py-4 font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 border-2 border-green-400 hover:border-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-5 transition-transform group-hover:scale-110">
                                <path d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>
                            <span>Yes</span>
                        </button>
                        <button className="group bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl rounded-full px-8 py-4 font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 border-2 border-red-400 hover:border-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-5 transition-transform group-hover:scale-110">
                                <path d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>
                            <span>No</span>
                        </button>
                    </div>
                </div>
                </div>
            </div>

            <BottomBar
                onSkip={() => { }}
                onSubmit={() => { }}
            />

        </div>
    )
}