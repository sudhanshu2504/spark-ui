'use client';

import { toast, ToastProvider } from '@/components/ui/toast';
import { motion } from 'motion/react';

const actions = [
  {
    id: 'success',
    label: 'Success',
    sublabel: 'Saved & synced',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'emerald',
    glow: 'rgba(52,211,153,0.15)',
    border: 'rgba(52,211,153,0.25)',
    text: 'rgb(52,211,153)',
    bg: 'rgba(52,211,153,0.08)',
    handler: () =>
      toast.success('Changes saved successfully!', {
        description: 'Your profile has been synchronized across all devices.',
        action: { label: 'Undo', onClick: () => toast.info('Action reverted') },
      }),
  },
  {
    id: 'error',
    label: 'Error',
    sublabel: 'Build failed',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    ),
    color: 'rose',
    glow: 'rgba(251,113,133,0.15)',
    border: 'rgba(251,113,133,0.25)',
    text: 'rgb(251,113,133)',
    bg: 'rgba(251,113,133,0.08)',
    handler: () =>
      toast.error('Deployment failed', {
        description: 'Build error in pages/index.tsx — check console for details.',
      }),
  },
  {
    id: 'info',
    label: 'Info',
    sublabel: 'New notification',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    ),
    color: 'sky',
    glow: 'rgba(56,189,248,0.15)',
    border: 'rgba(56,189,248,0.25)',
    text: 'rgb(56,189,248)',
    bg: 'rgba(56,189,248,0.08)',
    handler: () =>
      toast.info('New comment from Maya', {
        description: "Looks great — let's ship this to production.",
      }),
  },
  {
    id: 'promise',
    label: 'Promise',
    sublabel: 'Async loader',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    color: 'violet',
    glow: 'rgba(167,139,250,0.15)',
    border: 'rgba(167,139,250,0.25)',
    text: 'rgb(167,139,250)',
    bg: 'rgba(167,139,250,0.08)',
    handler: () => {
      const fakeApi = new Promise((res, rej) =>
        setTimeout(
          () => (Math.random() > 0.3 ? res({ url: 'sparkui.site' }) : rej()),
          2500
        )
      );
      toast.promise(fakeApi, {
        loading: 'Deploying to production…',
        success: (r) => `Live at ${r.url}`,
        error: 'Deploy failed — retrying in 30s',
      });
    },
  },
  {
    id: 'stack',
    label: 'Stack',
    sublabel: 'See the physics',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    color: 'amber',
    glow: 'rgba(251,191,36,0.15)',
    border: 'rgba(251,191,36,0.25)',
    text: 'rgb(251,191,36)',
    bg: 'rgba(251,191,36,0.08)',
    handler: () => {
      toast('Build started');
      setTimeout(() => toast.info('Compiling routes…'), 400);
      setTimeout(() => toast.info('Optimizing assets…'), 800);
      setTimeout(() => toast.success('Build complete! 🎉'), 1300);
    },
  },
  {
    id: 'dismiss',
    label: 'Clear',
    sublabel: 'Dismiss all',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    color: 'zinc',
    glow: 'rgba(161,161,170,0.1)',
    border: 'rgba(161,161,170,0.15)',
    text: 'rgb(161,161,170)',
    bg: 'rgba(161,161,170,0.05)',
    handler: () => toast.dismiss(),
  },
];

export default function ToastDemo() {
  return (
    <div className="relative h-full flex flex-col items-center my-auto justify-center w-full min-h-[560px] py-12 font-sans overflow-hidden">
      <ToastProvider position="bottom-right" max={4} stackPhysics />

      {/* ── Background layers ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.07) 0%, transparent 70%),
            linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        }}
      />

      {/* ── Header ── */}
      <div className="relative z-10 flex flex-col items-center text-center mb-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3"
        >
          Stackable Toast
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="text-sm text-zinc-500 max-w-xs leading-relaxed"
        >
          Click any trigger to spawn a toast. Stack several and watch the physics play out.
        </motion.p>
      </div>

      {/* ── Action buttons ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-3 px-4 w-full max-w-lg"
      >
        {actions.map((action, i) => (
          <motion.button
            key={action.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.07 }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={action.handler}
            className="group relative flex flex-col items-start gap-2.5 rounded-2xl border p-4 text-left transition-all duration-200"
            style={{
              background: action.bg,
              borderColor: action.border,
              boxShadow: `0 0 0 0 ${action.glow}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 8px 32px -8px ${action.glow}, inset 0 1px 0 ${action.border}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 0 0 ${action.glow}`;
            }}
          >
            {/* Icon */}
            <motion.div
              className="flex h-9 w-9 items-center justify-center rounded-xl flex-shrink-0"
              style={{ background: action.bg, color: action.text, border: `1px solid ${action.border}` }}
              whileHover={{ scale: 1.12 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {action.icon}
            </motion.div>

            {/* Label */}
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white leading-none mb-1 truncate">{action.label}</p>
              <p className="text-[11px] leading-none truncate" style={{ color: action.text, opacity: 0.8 }}>
                {action.sublabel}
              </p>
            </div>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
