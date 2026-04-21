"use client";

import { useState } from "react";
import { Send, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export default function Checkout() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    address: "",
    state: "",
    pincode: "",
    country: "India",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep1 = () => {
    if (!formData.name || !formData.number) {
       alert("Please fill in your name and phone number.");
       return;
    }
    setStep(2);
  };

  const handleNextStep2 = () => {
    if (!formData.address || !formData.state || !formData.pincode) {
       alert("Please fill in complete shipping details.");
       return;
    }
    setStep(3);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        alert("There was an error processing your order. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const upiUrl = `upi://pay?pa=sabiralijlp5@oksbi&pn=Ali%20Sir%20Academy&cu=INR`;

  return (
    <main className="container mx-auto max-w-4xl px-6 py-16">
      <div className="text-center space-y-4 mb-12">
         <h1 className="text-4xl font-extrabold font-serif">Checkout</h1>
         <p className="text-muted-foreground text-lg">Pre-order your copy of NCERT DECODER today.</p>
      </div>

      <div className="bg-card rounded-xl border border-border shadow-sm p-6 md:p-12">
        {success ? (
          <div className="flex flex-col items-center justify-center text-center space-y-6 py-12 animate-in zoom-in-95 duration-500">
            <CheckCircle2 className="w-20 h-20 text-green-600" />
            <div className="space-y-4">
               <h3 className="text-3xl font-bold font-serif">Order Received!</h3>
               <p className="text-muted-foreground max-w-md mx-auto">
                 Thank you, {formData.name}, for your pre-order. Your details have been securely sent. We will verify your transaction and contact you via email or phone shortly.
               </p>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Progress indicator */}
            <div className="flex items-center justify-center mb-10 text-sm font-medium">
               <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-primary bg-primary/10' : 'border-border'}`}>1</div>
                  <span className="hidden sm:inline">Details</span>
               </div>
               <div className={`w-12 h-px mx-4 ${step >= 2 ? 'bg-primary' : 'bg-border'}`}></div>
               <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-primary bg-primary/10' : 'border-border'}`}>2</div>
                  <span className="hidden sm:inline">Shipping</span>
               </div>
               <div className={`w-12 h-px mx-4 ${step >= 3 ? 'bg-primary' : 'bg-border'}`}></div>
               <div className={`flex items-center gap-2 ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-primary bg-primary/10' : 'border-border'}`}>3</div>
                  <span className="hidden sm:inline">Payment</span>
               </div>
            </div>

            {step === 1 && (
              <div className="space-y-8 animate-in fade-in run-in">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-medium">Full Name <span className="text-red-500">*</span></label>
                       <input required name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 bg-secondary rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-medium">Phone Number <span className="text-red-500">*</span></label>
                       <input required name="number" value={formData.number} onChange={handleInputChange} className="w-full px-4 py-3 bg-secondary rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="e.g. +91 9876543210" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address (Optional)</label>
                    <input name="email" type="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-secondary rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Enter your email" />
                 </div>
                 <button type="button" onClick={handleNextStep1} className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition flex justify-center items-center gap-2">
                    Next Step <ChevronRight className="w-5 h-5"/>
                 </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in run-in">
                 <div className="space-y-2">
                    <label className="text-sm font-medium">Shipping Address <span className="text-red-500">*</span></label>
                    <textarea required name="address" value={formData.address} onChange={handleInputChange} rows={3} className="w-full px-4 py-3 bg-secondary rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none" placeholder="Your complete home or school address" />
                 </div>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-medium">State <span className="text-red-500">*</span></label>
                       <input required name="state" value={formData.state} onChange={handleInputChange} className="w-full px-4 py-3 bg-secondary rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="e.g. Uttar Pradesh" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-medium">Pincode <span className="text-red-500">*</span></label>
                       <input required name="pincode" value={formData.pincode} onChange={handleInputChange} className="w-full px-4 py-3 bg-secondary rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="e.g. 224122" />
                    </div>
                 </div>
                 <div className="flex gap-4 pt-6">
                    <button type="button" onClick={() => setStep(1)} className="w-1/3 py-4 bg-transparent border border-border text-foreground font-semibold rounded-md hover:bg-secondary transition flex justify-center items-center gap-2">
                       <ChevronLeft className="w-5 h-5"/> Back
                    </button>
                    <button type="button" onClick={handleNextStep2} className="flex-1 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition flex justify-center items-center gap-2">
                       Continue to Payment <ChevronRight className="w-5 h-5"/>
                    </button>
                 </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8 flex flex-col items-center animate-in fade-in run-in">
                 <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold font-serif">Complete Your Payment</h3>
                    <p className="text-sm text-muted-foreground">Open Google Pay, PhonePe, or Paytm and scan the QR below.</p>
                 </div>
                 
                 <div className="p-6 bg-white rounded-xl shadow-md border-4 border-primary/20">
                   <QRCodeSVG value={upiUrl} size={220} level="H" />
                 </div>
                 
                 <div className="w-full text-center space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Or transfer directly to UPI ID:</p>
                    <p className="font-bold text-lg font-mono tracking-wide text-foreground bg-secondary py-2 rounded border border-border max-w-sm mx-auto">
                      sabiralijlp5@oksbi
                    </p>
                 </div>

                 <div className="w-full flex gap-4 mt-8 pt-6 border-t border-border">
                    <button type="button" onClick={() => setStep(2)} className="w-1/3 py-4 bg-transparent border border-border text-foreground font-semibold rounded-md hover:bg-secondary transition flex justify-center items-center gap-2">
                       <ChevronLeft className="w-5 h-5"/> Back
                    </button>
                    <button disabled={loading} onClick={handleSubmit} className="flex-1 py-4 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition flex justify-center items-center gap-2">
                       {loading ? (
                          <span className="animate-pulse">Processing Order...</span>
                       ) : (
                          <>I Have Paid <Send className="w-4 h-4 ml-1"/></>
                       )}
                    </button>
                 </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
