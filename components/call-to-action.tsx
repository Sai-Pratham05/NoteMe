import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CallToAction() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
                        Ready to Transform Your Notes? 🚀
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Organize your thoughts, boost productivity, and capture every idea with ease.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href="/signup"> {/* Assuming a signup/start page */}
                                <span>Start Your Free Trial Today! ✨</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href="/features"> {/* Link to your features or a demo video */}
                                <span>See All Features 💡</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}