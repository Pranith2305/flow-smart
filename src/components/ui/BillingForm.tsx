// components/BillingForm.tsx
"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './button';
import { Label } from './label';
import { Input } from './input';
interface FormData {
    title: string;
    amount: number;
    description?: string;
    date: string;
}

const BillingForm: React.FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <Label htmlFor="title">Title</Label>
                <Input
                    id="title"
                    type="text"
                    {...register("title", { required: "Title is required" })}
                />
            </div>

            <div>
                <Label htmlFor="amount">Amount</Label>
                <Input
                    id="amount"
                    type="number"
                    {...register("amount", { required: "Amount is required", min: { value: 0, message: "Amount must be positive" } })}
                />
            </div>

            <div>
                <Label htmlFor="description">Description</Label>
                <Input
                    id="description"
                    type="text"
                    {...register("description")}
                />
            </div>

            <div>
                <Label >Date</Label>
                <Input
                    id="date"
                    type="date"
                    {...register("date", { required: "Date is required" })}
                />
            </div>

            <Button type="submit">Add Billing Entry</Button>
        </form>
    );
};

export default BillingForm;