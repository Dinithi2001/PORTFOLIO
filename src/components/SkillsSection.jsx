import { useState } from "react";
import { cn } from "../lib/utils";

const skills= [

    //programming languages
    {name:"Java", level: 80,category:"Programming Languages"},
    {name:"C", level: 75,category:"Programming Languages"},
    {name:"C#", level: 60,category:"Programming Languages"},
    {name:"Javascript", level: 80,category:"Programming Languages"},

    //frameworks & libraries
    {name:"Spring Boot", level: 70,category:"Frameworks & Libraries"},
    {name:"React", level: 70,category:"Frameworks & Libraries"},
    {name:"Tailwind CSS", level: 80,category:"Frameworks & Libraries"},

    //databases
    {name:"MySQL", level: 80,category:"Databases"},

    //others
    {name:"Git", level: 70,category:"Others"},
    {name:"Figma", level: 75,category:"Others"},
    {name:"HTML", level: 90,category:"Others"},
    {name:"CSS", level: 90,category:"Others"},

]

const categories = ["All","Programming Languages","Frameworks & Libraries","Databases","Others"];

export const SkillsSection = () =>{

    const [activeCategory, setActiveCategory] = useState("All");
    const filteredSkills = skills.filter((skills)=>activeCategory === "All" || skills.category === activeCategory
    );

    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category,key)=>(
                        <button key={key}
                                onClick={() => setActiveCategory(category)}
                                className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                    activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                                )}        
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill,key)=>(
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="text-lg font-semibold">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-in-out]" 
                                     style={{width: skill.level+"%"}}/>
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-muted-foreground text-sm">{skill.level+"%"}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}