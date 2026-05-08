"use client";

import { useEffect, useRef, useState } from "react";
import { X, Send } from "lucide-react";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
  quickReplies?: string[];
  isSummary?: boolean;
  summaryData?: {
    service: string;
    project: string;
    deadline: string;
    contact: string;
  };
};

type Answers = {
  service: string;
  project: string;
  deadline: string;
  contact: string;
};

const INITIAL_BOT_MESSAGE: Omit<Message, "id"> = {
  from: "bot",
  text: "Hey I am WorkLad, WorkLoad HQ's assistant. Tell me what you want to build and I will get your brief straight to the team.",
  quickReplies: ["Website", "Web App", "Mobile App", "Logo / Brand"],
};

export default function WorkLad() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    service: "",
    project: "",
    deadline: "",
    contact: "",
  });
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [done, setDone] = useState(false);
  const msgIdRef = useRef(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const nextId = () => {
    msgIdRef.current += 1;
    return msgIdRef.current;
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Show initial message when widget opens with empty messages
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ id: nextId(), ...INITIAL_BOT_MESSAGE }]);
    }
  }, [isOpen, messages.length]);

  // Listen for external open event (from "Talk to WorkLad" button)
  useEffect(() => {
    const openWidget = () => setIsOpen(true);
    window.addEventListener("openWorkLad", openWidget);
    return () => window.removeEventListener("openWorkLad", openWidget);
  }, []);

  const addBotMessage = (
    text: string,
    quickReplies?: string[],
    delay = 800
  ) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: nextId(), from: "bot", text, quickReplies },
      ]);
    }, delay);
  };

  const handleQuickReply = (reply: string) => {
    if (step === 0) {
      setAnswers((prev) => ({ ...prev, service: reply }));
      setMessages((prev) => [
        ...prev,
        { id: nextId(), from: "user", text: reply },
      ]);
      setStep(1);
      addBotMessage(
        "Got it. What does your project do or what problem is it solving? Keep it brief."
      );
    } else if (step === 2) {
      setAnswers((prev) => ({ ...prev, deadline: reply }));
      setMessages((prev) => [
        ...prev,
        { id: nextId(), from: "user", text: reply },
      ]);
      setStep(3);
      addBotMessage(
        "Last thing. What is the best way to reach you? Drop your WhatsApp number or email."
      );
    }
  };

  const handleSend = () => {
    const val = inputValue.trim();
    if (!val) return;
    setInputValue("");

    if (step === 1) {
      setAnswers((prev) => ({ ...prev, project: val }));
      setMessages((prev) => [
        ...prev,
        { id: nextId(), from: "user", text: val },
      ]);
      setStep(2);
      addBotMessage("Do you have a deadline in mind?", [
        "ASAP",
        "Within a month",
        "No rush",
        "Not sure yet",
      ]);
    } else if (step === 3) {
      const newAnswers: Answers = { ...answers, contact: val };
      setAnswers(newAnswers);
      setMessages((prev) => [
        ...prev,
        { id: nextId(), from: "user", text: val },
      ]);
      setStep(4);
      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);
        const waText = `New WorkLad Lead:\nService: ${newAnswers.service}\nProject: ${newAnswers.project}\nDeadline: ${newAnswers.deadline}\nContact: ${newAnswers.contact}`;

        setMessages((prev) => [
          ...prev,
          { id: nextId(), from: "bot", text: "Perfect. Here is what I have got:" },
          {
            id: nextId(),
            from: "bot",
            text: "",
            isSummary: true,
            summaryData: newAnswers,
          },
          {
            id: nextId(),
            from: "bot",
            text: "I am sending this to the WorkLoad HQ team now. Someone will reach out within 24 hours.",
          },
        ]);

        window.open(
          `https://wa.me/2347044811328?text=${encodeURIComponent(waText)}`,
          "_blank"
        );

        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setMessages((prev) => [
              ...prev,
              {
                id: nextId(),
                from: "bot",
                text: "All done! Check WhatsApp. The team will be in touch soon.",
              },
            ]);
            setStep(5);
            setDone(true);
          }, 800);
        }, 1000);
      }, 800);
    }
  };

  const handleReset = () => {
    msgIdRef.current = 0;
    setMessages([]);
    setStep(0);
    setAnswers({ service: "", project: "", deadline: "", contact: "" });
    setInputValue("");
    setIsTyping(false);
    setDone(false);
  };

  const showInput = (step === 1 || step === 3) && !isTyping;
  const lastMessageId = messages.length > 0 ? messages[messages.length - 1].id : -1;

  return (
    <div className="fixed bottom-32 right-5 z-50 flex flex-col items-end gap-3">
      {/* Chat Panel */}
      {isOpen && (
        <div className="flex flex-col w-[340px] max-h-[480px] bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden">
          {/* Header */}
          <div className="bg-emerald-950 rounded-t-2xl px-5 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <div>
                <p className="text-white font-semibold text-sm">WorkLad</p>
                <p className="text-emerald-300 text-xs">Typically replies instantly</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-emerald-300 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col gap-2 ${
                  msg.from === "user" ? "items-end" : "items-start"
                }`}
              >
                {msg.isSummary && msg.summaryData ? (
                  <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-sm text-stone-700 w-full max-w-xs">
                    <p>
                      <span className="font-semibold">Service:</span>{" "}
                      {msg.summaryData.service}
                    </p>
                    <p className="mt-1">
                      <span className="font-semibold">Project:</span>{" "}
                      {msg.summaryData.project}
                    </p>
                    <p className="mt-1">
                      <span className="font-semibold">Deadline:</span>{" "}
                      {msg.summaryData.deadline}
                    </p>
                    <p className="mt-1">
                      <span className="font-semibold">Contact:</span>{" "}
                      {msg.summaryData.contact}
                    </p>
                  </div>
                ) : (
                  msg.text && (
                    <div
                      className={`px-4 py-3 text-sm max-w-xs ${
                        msg.from === "bot"
                          ? "bg-stone-100 text-stone-800 rounded-2xl rounded-tl-none"
                          : "bg-emerald-950 text-white rounded-2xl rounded-tr-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  )
                )}

                {/* Quick replies - only show on last message */}
                {msg.from === "bot" &&
                  msg.quickReplies &&
                  msg.id === lastMessageId &&
                  !done && (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {msg.quickReplies.map((reply) => (
                        <button
                          key={reply}
                          type="button"
                          onClick={() => handleQuickReply(reply)}
                          className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-full px-4 py-2 text-sm hover:bg-emerald-100 transition-colors"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-stone-100 rounded-2xl rounded-tl-none px-4 py-3">
                  <div className="flex items-center gap-1">
                    <div
                      className="w-2 h-2 bg-stone-300 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-stone-300 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-stone-300 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Start over */}
            {done && (
              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-emerald-700 underline hover:text-emerald-900 transition-colors"
                >
                  Start over
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {showInput && (
            <div className="p-3 border-t border-stone-100 flex gap-2 flex-shrink-0">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
                placeholder={
                  step === 1
                    ? "Describe your project..."
                    : "Your WhatsApp or email..."
                }
                className="flex-1 text-sm px-3 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-200 text-stone-950"
              />
              <button
                type="button"
                onClick={handleSend}
                className="bg-emerald-950 text-white rounded-xl px-3 py-2 hover:bg-emerald-900 transition-colors"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-emerald-950 text-white rounded-full px-5 py-3 flex items-center gap-2 shadow-lg hover:bg-emerald-900 transition-colors"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span className="text-sm font-medium">Ask WorkLad</span>
      </button>
    </div>
  );
}
