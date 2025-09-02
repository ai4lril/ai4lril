import { indianLanguages, type IndianLanguage } from './languages';

export default function LanguagesPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold" style={{ color: 'var(--brand-900)' }}>Languages</h1>
            <p className="mt-2 text-slate-600">Browse supported Indian languages and script variants.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {indianLanguages.map((lang: IndianLanguage) => (
                    <div key={lang.code} className="card rounded-2xl p-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-slate-800">{lang.name}</h2>
                            <span className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">{lang.scripts.length} scripts</span>
                        </div>
                        <div className="mt-3 text-sm text-slate-600">Scripts: {lang.scripts.join(', ')}</div>
                        <div className="mt-4 flex gap-2">
                            <a href="/speak" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-4 py-1.5 text-sm">Contribute</a>
                            <a href="/listen" className="bg-white/90 border border-slate-200 hover:bg-indigo-50 hover:text-indigo-700 rounded-full px-4 py-1.5 text-sm">Validate</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
