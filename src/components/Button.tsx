import { ComponentPropsWithRef, ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps<T extends ElementType> {
  as?: T;
}

export default function Button<T extends ElementType = "button">({
  as,
  ...props
}: ButtonProps<T> & Omit<ComponentPropsWithRef<T>, keyof ButtonProps<T>>) {
  const Component = as || "button";

  return (
    <Component
      {...props}
      className={twMerge(
        "flex items-center justify-center gap-2 rounded bg-blue-500 p-[0.875rem] text-white active:bg-blue-600 disabled:bg-gray-200",
        props.className
      )}
    />
  );
}
