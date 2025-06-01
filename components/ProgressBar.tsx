"use client";

import { Stepper, Button } from "@mantine/core";

export default function ProgressBar({ progress }: { progress: number }) {
    return (
        <div className="w-full flex sm:flex-row flex-col items-center justify-center sm:space-x-30">
            <div className="w-full max-w-md px-2">
                <Stepper
                    size="xs"
                    active={0}

                >
                    <Stepper.Step />
                    <Stepper.Step />
                    <Stepper.Step />
                    <Stepper.Step />
                    <Stepper.Step />
                </Stepper>
            </div>
            <div className="py-10 sm:p-0">
                <Button variant="outline" color="blue">
                    Skip
                </Button>
            </div>
        </div>
    );
}
