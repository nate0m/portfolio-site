---
title: "Custom Sit-Stand Desk Motor Controller"
thumbnail: "/images/projects/desk-controller-html-image7.png"
category: "electronics"
categoryLabel: "Electronics"
status: "complete"
tags: ["ESP8266", "ESP-12", "H-Bridge", "motor controller", "3D printing", "AutoCAD", "sit-stand desk"]
blurb: "Built a custom motor controller for an up-down desk scored on Facebook Marketplace for $20 without power or driver hardware. Uses an ESP-12, a 24V 15A power supply, a 43A IBT-2 H-bridge, and a custom 3D-printed enclosure with under-desk button controls."
weight: 2
featured: true
featuredWeight: 2
date: 2026-11-01
---

## Background

I bought an up-down desk off of Facebook Marketplace for an obscene deal (~$20) that did not have the power supply or motor driver. Using my engineering background and an AI coding assistant, I set out to build a custom motor controller using an AC-DC power supply, an H-bridge, and a microcontroller.

## Hardware Selection & Architecture

The motor is labeled as a 24V model. Online research showed that it needs around 10A of starting current to get moving. I picked a 24V 15A power supply to leave some overhead, paired with a 43A H-bridge that gave me plenty of overhead for switching motor direction. I already had a buck converter laying around to step 24V down to 5V for the microcontroller. The microcontroller itself is an ESP-12 that was also sitting in a parts bin. It has more than enough processing power for this kind of simple job.

![Subsystem block diagram](/images/projects/desk-controller-html-image3.png "Subsystem block diagram")

I sketched a simple block diagram to map the connections between subsystems. The H-bridge handles high-current power delivery to the motor. The buck converter steps 24V down to 5V to power the microcontroller and encoder. The microcontroller reads button inputs and drives the H-bridge, and the main power supply feeds both the buck converter and the H-bridge.

## Motor Pinout & Wiring

To control the motor on the desk, I had to figure out what each wire did. It turned out to be straightforward. After stripping back the outer jacket and inspecting all six wires, two were noticeably thicker than the rest. Those lower-gauge leads were clearly the motor power lines. The remaining four wires were a red and black pair supplying 5V to the built-in encoder, plus two signal wires carrying the encoder pulses back to the microcontroller.

## Enclosure Design

I designed a custom box in CAD to house the power supply, H-bridge, buck converter, and microcontroller in a single compact footprint.

![CAD model of the main electronics enclosure](/images/projects/desk-controller-html-image6.png "CAD model of the main electronics enclosure")
![Fitting power supply and boards into the 3D printed enclosure](/images/projects/desk-controller-html-image8.png "Fitting power supply and boards into the 3D printed enclosure")

I removed the cooling fan from the power supply because this cheap unit ran its fan constantly at full blast. Someone might object that pulling a cooling fan out of a 15A switching power supply is asking for trouble. For a continuous load, that objection is completely fair. But the desk only moves for ten or fifteen seconds at a time maybe twice a day, so the heatsinks never get warm enough to matter. If this were a 3D printer running for twelve hours straight, I would have kept the fan or swapped in a Noctua one.

## Testing & Calibration

I wired the setup together on the bench and plugged it into the desk for initial testing. Rather than wiring hardware buttons right away, I sent commands directly from my computer to the microcontroller over serial. That let me isolate issues and verify the wiring and firmware logic quickly.

![Bench testing with ESP dev board and power supply](/images/projects/desk-controller-html-image4.png "Bench testing with ESP dev board and power supply")

A couple of issues showed up during startup. First, the motor ramped up too abruptly, so I tuned the startup speed curve in software. Second, I had to dial in current sensing on the H-bridge to reliably detect the mechanical top and bottom limits of travel without binding the frame. 

The encoder is not strictly necessary just to run the desk up and down. But reading encoder pulses lets the microcontroller track position accurately and support preset heights.

## Controls & Final Assembly

Once the firmware was working on an ESP32 development board, I transferred the circuit to an ESP-12 module and soldered everything cleanly to a protoboard. 

For the user interface, I designed a small angled housing in CAD to hold two tactile pushbuttons on a piece of perfboard, sized to tuck neatly underneath the desk edge.

![CAD model of the under-desk buttons](/images/projects/desk-controller-html-image2.png "CAD model of the under-desk buttons")
![3D printed buttons mounted to the desk](/images/projects/desk-controller-html-image5.png "3D printed buttons mounted to the desk")

![ESP-12 module soldered and wired inside the main enclosure](/images/projects/desk-controller-html-image1.png "ESP-12 module soldered and wired inside the main enclosure")
![Final controller box with lid mounted under the desk](/images/projects/desk-controller-html-image7.png "Final controller box with lid mounted under the desk")

I mounted the microcontroller inside the enclosure, bolted the box under the desk, and 3D printed a snap-fit lid to close it up.

## Retrospective

In retrospect, there are a few things I would change on a second revision. A switched receptacle for a standard AC power cord would be much cleaner than hardwiring the mains cable. An external opening or cutout for the ESP-12 micro-USB port would make firmware updates painless without opening the enclosure. And I would make the cable exit cutout in the box smaller to keep things tidy. 

Still, the finished controller is completely functional, works every day, and let me put a twenty-dollar desk to good use.

