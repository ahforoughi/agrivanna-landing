type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/**
 * Fades and lifts its content in as it scrolls into view. The work is done by
 * a small inline script (lib/reveal-script) and CSS (globals.css), not React,
 * so text never waits on the page's JavaScript: anything already on screen is
 * shown at once, and nothing stays hidden in a tab opened in the background.
 * Without JavaScript, or with reduced motion, the content is simply visible.
 */
export default function Reveal({ children, delay = 0, y = 32, className }: Props) {
  return (
    // The reveal script adds data-in before React loads; that difference is expected
    <div
      data-reveal=""
      suppressHydrationWarning
      className={className}
      style={{ "--reveal-delay": `${delay}s`, "--reveal-y": `${y}px` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
