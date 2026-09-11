---
title: "Laptop Server"
category: "homelab"
categoryLabel: "Home Lab"
status: "ongoing"
tags: ["TrueNAS Scale", "FreeCAD", "laser cutting", "NAS", "hard drives"]
blurb: "About my server setup: it is a laptop with a couple of harddrives plugged into the usb port it’s good enough but is running out of storage."
weight: 1
---

About my server setup: it is a laptop with a couple of harddrives plugged into the usb port it’s good enough but is running out of storage, I need to add a drive or two, but the usb drive thingy that I have can only hold two drives. I am thinking about maybe a m.2 to sata thing idk I need to figure out how to add more drive and how to make the unit more unified because as it stands its just a laptop plugged into drives. I would be nice to have the whole thing in a case or something (3d printing??).

Current setup:

![](/images/projects/laptop-nas-build-html-image5.png)![](/images/projects/laptop-nas-build-html-image6.png)![](/images/projects/laptop-nas-build-html-image7.png)

M.2 to sata adapter + power supply for more drives: (check compatibility with setup aka zfs raid and truenas scale and this specific m.2 port)

[https://www.amazon.com/s?k=m.2+to+sata&i=electronics&crid=3NELBZ0CLTHUJ&sprefix=m.2+to+sata%2Celectronics%2C167](https://www.google.com/url?q=https://www.amazon.com/s?k%3Dm.2%2Bto%2Bsata%26i%3Delectronics%26crid%3D3NELBZ0CLTHUJ%26sprefix%3Dm.2%2Bto%2Bsata%252Celectronics%252C167&sa=D&source=editors&ust=1788550472095458&usg=AOvVaw0fBopXvxRgWTz9ZCOrqffg)

[https://www.newegg.com/p/pl?d=m.2+to+sata+adapter](https://www.google.com/url?q=https://www.newegg.com/p/pl?d%3Dm.2%2Bto%2Bsata%2Badapter&sa=D&source=editors&ust=1788550472095729&usg=AOvVaw1u0AHRdGM54wMuB4F1eusw)

[https://linustechtips.com/topic/1616173-nas-storage-upgrade-help-m2-to-sata-adatper/#comment-16755459](https://www.google.com/url?q=https://linustechtips.com/topic/1616173-nas-storage-upgrade-help-m2-to-sata-adatper/%23comment-16755459&sa=D&source=editors&ust=1788550472096007&usg=AOvVaw33bXmpm-G6ZDUOw08SWCqm)

I started designing the case a bit in freeCAD

![](/images/projects/laptop-nas-build-html-image8.png)![](/images/projects/laptop-nas-build-html-image3.png)

Its pretty rough right now, but a good start non the less. I got the harddrive cages off of printables, which also have a tray for each hard drive, and each cage holds two hard drives. I am trying to practice compositing different models into one thing. I also found models for some noctua fans, the buck converters, and the power plug.

Noctua fans: 92x92x25 mm, [https://a.co/d/i1cUoC0](https://www.google.com/url?q=https://a.co/d/i1cUoC0&sa=D&source=editors&ust=1788550472096620&usg=AOvVaw3ThpwG4YhDZOcJT3Au0ZVQ)

Hard Drive Cages: [https://www.printables.com/model/788261-35-hdd-cage-caddy-for-anti-vibration-screws](https://www.google.com/url?q=https://www.printables.com/model/788261-35-hdd-cage-caddy-for-anti-vibration-screws&sa=D&source=editors&ust=1788550472096862&usg=AOvVaw3GLtqPykIgyGrOTMDKBYPq)

10/24/2025

Going to laser cut the case now so all the face of the box will need to be separate and interlocking. I think there is an extension for FreeCAD that makes the interlocking part easy see forum post.

[https://forum.freecad.org/viewtopic.php?t=99394](https://www.google.com/url?q=https://forum.freecad.org/viewtopic.php?t%3D99394&sa=D&source=editors&ust=1788550472097392&usg=AOvVaw2pMtI1dwcaBCYqYanx1O7L)

Probably just going to start from scratch sense I’m a bit better at FreeCAD now and this model is not very complicated. The complicated part will be designing for laser cutting since I don’t know how to do that yet.

10/28/2025

Did the check-in for the laser cutter, so now I just need to redesign the case for laser cutting. With that in mind I was thinking about ways to attach the hard drive cages to the case and it seems that headset inserts and acrylic are not incompatible.

[https://newscrewdriver.com/2017/06/25/testing-heat-set-inserts-in-acrylic/](https://www.google.com/url?q=https://newscrewdriver.com/2017/06/25/testing-heat-set-inserts-in-acrylic/&sa=D&source=editors&ust=1788550472098266&usg=AOvVaw2Vqv5bteNiHz44N0dLjxn6)

I will design with this in mind. Although I don’t think that headset inserts will be necessary for the fans.

11/02/2025

Might do this instead for harddrives

[https://www.printables.com/model/1372686-3u-hard-drive-bay-for-8x-35in-hdds-for-10-mini-rac](https://www.google.com/url?q=https://www.printables.com/model/1372686-3u-hard-drive-bay-for-8x-35in-hdds-for-10-mini-rac&sa=D&source=editors&ust=1788550472098806&usg=AOvVaw1fwgTwbeBwCl0PJlcqf7iv)

11/13/2025

[https://www.truenas.com/community/threads/prevent-suspend-mode-when-installed-on-a-laptop.94729/](https://www.google.com/url?q=https://www.truenas.com/community/threads/prevent-suspend-mode-when-installed-on-a-laptop.94729/&sa=D&source=editors&ust=1788550472099131&usg=AOvVaw1RxnfvO7oiWS5ShdLK6Z44)

For disabling suspend which seems to be possible so I will make a shelf that can be removed then you can flip the screen up. Here is the current crude design. I have to redo the box.

![](/images/projects/laptop-nas-build-html-image4.png)

11/19/2025

![](/images/projects/laptop-nas-build-html-image1.png)

See for piece of acrylic that will fit all required sheets

[https://www.eplastics.com/ACRY20370-187PM24X96](https://www.google.com/url?q=https://www.eplastics.com/ACRY20370-187PM24X96&sa=D&source=editors&ust=1788550472099758&usg=AOvVaw07gpiKsok5r8sV3vnaTvaE)

Maybe I will make it out of wood instead.

For svg output in freecad switch to draft workbench press the box button with a part selected and it will be projected as a drawing then export that drawing as an svg

![](/images/projects/laptop-nas-build-html-image2.png)

The plan is to use led power supplies along with two buck converters to get the necessary voltages for the hard drives. They will probably need to share a ground so I will have to figure that out.
