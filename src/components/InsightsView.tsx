import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { TrendingUp, Heart, Target, Lightbulb } from "lucide-react";

export function InsightsView() {
  const insights = [
    {
      title: "よく話される話題",
      icon: <TrendingUp className="w-5 h-5" />,
      items: [
        { name: "仕事関係", percentage: 45, color: "bg-blue-500" },
        { name: "人間関係", percentage: 30, color: "bg-green-500" },
        { name: "プライベート", percentage: 25, color: "bg-purple-500" }
      ]
    },
    {
      title: "感情の傾向",
      icon: <Heart className="w-5 h-5" />,
      items: [
        { name: "ポジティブ", percentage: 35, color: "bg-green-500" },
        { name: "ニュートラル", percentage: 40, color: "bg-gray-500" },
        { name: "ネガティブ", percentage: 25, color: "bg-red-500" }
      ]
    }
  ];

  const strengths = [
    "困難な状況でも前向きに取り組む姿勢",
    "他者への思いやりと共感力",
    "自分の感情を言語化する能力",
    "成長への意欲と学習姿勢"
  ];

  const recommendations = [
    {
      title: "セルフケアの時間を設ける",
      description: "定期的にリラックスできる時間を作ることで、心のバランスを保ちましょう。"
    },
    {
      title: "小さな成功を記録する",
      description: "日々の小さな達成を記録することで、自己肯定感を高めることができます。"
    },
    {
      title: "感謝の気持ちを表現する",
      description: "周りの人や状況への感謝を意識することで、ポジティブな思考を育てましょう。"
    }
  ];

  return (
    <div className="p-4 space-y-6">
      <h2 className="mb-6">あなたのインサイト</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {insights.map((insight, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {insight.icon}
                {insight.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {insight.items.map((item, itemIndex) => (
                <div key={itemIndex} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            あなたの強み
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 sm:grid-cols-2">
            {strengths.map((strength, index) => (
              <Badge key={index} variant="secondary" className="justify-start p-3 h-auto">
                {strength}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            おすすめのアクション
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="space-y-2">
              <h4>{rec.title}</h4>
              <p className="text-muted-foreground">{rec.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}