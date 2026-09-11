---
title: "Honda Element Solar & Camper Setup"
category: "vehicle"
categoryLabel: "Vehicles"
status: "complete"
tags: ["solar", "MPPT", "1500W inverter", "DIY battery", "Honda Element"]
blurb: "Repurposed a dilapidated van solar setup into a plywood-boxed power station for a Honda Element, built in three days for a three-week Pacific Northwest road trip. 100W panel, MPPT controller, 1500W inverter, and a 4-cell DIY lithium pack. Kept a 12V fridge running the whole way."
weight: 1
---

I need a way to mount the solar panels onto the roof

Inspirations [https://el.life/honda-element-camper/](https://www.google.com/url?q=https://el.life/honda-element-camper/&sa=D&source=editors&ust=1788550421076534&usg=AOvVaw2tJkE2OiJ_YB6xn3HMlGUZ)

Rack [https://a.co/d/8GLpYcN](https://www.google.com/url?q=https://a.co/d/8GLpYcN&sa=D&source=editors&ust=1788550421076732&usg=AOvVaw3qmCglJWSx5V05Lz8PlUKM)

So I have this ‘solar setup’ from when I had a van and it is in this dilapidated state. Show state of solar setup. I want to set this up to use on my honda element.

This is what I have

* List of parts
* Battery
* Panels
* Inverter

Consolidation of battery and parts information.

Battery:

![](/images/projects/honda-element-solar-setup-html-image6.png)

4s min voltage: 10v

4s nominal voltage: 12.8v

4s max/charge voltage: 14.6

Rated capacity: 280ah

![](/images/projects/honda-element-solar-setup-html-image2.png)

BMS:

![](/images/projects/honda-element-solar-setup-html-image8.png)

![](/images/projects/honda-element-solar-setup-html-image4.png)

Charge Controller:

Compatible voltages: 12v, 24v

Max  charging amperage: 40amp

See [datasheet](https://www.google.com/url?q=https://drive.google.com/file/d/1g6imWmjJop1SdYVB9JajS1hJ5JC9G8RP/view?usp%3Ddrive_link&sa=D&source=editors&ust=1788550421078461&usg=AOvVaw29a0GdWxCYAPSp-7A1otrm) & [manual](https://www.google.com/url?q=https://drive.google.com/file/d/1DaqeB_3EXXUkYRH0dtFPTh-tdEfZE0hm/view?usp%3Ddrive_link&sa=D&source=editors&ust=1788550421078608&usg=AOvVaw0Z1Kszz5hyo7N2XFbqBVZ4)

Inverter:

Input: 12.5v, 141amps

Output: 115v AC, 60Hz, 13amp, 1500w

See [manual](https://www.google.com/url?q=https://drive.google.com/file/d/1twf5DZJQVlRMTw0F8a4hDzSwxLWTpSSR/view?usp%3Ddrive_link&sa=D&source=editors&ust=1788550421078989&usg=AOvVaw0FwNBa10qBWx7ZJ4pnEB2p)

The end product that I want is a clean wooden box that has the battery housed in it. The charge controller and the inverter mounted on the back along with 12v barrel plugs and some usb a and c pd port.

The first thing I need to do is check the current health of the battery. I need to balance the battery and load test it.

I need a solid wiring plan.

Then I need to construct the box and secure the battery inside of it.

Load testing results:

![](/images/projects/honda-element-solar-setup-html-image3.jpg)

The battery pulled less than 50% of it's capacity which is not great but I think that since I started the load test at only 13.4v and pulled more the 100ah it will be enough capacity for me.

The main issue is that two of the cells are a fair bit weaker than the other two which contributed to the lower capacity. The BMS helps to balance them as they charge but during discharge they fall out of balance. It would be cool to get a measure of all the different cell voltages during the load test to see when and how they come out of balance.

One of the 100w panels seems to be dead so I will have to buy another one.

Need to figure out how to make a wooden box

Could use this [https://www.printables.com/model/181097-corner-brackets-for-system20-2020-2040-extrusion](https://www.google.com/url?q=https://www.printables.com/model/181097-corner-brackets-for-system20-2020-2040-extrusion&sa=D&source=editors&ust=1788550421081544&usg=AOvVaw0wP7XmXNl7MBKtCaHelF0C)

Or just get something from homedepot / lowes…

Look into getting DC to DC charger for battery

Maybe 2x cheap 12v batteries in series, the fridge supports it and maybe the invertor too? The charge controller does as well.

Maybe upgrades would be the panel and battery.

Honda Element Solar Setup Finished Product

## Intro

I just recently got home from a 3 week road trip along the coast of the pacific north west. The details of the trip are not important to this post. This post will be about documenting my last minute solar setup that was put together using the parts from my old van solar setup of the course of 3 days with some help from my cousin. By the end of this post we should have a good idea of the parts I used, how it worked, and what could be improved.

## Parts Used

The parts that are used are mostly off the shelf solar products from around 4 years ago that I bought online though amazon or aliexpress or with the solar panels facebook marketplace. Honestly it’s all pretty standard stuff, but if you are new I will provide a brief explanation of the purpose of each part of the system.

* 100w renogy solar panel (would have been two, but the other one did not work)

* The solar panel takes energy from the suns rays and turns it into a voltage that we can harness

* 1500w inverter

* The inverter takes the dc power from the battery and turns it into ac power like you have at home

* Mppt charge controller

* Takes the voltage from the solar panel and changes it to a more constant voltage that better charges the battery

* Battery lithium ion

* Stores energy
* This is the only part that is kind of special sense instead of being an off the shelf battery it’s a diy batter where I bought 4 raw cells and put them in series to get the desired 12 volts and hooked up a bms to it

* Mics , dc power jack, voltage display, fuses

All put together in a crudely constructed wooden box.

![](/images/projects/honda-element-solar-setup-html-image1.png)![](/images/projects/honda-element-solar-setup-html-image7.png)![](/images/projects/honda-element-solar-setup-html-image5.png)

Picture of wiring diagram here

## How it Worked

In order to talk about how the solar setup worked we have to talk about the purpose of having a solar setup for this trip. It’s simple. I needed to power a fridge, and charge my phone and laptop, but every use is second to powering the 12 volt fridge. In that regard the setup worked great; it was self-sustaining that is to say that it generated more energy than it used.

## Do Better Next Time

Make a post to diysolarforum with pictures of the box and the wiring diagram and ask people to roast it aka provide constructive feedback, and document for future iterations here.

## Upgrades

Since putting the initial box together, I have upgraded the setup to a ~300 watt residential solar panel. Huge difference compared to the old 100W panel. 

![](/images/projects/honda-element-solar-setup-residential-panel.jpg)
