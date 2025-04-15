import { useState, useEffect } from "react";
import {
    Globe,
    Github,
    FileText,
    Smartphone,
    BookOpen,
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    ChevronUp,
    X
} from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Thenics4All",
        description: "A minimalist web platform for documenting and sharing calisthenics progress in a collaborative community.",
        tags: ["React", "JavaScript", "Node.js", "Python", "AWS"],
        themes: ["Wellness"],
        image: "project_thenics4all.jpg",
        details: "Thenics4All is a self-hosted platform built to support goal tracking, resource sharing, and community-driven learning in calisthenics. It emphasizes accessibility, transparency, and long-term progress through open content and personal dashboards. Designed for scalability and user interaction, it's a lightweight and modular frontend-first application.",
        links: {
            webpage: "https://www.thenics4all.com",
            github: null,
            userdocs: null,
            app: null,
            paper1: null,
            paper2: null
        }
    },
    {
        id: 2,
        title: "Wealthguard",
        description: "A web-based dashboard for visualizing financial data, focused on real estate investment trusts (REITs) and market trends.",
        tags: ["React", "JavaScript", "Node.js", "Python"],
        themes: ["Finance", "Data Viz"],
        image: "project_wealthguard.jpg",
        details: "Wealthguard is a financial dashboard application that helps users monitor REIT performance and market dynamics. Built with a modern React frontend and Node.js backend, it integrates cloud functions and real-time data pipelines to support scalable, responsive financial analytics. Designed for clarity and usability, the platform provides investors with intuitive visual insights.",
        links: {
            webpage: "https://wealthguard-frontend.vercel.app/reits",
            github: null,
            userdocs: null,
            app: null,
            paper1: null,
            paper2: null
        }
    },
    {
        id: 3,
        title: "Foresight",
        description: "An interactive dashboard for exploring multisector system linkages across energy, water, land, and agriculture.",
        tags: ["React", "JavaScript", "Node.js", "Python", "AWS"],
        themes: ["Multisector", "Data Viz"],
        image: "project_foresight.jpg",
        details: "Foresight is a web-based platform developed to support decision-making across interconnected systems such as energy, water, land, and agriculture. It combines data visualization with dynamic scenario analysis, enabling users to explore system linkages and trade-offs. Built with a modern JavaScript stack and cloud infrastructure, Foresight delivers scalable insights for researchers and policymakers alike.",
        links: {
            webpage: "https://foresight.pnnl.gov/",
            github: null,
            userdocs: null,
            app: "https://foresight.pnnl.gov/",
            paper1: null,
            paper2: null
        }
    },
    {
        id: 4,
        title: "Argus",
        description: "An interactive Shiny dashboard for exploring land-energy-water system scenarios.",
        tags: ["R", "Shiny"],
        themes: ["Multisector", "Data Viz"],
        image: "project_argus.jpg",
        details: "Argus is a scenario exploration tool developed using R and Shiny to visualize and interact with integrated assessment model outputs. It provides users with an intuitive dashboard to explore trends, compare scenarios, and examine land-energy-water system linkages across spatial and temporal scales. Designed for researchers and stakeholders, Argus enhances transparency and usability of complex data.",
        links: {
            webpage: "https://jgcri.shinyapps.io/argus/",
            github: null,
            userdocs: "https://jgcri.github.io/argus",
            app: "https://jgcri.shinyapps.io/argus/",
            paper1: null,
            paper2: null
        }
    },
    {
        id: 5,
        title: "Rfasst",
        description: "An R package for estimating air pollution impacts on health and agriculture.",
        tags: ["R"],
        themes: ["Health"],
        image: "project_rfasst.jpg",
        details: "RFASST is an R package designed to quantify the effects of air pollution on human health and agricultural productivity. It supports integration with global climate and energy models, enabling impact assessments across multiple sectors and spatial scales. Developed for researchers and policymakers, RFASST emphasizes reproducibility, transparency, and scientific rigor.",
        links: {
            webpage: null,
            github: "https://github.com/JGCRI/rfasst/",
            userdocs: "https://jgcri.github.io/rfasst/index.html",
            app: null,
            paper1: "https://joss.theoj.org/papers/10.21105/joss.03820",
            paper2: null
        }
    },
    {
        id: 6,
        title: "Osiris",
        description: "An R package to process climate impacts on crop yields for integrated assessment models.",
        tags: ["R"],
        themes: ["Ag", "Climate"],
        image: "project_osiris.jpg",
        details: "Osiris is an R package developed to process gridded climate impacts on agricultural yields for use in integrated assessment models like GCAM. It supports spatial aggregation, data harmonization, and yield scaling across regions and crop types, enabling robust analysis of climate-driven changes to food systems.",
        links: {
            webpage: null,
            github: "https://github.com/JGCRI/osiris",
            userdocs: "https://jgcri.github.io/osiris/",
            app: null,
            paper1: "https://doi.org/10.21105/joss.05226",
            paper2: null
        }
    },
    {
        id: 7,
        title: "Helios",
        description: "An R package for calculating heating and cooling degree days for energy modeling.",
        tags: ["R"],
        themes: ["Energy", "Climate"],
        image: "project_helios.jpg",
        details: "Helios is an R package designed to process temperature data into heating and cooling degree day indicators for integration with the Global Change Analysis Model (GCAM). It enables the assessment of building energy demand under varying climate scenarios, supporting robust energy system planning.",
        links: {
            webpage: null,
            github: "https://github.com/JGCRI/helios/",
            userdocs: "https://jgcri.github.io/helios",
            app: null,
            paper1: "https://doi.org/10.21105/joss.06033",
            paper2: null
        }
    },
    {
        id: 8,
        title: "rmap",
        description: "An R package for creating customizable, scenario-based maps from tabular data.",
        tags: ["R"],
        themes: ["Data Viz"],
        image: "project_rmap.jpg",
        details: "rmap is an R package for mapping scenario-based model outputs using user-defined styles and layouts. It supports flexible visual comparison of spatial data across time, scenarios, and variables—ideal for communicating climate and policy model results across scales.",
        links: {
            webpage: null,
            github: "https://github.com/JGCRI/rmap",
            userdocs: "https://jgcri.github.io/rmap/",
            app: null,
            paper1: "https://doi.org/10.21105/joss.04015",
            paper2: null
        }
    },
    {
        id: 9,
        title: "Tethys",
        description: "A Python package for spatial and temporal downscaling of global water demand.",
        tags: ["Python"],
        themes: ["Water", "Climate"],
        image: "project_tethys.jpg",
        details: "Tethys is a Python tool that performs spatiotemporal downscaling of global water demand projections for use in integrated assessment models. It supports high-resolution sectoral water use estimates across time and regions, enabling better-informed planning under future climate and socioeconomic scenarios.",
        links: {
            webpage: null,
            github: "https://github.com/JGCRI/tethys",
            userdocs: "https://jgcri.github.io/tethys/",
            app: null,
            paper1: "https://doi.org/10.21105/joss.05855",
            paper2: null
        }
    },
    {
        id: 10,
        title: "Global Wateruse",
        description: "A global dataset of monthly sectoral water use from 2010–2100 at 0.5° resolution.",
        tags: ["HTML/CSS"],
        themes: ["Water", "Data Viz"],
        image: "project_globalwateruse.jpg",
        details: "Global Wateruse provides high-resolution monthly sectoral water demand data spanning 2010 to 2100 across multiple climate and socioeconomic scenarios. Designed for modelers, analysts, and researchers, this dataset enables detailed examination of future water stress, trends, and sectoral impacts at the global scale.",
        links: {
            webpage: null,
            github: "https://github.com/JGCRI/khan-etal_2022_tethysSSPRCP",
            userdocs: "https://jgcri.github.io/khan-etal_2022_tethysSSPRCP/",
            app: null,
            paper1: "https://doi.org/10.1038/s41597-023-02086-2",
            paper2: null
        }
    },
    {
        id: 11,
        title: "Plutus",
        description: "An R package to estimate electricity investments and stranded assets in GCAM.",
        tags: ["R"],
        themes: ["Energy", "Finance"],
        image: "project_plutus.jpg",
        details: "Plutus is an R package for analyzing electricity system investments and stranded assets within the Global Change Analysis Model (GCAM). It supports scenario analysis of energy transitions, infrastructure lifetimes, and policy-driven outcomes, with a focus on decarbonization and asset risk.",
        links: {
            webpage: null,
            github: "https://github.com/JGCRI/plutus",
            userdocs: "https://jgcri.github.io/plutus/",
            app: null,
            paper1: "https://doi.org/10.21105/joss.03212",
            paper2: null
        }
    },
    {
        id: 12,
        title: "Metis",
        description: "An R package for harmonizing and visualizing multi-sectoral systems data across scales.",
        tags: ["R"],
        themes: ["Multisector"],
        image: "project_metis.jpg",
        details: "Metis is a flexible R toolkit for visualizing and analyzing multi-sector systems data. It supports cross-sectoral harmonization, time-series visualization, and mapping at global to regional scales. Designed to interface with integrated assessment models, Metis helps explore interdependencies across energy, water, land, and agriculture.",
        links: {
            webpage: null,
            github: "https://github.com/JGCRI/metis/",
            userdocs: "https://jgcri.github.io/metis/",
            app: null,
            paper1: "http://doi.org/10.5334/jors.292",
            paper2: null
        }
    },
    {
        id: 13,
        title: "Net-Zero SE Asia",
        description: "A curated repository and visualization platform for carbon neutrality pathways in Southeast Asia.",
        tags: ["HTML/CSS"],
        themes: ["Net-Zero", "Climate"],
        image: "project_seasia.jpeg",
        details: "Net-Zero SE Asia is a stakeholder-driven metarepo that aggregates integrated assessment outputs, scenario visualizations, and documentation to support carbon neutrality planning for Malaysia, Thailand, and key cities in Southeast Asia. It aims to inform climate governance through transparent, data-driven insight.",
        links: {
            webpage: "https://jgcri.github.io/seasia/",
            github: null,
            userdocs: null,
            app: null,
            paper1: "https://doi.org/10.3389/fenrg.2024.1336045",
            paper2: "https://doi.org/10.3389/fenrg.2024.1335290"
        }
    },
    {
        id: 14,
        title: "GCIMS Integration",
        description: "A landing page and repository for multi-model integration using GCIMS outputs.",
        tags: ["HTML/CSS"],
        themes: ["Multisector"],
        image: "project_gcimsintegration.jpg",
        details: "GCIMS Integration provides centralized documentation and demonstration for integrating multi-model GCIMS outputs. It supports interdisciplinary research workflows and reproducible pipelines that connect energy, land, water, and climate models.",
        links: {
            webpage: "https://jgcri.github.io/gcims_integration/",
            github: null,
            userdocs: null,
            app: null,
            paper1: null,
            paper2: null
        }
    },
    {
        id: 15,
        title: "pytemplate",
        description: "A lightweight project template for Python packages following JGCRI standards.",
        tags: ["Python", "HTML/CSS"],
        themes: ["Dev Tools"],
        image: "project_pytemplate.jpg",
        details: "pytemplate is a minimal, reusable template for building consistent and well-documented Python packages. It includes linting, versioning, publishing, and GitHub integration best practices for reproducible and scalable scientific codebases.",
        links: {
            webpage: null,
            github: "https://github.com/JGCRI/pytemplate",
            userdocs: null,
            app: null,
            paper1: null,
            paper2: null
        }
    },
    {
        id: 16,
        title: "rtemplate",
        description: "An opinionated R project template with documentation, testing, and GitHub workflows.",
        tags: ["R", "HTML/CSS"],
        themes: ["Dev Tools"],
        image: "project_rtemplate.jpg",
        details: "rtemplate is a reusable starter kit for R packages and analytical tools. It includes standard documentation structure, pkgdown integration, GitHub Actions, and unit testing to accelerate reproducible and maintainable R development.",
        links: {
            webpage: "https://jgcri.github.io/rtemplate/",
            github: "https://github.com/JGCRI/rtemplate/",
            userdocs: "https://jgcri.github.io/rtemplate/",
            app: null,
            paper1: null,
            paper2: null
        }
    }
];

