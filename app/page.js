import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Rohit Singh</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#about">
                About
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#skills">
                Skills
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#projects">
                Projects
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#education">
                Education
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Rohit Singh
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Computer Science & Engineering Student | Aspiring Software Developer
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    View Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
              I'm a passionate Computer Science and Engineering student with a keen interest in software development and
              artificial intelligence. I love solving complex problems and building innovative solutions that can make a
              difference in people's lives.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {["JavaScript", "Python", "React", "Node.js", "SQL", "Git", "Machine Learning", "Data Structures"].map(
                (skill) => (
                  <Card key={skill}>
                    <CardHeader>
                      <CardTitle>{skill}</CardTitle>
                    </CardHeader>
                  </Card>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "E-commerce Platform",
                  description: "Built a full-stack e-commerce platform using MERN stack.",
                },
                {
                  title: "AI Chatbot",
                  description: "Developed an AI-powered chatbot using natural language processing.",
                },
                {
                  title: "Data Visualization Dashboard",
                  description: "Created an interactive dashboard for visualizing complex datasets.",
                },
              ].map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Education</h2>
            <Card>
              <CardHeader>
                <CardTitle>Bachelor of Science in Computer Science and Engineering</CardTitle>
                <CardDescription>University of Technology, 2020 - 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>GPA: 3.8/4.0</p>
                <p>
                  Relevant Coursework: Data Structures, Algorithms, Database Systems, Machine Learning, Web Development
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Contact</h2>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-500 dark:text-gray-400">
                Feel free to reach out to me for any inquiries or opportunities!
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="mailto:johndoe@example.com" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://linkedin.com/in/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
                    <FileText className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with Next.js and Tailwind CSS. Hosted on Vercel.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

