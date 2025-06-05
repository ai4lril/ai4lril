"use client";

import TextBox from "@/components/TextBox";

export default function question() {
    return (
        <div className="flex flex-col items-center w-full h-full justify-center gap ">

            <p className="mt-7 sm:mt-3">Add a question for people to answer.</p>

            <div className="w-full flex justify-center max-w-[800px] mx-auto bg-blue-500">
                <TextBox />
                <div className="w-50">
                    What questions can I add?
                    do
                    Use correct spelling and grammar
                    Choose simple questions that are easy for anyone to understand, regardless of culture or context
                    Make sure they can be answered in just a couple of sentences
                    do not
                    Solicit personally identifying information (like names or financial information)
                    Express or solicit prejudiced or offensive sentiments
                    Ask sensitive questions
                </div>
            </div>
            <div>
                <button>submit</button>
            </div>
      
        </div>
    )
}
