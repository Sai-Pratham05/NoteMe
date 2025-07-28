import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Settings2, Sparkles, Zap } from 'lucide-react';
import { ReactNode } from 'react';

export default function Features() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
                        Features Designed for Your Workflow 💡
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Unlock your productivity with powerful tools crafted for seamless note-taking and organization.
                    </p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group bg-background">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium text-xl">Lightning Fast Capture</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Jot down ideas the moment they strike. Our app is optimized for speed, ensuring no thought gets left behind.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group bg-background">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium text-xl">Organize Your World</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="mt-3 text-sm text-muted-foreground">
                                From tags to notebooks, categorize your notes exactly how you want. Find anything, anytime, effortlessly.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group bg-background">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium text-xl">Smart Search & AI Insights</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="mt-3 text-sm text-muted-foreground">
                                Powerful search helps you instantly retrieve any note. Plus, get smart suggestions and summaries to enhance your content.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)30%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)30%,transparent)]
      transition-all duration-300 ease-out hover:shadow-lg
    ">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
      />
      <div
        aria-hidden
        className="bg-radial to-background absolute inset-0 from-transparent to-75%"
      />
      <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t
        group-hover:-translate-y-1 transition-transform duration-300 ease-out
      ">
        {children}
      </div>
    </div>
);