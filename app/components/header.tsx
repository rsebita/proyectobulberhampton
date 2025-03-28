import Link from "next/link";
import MotionTransition from "./transition-components";
import { socialNetworks } from "@/data";

const Header = () => {
    return ( 
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container flex flex-col items-center max-w-6xl mx-auto">
                    <Link href="/">
                        <h1 className="my-3 text-4xl font-bold text-center">
                            Bulber
                            <span className="text-secondary">
                                Hampton
                            </span>
                        </h1>
                    </Link>
                    <div className="flex items-center gap-7 mt-4">
                        {socialNetworks.map((network) => (
                            <Link
                                key={network.id}
                                href={network.src}
                                className="transition-all duration-300 hover:scale-110"
                            >
                                {network.logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
     );
}
 
export default Header;