import React from "react";
import RaidCard from "../components/RaidCard";

export default function Raids() {
  return (
    <main className="page-layout">
      <h1 className="page-title">Destiny 2 Raid Guides</h1>
      <div className="sidebar-layout">
        <div className="card-sidebar">
          <RaidCard title="Desert Perpetual" />
          <RaidCard title="Salvation's Edge" />
          <RaidCard title="Crota's End" />
          <RaidCard title="Root of Nightmares" />
        </div>
      </div>
    </main>
  );
}