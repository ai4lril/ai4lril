import ProgressBar from "@/components/ProgressBar"

export default function DialogBox() {
    return (
        <div className="w-full mx-auto p-20  sm:px-8 xs:px-4 m-4 h-auto flex flex-col gap-8 items-center justify-center bg-white rounded-lg shadow-lg">
            <p className="text-center text-base sm:text-lg font-semibold break-words mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quis a suscipit at mollitia voluptate expedita harum atque, ex recusandae nesciunt tempora in. Obcaecati numquam sunt possimus perspiciatis, pariatur temporibus.
            </p>
            <ProgressBar progress={50} />
        </div>
    );
}