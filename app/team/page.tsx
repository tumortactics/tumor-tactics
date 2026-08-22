import { permanentRedirect } from "next/navigation";

export default function TeamRedirect() {
  permanentRedirect("/our-story#our-team");
}
