import { cn } from "@/lib/utils"

interface MineralRecordCardProps {
  mineralName: string
  date: string
  location: string
  imageUrl?: string
  isUnknown?: boolean
  className?: string
}

export function MineralRecordCard({
  mineralName,
  date,
  location,
  imageUrl,
  isUnknown = false,
  className,
}: MineralRecordCardProps) {
  return (
    <div
      className={cn(
        "relative w-80 bg-[#FDF4DC] rounded-lg shadow-2xl shadow-black/30",
        "border border-amber-200/50 parchment-texture",
        "transform rotate-1 hover:rotate-0 transition-transform duration-300",
        "before:absolute before:inset-0 before:rounded-lg before:shadow-inner before:shadow-amber-900/10",
        className,
      )}
    >
      {/* Unknown tag */}
      {isUnknown && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className="bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-full shadow-lg transform rotate-12">
            名称不明
          </div>
        </div>
      )}

      <div className="p-6 space-y-4">
        {/* Photo area */}
        <div className="relative">
          <div className="w-full h-48 bg-amber-50 rounded border-2 border-amber-200/30 shadow-inner overflow-hidden">
            {imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={imageUrl || "/placeholder.svg"} alt={mineralName} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-amber-600/40">
                <div className="text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <div className="text-sm">写真</div>
                </div>
              </div>
            )}
          </div>
          {/* Photo corner tabs */}
          <div className="absolute -top-1 -left-1 w-4 h-4 bg-amber-100 border border-amber-300 transform rotate-45"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-100 border border-amber-300 transform rotate-45"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-amber-100 border border-amber-300 transform rotate-45"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-100 border border-amber-300 transform rotate-45"></div>
        </div>

        {/* Mineral information */}
        <div className="space-y-3">
          {/* Mineral name - prominent with serif font */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-amber-900 font-[var(--font-serif-jp)] tracking-wide">
              {mineralName}
            </h2>
            <div className="w-16 h-0.5 bg-amber-600/30 mx-auto mt-2"></div>
          </div>

          {/* Date and location */}
          <div className="space-y-2 text-amber-800">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-amber-700">採取日:</span>
              <span className="font-mono">{date}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-amber-700">採取地:</span>
              <span className="text-right flex-1 ml-2">{location}</span>
            </div>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="pt-2 border-t border-amber-300/30">
          <div className="flex justify-center">
            <div className="w-8 h-1 bg-amber-600/20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Aged paper effect - subtle stains */}
      <div className="absolute top-4 right-8 w-3 h-3 bg-amber-600/5 rounded-full"></div>
      <div className="absolute bottom-8 left-6 w-2 h-2 bg-amber-700/5 rounded-full"></div>
      <div className="absolute top-12 left-4 w-1 h-1 bg-amber-800/10 rounded-full"></div>
    </div>
  )
}


