import { useState, useEffect } from "react";
import {
    Globe,
    Github,
    FileText,
    Smartphone,
    BookOpen,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Argus",
        description: "A modern web application built with React.",
        tags: ["React", "JavaScript"],
        image: "project1.jpg", // Replace with your actual image path
        details: "This is a detailed description of Project One. It uses React and Tailwind CSS.",
        links: {
            webpage: "https://argus.example.com",
            github: "https://github.com/youruser/argus",
            userdocs: null,
            app: null,
            paper1: null,
            paper2: null
        }
    },
    {
        id: 2,
        title: "Project Two",
        description: "A powerful Python-based data tool.",
        tags: ["Python", "Data Science"],
        image: "/project2.jpg",
        details: "This is a detailed description of Project Two. It leverages Python for data analysis.",
        links: {
            webpage: "https://argus.example.com",
            github: "https://github.com/youruser/argus",
            userdocs: null,
            app: null,
            paper1: null,
            paper2: null
        }
    },
    {
        id: 3,
        title: "Project Three",
        description: "A full-stack app using Node.js and MongoDB.",
        tags: ["Node.js", "MongoDB"],
        image: "/project3.jpg",
        details: "This is a detailed description of Project Three. It features a backend with Node.js and a MongoDB database.",
        links: {
            webpage: "https://argus.example.com",
            github: "https://github.com/youruser/argus",
            userdocs: null,
            app: null,
            paper1: null,
            paper2: null
        }
    },
];

const Portfolio = () => {
    const [selectedTag, setSelectedTag] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects =
        selectedTag === "All" ? projects : projects.filter(project => project.tags.includes(selectedTag));

    const currentIndex = selectedProject
        ? filteredProjects.findIndex(p => p.id === selectedProject.id)
        : -1;

    const goToNextProject = () => {
        if (currentIndex !== -1) {
            const nextIndex = (currentIndex + 1) % filteredProjects.length;
            setSelectedProject(filteredProjects[nextIndex]);
        }
    };

    const goToPrevProject = () => {
        if (currentIndex !== -1) {
            const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
            setSelectedProject(filteredProjects[prevIndex]);
        }
    };

    const tags = ["All", "React", "JavaScript", "Python", "Data Science", "Node.js", "MongoDB"];

    // Handle ESC to close modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setSelectedProject(null);
            } else if (e.key === "ArrowRight") {
                goToNextProject();
            } else if (e.key === "ArrowLeft") {
                goToPrevProject();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedProject, currentIndex]);

    return (
        <section id="portfolio" className="py-16 px-6 text-center w-full">
            <h2 className="text-3xl font-bold text-white mb-4 mt-0">Portfolio</h2>
            <div className="max-w-6xl mx-auto px-6">
                {/* Tags for Filtering */}
                <div className="mb-6">
                    {/* Show a Dropdown on Small Screens */}
                    <div className="md:hidden">
                        <select
                            className="bg-gray-700 text-white px-4 py-2 rounded-md w-full"
                            value={selectedTag}
                            onChange={(e) => setSelectedTag(e.target.value)}
                        >
                            {tags.map(tag => (
                                <option key={tag} value={tag}>{tag}</option>
                            ))}
                        </select>
                    </div>

                    {/* Show Buttons on Larger Screens */}
                    <div className="hidden md:flex flex-wrap justify-center gap-3">
                        {tags.map(tag => (
                            <button
                                key={tag}
                                className={`px-4 py-2 rounded-md transition-all duration-300 ${selectedTag === tag
                                    ? "bg-[#DAA520] text-black"
                                    : "!bg-[#111111] text-white border border-[#222222] hover:bg-[#DAA520] hover:text-black"
                                    }`}
                                onClick={() => setSelectedTag(tag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>


                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className="relative bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden h-64 border-1 border-transparent hover:border-[#DAA520]"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Project Image (Top-Left Justified) */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-top-left rounded-md"
                            />

                            {/* Text Overlay with Centered Content */}
                            <div
                                className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10 transition duration-300"
                                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.8)"}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.7)"}
                            >
                                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                                <p className="text-gray-300 text-sm mt-2">{project.description}</p>

                                {/* Tags (Inside the Overlay at the Bottom) */}
                                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            onClick={(e) => {
                                                e.stopPropagation(); // prevent opening modal
                                                setSelectedTag(tag);
                                            }}
                                            className="cursor-pointer text-[0.625rem] leading-tight px-2 py-[2px] bg-gray-900 text-white rounded-sm border border-gray-700 hover:bg-[#DAA520] hover:text-black transition inline-block"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Modal for Project Details */}
                {selectedProject && (
                    <div
                        className="fixed inset-0 z-50 backdrop-blur-md bg-black/70 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <div
                            className="bg-gray-900 p-6 rounded-lg max-w-4xl w-full flex flex-col md:flex-row gap-6 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Left Arrow */}
                            <button
                                onClick={goToPrevProject}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-[#DAA520] transition z-10"
                            >
                                <ChevronLeft className="text-white" size={20} />
                            </button>

                            {/* Right Arrow */}
                            <button
                                onClick={goToNextProject}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-[#DAA520] transition z-10"
                            >
                                <ChevronRight className="text-white" size={20} />
                            </button>

                            {/* Project Image */}
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full md:w-1/2 h-auto rounded-lg object-cover"
                            />

                            {/* Project Info (same as before) */}
                            <div className="text-left flex-1 flex flex-col justify-between">
                                {/* Title + Tags */}
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                                    <div className="flex flex-wrap gap-2 justify-end">
                                        {selectedProject.tags.map(tag => (
                                            <span
                                                key={tag}
                                                onClick={() => {
                                                    setSelectedProject(null);
                                                    setSelectedTag(tag);
                                                }}
                                                className="cursor-pointer text-[0.625rem] leading-tight px-2 py-[2px] bg-gray-900 text-white rounded-sm border border-gray-700 hover:bg-[#DAA520] hover:text-black transition inline-block"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-4">{selectedProject.details}</p>

                                {/* Links */}
                                <div className="space-y-3 text-sm">
                                    {selectedProject.links?.webpage && (
                                        <a href={selectedProject.links.webpage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#DAA520] hover:underline">
                                            <Globe size={18} /> Webpage
                                        </a>
                                    )}
                                    {selectedProject.links?.github && (
                                        <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#DAA520] hover:underline">
                                            <Github size={18} /> GitHub
                                        </a>
                                    )}
                                    {selectedProject.links?.userdocs && (
                                        <a href={selectedProject.links.userdocs} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#DAA520] hover:underline">
                                            <FileText size={18} /> User Docs
                                        </a>
                                    )}
                                    {selectedProject.links?.app && (
                                        <a href={selectedProject.links.app} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#DAA520] hover:underline">
                                            <Smartphone size={18} /> App Link
                                        </a>
                                    )}
                                    {selectedProject.links?.paper1 && (
                                        <a href={selectedProject.links.paper1} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#DAA520] hover:underline">
                                            <BookOpen size={18} /> Related Paper 1
                                        </a>
                                    )}
                                    {selectedProject.links?.paper2 && (
                                        <a href={selectedProject.links.paper2} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#DAA520] hover:underline">
                                            <BookOpen size={18} /> Related Paper 2
                                        </a>
                                    )}
                                </div>

                                <button
                                    className="mt-6 px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-[#DAA520] hover:text-black transition self-start"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
