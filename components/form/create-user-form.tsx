"use client"
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateUserType, createUserSchema } from './z-schema-type';

let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;


export const CreateUserForm = () => {
    const { handleSubmit, setError, control, formState: { errors } } = useForm<CreateUserType>({
        resolver: zodResolver(createUserSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
            permission: '',
        }
    });
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const validate = (data: CreateUserType) => {
        const { password, confirmPassword } = data;
        if (password !== confirmPassword) {
            setError('confirmPassword', { message: 'Please confirm the password correctly.' })
            return false
        } return true
    }

    const onSubmit = async (data: CreateUserType) => {
        if (validate(data)) {
            const res = await fetch('/auth/create-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                    user_metadata: {
                        division: "admin",
                        position: "admin",
                        username: "tit1579"
                    }
                }),
            });
            const body = await res.json()
            console.log(body);

            if (body.status === 'success') {
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
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
                                color={errors[name] ? 'danger' : 'default'}
                                placeholder="Enter your email"
                                onChange={onChange}
                            />
                            <p className='text-red-500 text-sm font-medium'>{errors[name]?.message}</p>
                        </>)
                    }
                    }
                />

                <Controller
                    control={control}
                    name="permission"
                    render={({ field: { onChange, name } }) => {
                        return <>
                            <Select
                                placeholder="Select a permission"
                                label="Select a permission"
                                variant='bordered'
                                radius='sm'
                                color={errors[name] ? 'danger' : 'default'}
                                onChange={onChange}
                            >
                                <SelectItem key='admin' value='admin'>
                                    Admin
                                </SelectItem>
                                <SelectItem key='user' value='user'>
                                    User
                                </SelectItem>
                            </Select>
                            <p className='text-red-500 text-sm font-medium'>{errors[name]?.message}</p>
                        </>
                    }}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, name } }) => {
                        return <>
                            <Input
                                type="password"
                                label="Password"
                                variant="bordered"
                                radius='sm'
                                color={errors[name] ? 'danger' : 'default'}
                                placeholder="Enter your password"
                                onChange={onChange}
                            />
                            <p className='text-red-500 text-sm font-medium'>{errors[name]?.message}</p>
                        </>
                    }}
                />
                <Controller
                    control={control}
                    name="confirmPassword"
                    render={({ field: { onChange, name } }) => {
                        return <>
                            <Input
                                type="password"
                                label="Password"
                                variant="bordered"
                                radius='sm'
                                color={errors[name] ? 'danger' : 'default'}
                                placeholder="Enter your confirm password"
                                onChange={onChange}
                            />
                            <p className='text-red-500 text-sm font-medium'>{errors[name]?.message}</p>
                        </>
                    }}
                />
            </div>
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
            <Button className='w-full' radius='sm' color='primary' type='submit' isLoading={isLoading}>
                Create user
            </Button>
        </form>
    )
}
