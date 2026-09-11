---
title: "ReCycle Banks: Business Plan & Project Log"
thumbnail: "/images/projects/recycle-banks-business-plan-html-image7.png"
category: "ebike"
categoryLabel: "E-Bikes & Batteries"
status: "on-hold"
tags: ["battery bank", "business plan", "recycling", "21700 cells", "3D printing", "load testing", "cell recovery"]
blurb: "A comprehensive business plan and project log for building portable, high-capacity battery banks from salvaged e-bike cells. Covers cell harvesting, terminal cleaning, 3D printed case designs, and USB-C PD load testing."
weight: 2
featured: true
featuredWeight: 3
---

# ReCycle Banks: Business Plan & Project Log

**Mission Statement:** Remove a small amount of unnecessary waste from the world by creating portable battery banks out of discarded ebike batteries.

---

## The Business Plan

### Product Options
We are starting with two portable battery bank options built using high-quality cells from electric bike batteries that would have otherwise been recycled. Because of their previous application, these cells offer high capacity and high power output.

**Simple Model**
* Target Application: Charging smaller devices (phones, tablets). Mimics [this model](https://www.google.com/url?q=https://a.co/d/dASeWxm&sa=D).
* Specs: 5V/3A, 10,000mAh
![](/images/projects/recycle-banks-business-plan-html-image3.png)

**Advanced Model**
* Target Application: Charging multiple devices, including laptops. Mimics [this model](https://www.google.com/url?q=https://a.co/d/aOOodI8&sa=D).
* Specs: up to 100W output, 65W charging input, 20,000mAh
![](/images/projects/recycle-banks-business-plan-html-image16.png)

### Sourcing & Construction
Partnerships will be formed with local electric bike shops to acquire batteries that would otherwise go to recycling. These packs are disassembled and broken down into individual cells. Each cell is tested for capacity, current, and internal resistance. Failing cells are properly recycled, while passing cells are built into battery banks.

The necessary circuitry (BMS, charging ICs, power delivery ports) is sourced from AliExpress. The cases will be 3D printed using PETG (made from recycled water bottles), ensuring the final product aligns with our sustainability goals.

* **Components:** 3D printed case, AliExpress input/output/BMS board.
* **Assembly:** We are exploring pre-made DIY options that rely on spring contacts rather than spot welding. This approach aligns with the vision of the company: a less wasteful product where users can easily replace degraded cells.

### Economics & Marketing

**Cost Breakdown:**
* Cells: Basically free
* Case: ~$2
* BMS: Advanced ~$7, Basic ~$2
* Shipping: Buyer pays $10-$50 (depending on distance/speed)
* Total Build Cost: $14 - $54

**Pricing & Sales:**
* Simple: ~$60 (excluding shipping)
* Advanced: ~$160 (excluding shipping)
* Platforms: eBay, Facebook Marketplace, Shopify, or a custom self-made site.

**Marketing & Legal:**
* **Brand Names:** ReCycle Banks, Cycle Cell, Power Cycle, ReVolt.
* **Pitch:** "The battery banks you’d buy on Amazon with all the great features, except you’re saving cells from being recycled—and they came from a bike, which is pretty cool."
* **Strategy:** Cool YouTube videos (e.g., "How we test cells", "Cheap spot welder review") and a Hugo landing page linking to purchasing options.
* **Legal:** Business license, product liability insurance, general liability insurance.

---

## Harvesting & Cell Cleaning

![](/images/projects/cell-cleaning-html-image3.jpg)
![](/images/projects/cell-cleaning-html-image2.jpg)
![](/images/projects/cell-cleaning-html-image4.jpg)

When harvesting lithium-ion cells that were originally spot-welded together, pieces of the nickel strip are left on the positive and negative terminals. Most removal methods are suboptimal: grinding with a Dremel invites rust, and pulling with pliers always leaves a burr.

If you plan to spot-weld the cells again, a small burr is acceptable. However, because our battery bank design relies on spring contacts (like a TV remote), the terminals must be perfectly flat. If the spring doesn't have sufficient surface area contact with the terminal, resistance builds up rapidly. Under high current loads, this resistance generates dangerous heat and poses a severe fire risk. (See [this helpful forum post](https://www.google.com/url?q=https://www.electro-tech-online.com/threads/spring-pressure-connection.162396/&sa=D) for current calculations on spring contacts).

**The Solution:**
To clean the cells safely and perfectly flush, we use a chisel on a custom lever press.

* **Main Inspiration:** 
  * ![](/images/projects/cell-cleaning-html-image1.png) [<br> How To Make Tool Spot Weld Removal For Cells Battery 18650](https://www.google.com/url?q=https://www.youtube.com/watch?v%3DPZHpmZGRgdE&sa=D)
* **Similar Projects:**
  * [Build A Tool Spot Weld Removal...](https://www.google.com/url?q=https://www.youtube.com/watch?v%3DsaKO6Wvg95U&sa=D)
  * [Build a Spot Weld Removal Machine...](https://www.google.com/url?q=https://www.youtube.com/watch?v%3DNHZZHgvDMf0&sa=D)

---

## Bank Design & Prototyping

### Connection Methods
We initially considered spot welding because it creates a strong, robust electrical connection and looks like a finished product. However, it requires significant labor and makes the packs extremely difficult to repair. 

We pivoted entirely to **spring contacts**. While they require more involved case design and can wear out over time, they are drastically easier to assemble and repair. This aligns perfectly with our vision of a sustainable, repairable product. 
* ![](/images/projects/recycle-banks-business-plan-html-image2.png) Contact Plates Types
* ![](/images/projects/recycle-banks-business-plan-html-image13.png) Spring and Plate Types
* ![](/images/projects/recycle-banks-business-plan-html-image6.png)

A promising approach is using custom printed PCBs with solder pads for the contact plates, then using screws to press-fit the cells together (similar to the Gouach battery design). At this point, we are fully focused on the high-end 8-cell (65W) removable cell case.

---

## Testing & Load Verification

### Cell Testing
We follow testing guidelines similar to [Gouach's knowledge base](https://www.google.com/url?q=https://docs.gouach.com/knowledge-base/how-to-test-cells&sa=D).
* **Capacity Test:** Using an 8-cell load tester.
* **Internal Resistance (IR):** Measured using an IR meter.
* **Voltage Check:** Fully charged cells should rest near 4.2V.

### Battery Bank Load Testing
To verify the output of our assembled PD battery banks, we use an Atorch load tester paired with an FNB58 USB tester. 
* [Reddit Guide: Load testing at 5V+ with FNB58](https://www.google.com/url?q=https://www.reddit.com/r/UsbCHardware/...)
* [Video Guide](https://www.google.com/url?q=https://youtu.be/dD9JUKpBsfI?si%3DM0l3jhO3L8f6dRXQ&sa=D)

The process is straightforward: use the FNB58's PD trigger function to request the highest possible voltage from the bank, then dial up the Atorch load tester to pull the maximum rated amps. This allows us to verify thermal performance and protocol support.

---

## Prototype Log

*Credit:* The 3D case models for Garden V1, Garden V1.1, and Forest V1, as well as the base model remixed for Garden V1.2, were created by [tearandfix on Printables](https://www.printables.com/@tearandfix_1672872/).

### Garden V1
![](/images/projects/recycle-banks-business-plan-html-image7.png)
* **Parts:** 8x Samsung 21700-50E cells, [100W charge/discharge board](https://www.google.com/url?q=https://www.aliexpress.us/...)
* **Configuration:** 4s2p
* **Ports:** 2x USB-A, 1x USB-C, 1x Lightning, 1x Micro USB, 1x barrel jack
* **Construction:** [3D Model](https://www.google.com/url?q=https://www.printables.com/...), Red PETG.
* **Notes:** The case was difficult to assemble because the balance wires were placed incorrectly. 

### Garden V1.1
![](/images/projects/recycle-banks-business-plan-html-image1.png)
* **Testing Update (04/20/2025):** After heavy use, capacity remains excellent. ![](/images/projects/recycle-banks-business-plan-html-image15.jpg)
* **Notes:** Corrected the balance wire placement, but the case still bulges at the seams. To fix this in future designs, we need four screws at each corner and two in the middle. We are abandoning this specific PCB—the ports aren't ideal, it struggles to charge multiple devices simultaneously over PD, and the screen has a film that is impossible to remove.

### Forest V1
![](/images/projects/recycle-banks-business-plan-html-image12.png)
* **Parts:** 5x Samsung 21700-50E cells (5s1p), 100W board.
* **Notes:** Assembling the case was a massive pain; internal cell supports had to be broken off to make room for wiring. My friend Akeal now uses this as his personal battery. ![](/images/projects/recycle-banks-business-plan-html-image9.png)

### Garden V1.2
![](/images/projects/recycle-banks-business-plan-html-image11.png)
* **Parts:** 8x Samsung 21700-50E cells (4s2p), [100W board (4s variant)](https://www.google.com/url?q=https://www.aliexpress.us/...).
![](/images/projects/recycle-banks-business-plan-html-image5.png)
* **Construction:** Remixed model using six plastic screws and Black PETG.
* **Notes:** Tested at 50W discharge. ![](/images/projects/recycle-banks-business-plan-html-image10.png) The button functionality is confusing, and the display glitches wildly if the button is held down (though it continues charging). While the screws prevent bulging better than V1.1, the front seam still isn't perfect. We are currently exploring spot-welding nickel strips directly to the PCB to eliminate bulky wiring entirely.

## Conclusion
I've decided to shelve this project for now. To properly fulfill the mission statement, I would need to build a battery bank with fully replaceable cells, and I don't have the skills or know-how to pull that off just yet. I plan to revisit the idea after getting a few more projects under my belt. PEV batteries aren't going anywhere, so there will only be more cells to repurpose as the years go on.

I have since gone on to make a few more of the Garden V1.2 style battery banks for myself and friends. I improved the design by soldering nickel strips directly to the PCB and spot-welding the cells to them. This eliminates the bulky wiring and makes the case much easier to assemble.