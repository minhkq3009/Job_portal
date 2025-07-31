import clsx from 'clsx';

const LABEL_VARIANTS = {
  primary: 'bg-blue-100 text-blue-600',
  default: 'text-gray-800',
  success: 'bg-green-100 text-green-600',
  warning: 'bg-yellow-100 text-yellow-600',
  danger: 'bg-red-100 text-red-600',
};

export default function LabelTag({ label = 'Featured', variant = 'default' }) {
  return (
    <span
      className={clsx(
        'inline-block px-3 py-[3px] rounded-full text-sm font-normal',
        LABEL_VARIANTS[variant] || LABEL_VARIANTS.default
      )}
    >
      {label}
    </span>
  );
}
