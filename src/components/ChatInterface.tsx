import { useState, useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Send } from "lucide-react";

interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

export function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "こんにちは！今日はどのような一日でしたか？何でも気軽にお話しください。",
            isUser: false,
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: input,
            isUser: true,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInput("");

        // AIの返答をシミュレート
        setTimeout(() => {
            const aiResponse = generateAIResponse();
            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: aiResponse,
                isUser: false,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiMessage]);
        }, 1000);
    };

    const generateAIResponse = (): string => {
        const responses = [
            "それは本当につらい経験でしたね。あなたの気持ちがよく伝わってきます。",
            "そのような状況で頑張っているあなたを心から尊敬します。",
            "大変な思いをされましたね。一人で抱え込まずに話してくれてありがとう。",
            "あなたの感情は全て正当なものです。そう感じるのは当然のことですよ。",
            "今日も一日お疲れ様でした。小さな進歩でも大切な成長ですね。",
            "その悩みを抱えながらも前に進もうとするあなたは素晴らしいと思います。"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <ChatMessage
                        key={message.id}
                        message={message.text}
                        isUser={message.isUser}
                        timestamp={message.timestamp}
                    />
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="border-t bg-background p-4">
                <div className="flex gap-2">
                    <Textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="今日あったことや気持ちを自由に書いてください..."
                        className="flex-1 min-h-[60px] max-h-[120px] resize-none"
                    />
                    <Button
                        onClick={handleSend}
                        disabled={!input.trim()}
                        size="icon"
                        className="self-end h-[60px] w-[60px]"
                    >
                        <Send className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
