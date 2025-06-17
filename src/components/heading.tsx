import type { FC } from "react";
import { cn } from "@/lib/utils";

import { type VariantProps, cva } from "class-variance-authority";

const headingVariants = cva("text-center lg:text-start uppercase font-bold", {
  variants: {
    size: {
      h2: "text-[40px] leading-[44px] tracking-[1.5px]",
      h3: "text-[32px] leading-[36px] tracking-[1.15px]",
      h4: "text-[28px] leading-[38px] tracking-[2px]",
      h5: "text-[24px] leading-[33px] tracking-[1.7px]",
      h6: "text-[18px] leading-[24px] tracking-[1.3px]",
      subtitle: "text-[13px] leading-[25px] tracking-[1px]",
      "nav-link": "text-[13px] leading-[25px] tracking-[2px]",
    },
  },
  defaultVariants: {
    size: "h2",
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading: FC<HeadingProps> = ({ children, className, size, ...props }) => {
  return (
    <h1 {...props} className={cn(headingVariants({ size, className }))}>
      {children}
    </h1>
  );
};

Heading.displayName = "Heading";

export default Heading;
