---
title: "ECE 118: Autonomous Robot Project"
category: "robotics"
categoryLabel: "Robotics"
thumbnail: "/images/projects/ece-118-html-image26.png"
status: "complete"
tags: ["autonomous robot", "state machine", "beacon detector", "Li-ion battery", "laser cutting"]
blurb: "A fully autonomous robot built in five weeks for ECE 118 at UCSC. Navigates a structured field, avoids obstacles, locates an opponent's IR beacon, and launches ping-pong balls. Three-tier plywood chassis, custom 3s2p Li-ion battery, a 27-million-gain analog beacon detector, and hierarchical state machine firmware."
weight: 1
featured: true
featuredWeight: 1
---

# ECE 118

Sluggers of the Lost Project

Team #29

Nathan Milton, Natalie Leforge, Nat Micheal

## Introduction

The goal of ECE-118's "Sluggers of the Lost Goal" project was to design, build, and program an autonomous robot capable of navigating a structured field, avoiding obstacles, locating an opponent beacon, and launching ping-pong balls to score points. Over five weeks, we developed a platform built around three core subsystems: a modular three-tier chassis housing the drivetrain, electronics, and flywheel launcher; a power and sensing system centered on a custom IR beacon detector, tape-following sensors, and bump detection; and a hierarchical state machine firmware architecture handling navigation, collision recovery, target acquisition, and firing. This report documents the design decisions, engineering tradeoffs, and lessons learned across each of these subsystems.

