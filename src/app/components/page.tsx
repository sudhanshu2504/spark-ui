import React from 'react';
import { getComponents } from '@/lib/fetchCMSData';
import { Component } from '@/types/components';
import Card from '@/components/ui/components_card';

interface CMSComponent extends Component {
  thumbnailURL?: string;
  description?: string;
}

async function ComponentsPage() {
  const components: CMSComponent[] = await getComponents('name,slug,thumbnailURL,description,isNewComponent');

  if (!components || components.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-ink text-xl font-semibold mb-2">No components found</h1>
        <p className="text-ink-mute text-sm">Check the console for errors</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Page header */}
      <div className="mb-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute block mb-2">Library</span>
        <h1 className="font-sans font-bold text-ink text-3xl md:text-4xl mb-2">
          All Components
        </h1>
        <p className="text-ink-soft text-sm md:text-base max-w-lg">
          {components.length || 'Several'} hand-crafted, copy-paste components built with React, Tailwind, and Motion.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {components.map((component, index) => (
          <Card key={component.slug || index} {...component} />
        ))}
        {/* Coming soon tile */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-ink-mute/30 rounded-2xl min-h-[260px] hover:border-ink-mute/50 transition-colors duration-200">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute mb-1">More dropping</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute">weekly &rarr;</span>
        </div>
      </div>
    </div>
  );
}

export default ComponentsPage;
