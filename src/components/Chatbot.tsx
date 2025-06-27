"use client";

import { useRef, useState } from 'react';
import { FiSend } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FiLoader } from "react-icons/fi";
import { BsChat } from "react-icons/bs";

type Message = {
    role: "user" | "assistant";
    content: string;
};

export default function Chatbot() {

    const [isChatOpen, setIsChatOpen] = useState(false);
    const refChat = useRef(null);

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = { role: "user", content: input };

        const newMessages: Message[] = [...messages, userMessage];

        setMessages(newMessages);
        setInput("");
        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
            });

            const data = await res.json();

            const aiMessage: Message = {
                role: "assistant",
                content: data.choices?.[0]?.message?.content || "No response.",
            };

            setMessages([...newMessages, aiMessage]);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <div className='bg-amber-700 z-50 fixed w-[50px] h-[50px] flex justify-center items-center rounded-full right-4 bottom-30 cursor-pointer'
                onClick={() => setIsChatOpen(!isChatOpen)}>
                <BsChat className='w-5 h-5' />
            </div>
            <div ref={refChat} className={`z-50 fixed right-4 bottom-45 max-w-2xl mx-auto p-4 flex flex-col gap-4 font-heebo text-black text-[14px] bg-white rounded-md border-1 border-stone-400
        h-fit transition-all w-[450px] duration-300 ${isChatOpen ? 'block' : 'hidden'}`}>
                <div className='w-full flex justify-between px-2 mb-3'>
                    <h3 className='text-[16px] font-bold text-amber-900'>Chat with Wellnest AI</h3>
                    <IoMdClose className='w-5 h-5 cursor-pointer' onClick={() => setIsChatOpen(false)} />
                </div>
                <div className="p-4 flex flex-col overflow-y-auto h-[350px] relative">
                    {messages.length === 0 ? (
                        <p className="text-gray-500 text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                            No message yet.
                        </p>
                    ) : (
                        messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-4 p-2 rounded max-w-[80%] ${msg.role === "user"
                                    ? "bg-blue-100 text-blue-800 ml-auto text-right"
                                    : "bg-gray-200 text-gray-800 mr-auto text-left"
                                    }`}
                            >
                                {msg.content}
                            </div>
                        ))
                    )}
                </div>

                <div className="flex gap-2">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message here..."
                        className="flex-1 border border-stone-300 rounded p-2 resize-none focus:outline-stone-500 focus:outline-1"
                        rows={1}
                    />
                    <div className='bg-amber-600 px-2 py-2 flex justify-center items-center cursor-pointer rounded-md'>
                        {isLoading ? (
                            <FiLoader className="w-5 h-5 text-white" />) : (
                            <FiSend
                                onClick={handleSubmit}
                                className="w-5 h-5 text-white" />
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
