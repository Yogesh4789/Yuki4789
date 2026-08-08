'use client';

import { motion, Variants } from 'framer-motion';
import { Reveal } from '@/components/animations/reveal';
import { GradientText } from '@/components/animations/gradient-text';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { skillIconMap } from '@/components/icons';

/* ─── Exact skills from resume ─── */
const mySkills = [
  { name: 'HTML5' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'Python' },
  { name: 'C' },
  { name: 'C++' },
  { name: 'J2SE' },
  { name: 'J2EE' },
  { name: 'MySQL' },
  { name: 'OracleDB' },
  { name: 'Docker' },
  { name: 'REST API' },
  { name: 'Git' },
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
  // Split into rows of 5, 4, 4
  const row1 = mySkills.slice(0, 5);
  const row2 = mySkills.slice(5, 9);
  const row3 = mySkills.slice(9, 13);
  
  const renderRow = (skills: typeof mySkills, rowIndex: number) => (
    <div key={rowIndex} className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 w-full">
      {skills.map((skill) => {
        const IconComponent = skillIconMap[skill.name];
        
        return (
          <motion.div 
            key={skill.name} 
            variants={itemVariants}
            className="flex flex-col items-center gap-3 group"
          >
            {/* Darker rounded rectangle container to match app theme */}
            <div
              className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl bg-zinc-900/50 border border-white/10
                flex items-center justify-center p-4 backdrop-blur-sm
                shadow-lg
                transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:bg-zinc-800/80"
            >
              {IconComponent ? (
                <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 drop-shadow-md z-10 transition-colors group-hover:text-primary" />
              ) : (
                <span className="text-white/80 font-bold text-lg z-10">
                  {skill.name.slice(0, 2)}
                </span>
              )}
            </div>

            {/* Skill Name */}
            <span className="text-sm sm:text-base font-semibold text-muted-foreground group-hover:text-white transition-colors tracking-wide">
              {skill.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <SectionWrapper id="skills">
      {/* Centered Header */}
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <GradientText>My Skills</GradientText>
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded-full mt-2 mb-4"></div>
        </div>
      </Reveal>

      {/* ── Staggered Grid Layout (5, 4, 4) ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col items-center gap-6 sm:gap-10 max-w-5xl mx-auto"
      >
        {renderRow(row1, 0)}
        {renderRow(row2, 1)}
        {renderRow(row3, 2)}
      </motion.div>
    </SectionWrapper>
  );
}
