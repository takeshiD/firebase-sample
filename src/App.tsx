import { useState } from "react";
import { ChatInterface } from "./components/ChatInterface";
import { DiaryHistory } from "./components/DiaryHistory";
import { InsightsView } from "./components/InsightsView";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "./components/ui/tabs";
import { MessageCircle, Book, BarChart3 } from "lucide-react";

export default function App() {
    const [activeTab, setActiveTab] = useState("chat");

    return (
        <div className="min-h-screen bg-background">
            <header className="border-b bg-card px-4 py-3">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-center">共感日記</h1>
                    <p className="text-center text-muted-foreground mt-1">
                        あなたの気持ちに寄り添うAI日記
                    </p>
                </div>
            </header>

            <div className="max-w-4xl mx-auto h-[calc(100vh-120px)]">
                <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="h-full flex flex-col"
                >
                    <TabsList className="grid w-full grid-cols-3 mx-4 mt-4">
                        <TabsTrigger
                            value="chat"
                            className="flex items-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4" />
                            <span className="hidden sm:inline">チャット</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="history"
                            className="flex items-center gap-2"
                        >
                            <Book className="w-4 h-4" />
                            <span className="hidden sm:inline">履歴</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="insights"
                            className="flex items-center gap-2"
                        >
                            <BarChart3 className="w-4 h-4" />
                            <span className="hidden sm:inline">分析</span>
                        </TabsTrigger>
                    </TabsList>

                    <div className="flex-1 overflow-hidden">
                        <TabsContent value="chat" className="h-full m-0">
                            <ChatInterface />
                        </TabsContent>

                        <TabsContent
                            value="history"
                            className="h-full m-0 overflow-y-auto"
                        >
                            <DiaryHistory />
                        </TabsContent>

                        <TabsContent
                            value="insights"
                            className="h-full m-0 overflow-y-auto"
                        >
                            <InsightsView />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}
