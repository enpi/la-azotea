import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Contacto</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dirección</h3>
            <p className="text-gray-600">Calle Principal 123<br />28001 Madrid</p>
          </div>
          
          <div className="text-center">
            <Phone className="w-8 h-8 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
            <p className="text-gray-600">+34 912 345 678</p>
          </div>
          
          <div className="text-center">
            <Clock className="w-8 h-8 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Horario</h3>
            <p className="text-gray-600">
              Martes - Domingo<br />
              13:00 - 16:00<br />
              20:00 - 23:30
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.7479999084936!2d-3.7037974846361633!3d40.41694076440221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2s!4v1647081144050!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}