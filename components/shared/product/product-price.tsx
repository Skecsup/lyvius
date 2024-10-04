import { cn } from '@/lib/utils'

const ProductPrice = ({
  value,
  className,
}: {
  value: string
  className?: string
}) => {
  const [intValue, floatValue] = value.includes('.')
    ? value.split('.')
    : [value, '']
  return (
    <p className={cn('text-2xl', className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">{floatValue}</span>
    </p>
  )
}

export default ProductPrice
