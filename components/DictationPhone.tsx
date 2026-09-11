import Image from "next/image";

/**
 * The voice-note screen with a worked dictation example rendered as live text
 * over the screenshot's transcript box.
 *
 * The text is HTML rather than baked into the PNG so the example stays editable
 * and crisp at any resolution. BOX_* are the transcript box's position inside
 * voice-dictation.png (758×1600), as percentages.
 */
const BOX = {
  left: "12.5%",
  top: "30.8%",
  width: "75.9%",
  height: "13.9%",
} as const;

export default function DictationPhone({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full ${className}`}>
      <Image
        src="/app/voice-dictation.png"
        alt=""
        width={758}
        height={1600}
        quality={95}
        sizes="(min-width: 1024px) 340px, 70vw"
        className="h-auto w-full"
      />

      {/* Transcript box — repainted so the example copy replaces "Listening…" */}
      <div
        className="absolute overflow-hidden rounded-[4%] bg-white px-[4%] py-[3%]"
        style={BOX}
      >
        <p className="text-[10px] leading-[1.45] text-ink-950 sm:text-[11.5px]">
          {text}
          <span
            aria-hidden="true"
            className="ml-0.5 inline-block h-[0.85em] w-[0.4em] translate-y-[0.1em] bg-[#2F6A14] align-middle"
          />
        </p>
      </div>

      <span className="sr-only">
        The Agrivanna voice note screen transcribing as a rancher speaks: “{text}”
      </span>
    </div>
  );
}
