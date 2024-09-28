import clsx from "clsx"

export interface SliderProps<T> {
  items: T[]
  renderItem: (props: T & { key: string | number }) => React.JSX.Element
  className?: string
}

export default function Slider<T>({
  items,
  renderItem,
  className,
}: SliderProps<T>) {
  return (
    <div
      className={clsx(
        "inline-flex flex-nowrap gap-2 [&>*]:flex-none",
        "no-scrollbar max-w-full overflow-x-scroll",
        className
      )}
    >
      {items.map((props, index) => renderItem({ ...props, key: "-" + index }))}
    </div>
  )
}
