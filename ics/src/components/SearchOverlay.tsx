"use client";

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Search, Mic, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { navigationData } from '@/config/navigationData';

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const filtersList = [
    "Services",
    "Pages",
    "Programs",
    "Campuses",
    "News",
    "Events"
];

interface SearchResult {
    title: string;
    href: string;
    breadcrumb: string; // Section / Heading / Subsection
    category: string;
}

// Add type definition for Web Speech API
declare global {
    interface Window {
        webkitSpeechRecognition: any;
        SpeechRecognition: any;
    }
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState("");
    const [selectedFilters, setSelectedFilters] = useState<Set<string>>(new Set(filtersList));
    const [isVisible, setIsVisible] = useState(false);
    const [results, setResults] = useState<SearchResult[]>([]);
    const [hasSearched, setHasSearched] = useState(false);

    // Voice Search States
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            document.body.style.overflow = '';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Clean up recognition on unmount
    useEffect(() => {
        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    }, []);

    const toggleFilter = (filter: string) => {
        const newFilters = new Set(selectedFilters);
        if (newFilters.has(filter)) {
            newFilters.delete(filter);
        } else {
            newFilters.add(filter);
        }
        setSelectedFilters(newFilters);
    };

    const getCategory = (sectionLabel: string, subSectionTitle?: string, itemLabel?: string): string => {
        const lowerLabel = sectionLabel.toLowerCase();
        const lowerTitle = subSectionTitle?.toLowerCase() || "";

        if (lowerLabel === "services") return "Services";
        if (lowerTitle.includes("program")) return "Programs";
        if (lowerTitle.includes("college")) return "Campuses";
        if (lowerTitle.includes("news")) return "News";
        if (lowerTitle.includes("event")) return "Events";
        return "Pages";
    };

    const performSearch = (searchQuery: string) => {
        if (!searchQuery.trim()) {
            setResults([]);
            setHasSearched(true);
            return;
        }

        const searchResults: SearchResult[] = [];
        const lowerQuery = searchQuery.toLowerCase();

        navigationData.forEach(section => {
            if (section.sections) {
                section.sections.forEach(subSection => {
                    subSection.items.forEach(item => {
                        if (item.label.toLowerCase().includes(lowerQuery)) {
                            const category = getCategory(section.label, subSection.title, item.label);

                            if (selectedFilters.has(category)) {
                                searchResults.push({
                                    title: item.label,
                                    href: item.href,
                                    breadcrumb: `${section.label} ${subSection.title ? `/ ${subSection.title}` : ''}`,
                                    category
                                });
                            }
                        }
                    });
                });
            } else {
                if (section.label.toLowerCase().includes(lowerQuery)) {
                    const category = "Pages";
                    if (selectedFilters.has(category)) {
                        searchResults.push({
                            title: section.label,
                            href: section.href,
                            breadcrumb: section.label,
                            category
                        });
                    }
                }
            }
        });

        setResults(searchResults);
        setHasSearched(true);
    };

    const handleSearch = () => {
        performSearch(query);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    // Voice Search Logic
    const startListening = () => {
        if (isListening) {
            recognitionRef.current?.stop();
            setIsListening(false);
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert("Your browser does not support voice search. Please use Google Chrome or Edge.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US'; // Or user's locale
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            setIsListening(true);
        };

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            setQuery(transcript);
            performSearch(transcript);
        };

        recognition.onerror = (event: any) => {
            console.error("Speech recognition error", event.error);
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognitionRef.current = recognition;
        recognition.start();
    };

    if (!isVisible && !isOpen) return null;

    if (typeof window === 'undefined') return null;

    return createPortal(
        <div
            className={`fixed inset-0 z-[10000] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Slide-out Panel (Right Side, Half Width on Desktop) */}
            <div
                className={`
          absolute top-0 right-0 h-full w-full md:w-[50vw] bg-white shadow-2xl
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          flex flex-col
        `}
            >
                {/* Close Button - Responsive Position */}
                {/* Desktop: Half outside to the left. Mobile: Inside top right */}
                <button
                    onClick={onClose}
                    className="
                        absolute z-[10001] shadow-lg group hover:scale-110 duration-200
                        bg-red-500 hover:bg-red-600 text-white rounded-full p-2 md:p-3
                        top-4 right-4 md:top-8 md:-left-7 md:right-auto
                    "
                >
                    <X className="w-5 h-5 md:w-8 md:h-8 group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Header */}
                <div className="flex justify-between items-center px-4 pt-16 md:px-8 md:pt-8 md:pb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-[#0B2C5D]">Search</h2>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto px-4 pb-20 md:px-8 md:pb-8 custom-scrollbar">

                    {/* Search Input Section */}
                    <div className="relative flex items-center shadow-lg border border-gray-100 bg-white rounded-lg overflow-hidden transition-all focus-within:ring-2 focus-within:ring-[#0B2C5D]/20 mt-4 h-14 md:h-20">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Search..."
                            className="w-full h-full pl-4 md:pl-8 pr-20 md:pr-28 text-lg md:text-2xl text-gray-800 placeholder-gray-400 focus:outline-none font-medium"
                            autoFocus
                        />

                        <div className="absolute right-0 top-0 h-full flex items-center">
                            <button
                                onClick={startListening}
                                className={`h-full px-3 md:px-4 transition-colors border-l border-gray-50 flex items-center justify-center ${isListening ? 'text-red-600 bg-red-50' : 'text-gray-400 hover:text-[#0B2C5D]'}`}
                                title="Voice Search"
                            >
                                {isListening ? (
                                    <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                                ) : (
                                    <Mic className="w-4 h-4 md:w-5 md:h-5" />
                                )}
                            </button>
                            <button
                                onClick={handleSearch}
                                className="h-full px-4 md:px-6 bg-[#0B2C5D] text-white hover:bg-blue-900 transition-colors"
                            >
                                <Search className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-3 px-1">
                        <div className="text-xs md:text-sm text-gray-500 italic">
                            {isListening ? <span className="text-red-500 font-medium">Listening...</span> : (hasSearched && <span>Found {results.length} result{results.length !== 1 ? 's' : ''}</span>)}
                        </div>
                        <a href="#" className="text-sm md:text-base font-semibold text-[#0B2C5D] hover:underline mt-2 inline-block">Advanced Search</a>
                    </div>

                    {/* Filters Section */}
                    <div className="mt-8 md:mt-10 mb-10">
                        <h3 className="text-xs md:text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Search In:</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                            {filtersList.map((filter) => (
                                <label key={filter} className="flex items-center space-x-2 md:space-x-3 cursor-pointer group select-none">
                                    <div
                                        className={`
                      w-4 h-4 rounded flex items-center justify-center border transition-all duration-200 flex-shrink-0
                      ${selectedFilters.has(filter)
                                                ? 'bg-[#0B2C5D] border-[#0B2C5D]'
                                                : 'border-gray-300 bg-white group-hover:border-[#0B2C5D]'
                                            }
                    `}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleFilter(filter);
                                        }}
                                    >
                                        {selectedFilters.has(filter) && (
                                            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={selectedFilters.has(filter)}
                                        onChange={() => { }}
                                    />
                                    <span className={`text-sm md:text-lg font-medium transition-colors ${selectedFilters.has(filter) ? 'text-[#0B2C5D]' : 'text-gray-600 group-hover:text-[#0B2C5D]'}`}>
                                        {filter}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <hr className="border-gray-100 my-6" />

                    {/* Search Results */}
                    {hasSearched ? (
                        <div className="space-y-4">
                            {results.length > 0 ? (
                                <div>
                                    {results.map((result, idx) => (
                                        <Link
                                            key={idx}
                                            href={result.href}
                                            onClick={onClose}
                                            className="block p-4 mb-3 bg-white border border-gray-100 rounded-lg hover:shadow-md hover:border-blue-100 transition-all group"
                                        >
                                            <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide flex items-center gap-2 flex-wrap">
                                                <span className="bg-blue-50 px-2.5 py-1 rounded text-blue-700">{result.category}</span>
                                                <span className="text-gray-300">|</span>
                                                <span className="truncate max-w-[300px]">{result.breadcrumb}</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-800 group-hover:text-[#0B2C5D] transition-colors flex items-center justify-between">
                                                {result.title}
                                                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
                                            </h4>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 text-gray-400">
                                    <Search className="w-12 h-12 mx-auto mb-3 opacity-20" />
                                    <p className="text-lg">No results found for "{query}"</p>
                                    <p className="text-sm mt-1">Try adjusting your filters or search terms</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        // Empty State Suggestion / Recent (Optional placeholder)
                        <div className="text-center py-20 opacity-50">
                            <p className="text-sm text-gray-400">Start typing or use your voice to search</p>
                        </div>
                    )}

                </div>
            </div>
        </div>,
        document.body
    );
}
