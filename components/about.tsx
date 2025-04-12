"use client"

import { useTranslation } from "@/hooks/useTranslation"
import { Button } from "@/components/ui/button"

export function About() {
  const { t } = useTranslation()
  
  return (
    <section id="about" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center justify-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-4">
                I'm a fast learner and dedicated full stack developer, 
                always focused on growing a little more every day. 
                I dive deep into each project with curiosity and commitment, 
                aiming to build clean, efficient solutions that make a difference. 
                From frontend to backend, I'm constantly evolving and pushing my skills to the next level.
            </p>
            <p className="text-muted-foreground mb-6">
                My journey in software development began in 2022 when I completed a 
                TESP in Systems and IT Technologies (2022-2024). 
                Afterward, I gained practical experience through a 6-month internship, 
                which allowed me to apply my skills in real-world projects. 
                Now, I'm pursuing a degree in Engineering of Systems and IT Technologies 
                to continue evolving as a developer. Along the way, I've worked on a range of projects, 
                from APIs to data-driven Micro SaaS tools, always striving to learn and adapt to 
                new technologies to deliver the best solutions.
            </p>
            <Button variant="outline" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
          <div className="max-w-[700px] mx-auto">
            <img src="/images/profile.jpg" alt="Developer portrait" className="rounded-lg w-full" />
          </div>
        </div>
      </div>
    </section>
  )
} 