import Image from "next/image";
import { GraduationCap, Landmark, HandHeart } from "lucide-react";

export const metadata = {
  title: "About Ali Sir | NCERT Decoder",
  description: "Learn more about Arbaz Akhtar (Ali Sir), author of the NCERT Decoder.",
};

export default function AboutAuthor() {
  return (
    <main className="container mx-auto max-w-4xl px-6 py-16 space-y-16">
      <div className="space-y-4 text-center">
         <h1 className="text-4xl lg:text-5xl font-extrabold font-serif">Meet Arbaz Akhtar</h1>
         <p className="text-xl text-muted-foreground font-medium italic">"Ali Sir"</p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="w-64 h-64 relative rounded-md overflow-hidden bg-secondary border border-border shadow-xl shrink-0">
          <Image 
            src="/images/IMG20260312102811.jpg.jpeg" 
            alt="Arbaz Akhtar (Ali Sir)" 
            fill 
            className="object-cover" 
            unoptimized 
          />
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-serif border-b pb-2">Academic Journey</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-4">
                 <Landmark className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                 <span>Passed high school and intermediate from <strong className="text-foreground">Hira Public School</strong>, Hanswar Ambedkar Nagar.</span>
              </li>
              <li className="flex gap-4">
                 <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                 <span>Completed graduation in Zoology and Botany from <strong className="text-foreground">RMLAU University</strong>, Faizabad.</span>
              </li>
              <li className="flex gap-4">
                 <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                 <span>Completed post-graduation (MSc) in Chemistry from <strong className="text-foreground">RMLAU University</strong>, Faizabad.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-serif border-b pb-2">Philanthropy & Organization</h2>
            <div className="flex gap-4 text-muted-foreground bg-secondary/30 p-6 rounded-lg border border-border">
               <HandHeart className="w-8 h-8 text-primary shrink-0" />
               <div>
                 <p className="font-medium text-foreground">Founder of Servants of Imam Hussain A.S organisation</p>
                 <p className="mt-2 leading-relaxed">
                   Alongside his academic pursuits, Ali Sir is deeply committed to giving back to the community and driving philanthropic efforts through his dedicated organization. His work embodies the spirit of service and educational outreach.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
