import RecordBtn from "./RecordBtn";

export default function DialogBox() {


    return (
        <div className="w-full max-w-[800px] mx-auto max-h-90 min-h-90 sm:px-8 p-8 xs:px-4 m-4 h-[420px] flex flex-col gap-4 items-center justify-between bg-white rounded-sm shadow-2xl">

            <div className="flex items-center justify-center h-full">
                <p
                    className="text-center font-semibold break-words "
                    style={{
                        fontSize: 'clamp(0.85rem, 2vw, 1.25rem)',
                        lineHeight: '1.4',
                    }}
                >
                    ex recusandae nesciunt tempora in. Obcaecati numquam sunt possimatur temporibus.
                </p>
            </div>

            

        </div>
    );
}