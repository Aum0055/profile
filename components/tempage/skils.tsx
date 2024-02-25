'use client'
import { ProgrammingLanguages, CssFrameworks, Frontend, Database, Platforms } from '@/components/data/data';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar } from "@nextui-org/react";
import { SkillsProps } from '@/components/type/type-tempage';
import { useTheme } from 'next-themes';

export const Skills = ({ className }: SkillsProps) => {
    const { theme, setTheme } = useTheme()
    return (

        <div className={`inline lg:flex lg:space-x-4 space-x-0  lg:space-y-0 space-y-4 rounded-2xl p-10 border-double max-w-[1100px] ${className}`}
        // style={{width: 1100}}
        >
            <div>
                <div className='grid grid-cols-3 w-60 gap-4 border rounded-2xl p-4 justify-center dark:border-gray-600'>
                    <p className='col-span-3'>Programming Languages Database</p>
                    <div className='col-span-3'><Divider /> </div>

                    {ProgrammingLanguages.map((item,index) => {
                        return (
                            <div className='w-14 h-14 flex bg-gray-600	justify-center items-center  rounded-lg'
                                style={{ transition: 'height 0.3s ease' }}
                                key={index}
                            >  <Image
                                    alt="nextui logo"
                                    height={40}
                                    width={40}
                                    radius="sm"
                                    src={item.img}
                                    className=''
                                />
                            </div>
                        )
                    })}

                </div>

            </div>
            <div className='space-y-4'>
                <div className={`grid grid-cols-3 w-60 gap-4 border rounded-2xl p-4 justify-center dark:border-gray-600`}>
                    <p className='col-span-3'>Front-End JavaScript Libraries and Frameworks</p>
                    <div className='col-span-3'><Divider /> </div>
                    {Frontend.map((item,index) => {
                        return (
                            <div className='w-14 h-14 flex bg-gray-600	justify-center items-center  rounded-lg shadow-inner'
                                style={{ transition: 'height 0.3s ease' }}
                                key={index}
                            >  <Image
                                    alt="nextui logo"
                                    height={40}
                                    width={40}
                                    radius="sm"
                                    src={item.img}
                                    isBlurred
                                />
                            </div>
                        )
                    })}
                </div>
                <div className='grid grid-cols-3 w-60 gap-4 border rounded-2xl p-4 justify-center dark:border-gray-600'>
                    <p className='col-span-3'>Database Management Systems and ORMs</p>
                    <div className='col-span-3'><Divider /> </div>
                    {Database.map((item,index) => {
                        return (
                            <div className='w-14 h-14 flex bg-gray-600	justify-center items-center  rounded-lg'
                                style={{ transition: 'height 0.3s ease' }}
                                key={index}
                            >  <Image
                                    alt="nextui logo"
                                    height={40}
                                    width={40}
                                    radius="sm"
                                    src={item.img}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <div className='grid grid-cols-3 w-60 gap-4 border rounded-2xl p-4 justify-center dark:border-gray-600'>
                    <p className='col-span-3'>CSS Frameworks</p>
                    <div className='col-span-3'><Divider /> </div>
                    {CssFrameworks.map((item,index) => {
                        return (
                            <div className='w-14 h-14 flex bg-gray-600	justify-center items-center  rounded-lg'
                                style={{ transition: 'height 0.3s ease' }}
                                key={index}
                            >  <Image
                                    alt="nextui logo"
                                    height={40}
                                    width={40}
                                    radius="sm"
                                    src={item.img}

                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <div className='grid grid-cols-3 w-60 gap-4 border rounded-2xl p-4 justify-center items-center dark:border-gray-600'>
                    <p className='col-span-3'>Tools and Platforms:</p>
                    <div className='col-span-3'><Divider /> </div>
                    <div className='w-14 h-14 flex bg-gray-600	justify-center items-center rounded-lg'
                        style={{ transition: 'height 0.3s ease' }}
                    >  <Image
                            alt="nextui logo"
                            height={40}
                            width={30}
                            radius="sm"
                            src='/skills/Firebase.png'

                        />
                    </div>
                    {Platforms.map((item,index) => {
                        return (
                            <div className='w-14 h-14 flex bg-gray-600	justify-center items-center rounded-lg'
                                style={{ transition: 'height 0.3s ease' }}
                                key={index}
                            >  <Image
                                    alt="nextui logo"
                                    height={40}
                                    width={40}
                                    radius="sm"
                                    src={item.img}

                                />
                            </div>
                        )
                    })}
                    <div className='w-14 h-14 flex bg-gray-600	justify-center items-center rounded-lg'
                        style={{ transition: 'height 0.3s ease' }}
                    >  <Image
                            alt="nextui logo"
                            height={40}
                            width={30}
                            radius="sm"
                            src='/skills/Figma.png'

                        />
                    </div>
                </div>
            </div>
        </div>

    )
}