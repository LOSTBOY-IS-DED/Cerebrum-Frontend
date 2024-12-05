import { ShareIcon } from "../icons/ShareIcon";

export function Card() {
  return (
    <div>
      <div className="  p-4 max-w-80 bg-white rounded-md border border-gray-200  ">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
              {" "}
              <ShareIcon />
            </div>
            Project Ideas
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <ShareIcon />
            </div>
            <div className="text-gray-500">
              <ShareIcon />
            </div>
          </div>
        </div>
        <div className="pt-4">
          {/* <iframe
            className="w-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kro_8-rywO8?si=MQf9JQEAvI0SneuN"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe> */}
          <blockquote className="twitter-tweet">
            <a href="https://twitter.com/username/status/807811447862468608"></a>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
