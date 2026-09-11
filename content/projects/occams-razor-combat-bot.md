---
title: "\"Occam's Razor\"  1lb Combat Bot"
category: "robotics"
categoryLabel: "Robotics"
status: "complete"
tags: ["antweight", "brushless", "2S lipo", "FreeCAD", "combat robotics"]
blurb: "An antweight combat bot built around a 1000KV brushless motor, N20 gear motors, Lego tires, and a Malenki Nano brain on a 2S lipo. Currently about 70g over the 450g weight limit. Won the UCSC winter inner-group competition, mostly because every other bot KO'd itself."
weight: 1
---

## Introduction

Building a 1lb (450g) antweight combat bot. I started with a base lifter model I found on Printables to get some inspiration, but the design quickly evolved from there.

![](/images/projects/occams-razor-combat-bot-html-image6.png)
*[Base model inspiration from Printables](https://www.printables.com/model/1429733-ale-antweight-lifter-entrylevel)*

## Component Selection

The hardest part of antweights is hitting the strict 450g weight limit, so every component choice matters.

**Brain: Malenki Nano**
![](/images/projects/occams-razor-combat-bot-html-image8.png)

**Drive Motors: 1100KV Brushless Motors**
I decided to go with a brushless motor because it's just more fun. 

![](/images/projects/occams-razor-combat-bot-html-image11.png)

The listing says 90g, but a different listing for the exact same model says 48g. I'm just going to have to make it work. I might need to gear it down to reduce the RPM, but I'll figure that out later.

![](/images/projects/occams-razor-combat-bot-html-image1.png)

**Tires: Lego Wheels (49.5mm x 20mm)**
![](/images/projects/occams-razor-combat-bot-html-image3.png)

**Battery: 2S Lipo**
A standard 7.4V 80C 450mAh pack.

## Build Log & Design Notes

I debated removing the floor plate entirely because I was worried it might scrape the ground and cause driving complications. I decided to leave it in. It shouldn't be too much extra work to add proper mounts for the motor, battery, ESC, and brain. 

My biggest worry was figuring out how to mount the wheels, and hoping I wouldn't have to gear down the 1000KV weapon motor too much.

I designed a custom rim in FreeCAD to adapt the Lego wheels to the 5mm motor shaft. I set up the CAD file so it's easy to change the shaft hole diameter if I end up needing a different size later.

<iframe src="https://www.printables.com/embed/1450555" width="640" height="640" scrolling="no" frameborder="0"></iframe>

![](/images/projects/occams-razor-combat-bot-html-image5.png)
![](/images/projects/occams-razor-combat-bot-html-image4.png)

I also added the motor mounts. The whole chassis prints to 216g at 20% infill, and 262g at 30% infill. 

![](/images/projects/occams-razor-combat-bot-html-image2.png)

After a few test fits, I updated the design to be stronger along the vertical axis and separated the electronics from the motor wells. But based on my rough calculations, I am sitting about 70g over the weight limit. 

I'm going to have to lose some weight. I'm thinking about shrinking the chassis length from 250mm down to 220mm. That cuts weight and also means I can print prototypes right at home on my Neptune 4, though I can always just print it on the X1 at Slug Works if needed.

![](/images/projects/occams-razor-combat-bot-html-image10.png)

I finally settled on a name: **Occam's Razor**.

## Competition Results

Occam's Razor went on to win the winter UCSC combat robotics inner group competition. I'd love to say it was purely engineering brilliance, but honestly it was mostly because all the other bots KO'd themselves. A win is a win.
