'use client';

import StatCounter from './ui/stat-counter';

export default function HeroStats() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-gradient-to-b from-transparent via-slate-900/20 to-transparent backdrop-blur-[2px] rounded-2xl py-8 md:py-12 border border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter value="3+" label="Active Projects" />
          <StatCounter value="11" label="Team Members" />
          <StatCounter value="2023" label="Founded" />
          <StatCounter value="5" label="Technology Domains" />
        </div>
      </div>
    </div>
  );
}
