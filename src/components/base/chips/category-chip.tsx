import { Avatar } from "@nextui-org/avatar"
import { Chip } from "@nextui-org/chip"

export interface CategoryChipProps {
  id: string
  name: string
}

export const CategoryChip: React.FC<CategoryChipProps> = ({ name }) => {
  return (
    <Chip
      size="lg"
      variant="light"
      classNames={{
        base: "relative h-max",
        content: "flex items-center flex-col justify-center",
      }}
    >
      <Avatar size="lg" />
      {name}
    </Chip>
  )
}
