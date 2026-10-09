import { motion } from 'motion/react';
import { Shield, Users, Heart, FileCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BankOfAbyssiniaLogo from '../../banks/bank-of-abyssinia.jpg';
import GoFundMeLogo from '../../banks/gofundme.png';
import CBELogo from '../../banks/commercial-bank-of-ethiopia.png';
import BerhanBankLogo from '../../banks/berhan-bank.png';

export function Donate() {
  const bankOptions = [
    {
      name: 'Commercial Bank of Ethiopia',
      logo: CBELogo,
      accountNumber: '1000123456789',
      ifscCode: 'CBE001234',
      buttonText: 'Donate with CBE',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Bank of Abyssinia',
      logo: BankOfAbyssiniaLogo,
      accountNumber: '2000987654321',
      ifscCode: 'BOA002345',
      buttonText: 'Donate with Bank of Abyssinia',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Berhan Bank',
      logo: BerhanBankLogo,
      accountNumber: '3000555666777',
      ifscCode: 'BER003456',
      buttonText: 'Donate with Berhan Bank',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'GoFundMe',
      logo: GoFundMeLogo,
      accountNumber: 'cdtrc-fundraiser',
      ifscCode: 'GFM004567',
      buttonText: 'Donate with GoFundMe',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#129246] to-[#0F7E3C] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#F79321] rounded-full opacity-80"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/10 rounded-full"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Heart className="w-6 h-6 text-[#F79321]" />
                <span className="text-[#F79321] font-semibold">TOGETHER, WE CAN</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Donation
                <br />
                Creates Change
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Your support changes the future.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-[#F79321]" />
                  <div className="text-sm font-semibold">100% Secure</div>
                  <div className="text-xs text-white/70">Transactions</div>
                </div>
                
                <div className="text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-[#F79321]" />
                  <div className="text-sm font-semibold">Direct Impact</div>
                  <div className="text-xs text-white/70">on Lives</div>
                </div>
                
                <div className="text-center">
                  <Heart className="w-8 h-8 mx-auto mb-2 text-[#F79321]" />
                  <div className="text-sm font-semibold">Transparent &</div>
                  <div className="text-xs text-white/70">Accountable</div>
                </div>
                
                <div className="text-center">
                  <FileCheck className="w-8 h-8 mx-auto mb-2 text-[#F79321]" />
                  <div className="text-sm font-semibold">80G Tax</div>
                  <div className="text-xs text-white/70">Exemption</div>
                </div>
              </div>
            </motion.div>

            {/* Right Logo/Icon */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Large CDTRC Logo/Icon */}
                <div className="w-64 h-64 bg-gradient-to-br from-[#F79321] to-[#e87a0a] rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <Heart className="w-16 h-16 text-[#129246]" />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#129246] rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#F79321] rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Bank Selection Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose a Bank to Donate
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select your preferred bank to make a secure and trusted contribution
            </p>
            <div className="w-16 h-1 bg-[#129246] mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* Bank Options Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {bankOptions.map((bank, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src={bank.logo} 
                      alt={bank.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{bank.name}</h3>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-500 font-medium">ACCOUNT NUMBER</div>
                    <div className="text-lg font-mono text-gray-900">{bank.accountNumber}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 font-medium">IFSC CODE</div>
                    <div className="text-lg font-mono text-gray-900">{bank.ifscCode}</div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 bg-gradient-to-r ${bank.color} text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300`}
                >
                  {bank.buttonText}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-[#129246] rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Your donation is safe and secure.
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We use industry-standard encryption to protect your information.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-[#129246] rounded-full flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  All donations are eligible for 80G tax exemption under Section 80G of the Income Tax Act.
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-[#129246] rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thank you for your kindness and support.
            </h2>
            <p className="text-xl text-[#129246] font-medium mb-8">
              Together, we can build a better tomorrow.
            </p>

            <Link to="/programs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#129246] text-white rounded-full font-semibold hover:bg-[#0f7a39] transition-colors shadow-lg"
              >
                Learn About Our Programs
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}