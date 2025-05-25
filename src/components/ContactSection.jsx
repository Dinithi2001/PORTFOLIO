import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "../lib/utils"
import { useToast } from "../hooks/use-toast"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {

    const {toast} = useToast();
    const [submitting, setSubmitting] = useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs.sendForm(
      'service_nbzl6p5',       // Replace with your EmailJS Service ID
      'template_y5f42pf',      // Replace with your EmailJS Template ID
      form.current,
      'd8F7_2uD0Fn-vCMT3'        // Replace with your EmailJS User/Public Key
    )
    .then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you! I will get back to you as soon as possible."
      });
      setSubmitting(false);
      e.target.reset(); // Clear the form on success
    })
    .catch((error) => {
      toast({
        title: "Error",
        description: "Failed to send message, please try again later."
      });
      setSubmitting(false);
      console.error(error);
    });
  };

    return(
        <section id="contact"
                 className="py-24 px-4 relative bg-secondary/30 "
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get IN<span className="text-primary"> Touch</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.I'm always open to discussing new opportunities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>


                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="">
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:dinithimadushika2001@gmail.com" className="text-muted-foreground hover:text-primary transition-colors ">dinithimadushika2001@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="">
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:077 978 2584" className="text-muted-foreground hover:text-primary transition-colors ">+(94) 77 978 2584</a>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="">
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors ">Baduraliya, Sri Lanka</a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/dinithi-madushika-324978252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                   target="_blank"
                                >
                                    <Linkedin/>
                                </a>
                                <a href="https://www.instagram.com/dinithi8938?igsh=dXBjZTNyZHlwa2dl"
                                   target="_blank"
                                >
                                    <Instagram/>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100072583841007"
                                   target="_blank"
                                >
                                    <Facebook/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs"
                           
                    >
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form className="space-y-6"
                              ref={form}
                              onSubmit={handleSubmit} >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 ">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus-ring-2 focus:ring-primary"
                                    placeholder="Enter Your Name"
                                    />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 ">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus-ring-2 focus:ring-primary"
                                    placeholder="Enter Your Email"
                                    />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 ">Message</label>
                                <textarea 
                                    type="text" 
                                    id="message" 
                                    name="message" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus-ring-2 focus:ring-primary resize-none"
                                    placeholder="Enter Your message"
                                    />
                            </div>

                            <button type="submit" 
                                    disabled={submitting}
                                    className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>

                                 {submitting ? "Sending..." : "Send Message"}
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}