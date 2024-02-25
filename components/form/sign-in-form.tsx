"use client"
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Button, Input } from '@nextui-org/react';
import { EyeFilledIcon } from '@/components/icon/eye-filled-icon';
import { EyeSlashFilledIcon } from '@/components/icon/eye-slash-filled-icon';
import { SignInType, signInSchema } from './z-schema-type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

export const SignInForm = () => {
    const { handleSubmit, control } = useForm<SignInType>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });
    const { push } = useRouter();
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const onSubmit = async (data: SignInType) => {
        // setIsLoading(true);
        const res = await fetch('/auth/sign-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
        });
        const body = await res.json()
        if (body.status === 'success') {
            push('admin')
        }
        console.log({ body });

    };

    return (
        <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, name } }) => {
                            return (<>
                                <Input
                                    type="email"
                                    label="Email"
                                    variant="bordered"
                                    radius='sm'
                                    placeholder="Enter your email"
                                    onChange={onChange}
                                />
                            </>)
                        }
                        }
                    />
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, name } }) => {
                            return <Input
                                label="Password"
                                variant="bordered"
                                placeholder="Enter your password"
                                onChange={onChange}
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                        {isVisible ? (
                                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        ) : (
                                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        )}
                                    </button>
                                }
                                type={isVisible ? "text" : "password"}
                            />
                        }}
                    />
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Continue with
                            </span>
                        </div>
                    </div>
                    <Button radius='sm' color='primary' type='submit' isLoading={isLoading}>
                        Sign In
                    </Button>
                </div>
            </form>
        </div>
    )
}
