---
title: "Home Server Setup & Services"
thumbnail: "/images/projects/server-setup-services-html-image1.png"
category: "homelab"
categoryLabel: "Home Lab"
status: "ongoing"
tags: ["TrueNAS Scale", "Jellyfin", "Ollama", "Tailscale", "Immich"]
blurb: "TrueNAS Scale server running Jellyfin, Immich, Ollama with Open WebUI, and qBittorrent behind a Mullvad WireGuard tunnel. Built around a $40 OfferUp tower with an RTX 3080. Kept accessible on the locked-down UCSC campus network through Linux Wi-Fi sharing and Tailscale."
weight: 2
date: 2025-02-01
---

I plugged in the forty-dollar OfferUp tower, hit the power switch, and watched the LEDs flash on for a split second before the power supply sparked and died. A thick cloud of white smoke rolled across my living room floor, smelling distinctly like burnt corn. Miraculously, the RTX 3080 survived. Once I swapped in a clean power supply, this sketchily sourced machine became the foundation of my current home server.

## The Early Setup: A Laptop on a Shelf

Before the tower, my entire homelab was just an old laptop connected to a two-bay USB hard drive enclosure.

![](/images/projects/server-setup-services-html-image2.png)
![](/images/projects/server-setup-services-html-image4.png)
![](/images/projects/server-setup-services-html-image3.png)

It ran TrueNAS Scale and worked fine for basic network storage, but it ran out of room fast. The USB dock was maxed out with two drives, including an existing [hard drive](https://a.co/d/7RFR8He). USB connections are notorious for dropping out during sustained ZFS pool scrubs, so adding more drives meant finding a real expansion path.

I spent time researching M.2 to SATA adapters on [Amazon](https://www.amazon.com/s?k=m.2+to+sata&i=electronics&crid=3NELBZ0CLTHUJ&sprefix=m.2+to+sata%2Celectronics%2C167) and [Newegg](https://www.newegg.com/p/pl?d=m.2+to+sata+adapter), and pricing out refurbished enterprise drives on [ServerPartDeals](https://www.ebay.com/str/ServerPartDeals) and [Amazon](https://a.co/d/dWIB5Ud). According to the [TrueNAS hardware guide](https://www.truenas.com/docs/scale/gettingstarted/scalehardwareguide/), the OS only needs about 16GB of boot storage. That meant I could clone the OS using this [boot drive cloning guide](https://www.truenas.com/community/threads/how-to-clone-current-boot-drive-truenas-scale-os-to-new-ssd.114345/) onto a dirt-cheap [boot SSD](https://a.co/d/9RXETYB) and save money.

Then I stumbled on a deal that changed the plan.

## The $40 OfferUp Tower

I found a desktop tower on OfferUp for forty dollars, which cost me about ninety minutes of driving.

![](/images/projects/server-setup-services-html-image1.png)

The hardware inside was a mixed bag:

* **CPU:** Intel 4th-gen Core i7
* **RAM:** 16GB DDR3 (4x4GB sticks)
* **GPU:** GTX 1060 6GB (pulled out immediately)
* **PSU:** An unbranded 1250W unit that promptly died in smoke

My original thought was to gut the case and transplant the laptop motherboard into it. Once I realized the chassis had plenty of native 3.5-inch drive bays, I decided to leave the desktop motherboard in place and turn the whole tower into the server. When I need even more storage down the road, I can convert the empty optical slots using this [drive bay thread](https://www.reddit.com/r/truenas/comments/1mmtagm/35_hdd_bays_please_help/) for 5.25-inch adapters.

I swapped in an RTX 3080 from my personal rig to handle local AI workloads and media transcoding. 

A skeptical reader would probably ask why on earth you would shove an RTX 3080 into an ancient fourth-gen i7 system with DDR3 memory. It would bottleneck horribly in modern games. But for a home server running local LLMs and media transcoding, CPU speed barely matters. The GPU handles the inference passes directly in its 10GB of VRAM, and the older platform gave me native SATA ports and drive bays for practically nothing.

## Running Self-Hosted Services

With TrueNAS Scale installed on the tower and storage pools configured, I set up my core services.

### Jellyfin
Jellyfin serves my media library, but getting hardware acceleration working took some troubleshooting. The container refused to boot until I worked through this [Jellyfin GPU guide](https://forums.truenas.com/t/nvidia-gpu-not-found-prevents-jellyfin-container-from-opening/32580/2) to pass the NVIDIA driver runtime through properly. I also hit a frustrating "cannot update while running" bug during app upgrades, which pointed back to this [upgrade bug thread](https://forums.truenas.com/t/24-10-1-cant-upgrade-apps/28340/3).

### Ollama and Open WebUI
I use Ollama with Open WebUI to run local LLMs like DeepSeek, inspired by this [DeepSeek guide](https://www.youtube.com/watch?time_continue=1&v=b2HeHDUbkec). The 3080 handles 7B and 8B parameter models quickly. I keep tabs on memory consumption from the shell with `nvidia-smi`.

### qBittorrent and WireGuard
All download traffic routes through a containerized qBittorrent client pinned to a Mullvad WireGuard tunnel. I configured the network routing using this [qBittorrent VPN guide](https://forums.truenas.com/t/guide-qbittorrent-app-with-wireguard-vpn/6003). The setup binds the client directly to the VPN interface, so traffic drops instantly if the tunnel disconnects.

### Immich
Immich handles automatic photo backups from my phone. In March 2026, I started migrating away from old ix-volumes to standard ZFS datasets using this [Immich dataset migration guide](https://www.reddit.com/r/immich/comments/1izrmv3/how_to_migrate_immich_from_ixapps_to_datasets/). Dedicated datasets make snapshotting and disaster recovery much cleaner.

## The UCSC Campus Network Workaround

In September 2025, I moved into campus housing at UCSC. University networks are notoriously restrictive: device isolation blocks local traffic, and there is no simple way to assign static LAN addresses to personal servers.

I needed the server online, and I needed access to my network printer. I initially considered Windows Internet Connection Sharing (ICS), but my Windows partition was unstable. 

Instead, I set up ethernet sharing on Linux using KDE, following the principles in this [AskUbuntu network sharing guide](https://askubuntu.com/questions/359856/share-wireless-internet-connection-through-ethernet). My daily laptop connects to the campus Wi-Fi, then bridges the internet connection over its ethernet port into a small network switch connected to the server.

From there, Tailscale bridges the gap. I configured the Tailscale subnet router in the TrueNAS app settings. Now, as long as my phone or laptop has Tailscale active, I can connect to my server services and files from anywhere on or off campus. 

The next step is moving the Wi-Fi bridge off my main laptop onto a dedicated Raspberry Pi, so the server stays reachable without keeping my daily machine docked.
