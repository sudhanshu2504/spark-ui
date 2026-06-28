"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  IconCircleCheckFilled,
  IconCircleXFilled,
  IconInfoCircleFilled,
  IconLoader2,
  IconX,
} from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

// --- Configuration & Styles ---

const toastVariants = cva(
  "pointer-events-auto group relative flex items-start gap-3 w-full cursor-grab overflow-hidden rounded-xl bg-zinc-900/95 p-3.5 pr-2 ring-1 backdrop-blur-xl shadow-2xl shadow-black/40 active:cursor-grabbing",
  {
    variants: {
      variant: {
        default: "ring-white/10",
        success: "ring-emerald-500/30",
        error: "ring-rose-500/30",
        info: "ring-sky-500/30",
        loading: "ring-yellow-500/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const progressVariants = cva("absolute bottom-0 left-0 h-0.5 w-full origin-left", {
  variants: {
    variant: {
      default: "bg-white/30",
      success: "bg-emerald-400",
      error: "bg-rose-400",
      info: "bg-sky-400",
      loading: "bg-yellow-400",
    },
  },
  defaultVariants: { variant: "default" },
});

const defaultIcons = {
  default: null,
  success: <IconCircleCheckFilled className="text-emerald-400" size={18} />,
  error: <IconCircleXFilled className="text-rose-400" size={18} />,
  info: <IconInfoCircleFilled className="text-sky-400" size={18} />,
  loading: <IconLoader2 className="animate-spin text-yellow-400" size={18} />,
};

// --- Types ---

export type ToastVariant = VariantProps<typeof toastVariants>["variant"];

export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface ToastProps {
  id?: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  action?: ToastAction;
  icon?: React.ReactNode;
}

interface ToastItem extends ToastProps {
  id: string;
  createdAt: number;
}

// --- Store ---

class ToastStore {
  toasts: ToastItem[] = [];
  listeners = new Set<(toasts: ToastItem[]) => void>();

  subscribe = (listener: (toasts: ToastItem[]) => void) => {
    this.listeners.add(listener);
    listener([...this.toasts]);
    return () => { this.listeners.delete(listener); };
  };

  emit = () => {
    this.listeners.forEach((listener) => listener([...this.toasts]));
  };

  add = (toast: ToastProps) => {
    const id = toast.id ?? Math.random().toString(36).slice(2);
    const newToast = { ...toast, id, createdAt: Date.now() };
    
    const exists = this.toasts.findIndex((t) => t.id === id);
    if (exists >= 0) {
      this.toasts[exists] = { ...this.toasts[exists], ...newToast };
    } else {
      this.toasts = [newToast, ...this.toasts];
    }
    
    this.emit();
    return id;
  };

  dismiss = (id?: string) => {
    if (id) {
      this.toasts = this.toasts.filter((t) => t.id !== id);
    } else {
      this.toasts = [];
    }
    this.emit();
  };
}

const store = new ToastStore();

// --- API ---

const createToast = (title: string, opts?: Omit<ToastProps, "title">) => {
  return store.add({ title, ...opts });
};

export const toast = Object.assign(createToast, {
  success: (title: string, opts?: Omit<ToastProps, "title" | "variant">) =>
    createToast(title, { ...opts, variant: "success" }),
  error: (title: string, opts?: Omit<ToastProps, "title" | "variant">) =>
    createToast(title, { ...opts, variant: "error" }),
  info: (title: string, opts?: Omit<ToastProps, "title" | "variant">) =>
    createToast(title, { ...opts, variant: "info" }),
  loading: (title: string, opts?: Omit<ToastProps, "title" | "variant">) =>
    createToast(title, { ...opts, variant: "loading", duration: Infinity }),
  dismiss: (id?: string) => store.dismiss(id),
  promise: async <T,>(
    promise: Promise<T>,
    msgs: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((err: unknown) => string);
    }
  ) => {
    const id = createToast(msgs.loading, { variant: "loading", duration: Infinity });
    try {
      const data = await promise;
      createToast(typeof msgs.success === "function" ? msgs.success(data) : msgs.success, {
        id,
        variant: "success",
      });
      return data;
    } catch (err) {
      createToast(typeof msgs.error === "function" ? msgs.error(err) : msgs.error, {
        id,
        variant: "error",
      });
      throw err;
    }
  },
});

// --- Components ---

export interface ToastProviderProps {
  position?: "bottom-right" | "bottom-left" | "bottom-center" | "top-right" | "top-left" | "top-center";
  max?: number;
  stackPhysics?: boolean;
  swipeThreshold?: number;
}

export function ToastProvider({
  position = "bottom-right",
  max = 3,
  stackPhysics = true,
  swipeThreshold = 80,
}: ToastProviderProps) {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  React.useEffect(() => store.subscribe(setToasts), []);

  React.useEffect(() => {
    const timers = toasts.map((t) => {
      if (t.duration === Infinity) return null;
      const duration = t.duration ?? (t.variant === "error" ? 6000 : 4500);
      const remaining = duration - (Date.now() - t.createdAt);
      return setTimeout(() => store.dismiss(t.id), Math.max(0, remaining));
    });
    return () => timers.forEach((timer) => timer && clearTimeout(timer));
  }, [toasts]);

  const isTop = position.startsWith("top");
  const alignment = position.endsWith("center")
    ? "items-center left-1/2 -translate-x-1/2"
    : position.endsWith("right")
    ? "items-end right-0"
    : "items-start left-0";

  return (
    <div
      className={cn(
        "pointer-events-none fixed z-[9999] flex w-full max-w-md flex-col gap-2 p-4",
        isTop ? "top-0" : "bottom-0",
        alignment
      )}
    >
      <div className="relative w-full">
        <AnimatePresence initial={false}>
          {toasts.slice(0, max).map((t, index) => (
            <ToastCard
              key={t.id}
              toast={t}
              index={index}
              total={Math.min(toasts.length, max)}
              isTop={isTop}
              stackPhysics={stackPhysics}
              swipeThreshold={swipeThreshold}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ToastCard({
  toast: t,
  index,
  total,
  isTop,
  stackPhysics,
  swipeThreshold,
}: {
  toast: ToastItem;
  index: number;
  total: number;
  isTop: boolean;
  stackPhysics: boolean;
  swipeThreshold: number;
}) {
  const [dragX, setDragX] = React.useState(0);
  const variant = t.variant ?? "default";
  
  // Stacking physics calculations
  const yOffset = stackPhysics ? index * (isTop ? 8 : -8) : 0;
  const scale = stackPhysics ? 1 - index * 0.05 : 1;
  const opacity = stackPhysics ? 1 - index * 0.25 : 1;

  return (
    <motion.div
      layout
      drag="x"
      dragSnapToOrigin
      onDrag={(_, info) => setDragX(info.offset.x)}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) > swipeThreshold) store.dismiss(t.id);
        setDragX(0);
      }}
      initial={{ opacity: 0, y: isTop ? -40 : 40, scale: 0.92 }}
      animate={{ opacity, y: yOffset, scale, zIndex: total - index }}
      exit={{
        opacity: 0,
        x: dragX !== 0 ? Math.sign(dragX) * 400 : 0,
        y: dragX !== 0 ? 0 : isTop ? -20 : 20,
        scale: 0.92,
        transition: { duration: 0.2 },
      }}
      transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.7 }}
      style={{ position: index === 0 ? "relative" : "absolute", top: 0, left: 0, right: 0 }}
      className={toastVariants({ variant })}
    >
      {/* Icon */}
      <div className="mt-0.5 shrink-0">{t.icon ?? defaultIcons[variant]}</div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-white">{t.title}</p>
        {t.description && <p className="mt-0.5 text-xs text-zinc-400">{t.description}</p>}
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-1">
        {t.action && (
          <button
            onClick={() => {
              t.action?.onClick();
              store.dismiss(t.id);
            }}
            className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-white hover:bg-white/15 transition-colors"
          >
            {t.action.label}
          </button>
        )}
        <button
          onClick={() => store.dismiss(t.id)}
          className="rounded-md p-1 text-zinc-500 opacity-0 transition group-hover:opacity-100 hover:bg-white/5 hover:text-white"
          aria-label="Dismiss"
        >
          <IconX size={14} />
        </button>
      </div>

      {/* Progress Bar */}
      {t.duration !== Infinity && index === 0 && (
        <motion.div
          key={t.id + t.createdAt}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: (t.duration ?? (variant === "error" ? 6000 : 4500)) / 1000, ease: "linear" }}
          className={progressVariants({ variant })}
        />
      )}
    </motion.div>
  );
}
