import { useEffect, useRef, useCallback } from "react";

interface Spark {
  x: number;
  y: number;
  age: number;
  vx: number;
  vy: number;
  size: number;
  twinkle: number;
}

interface Ripple {
  x: number;
  y: number;
  age: number;
  maxRadius: number;
}

const MAX_SPARKS = 60;
const MAX_RIPPLES = 4;

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const sparks = useRef<Spark[]>([]);
  const ripples = useRef<Ripple[]>([]);
  const animId = useRef(0);

  const getColors = useCallback(() => {
    const isLight = document.documentElement.classList.contains("light");
    if (isLight) {
      return {
        dot: "rgba(30, 30, 30, 0.9)",
        sparkCore: [60, 140, 255] as [number, number, number],
        sparkMid: [30, 100, 220] as [number, number, number],
        sparkOuter: [20, 70, 180] as [number, number, number],
        glow: [60, 140, 255] as [number, number, number],
        ripple: [60, 140, 255] as [number, number, number],
      };
    }
    return {
      dot: "rgba(255, 255, 255, 0.9)",
      sparkCore: [120, 180, 255] as [number, number, number],
      sparkMid: [70, 140, 255] as [number, number, number],
      sparkOuter: [40, 100, 220] as [number, number, number],
      glow: [96, 165, 250] as [number, number, number],
      ripple: [96, 165, 250] as [number, number, number],
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (sparks.current.length < MAX_SPARKS) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 0.5;
        sparks.current.push({
          x: e.clientX + (Math.random() - 0.5) * 4,
          y: e.clientY + (Math.random() - 0.5) * 4,
          age: 0,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5,
          size: Math.random() * 1.5 + 0.5,
          twinkle: Math.random() * Math.PI * 2,
        });
      }
    };

    const onClick = (e: MouseEvent) => {
      if (ripples.current.length < MAX_RIPPLES) {
        ripples.current.push({ x: e.clientX, y: e.clientY, age: 0, maxRadius: 40 });
      }
      const count = Math.min(10, MAX_SPARKS - sparks.current.length);
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.3;
        const speed = 2 + Math.random() * 3;
        sparks.current.push({
          x: e.clientX, y: e.clientY, age: 0,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2 + 0.5,
          twinkle: Math.random() * Math.PI * 2,
        });
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onClick);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const colors = getColors();

      // Ripples
      ripples.current = ripples.current.filter((r) => r.age < 1);
      for (const r of ripples.current) {
        r.age += 0.05;
        const radius = Math.max(0, r.maxRadius * r.age);
        ctx.beginPath();
        ctx.arc(r.x, r.y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${colors.ripple[0]},${colors.ripple[1]},${colors.ripple[2]},${(1 - r.age) * 0.5})`;
        ctx.lineWidth = 1.5 * (1 - r.age);
        ctx.stroke();
      }

      // Sparks — simple dots, no gradients per spark
      sparks.current = sparks.current.filter((s) => s.age < 1);
      for (const s of sparks.current) {
        s.age += 0.04;
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.06;
        s.vx *= 0.97;
        s.twinkle += 0.4;

        const life = 1 - s.age;
        const tw = 0.5 + 0.5 * Math.sin(s.twinkle);
        const sz = Math.max(0.1, s.size * life * tw);
        const c = s.age < 0.3 ? colors.sparkCore : s.age < 0.6 ? colors.sparkMid : colors.sparkOuter;
        const alpha = life * 0.8 * tw;

        ctx.beginPath();
        ctx.arc(s.x, s.y, sz, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${alpha})`;
        ctx.fill();
      }

      // Cursor dot
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = colors.dot;
      ctx.fill();

      // Simple glow (one gradient, always same size)
      const g = colors.glow;
      const grad = ctx.createRadialGradient(
        mouse.current.x, mouse.current.y, 0,
        mouse.current.x, mouse.current.y, 14
      );
      grad.addColorStop(0, `rgba(${g[0]},${g[1]},${g[2]},0.3)`);
      grad.addColorStop(1, `rgba(${g[0]},${g[1]},${g[2]},0)`);
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, 14, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      animId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onClick);
    };
  }, [getColors]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
    />
  );
};

export default CustomCursor;
