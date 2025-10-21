import React from 'react';
import { useParams } from 'react-router-dom';
import { raidGuides, dungeonGuides } from '../guides';

export default function RaidGuide() {
  // Support both routes: /raids/:raidSlug and /dungeons/:dungeonSlug
  const { raidSlug, dungeonSlug } = useParams();
  const slug = raidSlug ?? dungeonSlug;

  // Resolve guide from registries
  const guide = slug ? (raidGuides[slug] || dungeonGuides[slug]) : null;

  if (!guide) {
    return (
      <main className="page-layout">
        <div className="guide-container">
          <h1>Guide not found</h1>
          <p>The raid or dungeon guide you're looking for doesn't exist.</p>
        </div>
      </main>
    );
  }

  const GuideComponent = guide.component;
  return <GuideComponent />;
}
