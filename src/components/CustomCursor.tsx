import { useEffect, useRef, useCallback } from "react";

interface Trail {
  x: number;
  y: number;
  age: number;
  vx: number;
  vy: number;
  size: number;
}

interface Ripple {
  x: number;
  y: number;
  age: number;
  maxRadius: number;
}

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const trails = useRef<Trail[]>([]);
  const ripples = useRef<Ripple[]>([]);
  const animId = useRef(0);

  const getColors = useCallback(() => {
    const isLight = document.documentElement.classList.contains("light");
    if (isLight) {
      return {
        dot: "rgba(30, 30, 30, 0.9)",
        flameCore: [60, 130, 255] as [number, number, number],
        flameMid: [30, 90, 200] as [number, number, number],
        flameOuter: [20, 60, 150] as [number, number, number],
        ripple: [60, 130, 255] as [number, number, number],
      };
    }
    return {
      dot: "rgba(255, 255, 255, 0.9)",
      flameCore: [255, 255, 255] as [number, number, number],
      flameMid: [200, 210, 255] as [number, number, number],
      flameOuter: [96, 165, 250] as [number, number, number],
      ripple: [255, 255, 255] as [number, number, number],
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

      for (let i = 0; i < 3; i++) {
        trails.current.push({
          x: e.clientX + (Math.random() - 0.5) * 4,
          y: e.clientY + (Math.random() - 0.5) * 4,
          age: 0,
          vx: (Math.random() - 0.5) * 2,
          vy: -Math.random() * 3 - 1,
          size: Math.random() * 4 + 2,
        });
      }
    };

    const onClick = (e: MouseEvent) => {
      ripples.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
        maxRadius: 40,
      });
      // Burst of flame particles on click
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12;
        trails.current.push({
          x: e.clientX,
          y: e.clientY,
          age: 0,
          vx: Math.cos(angle) * (2 + Math.random() * 2),
          vy: Math.sin(angle) * (2 + Math.random() * 2),
          size: Math.random() * 4 + 3,
        });
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onClick);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const colors = getColors();

      // Draw ripples
      ripples.current = ripples.current.filter((r) => r.age < 1);
      for (const r of ripples.current) {
        r.age += 0.05;
        const radius = Math.max(0, r.maxRadius * r.age);
        const opacity = (1 - r.age) * 0.5;
        ctx.beginPath();
        ctx.arc(r.x, r.y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${colors.ripple[0]}, ${colors.ripple[1]}, ${colors.ripple[2]}, ${opacity})`;
        ctx.lineWidth = 2 * (1 - r.age);
        ctx.stroke();
      }

      // Update & draw flame trails
      trails.current = trails.current.filter((t) => t.age < 1);
      for (const t of trails.current) {
        t.age += 0.04;
        t.x += t.vx;
        t.y += t.vy;
        t.vy -= 0.05;
        t.vx *= 0.98;

        const life = 1 - t.age;
        const s = Math.max(0, t.size * life);
        const r = t.age < 0.3
          ? colors.flameCore
          : t.age < 0.6
          ? colors.flameMid
          : colors.flameOuter;

        ctx.beginPath();
        ctx.arc(t.x, t.y, s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${life * 0.6})`;
        ctx.fill();
      }

      // Draw main dot
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = colors.dot;
      ctx.fill();

      // Glow around dot
      const grad = ctx.createRadialGradient(
        mouse.current.x, mouse.current.y, 0,
        mouse.current.x, mouse.current.y, 15
      );
      const c = colors.flameCore;
      grad.addColorStop(0, `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0.3)`);
      grad.addColorStop(1, `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0)`);
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, 15, 0, Math.PI * 2);
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
