"use client";
import MotionTransition from "@/app/components/transition-components";

const Trophy = () => {
    return ( 
        <main>
            <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
                <MotionTransition position="bottom" className="w-full">
                    <h1 className="text-4xl font-bold text-center mt-20">
                        TROPHY
                    </h1>
                </MotionTransition>
            </div>
        </main>
     );
}
 
export default Trophy;