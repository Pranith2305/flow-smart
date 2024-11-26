// app/(routes)/billing/page.tsx
import BillingForm from "@/components/ui/BillingForm";
import React from "react";

const BillingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
            <h1 className="text-2xl font-bold mb-6">Billing Management</h1>
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <BillingForm />
            </div>
        </div>
    );
};

export default BillingPage;