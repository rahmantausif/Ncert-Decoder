import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "The Book | NCERT Decoder",
  description: "Learn more about the NCERT Decoder book for Class 10th Science.",
};

export default function AboutBook() {
  return (
    <main className="container mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
           <h1 className="text-4xl lg:text-5xl font-extrabold font-serif">Decoding the NCERT Syllabus</h1>
           <p className="text-lg text-muted-foreground leading-relaxed">
             Class 10th Science can be intimidating, but it doesn't have to be. The <strong className="text-foreground">NCERT DECODER</strong> is methodically designed to strip away the complexity of traditional textbooks and present the fundamental concepts of science in an accessible, conversational, and highly structured format.
           </p>

           <div className="space-y-4 pt-6">
             <h3 className="text-xl font-bold font-serif">What's inside?</h3>
             <ul className="space-y-3">
               {[
                 "Complete coverage of the Class 10th Science NCERT Syllabus",
                 "Complex scientific concepts explained in easy, colloquial language",
                 "Structured for independent self-study",
                 "High-yield summaries to accelerate board exam preparation",
                 "Simulates the tone and guidance of a dedicated classroom teacher"
               ].map((item, i) => (
                 <li key={i} className="flex gap-3 text-muted-foreground">
                   <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
           </div>
           
           <div className="pt-8">
             <Link 
               href="/checkout"
               className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md shadow-lg hover:bg-primary/90 transition inline-block"
             >
               Pre-order Now
             </Link>
           </div>
        </div>
        
        <div className="flex-1 w-full max-w-md">
           <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border border-border bg-secondary">
             <Image 
                src="/images/ncert_decoder_cover.png" 
                alt="NCERT Decoder Book Cover" 
                fill 
                className="object-cover" 
                unoptimized
             />
           </div>
        </div>
      </div>
    </main>
  );
}
