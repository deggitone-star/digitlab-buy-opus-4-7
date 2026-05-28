import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
};

type NativeButtonProps = CommonProps & {
  href?: never;
  external?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

type ButtonProps = LinkButtonProps | NativeButtonProps;

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-tightish " +
  "transition-all duration-200 ease-out select-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-gradient text-white shadow-glow hover:brightness-110 " +
    "active:brightness-95",
  secondary:
    "bg-graphite-700 text-graphite-50 border border-white/10 " +
    "hover:bg-graphite-600 hover:border-white/20",
  ghost:
    "text-graphite-200 hover:text-white hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    icon,
  } = props;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={"disabled" in props ? props.disabled : undefined}
      className={`${classes} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
      {icon}
    </button>
  );
}
