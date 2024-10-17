import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface EmailSigninButtonProps {
  Signup?: boolean;
  OAuth?: boolean;
}

export const EmailSigninButton = ({
  OAuth,
  Signup,
}: EmailSigninButtonProps) => {
  const text = Signup ? "Sign up" : "Sign in";
  const provider = OAuth ? "OAuth" : "Email";

  return (
    <div>
      <Button
        type="button"
        variant="outline"
        size="lg"
        className="w-full"
        disabled
      >
        <span>
          {text} with {provider} (Coming soon)
        </span>
      </Button>
    </div>
  );
};

export const EmailSigninButtonSkeleton = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="h-11 w-full" />
      {/* <Button
        type="button"
        variant="outline"
        size="lg"
        className="w-full"
        disabled
      >
        <Skeleton className="mr-2 size-4 rounded-full" />
        <Skeleton className="h-4 w-32" />
      </Button> */}
    </div>
  );
};
