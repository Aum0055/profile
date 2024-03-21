'use client'
import React from 'react'
import { Input } from '@nextui-org/react'
import { useRouter, useSearchParams } from 'next/navigation';

export const SearchParam = ({ query }: { query: string }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const newSearchParams = new URLSearchParams(searchParams);
    const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout | null>(null);
    const [searchQuery, setSearchQuery] = React.useState<string>(query || '');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        // const newValue = event.target.value.toString().trim().toUpperCase();
        const newValue = event.target.value.toString().trim();
        setSearchQuery(newValue);

        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
        const newTimeoutId: NodeJS.Timeout = setTimeout(() => {
            newSearchParams.set('query', newValue.toString().trim().toUpperCase());
            router.replace(`?${newSearchParams}`);
        }, 1000);
        setTimeoutId(() => newTimeoutId);
    };

    return <Input
        value={searchQuery}
        onChange={(e) => handleSearch(e)}
    />

}
