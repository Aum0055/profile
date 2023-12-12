import React from "react";
import { Image } from "@nextui-org/react";

export const Certificate = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <div className="border rounded-2xl">
                <Image
                    alt="NextUI hero Image"
                    src="/certificate/js.jpg"
                />
            </div>
            <div className="border rounded-2xl">
                <Image
                    alt="NextUI hero Image"
                    src="/certificate/ts.jpg"
                />
            </div>
        </div>
    )
}