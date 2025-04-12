import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Get In Touch</h2>
          <div className="grid gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <p className="text-muted-foreground mb-6">
                    I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like
                    to work together or just say hello!
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild>
                      <a href="mailto:flaviohenriquevicente@hotmail.com" aria-label="Email">
                        <Mail size={20} />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://github.com/fhvicente" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github size={20} />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://www.linkedin.com/in/fhsvicente/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={20} />
                      </a>
                    </Button>
                  </div>
                  <Button className="mt-4" asChild>
                    <a href="mailto:flaviohenriquevicente@hotmail.com">Send Email</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 