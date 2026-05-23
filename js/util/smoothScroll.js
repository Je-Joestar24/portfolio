/**
 * Eased scroll animation for section navigation.
 */

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * @param {number} targetY
 * @param {{ duration?: number, onCancel?: () => boolean }} options
 * @returns {{ promise: Promise<void>, cancel: () => void }}
 */
export function animateScrollTo(targetY, options = {}) {
    const startY = window.scrollY;
    const distance = targetY - startY;

    if (Math.abs(distance) < 2 || prefersReducedMotion()) {
        window.scrollTo(0, targetY);
        return { promise: Promise.resolve(), cancel: () => {} };
    }

    const duration =
        options.duration ??
        Math.min(1400, Math.max(850, Math.abs(distance) * 0.55));

    let frameId = null;
    let cancelled = false;
    const startTime = performance.now();

    const promise = new Promise((resolve) => {
        const step = (now) => {
            if (cancelled) {
                resolve();
                return;
            }

            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeInOutCubic(progress);

            window.scrollTo(0, startY + distance * eased);

            if (progress < 1) {
                frameId = requestAnimationFrame(step);
            } else {
                resolve();
            }
        };

        frameId = requestAnimationFrame(step);
    });

    const cancel = () => {
        cancelled = true;
        if (frameId !== null) cancelAnimationFrame(frameId);
    };

    return { promise, cancel };
}
