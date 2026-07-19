import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "contrast";

type ButtonStyleProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

export type LinkButtonProps = ButtonStyleProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonStyleProps | "disabled"> & {
    href: string;
    disabled?: never;
  };

export type ActionButtonProps = ButtonStyleProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonStyleProps> & {
    href?: never;
  };

export type ButtonProps = LinkButtonProps | ActionButtonProps;

const variants = {
  primary:
    "border-accent-cta bg-accent-cta text-white shadow-foundation-button hover:border-pink-dark hover:bg-pink-dark hover:text-white",
  secondary:
    "border-border-default bg-surface-page text-ink hover:border-accent-cta hover:bg-blush/50 hover:text-ink",
  ghost:
    "border-transparent bg-transparent text-ink hover:border-border-default hover:bg-accent-muted hover:text-ink",
  contrast:
    "border-accent-cta bg-accent-cta text-cta-contrast-text shadow-foundation-button hover:border-pink-dark hover:bg-pink-dark hover:text-cta-contrast-text",
};

export function Button(props: ButtonProps) {
  const baseClasses =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-foundation-control border px-5 py-3 text-center text-sm font-semibold leading-5 transition-all duration-foundation focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus";

  if (typeof props.href === "string") {
    const {
      children,
      className = "",
      variant = "primary",
      rel,
      target,
      ...linkProps
    } = props;

    return (
      <a
        className={`${baseClasses} ${variants[variant]} ${className}`}
        rel={target === "_blank" && !rel ? "noopener noreferrer" : rel}
        target={target}
        {...linkProps}
      >
        {children}
      </a>
    );
  }

  const {
    children,
    className = "",
    variant = "primary",
    disabled = false,
    type = "button",
    ...buttonProps
  } = props;

  return (
    <button
      className={`${baseClasses} ${
        disabled
          ? "cursor-not-allowed border-border-default bg-surface-soft text-text-muted opacity-80"
          : variants[variant]
      } ${className}`}
      disabled={disabled}
      type={type}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
