"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ isOpen, onClose }) => {
    const { 
        register, 
        watch, 
        setError, 
        handleSubmit, 
        reset, // Added reset
        formState: { errors, isSubmitting }, 
    } = useForm({
        mode: "all"
    });

    if (!isOpen) return null;

    const onSubmit = async (data) => {
        let r = await fetch("/api/hire", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        let res = await r.text()
        console.log(data, res)

        if (r.ok) {
            toast.success("Thank you, Rimsha will get back to you soon!", {
                position: "top-center",
                autoClose: 3000,
            });

            reset();

            setTimeout(() => {
                onClose();
            }, 3000);
        } else {
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <ToastContainer /> 
            
            <div className="bg-white p-8 rounded-xl shadow-2xl w-[90%] max-w-md relative text-black">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer">
                    ✕
                </button>
                <h2 className="text-2xl font-bold mb-6">Let&apos;s Work Together</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <input 
                        {...register("username", { 
                            required: { value: true, message: "This field is required" }, 
                            minLength: { value: 3, message: "Min length is 3" }, 
                            maxLength: { value: 15, message: "Max length is 15" } 
                        })} 
                        type="text" 
                        placeholder="Your Name" 
                        className="border-b-2 p-2 outline-none focus:border-black transition" 
                    />
                    {errors.username && <span className="text-red-500 text-xs">{errors.username.message}</span>}

                    <input 
                        {...register("email", { 
                            required: "Email is required", 
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } 
                        })} 
                        type="email" 
                        placeholder="Your Email" 
                        className="border-b-2 p-2 outline-none focus:border-black transition" 
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}

                    <textarea 
                        {...register("message", { required: "Please enter a message" })} 
                        placeholder="Message" 
                        className="border-b-2 p-2 outline-none focus:border-black transition h-24" 
                    />
                    {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}

                    <button 
                        disabled={isSubmitting} 
                        type="submit" 
                        className="bg-black text-white py-3 rounded-md font-semibold mt-4 hover:bg-zinc-800 disabled:bg-gray-400"
                    >
                        {isSubmitting ? "Sending..." : "Send Inquiry"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
