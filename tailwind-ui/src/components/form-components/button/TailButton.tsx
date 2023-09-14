import { ButtonHTMLAttributes, useMemo } from "react";
import CSSProvider from "src/hoc/CSSProvider";

interface SelfProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant: 'PRIMARY' | 'SECONDARY' | 'LIGHT_BLUE' | 'LIGHT' | 'BASIC';
  size: 'sm' | 'md' | 'lg' | 'full'
}

const TailButton = ({title, size, variant}: SelfProps) => {
  const classes = useMemo(() => {
    const variantClasses = [];
    const sizeClasses = [];
    let inVariant = variant || 'BASIC';
    switch (inVariant) {
      case "SECONDARY":
        variantClasses.push('bg-secondary text-white hover:bg-primary')
        break;
      case "BASIC":
        variantClasses.push('bg-accent-black text-black hover:bg-accent-black-light')
        break;
    }

    return [...variantClasses].join(' ')
  }, [variant, size]);

  return <button className={`p-1 rounded-xsm text-base transition-all font-rubik ${classes}`}>
    {title}
  </button>
}

export default CSSProvider(TailButton)