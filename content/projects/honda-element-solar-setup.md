---
title: "Honda Element Solar & Camper Setup"
thumbnail: "/images/projects/honda-element-solar-setup-residential-panel.jpg"
category: "vehicle"
categoryLabel: "Vehicles"
status: "complete"
tags: ["solar", "MPPT", "1500W inverter", "DIY battery", "Honda Element"]
blurb: "Repurposed a dilapidated van solar setup into a plywood-boxed power station for a Honda Element, built in three days for a three-week Pacific Northwest road trip. 100W panel, MPPT controller, 1500W inverter, and a 4-cell DIY lithium pack. Kept a 12V fridge running the whole way."
weight: 1
date: 2025-05-01
---

In May 2025, I took off on a three-week road trip up the Pacific Northwest coast in my Honda Element. Three days before leaving, I decided I needed a reliable power setup. I had a pile of leftover solar gear sitting in the garage from an old camper van build. Most of it was dusty and slightly neglected, but the core hardware was still good. With some help from my cousin, we spent three days turning those loose components into a self-contained wooden power box.

The main requirement was simple. I needed to run a 12V fridge non-stop, plus charge a phone and a laptop. If the fridge warm-thawed the groceries, the trip was ruined. Everything else was secondary.

## Mounting and Inspiration

To get panels onto the Element, I needed a rack and a mounting plan. I took cues from this [Honda Element camper build](https://el.life/honda-element-camper/) and picked up an affordable [roof rack](https://a.co/d/8GLpYcN) on Amazon to anchor everything.

## The Scavenged Hardware

Most of these parts were standard off-the-shelf units bought roughly four years earlier from Amazon, AliExpress, or Facebook Marketplace.

### The 4S Lithium Battery
Instead of buying a prebuilt 12V drop-in battery, I had a custom 4S pack made from four raw prismatic lithium cells paired with a BMS.

![](/images/projects/honda-element-solar-setup-html-image6.png)

* **Configuration:** 4S (4 cells in series)
* **Nominal Voltage:** 12.8V
* **Minimum Voltage:** 10.0V
* **Full Charge Voltage:** 14.6V
* **Rated Capacity:** 280Ah

![](/images/projects/honda-element-solar-setup-html-image2.png)

The BMS handles cell balancing and basic protections against overcharge and low voltage cutoff.

![](/images/projects/honda-element-solar-setup-html-image8.png)
![](/images/projects/honda-element-solar-setup-html-image4.png)

### MPPT Charge Controller
The charge controller takes the fluctuating DC voltage from the roof panel and steps it down to a steady charge profile for the 12V pack.

* **Compatible Voltages:** 12V, 24V auto-detect
* **Max Charging Current:** 40A
* **Documentation:** [datasheet](https://drive.google.com/file/d/1g6imWmjJop1SdYVB9JajS1hJ5JC9G8RP/view?usp=drive_link) and [manual](https://drive.google.com/file/d/1DaqeB_3EXXUkYRH0dtFPTh-tdEfZE0hm/view?usp=drive_link)

### 1500W Inverter
For running household AC gear like a laptop brick or small appliances, I kept my 1500W pure sine inverter in the loop.

* **DC Input:** 12.5V, up to 141A draw
* **AC Output:** 115V AC, 60Hz, 13A (1500W continuous)
* **Documentation:** [inverter manual](https://drive.google.com/file/d/1twf5DZJQVlRMTw0F8a4hDzSwxLWTpSSR/view?usp=drive_link)

### Solar Panels
I planned to run two 100W Renogy panels in parallel. When I tested them in the driveway, one panel output zero volts. It was completely dead. With no time to wait for a replacement, I bolted the single working 100W panel to the roof and rolled with it.

## Bench Testing the Battery

Before stuffing the cells into a wooden enclosure, I needed to check their real health. I hooked the pack up to a capacity tester to see what it could actually deliver under load.

![](/images/projects/honda-element-solar-setup-html-image3.jpg)

The test did not look great on paper. Out of 280Ah rated capacity, the pack gave up just over 100Ah before the BMS cut out. That is under 50% of the factory rating. Two of the four cells were noticeably weaker than the other two. The BMS kept them aligned under float charge, but once a heavy discharge load hit, the weaker pair dropped voltage fast and tripped low-voltage protection early.

A skeptical reader would probably ask why on earth I trusted a three-week road trip to a degraded battery that failed half its rated capacity. The objection is fair. But 100Ah at 12V still equals 1.2 kilowatt-hours of usable juice. The 12V compressor fridge only pulls about 35 to 40 watts while cycling, which averages out to roughly 30Ah over an entire day. Even with zero solar input, 100Ah bought me three full days of cold food before reaching empty.

## Building the Power Box

We built an open plywood crate sized specifically to cradle the four heavy cells. Keeping the battery rigid stops the terminals and busbars from vibrating loose on rough dirt roads. To keep the cells from shifting inside the crate, I used these 3D printed [corner brackets](https://www.printables.com/model/181097-corner-brackets-for-system20-2020-2040-extrusion) to brace and secure the battery pack in place.

![](/images/projects/honda-element-solar-setup-html-image1.png)
![](/images/projects/honda-element-solar-setup-html-image7.png)
![](/images/projects/honda-element-solar-setup-html-image5.png)

We mounted the inverter directly to the side of the box, with the MPPT controller right beside it. I wired in heavy inline fuses directly off the battery positive terminal, then added a 12V accessory panel with barrel plugs, a digital voltage gauge, and USB-A and USB-C PD ports. The whole box drops right behind the front seats and lifts out whenever I need the floor space.

### Wiring Diagram

Here is the wiring layout for the entire setup. All component grounds tie into a single negative bus bar. On the positive side, each branch gets fused directly off the main battery lead: a 50A fuse for the MPPT controller, a 150A fuse for the inverter, and a 10A fuse feeding the 12V barrel plug and accessory ports.

![](/images/projects/honda-element-solar-setup-wiring-diagram.png)

## Real-World Performance

The system ran cleanly through Washington and Oregon. The 12V fridge ran non-stop for the entire three weeks. We charged two phones and a laptop every single night. 

Even with just a single 100W panel on the roof and plenty of PNW overcast, the setup stayed self-sustaining. The panel pulled in just enough current during daytime drives to replenish what the fridge pulled overnight. We never once had to plug into shore power or idle the Element to top off the cells.

## Future Improvements

The build got the job done, but there is plenty of room for polish:

* **Teardown roast:** I want to post the detailed wiring layout to diysolarforum so the community can critique my fusing and wire routing.
* **Cell monitoring:** I want per-cell voltage logging so I can watch exactly when the weak cells diverge under load.
* **DC-DC charging:** Adding an alternator-fed DC-to-DC charger would give guaranteed charging on rainy days when parked under tree cover.

## Upgrades

Since getting back, I replaced the single 100W panel with a 300W residential panel mounted flat to the roof. The jump from 100W to 300W is night and day. The pack now hits full float charge by midday even under cloudy skies.

![](/images/projects/honda-element-solar-setup-residential-panel.jpg)
