import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import type { Pagination, User } from './models';

const appaxios = axios.create({
    baseURL: "http://localhost:3000"
})



export const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await appaxios.get<Pagination<User>>('/customers');
            return response.data;
        },
    });
}

export const useUser = (id?: string) => {
    return useQuery({
        queryKey: [id],
        enabled: !!id,
        queryFn: async () => {
            const response = await appaxios.get<User>(`/customers/${id}`);
            return response.data;
        },
    });
}

export const useCreate = () => {
    return useMutation({
        mutationFn: async (user: User) => {
            const response = await appaxios.post<User>('/customers', user);
            return response.data;
        }
    })
}

export const useUpdate = () => {
    return useMutation({
        mutationFn: async (user: User) => {
            const response = await appaxios.put<User>(`/customers`, user);
            return response.data;
        },
    });
};