import staticImage from "@/constants/staticImage";
import Image from "next/image";
import SocialMedia from "./SocialMedia";

export default function ProfileHeader() {
  return (
    <header className="coba__border relative bg-card-dark p-4">
      <span className="border-bottom-left absolute bottom-0 left-0"></span>
      <span className="border-top-right absolute right-0 top-0"></span>

      <span className="border-bottom-right absolute bottom-0 right-0"></span>
      <div className="flex justify-between gap-4 rounded-xl text-typography-dark">
        <figure className="w-[39%]">
          <Image
            src={staticImage.avatar}
            alt="foto istriku"
            className="block aspect-square overflow-hidden rounded-lg border border-white object-cover object-center"
            width={100}
            height={100}
          />
        </figure>

        <div className="header__title w-full space-y-3">
          <div className="header_title__header flex w-full items-center justify-between">
            <div className="job__status flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6dd33d] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#53bb27]"></span>
              </span>
              <p className="text-typography-light">Available To Work</p>
            </div>

            {/* <figure className="send__msg block w-8 rounded-lg bg-[#282828] p-1.5 text-[#ccc]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="block max-w-full"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14L21 3m0 0l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"
                />
              </svg>
            </figure> */}
          </div>

          <div className="bio space-y-1 text-lg">
            <h5 className="text-xl font-bold">Nailha Sakhila Dewi 👋</h5>
            <p className="text-light-text text-sm">
              I{"'"}m a{" "}
              <span className="font-semibold text-primary-default">
                Cybersecurity Enthusiast
              </span>
            </p>
          </div>
        </div>
      </div>

      <SocialMedia />
    </header>
  );
}
