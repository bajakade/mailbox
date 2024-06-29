import Link from "next/link";

interface Props  {
    label: string;
}
type LinkProps = Props & {
    href: string;
}

type ButtonProps = Props & {
    onClick: () => void;
 }

const className = 'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'

export const ButtonLink = ({label, href}: LinkProps) => {
    return (
        <Link className={className} href={href}>
        {label}
        </Link>
    )
}

export const Button = ({label, onClick}: ButtonProps) => {
    return (
        <button
        onClick={onClick}
        className={className}
      >
        {label}
      </button>
    )
}