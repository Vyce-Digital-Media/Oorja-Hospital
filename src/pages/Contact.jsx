import React from 'react';
import ContactContent from '../components/ui/ContactContent';

export default function Contact() {
  return (
    <div className="pt-20 sm:pt-24 overflow-hidden bg-white text-slate-900">
      <ContactContent showHeader={true} />
    </div>
  );
}
