import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const heroWords = ["Infrastructure", "Intelligence", "Ecosystems", "Dominance"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % heroWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-brand-white text-brand-midnight flex flex-col relative font-sans overflow-x-hidden">
      {/* Navigation */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-8 md:px-16 h-28 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://i.ibb.co/KzzPsXjs/image.png" alt="BCON Adlabs Logo" className="h-16 w-auto" />
            <div className="text-2xl md:text-3xl font-black tracking-tighter text-brand-midnight hidden sm:block">
              Bcon <span className="text-brand-cyber">Adlabs</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-[0.2em] opacity-60 text-brand-midnight">
            <a href="#services" className="hover:opacity-100 transition-opacity">Services</a>
            <a href="#approach" className="hover:opacity-100 transition-opacity">Approach</a>
            <a href="#contact" className="opacity-100 border-b border-brand-midnight pb-1">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-8 md:px-16 flex flex-col justify-center min-h-[90vh]">
        <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
          
          <div className="flex flex-col z-20 items-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col mb-4 items-center w-full"
            >
              <h1 className="text-5xl sm:text-7xl md:text-[90px] xl:text-[120px] font-black leading-[0.85] tracking-tighter uppercase relative">
                Brand<br />
                <span className="text-stroke-midnight relative inline-block h-[1em] overflow-hidden align-bottom">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="block"
                  >
                    {heroWords[wordIndex]}
                  </motion.span>
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl text-brand-ocean opacity-80 text-lg md:text-xl leading-relaxed mt-6 font-light"
            >
              We engineer high-performance marketing ecosystems and luxury brand architectures that transform casual observers into advocates.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex flex-col sm:flex-row gap-6 items-center justify-center w-full"
            >
              <a href="#services" className="inline-block bg-brand-midnight text-brand-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest shadow-[0_10px_30px_rgba(5,13,15,0.2)] hover:bg-brand-cyber hover:scale-105 transition-all duration-300">
                Explore Infrastructure
              </a>
              <a href="#contact" className="inline-block bg-transparent border-2 border-brand-midnight text-brand-midnight px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-midnight hover:text-brand-white transition-all duration-300">
                Initialize Contact
              </a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-8 md:px-16 border-t border-brand-ivory relative z-10 bg-brand-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-[80px] font-black leading-none tracking-tighter uppercase relative">Our<br/><span className="text-brand-cyber">Services</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            <div className="group bg-brand-white p-10 rounded-2xl border border-brand-midnight/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-brand-gold text-sm font-mono mb-4 uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">01/</div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-brand-ocean">Brand Management</h3>
              <p className="text-sm text-brand-midnight opacity-80 leading-relaxed font-light">Identity design, voice positioning, and reputation scaling tailored for luxury and enterprise markets.</p>
            </div>
            
            <div className="group bg-brand-white p-10 rounded-2xl border border-brand-midnight/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-brand-gold text-sm font-mono mb-4 uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">02/</div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-brand-ocean">Growth SEO</h3>
              <p className="text-sm text-brand-midnight opacity-80 leading-relaxed font-light">Technical search engine optimization, authority building, and absolute algorithmic dominance.</p>
            </div>

            <div className="group bg-brand-white p-10 rounded-2xl border border-brand-midnight/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-brand-gold text-sm font-mono mb-4 uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">03/</div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-brand-ocean">Paid Media</h3>
              <p className="text-sm text-brand-midnight opacity-80 leading-relaxed font-light">Precision-targeted ad deployments across search, social, and elite programmatic networks.</p>
            </div>

            <div className="group bg-brand-white p-10 rounded-2xl border border-brand-midnight/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-brand-gold text-sm font-mono mb-4 uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">04/</div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-brand-ocean">Social Labs</h3>
              <p className="text-sm text-brand-midnight opacity-80 leading-relaxed font-light">Viral content engineering, high-fidelity asset generation, and community architecture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="py-32 px-8 md:px-16 border-t border-brand-cyber/10 relative z-10 bg-brand-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
             <div className="flex-1 w-full">
                <h2 className="text-4xl md:text-[60px] font-black leading-[0.9] tracking-tighter uppercase mb-8">Operational<br/><span className="text-stroke-midnight">Control</span></h2>
                <div className="w-full h-px bg-brand-ocean/30 mb-8"></div>
                <p className="text-brand-midnight opacity-80 text-lg leading-relaxed font-light mb-8 max-w-lg">
                  In a noisy digital landscape, visibility alone isn't enough. We operate on the principle of absolute control—aligning your narrative, aesthetic, and distribution into a single, unstoppable infrastructure.
                </p>
                <div className="flex flex-col gap-4">
                  {['Data-backed decision making', 'Premium aesthetic execution', 'Scalable growth architecture'].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-ocean">
                       <span className="text-brand-cyber">→</span> {item}
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="flex-1 w-full flex justify-center mt-12 lg:mt-0 relative perspective-[1200px]">
               <motion.div 
                 initial={{ opacity: 0, y: 50, rotateX: 10 }}
                 whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1, ease: "easeOut" }}
                 className="w-full max-w-sm bg-brand-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(5,13,15,0.15)] border border-brand-midnight/5 p-8 relative overflow-hidden"
               >
                 {/* Decorative Grid Background */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(5,13,15,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,13,15,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                 
                 <div className="relative z-10">
                   <div className="flex justify-between items-end mb-8 border-b border-brand-midnight/10 pb-4">
                     <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-brand-cyber mb-1">Live Telemetry</div>
                        <div className="text-xl font-black tracking-tight text-brand-midnight uppercase">Search Ranking</div>
                     </div>
                     <div className="w-8 h-8 rounded-full bg-brand-ocean flex items-center justify-center">
                        <div className="w-3 h-3 bg-brand-cyber rounded-full animate-pulse"></div>
                     </div>
                   </div>

                   <div className="space-y-6">
                     {/* Rank 1 */}
                     <div className="group relative">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2 text-brand-midnight">
                          <span className="flex items-center gap-2"><span className="text-brand-cyber">#01</span> BCON Client</span>
                          <span className="text-brand-gold">Domination</span>
                        </div>
                        <div className="w-full h-2 bg-brand-midnight/5 rounded-full overflow-hidden">
                          <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: "100%" }}
                             viewport={{ once: true }}
                             transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                             className="h-full bg-brand-cyber"
                          ></motion.div>
                        </div>
                     </div>

                     {/* Rank 2 */}
                     <div className="opacity-60">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2 text-brand-midnight/80">
                          <span><span className="opacity-50">#02</span> Competitor A</span>
                          <span>-45%</span>
                        </div>
                        <div className="w-full h-1.5 bg-brand-midnight/5 rounded-full overflow-hidden">
                          <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: "55%" }}
                             viewport={{ once: true }}
                             transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                             className="h-full bg-brand-midnight/30"
                          ></motion.div>
                        </div>
                     </div>

                     {/* Rank 3 */}
                     <div className="opacity-40">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2 text-brand-midnight/80">
                          <span><span className="opacity-50">#03</span> Competitor B</span>
                          <span>-72%</span>
                        </div>
                        <div className="w-full h-1.5 bg-brand-midnight/5 rounded-full overflow-hidden">
                          <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: "28%" }}
                             viewport={{ once: true }}
                             transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                             className="h-full bg-brand-midnight/30"
                          ></motion.div>
                        </div>
                     </div>
                     
                     {/* Rank 4 */}
                     <div className="opacity-20">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2 text-brand-midnight/80">
                          <span><span className="opacity-50">#04</span> Competitor C</span>
                          <span>-85%</span>
                        </div>
                        <div className="w-full h-1.5 bg-brand-midnight/5 rounded-full overflow-hidden">
                          <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: "15%" }}
                             viewport={{ once: true }}
                             transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                             className="h-full bg-brand-midnight/30"
                          ></motion.div>
                        </div>
                     </div>

                   </div>
                 </div>
               </motion.div>
             </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 md:px-16 border-t border-brand-midnight/10 relative z-10 bg-brand-midnight text-brand-white">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            {/* Left Info */}
            <div className="flex-1 lg:pr-10">
               <h2 className="text-5xl md:text-[80px] font-black leading-[0.9] tracking-tighter uppercase mb-6">
                 Initialize<br/><span className="text-brand-gold">Contact.</span>
               </h2>
               <div className="w-16 h-1 border-b-2 border-brand-cyber mb-10"></div>
               <p className="text-brand-ivory opacity-80 text-lg md:text-xl leading-relaxed font-light max-w-md mb-12">
                 Ready to upgrade your digital infrastructure? Connect with our strategists to discuss bespoke brand management and scaling possibilities.
               </p>

               <div className="flex flex-col sm:flex-row lg:flex-col gap-10">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-brand-cyber mb-2">Global Operations</div>
                    <div className="text-brand-ivory opacity-90 font-light tracking-wide leading-relaxed">Serving world-class enterprises<br/>across the globe.</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-brand-cyber mb-2">Direct Communications</div>
                    <div className="text-brand-ivory opacity-90 font-light tracking-wide">director@bconadlabs.com</div>
                  </div>
               </div>
            </div>
            
            {/* Right Form */}
            <div className="flex-[1.2] w-full bg-brand-white/5 p-8 md:p-12 rounded-[2rem] border border-brand-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden">
              {/* Subtle Form Background Glow */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-cyber/20 blur-[100px] rounded-full pointer-events-none"></div>

              <form className="flex flex-col gap-8 relative z-10">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-ivory opacity-60">Enterprise Entity</label>
                  <input type="text" className="bg-transparent border-b border-brand-white/20 pb-3 text-lg font-bold focus:outline-none focus:border-brand-gold placeholder:text-brand-white/20 placeholder:font-light transition-colors" placeholder="e.g. Acme Corporation" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-ivory opacity-60">Full Name</label>
                    <input type="text" className="bg-transparent border-b border-brand-white/20 pb-3 text-lg font-bold focus:outline-none focus:border-brand-gold placeholder:text-brand-white/20 placeholder:font-light transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-ivory opacity-60">Secure Comms (Email)</label>
                    <input type="email" className="bg-transparent border-b border-brand-white/20 pb-3 text-lg font-bold focus:outline-none focus:border-brand-gold placeholder:text-brand-white/20 placeholder:font-light transition-colors" placeholder="director@acme.com" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-ivory opacity-60">Strategic Focus</label>
                  <select className="bg-transparent border-b border-brand-white/20 pb-3 text-lg font-bold focus:outline-none focus:border-brand-gold text-brand-white appearance-none rounded-none cursor-pointer">
                    <option value="" className="bg-brand-midnight">Select Service Required</option>
                    <option value="brand" className="bg-brand-midnight">Brand Management</option>
                    <option value="seo" className="bg-brand-midnight">Growth SEO</option>
                    <option value="media" className="bg-brand-midnight">Paid Media</option>
                    <option value="content" className="bg-brand-midnight">Social Labs</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-ivory opacity-60">Operational Details</label>
                  <textarea rows={3} className="bg-transparent border-b border-brand-white/20 pb-3 text-lg font-bold focus:outline-none focus:border-brand-gold placeholder:text-brand-white/20 placeholder:font-light transition-colors resize-none" placeholder="Provide context regarding your deployment needs..."></textarea>
                </div>

                <button type="button" className="w-full mt-4 bg-brand-gold text-brand-midnight font-black text-xs uppercase tracking-widest py-5 rounded-xl hover:bg-brand-white hover:scale-[1.02] transition-all duration-300 shadow-[0_10px_30px_rgba(197,177,126,0.15)]">
                  Transmit Request
                </button>
              </form>
            </div>
         </div>
      </section>

      {/* Fixed Call to Action - Theme Element */}
      <div className="fixed bottom-8 right-8 z-50">
        <a href="#contact" className="inline-flex items-center gap-2 bg-brand-ocean text-brand-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-[0_10px_40px_rgba(32,59,74,0.4)] hover:bg-brand-cyber hover:scale-105 transition-all duration-300 border border-brand-white/10">
          Elevate Your Brand
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-brand-midnight py-10 px-8 md:px-16 relative z-10 border-t border-brand-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-4">
            <img src="https://i.ibb.co/KzzPsXjs/image.png" alt="BCON Adlabs Logo" className="h-10 w-auto opacity-70" />
            <div className="text-xl font-black tracking-tighter text-brand-white opacity-80">
              Bcon <span className="text-brand-cyber">Adlabs</span>
            </div>
          </div>
          <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 text-brand-white">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
            <span>&copy; {new Date().getFullYear()} Intelligent Infrastructure.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
