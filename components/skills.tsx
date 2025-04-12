import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>JavaScript</Badge>
                <Badge>HTML/CSS</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Node.js</Badge>
                <Badge>Express</Badge>
                <Badge>Python</Badge>
                <Badge>Flask</Badge>
                <Badge>Django</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>MongoDB</Badge>
                <Badge>MySQL</Badge>
                <Badge>REST APIs</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Git</Badge>
                <Badge>Docker</Badge>
                <Badge>CI/CD</Badge>
                <Badge>Figma</Badge>
                <Badge>Agile/Scrum</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 