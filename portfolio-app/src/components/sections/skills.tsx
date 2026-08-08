'use client';

import { motion, Variants } from 'framer-motion';
import { Reveal } from '@/components/animations/reveal';
import { GradientText } from '@/components/animations/gradient-text';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { skillIconMap } from '@/components/icons';
import Particles from '@/components/backgrounds/Particles';

/* ─── Exact skills from resume ─── */
const mySkills = [
  { name: 'HTML5', image: '/images/skill_images/HTML5.jpg' },
  { name: 'CSS', image: '/images/skill_images/CSS.png' },
  { name: 'JavaScript', image: '/images/skill_images/JS.png' },
  { name: 'Python', image: '/images/skill_images/PYTHON.png' },
  { name: 'C', image: '/images/skill_images/C.png' },
  { name: 'C++', image: '/images/skill_images/C++.png' },
  { name: 'J2SE', image: '/images/skill_images/J2SE.jpg' },
  { name: 'J2EE', image: '/images/skill_images/J2EE.jpg' },
  { name: 'MySQL', image: '/images/skill_images/MySQL.png' },
  { name: 'OracleDB', image: '/images/skill_images/ORACLEDB.png' },
  { name: 'Docker', image: '/images/skill_images/DOCKER.png' },
  { name: 'REST API', image: '/images/skill_images/RESTAPI.png' },
  { name: 'Git', image: '/images/skill_images/GIT.png' },
  { name: 'GitHub', image: '/images/skill_images/GITHUB.jpg' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } },
};

/* ─── Main Skills Component ─── */
export function Skills() {
  const row1 = mySkills.slice(0, 5);
  const row2 = mySkills.slice(5, 9);
  const row3 = mySkills.slice(9, 14);

  const renderRow = (skills: typeof mySkills, rowIndex: number) => (
    <div key={rowIndex} className="flex justify-center gap-3 sm:gap-6 w-full flex-wrap sm:flex-nowrap">
      {skills.map((skill) => {
        const IconComponent = skillIconMap[skill.name];
        
        return (
          <motion.div 
            key={skill.name} 
            variants={itemVariants}
            className="flex flex-col items-center gap-2 sm:gap-3 group shrink-0"
          >
            {/* Reduced size: from w-32/w-40 to w-20/w-28 */}
            <div
              className="relative w-20 h-14 sm:w-28 sm:h-20 rounded-xl sm:rounded-2xl bg-white
                flex items-center justify-center p-2 sm:p-3
                shadow-[0_4px_12px_rgba(0,0,0,0.2)]
                transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1"
            >
              {skill.image ? (
                <img src={skill.image} alt={skill.name} className="w-full h-full object-contain drop-shadow-sm z-10" />
              ) : IconComponent ? (
                <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-md z-10" />
              ) : (
                <span className="text-black font-bold text-base z-10">
                  {skill.name.slice(0, 2)}
                </span>
              )}
            </div>

            <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
              {skill.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <SectionWrapper id="skills">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <div className="relative z-10">
        <Reveal>
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <GradientText>My Skills</GradientText>
            </h2>
            <div className="w-16 h-1 bg-green-500 mx-auto rounded-full mt-2 mb-4"></div>
          </div>
        </Reveal>

      {/* ── Staggered Layout ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col items-center gap-6 sm:gap-8 max-w-5xl mx-auto overflow-hidden px-2"
      >
        {renderRow(row1, 0)}
        {renderRow(row2, 1)}
        {renderRow(row3, 2)}
      </motion.div>
      </div>
    </SectionWrapper>
  );
}
