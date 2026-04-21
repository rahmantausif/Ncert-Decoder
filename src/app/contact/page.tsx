"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const msgData = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(msgData),
      });

      if (res.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (err) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mx-auto max-w-6xl px-6 py-16">
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <h1 className="text-4xl font-extrabold font-serif">Contact Us</h1>
        <p className="text-muted-foreground text-lg">
          Have a question about the book, pre-orders, or need educational guidance? We're here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="bg-secondary/30 p-8 rounded-xl border border-border space-y-6">
              <h3 className="text-xl font-bold font-serif border-b border-border pb-4">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground">
                   <Phone className="w-5 h-5 text-primary" />
                   <span>+91 8726608091</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                   <Mail className="w-5 h-5 text-primary" />
                   <span>sabiralijlp5@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                   <MapPin className="w-5 h-5 text-primary" />
                   <span>Available across India via Pre-order</span>
                </div>
              </div>
           </div>
        </div>

        <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
          {success ? (
             <div className="h-full flex flex-col justify-center items-center text-center space-y-4 py-12">
               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                 <Send className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-bold">Message Sent!</h3>
               <p className="text-muted-foreground">Thank you for reaching out to Ali Sir Academy. We will get back to you shortly.</p>
               <button onClick={() => setSuccess(false)} className="mt-4 px-6 py-2 border border-border rounded-md hover:bg-secondary font-medium">Send Another</button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="space-y-2">
                 <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                 <input required id="name" name="name" className="w-full px-4 py-3 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="John Doe" />
               </div>
               <div className="space-y-2">
                 <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                 <input required type="email" id="email" name="email" className="w-full px-4 py-3 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="john@example.com" />
               </div>
               <div className="space-y-2">
                 <label htmlFor="message" className="text-sm font-medium">Message</label>
                 <textarea required id="message" name="message" rows={4} className="w-full px-4 py-3 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none" placeholder="How can we help you?" />
               </div>
               <button disabled={loading} type="submit" className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition flex justify-center items-center gap-2">
                 {loading ? "Sending..." : "Send Message"}
               </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
