---
title: "Future Motion Makes Repairs Hard"
category: "repair"
categoryLabel: "Right-to-Repair"
status: "complete"
tags: ["Onewheel", "BMS", "OWIE chip", "right to repair", "RS485"]
blurb: "A Onewheel that wouldn't turn on after sitting in a garage for months. The BMS was dead, an easy fix on paper. Future Motion's firmware locks replacement BMS units out with an 'incompatible hardware' error even from the same model board. The fix was an open-source OWIE chip that spoofs the RS485 handshake."
weight: 1
date: 2026-04-01
---

It should have been easy to fix this board. But because of FM's (Future Motion’s) adversarial attitude towards right to repair (RTR) it was harder than it should have been.

In this world of PEV this was a text book case, cut and dry. The fix was obvious and should have been easy.

Customer states: board will not turn on after sitting in the garage for many, many months.

As a technician, my first thought goes to the battery voltage being below the battery management system’s (BMS’) threshold. But the battery was actually at a decent voltage, enough for the board to turn on (if it could). Presumably the customer had had the same thought and plugged the board in which charged the battery. So at some point the battery probably did go below the BMS’ low voltage threshold from parasitic capacitance. However, even after charging the battery back up into its operating voltage range the board will not turn on. So it’s not the battery.

After probing the input and output of the BMS it was obvious that the BMS was shot. It had no output to the controller. My guess was that if the board voltage gets low enough, it bricks the BMS and if you send it in for repair to FM (Future Motion) they either revive it by reflashing the firmware or they just replace the BMS.

Ok so now that we know it is the BMS, how do we fix it? Simple, we replace the BMS. But it’s not that simple because this is when FM makes it harder than it needs to be.

Let's continue as if this were a normal repair and get a working BMS from another board of the same model. When we plug this BMS into this board it will now turn on, but it won’t work. It will have an error code. If you decode the flashing light on the power button it will be an error code 16 which means ‘incompatible hardware’. How can it be incompatible hardware if it is from the same model of board. Well lets give FM the benefit of the doubt and say that even though these two BMS’ are from the same model board they might have been manufactured at different times, and might have slightly different hardware making them incompatible. That would make sense. Lets explore this by going onto FM’s website to look for more information about BMS compatibility and see if we can buy the correct model of BMS for this board.

[https://onewheel.com/collections/xr-parts](https://onewheel.com/collections/xr-parts)

![](/images/projects/fm-parts.png)

They do offer some basic extension parts now—like cable harnesses, charge ports, and power buttons—but absolutely no core circuit components. There is zero information about BMS compatibility and no BMS units for sale on their website. Now here’s the kicker: this BMS functionally works with this battery and this controller. FM just blocks it out for some reason. So that’s it, there is no official way to fix this board.

A new challenger appears: the open source & onewheel community.

A group of savvy electric engineers and hobbies have reverse engineered the communication protocol between the BMS and the controller and have found that it is [RS485](https://www.google.com/url?q=https://en.wikipedia.org/wiki/RS-485&sa=D&source=editors&ust=1788551300503848&usg=AOvVaw1s5lFvqM0977mSgiqcrlg8) aka an industry standard serial protocol. The most important thing that this engineer found is that communication is unidirectional and only flows from BMS to the controller. So they were able to use a microcontroller (ESP32) to intercept the messages the BMS sends to the controller, store that data, and send whatever message it wants. This allows the bypassing of the BMS 'incompatibility’’, display of individual cell voltages, more accurate state of charge, and current data. This is called an [OWIE](https://www.google.com/url?q=https://github.com/lolwheel/Owie/tree/main&sa=D&source=editors&ust=1788551300504422&usg=AOvVaw0wMS74V2VaHxmyOJHIZqb1) chip.

Now why do I need to install this chip if this BMS works with my board. I’ve thought about this and I would love to talk to someone at FM about their decisions but from my perspective and many other members of the onewheel enthusiast they do this just to have control over the repair of their products taking it away from the consumer.
