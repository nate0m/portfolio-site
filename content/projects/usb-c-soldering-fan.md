---
title: "USB-C Soldering Fume Fan"
category: "fab"
categoryLabel: "Fabrication & 3D Printing"
status: "complete"
tags: ["Noctua 120mm", "USB-C PD", "AutoCAD", "Printables", "3D printing"]
blurb: "A 120mm Noctua fume-extraction fan for the soldering bench, powered off the same USB-C PD power bank that runs the iron. Went through several prototypes chasing a reliable PD trigger board before publishing it on Printables. Then ran into a new problem: the power bank can't do PD on two ports at once."
weight: 2
---

## Introduction

I needed a small fan to exhaust soldering fumes, and I found a couple of designs on Printables that inspired me. Originally, I planned to spot-weld a custom 3S 18650 battery pack to fit inside the case. But the plan changed. I realized I already keep a large USB-C PD power bank on my bench to run my soldering iron, so I decided to ditch the internal battery entirely and run the fan off USB-C PD. This simplifies the design and means I only have to charge one battery.

![](/images/projects/usb-c-soldering-fan-html-image7.png)

## Parts List

Here is everything you need to build the [Finished Model](https://www.printables.com/model/1331050-simple-soldering-fan-120mm-usb-c-powered) ([Original Inspiration](https://www.printables.com/@nathanmilton_2933646/collections/2435517)).

* **PWM Controller:** DC 1.8V to 15V 2A regulator module.
* **USB-C PD Power Supply:** PD trigger board set to 12V output.
* **Fan:** Noctua 120mm 3000rpm fan.
* **Filter:** Activated carbon solder extractor replacement filter.
* **Hardware:** 
  * M3 x 4 x 5mm threaded inserts
  * 1/4-20" x 6 x 8mm threaded insert (for tripods)
  * M3 x 6mm bolts
  * Standard PC fan screws

## Inspiration

![](/images/projects/usb-c-soldering-fan-html-image4.png)
![](/images/projects/usb-c-soldering-fan-html-image9.png)

## Design and Prototyping

I laid everything out on the bench and got to designing. 

![](/images/projects/usb-c-soldering-fan-html-image8.png)

The first prototype wasn't hard to model in principle, but I only know AutoCAD. If you know anything about 3D CAD programs, you know AutoCAD isn't really one. It can make 3D designs, but making changes after the fact is painful. The first draft got me 80% there, and then I spent another day polishing. I added spots for threaded inserts to attach the back cover, increased the USB-C port hole for thicker cables, added fan mounting holes, and adjusted the notch for the PWM dial.

![](/images/projects/usb-c-soldering-fan-html-image1.png)

I ended up doing a lot of extra prototyping to make something I felt comfortable uploading to Printables. For example, my first USB-C power supply randomly cut out, so I switched to a different trigger board which fixed the issue. I also made the fan compartment slightly larger to accommodate almost any 120mm fan, including Noctua fans with the rubber vibration corners still attached. Finally, I added a 1/4-20" threaded insert on the side so you can mount the fan on a tripod.

## Final Assembly

The pictures of the finished product here are actually an early prototype. It uses a friction fit for the fan, and I had to melt the USB-C port hole larger with my soldering iron. The final version on Printables fixes all these issues and uses actual fan screws so nothing rattles. I hot-glued all the internal electronics down to keep them secure. 

![](/images/projects/usb-c-soldering-fan-html-image6.png)
![](/images/projects/usb-c-soldering-fan-html-image3.png)
![](/images/projects/usb-c-soldering-fan-html-image5.png)
![](/images/projects/usb-c-soldering-fan-html-image2.png)

## The Power Bank Problem

After wrapping up the build, I hit a snag with my specific power bank. It cannot output PD (Power Delivery) on multiple ports simultaneously. If I plug the fan into the second port, the entire bank drops to 5V. That ruins the setup because the soldering iron needs PD to get enough wattage to stay hot. Even if I used a non-PD 5V supply for the fan, it would still disable PD for the iron.

I think the simplest solution going forward is to bite the bullet and add a single 21700 cell inside the fan case that charges via USB-C. I'll just need to wire it to a [boost converter](https://en.wikipedia.org/wiki/Boost_converter) to step the single cell voltage up to the 12V needed for the fan.
