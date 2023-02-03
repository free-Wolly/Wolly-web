import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import socialNetworks from "./socNetworks";

const SocialMedia = () => {
  const renderImages = useMemo(() => {
    return socialNetworks.map((socialNetwork, id) => {
      return (
        <Link key={id} href={socialNetwork.link} target="_blank">
          <Image
            className="h-20 w-20"
            src={socialNetwork.img}
            alt=""
            width={100}
            height={100}
          />
        </Link>
      );
    });
  }, []);

  return (
    <div className="mx-auto">
      <div className="bg-[url('/assets/images/gradient.jpg')] bg-center bg-cover py-16">
        <div className="flex justify-center items-center gap-16">
          {renderImages}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
