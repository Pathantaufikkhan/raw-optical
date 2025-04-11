"use client";

import { cn } from "@/lib/utils";
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  ReactNode,
  HTMLAttributes,
  useMemo,
} from "react";
import { createNoise3D } from "simplex-noise";

interface WavyBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
}

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationIdRef = useRef<number>(0);
  const ntRef = useRef<number>(0);

  const [isSafari, setIsSafari] = useState(false);

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const noise = useMemo(() => createNoise3D(), []);

  const getSpeed = useCallback(() => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  }, [speed]);

  const drawWave = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number, n: number) => {
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth;
        ctx.strokeStyle = waveColors[i % waveColors.length];

        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, ntRef.current) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }

        ctx.stroke();
        ctx.closePath();
      }
    },
    [waveColors, waveWidth, noise]
  );

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;

    ctx.fillStyle = backgroundFill;
    ctx.globalAlpha = waveOpacity;
    ctx.fillRect(0, 0, w, h);

    ntRef.current += getSpeed();
    drawWave(ctx, w, h, 5);

    animationIdRef.current = requestAnimationFrame(render);
  }, [backgroundFill, waveOpacity, getSpeed, drawWave]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    render();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, [blur, render]);

  useEffect(() => {
    const cleanupResize = init();
    return () => {
      cancelAnimationFrame(animationIdRef.current);
      cleanupResize?.();
    };
  }, [init]);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={isSafari ? { filter: `blur(${blur}px)` } : {}}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
