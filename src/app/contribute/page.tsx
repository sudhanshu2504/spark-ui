'use client'
import React, {useEffect,useState} from 'react'
import {Spotlight} from '@/components/ui/spotlight';
import {Spinner} from "@nextui-org/react";
import Image from 'next/image';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {cn} from '@/utils/cn';
import contribute from './contribute.png';

function ContributeForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState("");
  async function submitForm(event: { preventDefault: () => void; currentTarget: any; stopPropagation: () => void; }) {
    setFormState("Sending");
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const formData = new FormData();
      try {
        formData.append("Email", email);
        formData.append("Github", githubUsername);
        formData.append("Name", name);
        formData.append("Message", message);
        await fetch(
            "https://script.google.com/macros/s/AKfycbxqZkO8RZfaJBfnyVXB_TUXj2yDrXLE8XFJnM_6V2g1SkGT-TROmrBxFTPTCZp4Q-uHRg/exec",
            {
                method: "POST",
                body: formData,
              }
            );
        setFormState("Sent");
        setTimeout(() => {
          setName("");
          setGithubUsername("");
          setEmail("");
          setMessage("");
          setFormState("");
        }, 5000);
      } catch (error) {
        console.error("Error:", error);
        setFormState("Error");
        setTimeout(() => {
          setFormState("");
        }, 5000);
      }
  }

  return (
    <div className="w-full lg:w-auto rounded-none md:rounded-2xl">
      <form onSubmit={submitForm}>
        <LabelInputContainer>
          <Label className="text-white font-light my-1" htmlFor="name">Your Name</Label>
          <Input id="name" name="Name" type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
        </LabelInputContainer>
        <LabelInputContainer>
          <Label className="text-white font-light my-1" htmlFor="Github">GitHub Username</Label>
          <Input id="Github" name="Github" type="text" value={githubUsername} onChange={(e)=>setGithubUsername(e.target.value)} required/>
        </LabelInputContainer>
        <LabelInputContainer>
          <Label className="text-white font-light my-1" htmlFor="email">Email Address</Label>
          <Input id="email" name="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        </LabelInputContainer>
        <LabelInputContainer>
          <Label className="text-white font-light my-1" htmlFor="message">Why do you want to contribute?</Label>
          <Input id="message" name="Message" type="text" value={message} onChange={(e)=>setMessage(e.target.value)} required/>
        </LabelInputContainer>
        
        <button
          className="bg-yellow-400 align-middle relative text-lg mx-auto block w-full px-8 text-white font-medium rounded-md h-12 hover:scale-110 transition-transform mt-4"
          type="submit"
        >
          {(formState === "") && "Join Waitlist →"}
          {(formState === "Sending") &&  <Spinner color="default" className="font-bold"/>}
          {(formState === "Sent") && "Succesfully Applied"}
          {(formState === "Error") && "Request Failed, Try Again!"}

        </button>
          <BottomGradient />
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-4 h-[1px] w-full" />
      </form>
    </div>
  );
}
function Page() {
  return (
    <div className='min-h-screen'>
        <div className="h-[50rem] w-full bg-black bg-grid-white/[0.1] relative flex items-start justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 bg-black flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      <div className=''>
        <div className="py-16 px-6 text-white w-full text-lg md:text-3xl font-black text-center">
          Looking forward to make a Contribution as a Developer?
          <div className='text-center w-full text-gray-500 text-sm md:text-lg'>Join the waitlist by filling the form below</div>
        </div>
        <div className="max-w-5xl h-auto md:mx-auto rounded-2xl mx-2 p-10 text-xl md:text-4xl font-bold border-[0.89px] border-opacity-35 border-[#9F9F9F] text-white  flex flex-row justify-evenly flex-wrap backdrop-blur-3xl" style={{background: "linear-gradient(73.32deg, rgba(255, 255, 0, 0.08), rgba(252, 252, 253, 0.0632))"
      }}>
          <div className='lg:w-1/2 w-full min-h-80 my-auto'>
            <ContributeForm/>
          </div>
          <div className='hidden lg:block w-1/2 h-full min-h-96'>
            <Image src={contribute} alt="SparkUI" className="h-auto w-full p-4 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
    </>
  );
};

type LabelInputContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const LabelInputContainer = ({
  children,
  className,
}: LabelInputContainerProps) => {
  return (
    <div className={cn("flex flex-col mb-1 w-full", className)}>
      {children}
    </div>
  );
};
export default Page
