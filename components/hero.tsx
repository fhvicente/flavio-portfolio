import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Flávio Vicente</h1>
        <p className="text-xl md:text-2xl font-bold max-w-[700px] mx-auto">
          Full Stack Developer
        </p>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto mb-8">
          Every line of code is a step in my growth.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <a href="#projects">View my work</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact me</a>
          </Button>
        </div>
        <div className="mt-16 flex animate-bounce justify-center">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
} 