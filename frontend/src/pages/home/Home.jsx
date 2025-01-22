import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Testimonials from '@/components/testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center  ml-auto mr-auto px-14 py-20 max-w-10xl bg-blue-100 rounded-lg shadow-lg bg-cover bg-center">
        <div className="absolute inset-0 bg-blue-200 bg-opacity-50" />
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            animate={{ x: 20,
                        
                        scale: 1}}
            transition={{ ease: "easeOut", duration: 1 }}
                        className="max-w-3xl mx-auto text-center space-y-8"
          >


            <motion.h1 
             animate={{ x: [0, 50, 0] }} 
            
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-800 animate-bounce">
              Welcome to our Skill-Hub Platform
            </motion.h1>
            <motion.p  animate={{ x: [0, 50, 0] }} 
            
            className="text-lg sm:text-xl text-black-500 animate-none">
              Your journey to learning, growth, and excellence starts here.
            </motion.p>
            <Button
            
            size="lg" asChild className="w-auto md:w-auto">
             
              <Link to="/courses" className="inline-flex items-center justify-center">
                <Clock className="mr-2 h-5 w-5 animate-spin text-red-500 bold" />
                Hurry Up!
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      <Testimonials />
    </>
  );
}