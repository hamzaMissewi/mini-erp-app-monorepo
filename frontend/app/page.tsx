import React from 'react';

export default function Page() {
    return (
        <main>
            <header className='mb-6'>
                <h1 className='text-2xl font-semibold'>
                    Mini ERP — Tableau de bord
                </h1>
                <p className='text-sm text-slate-500'>
                    Vue d'ensemble rapide des KPIs
                </p>
            </header>

            <section className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6'>
                <div className='p-4 border rounded-lg bg-white dark:bg-slate-800'>
                    Chiffre d'affaires
                </div>
                <div className='p-4 border rounded-lg bg-white dark:bg-slate-800'>
                    Commandes
                </div>
                <div className='p-4 border rounded-lg bg-white dark:bg-slate-800'>
                    Stock faible
                </div>
            </section>

            <section className='p-4 border rounded-lg bg-white dark:bg-slate-800'>
                <h2 className='font-medium mb-2'>
                    Graphique des ventes (placeholder)
                </h2>
                <div className='h-48 flex items-center justify-center text-slate-400'>
                    Chart will go here
                </div>
            </section>
        </main>
    );
}
