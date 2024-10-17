import { BoxsLogo } from "@/components/misc/boxs-logo";

interface CardWrapperAuthHeaderProps {
  title: string;
  subTitle: string;
}

export const CardWrapperAuthHeader = ({
  subTitle,
  title,
}: CardWrapperAuthHeaderProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center text-center">
      <BoxsLogo className="mb-10 size-14 fill-current" />
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-muted-foreground">{subTitle}</p>
      </div>
    </div>
  );
};
