import { ArrowRight, Github } from "lucide-react"
import { useState } from "react" // Import useState for image carousel

const projects = [
    {
        id: 1,
        title: "InstaLearn",
        Description: "Tuition management system with QR attendance, question bank, online payments, and real-time dashboards.",
        images: [ // Changed from 'image' to 'images' array
            "projects/InstaLearn/Capture1.PNG",
            "projects/InstaLearn/Capture2.PNG",
            "projects/InstaLearn/Capture4.PNG",
            "projects/InstaLearn/Capture5.PNG",
            "projects/InstaLearn/Capture6.PNG",
            "projects/InstaLearn/Capture7.PNG",
            "projects/InstaLearn/Capture8.PNG",
            "projects/InstaLearn/Capture9.PNG",
            "projects/InstaLearn/Capture10.PNG",
            "projects/InstaLearn/Capture11.PNG",
            "projects/InstaLearn/Capture12.PNG",
            "projects/InstaLearn/Capture13.PNG",
        ],
        tags: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
        githubUrl: "https://github.com/01Nimantha/InstaLearn",
    },
    {
        id: 2,
        title: "LumorTableBite",
        Description: "Digital food ordering platform for restaurants with menu browsing, order tracking, and payment integration.",
        images: [
            "projects/lumoraTableBite/Capture1.PNG",
            "projects/lumoraTableBite/Capture2.PNG",
            "projects/lumoraTableBite/Capture3.PNG",
            "projects/lumoraTableBite/Capture4.PNG",
            "projects/lumoraTableBite/Capture5.PNG",
            "projects/lumoraTableBite/Capture6.PNG",
            "projects/lumoraTableBite/Capture7.PNG",
            "projects/lumoraTableBite/Capture8.PNG",
            "projects/lumoraTableBite/Capture9.PNG",
            "projects/lumoraTableBite/Capture10.PNG",
            "projects/lumoraTableBite/Capture11PNG",
            "projects/lumoraTableBite/Capture12.PNG",
            "projects/lumoraTableBite/Capture13.PNG"

        ],
        tags: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
        githubUrl: "https://github.com/Dinithi2001/LumoraTableBite",
    },
    {
        id: 3,
        title: "Student Dashboard",
        Description: "Simple Web-based student dashboard supporting CRUD operations, profile management, and responsive design.",
        images: [
            "projects/Dashboard/Capture1.PNG",
            "projects/Dashboard/Capture2.PNG",
            "projects/Dashboard/Capture3.PNG",
            "projects/Dashboard/Capture4.PNG",
            "projects/Dashboard/Capture5.PNG"
        ],
        tags: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
        githubUrl: "https://github.com/Dinithi2001/Student-dashboard",
    },
]

export const ProjectsSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState({}); // Track current image index per project

    const nextImage = (projectId) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) + 1) % projects.find(p => p.id === projectId).images.length
        }));
    };

    return (
        <section id="projects" className="p-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured<span className="text-primary"> Projects</span></h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                    Check out some of my recent work, where every project was built with care, speed, and the user’s experience front and center.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-card rounded-lg shadow-xs card-hover overflow-hidden card-hover">
                            <div className="h-[600px] overflow-y-auto"> {/* Increased height and added scrolling */}
                                {project.images.map((image, index) => (
                                    <div key={index} className="mb-4 last:mb-0"> {/* Add margin between images */}
                                        <img 
                                            src={image} 
                                            className="w-full h-auto object-contain" 
                                            alt={`${project.title} - Screenshot ${index + 1}`}
                                        />
                                        <p className="text-center text-xs text-muted-foreground mt-1">
                                            Screenshot {index + 1}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, key) => (
                                        <span key={key} className="px-2 py-1 text-xs rounded-full font-medium bg-secondary text-secondary-foreground border">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.Description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3 w-full justify-center">
                                        <a href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button flex w-fit items-center mx-auto gap-2"
                        href="https://github.com/Dinithi2001"
                        target="_blank"
                    >
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}