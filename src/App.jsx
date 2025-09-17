import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // Ambil path tanpa hash
      const baseUrl = window.location.origin + "/portfolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <h1 className="font-bold mb-6 whitespace-nowrap text-[clamp(1rem,5vw,2.5rem)]">
              <ShinyText text="Hi I'm Ahmed Tarek" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="A passionate Flutter developer dedicated to building modern, high-performance mobile applications with clean architecture and user-friendly solutions."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-sm sm:text-base md:text-lg 
                        leading-relaxed sm:leading-normal md:leading-relaxed 
                        text-center sm:text-left 
                        mx-auto sm:mx-0 
                        mb-4 sm:mb-6
                      "
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a 
                href="./assets/Ahmed Tarek-Flutter Developer.pdf" 
                download="Ahmed_Tarek_Flutter_Developer_CV.pdf" 
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} 
                className="text-xs sm:text-sm md:text-base 
                            font-medium tracking-wide
                            px-1.5 sm:px-2 md:px-3 
                            py-0.5 sm:py-1 md:py-1.5 
                            rounded-full
                            text-center 
                            block sm:inline-block
                            whitespace-nowrap
                          "
                />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} 
                className="text-xs sm:text-sm md:text-base 
                            font-medium tracking-wide
                            px-1.5 sm:px-2 md:px-3 
                            py-0.5 sm:py-1 md:py-1.5 
                            rounded-full
                            text-center 
                            block sm:inline-block
                            whitespace-nowrap
                          "
                />
              </a>
            </div>

          </div>
          <div className="hidden lg:block md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
              <ProfileCard
                name=""
                title=""
                handle="Ahmed Tarek"
                status="Flutter Developer"
                contactText="Contact Me"
                avatarUrl="./assets/ahmed.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              />
          </div>
        </div>
        {/* tentang */}
        <div className="mt-24 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="I’m Ahmed Tarek Fahim, a Flutter developer passionate about building modern, high-performance mobile applications with clean architecture and intuitive user experiences. I enjoy working with the latest technologies like Firebase, Google Maps, and advanced state management solutions, blending creativity with precision to deliver impactful solutions. With diverse experience across e-commerce, flower shop, music streaming, and event management apps, I’m committed to creating scalable, user-friendly, and visually appealing products that empower businesses and users in the digital era."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-loose mb-6 sm:mb-8 md:mb-10 text-gray-300 text-center md:text-left"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between 
                                text-center sm:text-left gap-y-6 sm:gap-y-0 gap-x-6 
                                mb-6 w-full">
                  <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
                      9<span className="text-violet-500">+</span>
                    </h1>
                    <p className="text-sm sm:text-base text-gray-300">Project Finished</p>
                  </div>

                  <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
                      2<span className="text-violet-500">+</span>
                    </h1>
                    <p className="text-sm sm:text-base text-gray-300">Years of Experience</p>
                  </div>

                  <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000" 
                    data-aos-delay="600" 
                    data-aos-once="true"
                  >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
                      3.23<span className="text-violet-500">/4.00</span>
                    </h1>
                    <p className="text-sm sm:text-base text-gray-300">GPA</p>
                  </div>
                </div>


                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-xs sm:text-sm md:text-base lg:text-lg text-violet-400 text-center md:text-left"
                />
              </div>
            </div>
             {/* Kolom kanan */}
            <div className="hidden lg:flex basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full justify-center">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>

        <div className="tools mt-24">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools & Technologies</h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Profesional Skills</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tentang */}

        {/* Proyek */}
        <div id="project"></div>
        <h1 className="mt-24 text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-disable="mobile">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true" data-aos-disable="mobile">Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.</p>

        <div className="proyek-box mt-14" >
          <div className="hidden lg:block" style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>

          {/* Mobile & tablet version (no effects) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
            {listProyek.map((c, i) => (
              <div 
                key={i} 
                className="rounded-xl shadow-md border p-4 cursor-pointer transition hover:shadow-lg"
                onClick={() => handleProjectClick(c)}
              >
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-48 object-cover rounded-lg mb-3" 
                  loading="lazy" 
                />
                <h3 className="text-lg font-semibold">{c.title}</h3>
                {c.subtitle && <p className="text-sm opacity-70">{c.subtitle}</p>}
              </div>
            ))}
          </div>
        </div>
        {/* Proyek */}


        {/* Kontak */}
        <div className="kontak mt-24 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me
          </p>

          {/* Container dua kolom */}
          <div className="flex flex-col md:flex-row gap-8 w-full">
            {/* Contact Form */}
            <div className="flex-1">
              <form
                action="https://formsubmit.co/o0ahmedtarek0o@gmail.com"
                method="POST"
                className="bg-zinc-800 p-6 sm:p-8 md:p-10 w-full rounded-md max-w-full"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
              <input type="hidden" name="_next" value="https://ahmedtarek-f.github.io/portfolio/" />
                <div className="flex flex-col gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm sm:text-base">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 rounded-md text-sm sm:text-base"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm sm:text-base">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 rounded-md text-sm sm:text-base"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold text-sm sm:text-base">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows="6"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md text-sm sm:text-base"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] py-3 px-6 sm:px-8 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText text="Send" disabled={false} speed={3} className="text-sm sm:text-base" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Kontak */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App
