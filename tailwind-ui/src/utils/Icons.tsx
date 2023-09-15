import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const icons: any = {
  chevronRight: ChevronRightIcon,
  chevronLeft: ChevronLeftIcon,
  chevronTop: ChevronUpIcon,
  chevronBottom: ChevronDownIcon,
  heart: HeartIcon,
}

export const getIcon = (name: string, size: number, color: string = 'text-black') => {
  const Icon = icons[name];
  if (Icon) {
    return <Icon className={`${size} ${color}`} strokeWidth={'0.3rem'} />
  }
  return null
}