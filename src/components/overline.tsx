import * as React from "react";

import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const overlineVariants = cva(
  "uppercase font-normal text-center lg:text-start",
  {
    variants: {
      size: {
        default: "text-[14px] leading-[19px] tracking-[10px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof overlineVariants> {}

const OverlineText = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(overlineVariants({ size, className }))}
      >
        {children}
      </p>
    );
  }
);

OverlineText.displayName = "Paragraph";

export default OverlineText;
