import { Suspense } from "react";

import { Separator } from "@/components/ui/separator";
import { CardWrapperAuth } from "@/components/page/auth/card-wrapper-auth";
import {
  EmailSigninButton,
  EmailSigninButtonSkeleton,
} from "@/components/page/auth/email-signin-button";
import {
  OAuthSigninButton,
  OAuthSigninButtonSkeleton,
} from "@/components/page/auth/oauth-signin-button";

const SignupPage = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="container max-w-3xl">
        {/* Alert */}
        <div className="mx-auto mb-4 max-w-[30rem]">
          <div className="space-y-1 rounded-lg bg-primary-foreground p-6">
            <h2 className="text-primary-background text-lg font-semibold">
              🚀 Welcome to Boxsauthy!
            </h2>
            <p className="text-sm text-muted-foreground">
              We are excited to have you here! Let&apos;s create your account
              and get started with the platform.
            </p>
          </div>
        </div>

        {/* Card Sign in Form */}
        <CardWrapperAuth
          titleHeader="Sign up to Boxsauthy"
          subTitleHeader="Let's create your account 🚀"
          titleFooter="Already have an account?"
          labelFooter="Sign in"
          hrefFooter="/auth/signin"
        >
          <div className="space-y-6">
            {/* OAuth Authentication */}
            <Suspense fallback={<OAuthSigninButtonSkeleton />}>
              <OAuthSigninButton Signup />
            </Suspense>

            {/* Or */}
            <div className="flex items-center justify-center gap-x-6">
              <Separator className="flex-1" />
              <span className="text-muted-foreground">or</span>
              <Separator className="flex-1" />
            </div>

            {/* Email Authentication */}
            <Suspense fallback={<EmailSigninButtonSkeleton />}>
              <EmailSigninButton Signup />
            </Suspense>
          </div>
        </CardWrapperAuth>
      </div>
    </main>
  );
};
export default SignupPage;
