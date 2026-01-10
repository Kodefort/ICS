"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { MessageCircle, X, Send, ChevronLeft, User, Bot } from 'lucide-react';

type Sender = 'user' | 'agent';

interface Message {
    id: string;
    text: string;
    sender: Sender;
    timestamp: Date;
}

export default function MessengerWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState<'home' | 'chat'>('home');
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, view]);

    // Initial greeting when entering chat
    useEffect(() => {
        if (view === 'chat' && messages.length === 0) {
            setIsTyping(true);
            setTimeout(() => {
                setIsTyping(false);
                const initialMessage: Message = {
                    id: Date.now().toString(),
                    text: "Hello! Welcome to ICS support. How can we help you today?",
                    sender: 'agent',
                    timestamp: new Date()
                };
                setMessages([initialMessage]);
            }, 1000);
        }
    }, [view, messages.length]);

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputText.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputText,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        simulateAgentResponse(inputText);
    };

    const simulateAgentResponse = (userText: string) => {
        setIsTyping(true);

        // Simulate varying "thinking" delay based on query length
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            setIsTyping(false);

            const lowerText = userText.toLowerCase();
            let responseText = "";

            // Knowledge Base Definitions
            const knowledgeBase = [
                {
                    keywords: ['hello', 'hi', 'hey', 'greetings', 'morning', 'afternoon', 'evening'],
                    response: "Hello! Welcome to ICS. I'm your AI assistant. How can I help you regarding admissions, academics, or our campus?"
                },
                {
                    keywords: ['admission', 'apply', 'enroll', 'registration', 'join', 'deadline'],
                    response: "Admissions are currently open for the upcoming academic year! You can follow the simple application process on our Student Portal. Would you like me to guide you there?"
                },
                {
                    keywords: ['cost', 'price', 'fee', 'tuition', 'payment', 'scholarship', 'financial aid'],
                    response: "Our tuition fees are structured to be affordable while maintaining world-class standards. We also offer merit-based scholarships. Detailed fee structures are available in the Academics section."
                },
                {
                    keywords: ['academic', 'course', 'subject', 'program', 'curriculum', 'study', 'coding', 'python', 'java'],
                    response: "We offer a comprehensive tech-focused curriculum including Python, Java, Web Development, and Data Science, alongside core academic subjects. Our goal is to create future-ready tech leaders."
                },
                {
                    keywords: ['location', 'where', 'address', 'map', 'city', 'campus'],
                    response: "Our main campus is located in the heart of the Tech District. You can view our exact location and get directions on the 'Contact' page."
                },
                {
                    keywords: ['bus', 'transport', 'driver', 'route', 'pickup'],
                    response: "We encourage safe and reliable transport. Parents can track school buses in real-time through the Parent Portal. Drivers also have their own dedicated app."
                },
                {
                    keywords: ['contact', 'phone', 'email', 'call', 'support', 'help'],
                    response: "You can reach our administrative office at support@ics-school.edu or call us at +1 (555) 123-4567. For urgent technical issues, please use the 'Report Issue' tab in your portal."
                },
                {
                    keywords: ['portal', 'login', 'password', 'access', 'account'],
                    response: "Are you trying to access the Student, Parent, or Driver portal? Please ensure you are using the correct login credentials provided by the administration."
                }
            ];

            // Find best match
            const match = knowledgeBase.find(item =>
                item.keywords.some(keyword => lowerText.includes(keyword))
            );

            if (match) {
                responseText = match.response;
            } else {
                // Better fallback
                const fallbacks = [
                    "I'm not quite sure about that specific detail. However, I can help you with Admissions, Academics, Transport services, or General Inquiries.",
                    "That's an interesting question. While I don't have the exact answer right now, our support team can definitely help if you email support@ics-school.edu.",
                    "Could you rephrase that? I'm best at answering questions about joining ICS, our coding curriculum, or portal access."
                ];
                responseText = fallbacks[Math.floor(Math.random() * fallbacks.length)];
            }

            const agentMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: responseText,
                sender: 'agent',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, agentMessage]);
        }, delay);
    };

    const resetChat = () => {
        setView('home');
    };

    return (
        <div className="fixed bottom-6 md:bottom-28 right-6 z-[2000] flex flex-col items-end gap-4 font-sans pointer-events-none">
            {/* Widget Popup */}
            <div
                className={`bg-white rounded-xl shadow-2xl w-[380px] h-[550px] overflow-hidden transition-all duration-300 origin-bottom-right flex flex-col pointer-events-auto ${isOpen
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
                    }`}
            >
                {/* Header */}
                <div className="bg-[#004e9a] p-4 text-white shrink-0 relative">
                    {view === 'chat' && (
                        <button
                            onClick={resetChat}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    )}

                    <div className={`flex flex-col items-center transition-all duration-300 ${view === 'chat' ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                        <div className="flex items-center gap-3 mb-1">
                            <div className="bg-white p-1 rounded-full">
                                <Image
                                    src="/logo_code.jpg"
                                    alt="ICS Logo"
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 rounded-full"
                                />
                            </div>
                            <h2 className="text-xl font-bold">Welcome to ICS</h2>
                        </div>
                        <p className="text-white/80 text-sm">We're here to help</p>
                    </div>

                    <div className={`flex items-center justify-center gap-3 transition-all duration-300 absolute inset-0 pointer-events-none ${view === 'chat' ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="bg-white p-1 rounded-full w-8 h-8 flex items-center justify-center">
                            <Image
                                src="/logo_code.jpg"
                                alt="ICS Logo"
                                width={24}
                                height={24}
                                className="w-6 h-6 rounded-full"
                            />
                        </div>
                        <span className="font-bold text-lg">Support Chat</span>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-gray-50 relative overflow-hidden flex flex-col">
                    {view === 'home' ? (
                        <div className="p-6 flex flex-col h-full justify-center">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <h3 className="text-gray-900 font-medium mb-2">Start a conversation</h3>
                                <p className="text-gray-500 text-sm mb-6">Our team usually responds in a few minutes.</p>

                                <button
                                    onClick={() => setView('chat')}
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white px-4 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                                >
                                    <Send className="w-4 h-4" />
                                    <span className="font-medium">Message us</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Message List */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        {msg.sender === 'agent' && (
                                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                                <Bot className="w-4 h-4 text-blue-600" />
                                            </div>
                                        )}
                                        <div
                                            className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                                ? 'bg-blue-600 text-white rounded-br-none'
                                                : 'bg-white border border-gray-100 text-gray-800 rounded-bl-none shadow-sm'
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                        {msg.sender === 'user' && (
                                            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                                                <User className="w-4 h-4 text-gray-500" />
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {isTyping && (
                                    <div className="flex items-end gap-2 justify-start">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                            <Bot className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-bl-none shadow-sm">
                                            <div className="flex gap-1">
                                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <div className="p-3 bg-white border-t border-gray-100 shrink-0">
                                <form onSubmit={handleSendMessage} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={inputText}
                                        onChange={(e) => setInputText(e.target.value)}
                                        placeholder="Type a message..."
                                        className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 text-gray-800"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!inputText.trim() || isTyping}
                                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 text-sm rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-9 h-9"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`group flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 pointer-events-auto ${isOpen
                    ? 'bg-[#004e9a] rotate-90'
                    : 'bg-[#004e9a] hover:bg-blue-800 hover:scale-110'
                    }`}
                aria-label="Open messenger"
            >
                {isOpen ? (
                    <X className="w-7 h-7 text-white transition-transform duration-300 -rotate-90" />
                ) : (
                    <MessageCircle className="w-7 h-7 text-white" />
                )}
            </button>
        </div>
    );
}
