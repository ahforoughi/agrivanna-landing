"use client";

import { useEffect, useRef } from "react";

const EMBED_SCRIPT = "https://tally.so/widgets/embed.js";

type Props = {
  /** Full Tally embed URL, e.g. https://tally.so/embed/Np96PO?dynamicHeight=1 */
  src: string;
  title: string;
  /** Placeholder height before Tally reports the real one. */
  height?: number;
  className?: string;
};

/**
 * Embeds a Tally form.
 *
 * The src is set from the effect rather than rendered server-side: Tally's
 * embed.js listens for the iframe's postMessage height updates (that's what
 * makes `dynamicHeight=1` work) and needs to be in place first. Its own
 * `Tally.loadEmbeds()` scan does not reliably pick up React-rendered iframes,
 * so we assign the src ourselves either way.
 */
export default function TallyEmbed({ src, title, height = 640, className }: Props) {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const showForm = () => {
      const frame = frameRef.current;
      if (frame && !frame.src) frame.src = src;
    };

    if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) {
      showForm();
      return;
    }

    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.async = true;
    // Load the form even if the resize helper is blocked — it just won't autosize.
    script.onload = showForm;
    script.onerror = showForm;
    document.body.appendChild(script);
  }, [src]);

  return (
    <iframe
      ref={frameRef}
      title={title}
      loading="lazy"
      width="100%"
      height={height}
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      className={className}
    />
  );
}
