'use client'
import { useState } from 'react'
import { ExternalLink, BookOpen } from 'lucide-react'
import Image from 'next/image'
import GitHubIcon from './GitHubIcon'
import CaseStudyModal from './CaseStudyModal'
import Reveal from './Reveal'
import { useLang } from './LangProvider'
import { PROJECTS } from '@/lib/content'

function ProjectCard({ project, index, lang, onOpenCaseStudy }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <Reveal
      as="article"
      delay={index * 0.08}
      className="group relative border border-border rounded-2xl overflow-hidden hover:border-accent/20 transition-all duration-300 hover:-translate-y-1.5 hover:bg-surface/60 flex flex-col"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-0"
        style={{ background: 'radial-gradient(400px circle at 50% 0%, rgba(4,120,87,0.05), transparent 70%)' }}
      />

      {/* Image preview */}
      <div className="relative w-full aspect-video overflow-hidden bg-surface border-b border-border">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name[lang]}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ background: 'linear-gradient(135deg, #efede7 0%, #e2dfd6 100%)' }}
          >
            <span className="font-display font-normal text-2xl text-muted/40 tracking-tight">
              {project.name[lang].split(' ')[0]}
            </span>
            <span className="text-[10px] font-syne font-semibold text-muted/30 uppercase tracking-[0.2em]">
              {lang === 'es' ? 'Imagen próximamente' : 'Image coming soon'}
            </span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-bg/20 to-transparent pointer-events-none" />
      </div>

      {/* Card body */}
      <div className="p-6 md:p-7 flex flex-col flex-1 relative z-10">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <span className="text-amber font-syne font-bold text-sm">{num}</span>
            <span className="text-[11px] font-jakarta text-muted border border-border px-2.5 py-1 rounded-full">
              {project.type[lang]}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-200"
                aria-label="Ver sitio"
              >
                <ExternalLink size={15} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-200"
                aria-label="Ver código"
              >
                <GitHubIcon size={15} />
              </a>
            )}
          </div>
        </div>

        <h3 className="font-display font-normal text-xl md:text-2xl text-text mb-4 group-hover:text-accent transition-colors duration-300 leading-snug">
          {project.name[lang]}
        </h3>

        <div className="space-y-2 mb-5">
          <p className="font-jakarta text-sm text-text/80 leading-relaxed">
            <span className="font-semibold text-text">
              {lang === 'es' ? 'Problema: ' : 'Problem: '}
            </span>
            {project.shortProblem[lang]}
          </p>
          <p className="font-jakarta text-sm text-muted leading-relaxed">
            <span className="font-semibold text-text/70">
              {lang === 'es' ? 'Solución: ' : 'Solution: '}
            </span>
            {project.shortSolution[lang]}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.metrics.map((m) => (
            <span
              key={m}
              className="text-[11px] font-syne font-semibold text-amber bg-amber/[0.07] border border-amber/20 px-2.5 py-1 rounded-full"
            >
              {m}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 mt-auto pt-4 border-t border-border/60">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-syne font-semibold text-accent/70 bg-accent/[0.06] border border-accent/10 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.hasCaseStudy && (
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="flex items-center gap-1.5 text-[12px] font-jakarta font-medium text-muted hover:text-accent transition-colors duration-200 group/btn flex-shrink-0"
            >
              <BookOpen size={13} className="group-hover/btn:text-accent transition-colors" />
              Case study
            </button>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  const { lang } = useLang()
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <section id="proyectos" className="px-6 md:px-12 lg:px-20 py-28 border-t border-border">
        {/* Label */}
        <Reveal delay={0} className="flex items-center gap-3 mb-6">
          <span className="text-accent font-syne font-bold text-xs tracking-[0.2em]">02</span>
          <span className="w-8 h-px bg-border" />
          <span className="text-muted font-syne text-xs uppercase tracking-[0.15em]">
            {lang === 'es' ? 'Proyectos' : 'Projects'}
          </span>
        </Reveal>

        {/* Heading */}
        <Reveal
          as="h2"
          delay={0.08}
          className="font-display font-normal text-text leading-tight mb-16 max-w-xl"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          {lang === 'es' ? 'Lo que construí hasta ahora' : "What I've built so far"}
        </Reveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              lang={lang}
              onOpenCaseStudy={setActiveProject}
            />
          ))}
        </div>
      </section>

      {activeProject && (
        <CaseStudyModal
          project={activeProject}
          lang={lang}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  )
}
