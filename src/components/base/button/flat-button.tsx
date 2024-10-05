import { Button, ButtonProps } from "@nextui-org/button"
import clsx from "clsx"

export default function FlatButton({
  children,
  className,
  variant,
  radius,
  ...props
}: ButtonProps) {
  return (
    <Button
      className={clsx(
        "grow bg-primary py-6 text-base font-medium text-white",
        className
      )}
      variant={variant || "shadow"}
      radius={radius || "none"}
      {...props}
    >
      {children}
    </Button>
  )
}
