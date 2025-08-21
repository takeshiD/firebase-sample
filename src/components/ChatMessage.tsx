import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card } from "./ui/card";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  return (
    <div className={`flex gap-3 mb-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <Avatar className="w-8 h-8 flex-shrink-0">
        <AvatarFallback className={isUser ? "bg-primary text-primary-foreground" : "bg-secondary"}>
          {isUser ? "U" : "AI"}
        </AvatarFallback>
      </Avatar>
      <Card className={`max-w-[70%] p-3 ${isUser ? 'bg-primary text-primary-foreground' : 'bg-card'}`}>
        <p className="mb-1">{message}</p>
        <p className={`text-xs opacity-70 ${isUser ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
          {timestamp.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
        </p>
      </Card>
    </div>
  );
}