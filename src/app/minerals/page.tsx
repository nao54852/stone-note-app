import { MineralRecordCard } from "@/components/MineralRecordCard"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="pt-8 pb-6 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-transparent bg-gradient-to-r from-yellow-400 via-yellow-200 to-gray-300 bg-clip-text font-bold tracking-wide">石の記録</h1>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {/* Sample mineral cards */}
        <MineralRecordCard
          mineralName="水晶"
          date="2024/09/25"
          location="秩父山中"
          imageUrl="/clear-quartz-crystal.png"
        />

        <MineralRecordCard
          mineralName="紫水晶"
          date="2024/08/15"
          location="山梨県甲府市"
          imageUrl="/amethyst-purple-crystal.jpg"
          isUnknown={true}
        />

        <MineralRecordCard
          mineralName="黄鉄鉱"
          date="2024/07/10"
          location="岐阜県中津川市"
          imageUrl="/pyrite-golden-mineral.jpg"
        />
      </div>
    </div>
  )
}
