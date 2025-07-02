import ProjectCard from "./ProjectCard";
import "./Projects.css"

const Projects = () => {
    return(
        <div>
            <div className="projectsHeader">
                PROJECTS
            </div>
            <div className="projectsContainer">
                <ProjectCard
                    title="RustybaraOS"
                    description="A minimal UNIX-like operating system written in Rust for educational purposes."
                    tech={["Rust", "x86", "Bootloader"]}
                    imageUrl="/images/rustybara.png"
                    githubUrl="https://github.com/zach1020/rustybaraos"
                    liveUrl=""
                />
                <ProjectCard
                    title="Orthogonal Bloch"
                    description="A Jupyter Notebook illustration of how orthogonal states of qubits are indistinguishable in a Bloch Sphere, as well as how non-orthogonal states are distinguishable."
                    tech={["Python", "Quantum", "Jupyter Notebook"]}
                    imageUrl="/images/rustybara.png"
                    githubUrl="https://github.com/zach1020/Orthogonal-Bloch"
                    liveUrl=""
                />
                <ProjectCard
                    title="Very Random"
                    description="A TRUE quantum random number generator using Hadamard gates built with IBM's Qiskit API."
                    tech={["Python", "Qiskit", "APIs"]}
                    imageUrl="/images/rustybara.png"
                    githubUrl="https://github.com/zach1020/veryrandom"
                    liveUrl=""
                />
                </div>
                <div className="projectsContainer">
                <ProjectCard
                    title="RuneStonks"
                    description="A neural network that predicts RuneScape 3 Grand Exchange item prices."
                    tech={["Python", "Neural Network", "Jupyter Notebook"]}
                    imageUrl="/images/rustybara.png"
                    githubUrl="https://github.com/zach1020/RuneStonks"
                    liveUrl=""
                />
                <ProjectCard
                    title="Chip 8 Emulator"
                    description="An emulator for the Chip8 system, written in C++ and x86 Assembly."
                    tech={["C++", "x86", "Bootloader"]}
                    imageUrl="/images/rustybara.png"
                    githubUrl="https://github.com/zach1020/Chip-8-Emulator"
                    liveUrl=""
                />
                <ProjectCard
                    title="RustDevFindJob"
                    description="A simple website designed to connect Rustaceans with companies that hire."
                    tech={["Next.js", "HTML/CSS", "MongoDB"]}
                    imageUrl="/images/rustybara.png"
                    githubUrl="https://github.com/zach1020/rust-dev-get-job"
                    liveUrl="https://rustdevfindjob.com"
                />
            </div>
        </div>
    )
}

export default Projects;