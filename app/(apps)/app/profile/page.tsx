import { Certificate } from '@/components/tempage/certificate'
import { Skills } from '@/components/tempage/skils'
import { Chip, Divider } from '@nextui-org/react'
import Image from 'next/image'

export default function Page() {
    return (
        <div className='container mx-auto '>
            <div className='flex flex-col space-y-4'>
                <div>
                    <Chip
                        color="success"
                        variant="dot"
                        className='capitalize border-none gap-1 text-default-600 text-lg mb-2'
                    >
                        Skill
                    </Chip>
                    <div className='border-none rounded-2xl p-4'>
                        <div className='flex justify-center '>
                            <Skills />
                        </div>
                    </div>
                </div>
                <Divider className="my-4" />
                <div>
                    <Chip
                        color="success"
                        variant="dot"
                        className='capitalize border-none gap-1 text-default-600 text-lg mb-2'
                    >
                        Resume
                    </Chip>
                    <div className='border-none rounded-2xl p-4'>
                        <div className='flex justify-center'>
                            <div className='border-none rounded-2xl'>
                                <Image
                                    alt="NextUI hero Image"
                                    src="/certificate/resume.jpg"
                                    height={500}
                                    width={700}
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <Divider className="my-4" />
                <div>
                    <Chip
                        color="success"
                        variant="dot"
                        className='capitalize border-none gap-1 text-default-600 text-lg mb-2'
                    >
                        Certificate
                    </Chip>
                    <div className='border-none rounded-2xl p-4'>
                        <div className='flex justify-center'>
                            <Certificate />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
