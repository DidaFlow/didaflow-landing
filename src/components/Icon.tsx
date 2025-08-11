import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface IconProps {
  icon: IconDefinition
  className?: string
  size?: 'xs' | 'sm' | 'lg' | 'xl' | '2xl'
  'aria-hidden'?: boolean
  title?: string
}

export default function Icon({ icon, className = '', size, ...props }: IconProps) {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={className}
      size={size}
      {...props}
    />
  )
}