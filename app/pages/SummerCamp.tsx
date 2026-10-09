import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Calendar, 
  Users, 
  Award, 
  Clock, 
  MapPin, 
  Star,
  CheckCircle,
  Target,
  Heart,
  Zap
} from 'lucide-react';

export function SummerCamp() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 bg-gradient-to-br from-[#129246] via-[#1BA954] to-[#0F7E3C] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1] 
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/5 blur-xl"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1.1, 1, 1.1] 
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-32 left-20 w-96 h-96 rounded-full bg-white/3 blur-2xl"
          />
          
          {/* Fun Pattern Overlay */}
          <div className="absolute inset-0 opacity-10"
               style={{
                 backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 2px, transparent 2px)',
                 backgroundSize: '60px 60px'
               }}>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full text-white font-medium text-sm"
              >
                <span className="text-yellow-300">🏕️</span>
                Summer 2024 Program Now Open
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
              >
                CDTRC Summer Camp
                <br />
                <span className="text-[#F79321]">Adventure Awaits!</span>
              </h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-white/90 leading-relaxed max-w-xl"
              >
                Join us for an unforgettable summer experience filled with learning, fun, creativity, and friendship. Our camp combines educational activities with exciting adventures designed for children aged 6-16.
              </motion.p>

              {/* Key Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-2 gap-4 text-white/90"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#F79321]" />
                  <span className="font-medium">8 Weeks Program</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#F79321]" />
                  <span className="font-medium">Ages 6-16</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#F79321]" />
                  <span className="font-medium">8AM - 4PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#F79321]" />
                  <span className="font-medium">CDTRC Campus</span>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/summer-camp/register">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-[#F79321] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Register Now
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-r from-[#F79321] to-[#e87a0a]"
                    />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20">
                <div className="aspect-[4/3] bg-gradient-to-br from-white/20 to-white/5 p-8 flex items-center justify-center">
                  {/* Placeholder for camp image */}
                  <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center text-white/70">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏕️</div>
                      <p className="text-lg font-medium">Summer Camp Activities</p>
                      <p className="text-sm opacity-75">Learning through Fun</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[#F79321]/20 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20"
              >
                <Star className="w-8 h-8 text-[#F79321]" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20"
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Program <span className="text-[#129246]">Overview</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our summer camp provides a perfect blend of educational enrichment and recreational activities, 
              designed to foster creativity, build confidence, and create lasting memories.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProgramCard
              icon={<Target />}
              title="Learning Objectives"
              description="Develop critical thinking, creativity, and social skills through interactive workshops and team activities."
              delay={0}
            />
            <ProgramCard
              icon={<Clock />}
              title="Daily Schedule"
              description="8:00 AM - 4:00 PM daily with structured activities, meals, and supervised rest periods."
              delay={0.1}
            />
            <ProgramCard
              icon={<Users />}
              title="Eligibility"
              description="Open to children aged 6-16. Grouped by age for age-appropriate activities and learning."
              delay={0.2}
            />
            <ProgramCard
              icon={<Award />}
              title="Key Benefits"
              description="Build friendships, gain confidence, learn new skills, and have amazing summer memories!"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Camp <span className="text-[#129246]">Activities</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ActivityCard
              emoji="🎨"
              title="Arts & Crafts"
              description="Express creativity through painting, sculpting, and various craft projects."
              delay={0}
            />
            <ActivityCard
              emoji="⚽"
              title="Sports & Games"
              description="Team sports, outdoor games, and physical activities to stay active and healthy."
              delay={0.1}
            />
            <ActivityCard
              emoji="🔬"
              title="Science Experiments"
              description="Hands-on experiments and STEM activities to spark curiosity and learning."
              delay={0.2}
            />
            <ActivityCard
              emoji="🎭"
              title="Drama & Performance"
              description="Theater workshops, storytelling, and performance arts to build confidence."
              delay={0.3}
            />
            <ActivityCard
              emoji="🌿"
              title="Nature Exploration"
              description="Outdoor adventures, nature walks, and environmental education activities."
              delay={0.4}
            />
            <ActivityCard
              emoji="📚"
              title="Reading & Writing"
              description="Story time, creative writing workshops, and literacy building activities."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#129246] to-[#0F7E3C] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-96 h-96 rounded-full bg-[#F79321] blur-3xl" />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready for an Amazing Summer?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Limited spots available! Register now to secure your child's place in our exciting summer camp program.
            </p>
            <Link to="/summer-camp/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 bg-[#F79321] text-white rounded-full font-semibold text-lg overflow-hidden shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Register Today
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ProgramCard({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay: number; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="w-12 h-12 bg-[#129246]/10 rounded-xl flex items-center justify-center text-[#129246] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function ActivityCard({ 
  emoji, 
  title, 
  description, 
  delay 
}: { 
  emoji: string; 
  title: string; 
  description: string; 
  delay: number; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="text-4xl mb-4 text-center">{emoji}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-center">{description}</p>
    </motion.div>
  );
}