import { TopNavData as data } from './TopNavData';
// Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"

export default function NavMenu() {
    return (
        <div className="hidden lg:ml-6 lg:block">
            <div className="flex space-x-4">
                {data.map(({ id, title, link }) => (
                    <a
                        key={id}
                        href={link}
                        className="px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
                    >
                        {title}
                    </a>
                ))}
            </div>
        </div>
    );
}
