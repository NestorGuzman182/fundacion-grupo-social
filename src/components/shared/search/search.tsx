interface Props {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}

export const Search: React.FC<Props> = ({searchTerm, setSearchTerm}) => {
    return (
        <div className='group relative m-4 pl-4'>
            <svg width="30" height="30" fill="currentColor" className="absolute left-3 top-1/2 pl-2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
            </svg>
            <input
                type="text"
                placeholder="Buscar publicaciones..."
                className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full x-auto text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2  pl-10 pr-4 ring-1 ring-slate-200 shadow-sm truncate"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}