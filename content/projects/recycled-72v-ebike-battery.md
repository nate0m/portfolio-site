---
title: "Custom 72V 15Ah Recycled Ebike Battery"
thumbnail: "/images/projects/recycled-72v-ebike-battery-html-image10.png"
category: "ebike"
categoryLabel: "E-Bikes & Batteries"
status: "complete"
tags: ["72V", "21700 cells", "battery building", "spot welding", "JBD BMS"]
blurb: "A custom 72V 15Ah battery pack built from 60 salvaged Murf bike 21700 cells in a 20s3p configuration. Uses a JBD Smart BMS and custom 3D-printed PETG cell holders."
weight: 1
---

It all started with the battery. The voltage and output amperage decide the other parts of the bike, so I had to figure out the battery configuration first. 

At first I thought about using the stock 52V 20Ah battery that comes with a Murf bike, maybe adding a bottle tube 52V 20Ah battery and running them both in parallel or series. But I ended up deciding to make a custom 72V 15Ah battery with a total of 60 21700 cells. The main reason was the high voltage allowing for a much higher motor RPM.

### Harvesting and Testing

Corbin gave me a bunch of dead Murf batteries and assured me the individual cells inside were still good. Tearing down the old batteries and harvesting the cells was not very easy at first, but eventually I got the hang of it. There is a bit of a technique to it. You can use small diagonal cutters to lift and pry off the nickel strip from each string of cells.

Even though I was told they were good, I bought a load tester that could test the capacity of eight cells at a time. See my post on the [cell capacity tester](/portfolio-site/projects/cell-capacity-tester) if you are interested in that process.

![](/images/projects/recycled-72v-ebike-battery-html-image3.png)

### The 20s3p Plan

I had a plan for the battery layout. The sketch below is what it boiled down to for a 20s3p configuration.

![](/images/projects/recycled-72v-ebike-battery-html-image2.png)

If you have built batteries before, you might notice a poor design decision right away. The problem is that the main positive and the main negative are right next to each other. I actually noticed this before building the battery, but I only saw it as making everything easier to wire. I did not see the downsides. 

The downsides are twofold. One, it makes it incredibly easy to shock yourself while working on the battery since it is high voltage DC and you can bridge the mains with your finger. Two, the close proximity leads to a much higher possibility of a short. Most ebike batteries are designed so the main conductors are on opposite ends of the pack. 

### Assembly and Spot Welding

I used interlocking cell holders to build the 4p configuration I needed. I had to glue a 10s and a 5s holder together to get the right shape. If I were to do this again I would just 3D print something specific to my cell configuration out of PETG. 

![](/images/projects/recycled-72v-ebike-battery-html-image7.png)
![](/images/projects/recycled-72v-ebike-battery-html-image1.png)

The choice of nickel strip was also not the best. I ended up having to cut the strip into a bunch of 2x3 pieces for the different 3p to 3p connections. I actually started spot welding the nickel strips exactly as they were in my diagram, before quickly realizing that if I did the same for the other side it would short the entire battery and probably start a fire in Murf's shop. Glad I caught that.

![](/images/projects/recycled-72v-ebike-battery-html-image8.png)

Once the spot welding was complete it was time to start on the BMS. As you can see above, I spot welded little tabs for the balance wires to be soldered to. I followed the wiring diagram from the product page to solder all of the balance leads to their respective strings.

![](/images/projects/recycled-72v-ebike-battery-html-image9.png)

There were a few more trials and tribulations before we ended up with a finished battery. I will just list them off here:
* A custom spacer had to be designed to distribute the load on the bottom of the battery.
* The main positive and negative wires had to be resoldered a couple times to reposition them or add heat shrink because the space was very tight.
* Everything had to be connected to the discharge and charge fuses.
* The UART port on the BMS had to be removed to make room for the main negative wire.
* Wires were run to the charging port.

### BMS Troubleshooting

The JBD Smart BMS was confusing to configure at first. We ran into a few annoying issues right away. First, it would only charge at 0.5A, which turned out to just be a glitch that fixed itself after power cycling the BMS. 

The main problem was the BMS refusing to charge past 3.6V per cell. I thought my wiring was bad. Turns out the BMS shipped set to Lithium Iron Phosphate (LFP) chemistry instead of Li-ion. Flipping that setting in the app completely fixed the charging cutoff. We also had issues with random charging drops, which were resolved after realizing the default max capacity was set to 10Ah instead of 15Ah.

For a full breakdown of how to solve these issues, disable the discharge switch lock, and configure the parameters correctly, see my dedicated post on [JBD BMS Configuration](/portfolio-site/projects/jbd-bms-configuration).

![](/images/projects/recycled-72v-ebike-battery-html-image10.png)
![](/images/projects/recycled-72v-ebike-battery-html-image6.png)

### Conclusion

I still need to get the new controller put in and get some miles in with the 72V pack to see how it performs on the Murf bike. 

Looking back at this build, there are a few things I will do better next time. I will definitely keep the main positive and negative terminals separated on opposite ends of the pack. I will also group the cells by internal resistance, not just capacity. And I will custom 3D print the cell holders from the start instead of modifying stock ones.

![](/images/projects/recycled-72v-ebike-battery-html-image5.png)
![](/images/projects/recycled-72v-ebike-battery-html-image4.png)
