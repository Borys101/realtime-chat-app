"use client";

import React, { useEffect } from "react";
import {
    ClerkProvider,
    RedirectToSignIn,
    SignedIn,
    SignedOut,
    SignIn,
    useAuth,
} from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Authenticated, AuthLoading, ConvexReactClient } from "convex/react";
import LoadingLogo from "@/components/shared/LoadingLogo";
import { useRouter } from "next/navigation";

type Props = {
    children: React.ReactNode;
};

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";

const convex = new ConvexReactClient(CONVEX_URL);

const ConvexClientProvider = ({ children }: Props) => {
    const router = useRouter();
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                <SignedIn>{children}</SignedIn>
                <SignedOut>
                    {/* <SignIn path="/sign-in" routing="path" /> */}
                    <RedirectToSignIn />
                </SignedOut>
                <AuthLoading>
                    <LoadingLogo />
                </AuthLoading>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
};

export default ConvexClientProvider;
