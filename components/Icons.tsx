export type IconName =
  | "spark"
  | "layers"
  | "bolt"
  | "layout"
  | "target"
  | "quote"
  | "mail"
  | "instagram"
  | "phone"
  | "message"
  | "check"
  | "alert"
  | "wand"
  | "clock"
  | "globe"
  | "chart";

type IconProps = {
  name: IconName;
  className?: string;
};

export default function Icon({ name, className }: IconProps) {
  switch (name) {
    case "spark":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 3l1.6 3.6L17 8l-3.4 1.4L12 13l-1.6-3.6L7 8l3.4-1.4L12 3z" />
          <path d="M19 14l.9 2 2.1.9-2.1.9L19 20l-.9-2.2L16 16.9l2.1-.9L19 14z" />
        </svg>
      );
    case "layers":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 4l8 4-8 4-8-4 8-4z" />
          <path d="M4 12l8 4 8-4" />
          <path d="M4 16l8 4 8-4" />
        </svg>
      );
    case "bolt":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      );
    case "layout":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 9v11" />
        </svg>
      );
    case "target":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 8v4l3 3" />
        </svg>
      );
    case "quote":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M7 7h4v5H8l-1 4H5l2-9zM15 7h4v5h-3l-1 4h-2l2-9z" />
        </svg>
      );
    case "mail":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="1.2" />
        </svg>
      );
    case "phone":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="7" y="2.5" width="10" height="19" rx="2" />
          <path d="M10 6h4" />
          <circle cx="12" cy="18" r="0.8" />
        </svg>
      );
    case "message":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4 5h16v10H8l-4 4V5z" />
        </svg>
      );
    case "check":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      );
    case "alert":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 4l9 16H3l9-16z" />
          <path d="M12 9v4" />
          <circle cx="12" cy="17" r="0.8" />
        </svg>
      );
    case "wand":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4 20l12-12" />
          <path d="M15 3l.7 1.6L17 5l-1.3.4L15 7l-.7-1.6L13 5l1.3-.4L15 3z" />
          <circle cx="19" cy="9" r="1" />
        </svg>
      );
    case "clock":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v5l3 2" />
        </svg>
      );
    case "globe":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16" />
          <path d="M12 4c2.5 2.8 2.5 13.2 0 16" />
        </svg>
      );
    case "chart":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4 19h16" />
          <rect x="6" y="10" width="3" height="7" rx="1" />
          <rect x="11" y="7" width="3" height="10" rx="1" />
          <rect x="16" y="4" width="3" height="13" rx="1" />
        </svg>
      );
    default:
      return null;
  }
}
