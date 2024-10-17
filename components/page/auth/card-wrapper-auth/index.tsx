import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CardWrapperAuthFooter } from "@/components/page/auth/card-wrapper-auth/card-wrapper-auth-footer";
import { CardWrapperAuthHeader } from "@/components/page/auth/card-wrapper-auth/card-wrapper-auth-header";

interface CardWrapperAuthProps {
  children: React.ReactNode;
  titleHeader: string;
  subTitleHeader: string;
  titleFooter: string;
  labelFooter: string;
  hrefFooter: string;
}

export const CardWrapperAuth = ({
  children,
  hrefFooter,
  labelFooter,
  subTitleHeader,
  titleFooter,
  titleHeader,
}: CardWrapperAuthProps) => {
  return (
    <Card className="mx-auto max-w-[30rem] bg-foreground/5 filter backdrop-blur">
      <CardHeader>
        <CardWrapperAuthHeader subTitle={subTitleHeader} title={titleHeader} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <CardWrapperAuthFooter
          href={hrefFooter}
          label={labelFooter}
          title={titleFooter}
        />
      </CardFooter>
    </Card>
  );
};
