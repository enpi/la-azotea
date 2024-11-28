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
            <p className="text-gray-600">
              P.º Marítimo el Morche, 5<br />
              29793 El Morche, Málaga
            </p>
          </div>
          
          <div className="text-center">
            <Phone className="w-8 h-8 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
            <p className="text-gray-600">621 28 11 72</p>
          </div>
          
          <div className="text-center">
            <Clock className="w-8 h-8 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Horario</h3>
            <p className="text-gray-600">
              <strong>Jueves:</strong> 8:00–24:00<br />
              <strong>Viernes:</strong> 8:00–24:00<br />
              <strong>Sábado:</strong> 8:00–24:00<br />
              <strong>Domingo:</strong> 8:00–24:00<br />
              <strong>Lunes:</strong> Cerrado<br />
              <strong>Martes:</strong> 8:00–24:00<br />
              <strong>Miércoles:</strong> 8:00–24:00
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.407296179855!2d-4.008516125140557!3d36.727666724464374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd721260ae598f23%3A0x3de79956b1e11cfd!2sPaseo%20Mar%C3%ADtimo%20el%20Morche%2C%205%2C%2029793%20El%20Morche%2C%20M%C3%A1laga%2C%20Spain!5e0!3m2!1sen!2ses!4v1633510282167!5m2!1sen!2ses"
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
