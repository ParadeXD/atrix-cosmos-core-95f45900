import { useEffect, useRef, useCallback } from "react";

interface Trail {
  x: number;
  y: number;
  age: number;
  vx: number;
  vy: number;
  size: number;
}

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const trails = useRef<Trail[]>([]);
  const animId = useRef(0);

  const getColors = useCallback(() => {
    const isLight = document.documentElement.classList.contains("light");
    if (isLight) {
      return {
        dot: "rgba(30, 30, 30, 0.9)",
        flameCore: [30, 30, 30] as [number, number, number],
        flameMid: [80, 80, 80] as [number, number, number],
        flameOuter: [120, 120, 120] as [number, number, number],
      };
    }
    return {
      dot: "rgba(255, 255, 255, 0.9)",
      flameCore: [255, 255, 255] as [number, number, number],
      flameMid: [200, 210, 255] as [number, number, number],
      flameOuter: [96, 165, 250] as [number, number, number],
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

      // Spawn flame particles instantly on move
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
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const colors = getColors();

      // Update & draw flame trails
      trails.current = trails.current.filter((t) => t.age < 1);
      for (const t of trails.current) {
        t.age += 0.04;
        t.x += t.vx;
        t.y += t.vy;
        t.vy -= 0.05; // float upward
        t.vx *= 0.98;

        const life = 1 - t.age;
        const s = t.size * life;

        // Flame gradient: core → mid → outer based on age
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
      const c = getColors().flameCore;
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
