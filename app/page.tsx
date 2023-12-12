import { Button } from '@nextui-org/button';
import { NavbarNext } from '@/components/tempage/ui';
import { ThemeSwitcher } from '@/components/molecules/ThemeSwitcher';
import { CardSkill } from '@/components/molecules/card';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar, Chip } from "@nextui-org/react";
import { Skills } from '@/components/tempage/skils';
import { Certificate } from '@/components/tempage/certificate';

export default function Home() {

  return (
    <div className='container mx-auto '>
      <NavbarNext />
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
                  // height={500}
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
