import Link from "next/link";
import {
  AiOutlineDollar,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const Copyright = () => {
  return (
    <div className="brutalism-container mb-8 flex-1 bg-[#FFC29F]">
      <cite className="text-sm">
        Cek Khodam Online By lanstheprodigy
      </cite>
      <div className="flex flex-col md:flex-row mt-4 gap-2">
        {SOCIAL_LINKS.map((item, index) => (
          <Link
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}          
          key={index}
        >
          <div className="brutalism-container p-2 flex items-center bg-[#FFA6F6]">
            {item.icon}
            <span className="ml-2 text-sm">{item.name}</span>
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
};

interface SocialLinkProps {
  url: string;
  icon: React.ReactNode;
  name: string;
}

const SOCIAL_LINKS: SocialLinkProps[] = [
  {
    url: "https://www.instagram.com/ghufronakbar_",
    icon: <AiOutlineInstagram />,
    name: "ghufronakbar_",
  },
  {
    url: "https://www.github.com/lanstheprodigy",
    icon: <AiOutlineGithub />,
    name: "lanstheprodigy",
  },
  {
    url: "https://www.saweria.co/lanstheprodigy",
    icon: <AiOutlineDollar />,
    name: "lanstheprodigy",
  },
];

export default Copyright;
