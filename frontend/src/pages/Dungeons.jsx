import React from "react";
import DungeonCard from "../components/DungeonCard";

export default function Dungeons() {
  return (
    <main className="page-layout">
      <h1 className="page-title">Destiny 2 Dungeon Guides</h1>
      <div className="sidebar-layout">
        <div className="card-sidebar">
          <DungeonCard title="Vesper's Host" image="/images/vespers-host.jpg" slug="vespers-host" />
          <DungeonCard title="Warlord's Ruin" image="/images/warlords-ruin.jpg" slug="warlords-ruin" />
          <DungeonCard title="Ghosts of the Deep" image="/images/ghosts-deep.jpg" slug="ghosts-of-the-deep" />
          <DungeonCard title="Spire of the Watcher" image="/images/spire-watcher.jpg" slug="spire-of-the-watcher" />
          <DungeonCard title="Duality" image="/images/duality.jpg" slug="duality" />
          <DungeonCard title="Grasp of Avarice" image="/images/grasp-avarice.jpg" slug="grasp-of-avarice" />
          <DungeonCard title="Prophecy" image="/images/prophecy.jpg" slug="prophecy" />
          <DungeonCard title="Pit of Heresy" image="/images/pit-heresy.jpg" slug="pit-of-heresy" />
          <DungeonCard title="The Shattered Throne" image="/images/shattered-throne.jpg" slug="the-shattered-throne" />
        </div>
      </div>
    </main>
  );
}