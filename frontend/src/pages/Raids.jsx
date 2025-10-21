import React from "react";
import RaidCard from "../components/RaidCard";

export default function Raids() {
  return (
    <main className="page-layout">
      <h1 className="page-title">Destiny 2 Raid Guides</h1>
      <div className="sidebar-layout">
        <div className="card-sidebar">
          <RaidCard title="Desert Perpetual" image="/images/desertperp.jpg" />
          <RaidCard title="Desert Perpetual (Epic)" image="/images/desertperp.jpg" />
          <RaidCard title="Salvation's Edge" image="/images/salvationsedge.jpg" />
          <RaidCard title="Crota's End" image="/images/crotasend.jpg" />
          <RaidCard title="Root of Nightmares" image="/images/rootofnightmares.jpg" />
          <RaidCard title="King's Fall" image="/images/kingsfall.jpg" />
          <RaidCard title="Vow of the Disciple" image="/images/vowofthedisciple.jpg" />
          <RaidCard title="Vault of Glass" image="/images/vaultofglass.jpg" />
          <RaidCard title="Deep Stone Crypt" image="/images/deepstonecrypt.jpg" />
          <RaidCard title="Garden of Salvation" image="/images/gardenofsalvation.jpg" />
          <RaidCard title="Last Wish" image="/images/lastwish.jpg" />
        </div>
      </div>
    </main>
  );
}