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

const SigninPage = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="container max-w-3xl">
        {/* Card Sign in Form */}
        <CardWrapperAuth
          titleHeader="Sign in to Boxsauthy"
          subTitleHeader="Let's sign in to your session 🚀"
          titleFooter="Don't have an account?"
          labelFooter="Sign up"
          hrefFooter="/auth/signup"
        >
          <div className="space-y-6">
            {/* OAuth Authentication */}
            <Suspense fallback={<OAuthSigninButtonSkeleton />}>
              <OAuthSigninButton />
            </Suspense>

            {/* Or */}
            <div className="flex items-center justify-center gap-x-6">
              <Separator className="flex-1" />
              <span className="text-muted-foreground">or</span>
              <Separator className="flex-1" />
            </div>

            {/* Email Authentication */}
            <Suspense fallback={<EmailSigninButtonSkeleton />}>
              <EmailSigninButton />
            </Suspense>
          </div>
        </CardWrapperAuth>
      </div>
    </main>
  );
};

export default SigninPage;
