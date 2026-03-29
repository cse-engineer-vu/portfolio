import { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCarouselProps {
    projects: Project[];
    selectedId: number;
    onSelect: (project: Project) => void;
}

const CARD_WIDTH = 200;
const CARD_GAP = 16;
const CARD_STEP = CARD_WIDTH + CARD_GAP;

export function ProjectCarousel({ projects, selectedId, onSelect }: ProjectCarouselProps) {
    const n = projects.length;

    // Triple the list: [copy1, copy2, copy3]. We live in copy2 (indices n..2n-1).
    // When we drift into copy1 or copy3, we silently jump back to the equivalent
    // position in copy2 — the user never sees the jump because it's the same frame.
    const loopItems: Project[] = [...projects, ...projects, ...projects];

    // Start at first item of middle copy
    const [index, setIndex] = useState(n);
    const [containerWidth, setContainerWidth] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const trackRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const indexRef = useRef(n);         // always-current index for callbacks
    const resettingRef = useRef(false); // blocks navigation during silent jump
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Keep ref in sync with state
    indexRef.current = index;

    const realIndex = ((index % n) + n) % n; // 0..n-1, always positive

    // ── Measure container ──────────────────────────────────────────────
    useEffect(() => {
        const obs = new ResizeObserver(entries =>
            setContainerWidth(entries[0].contentRect.width)
        );
        if (containerRef.current) obs.observe(containerRef.current);
        return () => obs.disconnect();
    }, []);

    // ── DOM-level position setter ──────────────────────────────────────
    // All movement goes through here so we can toggle transition on/off.
    // Uses translate3d to keep the track on the GPU compositor layer.
    const applyPos = useCallback(
        (idx: number, animated: boolean) => {
            if (!trackRef.current || containerWidth === 0) return;
            const x = containerWidth / 2 - idx * CARD_STEP - CARD_WIDTH / 2;
            trackRef.current.style.transition = animated
                ? "transform 0.6s ease"
                : "none";
            trackRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
        },
        [containerWidth]
    );

    // Re-centre when container resizes
    useEffect(() => {
        applyPos(indexRef.current, false);
    }, [containerWidth, applyPos]);

    // ── Core navigation ────────────────────────────────────────────────
    const navigate = useCallback(
        (delta: number) => {
            if (resettingRef.current) return;

            const curr = indexRef.current;
            const next = curr + delta;

            // Animate to next position
            setIndex(next);
            applyPos(next, true);

            // If we've drifted outside the middle copy, schedule a silent teleport
            // back to the equivalent slot inside the middle copy [n, 2n-1].
            if (next >= n * 2 || next < n) {
                resettingRef.current = true;
                setTimeout(() => {
                    const wrapped = n + (((next - n) % n) + n) % n;

                    // Step 1 – move DOM to wrapped position with NO transition.
                    // The browser paints this frame: same visual, no movement visible.
                    applyPos(wrapped, false);

                    // Step 2 – two rAFs later, update React state so scale/opacity
                    // re-sync to the new index. By then the position jump has already
                    // been committed, so there's no stale-position flash.
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            setIndex(wrapped);
                            // Re-enable transition for the next animated slide
                            if (trackRef.current) {
                                trackRef.current.style.transition = "transform 0.6s ease";
                            }
                            resettingRef.current = false;
                        });
                    });
                }, 620); // wait for the 0.6s CSS transition to finish
            }
        },
        [n, applyPos]
    );

    const goNext = useCallback(() => navigate(1), [navigate]);
    const goPrev = useCallback(() => navigate(-1), [navigate]);

    // ── Auto-scroll ────────────────────────────────────────────────────
    useEffect(() => {
        if (isPaused) return;
        intervalRef.current = setInterval(goNext, 3500);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPaused, goNext]);

    // ── Notify parent when the real project changes ────────────────────
    const prevRealRef = useRef(realIndex);
    useEffect(() => {
        if (prevRealRef.current !== realIndex) {
            prevRealRef.current = realIndex;
            onSelect(projects[realIndex]);
        }
    }, [realIndex, projects, onSelect]);

    // ── Sync when selectedId changes externally ────────────────────────
    useEffect(() => {
        const ri = projects.findIndex(p => p.id === selectedId);
        if (ri !== -1 && ri !== realIndex) {
            const target = n + ri; // always land in middle copy
            setIndex(target);
            applyPos(target, true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedId]);

    // ── Click a card ───────────────────────────────────────────────────
    const goToReal = useCallback(
        (ri: number) => {
            if (resettingRef.current) return;
            const curr = indexRef.current;
            // The same project appears in all three copies at ri, ri+n, ri+2n.
            // Pick whichever is physically closest to avoid a long sweep.
            const candidates = [ri, ri + n, ri + n * 2];
            const target = candidates.reduce((best, c) =>
                Math.abs(c - curr) < Math.abs(best - curr) ? c : best
            );
            setIndex(target);
            applyPos(target, true);
            onSelect(projects[ri]);
        },
        [n, applyPos, projects, onSelect]
    );

    // ── Render ─────────────────────────────────────────────────────────
    return (
        <div className="pt-6 pb-4 px-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Browse Other Projects
                </p>
                <div className="flex items-center gap-2">
                    <button
                        onClick={goPrev}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={goNext}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Track window */}
            <div
                ref={containerRef}
                className="relative overflow-hidden"
                style={{ height: 148 }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Edge fades */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

                {/* Sliding track */}
                <div
                    ref={trackRef}
                    className="flex items-center absolute top-0 left-0 will-change-transform"
                    style={{ gap: CARD_GAP }}
                >
                    {loopItems.map((project, i) => {
                        const isActive = i === index;
                        const distance = Math.abs(i - index);
                        const scale = isActive ? 1.1 : distance === 1 ? 0.92 : distance === 2 ? 0.83 : 0.76;
                        const opacity = isActive ? 1 : distance === 1 ? 0.7 : distance === 2 ? 0.5 : 0.3;

                        return (
                            <button
                                key={`${project.id}-${i}`}
                                onClick={() => goToReal(i % n)}
                                style={{
                                    width: CARD_WIDTH,
                                    flexShrink: 0,
                                    transform: `scale(${scale})`,
                                    opacity,
                                    transition: "transform 0.4s ease, opacity 0.4s ease",
                                }}
                                className={`rounded-xl overflow-hidden border cursor-pointer text-left ${isActive
                                    ? "border-primary/60 shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                                    : "border-border hover:border-primary/30"
                                    }`}
                            >
                                <div className="relative h-24 overflow-hidden bg-card">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    )}
                                </div>
                                <div
                                    className={`px-3 py-2 ${isActive
                                        ? "bg-gradient-to-r from-primary/10 to-violet-500/10"
                                        : "bg-card"
                                        }`}
                                >
                                    <p
                                        className={`text-xs font-semibold truncate ${isActive ? "text-primary" : "text-white/60"
                                            }`}
                                    >
                                        {project.title}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Dot indicators — always reflect real index */}
            <div className="flex items-center justify-center gap-2 mt-5">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToReal(i)}
                        style={{ transition: "all 0.3s ease" }}
                        className={`rounded-full ${i === realIndex
                            ? "w-6 h-2 bg-primary"
                            : "w-2 h-2 bg-border hover:bg-primary/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
