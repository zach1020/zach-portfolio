import { motion } from "framer-motion"
import "./TechStack.css"

const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.3,
            ease: "easeOut",
        },
    }),
}

const badges = [
    ["C/C++", "Python", "Rust", "JavaScript"],
    ["React", "Next.js", "Quantum Computing", "AI"],
    ["SQL", "MongoDB", "HTML/CSS", "...just to name a few..."],
]

const TechStack = () => {
    return (
        <div>
            <div className="tsHeader">
                TECH STACK
                {badges.map((row, rowIndex) => (
                    <div key={rowIndex} className="tsContainer">
                        {row.map((badge, i) => (
                            <motion.div
                                className="tsBadge"
                                key={badge}
                                custom={i + rowIndex * badges[0].length}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={badgeVariants}
                                whileHover={{
                                    rotateX: -10,
                                    rotateY: 10,
                                    scale: 1.05,
                                    transition: { type: "spring", stiffness: 300, damping: 15 },
                                }}
                            >
                                {badge}
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechStack;