"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { Bot, PhoneCall, Cpu, ShieldCheck, Calculator, Send, CheckCircle2, AlertTriangle, Upload, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn, formatCurrency } from "@/lib/utils";

type ActiveTab = "advisor" | "voice" | "score" | "legal" | "investment";

interface Message {
  sender: "user" | "bot";
  text: string;
  time: string;
}

export default function AIServicesSection() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("advisor");

  return (
    <section id="ai-workspace" className="bg-transparent py-10 lg:py-14 border-b border-slate-100 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-secondary text-xs uppercase font-extrabold tracking-widest animate-pulse">
            PROPASURE CORE AI SUITE
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mt-2">
            Interactive AI Property Advisory
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-3 leading-relaxed">
            Experience our real-time real estate intelligence modules live. Select a tool tab below to begin.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab("advisor")}
            className={cn(
              "flex items-center gap-2 font-heading font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border cursor-pointer transition-all duration-200",
              activeTab === "advisor"
                ? "bg-primary border-primary text-white shadow-md shadow-primary/20"
                : "bg-white border-slate-200 text-text-secondary hover:border-primary hover:text-primary"
            )}
          >
            <Bot className="w-4 h-4" /> AI Property Advisor
          </button>
          <button
            onClick={() => setActiveTab("voice")}
            className={cn(
              "flex items-center gap-2 font-heading font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border cursor-pointer transition-all duration-200",
              activeTab === "voice"
                ? "bg-primary border-primary text-white shadow-md shadow-primary/20"
                : "bg-white border-slate-200 text-text-secondary hover:border-primary hover:text-primary"
            )}
          >
            <PhoneCall className="w-4 h-4" /> AI Voice Agent
          </button>
          <button
            onClick={() => setActiveTab("score")}
            className={cn(
              "flex items-center gap-2 font-heading font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border cursor-pointer transition-all duration-200",
              activeTab === "score"
                ? "bg-primary border-primary text-white shadow-md shadow-primary/20"
                : "bg-white border-slate-200 text-text-secondary hover:border-primary hover:text-primary"
            )}
          >
            <Cpu className="w-4 h-4" /> AI Property Score
          </button>
          <button
            onClick={() => setActiveTab("legal")}
            className={cn(
              "flex items-center gap-2 font-heading font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border cursor-pointer transition-all duration-200",
              activeTab === "legal"
                ? "bg-primary border-primary text-white shadow-md shadow-primary/20"
                : "bg-white border-slate-200 text-text-secondary hover:border-primary hover:text-primary"
            )}
          >
            <ShieldCheck className="w-4 h-4" /> AI Legal Risk Engine
          </button>
          <button
            onClick={() => setActiveTab("investment")}
            className={cn(
              "flex items-center gap-2 font-heading font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border cursor-pointer transition-all duration-200",
              activeTab === "investment"
                ? "bg-primary border-primary text-white shadow-md shadow-primary/20"
                : "bg-white border-slate-200 text-text-secondary hover:border-primary hover:text-primary"
            )}
          >
            <Calculator className="w-4 h-4" /> AI Investment Advisor
          </button>
        </div>

        {/* Tab Viewport */}
        <div className="bg-white rounded-3xl shadow-xl border border-primary/5 p-6 sm:p-10 min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === "advisor" && <AdvisorTab key="advisor" />}
            {activeTab === "voice" && <VoiceTab key="voice" />}
            {activeTab === "score" && <ScoreTab key="score" />}
            {activeTab === "legal" && <LegalTab key="legal" />}
            {activeTab === "investment" && <InvestmentTab key="investment" />}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------------------------------
// Sub-Component Tab 1: AI Advisor Chatbot
// --------------------------------------------------------------------------
function AdvisorTab() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I am your Propasure AI Advisor. Which city are you looking to buy, rent, or invest in? Ask me anything (e.g. 'Suggest 3BHK flats in Bangalore', 'Verify builder reliability in Mumbai', or 'What is the appreciation yield in Hyderabad?')",
      time: "10:00 AM",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const getBotResponse = (query: string): string => {
    const lower = query.toLowerCase();
    if (lower.includes("bangalore") || lower.includes("bhk")) {
      return "<strong>Propasure AI Recommendation (Bangalore Hub):</strong><br>According to municipal records and appreciation indices, top growth corridors include:<br>1. <strong>Sarjapur Road:</strong> High tenant saturation, yield ~4.1%, Avg rate ₹8,500/sq.ft.<br>2. <strong>Whitefield:</strong> High IT density corridor, appreciation index 88/100.<br>3. <strong>Thanisandra:</strong> Proximity to airport connectivity, expected appreciation ~12%/year.<br><br>Would you like me to scan RERA files or fetch builder compliance histories?";
    }
    if (lower.includes("legal") || lower.includes("risk") || lower.includes("mumbai") || lower.includes("rera")) {
      return "<strong>Propasure Legal Risk Engine Insight:</strong><br>In Mumbai & major metropolitan hubs, common caution flags include:<br>1. <strong>JDA Gaps:</strong> Chain deviations between landowners and builder shares.<br>2. <strong>RERA Delay Indicators:</strong> ~18% of projects in suburbs show execution bottlenecks.<br>3. <strong>Missing OC/CC:</strong> Unregistered deviations in floor sanction permits.<br><br>Try uploading a copy of your draft agreement in the <strong>AI Legal Risk Engine</strong> tab to cycle a mock report.";
    }
    if (lower.includes("roi") || lower.includes("yield") || lower.includes("hyderabad") || lower.includes("investment")) {
      return "<strong>Propasure Investment Advisory (Hyderabad Hub):</strong><br>Kokapet and Gachibowli continue to yield solid growth metrics:<br>• <strong>Appreciation Forecast:</strong> Neopolis belt expected to gain ~9-14% capitalization.<br>• <strong>Rental Yields:</strong> Residential: 3.2% - 4.5% | Commercial: 7.5% - 9.2%<br><br>Use the <strong>AI Investment Advisor</strong> tab sliders to model holding tenures and capital requirements.";
    }
    return `Thank you for asking about <em>"${query}"</em>. I've logged this parameter.<br><br>Propasure blends registry analysis with legal checks. I can schedule an advisory call with a human real estate advisor for you. Should we book a slot?`;
  };

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages((prev) => [...prev, { sender: "user", text: textToSend, time }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      const reply = getBotResponse(textToSend);
      setMessages((prev) => [...prev, { sender: "bot", text: reply, time }]);
    }, 1200);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
    >
      <div className="lg:col-span-5">
        <h3 className="font-heading font-bold text-xl text-primary mb-2">AI Property Advisor</h3>
        <p className="text-secondary font-semibold text-sm mb-4">Your Personal Real Estate Consultant</p>
        <p className="text-xs text-text-secondary leading-relaxed mb-6">
          Query regional registry databases, RERA delay statistics, builder profiles, and yield valuations via natural conversation.
        </p>
        <div className="flex flex-wrap gap-2">
          {["3BHK Bangalore", "Mumbai legal risks", "Hyderabad ROI"].map((chip, i) => (
            <button
              key={i}
              onClick={() => handleSend(chip)}
              className="bg-slate-50 border border-slate-200 text-text-secondary hover:border-primary hover:text-primary px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer"
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="border border-slate-200 rounded-2xl flex flex-col h-[400px] overflow-hidden shadow-sm bg-slate-50">
          {/* Header */}
          <div className="bg-primary text-white px-5 py-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold font-heading text-sm text-white">
              P
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold">Propasure AI Advisor</h4>
              <span className="text-[10px] text-emerald-400 block font-semibold">Active & Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-5 flex flex-col gap-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={cn(
                  "max-w-[80%] p-3.5 rounded-2xl text-xs sm:text-sm shadow-sm leading-relaxed",
                  msg.sender === "bot"
                    ? "bg-white text-text-primary self-start rounded-bl-none border border-slate-100"
                    : "bg-primary text-white self-end rounded-br-none"
                )}
              >
                <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                <span
                  className={cn(
                    "block text-[9px] mt-1 text-right",
                    msg.sender === "bot" ? "text-text-muted" : "text-slate-300"
                  )}
                >
                  {msg.time}
                </span>
              </div>
            ))}

            {typing && (
              <div className="bg-white border border-slate-100 text-text-primary max-w-[40%] p-3 rounded-2xl rounded-bl-none text-xs self-start shadow-sm flex items-center gap-1.5 font-bold">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75" />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={onSubmit} className="flex border-t border-slate-200 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about properties, legal terms, or yields..."
              className="flex-grow px-5 py-4 outline-none text-xs sm:text-sm text-primary"
            />
            <button type="submit" className="bg-secondary hover:bg-secondary-light text-white px-5 flex items-center justify-center cursor-pointer transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

// --------------------------------------------------------------------------
// Sub-Component Tab 2: AI Voice Agent
// --------------------------------------------------------------------------
function VoiceTab() {
  const [callState, setCallState] = useState<"idle" | "connecting" | "active">("idle");
  const [transcript, setTranscript] = useState<string[]>([]);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const callTranscripts = [
    "Connecting with Propasure Voice Core...",
    "AI Agent: Hello, thank you for dialing Propasure. Are you seeking to buy, rent, or register property today?",
    "User: I'm looking to buy a 2BHK apartment in Bangalore under 90 Lakhs.",
    "AI Agent: Got it. I have indexed 12 verified projects in the Gachibowli/Whitefield core corridor matching your criteria. High appreciation zones show a 9.2% expected rental yield. Shall I book a guided site visit for Saturday?",
    "User: Yes, schedule it.",
    "AI Agent: Done! Reservations at Prestige Lavender and Godrej Splendour are locked in. I'm texting coordinates and legal scorecards to your registered WhatsApp. Thank you!",
    "Call finished. Propasure advisor will reach out shortly."
  ];

  useEffect(() => {
    transcriptRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [transcript]);

  const startCall = () => {
    setCallState("connecting");
    setTranscript(["Initiating voice stream..."]);
    
    let step = 0;
    timerRef.current = setInterval(() => {
      if (step < callTranscripts.length) {
        if (step === 1) setCallState("active");
        setTranscript((prev) => [...prev, callTranscripts[step]]);
        step++;
      } else {
        stopCall();
      }
    }, 2800);
  };

  const stopCall = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCallState("idle");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
    >
      <div className="lg:col-span-5">
        <h3 className="font-heading font-bold text-xl text-primary mb-2">AI Voice Agent</h3>
        <p className="text-secondary font-semibold text-sm mb-4">Speak Naturally. Get Answers Instantly.</p>
        <p className="text-xs text-text-secondary leading-relaxed mb-6">
          Equipped to process localized dialects and accents over phone lines. Available 24x7 in multiple languages.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {["English", "Telugu", "Hindi", "Tamil", "Kannada", "Malayalam", "And More"].map((lang, i) => (
            <span key={i} className="bg-emerald-50 text-secondary-dark px-3 py-1 rounded-lg text-xs font-bold">
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7 flex justify-center">
        <div className="w-full max-w-[360px] bg-slate-900 text-white rounded-3xl p-8 text-center border-b-4 border-accent shadow-xl flex flex-col items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={callState === "idle" ? startCall : stopCall}
            className={cn(
              "w-20 h-20 rounded-full flex items-center justify-center text-white cursor-pointer shadow-md mb-6 transition-all duration-300",
              callState === "idle" ? "bg-primary hover:bg-primary-light" : "bg-red-500 animate-pulse"
            )}
          >
            <PhoneCall className="w-8 h-8" />
          </motion.button>
          
          <h4 className="font-heading font-bold text-base mb-1">
            {callState === "idle" && "AI Voice Portal"}
            {callState === "connecting" && "Dialing Core..."}
            {callState === "active" && "Call Active"}
          </h4>
          <p className="text-[11px] text-slate-400 mb-6">
            {callState === "idle" && "Click button to start voice session simulation"}
            {callState === "connecting" && "Initializing voice server..."}
            {callState === "active" && "Speak to AI advisor"}
          </p>

          {/* Sound waves visualizer */}
          <div className="flex items-center gap-1.5 h-10 mb-6">
            {[1, 2, 3, 4, 5, 6, 7].map((bar) => (
              <motion.span
                key={bar}
                animate={callState === "active" ? { height: [8, 32, 8] } : { height: 8 }}
                transition={{
                  repeat: Infinity,
                  duration: 0.5 + bar * 0.1,
                  ease: "easeInOut",
                }}
                className={cn("w-1 rounded bg-secondary-light", callState === "active" ? "opacity-100" : "opacity-30")}
              />
            ))}
          </div>

          {/* Transcript output box */}
          {transcript.length > 0 && (
            <div className="bg-black/40 border border-white/5 rounded-xl p-4 w-full h-[120px] overflow-y-auto text-left text-[11px] leading-relaxed text-slate-200">
              {transcript.map((line, idx) => (
                <p key={idx} className="mb-2 last:mb-0">
                  {line}
                </p>
              ))}
              <div ref={transcriptRef} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// --------------------------------------------------------------------------
// Sub-Component Tab 3: AI Property Scorecard
// --------------------------------------------------------------------------
function ScoreTab() {
  const [locality, setLocality] = useState("prime");
  const [builder, setBuilder] = useState("tier1");
  const [legal, setLegal] = useState("all");
  const [price, setPrice] = useState("fair");
  const [score, setScore] = useState(92);
  const [grade, setGrade] = useState("Tier 1 - AAA Investment");
  const [desc, setDesc] = useState("Exceptional score profile. Standard builder compliance record, zero pending encumbrances, and core highway transit connectivity.");

  const runCalculation = () => {
    let base = 75;
    if (locality === "prime") base += 10;
    else if (locality === "peri") base -= 15;

    if (builder === "tier1") base += 8;
    else if (builder === "tier3") base -= 20;

    if (legal === "all") base += 12;
    else if (legal === "pending") base -= 10;
    else if (legal === "disputed") base -= 40;

    if (price === "fair") base += 5;
    else if (price === "under") base += 10;
    else if (price === "over") base -= 12;

    const final = Math.max(10, Math.min(100, base));
    setScore(final);

    if (final >= 85) {
      setGrade("Tier 1 - AAA Investment");
      setDesc("Exceptional score profile. Standard builder compliance record, zero pending encumbrances, and core highway transit connectivity.");
    } else if (final >= 60) {
      setGrade("Tier 2 - B-Grade Moderate Asset");
      setDesc("Moderate safety index. Standard regional builder, minor legal approval clearances pending, pricing parameters match locality rates.");
    } else {
      setGrade("High Risk - C-Grade Caution Flag");
      setDesc("Risk Alert. Active property ownership disputes found, floor layout deviation exceeds municipal rules, or substantial pricing markups.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
    >
      <div className="lg:col-span-5">
        <h3 className="font-heading font-bold text-xl text-primary mb-2">AI Property Score</h3>
        <p className="text-secondary font-semibold text-sm mb-4">100-Point Rating Index Matrix</p>
        <p className="text-xs text-text-secondary leading-relaxed mb-6">
          Every project is evaluated across location growth rates, builder delivery logs, legal title chains, and pricing benchmarks.
        </p>
        <div className="grid grid-cols-2 gap-4 text-xs text-text-secondary font-semibold">
          <div>✓ Location Growth</div>
          <div>✓ Builder Track Records</div>
          <div>✓ RERA compliance</div>
          <div>✓ Registry prices</div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm">
          <h4 className="font-heading font-bold text-sm sm:text-base text-primary mb-6 border-b border-slate-200 pb-3">
            Scorecard Simulator
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary">Locality Node</label>
              <select
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                className="p-3 text-xs sm:text-sm bg-white border border-slate-250 rounded-xl outline-none text-primary"
              >
                <option value="prime">Prime Hub (Whitefield, Gachibowli)</option>
                <option value="mid">Mid Growth Suburbs (Electronic City)</option>
                <option value="peri">Peripheral Belt (Outskirts Corridor)</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary">Builder Rating</label>
              <select
                value={builder}
                onChange={(e) => setBuilder(e.target.value)}
                className="p-3 text-xs sm:text-sm bg-white border border-slate-250 rounded-xl outline-none text-primary"
              >
                <option value="tier1">Tier 1 Developer (DLF, Prestige, Godrej)</option>
                <option value="tier2">Tier 2 Local Reputed Builder</option>
                <option value="tier3">Tier 3 Independent Broker/Local Builder</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary">Legal Clearances</label>
              <select
                value={legal}
                onChange={(e) => setLegal(e.target.value)}
                className="p-3 text-xs sm:text-sm bg-white border border-slate-250 rounded-xl outline-none text-primary"
              >
                <option value="all">RERA + Title Clear + OC/CC approved</option>
                <option value="pending">OC/CC pending municipal clearance</option>
                <option value="disputed">Active litigation/Title deed dispute</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary">Pricing Benchmark</label>
              <select
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="p-3 text-xs sm:text-sm bg-white border border-slate-250 rounded-xl outline-none text-primary"
              >
                <option value="fair">Fair Market Valuation</option>
                <option value="under">Undervalued Assets (Deal potential)</option>
                <option value="over">15%+ Markup over Locality index</option>
              </select>
            </div>
          </div>

          <button
            onClick={runCalculation}
            className="w-full bg-primary hover:bg-primary-light text-white text-xs sm:text-sm font-bold py-3.5 rounded-xl shadow-md cursor-pointer transition-colors"
          >
            Calculate Property Score
          </button>

          {/* Results Display */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 mt-6 flex items-center gap-6 shadow-sm">
            <div className="w-18 h-18 rounded-full border-4 border-secondary bg-emerald-50/50 flex flex-col items-center justify-center flex-shrink-0">
              <span className="font-heading font-extrabold text-xl text-secondary-dark">{score}</span>
              <span className="text-[7px] text-text-secondary uppercase font-extrabold tracking-wider">Score</span>
            </div>
            <div>
              <h5 className="font-heading font-bold text-xs sm:text-sm text-primary mb-1">{grade}</h5>
              <p className="text-[10px] sm:text-xs text-text-secondary leading-relaxed">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --------------------------------------------------------------------------
// Sub-Component Tab 4: AI Legal Risk Engine
// --------------------------------------------------------------------------
function LegalTab() {
  const [docIdx, setDocIdx] = useState(0);
  const [filename, setFilename] = useState("Drag & Drop Title Deed files");
  const [isScanning, setIsScanning] = useState(false);

  const mockLegalDocs = [
    {
      name: "SaleAgreement_Prestige_Draft.pdf",
      status: "Safe Title",
      color: "text-secondary bg-emerald-50 border-secondary/20",
      checks: [
        { label: "30-Year Title Traceability", text: "Verified chain link without registration gaps.", safe: true },
        { label: "RERA Registry Compliance", text: "RERA ID is registered and structure matches layouts.", safe: true },
        { label: "Encumbrance Mortgage clearance", text: "No active bank liabilities or mortgages found.", safe: true },
        { label: "Occupancy Certificate status", text: "OC issued. Deviations under 5%.", safe: true },
      ],
    },
    {
      name: "JDA_Suburban_Builder_Draft.pdf",
      status: "Caution Flag",
      color: "text-amber-600 bg-amber-50 border-amber-200",
      checks: [
        { label: "30-Year Title Traceability", text: "Verified chain link documents.", safe: true },
        { label: "RERA Registry Compliance", text: "RERA ID active and validated.", safe: true },
        { label: "Encumbrance Mortgage clearance", text: "Flagged: Active construction project loan of ₹45Cr mortgage found.", safe: false },
        { label: "Occupancy Certificate status", text: "OC clearance is pending municipal sanction boards approval.", safe: true },
      ],
    },
    {
      name: "AncestralProperty_PartitionDeed.pdf",
      status: "High Risk",
      color: "text-red-600 bg-red-50 border-red-200",
      checks: [
        { label: "30-Year Title Traceability", text: "Flagged: Mother deed misses ancestral legal partition details.", safe: false },
        { label: "RERA Registry Compliance", text: "Warning: Property lists multiple RERA compliance delay notices.", safe: false },
        { label: "Encumbrance Mortgage clearance", text: "No active mortgage details found in registry.", safe: true },
        { label: "Occupancy Certificate status", text: "Flagged: Layout deviates 18% from local building bylaws.", safe: false },
      ],
    },
  ];

  const cycleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      const nextIdx = (docIdx + 1) % mockLegalDocs.length;
      setDocIdx(nextIdx);
      setFilename(mockLegalDocs[nextIdx].name);
      setIsScanning(false);
    }, 1500);
  };

  const currentDoc = mockLegalDocs[docIdx];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
    >
      <div className="lg:col-span-5">
        <h3 className="font-heading font-bold text-xl text-primary mb-2">AI Legal Risk Engine</h3>
        <p className="text-secondary font-semibold text-sm mb-4">Document OCR Title Scanning Engine</p>
        <p className="text-xs text-text-secondary leading-relaxed mb-6">
          Upload copy of sale agreements, JDA deeds, or layouts. Our scanner extracts chains of titles and checks them against court litigation logs.
        </p>
        <div className="flex flex-col gap-3.5 text-xs text-text-secondary font-semibold">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
            <span>Title Link Traceability</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
            <span>Encumbrance/Mortgage Scans</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
            <span>Pending Litigation Checks</span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-3">
            <h4 className="font-heading font-bold text-xs sm:text-sm text-primary">Scan Report Preview</h4>
            {!isScanning && (
              <span className={cn("text-[10px] font-extrabold uppercase px-2.5 py-1 rounded border", currentDoc.color)}>
                {currentDoc.status}
              </span>
            )}
          </div>

          {/* Upload Box Trigger */}
          <div
            onClick={cycleScan}
            className="border-2 border-dashed border-slate-200 bg-slate-50 hover:bg-white hover:border-secondary rounded-2xl p-6 text-center cursor-pointer transition-all duration-200 mb-6 group"
          >
            {isScanning ? (
              <div className="flex flex-col items-center gap-2 py-4">
                <span className="w-6 h-6 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-bold text-text-secondary">Running AI Legal OCR Scan...</span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <Upload className="w-8 h-8 text-text-muted group-hover:text-secondary transition-colors" />
                <p className="text-xs sm:text-sm font-bold text-text-secondary leading-relaxed">
                  {filename}
                </p>
                <span className="text-[10px] text-text-muted">(Click to scan next simulated draft file)</span>
              </div>
            )}
          </div>

          {/* Check List */}
          {!isScanning && (
            <div className="flex flex-col gap-3">
              {currentDoc.checks.map((check, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex gap-3 items-start">
                  <div
                    className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5",
                      check.safe ? "bg-secondary text-white" : "bg-red-500 text-white"
                    )}
                  >
                    {check.safe ? "✓" : "!"}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-primary">{check.label}</h5>
                    <p className="text-[10px] sm:text-xs text-text-secondary mt-0.5">{check.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// --------------------------------------------------------------------------
// Sub-Component Tab 5: AI Investment Advisor
// --------------------------------------------------------------------------
function InvestmentTab() {
  const [budget, setBudget] = useState(120); // in Lakhs
  const [growth, setGrowth] = useState(8); // annual growth rate %
  const [rent, setRent] = useState(42000); // monthly rent INR
  const [tenure, setTenure] = useState(7); // holding tenure years

  // Outputs computed
  const [futureVal, setFutureVal] = useState(0);
  const [cumulativeRent, setCumulativeRent] = useState(0);
  const [capitalGain, setCapitalGain] = useState(0);
  const [roi, setRoi] = useState(0);
  const [yieldRate, setYieldRate] = useState(0);
  const [invScore, setInvScore] = useState(0);

  const calculateFinancials = () => {
    // compounding future value: FV = Budget * (1 + g/100)^t
    const fv = budget * Math.pow(1 + growth / 100, tenure);
    // cumulative rent in Lakhs
    const totalRentLakhs = (rent * 12 * tenure) / 100000;
    const gain = fv - budget;
    
    // total return relative
    const totalReturnLakhs = fv + totalRentLakhs;
    const computedRoi = (Math.pow(totalReturnLakhs / budget, 1 / tenure) - 1) * 100;
    const computedYield = ((rent * 12) / (budget * 100000)) * 100;

    setFutureVal(fv);
    setCumulativeRent(totalRentLakhs);
    setCapitalGain(gain);
    setRoi(computedRoi);
    setYieldRate(computedYield);

    // Score weight
    let scoreBase = 60;
    if (computedRoi > 12) scoreBase += 20;
    else if (computedRoi < 6) scoreBase -= 15;
    if (computedYield > 4) scoreBase += 10;
    if (growth > 10) scoreBase += 10;
    setInvScore(Math.max(20, Math.min(100, scoreBase)));
  };

  useEffect(() => {
    calculateFinancials();
  }, [budget, growth, rent, tenure]);

  const displayINR = (lakhs: number) => {
    if (lakhs >= 100) {
      return `₹${(lakhs / 100).toFixed(2)} Crores`;
    }
    return `₹${lakhs.toFixed(1)} Lakhs`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
    >
      <div className="lg:col-span-5">
        <h3 className="font-heading font-bold text-xl text-primary mb-2">AI Investment Advisor</h3>
        <p className="text-secondary font-semibold text-sm mb-4">Data-driven Cash Flow Forecast Simulator</p>
        <p className="text-xs text-text-secondary leading-relaxed mb-6">
          Leverage sliders to adjust pricing and rental goals. Our model projects capital gain growth, cash reserves, and annual compound ROI values.
        </p>

        {/* Dynamic Metric Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-center">
            <span className="text-base sm:text-lg font-heading font-extrabold text-primary block">
              {roi.toFixed(1)}%
            </span>
            <span className="text-[10px] text-text-secondary uppercase font-bold tracking-wider">Projected ROI</span>
          </div>
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-center">
            <span className="text-base sm:text-lg font-heading font-extrabold text-primary block">
              {yieldRate.toFixed(2)}%
            </span>
            <span className="text-[10px] text-text-secondary uppercase font-bold tracking-wider">Rental Yield</span>
          </div>
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-center">
            <span className="text-base sm:text-lg font-heading font-extrabold text-primary block">
              {invScore}/100
            </span>
            <span className="text-[10px] text-text-secondary uppercase font-bold tracking-wider">Yield Grade</span>
          </div>
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-center flex flex-col justify-center items-center">
            <span className="text-[11px] font-bold text-secondary-dark block">
              {growth >= 12 ? "Speculative Growth" : "Stable Growth"}
            </span>
            <span className="text-[10px] text-text-secondary uppercase font-bold tracking-wider">Risk Profile</span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm">
          <h4 className="font-heading font-bold text-sm sm:text-base text-primary mb-6 border-b border-slate-200 pb-3">
            Financial Projections
          </h4>

          {/* Sliders */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-bold text-text-secondary">
                <span>Property Valuation (Principal)</span>
                <span className="text-secondary-dark">
                  {budget >= 100 ? `${(budget / 100).toFixed(2)} Crores` : `${budget} Lakhs`}
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="500"
                step="5"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-secondary"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-bold text-text-secondary">
                <span>Annual Locality Growth Rate</span>
                <span className="text-secondary-dark">{growth}% / yr</span>
              </div>
              <input
                type="range"
                min="2"
                max="25"
                step="0.5"
                value={growth}
                onChange={(e) => setGrowth(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-secondary"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-bold text-text-secondary">
                <span>Monthly Rent Expectation</span>
                <span className="text-secondary-dark">₹{rent.toLocaleString("en-IN")}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="200000"
                step="1000"
                value={rent}
                onChange={(e) => setRent(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-secondary"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-bold text-text-secondary">
                <span>Holding Tenure</span>
                <span className="text-secondary-dark">{tenure} Years</span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-secondary"
              />
            </div>
          </div>

          {/* Calculator Output summary */}
          <div className="border-t border-dashed border-slate-350 mt-6 pt-5 flex flex-col gap-2.5">
            <div className="flex justify-between text-xs sm:text-sm text-text-secondary">
              <span>Estimated Valuation in Year {tenure}:</span>
              <strong className="text-primary">{displayINR(futureVal)}</strong>
            </div>
            <div className="flex justify-between text-xs sm:text-sm text-text-secondary">
              <span>Cumulative Rental Income:</span>
              <strong className="text-primary">{cumulativeRent.toFixed(1)} Lakhs</strong>
            </div>
            <div className="flex justify-between text-xs sm:text-sm font-bold bg-emerald-50 p-3 rounded-xl text-secondary-dark">
              <span>Total Estimated Capital Gain:</span>
              <span>{displayINR(capitalGain)}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
