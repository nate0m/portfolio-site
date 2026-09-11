---
title: "DIY Brushless ESC & Motor Control Lab"
thumbnail: "/images/projects/bldc-motor-lab-html-image5.png"
category: "electronics"
categoryLabel: "Electronics"
status: "ongoing"
tags: ["ESC", "BLDC", "microcontroller", "mosfets", "sensorless", "lab work", "oscilloscope"]
blurb: "An exploration into building a custom sensorless brushless motor controller (ESC) from scratch using an Arduino, discrete half-bridges, and back-EMF sensing."
weight: 1
date: 2026-01-01
---

## Introduction

I have been working on building a custom sensorless brushless motor controller (ESC) using an Arduino, discrete half-bridges, and back-EMF sensing via comparators. This project is a deep dive into the electronics and logic required to spin a brushless DC (BLDC) motor from scratch. 

Before trying to design a custom PCB, I had to spend a lot of time in the lab experimenting with basic half-bridge configurations to understand exactly how gate voltage, source-drain relationships, and N-channel MOSFETs interact. Here is a log of the research, the lab experiments, and the overall design strategy for the ESC.

## High Level Design

The core of a BLDC motor controller is the muscle: six MOSFETs arranged in three half-bridges.

![](/images/projects/diy-esc-html-image9.png) [source](https://proteshea.com/brushless-dc-motor-control-with-esc-and-arduino-uno/)

There are six possible combinations of current flow through the inductors of the motor. For example: FET1 and FET6 ON (A and C energized), FET1 and FET5 ON (A and B energized), FET2 and FET4 ON (B and A energized), etc. [source](https://proteshea.com/brushless-dc-motor-control-with-esc-and-arduino-uno/)

The hard part is figuring out how to determine the speed of the rotor so we can sequence the switching of these FETs correctly. Since I am building a sensorless ESC, I can't rely on physical hall effect sensors inside the motor. Instead, the microcontroller has to measure the back-EMF (electromotive force). This is a voltage induced on the third un-energized wire caused by the magnetic field of the permanent magnets spinning past it. [source](https://proteshea.com/brushless-dc-motor-control-with-esc-and-arduino-uno/)

By measuring that back-EMF, we can determine the exact position of the rotor.

![](/images/projects/diy-esc-html-image6.png)

The back-EMF of each phase follows the exact same pattern as physical hall effect sensors, just with a 30-degree phase shift. It looks like the back-EMF is simply the voltage across the inductor caused by the changing magnetic flux. We can read this using hardware comparators. When the back-EMF crosses the zero-point (going from negative to positive, or positive to negative), the comparator transitions its output. I originally thought we could just use the Arduino's built-in comparators to save on hardware, pulling the outputs up to 5V and reading them as digital signals.

To control the actual speed of the motor, we feed a PWM signal to the MOSFET gates.

![](/images/projects/diy-esc-html-image8.png) [source](https://proteshea.com/brushless-dc-motor-control-with-esc-and-arduino-uno/)

## The Motor Control Lab

Before putting all this theory into a final design, I had to define a Minimum Viable Product (MVP) and get into the lab. The goals for the MVP were:
* Speed control via PWM
* Ability to start from a standstill
* Sensorless control via back-EMF reading
* ESP32 or Arduino for the brains

My roadmap was to first look at the datasheets to determine the relationship between gate voltage and current through the FETs, then verify it in the lab. After that, I wanted to observe the back-EMF on an oscilloscope, create a finite state machine (FSM) in code to initiate rotation, and eventually test analog vs digital signals at the gates.


I quickly ran into a major problem when trying to configure the N-type MOSFETs for the high side of the half-bridge. 


The problem is that when you open the gate of the top N-channel MOSFET, the voltage from the source to the drain immediately becomes higher than the source-to-gate voltage. This instantly closes the gate. You basically need a dedicated gate driver chip with a bootstrap capacitor to push the gate voltage higher than the source voltage, otherwise the high-side FET will never fully turn on.

I set up an experiment to test opening and closing the MOSFET based on different gate voltages by recording V_ab. 

![](/images/projects/bldc-motor-lab-html-image5.png)

**Observation:** With a proper half-bridge setup, a Vcc of 12V, and a gate voltage of ~3.3V, we only get about ~5.3V output from the MOSFET. But with Vcc at 4V and the gate at ~7V (meaning Vgs = ~2V), we get a full 4V output. 

I also had to do some math to calculate the proper gate resistors to prevent ringing and protect the microcontroller pins. We also have to consider the consequences of gate-to-source pull-down resistors (around 4k ohms).

### Bootstrapping the High Side

So how do we actually fix the issue with the high-side N-channel MOSFET closing itself? We use a bootstrap circuit. 

![](/images/projects/bldc-motor-lab-html-image4.png)

The concept relies on a diode and a capacitor. When the low-side MOSFET is on, the source of the high-side MOSFET gets pulled to ground, which allows the bootstrap capacitor to charge up. Then, when it is time to turn the high-side MOSFET on, that capacitor acts like a tiny floating power supply. It dumps its stored charge straight into the gate, pushing the gate voltage well above the source voltage. This keeps the high-side FET fully open and stops it from choking out the voltage to the motor.

## Schematics and Motor Details

Here are some of the reference schematics and motor specs I pulled together while figuring out the hardware design. The motor I am testing with has 12 poles. 

![](/images/projects/diy-esc-html-image5.png)
![](/images/projects/diy-esc-html-image3.png)
![](/images/projects/diy-esc-html-image2.png)

## Conclusion and Next Steps

The next major step is to redesign the BLDC controller based on these lab findings, specifically integrating proper gate drivers to handle the high-side N-channel MOSFETs. I plan to build the revised circuit on a protoboard to verify the comparator logic for the back-EMF sensing. If I can successfully spin the motor and read the BEMF to commutate it, the final step will be designing a custom PCB and getting it manufactured through PCBWay or JLCPCB.

---

### Reference Links
Here is a dump of the articles, videos, and tutorials I used to piece this all together:
* [Instructables: Make Your Own ESC](https://www.instructables.com/Make-Your-Own-ESC/)
* [Instructables: Made Your Own ESC Brushless Motor STM32](https://www.instructables.com/Made-Your-Own-ESC-Brusless-Motor-STM32f030/)
* [Proteshea: Brushless DC Motor Control](https://proteshea.com/brushless-dc-motor-control-with-esc-and-arduino-uno/)
* [ElectraSchematics: Brushless ESC Schematic](https://electraschematics.com/brushless-esc-schematic.html)
* [AutoCtrls: ESC Schematic](https://autoctrls.com/esc-schematic-for-brushless-motor/)
* [Electronoobs Tutorial](https://electronoobs.com/eng_circuitos_tut19_sch2.php)
* [MathWorks: BLDC Motor Control](https://www.mathworks.com/discovery/bldc-motor-control.html)
* [Digikey: Controlling Sensorless BLDC Motors](https://www.digikey.com/en/articles/controlling-sensorless-bldc-motors-via-back-emf)
* [Simple Circuit: Arduino Sensorless BLDC](https://simple-circuit.com/arduino-sensorless-bldc-motor-controller-esc/)
* YouTube References: [1](https://youtu.be/KdF9DmbGg6k), [2](https://www.youtube.com/watch?v=C4Kq0NTGSwk), [3](https://www.youtube.com/watch?v=wkSrmPBDRys), [4](https://www.youtube.com/watch?v=8swJ_Bnsgl4), [5](https://www.youtube.com/watch?v=o4_NeqlJgOs), [6](https://www.youtube.com/watch?v=lyfx8CL7AkI), [7](https://www.youtube.com/watch?v=AwRJsze_9m4), [8](https://www.youtube.com/watch?v=DXyTHhUjxjk), [9](https://www.youtube.com/watch?v=p-UCsIWrTpc), [10](https://www.youtube.com/watch?v=56p3_aORiJ0), [11](https://www.youtube.com/watch?v=elBdn90jwiU)