const Portfolio = () => {
    const [selectedTag, setSelectedTag] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const filteredProjects =
        selectedTag === "All"
            ? projects
            : projects.filter(project =>
                project.tags.includes(selectedTag) || project.themes.includes(selectedTag)
            );

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

    const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();
    const allThemes = Array.from(new Set(projects.flatMap(p => p.themes))).sort();
    const allFilters = ["All", ...allTags, ...allThemes];

    const isMobile = windowWidth < 768;
    const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, isMobile ? 3 : 6);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


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
            <h2 className="text-3xl font-bold text-white mb-8 mt-0">Portfolio</h2>
            <div className="max-w-6xl mx-auto px-6">
                {/* Tags for Filtering */}
                <div className="sticky top-[64px] z-40 mb-6">
                    {/* Show a Dropdown on Small Screens */}
                    <div className="md:hidden">
                        <select
                            className="bg-gray-700 text-white px-4 py-2 rounded-md w-full"
                            value={selectedTag}
                            onChange={(e) => setSelectedTag(e.target.value)}
                        >
                            {allFilters.map(filter => (
                                <option key={filter} value={filter}>{filter}</option>
                            ))}
                        </select>
                    </div>

                    {/* Show Buttons on Larger Screens */}
                    <div className="hidden md:flex flex-wrap justify-center gap-3">
                        {allFilters.map((filter) => {
                            const isTheme = allThemes.includes(filter);
                            const isActive = selectedTag === filter;

                            const base = "px-4 py-2 rounded-md transition-all duration-300 text-sm border";
                            const tagStyle = isActive
                                ? "bg-[#DAA520] text-black border-[#DAA520]"
                                : "bg-[#111111] text-white border-[#222222] hover:bg-[#DAA520] hover:text-black";
                            const themeStyle = isActive
                                ? "bg-[#DAA520] text-black border-[#DAA520]"
                                : "bg-[#1a1a1a] text-[#DAA520] border-[#444] hover:bg-[#DAA520] hover:text-black";

                            return (
                                <button
                                    key={filter}
                                    onClick={() => setSelectedTag(selectedTag === filter ? "All" : filter)}
                                    className={`${base} ${isTheme ? themeStyle : tagStyle}`}
                                >
                                    {filter === "All" ? `All (${projects.length})` : filter}
                                </button>
                            );
                        })}
                    </div>
                </div>


                {/* Project Grid */}
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visibleProjects.map(project => (
                            <div
                                key={project.id}
                                className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden border-1 border-transparent hover:border-[#DAA520]"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Image container with overlay */}
                                <div className="relative h-64">
                                    {/* Masked image container */}
                                    <div className="absolute inset-0 overflow-hidden bg-black">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-contain object-top filter blur-[2px] scale-105"
                                        />
                                    </div>
                                    {/* Overlay container */}
                                    <div className="absolute inset-0 z-10 flex flex-col justify-end">
                                        {/* Gradient Background */}
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.8), rgba(0,0,0,0.1))"
                                            }}
                                        />

                                        {/* Text Content */}
                                        <div className="relative p-4 text-left">
                                            <h3 className="text-lg font-semibold text-white drop-shadow-sm">{project.title}</h3>
                                            <p className="text-gray-300 text-sm mt-1 drop-shadow-sm">{project.description}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Tags below the image, not absolute */}
                                <div className="p-3 flex flex-wrap gap-2 justify-center">
                                    {/* Tags */}
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedTag(selectedTag === tag ? "All" : tag);
                                            }}
                                            className="cursor-pointer text-[0.625rem] leading-tight px-2 py-[2px] bg-gray-900 text-white rounded-sm border border-gray-700 hover:bg-[#DAA520] hover:text-black transition"
                                        >
                                            {tag}
                                        </span>
                                    ))}

                                    {/* Themes */}
                                    {project.themes.map(theme => (
                                        <span
                                            key={theme}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedTag(selectedTag === theme ? "All" : theme);
                                            }}
                                            className="cursor-pointer text-[0.625rem] leading-tight px-2 py-[2px] bg-[#1a1a1a] text-[#DAA520] rounded-sm border border-[#444] hover:bg-[#DAA520] hover:text-black transition"
                                        >
                                            {theme}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length > (isMobile ? 3 : 6) && !showAll && (
                        <div className="mt-6 !z-100 flex justify-center">
                            <button
                                onClick={() => setShowAll(true)}
                                className="flex items-center gap-2 bg-[#111] text-[#DAA520] px-5 py-3 rounded-full shadow-lg border border-[#222] text-base hover:bg-[#222] hover:scale-105 transition-all"
                                style={{
                                    boxShadow: "0 0 3px 3px rgba(218, 165, 32, 0.3)",
                                }}
                            >
                                See More <ChevronDown size={20} />
                            </button>
                        </div>
                    )}

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
                            <button
                                type="button"
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-sm text-white 
             hover:bg-black/60 hover:text-[#DAA520] transition z-10 
             !border-none !bg-transparent !shadow-none 
             focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DAA520]"
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>

                            <button
                                onClick={goToPrevProject}
                                className="absolute -left-4 top-1/2 transform -translate-y-1/2 
             text-white hover:text-[#DAA520] transition z-10 
             !bg-transparent !border-none !shadow-none 
             focus:outline-none focus-visible:ring-0"
                                aria-label="Previous Project"
                            >
                                <ChevronLeft size={32} strokeWidth={1.75} />
                            </button>

                            <button
                                onClick={goToNextProject}
                                className="absolute -right-4 top-1/2 transform -translate-y-1/2 
             text-white hover:text-[#DAA520] transition z-10 
             !bg-transparent !border-none !shadow-none 
             focus:outline-none focus-visible:ring-0"
                                aria-label="Next Project"
                            >
                                <ChevronRight size={32} strokeWidth={1.75} />
                            </button>


                            {/* Project Image */}
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full md:w-1/2 h-auto rounded-lg object-contain"
                            />

                            {/* Project Info */}
                            <div className="text-left flex-1 flex flex-col justify-between">
                                {/* Title only */}
                                <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>

                                <p className="text-gray-400 mb-4">{selectedProject.details}</p>

                                {/* Links */}
                                <div className="space-y-3 text-sm mb-4">
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

                                {/* Tags moved to bottom */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {/* Tags */}
                                    {selectedProject.tags.map(tag => (
                                        <span
                                            key={tag}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedTag(tag);
                                            }}
                                            className="cursor-pointer text-[0.625rem] leading-tight px-2 py-[2px] bg-gray-900 text-white rounded-sm border border-gray-700 hover:bg-[#DAA520] hover:text-black transition"
                                        >
                                            {tag}
                                        </span>
                                    ))}

                                    {/* Themes */}
                                    {selectedProject.themes.map(theme => (
                                        <span
                                            key={theme}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedTag(theme);
                                            }}
                                            className="cursor-pointer text-[0.625rem] leading-tight px-2 py-[2px] bg-[#1a1a1a] text-[#DAA520] rounded-sm border border-[#444] hover:bg-[#DAA520] hover:text-black transition"
                                        >
                                            {theme}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {showAll && (
                    <button
                        onClick={() => setShowAll(false)}
                        className="fixed bottom-6 right-6 flex items-center gap-2 bg-[#111] text-[#DAA520] hover:bg-[#222] px-4 py-2 rounded-md shadow-md transition z-50"
                    >
                        <ChevronUp size={18} /> Collapse Projects
                    </button>
                )}

            </div>
        </section>
    );
};

export default Portfolio;
