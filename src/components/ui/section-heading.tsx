import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
  eyebrow?: string;
};

export function SectionHeading({ title, subtitle, className, align = 'center', eyebrow }: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-16 md:mb-20",
      align === 'center' && "max-w-3xl mx-auto text-center",
      align === 'left' && "max-w-2xl",
      className
    )}>
      {eyebrow && (
        <span className="inline-block text-xs tracking-[0.3em] uppercase text-accent font-medium mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className={cn(
        "font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1] tracking-tight",
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-5 text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed",
          align === 'center' && "max-w-2xl mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
