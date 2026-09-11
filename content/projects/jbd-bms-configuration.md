---
title: "JBD BMS Configuration Guide"
category: "ebike"
categoryLabel: "E-Bikes & Batteries"
status: "complete"
tags: ["BMS", "battery building", "JBD", "wiring"]
blurb: "JBD smart BMS configuration can be confusing due to translation issues in their app. This is a quick reference guide on wiring the balance leads and correcting the default LiFePO4 chemistry settings to charge Li-ion cells fully."
weight: 3
---

## Introduction

JBD BMS boards are popular, inexpensive battery management systems sold directly on Jiabaida’s website but more commonly bought on AliExpress. This is my first experience with a JBD BMS, and this is also my first fully custom battery build. I found that the JBD app used to set battery parameters is slightly unintuitive and confusing, largely due to language barriers. That is why I made this guide.

My battery build is 20s, so I went with the Jiabaida SP22S003B. This model can accommodate up to 22s and has different wiring configurations depending on your string count. You can find the [official wiring diagrams here](https://jiabaida-bms.com/blogs/content/jiabaida-sp22s003b-smart-bms-wiring-diagram?spm=a2g0o.detail.1000023.4.6d1330b03TSyat).

## Wiring the BMS

### Balance Leads

Follow the wiring diagrams for the balance cables. If you are not populating all 22 possible balance wires, the logic boils down to this: pins 21 and 22 stay individual, while you bridge pins 20 down to 4 depending on how many cells you are putting in series.

![](/images/projects/jbd-bms-configuration-html-image4.png)

### Main Power Connections

* **B-** goes to the main negative of your battery.
* Your negative charging and discharge cables go to **C-**.
* Your positive charging and discharging cables go directly to the main positive of the battery.

## Configuring the Mobile App

The mobile app has a lot of pages. If you just want a quick reference, here are [all the settings that I used for Li-ion for this BMS](https://drive.google.com/drive/folders/1IQBeaJMPuecLqtSrkNLzn51EbKFfOwRp?usp=drive_link). 

Below are the specific settings I actually had to change to get my battery working right.

### Fixing the Chemistry Setting

![](/images/projects/jbd-bms-configuration-html-image1.png)

If you buy this BMS for Li-ion cells and have trouble with the cells only charging to 3.6V, you need to go to the **Protection Param** settings page. At the top right there is a button to switch between LFP and NPM chemistry. You want it set to LFP, meaning the button itself should say NPM to let you switch back. 

Even if you already see NPM on the button and your cells are still not charging above 3.6V, press the button once to switch it, then press it again to switch it back to LFP. That forced update fixed the charging limit for me.

### Basic Pack Parameters (Origin Settings)

![](/images/projects/jbd-bms-configuration-html-image3.png)

* **Nominal capacity:** The actual capacity of your battery.
* **Cycle capacity:** Usually autofills.
* **Full charge capacity:** Usually autofills.
* **Cell num:** Usually autofills based on your wiring.

### Protection Parameters

Obviously set the correct chemistry first, then review these limits.

![](/images/projects/jbd-bms-configuration-html-image5.png)
![](/images/projects/jbd-bms-configuration-html-image2.png)

* **CellHighVoltProtect:** Set a little above the max voltage of a single cell.
* **CellHighVoltRecover:** Set a little below the max voltage of a single cell.
* **CellHighVoltDelay:** Leave as default.
* **CellLowVoltProtect:** The absolute lowest you want a cell's voltage to go.
* **CellLowVoltRecover:** A little above your CellLowVoltProtect value.
* **CellLowVoltDelay:** Leave as default.
* **TotalVoltHighProtect:** A little above the maximum total voltage of your battery.
* **TotalVoltHighRecover:** A little below the maximum total voltage of your battery.
* **TotalVoltHighDelay:** Leave as default.
* **TotalVoltLowProtect:** A little below the minimum total voltage of your battery.
* **TotalVoltLowRecover:** A little above the minimum total voltage of your battery.
* **TotalVoltLowDelay:** Leave as default.
* **HwCellHighVoltProtect:** Looks like the hardcoded hardware max voltage of a cell.
* **HwCellLowVoltProtect:** Looks like the hardcoded hardware low voltage of a cell.

### Capacity Voltage 

These are self-explanatory threshold values for the state of charge estimation.

![](/images/projects/jbd-bms-configuration-html-image6.png)

### Fixing the Discharge Lock

I also had an issue where I could not activate the discharge port from the app. I ended up going into the **Function Settings** and disabling the switch settings entirely, which automatically activated both the discharge and charge functionality without needing the app toggle.
