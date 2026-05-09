"use client";
import * as React from "react";
import { cn } from "@/utils/cn";

export type LiquidGlassProps = {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;

  /** Strength of refraction. 0 = flat glass, 200 = heavy warp. Default 70. */
  displacement?: number;
  /** Background tint colour (any CSS colour). Default subtle white. */
  tint?: string;
  /** Corner radius in px. Default 28. */
  radius?: number;
  /** Backdrop blur strength in px. Default 8. */
  blur?: number;
  /** Backdrop saturation %. Default 180. */
  saturation?: number;
  /** Hide the inner edge specular highlight. Default false. */
  noSpecular?: boolean;
  /** Hide the outer drop shadow. Default false. */
  noShadow?: boolean;
  /** Click handler — makes the surface interactive. */
  onClick?: () => void;
};

export const LiquidGlass = ({
  className,
  children,
  style,
  displacement = 70,
  tint = "rgba(255,255,255,0.06)",
  radius = 28,
  blur = 8,
  saturation = 180,
  noSpecular = false,
  noShadow = false,
  onClick,
}: LiquidGlassProps) => {
  const filterId = React.useId().replace(/:/g, "");

  const shadowParts = [
    !noSpecular && "inset 0 1px 0 rgba(255,255,255,0.45)",
    !noSpecular && "inset 0 -1px 0 rgba(255,255,255,0.08)",
    !noShadow && "0 8px 30px rgba(0,0,0,0.35)",
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div
      className={cn("relative isolate", onClick && "cursor-pointer", className)}
      style={{ borderRadius: radius, ...style }}
      onClick={onClick}
    >
      <svg className="absolute -z-10 h-0 w-0" aria-hidden>
        <defs>
          <filter id={`lg-${filterId}`} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.018"
              numOctaves="2"
              seed="7"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="2" result="softNoise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="softNoise"
              scale={displacement}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          borderRadius: radius,
          backdropFilter: `blur(${blur}px) saturate(${saturation}%) url(#lg-${filterId})`,
          WebkitBackdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
          background: tint,
        }}
      />

      {(!noSpecular || !noShadow) && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            borderRadius: radius,
            boxShadow: shadowParts || undefined,
            background: !noSpecular
              ? "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 65%, rgba(255,255,255,0.10) 100%)"
              : undefined,
          }}
        />
      )}

      <div className="relative h-full" style={{ borderRadius: radius }}>
        {children}
      </div>
    </div>
  );
};
