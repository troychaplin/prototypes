import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export default function NavSearch() {
    return (
        <div className="flex flex-1 px-2 lg:ml-6 lg:justify-end">
            <div className="w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <MagnifyingGlassIcon
                            className="w-5 h-5 text-black/40"
                            aria-hidden="true"
                        />
                    </div>
                    <input
                        id="search"
                        name="search"
                        className="block w-full py-2 pl-10 pr-3 text-gray-600 border rounded-md border-black/20 placeholder-black/50 focus:border-black/50 focus:text-gray-600 focus:outline-none focus:ring-cyan-200 sm:text-sm"
                        placeholder="Search"
                        type="search"
                    />
                </div>
            </div>
        </div>
    );
}
