import { ExplorationLogList } from "@/components/ExplorationLogList"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#004D40] to-[#2E7D32] p-8">
      <div className="pt-8 pb-6 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-transparent bg-gradient-to-r from-yellow-400 via-yellow-200 to-gray-300 bg-clip-text font-bold tracking-wide">探索の記録</h1>
      </div>

      <ExplorationLogList />
    </div>
  )
}
