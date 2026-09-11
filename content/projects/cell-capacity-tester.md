---
title: "Cell Capacity Tester Review"
thumbnail: "/images/projects/cell-capacity-tester-001.png"
category: "ebike"
categoryLabel: "E-Bikes & Batteries"
status: "complete"
tags: ["battery building", "testing", "21700 cells", "18650", "aliexpress", "internal resistance", "capacity tester"]
blurb: "Finding a proper 8-slot cell capacity tester that actually discharges all slots at 1A simultaneously. Here is a review and guide on modifying and using this generic 8-channel tester from AliExpress."
weight: 2
date: 2025-08-01
---

When harvesting lithium-ion cells from old e-bike packs, you need a reliable way to test capacity and internal resistance. Most 8-slot capacity testers on Amazon have a major flaw: if you load all eight slots, they throttle the charge and discharge rates down to 0.5A, which takes forever when you have hundreds of cells. 

After several failed attempts with Amazon models, I turned to AliExpress and found exactly what I needed: a generic **8-Channel 21700 18650 Lithium Battery Auto Charge/Discharge Tester**. 

### The 8-Channel Tester

This tester handles 18650 and 21700 cells, tests internal resistance (using the DC two-wire method), features active heat dissipation, and most importantly, it can load test all eight cells simultaneously at a full 1A. It costs around $60 if you include the required 5V 10A barrel jack power supply. Note: Do not skimp on the power supply. A cheap one will shut off when load testing eight low-voltage cells at once. 

![](/images/projects/cell-capacity-tester-html-image5.png)

It feels more like an engineering sample than a mass-market product. The back cover has no sides, and the top has exposed contacts and ribbon cables. 

### Modifying for 21700 Cells

Out of the box, it doesn't have an easy way to mount 21700 cell trays. I designed and 3D-printed custom sleeves that slide directly over the stock 18650 trays. I then used VHB tape to attach 21700 trays to the top of the sleeves, wiring them in with XT30 connectors and solid core wire. I also 3D-printed some triangle wedges and VHB’ed them to the back to prop the unit up at a 45-degree viewing angle. 


<iframe src="https://www.printables.com/embed/1304973" width="640" height="640" scrolling="no" frameborder="0"></iframe>


### How to Use the Tester

The best feature of this tester is its smart automatic charging/discharging mode. When you capacity test a cell, it doesn't leave it fully charged; it automatically drains it back down to your set storage voltage.

**Controls & Interface:**
* **Power:** There is no on/off switch; plugging it in turns it on.
* **Views:** The **M button** toggles between the 8-cell overview and the single-cell detailed view.
![](/images/projects/cell-capacity-tester-html-image3.png)![](/images/projects/cell-capacity-tester-html-image4.png)

**Menu & Settings:**
* Long-press the **M button** to open the menu for Channel 1. You can set CHN1 to sync its parameters with all other channels, so you only configure it once.
![](/images/projects/cell-capacity-tester-html-image1.png)
* **Mode:** Set to `AUTO` for full cycle capacity testing, `DSG` for discharging only, `CHG` for charging only, or `ACTI` for forced activation charging.
* **Voltages:** `VOLT1` is your max charge voltage (adjustable between 3.7V - 4.2V). `VOLT2` is your finishing/storage voltage. You can also set a stop voltage (the lowest you want to discharge) and idle time (the rest period between cycles).

**Running a Test:**
1. Load your cells.
2. Use the **CHN button** to select a specific slot, then press **R/S (Run/Stop)** to start or stop that single test. 
3. If you have all eight slots loaded, press and hold **R/S** to start all eight slots simultaneously. 

The display will show the real-time voltage, amp draw, capacity (mAh), and total test time for every cell. 

### Conclusion
If you're processing large batches of salvaged cells, skip the throttled Amazon options and grab one of these generic 8-channel testers from AliExpress. Once you mount some custom 21700 trays and pair it with a solid 10A power supply, it becomes an absolute workhorse. It's a much better deal for a highly capable piece of testing equipment compared to anything else on the market.
