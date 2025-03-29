export const transitionVariantsPage = {
    initial: {
        x: "100%",
        width:"100"
    },
    animate: {
        x: "0%",
        width:"0%"
    },
    exit: {
        x: ["0%", "100%"],
        width:["0%", "100%"]
    }
}

export const fadeIn = (position:string) => {
    return {
        visible: {
            y: 0,
            x: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.2,
                delay: 0.2,
                bounce: 0.3
            }
        },
        hidden: {
            y: position === 'bottom' ? 100 : 0,
            x: position === 'right' ? 100 : 0,
            opacity: 0,
            transition: {
                type: "spring",
                duration: 1.2,
                delay: 0.2,
                bounce: 0.3
            }
        }
    }
}