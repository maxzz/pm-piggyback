import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function App() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
            <section className="flex w-full max-w-2xl flex-col items-center gap-6 rounded-3xl border border-border bg-card p-10 text-center shadow-sm">
                <span className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
                    Tailwind CSS v4 and shadcn/ui are configured.
                </span>
                <div className="space-y-3">
                    <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
                        pm-piggyback
                    </h1>
                    <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                        This Vite React app now uses Tailwind through the official Vite plugin and
                        includes the current shadcn/ui base setup with the Nova preset.
                    </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                    <Button size="lg">
                        Open the component library
                        <ArrowRight className="size-4" />
                    </Button>
                    <Button size="lg" variant="outline">
                        Start adding components
                    </Button>
                </div>
            </section>
        </main>
    );
}
