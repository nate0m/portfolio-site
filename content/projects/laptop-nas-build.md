---
title: "Laptop Server"
thumbnail: "/images/projects/laptop-nas-build-html-image1.png"
category: "homelab"
categoryLabel: "Home Lab"
status: "ongoing"
tags: ["TrueNAS Scale", "FreeCAD", "laser cutting", "NAS", "hard drives"]
blurb: "Turning a spare laptop and loose USB drives into an enclosed, unified homelab NAS. Build log tracking M.2 to SATA storage expansion, FreeCAD case design, laser-cut acrylic planning, and custom 12V/5V power delivery."
weight: 1
date: 2025-02-01
---

My current home server is just an old laptop with a couple of hard drives plugged into a USB dock. It runs TrueNAS Scale and handles backups fine, but I am rapidly running out of storage. 

The two-bay USB dock is completely full. Having loose drives, power bricks, and USB cables strewn across the desk is messy and precarious. I need to add more drives, get off USB, and build a unified enclosure that houses the laptop, the storage pool, cooling fans, and a dedicated power supply.

## The Current Setup

Right now, the hardware sits in the open on a shelf.

![](/images/projects/laptop-nas-build-html-image5.png)
![](/images/projects/laptop-nas-build-html-image6.png)
![](/images/projects/laptop-nas-build-html-image7.png)

USB works for a quick prototype, but ZFS hates USB enclosures. If the USB controller glitches or disconnects for a second, the entire ZFS pool drops into a degraded state. To add more drives reliably, I need direct SATA connections.

## Storage Expansion: M.2 to SATA

Since the laptop does not have standard SATA ports on the motherboard, the plan is to adapt the internal M.2 PCIe slot into a multi-port SATA controller. 

I started digging through options on [Amazon](https://www.amazon.com/s?k=m.2+to+sata&i=electronics&crid=3NELBZ0CLTHUJ&sprefix=m.2+to+sata%2Celectronics%2C167) and [Newegg](https://www.newegg.com/p/pl?d=m.2+to+sata+adapter). The key requirement is compatibility with TrueNAS Scale and ZFS. Many cheap M.2 SATA breakout boards use low-end JMicron or ASMedia port multipliers, which cause major instability under sustained parity scrubs. 

This [Linus Tech Tips thread](https://linustechtips.com/topic/1616173-nas-storage-upgrade-help-m2-to-sata-adatper/#comment-16755459) broke down which chipsets negotiate genuine PCIe-to-SATA controller channels without bottlenecking the drives.

## Initial Case Modeling in FreeCAD

I started modeling a custom chassis in FreeCAD to hold the laptop, drives, and electronics in one compact footprint.

![](/images/projects/laptop-nas-build-html-image8.png)
![](/images/projects/laptop-nas-build-html-image3.png)

The initial concept was rough, but it helped block out spatial relationships. I brought in existing community models for key components:

* **Drive caddies:** Found modular [3.5" HDD cages on Printables](https://www.printables.com/model/788261-35-hdd-cage-caddy-for-anti-vibration-screws) that use anti-vibration grommets and hold two drives per cage.
* **Cooling:** Sized the exhaust for two 92x92x25 mm [Noctua 92mm fans](https://a.co/d/i1cUoC0).
* **Power:** Left space for buck converters and a clean AC receptacle.

A skeptical reader would probably ask why bother building a custom box around a laptop instead of just picking up a used Dell OptiPlex tower on eBay for eighty bucks. The objection is totally fair. A used desktop gives you standard PCIe slots, native SATA power, and zero CAD headaches. But the laptop has two distinct perks: the internal battery acts as a built-in uninterruptible power supply, and the whole system idles under ten watts. Plus, designing the case is half the point of the project.

## Pivoting to Laser Cutting

Printing a full multi-drive chassis on a desktop 3D printer takes days of machine time. In late October 2025, I decided to switch from 3D printing the enclosure shell to laser cutting flat sheets with interlocking finger joints.

The entire box now breaks down into flat panels. FreeCAD does not do tabbed sheet-metal style box joints natively, but this [FreeCAD forum thread](https://forum.freecad.org/viewtopic.php?t=99394) covers an add-on workbench that automates finger joints between intersecting faces.

I also looked into fastener options for flat acrylic. Driving screws directly into brittle acrylic is a recipe for cracked panels. I checked out this guide on [testing heat-set inserts in acrylic](https://newscrewdriver.com/2017/06/25/testing-heat-set-inserts-in-acrylic/). Heat-set brass inserts melt cleanly into acrylic pilot holes, giving durable machine threads to mount the drive caddies. The fans can just use through-bolts and nuts.

For the drive bays, I am also considering this alternative [8-bay 3.5" drive rack](https://www.printables.com/model/1372686-3u-hard-drive-bay-for-8x-35in-hdds-for-10-mini-rac) if I decide to expand beyond four drives.

## Laptop Lid & Console Access

Running a laptop as a 24/7 headless server brings an annoying quirk: by default, closing the lid triggers system suspend. 

According to this [TrueNAS forum thread on laptop suspend](https://www.truenas.com/community/threads/prevent-suspend-mode-when-installed-on-a-laptop.94729/), you can disable lid-close sleep in Debian via systemd logind configs. Even so, you still need physical access to the screen and keyboard whenever the network drops or BIOS settings need tweaking.

![](/images/projects/laptop-nas-build-html-image4.png)

I redesigned the enclosure layout with a removable upper shelf. The hard drives sit on the upper tier, and the shelf lifts out so you can swing the laptop screen up without dismantling the entire chassis.

## Panel Layout and 2D Vector Export

By mid-November 2025, the laser-cut layout was coming together in CAD.

![](/images/projects/laptop-nas-build-html-image1.png)

I mapped the outer panels to fit onto a 24"x96" sheet from [ePlastics](https://www.eplastics.com/ACRY20370-187PM24X96), though I might use Baltic birch plywood instead for better rigidity and lower cost.

To get toolpaths out of FreeCAD for the laser cutter, the workflow is straightforward: switch to the Draft workbench, select a face, generate a 2D Shape2DView projection, and export that projection directly as an SVG.

![](/images/projects/laptop-nas-build-html-image2.png)

## Power Delivery Architecture

Laptops cannot power multiple 3.5" desktop drives. A 3.5" spinning disk requires both 12V for the spindle motor and 5V for the logic board, pulling up to 2A on spin-up.

The plan is to install an enclosed 12V LED power supply inside the base of the chassis. The 12V rail will feed the drive spindle motors and the cooling fans directly. Two step-down buck converters will drop the 12V line to a steady 5V rail for the drive logic boards. All DC grounds will tie to a shared ground plane to prevent floating voltage references across the SATA connectors.
