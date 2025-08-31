import * as React from "react"
import { Search as SearchIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void
  placeholder?: string
  ariaLabel?: string
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className, onSearch, placeholder = "Buscar...", ariaLabel, ...props }, ref) => {
    const handleKeyPress = React.useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onSearch) {
        e.preventDefault()
        onSearch(e.currentTarget.value.trim())
      }
    }, [onSearch])

    const handleSearch = React.useCallback(() => {
      if (ref && 'current' in ref && ref.current && onSearch) {
        onSearch(ref.current.value.trim())
      }
    }, [onSearch, ref])

    return (
      <div className="relative">
        <SearchIcon 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5 pointer-events-none" 
          aria-hidden="true"
        />
        <input
          type="search"
          className={cn(
            "search-input pl-12 pr-4 py-3 w-full bg-primary-800 border border-border rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200",
            className
          )}
          placeholder={placeholder}
          aria-label={ariaLabel || placeholder}
          ref={ref}
          onKeyPress={handleKeyPress}
          onBlur={handleSearch}
          {...props}
        />
      </div>
    )
  }
)
Search.displayName = "Search"

export { Search }
