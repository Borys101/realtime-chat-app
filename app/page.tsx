import {
    SignedIn,
    SignedOut,
    RedirectToSignIn,
    UserButton,
} from "@clerk/nextjs";

export default function Home() {
    return (
        <>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
}
