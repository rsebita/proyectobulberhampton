"use client";
import MotionTransition from "@/app/components/transition-components";

const Players = () => {
    return ( 
        <main>
            <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
                <MotionTransition position="bottom" className="w-full flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-center mt-20">
                        DREAM TEAM
                    </h1>
                </MotionTransition>
            </div>
        </main>
     );
}
 
export default Players;