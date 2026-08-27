import { cn } from "@/utils/cn";

export default function BrandLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 230"
      role="img"
      aria-label="Anfield Motors"
      className={cn("text-bone", className)}
    >
      <ellipse cx="180" cy="115" rx="174" ry="108" fill="none" stroke="currentColor" strokeWidth="9" />
      <ellipse cx="180" cy="115" rx="163" ry="96" fill="none" stroke="currentColor" strokeWidth="3" />
      <g transform="skewX(-8)">
        <text
          x="198"
          y="105"
          fill="currentColor"
          textAnchor="middle"
          fontFamily="Oswald, Arial Narrow, sans-serif"
          fontWeight="700"
          fontSize="67"
          letterSpacing="-2"
        >
          ANFIELD
        </text>
        <rect x="42" y="126" width="32" height="8" fill="var(--color-blood)" />
        <text
          x="199"
          y="168"
          fill="currentColor"
          textAnchor="middle"
          fontFamily="Oswald, Arial Narrow, sans-serif"
          fontWeight="700"
          fontSize="67"
          letterSpacing="-2"
        >
          MOTORS
        </text>
      </g>
    </svg>
  );
}