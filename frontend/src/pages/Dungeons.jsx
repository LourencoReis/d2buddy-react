import React from "react";
import DungeonCard from "../components/DungeonCard";

export default function Dungeons() {
  return (
    <main className="page-layout">
      <h1 className="page-title">Destiny 2 Dungeon Guides</h1>
      <div className="sidebar-layout">
        <div className="card-sidebar">
          <DungeonCard title="Sundered Doctrine" />
          <DungeonCard title="Vesper's Host" />
          <DungeonCard title="Warlord's Ruin" />
          <DungeonCard title="Ghosts of the Deep" />
        </div>
      </div>
    </main>
  );
}