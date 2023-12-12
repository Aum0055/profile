import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export const CardSkill = () => {
    return (
        <Card className="max-w-[80px]">
            <CardHeader className="flex gap-3">
                
                <div className="flex flex-col">
                    <p className="text-md">NextUI</p>
                    <p className="text-small text-default-500">nextui.org</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
            <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                />
            </CardBody>
            <Divider />
            <CardFooter>
              
            </CardFooter>
        </Card>
    );
}