## Final Bill of Materials (BOM)

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Item | Quantity | Notes | Cost Per | Total ($) | Link | BELS has? |
| Drive Motors | 2 | dc motors | 15 | 30 |  | TRUE |
| H-Bridge | 1 | have 2 motor outputs | 3 | 3 |  | TRUE |
| BLDC Motors & ESCs | 2 | already had these | 18 | 36 | [https://a.co/d/04DfasfQ](https://www.google.com/url?q=https://a.co/d/04DfasfQ&sa=D&source=editors&ust=1788548214397750&usg=AOvVaw07gVwvunVIwbq2KwRYl85n) | FALSE |
| Rollerblade Wheel | 2 | drive wheels | 2 | 4 |  | TRUE |
| Roller Skeg | 2 |  | 1 | 2 | [https://a.co/d/049BqWi2](https://www.google.com/url?q=https://a.co/d/049BqWi2&sa=D&source=editors&ust=1788548214399926&usg=AOvVaw3hU9QvgI1UuXuqLrDbbGWj) | FALSE |
| Lego Tires | 2 | used for flywheel | 0.1 | 0.2 | [link](https://www.google.com/url?q=https://www.bricklink.com/v2/catalog/catalogitem.page?P%3D15413%26idColor%3D11%23T%3DS%26C%3D11%26O%3D%257B%2522color%2522:11,%2522iconly%2522:0%257D&sa=D&source=editors&ust=1788548214400889&usg=AOvVaw11OQyGcCbDSYJqaO2qRH2Q) | FALSE |
| Servo Motor | 1 | used for loading | 4 | 4 | [https://a.co/d/0d7fk6Tg](https://www.google.com/url?q=https://a.co/d/0d7fk6Tg&sa=D&source=editors&ust=1788548214401773&usg=AOvVaw2X-uhTm2ZIUr0csIsdFe0j) | TRUE |
| Limit Switch | 2 | bumper buttons | 1 | 2 | [https://a.co/d/0hqMnJvW](https://www.google.com/url?q=https://a.co/d/0hqMnJvW&sa=D&source=editors&ust=1788548214402639&usg=AOvVaw1XZeO7J1CdOqrZ3CJ5bl7Q) | TRUE |
| Tape Sensors | 4 |  | 1 | 4 |  | TRUE |
| Battery | 1 | custom 3s2p Li-ion | 0 | 0 |  | FALSE |
| Beacon Detector | 1 | custom | 0 | 0 |  | FALSE |
| Ply Wood Sheet | 4 |  | 5 | 20 |  | TRUE |
|  |  |  |  |  |  |  |
|  |  |  | sum | 105.2 |  |  |

## Mechanical Design

![](/images/projects/ece-118-html-image14.png)

### Design Philosophy

The design is built up by three separate layers, the main chassis, the middle, and the top. The main chassis is where all of the electronics are mounted excluding the ping pong ball launcher. The middle is where the ping pong ball launcher is mounted. The top is where the beacon and the top portion of the funnel is mounted. The funnel exists between the middle and top layers. There are also walls that connect the middle and top layers on all four sides. The front wall has an opening for the barrel of the ping pong ball launcher and the two sides have openings for placing the battery, and engaging the flywheel when necessary. Also there are two 3d printed struts that connect the main chassis to the middle.

As outlined in the electronics section, the guiding principle of our design is Occam's razor. Abiding by this principle meant seeking the simplest solution whenever possible. We utilized a modular, layered design that friction-fits together. This modularity allowed us to rapidly build a test platform while retaining the ability to add or remove components, such as removing the launcher during initial testing.

### Main Chassis

The main chassis is the foundation of the bot and serves as the general connecting point for all other things. It is the bottom level of the bot.

![](/images/projects/ece-118-html-image32.png)

### Motor Mount

Each motor mount is made up of three adjoining walls. The motor is mounted to the face of the exterior wall and is also zip-tied to the chassis for more load bearing capacity.

One of the challenges that we faced during the latter half of the project was that the wood glue for our motor mounts started to fail causing the bottom and middle plates to separate. To solve this we added zip-ties to mount the motor to the bottom plate.

![](/images/projects/ece-118-html-image33.png)![](/images/projects/ece-118-html-image23.png)

### Bumpers & Tape Sensors

The mounting of the tape sensors was done by laser cutting two holes for the led and transistor of the tape sensor to friction fit into then hot glueing them down for stability. The bumpers are mounted using metric bolts and nuts along with a custom 3d printed spacer to allow for minimal friction of the bumpers. The bumper switches and is mounted through the chassis using metric bolts and nuts.

We faced a few challenges with the bumpers as we progressed through the project. The first challenge was getting the bumper switch to activate when any part of the bumper was pressed. This was fixed by moving the bumper's point of contact with the switch to be in the middle of the bumper, and I thank one of my classmates in the fab lab for suggesting that. The next challenge we faced with the bumpers was with them getting stuck while actuating. This was fixed by adding the custom 3d printed spacers. The last challenge we faced with the bumpers was pretty late into the project when we started testing on the big field. We found that our bot could get stuck because the bumper did not stretch out in front of the wheels. But since the bumper design was modular and laser cut it was fairly easy to extend the bumper and re-cut them.

![](/images/projects/ece-118-html-image10.png)![](/images/projects/ece-118-html-image19.png)![](/images/projects/ece-118-html-image22.png)

### Ping Pong Ball Shooter

The ping-pong ball shooter uses a flywheel mechanism and a servo motor to advance balls into the launcher. Constructed of three main pieces, the first is laser-cut for flywheel mounting. The second is the barrel through which the balls are launched, and the third is the downward pipe for the ball gravity-feed. The first piece connects to the second via bolts into heat-set inserts; the second and third pieces are notched for alignment and secured with hot glue. The third piece includes a wall indent to allow the next ball to rest via gravity before being advanced by the servo arm.

![](/images/projects/ece-118-html-image36.png)![](/images/projects/ece-118-html-image2.png)

#### Early prototype

![](/images/projects/ece-118-html-image9.png)![](/images/projects/ece-118-html-image31.png)

#### Ping Pong Ball Launcher Mount

The ping pong ball launcher is mounted to the second layer using two laser cut pieces on either side of the flywheel mounting plate. Mounting this way allows us to change the angle of the launcher by cutting a new piece at a different angle.

![](/images/projects/ece-118-html-image21.png)![](/images/projects/ece-118-html-image16.png)

### Funnel

The funnel is constructed using a 3d printed connector to the back of the barrel along with cardboard to add more capacity.

![](/images/projects/ece-118-html-image35.png)![](/images/projects/ece-118-html-image25.png)

## Electronics

### Electronics Design Philosophy

The general design philosophy followed Occam's razor, assuming the simplest solution is often the best. Guided by this, we minimized sensor count, opting for tape sensors, bumper switches, and a beacon detector. For the beacon detector, we chose a digital output for simplicity over an analog signal. Whenever possible, we used hardware solutions to avoid software complexity; for example, we used an 8V regulator between the power distribution board and the H-bridge to maintain constant motor voltage as long as the battery stayed above 9.6V. Because standard LiFe batteries sagged below this threshold quickly, we constructed a custom 3s2p Li-ion battery with a dedicated BMS to maintain voltage. To reduce complexity, we used only two drive motors at 100% duty cycle, finding that PWM was unnecessary for sufficient control. We also prioritized clean wiring; sensors are soldered directly with heat-shrink, and wires are terminated with custom female connectors for the H-bridge and regulators. Color-coding was implemented after early testing revealed that messy wiring caused blown fuses.

![](/images/projects/ece-118-html-image26.png)

### Power and Communications

### Power Block Diagram

![](/images/projects/ece-118-html-image18.png)

### Communication Block Diagram

![](/images/projects/ece-118-html-image1.png)

### Voltage Regulator Board / Schematic

It was extremely important to have a clean voltage regulator board with easily accessible clean electrical connections to 5v and 3.3v. By wiring the voltage regulator according to the datasheet with appropriate capacitor values and wiring the outputs of such voltage regulators to rails with male pins soldered on we are able to accomplish the aforementioned goals. Both the 5v and 3.3v rails have male pins soldered to the rails and are used in conjunction with custom connectors to easily clean electrical connections. The 8v regulator is only for the H-bridge so it is terminated to xt60.

![](/images/projects/ece-118-html-image12.png)![](/images/projects/ece-118-html-image8.png)

![](/images/projects/ece-118-html-image6.png)

### Custom Li-ion Battery

We found that the provided LiFe battery suffered from significant voltage sag, which would brown out the ESCs or the Uno when the flywheel motors activated. To resolve this, we built a custom battery using Li-ion cells and a 3s BMS. The 3s2p configuration with a 40A BMS provides a significant overhead, as the maximum draw is approximately 20A. The cells are spot-welded with nickel strips and soldered to the BMS. This 12V battery is robust and compatible with various future projects.

![](/images/projects/ece-118-html-image3.png)![](/images/projects/ece-118-html-image17.png)![](/images/projects/ece-118-html-image20.png)

### Sensors

The wiring of the sensors can generally be seen in the power and signal block diagrams, but there are a few things to note here. The power and signal wires of all sensors (tape & bump) are soldered on, the power wires for the tape sensors are terminated to custom female connectors. The bump sensors are wired with the ground pin to ground and the other pin to a digital input of the Uno.

![](/images/projects/ece-118-html-image4.png)

### Beacon Detector Board / Schematic

Tuning the beacon detector required several iterations. We initially designed it to detect a 2kHz signal with a 150Hz passband, attenuating 1.5kHz and 2.5kHz signals. However, since the competition beacons were often tuned closer to 2.1kHz, our original design failed to detect them properly. We adjusted the design from three filter stages down to two, widening the passband to 1.95-2.05 kHz. This proved sufficient for our needs.

![](/images/projects/ece-118-html-image28.png)

Note: the beacon detector has an on board 3.3v voltage regulator meaning it can be plugged directly into the Uno power distribution board.

#### Block Diagram

![](/images/projects/ece-118-html-image13.png)

#### Virtual Ground

![](/images/projects/ece-118-html-image34.png)

#### IR Transistor Stage

![](/images/projects/ece-118-html-image7.png)

#### AC Coupled non-inverting Amplifying Stage

An AC coupled non-inverting amplifier was used to eliminate any DC signals from entering the rest of the circuit. We used a total of four of these gain stages, three with a gain of 83 and one with a gain of 48 making the total gain of the combined stages ~27 million.

![](/images/projects/ece-118-html-image29.png)

#### Filter Stage

![](/images/projects/ece-118-html-image15.png)

#### Analog to Digital Output Stage

![](/images/projects/ece-118-html-image30.png)

![](/images/projects/ece-118-html-image5.png)

![](/images/projects/ece-118-html-image24.png)

## Software Architecture

![](/images/projects/ece-118-html-image11.png)

The firmware is built around a hierarchical, event-driven state machine. The top-level controller, the FollowTape FSM, handles everything from navigating the field and avoiding obstacles to sweeping for the opponent's beacon. 

Instead of moving blindly, it waits for a two-second startup window to let the sensors stabilize, then spins to figure out which way the tape is going. Once it finds the tape, it follows the perimeter and tracks how many corners it has passed. After three corners, it stops and begins a 360-degree sweep to locate the enemy beacon. 

If it hits something along the way, the bumper recovery states take over. It reverses, turns away from the obstacle based on its current direction of travel, and drives straight to clear the area before looking for the tape again. When the beacon is found, the robot records the time of the first and second edges of the IR signal to calculate the center, turns back, and fine-tunes its alignment before firing the ping-pong balls.

![](/images/projects/ece-118-html-image27.png)

Underneath the main FSM is the SubTape state machine, which handles the micro-adjustments for line following. It keeps the robot centered over the tape. If it drifts too far left or right, it triggers small wobble corrections. If it loses the tape completely, it searches in the opposite direction of its last known drift. This keeps the robot on track without needing constant intervention from the top-level logic.

## Programming & Electrical Challenges

Challenge 1: Physical Drift and Bumper Recovery

Motor tolerance variations and surface friction caused the robot to drift during perimeter navigation. When a bumper event triggered, the recovery states couldn't account for residual momentum, causing the robot to overshoot and lose orientation.

Resolution: Recovery timing was made dynamic based on tracking direction rather than hardcoded durations, which stabilized the robot's path after collisions.

Challenge 2: Angular Oscillation During Beacon Alignment

When transitioning from navigation to target acquisition, the drivetrain's momentum caused the robot to overcorrect on beacon detection, producing a hunting oscillation and consistently missing shots.

Resolution: A dedicated fine-tune state was added between beacon detection and launcher activation. It enforces a 50 ms settling window with a small damping routine, allowing the chassis to fully stop and confirm alignment before the flywheels spin up.

Challenge 3: Inaccurate Tape, Beacon, and Bumper Event Triggers

Asynchronous inputs from the tape sensors, beacon detector, and bumpers frequently generated duplicate, rapid, or false event triggers. This was caused by mechanical switch bouncing on the bumpers, optical noise on the sensors, and initialization events firing before the system fully stabilized.

Resolution: Debouncing was implemented across all sensor inputs using non-blocking delay timers. Also, the INIT state was configured to explicitly ignore all peripheral sensor events during a baseline 2000ms startup window, ensuring the robot only responds to true environmental transitions once calibration is complete.

Challenge 4: Fuse Failures from Motor Inrush Current

During early testing, the system repeatedly blew fuses on the power distribution board when executing code that activated the drive motors or flywheel launchers simultaneously. This occurred because DC motors draw a massive spike in current (inrush current) at the exact moment they switch from a dead stop to full power, overloading the circuit's protection.

Resolution: To mitigate this current spike, a short, non-blocking delay was implemented between the startup sequence of motor A and B across all motor control functions. This software-defined stagger safely distributes the electrical load, keeping the peak current draw well below the fuse threshold without impacting operational performance

## Conclusion

Building a fully autonomous robot from scratch in five weeks demanded constant iteration across mechanical, electrical, and software domains simultaneously. Our team successfully deployed a highly reliable system capable of target acquisition, perimeter navigation, and autonomous payload launching. Thanks to our custom multi-stage analog beacon detector paired with a custom-machined aluminum shielding cone, the robot could repeatedly locate the enemy beacon within a tight standard deviation of just 3 to 5 degrees. While the robot fell short during the initial tape-finding phase immediately following the boot-up beacon scan, its core subsystems were resilient enough that we successfully achieved full min-spec functionality two days before the final deadline.

The most significant challenges came from high-current voltage sags, repeatedly blown fuses, mechanical bumper jamming, and the need to repeatedly iterate on the launcher’s trajectory angle. Resolving these intertwined issues taught us the vital importance of rapid prototyping for mechanical geometries, the necessity of robust over-engineering for electrical power delivery, and how critical it is to understand exactly how software instructions translate into physical electrical loads.

In hindsight, we would have prioritized much earlier physical prototyping of the flywheel launcher mechanism and enforced a cleaner, more modular hierarchy in our state machine logic before code complexity scaled up. Beyond the technical skills, this project reinforced the absolute necessity of aggressive schedule management, clear task ownership, and early integration testing to ensure hardware and software components synchronized properly under a tight deadline. The experience of building a machine that operates entirely on its own — and watching it either succeed or fail in real time — was both an incredibly rewarding and profoundly relieving experience; seeing the robot autonomously execute its tasks validated weeks of intensive troubleshooting, leaving us with a deep appreciation for the iterative process of engineering and a lasting enjoyment for hands-on systems integration.
