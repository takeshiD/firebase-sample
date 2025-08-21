import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MessageCircle } from "lucide-react";

interface DiaryEntry {
  id: string;
  date: Date;
  title: string;
  preview: string;
  mood: "positive" | "neutral" | "negative";
  messageCount: number;
}

export function DiaryHistory() {
  const entries: DiaryEntry[] = [
    {
      id: "1",
      date: new Date(2024, 7, 20),
      title: "仕事でのプレゼンテーション",
      preview: "今日はプレゼンがあって緊張したけど、なんとか終わりました。思ったより反応が良くて...",
      mood: "positive",
      messageCount: 8
    },
    {
      id: "2", 
      date: new Date(2024, 7, 19),
      title: "上司との関係について",
      preview: "上司とのコミュニケーションがうまくいかなくて悩んでいます。どうしたら...",
      mood: "negative",
      messageCount: 12
    },
    {
      id: "3",
      date: new Date(2024, 7, 18),
      title: "友人との時間",
      preview: "久しぶりに友人と会えて楽しい時間を過ごしました。やっぱり人とのつながりは...",
      mood: "positive",
      messageCount: 6
    },
    {
      id: "4",
      date: new Date(2024, 7, 17),
      title: "日常の小さな悩み",
      preview: "最近なんだか疲れが取れなくて、小さなことにもイライラしてしまいます...",
      mood: "neutral",
      messageCount: 10
    }
  ];

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case "positive": return "bg-green-100 text-green-800 border-green-200";
      case "negative": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getMoodText = (mood: string) => {
    switch (mood) {
      case "positive": return "ポジティブ";
      case "negative": return "ネガティブ";
      default: return "ニュートラル";
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="mb-6">日記履歴</h2>
      {entries.map((entry) => (
        <Card key={entry.id} className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{entry.title}</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={getMoodColor(entry.mood)}>
                  {getMoodText(entry.mood)}
                </Badge>
              </div>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{entry.date.toLocaleDateString('ja-JP')}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span>{entry.messageCount}件の会話</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-muted-foreground line-clamp-2">
              {entry.preview}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}