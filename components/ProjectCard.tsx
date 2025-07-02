import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

type ProjectCardProps = {
  title: string
  description: string
  tech: string[]
  imageUrl?: string
  githubUrl?: string
  liveUrl?: string
}

const ProjectCard = ({
  title,
  description,
  tech,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="rounded-2xl shadow-md bg-white dark:bg-neutral-900 p-4 sm:p-6 flex flex-col gap-4 hover:shadow-lg transition-all border border-neutral-200 dark:border-neutral-800"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="rounded-xl object-cover h-48 w-full"
        />
      )}

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex gap-2">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-primary" />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5 hover:text-primary" />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 px-2 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default ProjectCard