import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: "Abhishek Kumar Chaurasia",
    position: "Full Stack Developer",
    message: "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQH2PfGxfoh8zw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714407017903?e=1743033600&v=beta&t=28YxQ8XaLE6egXzWDRQavtEOOAp1teErFvgsLk8ZNxo"
  },
  {
    id: 2,
    name: "Abhishek Garg",
    position: "Full Stack Developer",
    message: "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFeHd_WnEjQnQ/profile-displayphoto-shrink_400_400/B56ZPZs25wG8Ag-/0/1734524236662?e=1743033600&v=beta&t=FpeyeVn4kJ_TzxAxYa1umR-lzSxewtfuO3F1bzpk2AY"
  },
  {
    id: 3,
    name: "Aarav Jain",
    position: "Full Stack Developer",
    message: "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEX_miMWN-VUg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706696776707?e=1743033600&v=beta&t=avUNKHsRptxvI36nZjwbDWOKqwdsBQGrEogBkUkkTn4"
  },
  {
    id: 4,
    name: "Aditya Dubey",
    position: "Full Stack Developer",
    message: "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
    image: "https://media.licdn.com/dms/image/v2/D5635AQEfOBaRv7ZYaw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727538937307?e=1738130400&v=beta&t=Etwdo3ARG4GacrXVJ7-AX7WK3VufEd2AiH81VO9jNrM"
  }
];

const Testimonials = () => (
  <section className="py-16 sm:py-24 bg-black">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white animate-pulse">What our students say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.8 }}
          >
            <Card className="h-full bg-gray-800">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <p className="text-gray-300 animate-pulse">{testimonial.message}</p>
                <div>
                  <p className="font-semibold text-white animate-bounce">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;