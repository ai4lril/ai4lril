"use client";

export default function Profile() {
    const profileData = {
        user: {
            name: "John Doe",
            email: "john.doe@example.com",
        },
        stats: {
            voiceSamples: 157,
            totalTime: "4h 32m",
            qualityScore: "92%",
            languages: 3,
        },
    };

    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="flex w-full xs:flex-row items-center justify-between rounded-xl border border-blue-300/30 bg-gradient-to-br from-blue-100 to-purple-100 p-8 shadow-2xl">
                <div>
                    <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                        <span className="text-3xl text-white">🎤</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        {profileData.user.name}
                    </h2>
                    <p className="text-sm text-blue-600">
                        {profileData.user.email}
                    </p>
                </div>
                <div className="xs:flex-row xs:gap-2 xs:divide-y-0 xs:divide-x flex flex-col gap-6 divide-y divide-blue-300/30">
                    <div className="xs:text-left xs:py-0 xs:px-6 xs:first:pl-0 xs:last:pr-0 py-4 text-center first:pt-0 last:pb-0">
                        <p className="text-sm font-medium text-blue-600">
                            Voice Samples
                        </p>
                        <p className="text-2xl font-bold text-gray-800 md:text-xl">
                            {profileData.stats.voiceSamples}
                        </p>
                    </div>
                    <div className="xs:text-left xs:py-0 xs:px-6 py-4 text-center">
                        <p className="text-sm font-medium text-blue-600">
                            Total Time
                        </p>
                        <p className="text-2xl font-bold text-gray-800 md:text-xl">
                            {profileData.stats.totalTime}
                        </p>
                    </div>
                    <div className="xs:text-left xs:py-0 xs:px-6 py-4 text-center">
                        <p className="text-sm font-medium text-blue-600">
                            Quality Score
                        </p>
                        <p className="text-2xl font-bold text-gray-800 md:text-xl">
                            {profileData.stats.qualityScore}
                        </p>
                    </div>
                    <div className="xs:text-left xs:py-0 xs:px-6 xs:last:pr-0 py-4 text-center last:pb-0">
                        <p className="text-sm font-medium text-blue-600">
                            Languages
                        </p>
                        <p className="text-2xl font-bold text-gray-800">
                            {profileData.stats.languages}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
