import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12 md:mb-16 max-w-3xl mx-auto", className)}>
      <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground font-body">
          {subtitle}
        </p>
      )}
    </div>
  );
}
