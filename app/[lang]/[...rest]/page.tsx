import { notFound } from "next/navigation";

/** Any unknown URL lands here so its 404 renders inside the right language's layout. */
export default function CatchAll() {
  notFound();
}
