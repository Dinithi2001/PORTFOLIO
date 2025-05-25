import { Briefcase, Code, Cpu, User } from "lucide-react"

export const AboutMe = () =>{
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                {/* left section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Motivated Computer Science Undergraduate</h3>
                        <p className="text-muted-foreground">I’m a dedicated and detail-oriented Computer Science undergraduate at the University of Ruhuna with a passion for full-stack web development. With hands-on experience in React, Spring Boot, and MySQL, I love building user-friendly and scalable applications.</p>
                        <p className="text-muted-foreground">I've worked on real-world projects such as a tuition management platform, a digital restaurant ordering system, and a student dashboard. My strengths include teamwork, problem-solving, and a drive to continuously learn and grow in the tech industry.</p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>
                            <a href="cv/Dinithi_Resume_SE.pdf" 
                               download="Dinithi_Resume_SE.pdf" 
                               className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 trasition-colors duration-300">Download Cv</a>
                        </div>
                    </div>

                    {/* right section */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left ">
                                    <h4 className="font-semibold text-lg">Full-Stack Developer</h4>
                                    <p className="text-muted-foreground">Developing end-to-end web applications using React, Spring Boot, and MySQL with a focus on scalability and performance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Cpu className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left ">
                                    <h4 className="font-semibold text-lg">Software Engineer</h4>
                                    <p className="text-muted-foreground">Building reliable and efficient software solutions with a solid understanding of object-oriented programming, data structures, and system design.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left ">
                                    <h4 className="font-semibold text-lg">Team Collaboration</h4>
                                    <p className="text-muted-foreground">Experienced in Agile teams, version control with Git, and effective communication throughout the development cycle.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}