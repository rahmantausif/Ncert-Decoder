"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, BookOpen, Clock, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col pt-12 lg:pt-24 pb-20">
      {/* Background Decor - clean and subtle */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-center items-center overflow-hidden opacity-50">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/50 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-32 w-full">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-secondary/80 text-foreground text-sm font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Pre-orders available for September 2026
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
              Master Class 10th <br />
              <span className="text-primary font-serif italic">Science</span> Like Never Before.
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Ali Sir Academy presents the <strong className="text-foreground">NCERT DECODER</strong>. The ultimate study material written in easy language, transforming complex concepts into accessible knowledge for every student.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <Link 
                href="/checkout"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md shadow-lg shadow-primary/20 hover:bg-primary/90 transition flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                Pre-order Book Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                 href="/about-book"
                 className="px-8 py-4 bg-transparent text-foreground border border-border rounded-md hover:bg-secondary transition flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Explore Syllabus
              </Link>
            </div>
          </div>
          
          <div className="flex-1 relative flex justify-center w-full animate-in fade-in zoom-in-95 duration-1000 delay-200 fill-mode-both">
            <div className="relative w-full max-w-sm lg:max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border border-border group bg-secondary/50">
               <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10" />
               <Image 
                src="/images/ncert_decoder_cover.png" 
                alt="NCERT Decoder Book Cover" 
                fill 
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                unoptimized
               />
               <div className="absolute bottom-6 left-6 z-20 space-y-1">
                 <p className="text-primary font-bold tracking-wider text-sm">CLASS 10TH</p>
                 <h3 className="text-2xl font-serif font-bold text-foreground">NCERT DECODER</h3>
                 <p className="text-muted-foreground font-medium text-sm">By Ali Sir</p>
               </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-border">
            <div className="p-8 rounded-xl bg-secondary/30 border border-border/50 flex flex-col gap-4">
               <BookOpen className="w-8 h-8 text-primary"/>
               <h3 className="text-xl font-bold font-serif">Easy Language</h3>
               <p className="text-muted-foreground leading-relaxed">Written precisely in a simple language to maximize conceptual understanding for self-study students without external tuition.</p>
            </div>
            
            <div className="p-8 rounded-xl bg-secondary/30 border border-border/50 flex flex-col gap-4">
               <Star className="w-8 h-8 text-primary"/>
               <h3 className="text-xl font-bold font-serif">Board Preparation</h3>
               <p className="text-muted-foreground leading-relaxed">Considered the foremost science book for impending exam preparation, directly matching the core NCERT curriculum.</p>
            </div>
            
            <div className="p-8 rounded-xl bg-secondary/30 border border-border/50 flex flex-col gap-4">
               <Clock className="w-8 h-8 text-primary"/>
               <h3 className="text-xl font-bold font-serif">Teacher's Prescence</h3>
               <p className="text-muted-foreground leading-relaxed">While books can't wholly replace a teacher, the NCERT Decoder's tone explicitly simulates the presence and guidance of an educator.</p>
            </div>
        </section>

        {/* Central Call to Action */}
        <section className="text-center space-y-8 bg-primary/5 rounded-3xl p-12 lg:p-24 border border-primary/10">
          <h2 className="text-4xl lg:text-5xl font-extrabold font-serif">Ready to elevate your studies?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Pre-order the NCERT Decoder today to guarantee your copy ships exactly on launch day in September 2026. Secure your pathway to absolute board exam confidence.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/checkout"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md shadow-lg hover:bg-primary/90 transition flex items-center justify-center gap-2"
            >
              Order Your Copy <ChevronRight className="w-5 h-5"/>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
