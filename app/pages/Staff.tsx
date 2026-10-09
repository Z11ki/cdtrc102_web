import { motion } from 'motion/react';
import { Mail, Linkedin } from 'lucide-react';
import DawitPhoto from '../../team/Dawit.jpg';
import DigafePhoto from '../../team/Digafe.jpg';
import GulilatPhoto from '../../team/Gulilat.jpg';
import MihiretPhoto from '../../team/Mihiret.jpg';
import TigistPhoto from '../../team/Tigist.jpg';

export function Staff() {
  const staffMembers = [
    {
      name: 'Gulilat',
      position: 'Executive Director',
      bio: 'With extensive experience in child development, Gulilat leads CDTRC with passion and expertise.',
      image: GulilatPhoto,
      email: 'gulilat@cdtrc.org'
    },
    {
      name: 'Digafe',
      position: 'Senior Training Specialist',
      bio: 'Digafe designs and oversees all training curricula, ensuring they meet the highest educational standards.',
      image: DigafePhoto,
      email: 'digafe@cdtrc.org'
    },
    {
      name: 'Dawit',
      position: 'Camp Training Facilitator',
      bio: 'Dawit specializes in camp training facilitation and creates engaging learning experiences for participants.',
      image: DawitPhoto,
      email: 'dawit@cdtrc.org'
    },
    {
      name: 'Mihiret',
      position: 'Camp Training Facilitator',
      bio: 'Mihiret facilitates camp training programs and ensures effective delivery of educational activities.',
      image: MihiretPhoto,
      email: 'mihiret@cdtrc.org'
    },
    {
      name: 'Tigist',
      position: 'Camp Training Facilitator',
      bio: 'Tigist leads camp training initiatives and develops innovative approaches to participant engagement.',
      image: TigistPhoto,
      email: 'tigist@cdtrc.org'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--sea-blue)]/10 via-white to-[var(--yellow-accent)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-[var(--sea-blue)]">Team</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--sea-blue)] to-[var(--yellow-accent)] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our dedicated team of experts brings decades of combined experience in child development, 
              education, and professional training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {staffMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                        member.name === 'Dawit' ? 'object-[center_30%]' :
                        member.name === 'Mihiret' ? 'object-[center_20%]' :
                        member.name === 'Digafe' ? 'object-top' :
                        'object-center'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Social Icons - appear on hover */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-[var(--sea-blue)] hover:text-white transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                      <a 
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-[var(--sea-blue)] hover:text-white transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-[var(--sea-blue)] font-semibold mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
