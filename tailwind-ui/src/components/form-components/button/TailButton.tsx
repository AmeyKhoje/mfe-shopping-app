import { ButtonHTMLAttributes } from "react";
import CSSProvider from "src/hoc/CSSProvider";
import { getIcon } from "src/utils/Icons";
import { buttonSizes, buttonVariants, iconSize, roundedSizes, textColor } from "./Config";

interface SelfProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant: 'primary' | 'secondary' | 'basic' | 'dark'
  size: 'sm' | 'md' | 'lg' | 'fullSm' | 'full',
  rounded: 'xsm' | 'sm' | 'md' | 'all' | 'none',
  icon: {
    position: 'left' | 'right',
    type: any
  },
  extraClasses: string
}

const TailButton = ({
  title,
  size,
  variant = 'basic',
  rounded = 'all',
  icon,
  extraClasses
}: SelfProps) => {
  return (
    <button className={`
      ${roundedSizes[rounded]} flex items-center
      ${icon && 'justify-between'} transition-all font-rubik
      ${buttonVariants[variant]}
      ${textColor[variant]}
      ${buttonSizes[size] || 'btn'}
      ${extraClasses}
    `}>
      {!!icon && icon.position === 'left' && (
        <div className="mr-1">
          {getIcon(icon.type, iconSize[size || 'base'], textColor[variant])}
        </div>
      )}
      <div>
        {title}
      </div>
      {!!icon && icon.position === 'right' && (
        <div className="ml-1">
          {getIcon(icon.type, iconSize[size || 'base'], textColor[variant])}
        </div>
      )}
    </button>
  )
}

export default CSSProvider(TailButton)