import { Button } from "./ui/button"
import Image from "next/image"

interface ExplorationLogEntry {
  id: string
  title: string
  date: string
  location: string
  summary?: string
  thumbnailUrl?: string
}

// Sample data for exploration log entries
const explorationLogs: ExplorationLogEntry[] = [
  {
    id: "1",
    title: "秩父山中での発見",
    date: "2024/09/25",
    location: "秩父山中",
    summary: "美しい水晶の結晶を発見",
    thumbnailUrl: "/clear-quartz-crystal.png",
  },
  {
    id: "2",
    title: "奥多摩の探索記録",
    date: "2024/09/18",
    location: "奥多摩",
    summary: "珍しい鉱物の露頭を確認",
    thumbnailUrl: "/amethyst-purple-crystal.jpg",
  },
  {
    id: "3",
    title: "富士山麓の調査",
    date: "2024/09/12",
    location: "富士山麓",
    summary: "火山性鉱物の採集記録",
    thumbnailUrl: "/pyrite-golden-mineral.jpg",
  },
  {
    id: "4",
    title: "伊豆半島の地質調査",
    date: "2024/09/05",
    location: "伊豆半島",
    summary: "海岸沿いの鉱物採集",
    thumbnailUrl: "/pyrite-golden-mineral.jpg",
  },
  {
    id: "5",
    title: "箱根の温泉地質",
    date: "2024/08/28",
    location: "箱根",
    summary: "温泉成分と鉱物の関係調査",
    thumbnailUrl: "/clear-quartz-crystal.png",
  },
  {
    id: "6",
    title: "日光の火山岩調査",
    date: "2024/08/21",
    location: "日光",
    summary: "火山活動による鉱物形成",
    thumbnailUrl: "/amethyst-purple-crystal.jpg",
  },
]

export function ExplorationLogList() {
  return (
    <div className="container mx-auto px-4 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {explorationLogs.map((log) => (
          <ExplorationLogCard key={log.id} log={log} />
        ))}
      </div>
    </div>
  )
}

function ExplorationLogCard({ log }: { log: ExplorationLogEntry }) {
  return (
    <div className="relative group">
      {/* Parchment-style card */}
      <div className="bg-[#FDF4DC] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/30 relative overflow-hidden">
        {/* Primary thumbnail */}
        {log.thumbnailUrl && (
          <div className="relative w-full h-44 md:h-48 bg-amber-50 border-b border-amber-200/40">
            <Image
              src={log.thumbnailUrl}
              alt={log.title}
              fill
              sizes="(min-width: 768px) 700px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Subtle paper texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 to-amber-100/10 rounded-lg"></div>

        {/* Card content */}
        <div className="relative z-10 p-6">
          {/* Main title */}
          <h3 className="text-xl font-serif text-amber-900 font-semibold mb-3 leading-tight">{log.title}</h3>

          {/* Key details */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-amber-800">
              <span className="font-medium mr-2">日付:</span>
              <span className="font-mono">{log.date}</span>
            </div>
            <div className="flex items-center text-sm text-amber-800">
              <span className="font-medium mr-2">場所:</span>
              <span>{log.location}</span>
            </div>
          </div>

          {/* Summary if available */}
          {log.summary && <p className="text-sm text-amber-700 mb-4 leading-relaxed">{log.summary}</p>}

          {/* Action button */}
          <div className="flex justify-end">
            <Button
              variant="outline"
              size="sm"
              className="bg-amber-100/50 border-amber-300 text-amber-800 hover:bg-amber-200/70 hover:border-amber-400 transition-colors duration-200 font-medium"
            >
              詳細を見る
            </Button>
          </div>
        </div>

        {/* Subtle aged paper effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-100/10 to-transparent rounded-lg pointer-events-none"></div>
      </div>
    </div>
  )
}
